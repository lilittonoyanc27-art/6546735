import React, { useState } from 'react';
import { Eye, EyeOff, Volume2 } from 'lucide-react';
import { speakSpanish } from './speech.ts';

interface QuizArmenianQuestionProps {
  questionEs: string;
  questionHy: string;
  audioText?: string;
  className?: string;
  darkTheme?: boolean;
}

export const QuizArmenianQuestion: React.FC<QuizArmenianQuestionProps> = ({
  questionEs,
  questionHy,
  audioText,
  className = '',
  darkTheme = false
}) => {
  const [revealed, setRevealed] = useState(false);

  const handleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakSpanish(audioText || questionEs);
  };

  const handleToggle = () => {
    setRevealed(prev => !prev);
  };

  return (
    <div
      onClick={handleToggle}
      className={`group cursor-pointer select-none rounded-2xl p-4 transition-all duration-200 ${
        darkTheme
          ? 'bg-stone-800/90 border border-amber-500/30 hover:border-amber-400'
          : 'bg-stone-50 border border-stone-200 hover:border-amber-400 hover:bg-amber-50/30'
      } ${className}`}
      title="Haz clic para ver u ocultar la traducción en armenio • Սեղմիր հայերեն թարգմանության համար"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3
            className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
              darkTheme
                ? 'text-amber-100 group-hover:text-amber-200'
                : 'text-stone-900 group-hover:text-amber-950'
            }`}
          >
            {questionEs}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {audioText && (
            <button
              type="button"
              onClick={handleAudio}
              className={`p-1.5 rounded-lg transition-colors ${
                darkTheme
                  ? 'text-amber-400 hover:bg-stone-700 hover:text-amber-300'
                  : 'text-stone-400 hover:bg-stone-200 hover:text-amber-800'
              }`}
              title="Escuchar audio"
            >
              <Volume2 className="h-4 w-4" />
            </button>
          )}

          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all shadow-2xs ${
              revealed
                ? darkTheme
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-amber-100 text-amber-900 border border-amber-300'
                : darkTheme
                ? 'bg-stone-700 text-stone-300 border border-stone-600 group-hover:border-amber-400 group-hover:text-amber-300'
                : 'bg-white text-stone-600 border border-stone-200 group-hover:border-amber-300 group-hover:text-amber-800'
            }`}
          >
            {revealed ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
            <span className="font-sans">Հայ</span>
          </span>
        </div>
      </div>

      {revealed ? (
        <div
          className={`mt-2.5 pt-2 border-t text-sm sm:text-base armenian-font leading-relaxed animate-fadeIn ${
            darkTheme
              ? 'border-stone-700 text-amber-200/90'
              : 'border-amber-200/80 text-stone-700'
          }`}
        >
          {questionHy}
        </div>
      ) : (
        <div
          className={`mt-1.5 text-[11px] armenian-font italic transition-colors flex items-center gap-1 ${
            darkTheme
              ? 'text-stone-400 group-hover:text-amber-300/80'
              : 'text-stone-400 group-hover:text-amber-800'
          }`}
        >
          <span>👁️</span>
          <span>սեղմիր իսպաներենին՝ հայերեն թարգմանության համար</span>
        </div>
      )}
    </div>
  );
};

interface QuizArmenianOptionProps {
  optEs: string;
  optHy?: string;
  indexLabel?: string;
  isSelected?: boolean;
  isChecked?: boolean;
  isCorrect?: boolean;
  isCorrectAnswer?: boolean;
  darkTheme?: boolean;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const QuizArmenianOption: React.FC<QuizArmenianOptionProps> = ({
  optEs,
  optHy,
  indexLabel,
  isSelected = false,
  isChecked = false,
  isCorrect = false,
  isCorrectAnswer = false,
  darkTheme = false,
  onClick,
  className = '',
  disabled = false
}) => {
  const [revealed, setRevealed] = useState(false);

  // Auto-reveal if the user has selected this option or checked the result
  const shouldShowTranslation = revealed || isSelected || isChecked;

  const handleToggleTranslation = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRevealed(prev => !prev);
  };

