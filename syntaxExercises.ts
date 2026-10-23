import type { SyntaxSentenceExercise } from './types.ts';

export const SYNTAX_EXERCISES: SyntaxSentenceExercise[] = [
  {
    id: 'syn-1',
    sentence: 'Los alumnos del instituto leen una novela juvenil.',
    translationHy: 'Ինստիտուտի աշակերտները պատանեկան վեպ են կարդում։',
    sujetoRange: [0, 3], // "Los alumnos del instituto"
    predicadoRange: [4, 7], // "leen una novela juvenil"
    nucleoSujetoIndex: 1, // "alumnos"
    nucleoPredicadoIndex: 4, // "leen"
    tipoPredicado: 'verbal',
    explicacionEs: 'Sujeto: "Los alumnos del instituto" (concuerda en 3.ª plural con "leen"). Núcleo del sujeto: "alumnos". Predicado verbal: "leen una novela juvenil" con núcleo verbal "leen".',
    explicacionHy: 'Ենթակա (Sujeto)՝ «Los alumnos del instituto» (համաձայնում է 3-րդ դեմք հոգնակի «leen» բայի հետ)։ Ենթակայի գլխավոր անդամ՝ «alumnos»: Բայական ստորոգյալ՝ «leen una novela juvenil», բայական կենտրոնը՝ «leen»:'
  },
  {
    id: 'syn-2',
    sentence: 'El profesor de Lengua explicó las reglas con paciencia.',
    translationHy: 'Իսպաներենի ուսուցիչը համբերությամբ բացատրեց կանոնները։',
    sujetoRange: [0, 3], // "El profesor de Lengua"
    predicadoRange: [4, 8], // "explicó las reglas con paciencia"
    nucleoSujetoIndex: 1, // "profesor"
    nucleoPredicadoIndex: 4, // "explicó"
    tipoPredicado: 'verbal',
    explicacionEs: 'Sujeto: "El profesor de Lengua" (singular, concuerda con "explicó"). Núcleo del sujeto: "profesor". Predicado: "explicó las reglas con paciencia", núcleo "explicó".',
    explicacionHy: 'Ենթակա՝ «El profesor de Lengua» (եզակի թիվ, համաձայնում է «explicó»-ի հետ)։ Գլխավոր անդամ՝ «profesor»: Ստորոգյալ՝ «explicó las reglas con paciencia», միջուկը՝ «explicó»:'
  },
  {
    id: 'syn-3',
    sentence: 'Mi compañera armenia aprende castellano muy rápido.',
    translationHy: 'Իմ հայ դասընկերուհին շատ արագ է սովորում իսպաներենը։',
    sujetoRange: [0, 2], // "Mi compañera armenia"
    predicadoRange: [3, 6], // "aprende castellano muy rápido"
    nucleoSujetoIndex: 1, // "compañera"
    nucleoPredicadoIndex: 3, // "aprende"
    tipoPredicado: 'verbal',
    explicacionEs: 'Sujeto: "Mi compañera armenia" (núcleo: compañera). Predicado verbal: "aprende castellano muy rápido" (núcleo: aprende).',
    explicacionHy: 'Ենթակա՝ «Mi compañera armenia» (միջուկը՝ compañera): Ստորոգյալ՝ «aprende castellano muy rápido» (բայական կենտրոնը՝ aprende):'
  },
  {
    id: 'syn-4',
    sentence: 'La biblioteca del centro es muy luminosa.',
    translationHy: 'Կենտրոնի գրադարանը շատ լուսավոր է։',
    sujetoRange: [0, 3], // "La biblioteca del centro"
    predicadoRange: [4, 6], // "es muy luminosa"
    nucleoSujetoIndex: 1, // "biblioteca"
    nucleoPredicadoIndex: 4, // "es" (verbo copulativo)
    tipoPredicado: 'nominal',
    explicacionEs: 'Predicado nominal: lleva el verbo copulativo "es" (ser) y un atributo "muy luminosa". Sujeto: "La biblioteca del centro".',
    explicacionHy: 'Անվանական ստորոգյալ (Predicado nominal)՝ ունի «es» օժանդակ բայը և «muy luminosa» ստորոգելին (Atributo)։ Ենթական՝ «La biblioteca del centro»:'
  },
  {
    id: 'syn-5',
    sentence: 'Los pájaros cantan alegres en el parque del Retiro.',
    translationHy: 'Թռչունները ուրախ երգում են Ռետիրոյի զբոսայգում։',
    sujetoRange: [0, 1], // "Los pájaros"
    predicadoRange: [2, 8], // "cantan alegres en el parque del Retiro"
    nucleoSujetoIndex: 1, // "pájaros"
    nucleoPredicadoIndex: 2, // "cantan"
    tipoPredicado: 'verbal',
    explicacionEs: 'Sujeto: "Los pájaros" (núcleo pájaros). Predicado verbal: "cantan alegres en el parque del Retiro", núcleo "cantan".',
    explicacionHy: 'Ենթակա՝ «Los pájaros» (միջուկ՝ pájaros): Բայական ստորոգյալ՝ «cantan alegres en el parque del Retiro», միջուկը՝ «cantan»:'
  },
  {
    id: 'syn-6',
    sentence: 'Sara regaló un estuche nuevo a su amiga.',
    translationHy: 'Սառան նոր գրչատուփ նվիրեց իր ընկերուհուն։',
    sujetoRange: [0, 0], // "Sara"
    predicadoRange: [1, 7], // "regaló un estuche nuevo a su amiga"
    nucleoSujetoIndex: 0, // "Sara"
    nucleoPredicadoIndex: 1, // "regaló"
    tipoPredicado: 'verbal',
    explicacionEs: 'Sujeto léxico de una sola palabra: "Sara". Predicado: "regaló un estuche nuevo a su amiga" (regaló = núcleo verbal).',
    explicacionHy: 'Մեկ բառից կազմված ենթակա՝ «Sara»: Ստորոգյալ՝ «regaló un estuche nuevo a su amiga» (միջուկ՝ regaló):'
  },
  {
    id: 'syn-7',
    sentence: 'Nosotros preparamos el examen de Lengua con interés.',
    translationHy: 'Մենք հետաքրքրությամբ ենք պատրաստում իսպաներենի քննությունը։',
    sujetoRange: [0, 0], // "Nosotros"
    predicadoRange: [1, 7], // "preparamos el examen de Lengua con interés"
    nucleoSujetoIndex: 0, // "Nosotros"
    nucleoPredicadoIndex: 1, // "preparamos"
    tipoPredicado: 'verbal',
    explicacionEs: 'Sujeto: pronombre "Nosotros" (1.ª plural). Predicado verbal: "preparamos el examen de Lengua con interés" (núcleo: preparamos).',
    explicacionHy: 'Ենթակա՝ «Nosotros» դերանունը (1-ին դեմք հոգնակի)։ Բայական ստորոգյալ՝ «preparamos...», միջուկը՝ «preparamos»:'
  },
  {
    id: 'syn-8',
    sentence: 'El conserje abrió las puertas del instituto a las ocho.',
    translationHy: 'Դպրոցի աշխատակիցը բացեց ինստիտուտի դռները ժամը ութին։',
    sujetoRange: [0, 1], // "El conserje"
    predicadoRange: [2, 9], // "abrió las puertas del instituto a las ocho"
    nucleoSujetoIndex: 1, // "conserje"
    nucleoPredicadoIndex: 2, // "abrió"
    tipoPredicado: 'verbal',
    explicacionEs: 'Sujeto: "El conserje" (núcleo conserje). Predicado verbal: "abrió las puertas del instituto a las ocho", núcleo "abrió".',
    explicacionHy: 'Ենթակա՝ «El conserje» (միջուկ՝ conserje): Բայական ստորոգյալ՝ «abrió...», միջուկը՝ «abrió»:'
  }
];

