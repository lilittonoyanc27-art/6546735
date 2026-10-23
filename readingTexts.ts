import type { ReadingText } from './types.ts';
import { shuffleMultipleChoiceQuestion } from './shuffleUtils.ts';

export const READING_TEXTS: ReadingText[] = ([
  {
    id: 'read-1',
    titleEs: 'El misterio de la biblioteca del IES',
    titleHy: 'Ինստիտուտի գրադարանի առեղծվածը',
    level: 'Fácil',
    genreEs: 'Relato de misterio escolar',
    genreHy: 'Դպրոցական առեղծվածային պատմվածք',
    paragraphsEs: [
      'Era una tarde lluviosa de noviembre en el IES Miguel Hernández. Las clases habían terminado a las dos, pero en la biblioteca todavía quedaban cuatro alumnos de 1.º de ESO: Lucas, Sofía, Mateo y Armen. Estaban preparando una exposición sobre los mitos griegos.',
      'De repente, las luces de la sala parpadearon dos veces y se apagaron por completo. Un silencio espeso inundó la estancia. Solo se oía el golpeteo rítmico de las gotas de agua contra los cristales de los grandes ventanales.',
      '—¿Tenéis linterna en el móvil? —preguntó Sofía en un susurro.\n—Yo tengo batería —respondió Mateo encendiendo la luz blanca de su teléfono.',
      'Al iluminar la estantería del fondo, descubrieron algo insólito: un libro antiguo encuadernado en cuero marrón había caído al suelo sin que nadie lo tocara. En la cubierta dorada brillaba una palabra en latín: "Sapientia" (Sabiduría). Dentro del libro no había polvo, sino un marcapáginas de tela roja señalando un mapa del propio instituto con una pequeña cruz dibujada junto al aula de Música.',
      'Los cuatro amigos se miraron asombrados. No era un simple libro olvidado; era el inicio de un enigma que los llevaría a descubrir los secretos ocultos del antiguo edificio escolar.'
    ],
    paragraphsHy: [
      'Նոյեմբերյան անձրևոտ կեսօր էր Միգել Էրնանդեսի անվան միջնակարգ դպրոցում (IES): Դասերն ավարտվել էին ժամը երկուսին, բայց գրադարանում դեռ մնացել էին 1.º de ESO-ի չորս աշակերտներ՝ Լուկասը, Սոֆիան, Մատեոն և Արմենը։ Նրանք հունական առասպելների մասին շնորհանդես էին պատրաստում։',
      'Հանկարծ դահլիճի լույսերը երկու անգամ թարթեցին և ամբողջությամբ հանգան։ Սենյակը համակեց խորհրդավոր լռություն։ Լսվում էր միայն մեծ պատուհանների ապակիներին անձրևի կաթիլների ռիթմիկ թակոցը։',
      '—Հեռախոսի լապտեր ունե՞ք,— շշուկով հարցրեց Սոֆիան։\n—Ես լիցք ունեմ,— պատասխանեց Մատեոն՝ միացնելով հեռախոսի սպիտակ լույսը։',
      'Երբ լուսավորեցին հետևի դարակը, նրանք անսովոր մի բան նկատեցին. շագանակագույն կաշվե կազմով մի հին գիրք ընկել էր հատակին՝ առանց որևէ մեկի դիպչելու։ Ոսկեզօծ կազմին փայլում էր լատիներեն մի բառ՝ «Sapientia» (Իմաստություն)։ Գրքի մեջ փոշի չկար, այլ կարմիր կտորե էջանշան, որը ցույց էր տալիս հենց դպրոցի հատակագիծը՝ փոքրիկ խաչով երաժշտության դասարանի կողքին։',
      'Չորս ընկերները զարմացած նայեցին միմյանց։ Դա սովորական մոռացված գիրք չէր. դա մի հանելուկի սկիզբ էր, որը նրանց տանելու էր դպրոցի հին շենքի թաքնված գաղտնիքները բացահայտելու ճանապարհով։'
    ],
    vocabulary: [
      { es: 'Parpadear', hy: 'թարթել, առկայծել', definitionEs: 'Encenderse y apagarse rápidamente.', definitionHy: 'Արագորեն միանալ և անջատվել։' },
      { es: 'Insólito', hy: 'արտասովոր, անսովոր', definitionEs: 'Raro, extraño, que no es habitual.', definitionHy: 'Հազվադեպ, տարօրինակ, ոչ սովորական։' },
      { es: 'Enigma', hy: 'հանելուկ, առեղծված', definitionEs: 'Misterio que requiere investigación para resolverse.', definitionHy: 'Առեղծված, որը պահանջում է հետազոտություն։' }
    ],
    questions: [
      {
        id: 'rq-1-1',
        questionEs: '¿Por qué estaban los cuatro alumnos en la biblioteca después de las clases?',
        questionHy: 'Ինչո՞ւ էին չորս աշակերտները գրադարանում դասերից հետո.',
        optionsEs: [
          'Preparaban una exposición sobre mitos griegos',
          'Estaban castigados por el director',
          'Esperaban el autobús escolar',
          'Jugaban a videojuegos con el móvil'
        ],
        optionsHy: [
          'Հունական առասպելների մասին շնորհանդես էին պատրաստում',
          'Տնօրենի կողմից պատժված էին',
          'Սպասում էին դպրոցական ավտոբուսին',
          'Հեռախոսով խաղեր էին խաղում'
        ],
        correctIndex: 0,
        explanationEs: 'El texto dice explícitamente: "Estaban preparando una exposición sobre los mitos griegos".',
        explanationHy: 'Տեքստում ուղղակիորեն ասվում է, որ նրանք հունական առասպելների շուրջ էին աշխատում։'
      },
      {
        id: 'rq-1-2',
        questionEs: '¿Qué palabra en latín estaba grabada en la portada del libro misterioso?',
        questionHy: 'Լատիներեն ո՞ր բառն էր գրված խորհրդավոր գրքի կազմին.',
        optionsEs: ['Sapientia', 'Scientia', 'Historia', 'Magia'],
        optionsHy: ['Sapientia (Իմաստություն)', 'Scientia', 'Historia', 'Magia'],
        correctIndex: 0,
        explanationEs: 'En la cubierta dorada brillaba la palabra "Sapientia", que significa sabiduría.',
        explanationHy: 'Կազմին գրված էր «Sapientia», ինչը թարգմանաբար նշանակում է իմաստություն։'
      },
      {
        id: 'rq-1-3',
        questionEs: '¿Qué tipo de texto es esta lectura?',
        questionHy: 'Ինչպիսի՞ տեքստ է այս ընթերցանության նյութը.',
        optionsEs: [
          'Texto narrativo literario (relato con personajes y trama)',
          'Texto instructivo con recetas de cocina',
          'Noticia periodística objetiva',
          'Poema lírico en verso'
        ],
        optionsHy: [
          'Պատմողական գեղարվեստական տեքստ (կերպարներով և սյուժեով)',
          'Խոհարարական հրահանգային տեքստ',
          'Լրագրողական օբյեկտիվ լուր',
          'Չափածո քնարական բանաստեղծություն'
        ],
        correctIndex: 0,
        explanationEs: 'Narra una historia con personajes situados en un tiempo y espacio determinados.',
        explanationHy: 'Ներկայացնում է պատմություն՝ որոշակի գործողություններով, հերոսներով և միջավայրով։'
      },
      {
        id: 'rq-1-4',
        questionEs: '¿Hacia qué lugar del instituto señalaba la cruz del mapa hallado en el libro?',
        questionHy: 'Ինստիտուտի ո՞ր վայրն էր նշված քարտեզի խաչով.',
        optionsEs: [
          'Junto al aula de Música',
          'En la cafetería',
          'En el gimnasio',
          'En el despacho del director'
        ],
        optionsHy: [
          'Երաժշտության դասարանի կողքին',
          'Ճաշարանում',
          'Մարզադահլիճում',
          'Տնօրենի աշխատասենյակում'
        ],
        correctIndex: 0,
        explanationEs: 'El marcapáginas señalaba "una pequeña cruz dibujada junto al aula de Música".',
        explanationHy: 'Քարտեզի վրա խաչը նշված էր հենց երաժշտության դասարանի կողքին։'
      },
      {
        id: 'rq-1-5',
        questionEs: '¿Cuál es la idea principal del relato?',
        questionHy: 'Ո՞րն է պատմվածքի գլխավոր միտքը.',
        optionsEs: [
          'El hallazgo casual de un libro con un mapa misterioso despierta la curiosidad de cuatro estudiantes',
          'La tormenta rompió los cristales del instituto',
          'Mateo no tenía batería en el móvil',
          'La biblioteca no tenía calefacción en invierno'
        ],
        optionsHy: [
          'Գաղտնի քարտեզով գրքի պատահական գտածոն հետաքրքրություն է արթնացնում չորս աշակերտների մեջ',
          'Փոթորիկը կոտրեց դպրոցի ապակիները',
          'Մատեոյի հեռախոսի մարտկոցը նստել էր',
          'Գրադարանում ջեռուցում չկար'
        ],
        correctIndex: 0,
        explanationEs: 'La trama gira en torno al descubrimiento del libro y el inicio del misterio escolar.',
        explanationHy: 'Պատմության առանցքը խորհրդավոր գրքի հայտնաբերումն է և առեղծվածի սկիզբը։'
      }
    ]
  },
  {
    id: 'read-2',
    titleEs: 'Un puente entre Ereván y Madrid: El primer día de Narek',
    titleHy: 'Կամուրջ Երևանի և Մադրիդի միջև. Նարեկի առաջին օրը',
    level: 'Medio',
    genreEs: 'Relato realista escolar',
    genreHy: 'Իրապատում դպրոցական պատմվածք',
    paragraphsEs: [
      'Narek llegó a Madrid en septiembre con doce años recién cumplidos. En Ereván había dejado a sus primos, su escuela y el majestuoso monte Ararat que solía divisar desde el balcón de su casa. Ahora se encontraba frente a la verja del IES Cervantes, con su mochila nueva al hombro y el corazón latiendo con fuerza.',
      'Su principal inquietud era el idioma. Aunque había estudiado las bases de la gramática española durante el verano, temía no comprender las explicaciones rápidas de los profesores o no ser capaz de responder en voz alta delante de toda la clase.',
      'Al entrar al aula de 1.º de ESO B, la profesora de Lengua, Doña Carmen, lo recibió con una sonrisa cálida: "¡Bienvenido, Narek! Siéntate junto a Lucía. Ella te ayudará con el horario y los libros". Lucía le tendió la mano y le enseñó la agenda escolar: "No te preocupes; cuando yo llegué de Galicia tampoco conocía a nadie. Cualquier palabra que no entiendas, me la preguntas".',
      'Durante el recreo en el patio, varios compañeros lo invitaron a jugar al baloncesto. Narek metió una canasta limpia y todos aplaudieron: "¡Menudo tiro, Narek!". En ese instante, comprendió que el lenguaje de la amistad y el compañerismo no necesita diccionarios complicados, sino ganas de compartir y aprender juntos.'
    ],
    paragraphsHy: [
      'Նարեկը Մադրիդ էր եկել սեպտեմբերին՝ նոր բոլորած տասներկու տարեկանը։ Երևանում նա թողել էր իր զարմիկներին, իր դպրոցը և հպարտ Արարատ լեռը, որը սովոր էր տեսնել տան պատշգամբից։ Հիմա նա կանգնած էր Սերվանտեսի անվան միջնակարգ դպրոցի ճաղավանդակի առջև՝ ուսին նոր պայուսակ, իսկ սիրտը՝ արագ բաբախող։',
      'Նրա գլխավոր մտահոգությունը լեզուն էր։ Թեև ամռանը նա սովորել էր իսպաներեն քերականության հիմունքները, վախենում էր չհասկանալ ուսուցիչների արագ խոսքը կամ չկարողանալ պատասխանել ամբողջ դասարանի առաջ։',
      'Երբ նա մտավ 1.º de ESO B-ի դասասենյակ, իսպաներենի ուսուցչուհին՝ դոնյա Կարմենը, նրան ջերմ ժպիտով դիմավորեց. «Բարի գալո՛ւստ, Նարեկ։ Նստիր Լուսիայի կողքին։ Նա կօգնի քեզ դասացուցակի և գրքերի հարցում»։ Լուսիան ձեռքը մեկնեց և ցույց տվեց դպրոցական օրագիրը. «Մի՛ անհանգստացիր. երբ ես Գալիսիայից եկա, ես էլ ոչ մեկի չէի ճանաչում։ Ինչ բառ չհասկանաս, ինձ հարցրու»։',
      'Դասամիջոցին բակում մի քանի դասընկերներ նրան բասկետբոլ խաղալու հրավիրեցին։ Նարեկը գնդակը ճիշտ զամբյուղն ուղարկեց, և բոլորը ծափահարեցին. «Ի՜նչ նետում էր, Նարե՛կ»։ Այդ պահին նա հասկացավ, որ ընկերության լեզուն բարդ բառարանների կարիք չունի, այլ պարզապես միասին կիսվելու և սովորելու ցանկություն։'
    ],
    vocabulary: [
      { es: 'Inquietud', hy: 'մտահոգություն, անհանգստություն', definitionEs: 'Preocupación, intranquilidad.', definitionHy: 'Հոգս, ներքին անհանգստություն։' },
      { es: 'Compañerismo', hy: 'ընկերասիրություն, համերաշխություն', definitionEs: 'Relación amistosa y solidaria entre iguales.', definitionHy: 'Համերաշխ և բարեկամական վերաբերմունք դասընկերների միջև։' }
    ],
    questions: [
      {
        id: 'rq-2-1',
        questionEs: '¿Cuál era el mayor temor de Narek antes de entrar a su primera clase en Madrid?',
        questionHy: 'Ո՞րն էր Նարեկի ամենամեծ վախը Մադրիդում առաջին դասին մտնելուց առաջ.',
        optionsEs: [
          'No comprender el idioma español ni poder responder bien en clase',
          'Perder su mochila en el transporte',
          'Que no le gustara la comida escolar',
          'Tener que hacer exámenes de dibujo'
        ],
        optionsHy: [
          'Իսպաներենը չհասկանալը և դասարանում վստահ չպատասխանելը',
          'Պայուսակը տրանսպորտում կորցնելը',
          'Դպրոցի ճաշարանը հավանել չկարողանալը',
          'Նկարչության քննություն հանձնելը'
        ],
        correctIndex: 0,
        explanationEs: 'El texto indica que temía no comprender las explicaciones rápidas ni responder en voz alta.',
        explanationHy: 'Տեքստը նշում է, որ նրա մտահոգությունը արագ խոսքը չհասկանալն ու չպատասխանելն էր։'
      },
      {
        id: 'rq-2-2',
        questionEs: '¿Quién ofreció su ayuda a Narek desde el primer momento en el pupitre?',
        questionHy: 'Ո՞վ առաջարկեց իր օգնությունը Նարեկին առաջին իսկ րոպեից.',
        optionsEs: [
          'Lucía, su compañera de pupitre',
          'El conserje del instituto',
          'El profesor de Educación Física',
          'El director del centro'
        ],
        optionsHy: [
          'Լուսիան՝ նրա կողքի նստող դասընկերուհին',
          'Դպրոցի պահակը',
          'Ֆիզկուլտուրայի ուսուցիչը',
          'Դպրոցի տնօրենը'
        ],
        correctIndex: 0,
        explanationEs: 'Lucía le tendió la mano y le dijo que le preguntara cualquier palabra que no entendiera.',
        explanationHy: 'Լուսիան անմիջապես օգնեց նրան օրագրի և բառերի իմաստը բացատրելու հարցում։'
      },
      {
        id: 'rq-2-3',
        questionEs: '¿Qué deporte jugaron en el patio durante el recreo?',
        questionHy: 'Ի՞նչ սպորտաձև խաղացին դասամիջոցին դպրոցի բակում.',
        optionsEs: ['Baloncesto', 'Fútbol', 'Voleibol', 'Tenis de mesa'],
        optionsHy: ['Բասկետբոլ (Baloncesto)', 'Ֆուտբոլ', 'Վոլեյբոլ', 'Սեղանի թենիս'],
        correctIndex: 0,
        explanationEs: 'Los compañeros lo invitaron a jugar al baloncesto y encestó una canasta.',
        explanationHy: 'Նրանք բասկետբոլ խաղացին, և Նարեկը հիանալի նետում կատարեց դեպի զամբյուղը։'
      },
      {
        id: 'rq-2-4',
        questionEs: '¿Qué valor humano resalta especialmente el desenlace del relato?',
        questionHy: 'Մարդկային ո՞ր արժեքն է առանձնահատուկ ընդգծվում պատմության վերջում.',
        optionsEs: [
          'La acogida, la empatía y la fuerza de la amistad',
          'La rivalidad deportiva individualista',
          'La exigencia estricta de las normas',
          'La soledad en un país extranjero'
        ],
        optionsHy: [
          'Ջերմ ընդունելությունը, կարեկցանքը և ընկերության զորությունը',
          'Մրցակցությունը',
          'Խիստ կանոնները',
          'Մենակությունը'
        ],
        correctIndex: 0,
        explanationEs: 'El relato concluye destacando que el compañerismo supera cualquier barrera idiomática inicial.',
        explanationHy: 'Պատմությունը ցույց է տալիս, որ ընկերասիրությունը հաղթահարում է լեզվական ցանկացած արգելք։'
      }
    ]
  }
] as ReadingText[]).map(rt => ({
  ...rt,
  questions: rt.questions.map((q, idx) => shuffleMultipleChoiceQuestion(q, `${rt.id}-${idx}`))
}));
