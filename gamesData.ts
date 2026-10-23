// 13 Interactive Educational Games Data for Lengua 1.º ESO
import { shuffleMultipleChoiceQuestion, shuffleEscapeRoomStep } from './shuffleUtils.ts';

export interface MillionaireQuestion {
  questionEs: string;
  questionHy: string;
  optionsEs: [string, string, string, string];
  optionsHy: [string, string, string, string];
  correctIndex: number;
  prize: string;
  explanationEs: string;
  explanationHy: string;
}

export const MILLIONAIRE_QUESTIONS: MillionaireQuestion[] = ([
  {
    prize: '100 €',
    questionEs: '¿Cuál es la lengua oficial en todo el territorio de España?',
    questionHy: 'Ո՞րն է Իսպանիայի պետական պաշտոնական լեզուն ամբողջ տարածքում.',
    optionsEs: ['El castellano o español', 'El catalán', 'El gallego', 'El euskera'],
    optionsHy: ['Կաստիլերենը / իսպաներենը', 'Կատալոներենը', 'Գալիսերենը', 'Բասկերենը'],
    correctIndex: 0,
    explanationEs: 'La Constitución Española establece que el castellano es la lengua oficial del Estado.',
    explanationHy: 'Իսպանիայի Սահմանադրությունը սահմանում է կաստիլերենը (իսպաներենը) որպես պետական պաշտոնական լեզու։'
  },
  {
    prize: '200 €',
    questionEs: '¿Qué palabra es un sustantivo común concreto?',
    questionHy: 'Ո՞ր բառն է հասարակ թանձրացական (շոշափելի) գոյական.',
    optionsEs: ['Mochila', 'Libertad', 'Madrid', 'Correr'],
    optionsHy: ['Mochila (պայուսակ)', 'Libertad (ազատություն)', 'Madrid (Մադրիդ)', 'Correr (վազել)'],
    correctIndex: 0,
    explanationEs: '"Mochila" es un objeto físico que se puede ver y tocar.',
    explanationHy: '«Mochila»-ն (պայուսակ) շոշափելի ֆիզիկական առարկա է։'
  },
  {
    prize: '500 €',
    questionEs: '¿Por qué la palabra "café" lleva tilde gráfica?',
    questionHy: 'Ինչո՞ւ «café» բառն ունի գրավոր շեշտ (tilde).',
    optionsEs: [
      'Porque es aguda terminada en vocal',
      'Porque es llana terminada en vocal',
      'Porque es esdrújula',
      'Porque es un verbo irregular'
    ],
    optionsHy: [
      'Որովհետև ձայնավորով ավարտվող aguda բառ է',
      'Որովհետև llana է',
      'Որովհետև esdrújula է',
      'Որովհետև անկանոն բայ է'
    ],
    correctIndex: 0,
    explanationEs: 'Ca-FÉ es aguda y acaba en la vocal e.',
    explanationHy: 'Ca-FÉ-ն aguda է և ավարտվում է e ձայնավորով։'
  },
  {
    prize: '1.000 €',
    questionEs: 'En la oración "Los árboles florecen en primavera", ¿cuál es el sujeto?',
    questionHy: '«Los árboles florecen en primavera» նախադասության մեջ ո՞րն է ենթական.',
    optionsEs: ['Los árboles', 'florecen', 'en primavera', 'primavera'],
    optionsHy: ['Los árboles (ծառերը)', 'florecen', 'en primavera', 'primavera'],
    correctIndex: 0,
    explanationEs: 'Concuerda en plural con el verbo "florecen".',
    explanationHy: 'Համաձայնում է հոգնակի թվով florecen բայի հետ։'
  },
  {
    prize: '5.000 €',
    questionEs: '¿Qué recurso literario encontramos en: "El viento aullaba furioso en la noche"?',
    questionHy: 'Գեղարվեստական ո՞ր միջոցն է առկա «El viento aullaba furioso en la noche» արտահայտության մեջ.',
    optionsEs: ['Personificación', 'Metáfora pura', 'Hipérbole exagerada', 'Rima consonante'],
    optionsHy: ['Անձնավորում (Personificación)', 'Զուտ փոխաբերություն', 'Չափազանցություն', 'Լիարժեք հանգ'],
    correctIndex: 0,
    explanationEs: 'Atribuye cualidades y acciones humanas/animales (aullar con furia) al viento inanimado.',
    explanationHy: 'Քամուն տրվում են մարդկային/կենդանական հատկանիշներ (ոռնալ զայրույթով)։'
  },
  {
    prize: '20.000 €',
    questionEs: '¿Cuál es el antónimo exacto de "generoso"?',
    questionHy: 'Ո՞րն է «generoso» (առատաձեռն) բառի ճիշտ հականիշը.',
    optionsEs: ['Tacaño', 'Valiente', 'Alegre', 'Rápido'],
    optionsHy: ['Tacaño (ժլատ)', 'Valiente (քաջ)', 'Alegre (ուրախ)', 'Rápido (արագ)'],
    correctIndex: 0,
    explanationEs: 'Tacaño es la persona que se resiste a gastar o compartir.',
    explanationHy: 'Tacaño նշանակում է ժլատ՝ չկիսվող։'
  },
  {
    prize: '50.000 €',
    questionEs: '¿Cuál de estos tiempos verbales expresa una acción pasada anterior que continúa o repetida?',
    questionHy: 'Այս բայաժամանակներից ո՞րն է արտահայտում անցյալում տևական կամ կրկնվող գործողություն.',
    optionsEs: ['Pretérito imperfecto (cantaba, comía)', 'Pretérito perfecto simple (canté)', 'Futuro simple (cantaré)', 'Presente (canto)'],
    optionsHy: ['Pretérito imperfecto (երգում էի / cantaba)', 'Pretérito perfecto simple', 'Futuro simple', 'Presente'],
    correctIndex: 0,
    explanationEs: 'El pretérito imperfecto describe acciones habituales o en desarrollo en el pasado.',
    explanationHy: 'Անկատար անցյալը ցույց է տալիս անցյալի սովորական կամ տևական գործողություններ։'
  },
  {
    prize: '100.000 €',
    questionEs: '¿Cómo se llama la rima en la que solo coinciden los sonidos de las vocales a partir de la tónica?',
    questionHy: 'Ինչպե՞ս է կոչվում այն հանգը, որտեղ շեշտված վանկից սկսած համընկնում են ՄԻԱՅՆ ձայնավորները.',
    optionsEs: ['Rima asonante', 'Rima consonante', 'Rima blanca', 'Rima libre'],
    optionsHy: ['Ասոնանսային հանգ (Rima asonante)', 'Լիարժեք հանգ (Consonante)', 'Սպիտակ տող', 'Ազատ հանգ'],
    correctIndex: 0,
    explanationEs: 'En la rima asonante solo se repiten las vocales (ej: barco / brazo -> a-o).',
    explanationHy: 'Ասոնանսային հանգում կրկնվում են միայն ձայնավոր հնչյունները։'
  },
  {
    prize: '500.000 €',
    questionEs: '¿Cuál es la función del lenguaje predominante en un prospecto de medicamentos?',
    questionHy: 'Լեզվի ո՞ր գործառույթն է գերիշխում դեղերի օգտագործման հրահանգում.',
    optionsEs: ['Función apelativa e instructiva', 'Función poética rimada', 'Función emotiva personal', 'Función fática de saludo'],
    optionsHy: ['Դիմողական և հրահանգող (Apelativa)', 'Գեղարվեստական', 'Զգացմունքային', 'Կապը ստուգող'],
    correctIndex: 0,
    explanationEs: 'Indica al paciente la dosis, posología y modo de empleo que debe seguir.',
    explanationHy: 'Ուղղորդում է պացիենտի վարքագիծը՝ ճիշտ դեղաչափ ընդունելու համար։'
  },
  {
    prize: '1.000.000 €',
    questionEs: '¿En qué obra cumbre de la literatura castellana del siglo XVII aparece don Quijote de la Mancha?',
    questionHy: 'Իսպանական 17-րդ դարի ո՞ր գլուխգործոցում է հանդես գալիս Դոն Կիխոտը.',
    optionsEs: [
      'Don Quijote de la Mancha, de Miguel de Cervantes (1605/1615)',
      'El cantar de mio Cid, anónimo medieval',
      'La Celestina, de Fernando de Rojas',
      'Rimas y Leyendas, de Gustavo Adolfo Bécquer'
    ],
    optionsHy: [
      'Դոն Կիխոտ Լամանչեցի՝ Միգել դե Սերվանտես (1605/1615)',
      'Իմ Սիդի երգը',
      'Սելեստինա',
      'Հանգեր և Ավանդազրույցներ'
    ],
    correctIndex: 0,
    explanationEs: 'Es la novela más universal de la literatura en español, escrita por Miguel de Cervantes.',
    explanationHy: 'Իսպաներենի համաշխարհային գլուխգործոցն է՝ գրված Միգել դե Սերվանտեսի կողմից։'
  }
] as MillionaireQuestion[]).map((q, idx) => shuffleMultipleChoiceQuestion(q, `mil-${idx}`));