export interface SyntaxColorTag {
  key: 'sujeto' | 'predicado' | 'ns' | 'np' | 'cd' | 'ci' | 'cc';
  labelEs: string;
  labelHy: string;
  badgeClass: string;
  highlightClass: string;
}

export const SYNTAX_TAGS: SyntaxColorTag[] = [
  {
    key: 'sujeto',
    labelEs: 'Sujeto (S)',
    labelHy: 'Ենթակա',
    badgeClass: 'bg-blue-100 text-blue-800 border-blue-400 hover:bg-blue-200',
    highlightClass: 'syntax-sujeto'
  },
  {
    key: 'predicado',
    labelEs: 'Predicado (P)',
    labelHy: 'Ստորոգյալ',
    badgeClass: 'bg-amber-100 text-amber-800 border-amber-400 hover:bg-amber-200',
    highlightClass: 'syntax-predicado'
  },
  {
    key: 'ns',
    labelEs: 'Núcleo del Sujeto (N)',
    labelHy: 'Ենթակայի գլխավոր անդամ',
    badgeClass: 'bg-indigo-100 text-indigo-800 border-indigo-400 hover:bg-indigo-200',
    highlightClass: 'syntax-ns'
  },
  {
    key: 'np',
    labelEs: 'Núcleo del Predicado (NV)',
    labelHy: 'Ստորոգյալի գլխավոր անդամ (Բայ)',
    badgeClass: 'bg-rose-100 text-rose-800 border-rose-400 hover:bg-rose-200',
    highlightClass: 'syntax-np'
  },
  {
    key: 'cd',
    labelEs: 'Compl. Directo (CD)',
    labelHy: 'Ուղիղ խնդիր',
    badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-400 hover:bg-emerald-200',
    highlightClass: 'syntax-cd'
  },
  {
    key: 'ci',
    labelEs: 'Compl. Indirecto (CI)',
    labelHy: 'Հանգման անուղղակի խնդիր',
    badgeClass: 'bg-purple-100 text-purple-800 border-purple-400 hover:bg-purple-200',
    highlightClass: 'syntax-ci'
  },
  {
    key: 'cc',
    labelEs: 'Compl. Circunstancial (CC)',
    labelHy: 'Պարագայական լրացում',
    badgeClass: 'bg-orange-100 text-orange-800 border-orange-400 hover:bg-orange-200',
    highlightClass: 'syntax-cc'
  }
];
