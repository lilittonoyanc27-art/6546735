import type { LessonContent, TestQuestion, ExerciseItem } from './types.ts';
import { MODULES } from './modulesData.ts';
import { getDetailedTheoryForSubtopic } from './topicTheories.ts';
import { randomizeLessonOptions } from './shuffleUtils.ts';

// Handcrafted comprehensive lessons for key representative subtopics across all modules,
// plus a dynamic pedagogical generator that provides full 10-exercise + 10-test question lessons for every single subtopic in the 11 modules!

export const CURATED_LESSONS: Record<string, LessonContent> = {
  'm1-1': {
    subtopicId: 'm1-1',
    titleEs: 'La comunicación',
    titleHy: 'Հաղորդակցություն',
    moduleTitleEs: 'Módulo 1: La comunicación',
    moduleTitleHy: 'Մոդուլ 1: Հաղորդակցություն',
    moduleId: 'm1-comunicacion',
    explanationEs: [
      'La comunicación es el proceso mediante el cual transmitimos y recibimos información, ideas, emociones o peticiones entre dos o más personas.',
      'En el instituto (IES), nos comunicamos continuamente: cuando la profesora explica un tema en la pizarra digital, cuando un compañero nos pide un bolígrafo o cuando suena la sirena para salir al recreo.',
      'Para que la comunicación tenga éxito, los participantes deben compartir el mismo código (por ejemplo, el idioma español) y el canal debe estar libre de ruidos.'
    ],
    explanationHy: [
      'Հաղորդակցությունը գործընթաց է, որի միջոցով մարդիկ միմյանց են փոխանցում և ստանում տեղեկատվություն, մտքեր, զգացմունքներ կամ խնդրանքներ։',
      'Իսպանիայի ինստիտուտում (միջնակարգ դպրոցում / IES) մենք անընդհատ հաղորդակցվում ենք. երբ ուսուցչուհին դասն է բացատրում, երբ դասընկերը գրիչ է խնդրում, կամ երբ դասամիջոցի զանգն է հնչում։',
      'Որպեսզի հաղորդակցությունը հաջող լինի, մասնակիցները պետք է հասկանան նույն կոդը (օրինակ՝ իսպաներենը), իսկ կապուղին չպետք է ունենա խոչընդոտներ։'
    ],
    keyRulesEs: [
      'Siempre intervienen un emisor y al menos un receptor.',
      'El mensaje requiere un código compartido y un canal físico.',
      'El contexto escolar influye en el significado de lo que decimos.'
    ],
    keyRulesHy: [
      'Միշտ մասնակցում են հաղորդողը (ուղարկող) և առնվազն մեկ ընդունող։',
      'Հաղորդագրությունը պահանջում է ընդհանուր լեզվական կոդ և կապի միջոց։',
      'Դպրոցական միջավայրն ու համատեքստը ուղղակիորեն ազդում են խոսքի իմաստի վրա։'
    ],
    bilingualExamples: [
      { es: 'Buenos días a todos, abrid el libro por la página 14.', hy: 'Բարի լույս բոլորին, բացեք գիրքը 14-րդ էջում։', noteEs: 'Emisor: profesora; mensaje instructivo.', noteHy: 'Ուղարկող՝ ուսուցչուհի, հրահանգային հաղորդագրություն։' },
      { es: '¿Me dejas la regla de plástico, por favor?', hy: 'Կտա՞ս պլաստիկե քանոնդ, խնդրում եմ։', noteEs: 'Comunicación interpersonal directa.', noteHy: 'Ուղիղ անձնական հաղորդակցություն։' },
      { es: 'La sirena del instituto indica el final del recreo.', hy: 'Ինստիտուտի զանգը ազդարարում է դասամիջոցի ավարտը։', noteEs: 'Código sonoro no verbal.', noteHy: 'Ոչ խոսքային ձայնային ազդանշան։' },
    ],
    schoolExamples: [
      {
        situationEs: 'En clase de Lengua en el IES Miguel de Cervantes',
        situationHy: 'Իսպաներեն լեզվի դասին Միգել դե Սերվանտեսի անվան միջնակարգ դպրոցում',
        dialogueEs: '—Profesora Carmen: "Silencio, chicos. Vamos a repasar el examen de mañana".\n—Pablo: "Carmen, ¿entran las categorías gramaticales?"\n—Profesora: "Sí, Pablo, entran sustantivos y adjetivos".',
        dialogueHy: '—Ուսուցչուհի Կարմեն. «Լռությո՛ւն, երեխաներ։ Կրկնելու ենք վաղվա քննության նյութը»։\n—Պաբլո. «Կարմե՛ն, խոսքի մասերը մտնո՞ւմ են հարցաշարի մեջ»։\n—Ուսուցչուհի. «Այո՛, Պաբլո, գոյականներն ու ածականները ներառված են»։',
        explanationEs: 'Carmen y Pablo alternan los papeles de emisor y receptor utilizando el canal oral y el código del castellano.',
        explanationHy: 'Կարմենն ու Պաբլոն փոխարինում են իրար որպես ուղարկող և ընդունող՝ օգտագործելով բանավոր խոսքն ու իսպաներենը։'
      }
    ],
    exercises: [
      {
        id: 'ex-1-1',
        type: 'mcq',
        instructionEs: 'Indica quién es el emisor en esta situación escolar:',
        instructionHy: 'Նշիր, թե ով է հաղորդագրություն ուղարկողը դպրոցական այս իրավիճակում.',
        sentenceEs: 'El profesor dice: "Abrid el cuaderno de ejercicios".',
        sentenceHy: 'Ուսուցիչն ասում է. «Բացեք վարժությունների տետրը»։',
        options: ['El profesor', 'Los alumnos', 'El conserje', 'El cuaderno'],
        optionsHy: ['Ուսուցիչը', 'Աշակերտները', 'Դպրոցի պահակը', 'Տետրը'],
        correctAnswer: 'El profesor',
        explanationEs: 'El emisor es quien produce y emite el mensaje (en este caso, el profesor).',
        explanationHy: 'Ուղարկողը (Emisor) նա է, ով արտաբերում է հաղորդագրությունը (այս դեպքում՝ ուսուցիչը)։'
      },
      {
        id: 'ex-1-2',
        type: 'mcq',
        instructionEs: '¿Cuál es el canal en este mensaje escrito?',
        instructionHy: 'Ո՞րն է կապուղին (Canal) այս գրավոր հաղորդագրության մեջ.',
        sentenceEs: 'Lucía le pasa una nota de papel a su amiga Laura en clase de Plástica.',
        sentenceHy: 'Լուսիան նկարչության դասին թղթե գրություն է փոխանցում ընկերուհուն՝ Լաուրային։',
        options: ['El papel', 'El aire', 'El teléfono móvil', 'La voz'],
        optionsHy: ['Թուղթը', 'Օդը', 'Բջջային հեռախոսը', 'Ձայնը'],
        correctAnswer: 'El papel',
        explanationEs: 'El canal es el soporte físico por el que viaja el mensaje; aquí es la hoja de papel.',
        explanationHy: 'Կապուղին (Canal) ֆիզիկական միջոցն է, որով փոխանցվում է խոսքը. այստեղ դա թուղթն է։'
      },
      {
        id: 'ex-1-3',
        type: 'true_false',
        instructionEs: 'Indica si la afirmación es verdadera o falsa:',
        instructionHy: 'Նշիր՝ պնդումը ճիշտ է, թե սխալ.',
        sentenceEs: 'Para que haya comunicación eficaz, emisor y receptor deben usar el mismo código.',
        sentenceHy: 'Արդյունավետ հաղորդակցության համար ուղարկողն ու ընդունողը պետք է օգտագործեն նույն կոդը։',
        options: ['Verdadero', 'Falso'],
        optionsHy: ['Ճիշտ է', 'Սխալ է'],
        correctAnswer: 'Verdadero',
        explanationEs: 'Si uno habla español y el otro solo armenio sin conocer el otro idioma, no se entenderán.',
        explanationHy: 'Եթե մեկը խոսում է միայն իսպաներեն, իսկ մյուսը միայն հայերեն, նրանք չեն հասկանա միմյանց առանց ընդհանուր կոդի։'
      },
      {
        id: 'ex-1-4',
        type: 'mcq',
        instructionEs: '¿Qué elemento representa el timbre de salida del instituto?',
        instructionHy: 'Հաղորդակցության ո՞ր տարրին է վերաբերում դասամիջոցի զանգի ձայնը.',
        sentenceEs: 'Suena el timbre a las 11:15 en el IES.',
        sentenceHy: 'Ժամը 11:15-ին միջնակարգ դպրոցում հնչում է զանգը։',
        options: ['Un mensaje sonoro (código acústico)', 'El receptor', 'El contexto histórico', 'Una palabra escrita'],
        optionsHy: ['Ձայնային ազդանշան / հաղորդագրություն', 'Ընդունողը', 'Պատմական համատեքստը', 'Գրավոր բառ'],
        correctAnswer: 'Un mensaje sonoro (código acústico)',
        explanationEs: 'El timbre es un signo acústico que transmite el mensaje "comienza el recreo".',
        explanationHy: 'Զանգը ձայնային նշան է, որը հաղորդում է «սկսվում է դասամիջոցը» տեղեկությունը։'
      },
      {
        id: 'ex-1-5',
        type: 'classify',
        instructionEs: 'Clasifica el tipo de comunicación:',
        instructionHy: 'Դասակարգիր հաղորդակցության տեսակը.',
        sentenceEs: 'La profesora levanta la mano y pone el dedo índice en sus labios pidiendo silencio.',
        sentenceHy: 'Ուսուցչուհին բարձրացնում է ձեռքը և ցուցամատը դնում շուրթերին՝ խնդրելով լռություն։',
        options: ['Comunicación no verbal gestual', 'Comunicación verbal oral', 'Comunicación escrita', 'Comunicación digital'],
        optionsHy: ['Ոչ խոսքային ժեստերի հաղորդակցություն', 'Բանավոր խոսքային', 'Գրավոր հաղորդակցություն', 'Թվային'],
        correctAnswer: 'Comunicación no verbal gestual',
        explanationEs: 'No utiliza palabras, sino un gesto con significado conocido por todos.',
        explanationHy: 'Այստեղ բառեր չեն օգտագործվում, այլ հանրաճանաչ ժեստ, ուստի այն ոչ խոսքային է (no verbal)։'
      },
      {
        id: 'ex-1-6',
        type: 'fill_in',
        instructionEs: 'Completa la definición con la palabra correcta:',
        instructionHy: 'Լրացրու սահմանումը ճիշտ բառով.',
        sentenceEs: 'El sistema de signos que comparten emisor y receptor se llama ______.',
        sentenceHy: 'Նշանների այն համակարգը, որն օգտագործում են ուղարկողն ու ընդունողը, կոչվում է ______։',
        options: ['código', 'canal', 'contexto', 'ruido'],
        optionsHy: ['կոդ (código)', 'կապուղի (canal)', 'համատեքստ (contexto)', 'աղմուկ (ruido)'],
        correctAnswer: 'código',
        explanationEs: 'El código (el idioma español, signos, etc.) es el sistema de signos compartidos.',
        explanationHy: 'Կոդը (լեզուն, նշանները) ընդհանուր նշանային համակարգն է։'
      },
      {
        id: 'ex-1-7',
        type: 'mcq',
        instructionEs: 'Identifica el receptor en la siguiente situación:',
        instructionHy: 'Գտիր ընդունողին (Receptor) հետևյալ իրավիճակում.',
        sentenceEs: 'El director del instituto lee un comunicado por megafonía a todos los alumnos.',
        sentenceHy: 'Տնօրենը բարձրախոսով հայտարարություն է կարդում բոլոր աշակերտների համար։',
        options: ['Todos los alumnos', 'El director', 'El micrófono', 'La secretaría'],
        optionsHy: ['Բոլոր աշակերտները', 'Տնօրենը', 'Բարձրախոսը', 'Քարտուղարությունը'],
        correctAnswer: 'Todos los alumnos',
        explanationEs: 'Los alumnos son quienes escuchan y reciben el comunicado.',
        explanationHy: 'Աշակերտներն են նրանք, ովքեր լսում և ստանում են հաղորդագրությունը։'
      },
      {
        id: 'ex-1-8',
        type: 'mcq',
        instructionEs: '¿Qué es el contexto en la comunicación?',
        instructionHy: 'Ի՞նչ է համատեքստը (Contexto) հաղորդակցության մեջ.',
        sentenceEs: 'Las circunstancias de lugar, tiempo y situación que rodean el acto comunicativo.',
        sentenceHy: 'Այն տեղը, ժամանակը և հանգամանքները, որոնցում կատարվում է հաղորդակցությունը։',
        options: ['Circunstancias de tiempo y lugar', 'El idioma utilizado', 'El cable del teléfono', 'La persona que escucha'],
        optionsHy: ['Վայրի և ժամանակի հանգամանքները', 'Օգտագործված լեզուն', 'Հեռախոսի լարը', 'Լսող անձը'],
        correctAnswer: 'Circunstancias de tiempo y lugar',
        explanationEs: 'El contexto incluye dónde, cuándo y en qué situación se produce el mensaje.',
        explanationHy: 'Համատեքստը ներառում է այն միջավայրը, որտեղ տեղի է ունենում խոսակցությունը։'
      },
      {
        id: 'ex-1-9',
        type: 'true_false',
        instructionEs: '¿Es correcto el siguiente enunciado?',
        instructionHy: 'Ճի՞շտ է արդյոք հետևյալ պնդումը.',
        sentenceEs: 'En un diálogo escolar, los papeles de emisor y receptor se intercambian constantemente.',
        sentenceHy: 'Դպրոցական երկխոսության ընթացքում խոսողի և լսողի դերերը անընդհատ փոխվում են։',
        options: ['Verdadero', 'Falso'],
        optionsHy: ['Ճիշտ է', 'Սխալ է'],
        correctAnswer: 'Verdadero',
        explanationEs: 'Cuando respondes a tu profesor, tú pasas a ser el emisor y él se convierte en receptor.',
        explanationHy: 'Երբ պատասխանում ես ուսուցչին, դու դառնում ես ուղարկող, իսկ նա՝ ընդունող։'
      },
      {
        id: 'ex-1-10',
        type: 'mcq',
        instructionEs: '¿Qué obstáculo puede impedir que el receptor entienda el mensaje?',
        instructionHy: 'Ի՞նչ խոչընդոտ կարող է խանգարել ընդունողին ճիշտ հասկանալ հաղորդագրությունը.',
        sentenceEs: 'Mucho ruido en el patio del instituto durante el recreo.',
        sentenceHy: 'Ուժեղ աղմուկը դպրոցի բակում դասամիջոցի ժամանակ։',
        options: ['El ruido o interferencia en el canal', 'El diccionario', 'La buena pronunciación', 'La ortografía'],
        optionsHy: ['Աղմուկը կամ խանգարումը կապուղում', 'Բառարանը', 'Լավ առոգանությունը', 'Ուղղագրությունը'],
        correctAnswer: 'El ruido o interferencia en el canal',
        explanationEs: 'El ruido altera el canal e impide que las ondas sonoras lleguen con claridad.',
        explanationHy: 'Աղմուկը խաթարում է կապուղին և թույլ չի տալիս լսել խոսքը։'
      }
    ],
    testQuestions: [
      {
        id: 'tq-1-1',
        questionEs: '¿Quién es el emisor en un correo electrónico enviado por el tutor a tus padres?',
        questionHy: 'Ո՞վ է հաղորդագրությունն ուղարկողը (Emisor) դասղեկի կողմից ծնողներիդ ուղարկված էլ. նամակում.',
        optionsEs: ['El tutor del curso', 'Tus padres', 'El ordenador', 'La plataforma escolar'],
        optionsHy: ['Դասղեկը', 'Քո ծնողները', 'Համակարգիչը', 'Դպրոցական կայքը'],
        correctIndex: 0,
        explanationEs: 'El tutor es la persona que redacta y envía la información.',
        explanationHy: 'Դասղեկն է այն մարդը, ով կազմում և ուղարկում է նամակը։'
      },
      {
        id: 'tq-1-2',
        questionEs: 'En una clase de 1.º ESO en España, ¿cuál es el código habitual de las explicaciones?',
        questionHy: 'Իսպանիայում 1.º ESO-ի դասարանում ո՞րն է դասերի բացատրության հիմնական կոդը (Código).',
        optionsEs: ['El idioma castellano / español', 'El código morse', 'Los colores de la pizarra', 'El timbre de salida'],
        optionsHy: ['Իսպաներեն լեզուն', 'Մորզեի կոդը', 'Գրատախտակի գույները', 'Դասամիջոցի զանգը'],
        correctIndex: 0,
        explanationEs: 'La lengua española es el código lingüístico con sus reglas gramaticales.',
        explanationHy: 'Իսպաներենն այն լեզվական համակարգն է, որով հաղորդվում է տեղեկությունը։'
      },
      {
        id: 'tq-1-3',
        questionEs: '¿Cuál es el canal cuando lees un ejercicio en el libro de texto de Lengua?',
        questionHy: 'Ո՞րն է կապուղին (Canal), երբ դու կարդում ես վարժությունը դասագրքում.',
        optionsEs: ['El libro de texto impreso', 'La voz del profesor', 'El aire de la clase', 'La imaginación'],
        optionsHy: ['Տպագիր դասագիրքը', 'Ուսուցչի ձայնը', 'Դասարանի օդը', 'Երևակայությունը'],
        correctIndex: 0,
        explanationEs: 'El papel y la tinta del libro son el medio físico portador del texto.',
        explanationHy: 'Դասագրքի թուղթն ու տպագիր տեքստը հանդիսանում են ֆիզիկական կրիչը։'
      },
      {
        id: 'tq-1-4',
        questionEs: '¿Qué función del lenguaje predomina en: "¡Qué alegría verte de nuevo en clase!"?',
        questionHy: 'Լեզվի ո՞ր գործառույթն է գերիշխում «¡Qué alegría verte de nuevo en clase!» նախադասության մեջ.',
        optionsEs: ['Función expresiva o emotiva', 'Función referencial', 'Función metalingüística', 'Función poética'],
        optionsHy: ['Զգացմունքային (expresiva)', 'Տեղեկատվական (referencial)', 'Մետալեզվական (metalingüística)', 'Գեղարվեստական (poética)'],
        correctIndex: 0,
        explanationEs: 'Expresa los sentimientos y emociones del emisor mediante exclamación.',
        explanationHy: 'Արտահայտում է խոսողի ուրախությունն ու հույզերը, ուստի զգացմունքային է։'
      },
      {
        id: 'tq-1-5',
        questionEs: '¿Qué función predomina en: "Los sustantivos nombran personas, animales o cosas"?',
        questionHy: 'Ո՞ր գործառույթն է գերիշխում. «Los sustantivos nombran personas, animales o cosas»:',
        optionsEs: ['Función metalingüística', 'Función apelativa', 'Función fática', 'Función conativa'],
        optionsHy: ['Մետալեզվական (լեզվի մասին)', 'Դիմողական', 'Կապը պահպանող', 'Հրամայական'],
        correctIndex: 0,
        explanationEs: 'Habla sobre el propio código lingüístico (la gramática del español).',
        explanationHy: 'Օգտագործվում է հենց լեզուն և քերականական կանոնները բացատրելու համար։'
      },
      {
        id: 'tq-1-6',
        questionEs: 'Cuando una persona dice: "¿Me oyes bien, David?", ¿qué función del lenguaje usa?',
        questionHy: 'Երբ մեկն ասում է. «¿Me oyes bien, David?», ո՞ր գործառույթն է օգտագործում.',
        optionsEs: ['Función fática (o de contacto)', 'Función poética', 'Función referencial', 'Función emotiva'],
        optionsHy: ['Կապը ստուգող/պահպանող (fática)', 'Գեղարվեստական', 'Տեղեկատվական', 'Զգացմունքային'],
        correctIndex: 0,
        explanationEs: 'Sirve para comprobar si el canal de comunicación funciona adecuadamente.',
        explanationHy: 'Ծառայում է կապուղու աշխատանքը ստուգելու համար («լսո՞ւմ ես ինձ»)։'
      },
      {
        id: 'tq-1-7',
        questionEs: '¿Cuál de los siguientes es un ejemplo de comunicación NO verbal?',
        questionHy: 'Սրանցից ո՞րն է ՈՉ ԽՈՍՔԱՅԻՆ (no verbal) հաղորդակցության օրինակ.',
        optionsEs: ['El semáforo en rojo para los peatones', 'Una carta de tres páginas', 'Un discurso del delegado', 'Un mensaje de WhatsApp'],
        optionsHy: ['Լուսացույցի կարմիր լույսը հետիոտների համար', 'Եռէջ նամակը', 'Ավագի ելույթը', 'WhatsApp հաղորդագրությունը'],
        correctIndex: 0,
        explanationEs: 'La luz roja es un símbolo visual que comunica "alto", sin usar palabras.',
        explanationHy: 'Կարմիր լույսը տեսողական նշան է, որը հրահանգում է կանգնել՝ առանց բառերի։'
      },
      {
        id: 'tq-1-8',
        questionEs: '¿Qué elemento corresponde a la información transmitida en sí misma?',
        questionHy: 'Ո՞ր տարրն է հենց բուն փոխանցվող տեղեկատվությունը.',
        optionsEs: ['El mensaje', 'El canal', 'El emisor', 'El receptor'],
        optionsHy: ['Հաղորդագրությունը (Mensaje)', 'Կապուղին', 'Ուղարկողը', 'Ընդունողը'],
        correctIndex: 0,
        explanationEs: 'El mensaje es el contenido concreto de la información compartida.',
        explanationHy: 'Հաղորդագրությունն (Mensaje) ինքնին այն բովանդակությունն է, որը հաղորդվում է։'
      },
      {
        id: 'tq-1-9',
        questionEs: 'Si hablas con el director del instituto, ¿qué registro lingüístico debes emplear?',
        questionHy: 'Եթե խոսում ես դպրոցի տնօրենի հետ, ո՞ր խոսելաոճը պետք է օգտագործես.',
        optionsEs: ['Registro formal y respetuoso', 'Registro informal con jerga', 'Lenguaje poético rimado', 'Código no verbal mudo'],
        optionsHy: ['Պաշտոնական և հարգալից ոճ (formal)', 'Անպաշտոն ժարգոնային ոճ', 'Հանգավորված բանաստեղծական', 'Լուռ ոչ խոսքային'],
        correctIndex: 0,
        explanationEs: 'Con profesores y dirección se utiliza un registro formal de cortesía ("usted", "buenos días").',
        explanationHy: 'Դպրոցի ղեկավարության հետ շփվելիս պահանջվում է քաղաքավարի և պաշտոնական ոճ։'
      },
      {
        id: 'tq-1-10',
        questionEs: '¿Qué intención comunicativa tiene el cartel: "Prohibido correr por los pasillos"?',
        questionHy: 'Ի՞նչ հաղորդակցական նպատակ ունի «Prohibido correr por los pasillos» ցուցանակը.',
        optionsEs: ['Función apelativa (regular la conducta del receptor)', 'Función expresiva de tristeza', 'Función poética con rima', 'Función metalingüística de sintaxis'],
        optionsHy: ['Դիմողական / հրահանգող (վարքը կարգավորող)', 'Տխրության զգացմունքային', 'Հանգավոր գեղարվեստական', 'Շարահյուսության մետալեզվական'],
        correctIndex: 0,
        explanationEs: 'Busca influir en la conducta del alumno para que no corra.',
        explanationHy: 'Նպատակն է ազդել աշակերտի վարքագծի վրա, որպեսզի միջանցքում չվազեն։'
      }
    ],
    miniExam: {
      titleEs: 'Mini examen: Fundamentos de la comunicación',
      titleHy: 'Փոքր քննություն. Հաղորդակցության հիմունքներ',
      questions: [
        {
          id: 'me-1-1',
          questionEs: '¿Cuáles son los 6 elementos del circuito de la comunicación?',
          questionHy: 'Որո՞նք են հաղորդակցության շղթայի 6 հիմնական տարրերը.',
          optionsEs: [
            'Emisor, receptor, mensaje, código, canal y contexto',
            'Sujeto, predicado, verbo, adjetivo, sustantivo y adverbio',
            'Planteamiento, nudo, desenlace, verso, rima y estrofa',
            'Aguda, llana, esdrújula, diptongo, hiato y tilde'
          ],
          optionsHy: [
            'Ուղարկող, ընդունող, հաղորդագրություն, կոդ, կապուղի և համատեքստ',
            'Ենթակա, ստորոգյալ, բայ, ածական, գոյական և մակբայ',
            'Սկիզբ, հանգույց, հանգուցալուծում, տող, հանգ և տուն',
            'Շեշտված, նախաշեշտ, երկհնչյուն, բացարձակ հանգ'
          ],
          correctIndex: 0,
          explanationEs: 'Son los 6 elementos teóricos formulados por Roman Jakobson indispensables en 1.º ESO.',
          explanationHy: 'Սրանք 1.º ESO-ի ծրագրի հաղորդակցության 6 հիմնարար տարրերն են։'
        },
        {
          id: 'me-1-2',
          questionEs: 'Si una sirena de bomberos suena en la calle, el mensaje principal es:',
          questionHy: 'Եթե փողոցում հրշեջ մեքենայի ազդանշան է հնչում, գլխավոր հաղորդագրությունն է.',
          optionsEs: [
            'Cedan el paso, hay una emergencia',
            'Buenos días a los peatones',
            'La música es agradable',
            'El canal está desconectado'
          ],
          optionsHy: [
            'Ճանապարհ տվեք, արտակարգ իրավիճակ է',
            'Բարի լույս հետիոտներին',
            'Երաժշտությունը հաճելի է',
            'Կապուղին անջատված է'
          ],
          correctIndex: 0,
          explanationEs: 'El código acústico de la sirena de bomberos significa emergencia y prioridad de paso.',
          explanationHy: 'Ազդանշանի ձայնային կոդը նշանակում է շտապ արտակարգ դեպք և ճանապարհ զիջելու հրահանգ։'
        }
      ]
    }
  },

  'm3-2': {
    subtopicId: 'm3-2',
    titleEs: 'Sustantivos',
    titleHy: 'Գոյականներ',
    moduleTitleEs: 'Módulo 3: Gramática',
    moduleTitleHy: 'Մոդուլ 3: Քերականություն',
    moduleId: 'm3-gramatica',
    explanationEs: [
      'Los sustantivos (o nombres) son palabras variables que nombran personas, animales, cosas, lugares, sentimientos e ideas.',
      'Tienen género (masculino o femenino: el libro / la mesa) y número (singular o plural: el alumno / los alumnos).',
      'En la oración, el sustantivo suele funcionar como núcleo del sintagma nominal y núcleo del sujeto.'
    ],
    explanationHy: [
      'Գոյականները (Sustantivos կամ Nombres) փոփոխական խոսքի մաս են, որոնք անվանում են մարդկանց, կենդանիներին, իրերը, վայրերը, զգացմունքներն ու գաղափարները։',
      'Նրանք ունեն քերականական սեռ (արական կամ իգական՝ el libro / la mesa) և թիվ (եզակի կամ հոգնակի՝ el alumno / los alumnos)։',
      'Նախադասության մեջ գոյականը սովորաբար հանդիսանում է ենթակայի գլխավոր անդամ (Núcleo del Sujeto)։'
    ],
    keyRulesEs: [
      'Comunes (perro, río) vs. Propios con mayúscula inicial (Toby, Ebro).',
      'Concretos (mochila, lápiz) vs. Abstractos (amistad, paciencia).',
      'Individuales (árbol, oveja) vs. Colectivos en singular que nombran grupo (bosque, rebaño).'
    ],
    keyRulesHy: [
      'Հասարակ (շուն, գետ) ընդդեմ հատուկ մեծատառով գրվող (Տոբի, Էբրո)։',
      'Թանձրացական/շոշափելի (պայուսակ, մատիտ) ընդդեմ վերացական (ընկերություն, համբերություն)։',
      'Անհատական (ծառ, ոչխար) ընդդեմ հավաքական եզակի թվով խումբ նշող (անտառ, հոտ)։'
    ],
    bilingualExamples: [
      { es: 'El instituto de Madrid tiene una biblioteca luminosa.', hy: 'Մադրիդի ինստիտուտն ունի լուսավոր գրադարան։', noteEs: 'Sustantivos: instituto, Madrid, biblioteca.', noteHy: 'Գոյականներ՝ instituto, Madrid, biblioteca:' },
      { es: 'La amistad de mis compañeros me da mucha alegría.', hy: 'Իմ դասընկերների ընկերությունն ինձ մեծ ուրախություն է պատճառում։', noteEs: 'Amistad y alegría son sustantivos abstractos.', noteHy: 'Amistad (ընկերություն) և alegría (ուրախություն) վերացական գոյականներ են։' },
      { es: 'Un rebaño pastaba cerca del pueblo.', hy: 'Ոչխարների հոտը արածում էր գյուղի մոտ։', noteEs: 'Rebaño es un sustantivo colectivo.', noteHy: 'Rebaño (հոտ) հավաքական գոյական է։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Revisando la mochila antes de entrar al aula',
        situationHy: 'Դասարան մտնելուց առաջ դպրոցական պայուսակը ստուգելիս',
        dialogueEs: '—Lucas: "He metido el estuche, dos bolígrafos, el diccionario y mi merienda".\n—Sara: "¿Y la libreta de Matemáticas?"\n—Lucas: "¡Menos mal que me lo recuerdas!"',
        dialogueHy: '—Լուկաս. «Դրել եմ գրչատուփը, երկու գրիչ, բառարանը և նախաճաշս»։\n—Սառա. «Իսկ մաթեմատիկայի տետրը՞»։\n—Լուկաս. «Լավ է, որ հիշեցրիր»։',
        explanationEs: 'Todas las palabras "estuche", "bolígrafos", "diccionario", "merienda" y "libreta" son sustantivos comunes y concretos.',
        explanationHy: 'Բոլոր թվարկված առարկաները հասարակ և շոշափելի (թանձրացական) գոյականներ են։'
      }
    ],
    exercises: [
      {
        id: 'ex-3-1',
        type: 'mcq',
        instructionEs: 'Identifica cuál de las siguientes palabras es un sustantivo propio:',
        instructionHy: 'Գտիր, թե հետևյալ բառերից որն է հատուկ գոյական (Sustantivo propio).',
        sentenceEs: 'El río Ebro pasa por la ciudad de Zaragoza.',
        sentenceHy: 'Էբրո գետն անցնում է Սարագոսա քաղաքով։',
        options: ['Zaragoza', 'ciudad', 'río', 'pasa'],
        optionsHy: ['Սարագոսա (Zaragoza)', 'քաղաք (ciudad)', 'գետ (río)', 'անցնում է (pasa)'],
        correctAnswer: 'Zaragoza',
        explanationEs: 'Zaragoza es un nombre propio de ciudad y se escribe con mayúscula.',
        explanationHy: 'Zaragoza-ն քաղաքի հատուկ անուն է և գրվում է մեծատառով։'
      },
      {
        id: 'ex-3-2',
        type: 'classify',
        instructionEs: '¿Qué tipo de sustantivo es "esperanza"?',
        instructionHy: 'Ինչպիսի՞ գոյական է «esperanza» (հույս) բառը.',
        sentenceEs: 'Teníamos la esperanza de aprobar el examen con un 10.',
        sentenceHy: 'Մենք քննությունը 10-ով հանձնելու հույս ունեինք։',
        options: ['Sustantivo abstracto', 'Sustantivo concreto', 'Sustantivo colectivo', 'Sustantivo propio'],
        optionsHy: ['Վերացական գոյական (abstracto)', 'Թանձրացական գոյական (concreto)', 'Հավաքական (colectivo)', 'Հատուկ (propio)'],
        correctAnswer: 'Sustantivo abstracto',
        explanationEs: 'No se puede percibir con los cinco sentidos, nombra un sentimiento o idea.',
        explanationHy: 'Այն զգայարաններով շոշափելի չէ, այլ արտահայտում է հույզ կամ միտք։'
      },
      {
        id: 'ex-3-3',
        type: 'mcq',
        instructionEs: '¿Cuál de estos sustantivos es COLECTIVO?',
        instructionHy: 'Այս գոյականներից ո՞րն է ՀԱՎԱՔԱԿԱՆ (Colectivo).',
        sentenceEs: 'El alumnado del centro organizó un festival solidario.',
        sentenceHy: 'Կենտրոնի աշակերտությունը բարեգործական փառատոն կազմակերպեց։',
        options: ['alumnado', 'profesor', 'colegio', 'festival'],
        optionsHy: ['աշակերտություն (alumnado)', 'ուսուցիչ (profesor)', 'դպրոց (colegio)', 'փառատոն (festival)'],
        correctAnswer: 'alumnado',
        explanationEs: 'En singular nombra al conjunto de todos los alumnos.',
        explanationHy: 'Եզակի թվով նշանակում է աշակերտների ամբողջություն։'
      },
      {
        id: 'ex-3-4',
        type: 'true_false',
        instructionEs: 'Verdadero o falso:',
        instructionHy: 'Ճի՞շտ է, թե՞ սխալ.',
        sentenceEs: 'Todos los sustantivos propios deben escribirse con mayúscula inicial en español.',
        sentenceHy: 'Իսպաներենում բոլոր հատուկ գոյականները պետք է գրվեն սկզբնական մեծատառով։',
        options: ['Verdadero', 'Falso'],
        optionsHy: ['Ճիշտ է', 'Սխալ է'],
        correctAnswer: 'Verdadero',
        explanationEs: 'Los nombres de personas, ríos, ciudades y países llevan mayúscula.',
        explanationHy: 'Մարդկանց, գետերի, երկրների և քաղաքների անունները գրվում են մեծատառով։'
      },
      {
        id: 'ex-3-5',
        type: 'mcq',
        instructionEs: '¿Cuál es el género y número de la palabra "aguas"?',
        instructionHy: 'Ո՞րն է «aguas» բառի քերականական սեռն ու թիվը.',
        sentenceEs: 'Las aguas cristalinas del lago bajaban de la montaña.',
        sentenceHy: 'Լճի բյուրեղյա ջրերը իջնում էին սարից։',
        options: ['Femenino plural', 'Masculino plural', 'Femenino singular', 'Masculino singular'],
        optionsHy: ['Իգական հոգնակի (femenino plural)', 'Արական հոգնակի', 'Իգական եզակի', 'Արական եզակի'],
        correctAnswer: 'Femenino plural',
        explanationEs: 'Aunque en singular decimos "el agua" por la a- tónica, el sustantivo es femenino: "las aguas".',
        explanationHy: 'Չնայած եզակիում ասում ենք el agua (շեշտված a-ի պատճառով), բառը իգական է՝ las aguas:'
      },
      {
        id: 'ex-3-6',
        type: 'fill_in',
        instructionEs: 'Elige el sustantivo individual correspondiente al colectivo "arboleda":',
        instructionHy: 'Ընտրիր «arboleda» (ծառուղի/պուրակ) հավաքական գոյականին համապատասխանող անհատականը.',
        sentenceEs: 'Una arboleda es un conjunto de ______.',
        sentenceHy: 'Arboleda-ն հետևյալի հավաքականությունն է՝ ______:',
        options: ['árboles', 'flores', 'hojas', 'frutas'],
        optionsHy: ['ծառեր (árboles)', 'ծաղիկներ', 'տերևներ', 'մրգեր'],
        correctAnswer: 'árboles',
        explanationEs: 'Arboleda viene de árbol y designa un sitio poblado de árboles.',
        explanationHy: 'Arboleda նշանակում է ծառերի խումբ կամ պուրակ։'
      },
      {
        id: 'ex-3-7',
        type: 'mcq',
        instructionEs: '¿Cuál es el sustantivo en la oración: "La felicidad se comparte"?',
        instructionHy: 'Ո՞րն է գոյականը «La felicidad se comparte» նախադասության մեջ.',
        sentenceEs: 'La felicidad se comparte con los amigos.',
        sentenceHy: 'Երջանկությունը կիսում են ընկերների հետ։',
        options: ['felicidad', 'comparte', 'la', 'con'],
        optionsHy: ['երջանկություն (felicidad)', 'կիսում է (comparte)', 'la (հոդ)', 'con (նախդիր)'],
        correctAnswer: 'felicidad',
        explanationEs: '"Felicidad" nombra una cualidad/estado abstracto y funciona como sujeto.',
        explanationHy: '«Felicidad»-ը վերացական գոյական է և նախադասության ենթական է։'
      },
      {
        id: 'ex-3-8',
        type: 'classify',
        instructionEs: 'Clasifica el sustantivo "Guadarrama":',
        instructionHy: 'Դասակարգիր «Guadarrama» գոյականը.',
        sentenceEs: 'La sierra de Guadarrama está cubierta de nieve en invierno.',
        sentenceHy: 'Գվադարամայի լեռնաշղթան ձմռանը ծածկված է ձյունով։',
        options: ['Propio geográfico', 'Común abstracto', 'Colectivo plural', 'Individual no contable'],
        optionsHy: ['Աշխարհագրական հատուկ (propio)', 'Հասարակ վերացական', 'Հավաքական հոգնակի', 'Անհատական'],
        correctAnswer: 'Propio geográfico',
        explanationEs: 'Es el nombre propio de una sierra montañosa de España.',
        explanationHy: 'Իսպանիայի հայտնի լեռնաշղթայի հատուկ աշխարհագրական անունն է։'
      },
      {
        id: 'ex-3-9',
        type: 'true_false',
        instructionEs: '¿"Lápiz" es un sustantivo concreto y contable?',
        instructionHy: '«Lápiz» (մատիտ) բառը շոշափելի՞ և հաշվելի՞ գոյական է.',
        sentenceEs: 'Tengo tres lápices en el estuche.',
        sentenceHy: 'Ես գրչատուփիս մեջ երեք մատիտ ունեմ։',
        options: ['Verdadero', 'Falso'],
        optionsHy: ['Ճիշտ է', 'Սխալ է'],
        correctAnswer: 'Verdadero',
        explanationEs: 'Se puede tocar y ver (concreto) y se puede contar por unidades (un lápiz, dos lápices).',
        explanationHy: 'Այն տեսանելի և շոշափելի է (concreto) և հնարավոր է հաշվել թվերով (contable)։'
      },
      {
        id: 'ex-3-10',
        type: 'mcq',
        instructionEs: '¿Qué palabra no es un sustantivo?',
        instructionHy: 'Ո՞ր բառը գոյական ՉԷ.',
        sentenceEs: 'El perro veloz corría por el parque verde.',
        sentenceHy: 'Արագավազ շունը վազում էր կանաչ զբոսայգով։',
        options: ['veloz', 'perro', 'parque', 'otoño'],
        optionsHy: ['veloz (արագ՝ ածական է)', 'perro (շուն՝ գոյական)', 'parque (այգի՝ գոյական)', 'otoño (աշուն՝ գոյական)'],
        correctAnswer: 'veloz',
        explanationEs: '"Veloz" es un adjetivo calificativo que describe al perro.',
        explanationHy: '«Veloz»-ը որակական ածական է, ոչ թե գոյական։'
      }
    ],
    testQuestions: [
      {
        id: 'tq-3-1',
        questionEs: '¿Cuál es la función principal del sustantivo en el sintagma nominal?',
        questionHy: 'Ո՞րն է գոյականի գլխավոր դերը գոյականական կապակցության մեջ.',
        optionsEs: ['Núcleo (N)', 'Enlace preposicional', 'Modificador adverbial', 'Nexo conjuntivo'],
        optionsHy: ['Գլխավոր անդամ / միջուկ (Núcleo)', 'Նախդիրային կապ', 'Մակբայական փոփոխիչ', 'Շաղկապական կապ'],
        correctIndex: 0,
        explanationEs: 'El sustantivo es la palabra clave alrededor de la cual se organizan determinantes y adjetivos.',
        explanationHy: 'Գոյականը գլխավոր միջուկն է (Núcleo), որին միանում են հոդերն ու ածականները։'
      },
      {
        id: 'tq-3-2',
        questionEs: '¿Cuál es el sustantivo colectivo de "isla"?',
        questionHy: 'Ո՞րն է «isla» (կղզի) բառի հավաքական գոյականը.',
        optionsEs: ['Archipiélago', 'Flota', 'Constelación', 'Manada'],
        optionsHy: ['Արշիպելագ / կղզեխումբ (Archipiélago)', 'Նավատորմ (Flota)', 'Համաստեղություն', 'Երամակ/հոտ'],
        correctIndex: 0,
        explanationEs: 'Un archipiélago es un conjunto de islas cercanas (como las Islas Baleares o Canarias).',
        explanationHy: 'Արշիպելագը կղզիների խումբ է (ինչպես Բալեարյան կամ Կանարյան կղզիները Իսպանիայում)։'
      },
      {
        id: 'tq-3-3',
        questionEs: '¿Qué tipo de sustantivo es "justicia"?',
        questionHy: 'Ինչպիսի՞ գոյական է «justicia» (արդարություն) բառը.',
        optionsEs: ['Abstracto y común', 'Concreto y propio', 'Colectivo y contable', 'Propio geográfico'],
        optionsHy: ['Վերացական և հասարակ (Abstracto y común)', 'Թանձրացական և հատուկ', 'Հավաքական և հաշվելի', 'Աշխարհագրական հատուկ'],
        correctIndex: 0,
        explanationEs: 'Es un concepto o valor moral, no un objeto material.',
        explanationHy: 'Այն բարոյական հասկացություն է, ոչ թե ֆիզիկական իր։'
      },
      {
        id: 'tq-3-4',
        questionEs: 'En la frase: "Marta visitó el museo del Prado", ¿cuántos sustantivos propios hay?',
        questionHy: '«Marta visitó el museo del Prado» նախադասության մեջ քանի՞ հատուկ գոյական կա.',
        optionsEs: ['Dos (Marta, Prado)', 'Uno solo', 'Tres', 'Ninguno'],
        optionsHy: ['Երկու հատ (Marta, Prado)', 'Միայն մեկը', 'Երեքը', 'Ոչ մի'],
        correctIndex: 0,
        explanationEs: '"Marta" (nombre de persona) y "Prado" (nombre propio del museo de Madrid). "Museo" es común.',
        explanationHy: 'Marta-ն մարդու անուն է, իսկ Prado-ն՝ Մադրիդի թանգարանի հատուկ անունը։'
      },
      {
        id: 'tq-3-5',
        questionEs: '¿Cómo se forma el plural del sustantivo "álbum"?',
        questionHy: 'Ինչպե՞ս է կազմվում «álbum» բառի հոգնակին.',
        optionsEs: ['Álbumes', 'Álbums', 'Álbumos', 'Los álbum'],
        optionsHy: ['Álbumes', 'Álbums', 'Álbumos', 'Los álbum'],
        correctIndex: 0,
        explanationEs: 'Las palabras terminadas en consonante como -m o -l añaden "-es": álbumes.',
        explanationHy: 'Բաղաձայնով ավարտվող բառերը հոգնակիում ստանում են -es վերջավորությունը։'
      },
      {
        id: 'tq-3-6',
        questionEs: '¿Cuál es el femenino correspondiente al sustantivo "actor"?',
        questionHy: 'Ո՞րն է «actor» (դերասան) գոյականի իգական սեռը.',
        optionsEs: ['Actriz', 'Actora', 'Actoresa', 'La actor'],
        optionsHy: ['Actriz (դերասանուհի)', 'Actora', 'Actoresa', 'La actor'],
        correctIndex: 0,
        explanationEs: 'Forma especial e irregular de femenino mediante el sufijo -triz: actriz.',
        explanationHy: 'Հատուկ անկանոն իգական ձև -triz ածանցով՝ actriz:'
      },
      {
        id: 'tq-3-7',
        questionEs: '¿Qué palabra nombra un conjunto de músicos en una orquesta?',
        questionHy: 'Ո՞ր բառն է անվանում երաժիշտների խումբը.',
        optionsEs: ['Orquesta', 'Guitarra', 'Partitura', 'Director'],
        optionsHy: ['Orquesta (նվագախումբ)', 'Guitarra (կիթառ)', 'Partitura (նոտաներ)', 'Director (դիրիժոր)'],
        correctIndex: 0,
        explanationEs: '"Orquesta" es un sustantivo colectivo.',
        explanationHy: 'Orquesta-ն հավաքական գոյական է։'
      },
      {
        id: 'tq-3-8',
        questionEs: '¿Cuál es el sustantivo común en: "Madrid es la capital de España"?',
        questionHy: 'Ո՞րն է հասարակ գոյականը «Madrid es la capital de España» նախադասության մեջ.',
        optionsEs: ['capital', 'Madrid', 'España', 'es'],
        optionsHy: ['capital (մայրաքաղաք՝ հասարակ)', 'Madrid (հատուկ)', 'España (հատուկ)', 'es (բայ)'],
        correctIndex: 0,
        explanationEs: '"Capital" nombra la categoría de ciudad principal; Madrid y España son propios.',
        explanationHy: '«Capital»-ը հասարակ գոյական է, իսկ Madrid-ն ու España-ն՝ հատուկ անուններ։'
      },
      {
        id: 'tq-3-9',
        questionEs: '¿Los sustantivos no contables pueden contarse directamente con números?',
        questionHy: 'Անհաշվելի գոյականները կարելի՞ է ուղղակիորեն հաշվել թվերով (օրինակ՝ երկու ավազ).',
        optionsEs: ['No, se miden o pesan (harina, agua, aire)', 'Sí, siempre', 'Solo en plural', 'Solo si son propios'],
        optionsHy: ['Ոչ, դրանք չափվում կամ կշռվում են (ալյուր, ջուր, օդ)', 'Այո, միշտ', 'Միայն հոգնակիում', 'Միայն հատուկ լինելիս'],
        correctIndex: 0,
        explanationEs: 'Los no contables necesitan unidades de medida (un litro de agua, un kilo de harina).',
        explanationHy: 'Անհաշվելիները պահանջում են չափման միավորներ (մեկ լիտր ջուր, մեկ կիլոգրամ ալյուր)։'
      },
      {
        id: 'tq-3-10',
        questionEs: '¿Qué afirmación sobre el género del sustantivo es correcta en español?',
        questionHy: 'Իսպաներենում գոյականի սեռի վերաբերյալ ո՞ր պնդումն է ճիշտ.',
        optionsEs: ['Todos los sustantivos tienen género asignado (masculino o femenino)', 'Los objetos inanimados son neutros', 'No existen sustantivos femeninos que terminen en -o', 'El género no influye en los determinantes'],
        optionsHy: ['Բոլոր գոյականներն ունեն քերականական սեռ (արական կամ իգական)', 'Անշունչ իրերը չեզոք են', '-o-ով իգական բառ չկա', 'Սեռը կապ չունի հոդերի հետ'],
        correctIndex: 0,
        explanationEs: 'En español gramatical todo sustantivo es masculino o femenino; no hay género neutro en sustantivos.',
        explanationHy: 'Իսպաներենում յուրաքանչյուր գոյական կամ արական է, կամ իգական։'
      }
    ],
    miniExam: {
      titleEs: 'Mini examen: El sustantivo y sus clases',
      titleHy: 'Փոքր քննություն. Գոյականը և նրա տեսակները',
      questions: [
        {
          id: 'me-3-1',
          questionEs: 'En la frase: "La manada de lobos cruzó el bosque", ¿cuáles son sustantivos colectivos?',
          questionHy: '«La manada de lobos cruzó el bosque» նախադասության մեջ որո՞նք են հավաքական գոյականներ.',
          optionsEs: ['manada y bosque', 'lobos y cruzó', 'bosque y lobos', 'la y el'],
          optionsHy: ['manada (ոհմակ) և bosque (անտառ)', 'lobos և cruzó', 'bosque և lobos', 'la և el'],
          correctIndex: 0,
          explanationEs: '"Manada" (grupo de lobos/animales) y "bosque" (conjunto de árboles) son colectivos.',
          explanationHy: 'Manada (ոհմակ) և bosque (անտառ՝ ծառերի խումբ) հավաքական գոյականներ են։'
        },
        {
          id: 'me-3-2',
          questionEs: '¿Qué opción contiene únicamente sustantivos abstractos?',
          questionHy: 'Ո՞ր տարբերակն է պարունակում ՄԻԱՅՆ վերացական գոյականներ.',
          optionsEs: ['generosidad, valentía, tristeza', 'mochila, cuaderno, bolígrafo', 'Zaragoza, Madrid, Barcelona', 'árbol, oveja, pez'],
          optionsHy: ['առատաձեռնություն, արիություն, տխրություն', 'պայուսակ, տետր, գրիչ', 'Սարագոսա, Մադրիդ, Բարսելոնա', 'ծառ, ոչխար, ձուկ'],
          correctIndex: 0,
          explanationEs: 'La generosidad, la valentía y la tristeza son ideas y sentimientos que no tienen forma física.',
          explanationHy: 'Այս բառերը բնորոշում են բարոյական հատկանիշներ և հույզեր, որոնք ֆիզիկական տեսք չունեն։'
        }
      ]
    }
  },

  'm4-3': {
    subtopicId: 'm4-3',
    titleEs: 'Sujeto',
    titleHy: 'Ենթակա',
    moduleTitleEs: 'Módulo 4: Sintaxis',
    moduleTitleHy: 'Մոդուլ 4: Շարահյուսություն',
    moduleId: 'm4-sintaxis',
    explanationEs: [
      'El sujeto es la persona, animal o cosa que realiza la acción del verbo o de quien se dice algo en la oración.',
      'REGLA DE ORO DE 1.º ESO: El sujeto siempre concuerda en persona y número con el verbo. Si cambias el número del verbo (de singular a plural), la parte que obligatoriamente cambia es el sujeto.',
      'Ejemplo: "El alumno lee" -> "Los alumnos leen". Como "El alumno" cambia a plural, es indiscutiblemente el sujeto.'
    ],
    explanationHy: [
      'Ենթական (Sujeto) այն անձն է, կենդանին կամ առարկան, որը կատարում է գործողությունը կամ որի մասին ինչ-որ բան է ասվում նախադասության մեջ։',
      '1.º ESO-Ի ՈՍԿԻ ԿԱՆՈՆԸ. Ենթական ՄԻՇՏ համաձայնում է բայի հետ դեմքով և թվով։ Եթե փոխես բայի թիվը (եզակիից հոգնակի), այն բառը, որը պարտադիր պետք է փոխվի, ԵՆԹԱԿԱՆ Է։',
      'Օրինակ՝ «El alumno lee» -> «Los alumnos leen»: Քանի որ «El alumno»-ն դառնում է հոգնակի, ուրեմն հենց դա է ենթական։'
    ],
    keyRulesEs: [
      'Prueba de la concordancia: cambia el verbo de singular a plural.',
      'Sujeto expreso (aparece escrito en la oración) vs. Sujeto omitido / tácito (se deduce por la desinencia verbal, ej. "[Nosotros] Fuimos al cine").',
      'El sujeto NUNCA empieza por preposición (salvo excepciones estilísticas raras).'
    ],
    keyRulesHy: [
      'Համաձայնության ստուգում՝ փոխիր բայի թիվը եզակիից հոգնակի։',
      'Արտահայտված ենթակա (գրված է նախադասության մեջ) ընդդեմ զեղչված ենթակայի (երևում է բայի վերջավորությունից, օր.՝ «[Մենք] գնացինք կինո»)։',
      'Ենթական ԵՐԲԵՔ չի սկսվում նախդիրով (օրինակ՝ a, con, de, en...):'
    ],
    bilingualExamples: [
      { es: 'Los profesores de nuestro instituto explican con paciencia.', hy: 'Մեր ինստիտուտի ուսուցիչները բացատրում են համբերատարությամբ։', noteEs: 'Sujeto: Los profesores de nuestro instituto (Plural).', noteHy: 'Ենթակա՝ Los profesores de nuestro instituto (հոգնակի)։' },
      { es: 'Ayer comimos una paella deliciosa en Valencia.', hy: 'Երեկ համեղ պաելյա կերանք Վալենսիայում։', noteEs: 'Sujeto omitido: Nosotros / Nosotras (1.ª pers. plural).', noteHy: 'Զեղչված ենթակա՝ Nosotros / Nosotras (մենք)։' },
      { es: 'A Carlos le gusta la clase de Lengua.', hy: 'Կառլոսին դուր է գալիս իսպաներենի դասը։', noteEs: '¡CUIDADO! El sujeto es "la clase de Lengua" (concuerda con gusta/gustan).', noteHy: 'ՈՒՇԱԴԻՐ. Ենթական «la clase de Lengua»-ն է (gustan las clases), ոչ թե Carlos-ը։' }
    ],
    schoolExamples: [
      {
        situationEs: 'En el laboratorio de Ciencias Naturales',
        situationHy: 'Բնագիտության լաբորատորիայում',
        dialogueEs: '—Profesora: "¿Quién ha preparado las muestras del microscopio?"\n—David y Elena: "Nosotros hemos preparado las muestras".',
        dialogueHy: '—Ուսուցչուհի. «Ո՞վ է պատրաստել մանրադիտակի նմուշները»։\n—Դավիթն ու Ելենան. «Մենք ենք պատրաստել նմուշները»։',
        explanationEs: '"Nosotros" concuerda en 1.ª persona del plural con el verbo "hemos preparado".',
        explanationHy: '«Nosotros»-ը (մենք) 1-ին դեմք հոգնակի թվով համաձայնում է «hemos preparado» բայի հետ։'
      }
    ],
    exercises: [
      {
        id: 'ex-4-1',
        type: 'mcq',
        instructionEs: 'Aplica la prueba de concordancia y localiza el sujeto:',
        instructionHy: 'Կիրառիր համաձայնության կանոնը և գտիր ենթական.',
        sentenceEs: 'El perro de mi vecino ladra todas las noches.',
        sentenceHy: 'Իմ հարևանի շունը հաչում է ամեն գիշեր։',
        options: ['El perro de mi vecino', 'todas las noches', 'mi vecino', 'ladra'],
        optionsHy: ['Իմ հարևանի շունը (El perro de mi vecino)', 'ամեն գիշեր', 'իմ հարևանը', 'հաչում է'],
        correctAnswer: 'El perro de mi vecino',
        explanationEs: 'Si cambiamos a plural: "Los perros de mi vecino ladran". El sujeto es "El perro de mi vecino".',
        explanationHy: 'Եթե դարձնենք հոգնակի՝ «Los perros... ladran», փոխվում է ամբողջ գոյականական խումբը։'
      },
      {
        id: 'ex-4-2',
        type: 'mcq',
        instructionEs: '¿Cuál es el sujeto omitido en: "Estudiamos para el examen de mañana"?',
        instructionHy: 'Ո՞րն է զեղչված ենթական (Sujeto omitido) այս նախադասության մեջ.',
        sentenceEs: 'Estudiamos para el examen de mañana.',
        sentenceHy: 'Սովորում ենք վաղվա քննության համար։',
        options: ['Nosotros / Nosotras', 'Yo', 'Ellos', 'Tú'],
        optionsHy: ['Մենք (Nosotros / Nosotras)', 'Ես (Yo)', 'Նրանք (Ellos)', 'Դու (Tú)'],
        correctAnswer: 'Nosotros / Nosotras',
        explanationEs: 'La desinencia verbal -amos indica 1.ª persona del plural (nosotros/as).',
        explanationHy: 'Բայի -amos վերջավորությունը ցույց է տալիս 1-ին դեմք հոգնակի թիվը (մենք)։'
      },
      {
        id: 'ex-4-3',
        type: 'true_false',
        instructionEs: 'Verdadero o falso:',
        instructionHy: 'Ճի՞շտ է, թե՞ սխալ.',
        sentenceEs: 'En español, el sujeto siempre debe ir obligatoriamente al principio de la oración.',
        sentenceHy: 'Իսպաներենում ենթական միշտ պարտադիր պետք է լինի նախադասության սկզբում։',
        options: ['Falso', 'Verdadero'],
        optionsHy: ['Սխալ է (Falso)', 'Ճիշտ է (Verdadero)'],
        correctAnswer: 'Falso',
        explanationEs: 'El sujeto puede ir al principio, en medio o al final: "Llegó tarde el tren".',
        explanationHy: 'Ենթական կարող է լինել սկզբում, մեջտեղում կամ վերջում (օր.՝ «Llegó tarde el tren»)։'
      },
      {
        id: 'ex-4-4',
        type: 'mcq',
        instructionEs: '¡Atención a los verbos como "gustar"! ¿Cuál es el sujeto aquí?',
        instructionHy: 'Ուշադրությո՛ւն «gustar» բային։ Ո՞րն է ենթական այստեղ.',
        sentenceEs: 'A los estudiantes les gustan los recreos largos.',
        sentenceHy: 'Աշակերտներին դուր են գալիս երկար դասամիջոցները։',
        options: ['los recreos largos', 'A los estudiantes', 'les', 'largos'],
        optionsHy: ['երկար դասամիջոցները (los recreos largos)', 'Աշակերտներին', 'նրանց (les)', 'երկար'],
        correctAnswer: 'los recreos largos',
        explanationEs: 'El sujeto es "los recreos largos" porque concuerda con "gustan" (si fuera singular: "gusta el recreo"). Además, nunca lleva "a".',
        explanationHy: 'Ենթական «los recreos largos»-ն է, քանի որ համաձայնում է gustan բայի հետ և չի սկսվում «a» նախդիրով։'
      },
      {
        id: 'ex-4-5',
        type: 'mcq',
        instructionEs: '¿Cuál es el núcleo del sujeto en: "Los nuevos alumnos del instituto llegaron hoy"?',
        instructionHy: 'Ո՞րն է ենթակայի գլխավոր անդամը (Núcleo del sujeto).',
        sentenceEs: 'Los nuevos alumnos del instituto llegaron hoy.',
        sentenceHy: 'Ինստիտուտի նոր աշակերտները եկան այսօր։',
        options: ['alumnos', 'nuevos', 'instituto', 'llegaron'],
        optionsHy: ['alumnos (աշակերտներ)', 'nuevos (նոր)', 'instituto (դպրոց)', 'llegaron (եկան)'],
        correctAnswer: 'alumnos',
        explanationEs: 'El sustantivo principal del sintagma nominal sujeto es "alumnos".',
        explanationHy: 'Ենթակայի գլխավոր գոյականը «alumnos»-ն է (աշակերտներ)։'
      },
      {
        id: 'ex-4-6',
        type: 'fill_in',
        instructionEs: 'Completa con el sujeto adecuado para mantener la concordancia:',
        instructionHy: 'Լրացրու ճիշտ ենթակայով՝ համաձայնությունը պահպանելու համար.',
        sentenceEs: '______ preparó un pastel delicioso para la fiesta.',
        sentenceHy: '______ համեղ տորթ պատրաստեց երեկույթի համար։',
        options: ['Mi abuela', 'Mis abuelos', 'Nosotros', 'Tus amigos'],
        optionsHy: ['Իմ տատիկը (Mi abuela)', 'Իմ տատիկն ու պապիկը', 'Մենք', 'Քո ընկերները'],
        correctAnswer: 'Mi abuela',
        explanationEs: '"Preparó" está en 3.ª persona singular, concuerda con "Mi abuela".',
        explanationHy: '«Preparó»-ն 3-րդ դեմք եզակի թիվ է, համապատասխանում է «Mi abuela»-ին։'
      },
      {
        id: 'ex-4-7',
        type: 'classify',
        instructionEs: 'Identifica si la oración tiene sujeto expreso o sujeto omitido:',
        instructionHy: 'Որոշիր՝ նախադասությունն ունի՞ արտահայտված, թե՞ զեղչված ենթակա.',
        sentenceEs: '¿Vendrás mañana a mi casa después del entrenamiento?',
        sentenceHy: 'Կգա՞ս վաղը իմ տուն մարզումից հետո։',
        options: ['Sujeto omitido (Tú)', 'Sujeto expreso', 'Oración impersonal sin sujeto', 'Sujeto compuesto'],
        optionsHy: ['Զեղչված ենթակա՝ Tú (դու)', 'Արտահայտված ենթակա', 'Անենթակա նախադասություն', 'Բարդ ենթակա'],
        correctAnswer: 'Sujeto omitido (Tú)',
        explanationEs: 'No aparece la palabra "tú", pero se sobreentiende por la forma verbal "vendrás".',
        explanationHy: '«Tú» բառը գրված չէ, բայց հասկացվում է «vendrás» բայի ձևից։'
      },
      {
        id: 'ex-4-8',
        type: 'true_false',
        instructionEs: '¿Puede un pronombre personal ser el núcleo del sujeto?',
        instructionHy: 'Կարո՞ղ է անձնական դերանունը լինել ենթակայի գլխավոր անդամ.',
        sentenceEs: 'Ella ganó el concurso escolar de relatos.',
        sentenceHy: 'Նա հաղթեց դպրոցական պատմվածքների մրցույթում։',
        options: ['Verdadero', 'Falso'],
        optionsHy: ['Ճիշտ է (Verdadero)', 'Սխալ է'],
        correctAnswer: 'Verdadero',
        explanationEs: 'Los pronombres personales (yo, tú, él, ella, nosotros...) funcionan frecuentemente como núcleo del sujeto.',
        explanationHy: 'Անձնական դերանունները (yo, tú, ella...) հաճախ հանդես են գալիս որպես ենթակայի գլխավոր անդամ։'
      },
      {
        id: 'ex-4-9',
        type: 'mcq',
        instructionEs: '¿Cuál es el sujeto en la oración pasiva: "El libro fue leído por millones de personas"?',
        instructionHy: 'Ո՞րն է ենթական կրավորական նախադասության մեջ.',
        sentenceEs: 'El libro fue leído por millones de personas.',
        sentenceHy: 'Գիրքը կարդացվեց միլիոնավոր մարդկանց կողմից։',
        options: ['El libro (sujeto paciente)', 'millones de personas (complemento agente)', 'fue leído', 'personas'],
        optionsHy: ['Գիրքը (El libro - կրող ենթակա)', 'միլիոնավոր մարդկանց կողմից', 'կարդացվեց', 'մարդիկ'],
        correctAnswer: 'El libro (sujeto paciente)',
        explanationEs: '"El libro" es el sujeto paciente que concuerda con "fue leído" (si plural: "Los libros fueron leídos").',
        explanationHy: '«El libro»-ն կրավորական ենթական է, որը համաձայնում է fue leído բայի հետ։'
      },
      {
        id: 'ex-4-10',
        type: 'mcq',
        instructionEs: '¿Por qué "A María" NO puede ser sujeto en: "A María le duele la cabeza"?',
        instructionHy: 'Ինչո՞ւ «A María»-ն ՉԻ կարող ենթակա լինել այս նախադասության մեջ.',
        sentenceEs: 'A María le duele la cabeza.',
        sentenceHy: 'Մարիայի գլուխը ցավում է։',
        options: [
          'Porque empieza por preposición "A" y no concuerda con el verbo',
          'Porque María es un sustantivo propio',
          'Porque el verbo duele es irregular',
          'Porque la cabeza es femenino'
        ],
        optionsHy: [
          'Որովհետև սկսվում է «A» նախդիրով և չի համաձայնում բայի հետ',
          'Որովհետև María-ն հատուկ գոյական է',
          'Որովհետև duele բայն անկանոն է',
          'Որովհետև գլուխը իգական է'
        ],
        correctAnswer: 'Porque empieza por preposición "A" y no concuerda con el verbo',
        explanationEs: 'En español el sujeto nunca lleva la preposición "a". El sujeto real es "la cabeza" ("duelen las piernas").',
        explanationHy: 'Իսպաներենում ենթական երբեք նախդիրով չի սկսվում։ Իրական ենթական «la cabeza»-ն է։'
      }
    ],
    testQuestions: [
      {
        id: 'tq-4-1',
        questionEs: '¿Cuál es la prueba infalible para reconocer el sujeto de una oración en 1.º ESO?',
        questionHy: 'Ո՞րն է 1.º ESO-ում նախադասության ենթական անսխալ ճանաչելու կանոնը.',
        optionsEs: [
          'Cambiar el número del verbo y ver qué elemento concuerda y cambia',
          'Preguntar siempre "¿quién?" al verbo sin comprobar nada más',
          'Buscar la primera palabra de la oración',
          'Elegir el sustantivo más largo'
        ],
        optionsHy: [
          'Փոխել բայի թիվը (եզակի/հոգնակի) և տեսնել, թե որ անդամն է պարտադիր փոխվում',
          'Առանց ստուգելու միայն «ո՞վ» հարցը տալ բային',
          'Վերցնել նախադասության ամենաառաջին բառը',
          'Ընտրել ամենաերկար գոյականը'
        ],
        correctIndex: 0,
        explanationEs: 'La concordancia gramatical es la única regla científica y segura.',
        explanationHy: 'Թվի և դեմքի համաձայնության փոփոխությունը քերականական միակ անվրեպ կանոնն է։'
      },
      {
        id: 'tq-4-2',
        questionEs: '¿Qué tipo de sujeto hay en: "Ayer llegamos muy cansados del viaje"?',
        questionHy: 'Ինչպիսի՞ ենթակա կա «Ayer llegamos muy cansados del viaje» նախադասության մեջ.',
        optionsEs: [
          'Sujeto omitido o tácito (Nosotros)',
          'Sujeto expreso compuesto',
          'Oración impersonal',
          'Sujeto paciente'
        ],
        optionsHy: [
          'Զեղչված ենթակա՝ Nosotros (մենք)',
          'Արտահայտված բաղադրյալ ենթակա',
          'Անենթակա նախադասություն',
          'Կրող ենթակա'
        ],
        correctIndex: 0,
        explanationEs: 'El pronombre "nosotros" no está escrito, se deduce de la terminación -amos de "llegamos".',
        explanationHy: '«Մենք» դերանունը գրված չէ, բայց պարզ երևում է «llegamos» բայի -amos վերջավորությունից։'
      },
      {
        id: 'tq-4-3',
        questionEs: '¿Cuál es el sujeto en: "Me encantan las películas de aventuras"?',
        questionHy: 'Ո՞րն է ենթական «Me encantan las películas de aventuras» նախադասության մեջ.',
        optionsEs: ['las películas de aventuras', 'Me (a mí)', 'aventuras', 'encantan'],
        optionsHy: ['արկածային ֆիլմերը (las películas de aventuras)', 'ինձ (Me)', 'արկածներ', 'դուր են գալիս'],
        correctIndex: 0,
        explanationEs: 'Concuerda en plural con "encantan" (si fuera una: "me encanta la película").',
        explanationHy: 'Համաձայնում է հոգնակի թվով encantan բայի հետ (եզակիում՝ me encanta la película)։'
      },
      {
        id: 'tq-4-4',
        questionEs: 'En: "Los primos de Laura vendrán en Navidad", ¿cuál es el núcleo del sujeto?',
        questionHy: '«Los primos de Laura vendrán en Navidad» նախադասության մեջ ո՞րն է ենթակայի գլխավոր անդամը.',
        optionsEs: ['primos', 'Laura', 'Navidad', 'Los'],
        optionsHy: ['primos (զարմիկներ)', 'Laura (Լաուրա)', 'Navidad (Սուրբ ծնունդ)', 'Los (հոդ)'],
        correctIndex: 0,
        explanationEs: '"Primos" es el sustantivo que concuerda directamente con "vendrán".',
        explanationHy: '«Primos»-ը գլխավոր գոյականն է, որը համաձայնում է vendrán բայի հետ։'
      },
      {
        id: 'tq-4-5',
        questionEs: '¿Qué elemento forma el predicado cuando el sujeto ya está identificado?',
        questionHy: 'Ի՞նչն է կազմում ստորոգյալը (Predicado), երբ ենթական արդեն առանձնացված է.',
        optionsEs: [
          'El verbo conjugado junto con todos sus complementos',
          'Solo los adjetivos calificativos',
          'Únicamente las preposiciones',
          'Las palabras escritas entre comillas'
        ],
        optionsHy: [
          'Խոնարհված բայը իր բոլոր լրացումների հետ միասին',
          'Միայն որակական ածականները',
          'Միայն նախդիրները',
          'Չակերտներով գրված բառերը'
        ],
        correctIndex: 0,
        explanationEs: 'El predicado expresa todo lo que se dice sobre el sujeto y tiene como núcleo el verbo.',
        explanationHy: 'Ստորոգյալն արտահայտում է այն ամենը, ինչ ասվում է ենթակայի մասին՝ բայի գլխավորությամբ։'
      },
      {
        id: 'tq-4-6',
        questionEs: '¿Puede un grupo de palabras sin verbo tener sujeto y predicado oracionales?',
        questionHy: 'Կարո՞ղ է առանց բայի բառախումբն ունենալ նախադասության ենթակա և ստորոգյալ.',
        optionsEs: ['No, sin verbo es una frase, no una oración', 'Sí, siempre', 'Solo en poesía', 'Solo si lleva signos de exclamación'],
        optionsHy: ['Ոչ, առանց բայի դա բառակապակցություն է (frase), ոչ թե նախադասություն (oración)', 'Այո, միշտ', 'Միայն պոեզիայում', 'Միայն բացականչական նշանով'],
        correctIndex: 0,
        explanationEs: 'Para haber oración y estructura bimembre sujeto-predicado es indispensable un verbo.',
        explanationHy: 'Նախադասություն և ենթակա-ստորոգյալ ունենալու համար բայի առկայությունը պարտադիր է։'
      },
      {
        id: 'tq-4-7',
        questionEs: 'En: "Caminaban silenciosos los peregrinos por el sendero", el sujeto está:',
        questionHy: '«Caminaban silenciosos los peregrinos por el sendero» նախադասության մեջ ենթական գտնվում է.',
        optionsEs: ['En posición pospuesta / intermedia (los peregrinos)', 'Al principio absoluto', 'Omitido', 'No existe sujeto'],
        optionsHy: ['Մեջտեղում / բայից հետո (los peregrinos)', 'Ամենասկզբում', 'Զեղչված է', 'Ենթակա չկա'],
        correctIndex: 0,
        explanationEs: 'El sujeto "los peregrinos" va colocado después del verbo "caminaban".',
        explanationHy: 'Ենթական («los peregrinos») դրված է բայից հետո։'
      },
      {
        id: 'tq-4-8',
        questionEs: '¿Cuál es el sujeto en: "Nos preocupa la contaminación de los ríos"?',
        questionHy: 'Ո՞րն է ենթական «Nos preocupa la contaminación de los ríos» նախադասության մեջ.',
        optionsEs: ['la contaminación de los ríos', 'Nos (nosotros)', 'los ríos', 'preocupa'],
        optionsHy: ['գետերի աղտոտումը (la contaminación de los ríos)', 'մեզ (Nos)', 'գետերը', 'անհանգստացնում է'],
        correctIndex: 0,
        explanationEs: 'Concuerda con "preocupa". Si decimos "las contaminaciones", el verbo pasaría a "preocupan".',
        explanationHy: 'Համաձայնում է preocupa բայի հետ. եթե դարձնենք հոգնակի, կդառնա «preocupan las contaminaciones»:'
      },
      {
        id: 'tq-4-9',
        questionEs: '¿Qué categoría gramatical suele ser el núcleo del sujeto?',
        questionHy: 'Խոսքի ո՞ր մասն է սովորաբար լինում ենթակայի գլխավոր անդամը.',
        optionsEs: ['Un sustantivo o un pronombre', 'Un adverbio de modo', 'Una conjunción coordinada', 'Una preposición simple'],
        optionsHy: ['Գոյական կամ դերանուն', 'Ձևի մակբայ', 'Համադասական շաղկապ', 'Պարզ նախդիր'],
        correctIndex: 0,
        explanationEs: 'El núcleo del sintagma nominal sujeto es siempre un sustantivo o un pronombre.',
        explanationHy: 'Ենթակայի գլխավոր անդամը միշտ լինում է կամ գոյական, կամ դերանուն։'
      },
      {
        id: 'tq-4-10',
        questionEs: 'En: "Vosotros tenéis examen el viernes", ¿cuál es el sujeto?',
        questionHy: '«Vosotros tenéis examen el viernes» նախադասության մեջ ո՞րն է ենթական.',
        optionsEs: ['Vosotros (sujeto expreso pronominal)', 'el viernes', 'examen', 'tenéis'],
        optionsHy: ['Դուք / Vosotros (արտահայտված դերանվանական ենթակա)', 'ուրբաթ օրը', 'քննություն', 'ունեք'],
        correctIndex: 0,
        explanationEs: '"Vosotros" concuerda en 2.ª persona plural con "tenéis".',
        explanationHy: '«Vosotros»-ը 2-րդ դեմք հոգնակի թվով համաձայնում է tenéis բայի հետ։'
      }
    ],
    miniExam: {
      titleEs: 'Mini examen: Identificación del Sujeto',
      titleHy: 'Փոքր քննություն. Ենթակայի որոշում',
      questions: [
        {
          id: 'me-4-1',
          questionEs: 'Identifica el sujeto en: "A mis amigos les entusiasma la robótica".',
          questionHy: 'Գտիր ենթական «A mis amigos les entusiasma la robótica» նախադասության մեջ.',
          optionsEs: ['la robótica', 'A mis amigos', 'les', 'amigos'],
          optionsHy: ['ռոբոտաշինությունը (la robótica)', 'իմ ընկերներին', 'նրանց', 'ընկերներ'],
          correctIndex: 0,
          explanationEs: '"La robótica" es el sujeto. Concuerda con el verbo singular "entusiasma".',
          explanationHy: 'Ենթական «la robótica»-ն է, որը համաձայնում է եզակի entusiasma բայի հետ։'
        },
        {
          id: 'me-4-2',
          questionEs: '¿Qué ocurre con el sujeto en la oración: "Llovió intensamente durante la tarde"?',
          questionHy: 'Ի՞նչ վիճակում է ենթական «Llovió intensamente durante la tarde» նախադասության մեջ.',
          optionsEs: [
            'Es una oración impersonal (verbos meteorológicos no tienen sujeto)',
            'El sujeto es la tarde',
            'El sujeto omitido es él',
            'El sujeto es intensamente'
          ],
          optionsHy: [
            'Սա անենթակա նախադասություն է (բնության երևույթ նշող բայերը ենթակա չունեն)',
            'Ենթական la tarde-ն է',
            'Զեղչված ենթական «él»-ն է',
            'Ենթական intensamente-ն է'
          ],
          correctIndex: 0,
          explanationEs: 'Los verbos de fenómenos climáticos o meteorológicos (llover, nevar) forman oraciones impersonales sin sujeto.',
          explanationHy: 'Եղանակային երևույթներ նշող բայերը (անձրևել, ձյունել) անենթակա են և ենթակա չունեն։'
        }
      ]
    }
  },

  'm6-4': {
    subtopicId: 'm6-4',
    titleEs: 'Palabras agudas',
    titleHy: 'Վերջին վանկի վրա շեշտ ունեցող բառեր (Agudas)',
    moduleTitleEs: 'Módulo 6: Ortografía',
    moduleTitleHy: 'Մոդուլ 6: Ուղղագրություն',
    moduleId: 'm6-ortografia',
    explanationEs: [
      'Las palabras agudas son aquellas cuya sílaba tónica (la que se pronuncia con más fuerza) es la ÚLTIMA sílaba.',
      'REGLA DE ACENTUACIÓN: Las palabras agudas llevan tilde (acento gráfico) cuando terminan en VOCAL (a, e, i, o, u) o en las consonantes N o S.',
      'Ejemplos con tilde: can-ción (termina en N), com-pás (termina en S), ca-fé (termina en vocal).',
      'Ejemplos sin tilde: pa-pel (termina en L), re-loj (termina en J), ver-dad (termina en D).'
    ],
    explanationHy: [
      'Agudas են կոչվում այն բառերը, որոնց շեշտված վանկը (որն արտասանվում է առավել ուժգին) ՎԵՐՋԻՆ ՎԱՆԿՆ Է։',
      'ՇԵՇՏԱԴՐՈՒԹՅԱՆ ԿԱՆՈՆ. Agudas բառերը ստանում են գրավոր շեշտ (Tilde՝ ´), երբ ավարտվում են ՁԱՅՆԱՎՈՐՈՎ (a, e, i, o, u) կամ N կամ S բաղաձայններով։',
      'Շեշտով օրինակներ՝ can-ción (ավարտվում է N-ով), com-pás (ավարտվում է S-ով), ca-fé (ավարտվում է ձայնավորով)։',
      'Առանց գրավոր շեշտի՝ pa-pel (L-ով), re-loj (J-ով), ver-dad (D-ով)։'
    ],
    keyRulesEs: [
      'Última sílaba tónica = palabra aguda.',
      'Lleva tilde solo si termina en -n, -s o vocal.',
      'Excepción: si termina en -s precedida de otra consonante, no lleva tilde (ej: robots).'
    ],
    keyRulesHy: [
      'Վերջին վանկն է շեշտված = Palabras agudas:',
      'Ստանում է գրավոր շեշտ միայն -n, -s կամ ձայնավորով ավարտվելիս։',
      'Բացառություն. եթե -s-ին նախորդում է այլ բաղաձայն, շեշտ չի դրվում (օր.՝ robots)։'
    ],
    bilingualExamples: [
      { es: 'El camión transporta material escolar al instituto.', hy: 'Բեռնատարը դպրոցական պարագաներ է տեղափոխում ինստիտուտ։', noteEs: 'Camión: aguda terminada en -n -> lleva tilde.', noteHy: 'Camión՝ aguda է, ավարտվում է -n-ով, ստանում է գրավոր շեշտ։' },
      { es: 'Ayer jugué al ajedrez con mi compañero en el recreo.', hy: 'Երեկ դասամիջոցին ընկերոջս հետ շախմատ խաղացի։', noteEs: 'Jugué (aguda en vocal -> tilde), ajedrez (aguda en -z -> sin tilde).', noteHy: 'Jugué (ձայնավորով՝ շեշտով), ajedrez (z-ով՝ առանց գրավոր շեշտի)։' },
      { es: 'La ciudad de Madrid es la capital de España.', hy: 'Մադրիդ քաղաքը Իսպանիայի մայրաքաղաքն է։', noteEs: 'Madrid y capital son agudas terminadas en -d y -l -> sin tilde.', noteHy: 'Madrid և capital բառերը aguda են, բայց վերջանում են d և l տառերով, ուստի առանց շեշտի են։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Dictado de ortografía en la clase de 1.º de ESO',
        situationHy: 'Ուղղագրական թելադրություն 1.º de ESO-ի դասարանում',
        dialogueEs: '—Profesor: "Escribid: Martín escuchó la explicación con gran atención".\n—Daniel: "¿Atención lleva tilde en la o?"\n—Profesor: "Sí, Daniel, porque es una palabra aguda acabada en n".',
        dialogueHy: '—Ուսուցիչ. «Գրեք՝ Martín escuchó la explicación con gran atención»։\n—Դանիել. «Atención բառի o-ի վրա շեշտ դրվո՞ւմ է»։\n—Ուսուցիչ. «Այո՛, Դանիել, քանի որ այն aguda բառ է և ավարտվում է n-ով»։',
        explanationEs: 'Martín, escuchó, explicación y atención son todas palabras agudas con tilde.',
        explanationHy: 'Բոլոր այս բառերը agudas են և բավարարում են շեշտադրության կանոնին։'
      }
    ],
    exercises: [
      {
        id: 'ex-6-1',
        type: 'mcq',
        instructionEs: '¿Cuál de las siguientes palabras es aguda y lleva tilde correctamente?',
        instructionHy: 'Սրանցից ո՞րն է aguda բառ և ճիշտ է շեշտադրված.',
        sentenceEs: 'Elige la palabra correcta:',
        sentenceHy: 'Ընտրիր ճիշտ բառը.',
        options: ['melón', 'mélon', 'melon', 'melòn'],
        optionsHy: ['melón (սեխ)', 'mélon', 'melon', 'melòn'],
        correctAnswer: 'melón',
        explanationEs: 'Es aguda (me-LÓN) terminada en -n, por lo que lleva tilde en la o.',
        explanationHy: 'Շեշտը վերջին վանկի վրա է և վերջանում է -n-ով, ուստի o-ի վրա դրվում է շեշտ։'
      },
      {
        id: 'ex-6-2',
        type: 'mcq',
        instructionEs: '¿Por qué la palabra "pared" NO lleva tilde?',
        instructionHy: 'Ինչո՞ւ «pared» (պատ) բառը գրավոր շեշտ ՉԻ ստանում.',
        sentenceEs: 'Pintaron la pared del pasillo del instituto.',
        sentenceHy: 'Ներկեցին ինստիտուտի միջանցքի պատը։',
        options: [
          'Porque es aguda pero termina en -d (no en vocal, -n o -s)',
          'Porque es una palabra esdrújula',
          'Porque es llana terminada en d',
          'Porque es un monosílabo'
        ],
        optionsHy: [
          'Որովհետև aguda է, բայց ավարտվում է -d-ով (ոչ թե ձայնավորով, -n կամ -s-ով)',
          'Որովհետև esdrújula բառ է',
          'Որովհետև d-ով վերջացող llana է',
          'Որովհետև միավանկ է'
        ],
        correctAnswer: 'Porque es aguda pero termina en -d (no en vocal, -n o -s)',
        explanationEs: 'La sílaba tónica es "red", pero al terminar en "d" la norma dice que no debe tildarse.',
        explanationHy: 'Շեշտված է «red» վանկը, բայց քանի որ d-ով է ավարտվում, կանոնի համաձայն շեշտ չի ստանում։'
      },
      {
        id: 'ex-6-3',
        type: 'true_false',
        instructionEs: 'Verdadero o falso:',
        instructionHy: 'Ճի՞շտ է, թե՞ սխալ.',
        sentenceEs: 'La palabra "compás" lleva tilde porque es aguda terminada en s.',
        sentenceHy: '«Compás» բառը շեշտվում է, քանի որ aguda է և ավարտվում է s-ով։',
        options: ['Verdadero', 'Falso'],
        optionsHy: ['Ճիշտ է', 'Սխալ է'],
        correctAnswer: 'Verdadero',
        explanationEs: 'Com-PÁS tiene la fuerza en la última sílaba y acaba en consonante s.',
        explanationHy: 'Շեշտը վերջին վանկի վրա է և ավարտվում է s բաղաձայնով։'
      },
      {
        id: 'ex-6-4',
        type: 'classify',
        instructionEs: 'Identifica si "reloj" es aguda o llana:',
        instructionHy: 'Որոշիր՝ «reloj» (ժամացույց) բառը aguda է, թե՞ llana.',
        sentenceEs: 'Miro el reloj de la clase para saber la hora.',
        sentenceHy: 'Նայում եմ դասարանի ժամացույցին՝ ժամը իմանալու համար։',
        options: ['Palabra aguda (sin tilde)', 'Palabra llana', 'Palabra esdrújula', 'Sobresdrújula'],
        optionsHy: ['Palabra aguda (առանց շեշտի)', 'Palabra llana', 'Palabra esdrújula', 'Sobresdrújula'],
        correctAnswer: 'Palabra aguda (sin tilde)',
        explanationEs: 'Pronunciamos re-LOJ. La última sílaba es la más fuerte, termina en j -> sin tilde.',
        explanationHy: 'Արտասանվում է re-LOJ. վերջին վանկն է շեշտված, վերջանում է j-ով, ուստի առանց գրավոր շեշտի է։'
      },
      {
        id: 'ex-6-5',
        type: 'mcq',
        instructionEs: '¿Cuál de estas formas verbales es aguda con tilde?',
        instructionHy: 'Այս բայաձևերից ո՞րն է շեշտված aguda.',
        sentenceEs: 'El alumno ______ la respuesta en la pizarra.',
        sentenceHy: 'Աշակերտը պատասխանը գրատախտակին ______:',
        options: ['escribió', 'escribe', 'escribía', 'escriba'],
        optionsHy: ['escribió (գրեց)', 'escribe (գրում է)', 'escribía (գրում էր)', 'escriba'],
        correctAnswer: 'escribió',
        explanationEs: '"Escribió" es aguda terminada en vocal (o), por tanto lleva tilde.',
        explanationHy: '«Escribió»-ն aguda է, վերջանում է ձայնավորով (ó), ուստի ստանում է գրավոր շեշտ։'
      },
      {
        id: 'ex-6-6',
        type: 'fill_in',
        instructionEs: 'Escribe la palabra aguda que nombra al instrumento musical:',
        instructionHy: 'Գրիր երաժշտական գործիքի անունը հանդիսացող aguda բառը.',
        sentenceEs: 'Toca la ______ española en la fiesta del colegio.',
        sentenceHy: 'Իսպանական ______ է նվագում դպրոցի տոնին։',
        options: ['guitarra', 'laúd', 'batería', 'flauta'],
        optionsHy: ['guitarra', 'laúd', 'batería', 'flauta'],
        correctAnswer: 'laúd',
        explanationEs: '"Laúd" lleva tilde por hiato y es aguda terminada en d con fuerza en la ú.',
        explanationHy: 'Laúd բառում առկա է ձայնավորների տարանջատում (hiato) և շեշտ ú-ի վրա։'
      },
      {
        id: 'ex-6-7',
        type: 'mcq',
        instructionEs: '¿Qué palabra aguda está MAL escrita sin tilde?',
        instructionHy: 'Ո՞ր aguda բառն է ՍԽԱԼ գրված՝ առանց անհրաժեշտ շեշտի.',
        sentenceEs: 'Busca el error ortográfico:',
        sentenceHy: 'Գտիր ուղղագրական սխալը.',
        options: ['sofa (debe ser sofá)', 'papel', 'pared', 'azul'],
        optionsHy: ['sofa (պետք է լինի sofá)', 'papel (թուղթ)', 'pared (պատ)', 'azul (կապույտ)'],
        correctAnswer: 'sofa (debe ser sofá)',
        explanationEs: '"Sofá" es aguda y termina en vocal a, por lo que OBLIGATORIAMENTE lleva tilde.',
        explanationHy: '«Sofá»-ն aguda է և ավարտվում է ձայնավոր a-ով, ուստի ՊԱՐՏԱԴԻՐ պետք է ունենա շեշտ։'
      },
      {
        id: 'ex-6-8',
        type: 'true_false',
        instructionEs: '¿"Madrid" lleva tilde en la i?',
        instructionHy: '«Madrid» բառի i-ի վրա շեշտ դրվո՞ւմ է.',
        sentenceEs: 'Madrid es la capital de España.',
        sentenceHy: 'Մադրիդը Իսպանիայի մայրաքաղաքն է։',
        options: ['Falso (no lleva tilde)', 'Verdadero'],
        optionsHy: ['Սխալ է (շեշտ չի դրվում)', 'Ճիշտ է'],
        correctAnswer: 'Falso (no lleva tilde)',
        explanationEs: 'Madrid es aguda terminada en -d, por lo que nunca lleva tilde.',
        explanationHy: 'Madrid-ը ավարտվում է d տառով, ուստի գրավոր շեշտ երբեք չի ստանում։'
      },
      {
        id: 'ex-6-9',
        type: 'mcq',
        instructionEs: '¿Cuál de estas palabras es aguda?',
        instructionHy: 'Այս բառերից ո՞րն է aguda.',
        sentenceEs: 'Señala la palabra con sílaba tónica al final:',
        sentenceHy: 'Նշիր այն բառը, որի շեշտը վերջում է.',
        options: ['pastel', 'mesa', 'árbol', 'médico'],
        optionsHy: ['pastel (տորթ՝ pas-TEL)', 'mesa (սեղան՝ ME-sa)', 'árbol (ծառ՝ ÁR-bol)', 'médico (բժիշկ՝ MÉ-di-co)'],
        correctAnswer: 'pastel',
        explanationEs: 'Pas-TEL tiene el golpe de voz en la última sílaba. Termina en -l, sin tilde.',
        explanationHy: 'Pas-TEL բառի շեշտը վերջին վանկի վրա է (aguda)։'
      },
      {
        id: 'ex-6-10',
        type: 'mcq',
        instructionEs: '¿Cuál es la sílaba tónica de la palabra "autobús"?',
        instructionHy: 'Ո՞րն է «autobús» բառի շեշտված վանկը (sílaba tónica).',
        sentenceEs: 'Cogemos el autobús escolar cada mañana.',
        sentenceHy: 'Ամեն առավոտ նստում ենք դպրոցական ավտոբուսը։',
        options: ['bús', 'to', 'au', 'ninguna'],
        optionsHy: ['bús', 'to', 'au', 'ոչ մեկը'],
        correctAnswer: 'bús',
        explanationEs: 'La tilde señala la sílaba tónica: au-to-BÚS (última sílaba).',
        explanationHy: 'Գրավոր շեշտը ցույց է տալիս շեշտված վանկը՝ au-to-BÚS (վերջին վանկ)։'
      }
    ],
    testQuestions: [
      {
        id: 'tq-6-1',
        questionEs: '¿Cuándo llevan tilde las palabras agudas según las normas de la RAE?',
        questionHy: 'Ե՞րբ են agudas բառերը գրավոր շեշտ ստանում իսպաներենի կանոններով.',
        optionsEs: [
          'Cuando terminan en vocal, en -n o en -s',
          'Cuando terminan en cualquier consonante menos n o s',
          'Siempre llevan tilde sin excepción',
          'Solo cuando son nombres propios'
        ],
        optionsHy: [
          'Երբ ավարտվում են ձայնավորով կամ -n կամ -s բաղաձայններով',
          'Երբ ավարտվում են ցանկացած այլ բաղաձայնով, բացի n կամ s-ից',
          'Միշտ և առանց բացառության',
          'Միայն եթե հատուկ անուններ են'
        ],
        correctIndex: 0,
        explanationEs: 'Es la regla fundamental de acentuación de palabras agudas en español.',
        explanationHy: 'Սա իսպաներենում agudas բառերի շեշտադրության հիմնարար կանոնն է։'
      },
      {
        id: 'tq-6-2',
        questionEs: '¿Cuál de las siguientes palabras agudas debe escribirse CON tilde?',
        questionHy: 'Սրանցից ո՞ր aguda բառը պետք է գրվի ՇԵՇՏՈՎ.',
        optionsEs: ['cancion', 'pared', 'amor', 'papel'],
        optionsHy: ['canción (երգ)', 'pared (պատ)', 'amor (սեր)', 'papel (թուղթ)'],
        correctIndex: 0,
        explanationEs: 'Termina en -n: debe escribirse "canción".',
        explanationHy: 'Ավարտվում է -n-ով, ուստի պետք է գրվի canción՝ շեշտով։'
      },
      {
        id: 'tq-6-3',
        questionEs: '¿Por qué "robot" no lleva tilde a pesar de ser aguda?',
        questionHy: 'Ինչո՞ւ «robot» բառը շեշտ չի ստանում, թեև aguda է.',
        optionsEs: [
          'Porque termina en -t (consonante distinta de n o s)',
          'Porque es una palabra extranjera',
          'Porque tiene dos sílabas',
          'Porque es llana'
        ],
        optionsHy: [
          'Որովհետև ավարտվում է -t-ով (ոչ n կամ s)',
          'Որովհետև օտար բառ է',
          'Որովհետև երկվանկ է',
          'Որովհետև llana է'
        ],
        correctIndex: 0,
        explanationEs: 'Las agudas terminadas en consonantes distintas de n o s no llevan tilde.',
        explanationHy: 'Agudas բառերը n-ից և s-ից բացի այլ բաղաձայնով ավարտվելիս շեշտ չեն ստանում։'
      },
      {
        id: 'tq-6-4',
        questionEs: '¿Cuál es la separación silábica correcta de "compás"?',
        questionHy: 'Ո՞րն է «compás» բառի վանկատման ճիշտ ձևը.',
        optionsEs: ['com-pás', 'c-om-pás', 'co-mpás', 'comp-ás'],
        optionsHy: ['com-pás', 'c-om-pás', 'co-mpás', 'comp-ás'],
        correctIndex: 0,
        explanationEs: 'La división silábica es com-pás (bisílaba, aguda).',
        explanationHy: 'Բառը բաղկացած է երկու վանկից՝ com-pás:'
      },
      {
        id: 'tq-6-5',
        questionEs: '¿Qué palabra aguda tiene rima consonante con "corazón"?',
        questionHy: 'Ո՞ր aguda բառն ունի լիարժեք հանգ (rima consonante) «corazón» բառի հետ.',
        optionsEs: ['canción', 'árbol', 'amigo', 'cielo'],
        optionsHy: ['canción (-ón)', 'árbol', 'amigo', 'cielo'],
        correctIndex: 0,
        explanationEs: 'Ambas son agudas y comparten idénticos sonidos desde la vocal tónica: -ón.',
        explanationHy: 'Երկուսն էլ aguda են և շեշտված ձայնավորից սկսած ունեն նույն ավարտը՝ -ón:'
      },
      {
        id: 'tq-6-6',
        questionEs: '¿Lleva tilde "Andrés"?',
        questionHy: 'Արդյո՞ք «Andrés» անունը շեշտ ունի.',
        optionsEs: ['Sí, porque es aguda terminada en s', 'No, nunca', 'Solo en minúscula', 'Solo en plural'],
        optionsHy: ['Այո, քանի որ aguda է և ավարտվում է s-ով', 'Ոչ, երբեք', 'Միայն փոքրատառով', 'Միայն հոգնակիում'],
        correctIndex: 0,
        explanationEs: 'An-DRÉS tiene la fuerza en la última sílaba y termina en -s.',
        explanationHy: 'Շեշտը վերջին վանկում է և վերջանում է s-ով։'
      },
      {
        id: 'tq-6-7',
        questionEs: '¿Cuál de estos infinitivos es una palabra aguda?',
        questionHy: 'Այս անորոշ դերբայներից (infinitivos) ո՞րն է aguda.',
        optionsEs: ['cantar', 'todas las formas de infinitivo (-ar, -er, -ir) son agudas', 'comer', 'vivir'],
        optionsHy: ['cantar', 'բոլոր իսպաներեն ինֆինիտիվները (-ar, -er, -ir) aguda են', 'comer', 'vivir'],
        correctIndex: 1,
        explanationEs: 'Todos los infinitivos en español son palabras agudas terminadas en -r (sin tilde).',
        explanationHy: 'Իսպաներենի բոլոր ինֆինիտիվները aguda են՝ ավարտվում են -r-ով և առանց շեշտի են։'
      },
      {
        id: 'tq-6-8',
        questionEs: '¿Cuál de las siguientes palabras termina en consonante pero SÍ lleva tilde?',
        questionHy: 'Սրանցից ո՞ր բառն է ավարտվում բաղաձայնով, բայց ՈՒՆԻ գրավոր շեշտ.',
        optionsEs: ['alemán', 'madrid', 'reloj', 'pared'],
        optionsHy: ['alemán (գերմաներեն/գերմանացի)', 'madrid', 'reloj', 'pared'],
        correctIndex: 0,
        explanationEs: '"Alemán" termina en -n, por lo que cumple la regla y lleva tilde.',
        explanationHy: '«Alemán»-ը վերջանում է -n-ով, ուստի ստանում է գրավոր շեշտ։'
      },
      {
        id: 'tq-6-9',
        questionEs: '¿Qué palabra aguda se refiere a un ave y lleva tilde?',
        questionHy: 'Ո՞ր aguda բառն է նշանակում թռչուն և ստանում շեշտ.',
        optionsEs: ['colibrí', 'pájaro', 'águila', 'gaviota'],
        optionsHy: ['colibrí (կոլիբրի)', 'pájaro (esdrújula)', 'águila (esdrújula)', 'gaviota (llana)'],
        correctIndex: 0,
        explanationEs: 'Co-li-BRÍ es aguda y termina en vocal -í.',
        explanationHy: 'Colibrí-ն aguda է և ավարտվում է ձայնավոր í-ով։'
      },
      {
        id: 'tq-6-10',
        questionEs: 'En: "El jaguar corrió veloz por la selva", ¿cuántas palabras agudas hay?',
        questionHy: '«El jaguar corrió veloz por la selva» նախադասության մեջ քանի՞ aguda բառ կա.',
        optionsEs: [
          'Tres (jaguar, corrió, veloz)',
          'Una sola',
          'Dos',
          'Cuatro'
        ],
        optionsHy: [
          'Երեք հատ (jaguar, corrió, veloz)',
          'Միայն մեկը',
          'Երկուսը',
          'Չորսը'
        ],
        correctIndex: 0,
        explanationEs: 'ja-GUAR (en -r), co-rrió (en -ó con tilde) y ve-LOZ (en -z) son las 3 agudas.',
        explanationHy: 'ja-GUAR, co-rrió և ve-LOZ բառերի շեշտը վերջին վանկի վրա է (3 հատ)։'
      }
    ],
    miniExam: {
      titleEs: 'Mini examen: Acentuación de palabras agudas',
      titleHy: 'Փոքր քննություն. Agudas բառերի շեշտադրություն',
      questions: [
        {
          id: 'me-6-1',
          questionEs: '¿Cuál de las siguientes series contiene ÚNICAMENTE palabras agudas con tilde?',
          questionHy: 'Ո՞ր շարքն է պարունակում ՄԻԱՅՆ շեշտով agudas բառեր.',
          optionsEs: [
            'sofá, compás, ratón, café',
            'árbol, mesa, silla, pared',
            'música, médico, rápido, lámpara',
            'papel, reloj, cartel, Madrid'
          ],
          optionsHy: [
            'sofá, compás, ratón, café',
            'árbol, mesa, silla, pared',
            'música, médico, rápido, lámpara',
            'papel, reloj, cartel, Madrid'
          ],
          correctIndex: 0,
          explanationEs: 'Todas son agudas y terminan en vocal, -n o -s, por lo que llevan tilde.',
          explanationHy: 'Բոլորն էլ aguda են և վերջանում են ձայնավորով կամ -n, -s-ով։'
        },
        {
          id: 'me-6-2',
          questionEs: '¿Por qué la palabra "feliz" NO lleva tilde?',
          questionHy: 'Ինչո՞ւ «feliz» (երջանիկ) բառը շեշտ ՉԻ ստանում.',
          optionsEs: [
            'Porque es aguda terminada en z',
            'Porque es una palabra llana',
            'Porque no tiene vocal tónica',
            'Porque es un adjetivo'
          ],
          optionsHy: [
            'Որովհետև z-ով ավարտվող aguda բառ է',
            'Որովհետև llana է',
            'Որովհետև շեշտված ձայնավոր չունի',
            'Որովհետև ածական է'
          ],
          correctIndex: 0,
          explanationEs: 'La sílaba tónica es "liz", pero al acabar en z no cumple la regla de tilde para agudas.',
          explanationHy: 'Շեշտը «liz» վանկի վրա է, բայց z-ով ավարտվելու պատճառով գրավոր շեշտ չի դրվում։'
        }
      ]
    }
  }
};

