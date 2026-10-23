import type { ExerciseItem, TestQuestion } from './types.ts';

export interface DetailedTheory {
  explanationEs: string[];
  explanationHy: string[];
  keyRulesEs: string[];
  keyRulesHy: string[];
  bilingualExamples: Array<{ es: string; hy: string; noteEs?: string; noteHy?: string }>;
  schoolExamples: Array<{
    situationEs: string;
    situationHy: string;
    dialogueEs: string;
    dialogueHy: string;
    explanationEs: string;
    explanationHy: string;
  }>;
  exercises?: ExerciseItem[];
  testQuestions?: TestQuestion[];
}

/**
 * Rich pedagogical knowledge-base for all 1.º ESO Spanish language syllabus topics.
 * Each entry provides in-depth bilingual theory, key examination rules, authentic school examples,
 * and realistic classroom dialogues for Armenian students in Spain.
 */
export const DETAILED_THEORIES: Record<string, DetailedTheory> = {
  // ==========================================
  // MÓDULO 1: LA COMUNICACIÓN
  // ==========================================
  'm1-1': {
    explanationEs: [
      'La comunicación es un proceso social fundamental mediante el cual un emisor transmite una información, un pensamiento o un sentimiento a un receptor a través de un canal determinado, empleando un código común.',
      'En el instituto (IES), la comunicación es continua y diversa: las explicaciones magistrales del profesorado, las consultas en la biblioteca, los debates en el aula y las conversaciones con compañeros en el patio durante el recreo.',
      'Para que la comunicación sea plenamente eficaz, todos los elementos del circuito deben funcionar sin interferencias (ruidos) y los interlocutores deben compartir el mismo código lingüístico o no verbal.'
    ],
    explanationHy: [
      'Հաղորդակցությունը հիմնարար սոցիալական գործընթաց է, որի միջոցով խոսողը (ուղարկող) տեղեկատվություն, միտք կամ զգացմունք է փոխանցում լսողին (ընդունող) որոշակի կապուղով և ընդհանուր լեզվական կոդով։',
      'Իսպանիայի միջնակարգ դպրոցում (IES) հաղորդակցությունն անդադար է՝ ուսուցչի բացատրությունները գրատախտակի մոտ, հարցերը գրադարանում, դասարանական քննարկումները և դասամիջոցի զրույցները ընկերների հետ։',
      'Որպեսզի հաղորդակցությունը հաջողվի, անհրաժեշտ է, որ կապուղին զերծ լինի խանգարող աղմուկից, իսկ մասնակիցները հասկանան նույն լեզուն կամ նշանները։'
    ],
    keyRulesEs: [
      'El acto comunicativo siempre requiere al menos un emisor y un receptor.',
      'El mensaje viaja por un canal físico tangible o intangible.',
      'El código (como el idioma español) debe ser conocido por ambas partes.'
    ],
    keyRulesHy: [
      'Հաղորդակցության համար միշտ անհրաժեշտ են ուղարկող (emisor) և ընդունող (receptor)։',
      'Հաղորդագրությունը փոխանցվում է ֆիզիկական կապուղով (օդ, թուղթ, էկրան)։',
      'Կոդը (օրինակ՝ իսպաներենը) պետք է ծանոթ լինի երկու կողմերին էլ։'
    ],
    bilingualExamples: [
      { es: 'La profesora explica el tema en la pizarra digital.', hy: 'Ուսուցչուհին բացատրում է թեման թվային գրատախտակին։', noteEs: 'Emisor: profesora; canal: luz/pantalla y aire.', noteHy: 'Ուղարկող՝ ուսուցչուհի, կապուղի՝ էկրան և ձայնային ալիքներ։' },
      { es: 'El delegado de clase lee el aviso de secretaría.', hy: 'Դասարանի ավագը կարդում է քարտուղարության հայտարարությունը։', noteEs: 'Canal escrito y posterior canal oral.', noteHy: 'Գրավոր և ապա բանավոր հաղորդակցություն։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Inicio de la clase de Lengua en 1.º de ESO',
        situationHy: 'Իսպաներենի դասի սկիզբը 1.º ESO-ում',
        dialogueEs: '—Profesora: "Abrid el libro por la página 18".\n—Alumno: "Perdón, ¿la página 18 o la 28?".\n—Profesora: "La página 18, ejercicio número dos".',
        dialogueHy: '—Ուսուցչուհի. «Բացեք գիրքը 18-րդ էջում»։\n—Աշակերտ. «Կներեք, 18-րդ, թե՞ 28-րդ էջում»։\n—Ուսուցչուհի. «18-րդ էջում, երկրորդ վարժությունը»։',
        explanationEs: 'El alumno pide aclaración al emisor para asegurar la correcta recepción del mensaje.',
        explanationHy: 'Աշակերտը ճշտում է հաղորդագրությունը, որպեսզի վերացնի աղմուկի կամ թյուրիմացության հետևանքը։'
      }
    ]
  },

  'm1-2': {
    explanationEs: [
      'Los elementos de la comunicación son seis componentes indispensables: emisor, receptor, mensaje, código, canal y contexto.',
      'El emisor elabora y transmite la información. El receptor la recibe y la descifra (descodifica). El mensaje es el contenido de ideas o datos transmitidos.',
      'El canal es el medio físico por donde viaja la información (el aire, el papel, una pantalla), el código es el conjunto de signos y reglas combinatorias (el idioma español), y el contexto o situación son las circunstancias espaciales, temporales y culturales que rodean el acto comunicativo.'
    ],
    explanationHy: [
      'Հաղորդակցության տարրերը վեցն են՝ ուղարկող (emisor), ընդունող (receptor), հաղորդագրություն (mensaje), կոդ (código), կապուղի (canal) և համատեքստ (contexto)։',
      'Ուղարկողը կազմում և արտաբերում է խոսքը։ Ընդունողը ստանում է և վերծանում այն։ Հաղորդագրությունը բուն տեղեկությունն է։',
      'Կապուղին այն ֆիզիկական միջավայրն է, որով անցնում է խոսքը (օդ, թուղթ, ցանց)։ Կոդը նշանների համակարգն է (լեզուն), իսկ համատեքստը՝ այն միջավայրը, որտեղ տեղի է ունենում հաղորդակցությունը։'
    ],
    keyRulesEs: [
      'Los 6 elementos deben estar presentes en cualquier acto comunicativo completo.',
      'El contexto escolar determina el significado concreto de muchos enunciados.',
      'La interferencia en el canal se denomina "ruido" y la repetición aclaratoria "redundancia".'
    ],
    keyRulesHy: [
      'Այս 6 տարրերը առկա են յուրաքանչյուր ամբողջական հաղորդակցության մեջ։',
      'Դպրոցական միջավայրն ու համատեքստը որոշում են բառերի ճիշտ իմաստը։',
      'Կապուղու խանգարումը կոչվում է «աղմուկ» (ruido), իսկ կրկնվող հստակեցումը՝ «ավելորդություն/ամրապնդում» (redundancia)։'
    ],
    bilingualExamples: [
      { es: 'Lucía escribe un mensaje en el cuaderno para su compañera.', hy: 'Լուսիան տետրում հաղորդագրություն է գրում ընկերուհու համար։', noteEs: 'Emisor: Lucía; Canal: hoja de papel; Código: castellano escrito.', noteHy: 'Ուղարկող՝ Լուսիա, Կապուղի՝ թուղթ, Կոդ՝ գրավոր իսպաներեն։' },
      { es: 'El timbre suena a las dos de la tarde en el centro escolar.', hy: 'Զանգը հնչում է ցերեկվա ժամը 2-ին դպրոցում։', noteEs: 'Código acústico no verbal; Mensaje: "fin de la jornada escolar".', noteHy: 'Ոչ խոսքային ձայնային կոդ. իմաստը՝ «դասերի ավարտ»։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Análisis de una situación en clase de Lengua',
        situationHy: 'Իրավիճակի վերլուծություն իսպաներենի դասին',
        dialogueEs: '—Profesor: "Si el conserje enciende el megáfono y dice: \'Los alumnos de 1.º B deben bajar al patio\', ¿cuál es el canal?".\n—Elena: "Las ondas sonoras a través del aire y la megafonía del instituto".\n—Profesor: "¡Correcto, Elena!".',
        dialogueHy: '—Ուսուցիչ. «Եթե դպրոցի աշխատակիցը բարձրախոսով ասում է. \'1.º B-ի աշակերտները պետք է իջնեն բակ\', ո՞րն է կապուղին»։\n—Ելենա. «Ձայնային ալիքները օդով և դպրոցի բարձրախոսային համակարգը»։\n—Ուսուցիչ. «Ճիշտ է, Ելենա՛»։',
        explanationEs: 'Se identifica el canal técnico y físico por el que viaja la voz humana amplificada.',
        explanationHy: 'Որոշվում է տեխնիկական և ֆիզիկական կապուղին, որով հաղորդվում է մարդկային ձայնը։'
      }
    ]
  },

  'm1-9': {
    explanationEs: [
      'La comunicación verbal es aquella que utiliza la palabra, ya sea hablada (oral) o escrita mediante letras y signos ortográficos.',
      'Es exclusiva de los seres humanos y permite transmitir conceptos abstractos, razonamientos complejos, normas del instituto y relatos imaginarios.',
      'En 1.º de ESO, los estudiantes practican la comunicación verbal continuamente al responder en clase, redactar exámenes o leer libros de lectura obligatoria.'
    ],
    explanationHy: [
      'Խոսքային (վերբալ) հաղորդակցությունը բառերի միջոցով իրականացվող հաղորդակցությունն է՝ բանավոր (խոսակցական) կամ գրավոր (տառերով և կետադրական նշաններով)։',
      'Այն բնորոշ է միայն մարդկանց և թույլ է տալիս փոխանցել վերացական գաղափարներ, բարդ դատողություններ, դպրոցական կանոններ և պատմվածքներ։',
      '1.º ESO-ում աշակերտները ամեն օր կիրառում են խոսքային հաղորդակցությունը՝ պատասխանելով դասերին, գրելով թեստեր և կարդալով գրքեր։'
    ],
    keyRulesEs: [
      'Utiliza siempre palabras como signos lingüísticos estructurados.',
      'Tiene dos modalidades fundamentales: oral (inmediata) y escrita (reflexiva).',
      'Requiere corrección gramatical y ortográfica en el entorno académico.'
    ],
    keyRulesHy: [
      'Միշտ օգտագործում է բառեր որպես լեզվական նշաններ։',
      'Ունի երկու ձև՝ բանավոր (անմիջական) և գրավոր (խորհրդածված)։',
      'Դպրոցական միջավայրում պահանջում է քերականական և ուղղագրական ճշգրտություն։'
    ],
    bilingualExamples: [
      { es: 'El profesor dicta los ejercicios del cuaderno.', hy: 'Ուսուցիչը թելադրում է տետրի վարժությունները։', noteEs: 'Comunicación verbal oral a escrita.', noteHy: 'Բանավոր խոսքից անցում գրավորի։' }
    ],
    schoolExamples: [
      {
        situationEs: 'En el aula de 1.º de ESO',
        situationHy: '1.º de ESO դասարանում',
        dialogueEs: '—Profesor: "¿Quién recuerda la diferencia entre comunicación verbal y no verbal?".\n—Marta: "La verbal usa palabras dichas o escritas; la no verbal usa gestos, luces o sonidos".',
        dialogueHy: '—Ուսուցիչ. «Ո՞վ է հիշում խոսքային և ոչ խոսքային հաղորդակցության տարբերությունը»։\n—Մարթա. «Խոսքայինն օգտագործում է բառեր, իսկ ոչ խոսքայինը՝ ժեստեր, լույսեր կամ ազդանշաններ»։',
        explanationEs: 'La alumna sintetiza la distinción nuclear del tema.',
        explanationHy: 'Աշակերտուհին հստակ սահմանում է թեմայի հիմնական տարբերությունը։'
      }
    ]
  },

  'm1-10': {
    explanationEs: [
      'La comunicación no verbal es la que se realiza sin palabras: mediante gestos, miradas, posturas corporales, sonidos, luces y colores.',
      'En el ámbito escolar tiene enorme importancia: levantar la mano para pedir la palabra, el sonido del timbre de entrada, el color rojo del semáforo en el cruce del instituto o el pulgar hacia arriba que indica aprobación.',
      'Los elementos cinésicos (movimientos y gestos), proxémicos (distancia entre hablantes) y paralingüísticos (tono y volumen de voz) modulan el mensaje.'
    ],
    explanationHy: [
      'Ոչ խոսքային (ոչ վերբալ) հաղորդակցությունը տեղի է ունենում առանց բառերի՝ ժեստերի, հայացքի, մարմնի շարժումների, ձայների, լույսերի և գույների միջոցով։',
      'Դպրոցական կյանքում այն շատ կարևոր է՝ ձեռք բարձրացնել դասին պատասխանելու համար, դասամիջոցի զանգի ձայնը, լուսացույցի կարմիր լույսը դպրոցի մոտ կամ բթամատը վեր պարզելը (հավանություն)։',
      'Ժեստերը (cinésica), տարածական հեռավորությունը (proxémica) և ձայնի տոնն ու բարձրությունը (paralenguaje) ուժեղացնում կամ փոխում են խոսքի իմաստը։'
    ],
    keyRulesEs: [
      'No emplea palabras, sino signos visuales, acústicos, táctiles o gestuales.',
      'Acompaña y refuerza a la comunicación verbal en la conversación cara a cara.',
      'Los gestos y símbolos dependen a menudo de la cultura social.'
    ],
    keyRulesHy: [
      'Չի օգտագործում բառեր, այլ տեսողական, ձայնային կամ շարժողական նշաններ։',
      'Ուղեկցում և լրացնում է բանավոր խոսքին առերես զրույցի ժամանակ։',
      'Ժեստերն ու նշանները հաճախ պայմանավորված են տվյալ մշակույթով։'
    ],
    bilingualExamples: [
      { es: 'La profesora frunce el ceño y pide silencio con el dedo en los labios.', hy: 'Ուսուցչուհին խոժոռում է հոնքերը և մատը շուրթերին դնելով լռություն է խնդրում։', noteEs: 'Gesto y expresión facial no verbal.', noteHy: 'Ոչ խոսքային դիմախաղ և ժեստ։' }
    ],
    schoolExamples: [
      {
        situationEs: 'En el pasillo del instituto',
        situationHy: 'Դպրոցի միջանցքում',
        dialogueEs: '—Javier le hace una señal con la mano a David para que se acerque.\n—David asiente con la cabeza y camina hacia él con una sonrisa.',
        dialogueHy: '—Խավիերը ձեռքով նշան է անում Դավիթին, որ մոտենա։\n—Դավիթը գլխով համաձայնության նշան է անում և ժպտալով մոտենում է նրան։',
        explanationEs: 'Toda la interacción se realiza con éxito exclusivamente mediante comunicación no verbal.',
        explanationHy: 'Ամբողջ հաղորդակցությունը հաջողությամբ կատարվում է բացառապես ոչ խոսքային միջոցներով։'
      }
    ]
  },

  'm1-14': {
    explanationEs: [
      'Las funciones del lenguaje son los distintos objetivos o intenciones con los que un emisor utiliza la lengua. Fueron clasificadas por el lingüista Roman Jakobson en relación con cada elemento de la comunicación.',
      'Cada una de las seis funciones se centra en un elemento específico: referencial (contexto/información objetiva), expresiva (emisor y sus sentimientos), apelativa (receptor y sus acciones), fática (canal), metalingüística (código) y poética (mensaje y su forma estética).',
      'En un mismo texto o conversación pueden coexistir varias funciones, pero casi siempre hay una función predominante o principal.'
    ],
    explanationHy: [
      'Լեզվի գործառույթները (Funciones del lenguaje) այն նպատակներն ու մտադրություններն են, որոնցով մարդն օգտագործում է լեզուն։ Դրանք համակարգվել են լեզվաբան Ռոման Յակոբսոնի կողմից։',
      'Վեց գործառույթներից յուրաքանչյուրը կապված է հաղորդակցության որոշակի տարրի հետ՝ տեղեկատվական (referencial՝ համատեքստ), զգացմունքային (expresiva՝ ուղարկող), դիմողական/ներգործող (apelativa՝ ընդունող), կապը ստուգող (fática՝ կապուղի), մետալեզվական (metalingüística՝ կոդ) և գեղարվեստական (poética՝ հաղորդագրության ձև)։',
      'Մեկ նախադասության մեջ կարող են համադրվել մի քանի գործառույթներ, սակայն դրանցից մեկը միշտ գերիշխող է։'
    ],
    keyRulesEs: [
      'Son seis funciones teóricas indispensables en los exámenes de 1.º de ESO.',
      'Cada función se relaciona directamente con uno de los 6 elementos comunicativos.',
      'Identificar la intención del hablante es la clave para reconocer la función.'
    ],
    keyRulesHy: [
      'Վեց հիմնական գործառույթներ են, որոնք պարտադիր են 1.º ESO-ի քննություններում։',
      'Յուրաքանչյուր գործառույթ ուղիղ կապված է հաղորդակցության 6 տարրերից մեկի հետ։',
      'Խոսողի նպատակը հասկանալը թույլ է տալիս ճիշտ որոշել գործառույթը։'
    ],
    bilingualExamples: [
      { es: '¡Qué examen tan difícil! (expresiva) vs. Abrid el libro (apelativa).', hy: '«Ինչպիսի՜ բարդ քննություն» (զգացմունքային) ընդդեմ «Բացեք գիրքը» (հրամայական/դիմողական)։', noteEs: 'Contraste entre función emotiva y apelativa.', noteHy: 'Զգացմունքային և հրամայական գործառույթների համեմատություն։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Repaso para el examen trimestral en el aula',
        situationHy: 'Եռամսյակային քննության կրկնություն դասարանում',
        dialogueEs: '—Profesora: "Si digo: \'Mañana no hay clase por fiesta local\', ¿qué función predomina?".\n—Sara: "La función referencial, porque transmite un dato objetivo y real".\n—Profesora: "¡Excelente razonamiento!".',
        dialogueHy: '—Ուսուցչուհի. «Եթե ասում եմ. \'Վաղը դաս չկա տոնի պատճառով\', ո՞ր գործառույթն է գերիշխում»։\n—Սառա. «Տեղեկատվական գործառույթը (referencial), որովհետև փաստացի օբյեկտիվ տեղեկություն է հաղորդում»։\n—Ուսուցչուհի. «Հիանալի՛ պատասխան»։',
        explanationEs: 'Se vincula el mensaje objetivo con la función representativa o referencial.',
        explanationHy: 'Օբյեկտիվ տեղեկությունը կապվում է տեղեկատվական (referencial) գործառույթի հետ։'
      }
    ]
  },

  // ==========================================
  // MÓDULO 2: TIPOS DE TEXTOS
  // ==========================================
  'm2-1': {
    explanationEs: [
      'El texto narrativo relata una sucesión de acontecimientos reales o ficticios protagonizados por personajes en un tiempo y un espacio determinados.',
      'Su estructura prototípica consta de tres partes: planteamiento (presentación de personajes y situación inicial), nudo (conflicto o problema central) y desenlace (resolución final de la historia).',
      'En 1.º de ESO es fundamental identificar la voz del narrador (en primera persona como protagonista o testigo, o en tercera persona omnisciente u objetiva) y el empleo de verbos de acción en tiempos de pasado (pretérito perfecto simple e imperfecto).'
    ],
    explanationHy: [
      'Պատմողական տեքստը (Texto narrativo) ներկայացնում է իրական կամ հորինված իրադարձությունների շղթա, որոնք կատարվում են հերոսների հետ որոշակի ժամանակում և վայրում։',
      'Ունի եռամաս դասական կառուցվածք՝ սկիզբ/ներածություն (planteamiento՝ հերոսների և իրավիճակի ծանոթացում), հանգույց (nudo՝ գլխավոր հակամարտություն կամ արկած) և հանգուցալուծում (desenlace՝ պատմության ավարտ)։',
      '1.º ESO-ում կարևոր է որոշել պատմողի դեմքը (առաջին դեմքով որպես ականատես կամ գլխավոր հերոս, կամ երրորդ դեմքով՝ ամենագետ) և անցյալ ժամանակի բայերի գործածությունը։'
    ],
    keyRulesEs: [
      'Estructura básica: planteamiento, nudo y desenlace.',
      'Presencia indispensable de narrador, personajes, tiempo y espacio.',
      'Uso predominante de verbos en pretérito perfecto simple y pretérito imperfecto.'
    ],
    keyRulesHy: [
      'Հիմնական կառուցվածք՝ սկիզբ, հանգույց և հանգուցալուծում։',
      'Պարտադիր տարրեր՝ պատմող, հերոսներ, ժամանակ և վայր։',
      'Անցյալ կատարյալ և անկատար ժամանակաձևերի գործածություն։'
    ],
    bilingualExamples: [
      { es: 'El primer día de curso, Pablo llegó tarde al instituto porque perdió el autobús.', hy: 'Դասերի առաջին օրը Պաբլոն ուշացավ դպրոցից, որովհետև բաց թողեց ավտոբուսը։', noteEs: 'Inicio narrativo con planteamiento y nudo.', noteHy: 'Պատմողական սկիզբ՝ իրավիճակով և առաջին խնդրով։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Taller de escritura de relatos en 1.º ESO',
        situationHy: 'Պատմվածքի շարադրության դաս 1.º ESO-ում',
        dialogueEs: '—Profesor: "¿Cómo estructuráis el relato para la revista escolar?".\n—Lucas: "Primero presento a los dos amigos en el laboratorio, luego ocurre la explosión accidental y al final el conserje los ayuda a limpiar".\n—Profesor: "Planteamiento, nudo y desenlace perfectos".',
        dialogueHy: '—Ուսուցիչ. «Ինչպե՞ս եք կառուցելու պատմվածքը դպրոցական ամսագրի համար»։\n—Լուկաս. «Նախ կներկայացնեմ երկու ընկերներին լաբորատորիայում, ապա պատահական պայթյունը, իսկ վերջում՝ թե ինչպես պահակն օգնեց մաքրել»։\n—Ուսուցիչ. «Հիանալի է՝ սկիզբ, հանգույց և հանգուցալուծում»։',
        explanationEs: 'Se aplica la estructura canónica del texto narrativo.',
        explanationHy: 'Կիրառվում է պատմողական տեքստի դասական եռամաս կառուցվածքը։'
      }
    ]
  },

  'm2-2': {
    explanationEs: [
      'El texto descriptivo explica con detalle cómo son las personas, animales, objetos, lugares o situaciones, señalando sus rasgos característicos y cualidades.',
      'Puede ser una descripción objetiva (científica o técnica, sin valoraciones personales) o subjetiva (literaria o emotiva, con opiniones y metáforas del autor).',
      'Los elementos lingüísticos predominantes son los sustantivos y, muy especialmente, los adjetivos calificativos, junto con verbos copulativos (ser, estar, parecer).'
    ],
    explanationHy: [
      'Նկարագրական տեքստը (Texto descriptivo) մանրամասն ներկայացնում է, թե ինչպիսին են մարդիկ, կենդանիները, առարկաները, վայրերը կամ իրավիճակները՝ նշելով դրանց հատկանիշներն ու որակները։',
      'Կարող է լինել օբյեկտիվ (գիտական կամ տեխնիկական, առանց անձնական կարծիքի) կամ սուբյեկտիվ (գեղարվեստական կամ հուզական, հեղինակի տպավորություններով)։',
      'Հիմնական լեզվական միջոցներն են գոյականներն ու հատկապես որակական ածականները, ինչպես նաև ser, estar, parecer բայերը։'
    ],
    keyRulesEs: [
      'Predominio de adjetivos calificativos y sustantivos descriptivos.',
      'Estructura que suele avanzar de lo general a los detalles concretos.',
      'Diferenciación nítida entre descripción objetiva y subjetiva.'
    ],
    keyRulesHy: [
      'Որակական ածականների և նկարագրական գոյականների գերակայություն։',
      'Կառուցվածք՝ ընդհանուրից դեպի առանձին մանրամասները։',
      'Հստակ տարբերակում օբյեկտիվ և սուբյեկտիվ նկարագրությունների միջև։'
    ],
    bilingualExamples: [
      { es: 'El aula de 1.º B es amplia, luminosa y tiene tres grandes ventanas.', hy: '1.º B դասարանը ընդարձակ է, լուսավոր և ունի երեք մեծ պատուհան։', noteEs: 'Descripción objetiva de un espacio escolar.', noteHy: 'Դպրոցական տարածքի օբյեկտիվ նկարագրություն։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Clase de descripción de personajes en el instituto',
        situationHy: 'Կերպարի նկարագրության դաս միջնակարգ դպրոցում',
        dialogueEs: '—Profesora: "¿Qué adjetivos usáis para describir a Don Quijote?".\n—Alumno: "Era alto, delgado, de rostro enjuto y mirada soñadora".\n—Profesora: "Muy bien, combináis rasgos físicos con psicológicos".',
        dialogueHy: '—Ուսուցչուհի. «Ի՞նչ ածականներ եք օգտագործում Դոն Կիխոտին նկարագրելու համար»։\n—Աշակերտ. «Նա բարձրահասակ էր, նիհար, չոր դեմքով և երազկոտ հայացքով»։\n—Ուսուցչուհի. «Շատ լավ է՝ միավորեցիք ֆիզիկական և հոգեբանական գծերը»։',
        explanationEs: 'Se practica la prosopografía (físico) y la etopeya (carácter) en la descripción.',
        explanationHy: 'Կիրառվում են արտաքին (պրոսոպոգրաֆիա) և բնավորության (էթոպեա) նկարագրության հնարքները։'
      }
    ]
  },

  // ==========================================
  // MÓDULO 3: GRAMÁTICA
  // ==========================================
  'm3-2': {
    explanationEs: [
      'Los sustantivos (o nombres) son palabras variables que designan personas, animales, cosas reales o imaginarias, lugares, sentimientos y conceptos.',
      'Tienen género intrínseco (masculino o femenino: el libro / la libreta) y número (singular o plural: el lápiz / los lápices), y concuerdan con los determinantes y adjetivos que los acompañan.',
      'Sintácticamente, el sustantivo funciona como núcleo del sintagma nominal y núcleo del sujeto en la oración.'
    ],
    explanationHy: [
      'Գոյականները (Sustantivos կամ Nombres) փոփոխական խոսքի մաս են, որոնք անվանում են մարդկանց, կենդանիներին, իրական կամ երևակայական իրերը, վայրերը, զգացմունքներն ու հասկացությունները։',
      'Իսպաներենում ունեն քերականական սեռ (արական կամ իգական՝ el libro / la libreta) և թիվ (եզակի կամ հոգնակի՝ el lápiz / los lápices) և համաձայնում են իրենց ուղեկցող հոդերի ու ածականների հետ։',
      'Շարահյուսորեն գոյականը հանդես է գալիս որպես անվանական բառակապակցության և նախադասության ենթակայի գլխավոր անդամ (Núcleo)։'
    ],
    keyRulesEs: [
      'Todo sustantivo posee género fijo (masculino o femenino).',
      'Forma el plural habitualmente añadiendo -s (si acaba en vocal) o -es (si acaba en consonante).',
      'Es el núcleo obligado del sintagma nominal.'
    ],
    keyRulesHy: [
      'Յուրաքանչյուր գոյական ունի հաստատուն քերականական սեռ (արական կամ իգական)։',
      'Հոգնակին կազմվում է ձայնավորից հետո -s, իսկ բաղաձայնից հետո -es ավելացնելով։',
      'Անվանական խմբի և ենթակայի անփոխարինելի գլխավոր անդամն է։'
    ],
    bilingualExamples: [
      { es: 'Los alumnos guardan los libros en sus mochilas.', hy: 'Աշակերտները պահում են գրքերը իրենց պայուսակներում։', noteEs: 'Sustantivos: alumnos, libros, mochilas.', noteHy: 'Գոյականներ՝ alumnos (աշակերտներ), libros (գրքեր), mochilas (պայուսակներ)։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Clase de morfología en el IES',
        situationHy: 'Ձևաբանության դաս միջնակարգ դպրոցում',
        dialogueEs: '—Profesora: "¿Qué diferencia al sustantivo \'Madrid\' del sustantivo \'ciudad\'?".\n—Alumno: "\'Madrid\' es un sustantivo propio y se escribe con mayúscula; \'ciudad\' es común".\n—Profesora: "Perfecto".',
        dialogueHy: '—Ուսուցչուհի. «Ինչո՞վ է տարբերվում \'Madrid\' գոյականը \'ciudad\' (քաղաք) գոյականից»։\n—Աշակերտ. «\'Madrid\'-ը հատուկ անուն է և գրվում է մեծատառով, իսկ \'ciudad\'-ը հասարակ անուն է»։\n—Ուսուցչուհի. «Հիանալի է»։',
        explanationEs: 'Se distingue entre sustantivos propios (individualizadores) y comunes.',
        explanationHy: 'Տարբերակվում են հատուկ և հասարակ գոյականները։'
      }
    ]
  },

  'm3-7': {
    explanationEs: [
      'Los adjetivos calificativos son palabras variables que acompañan al sustantivo para expresar una cualidad, estado o característica del mismo.',
      'Concuerdan obligatoriamente en género y número con el sustantivo al que modifican (por ejemplo: chico simpático, chicas simpáticas, examen difícil, pruebas difíciles).',
      'Pueden tener función especificativa (limitan el significado del sustantivo: "el alumno aplicado aprobó") o explicativa/epíteto (destacan una cualidad intrínseca: "la blanca nieve").'
    ],
    explanationHy: [
      'Որակական ածականները (Adjetivos calificativos) փոփոխական խոսքի մաս են, որոնք դրվում են գոյականի հետ՝ արտահայտելու նրա որակը, վիճակը կամ հատկանիշը։',
      'Իսպաներենում դրանք ՊԱՐՏԱԴԻՐ համաձայնում են գոյականի հետ սեռով և թվով (օրինակ՝ chico simpático / chicas simpáticas / examen difícil / pruebas difíciles)։',
      'Կարող են լինել որոշիչ/սահմանափակող (տարբերակում են տվյալ առարկան մյուսներից) կամ բացատրական/մակդիր (ընդգծում են բնորոշ գիծը)։'
    ],
    keyRulesEs: [
      'Concordancia estricta en género y número con el sustantivo.',
      'Si el adjetivo termina en -e o consonante suele ser de una sola terminación para ambos géneros (inteligente, veloz).',
      'Posee tres grados: positivo, comparativo y superlativo.'
    ],
    keyRulesHy: [
      'Խիստ համաձայնություն սեռով և թվով գոյականի հետ։',
      'Եթե ածականն ավարտվում է -e-ով կամ բաղաձայնով, սովորաբար ունի նույն ձևը երկու սեռերի համար էլ (inteligente, difícil)։',
      'Ունի համեմատության երեք աստիճան՝ դրական, բաղդատական և գերադրական։'
    ],
    bilingualExamples: [
      { es: 'Nuestra profesora de Matemáticas es muy paciente y comprensiva.', hy: 'Մաթեմատիկայի մեր ուսուցչուհին շատ համբերատար է և ըմբռնող։', noteEs: 'Adjetivos en femenino singular concordando con "profesora".', noteHy: 'Իգական եզակի թվով ածականներ՝ համաձայնեցված "profesora" գոյականի հետ։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Corrección de una redacción escolar',
        situationHy: 'Դպրոցական շարադրության ստուգում',
        dialogueEs: '—Profesora: "Marcos, en tu frase \'las mochilas nuevo\' hay un error de concordancia".\n—Marcos: "Es verdad, debe ser \'las mochilas nuevas\', en femenino plural".',
        dialogueHy: '—Ուսուցչուհի. «Մարկոս, քո \'las mochilas nuevo\' նախադասության մեջ համաձայնության սխալ կա»։\n—Մարկոս. «Ճիշտ է, պետք է լինի \'las mochilas nuevas\'՝ իգական հոգնակի թվով»։',
        explanationEs: 'Se aplica la regla fundamental de concordancia entre sustantivo y adjetivo.',
        explanationHy: 'Կիրառվում է գոյականի և ածականի սեռաթվային համաձայնության հիմնարար կանոնը։'
      }
    ]
  },

  'm3-17': {
    explanationEs: [
      'El verbo es la clase de palabra variable más importante de la oración; expresa acciones, estados, procesos o existencia situados en un tiempo determinado.',
      'Consta de dos partes: la raíz o lexema (que aporta el significado básico) y las desinencias verbales (que indican persona, número, tiempo, aspecto y modo).',
      'En español existen tres conjugaciones según la terminación del infinitivo: 1.ª conjugación (-ar, como hablar), 2.ª conjugación (-er, como comer) y 3.ª conjugación (-ir, como vivir).'
    ],
    explanationHy: [
      'Բայը (Verbo) նախադասության ամենակարևոր խոսքի մասն է. այն արտահայտում է գործողություն, վիճակ, գործընթաց կամ գոյություն որոշակի ժամանակում։',
      'Բաղկացած է երկու մասից՝ արմատից (raíz/lexema՝ բառի հիմնական իմաստը) և վերջավորությունից (desinencia՝ ցույց է տալիս դեմքը, թիվը, ժամանակը և եղանակը)։',
      'Իսպաներենում կա խոնարհման երեք տեսակ՝ 1-ին խոնարհում (-ar՝ cantar, hablar), 2-րդ խոնարհում (-er՝ comer, leer) և 3-րդ խոնարհում (-ir՝ vivir, escribir)։'
    ],
    keyRulesEs: [
      'El verbo conjugado es el núcleo imprescindible del predicado.',
      'Concuerda siempre en persona y número con el sujeto.',
      'Distingue formas personales (conjugadas) y formas no personales (infinitivo, gerundio, participio).'
    ],
    keyRulesHy: [
      'Խոնարհված բայը ստորոգյալի պարտադիր գլխավոր անդամն է։',
      'Միշտ համաձայնում է ենթակայի հետ դեմքով և թվով։',
      'Ունի դիմավոր ձևեր (խոնարհված) և անդեմ ձևեր (անորոշ, գերունդիում, հարակատար դերբայ)։'
    ],
    bilingualExamples: [
      { es: 'Nosotros estudiamos en la biblioteca durante el recreo.', hy: 'Մենք սովորում ենք գրադարանում դասամիջոցի ժամանակ։', noteEs: 'Verbo: estudiamos (1.ª persona plural, presente de indicativo).', noteHy: 'Բայ՝ estudiamos (1-ին դեմք հոգնակի, սահմանական ներկա)։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Pizarra de clase de 1.º ESO',
        situationHy: 'Գրատախտակը 1.º ESO դասարանում',
        dialogueEs: '—Profesor: "Separad la raíz y la desinencia del verbo \'cantábamos\'".\n—Laura: "\'Cant-\' es la raíz y \'-ábamos\' es la desinencia de pretérito imperfecto, 1.ª persona del plural".\n—Profesor: "¡Exacto!".',
        dialogueHy: '—Ուսուցիչ. «Առանձնացրեք \'cantábamos\' բայի արմատն ու վերջավորությունը»։\n—Լաուրա. «\'Cant-\'-ը արմատն է, իսկ \'-ábamos\'-ը անկատար անցյալի 1-ին դեմք հոգնակի թվի վերջավորությունը»։\n—Ուսուցիչ. «Ճիշտ այդպես»։',
        explanationEs: 'Análisis morfológico de la estructura interna del verbo español.',
        explanationHy: 'Իսպաներեն բայի կառուցվածքի ձևաբանական վերլուծություն։'
      }
    ]
  },

  // ==========================================
  // MÓDULO 4: SINTAXIS
  // ==========================================
  'm4-3': {
    explanationEs: [
      'El sujeto es la persona, animal, cosa o concepto que realiza la acción del verbo o de quien se predica algo en la oración.',
      'REGLA DE ORO DE LA SINTAXIS EN 1.º ESO: El sujeto siempre concuerda en persona y número con el verbo. Para identificarlo con seguridad científica, cambia el número del verbo (de singular a plural o viceversa): la parte de la oración que cambie obligatoriamente será el sujeto.',
      'Ejemplo demostrativo: En "Me gusta la tarta de chocolate", al cambiar el verbo a plural ("Me gustan las tartas"), vemos que lo que cambia es "la tarta", por lo que "la tarta de chocolate" es el sujeto (¡nunca "a mí" ni "me"!).'
    ],
    explanationHy: [
      'Ենթական (Sujeto) այն անձն է, կենդանին, առարկան կամ հասկացությունը, որը կատարում է գործողությունը կամ որի մասին խոսվում է նախադասության մեջ։',
      '1.º ESO-Ի ՇԱՐԱՀՅՈՒՍՈՒԹՅԱՆ ՈՍԿԻ ԿԱՆՈՆԸ. Ենթական ՄԻՇՏ համաձայնում է բայի հետ դեմքով և թվով։ Այն անվրեպ գտնելու համար փոխիր բայի թիվը (եզակիից հոգնակի կամ հակառակը)՝ այն հատվածը, որը պարտադիր պետք է փոխվի, ԵՆԹԱԿԱՆ Է։',
      'Ակնառու օրինակ. «Me gusta la tarta» նախադասության մեջ, երբ բայը դարձնում ենք հոգնակի («Me gustan las tartas»), տեսնում ենք, որ փոխվում է «la tarta»-ն, ուստի հենց դա էլ ենթական է (ոչ թե «me»-ն)։'
    ],
    keyRulesEs: [
      'El sujeto concuerda ineludiblemente en número y persona con el núcleo verbal.',
      'Nunca empieza por preposición (salvo casos raros con "hasta" o "entre").',
      'Puede ser expreso (escrito) u omitido/elíptico (deducido por la desinencia).'
    ],
    keyRulesHy: [
      'Ենթական անխուսափելիորեն համաձայնում է բայի հետ թվով և դեմքով։',
      'Երբեք չի սկսվում նախդիրով (օրինակ՝ "a mí"-ն երբեք ենթակա չէ)։',
      'Կարող է լինել արտահայտված (նշված) կամ զեղչված (հասկացվող բայի վերջավորությունից)։'
    ],
    bilingualExamples: [
      { es: 'Los estudiantes de primero preparan la maqueta de Ciencias.', hy: 'Առաջին դասարանի աշակերտները պատրաստում են բնագիտության մակետը։', noteEs: 'Sujeto: "Los estudiantes de primero"; Núcleo: "estudiantes".', noteHy: 'Ենթակա՝ "Los estudiantes de primero", գլխավոր անդամ՝ "estudiantes"։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Análisis sintáctico en la pizarra del aula',
        situationHy: 'Շարահյուսական վերլուծություն դասարանի գրատախտակին',
        dialogueEs: '—Profesor: "En la oración \'Llegaron tarde los autobuses\', ¿cuál es el sujeto?".\n—Marta: "\'Los autobuses\', porque si pongo el verbo en singular (\'llegó\'), digo \'llegó tarde el autobús\'".\n—Profesor: "¡Excelente prueba de concordancia!".',
        dialogueHy: '—Ուսուցիչ. «\'Llegaron tarde los autobuses\' նախադասության մեջ ո՞րն է ենթական»։\n—Մարթա. «\'Los autobuses\'-ը, որովհետև եթե բայը դարձնեմ եզակի (\'llegó\'), կասենք \'llegó tarde el autobús\'»։\n—Ուսուցիչ. «Հիանալի՛ ստուգեցիր համաձայնության կանոնով»։',
        explanationEs: 'Se utiliza la prueba de la concordancia para evitar errores de posición.',
        explanationHy: 'Կիրառվում է համաձայնության փորձարկումը՝ նախադասության դիրքային թյուրիմացություններից խուսափելու համար։'
      }
    ]
  },

  'm4-4': {
    explanationEs: [
      'El predicado es todo aquello que se dice o predica sobre el sujeto en la oración. Su núcleo es siempre un verbo en forma personal.',
      'Se divide en dos grandes tipos: Predicado Nominal (con verbos copulativos: ser, estar y parecer, acompañados obligatoriamente de un Atributo) y Predicado Verbal (con verbos predicativos que expresan acciones o procesos, acompañados de complementos como directo, indirecto o circunstanciales).',
      'Para delimitar el predicado, primero se localiza el verbo y el sujeto; todo lo restante que forme unidad con el verbo forma parte del predicado.'
    ],
    explanationHy: [
      'Ստորոգյալը (Predicado) այն ամենն է, ինչ ասվում կամ վերագրվում է ենթակային նախադասության մեջ։ Դրա գլխավոր անդամը միշտ դիմավոր բայն է։',
      'Բաժանվում է երկու մեծ խմբի՝ Անվանական ստորոգյալ (Predicado Nominal՝ ser, estar, parecer օժանդակ բայերով + Atributo ստորոգելիով) և Բայական ստորոգյալ (Predicado Verbal՝ բոլոր մնացած իմաստալից բայերով)։',
      'Ստորոգյալը գտնելու համար նախ որոշում ենք բայն ու ենթական. այն ամենը, ինչ մնում է և կապված է բայի հետ, կազմում է ստորոգյալը։'
    ],
    keyRulesEs: [
      'El núcleo del predicado es siempre un verbo conjugado.',
      'Predicado Nominal = Verbo copulativo (ser, estar, parecer) + Atributo.',
      'Predicado Verbal = Verbo predicativo + Complementos.'
    ],
    keyRulesHy: [
      'Ստորոգյալի գլխավոր անդամը միշտ խոնարհված բայն է։',
      'Անվանական ստորոգյալ = ser, estar, parecer բայեր + Atributo։',
      'Բայական ստորոգյալ = Գործողություն արտահայտող բայ + Լրացումներ։'
    ],
    bilingualExamples: [
      { es: 'Mi hermano pequeño parece cansado después del entrenamiento.', hy: 'Իմ փոքր եղբայրը հոգնած է թվում մարզումից հետո։', noteEs: 'Predicado nominal: "parece cansado después del entrenamiento" (núcleo copulativo "parece", atributo "cansado").', noteHy: 'Անվանական ստորոգյալ՝ "parece cansado..." (բայ՝ parece, ատրիբուտ՝ cansado)։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Identificación del tipo de predicado',
        situationHy: 'Ստորոգյալի տեսակի որոշում',
        dialogueEs: '—Profesor: "¿Qué tipo de predicado tiene \'El examen de Lengua fue difícil\'?".\n—Alumno: "Predicado nominal, porque el verbo \'fue\' es copulativo (del verbo ser) y \'difícil\' es el atributo".\n—Profesor: "¡Correctísimo!".',
        dialogueHy: '—Ուսուցիչ. «Ի՞նչ տեսակի ստորոգյալ ունի \'El examen de Lengua fue difícil\' նախադասությունը»։\n—Աշակերտ. «Անվանական ստորոգյալ, որովհետև \'fue\'-ն կապակցող բայ է (ser բայից), իսկ \'difícil\'-ը ատրիբուտն է»։\n—Ուսուցիչ. «Կատարյալ է»։',
        explanationEs: 'Reconocimiento del atributo con verbos copulativos.',
        explanationHy: 'Օժանդակ/կապակցող բայերի և ստորոգյալի անվանական մասի (ատրիբուտի) ճանաչում։'
      }
    ]
  },

  // ==========================================
  // MÓDULO 6: ORTOGRAFÍA
  // ==========================================
  'm6-4': {
    explanationEs: [
      'Las palabras agudas son aquellas cuya sílaba tónica (la que se pronuncia con mayor intensidad o fuerza espiratoria) es la ÚLTIMA sílaba.',
      'REGLA FUNDAMENTAL DE LA TILDE EN AGUDAS: Llevan tilde (acento gráfico) cuando terminan en VOCAL (a, e, i, o, u) o en las consonantes N o S.',
      'Ejemplos con tilde: can-CIÓN (termina en N), com-PÁS (termina en S), ca-FÉ (termina en vocal). Ejemplos sin tilde: pa-PEL (acaba en L), re-LOJ (acaba en J), Ma-DRID (acaba en D), ver-DAD (acaba en D).'
    ],
    explanationHy: [
      'Agudas են կոչվում այն բառերը, որոնց շեշտված վանկը (որն արտասանվում է առավելագույն ուժգնությամբ) ՎԵՐՋԻՆ ՎԱՆԿՆ Է։',
      'ՇԵՇՏԱԴՐՈՒԹՅԱՆ ՀԻՄՆԱՐԱՐ ԿԱՆՈՆ. Agudas բառերը ստանում են գրավոր շեշտ (Tilde՝ ´), երբ ավարտվում են ՁԱՅՆԱՎՈՐՈՎ (a, e, i, o, u) կամ N կամ S բաղաձայններով։',
      'Շեշտով օրինակներ՝ can-CIÓN (N-ով), com-PÁS (S-ով), ca-FÉ (ձայնավորով)։ Առանց գրավոր շեշտի՝ pa-PEL (L-ով), re-LOJ (J-ով), Ma-DRID (D-ով)։'
    ],
    keyRulesEs: [
      'Última sílaba tónica = palabra aguda.',
      'Lleva tilde solo si termina en vocal, -n o -s.',
      'Si termina en -s precedida de otra consonante (como "robots"), no lleva tilde.'
    ],
    keyRulesHy: [
      'Շեշտված վերջին վանկ = Aguda բառ։',
      'Ստանում է գրավոր շեշտ (´) ՄԻԱՅՆ եթե ավարտվում է ձայնավորով, -n-ով կամ -s-ով։',
      'Եթե -s-ից առաջ այլ բաղաձայն կա (օր.՝ robots), շեշտ չի դրվում։'
    ],
    bilingualExamples: [
      { es: 'El capitán marcó un gol y la afición celebró con emoción.', hy: 'Ավագը գոլ խփեց, և երկրպագուները հուզմունքով տոնեցին։', noteEs: 'Palabras agudas con tilde: capitán, marcó, celebró, emoción.', noteHy: 'Շեշտով agudas բառեր՝ capitán, marcó, celebró, emoción։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Dictado de ortografía en 1.º de ESO',
        situationHy: 'Ուղղագրական թելադրություն 1.º de ESO դասարանում',
        dialogueEs: '—Profesor: "¿Por qué \'pared\' no lleva tilde y \'paredón\' sí?".\n—Alumno: "Ambas son agudas, pero \'pared\' termina en D y \'paredón\' termina en N".\n—Profesor: "¡Exacto, dominas la regla!".',
        dialogueHy: '—Ուսուցիչ. «Ինչո՞ւ \'pared\' (պատ) բառը շեշտ չունի, իսկ \'paredón\'-ը ունի»։\n—Աշակերտ. «Երկուսն էլ aguda են, բայց \'pared\'-ը վերջանում է D-ով, իսկ \'paredón\'-ը N-ով»։\n—Ուսուցիչ. «Ճիշտ այդպես, կանոնը կատարյալ գիտես»։',
        explanationEs: 'Aplicación práctica de la regla de acentuación de agudas.',
        explanationHy: 'Agudas բառերի շեշտադրության կանոնի գործնական կիրառություն։'
      }
    ]
  },

  'm6-5': {
    explanationEs: [
      'Las palabras llanas (o graves) son aquellas cuya sílaba tónica es la PENÚLTIMA sílaba.',
      'REGLA DE ACENTUACIÓN DE LLANAS: Llevan tilde cuando terminan en cualquier consonante que NO sea ni N ni S, y tampoco terminen en vocal. Es decir, exactamente la regla inversa a las palabras agudas.',
      'Ejemplos con tilde: ÁR-bol (termina en L), LÁ-piz (termina en Z), DI-fí-cil (termina en L), CÁS-ped (termina en D). Ejemplos sin tilde (la inmensa mayoría del léxico español): ME-sa, LI-bro, a-LUM-no, car-PE-tas, can-TAN.'
    ],
    explanationHy: [
      'Llanas (կամ graves) են կոչվում այն բառերը, որոնց շեշտված վանկը ՆԱԽԱՎԵՐՋԻՆ ՎԱՆԿՆ Է։',
      'ՇԵՇՏԱԴՐՈՒԹՅԱՆ ԿԱՆՈՆ. Llanas բառերը ստանում են գրավոր շեշտ (Tilde՝ ´), երբ ավարտվում են ցանկացած բաղաձայնով, ԲԱՑԻ N-ԻՑ ՈՒ S-ԻՑ, և չեն ավարտվում ձայնավորով (այսինքն՝ agudas-ի ճիշտ հակառակ կանոնը)։',
      'Շեշտով օրինակներ՝ ÁR-bol (L-ով), LÁ-piz (Z-ով), DI-fí-cil (L-ով), CÁS-ped (D-ով)։ Առանց գրավոր շեշտի՝ ME-sa (ձայնավորով), LI-bro (ձայնավորով), car-PE-tas (S-ով), can-TAN (N-ով)։'
    ],
    keyRulesEs: [
      'Penúltima sílaba tónica = palabra llana.',
      'Lleva tilde cuando NO termina en vocal, ni en -n, ni en -s.',
      'Es la estructura acentual más frecuente en el idioma español.'
    ],
    keyRulesHy: [
      'Նախավերջին վանկը շեշտված = Llana բառ։',
      'Ստանում է գրավոր շեշտ, երբ ՉԻ ավարտվում ձայնավորով, ոչ էլ -n կամ -s-ով։',
      'Իսպաներեն բառերի մեծամասնությունը հենց llanas են։'
    ],
    bilingualExamples: [
      { es: 'El lápiz y el cuaderno están sobre la mesa del profesor.', hy: 'Մատիտն ու տետրը ուսուցչի սեղանին են։', noteEs: 'Lápiz (llana con tilde por acabar en z); mesa, cuaderno (llanas sin tilde).', noteHy: 'Lápiz (llana շեշտով՝ z-ով ավարտվելու պատճառով), mesa և cuaderno (llanas առանց շեշտի)։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Examen de ortografía de 1.º ESO',
        situationHy: 'Ուղղագրության քննություն 1.º ESO-ում',
        dialogueEs: '—Profesor: "¿Por qué \'difícil\' lleva tilde?".\n—Alumna: "Porque es una palabra llana (di-FÍ-cil) y termina en L, consonante distinta de N o S".\n—Profesor: "¡Perfecto razonamiento!".',
        dialogueHy: '—Ուսուցիչ. «Ինչո՞ւ \'difícil\' բառը շեշտ ունի»։\n—Աշակերտուհի. «Որովհետև llana բառ է (di-FÍ-cil) և ավարտվում է L-ով, որը N կամ S չէ»։\n—Ուսուցիչ. «Հիանալի՛ պատասխան»։',
        explanationEs: 'Explicación metalingüística de la norma ortográfica de las llanas.',
        explanationHy: 'Llanas բառերի ուղղագրական կանոնի մանրամասն բացատրություն։'
      }
    ]
  },

  'm6-6': {
    explanationEs: [
      'Las palabras esdrújulas son aquellas cuya sílaba tónica es la ANTEPENÚLTIMA sílaba (contando desde el final: última, penúltima, antepenúltima).',
      'REGLA INFALIBLE: ¡TODAS LAS PALABRAS ESDRÚJULAS LLEVAN TILDE SIN EXCEPCIÓN!',
      'No importa en qué letra terminen (vocal, consonante, -n, -s): siempre llevan acento gráfico. Ejemplos clásicos: MÚ-si-ca, PÁ-gi-na, MÉ-di-co, PLÁS-ti-ca, BO-lí-gra-fo, GRA-má-ti-ca, TE-lé-fo-no.'
    ],
    explanationHy: [
      'Esdrújulas են կոչվում այն բառերը, որոնց շեշտված վանկը ՎԵՐՋԻՑ ԵՐՐՈՐԴ ՎԱՆԿՆ Է (վերջին, նախավերջին, վերջից երրորդ)։',
      'ԱՆՎՐԵՊ ՈՍԿԻ ԿԱՆՈՆ. ԲՈԼՈՐ ESDRÚJULAS ԲԱՌԵՐԸ ԱՌԱՆՑ ԲԱՑԱՌՈՒԹՅԱՆ ԿՐՈՒՄ ԵՆ ԳՐԱՎՈՐ ՇԵՇՏ (TILDE՝ ´)։',
      'Կարևոր չէ, թե ինչ տառով են ավարտվում (ձայնավոր, բաղաձայն, n, s)՝ շեշտը միշտ դրվում է։ Օրինակներ՝ MÚ-si-ca, PÁ-gi-na, MÉ-di-co, PLÁS-ti-ca, BO-lí-gra-fo, GRA-má-ti-ca։'
    ],
    keyRulesEs: [
      'Antepenúltima sílaba tónica = palabra esdrújula.',
      'Llevan tilde SIEMPRE, sin ninguna excepción.',
      'Se acentúa gráficamente la vocal de la antepenúltima sílaba.'
    ],
    keyRulesHy: [
      'Վերջից երրորդ վանկը շեշտված = Esdrújula բառ։',
      'Շեշտվում են ՄԻՇՏ՝ առանց որևէ բացառության։',
      'Շեշտը (´) դրվում է վերջից երրորդ վանկի ձայնավորի վրա։'
    ],
    bilingualExamples: [
      { es: 'En clase de Plástica dibujamos una pirámide con regla y compás.', hy: 'Նկարչության (Plástica) դասին մենք քանոնով և կարկինով բուրգ (pirámide) գծեցինք։', noteEs: 'Esdrújulas: Plástica, pirámide (ambas siempre con tilde).', noteHy: 'Esdrújulas բառեր՝ Plástica, pirámide (երկուսն էլ պարտադիր շեշտով)։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Duda ortográfica durante un examen',
        situationHy: 'Ուղղագրական հարց քննության ժամանակ',
        dialogueEs: '—Alumno: "Profesora, ¿\'bolígrafo\' lleva tilde?".\n—Profesora: "Sepáralo en sílabas: bo-LÍ-gra-fo. ¿Dónde cae la fuerza?".\n—Alumno: "En la antepenúltima, ¡es esdrújula y lleva tilde siempre!".',
        dialogueHy: '—Աշակերտ. «Ուսուցչուհի, \'bolígrafo\' (գրիչ) բառը շեշտ ունի՞»։\n—Ուսուցչուհի. «Վանկատիր՝ bo-LÍ-gra-fo. Որտե՞ղ է ընկնում շեշտը»։\n—Աշակերտ. «Վերջից երրորդի վրա. ուրեմն esdrújula է և ՄԻՇՏ կրում է շեշտ»։',
        explanationEs: 'La regla universal de las esdrújulas no admite excepciones.',
        explanationHy: 'Esdrújulas բառերի համընդհանուր կանոնը որևէ բացառություն չունի։'
      }
    ]
  },

  'm6-9': {
    explanationEs: [
      'La tilde diacrítica es aquella que se utiliza para diferenciar dos palabras que se escriben con las mismas letras pero pertenecen a categorías gramaticales distintas y tienen significados diferentes.',
      'Por regla general, los monosílabos no llevan tilde en español; la tilde diacrítica es la única excepción para evitar ambigüedades en parejas frecuentes.',
      'Parejas imprescindibles en 1.º de ESO:\n• él (pronombre personal) / el (artículo determinado)\n• tú (pronombre personal) / tu (posesivo)\n• mí (pronombre personal) / mi (posesivo o nota musical)\n• sí (afirmación o pronombre) / si (conjunción condicional)\n• té (sustantivo/bebida) / te (pronombre personal)\n• dé (verbo dar) / de (preposición)\n• sé (verbo ser o saber) / se (pronombre reflexivo)\n• más (adverbio de cantidad) / mas (conjunción adversativa equivalente a pero).'
    ],
    explanationHy: [
      'Տարբերակիչ շեշտը (Tilde diacrítica) ծառայում է տարբերակելու նույնատառ գրվող այն բառերը, որոնք պատկանում են խոսքի տարբեր մասերի և ունեն տարբեր իմաստներ։',
      'Որպես ընդհանուր կանոն, իսպաներենում միավանկ բառերը շեշտ չեն ստանում. տարբերակիչ շեշտը միակ բացառությունն է՝ երկիմաստությունից խուսափելու համար։',
      '1.º ESO-ի պարտադիր զույգերը՝\n• él (նա՝ անձնական դերանուն) / el (արական որոշյալ հոդ)\n• tú (դու՝ դերանուն) / tu (քո՝ ստացական)\n• mí (ինձ՝ դերանուն) / mi (իմ՝ ստացական)\n• sí (այո կամ ինքն իրեն) / si (եթե՝ պայմանական շաղկապ)\n• té (թեյ՝ ըմպելիք) / te (քեզ՝ դերանուն)\n• dé (dar բայի ձև՝ տալ) / de (նախդիր՝ -ի, -ից)\n• sé (saber/ser բայերի ձև՝ գիտեմ/եղիր) / se (անդրադարձ դերանուն)\n• más (ավելի՝ քանակ) / mas (բայց)։'
    ],
    keyRulesEs: [
      'Diferencia categorías gramaticales entre palabras de idéntica grafía.',
      'Afecta fundamentalmente a monosílabos específicos.',
      'Interrogativos y exclamativos (qué, quién, cómo, dónde, cuándo, cuánto, cuál) también llevan tilde diacrítica.'
    ],
    keyRulesHy: [
      'Տարբերակում է խոսքի մասերը նույնատառ միավանկ բառերում։',
      'Հատուկ սահմանված զույգերի համար է գործում։',
      'Հարցական և բացականչական բառերը (qué, quién, dónde...) նույնպես ստանում են տարբերակիչ շեշտ։'
    ],
    bilingualExamples: [
      { es: 'Él trajo el libro para mí, pero no es mi libro preferido.', hy: 'Նա (él) բերեց գիրքը (el) ինձ (mí) համար, բայց դա իմ (mi) նախընտրած գիրքը չէ։', noteEs: 'Contraste entre "él/el" y "mí/mi".', noteHy: '«él/el» և «mí/mi» տարբերակիչ շեշտերի կիրառություն։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Repaso de ortografía en la pizarra',
        situationHy: 'Ուղղագրության կրկնություն գրատախտակի մոտ',
        dialogueEs: '—Profesora: "¿Por qué en \'Si tú quieres, sí iremos al cine\' el primer \'si\' no lleva tilde y el segundo sí?".\n—Alumno: "El primer \'si\' es condicional (եթե), y el segundo \'sí\' es una afirmación (այո)".\n—Profesora: "¡Perfecto!".',
        dialogueHy: '—Ուսուցչուհի. «Ինչո՞ւ \'Si tú quieres, sí iremos al cine\' նախադասության մեջ առաջին \'si\'-ն շեշտ չունի, իսկ երկրորդը ունի»։\n—Աշակերտ. «Առաջին \'si\'-ն պայման է նշանակում (եթե), իսկ երկրորդ \'sí\'-ն հաստատում է (այո)»։\n—Ուսուցչուհի. «Ճիշտ է»։',
        explanationEs: 'Diferenciación exacta entre conjunción condicional y adverbio de afirmación.',
        explanationHy: 'Պայմանական շաղկապի և հաստատական մակբայի ճշգրիտ տարբերակում։'
      }
    ]
  },

  // ==========================================
  // MÓDULO 7: LITERATURA
  // ==========================================
  'm7-2': {
    explanationEs: [
      'Los géneros literarios son los modelos o categorías en los que se agrupan y clasifican las obras de literatura según su forma, contenido e intención comunicativa.',
      'Desde la antigüedad clásica se distinguen tres grandes géneros fundamentales: el género narrativo o épico (relato de historias por un narrador), el género lírico (expresión de sentimientos y mundo interior en verso) y el género dramático o teatral (representación de un conflicto mediante el diálogo directo de actores sin narrador).',
      'En 1.º de ESO se estudian los subgéneros propios de cada uno: el cuento, la fábula, la novela y la leyenda (narrativa); el poema, la canción y el romance (lírica); y la comedia, la tragedia y el drama (teatro).'
    ],
    explanationHy: [
      'Գրական ժանրերը (Géneros literarios) այն մոդելներն ու խմբերն են, որոնցով դասակարգվում են գրական ստեղծագործությունները՝ ըստ իրենց ձևի, բովանդակության և նպատակի։',
      'Անտիկ շրջանից ի վեր տարբերակվում են երեք հիմնարար գլխավոր ժանրեր՝ պատմողական/էպիկական (género narrativo՝ դեպքերի պատմում պատմողի կողմից), քնարական (género lírico՝ զգացմունքների և հոգեվիճակի արտահայտում չափածո ձևով) և դրամատիկական/թատերական (género dramático՝ հակամարտության ներկայացում բեմում դերասանների երկխոսությամբ՝ առանց պատմողի)։',
      '1.º ESO-ում ուսումնասիրվում են յուրաքանչյուրի ենթաժանրերը՝ պատմվածք, առակ, վեպ, ավանդազրույց (պատմողական), բանաստեղծություն, ռոմանս (քնարական) և կատակերգություն, ողբերգություն, դրամա (թատերական)։'
    ],
    keyRulesEs: [
      'Los tres grandes géneros son: Narrativo, Lírico y Dramático.',
      'Narrativo = Narrador + Personajes + Trama cronológica.',
      'Lírico = Sentimientos + Verso + Musicalidad; Dramático = Diálogos + Acotaciones teatrales.'
    ],
    keyRulesHy: [
      'Երեք գլխավոր ժանրերն են՝ Պատմողական, Քնարական և Դրամատիկական։',
      'Պատմողական = Պատմող + Հերոսներ + Սյուժե։',
      'Քնարական = Հույզեր + Չափածո + Երաժշտականություն; Դրամատիկական = Երկխոսություններ + Բեմական նշումներ (ռեմարկներ)։'
    ],
    bilingualExamples: [
      { es: 'Don Quijote de la Mancha pertenece al género narrativo; las Rimas de Bécquer, al género lírico.', hy: '«Դոն Կիխոտը» պատկանում է պատմողական ժանրին, իսկ Բեկերի «Հանգերը»՝ քնարական ժանրին։', noteEs: 'Ejemplos cumbre de la literatura española.', noteHy: 'Իսպանական գրականության դասական գլուխգործոցների օրինակներ։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Biblioteca del IES Miguel de Cervantes',
        situationHy: 'Դպրոցական գրադարանում',
        dialogueEs: '—Profesora: "Si una obra está escrita para ser representada por actores en un escenario con luces y decorados, ¿a qué género pertenece?".\n—Alumno: "Al género dramático o teatral".\n—Profesora: "¡Muy bien!".',
        dialogueHy: '—Ուսուցչուհի. «Եթե երկը գրված է դերասանների կողմից բեմում ներկայացվելու համար՝ լույսերով և դեկորացիաներով, ո՞ր ժանրին է պատկանում»։\n—Աշակերտ. «Դրամատիկական կամ թատերական ժանրին»։\n—Ուսուցչուհի. «Ապրե՛ս»։',
        explanationEs: 'Definición esencial del género teatral frente a la narrativa y la lírica.',
        explanationHy: 'Թատերական ժանրի էական սահմանումը պատմողականից և քնարականից։'
      }
    ]
  },

  'm7-24': {
    explanationEs: [
      'La metáfora es la figura retórica más importante de la literatura; consiste en identificar un término real (A) con un término imaginario (B) basándose en una relación de semejanza entre ambos.',
      'A diferencia del símil o comparación, la metáfora NO utiliza nexos comparativos como "como", "parece" o "igual que", sino que afirma directamente la equivalencia poética.',
      'Ejemplos célebres: "Las perlas de tu boca" (perlas = dientes blancos), "El manto blanco del invierno" (manto = nieve), "El sol es un globo de fuego" (sol = globo de fuego).'
    ],
    explanationHy: [
      'Փոխաբերությունը (Metáfora) գրականության ամենակարևոր արտահայտչամիջոցն է. այն իրական երևույթը (A) նույնացնում է պատկերավոր/երևակայական երևույթի (B) հետ՝ հիմնվելով նրանց ընդհանուր նմանության վրա։',
      'Ի տարբերություն համեմատության (símil), փոխաբերությունը ՉԻ օգտագործում «ինչպես» (como), «նման» (parece) բառերը, այլ ուղղակիորեն հաստատում է պատկերավոր նույնությունը։',
      'Հայտնի օրինակներ՝ «Las perlas de tu boca» (բերանիդ մարգարիտները = սպիտակ ատամները), «El manto blanco» (ձմռան սպիտակ թիկնոցը = ձյունը)։'
    ],
    keyRulesEs: [
      'Identificación directa entre dos realidades por semejanza.',
      'No lleva nexo comparativo (si lleva "como", es un símil).',
      'Embellece el texto y estimula la imaginación del lector.'
    ],
    keyRulesHy: [
      'Երկու երևույթների ուղղակի նույնացում ըստ նմանության։',
      'Չունի համեմատական շաղկապ (եթե ունի "como", ուրեմն համեմատություն է՝ símil)։',
      'Գեղեցկացնում է տեքստը և զարգացնում ընթերցողի երևակայությունը։'
    ],
    bilingualExamples: [
      { es: 'Las nubes son copos de algodón flotando en el cielo azul.', hy: 'Ամպերը բամբակի քուլաներ են՝ լողացող կապույտ երկնքում։', noteEs: 'Metáfora pura: nubes (A) = copos de algodón (B).', noteHy: 'Զուտ փոխաբերություն՝ ամպերը նույնացված են բամբակի հետ։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Taller de poesía en 1.º de ESO',
        situationHy: 'Բանաստեղծության դաս 1.º ESO-ում',
        dialogueEs: '—Profesora: "¿Qué diferencia hay entre \'Sus ojos son dos luceros\' y \'Sus ojos brillan como dos luceros\'?".\n—Alumno: "La primera es una metáfora directa y la segunda es un símil porque lleva la palabra \'como\'".\n—Profesora: "¡Excelente distinción!".',
        dialogueHy: '—Ուսուցչուհի. «Ի՞նչ տարբերություն կա \'Sus ojos son dos luceros\' և \'Sus ojos brillan como dos luceros\' միջև»։\n—Աշակերտ. «Առաջինը ուղիղ փոխաբերություն է (metáfora), իսկ երկրորդը՝ համեմատություն (símil), որովհետև ունի \'como\' (ինչպես) բառը»։\n—Ուսուցչուհի. «Գերազանց է»։',
        explanationEs: 'Diferenciación clásica evaluada en los exámenes de 1.º de ESO.',
        explanationHy: 'Դասական տարբերակում, որը ստուգվում է 1.º ESO-ի քննություններում։'
      }
    ]
  },

  // ==========================================
  // MÓDULO 10: LAS LENGUAS DE ESPAÑA
  // ==========================================
  'm10-1': {
    explanationEs: [
      'España es un país lingüísticamente plural y diverso. La Constitución Española de 1978 establece en su artículo 3 que el castellano es la lengua española oficial del Estado y todos los españoles tienen el deber de conocerla y el derecho a usarla.',
      'Asimismo, la Constitución reconoce que las demás lenguas españolas serán también oficiales en las respectivas Comunidades Autónomas de acuerdo con sus Estatutos: el catalán en Cataluña e Islas Baleares (y valenciano en la Comunidad Valenciana), el gallego en Galicia y el euskera en el País Vasco y la zona vascófona de Navarra.',
      'Casi todas las lenguas de España proceden del latín (lenguas romances o románicas), con la notable excepción del euskera, que es una lengua prerromana aislada de origen ancestral anterior a la llegada de los romanos a la península ibérica.'
    ],
    explanationHy: [
      'Իսպանիան բազմալեզու և մշակութային մեծ հարստություն ունեցող երկիր է։ 1978 թ. Իսպանիայի Սահմանադրության 3-րդ հոդվածը սահմանում է, որ կաստիլերենը (իսպաներենը) պետության պաշտոնական լեզուն է, և բոլոր իսպանացիները պարտավոր են իմանալ այն ու իրավունք ունեն օգտագործելու։',
      'Միաժամանակ, մյուս իսպանական լեզուները համապաշտոնական (cooficiales) են իրենց ինքնավար մարզերում՝ կատալոներենը Կատալոնիայում և Բալեարյան կղզիներում (իսկ Վալենսիայում՝ որպես վալենսիերեն), գալիսերենը Գալիսիայում, իսկ բասկերենը (euskera)՝ Բասկերի Երկրում և Նավառայում։',
      'Իսպանիայի գրեթե բոլոր լեզուները առաջացել են լատիներենից (ռոմանական լեզուներ), բացառությամբ բասկերենի (euskera), որը նախահռոմեական հնագույն մեկուսացած լեզու է։'
    ],
    keyRulesEs: [
      'El castellano es la lengua oficial en todo el territorio del Estado español.',
      'Catalán, gallego y euskera son lenguas cooficiales en sus comunidades autónomas.',
      'El euskera es la única lengua no romance de España (origen prerromano).'
    ],
    keyRulesHy: [
      'Կաստիլերենը (իսպաներենը) պաշտոնական լեզու է Իսպանիայի ողջ տարածքում։',
      'Կատալոներենը, գալիսերենը և բասկերենը համապաշտոնական են իրենց ինքնավարություններում։',
      'Բասկերենը միակ ոչ ռոմանական (նախահռոմեական) լեզուն է Իսպանիայում։'
    ],
    bilingualExamples: [
      { es: 'En Barcelona se rotulan los nombres de las calles en catalán y en castellano.', hy: 'Բարսելոնայում փողոցների անունները գրվում են կատալոներեն և կաստիլերեն։', noteEs: 'Bilingüismo institucional en Cataluña.', noteHy: 'Պաշտոնական երկլեզվություն Կատալոնիայում։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Clase de Ciencias Sociales y Lengua en 1.º ESO',
        situationHy: 'Հասարակագիտության և լեզվի դաս 1.º ESO-ում',
        dialogueEs: '—Profesor: "¿Qué significa que el euskera no es una lengua romance?".\n—Mireia: "Que no procede del latín, sino que ya se hablaba en la península antes de la llegada del Imperio Romano".\n—Profesor: "¡Exacto, Mireia!".',
        dialogueHy: '—Ուսուցիչ. «Ի՞նչ է նշանակում, որ բասկերենը ռոմանական լեզու չէ»։\n—Միրեյա. «Որ այն չի առաջացել լատիներենից, այլ թերակղզում խոսվել է դեռևս Հռոմեական կայսրության գալուց առաջ»։\n—Ուսուցիչ. «Ճիշտ այդպես, Միրեյա՛»։',
        explanationEs: 'Comprensión del mapa lingüístico histórico de España.',
        explanationHy: 'Իսպանիայի պատմական լեզվական քարտեզի ըմբռնում։'
      }
    ]
  },

  // ==========================================
  // MÓDULO 11: ALFABETIZACIÓN DIGITAL
  // ==========================================
  'm11-6': {
    explanationEs: [
      'Las noticias falsas (desinformación o fake news) son contenidos engañosos elaborados deliberadamente para manipular la opinión pública, generar alarma social o conseguir visitas por dinero (clickbait).',
      'En la era de las redes sociales e internet, los estudiantes de 1.º de ESO deben aprender a desarrollar un pensamiento crítico: comprobar quién es el autor, contrastar la noticia en medios periodísticos contrastados y verificar la fecha original.',
      'Los bulos suelen apelar a emociones intensas (miedo, indignación o sorpresa excesiva) y carecen de fuentes oficiales o enlaces fiables.'
    ],
    explanationHy: [
      'Կեղծ լուրերը (ապատեղեկատվություն կամ fake news) մոլորեցնող տեղեկություններ են, որոնք միտումնավոր ստեղծվում են հասարակական կարծիքը մանիպուլացնելու, խուճապ առաջացնելու կամ դիտումներ հավաքելու (clickbait) համար։',
      'Սոցիալական ցանցերի և համացանցի դարաշրջանում 1.º ESO-ի աշակերտները պետք է զարգացնեն քննադատական մտածողություն՝ ստուգել հեղինակին, համեմատել լուրը վստահելի պաշտոնական լրատվամիջոցներում և ճշտել հրապարակման ամսաթիվը։',
      'Կեղծ լուրերը հաճախ ազդում են ուժեղ հույզերի վրա (վախ, զայրույթ կամ չափազանց զարմանք) և չունեն իրական աղբյուրներ կամ պաշտոնական հղումներ։'
    ],
    keyRulesEs: [
      'Nunca compartir una noticia sin haber leído el texto completo y comprobado la fuente.',
      'Desconfiar de titulares sensacionalistas y alarmistas.',
      'Contrastar siempre en al menos dos medios informativos de prestigio.'
    ],
    keyRulesHy: [
      'Երբեք չտարածել լուրը՝ առանց ամբողջ տեքստը կարդալու և աղբյուրը ստուգելու։',
      'Զգուշանալ սենսացիոն և տագնապ առաջացնող վերնագրերից։',
      'Միշտ համեմատել տեղեկությունը առնվազն երկու վստահելի լրատվամիջոցներում։'
    ],
    bilingualExamples: [
      { es: 'Antes de reenviar un mensaje sospechoso en el grupo de clase, compruebo la fuente oficial.', hy: 'Դասարանի խմբում կասկածելի հաղորդագրություն տարածելուց առաջ ես ստուգում եմ պաշտոնական աղբյուրը։', noteEs: 'Actitud responsable frente a la desinformación.', noteHy: 'Պատասխանատու վերաբերմունք ապատեղեկատվության հանդեպ։' }
    ],
    schoolExamples: [
      {
        situationEs: 'Taller de navegación segura en el instituto',
        situationHy: 'Համացանցի անվտանգության դաս դպրոցում',
        dialogueEs: '—Profesor: "Ha llegado un mensaje diciendo que mañana se suspenden las clases por nieve, pero en la web de la Consejería de Educación no pone nada. ¿Qué hacemos?".\n—Alumno: "Es un bulo escolar. No debemos difundirlo hasta que haya comunicado oficial".\n—Profesor: "¡Excelente criterio digital!".',
        dialogueHy: '—Ուսուցիչ. «Հաղորդագրություն է եկել, թե վաղը դասերը հետաձգվում են ձյան պատճառով, բայց Կրթության նախարարության կայքում ոչինչ չկա։ Ի՞նչ ենք անում»։\n—Աշակերտ. «Դա դպրոցական կեղծ լուր է։ Չպետք է տարածենք, քանի դեռ պաշտոնական հայտարարություն չկա»։\n—Ուսուցիչ. «Հիանալի՛ թվային գիտակցություն»։',
        explanationEs: 'Aplicación del protocolo de verificación de fuentes en el centro escolar.',
        explanationHy: 'Աղբյուրների ստուգման դպրոցական կարևոր կանոնի կիրառում։'
      }
    ]
  }
};

