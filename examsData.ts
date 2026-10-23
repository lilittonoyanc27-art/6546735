import type { SchoolExam, ExamQuestion } from './types.ts';
import { shuffleMultipleChoiceQuestion } from './shuffleUtils.ts';

// Helper to construct questions for each exam category with randomized option positions
function createExam(
  id: string,
  titleEs: string,
  titleHy: string,
  difficulty: 'Fácil' | 'Medio' | 'Difícil',
  durationMinutes: number,
  moduleId: string | undefined,
  questions: ExamQuestion[]
): SchoolExam {
  return {
    id,
    titleEs,
    titleHy,
    difficulty,
    durationMinutes,
    moduleId,
    questions: questions.map((q, idx) => shuffleMultipleChoiceQuestion(q, `${id}-${idx}`))
  };
}

// 8 Full Exams
export const SCHOOL_EXAMS: SchoolExam[] = [
  createExam(
    'exam-comunicacion',
    'Examen de Comunicación',
    'Հաղորդակցության քննություն',
    'Medio',
    25,
    'm1-comunicacion',
    [
      {
        id: 'ec-1',
        categoryEs: 'Elementos',
        categoryHy: 'Տարրեր',
        questionEs: '¿Quién es el emisor cuando un árbitro pita el final del partido de fútbol en el instituto?',
        questionHy: 'Ո՞վ է ուղարկողը, երբ մրցավարը սուլում է խաղի ավարտը դպրոցում.',
        optionsEs: ['El árbitro', 'Los jugadores', 'El balón', 'El silbato'],
        optionsHy: ['Մրցավարը (El árbitro)', 'Խաղացողները', 'Գնդակը', 'Սուլիչը'],
        correctIndex: 0,
        explanationEs: 'El árbitro es quien genera y emite el mensaje silbando.',
        explanationHy: 'Մրցավարն է հաղորդագրությունը ստեղծողն ու ուղարկողը։'
      },
      {
        id: 'ec-2',
        categoryEs: 'Funciones',
        categoryHy: 'Գործառույթներ',
        questionEs: '¿Qué función predomina en: "¡Cierra la ventana, por favor!"?',
        questionHy: 'Ո՞ր գործառույթն է գերիշխում «¡Cierra la ventana, por favor!» արտահայտության մեջ.',
        optionsEs: ['Función apelativa (o conativa)', 'Función poética', 'Función metalingüística', 'Función fática'],
        optionsHy: ['Դիմողական / հրամայական (Apelativa)', 'Գեղարվեստական', 'Մետալեզվական', 'Կապը ստուգող'],
        correctIndex: 0,
        explanationEs: 'Pretende influir en el receptor para que realice una acción concreta.',
        explanationHy: 'Նպատակն է ստիպել ընդունողին կատարել որոշակի գործողություն (փակել պատուհանը)։'
      },
      {
        id: 'ec-3',
        categoryEs: 'Códigos',
        categoryHy: 'Կոդեր',
        questionEs: '¿Qué tipo de comunicación es un apretón de manos entre dos directores?',
        questionHy: 'Ինչպիսի՞ հաղորդակցություն է երկու տնօրենների ձեռքսեղմումը.',
        optionsEs: ['Comunicación no verbal cinésica (gestual)', 'Comunicación verbal oral', 'Comunicación escrita', 'Código morse'],
        optionsHy: ['Ոչ խոսքային ժեստերի հաղորդակցություն', 'Բանավոր խոսքային', 'Գրավոր', 'Մորզեի կոդ'],
        correctIndex: 0,
        explanationEs: 'El apretón de manos es un gesto que comunica saludo o acuerdo.',
        explanationHy: 'Ձեռքսեղմումը ոչ խոսքային ժեստ է, որն արտահայտում է ողջույն կամ համաձայնություն։'
      },
      {
        id: 'ec-4',
        categoryEs: 'Canal',
        categoryHy: 'Կապուղի',
        questionEs: 'En una videollamada escolar por ordenador, ¿cuál es el canal principal?',
        questionHy: 'Համակարգչով դպրոցական տեսազանգի ժամանակ ո՞րն է գլխավոր կապուղին.',
        optionsEs: ['La red de Internet y las señales digitales', 'El papel y bolígrafo', 'El pizarrón verde', 'La cartera escolar'],
        optionsHy: ['Ինտերնետ կապն ու թվային ազդանշանները', 'Թուղթն ու գրիչը', 'Կանաչ գրատախտակը', 'Դպրոցական պայուսակը'],
        correctIndex: 0,
        explanationEs: 'El medio físico que transporta los datos es la infraestructura de Internet.',
        explanationHy: 'Ֆիզիկական միջոցը, որով փոխանցվում են տվյալները, ինտերնետ ցանցն է։'
      },
      {
        id: 'ec-5',
        categoryEs: 'Contexto',
        categoryHy: 'Համատեքստ',
        questionEs: 'Si alguien dice "¡Gol!" en un partido y en una clase de Matemáticas, ¿por qué cambia el efecto?',
        questionHy: 'Եթե ինչ-որ մեկը գոռում է «¡Gol!» ֆուտբոլի դաշտում և մաթեմատիկայի դասին, ինչո՞ւ է իմաստը փոխվում.',
        optionsEs: ['Por el contexto o situación comunicativa', 'Porque el mensaje cambió de idioma', 'Porque el canal se rompió', 'Porque el código era latino'],
        optionsHy: ['Համատեքստի / իրավիճակի պատճառով (Contexto)', 'Որովհետև լեզուն փոխվեց', 'Որովհետև կապուղին խաթարվեց', 'Որովհետև լատիներեն էր'],
        correctIndex: 0,
        explanationEs: 'El contexto escolar determina si un mensaje es adecuado y comprensible.',
        explanationHy: 'Համատեքստն ու միջավայրն են որոշում խոսքի նպատակահարմարությունն ու իմաստը։'
      }
    ]
  ),

  createExam(
    'exam-textos',
    'Examen de Tipos de Textos',
    'Տեքստերի տեսակների քննություն',
    'Medio',
    25,
    'm2-textos',
    [
      {
        id: 'et-1',
        categoryEs: 'Narración',
        categoryHy: 'Պատմողական',
        questionEs: '¿Qué tipo de texto relata hechos reales o ficticios ocurridos a unos personajes en un tiempo y lugar?',
        questionHy: 'Ո՞ր տեքստն է պատմում հերոսների հետ որոշակի ժամանակում և վայրում տեղի ունեցած իրական կամ հորինված դեպքեր.',
        optionsEs: ['Texto narrativo', 'Texto instructivo', 'Texto descriptivo', 'Texto argumentativo'],
        optionsHy: ['Պատմողական տեքստ (Texto narrativo)', 'Հրահանգային', 'Նկարագրական', 'Փաստարկային'],
        correctIndex: 0,
        explanationEs: 'La narración cuenta una sucesión de hechos (novelas, cuentos, noticias).',
        explanationHy: 'Պատմողական տեքստը ներկայացնում է իրադարձությունների զարգացումը։'
      },
      {
        id: 'et-2',
        categoryEs: 'Estructura',
        categoryHy: 'Կառուցվածք',
        questionEs: '¿Cuáles son las tres partes clásicas de la estructura de un texto escolar?',
        questionHy: 'Որո՞նք են դպրոցական տեքստի կառուցվածքի դասական երեք մասերը.',
        optionsEs: ['Introducción, desarrollo y conclusión', 'Sujeto, verbo y predicado', 'Verso, rima y estrofa', 'Prefijo, raíz y sufijo'],
        optionsHy: ['Ներածություն, հիմնական մաս և եզրակացություն', 'Ենթակա, բայ, ստորոգյալ', 'Չափածո տող, հանգ, տուն', 'Նախածանց, արմատ, վերջածանց'],
        correctIndex: 0,
        explanationEs: 'Toda composición ensayística o expositiva se organiza en intro, cuerpo y cierre.',
        explanationHy: 'Տեքստերի հիմնական կառուցվածքային սխեման է՝ ներածություն, զարգացում և ամփոփում։'
      },
      {
        id: 'et-3',
        categoryEs: 'Instructivo',
        categoryHy: 'Հրահանգային',
        questionEs: 'Una receta de tortilla de patatas o el manual de un dron son ejemplos de texto:',
        questionHy: 'Կարտոֆիլով տորտիլյայի բաղադրատոմսը կամ դրոնի օգտագործման ուղեցույցը ինչպիսի՞ տեքստ են.',
        optionsEs: ['Instructivo', 'Lírico poético', 'Literario fantástico', 'Dialógico informal'],
        optionsHy: ['Հրահանգային (Instructivo)', 'Քնարական պոեզիա', 'Ֆանտաստիկ գրական', 'Անպաշտոն երկխոսություն'],
        correctIndex: 0,
        explanationEs: 'Proporcionan pasos secuenciados e instrucciones para alcanzar una meta.',
        explanationHy: 'Տալիս են հստակ հրահանգներ որևէ գործողություն ճիշտ կատարելու համար։'
      },
      {
        id: 'et-4',
        categoryEs: 'Conectores',
        categoryHy: 'Կապակցող բառեր',
        questionEs: '¿Qué conector textual indica contraposición u oposición?',
        questionHy: 'Տեքստը կապակցող ո՞ր բառն է ցույց տալիս հակադրություն (Oposición).',
        optionsEs: ['Sin embargo', 'Además', 'En primer lugar', 'Por lo tanto'],
        optionsHy: ['Այնուամենայնիվ / Սակայն (Sin embargo)', 'Բացի այդ (Además)', 'Առաջին հերթին', 'Հետևաբար'],
        correctIndex: 0,
        explanationEs: '"Sin embargo" introduce un contraste frente a la afirmación previa.',
        explanationHy: '«Sin embargo»-ն ներմուծում է հակադիր միտք նախորդի համեմատ։'
      },
      {
        id: 'et-5',
        categoryEs: 'Coherencia',
        categoryHy: 'Կապակցվածություն',
        questionEs: '¿Qué propiedad textual asegura que todas las ideas traten sobre el mismo tema sin contradecirse?',
        questionHy: 'Տեքստի ո՞ր հատկանիշն է ապահովում, որ բոլոր մտքերը լինեն նույն թեմայի շուրջ՝ առանց հակասությունների.',
        optionsEs: ['Coherencia global', 'Rima asonante', 'Métrica poética', 'Deixis espacial'],
        optionsHy: ['Տրամաբանական կապակցվածություն (Coherencia)', 'Ասոնանսային հանգ', 'Տաղաչափություն', 'Տարածական դեյքսիս'],
        correctIndex: 0,
        explanationEs: 'La coherencia exige unidad temática, orden lógico y ausencia de contradicciones.',
        explanationHy: 'Coherencia-ն պահանջում է թեմատիկ միասնություն և տրամաբանական կապ։'
      }
    ]
  ),

  createExam(
    'exam-gramatica',
    'Examen de Gramática',
    'Քերականության քննություն',
    'Medio',
    30,
    'm3-gramatica',
    [
      {
        id: 'eg-1',
        categoryEs: 'Categorías',
        categoryHy: 'Խոսքի մասեր',
        questionEs: 'En: "El veloz guepardo cazó una presa", ¿qué categoría es "veloz"?',
        questionHy: '«El veloz guepardo cazó una presa» նախադասության մեջ խոսքի ո՞ր մասն է «veloz» բառը.',
        optionsEs: ['Adjetivo calificativo', 'Sustantivo común', 'Verbo en pasado', 'Pronombre personal'],
        optionsHy: ['Որակական ածական (Adjetivo calificativo)', 'Հասարակ գոյական', 'Անցյալ բայ', 'Անձնական դերանուն'],
        correctIndex: 0,
        explanationEs: '"Veloz" expresa una cualidad del sustantivo guepardo.',
        explanationHy: '«Veloz»-ը (արագ) արտահայտում է գոյականի հատկանիշը։'
      },
      {
        id: 'eg-2',
        categoryEs: 'Verbos',
        categoryHy: 'Բայեր',
        questionEs: '¿En qué tiempo y modo verbal está "habíamos estudiado"?',
        questionHy: 'Ո՞ր ժամանակաձևով և եղանակով է «habíamos estudiado» բայը.',
        optionsEs: ['Pretérito pluscuamperfecto de indicativo', 'Pretérito perfecto simple', 'Futuro simple', 'Presente de subjuntivo'],
        optionsHy: ['Վաղակատար անցյալ (Pluscuamperfecto de indicativo)', 'Պարզ անցյալ', 'Պարզ ապառնի', 'Ըղձական ներկա'],
        correctIndex: 0,
        explanationEs: 'Forma compuesta con el imperfecto del verbo haber + participio: habíamos estudiado.',
        explanationHy: 'Haber բայի imperfecto ձև + հարակատար դերբայ (estudiado) = Pluscuamperfecto:'
      },
      {
        id: 'eg-3',
        categoryEs: 'Determinantes',
        categoryHy: 'Որոշիչներ',
        questionEs: '¿Qué clase de determinante es "estos" en "estos libros"?',
        questionHy: 'Ինչպիսի՞ որոշիչ բառ է «estos»-ը «estos libros» (այս գրքերը) արտահայտության մեջ.',
        optionsEs: ['Determinante demostrativo de cercanía', 'Determinante posesivo', 'Numeral ordinal', 'Artículo indeterminado'],
        optionsHy: ['Ցուցական որոշիչ՝ մոտիկության (Demostrativo)', 'Ստացական', 'Դասական թվական', 'Անորոշ հոդ'],
        correctIndex: 0,
        explanationEs: 'Indica proximidad respecto al emisor (este/esta/estos/estas).',
        explanationHy: 'Ցույց է տալիս մոտիկություն խոսողի նկատմամբ (այս)։'
      },
      {
        id: 'eg-4',
        categoryEs: 'Adverbios',
        categoryHy: 'Մակբայներ',
        questionEs: '¿Cuál de las siguientes palabras es un adverbio invariable?',
        questionHy: 'Սրանցից ո՞րն է անփոփոխ մակբայ (Adverbio).',
        optionsEs: ['ayer', 'alto', 'buenas', 'rápidos'],
        optionsHy: ['ayer (երեկ՝ ժամանակի մակբայ)', 'alto (ածական)', 'buenas (ածական)', 'rápidos (ածական)'],
        correctIndex: 0,
        explanationEs: '"Ayer" es un adverbio de tiempo, no tiene género ni número.',
        explanationHy: '«Ayer»-ը ժամանակի մակբայ է, չունի սեռ կամ թիվ (անփոփոխ է)։'
      },
      {
        id: 'eg-5',
        categoryEs: 'Preposiciones',
        categoryHy: 'Նախդիրներ',
        questionEs: '¿Cuál de las siguientes series contiene SOLO preposiciones en español?',
        questionHy: 'Ո՞ր շարքն է պարունակում ՄԻԱՅՆ իսպաներեն նախդիրներ.',
        optionsEs: ['a, con, de, en, por, sobre', 'el, la, los, las, un, una', 'yo, tú, él, nosotros', 'hoy, aquí, bien, nunca'],
        optionsHy: ['a, con, de, en, por, sobre (նախդիրներ)', 'հոդեր', 'դերանուններ', 'մակբայներ'],
        correctIndex: 0,
        explanationEs: 'Son preposiciones propias de la lista oficial de la RAE.',
        explanationHy: 'Սրանք իսպաներենի հիմնական նախդիրներն են (a, con, de, en, por, sobre...):'
      }
    ]
  ),

  createExam(
    'exam-sintaxis',
    'Examen de Sintaxis',
    'Շարահյուսության քննություն',
    'Difícil',
    30,
    'm4-sintaxis',
    [
      {
        id: 'es-1',
        categoryEs: 'Sujeto',
        categoryHy: 'Ենթակա',
        questionEs: 'En: "A mis primos les encantan las novelas de misterio", ¿cuál es el sujeto?',
        questionHy: '«A mis primos les encantan las novelas de misterio» նախադասության մեջ ո՞րն է ենթական.',
        optionsEs: ['las novelas de misterio', 'A mis primos', 'les', 'misterio'],
        optionsHy: ['առեղծվածային վեպերը (las novelas de misterio)', 'իմ զարմիկներին', 'նրանց', 'առեղծված'],
        correctIndex: 0,
        explanationEs: 'Concuerda con "encantan" en plural y no lleva preposición "a".',
        explanationHy: 'Համաձայնում է հոգնակի թվով encantan բայի հետ և չունի «a» նախդիր։'
      },
      {
        id: 'es-2',
        categoryEs: 'Predicado',
        categoryHy: 'Ստորոգյալ',
        questionEs: '¿Qué tipo de predicado tiene la oración: "Alicia es delegada de clase"?',
        questionHy: 'Ինչպիսի՞ ստորոգյալ ունի «Alicia es delegada de clase» նախադասությունը.',
        optionsEs: ['Predicado nominal (con verbo copulativo ser y atributo)', 'Predicado verbal con complemento directo', 'Predicado adverbial', 'Oración pasiva'],
        optionsHy: ['Անվանական ստորոգյալ (ser կապող բայով և ստորոգելիով)', 'Բայական ստորոգյալ', 'Մակբայական', 'Կրավորական'],
        correctIndex: 0,
        explanationEs: 'Lleva el verbo copulativo "es" y el atributo "delegada de clase".',
        explanationHy: 'Ունի «ser» (es) կապող բայը և «delegada de clase» ստորոգելին։'
      },
      {
        id: 'es-3',
        categoryEs: 'Núcleo',
        categoryHy: 'Գլխավոր անդամ',
        questionEs: '¿Cuál es el núcleo del sujeto en: "Los nuevos alumnos del instituto llegaron temprano"?',
        questionHy: 'Ո՞րն է ենթակայի գլխավոր անդամը (Núcleo).',
        optionsEs: ['alumnos', 'nuevos', 'instituto', 'llegaron'],
        optionsHy: ['alumnos (աշակերտներ)', 'նոր', 'ինստիտուտ', 'եկան'],
        correctIndex: 0,
        explanationEs: 'El sustantivo rector del sintagma es "alumnos".',
        explanationHy: 'Ենթակայի գլխավոր գոյականը «alumnos»-ն է։'
      },
      {
        id: 'es-4',
        categoryEs: 'Impersonal',
        categoryHy: 'Անենթակա',
        questionEs: '¿Cuál de las siguientes es una oración impersonal (sin sujeto)?',
        questionHy: 'Սրանցից ո՞րն է անենթակա նախադասություն (առանց ենթակայի).',
        optionsEs: ['Ayer nevó en la sierra madrileña.', 'Los niños jugaban en la nieve.', 'El frío llegó de pronto.', 'Nosotros fuimos a esquiar.'],
        optionsHy: ['Երեկ Մադրիդի սարերում ձյուն եկավ (Ayer nevó...)', 'Երեխաները խաղում էին', 'Ցուրտը հանկարծ եկավ', 'Մենք գնացինք դահուկ քշելու'],
        correctIndex: 0,
        explanationEs: '"Nevar" es un verbo meteorológico unipersonal sin sujeto gramatical.',
        explanationHy: '«Nevar» (ձյունել) եղանակային երևույթ է և ենթակա չունի։'
      },
      {
        id: 'es-5',
        categoryEs: 'Concordancia',
        categoryHy: 'Համաձայնություն',
        questionEs: '¿Qué opción mantiene la concordancia sujeto-verbo correcta?',
        questionHy: 'Ո՞ր տարբերակն է պահպանում ենթակայի և բայի ճիշտ համաձայնությունը.',
        optionsEs: ['El grupo de alumnos visitó el museo ayer.', 'El grupo de alumnos visitaron el museo ayer.', 'Los profesores explicaba la lección.', 'Nosotros tenéis deberes.'],
        optionsHy: ['El grupo de alumnos visitó el museo ayer.', 'El grupo... visitaron...', 'Los profesores explicaba...', 'Nosotros tenéis...'],
        correctIndex: 0,
        explanationEs: 'El núcleo del sujeto es "grupo" (singular), por lo que el verbo va en singular: visitó.',
        explanationHy: 'Ենթակայի գլխավոր անդամը եզակի «grupo»-ն է, ուստի բայը եզակի է՝ visitó:'
      }
    ]
  ),

  createExam(
    'exam-ortografia',
    'Examen de Ortografía',
    'Ուղղագրության քննություն',
    'Medio',
    25,
    'm6-ortografia',
    [
      {
        id: 'eo-1',
        categoryEs: 'Acentuación',
        categoryHy: 'Շեշտադրություն',
        questionEs: '¿Cuál de las siguientes palabras llanas lleva tilde correctamente?',
        questionHy: 'Սրանցից ո՞ր llana բառն է ճիշտ շեշտված.',
        optionsEs: ['árbol', 'cása', 'mésa', 'líbro'],
        optionsHy: ['árbol (ծառ)', 'cása', 'mésa', 'líbro'],
        correctIndex: 0,
        explanationEs: 'Árbol es llana (ÁR-bol) y termina en consonante distinta de n o s (-l), por lo que lleva tilde.',
        explanationHy: 'Llana բառ է, ավարտվում է l-ով (ոչ n կամ s), ուստի շեշտվում է՝ árbol:'
      },
      {
        id: 'eo-2',
        categoryEs: 'B y V',
        categoryHy: 'B և V',
        questionEs: 'Elige la opción correctamente escrita con b y v:',
        questionHy: 'Ընտրիր b և v տառերով ճիշտ գրված տարբերակը.',
        optionsEs: ['Iba cantando mientras abría la ventana', 'Iva cantando mientras abría la ventana', 'Iba cantando mientras avría la ventana', 'Iva cantando mientras avría la bentana'],
        optionsHy: ['Iba cantando mientras abría la ventana', 'Iva...', 'avría...', 'bentana...'],
        correctIndex: 0,
        explanationEs: 'El pretérito imperfecto del verbo ir es "iba" (con b), abrir lleva b y ventana se escribe con v.',
        explanationHy: 'Ir բայի անցյալը «iba» է (b-ով), abrir-ը b-ով, իսկ ventana-ն՝ v-ով։'
      },
      {
        id: 'eo-3',
        categoryEs: 'Signos',
        categoryHy: 'Նշաններ',
        questionEs: 'En español, ¿cuál es la regla para abrir interrogaciones y exclamaciones?',
        questionHy: 'Իսպաներենում ո՞րն է հարցական և բացականչական նշանների գործածության կանոնը.',
        optionsEs: ['Obligatorio signo de apertura y de cierre (¿? e ¡!)', 'Solo se pone signo al final como en inglés', 'Solo se pone al principio', 'No se usan signos en 1.º de ESO'],
        optionsHy: ['Պարտադիր է բացող և փակող նշանը (¿? և ¡!)', 'Միայն վերջում՝ ինչպես անգլերենում', 'Միայն սկզբում', 'Չեն օգտագործվում'],
        correctIndex: 0,
        explanationEs: 'En español normativo siempre se abren con ¿ y ¡ y se cierran con ? y !.',
        explanationHy: 'Իսպաներենում միշտ պարտադիր են շրջված բացող նշանները՝ ¿ և ¡:'
      },
      {
        id: 'eo-4',
        categoryEs: 'G y J',
        categoryHy: 'G և J',
        questionEs: '¿Qué palabra se escribe con "j"?',
        questionHy: 'Ո՞ր բառն է գրվում «j»-ով.',
        optionsEs: ['relojero', 'geología', 'gente', 'gigante'],
        optionsHy: ['relojero (ժամագործ՝ j-ով)', 'geología (g-ով)', 'gente (g-ով)', 'gigante (g-ով)'],
        correctIndex: 0,
        explanationEs: 'Las palabras derivadas de sustantivos en -j (reloj -> relojero) mantienen la j.',
        explanationHy: 'Reloj բառից ածանցված relojero-ն պահպանում է j տառը։'
      },
      {
        id: 'eo-5',
        categoryEs: 'Tilde diacrítica',
        categoryHy: 'Տարբերակիչ շեշտ',
        questionEs: '¿En qué caso "él" debe llevar tilde diacrítica?',
        questionHy: 'Ո՞ր դեպքում «él»-ը պետք է տարբերակիչ շեշտ ունենա.',
        optionsEs: ['Cuando es pronombre personal ("Él trajo el libro")', 'Cuando es artículo ("el libro")', 'Siempre sin tilde', 'Solo al final de frase'],
        optionsHy: ['Երբ անձնական դերանուն է («Él trajo el libro»)', 'Երբ հոդ է («el libro»)', 'Միշտ առանց շեշտի', 'Միայն վերջում'],
        correctIndex: 0,
        explanationEs: 'Él con tilde es pronombre personal; el sin tilde es artículo determinado.',
        explanationHy: 'Շեշտով él-ը նշանակում է «նա» (դերանուն), իսկ առանց շեշտի el-ը որոշյալ հոդ է։'
      }
    ]
  ),

  createExam(
    'exam-literatura',
    'Examen de Literatura',
    'Գրականության քննություն',
    'Medio',
    25,
    'm7-literatura',
    [
      {
        id: 'el-1',
        categoryEs: 'Géneros',
        categoryHy: 'Ժանրեր',
        questionEs: '¿Cuáles son los tres grandes géneros literarios clásicos estudiados en 1.º de ESO?',
        questionHy: 'Որո՞նք են 1.º de ESO-ում ուսումնասիրվող երեք դասական գրական ժանրերը.',
        optionsEs: ['Narrativo, lírico y dramático (o teatral)', 'Cómico, terrorífico y musical', 'Periodístico, digital y científico', 'Épico, romance y fábula'],
        optionsHy: ['Պատմողական, քնարական և դրամատիկական/թատերական', 'Կատակերգական, սարսափ և երաժշտական', 'Լրագրողական, թվային և գիտական', 'Էպիկական, ռոմանս և առակ'],
        correctIndex: 0,
        explanationEs: 'La tríada clásica aristotélica: narrativa (cuenta historias), lírica (expresa emociones) y drama (teatro dialogado).',
        explanationHy: 'Դասական երեք հիմնական ժանրերն են՝ պատմողական, քնարական և դրամատիկական։'
      },
      {
        id: 'el-2',
        categoryEs: 'Figuras',
        categoryHy: 'Պատկերավորման միջոցներ',
        questionEs: '"Sus ojos brillaban como dos zafiros azules". ¿Qué recurso literario es?',
        questionHy: '«Նրա աչքերը փայլում էին երկու կապույտ շափյուղաների պես»։ Ի՞նչ գեղարվեստական միջոց է սա.',
        optionsEs: ['Símil o comparación', 'Metáfora pura', 'Personificación', 'Hipérbole'],
        optionsHy: ['Համեմատություն (Símil՝ «como» բառով)', 'Զուտ փոխաբերություն', 'Անձնավորում', 'Չափազանցություն'],
        correctIndex: 0,
        explanationEs: 'Utiliza el nexo comparativo "como" para relacionar los dos términos.',
        explanationHy: 'Օգտագործում է «ինչպես/պես» (como) բառը համեմատելու համար։'
      },
      {
        id: 'el-3',
        categoryEs: 'Métrica',
        categoryHy: 'Տաղաչափություն',
        questionEs: 'En la poesía española, ¿cómo se denominan los versos de 8 sílabas o menos?',
        questionHy: 'Իսպանական պոեզիայում ինչպե՞ս են կոչվում 8 կամ պակաս վանկ ունեցող տողերը.',
        optionsEs: ['Versos de arte menor', 'Versos de arte mayor', 'Versos alejandrinos', 'Versos libres'],
        optionsHy: ['Փոքր արվեստի տողեր (Arte menor)', 'Մեծ արվեստի տողեր', 'Ալեքսանդրյան տողեր', 'Ազատ տողեր'],
        correctIndex: 0,
        explanationEs: 'Hasta 8 sílabas son de arte menor (letras minúsculas en la rima: a, b, a, b). De 9 en adelante son de arte mayor.',
        explanationHy: 'Մինչև 8 վանկ ունեցող տողերը կոչվում են arte menor, 9 և ավելի վանկերը՝ arte mayor:'
      },
      {
        id: 'el-4',
        categoryEs: 'Narrativa',
        categoryHy: 'Պատմողական',
        questionEs: '¿Qué tipo de narrador cuenta la historia desde dentro como protagonista o testigo usando "yo" o "nosotros"?',
        questionHy: 'Ինչպիսի՞ պատմողն է ներկայացնում դեպքերը ներսից՝ օգտագործելով «ես» կամ «մենք» (1-ին դեմք).',
        optionsEs: ['Narrador en primera persona (interno)', 'Narrador omnisciente en tercera persona', 'Narrador objetivo cámara', 'Lector protagonista'],
        optionsHy: ['Առաջին դեմքով պատմող (ներքին՝ Narrador en 1.ª persona)', 'Ամենագետ պատմող 3-րդ դեմքով', 'Օբյեկտիվ պատմող', 'Ընթերցող'],
        correctIndex: 0,
        explanationEs: 'El narrador interno participa en los hechos y narra en 1.ª persona.',
        explanationHy: 'Առաջին դեմքով պատմողը ինքն է մասնակցում գործողություններին։'
      },
      {
        id: 'el-5',
        categoryEs: 'Subgéneros',
        categoryHy: 'Ենթաժանրեր',
        questionEs: 'Una narración breve protagonizada casi siempre por animales con una moraleja final de enseñanza es una:',
        questionHy: 'Կարճ պատմություն՝ կենդանիների մասնակցությամբ և վերջում ուսուցողական խրատով (moraleja), կոչվում է.',
        optionsEs: ['Fábula', 'Leyenda histórica', 'Mito de dioses', 'Novela policíaca'],
        optionsHy: ['Առակ (Fábula)', 'Պատմական ավանդազրույց', 'Դիցաբանական առասպել', 'Խուզարկուական վեպ'],
        correctIndex: 0,
        explanationEs: 'La fábula (como las de Esopo o Samaniego) transmite una moraleja ética o práctica.',
        explanationHy: 'Առակը (ինչպես Եզոպոսի կամ Սամանիեգոյի առակները) ավարտվում է խրատով (moraleja)։'
      }
    ]
  ),

  createExam(
    'exam-comprension',
    'Examen de Comprensión Lectora',
    'Ընթերցածի ընկալման քննություն',
    'Medio',
    30,
    'm8-comprension',
    [
      {
        id: 'ec-lec-1',
        categoryEs: 'Información Explícita',
        categoryHy: 'Բացահայտ տեղեկատվություն',
        questionEs: '¿Qué es la comprensión literal de un texto escolar?',
        questionHy: 'Ի՞նչ է տեքստի ուղղակի բովանդակության ըմբռնումը (Comprensión literal).',
        optionsEs: [
          'Reconocer datos, fechas y personajes explícitamente escritos en el texto',
          'Inventar un final de ciencia ficción que no aparece',
          'Contar el número de letras de cada página',
          'Leer solo los títulos sin el contenido'
        ],
        optionsHy: [
          'Տեքստում ուղղակիորեն գրված փաստերի, թվականների և հերոսների ճանաչում',
          'Չեղած ֆանտաստիկ ավարտ հորինելը',
          'Յուրաքանչյուր էջի տառերի քանակը հաշվելը',
          'Միայն վերնագրերը կարդալը'
        ],
        correctIndex: 0,
        explanationEs: 'La comprensión literal localiza la información directa y explícita del autor.',
        explanationHy: 'Ուղղակի ըմբռնումը տեքստում եղած բացահայտ տեղեկատվության ճանաչումն է։'
      },
      {
        id: 'ec-lec-2',
        categoryEs: 'Inferencia',
        categoryHy: 'Ենթադրություն',
        questionEs: 'Si el texto dice: "Lucas tiritaba con bufanda y guantes", ¿qué se deduce implícitamente?',
        questionHy: 'Եթե տեքստում ասվում է «Լուկասը դողում էր շարֆով և ձեռնոցներով», ի՞նչ կարելի է ենթադրել.',
        optionsEs: [
          'Que hacía mucho frío en el ambiente',
          'Que era una tarde calurosa de verano',
          'Que Lucas estaba en la playa tomando el sol',
          'Que no había ropa de invierno'
        ],
        optionsHy: [
          'Որ եղանակը շատ ցուրտ էր',
          'Որ ամառային շոգ կեսօր էր',
          'Որ Լուկասը լողափին արևայրուք էր ընդունում',
          'Որ ձմեռային հագուստ չկար'
        ],
        correctIndex: 0,
        explanationEs: 'La comprensión inferencial deduce que tiritar y usar bufanda son consecuencias del frío.',
        explanationHy: 'Ենթադրական ըմբռնումով դողալն ու շարֆ կրելը ցույց են տալիս ցրտի առկայությունը։'
      },
      {
        id: 'ec-lec-3',
        categoryEs: 'Idea Principal',
        categoryHy: 'Գլխավոր միտք',
        questionEs: '¿Qué resume la idea principal de un párrafo?',
        questionHy: 'Ի՞նչն է ամփոփում պարբերության գլխավոր միտքը.',
        optionsEs: [
          'La afirmación más importante sin la cual el texto perdería su sentido central',
          'Cualquier detalle secundario sin importancia',
          'La última palabra de la línea',
          'El número de punto y comas'
        ],
        optionsHy: [
          'Ամենակարևոր պնդումը, առանց որի տեքստը կկորցներ իր հիմնական իմաստը',
          'Ցանկացած անկարևոր մանրուք',
          'Տողի վերջին բառը',
          'Միջակետերի քանակը'
        ],
        correctIndex: 0,
        explanationEs: 'La idea principal contiene el núcleo conceptual de la composición.',
        explanationHy: 'Գլխավոր միտքը պարունակում է տեքստի իմաստային առանցքը։'
      },
      {
        id: 'ec-lec-4',
        categoryEs: 'Hecho y Opinión',
        categoryHy: 'Փաստ և կարծիք',
        questionEs: '¿Cuál de las siguientes frases expresa una OPINIÓN subjetiva?',
        questionHy: 'Այս նախադասություններից ո՞րն է արտահայտում սուբյեկտիվ ԿԱՐԾԻՔ (Opinión).',
        optionsEs: [
          'Esta novela es la más emocionante y bonita del curso.',
          'El instituto abre sus puertas a las 8:00 de la mañana.',
          'Madrid es la capital de España.',
          'El texto contiene cinco párrafos.'
        ],
        optionsHy: [
          'Այս վեպը դասընթացի ամենահուզիչ և գեղեցիկ գիրքն է։',
          'Ինստիտուտի դռները բացվում են առավոտյան ժամը 8:00-ին։',
          'Մադրիդը Իսպանիայի մայրաքաղաքն է։',
          'Տեքստը բաղկացած է 5 պարբերությունից։'
        ],
        correctIndex: 0,
        explanationEs: '"Más emocionante y bonita" es un juicio de valor subjetivo, no un dato verificable.',
        explanationHy: '«Ամենահուզիչն ու գեղեցիկը» անձնական գնահատողական կարծիք է, ոչ թե օբյեկտիվ փաստ։'
      },
      {
        id: 'ec-lec-5',
        categoryEs: 'Intención',
        categoryHy: 'Հեղինակի նպատակ',
        questionEs: 'Cuando un autor escribe una fábula escolar, ¿cuál es su intención primaria?',
        questionHy: 'Երբ հեղինակը դպրոցական առակ է գրում, ո՞րն է նրա առաջնային նպատակը.',
        optionsEs: [
          'Transmitir una enseñanza moral o reflexión práctica a través de una historia amena',
          'Vender productos comerciales',
          'Explicar una fórmula química',
          'Publicar una ley en el Boletín Oficial'
        ],
        optionsHy: [
          'Փոխանցել բարոյախրատական ուսուցում կամ խորհելու տեղիք հաճելի պատմության միջոցով',
          'Ապրանքներ վաճառել',
          'Քիմիական բանաձև բացատրել',
          'Պաշտոնական օրենք հրապարակել'
        ],
        correctIndex: 0,
        explanationEs: 'La fábula busca educar y deleitar (docere et delectare).',
        explanationHy: 'Առակի հիմնական նպատակը ուսուցանելն ու դաստիարակելն է (moraleja)։'
      }
    ]
  ),

  createExam(
    'exam-general',
    'Examen General de Lengua 1.º ESO',
    'Ընդհանուր քննություն 1.º ESO',
    'Difícil',
    40,
    undefined,
    [
      {
        id: 'eg-gen-1',
        categoryEs: 'Comunicación',
        categoryHy: 'Հաղորդակցություն',
        questionEs: '¿Qué función lingüística se centra en llamar la atención del receptor para que actúe?',
        questionHy: 'Լեզվի ո՞ր գործառույթն է կոչված ընդունողի ուշադրությունը գրավելուն և նրան գործողության մղելուն.',
        optionsEs: ['Función apelativa', 'Función fática', 'Función metalingüística', 'Función emotiva'],
        optionsHy: ['Դիմողական / Apelativa', 'Կապը պահպանող', 'Մետալեզվական', 'Զգացմունքային'],
        correctIndex: 0,
        explanationEs: 'La función apelativa busca una respuesta o conducta del receptor.',
        explanationHy: 'Դիմողական գործառույթը միտված է լսողի վարքագծի վրա ազդելուն։'
      },
      {
        id: 'eg-gen-2',
        categoryEs: 'Ortografía',
        categoryHy: 'Ուղղագրություն',
        questionEs: '¿Por qué la palabra "médico" lleva tilde gráfica obligatoria?',
        questionHy: 'Ինչո՞ւ «médico» բառը պարտադիր գրավոր շեշտ ունի.',
        optionsEs: ['Porque es una palabra esdrújula y todas llevan tilde', 'Porque termina en vocal', 'Porque es llana en vocal', 'Porque es aguda'],
        optionsHy: ['Որովհետև esdrújula բառ է, իսկ բոլոր esdrújulas բառերը շեշտվում են', 'Որովհետև վերջանում է ձայնավորով', 'Որովհետև llana է', 'Որովհետև aguda է'],
        correctIndex: 0,
        explanationEs: 'Mé-di-co tiene la fuerza en la antepenúltima sílaba (esdrújula).',
        explanationHy: 'Mé-di-co բառի շեշտը վերջից 3-րդ վանկի վրա է, ուստի պարտադիր շեշտվում է։'
      },
      {
        id: 'eg-gen-3',
        categoryEs: 'Sintaxis',
        categoryHy: 'Շարահյուսություն',
        questionEs: 'En: "Los excursionistas descansaron en la cima", ¿cuál es el sintagma sujeto?',
        questionHy: '«Los excursionistas descansaron en la cima» նախադասության մեջ ո՞րն է ենթակայական խումբը.',
        optionsEs: ['Los excursionistas', 'descansaron', 'en la cima', 'la cima'],
        optionsHy: ['Los excursionistas (արշավականները)', 'հանգստացան', 'գագաթին', 'գագաթը'],
        correctIndex: 0,
        explanationEs: 'Sujeto expreso en plural que concuerda con "descansaron".',
        explanationHy: 'Արտահայտված հոգնակի ենթական է, որը համաձայնում է descansaron բայի հետ։'
      },
      {
        id: 'eg-gen-4',
        categoryEs: 'Semántica',
        categoryHy: 'Իմաստաբանություն',
        questionEs: 'Las palabras que se pronuncian o escriben igual pero tienen significados y orígenes distintos se llaman:',
        questionHy: 'Այն բառերը, որոնք նույն կերպ են արտասանվում կամ գրվում, բայց տարբեր իմաստներ և ծագում ունեն, կոչվում են.',
        optionsEs: ['Homónimas', 'Sinónimas', 'Antónimas', 'Derivadas'],
        optionsHy: ['Համանուններ (Homónimas)', 'Հոմանիշներ', 'Հականիշներ', 'Ածանցյալ բառեր'],
        correctIndex: 0,
        explanationEs: 'Como "banco" (de sentarse) y "banco" (de dinero), o "tubo" y "tuvo".',
        explanationHy: 'Ինչպես «banco» (նստարան) և «banco» (դրամատուն) կամ «tubo» և «tuvo» բառերը։'
      },
      {
        id: 'eg-gen-5',
        categoryEs: 'Lenguas de España',
        categoryHy: 'Իսպանիայի լեզուները',
        questionEs: '¿Cuál de las siguientes lenguas de España NO procede del latín?',
        questionHy: 'Իսպանիայի լեզուներից ո՞րը ՉԻ սերում լատիներենից.',
        optionsEs: ['El euskera (o lengua vasca)', 'El gallego', 'El catalán', 'El castellano'],
        optionsHy: ['Բասկերենը / Էուսկերան (El euskera)', 'Գալիսերենը', 'Կատալոներենը', 'Կաստիլերենը'],
        correctIndex: 0,
        explanationEs: 'El euskera es una lengua prerromana milenaria cuyo origen exacto aún no se conoce con certeza.',
        explanationHy: 'Բասկերենը նախահռոմեական հնագույն լեզու է և չի ծագել լատիներենից։'
      }
    ]
  )
];
