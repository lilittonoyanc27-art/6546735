import React, { useState } from 'react';
import { SYNTAX_EXERCISES, SYNTAX_TAGS } from './syntaxExercises.ts';
import type { SyntaxSentenceExercise } from './types.ts';
import { Volume2, CheckCircle2, XCircle, RotateCcw, Lightbulb, Sparkles } from 'lucide-react';
import { speakSpanish } from './speech.ts';
import { addPoints } from './storage.ts';
import confetti from 'canvas-confetti';

export const SyntaxTool: React.FC = () => {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const currentExercise = SYNTAX_EXERCISES[exerciseIndex];
  
  // Split sentence into words/tokens
  const words = currentExercise.sentence.replace(/[.,]/g, '').split(' ');
  const [wordTags, setWordTags] = useState<Record<number, string>>({});
  const [activeTag, setActiveTag] = useState<string>('sujeto');
  const [showSolution, setShowSolution] = useState(false);
  const [feedback, setFeedback] = useState<{ checked: boolean; isCorrect: boolean; messageEs: string; messageHy: string } | null>(null);

  const handleWordClick = (index: number) => {
    setWordTags(prev => {
      const next = { ...prev };
      if (next[index] === activeTag) {
        delete next[index]; // toggle off
      } else {
        next[index] = activeTag;
      }
      return next;
    });
    setFeedback(null);
  };

  const resetAnalysis = () => {
    setWordTags({});
    setFeedback(null);
    setShowSolution(false);
  };

  const handleNextSentence = () => {
    setExerciseIndex(prev => (prev + 1) % SYNTAX_EXERCISES.length);
    resetAnalysis();
  };

  const handleCheck = () => {
    // Check subject coverage and predicate coverage
    const [sStart, sEnd] = currentExercise.sujetoRange;
    const [pStart, pEnd] = currentExercise.predicadoRange;

    let subjectCorrect = true;
    for (let i = sStart; i <= sEnd; i++) {
      if (wordTags[i] !== 'sujeto' && wordTags[i] !== 'ns') {
        subjectCorrect = false;
        break;
      }
    }

    let predicateCorrect = true;
    for (let i = pStart; i <= pEnd; i++) {
      if (wordTags[i] !== 'predicado' && wordTags[i] !== 'np' && wordTags[i] !== 'cd' && wordTags[i] !== 'ci' && wordTags[i] !== 'cc') {
        predicateCorrect = false;
        break;
      }
    }

    const nsMarked = wordTags[currentExercise.nucleoSujetoIndex] === 'ns' || wordTags[currentExercise.nucleoSujetoIndex] === 'sujeto';
    const npMarked = wordTags[currentExercise.nucleoPredicadoIndex] === 'np' || wordTags[currentExercise.nucleoPredicadoIndex] === 'predicado';

    const isAllCorrect = subjectCorrect && predicateCorrect;

    if (isAllCorrect) {
      addPoints(25);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      setFeedback({
        checked: true,
        isCorrect: true,
        messageEs: '¡Excelente análisis! Has identificado con precisión el Sujeto y el Predicado de la oración.',
        messageHy: 'Հիանալի՛ վերլուծություն։ Դու ճշգրտորեն որոշեցիր նախադասության ենթական և ստորոգյալը։'
      });
    } else {
      setFeedback({
        checked: true,
        isCorrect: false,
        messageEs: 'Casi lo tienes. Revisa qué palabras concuerdan con el verbo para ajustar el Sujeto y el Predicado.',
        messageHy: 'Շատ մոտ ես։ Ուշադրություն դարձրու, թե որ բառերն են համաձայնում բայի հետ ենթական ճիշտ որոշելու համար։'
      });
    }
  };

  const getTagClass = (tagKey?: string) => {
    if (!tagKey) return 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800';
    const found = SYNTAX_TAGS.find(t => t.key === tagKey);
    return found ? `${found.highlightClass} font-semibold shadow-xs` : 'bg-white border-stone-200';
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-900 uppercase tracking-wide">
              Módulo 4: Sintaxis
            </span>
            <span className="rounded-md bg-stone-100 px-2 py-0.5 text-xs text-stone-600 font-sans">
              Oración {exerciseIndex + 1} de {SYNTAX_EXERCISES.length}
            </span>
          </div>
          <h2 className="mt-2 text-xl font-bold text-stone-900">
            Analizador Sintáctico Interactivo por Colores
          </h2>
          <p className="text-sm text-stone-600 armenian-font">
            Ինտերակտիվ շարահյուսական վերլուծիչ՝ գունային առանձնացմամբ
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleNextSentence}
            className="rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
          >
            Siguiente oración →
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-4 rounded-xl bg-amber-50/60 p-3.5 text-xs text-amber-950 flex items-start gap-2.5">
        <Lightbulb className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
        <div>
          <span className="font-bold">Cómo analizar:</span> 1) Selecciona una herramienta de color abajo (Sujeto o Predicado). 2) Haz clic en cada palabra para pintarla. 3) Pulsa «Comprobar análisis».
          <div className="mt-1 text-stone-700 armenian-font">
            Ինչպես վերլուծել. 1) Ներքևից ընտրիր գույնը (Ենթակա կամ Ստորոգյալ)։ 2) Սեղմիր բառերի վրա՝ դրանք նշելու համար։ 3) Սեղմիր «Ստուգել»։
          </div>
        </div>
      </div>

      {/* Color Palette Selector */}
      <div className="mt-5">
        <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
          Herramientas de etiquetado / <span className="armenian-font font-semibold lowercase">նշման գործիքներ</span>:
        </label>
        <div className="flex flex-wrap gap-2">
          {SYNTAX_TAGS.map(tag => (
            <button
              key={tag.key}
              type="button"
              onClick={() => setActiveTag(tag.key)}
              className={`rounded-xl border px-3 py-2 text-xs font-bold transition-all flex items-center gap-1.5 ${
                tag.badgeClass
              } ${activeTag === tag.key ? 'ring-2 ring-stone-900 ring-offset-1 scale-105 shadow-sm' : 'opacity-80'}`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-current opacity-80" />
              <span>{tag.labelEs}</span>
              <span className="text-[10px] opacity-75 armenian-font">({tag.labelHy})</span>
            </button>
          ))}
          <button
            type="button"
            onClick={() => setActiveTag('')}
            className={`rounded-xl border border-stone-300 bg-stone-100 px-3 py-2 text-xs font-medium text-stone-700 hover:bg-stone-200 transition-all ${
              activeTag === '' ? 'ring-2 ring-stone-900' : ''
            }`}
          >
            🧹 Borrador (ջնջիչ)
          </button>
        </div>
      </div>

      {/* The Interactive Sentence Canvas */}
      <div className="mt-6 rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50/50 p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <button
            type="button"
            onClick={() => speakSpanish(currentExercise.sentence)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900 hover:bg-amber-200 transition-colors"
          >
            <Volume2 className="h-3.5 w-3.5 text-amber-700" />
            <span>Escuchar frase</span>
          </button>
        </div>

        {/* Word Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 my-4">
          {words.map((word, idx) => {
            const tagKey = wordTags[idx];
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleWordClick(idx)}
                className={`rounded-xl border px-3.5 py-2 text-lg font-medium transition-all duration-150 transform active:scale-95 ${getTagClass(
                  tagKey
                )}`}
              >
                <span>{word}</span>
                {tagKey && (
                  <span className="block text-[10px] uppercase font-bold tracking-tight opacity-75">
                    {tagKey === 'ns' ? 'N' : tagKey === 'np' ? 'NV' : tagKey.toUpperCase()}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Armenian translation of sentence */}
        <div className="mt-3 text-sm text-stone-600 armenian-font font-medium">
          Թարգմանություն. {currentExercise.translationHy}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={resetAnalysis}
          className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 px-4 py-2.5 text-xs font-semibold text-stone-600 hover:bg-stone-50"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Reiniciar (մաքրել)</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowSolution(!showSolution)}
            className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-2.5 text-xs font-semibold text-amber-900 hover:bg-amber-100 transition-colors"
          >
            {showSolution ? 'Ocultar solución' : 'Ver solución guiada / Լուծումը'}
          </button>

          <button
            type="button"
            onClick={handleCheck}
            className="rounded-xl bg-gradient-to-r from-red-700 to-amber-700 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:from-red-800 hover:to-amber-800 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="h-4 w-4" />
            <span>Comprobar análisis (Ստուգել)</span>
          </button>
        </div>
      </div>

      {/* Feedback Banner */}
      {feedback && (
        <div
          className={`mt-4 rounded-xl border p-4 ${
            feedback.isCorrect
              ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
              : 'border-rose-200 bg-rose-50 text-rose-900'
          }`}
        >
          <div className="flex items-start gap-2.5">
            {feedback.isCorrect ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-semibold text-sm">{feedback.messageEs}</p>
              <p className="text-xs mt-1 armenian-font opacity-90">{feedback.messageHy}</p>
            </div>
          </div>
        </div>
      )}

      {/* Guided Solution Drawer */}
      {showSolution && (
        <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50/60 p-5 animate-fadeIn">
          <h4 className="text-sm font-bold text-blue-950 uppercase tracking-wide flex items-center gap-2">
            <span>Árbol Sintáctico Oficial (1.º ESO)</span>
            <span className="rounded-md bg-blue-200/80 px-2 py-0.5 text-[11px] text-blue-900 font-sans">
              Predicado {currentExercise.tipoPredicado}
            </span>
          </h4>
          <p className="mt-2 text-sm text-blue-900 leading-relaxed font-sans">
            {currentExercise.explicacionEs}
          </p>
          <p className="mt-2 text-xs text-blue-950/80 armenian-font leading-relaxed pt-2 border-t border-blue-200/60">
            {currentExercise.explicacionHy}
          </p>
        </div>
      )}
    </div>
  );
};
