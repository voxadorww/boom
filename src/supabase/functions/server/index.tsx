import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";
import { getNextLesson } from "./lessons-data.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Create Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

// Health check endpoint
app.get("/make-server-91c142be/health", (c) => {
  return c.json({ status: "ok" });
});

// Sign up endpoint
app.post("/make-server-91c142be/signup", async (c) => {
  try {
    const { email, password, name } = await c.req.json();
    
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.log(`Signup error: ${error.message}`);
      return c.json({ error: error.message }, 400);
    }

    // Create initial profile
    await kv.set(`profile:${data.user.id}`, {
      userId: data.user.id,
      name,
      email,
      level: null,
      currentStage: 1,
      lessonsCompleted: 0,
      overallAccuracy: 0,
      createdAt: new Date().toISOString()
    });

    return c.json({ user: data.user });
  } catch (error) {
    console.log(`Signup error: ${error}`);
    return c.json({ error: 'Failed to sign up' }, 500);
  }
});

// Onboard endpoint
app.post("/make-server-91c142be/onboard", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user || error) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { level } = await c.req.json();
    
    const profile = await kv.get(`profile:${user.id}`);
    if (profile) {
      profile.level = level;
      await kv.set(`profile:${user.id}`, profile);
    }

    // Initialize progress
    await kv.set(`progress:${user.id}`, {
      wordsLearned: [],
      mistakes: [],
      completedLessons: []
    });

    return c.json({ success: true });
  } catch (error) {
    console.log(`Onboard error: ${error}`);
    return c.json({ error: 'Failed to onboard' }, 500);
  }
});

// Get profile endpoint
app.get("/make-server-91c142be/profile", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user || error) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const profile = await kv.get(`profile:${user.id}`);
    const progress = await kv.get(`progress:${user.id}`);

    return c.json({ profile, progress });
  } catch (error) {
    console.log(`Get profile error: ${error}`);
    return c.json({ error: 'Failed to get profile' }, 500);
  }
});

// Generate lesson endpoint (now using dictionary-based lessons)
app.post("/make-server-91c142be/generate-lesson", async (c) => {
  try {
    console.log('Generate lesson endpoint called');
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user || error) {
      console.log('Authorization error:', error);
      return c.json({ error: 'Unauthorized' }, 401);
    }

    console.log(`Getting next lesson for user: ${user.id}`);
    const profile = await kv.get(`profile:${user.id}`);
    const progress = await kv.get(`progress:${user.id}`);

    if (!profile || !progress) {
      console.log('Profile or progress not found');
      return c.json({ error: 'Profile not found' }, 404);
    }

    const stage = profile.currentStage;
    const completedLessons = progress.completedLessons || [];
    
    // Get next lesson from dictionary
    const lesson = getNextLesson(stage, completedLessons);
    
    if (!lesson) {
      console.log(`No more lessons available for stage ${stage}`);
      return c.json({ error: 'No more lessons available for this stage. Complete quizzes with 75%+ to advance!' }, 404);
    }
    
    console.log(`Found lesson: ${lesson.title}`);
    
    // Save lesson
    const lessonId = `lesson:${user.id}:${Date.now()}`;
    await kv.set(lessonId, {
      userId: user.id,
      stage,
      lessonDataId: lesson.id,
      content: lesson,
      createdAt: new Date().toISOString()
    });

    console.log(`Lesson ${lesson.id} retrieved and saved successfully`);
    
    return c.json({ lessonId, lesson });
  } catch (error) {
    console.log(`Generate lesson error: ${error}`);
    console.log(`Error stack: ${error instanceof Error ? error.stack : 'No stack trace'}`);
    return c.json({ error: `Failed to get lesson: ${error instanceof Error ? error.message : String(error)}` }, 500);
  }
});

// Submit quiz endpoint
app.post("/make-server-91c142be/submit-quiz", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user || error) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { lessonId, answers } = await c.req.json();
    
    const lesson = await kv.get(lessonId);
    if (!lesson) {
      return c.json({ error: 'Lesson not found' }, 404);
    }

    // Calculate score
    const quiz = lesson.content.quiz;
    let correct = 0;
    const results = [];

    for (let i = 0; i < quiz.length; i++) {
      const isCorrect = answers[i] === quiz[i].correct;
      if (isCorrect) correct++;
      results.push({
        question: quiz[i].question,
        userAnswer: answers[i],
        correctAnswer: quiz[i].correct,
        isCorrect
      });
    }

    const score = (correct / quiz.length) * 100;

    // Save quiz result
    const resultId = `quiz_result:${user.id}:${Date.now()}`;
    await kv.set(resultId, {
      userId: user.id,
      lessonId,
      score,
      answers,
      results,
      timestamp: new Date().toISOString()
    });

    // Update profile and progress
    const profile = await kv.get(`profile:${user.id}`);
    const progress = await kv.get(`progress:${user.id}`);

    if (profile && progress) {
      profile.lessonsCompleted += 1;
      
      // Calculate new overall accuracy
      const totalAccuracy = profile.overallAccuracy * (profile.lessonsCompleted - 1);
      profile.overallAccuracy = (totalAccuracy + score) / profile.lessonsCompleted;

      // Update stage if score is high enough and completed all 10 lessons in current stage
      const lessonDataId = lesson.lessonDataId || lesson.content.id;
      if (!progress.completedLessons.includes(lessonDataId)) {
        progress.completedLessons.push(lessonDataId);
      }
      
      // Check if user has completed 10 lessons (advance to next stage)
      const stageLessonsCompleted = progress.completedLessons.filter((id: string) => 
        id.startsWith(`vocab-`) || id.startsWith(`phrase-`) || id.startsWith(`sentence-`) || 
        id.startsWith(`dialogue-`) || id.startsWith(`topic-`)
      ).length;
      
      if (score >= 75 && stageLessonsCompleted >= 10 && profile.currentStage < 5) {
        profile.currentStage += 1;
        console.log(`User advanced to stage ${profile.currentStage}`);
      }

      await kv.set(`profile:${user.id}`, profile);

      // Update progress - add words learned
      if (lesson.content.content) {
        if (Array.isArray(lesson.content.content)) {
          for (const item of lesson.content.content) {
            if (item.word && !progress.wordsLearned.includes(item.word)) {
              progress.wordsLearned.push(item.word);
            }
          }
        }
      }

      // Track mistakes
      for (const result of results) {
        if (!result.isCorrect) {
          progress.mistakes.push({
            question: result.question,
            timestamp: new Date().toISOString()
          });
        }
      }

      await kv.set(`progress:${user.id}`, progress);
    }

    return c.json({ 
      score, 
      results,
      passed: score >= 75,
      newStage: profile?.currentStage 
    });
  } catch (error) {
    console.log(`Submit quiz error: ${error}`);
    return c.json({ error: 'Failed to submit quiz' }, 500);
  }
});

// Get progress endpoint
app.get("/make-server-91c142be/progress", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    if (!user || error) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const profile = await kv.get(`profile:${user.id}`);
    const progress = await kv.get(`progress:${user.id}`);

    // Get recent quiz results
    const allKeys = await kv.getByPrefix(`quiz_result:${user.id}:`);
    const quizResults = allKeys.sort((a: any, b: any) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ).slice(0, 10);

    return c.json({ 
      profile, 
      progress,
      recentQuizzes: quizResults
    });
  } catch (error) {
    console.log(`Get progress error: ${error}`);
    return c.json({ error: 'Failed to get progress' }, 500);
  }
});

Deno.serve(app.fetch);
