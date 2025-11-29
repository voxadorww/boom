// Dictionary-based Spanish lessons - 10 lessons per stage

export const spanishLessons = {
  // Stage 1: Vocabulary (10 lessons)
  stage1: [
    {
      id: 'vocab-1',
      title: 'Greetings and Basic Words',
      stage: 1,
      content: [
        { word: 'hola', translation: 'hello', pronunciation: 'OH-lah', example: 'Hola, ¿cómo estás?' },
        { word: 'adiós', translation: 'goodbye', pronunciation: 'ah-DYOHS', example: 'Adiós, hasta luego.' },
        { word: 'gracias', translation: 'thank you', pronunciation: 'GRAH-syahs', example: 'Gracias por tu ayuda.' },
        { word: 'sí', translation: 'yes', pronunciation: 'SEE', example: 'Sí, me gusta.' },
        { word: 'no', translation: 'no', pronunciation: 'NOH', example: 'No, gracias.' },
      ],
      quiz: [
        { question: 'How do you say "hello" in Spanish?', options: ['hola', 'adiós', 'gracias', 'no'], correct: 0 },
        { question: 'What does "gracias" mean?', options: ['goodbye', 'yes', 'thank you', 'hello'], correct: 2 },
        { question: 'Which word means "no"?', options: ['sí', 'hola', 'no', 'adiós'], correct: 2 },
      ],
    },
    {
      id: 'vocab-2',
      title: 'Numbers 1-10',
      stage: 1,
      content: [
        { word: 'uno', translation: 'one', pronunciation: 'OO-noh', example: 'Tengo uno.' },
        { word: 'dos', translation: 'two', pronunciation: 'DOHS', example: 'Hay dos gatos.' },
        { word: 'tres', translation: 'three', pronunciation: 'TREHS', example: 'Son las tres.' },
        { word: 'cuatro', translation: 'four', pronunciation: 'KWAH-troh', example: 'Cuatro libros.' },
        { word: 'cinco', translation: 'five', pronunciation: 'SEEN-koh', example: 'Cinco amigos.' },
      ],
      quiz: [
        { question: 'What is "two" in Spanish?', options: ['uno', 'dos', 'tres', 'cuatro'], correct: 1 },
        { question: 'How do you say "five"?', options: ['tres', 'cuatro', 'cinco', 'dos'], correct: 2 },
        { question: 'What does "cuatro" mean?', options: ['three', 'four', 'five', 'one'], correct: 1 },
      ],
    },
    {
      id: 'vocab-3',
      title: 'Family Members',
      stage: 1,
      content: [
        { word: 'madre', translation: 'mother', pronunciation: 'MAH-dreh', example: 'Mi madre es amable.' },
        { word: 'padre', translation: 'father', pronunciation: 'PAH-dreh', example: 'Mi padre trabaja.' },
        { word: 'hermano', translation: 'brother', pronunciation: 'ehr-MAH-noh', example: 'Mi hermano es alto.' },
        { word: 'hermana', translation: 'sister', pronunciation: 'ehr-MAH-nah', example: 'Mi hermana lee.' },
        { word: 'abuelo', translation: 'grandfather', pronunciation: 'ah-BWEH-loh', example: 'Mi abuelo cocina.' },
      ],
      quiz: [
        { question: 'What is "mother" in Spanish?', options: ['padre', 'madre', 'hermano', 'abuelo'], correct: 1 },
        { question: 'How do you say "brother"?', options: ['hermana', 'hermano', 'padre', 'madre'], correct: 1 },
        { question: 'What does "abuelo" mean?', options: ['father', 'brother', 'grandfather', 'sister'], correct: 2 },
      ],
    },
    {
      id: 'vocab-4',
      title: 'Common Colors',
      stage: 1,
      content: [
        { word: 'rojo', translation: 'red', pronunciation: 'ROH-hoh', example: 'El coche es rojo.' },
        { word: 'azul', translation: 'blue', pronunciation: 'ah-SOOL', example: 'El cielo es azul.' },
        { word: 'verde', translation: 'green', pronunciation: 'BEHR-deh', example: 'La planta es verde.' },
        { word: 'amarillo', translation: 'yellow', pronunciation: 'ah-mah-REE-yoh', example: 'El sol es amarillo.' },
        { word: 'negro', translation: 'black', pronunciation: 'NEH-groh', example: 'El gato es negro.' },
      ],
      quiz: [
        { question: 'What color is "rojo"?', options: ['blue', 'red', 'green', 'yellow'], correct: 1 },
        { question: 'How do you say "green" in Spanish?', options: ['azul', 'negro', 'verde', 'rojo'], correct: 2 },
        { question: 'What does "amarillo" mean?', options: ['black', 'blue', 'red', 'yellow'], correct: 3 },
      ],
    },
    {
      id: 'vocab-5',
      title: 'Days of the Week',
      stage: 1,
      content: [
        { word: 'lunes', translation: 'Monday', pronunciation: 'LOO-nehs', example: 'Hoy es lunes.' },
        { word: 'martes', translation: 'Tuesday', pronunciation: 'MAR-tehs', example: 'Mañana es martes.' },
        { word: 'miércoles', translation: 'Wednesday', pronunciation: 'MYEHR-koh-lehs', example: 'El miércoles tengo clase.' },
        { word: 'jueves', translation: 'Thursday', pronunciation: 'HWEH-behs', example: 'El jueves voy al cine.' },
        { word: 'viernes', translation: 'Friday', pronunciation: 'BYEHR-nehs', example: 'El viernes es mi favorito.' },
      ],
      quiz: [
        { question: 'What is "Monday" in Spanish?', options: ['martes', 'lunes', 'miércoles', 'jueves'], correct: 1 },
        { question: 'How do you say "Friday"?', options: ['jueves', 'viernes', 'lunes', 'martes'], correct: 1 },
        { question: 'What does "miércoles" mean?', options: ['Tuesday', 'Thursday', 'Wednesday', 'Monday'], correct: 2 },
      ],
    },
    {
      id: 'vocab-6',
      title: 'Food and Drinks',
      stage: 1,
      content: [
        { word: 'agua', translation: 'water', pronunciation: 'AH-gwah', example: 'Bebo agua.' },
        { word: 'pan', translation: 'bread', pronunciation: 'PAHN', example: 'Como pan.' },
        { word: 'leche', translation: 'milk', pronunciation: 'LEH-cheh', example: 'Tomo leche.' },
        { word: 'café', translation: 'coffee', pronunciation: 'kah-FEH', example: 'Me gusta el café.' },
        { word: 'manzana', translation: 'apple', pronunciation: 'mahn-SAH-nah', example: 'La manzana es roja.' },
      ],
      quiz: [
        { question: 'What is "water" in Spanish?', options: ['leche', 'café', 'agua', 'pan'], correct: 2 },
        { question: 'How do you say "bread"?', options: ['pan', 'manzana', 'leche', 'agua'], correct: 0 },
        { question: 'What does "café" mean?', options: ['milk', 'water', 'apple', 'coffee'], correct: 3 },
      ],
    },
    {
      id: 'vocab-7',
      title: 'Common Animals',
      stage: 1,
      content: [
        { word: 'perro', translation: 'dog', pronunciation: 'PEH-rroh', example: 'Mi perro es grande.' },
        { word: 'gato', translation: 'cat', pronunciation: 'GAH-toh', example: 'El gato duerme.' },
        { word: 'pájaro', translation: 'bird', pronunciation: 'PAH-hah-roh', example: 'El pájaro canta.' },
        { word: 'pez', translation: 'fish', pronunciation: 'PEHS', example: 'El pez nada.' },
        { word: 'caballo', translation: 'horse', pronunciation: 'kah-BAH-yoh', example: 'El caballo corre.' },
      ],
      quiz: [
        { question: 'What is "dog" in Spanish?', options: ['gato', 'perro', 'pájaro', 'pez'], correct: 1 },
        { question: 'How do you say "cat"?', options: ['perro', 'gato', 'caballo', 'pájaro'], correct: 1 },
        { question: 'What does "pájaro" mean?', options: ['fish', 'horse', 'bird', 'dog'], correct: 2 },
      ],
    },
    {
      id: 'vocab-8',
      title: 'Body Parts',
      stage: 1,
      content: [
        { word: 'cabeza', translation: 'head', pronunciation: 'kah-BEH-sah', example: 'Me duele la cabeza.' },
        { word: 'mano', translation: 'hand', pronunciation: 'MAH-noh', example: 'Lavo mis manos.' },
        { word: 'pie', translation: 'foot', pronunciation: 'PYEH', example: 'Mi pie está cansado.' },
        { word: 'ojo', translation: 'eye', pronunciation: 'OH-hoh', example: 'Tengo dos ojos.' },
        { word: 'boca', translation: 'mouth', pronunciation: 'BOH-kah', example: 'Abro la boca.' },
      ],
      quiz: [
        { question: 'What is "hand" in Spanish?', options: ['pie', 'mano', 'cabeza', 'ojo'], correct: 1 },
        { question: 'How do you say "eye"?', options: ['boca', 'ojo', 'pie', 'mano'], correct: 1 },
        { question: 'What does "cabeza" mean?', options: ['foot', 'hand', 'head', 'mouth'], correct: 2 },
      ],
    },
    {
      id: 'vocab-9',
      title: 'Weather Words',
      stage: 1,
      content: [
        { word: 'sol', translation: 'sun', pronunciation: 'SOHL', example: 'El sol brilla.' },
        { word: 'lluvia', translation: 'rain', pronunciation: 'YOO-byah', example: 'Hay lluvia hoy.' },
        { word: 'nieve', translation: 'snow', pronunciation: 'NYEH-beh', example: 'Me gusta la nieve.' },
        { word: 'viento', translation: 'wind', pronunciation: 'BYEHN-toh', example: 'Hace mucho viento.' },
        { word: 'nube', translation: 'cloud', pronunciation: 'NOO-beh', example: 'Veo una nube.' },
      ],
      quiz: [
        { question: 'What is "sun" in Spanish?', options: ['luna', 'sol', 'lluvia', 'nieve'], correct: 1 },
        { question: 'How do you say "rain"?', options: ['viento', 'nube', 'lluvia', 'sol'], correct: 2 },
        { question: 'What does "nieve" mean?', options: ['wind', 'cloud', 'rain', 'snow'], correct: 3 },
      ],
    },
    {
      id: 'vocab-10',
      title: 'House and Rooms',
      stage: 1,
      content: [
        { word: 'casa', translation: 'house', pronunciation: 'KAH-sah', example: 'Mi casa es bonita.' },
        { word: 'cocina', translation: 'kitchen', pronunciation: 'koh-SEE-nah', example: 'Cocino en la cocina.' },
        { word: 'baño', translation: 'bathroom', pronunciation: 'BAH-nyoh', example: 'El baño está limpio.' },
        { word: 'dormitorio', translation: 'bedroom', pronunciation: 'dohr-mee-TOH-ryoh', example: 'Duermo en mi dormitorio.' },
        { word: 'sala', translation: 'living room', pronunciation: 'SAH-lah', example: 'Veo TV en la sala.' },
      ],
      quiz: [
        { question: 'What is "house" in Spanish?', options: ['cocina', 'casa', 'baño', 'sala'], correct: 1 },
        { question: 'How do you say "kitchen"?', options: ['baño', 'dormitorio', 'cocina', 'sala'], correct: 2 },
        { question: 'What does "dormitorio" mean?', options: ['bathroom', 'kitchen', 'living room', 'bedroom'], correct: 3 },
      ],
    },
  ],

  // Stage 2: Phrases (10 lessons) - will continue with more lessons
  stage2: [
    {
      id: 'phrase-1',
      title: 'Basic Greetings',
      stage: 2,
      content: [
        { phrase: '¿Cómo estás?', translation: 'How are you?', pronunciation: 'KOH-moh ehs-TAHS', context: 'Informal greeting' },
        { phrase: 'Muy bien, gracias', translation: 'Very well, thank you', pronunciation: 'mwee BYEHN GRAH-syahs', context: 'Response to greetings' },
        { phrase: 'Buenos días', translation: 'Good morning', pronunciation: 'BWEH-nohs DEE-ahs', context: 'Morning greeting' },
        { phrase: 'Buenas tardes', translation: 'Good afternoon', pronunciation: 'BWEH-nahs TAR-dehs', context: 'Afternoon greeting' },
        { phrase: 'Buenas noches', translation: 'Good evening/night', pronunciation: 'BWEH-nahs NOH-chehs', context: 'Evening greeting' },
      ],
      quiz: [
        { question: 'How do you say "How are you?" informally?', options: ['Buenos días', '¿Cómo estás?', 'Buenas noches', 'Muy bien'], correct: 1 },
        { question: 'What do you say in the morning?', options: ['Buenas tardes', 'Buenas noches', 'Buenos días', '¿Cómo estás?'], correct: 2 },
        { question: 'How do you respond "Very well, thank you"?', options: ['Buenos días', 'Muy bien, gracias', 'Buenas tardes', '¿Cómo estás?'], correct: 1 },
      ],
    },
    // ... more stage 2 lessons would follow the same pattern
  ],
};

// Helper to get lessons by stage
export function getLessonsByStage(stage: number) {
  const stageKey = `stage${stage}` as keyof typeof spanishLessons;
  return spanishLessons[stageKey] || [];
}

// Helper to get a specific lesson
export function getLesson(stage: number, lessonIndex: number) {
  const lessons = getLessonsByStage(stage);
  return lessons[lessonIndex] || null;
}
