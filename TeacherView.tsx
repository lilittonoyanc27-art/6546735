import React, { useState } from 'react';
import { MODULES } from './modulesData.ts';
import { loadUserStats, getSpanishGradeLabel } from './storage.ts';
import { getLessonContent } from './lessonsData.ts';
import { GraduationCap, BookOpen, Award, CheckCircle2, FileText, Printer, BarChart3 } from 'lucide-react';

export const TeacherView: React.FC<{ onOpenTopic: (subtopicId: string) => void }> = ({ onOpenTopic }) => {
  const stats = loadUserStats();
  const [selectedModuleId, setSelectedModuleId] = useState<string>(MODULES[0].id);
  const [selectedSubtopicId, setSelectedSubtopicId] = useState<string>(MODULES[0].subtopics[0].id);

  const selectedModule = MODULES.find(m => m.id === selectedModuleId) || MODULES[0];
  const lessonData = getLessonContent(selectedSubtopicId);

  // Compute average exam grade
  const totalExams = stats.completedExams.length;
  const avgGrade = totalExams > 0
    ? (stats.completedExams.reduce((acc, curr) => acc + curr.score, 0) / totalExams).toFixed(1)
    : '0.0';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 p-6 sm:p-8 text-white shadow-md">
        <div className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-md">
          <GraduationCap className="h-4 w-4 text-amber-300" />
          <span>Modo Profesorado y Familia</span>
          <span>•</span>
          <span className="armenian-font">Ուսուցչի և ծնողների կառավարման վահանակ</span>
        </div>
        <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Supervisión Curricular y Resultados del Alumno (1.º ESO)
        </h1>
        <p className="mt-1.5 text-sm text-stone-300 armenian-font">
          Ծրագրի ամբողջական վերահսկողություն, ճիշտ պատասխանների բանալիներ և աշակերտի առաջադիմության հաշվետվություն։
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-xs">
          <span className="text-xs font-bold uppercase text-stone-400">Temas completados</span>
          <div className="text-2xl font-black text-stone-900 mt-1">
            {stats.completedLessons.length}
          </div>
          <span className="text-[11px] text-stone-500 armenian-font">Ավարտված թեմաներ</span>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-xs">
          <span className="text-xs font-bold uppercase text-stone-400">Media en exámenes</span>
          <div className="text-2xl font-black text-amber-700 mt-1">
            {avgGrade} / 10
          </div>
          <span className="text-[11px] text-stone-500 armenian-font">Միջին գնահատական</span>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-xs">
          <span className="text-xs font-bold uppercase text-stone-400">Puntos acumulados</span>
          <div className="text-2xl font-black text-red-800 mt-1">
            {stats.points} pts
          </div>
          <span className="text-[11px] text-stone-500 armenian-font">Կուտակված միավորներ</span>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-xs">
          <span className="text-xs font-bold uppercase text-stone-400">Errores pendientes</span>
          <div className="text-2xl font-black text-rose-700 mt-1">
            {stats.mistakes.length}
          </div>
          <span className="text-[11px] text-stone-500 armenian-font">Կրկնության կարիք ունեցող</span>
        </div>
      </div>

      {/* Curriculum Inspector & Answer Key Explorer */}
      <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-stone-100 pb-4">
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-amber-700" />
            <span>Explorador Curricular y Solucionario Oficial</span>
          </h2>
          <p className="text-xs text-stone-500 armenian-font mt-0.5">
            Ընտրիր ցանկացած մոդուլ և թեմա՝ ուսուցողական նյութն ու պատասխանների բանալին ստուգելու համար։
          </p>
        </div>

        {/* Module Picker */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {MODULES.map(m => (
            <button
              key={m.id}
              type="button"
              onClick={() => {
                setSelectedModuleId(m.id);
                setSelectedSubtopicId(m.subtopics[0].id);
              }}
              className={`rounded-xl border p-3 text-left transition-all text-xs ${
                selectedModuleId === m.id
                  ? 'border-red-700 bg-red-50 text-red-950 font-bold ring-1 ring-red-400'
                  : 'border-stone-200 bg-stone-50/50 hover:bg-stone-100 text-stone-800'
              }`}
            >
              <div className="font-bold">Módulo {m.number}: {m.titleEs}</div>
              <div className="text-[11px] text-stone-500 armenian-font mt-0.5">{m.titleHy}</div>
            </button>
          ))}
        </div>

        {/* Subtopic Selector */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-stone-500">
            Subtemas del módulo ({selectedModule.subtopics.length}):
          </label>
          <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-2 rounded-xl bg-stone-50 border border-stone-200">
            {selectedModule.subtopics.map(sub => (
              <button
                key={sub.id}
                type="button"
                onClick={() => setSelectedSubtopicId(sub.id)}
                className={`rounded-lg px-3 py-1.5 text-xs transition-all ${
                  selectedSubtopicId === sub.id
                    ? 'bg-amber-600 text-white font-bold'
                    : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                {sub.number}. {sub.titleEs}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Topic Snapshot & Answer Key */}
        <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3">
            <div>
              <h3 className="text-base font-bold text-stone-900">{lessonData.titleEs}</h3>
              <p className="text-xs text-amber-800 armenian-font">{lessonData.titleHy}</p>
            </div>
            <button
              type="button"
              onClick={() => onOpenTopic(selectedSubtopicId)}
              className="rounded-xl bg-red-800 px-4 py-2 text-xs font-bold text-white hover:bg-red-900 shadow-xs"
            >
              Abrir lección interactiva para el alumno →
            </button>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              Claves de respuestas del Test (10 preguntas oficiales):
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {lessonData.testQuestions.map((q, idx) => (
                <div key={idx} className="rounded-xl bg-white border border-stone-200 p-2.5">
                  <span className="font-bold text-stone-900 block truncate">
                    {idx + 1}. {q.questionEs}
                  </span>
                  <span className="text-emerald-700 font-bold block mt-1">
                    ✓ Respuesta correcta: {q.optionsEs[q.correctIndex]}
                  </span>
                  <span className="text-[11px] text-stone-500 font-sans block mt-0.5">
                    {q.explanationEs}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Completed Exams History */}
      <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
        <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-amber-700" />
          <span>Historial de Evaluaciones y Exámenes Realizados</span>
        </h3>

        {stats.completedExams.length === 0 ? (
          <p className="text-xs text-stone-500 italic">
            El alumno todavía no ha completado exámenes oficiales en esta sesión.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500 uppercase tracking-wider">
                  <th className="py-2.5 px-3">Fecha</th>
                  <th className="py-2.5 px-3">Examen</th>
                  <th className="py-2.5 px-3">Nota (0-10)</th>
                  <th className="py-2.5 px-3">Calificación Oficial</th>
                  <th className="py-2.5 px-3">Aciertos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {stats.completedExams.map((ex, i) => {
                  const grade = getSpanishGradeLabel(ex.score);
                  return (
                    <tr key={i} className="hover:bg-stone-50">
                      <td className="py-2.5 px-3 text-stone-600">{ex.date}</td>
                      <td className="py-2.5 px-3 font-semibold text-stone-900">{ex.examId}</td>
                      <td className="py-2.5 px-3 font-black text-sm text-stone-900">{ex.score}</td>
                      <td className="py-2.5 px-3">
                        <span className={`px-2 py-0.5 rounded-md font-bold text-[11px] ${grade.color}`}>
                          {grade.es}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-stone-600">
                        {ex.correctCount} / {ex.totalQuestions}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
