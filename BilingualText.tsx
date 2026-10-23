import React, { useState } from 'react';
import { Volume2, ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';
import { speakSpanish } from './speech.ts';

interface BilingualTextProps {
  es: string;
  hy: string;
  noteEs?: string;
  noteHy?: string;
  className?: string;
  showAudio?: boolean;
  defaultExpanded?: boolean;
}

export const BilingualText: React.FC<BilingualTextProps> = ({
  es,
  hy,
  noteEs,
  noteHy,
  className = '',
  showAudio = true,
  defaultExpanded = false
}) => {
  const [showArmenian, setShowArmenian] = useState(defaultExpanded);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(true);
    speakSpanish(es, () => setIsPlaying(false), () => setIsPlaying(false));
  };

  return (
    <div
      onClick={() => setShowArmenian(!showArmenian)}
      className={`group cursor-pointer rounded-xl border border-amber-200/80 bg-white p-3.5 transition-all duration-200 hover:border-amber-400 hover:shadow-md ${className}`}
      title="Haz clic para ver/ocultar la traducción en armenio • Սեղմիր հայերեն թարգմանությունը տեսնելու համար"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="text-base sm:text-lg font-medium text-stone-900 leading-relaxed group-hover:text-amber-950">
            {es}
          </div>
          {noteEs && (
            <div className="mt-1 text-sm text-amber-700/90 font-sans italic">
              {noteEs}
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {showAudio && (
            <button
              type="button"
              onClick={handlePlayAudio}
              className={`rounded-lg p-2 transition-colors ${
                isPlaying ? 'bg-amber-500 text-white animate-pulse' : 'text-stone-400 hover:bg-amber-100 hover:text-amber-800'
              }`}
              title="Escuchar pronunciación (España)"
              aria-label="Escuchar pronunciación"
            >
              <Volume2 className="h-4.5 w-4.5" />
            </button>
          )}
          <span
            className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-xs sm:text-sm font-semibold transition-colors ${
              showArmenian ? 'bg-amber-100 text-amber-900' : 'bg-stone-100 text-stone-700 group-hover:bg-amber-50 group-hover:text-amber-800'
            }`}
          >
            {showArmenian ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
            <span className="font-sans">Հայ</span>
          </span>
        </div>
      </div>

      {showArmenian && (
        <div className="mt-3 pt-2.5 border-t border-amber-150 animate-fadeIn">
          <div className="text-base sm:text-lg font-normal text-stone-800 font-sans leading-relaxed armenian-font">
            {hy}
          </div>
          {noteHy && (
            <div className="mt-1.5 text-sm text-amber-800/90 armenian-font italic">
              {noteHy}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
