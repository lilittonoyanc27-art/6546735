/**
 * Web Speech API helper for European Spanish (es-ES) pronunciation.
 */

let synth: SpeechSynthesis | null = null;
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  synth = window.speechSynthesis;
}

let cachedVoice: SpeechSynthesisVoice | null = null;

function getSpanishVoice(): SpeechSynthesisVoice | null {
  if (!synth) return null;
  if (cachedVoice) return cachedVoice;

  const voices = synth.getVoices();
  // Prefer Spain Spanish (es-ES)
  const esEs = voices.find(v => v.lang === 'es-ES');
  if (esEs) {
    cachedVoice = esEs;
    return esEs;
  }
  // Fallback to any Spanish
  const anyEs = voices.find(v => v.lang.startsWith('es'));
  if (anyEs) {
    cachedVoice = anyEs;
    return anyEs;
  }
  return null;
}

if (typeof window !== 'undefined' && synth) {
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = () => {
      cachedVoice = null;
      getSpanishVoice();
    };
  }
}

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function speakSpanish(text: string, onEnd?: () => void, onError?: () => void): boolean {
  if (!synth) {
    onError?.();
    return false;
  }

  try {
    synth.cancel(); // Stop any currently playing audio
    const cleanText = text.replace(/[\(\)\[\]«»]/g, ' ').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'es-ES';
    utterance.rate = 0.88; // Slightly slower for clarity for 1st ESO students
    utterance.pitch = 1.0;

    const voice = getSpanishVoice();
    if (voice) {
      utterance.voice = voice;
    }

    if (onEnd) utterance.onend = onEnd;
    if (onError) utterance.onerror = onError;

    synth.speak(utterance);
    return true;
  } catch (err) {
    console.error('Speech synthesis error:', err);
    onError?.();
    return false;
  }
}

export function stopSpeech(): void {
  if (synth) {
    synth.cancel();
  }
}
