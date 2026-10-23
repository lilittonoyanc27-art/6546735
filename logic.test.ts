import test from 'node:test';
import assert from 'node:assert/strict';
import { MODULES } from './modulesData.ts';
import { getLessonContent } from './lessonsData.ts';
import { getSpanishGradeLabel, resetUserStats } from './storage.ts';
import { SYNTAX_EXERCISES } from './syntaxExercises.ts';
import { SCHOOL_EXAMS } from './examsData.ts';
import { ORAL_SCENARIOS } from './oralData.ts';
import { MILLIONAIRE_QUESTIONS, TRUE_FALSE_CARDS, ESCAPE_ROOM_STEPS } from './gamesData.ts';

test('All 11 modules are properly registered with subtopics', () => {
  assert.equal(MODULES.length, 11, 'Should have exactly 11 modules');
  assert.equal(MODULES[0].titleEs, 'La comunicación');
  assert.equal(MODULES[1].titleEs, 'Tipos de textos');
  assert.equal(MODULES[2].titleEs, 'Gramática');
  assert.equal(MODULES[3].titleEs, 'Sintaxis');
  assert.equal(MODULES[4].titleEs, 'Léxico y semántica');
  assert.equal(MODULES[5].titleEs, 'Ortografía');
  assert.equal(MODULES[6].titleEs, 'Literatura');
  assert.equal(MODULES[7].titleEs, 'Comprensión lectora');
  assert.equal(MODULES[8].titleEs, 'Expresión escrita y oral');
  assert.equal(MODULES[9].titleEs, 'Las lenguas de España');
  assert.equal(MODULES[10].titleEs, 'Alfabetización mediática y digital');
});

test('Module subtopics have both Spanish and Armenian titles', () => {
  MODULES.forEach(m => {
    assert.ok(m.titleEs.length > 0, `Module ${m.number} titleEs should not be empty`);
    assert.ok(m.titleHy.length > 0, `Module ${m.number} titleHy should not be empty`);
    assert.ok(m.subtopics.length > 0, `Module ${m.number} must contain subtopics`);
    m.subtopics.forEach(sub => {
      assert.ok(sub.titleEs.length > 0, `Subtopic ${sub.id} must have titleEs`);
      assert.ok(sub.titleHy.length > 0, `Subtopic ${sub.id} must have titleHy`);
    });
  });
});

test('Lesson content generator produces 10 exercises and 10 test questions with 4 choices', () => {
  const lesson = getLessonContent('m3-2'); // Sustantivos
  assert.equal(lesson.exercises.length, 10, 'Should have exactly 10 exercises');
  assert.equal(lesson.testQuestions.length, 10, 'Should have exactly 10 test questions');
  lesson.testQuestions.forEach(q => {
    assert.equal(q.optionsEs.length, 4, 'Each question must have 4 Spanish options');
    assert.equal(q.optionsHy.length, 4, 'Each question must have 4 Armenian options');
    assert.ok(q.correctIndex >= 0 && q.correctIndex <= 3, 'Correct index must be 0-3');
    assert.ok(q.explanationEs.length > 0, 'Must have Spanish error explanation');
    assert.ok(q.explanationHy.length > 0, 'Must have Armenian error explanation');
  });
});

test('Spanish ESO grading scale produces correct levels and labels', () => {
  assert.equal(getSpanishGradeLabel(10).es, 'Sobresaliente (9-10)');
  assert.equal(getSpanishGradeLabel(9.5).es, 'Sobresaliente (9-10)');
  assert.equal(getSpanishGradeLabel(8.0).es, 'Notable (7-8.9)');
  assert.equal(getSpanishGradeLabel(6.5).es, 'Bien (6-6.9)');
  assert.equal(getSpanishGradeLabel(5.0).es, 'Suficiente (5-5.9)');
  assert.equal(getSpanishGradeLabel(4.5).es, 'Insuficiente (< 5)');
  assert.equal(getSpanishGradeLabel(1.0).es, 'Insuficiente (< 5)');
});

test('Syntax exercises have valid subject and predicate ranges', () => {
  SYNTAX_EXERCISES.forEach(ex => {
    assert.ok(ex.sujetoRange[0] <= ex.sujetoRange[1], 'Sujeto range start <= end');
    assert.ok(ex.predicadoRange[0] <= ex.predicadoRange[1], 'Predicado range start <= end');
    assert.ok(ex.explicacionEs.length > 0, 'Syntax exercise must have Spanish explanation');
    assert.ok(ex.explicacionHy.length > 0, 'Syntax exercise must have Armenian explanation');
  });
});

