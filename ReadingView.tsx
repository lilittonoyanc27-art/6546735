import React, { useState } from 'react';
import { READING_TEXTS } from './readingTexts.ts';
import { ReadingText } from './types.ts';
import { BookOpen, Volume2, Eye, EyeOff, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { speakSpanish } from './speech.ts';
import { addPoints } from './storage.ts';
import { QuizArmenianQuestion, QuizArmenianOption } from './QuizArmenianText.tsx';
import confetti from 'canvas-confetti';

export const ReadingView: React.FC = () => {
  const [selectedTextIdx, setSelectedTextIdx] = useState(0);
  const reading = READING_TEXTS[selectedTextIdx];

  // Track which paragraphs have their Armenian translation expanded
  const [openParagraphs, setOpenParagraphs] = useState<Record<number, boolean>>({});
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [checkedAnswers, setCheckedAnswers] = useState<Record<string, boolean>>({});

  const toggleParagraphTranslation = (index: number) => {
    setOpenParagraphs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleSelectAnswer = (qId: string, optIdx: number) => {
    setUserAnswers(prev => ({ ...prev, [qId]: optIdx }));
    setCheckedAnswers(prev => ({ ...prev, [qId]: true }));

    const q = reading.questions.find(item => item.id === qId);
    if (q && optIdx === q.correctIndex) {
      addPoints(15);
      confetti({ particleCount: 30 });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-red-800 via-rose-800 to-amber-700 p-6 sm:p-8 text-white shadow-md">
        <div className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-md">
          <span>Comprensión Lectora • 1.º ESO</span>
          <span>•</span>
          <span className="armenian-font">Ընթերցածի ընկալում</span>
        </div>
        <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Lectura Comprensiva y Relatos Guiados
        </h1>
        <p className="mt-1.5 text-sm text-amber-100 armenian-font">
          Կարդա իսպաներեն պատմությունները, սեղմիր յուրաքանչյուր պարբերության վրա հայերեն թարգմանությունը տեսնելու համար և պատասխանիր հարցերին։
        </p>
      </div>

      {/* Story Selector */}
      <div className="flex overflow-x-auto gap-2 pb-2">
        {READING_TEXTS.map((t, idx) => (
          <button
            key={t.id}
            type="button"
            onClick={() => {
              setSelectedTextIdx(idx);
              setOpenParagraphs({});
              setUserAnswers({});
              setCheckedAnswers({});
            }}
            className={`rounded-xl px-4 py-2 text-xs font-bold whitespace-nowrap transition-all ${
              selectedTextIdx === idx
                ? 'bg-red-800 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {t.titleEs}
          </button>
        ))}
      </div>

      {/* Main Story Paper */}
      <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded-md bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-900">
                Nivel: {reading.level}
              </span>
              <span className="text-xs text-stone-500 font-sans">
                {reading.genreEs}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">{reading.titleEs}</h2>
            <p className="text-sm text-amber-900 armenian-font mt-0.5">{reading.titleHy}</p>
          </div>

          <button
            type="button"
            onClick={() => speakSpanish(reading.paragraphsEs.join(' '))}
            className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-2 text-xs font-bold text-stone-700 hover:bg-stone-100"
          >
            <Volume2 className="h-4 w-4 text-amber-700" />
            <span>Escuchar lectura</span>
          </button>
        </div>

        {/* Paragraphs with Click-to-reveal Armenian translation */}
        <div className="space-y-4">
          {reading.paragraphsEs.map((para, pIdx) => {
            const isOpen = openParagraphs[pIdx];
            return (
              <div
                key={pIdx}
                onClick={() => toggleParagraphTranslation(pIdx)}
                className="group cursor-pointer rounded-2xl border border-stone-200 bg-stone-50/50 p-4 sm:p-5 transition-all hover:border-amber-400 hover:bg-white hover:shadow-xs"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-base font-normal text-stone-900 font-sans leading-relaxed">
                    {para}
                  </p>
                  <button
                    type="button"
                    className="p-1 rounded-md text-stone-400 group-hover:text-amber-800 shrink-0"
                    title="Ver traducción armenia"
                  >
                    {isOpen ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>

                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-amber-100 text-sm font-normal text-stone-700 armenian-font leading-relaxed animate-fadeIn">
                    {reading.paragraphsHy[pIdx]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Vocabulary highlights */}
        {reading.vocabulary && reading.vocabulary.length > 0 && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-950 mb-3 flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span>Vocabulario clave • Բառապաշար</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {reading.vocabulary.map((v, i) => (
                <div key={i} className="rounded-xl bg-white p-3 border border-amber-200/80">
                  <div className="font-bold text-sm text-stone-900">{v.es}</div>
                  <div className="text-xs text-amber-800 armenian-font">{v.hy}</div>
                  <p className="mt-1 text-[11px] text-stone-600 leading-snug">{v.definitionEs}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comprehension Questions */}
        <div className="border-t border-stone-200 pt-6 space-y-6">
          <h3 className="text-lg font-bold text-stone-900">
            Preguntas de Comprensión Lectora ({reading.questions.length})
          </h3>

          <div className="space-y-5">
            {reading.questions.map((q, qIndex) => {
              const selectedIdx = userAnswers[q.id];
              const isChecked = checkedAnswers[q.id];
              const isCorrect = selectedIdx === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border p-5 bg-white transition-all ${
                    isChecked
                      ? isCorrect
                        ? 'border-emerald-300 ring-1 ring-emerald-200'
                        : 'border-rose-300 ring-1 ring-rose-200'
                      : 'border-stone-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="rounded-md bg-stone-100 px-2 py-0.5 text-xs font-bold text-stone-600">
                      Pregunta {qIndex + 1}
                    </span>
                    {isChecked && (
                      <span className={`inline-flex items-center gap-1 text-xs font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {isCorrect ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        <span>{isCorrect ? '¡Correcto! (+15 pts)' : 'Incorrecto'}</span>
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
                          isChecked={isChecked}
                          isCorrect={isCorrect}
                          isCorrectAnswer={optIdx === q.correctIndex}
                          disabled={isChecked}
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                        />
                      );
                    })}
                  </div>

                  {isChecked && (
                    <div className={`mt-4 rounded-xl p-3.5 text-xs ${isCorrect ? 'bg-emerald-50 text-emerald-950 border border-emerald-200' : 'bg-rose-50 text-rose-950 border border-rose-200'}`}>
                      <p className="font-bold">{isCorrect ? 'Por qué es correcto:' : 'Explicación del error:'}</p>
                      <p className="mt-1 font-sans">{q.explanationEs}</p>
                      <p className="mt-1 armenian-font opacity-90">{q.explanationHy}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
