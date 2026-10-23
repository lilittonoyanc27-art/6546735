import React, { useState, useEffect } from 'react';
import {
  MILLIONAIRE_QUESTIONS,
  LISTEN_QUESTIONS,
  TRUE_FALSE_CARDS,
  UNSCRAMBLE_TASKS,
  FIND_ERROR_TASKS,
  ESCAPE_ROOM_STEPS,
  MATCH_PAIRS
} from './gamesData.ts';
import { Volume2, Trophy, Clock, CheckCircle2, XCircle, Award, Sparkles, Swords, Key, HelpCircle, RotateCcw, Eye, EyeOff } from 'lucide-react';
import { speakSpanish } from './speech.ts';
import { addPoints, incrementGamesPlayed } from './storage.ts';
import { QuizArmenianQuestion, QuizArmenianOption } from './QuizArmenianText.tsx';
import confetti from 'canvas-confetti';

export type GameId =
  | 'millonario'
  | 'escucha'
  | 'verdadero_falso'
  | 'completa'
  | 'ordena'
  | 'error'
  | 'tipo_texto'
  | 'detective'
  | 'escapa'
  | 'reto60'
  | 'duelo'
  | 'historia'
  | 'parejas';

export const GamesHub: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameId | null>(null);

  return (
    <div className="space-y-6">
      {/* Game Selector or Active Game */}
      {!selectedGame ? (
        <div className="space-y-6">
          <div className="rounded-3xl bg-gradient-to-r from-red-800 via-rose-800 to-amber-700 p-6 sm:p-8 text-white shadow-md">
            <h1 className="text-2xl sm:text-3xl font-extrabold">
              Juegos Educativos Interactivos de Lengua 1.º ESO
            </h1>
            <p className="mt-2 text-base text-amber-100 armenian-font">
              Ինտերակտիվ կրթական խաղեր 7-րդ դասարանի իսպաներենի բոլոր թեմաներով
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 1. Millonario */}
            <GameCard
              titleEs="¿Quién quiere ser millonario?"
              titleHy="Ո՞վ է ուզում դառնալ միլիոնատեր"
              icon="💰"
              descEs="15 preguntas escolares con dificultad creciente y comodines."
              descHy="15 հարց աճող բարդությամբ և օգնության հնարավորություններով։"
              color="border-amber-300 hover:border-amber-500 bg-amber-50/40"
              onClick={() => setSelectedGame('millonario')}
            />

            {/* 2. Escucha y responde */}
            <GameCard
              titleEs="Escucha y responde"
              titleHy="Լսիր և պատասխանիր"
              icon="🎧"
              descEs="Entrena tu oído con frases escolares en castellano."
              descHy="Լսիր իսպաներեն ձայնագրությունը և ընտրիր ճիշտ պատասխանը։"
              color="border-blue-300 hover:border-blue-500 bg-blue-50/40"
              onClick={() => setSelectedGame('escucha')}
            />

            {/* 3. Verdadero o falso */}
            <GameCard
              titleEs="Verdadero o falso"
              titleHy="Ճիշտ է, թե սխալ"
              icon="⚡"
              descEs="Decide a toda velocidad sobre reglas ortográficas y gramaticales."
              descHy="Արագ որոշիր քերականական կանոնների ճշմարտացիությունը։"
              color="border-emerald-300 hover:border-emerald-500 bg-emerald-50/40"
              onClick={() => setSelectedGame('verdadero_falso')}
            />

            {/* 4. Ordena las palabras */}
            <GameCard
              titleEs="Ordena las palabras"
              titleHy="Դասավորիր բառերը"
              icon="🧩"
              descEs="Construye oraciones sintácticamente correctas ordenando fichas."
              descHy="Կազմիր ճիշտ նախադասություններ՝ դասավորելով բառերը։"
              color="border-purple-300 hover:border-purple-500 bg-purple-50/40"
              onClick={() => setSelectedGame('ordena')}
            />

            {/* 5. Encuentra el error */}
            <GameCard
              titleEs="Encuentra el error"
              titleHy="Գտիր սխալը"
              icon="🔍"
              descEs="Caza fallos de ortografía (haber/a ver, b/v, tildes olvidadas)."
              descHy="Գտիր և ուղղիր ուղղագրական և քերականական սխալները։"
              color="border-rose-300 hover:border-rose-500 bg-rose-50/40"
              onClick={() => setSelectedGame('error')}
            />

            {/* 6. Escapa del colegio */}
            <GameCard
              titleEs="Escapa del colegio (Quest)"
              titleHy="Փախուստ դպրոցից (Քվեստ)"
              icon="🚪"
              descEs="Supera 4 puertas del instituto resolviendo enigmas lingüísticos."
              descHy="Բացիր դպրոցի 4 դռները՝ լուծելով լեզվական հանելուկները։"
              color="border-amber-400 hover:border-amber-600 bg-amber-100/40"
              onClick={() => setSelectedGame('escapa')}
            />

            {/* 7. Reto de 60 segundos */}
            <GameCard
              titleEs="Reto de 60 segundos"
              titleHy="60 վայրկյանի մարտահրավեր"
              icon="⏱️"
              descEs="¿Cuántas preguntas puedes responder antes de que se agote el tiempo?"
              descHy="Քանի՞ ճիշտ պատասխան կարող ես տալ 60 վայրկյանում։"
              color="border-orange-300 hover:border-orange-500 bg-orange-50/40"
              onClick={() => setSelectedGame('reto60')}
            />

            {/* 8. Duelo de conocimientos */}
            <GameCard
              titleEs="Duelo con Mateo"
              titleHy="Գիտելիքների մենամարտ"
              icon="⚔️"
              descEs="Enfréntate a un compañero virtual respondiendo preguntas de Lengua."
              descHy="Խաղա վիրտուալ դասընկերոջդ դեմ հերթական հարցերով։"
              color="border-red-300 hover:border-red-500 bg-red-50/40"
              onClick={() => setSelectedGame('duelo')}
            />

            {/* 9. Relaciona las parejas */}
            <GameCard
              titleEs="Relaciona las parejas"
              titleHy="Գտիր համապատասխան զույգերը"
              icon="🃏"
              descEs="Empareja términos gramaticales y literarios con sus definiciones."
              descHy="Միացրու տերմիններն ու օրինակները իրենց սահմանումներին։"
              color="border-teal-300 hover:border-teal-500 bg-teal-50/40"
              onClick={() => setSelectedGame('parejas')}
            />
          </div>
        </div>
      ) : (
        <div>
          {/* Active game header bar */}
          <div className="mb-4 flex items-center justify-between bg-white px-5 py-3 rounded-2xl border border-stone-200">
            <button
              type="button"
              onClick={() => setSelectedGame(null)}
              className="text-xs font-bold text-stone-700 hover:text-amber-800 transition-colors"
            >
              ← Volver al menú de juegos / Խաղերի ցանկ
            </button>
          </div>

          {selectedGame === 'millonario' && <MillionaireGame />}
          {selectedGame === 'escucha' && <ListenGame />}
          {selectedGame === 'verdadero_falso' && <TrueFalseGame />}
          {selectedGame === 'ordena' && <UnscrambleGame />}
          {selectedGame === 'error' && <FindErrorGame />}
          {selectedGame === 'escapa' && <EscapeRoomGame />}
          {selectedGame === 'reto60' && <Reto60Game />}
          {selectedGame === 'duelo' && <DuelGame />}
          {selectedGame === 'parejas' && <MatchPairsGame />}
        </div>
      )}
    </div>
  );
};

