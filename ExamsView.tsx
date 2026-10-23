import React, { useState } from 'react';
import { SCHOOL_EXAMS } from './examsData.ts';
import { SchoolExam } from './types.ts';
import { Award, Clock, CheckCircle2, XCircle, AlertTriangle, ArrowRight, RotateCcw, ShieldCheck } from 'lucide-react';
import { recordExamResult, recordMistake, getSpanishGradeLabel } from './storage.ts';
import { QuizArmenianQuestion, QuizArmenianOption } from './QuizArmenianText.tsx';
import confetti from 'canvas-confetti';

export const ExamsView: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Todos' | 'Fácil' | 'Medio' | 'Difícil'>('Todos');
  const [activeExam, setActiveExam] = useState<SchoolExam | null>(null);

  // Active exam state
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scoreResult, setScoreResult] = useState<{ score: number; correct: number; total: number } | null>(null);

  const filteredExams = SCHOOL_EXAMS.filter(
    e => selectedDifficulty === 'Todos' || e.difficulty === selectedDifficulty
  );

  const handleStartExam = (exam: SchoolExam) => {
    setActiveExam(exam);
    setUserAnswers({});
    setIsSubmitted(false);
    setScoreResult(null);
  };

  const handleSelectAnswer = (qId: string, optIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qId]: optIndex }));
  };

  const handleSubmitExam = () => {
    if (!activeExam) return;

    let correctCount = 0;
    activeExam.questions.forEach(q => {
      const selected = userAnswers[q.id];
      if (selected === q.correctIndex) {
        correctCount++;
      } else {
        recordMistake({
          questionEs: q.questionEs,
          questionHy: q.questionHy,
          userAnswer: selected !== undefined ? q.optionsEs[selected] : 'Sin responder',
          correctAnswer: q.optionsEs[q.correctIndex],
          explanationEs: q.explanationEs,
          explanationHy: q.explanationHy,
          topicTitleEs: activeExam.titleEs
        });
      }
    });

    const finalScore = Number(((correctCount / activeExam.questions.length) * 10).toFixed(1));
    setScoreResult({ score: finalScore, correct: correctCount, total: activeExam.questions.length });
    setIsSubmitted(true);
    recordExamResult(activeExam.id, finalScore, activeExam.questions.length, correctCount);

    if (finalScore >= 5) {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-red-800 via-rose-800 to-amber-700 p-6 sm:p-8 text-white shadow-md">
        <div className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-md">
          <span>Preparación para exámenes de Lengua — 1.º ESO</span>
          <span>•</span>
          <span className="armenian-font">Դպրոցական քննությունների բաժին</span>
        </div>
        <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Exámenes Oficiales con Calificación Escolar (0–10)
        </h1>
        <p className="mt-1.5 text-sm text-amber-100 armenian-font">
          Ստուգիր քո պատրաստվածությունը դպրոցական քննություններին՝ 10 բալանոց սանդղակով և սխալների մանրամասն բացատրությամբ։
        </p>
      </div>

      {!activeExam ? (
        <div className="space-y-6">
          {/* Difficulty Filter */}
          <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-stone-200">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wide mr-2">
              Dificultad / <span className="armenian-font font-medium lowercase">բարդություն</span>:
            </span>
            {(['Todos', 'Fácil', 'Medio', 'Difícil'] as const).map(diff => (
              <button
                key={diff}
                type="button"
                onClick={() => setSelectedDifficulty(diff)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  selectedDifficulty === diff
                    ? 'bg-red-800 text-white shadow-xs'
                    : 'bg-stone-50 text-stone-700 hover:bg-stone-100'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>

          {/* Exam Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredExams.map(exam => (
              <div
                key={exam.id}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="rounded-md bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-900">
                      {exam.questions.length} preguntas
                    </span>
                    <span
                      className={`rounded-md px-2.5 py-1 text-xs font-bold ${
                        exam.difficulty === 'Fácil'
                          ? 'bg-emerald-100 text-emerald-800'
                          : exam.difficulty === 'Medio'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {exam.difficulty}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 leading-snug">
                    {exam.titleEs}
                  </h3>
                  <p className="text-xs text-amber-900 armenian-font mt-0.5">
                    {exam.titleHy}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between pt-3 border-t border-stone-100">
                  <div className="flex items-center gap-1 text-xs text-stone-500">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{exam.durationMinutes} min aprox.</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleStartExam(exam)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-red-800 px-4 py-2 text-xs font-bold text-white hover:bg-red-900 shadow-xs"
                  >
                    <span>Realizar examen</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Active Exam Paper */
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-white px-5 py-3.5 rounded-2xl border border-stone-200">
            <button
              type="button"
              onClick={() => setActiveExam(null)}
              className="text-xs font-bold text-stone-600 hover:text-amber-800"
            >
              ← Volver a la lista de exámenes
            </button>
            <div className="text-xs font-bold text-stone-700">
              Respondidas: {Object.keys(userAnswers).length} de {activeExam.questions.length}
            </div>
          </div>

          {/* Exam Title Card */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <h2 className="text-xl font-bold text-stone-900">{activeExam.titleEs}</h2>
            <p className="text-xs text-stone-500 armenian-font mt-0.5">{activeExam.titleHy}</p>
          </div>

          {/* Questions */}
          <div className="space-y-5">
            {activeExam.questions.map((q, idx) => {
              const selectedIdx = userAnswers[q.id];
              const isCorrect = selectedIdx === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border p-5 bg-white transition-all ${
                    isSubmitted
                      ? isCorrect
                        ? 'border-emerald-300 ring-1 ring-emerald-200'
                        : 'border-rose-300 ring-1 ring-rose-200'
                      : 'border-stone-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-md bg-stone-100 px-2.5 py-0.5 text-xs font-bold text-stone-600">
                      Pregunta {idx + 1}
                    </span>
                    {isSubmitted && (
                      <span className={`inline-flex items-center gap-1 text-xs font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {isCorrect ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        <span>{isCorrect ? 'Correcta' : 'Incorrecta'}</span>
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <QuizArmenianQuestion
                      key={q.id}
                      questionEs={q.questionEs}
                      questionHy={q.questionHy}
                      audioText={q.questionEs}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.optionsEs.map((opt, optIdx) => {
                      const isSelected = selectedIdx === optIdx;

                      return (
                        <QuizArmenianOption
                          key={optIdx}
                          optEs={opt}
                          optHy={q.optionsHy[optIdx]}
                          indexLabel={String.fromCharCode(65 + optIdx)}
                          isSelected={isSelected}
                          isChecked={isSubmitted}
                          isCorrect={isCorrect}
                          isCorrectAnswer={optIdx === q.correctIndex}
                          disabled={isSubmitted}
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                        />
                      );
                    })}
                  </div>

                  {isSubmitted && (
                    <div className={`mt-4 rounded-xl p-3.5 text-xs ${isCorrect ? 'bg-emerald-50 text-emerald-950 border border-emerald-200' : 'bg-rose-50 text-rose-950 border border-rose-200'}`}>
                      <p className="font-bold">{isCorrect ? 'Acierto:' : 'Explicación del error:'}</p>
                      <p className="mt-1 font-sans">{q.explanationEs}</p>
                      <p className="mt-1 armenian-font opacity-90">{q.explanationHy}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit bar */}
          {!isSubmitted ? (
            <div className="sticky bottom-4 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-stone-300 shadow-lg flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-stone-700">
                  {Object.keys(userAnswers).length} de {activeExam.questions.length} respondidas
                </span>
              </div>
              <button
                type="button"
                onClick={handleSubmitExam}
                className="rounded-xl bg-red-800 px-6 py-3 text-xs font-bold text-white hover:bg-red-900 shadow-sm"
              >
                Finalizar y Calificar Examen (Ավարտել և գնահատել)
              </button>
            </div>
          ) : (
            /* Results Card */
            scoreResult && (
              <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 text-center space-y-4 shadow-sm animate-fadeIn">
                <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-amber-950 text-3xl font-black">
                  {scoreResult.score}/10
                </div>

                {(() => {
                  const grade = getSpanishGradeLabel(scoreResult.score);
                  return (
                    <div>
                      <span className={`inline-block rounded-xl px-4 py-1.5 text-sm font-extrabold border ${grade.color}`}>
                        {grade.es} • <span className="armenian-font font-bold">{grade.hy}</span>
                      </span>
                      <h3 className="text-2xl font-black text-stone-900 mt-2">
                        {scoreResult.score >= 5 ? '¡Examen Aprobado!' : 'Examen Suspenso'}
                      </h3>
                      <p className="text-sm text-stone-600 mt-1">
                        Has acertado {scoreResult.correct} de {scoreResult.total} preguntas ({((scoreResult.correct / scoreResult.total) * 100).toFixed(0)}%).
                      </p>
                      <p className="text-xs text-stone-500 armenian-font mt-1">
                        Բոլոր սխալ պատասխանները ավտոմատ ավելացվել են «Mis errores / Իմ սխալները» բաժնում՝ հետագա կրկնության համար։
                      </p>
                    </div>
                  );
                })()}

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleStartExam(activeExam)}
                    className="rounded-xl border border-stone-200 px-5 py-2.5 text-xs font-bold text-stone-700 hover:bg-stone-50"
                  >
                    Repetir examen
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveExam(null)}
                    className="rounded-xl bg-red-800 px-5 py-2.5 text-xs font-bold text-white hover:bg-red-900"
                  >
                    Ver otros exámenes
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};
