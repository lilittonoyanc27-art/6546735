export type LanguageMode = 'es' | 'hy' | 'both';

export interface BilingualString {
  es: string;
  hy: string;
}

export interface Subtopic {
  id: string;
  number: number;
  titleEs: string;
  titleHy: string;
  summaryEs?: string;
  summaryHy?: string;
}

export interface Module {
  id: string;
  number: number;
  titleEs: string;
  titleHy: string;
  iconName: string;
  color: string; // e.g. 'bg-red-700'
  accentColor: string; // e.g. 'text-red-700'
  badgeBg: string;
  descriptionEs: string;
  descriptionHy: string;
  subtopics: Subtopic[];
}

export interface ExerciseItem {
  id: string;
  type: 'mcq' | 'fill_in' | 'true_false' | 'classify';
  instructionEs: string;
  instructionHy: string;
  sentenceEs: string;
  sentenceHy: string;
  options?: string[]; // 4 options or choices
  optionsHy?: string[];
  correctAnswer: string;
  explanationEs: string;
  explanationHy: string;
}

export interface TestQuestion {
  id: string;
  questionEs: string;
  questionHy: string;
  optionsEs: [string, string, string, string]; // exactly 4 options
  optionsHy: [string, string, string, string];
  correctIndex: number;
  explanationEs: string;
  explanationHy: string;
}

export interface LessonContent {
  subtopicId: string;
  titleEs: string;
  titleHy: string;
  moduleTitleEs: string;
  moduleTitleHy: string;
  moduleId: string;
  explanationEs: string[];
  explanationHy: string[];
  keyRulesEs: string[];
  keyRulesHy: string[];
  bilingualExamples: { es: string; hy: string; noteEs?: string; noteHy?: string }[];
  schoolExamples: {
    situationEs: string;
    situationHy: string;
    dialogueEs: string;
    dialogueHy: string;
    explanationEs: string;
    explanationHy: string;
  }[];
  exercises: ExerciseItem[]; // 10 distinct interactive exercises
  testQuestions: TestQuestion[]; // 10 test questions with 4 choices
  miniExam: {
    titleEs: string;
    titleHy: string;
    questions: TestQuestion[];
  };
}

export interface SyntaxWordTag {
  id: string;
  word: string;
  expectedTag: 'sujeto' | 'predicado' | 'ns' | 'np' | 'cd' | 'ci' | 'cc' | 'otro';
}

export interface SyntaxSentenceExercise {
  id: string;
  sentence: string;
  translationHy: string;
  words?: SyntaxWordTag[];
  sujetoRange: [number, number]; // token index range
  predicadoRange: [number, number];
  nucleoSujetoIndex: number;
  nucleoPredicadoIndex: number;
  tipoPredicado: 'nominal' | 'verbal';
  explicacionEs: string;
  explicacionHy: string;
}

export interface ReadingText {
  id: string;
  titleEs: string;
  titleHy: string;
  level: 'Fácil' | 'Medio' | 'Difícil';
  genreEs: string;
  genreHy: string;
  paragraphsEs: string[];
  paragraphsHy: string[];
  vocabulary: { es: string; hy: string; definitionEs: string; definitionHy: string }[];
  questions: TestQuestion[];
}

export interface OralScenario {
  id: string;
  titleEs: string;
  titleHy: string;
  contextEs: string;
  contextHy: string;
  speakerEs: string;
  speakerHy: string;
  promptEs: string;
  promptHy: string;
  audioPromptText: string;
  options: {
    id: string;
    textEs: string;
    textHy: string;
    isAppropriate: boolean;
    ratingEs: string; // 'Excelente' | 'Adecuada' | 'Demasiado informal' | 'Inadecuada'
    ratingHy: string;
    feedbackEs: string;
    feedbackHy: string;
  }[];
}

export interface ExamQuestion extends TestQuestion {
  categoryEs: string;
  categoryHy: string;
}

export interface SchoolExam {
  id: string;
  titleEs: string;
  titleHy: string;
  moduleId?: string;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  durationMinutes: number;
  questions: ExamQuestion[];
}

export interface UserMistake {
  id: string;
  questionEs: string;
  questionHy: string;
  userAnswer: string;
  correctAnswer: string;
  explanationEs: string;
  explanationHy: string;
  topicTitleEs: string;
  timestamp: number;
}

export interface UserStats {
  points: number;
  completedLessons: string[]; // subtopicIds
  completedExams: {
    examId: string;
    score: number; // 0 - 10
    totalQuestions: number;
    correctCount: number;
    date: string;
  }[];
  gamesPlayed: number;
  highScores: Record<string, number>;
  mistakes: UserMistake[];
  badges: {
    id: string;
    titleEs: string;
    titleHy: string;
    descEs: string;
    descHy: string;
    icon: string;
    unlockedAt?: number;
  }[];
}