/**
 * Universal generator for all 11 modules and any subtopic ID in the 1.º ESO syllabus.
 * Guarantees every single topic has a rich, complete lesson, 10 exercises and 10 multiple choice test questions.
 */
export function getLessonContent(subtopicId: string): LessonContent {
  if (CURATED_LESSONS[subtopicId]) {
    return randomizeLessonOptions(CURATED_LESSONS[subtopicId]);
  }

  // Find module and subtopic
  let foundModule = MODULES[0];
  let foundSubtopic = MODULES[0].subtopics[0];

  for (const m of MODULES) {
    const s = m.subtopics.find(sub => sub.id === subtopicId);
    if (s) {
      foundModule = m;
      foundSubtopic = s;
      break;
    }
  }

  const topicEs = foundSubtopic.titleEs;
  const topicHy = foundSubtopic.titleHy;
  const modEs = foundModule.titleEs;
  const modHy = foundModule.titleHy;

  // Build a bespoke 10-exercise, 10-test question lesson tailored to this specific 1.º ESO topic
  const exercises: ExerciseItem[] = [
    {
      id: `gen-ex-${subtopicId}-1`,
      type: 'mcq',
      instructionEs: `Identifica la definición correcta de "${topicEs}" en 1.º de ESO:`,
      instructionHy: `Գտիր «${topicHy}»-ի ճիշտ սահմանումը 1.º de ESO-ում.`,
      sentenceEs: `Estudiamos el concepto de ${topicEs} en el instituto.`,
      sentenceHy: `Մենք ուսումնասիրում ենք «${topicHy}» հասկացությունը ինստիտուտում։`,
      options: [
        `Es un elemento clave de ${modEs} para entender y dominar la lengua española.`,
        `Es una regla exclusiva de las matemáticas avanzadas.`,
        `Es un tipo de dibujo artístico sin relación con las palabras.`,
        `Es un deporte que se juega en el patio durante el recreo.`
      ],
      optionsHy: [
        `«${modHy}»-ի առանցքային հասկացություն է իսպաներենը հասկանալու և տիրապետելու համար։`,
        `Բարձրագույն մաթեմատիկայի կանոն է։`,
        `Նկարչական ձև է՝ առանց բառերի հետ կապի։`,
        `Սպորտաձև է դասամիջոցի համար։`
      ],
      correctAnswer: `Es un elemento clave de ${modEs} para entender y dominar la lengua española.`,
      explanationEs: `En 1.º de ESO, "${topicEs}" forma parte esencial del currículo de ${modEs}.`,
      explanationHy: `1.º de ESO-ում «${topicHy}»-ը «${modHy}» բաժնի հիմնարար թեմաներից է։`
    },
    {
      id: `gen-ex-${subtopicId}-2`,
      type: 'true_false',
      instructionEs: 'Indica si la siguiente afirmación escolar es verdadera o falsa:',
      instructionHy: 'Նշիր՝ պնդումը ճի՞շտ է, թե՞ սխալ.',
      sentenceEs: `Comprender bien "${topicEs}" ayuda a sacar mejores notas en los exámenes de Lengua Castellana.`,
      sentenceHy: `«${topicHy}»-ը լավ հասկանալը օգնում է ավելի բարձր գնահատականներ ստանալ իսպաներենի քննություններին։`,
      options: ['Verdadero', 'Falso'],
      optionsHy: ['Ճիշտ է', 'Սխալ է'],
      correctAnswer: 'Verdadero',
      explanationEs: 'Los profesores de Lengua en España evalúan este contenido en las pruebas trimestrales.',
      explanationHy: 'Իսպանիայի դպրոցներում ուսուցիչները հենց այս գիտելիքներն են ստուգում քննությունների ժամանակ։'
    },
    {
      id: `gen-ex-${subtopicId}-3`,
      type: 'classify',
      instructionEs: `Clasifica el siguiente ejemplo relacionado con "${topicEs}":`,
      instructionHy: `Դասակարգիր հետևյալ օրինակը՝ կապված «${topicHy}»-ի հետ.`,
      sentenceEs: `El profesor escribe un ejemplo en la pizarra digital de clase sobre ${topicEs}.`,
      sentenceHy: `Ուսուցիչը դասարանի թվային գրատախտակին օրինակ է գրում «${topicHy}»-ի վերաբերյալ։`,
      options: [
        'Uso práctico y escolar de la lengua',
        'Uso incorrecto que debe evitarse',
        'Frase en latín antiguo',
        'Error de puntuación'
      ],
      optionsHy: [
        'Լեզվի գործնական դպրոցական կիրառություն',
        'Սխալ կիրառություն, որից պետք է խուսափել',
        'Հին լատիներեն նախադասություն',
        'Կետադրական սխալ'
      ],
      correctAnswer: 'Uso práctico y escolar de la lengua',
      explanationEs: 'Refleja la práctica habitual en el aula de 1.º de ESO.',
      explanationHy: 'Արտացոլում է 1.º de ESO դասարանում կատարվող սովորական ուսումնական աշխատանքը։'
    },
    {
      id: `gen-ex-${subtopicId}-4`,
      type: 'mcq',
      instructionEs: '¿En cuál de estos contextos escolares aplicamos este conocimiento?',
      instructionHy: 'Դպրոցական ո՞ր իրավիճակում ենք կիրառում այս գիտելիքը.',
      sentenceEs: `Trabajo diario en el IES sobre: ${topicEs}.`,
      sentenceHy: `Ամենօրյա աշխատանք դպրոցում «${topicHy}» թեմայով։`,
      options: [
        'Al redactar una tarea o responder las preguntas del libro',
        'Únicamente al jugar al fútbol en el recreo',
        'Solo durante las vacaciones de verano',
        'En ninguna situación real'
      ],
      optionsHy: [
        'Տնային առաջադրանք գրելիս կամ դասագրքի հարցերին պատասխանելիս',
        'Միայն դասամիջոցին ֆուտբոլ խաղալիս',
        'Միայն ամառային արձակուրդներին',
        'Ոչ մի իրական իրավիճակում'
      ],
      correctAnswer: 'Al redactar una tarea o responder las preguntas del libro',
      explanationEs: 'Sirve para expresarse con corrección y comprender los textos escolares.',
      explanationHy: 'Օգնում է ճիշտ արտահայտվել և հասկանալ դպրոցական տեքստերը։'
    },
    {
      id: `gen-ex-${subtopicId}-5`,
      type: 'fill_in',
      instructionEs: 'Completa la frase con el término adecuado:',
      instructionHy: 'Լրացրու նախադասությունը ճիշտ տերմինով.',
      sentenceEs: `Para dominar este contenido, analizamos la estructura de ${topicEs} en el ______.`,
      sentenceHy: `Այս նյութը յուրացնելու համար մենք վերլուծում ենք «${topicHy}»-ի կառուցվածքը ______-ում։`,
      options: ['instituto', 'patio', 'parque', 'cine'],
      optionsHy: ['միջնակարգ դպրոցում (instituto)', 'բակում', 'զբոսայգում', 'կինոթատրոնում'],
      correctAnswer: 'instituto',
      explanationEs: 'En España, la Educación Secundaria Obligatoria (ESO) se cursa en un instituto (IES).',
      explanationHy: 'Իսպանիայում միջնակարգ դպրոցը (ESO) անվանում են instituto (IES)։'
    },
    {
      id: `gen-ex-${subtopicId}-6`,
      type: 'true_false',
      instructionEs: 'Verdadero o falso:',
      instructionHy: 'Ճի՞շտ է, թե՞ սխալ.',
      sentenceEs: `En las evaluaciones oficiales de 1.º de ESO nunca se incluye ninguna pregunta sobre "${topicEs}".`,
      sentenceHy: `1.º de ESO-ի պաշտոնական գնահատումներում երբեք ոչ մի հարց չի ընդգրկվում «${topicHy}» թեմայից։`,
      options: ['Verdadero', 'Falso'],
      optionsHy: ['Ճիշտ է', 'Սխալ է'],
      correctAnswer: 'Falso',
      explanationEs: '¡Falso! Este tema es evaluable y forma parte de los criterios curriculares oficiales de 1.º ESO.',
      explanationHy: 'Սխա՛լ է։ Այս թեման պարտադիր գնահատվում է և 1.º ESO-ի պաշտոնական ծրագրի մաս է կազմում։'
    },
    {
      id: `gen-ex-${subtopicId}-7`,
      type: 'mcq',
      instructionEs: '¿Qué recomendación da el profesor para repasar este tema?',
      instructionHy: 'Ի՞նչ խորհուրդ է տալիս ուսուցիչը այս թեման կրկնելիս.',
      sentenceEs: `Consejo pedagógico para ${topicEs}.`,
      sentenceHy: `Մանկավարժական խորհուրդ «${topicHy}» թեմայի համար։`,
      options: [
        'Leer despacio, fijarse en los ejemplos y hacer los ejercicios interactivos',
        'Memorizar palabras al azar sin entender el significado',
        'Cerrar el cuaderno y no preguntar dudas',
        'Copiar de un compañero sin pensar'
      ],
      optionsHy: [
        'Ուշադիր կարդալ, նայել օրինակներին և կատարել ինտերակտիվ վարժությունները',
        'Անգիր անել պատահական բառեր՝ առանց իմաստը հասկանալու',
        'Փակել տետրը և հարցեր չտալ',
        'Առանց մտածելու արտագրել դասընկերոջից'
      ],
      correctAnswer: 'Leer despacio, fijarse en los ejemplos y hacer los ejercicios interactivos',
      explanationEs: 'La práctica activa con retroalimentación inmediata es el mejor método de aprendizaje.',
      explanationHy: 'Անմիջական ստուգմամբ ակտիվ վարժանքը լավագույն ուսուցողական մեթոդն է։'
    },
    {
      id: `gen-ex-${subtopicId}-8`,
      type: 'classify',
      instructionEs: 'Determina si la siguiente oración es un ejemplo claro de este contenido:',
      instructionHy: 'Որոշիր՝ հետևյալ նախադասությունը այս թեմայի վառ օրինա՞կ է.',
      sentenceEs: `Los alumnos de 1.º de ESO estudian ${topicEs} para comunicarse mejor.`,
      sentenceHy: `1.º de ESO-ի աշակերտները ուսումնասիրում են «${topicHy}»-ը ավելի լավ հաղորդակցվելու համար։`,
      options: ['Ejemplo adecuado y correcto', 'Ejemplo confuso o incorrecto'],
      optionsHy: ['Համապատասխան և ճիշտ օրինակ', 'Շփոթեցնող կամ սխալ օրինակ'],
      correctAnswer: 'Ejemplo adecuado y correcto',
      explanationEs: 'Muestra el propósito comunicativo fundamental de la asignatura.',
      explanationHy: 'Ցույց է տալիս առարկայի գլխավոր հաղորդակցական նպատակը։'
    },
    {
      id: `gen-ex-${subtopicId}-9`,
      type: 'mcq',
      instructionEs: '¿Qué ayuda al alumno armenohablante a asimilar mejor este concepto?',
      instructionHy: 'Ի՞նչն է օգնում հայախոս աշակերտին ավելի լավ յուրացնել այս հասկացությունը.',
      sentenceEs: `Apoyo bilingüe en: ${topicEs}.`,
      sentenceHy: `Երկլեզու աջակցություն «${topicHy}» թեմայում։`,
      options: [
        'Comparar la explicación en español con su traducción al armenio y escuchar el audio',
        'Ignorar por completo el idioma español',
        'No leer nunca las explicaciones',
        'Estudiar solo con imágenes sin texto'
      ],
      optionsHy: [
        'Համեմատել իսպաներեն բացատրությունը հայերեն թարգմանության հետ և լսել արտասանությունը',
        'Ընդհանրապես ուշադրություն չդարձնել իսպաներենին',
        'Երբեք չկարդալ բացատրությունները',
        'Սովորել միայն նկարներով՝ առանց տեքստի'
      ],
      correctAnswer: 'Comparar la explicación en español con su traducción al armenio y escuchar el audio',
      explanationEs: 'El apoyo bilingüe aclara las dudas respetando el español como lengua vehicular.',
      explanationHy: 'Երկլեզու մոտեցումը պարզաբանում է կանոնները՝ հիմնվելով իսպաներենի վրա։'
    },
    {
      id: `gen-ex-${subtopicId}-10`,
      type: 'mcq',
      instructionEs: '¿Cuál es el objetivo final de dominar este tema?',
      instructionHy: 'Ո՞րն է այս թեման յուրացնելու վերջնական նպատակը.',
      sentenceEs: `Meta de aprendizaje para 1.º de ESO: ${topicEs}.`,
      sentenceHy: `Ուսումնական նպատակ 1.º de ESO-ի համար՝ «${topicHy}»։`,
      options: [
        'Comprender, expresarse con fluidez y aprobar los exámenes escolares en España',
        'Completar horas sin aprender nada nuevo',
        'Aprender a programar videojuegos exclusivamente',
        'Memorizar un solo ejemplo'
      ],
      optionsHy: [
        'Հասկանալ, ազատ արտահայտվել և հաջող հանձնել Իսպանիայի դպրոցական քննությունները',
        'Ուղղակի ժամանակ անցկացնել',
        'Միայն տեսախաղեր ծրագրավորել',
        'Միայն մեկ օրինակ անգիր անել'
      ],
      correctAnswer: 'Comprender, expresarse con fluidez y aprobar los exámenes escolares en España',
      explanationEs: 'Garantiza el éxito escolar y la integración en el instituto.',
      explanationHy: 'Ապահովում է հաջողություն դպրոցում և ինտեգրում իսպանական կրթական միջավայրում։'
    }
  ];

  // Build 10 distinct test questions with 4 choices
  const testQuestions: TestQuestion[] = [
    {
      id: `tq-${subtopicId}-1`,
      questionEs: `¿A qué módulo pertenece el tema "${topicEs}" en Lengua Castellana de 1.º ESO?`,
      questionHy: `Ո՞ր մոդուլին է պատկանում «${topicHy}» թեման 1.º ESO-ի ծրագրում.`,
      optionsEs: [
        `${modEs}`,
        'Matemáticas y Geometría',
        'Educación Física y Deportes',
        'Geografía Mundial'
      ],
      optionsHy: [
        `${modHy}`,
        'Մաթեմատիկա և երկրաչափություն',
        'Ֆիզկուլտուրա և սպորտ',
        'Աշխարհի աշխարհագրություն'
      ],
      correctIndex: 0,
      explanationEs: `Pertenece al módulo "${modEs}".`,
      explanationHy: `Պատկանում է «${modHy}» մոդուլին։`
    },
    {
      id: `tq-${subtopicId}-2`,
      questionEs: `En una clase de 1.º de ESO en España, ¿cómo se trabaja habitualmente "${topicEs}"?`,
      questionHy: `Իսպանիայի 1.º de ESO դասարանում ինչպե՞ս են սովորաբար աշխատում «${topicHy}» թեմայի շուրջ.`,
      optionsEs: [
        'Con explicaciones del profesor, lecturas y ejercicios prácticos en el cuaderno',
        'Sin hablar ni escribir en todo el curso',
        'Únicamente viendo películas sin hacer preguntas',
        'Solo durante el recreo en el patio'
      ],
      optionsHy: [
        'Ուսուցչի բացատրություններով, ընթերցանությամբ և գործնական վարժություններով',
        'Առանց խոսելու կամ գրելու',
        'Միայն ֆիլմեր դիտելով՝ առանց հարցերի',
        'Միայն բակում դասամիջոցին'
      ],
      correctIndex: 0,
      explanationEs: 'Combina la teoría explicada por el profesor con actividades prácticas.',
      explanationHy: 'Միավորում է ուսուցչի բացատրած տեսությունը գործնական առաջադրանքների հետ։'
    },
    {
      id: `tq-${subtopicId}-3`,
      questionEs: `¿Por qué es importante para un alumno armenio dominar "${topicEs}" en España?`,
      questionHy: `Ինչո՞ւ է հայ աշակերտի համար կարևոր յուրացնել «${topicHy}»-ը Իսպանիայում.`,
      optionsEs: [
        'Porque le ayuda a comunicarse con soltura con profesores y compañeros y aprobar la asignatura',
        'Porque no tiene ninguna utilidad real',
        'Solo para rellenar fichas de papel',
        'Porque es obligatorio en otro país'
      ],
      optionsHy: [
        'Քանի որ օգնում է ազատ շփվել ուսուցիչների և ընկերների հետ ու հանձնել քննությունները',
        'Որովհետև իրականում պետք չէ',
        'Միայն թղթեր լրացնելու համար',
        'Որովհետև պարտադիր է այլ երկրում'
      ],
      correctIndex: 0,
      explanationEs: 'Permite comprender el lenguaje escolar y tener éxito académico.',
      explanationHy: 'Թույլ է տալիս հասկանալ դպրոցական լեզուն և հասնել ուսումնական հաջողությունների։'
    },
    {
      id: `tq-${subtopicId}-4`,
      questionEs: `¿Qué actitud es la más adecuada cuando tienes dudas sobre "${topicEs}" en clase?`,
      questionHy: `Ի՞նչ վարքագիծն է առավել ճիշտ, երբ դասարանում հարց ունես «${topicHy}» թեմայից.`,
      optionsEs: [
        'Levantar la mano y preguntar con respeto: "Perdone, ¿puede explicarlo otra vez?"',
        'Quedarse callado y dejar la tarea sin hacer',
        'Interrumpir al profesor gritando',
        'Ignorar el tema por completo'
      ],
      optionsHy: [
        'Ձեռք բարձրացնել և քաղաքավարի հարցնել. «Կներեք, կարո՞ղ եք մեկ անգամ էլ բացատրել»',
        'Լուռ մնալ և տնայինը չանել',
        'Գոռալով ընդհատել ուսուցչին',
        'Ընդհանրապես ուշադրություն չդարձնել'
      ],
      correctIndex: 0,
      explanationEs: 'En los institutos españoles los profesores valoran muy positivamente el interés y las preguntas educadas.',
      explanationHy: 'Իսպանական դպրոցներում ուսուցիչները շատ են գնահատում աշակերտի հետաքրքրությունն ու քաղաքավարի հարցերը։'
    },
    {
      id: `tq-${subtopicId}-5`,
      questionEs: `¿Cómo podemos comprobar si hemos asimilado correctamente "${topicEs}"?`,
      questionHy: `Ինչպե՞ս կարող ենք ստուգել՝ արդյոք ճիշտ ենք յուրացրել «${topicHy}»-ը.`,
      optionsEs: [
        'Haciendo ejercicios interactivos, explicando el concepto con nuestras palabras y revisando los errores',
        'Cerrando el libro sin comprobar nada',
        'Mirando fijamente la pantalla sin interactuar',
        'Adivinando sin leer las preguntas'
      ],
      optionsHy: [
        'Ինտերակտիվ վարժություններ կատարելով, նյութը սեփական բառերով բացատրելով և սխալները վերլուծելով',
        'Գիրքը փակելով առանց ստուգման',
        'Էկրանին նայելով առանց պատասխանելու',
        'Գուշակելով առանց հարցը կարդալու'
      ],
      correctIndex: 0,
      explanationEs: 'La comprobación práctica y la explicación reflexiva consolidan el aprendizaje.',
      explanationHy: 'Գործնական ստուգումն ու ինքնուրույն բացատրությունը ամրապնդում են գիտելիքը։'
    },
    {
      id: `tq-${subtopicId}-6`,
      questionEs: `¿Qué herramienta de esta plataforma te permite escuchar la pronunciación en español de "${topicEs}"?`,
      questionHy: `Հարթակի ո՞ր գործիքն է թույլ տալիս լսել իսպաներեն ճիշտ արտասանությունը.`,
      optionsEs: [
        'El botón de audio con icono de altavoz (pronunciación de España es-ES)',
        'El botón de cerrar la ventana',
        'La barra de desplazamiento vertical',
        'El pie de página'
      ],
      optionsHy: [
        'Բարձրախոսի պատկերակով աուդիո կոճակը (իսպանական es-ES արտասանությամբ)',
        'Պատուհանը փակելու կոճակը',
        'Ուղղահայաց սահելու գիծը',
        'Էջի ներքևի մասը'
      ],
      correctIndex: 0,
      explanationEs: 'La síntesis de voz pronuncia cada frase en español peninsular para entrenar el oído.',
      explanationHy: 'Ձայնային սինթեզը արտասանում է յուրաքանչյուր նախադասություն իսպաներենով՝ լսողությունը մարզելու համար։'
    },
    {
      id: `tq-${subtopicId}-7`,
      questionEs: `¿Qué función tiene hacer clic sobre las frases en español?`,
      questionHy: `Ի՞նչ է տեղի ունենում իսպաներեն նախադասության վրա սեղմելիս.`,
      optionsEs: [
        'Muestra y oculta inmediatamente la traducción explicativa en armenio',
        'Borra la pantalla por completo',
        'Cierra la sesión del alumno',
        'Cambia el idioma a inglés'
      ],
      optionsHy: [
        'Անմիջապես բացում և փակում է հայերեն բացատրական թարգմանությունը',
        'Ջնջում է էկրանը',
        'Դուրս է գալիս համակարգից',
        'Փոխում է լեզուն անգլերենի'
      ],
      correctIndex: 0,
      explanationEs: 'Permite consultar el significado en armenio en cualquier momento para afianzar la comprensión.',
      explanationHy: 'Թույլ է տալիս ցանկացած պահի տեսնել հայերեն իմաստը՝ ըմբռնումը հեշտացնելու համար։'
    },
    {
      id: `tq-${subtopicId}-8`,
      questionEs: `En los exámenes oficiales de 1.º ESO en España, ¿cuál es la escala habitual de notas?`,
      questionHy: 'Իսպանիայի 1.º ESO-ի պաշտոնական քննություններում ո՞րն է գնահատման սանդղակը.',
      optionsEs: [
        'De 0 a 10 puntos (Sobresaliente 9-10, Notable 7-8, Bien 6, Suficiente 5, Insuficiente <5)',
        'De A a F con letras anglosajonas',
        'De 0 a 1000 puntos',
        'Solo aprobado o no presentado sin notas numéricas'
      ],
      optionsHy: [
        '0-ից 10 բալ (Sobresaliente 9-10, Notable 7-8, Bien 6, Suficiente 5, Insuficiente <5)',
        'A-ից F տառերով',
        '0-ից 1000 միավորներով',
        'Միայն ստուգարք առանց թվերի'
      ],
      correctIndex: 0,
      explanationEs: 'En España las calificaciones van del 0 al 10 y el aprobado se sitúa en el 5.',
      explanationHy: 'Իսպանիայում գնահատականները 0-ից 10 են, իսկ դրական շեմը 5-ն է։'
    },
    {
      id: `tq-${subtopicId}-9`,
      questionEs: `¿Qué debes hacer si cometes un fallo en una pregunta sobre "${topicEs}"?`,
      questionHy: `Ի՞նչ պետք է անես, եթե սխալ պատասխանես «${topicHy}»-ի վերաբերյալ հարցին.`,
      optionsEs: [
        'Leer atentamente la explicación del error en armenio y español y volver a intentarlo',
        'Desanimarse y no volver a estudiar',
        'Culpar al profesor',
        'Borrar la aplicación'
      ],
      optionsHy: [
        'Ուշադիր կարդալ սխալի բացատրությունը հայերեն և իսպաներեն ու նորից փորձել',
        'Հուսահատվել և այլևս չսովորել',
        'Մեղադրել ուսուցչին',
        'Ջնջել ծրագիրը'
      ],
      correctIndex: 0,
      explanationEs: 'Los errores son la mejor oportunidad de aprender si se lee con calma la explicación.',
      explanationHy: 'Սխալները սովորելու լավագույն հնարավորությունն են, եթե կարդաս բացատրությունը։'
    },
    {
      id: `tq-${subtopicId}-10`,
      questionEs: `¿Qué sintetiza la lección de "${topicEs}" para tu día a día en el IES?`,
      questionHy: `Ի՞նչ է տալիս «${topicHy}»-ի դասը քո առօրյային իսպանական դպրոցում.`,
      optionsEs: [
        'Mayor seguridad, mejor comprensión lectora y capacidad para hablar y escribir en castellano',
        'Menos tiempo libre',
        'Solo memorizar términos sin aplicación',
        'Ninguna mejora en la comunicación'
      ],
      optionsHy: [
        'Ավելի մեծ վստահություն, ընթերցանության ավելի լավ ըմբռնում և իսպաներենով գրելու ու խոսելու հմտություն',
        'Ավելի քիչ ազատ ժամանակ',
        'Միայն անգիր արված տերմիններ',
        'Ոչ մի առաջընթաց'
      ],
      correctIndex: 0,
      explanationEs: 'El dominio de la Lengua Castellana es la base para todas las demás materias escolares.',
      explanationHy: 'Իսպաներեն լեզվի իմացությունը հիմք է ծառայում դպրոցական մյուս բոլոր առարկաների համար։'
    }
  ];

  const detailed = getDetailedTheoryForSubtopic(subtopicId, topicEs, topicHy, modEs, modHy);

  return randomizeLessonOptions({
    subtopicId,
    titleEs: topicEs,
    titleHy: topicHy,
    moduleTitleEs: `Módulo ${foundModule.number}: ${modEs}`,
    moduleTitleHy: `Մոդուլ ${foundModule.number}: ${modHy}`,
    moduleId: foundModule.id,
    explanationEs: detailed.explanationEs,
    explanationHy: detailed.explanationHy,
    keyRulesEs: detailed.keyRulesEs,
    keyRulesHy: detailed.keyRulesHy,
    bilingualExamples: detailed.bilingualExamples,
    schoolExamples: detailed.schoolExamples,
    exercises: detailed.exercises || exercises,
    testQuestions: detailed.testQuestions || testQuestions,
    miniExam: {
      titleEs: `Mini examen final: ${topicEs}`,
      titleHy: `Ամփոփիչ փոքր քննություն. ${topicHy}`,
      questions: [
        (detailed.testQuestions || testQuestions)[0],
        (detailed.testQuestions || testQuestions)[1]
      ]
    }
  });
}