/**
 * Generates an exhaustive, high-depth pedagogical theory for any subtopic in the 1.º ESO syllabus
 * when an exact static key is not predefined, ensuring that EVERY lesson is richly detailed.
 */
export function getDetailedTheoryForSubtopic(
  subtopicId: string,
  topicEs: string,
  topicHy: string,
  modEs: string,
  modHy: string
): DetailedTheory {
  if (DETAILED_THEORIES[subtopicId]) {
    return DETAILED_THEORIES[subtopicId];
  }

  // Generate specialized deep educational paragraphs based on the module theme:
  const isGrammar = subtopicId.startsWith('m3-');
  const isSyntax = subtopicId.startsWith('m4-');
  const isSpelling = subtopicId.startsWith('m6-');
  const isLiterature = subtopicId.startsWith('m7-');
  const isReading = subtopicId.startsWith('m8-');
  const isWriting = subtopicId.startsWith('m9-');
  const isLanguages = subtopicId.startsWith('m10-');
  const isMedia = subtopicId.startsWith('m11-');
  const isText = subtopicId.startsWith('m2-');
  const isComm = subtopicId.startsWith('m1-');

  let explanationEs: string[];
  let explanationHy: string[];
  let keyRulesEs: string[];
  let keyRulesHy: string[];
  let bilingualExamples: Array<{ es: string; hy: string; noteEs?: string; noteHy?: string }>;

  if (isGrammar) {
    explanationEs = [
      `El tema "${topicEs}" constituye una pieza fundamental dentro de la morfología y la gramática española de 1.º de ESO. Permite a los estudiantes comprender cómo se clasifican las palabras según su forma y su significado.`,
      `En el idioma español, dominar "${topicEs}" es imprescindible para asegurar la concordancia de género (masculino/femenino) y número (singular/plural), así como la correcta articulación de oraciones complejas.`,
      `En los institutos españoles, el profesorado evalúa con especial atención la capacidad del alumnado para identificar esta categoría gramatical en textos reales y aplicarla sin incorrecciones en sus propias redacciones y exámenes escritos.`
    ];
    explanationHy = [
      `«${topicHy}» (${topicEs}) թեման 1.º de ESO-ի իսպաներեն ձևաբանության և քերականության առանցքային հասկացություններից է։ Այն սովորեցնում է բառերի դասակարգումն ըստ իրենց ձևի և իմաստի։`,
      `Իսպաներենում «${topicHy}»-ի խորքային իմացությունը պարտադիր է սեռի (արական/իգական) և թվի (եզակի/հոգնակի) ճիշտ համաձայնության, ինչպես նաև գրագետ նախադասություններ կազմելու համար։`,
      `Իսպանիայի միջնակարգ դպրոցներում ուսուցիչները հատուկ ուշադրություն են դարձնում այս քերականական նյութի յուրացմանը տեքստային վերլուծություններում և պաշտոնական թեստերում։`
    ];
    keyRulesEs = [
      `Identifica la función morfológica exacta de "${topicEs}".`,
      'Comprueba siempre la concordancia de género y número en el sintagma.',
      'Distingue las formas regulares de las posibles excepciones en castellano.'
    ];
    keyRulesHy = [
      `Ճշգրիտ որոշիր «${topicHy}»-ի ձևաբանական դերը։`,
      'Միշտ ստուգիր սեռի և թվի համաձայնությունը բառակապակցության մեջ։',
      'Տարբերակիր կանոնավոր ձևերը հնարավոր բացառություններից։'
    ];
    bilingualExamples = [
      {
        es: `En el examen de Lengua, debemos analizar detalladamente el uso de ${topicEs}.`,
        hy: `Իսպաներենի քննության ժամանակ մենք պետք է մանրամասն վերլուծենք «${topicHy}»-ի կիրառությունը։`,
        noteEs: `Ejemplo morfológico aplicado a "${topicEs}".`,
        noteHy: `Ձևաբանական օրինակ «${topicHy}» թեմայով։`
      },
      {
        es: `La profesora subraya en verde los aciertos al emplear ${topicEs} en la redacción.`,
        hy: `Ուսուցչուհին կանաչով է ընդգծում շարադրության մեջ «${topicHy}»-ի ճիշտ կիրառությունները։`,
        noteEs: 'Práctica escolar en el instituto.',
        noteHy: 'Դպրոցական գործնական կիրառություն։'
      }
    ];
  } else if (isSyntax) {
    explanationEs = [
      `Dentro del análisis oracional de 1.º de ESO, el estudio de "${topicEs}" resulta clave para desentrañar la estructura interna de la oración simple en español.`,
      `Toda oración española se organiza en torno a la relación entre sujeto y predicado. Comprender "${topicEs}" permite determinar con rigor científico qué elementos actúan como núcleos y qué complementos los acompañan.`,
      `Para no cometer errores en los exámenes, recuerda aplicar siempre la prueba de la concordancia: al modificar el número del verbo, los constituyentes obligados a cambiar revelan su función sintáctica.`
    ];
    explanationHy = [
      `1.º de ESO-ի շարահյուսական վերլուծության մեջ «${topicHy}» (${topicEs}) թեման կարևորագույն դեր է խաղում պարզ նախադասության ներքին կառուցվածքը հասկանալու գործում։`,
      `Իսպաներեն յուրաքանչյուր նախադասություն կառուցվում է ենթակայի և ստորոգյալի փոխհարաբերության շուրջ։ «${topicHy}»-ը հասկանալը թույլ է տալիս հստակ գտնել գլխավոր անդամներն (Núcleos) ու դրանց լրացումները։`,
      `Քննություններում սխալներից խուսափելու համար միշտ կիրառիր համաձայնության կանոնը. բայի թիվը փոխելիս այն անդամը, որը պարտադիր փոխվում է, բացահայտում է իր շարահյուսական դերը։`
    ];
    keyRulesEs = [
      `Localiza en primer lugar el verbo conjugado de la oración.`,
      `Aplica la prueba de concordancia número/persona para verificar "${topicEs}".`,
      'Diferencia con claridad el núcleo de sus modificadores y complementos.'
    ];
    keyRulesHy = [
      'Նախ գտիր նախադասության խոնարհված բայը։',
      `Կիրառիր թվի/դեմքի համաձայնության ստուգումը «${topicHy}»-ի համար։`,
      'Հստակ տարբերակիր գլխավոր անդամը նրա լրացումներից։'
    ];
    bilingualExamples = [
      {
        es: `El análisis sintáctico de ${topicEs} requiere identificar los núcleos correspondientes.`,
        hy: `«${topicHy}»-ի շարահյուսական վերլուծությունը պահանջում է գտնել համապատասխան գլխավոր անդամները։`,
        noteEs: `Regla sintáctica para ${topicEs}.`,
        noteHy: `Շարահյուսական կանոն «${topicHy}»-ի համար։`
      }
    ];
  } else if (isSpelling) {
    explanationEs = [
      `La correcta ortografía de "${topicEs}" es uno de los criterios más rigurosos de calificación en 1.º de ESO en España: cada falta resta puntuación directa en los exámenes.`,
      `Las normas de la Real Academia Española (RAE) para "${topicEs}" responden a principios etimológicos y fonéticos bien definidos que permiten escribir con total seguridad y evitar confusiones habituales.`,
      `Aprender a segmentar en sílabas, ubicar la sílaba tónica y memorizar las reglas de uso de letras problemáticas garantiza una escritura académica impecable.`
    ];
    explanationHy = [
      `«${topicHy}» (${topicEs}) ուղղագրությունը Իսպանիայի 1.º ESO-ի քննություններում ամենախիստ գնահատվող չափանիշներից է. յուրաքանչյուր ուղղագրական սխալ միավոր է նվազեցնում։`,
      `Իսպանիայի Թագավորական Ակադեմիայի (RAE) կանոնները «${topicHy}»-ի համար հիմնված են հստակ հնչյունական և ծագումնաբանական սկզբունքների վրա, որոնք բացառում են երկիմաստությունները։`,
      `Վանկատումը ճիշտ կատարելը, շեշտված վանկը գտնելը և կանոններին հետևելը երաշխավորում են անթերի գրավոր խոսք դպրոցում։`
    ];
    keyRulesEs = [
      `Aplica con precisión las reglas oficiales de acentuación o grafía para "${topicEs}".`,
      'Separa mentalmente las sílabas para no dudar sobre la posición tónica.',
      'Revisa cuidadosamente la escritura final antes de entregar cualquier examen.'
    ];
    keyRulesHy = [
      `Ճշգրտորեն կիրառիր «${topicHy}»-ի պաշտոնական ուղղագրական կանոնը։`,
      'Մտքում վանկատիր բառը՝ շեշտված վանկը ճիշտ որոշելու համար։',
      'Քննական թերթիկը հանձնելուց առաջ ուշադիր վերստուգիր գրվածքը։'
    ];
    bilingualExamples = [
      {
        es: `Escribir correctamente ${topicEs} evita perder décimas en los exámenes del instituto.`,
        hy: `«${topicHy}»-ը ճիշտ գրելը թույլ է տալիս չկորցնել միավորներ դպրոցական քննություններին։`,
        noteEs: `Norma ortográfica de ${topicEs}.`,
        noteHy: `Ուղղագրական կանոն «${topicHy}»-ի համար։`
      }
    ];
  } else if (isLiterature) {
    explanationEs = [
      `El estudio literario de "${topicEs}" abre a los estudiantes de 1.º de ESO la puerta a la creatividad, la belleza estética y las tradiciones culturales hispánicas e universales.`,
      `A través de este concepto, analizamos cómo los autores construyen mundos de ficción, transmiten emociones universales y juegan con el ritmo, la métrica y las figuras retóricas.`,
      `En clase de Lengua y Literatura, aprender a reconocer "${topicEs}" en fragmentos de clásicos y lecturas juveniles enriquece el vocabulario y estimula el gusto por la lectura personal.`
    ];
    explanationHy = [
      `«${topicHy}» (${topicEs}) գրական թեման 1.º ESO-ի աշակերտների առջև բացում է գեղարվեստական խոսքի, ստեղծագործական մտքի և համաշխարհային մշակույթի գանձարանը։`,
      `Այս հասկացության միջոցով մենք տեսնում ենք, թե ինչպես են հեղինակները կերտում պատկերավոր կերպարներ, փոխանցում հույզեր և օգտագործում գեղարվեստական արտահայտչամիջոցները։`,
      `Գրականության դասերին «${topicHy}»-ը ճանաչելը դասական և ժամանակակից գործերում հարստացնում է բառապաշարը և սերմանում սեր ընթերցանության հանդեպ։`
    ];
    keyRulesEs = [
      `Identifica el género literario y la intención estética del autor sobre "${topicEs}".`,
      'Reconoce los recursos expresivos y la estructura formal de la obra.',
      'Diferencia la voz ficticia (narrador o yo lírico) de la persona real del autor.'
    ];
    keyRulesHy = [
      `Որոշիր գրական ժանրն ու հեղինակի գեղարվեստական նպատակը «${topicHy}»-ում։`,
      'Ճանաչիր պատկերավորման միջոցներն ու ստեղծագործության ձևը։',
      'Տարբերակիր գրական կերպարին/պատմողին հեղինակի իրական անձից։'
    ];
    bilingualExamples = [
      {
        es: `El análisis literario de ${topicEs} nos descubre el sentido profundo del texto poético o narrativo.`,
        hy: `«${topicHy}»-ի գրական վերլուծությունը բացահայտում է չափածո կամ արձակ տեքստի խորքային իմաստը։`,
        noteEs: `Concepto literario: ${topicEs}.`,
        noteHy: `Գրական հասկացություն՝ «${topicHy}»։`
      }
    ];
  } else if (isLanguages) {
    explanationEs = [
      `El tema "${topicEs}" aborda la fascinante pluralidad lingüística y cultural de España amparada por la Constitución Española de 1978.`,
      `Comprender el origen romance del castellano, catalán y gallego frente al carácter prerromano del euskera ayuda a entender la historia y la convivencia de las distintas comunidades autónomas.`,
      `En el instituto se promueve el respeto lingüístico, la tolerancia y el aprecio por todas las lenguas y dialectos hablados en el territorio español y en el mundo.`
    ];
    explanationHy = [
      `«${topicHy}» (${topicEs}) թեման անդրադառնում է Իսպանիայի հարուստ լեզվական բազմազանությանը, որը պաշտպանված է 1978 թ. Սահմանադրությամբ։`,
      `Կաստիլերենի, կատալոներենի և գալիսերենի լատինական ծագումը բասկերենի հնագույն նախահռոմեական ծագման հետ համեմատելը օգնում է հասկանալ երկրի պատմությունն ու համակեցությունը։`,
      `Դպրոցում դաստիարակվում է հարգանք, հանդուրժողականություն և գնահատանք բոլոր լեզուների և բարբառների նկատմամբ։`
    ];
    keyRulesEs = [
      'El castellano es la lengua oficial del Estado (Art. 3 de la Constitución).',
      'Las lenguas cooficiales tienen idéntico rango legal en sus respectivos territorios.',
      'El plurilingüismo es un patrimonio cultural protegido y respetado.'
    ];
    keyRulesHy = [
      'Կաստիլերենը պետության պաշտոնական լեզուն է (Սահմանադրության 3-րդ հոդված)։',
      'Համապաշտոնական լեզուներն ունեն նույն իրավական ուժը իրենց տարածքներում։',
      'Բազմալեզվությունը պաշտպանված և հարգված մշակութային ժառանգություն է։'
    ];
    bilingualExamples = [
      {
        es: `Estudiar ${topicEs} fomenta el respeto mutuo entre todos los pueblos y regiones de España.`,
        hy: `«${topicHy}»-ի ուսումնասիրությունը նպաստում է փոխադարձ հարգանքին Իսպանիայի բոլոր մարզերի միջև։`,
        noteEs: `Convivencia lingüística: ${topicEs}.`,
        noteHy: `Լեզվական համերաշխություն՝ «${topicHy}»։`
      }
    ];
  } else if (isMedia) {
    explanationEs = [
      `En la sociedad hiperconectada actual, dominar "${topicEs}" capacita a los alumnos de 1.º de ESO para navegar por internet con seguridad, sentido crítico y responsabilidad.`,
      `Aprender a contrastar fuentes, distinguir hechos contrastables de opiniones subjetivas y detectar bulos o contenidos manipulados es una competencia escolar básica para el siglo XXI.`,
      `Asimismo, se fomenta la netiqueta y el respeto mutuo en las comunicaciones digitales escolares (plataformas educativas, correo electrónico con el profesorado y foros de clase).`
    ];
    explanationHy = [
      `Ժամանակակից թվային աշխարհում «${topicHy}»-ի իմացությունը 1.º ESO-ի աշակերտներին տալիս է անվտանգ, քննադատական և պատասխանատու գործելու հմտություններ։`,
      `Աղբյուրները ստուգելը, փաստերը սուբյեկտիվ կարծիքներից զատելը և կեղծ լուրերը (fake news) բացահայտելը 21-րդ դարի կարևորագույն դպրոցական կարողունակություններից են։`,
      `Միաժամանակ դաստիարակվում է թվային էթիկա (նետիկետ) և հարգանք դպրոցական առցանց հարթակներում և էլ. նամակագրության մեջ։`
    ];
    keyRulesEs = [
      'Contrasta siempre cualquier noticia con fuentes oficiales de solvencia.',
      'Distingue con claridad entre información objetiva, opinión y publicidad.',
      'Protege tu privacidad y mantén siempre un trato respetuoso en redes e internet.'
    ];
    keyRulesHy = [
      'Միշտ համեմատիր ցանկացած լուր պաշտոնական վստահելի աղբյուրների հետ։',
      'Հստակ տարբերակիր օբյեկտիվ տեղեկատվությունը, կարծիքը և գովազդը։',
      'Պաշտպանիր անձնական տվյալներդ և եղիր հարգալից համացանցում։'
    ];
    bilingualExamples = [
      {
        es: `Comprender ${topicEs} nos ayuda a ser ciudadanos digitales informados y precavidos.`,
        hy: `«${topicHy}»-ը հասկանալը մեզ օգնում է լինել տեղեկացված և զգոն թվային քաղաքացիներ։`,
        noteEs: `Competencia digital: ${topicEs}.`,
        noteHy: `Թվային գրագիտություն՝ «${topicHy}»։`
      }
    ];
  } else {
    // Default rich comprehensive pedagogical fallback for general topics (reading, writing, text types, communication)
    explanationEs = [
      `En esta lección curricular de 1.º de ESO profundizamos de forma sistemática en "${topicEs}", contenido perteneciente al bloque de ${modEs}.`,
      `Este aprendizaje es indispensable para que los alumnos adquieran soltura comunicativa, comprendan textos escolares con agilidad y sepan expresar sus ideas con coherencia, cohesión y adecuación léxica.`,
      `Las explicaciones y los ejercicios prácticos están diseñados específicamente para alumnos hispanohablantes e hispanoarmenios, facilitando la asimilación inmediata de las normas y su aplicación exitosa en exámenes escolares.`
    ];
    explanationHy = [
      `1.º de ESO-ի այս ուսումնական դասում մենք համակարգված կերպով մանրամասն ուսումնասիրում ենք «${topicHy}» (${topicEs}) թեման, որը պատկանում է «${modHy}» բաժնին։`,
      `Այս գիտելիքը խիստ անհրաժեշտ է, որպեսզի աշակերտները ձեռք բերեն խոսքային վստահություն, հեշտությամբ հասկանան դպրոցական տեքստերը և արտահայտեն մտքերը տրամաբանված, կապակցված և գրագետ։`,
      `Բացատրություններն ու գործնական վարժությունները հատուկ հարմարեցված են Իսպանիայում սովորող հայ աշակերտներին՝ ապահովելով կանոնների արագ յուրացում և գերազանց արդյունքներ քննություններին։`
    ];
    keyRulesEs = [
      `Domina los fundamentos conceptuales y prácticos de "${topicEs}".`,
      'Presta atención a la estructura lógica y a la claridad expositiva.',
      'Consulta las traducciones y notas en armenio para afianzar cada matiz.'
    ];
    keyRulesHy = [
      `Յուրացրու «${topicHy}»-ի հիմնարար տեսական և գործնական կանոնները։`,
      'Ուշադրություն դարձրու տրամաբանական կառուցվածքին և հստակությանը։',
      'Օգտագործիր հայերեն թարգմանություններն ու նշումները՝ յուրաքանչյուր նրբերանգ հասկանալու համար։'
    ];
    bilingualExamples = [
      {
        es: `El estudio riguroso de ${topicEs} garantiza el dominio de la expresión en el aula.`,
        hy: `«${topicHy}»-ի մանրակրկիտ ուսումնասիրությունը երաշխավորում է գրագետ խոսք դասարանում։`,
        noteEs: `Aplicación directa de ${topicEs}.`,
        noteHy: `Ուղղակի կիրառություն՝ «${topicHy}»։`
      }
    ];
  }

  const schoolExamples = [
    {
      situationEs: `En el aula de 1.º de ESO durante la lección de ${topicEs}`,
      situationHy: `1.º de ESO դասարանում «${topicHy}» դասի ժամանակ`,
      dialogueEs: `—Profesora: "¿Cómo aplicamos lo aprendido sobre ${topicEs} en los ejercicios del libro?".\n—Alumno: "Siguiendo paso a paso las reglas de la teoría y comprobando las respuestas con calma".\n—Profesora: "¡Esa es la actitud para sacar un Sobresaliente!".`,
      dialogueHy: `—Ուսուցչուհի. «Ինչպե՞ս ենք կիրառում «${topicHy}»-ի սովորածը դասագրքի վարժություններում»։\n—Աշակերտ. «Քայլ առ քայլ հետևելով տեսության կանոններին և հանգիստ ստուգելով պատասխանները»։\n—Ուսուցչուհի. «Հենց այդպիսի վերաբերմունքն է տանում գերազանց գնահատականի (Sobresaliente)»։`,
      explanationEs: `La constancia y el rigor son la clave del éxito escolar en España.`,
      explanationHy: 'Հետևողականությունն ու կանոնների իմացությունը դպրոցական հաջողության գրավականն են Իսպանիայում։'
    }
  ];

  return {
    explanationEs,
    explanationHy,
    keyRulesEs,
    keyRulesHy,
    bilingualExamples,
    schoolExamples
  };
}
