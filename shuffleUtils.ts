import type { ExerciseItem, TestQuestion, LessonContent, ExamQuestion, SchoolExam, ReadingText, OralScenario } from './types.ts';

/**
 * Deterministic pseudo-random number generator using FNV-1a hash and xorshift.
 * Produces deterministic, well-distributed pseudorandom numbers based on seed string.
 */
function createSeededRandom(seed: string): () => number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  }
  return () => {
    h += h << 13;
    h ^= h >>> 7;
    h += h << 3;
    h ^= h >>> 17;
    h += h << 5;
    return (h >>> 0) / 4294967296;
  };
}

/**
 * Shuffles multiple-choice question options (both Spanish and Armenian)
 * and updates correctIndex accordingly, ensuring the correct answer is NOT always in the first position.
 */
export function shuffleMultipleChoiceQuestion<T extends {
  id?: string;
  optionsEs: [string, string, string, string] | string[];
  optionsHy?: [string, string, string, string] | string[];
  correctIndex: number;
}>(q: T, seedModifier: string = ''): T {
  const n = q.optionsEs.length;
  if (n <= 1) return q;

  const correctText = q.optionsEs[q.correctIndex];
  const seed = `${q.id || ''}-${q.optionsEs.join('|')}-${seedModifier}`;
  const rand = createSeededRandom(seed);

  // Generate permutation indices
  const indices = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // If the correct answer happened to remain at index 0 and original was at index 0,
  // rotate to another position so that correct answers are never uniformly Option A across questions
  if (indices[0] === q.correctIndex && n > 1) {
    const target = 1 + Math.floor(rand() * (n - 1));
    [indices[0], indices[target]] = [indices[target], indices[0]];
  }

  const shuffledOptionsEs = indices.map(i => q.optionsEs[i]);
  const shuffledOptionsHy = q.optionsHy ? indices.map(i => q.optionsHy![i]) : undefined;
  const newCorrectIndex = shuffledOptionsEs.indexOf(correctText);

  return {
    ...q,
    optionsEs: (n === 4 ? (shuffledOptionsEs as [string, string, string, string]) : shuffledOptionsEs),
    ...(shuffledOptionsHy ? { optionsHy: (n === 4 ? (shuffledOptionsHy as [string, string, string, string]) : shuffledOptionsHy) } : {}),
    correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0
  };
}

/**
 * Shuffles options for ExerciseItem where correctAnswer is the answer string.
 */
export function shuffleExerciseItem(ex: ExerciseItem, seedModifier: string = ''): ExerciseItem {
  if (!ex.options || ex.options.length <= 1) return ex;
  const n = ex.options.length;

  // For standard True/False, keep standard order
  if (ex.type === 'true_false' && n === 2 && (ex.options[0] === 'Verdadero' || ex.options[1] === 'Verdadero')) {
    return ex;
  }

  const seed = `${ex.id}-${ex.options.join('|')}-${seedModifier}`;
  const rand = createSeededRandom(seed);

  const indices = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // Prevent correctAnswer from always landing on index 0
  if (ex.options[indices[0]] === ex.correctAnswer && n > 1) {
    const target = 1 + Math.floor(rand() * (n - 1));
    [indices[0], indices[target]] = [indices[target], indices[0]];
  }

  const shuffledOptions = indices.map(i => ex.options![i]);
  const shuffledOptionsHy = ex.optionsHy ? indices.map(i => ex.optionsHy![i]) : undefined;

  return {
    ...ex,
    options: shuffledOptions,
    ...(shuffledOptionsHy ? { optionsHy: shuffledOptionsHy } : {})
  };
}

/**
 * Shuffles all exercises, test questions, and mini-exam questions within a LessonContent.
 */
export function randomizeLessonOptions(lesson: LessonContent, seedModifier: string = ''): LessonContent {
  return {
    ...lesson,
    exercises: lesson.exercises.map(ex => shuffleExerciseItem(ex, seedModifier)),
    testQuestions: lesson.testQuestions.map(q => shuffleMultipleChoiceQuestion(q, seedModifier)),
    miniExam: {
      ...lesson.miniExam,
      questions: lesson.miniExam.questions.map(q => shuffleMultipleChoiceQuestion(q, seedModifier))
    }
  };
}

/**
 * Shuffles questions in a school exam so correct answers are varied.
 */
export function randomizeExamOptions(exam: SchoolExam, seedModifier: string = ''): SchoolExam {
  return {
    ...exam,
    questions: exam.questions.map(q => shuffleMultipleChoiceQuestion(q, seedModifier))
  };
}

/**
 * Shuffles questions in a reading text.
 */
export function randomizeReadingText(reading: ReadingText, seedModifier: string = ''): ReadingText {
  return {
    ...reading,
    questions: reading.questions.map(q => shuffleMultipleChoiceQuestion(q, seedModifier))
  };
}

/**
 * Shuffles options of an oral scenario.
 */
export function randomizeOralScenario(sc: OralScenario, seedModifier: string = ''): OralScenario {
  const n = sc.options.length;
  if (n <= 1) return sc;

  const seed = `${sc.id}-${seedModifier}`;
  const rand = createSeededRandom(seed);

  const indices = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // Ensure the appropriate answer does not always stay on index 0
  if (sc.options[indices[0]].isAppropriate && n > 1) {
    const target = 1 + Math.floor(rand() * (n - 1));
    [indices[0], indices[target]] = [indices[target], indices[0]];
  }

  return {
    ...sc,
    options: indices.map(i => sc.options[i])
  };
}

/**
 * Shuffles options for an escape room step.
 */
export function shuffleEscapeRoomStep<T extends {
  options: string[];
  optionsHy: string[];
  correctAnswer: string;
}>(step: T, seedModifier: string = ''): T {
  const n = step.options.length;
  if (n <= 1) return step;

  const seed = `${step.correctAnswer}-${step.options.join('|')}-${seedModifier}`;
  const rand = createSeededRandom(seed);

  const indices = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  if (step.options[indices[0]] === step.correctAnswer && n > 1) {
    const target = 1 + Math.floor(rand() * (n - 1));
    [indices[0], indices[target]] = [indices[target], indices[0]];
  }

  return {
    ...step,
    options: indices.map(i => step.options[i]),
    optionsHy: indices.map(i => step.optionsHy[i])
  };
}