test('School exams contain official sections and questions', () => {
  assert.equal(SCHOOL_EXAMS.length, 8, 'Must have 8 school exams');
  SCHOOL_EXAMS.forEach(exam => {
    assert.ok(exam.questions.length > 0, `Exam ${exam.id} must contain questions`);
    exam.questions.forEach(q => {
      assert.equal(q.optionsEs.length, 4, 'Exam questions must have 4 options');
      assert.ok(q.explanationEs.length > 0, 'Must have explanation');
    });
  });
});

test('Oral practice scenarios have 8 realistic classroom situations', () => {
  assert.equal(ORAL_SCENARIOS.length, 8, 'Must have 8 oral scenarios');
  ORAL_SCENARIOS.forEach(sc => {
    assert.ok(sc.options.length >= 3, 'Each scenario must have at least 3 natural options');
    assert.ok(sc.audioPromptText.length > 0, 'Each scenario must have audio prompt text');
  });
});

test('resetUserStats restores initial baseline stats with 50 points and empty history', () => {
  const fresh = resetUserStats();
  assert.equal(fresh.points, 50, 'Points should reset to initial 50');
  assert.equal(fresh.completedLessons.length, 0, 'Completed lessons should be empty');
  assert.equal(fresh.completedExams.length, 0, 'Completed exams should be empty');
  assert.equal(fresh.mistakes.length, 0, 'Mistakes should be empty');
  assert.ok(fresh.badges.length > 0, 'Badges should be initialized');
});

test('Every lesson across different modules provides detailed, multi-paragraph theory in Spanish and Armenian', () => {
  const sampleTopics = ['m1-1', 'm1-2', 'm2-1', 'm3-2', 'm3-7', 'm4-3', 'm4-4', 'm6-4', 'm6-5', 'm7-2', 'm10-1', 'm11-6'];
  sampleTopics.forEach(subId => {
    const lesson = getLessonContent(subId);
    assert.ok(lesson.explanationEs.length >= 3, `Lesson ${subId} must have at least 3 detailed Spanish paragraphs`);
    assert.ok(lesson.explanationHy.length >= 3, `Lesson ${subId} must have at least 3 detailed Armenian paragraphs`);
    assert.ok(lesson.keyRulesEs.length >= 2, `Lesson ${subId} must have at least 2 key rules in Spanish`);
    assert.ok(lesson.keyRulesHy.length >= 2, `Lesson ${subId} must have at least 2 key rules in Armenian`);
    assert.ok(lesson.bilingualExamples.length >= 1, `Lesson ${subId} must have bilingual examples`);
  });
});

test('Games data questions have paired Spanish and Armenian translations for click-to-reveal', () => {
  MILLIONAIRE_QUESTIONS.forEach((q: any) => {
    assert.ok(q.questionEs.length > 0, 'Question ES must exist');
    assert.ok(q.questionHy.length > 0, 'Question HY must exist for reveal');
    assert.equal(q.optionsEs.length, q.optionsHy.length, 'Options count must match');
  });
  TRUE_FALSE_CARDS.forEach((c: any) => {
    assert.ok(c.statementEs.length > 0);
    assert.ok(c.statementHy.length > 0);
  });
  ESCAPE_ROOM_STEPS.forEach((s: any) => {
    assert.ok(s.riddleEs.length > 0);
    assert.ok(s.riddleHy.length > 0);
    assert.equal(s.options.length, s.optionsHy.length);
  });
});

test('Multiple-choice question options are shuffled and correct answers are distributed across indices (not always index 0)', () => {
  // Test lesson test questions
  const lesson = getLessonContent('m1-1');
  const lessonIndices = lesson.testQuestions.map(q => q.correctIndex);
  const uniqueLessonIndices = new Set(lessonIndices);
  assert.ok(uniqueLessonIndices.size > 1, 'Lesson test questions correct indices must vary across A, B, C, D');

  // Test school exams
  const allExamIndices = SCHOOL_EXAMS.flatMap(e => e.questions.map(q => q.correctIndex));
  const uniqueExamIndices = new Set(allExamIndices);
  assert.ok(uniqueExamIndices.size >= 3, 'School exams correct indices must be distributed across multiple positions');

  // Test millionaire questions
  const milIndices = MILLIONAIRE_QUESTIONS.map(q => q.correctIndex);
  const uniqueMilIndices = new Set(milIndices);
  assert.ok(uniqueMilIndices.size > 1, 'Millionaire correct indices must vary');

  // Test oral scenarios
  const oralBestIndices = ORAL_SCENARIOS.map(sc => sc.options.findIndex(o => o.isAppropriate));
  const uniqueOralIndices = new Set(oralBestIndices);
  assert.ok(uniqueOralIndices.size > 1, 'Oral scenarios best option must not always be at index 0');
});