export interface ListenQuestion {
  id: string;
  speechText: string;
  questionEs: string;
  questionHy: string;
  optionsEs: [string, string, string, string];
  optionsHy: [string, string, string, string];
  correctIndex: number;
  explanationEs: string;
  explanationHy: string;
}

export const LISTEN_QUESTIONS: ListenQuestion[] = ([
  {
    id: 'lq-1',
    speechText: 'Mañana por la tarde iremos a la biblioteca para preparar el examen de Lengua.',
    questionEs: '¿A qué lugar irán mañana por la tarde según el audio?',
    questionHy: 'Ո՞ւր են գնալու վաղը կեսօրին՝ ըստ ձայնագրության.',
    optionsEs: ['A la biblioteca', 'Al cine de la ciudad', 'Al polideportivo', 'A casa de los abuelos'],
    optionsHy: ['Գրադարան (A la biblioteca)', 'Կինոթատրոն', 'Մարզադաշտ', 'Տատիկի տուն'],
    correctIndex: 0,
    explanationEs: 'El audio dice claramente "iremos a la biblioteca".',
    explanationHy: 'Ձայնային հաղորդագրության մեջ հստակ ասվում է «iremos a la biblioteca»։'
  },
  {
    id: 'lq-2',
    speechText: 'El profesor de ciencias explicó con una maqueta cómo funcionan los volcanes.',
    questionEs: '¿Qué utilizó el profesor para explicar la lección?',
    questionHy: 'Ի՞նչ օգտագործեց ուսուցիչը դասը բացատրելու համար.',
    optionsEs: ['Una maqueta', 'Una película antigua', 'Un telescopio', 'Un libro prestado'],
    optionsHy: ['Մակետ (Una maqueta)', 'Հին ֆիլմ', 'Աստղադիտակ', 'Վերցված գիրք'],
    correctIndex: 0,
    explanationEs: 'Dijo expresamente "explicó con una maqueta".',
    explanationHy: 'Հստակ ասվում է՝ «explicó con una maqueta» (բացատրեց մակետով)։'
  },
  {
    id: 'lq-3',
    speechText: 'Carmen y David ganaron el primer premio del concurso de ortografía del instituto.',
    questionEs: '¿En qué certamen obtuvieron el primer premio?',
    questionHy: 'Ո՞ր մրցույթում նրանք շահեցին առաջին մրցանակը.',
    optionsEs: [
      'En el concurso de ortografía del instituto',
      'En la carrera de atletismo',
      'En el torneo de ajedrez',
      'En el recital de poesía'
    ],
    optionsHy: [
      'Ինստիտուտի ուղղագրության մրցույթում',
      'Աթլետիկայի վազքում',
      'Շախմատի մրցաշարում',
      'Ասմունքի երեկոյին'
    ],
    correctIndex: 0,
    explanationEs: 'El audio menciona el "concurso de ortografía".',
    explanationHy: 'Ձայնագրությունում նշվում է ուղղագրության մրցույթը (concurso de ortografía)։'
  }
] as ListenQuestion[]).map((q, idx) => shuffleMultipleChoiceQuestion(q, `listen-${idx}`));

