import React, { useState } from 'react';
import { UserMistake, UserStats } from './types.ts';
import { loadUserStats, removeMistake, addPoints } from './storage.ts';
import { RotateCcw, CheckCircle2, Trash2, BookOpen, AlertCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const MistakesReviewView: React.FC<{ onNavigateToTopic?: (topicId: string) => void }> = () => {
  const [stats, setStats] = useState<UserStats>(loadUserStats());
  const [resolvedIds, setResolvedIds] = useState<string[]>([]);

  const handleResolve = (m: UserMistake) => {
    setResolvedIds(prev => [...prev, m.id]);
    const updated = removeMistake(m.id);
    addPoints(15);
    setStats(updated);
    confetti({ particleCount: 30, spread: 60 });
  };

  const handleClearAll = () => {
    const updated = { ...stats, mistakes: [] };
    localStorage.setItem('lengua_eso1_student_progress_v1', JSON.stringify(updated));
    setStats(updated);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-red-800 via-rose-800 to-amber-700 p-6 sm:p-8 text-white shadow-md">
        <div className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-md">
          <span>Banco de Errores Escolar</span>
          <span>•</span>
          <span className="armenian-font">Սխալների կրկնություն և ուղղում</span>
        </div>
        <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Mis Errores y Cuaderno de Repaso
        </h1>
        <p className="mt-1.5 text-sm text-amber-100 armenian-font">
          Կրկնիր քննություններում և թեստերում կատարած սխալները, հասկացիր պատճառը և հաղթահարիր դրանք։
        </p>
      </div>

      <div className="flex items-center justify-between bg-white px-5 py-3.5 rounded-2xl border border-stone-200">
        <div className="flex items-center gap-2 text-sm font-bold text-stone-700">
          <AlertCircle className="h-4 w-4 text-rose-600" />
          <span>Total de preguntas a repasar: {stats.mistakes.length}</span>
        </div>

        {stats.mistakes.length > 0 && (
          <button
            type="button"
            onClick={handleClearAll}
            className="text-xs font-semibold text-stone-500 hover:text-rose-600 flex items-center gap-1"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>Limpiar todo</span>
          </button>
        )}
      </div>

      {stats.mistakes.length === 0 ? (
        <div className="rounded-3xl border border-stone-200 bg-white p-12 text-center space-y-4">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-3xl font-black">
            ✨
          </div>
          <h3 className="text-xl font-bold text-stone-900">
            ¡Tu cuaderno de errores está completamente limpio!
          </h3>
          <p className="text-sm text-stone-600 armenian-font max-w-md mx-auto">
            Դու չունես կուտակված սխալներ։ Շարունակիր կատարել վարժություններն ու քննությունները։
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {stats.mistakes.map(m => (
            <div
              key={m.id}
              className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs space-y-3 transition-all hover:border-amber-300"
            >
              <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-2">
                <span className="rounded-md bg-stone-100 px-2.5 py-0.5 text-xs font-bold text-stone-700">
                  {m.topicTitleEs}
                </span>
                <span className="text-[11px] text-stone-400">
                  {new Date(m.timestamp).toLocaleDateString()}
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-stone-900 leading-snug">{m.questionEs}</h4>
                <p className="text-xs text-stone-500 armenian-font mt-1">{m.questionHy}</p>
              </div>

              {/* Answers Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-3">
                  <span className="font-bold text-rose-800 block mb-1">Tu respuesta (Սխալ ընտրություն):</span>
                  <span className="text-rose-950 font-medium">{m.userAnswer}</span>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3">
                  <span className="font-bold text-emerald-800 block mb-1">Respuesta correcta (Ճիշտ պատասխան):</span>
                  <span className="text-emerald-950 font-bold">{m.correctAnswer}</span>
                </div>
              </div>

              {/* Bilingual Explanation */}
              <div className="rounded-xl bg-amber-50/60 border border-amber-200/70 p-3.5 text-xs">
                <span className="font-bold text-amber-950 block mb-1">Explicación escolar / Բացատրություն:</span>
                <p className="text-stone-800 font-sans leading-relaxed">{m.explanationEs}</p>
                <p className="text-stone-700 armenian-font mt-1 leading-relaxed pt-2 border-t border-amber-200/50">
                  {m.explanationHy}
                </p>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={() => handleResolve(m)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-700 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-800 transition-all shadow-xs"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>¡Ya lo entiendo! Eliminar error (+15 pts)</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
