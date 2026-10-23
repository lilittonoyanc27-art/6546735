import type { UserStats, UserMistake } from './types.ts';

const STORAGE_KEY = 'lengua_eso1_student_progress_v1';

export const INITIAL_BADGES = [
  {
    id: 'badge-welcome',
    titleEs: 'Primer día en el IES',
    titleHy: 'Առաջին օրը դպրոցում',
    descEs: 'Iniciaste tu recorrido en la plataforma de 1.º ESO.',
    descHy: 'Սկսեցիր ուսումնական ճանապարհը 1.º ESO հարթակում։',
    icon: '🎒',
    unlockedAt: Date.now()
  },
  {
    id: 'badge-first-lesson',
    titleEs: 'Primer tema dominado',
    titleHy: 'Առաջին յուրացված թեման',
    descEs: 'Completaste con éxito tu primera lección interactiva.',
    descHy: 'Հաջողությամբ ավարտեցիր քո առաջին ինտերակտիվ դասը։',
    icon: '⭐'
  },
  {
    id: 'badge-syntax-master',
    titleEs: 'Analista Sintáctico',
    titleHy: 'Շարահյուսական վերլուծաբան',
    descEs: 'Dominaste la identificación de sujeto y predicado con colores.',
    descHy: 'Կատարյալ որոշեցիր ենթական ու ստորոգյալը գույներով։',
    icon: '🔍'
  },
  {
    id: 'badge-spelling-ace',
    titleEs: 'Campeón de Ortografía',
    titleHy: 'Ուղղագրության չեմպիոն',
    descEs: 'Superaste los retos de agudas, llanas y tildes.',
    descHy: 'Հաղթահարեցիր շեշտադրության և ուղղագրության բոլոր թեստերը։',
    icon: '✍️'
  },
  {
    id: 'badge-game-champion',
    titleEs: 'Maestro de los Juegos',
    titleHy: 'Խաղերի վարպետ',
    descEs: 'Jugaste a los retos educativos del instituto.',
    descHy: 'Հաղթեցիր դպրոցական ինտերակտիվ խաղերում։',
    icon: '🏆'
  },
  {
    id: 'badge-oral-communicator',
    titleEs: 'Orador del Aula',
    titleHy: 'Դասարանի հռետոր',
    descEs: 'Practicaste situaciones de diálogo real en el colegio.',
    descHy: 'Վարժվեցիր իրական դպրոցական երկխոսություններում։',
    icon: '🎙️'
  },
  {
    id: 'badge-exam-10',
    titleEs: 'Matrícula de Honor (10/10)',
    titleHy: '10-ից 10 Գերազանց',
    descEs: 'Obtuviste la nota máxima en un examen oficial.',
    descHy: 'Ստացար առավելագույն 10 բալ քննության ժամանակ։',
    icon: '👑'
  }
];

export const INITIAL_STATS: UserStats = {
  points: 50,
  completedLessons: [],
  completedExams: [],
  gamesPlayed: 0,
  highScores: {},
  mistakes: [],
  badges: INITIAL_BADGES
};

export function loadUserStats(): UserStats {
  if (typeof window === 'undefined') return INITIAL_STATS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_STATS;
    const parsed = JSON.parse(raw);
    return {
      ...INITIAL_STATS,
      ...parsed,
      badges: INITIAL_BADGES.map(b => {
        const found = parsed.badges?.find((pb: { id: string }) => pb.id === b.id);
        return found || b;
      })
    };
  } catch (e) {
    console.error('Failed to load user stats from localStorage:', e);
    return INITIAL_STATS;
  }
}

export function saveUserStats(stats: UserStats): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save user stats to localStorage:', e);
  }
}

export function resetUserStats(): UserStats {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to reset user stats in localStorage:', e);
    }
  }
  const fresh: UserStats = {
    ...INITIAL_STATS,
    points: 50,
    completedLessons: [],
    completedExams: [],
    gamesPlayed: 0,
    highScores: {},
    mistakes: [],
    badges: INITIAL_BADGES.map(b => ({ ...b }))
  };
  return fresh;
}

export function addPoints(amount: number): UserStats {
  const current = loadUserStats();
  current.points += amount;
  saveUserStats(current);
  return current;
}

export function markLessonCompleted(subtopicId: string): UserStats {
  const current = loadUserStats();
  if (!current.completedLessons.includes(subtopicId)) {
    current.completedLessons.push(subtopicId);
    current.points += 40; // 40 points bonus
    // Unlock first lesson badge if applicable
    const b = current.badges.find(x => x.id === 'badge-first-lesson');
    if (b && !b.unlockedAt) {
      b.unlockedAt = Date.now();
    }
    saveUserStats(current);
  }
  return current;
}

export function recordExamResult(examId: string, score: number, totalQuestions: number, correctCount: number): UserStats {
  const current = loadUserStats();
  current.completedExams.push({
    examId,
    score,
    totalQuestions,
    correctCount,
    date: new Date().toLocaleDateString('es-ES')
  });
  current.points += Math.round(score * 15);

  if (score >= 9.5) {
    const b = current.badges.find(x => x.id === 'badge-exam-10');
    if (b && !b.unlockedAt) {
      b.unlockedAt = Date.now();
    }
  }

  saveUserStats(current);
  return current;
}

export function recordMistake(mistake: Omit<UserMistake, 'id' | 'timestamp'>): void {
  const current = loadUserStats();
  const newMistake: UserMistake = {
    ...mistake,
    id: `m-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    timestamp: Date.now()
  };
  // Avoid duplicate identical questions in mistakes queue
  const exists = current.mistakes.some(m => m.questionEs === mistake.questionEs);
  if (!exists) {
    current.mistakes.unshift(newMistake);
    if (current.mistakes.length > 50) current.mistakes.pop();
    saveUserStats(current);
  }
}

export function removeMistake(id: string): UserStats {
  const current = loadUserStats();
  current.mistakes = current.mistakes.filter(m => m.id !== id);
  saveUserStats(current);
  return current;
}

export function incrementGamesPlayed(gameId: string, score: number): UserStats {
  const current = loadUserStats();
  current.gamesPlayed += 1;
  const currentBest = current.highScores[gameId] || 0;
  if (score > currentBest) {
    current.highScores[gameId] = score;
  }
  const b = current.badges.find(x => x.id === 'badge-game-champion');
  if (b && !b.unlockedAt) {
    b.unlockedAt = Date.now();
  }
  saveUserStats(current);
  return current;
}

export function getSpanishGradeLabel(score: number): { es: string; hy: string; color: string } {
  if (score >= 9) return { es: 'Sobresaliente (9-10)', hy: 'Գերազանց (9-10)', color: 'text-emerald-700 bg-emerald-100 border-emerald-300' };
  if (score >= 7) return { es: 'Notable (7-8.9)', hy: 'Լավագույն / Շատ լավ (7-8.9)', color: 'text-blue-700 bg-blue-100 border-blue-300' };
  if (score >= 6) return { es: 'Bien (6-6.9)', hy: 'Լավ (6-6.9)', color: 'text-amber-700 bg-amber-100 border-amber-300' };
  if (score >= 5) return { es: 'Suficiente (5-5.9)', hy: 'Բավարար (5-5.9)', color: 'text-orange-700 bg-orange-100 border-orange-300' };
  return { es: 'Insuficiente (< 5)', hy: 'Անբավարար (< 5)', color: 'text-rose-700 bg-rose-100 border-rose-300' };
}