export interface TrueFalseCard {
  id: string;
  statementEs: string;
  statementHy: string;
  isTrue: boolean;
  explanationEs: string;
  explanationHy: string;
}

export const TRUE_FALSE_CARDS: TrueFalseCard[] = [
  {
    id: 'tf-1',
    statementEs: 'Todas las palabras esdrújulas llevan tilde gráfica en español sin excepción.',
    statementHy: 'Իսպաներենում բոլոր esdrújulas բառերը պարտադիր գրավոր շեշտ են ստանում՝ առանց բացառության։',
    isTrue: true,
    explanationEs: 'Es una regla absoluta: música, plátano, sílaba, pájaro siempre llevan tilde.',
    explanationHy: 'Սա բացարձակ կանոն է. esdrújula բառերը միշտ շեշտվում են։'
  },
  {
    id: 'tf-2',
    statementEs: 'El sujeto de una oración en español siempre debe empezar obligatoriamente con la preposición "a".',
    statementHy: 'Իսպաներենում նախադասության ենթական միշտ պարտադիր պետք է սկսվի «a» նախդիրով։',
    isTrue: false,
    explanationEs: '¡Falso! El sujeto nunca lleva la preposición "a". En "A Juan le gusta el fútbol", el sujeto es "el fútbol".',
    explanationHy: 'Սխա՛լ է։ Ենթական երբեք «a» նախդիրով չի սկսվում։'
  },
  {
    id: 'tf-3',
    statementEs: 'El catalán, el gallego y el euskera son también lenguas oficiales en sus respectivas comunidades autónomas.',
    statementHy: 'Կատալոներենը, գալիսերենը և բասկերենը նույնպես պաշտոնական լեզուներ են իրենց ինքնավար մարզերում։',
    isTrue: true,
    explanationEs: 'Así lo reconoce el artículo 3 de la Constitución Española.',
    explanationHy: 'Այդպես է սահմանված Իսպանիայի Սահմանադրությամբ։'
  },
  {
    id: 'tf-4',
    statementEs: 'Los verbos "ser", "estar" y "parecer" son los principales verbos copulativos en español.',
    statementHy: '«Ser», «estar» և «parecer» բայերը իսպաներենի հիմնական օժանդակ/կապող (copulativos) բայերն են։',
    isTrue: true,
    explanationEs: 'Forman predicados nominales acompañados obligatoriamente de un atributo.',
    explanationHy: 'Նրանք կազմում են անվանական ստորոգյալներ՝ ստորոգելիի (Atributo) հետ միասին։'
  },
  {
    id: 'tf-5',
    statementEs: 'Un diptongo se produce cuando se separan dos vocales en sílabas distintas.',
    statementHy: 'Երկհնչյուն (diptongo) առաջանում է, երբ երկու ձայնավորներ բաժանվում են տարբեր վանկերի։',
    isTrue: false,
    explanationEs: '¡Falso! Cuando se separan en sílabas distintas es un HIATO (ej: te-a-tro). El diptongo las une en la misma sílaba (ej: fies-ta).',
    explanationHy: 'Սխա՛լ է։ Տարբեր վանկերի բաժանվելը կոչվում է HIATO (հիատուս): Diptongo-ն միավորում է նույն վանկում։'
  }
];