  // Determine styling based on state
  let stateClasses = '';
  if (darkTheme) {
    if (isSelected) {
      if (isChecked) {
        stateClasses = isCorrect
          ? 'border-emerald-500 bg-emerald-900/80 text-white font-bold'
          : 'border-rose-500 bg-rose-900/80 text-white font-bold';
      } else {
        stateClasses = 'border-amber-400 bg-amber-900/40 text-amber-100 font-semibold';
      }
    } else if (isChecked && isCorrectAnswer) {
      stateClasses = 'border-emerald-500 bg-emerald-950/60 text-emerald-200';
    } else {
      stateClasses = 'border-stone-700 bg-stone-800 hover:border-amber-400 hover:bg-stone-700/60 text-stone-100';
    }
  } else {
    if (isSelected) {
      if (isChecked) {
        stateClasses = isCorrect
          ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold'
          : 'bg-rose-50 border-rose-500 text-rose-950 font-bold';
      } else {
        stateClasses = 'bg-amber-50 border-amber-500 text-amber-950 font-semibold';
      }
    } else if (isChecked && isCorrectAnswer) {
      stateClasses = 'bg-emerald-50/60 border-emerald-400 text-emerald-900 font-semibold';
    } else {
      stateClasses = 'bg-white border-stone-200 text-stone-900 hover:bg-stone-50 hover:border-amber-300';
    }
  }

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onKeyDown={e => {
        if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`group rounded-xl border p-3.5 text-left transition-all ${
        disabled ? 'cursor-default opacity-85' : 'cursor-pointer'
      } relative select-none ${stateClasses} ${className}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1">
          {indexLabel && (
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                darkTheme
                  ? 'bg-stone-700 text-amber-300'
                  : 'bg-stone-100 text-stone-700 group-hover:bg-amber-100'
              }`}
            >
              {indexLabel}
            </span>
          )}
          <span className="text-base font-semibold leading-snug">{optEs}</span>
        </div>

        {optHy && (
          <span
            role="button"
            tabIndex={0}
            onClick={handleToggleTranslation}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                setRevealed(prev => !prev);
              }
            }}
            className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium transition-colors shrink-0 shadow-2xs cursor-pointer ${
              shouldShowTranslation
                ? darkTheme
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                  : 'bg-amber-100 text-amber-900 border border-amber-200'
                : darkTheme
                ? 'bg-stone-700/80 text-stone-300 hover:bg-amber-500/20 hover:text-amber-300'
                : 'bg-stone-100 text-stone-600 hover:bg-amber-100 hover:text-amber-900'
            }`}
            title="Haz clic para ver u ocultar la traducción en armenio de esta opción • Սեղմիր այս տարբերակի հայերեն թարգմանության համար"
          >
            {shouldShowTranslation ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
            <span className="armenian-font">Հայ</span>
          </span>
        )}
      </div>

      {optHy && shouldShowTranslation && (
        <div
          className={`text-sm armenian-font mt-1.5 pl-8 animate-fadeIn font-normal ${
            darkTheme ? 'text-amber-200/90' : 'text-stone-700'
          }`}
        >
          {optHy}
        </div>
      )}
    </div>
  );
};

interface QuizArmenianSentencePromptProps {
  sentenceEs: string;
  sentenceHy: string;
  className?: string;
}

export const QuizArmenianSentencePrompt: React.FC<QuizArmenianSentencePromptProps> = ({
  sentenceEs,
  sentenceHy,
  className = ''
}) => {
  const [revealed, setRevealed] = useState(false);

  const handleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakSpanish(sentenceEs);
  };

  return (
    <div
      onClick={() => setRevealed(prev => !prev)}
      className={`group cursor-pointer rounded-xl bg-stone-50 p-4 border border-stone-200/90 hover:border-amber-400 hover:bg-amber-50/20 transition-all ${className}`}
      title="Haz clic en la frase para ver la traducción en armenio • Սեղմիր նախադասությանը հայերեն թարգմանությունը տեսնելու համար"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-base sm:text-lg font-semibold text-stone-900 leading-relaxed group-hover:text-amber-950">
          {sentenceEs}
        </span>
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={handleAudio}
            className="p-1.5 rounded-lg text-stone-400 hover:text-amber-800 transition-colors"
            title="Escuchar frase"
          >
            <Volume2 className="h-4.5 w-4.5" />
          </button>
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold shadow-2xs transition-colors ${
              revealed ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-white text-stone-600 border border-stone-200 group-hover:border-amber-300'
            }`}
          >
            {revealed ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
            <span className="font-sans">Հայ</span>
          </span>
        </div>
      </div>

      {revealed ? (
        <div className="text-sm sm:text-base text-stone-700 armenian-font mt-2 pt-1.5 border-t border-amber-200/60 animate-fadeIn font-normal">
          {sentenceHy}
        </div>
      ) : (
        <div className="text-[11px] text-stone-400 group-hover:text-amber-800 armenian-font mt-1 italic flex items-center gap-1">
          <span>👁️</span>
          <span>սեղմիր իսպաներենին՝ հայերեն թարգմանության համար</span>
        </div>
      )}
    </div>
  );
};