// Sub-components for individual games

function GameCard({ titleEs, titleHy, icon, descEs, descHy, color, onClick }: {
  titleEs: string; titleHy: string; icon: string; descEs: string; descHy: string; color: string; onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-5 text-left transition-all hover:scale-[1.02] hover:shadow-md cursor-pointer ${color}`}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-base font-bold text-stone-900 leading-snug">{titleEs}</h3>
      <p className="text-xs font-medium text-amber-900 armenian-font mt-0.5">{titleHy}</p>
      <p className="mt-2 text-xs text-stone-600 line-clamp-2">{descEs}</p>
      <p className="mt-1 text-[11px] text-stone-500 armenian-font line-clamp-2">{descHy}</p>
    </button>
  );
}

// 1. Millionaire Game
function MillionaireGame() {
  const [level, setLevel] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
  const [gameOver, setGameOver] = useState(false);

  const q = MILLIONAIRE_QUESTIONS[level];

  const handleFiftyFifty = () => {
    if (fiftyFiftyUsed || checked) return;
    setFiftyFiftyUsed(true);
    const wrongIndices = [0, 1, 2, 3].filter(i => i !== q.correctIndex);
    // Hide two wrong options
    setHiddenOptions([wrongIndices[0], wrongIndices[1]]);
  };

  const handleSelect = (idx: number) => {
    if (checked) return;
    setSelectedOpt(idx);
    setChecked(true);

    if (idx === q.correctIndex) {
      addPoints(50);
      confetti({ particleCount: 40, spread: 50 });
      if (level + 1 === MILLIONAIRE_QUESTIONS.length) {
        setGameOver(true);
        incrementGamesPlayed('millonario', 1000000);
      }
    } else {
      setGameOver(true);
      incrementGamesPlayed('millonario', level * 1000);
    }
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setChecked(false);
    setHiddenOptions([]);
    setLevel(prev => prev + 1);
  };

  return (
    <div className="rounded-3xl border border-stone-200 bg-stone-900 text-white p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between border-b border-stone-800 pb-4">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            ¿Quién quiere ser millonario? • Lengua 1.º ESO
          </span>
          <h2 className="text-xl font-black text-white">Nivel {level + 1}: Premio en juego {q?.prize}</h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={fiftyFiftyUsed || checked}
            onClick={handleFiftyFifty}
            className={`rounded-xl px-3 py-1.5 text-xs font-bold border ${
              fiftyFiftyUsed ? 'opacity-40 border-stone-700 bg-stone-800' : 'border-amber-400 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30'
            }`}
          >
            50:50 Comodín
          </button>
        </div>
      </div>

      {!gameOver ? (
        <div className="space-y-6">
          <QuizArmenianQuestion
            questionEs={q.questionEs}
            questionHy={q.questionHy}
            darkTheme={true}
            audioText={q.questionEs}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {q.optionsEs.map((opt, i) => {
              if (hiddenOptions.includes(i)) {
                return <div key={i} className="rounded-xl border border-stone-800 bg-stone-900/50 p-4 opacity-10" />;
              }
              const isSelected = selectedOpt === i;
              const isCorrect = i === q.correctIndex;

              return (
                <QuizArmenianOption
                  key={i}
                  optEs={opt}
                  optHy={q.optionsHy[i]}
                  indexLabel={String.fromCharCode(65 + i)}
                  isSelected={isSelected}
                  isChecked={checked}
                  isCorrect={isCorrect}
                  isCorrectAnswer={i === q.correctIndex}
                  darkTheme={true}
                  disabled={checked}
                  onClick={() => handleSelect(i)}
                />
              );
            })}
          </div>

          {checked && (
            <div className={`p-4 rounded-xl text-xs ${selectedOpt === q.correctIndex ? 'bg-emerald-900/40 border border-emerald-500' : 'bg-rose-900/40 border border-rose-500'}`}>
              <p className="font-bold">{q.explanationEs}</p>
              <p className="armenian-font opacity-80 mt-1">{q.explanationHy}</p>
            </div>
          )}

          {checked && selectedOpt === q.correctIndex && level + 1 < MILLIONAIRE_QUESTIONS.length && (
            <button
              type="button"
              onClick={handleNext}
              className="w-full rounded-xl bg-amber-500 py-3 text-sm font-bold text-stone-950 hover:bg-amber-400 shadow-md"
            >
              Continuar al siguiente premio ({MILLIONAIRE_QUESTIONS[level + 1].prize}) →
            </button>
          )}
        </div>
      ) : (
        <div className="text-center py-8 space-y-4">
          <div className="text-5xl">🏆</div>
          <h3 className="text-2xl font-black text-amber-300">
            {selectedOpt === q.correctIndex ? '¡ERES EL NUEVO MILLONARIO DE LA LENGUA!' : 'Juego terminado'}
          </h3>
          <p className="text-sm text-stone-300 armenian-font">
            {selectedOpt === q.correctIndex ? 'Դու հասար գագաթնակետին՝ 1.000.000 € մրցանակով:' : 'Լավ փորձ էր: Կրկնիր թեմաները և փորձիր նորից:'}
          </p>
          <button
            type="button"
            onClick={() => {
              setLevel(0);
              setSelectedOpt(null);
              setChecked(false);
              setFiftyFiftyUsed(false);
              setHiddenOptions([]);
              setGameOver(false);
            }}
            className="rounded-xl bg-amber-500 px-6 py-2.5 text-xs font-bold text-stone-950 hover:bg-amber-400"
          >
            Jugar otra partida
          </button>
        </div>
      )}
    </div>
  );
}

// 2. Escucha y responde
function ListenGame() {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const q = LISTEN_QUESTIONS[idx];

  const handlePlay = () => {
    speakSpanish(q.speechText);
  };

  const handleChoice = (choiceIdx: number) => {
    setSelected(choiceIdx);
    if (choiceIdx === q.correctIndex) {
      addPoints(15);
      confetti({ particleCount: 30 });
    }
  };

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 space-y-6">
      <div className="border-b border-stone-100 pb-3">
        <h2 className="text-lg font-bold text-stone-900">Escucha y Responde (Կոդային լսում)</h2>
        <p className="text-xs text-stone-500 armenian-font">Լսիր իսպաներեն արտասանությունը և ընտրիր ճիշտ պատասխանը։</p>
      </div>

      <div className="text-center py-6 bg-amber-50/50 rounded-2xl border border-amber-200/60">
        <button
          type="button"
          onClick={handlePlay}
          className="inline-flex items-center gap-2 rounded-2xl bg-amber-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-amber-700 shadow-md transition-all animate-bounce"
        >
          <Volume2 className="h-5 w-5" />
          <span>Reproducir audio (Լսել ձայնագրությունը)</span>
        </button>
      </div>

      <div className="space-y-4">
        <QuizArmenianQuestion
          questionEs={q.questionEs}
          questionHy={q.questionHy}
          audioText={q.questionEs}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q.optionsEs.map((opt, i) => (
            <QuizArmenianOption
              key={i}
              optEs={opt}
              optHy={q.optionsHy[i]}
              indexLabel={String.fromCharCode(65 + i)}
              isSelected={selected === i}
              isChecked={selected !== null}
              isCorrect={selected === q.correctIndex}
              isCorrectAnswer={i === q.correctIndex}
              onClick={() => handleChoice(i)}
            />
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="flex justify-end pt-3">
          <button
            type="button"
            onClick={() => {
              setSelected(null);
              setIdx((idx + 1) % LISTEN_QUESTIONS.length);
            }}
            className="rounded-xl bg-red-800 px-5 py-2.5 text-xs font-bold text-white hover:bg-red-900"
          >
            Siguiente audio →
          </button>
        </div>
      )}
    </div>
  );
}

// 3. Verdadero o Falso
function TrueFalseGame() {
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const card = TRUE_FALSE_CARDS[idx];

  const handleSelect = (val: boolean) => {
    setAnswer(val);
    if (val === card.isTrue) {
      addPoints(10);
      confetti({ particleCount: 25 });
    }
  };

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 space-y-6 text-center max-w-2xl mx-auto">
      <span className="rounded-md bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 uppercase">
        Tarjeta {idx + 1} de {TRUE_FALSE_CARDS.length}
      </span>

      <QuizArmenianQuestion
        key={idx}
        questionEs={card.statementEs}
        questionHy={card.statementHy}
        audioText={card.statementEs}
      />

      <div className="flex justify-center gap-4">
        <button
          type="button"
          onClick={() => handleSelect(true)}
          className={`flex-1 max-w-xs rounded-2xl border-2 py-4 text-base font-black transition-all ${
            answer === true
              ? card.isTrue
                ? 'bg-emerald-500 border-emerald-600 text-white'
                : 'bg-rose-500 border-rose-600 text-white'
              : 'border-emerald-500 bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
          }`}
        >
          ✓ VERDADERO (Ճիշտ է)
        </button>

        <button
          type="button"
          onClick={() => handleSelect(false)}
          className={`flex-1 max-w-xs rounded-2xl border-2 py-4 text-base font-black transition-all ${
            answer === false
              ? !card.isTrue
                ? 'bg-emerald-500 border-emerald-600 text-white'
                : 'bg-rose-500 border-rose-600 text-white'
              : 'border-rose-500 bg-rose-50 text-rose-800 hover:bg-rose-100'
          }`}
        >
          ✗ FALSO (Սխալ է)
        </button>
      </div>

      {answer !== null && (
        <div className="rounded-xl bg-stone-100 p-4 text-xs text-stone-800 space-y-1">
          <p className="font-bold">{card.explanationEs}</p>
          <p className="armenian-font opacity-80">{card.explanationHy}</p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setAnswer(null);
                setIdx((idx + 1) % TRUE_FALSE_CARDS.length);
              }}
              className="rounded-xl bg-stone-900 px-5 py-2 text-xs font-bold text-white hover:bg-stone-800"
            >
              Siguiente tarjeta →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 4. Ordena las palabras
function UnscrambleGame() {
  const [taskIdx, setTaskIdx] = useState(0);
  const task = UNSCRAMBLE_TASKS[taskIdx];
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [placedWords, setPlacedWords] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    setAvailableWords([...task.words].sort(() => Math.random() - 0.5));
    setPlacedWords([]);
    setIsCorrect(null);
    setShowTranslation(false);
  }, [taskIdx]);

  const handlePickWord = (word: string, index: number) => {
    setPlacedWords(prev => [...prev, word]);
    setAvailableWords(prev => prev.filter((_, i) => i !== index));
    setIsCorrect(null);
  };

  const handleRemoveWord = (word: string, index: number) => {
    setAvailableWords(prev => [...prev, word]);
    setPlacedWords(prev => prev.filter((_, i) => i !== index));
    setIsCorrect(null);
  };

  const handleCheckSentence = () => {
    const candidate = placedWords.join(' ');
    if (candidate.toLowerCase() === task.correctSentence.toLowerCase()) {
      setIsCorrect(true);
      addPoints(20);
      confetti({ particleCount: 40 });
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 space-y-6">
      <div className="border-b border-stone-100 pb-3">
        <h2 className="text-lg font-bold text-stone-900">Ordena las palabras (Դասավորիր բառերը)</h2>
        <p className="text-xs text-stone-500 armenian-font">Կառուցիր ճիշտ իսպաներեն նախադասություն՝ սեղմելով բառերի վրա։</p>
      </div>

      <div className="rounded-2xl border-2 border-dashed border-stone-300 min-h-[70px] p-4 flex flex-wrap gap-2 items-center bg-stone-50">
        {placedWords.length === 0 && (
          <span className="text-xs text-stone-400 italic">Haz clic en los bloques de abajo para construir la frase...</span>
        )}
        {placedWords.map((w, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleRemoveWord(w, idx)}
            className="rounded-xl bg-amber-600 px-3.5 py-2 text-sm font-bold text-white shadow-xs hover:bg-amber-700"
          >
            {w}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 justify-center py-2">
        {availableWords.map((w, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handlePickWord(w, idx)}
            className="rounded-xl border border-stone-300 bg-white px-3.5 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-100 shadow-xs"
          >
            {w}
          </button>
        ))}
      </div>

      <div className="text-center py-1">
        <button
          type="button"
          onClick={() => setShowTranslation(prev => !prev)}
          className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-1.5 text-xs text-stone-700 hover:bg-amber-50 hover:text-amber-900 transition-colors shadow-2xs"
        >
          {showTranslation ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
          <span className="armenian-font font-medium">
            {showTranslation ? 'Թաքցնել թարգմանությունը' : 'Տեսնել հայերեն թարգմանությունը (Clic para ver armenio)'}
          </span>
        </button>
        {showTranslation && (
          <div className="mt-2 text-xs font-medium text-amber-900 armenian-font animate-fadeIn">
            Թարգմանություն. {task.translationHy}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center pt-2">
        <button
          type="button"
          onClick={() => {
            setAvailableWords([...task.words].sort(() => Math.random() - 0.5));
            setPlacedWords([]);
            setIsCorrect(null);
          }}
          className="rounded-xl border border-stone-200 px-4 py-2 text-xs font-semibold text-stone-600"
        >
          Reiniciar
        </button>

        <button
          type="button"
          onClick={handleCheckSentence}
          className="rounded-xl bg-red-800 px-6 py-2.5 text-xs font-bold text-white hover:bg-red-900 shadow-sm"
        >
          Comprobar frase (Ստուգել)
        </button>
      </div>

      {isCorrect === true && (
        <div className="rounded-xl bg-emerald-50 border border-emerald-300 p-4 text-center">
          <p className="font-bold text-emerald-900 text-sm">¡Correcto! Oración perfectamente ordenada.</p>
          <button
            type="button"
            onClick={() => setTaskIdx((taskIdx + 1) % UNSCRAMBLE_TASKS.length)}
            className="mt-2 rounded-xl bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-emerald-700"
          >
            Siguiente reto →
          </button>
        </div>
      )}

      {isCorrect === false && (
        <div className="rounded-xl bg-rose-50 border border-rose-300 p-4 text-center text-xs text-rose-900">
          <p className="font-bold">El orden no es el adecuado.</p>
          <p className="mt-1">{task.hintEs} • <span className="armenian-font">{task.hintHy}</span></p>
        </div>
      )}
    </div>
  );
}

// 5. Encuentra el error
function FindErrorGame() {
  const [idx, setIdx] = useState(0);
  const task = FIND_ERROR_TASKS[idx];
  const [revealed, setRevealed] = useState(false);
  const [showSentenceHy, setShowSentenceHy] = useState(false);

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 space-y-6">
      <div className="border-b border-stone-100 pb-3">
        <h2 className="text-lg font-bold text-stone-900">Encuentra el error (Գտիր սխալը)</h2>
        <p className="text-xs text-stone-500 armenian-font">Տեսնո՞ւմ ես ուղղագրական կամ քերականական սխալը հետևյալ նախադասության մեջ։</p>
      </div>

      <div
        onClick={() => setShowSentenceHy(prev => !prev)}
        className="group cursor-pointer rounded-2xl border border-stone-200 bg-amber-50/50 hover:bg-amber-100/40 hover:border-amber-400 p-6 text-center space-y-2 select-none transition-all"
        title="Haz clic para ver u ocultar la traducción en armenio • Սեղմիր հայերեն թարգմանության համար"
      >
        <div className="flex items-center justify-center gap-2">
          <span className="text-xl font-bold text-stone-900 group-hover:text-amber-950">{task.badSentence}</span>
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold shadow-2xs transition-colors ${showSentenceHy ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-white text-stone-600 border border-stone-200 group-hover:border-amber-300'}`}>
            {showSentenceHy ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
            <span className="font-sans">Հայ</span>
          </span>
        </div>
        {showSentenceHy ? (
          <div className="text-xs text-stone-700 armenian-font pt-2 border-t border-amber-200 animate-fadeIn">{task.translationHy}</div>
        ) : (
          <div className="text-[11px] text-stone-400 group-hover:text-amber-800 armenian-font italic">👁️ սեղմիր իսպաներենին՝ հայերեն թարգմանության համար</div>
        )}
      </div>

      {!revealed ? (
        <div className="text-center">
          <button
            type="button"
            onClick={() => {
              setRevealed(true);
              addPoints(15);
            }}
            className="rounded-2xl bg-amber-600 px-6 py-3 text-sm font-bold text-white hover:bg-amber-700 shadow-sm"
          >
            🔍 Descubrir la corrección y la regla (Տեսնել ուղղումը)
          </button>
        </div>
      ) : (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 space-y-3 animate-fadeIn">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <span>Forma correcta: "{task.correctedSentence}"</span>
          </div>
          <p className="text-xs font-sans text-stone-800 leading-relaxed">
            {task.ruleExplanationEs}
          </p>
          <p className="text-xs armenian-font text-stone-700 pt-2 border-t border-emerald-200/60">
            {task.ruleExplanationHy}
          </p>
          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={() => {
                setRevealed(false);
                setIdx((idx + 1) % FIND_ERROR_TASKS.length);
              }}
              className="rounded-xl bg-stone-900 px-4 py-2 text-xs font-bold text-white hover:bg-stone-800"
            >
              Siguiente frase con error →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 6. Escapa del colegio
function EscapeRoomGame() {
  const [step, setStep] = useState(0);
  const current = ESCAPE_ROOM_STEPS[step];
  const [selected, setSelected] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  const handleChoose = (ans: string) => {
    setSelected(ans);
    if (ans === current.correctAnswer) {
      setUnlocked(true);
      addPoints(30);
      confetti({ particleCount: 50 });
    }
  };

  return (
    <div className="rounded-3xl border border-stone-200 bg-gradient-to-b from-stone-900 to-amber-950 text-white p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between border-b border-stone-800 pb-4">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
            <Key className="h-4 w-4" />
            <span>Escape Room Escolar: Puerta {step + 1} de {ESCAPE_ROOM_STEPS.length}</span>
          </span>
          <h2 className="text-xl font-black text-white">{current.roomNameEs}</h2>
          <p className="text-xs text-amber-300 armenian-font">{current.roomNameHy}</p>
        </div>
      </div>

      <p className="text-sm text-stone-300 font-sans italic">{current.roomDescEs}</p>
      <p className="text-xs text-stone-400 armenian-font">{current.roomDescHy}</p>

      <QuizArmenianQuestion
        key={step}
        questionEs={current.riddleEs}
        questionHy={current.riddleHy}
        darkTheme={true}
        audioText={current.riddleEs}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {current.options.map((opt, i) => (
          <QuizArmenianOption
            key={i}
            optEs={opt}
            optHy={current.optionsHy[i]}
            indexLabel={String.fromCharCode(65 + i)}
            isSelected={selected === opt}
            isChecked={unlocked}
            isCorrect={opt === current.correctAnswer}
            isCorrectAnswer={opt === current.correctAnswer}
            darkTheme={true}
            disabled={unlocked}
            onClick={() => handleChoose(opt)}
          />
        ))}
      </div>

      {unlocked && (
        <div className="rounded-2xl bg-emerald-950/80 border border-emerald-500 p-5 space-y-3 animate-fadeIn text-center">
          <p className="text-sm font-bold text-emerald-200">{current.clueUnlockedEs}</p>
          <p className="text-xs text-emerald-300/90 armenian-font">{current.clueUnlockedHy}</p>
          {step + 1 < ESCAPE_ROOM_STEPS.length ? (
            <button
              type="button"
              onClick={() => {
                setStep(prev => prev + 1);
                setSelected(null);
                setUnlocked(false);
              }}
              className="rounded-xl bg-amber-500 px-6 py-2.5 text-xs font-bold text-stone-950 hover:bg-amber-400"
            >
              Cruzar a la siguiente sala →
            </button>
          ) : (
            <div className="pt-2 text-amber-300 font-bold text-sm">
              🏆 ¡Felicidades! Has completado el escape lingüístico.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// 7. Reto de 60 segundos
function Reto60Game() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [active, setActive] = useState(false);
  const [score, setScore] = useState(0);
  const [qIndex, setQIndex] = useState(0);

  const questions = MILLIONAIRE_QUESTIONS;
  const current = questions[qIndex % questions.length];

  useEffect(() => {
    if (!active) return;
    if (timeLeft <= 0) {
      setActive(false);
      incrementGamesPlayed('reto60', score);
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [active, timeLeft, score]);

  const handleAnswer = (choice: number) => {
    if (choice === current.correctIndex) {
      setScore(prev => prev + 1);
      addPoints(10);
    }
    setQIndex(prev => prev + 1);
  };

  const handleStart = () => {
    setTimeLeft(60);
    setScore(0);
    setQIndex(0);
    setActive(true);
  };

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 space-y-6 text-center max-w-xl mx-auto">
      <div className="flex items-center justify-between border-b border-stone-100 pb-3">
        <h2 className="text-lg font-bold text-stone-900">Reto de 60 Segundos</h2>
        <div className="flex items-center gap-1.5 text-sm font-bold text-amber-700">
          <Clock className="h-4 w-4" />
          <span>{timeLeft}s</span>
        </div>
      </div>

      {!active && timeLeft === 60 && (
        <div className="py-8 space-y-4">
          <p className="text-sm text-stone-600">
            Responde el mayor número de preguntas sobre Lengua Castellana de 1.º ESO en un minuto.
          </p>
          <button
            type="button"
            onClick={handleStart}
            className="rounded-2xl bg-red-800 px-8 py-3.5 text-sm font-bold text-white hover:bg-red-900 shadow-md"
          >
            ¡Empezar el reto! (Սկսել մարտահրավերը)
          </button>
        </div>
      )}

      {active && (
        <div className="space-y-4 text-left">
          <QuizArmenianQuestion
            key={qIndex}
            questionEs={current.questionEs}
            questionHy={current.questionHy}
            audioText={current.questionEs}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {current.optionsEs.map((opt, i) => (
              <QuizArmenianOption
                key={i}
                optEs={opt}
                optHy={current.optionsHy[i]}
                indexLabel={String.fromCharCode(65 + i)}
                onClick={() => handleAnswer(i)}
              />
            ))}
          </div>

          <div className="text-center text-xs font-bold text-amber-800 pt-2">
            Aciertos actuales: {score}
          </div>
        </div>
      )}

      {!active && timeLeft <= 0 && (
        <div className="py-6 space-y-3">
          <div className="text-4xl">⏱️</div>
          <h3 className="text-xl font-bold text-stone-900">¡Tiempo agotado!</h3>
          <p className="text-sm text-stone-600">Has conseguido {score} aciertos en 60 segundos.</p>
          <button
            type="button"
            onClick={handleStart}
            className="rounded-xl bg-amber-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-amber-700"
          >
            Volver a intentarlo
          </button>
        </div>
      )}
    </div>
  );
}

// 8. Duelo de conocimientos
function DuelGame() {
  const [playerHp, setPlayerHp] = useState(100);
  const [botHp, setBotHp] = useState(100);
  const [idx, setIdx] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = MILLIONAIRE_QUESTIONS[idx % MILLIONAIRE_QUESTIONS.length];

  const handleAttack = (optIdx: number) => {
    if (finished) return;

    if (optIdx === q.correctIndex) {
      setBotHp(prev => Math.max(0, prev - 35));
      addPoints(15);
      if (botHp - 35 <= 0) {
        setFinished(true);
        confetti();
      }
    } else {
      setPlayerHp(prev => Math.max(0, prev - 35));
      if (playerHp - 35 <= 0) {
        setFinished(true);
      }
    }
    setIdx(prev => prev + 1);
  };

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between border-b border-stone-100 pb-3">
        <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
          <Swords className="h-5 w-5 text-red-700" />
          <span>Duelo contra Mateo (Դուել Մատեոյի հետ)</span>
        </h2>
      </div>

      {/* HP Bars */}
      <div className="grid grid-cols-2 gap-4 text-xs font-bold">
        <div>
          <div className="flex justify-between mb-1 text-emerald-800">
            <span>Tú (Դու)</span>
            <span>{playerHp} HP</span>
          </div>
          <div className="h-3 w-full bg-stone-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${playerHp}%` }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1 text-rose-800">
            <span>Mateo (Դասընկեր)</span>
            <span>{botHp} HP</span>
          </div>
          <div className="h-3 w-full bg-stone-100 rounded-full overflow-hidden">
            <div className="h-full bg-rose-500 transition-all duration-300" style={{ width: `${botHp}%` }} />
          </div>
        </div>
      </div>

      {!finished ? (
        <div className="space-y-4">
          <QuizArmenianQuestion
            key={idx}
            questionEs={q.questionEs}
            questionHy={q.questionHy}
            audioText={q.questionEs}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {q.optionsEs.map((opt, i) => (
              <QuizArmenianOption
                key={i}
                optEs={opt}
                optHy={q.optionsHy[i]}
                indexLabel={String.fromCharCode(65 + i)}
                onClick={() => handleAttack(i)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-6 space-y-3">
          <div className="text-4xl">{playerHp > 0 ? '🎉' : '💔'}</div>
          <h3 className="text-xl font-bold text-stone-900">
            {playerHp > 0 ? '¡Has ganado el duelo escolar!' : 'Mateo ha ganado esta ronda'}
          </h3>
          <button
            type="button"
            onClick={() => {
              setPlayerHp(100);
              setBotHp(100);
              setFinished(false);
            }}
            className="rounded-xl bg-red-800 px-6 py-2.5 text-xs font-bold text-white hover:bg-red-900"
          >
            Revancha (Նոր մենամարտ)
          </button>
        </div>
      )}
    </div>
  );
}

// 9. Relaciona las parejas
function MatchPairsGame() {
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [revealedHy, setRevealedHy] = useState<Record<string, boolean>>({});

  const toggleItemHy = (e: React.MouseEvent, key: string) => {
    e.stopPropagation();
    setRevealedHy(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleTermClick = (id: string) => {
    if (matched.includes(id)) return;
    setSelectedTerm(id);
  };

  const handleDefClick = (id: string) => {
    if (matched.includes(id)) return;
    if (selectedTerm === id) {
      setMatched(prev => [...prev, id]);
      setSelectedTerm(null);
      addPoints(15);
      confetti({ particleCount: 20 });
    } else {
      setSelectedTerm(null);
    }
  };

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 space-y-6">
      <div className="border-b border-stone-100 pb-3">
        <h2 className="text-lg font-bold text-stone-900">Relaciona las parejas (Գտիր համապատասխան զույգերը)</h2>
        <p className="text-xs text-stone-500 armenian-font">Սեղմիր ձախից տերմինին, ապա աջից դրա ճիշտ սահմանմանը։ Թարգմանությունը տեսնելու համար սեղմիր [👁️ Հայ]։</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Terms Column */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Término / Տերմին</div>
          {MATCH_PAIRS.map(p => {
            const isMatched = matched.includes(p.id);
            const isSelected = selectedTerm === p.id;
            const isRevealed = revealedHy[`term-${p.id}`] || isMatched || isSelected;

            return (
              <button
                key={p.id}
                type="button"
                disabled={isMatched}
                onClick={() => handleTermClick(p.id)}
                className={`w-full rounded-xl border p-3.5 text-left text-xs font-bold transition-all ${
                  isMatched
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-800 opacity-60 line-through'
                    : isSelected
                    ? 'border-amber-500 bg-amber-100 text-amber-950 ring-2 ring-amber-400'
                    : 'border-stone-200 bg-white hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span>{p.termEs}</span>
                  <span
                    onClick={(e) => toggleItemHy(e, `term-${p.id}`)}
                    className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium text-stone-500 hover:bg-amber-100 hover:text-amber-900 border border-stone-200 shrink-0"
                    title="Ver traducción armenia • Տեսնել հայերեն թարգմանությունը"
                  >
                    {isRevealed ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                    <span className="armenian-font">Հայ</span>
                  </span>
                </div>
                {isRevealed && (
                  <div className="text-[11px] font-normal text-stone-600 armenian-font mt-1 animate-fadeIn">{p.termHy}</div>
                )}
              </button>
            );
          })}
        </div>

        {/* Definitions Column */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Definición / Սահմանում</div>
          {MATCH_PAIRS.map(p => {
            const isMatched = matched.includes(p.id);
            const isRevealed = revealedHy[`def-${p.id}`] || isMatched;

            return (
              <button
                key={p.id}
                type="button"
                disabled={isMatched}
                onClick={() => handleDefClick(p.id)}
                className={`w-full rounded-xl border p-3.5 text-left text-xs font-medium transition-all ${
                  isMatched
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-800 opacity-60'
                    : 'border-stone-200 bg-white hover:bg-amber-50/50 hover:border-amber-300'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="leading-snug">{p.definitionEs}</span>
                  <span
                    onClick={(e) => toggleItemHy(e, `def-${p.id}`)}
                    className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium text-stone-500 hover:bg-amber-100 hover:text-amber-900 border border-stone-200 shrink-0"
                    title="Ver traducción armenia • Տեսնել հայերեն թարգմանությունը"
                  >
                    {isRevealed ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                    <span className="armenian-font">Հայ</span>
                  </span>
                </div>
                {isRevealed && (
                  <div className="text-[11px] text-stone-600 armenian-font mt-1 animate-fadeIn">{p.definitionHy}</div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {matched.length === MATCH_PAIRS.length && (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-300 p-4 text-center">
          <p className="font-bold text-emerald-900 text-sm">¡Todas las parejas unidas con éxito!</p>
          <button
            type="button"
            onClick={() => setMatched([])}
            className="mt-2 rounded-xl bg-emerald-700 px-4 py-1.5 text-xs font-bold text-white hover:bg-emerald-800"
          >
            Volver a jugar
          </button>
        </div>
      )}
    </div>
  );
}