export interface UnscrambleWordTask {
  id: string;
  words: string[];
  correctSentence: string;
  translationHy: string;
  hintEs: string;
  hintHy: string;
}

export const UNSCRAMBLE_TASKS: UnscrambleWordTask[] = [
  {
    id: 'uns-1',
    words: ['Los', 'leen', 'alumnos', 'la', 'en', 'biblioteca', 'novelas'],
    correctSentence: 'Los alumnos leen novelas en la biblioteca',
    translationHy: 'Աշակերտները գրադարանում վեպեր են կարդում։',
    hintEs: 'Empieza por el sujeto plural "Los alumnos".',
    hintHy: 'Սկսիր հոգնակի ենթակայից՝ «Los alumnos»:'
  },
  {
    id: 'uns-2',
    words: ['Carmen', 'explicó', 'las', 'de', 'reglas', 'ayer', 'ortografía'],
    correctSentence: 'Carmen explicó ayer las reglas de ortografía',
    translationHy: 'Կարմենը երեկ բացատրեց ուղղագրության կանոնները։',
    hintEs: 'Sujeto: Carmen; verbo: explicó.',
    hintHy: 'Ենթական՝ Carmen, բայը՝ explicó:'
  },
  {
    id: 'uns-3',
    words: ['En', 'celebramos', 'primavera', 'festival', 'el', 'escolar'],
    correctSentence: 'En primavera celebramos el festival escolar',
    translationHy: 'Գարնանը մենք նշում ենք դպրոցական փառատոնը։',
    hintEs: 'Complemento circunstancial de tiempo al principio.',
    hintHy: 'Ժամանակի պարագան դրված է սկզբում՝ «En primavera»:'
  }
];

