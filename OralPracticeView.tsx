import React, { useState } from 'react';
import { ORAL_SCENARIOS } from './oralData.ts';
import { Volume2, RotateCcw, CheckCircle2, MessageCircle, Sparkles, Eye, EyeOff } from 'lucide-react';
import { speakSpanish } from './speech.ts';
import { addPoints } from './storage.ts';
import confetti from 'canvas-confetti';

export const OralPracticeView: React.FC = () => {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const scenario = ORAL_SCENARIOS[activeScenarioIdx];

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showPromptHy, setShowPromptHy] = useState(false);
  const [revealedOptions, setRevealedOptions] = useState<Record<string, boolean>>({});

  const handlePlayAudio = () => {
    setIsPlayingAudio(true);
    speakSpanish(
      scenario.audioPromptText,
      () => setIsPlayingAudio(false),
      () => setIsPlayingAudio(false)
    );
  };

  const handleSelectOption = (optId: string, isAppropriate: boolean) => {
    setSelectedOptionId(optId);
    if (isAppropriate) {
      addPoints(20);
      confetti({ particleCount: 40, spread: 50 });
    }
  };

  const selectedOpt = scenario.options.find(o => o.id === selectedOptionId);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-red-800 via-rose-800 to-amber-700 p-6 sm:p-8 text-white shadow-md">
        <div className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-md">
          <span>Práctica Oral en el Instituto</span>
          <span>•</span>
          <span className="armenian-font">Բանավոր խոսքի վարժանքներ դասարանում</span>
        </div>
        <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Conversaciones Reales en la Escuela Española
        </h1>
        <p className="mt-1.5 text-sm text-amber-100 armenian-font">
          Սովորիր ազատ, բնական և քաղաքավարի շփվել ուսուցիչների և դասընկերների հետ Իսպանիայում։
        </p>
      </div>

      {/* Scenario Selector Ribbon */}
      <div className="flex overflow-x-auto gap-2 pb-2">
        {ORAL_SCENARIOS.map((sc, i) => (
          <button
            key={sc.id}
            type="button"
            onClick={() => {
              setActiveScenarioIdx(i);
              setSelectedOptionId(null);
              setShowPromptHy(false);
              setRevealedOptions({});
            }}
            className={`rounded-xl px-4 py-2 text-xs font-bold whitespace-nowrap transition-all ${
              activeScenarioIdx === i
                ? 'bg-red-800 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {sc.titleEs}
          </button>
        ))}
      </div>

      {/* Classroom Dialog Box */}
      <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        {/* Context Note */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
            Situación en clase / Իրավիճակը դասարանում:
          </div>
          <p className="text-sm text-stone-800 font-medium">{scenario.contextEs}</p>
          <p className="text-xs text-stone-600 armenian-font mt-1">{scenario.contextHy}</p>
        </div>

        {/* Teacher/Classmate Prompt with Audio */}
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/20 p-5 sm:p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-amber-200/80 px-2.5 py-1 text-xs font-bold text-amber-950">
              {scenario.speakerEs} ({scenario.speakerHy})
            </span>

            {/* Audio & Listen Again buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePlayAudio}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                  isPlayingAudio
                    ? 'bg-amber-600 text-white animate-pulse'
                    : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                }`}
              >
                <Volume2 className="h-4 w-4" />
                <span>Escuchar voz</span>
              </button>

              <button
                type="button"
                onClick={handlePlayAudio}
                className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                title="Escuchar de nuevo"
              >
                <RotateCcw className="h-3.5 w-3.5 text-stone-500" />
                <span>Escuchar de nuevo</span>
              </button>
            </div>
          </div>

          <div
            onClick={() => setShowPromptHy(prev => !prev)}
            className="group cursor-pointer select-none rounded-xl p-3 hover:bg-amber-100/40 transition-colors"
            title="Haz clic para ver u ocultar la traducción en armenio • Սեղմիր հայերեն թարգմանության համար"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-lg font-bold text-stone-900 font-sans leading-relaxed group-hover:text-amber-950">
                {scenario.promptEs}
              </p>
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold shadow-2xs transition-colors shrink-0 ${showPromptHy ? 'bg-amber-200 text-amber-950 border border-amber-300' : 'bg-white text-stone-600 border border-stone-200 group-hover:border-amber-300'}`}>
                {showPromptHy ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                <span className="font-sans">Հայ</span>
              </span>
            </div>
            {showPromptHy ? (
              <p className="text-sm text-stone-700 armenian-font border-t border-amber-200/60 pt-2 mt-2 animate-fadeIn">
                {scenario.promptHy}
              </p>
            ) : (
              <p className="text-[11px] text-stone-400 group-hover:text-amber-800 armenian-font italic mt-1">
                👁️ սեղմիր իսպաներենին՝ հայերեն թարգմանության համար
              </p>
            )}
          </div>
        </div>

        {/* 3-4 Response Options */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
            ¿Cómo responderías tú en clase? / Ինչպե՞ս կպատասխանեիր դու.
          </label>

          <div className="grid grid-cols-1 gap-3">
            {scenario.options.map((opt, oIdx) => {
              const isSelected = selectedOptionId === opt.id;
              const isRevealed = revealedOptions[opt.id] || isSelected;

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectOption(opt.id, opt.isAppropriate)}
                  className={`rounded-2xl border p-4 text-left transition-all ${
                    isSelected
                      ? opt.isAppropriate
                        ? 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-medium ring-2 ring-emerald-300'
                        : 'border-amber-500 bg-amber-50/70 text-amber-950 font-medium ring-2 ring-amber-300'
                      : 'border-stone-200 bg-white hover:bg-stone-50/80 hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xs font-bold text-stone-700 mt-0.5">
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-semibold text-stone-900 leading-relaxed">
                          {opt.textEs}
                        </span>
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            setRevealedOptions(prev => ({ ...prev, [opt.id]: !prev[opt.id] }));
                          }}
                          className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium text-stone-500 hover:bg-amber-100 hover:text-amber-900 border border-stone-200 shrink-0"
                          title="Ver traducción armenia"
                        >
                          {isRevealed ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                          <span className="armenian-font">Հայ</span>
                        </span>
                      </div>
                      {isRevealed && (
                        <div className="text-xs text-stone-600 armenian-font mt-1 animate-fadeIn">
                          {opt.textHy}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pedagogical Feedback */}
        {selectedOpt && (
          <div
            className={`rounded-2xl border p-5 space-y-2 animate-fadeIn ${
              selectedOpt.isAppropriate
                ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                : 'border-amber-300 bg-amber-50 text-amber-950'
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span className="text-xs font-bold uppercase tracking-wide">
                Valoración: {selectedOpt.ratingEs} • <span className="armenian-font">{selectedOpt.ratingHy}</span>
              </span>
            </div>
            <p className="text-sm font-sans leading-relaxed">{selectedOpt.feedbackEs}</p>
            <p className="text-xs armenian-font pt-2 border-t border-emerald-200/60 opacity-90">
              {selectedOpt.feedbackHy}
            </p>
          </div>
        )}

        {/* Next Scenario button */}
        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={() => {
              setActiveScenarioIdx((activeScenarioIdx + 1) % ORAL_SCENARIOS.length);
              setSelectedOptionId(null);
            }}
            className="rounded-xl bg-red-800 px-6 py-2.5 text-xs font-bold text-white hover:bg-red-900 shadow-sm transition-all"
          >
            Siguiente situación escolar →
          </button>
        </div>
      </div>
    </div>
  );
};
