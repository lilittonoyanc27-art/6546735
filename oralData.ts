import type { OralScenario } from './types.ts';
import { randomizeOralScenario } from './shuffleUtils.ts';

export const ORAL_SCENARIOS: OralScenario[] = ([
  {
    id: 'oral-1',
    titleEs: '1. El profesor pregunta al alumno',
    titleHy: '1. Ուսուցիչը հարցնում է աշակերտին',
    contextEs: 'Durante la clase de Lengua, el profesor de 1.º ESO pregunta directamente a tu pupitre.',
    contextHy: 'Իսպաներենի դասի ժամանակ ուսուցիչը դիմում է հենց քո նստարանին։',
    speakerEs: 'Profesor Martínez',
    speakerHy: 'Ուսուցիչ Մարտինես',
    promptEs: '—A ver, ¿quién me puede decir qué diferencia hay entre un sustantivo común y uno propio?',
    promptHy: '—Դե տեսնենք, ո՞վ կարող է ասել, թե ինչ տարբերություն կա հասարակ և հատուկ գոյականների միջև։',
    audioPromptText: 'A ver, ¿quién me puede decir qué diferencia hay entre un sustantivo común y uno propio?',
    options: [
      {
        id: 'opt-1-1',
        textEs: 'Los comunes nombran seres u objetos de la misma clase (como "río" o "ciudad") y los propios identifican a uno en particular con mayúscula (como "Ebro" o "Madrid").',
        textHy: 'Հասարակները նշում են նույն դասի առարկաներ (ինչպես «գետ» կամ «քաղաք»), իսկ հատուկները առանձնացնում են մեկը մյուսներից մեծատառով (ինչպես «Էբրո» կամ «Մադրիդ»)։',
        isAppropriate: true,
        ratingEs: 'Excelente y muy precisa',
        ratingHy: 'Գերազանց և շատ հստակ',
        feedbackEs: '¡Perfecto! Demuestras claridad teórica y aportas ejemplos representativos que gustan mucho a los profesores de ESO.',
        feedbackHy: 'Հիանալի՛ է։ Դու ցուցաբերում ես տեսական հստակություն և բերում ես դպրոցական հիանալի օրինակներ։'
      },
      {
        id: 'opt-1-2',
        textEs: 'Uno es para cosas normales y el otro para nombres de personas, creo.',
        textHy: 'Կարծում եմ՝ մեկը սովորական բաների համար է, իսկ մյուսը՝ մարդկանց անունների։',
        isAppropriate: false,
        ratingEs: 'Aceptable pero incompleta',
        ratingHy: 'Ընդունելի է, բայց թերի',
        feedbackEs: 'Se entiende la idea, pero le falta precisión: los propios también nombran ríos, países y ciudades con mayúscula inicial.',
        feedbackHy: 'Միտքը հասկանալի է, բայց պակասում է ճշգրտությունը. հատուկ անունները նաև գետերն ու քաղաքներն են մեծատառով։'
      },
      {
        id: 'opt-1-3',
        textEs: 'No tengo ni idea, profe, pregúntele a otro.',
        textHy: 'Տեղյակ չեմ, պրոֆեսոր, ուրիշին հարցրեք։',
        isAppropriate: false,
        ratingEs: 'Inadecuada e informal',
        ratingHy: 'Անընդունելի և ոչ հարգալից',
        feedbackEs: 'Es una respuesta descortés. Si no lo sabes, es mejor decir: "No lo recuerdo con seguridad, profesor, ¿puede recordárnoslo?".',
        feedbackHy: 'Սա կոպիտ պատասխան է։ Եթե չգիտես, ավելի լավ է քաղաքավարի ասել՝ «Հստակ չեմ հիշում, կբացատրե՞ք նորից»։'
      }
    ]
  },
  {
    id: 'oral-2',
    titleEs: '2. Dos compañeros hablan en clase',
    titleHy: '2. Երկու դասընկեր զրուցում են դասարանում',
    contextEs: 'Tu compañero de pupitre no encuentra su estuche antes de empezar el dictado.',
    contextHy: 'Քո կողքի նստող դասընկերը թելադրությունից առաջ չի գտնում իր գրչատուփը։',
    speakerEs: 'Mateo (compañero)',
    speakerHy: 'Մատեո (դասընկեր)',
    promptEs: '—¡Oye! Se me ha olvidado el estuche en casa. ¿Me prestas un boli azul para el ejercicio de Lengua?',
    promptHy: '—Լսի՛ր, գրչատուփս տանն եմ մոռացել։ Ինձ կտա՞ս կապույտ գրիչդ իսպաներենի վարժության համար։',
    audioPromptText: 'Oye, se me ha olvidado el estuche en casa. ¿Me prestas un boli azul para el ejercicio de Lengua?',
    options: [
      {
        id: 'opt-2-1',
        textEs: '¡Claro, toma! Tengo dos en el estuche, quédatelo hasta que termine la clase.',
        textHy: 'Իհարկե, վերցրո՛ւ։ Գրչատուփիս մեջ երկու հատ ունեմ, թող քեզ մոտ մնա մինչև դասի ավարտը։',
        isAppropriate: true,
        ratingEs: 'Natural, solidaria y muy española',
        ratingHy: 'Բնական, ընկերական և համերաշխ',
        feedbackEs: '¡Genial! Refleja la solidaridad natural entre compañeros en el aula de 1.º de ESO.',
        feedbackHy: 'Հիանալի՛ է։ Արտացոլում է դասընկերների միջև փոխօգնության բնական մթնոլորտը։'
      },
      {
        id: 'opt-2-2',
        textEs: 'No, no te doy nada, búscate la vida.',
        textHy: 'Ոչ, ոչինչ էլ չեմ տա, գնա ինքդ ճարիր։',
        isAppropriate: false,
        ratingEs: 'Desagradable',
        ratingHy: 'Տհաճ և անընկերական',
        feedbackEs: 'Rompe la buena convivencia en el aula.',
        feedbackHy: 'Խաթարում է դասարանական լավ մթնոլորտը։'
      },
      {
        id: 'opt-2-3',
        textEs: 'Tengo este lápiz si te sirve también.',
        textHy: 'Այս մատիտն ունեմ, եթե քեզ դա էլ է պետք գալիս։',
        isAppropriate: true,
        ratingEs: 'Buena alternativa',
        ratingHy: 'Լավ այլընտրանք',
        feedbackEs: 'Ofreces una solución amable de forma constructiva.',
        feedbackHy: 'Բարեհամբույր և կառուցողական այլընտրանք ես առաջարկում։'
      }
    ]
  },
  {
    id: 'oral-3',
    titleEs: '3. Preparar un trabajo en grupo',
    titleHy: '3. Խմբային աշխատանք պատրաստել',
    contextEs: 'Estáis tres alumnos en la biblioteca repartiendo las tareas de un mural de Literatura.',
    contextHy: 'Երեք աշակերտով գրադարանում բաժանում եք գրականության պատի թերթի պարտականությունները։',
    speakerEs: 'Laura (coordinadora)',
    speakerHy: 'Լաուրա (խմբի համակարգող)',
    promptEs: '—Tenemos que entregar el mural sobre los géneros literarios el próximo martes. ¿Cómo nos organizamos?',
    promptHy: '—Գրական ժանրերի մասին պատի թերթը պետք է հանձնենք հաջորդ երեքշաբթի։ Ինչպե՞ս բաժանենք գործը։',
    audioPromptText: 'Tenemos que entregar el mural sobre los géneros literarios el próximo martes. ¿Cómo nos organizamos?',
    options: [
      {
        id: 'opt-3-1',
        textEs: 'Si os parece bien, yo busco la información y redacto los textos de lírica y narrativa, y vosotros buscáis imágenes y hacéis la portada.',
        textHy: 'Եթե համաձայն եք, ես կգտնեմ տեղեկությունը և կշարադրեմ քնարերգության ու պատմողական ժանրի տեքստերը, իսկ դուք նկարներ կգտնեք և կկազմեք շապիկը։',
        isAppropriate: true,
        ratingEs: 'Excelente iniciativa y trabajo en equipo',
        ratingHy: 'Հիանալի նախաձեռնություն և թիմային աշխատանք',
        feedbackEs: 'Muy bien estructurado y equilibrado para un trabajo escolar de 1.º de ESO.',
        feedbackHy: 'Շատ ճիշտ կազմակերպված և հավասարակշռված առաջարկ խմբի համար։'
      },
      {
        id: 'opt-3-2',
        textEs: 'Hacedlo vosotros, yo solo firmo con mi nombre.',
        textHy: 'Դուք արեք, ես միայն անունս կստորագրեմ։',
        isAppropriate: false,
        ratingEs: 'Totalmente inadecuada',
        ratingHy: 'Բացարձակ անընդունելի',
        feedbackEs: 'En el instituto todos los miembros del grupo deben colaborar por igual.',
        feedbackHy: 'Դպրոցական խմբային աշխատանքում բոլորը պետք է հավասարապես մասնակցեն։'
      },
      {
        id: 'opt-3-3',
        textEs: 'Podemos quedar mañana en la biblioteca después de comer y lo decidimos juntos.',
        textHy: 'Կարող ենք վաղը ճաշից հետո հանդիպել գրադարանում և միասին որոշել։',
        isAppropriate: true,
        ratingEs: 'Buena propuesta de consenso',
        ratingHy: 'Լավ առաջարկ միասին որոշելու համար',
        feedbackEs: 'Una propuesta madura y colaborativa.',
        feedbackHy: 'Հասուն և համագործակցային պատասխան։'
      }
    ]
  },
  {
    id: 'oral-4',
    titleEs: '4. Pedir ayuda al profesor',
    titleHy: '4. Օգնություն խնդրել ուսուցչից',
    contextEs: 'No has entendido bien cómo distinguir el predicado nominal del predicado verbal.',
    contextHy: 'Լավ չես հասկացել, թե ինչպես տարբերել անվանական ստորոգյալը բայականից։',
    speakerEs: 'Profesora Carmen',
    speakerHy: 'Ուսուցչուհի Կարմեն',
    promptEs: '—¿Hay alguna duda antes de empezar los ejercicios de la página 32?',
    promptHy: '—Որևէ հարց կա՞ նախքան 32-րդ էջի վարժություններին անցնելը։',
    audioPromptText: '¿Hay alguna duda antes de empezar los ejercicios de la página 32?',
    options: [
      {
        id: 'opt-4-1',
        textEs: 'Disculpe, Carmen, ¿podría explicar otra vez cómo reconocer los verbos copulativos en el predicado nominal? No me ha quedado del todo claro.',
        textHy: 'Կներե՛ք, Կարմեն, կարո՞ղ եք մեկ անգամ էլ բացատրել, թե ինչպես ճանաչել օժանդակ/կապող բայերը անվանական ստորոգյալում։ Ինձ համար լիովին պարզ չդարձավ։',
        isAppropriate: true,
        ratingEs: 'Educada, precisa y respetuosa',
        ratingHy: 'Քաղաքավարի, ճշգրիտ և հարգալից',
        feedbackEs: '¡Impecable! Usas el tratamiento respetuoso habitual en los centros escolares españoles y especificas exactamente tu duda.',
        feedbackHy: 'Անթերի՛ է։ Օգտագործում ես իսպանական դպրոցին բնորոշ քաղաքավարի ոճը և հստակ նշում ես քո հարցը։'
      },
      {
        id: 'opt-4-2',
        textEs: 'No entiendo nada de lo que ha dicho, lo explica fatal.',
        textHy: 'Ոչինչ չեմ հասկանում ձեր ասածից, շատ վատ եք բացատրում։',
        isAppropriate: false,
        ratingEs: 'Falta de respeto grave',
        ratingHy: 'Լուրջ անհարգալից վերաբերմունք',
        feedbackEs: 'Nunca se debe faltar al respeto al profesor.',
        feedbackHy: 'Երբեք չի կարելի անհարգալից խոսել ուսուցչի հետ։'
      },
      {
        id: 'opt-4-3',
        textEs: 'Sí, yo tengo una duda con el ejercicio dos.',
        textHy: 'Այո, ես հարց ունեմ երկրորդ վարժության հետ կապված։',
        isAppropriate: true,
        ratingEs: 'Aceptable y correcta',
        ratingHy: 'Ընդունելի և ճիշտ',
        feedbackEs: 'Buena intervención directa.',
        feedbackHy: 'Ճիշտ և ուղիղ հարցադրում։'
      }
    ]
  },
  {
    id: 'oral-5',
    titleEs: '5. Explicar una tarea',
    titleHy: '5. Բացատրել առաջադրանքը',
    contextEs: 'Un compañero que estuvo ausente ayer te pregunta qué mandó el profesor de Lengua.',
    contextHy: 'Մի դասընկեր, որը երեկ բացակա էր, քեզ հարցնում է, թե ինչ էր հանձնարարել ուսուցիչը։',
    speakerEs: 'David (compañero)',
    speakerHy: 'Դավիթ (դասընկեր)',
    promptEs: '—Ayer estuve malo y no pude venir. ¿Qué deberes mandó don Alberto para hoy?',
    promptHy: '—Երեկ հիվանդ էի և չկարողացա գալ։ Ի՞նչ տնային էր հանձնարարել դոն Ալբերտոն այսօրվա համար։',
    audioPromptText: 'Ayer estuve malo y no pude venir. ¿Qué deberes mandó don Alberto para hoy?',
    options: [
      {
        id: 'opt-5-1',
        textEs: 'Mandó leer el relato de la página 45 y hacer las actividades 1, 2 y 4 en el cuaderno. Si quieres te paso una foto de mis apuntes.',
        textHy: 'Հանձնարարեց կարդալ 45-րդ էջի պատմվածքը և տետրում անել 1, 2 և 4 վարժությունները։ Եթե ուզում ես, նշումներիս նկարը կուղարկեմ։',
        isAppropriate: true,
        ratingEs: 'Detallada, amable y sumamente solidaria',
        ratingHy: 'Մանրամասն, բարեհամբույր և շատ օգտակար',
        feedbackEs: 'Excelente respuesta que ayuda a tu compañero a ponerse al día sin problemas.',
        feedbackHy: 'Հիանալի պատասխան, որն օգնում է դասընկերոջդ անմիջապես տեղեկանալ տնայինին։'
      },
      {
        id: 'opt-5-2',
        textEs: 'Haber venido a clase, no es mi problema.',
        textHy: 'Գայիր դասի, իմ խնդիրը չէ։',
        isAppropriate: false,
        ratingEs: 'Insensible',
        ratingHy: 'Անտարբեր և կոպիտ',
        feedbackEs: 'Falta de empatía con un compañero enfermo.',
        feedbackHy: 'Կարեկցանքի բացակայություն հիվանդ դասընկերոջ հանդեպ։'
      },
      {
        id: 'opt-5-3',
        textEs: 'Creo que mandó algo de sintaxis, míralo en la plataforma virtual del IES.',
        textHy: 'Կարծես թե շարահյուսությունից էր, նայիր դպրոցի առցանց հարթակում։',
        isAppropriate: true,
        ratingEs: 'Útil y orientadora',
        ratingHy: 'Օգտակար և ուղղորդող',
        feedbackEs: 'Le orientas para que lo compruebe en el aula virtual.',
        feedbackHy: 'Ճիշտ ուղղորդում ես դեպի դպրոցի վիրտուալ հարթակը։'
      }
    ]
  },
  {
    id: 'oral-6',
    titleEs: '6. Responder en un examen oral',
    titleHy: '6. Պատասխանել բանավոր քննության ժամանակ',
    contextEs: 'Prueba oral de evaluación ante el tribunal o tu profesora de Lengua.',
    contextHy: 'Բանավոր ստուգողական հարցում ուսուցչուհու առաջ։',
    speakerEs: 'Evaluadora',
    speakerHy: 'Քննող ուսուցչուհի',
    promptEs: '—Define con tus palabras qué es una metáfora y pon un ejemplo sencillo.',
    promptHy: '—Քո բառերով սահմանիր, թե ինչ է փոխաբերությունը (Metáfora) և բեր պարզ օրինակ։',
    audioPromptText: 'Define con tus palabras qué es una metáfora y pon un ejemplo sencillo.',
    options: [
      {
        id: 'opt-6-1',
        textEs: 'Una metáfora es una figura literaria que identifica un término real con uno imaginario por su semejanza, sin usar "como". Por ejemplo: "El sol es una moneda de oro en el cielo".',
        textHy: 'Փոխաբերությունը գեղարվեստական միջոց է, որը նույնացնում է իրական և երևակայական հասկացությունները նմանության հիման վրա՝ առանց «ինչպես» բառի։ Օրինակ՝ «Արևը ոսկե մետաղադրամ է երկնքում»։',
        isAppropriate: true,
        ratingEs: 'De 10: Sobresaliente',
        ratingHy: '10 բալ՝ Գերազանց (Sobresaliente)',
        feedbackEs: 'Respuesta académica perfecta para 1.º de ESO: definición impecable y ejemplo ilustrativo.',
        feedbackHy: '1.º de ESO-ի համար կատարյալ պատասխան՝ անթերի սահմանում և վառ օրինակ։'
      },
      {
        id: 'opt-6-2',
        textEs: 'Una metáfora es cuando dices cosas raras en las poesías antiguas.',
        textHy: 'Փոխաբերությունը նա է, երբ հին բանաստեղծություններում տարօրինակ բաներ ես ասում։',
        isAppropriate: false,
        ratingEs: 'Muy vaga e insuficiente',
        ratingHy: 'Շատ անորոշ և անբավարար',
        feedbackEs: 'No demuestra estudio ni dominio de los recursos literarios.',
        feedbackHy: 'Չի ցուցաբերում գրական միջոցների իմացություն։'
      },
      {
        id: 'opt-6-3',
        textEs: 'Es como una comparación, por ejemplo decir: "Tus ojos brillan como estrellas".',
        textHy: 'Դա համեմատության նման է, օրինակ՝ ասել «Աչքերդ փայլում են աստղերի պես»։',
        isAppropriate: false,
        ratingEs: 'Error conceptual (confunde con el símil)',
        ratingHy: 'Հասկացական սխալ (շփոթել է համեմատության հետ)',
        feedbackEs: '¡Cuidado! Al incluir la palabra "como", se trata de un símil o comparación, no de una metáfora pura.',
        feedbackHy: 'Ուշադրությո՛ւն։ «Ինչպես/պես» (como) բառը առկա լինելու դեպքում դա համեմատություն է (símil), ոչ թե փոխաբերություն (metáfora)։'
      }
    ]
  },
  {
    id: 'oral-7',
    titleEs: '7. Explicar una opinión',
    titleHy: '7. Բացատրել սեփական կարծիքը',
    contextEs: 'Debate en clase sobre si es mejor leer libros en papel o en libro electrónico.',
    contextHy: 'Քննարկում դասարանում՝ արդյոք ավելի լավ է կարդալ թղթե գիրք, թե՞ էլեկտրոնային գիրք։',
    speakerEs: 'Profesor moderador',
    speakerHy: 'Ուսուցիչ (քննարկման վարող)',
    promptEs: '—¿Quién quiere defender su postura sobre la lectura digital frente al papel?',
    promptHy: '—Ո՞վ է ցանկանում պաշտպանել իր տեսակետը թղթե ընդդեմ թվային ընթերցանության հարցում։',
    audioPromptText: '¿Quién quiere defender su postura sobre la lectura digital frente al papel?',
    options: [
      {
        id: 'opt-7-1',
        textEs: 'En mi opinión, ambos formatos tienen ventajas: el libro digital es muy cómodo para viajar y no pesa, pero el papel permite concentrarse mejor sin distracciones ni fatiga visual.',
        textHy: 'Իմ կարծիքով՝ երկու տարբերակներն էլ առավելություններ ունեն. էլեկտրոնային գիրքը հարմար է ճամփորդելիս և թեթև է, բայց թուղթը թույլ է տալիս ավելի լավ կենտրոնանալ՝ առանց շեղումների և աչքերի հոգնածության։',
        isAppropriate: true,
        ratingEs: 'Argumentada y equilibrada',
        ratingHy: 'Փաստարկված և հավասարակշռված',
        feedbackEs: 'Excelente capacidad de argumentación: aportas razones concretas y una visión madura.',
        feedbackHy: 'Փաստարկման հիանալի կարողություն՝ կոնկրետ պատճառաբանություններով և հասուն հայացքով։'
      },
      {
        id: 'opt-7-2',
        textEs: 'El papel es un rollo y nadie lee eso ya.',
        textHy: 'Թուղթը ձանձրալի է, ու ոչ մեկ էլ դա չի կարդում։',
        isAppropriate: false,
        ratingEs: 'Sin argumentos y con jerga',
        ratingHy: 'Առանց փաստարկների և ժարգոնային',
        feedbackEs: 'Expresión coloquial que no aporta razones constructivas en un debate académico.',
        feedbackHy: 'Խոսակցական արտահայտություն, որը ոչ մի ծանրակշիռ փաստարկ չի պարունակում։'
      },
      {
        id: 'opt-7-3',
        textEs: 'Yo prefiero el papel porque me gusta subrayar con lápiz mis frases favoritas.',
        textHy: 'Ես նախընտրում եմ թուղթը, որովհետև սիրում եմ մատիտով ընդգծել իմ սիրած նախադասությունները։',
        isAppropriate: true,
        ratingEs: 'Personal y bien justificada',
        ratingHy: 'Անձնական և լավ հիմնավորված',
        feedbackEs: 'Muy buen argumento basado en una experiencia real y cercana.',
        feedbackHy: 'Շատ լավ փաստարկ՝ հիմնված անձնական իրական փորձի վրա։'
      }
    ]
  },
  {
    id: 'oral-8',
    titleEs: '8. Hablar de un libro',
    titleHy: '8. Խոսել գրքի մասին',
    contextEs: 'Presentación de la lectura obligatoria del primer trimestre en el aula.',
    contextHy: 'Առաջին եռամսյակի պարտադիր ընթերցանության գրքի ներկայացում դասարանում։',
    speakerEs: 'Profesora Carmen',
    speakerHy: 'Ուսուցչուհի Կարմեն',
    promptEs: '—Recomiéndanos el libro que has leído este trimestre y dinos por qué merece la pena leerlo.',
    promptHy: '—Խորհուրդ տուր մեզ այս եռամսյակում քո կարդացած գիրքը և ասա, թե ինչու է արժե այն կարդալ։',
    audioPromptText: 'Recomiéndanos el libro que has leído este trimestre y dinos por qué merece la pena leerlo.',
    options: [
      {
        id: 'opt-8-1',
        textEs: 'Recomiendo "El príncipe de la niebla" de Carlos Ruiz Zafón. Es una novela de misterio ambientada durante la guerra, con personajes muy valientes y un ritmo tan ágil que te mantiene atrapado desde el primer capítulo.',
        textHy: 'Խորհուրդ եմ տալիս Կառլոս Ռուիս Սաֆոնի «Մառախուղի արքայազնը»։ Այն առեղծվածային վեպ է պատերազմի տարիներին, շատ խիզախ կերպարներով և այնքան դինամիկ ընթացքով, որ գրավում է առաջին իսկ գլխից։',
        isAppropriate: true,
        ratingEs: 'Excelente reseña oral',
        ratingHy: 'Հիանալի բանավոր գրախոսություն',
        feedbackEs: '¡Maravilloso! Mencionas título, autor, género literario, contexto y tus impresiones como lector crítico.',
        feedbackHy: 'Հիասքա՛նչ է։ Նշում ես վերնագիրը, հեղինակին, ժանրը, միջավայրը և քո տպավորությունը։'
      },
      {
        id: 'opt-8-2',
        textEs: 'Pues me leí un libro que tenía portada azul y dibujos, estaba bien pero no me acuerdo del título.',
        textHy: 'Դե մի գիրք կարդացի, որ կապույտ կազմ ու նկարներ ուներ, լավն էր, բայց վերնագիրը չեմ հիշում։',
        isAppropriate: false,
        ratingEs: 'Insuficiente',
        ratingHy: 'Անբավարար',
        feedbackEs: 'Es fundamental recordar el título y el autor en una presentación literaria de ESO.',
        feedbackHy: '1.º de ESO-ի գրական ելույթի ժամանակ պարտադիր է իմանալ վերնագիրն ու հեղինակին։'
      },
      {
        id: 'opt-8-3',
        textEs: 'Trata de una aventura fantástica muy emocionante que os aconsejo leer a todos.',
        textHy: 'Այն մի շատ հուզիչ ֆանտաստիկ արկածի մասին է, որը բոլորիդ խորհուրդ եմ տալիս կարդալ։',
        isAppropriate: true,
        ratingEs: 'Aceptable y motivadora',
        ratingHy: 'Ընդունելի և ոգևորիչ',
        feedbackEs: 'Buena recomendación, aunque ganarías más nota citando el título y autor.',
        feedbackHy: 'Լավ առաջարկ է, թեև վերնագիրն ու հեղինակին հիշատակելը ավելի բարձր գնահատական կապահովեր։'
      }
    ]
  }
] as OralScenario[]).map((sc, idx) => randomizeOralScenario(sc, `oral-${idx}`));