export interface FindErrorTask {
  id: string;
  badSentence: string;
  correctedSentence: string;
  errorWord: string;
  correctWord: string;
  translationHy: string;
  ruleExplanationEs: string;
  ruleExplanationHy: string;
}

export const FIND_ERROR_TASKS: FindErrorTask[] = [
  {
    id: 'fe-1',
    badSentence: 'Ayer fuimos haber una película al cine.',
    correctedSentence: 'Ayer fuimos a ver una película al cine.',
    errorWord: 'haber',
    correctWord: 'a ver',
    translationHy: 'Երեկ մենք գնացինք կինոթատրոն ֆիլմ դիտելու։',
    ruleExplanationEs: 'Se escribe "a ver" (preposición a + verbo ver) para mirar algo. "Haber" es el verbo auxiliar con h y b.',
    ruleExplanationHy: 'Գրվում է «a ver» (տեսնելու գնալ)։ «Haber»-ը օժանդակ բայ է (h-ով և b-ով)։'
  },
  {
    id: 'fe-2',
    badSentence: 'El profesor escrivió la fecha en la pizarra.',
    correctedSentence: 'El profesor escribió la fecha en la pizarra.',
    errorWord: 'escrivió',
    correctWord: 'escribió',
    translationHy: 'Ուսուցիչը գրատախտակին գրեց ամսաթիվը։',
    ruleExplanationEs: 'El verbo escribir y todas sus formas conjugadas se escriben siempre con "b" (salvo excepciones como hervir, servir y vivir).',
    ruleExplanationHy: 'Escribir բայը և նրա բոլոր խոնարհումները միշտ գրվում են «b»-ով։'
  },
  {
    id: 'fe-3',
    badSentence: 'Mi amigo compro un compas para dibujo.',
    correctedSentence: 'Mi amigo compró un compás para dibujo.',
    errorWord: 'compro un compas',
    correctWord: 'compró un compás',
    translationHy: 'Իմ ընկերը գծագրության համար կարկին գնեց։',
    ruleExplanationEs: '"Compró" (pretérito) y "compás" son palabras agudas terminadas en vocal y en s, por lo que deben llevar tilde obligatoriamente.',
    ruleExplanationHy: 'Compró և compás բառերը agudas են և ավարտվում են ձայնավորով ու s-ով, ուստի պարտադիր պետք է շեշտ ունենան։'
  }
];

export interface EscapeRoomStep {
  roomNameEs: string;
  roomNameHy: string;
  roomDescEs: string;
  roomDescHy: string;
  riddleEs: string;
  riddleHy: string;
  options: string[];
  optionsHy: string[];
  correctAnswer: string;
  clueUnlockedEs: string;
  clueUnlockedHy: string;
}

export const ESCAPE_ROOM_STEPS: EscapeRoomStep[] = ([
  {
    roomNameEs: 'Puerta 1: El Aula de Lengua',
    roomNameHy: 'Դուռ 1. Իսպաներենի դասասենյակ',
    roomDescEs: 'La puerta está cerrada con un candado de letras. La profesora dejó una pista sobre las categorías gramaticales.',
    roomDescHy: 'Դուռը կողպված է տառային կողպեքով։ Ուսուցչուհին գրառում է թողել խոսքի մասերի մասին։',
    riddleEs: '¿Qué palabra abre el candado siendo un sustantivo colectivo de animales?',
    riddleHy: 'Ո՞ր բառն է բացում կողպեքը՝ հանդիսանալով կենդանիների հավաքական գոյական.',
    options: ['Manada', 'Perro', 'Gato', 'Animales'],
    optionsHy: ['Manada (ոհմակ)', 'Perro (շուն)', 'Gato (կատու)', 'Animales (հոգնակի)'],
    correctAnswer: 'Manada',
    clueUnlockedEs: '¡Clic! El candado se abre. Has conseguido la llave de bronce de la biblioteca.',
    clueUnlockedHy: 'Կտտո՛ց։ Կողպեքը բացվեց։ Դու ստացար գրադարանի բրոնզե բանալին։'
  },
  {
    roomNameEs: 'Puerta 2: La Biblioteca Histórica',
    roomNameHy: 'Դուռ 2. Պատմական գրադարան',
    roomDescEs: 'Para cruzar la reja debes identificar la figura literaria correcta del pergamino.',
    roomDescHy: 'Ճաղավանդակը բացելու համար պետք է գտնես մագաղաթի ճիշտ գեղարվեստական միջոցը։',
    riddleEs: '"Tus cabellos son de oro fino". ¿Qué recurso literario es?',
    riddleHy: '«Քո մազերը մաքուր ոսկի են»։ Ի՞նչ գեղարվեստական միջոց է սա.',
    options: ['Metáfora', 'Personificación', 'Hipérbole', 'Onomatopeya'],
    optionsHy: ['Փոխաբերություն (Metáfora)', 'Անձնավորում', 'Չափազանցություն', 'Բնաձայնություն'],
    correctAnswer: 'Metáfora',
    clueUnlockedEs: '¡La reja de hierro cede! La metáfora te abre paso hacia el laboratorio de ciencias.',
    clueUnlockedHy: 'Երկաթե ճաղավանդակը բացվեց։ Ճանապարհը բաց է դեպի լաբորատորիա։'
  },
  {
    roomNameEs: 'Puerta 3: El Laboratorio de Ciencias',
    roomNameHy: 'Դուռ 3. Գիտության լաբորատորիա',
    roomDescEs: 'El teclado numérico exige el número de sílabas de una palabra esdrújula.',
    roomDescHy: 'Թվային կոդը պահանջում է esdrújula բառի վանկերի նվազագույն քանակը։',
    riddleEs: '¿Cuántas sílabas como mínimo tiene SIEMPRE una palabra esdrújula en español?',
    riddleHy: 'Իսպաներենում նվազագույնը քանի՞ վանկ ունի esdrújula բառը.',
    options: ['Tres sílabas', 'Dos sílabas', 'Una sílaba', 'Cuatro sílabas'],
    optionsHy: ['Երեք վանկ (Tres sílabas)', 'Երկու վանկ', 'Մեկ վանկ', 'Չորս վանկ'],
    correctAnswer: 'Tres sílabas',
    clueUnlockedEs: '¡Código aceptado! Como la tilde va en la antepenúltima sílaba, necesita al menos 3 sílabas.',
    clueUnlockedHy: 'Կոդն ընդունվեց։ Քանի որ շեշտը վերջից 3-րդ վանկի վրա է, պահանջվում է առնվազն 3 վանկ։'
  },
  {
    roomNameEs: 'Puerta 4: La Salida al Patio del Recreo',
    roomNameHy: 'Դուռ 4. Ելք դեպի դպրոցի բակ (դասամիջոց)',
    roomDescEs: 'La gran puerta principal del IES requiere resolver el último dilema sintáctico.',
    roomDescHy: 'Ինստիտուտի գլխավոր մեծ դուռը պահանջում է լուծել վերջին շարահյուսական գաղտնիքը։',
    riddleEs: 'En la frase: "¡Hemos escapado del colegio con éxito!", ¿cuál es el sujeto omitido?',
    riddleHy: '«¡Hemos escapado del colegio con éxito!» նախադասության մեջ ո՞րն է զեղչված ենթական.',
    options: ['Nosotros / Nosotras', 'Yo', 'Vosotros', 'Ellos'],
    optionsHy: ['Մենք (Nosotros / Nosotras)', 'Ես (Yo)', 'Դուք (Vosotros)', 'Նրանք (Ellos)'],
    correctAnswer: 'Nosotros / Nosotras',
    clueUnlockedEs: '¡ENHORABUENA! ¡HAS ESCAPADO AL RECREO! Has superado el reto lingüístico de 1.º de ESO.',
    clueUnlockedHy: 'ՇՆՈՐՀԱՎՈՐՈՒՄ ԵՆՔ։ ԴՈՒ ԴՈՒՐՍ ԵԿԱՐ ԴԱՍԱՄԻՋՈՑԻ ԲԱԿ։ Դու հաղթահարեցիր 1.º de ESO-ի լեզվական քվեստը։'
  }
] as EscapeRoomStep[]).map((step, idx) => shuffleEscapeRoomStep(step, `esc-${idx}`));

export interface MatchPair {
  id: string;
  termEs: string;
  termHy: string;
  definitionEs: string;
  definitionHy: string;
}

export const MATCH_PAIRS: MatchPair[] = [
  {
    id: 'p-1',
    termEs: 'Sustantivo colectivo',
    termHy: 'Հավաքական գոյական',
    definitionEs: 'Palabra en singular que designa un conjunto (ej: rebaño, arboleda).',
    definitionHy: 'Եզակի թվով բառ, որը նշանակում է առարկաների խումբ։'
  },
  {
    id: 'p-2',
    termEs: 'Palabra aguda',
    termHy: 'Aguda բառ',
    definitionEs: 'Lleva la sílaba tónica al final; tilde si termina en vocal, n o s.',
    definitionHy: 'Շեշտն ընկնում է վերջին վանկի վրա, շեշտվում է ձայնավորով կամ n, s-ով ավարտվելիս։'
  },
  {
    id: 'p-3',
    termEs: 'Metáfora',
    termHy: 'Փոխաբերություն',
    definitionEs: 'Identifica dos términos por su semejanza sin usar "como".',
    definitionHy: 'Նույնացնում է երկու հասկացություն նմանությամբ՝ առանց «ինչպես» բառի։'
  },
  {
    id: 'p-4',
    termEs: 'Sujeto omitido',
    termHy: 'Զեղչված ենթակա',
    definitionEs: 'No aparece escrito en la oración pero se deduce del verbo.',
    definitionHy: 'Գրված չէ նախադասության մեջ, բայց հասկացվում է բայի դեմքից ու թվից։'
  },
  {
    id: 'p-5',
    termEs: 'Texto instructivo',
    termHy: 'Հրահանգային տեքստ',
    definitionEs: 'Da pasos ordenados para realizar una acción o usar algo.',
    definitionHy: 'Տալիս է հաջորդական քայլեր գործողություն կատարելու կամ օգտագործելու համար։'
  }
];
