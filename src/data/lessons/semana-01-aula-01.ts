import type { LessonContent } from "@/lib/types";

/**
 * AULA 01 — APRENDER A OLHAR
 * Semana 01 • Geografia Essencial
 *
 * Todo o texto pedagógico desta aula foi definido pelo Prof. Luis.
 * Para editar a aula, altere apenas os textos deste arquivo — nenhum
 * componente precisa ser modificado.
 *
 * Campos com valor `null` aparecem no site como "Conteúdo em preparação".
 */
export const aula01Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de observar uma situação e escolher quais conceitos geográficos ajudam a compreendê-la.",

  observation: {
    title: "O OLHAR DO PACO",
    lines: [
      "Antes que eu explique qualquer coisa, observe.",
      "Não procure a resposta certa ainda. O objetivo agora é aprender a fazer perguntas.",
    ],
    image: {
      // Envie o arquivo para: /public/assets/aulas/aula01-olhar-paco.jpg
      src: "/assets/aulas/aula01-olhar-paco.jpg",
      alt: "Paisagem urbana ilustrativa usada para o exercício de observação da Aula 01",
      caption: "Paisagem urbana ilustrativa criada para fins didáticos.",
    },
    questions: [
      "O que você consegue observar?",
      "O que nesse espaço foi transformado pelas pessoas?",
      "Quem utiliza esse espaço — e de maneiras iguais ou diferentes?",
      "Você percebe alguma relação de poder ou desigualdade?",
      "Esse espaço teria o mesmo significado para todas as pessoas?",
    ],
    closing: "GUARDE SUAS RESPOSTAS. VOLTAREMOS A ESTA IMAGEM NO FINAL DA AULA.",
  },

  lenses: {
    title: "DÊ NOME AO QUE VOCÊ VIU",
    subtitle:
      "Observar é o começo. Agora vamos transformar percepções em conceitos.",
    items: [
      {
        id: "espaco-geografico",
        emoji: "🌍",
        name: "ESPAÇO GEOGRÁFICO",
        question:
          "Que relações entre sociedade e natureza produziram esse espaço?",
      },
      {
        id: "paisagem",
        emoji: "👁",
        name: "PAISAGEM",
        question: "O que consigo perceber e interpretar neste espaço?",
      },
      {
        id: "lugar",
        emoji: "📍",
        name: "LUGAR",
        question:
          "Que relações, experiências e significados as pessoas constroem aqui?",
      },
      {
        id: "territorio",
        emoji: "🧭",
        name: "TERRITÓRIO",
        question: "Quem controla, organiza ou disputa esse espaço?",
      },
      {
        id: "regiao",
        emoji: "🗺",
        name: "REGIÃO",
        question: "Como podemos agrupar e diferenciar partes do espaço?",
      },
    ],
    highlight:
      "Uma mesma realidade pode ser observada por lentes diferentes. O conceito que usamos muda aquilo que conseguimos enxergar.",
    image: {
      // Envie o arquivo para: /public/assets/aulas/cinco-lentes.jpg
      src: "/assets/aulas/cinco-lentes.jpg",
      alt: "Representação visual das cinco lentes conceituais da Geografia",
    },
  },

  lookAgain: {
    title: "AGORA OLHE DE NOVO",
    intro: "A imagem é a mesma. Suas perguntas não deveriam ser.",
    items: [
      {
        id: "espaco-geografico",
        name: "ESPAÇO GEOGRÁFICO",
        question:
          "Que relações entre sociedade e natureza produziram esse espaço?",
      },
      {
        id: "paisagem",
        name: "PAISAGEM",
        question: "O que a paisagem revela sobre esse espaço?",
      },
      { id: "lugar", name: "LUGAR", question: "Como seria viver aqui?" },
      {
        id: "territorio",
        name: "TERRITÓRIO",
        question: "Onde aparecem poder, controle ou desigualdade?",
      },
      {
        id: "regiao",
        name: "REGIÃO",
        question:
          "Como poderíamos dividir essa realidade para compreendê-la melhor?",
      },
    ],
    closingQuote:
      "A Geografia começa quando deixamos de perguntar apenas “o que existe aqui?” e começamos a perguntar “por que isso está aqui, quem produziu isso e o que isso significa?”",
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "Você já observou. Já fez perguntas. Já conheceu as cinco lentes.",
      "Agora chegou o momento de entender com mais precisão o que cada uma delas significa — e aprender a reconhecer qual lente uma questão de vestibular está pedindo que você use.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    /**
     * O campo "conceito" traz a pergunta-guia de cada lente (texto do curso).
     * Os demais campos aguardam a redação do Prof. Luis e aparecem no site
     * como "Conteúdo em preparação" enquanto estiverem `null`.
     */
    items: [
      {
        id: "espaco-geografico",
        name: "ESPAÇO GEOGRÁFICO",
        conceito:
          "O espaço geográfico é o espaço produzido e continuamente transformado pelas relações entre sociedade e natureza ao longo do tempo. Nele se combinam trabalho, técnica, infraestrutura, decisões e diferentes formas de apropriação do espaço.",
        penseAssim:
          "Pense no caminho entre sua casa e a escola. Ruas, semáforos, prédios, comércios, redes elétricas, ônibus e áreas verdes não estão ali por acaso. Cada elemento revela relações entre pessoas, natureza, trabalho, técnicas e decisões acumuladas ao longo do tempo.",
        exemplo:
          "Uma área originalmente coberta por vegetação pode ser transformada pela agricultura, receber uma rodovia e, anos depois, passar por expansão urbana com bairros, condomínios e serviços. O espaço muda porque as relações sociais, econômicas e técnicas também mudam.",
        naoConfunda:
          "Espaço geográfico não significa apenas “tudo aquilo que o ser humano modificou”. Essa definição é limitada. Elementos naturais também fazem parte dele quando estão relacionados às formas como a sociedade utiliza, transforma, organiza e atribui funções ao espaço.",
        naProva:
          "Fique atento a situações envolvendo produção e transformação do espaço, trabalho, técnica, infraestrutura, urbanização, industrialização e relações sociedade–natureza. A questão pode não citar “espaço geográfico”: ela pode pedir que você reconheça o processo que está produzindo ou transformando determinada realidade.",
      },
      {
        id: "paisagem",
        name: "PAISAGEM",
        conceito:
          "Paisagem é a dimensão perceptível do espaço geográfico: aquilo que podemos perceber e interpretar por meio dos sentidos. Ela reúne elementos naturais e humanos e carrega marcas das transformações ocorridas ao longo do tempo. Por isso, observar uma paisagem também significa procurar pistas sobre os processos que ajudaram a produzi-la.",
        penseAssim:
          "Imagine que você esteja caminhando por uma cidade. Você percebe prédios, ruas, árvores, pessoas, placas e veículos, mas também pode notar sons, movimentos, cheiros e diferentes ritmos. Tudo isso ajuda a compor a paisagem. O desafio da Geografia não é apenas identificar o que está diante de nós, mas perguntar: “O que essa paisagem revela sobre o espaço e sobre a sociedade que o produziu?”",
        exemplo:
          "Em um centro histórico, uma igreja construída no século XIX pode dividir a paisagem com edifícios do século XX, uma estação de metrô, automóveis, redes de telecomunicação e pessoas utilizando smartphones. Elementos produzidos em diferentes momentos permanecem juntos, fazendo da paisagem uma espécie de registro das transformações do espaço ao longo do tempo.",
        naoConfunda:
          "Paisagem não significa apenas natureza, cenário bonito ou uma vista digna de fotografia. Uma avenida congestionada, uma área industrial, uma periferia urbana, uma plantação mecanizada ou uma região degradada ambientalmente também constituem paisagens. Além disso, paisagem não é sinônimo de espaço geográfico: ela corresponde à dimensão do espaço que conseguimos perceber e interpretar.",
        naProva:
          "Fique atento a fotografias, imagens, descrições de lugares, comparações entre diferentes períodos e questões que apresentem marcas visíveis ou perceptíveis das transformações do espaço. Expressões como “mudanças na paisagem”, “marcas do tempo”, “elementos naturais e humanos” e “transformações observáveis” costumam indicar essa lente. A prova pode exigir que você interprete o que uma paisagem revela, e não apenas que descreva aquilo que aparece nela.",
      },
      {
        id: "lugar",
        name: "LUGAR",
        conceito:
          "Lugar é o espaço vivido e experimentado pelas pessoas. Ele se constrói por meio das relações cotidianas, das experiências, das memórias, das identidades e dos significados atribuídos ao espaço. Por isso, um lugar não é definido apenas por onde está localizado, mas também pelas relações que pessoas e grupos estabelecem com ele.",
        penseAssim:
          "Pense na sua escola. Para alguém que nunca estudou nela, ela pode ser apenas um prédio localizado em determinado endereço. Para você, porém, esse espaço pode reunir amizades, professores, provas, conquistas, inseguranças, momentos engraçados e lembranças. O espaço físico pode ser o mesmo, mas as experiências fazem com que ele adquira significados. É aí que começamos a enxergá-lo como lugar.",
        exemplo:
          "Uma praça no centro de uma cidade pode representar coisas diferentes para diferentes pessoas. Para um turista, pode ser um ponto de visitação. Para um trabalhador, parte do caminho cotidiano. Para um grupo de jovens, um espaço de encontro. Para alguém que viveu ali durante muitos anos, pode carregar memórias pessoais e afetivas. A localização é a mesma, mas as experiências e os significados construídos nesse espaço são diferentes.",
        naoConfunda:
          "Lugar não é simplesmente localização. Saber as coordenadas ou o endereço de um espaço informa onde ele está, mas não explica as relações construídas nele. Também não significa necessariamente um espaço agradável ou pelo qual sentimos carinho: lugares podem envolver pertencimento e afeto, mas também conflitos, exclusões, medos e experiências negativas. O essencial é compreender a relação vivida entre pessoas e espaço.",
        naProva:
          "Fique atento a situações envolvendo cotidiano, pertencimento, identidade, memória, experiência, vínculos e significados atribuídos ao espaço. Relatos pessoais, práticas culturais, relações comunitárias, transformações no cotidiano e diferentes percepções sobre um mesmo espaço podem mobilizar essa lente. A questão pode não utilizar a palavra “lugar”: muitas vezes, você precisará reconhecê-lo pela relação entre experiência humana e espaço.",
      },
      {
        id: "territorio",
        name: "TERRITÓRIO",
        conceito:
          "Território é o espaço apropriado, organizado, controlado ou disputado por diferentes agentes e relações de poder. Esse poder pode ser exercido pelo Estado, por empresas, grupos sociais, comunidades, organizações ou outros agentes. Por isso, compreender um território significa investigar quem exerce poder sobre determinado espaço, de que maneira esse poder é estabelecido e quem pode contestá-lo.",
        penseAssim:
          "Imagine uma área da cidade. Saber onde ela está localizada ainda não é suficiente para compreendê-la como território. Pergunte: quem estabelece as regras de uso desse espaço? Quem pode entrar ou permanecer nele? Quem decide o que será construído? Existem grupos disputando sua utilização? Quando começamos a investigar controle, apropriação, autoridade e disputa, estamos olhando para o espaço pela lente do território.",
        exemplo:
          "Uma fronteira entre dois países expressa a autoridade dos Estados sobre seus respectivos territórios, mas a ideia de território aparece em muitas outras escalas. Terras indígenas, áreas controladas por empresas, espaços disputados por diferentes grupos sociais e regiões estratégicas por seus recursos naturais também podem ser analisados a partir das relações de poder que organizam, controlam ou disputam esses espaços.",
        naoConfunda:
          "Território não é sinônimo de país e também não significa simplesmente uma área delimitada em um mapa. Países possuem territórios, mas relações territoriais aparecem em diferentes escalas e podem ultrapassar limites político-administrativos. O elemento fundamental não é apenas a existência de uma fronteira: é a presença de relações de poder, apropriação, controle ou disputa sobre o espaço.",
        naProva:
          "Fique atento a situações envolvendo fronteiras, soberania, controle de recursos, conflitos fundiários, disputas territoriais, povos tradicionais, atuação do Estado, empresas, grupos sociais e relações geopolíticas. Perguntas como “quem controla?”, “quem decide?”, “quem se apropria?” ou “quem disputa?” são pistas importantes. Mesmo quando a palavra “território” não aparece no enunciado, relações de poder sobre o espaço frequentemente indicam essa lente.",
      },
      {
        id: "regiao",
        name: "REGIÃO",
        conceito:
          "Região é um recorte do espaço estabelecido a partir de determinados critérios que permitem agrupar, diferenciar e analisar áreas. Esses critérios podem ser naturais, econômicos, sociais, culturais, históricos, políticos ou resultar da combinação de vários fatores. Por isso, regionalizar significa selecionar critérios para organizar a realidade espacial e torná-la mais compreensível.",
        penseAssim:
          "Imagine o mapa do Brasil. Podemos dividi-lo considerando características naturais, atividades econômicas, condições sociais, redes urbanas, aspectos históricos ou limites político-administrativos. Dependendo do critério escolhido, as divisões podem mudar. O território brasileiro continua sendo o mesmo; o que muda é a maneira como decidimos agrupá-lo para compreender determinado aspecto da realidade.",
        exemplo:
          "O Brasil pode ser regionalizado de diferentes maneiras. A divisão oficial do IBGE organiza o território em cinco grandes regiões formadas pelo agrupamento dos estados. Outras propostas de regionalização podem utilizar critérios econômicos, históricos, sociais ou de integração territorial e, por isso, produzir recortes diferentes. Cada regionalização procura destacar determinadas características e relações existentes no espaço.",
        naoConfunda:
          "Região não é simplesmente uma área que existe naturalmente com limites fixos e indiscutíveis. As regiões resultam de critérios utilizados para interpretar, organizar ou administrar o espaço. Isso não significa que qualquer divisão seja igualmente adequada: uma regionalização precisa apresentar critérios coerentes com seu objetivo. Por isso, diante de dois mapas regionais diferentes, a pergunta mais importante não é apenas “qual deles está certo?”, mas “quais critérios foram utilizados e o que cada divisão pretende mostrar?”.",
        naProva:
          "Fique atento a mapas e textos que apresentem divisões do espaço, regionalizações, agrupamentos de áreas, critérios de classificação, contrastes socioeconômicos, características naturais ou diferenciações territoriais. A prova pode comparar duas regionalizações e pedir que você reconheça os critérios utilizados ou explique por que os limites são diferentes. Palavras como “divisão”, “agrupamento”, “critério”, “diferenciação” e “regionalização” são pistas importantes para essa lente.",
      },
    ],
  },

  question: {
    id: "s01-a01-q01",
    statement:
      "Em uma área central de uma grande cidade, um projeto de requalificação urbana prevê a construção de novos equipamentos culturais, a valorização imobiliária e mudanças nas regras de utilização dos espaços públicos. Enquanto o poder público e grupos empresariais defendem o projeto como estratégia de revitalização, moradores antigos, trabalhadores informais e movimentos sociais questionam possíveis remoções e restrições ao uso da área. Considerando as cinco lentes do olhar geográfico trabalhadas nesta aula, qual conceito permite analisar mais diretamente as relações de poder, apropriação, controle e disputa presentes nessa situação?",
    options: [
      { id: "A", text: "Espaço geográfico" },
      { id: "B", text: "Paisagem" },
      { id: "C", text: "Lugar" },
      { id: "D", text: "Território" },
      { id: "E", text: "Região" },
    ],
    correctOptionId: "D",
    explanation:
      "A alternativa D está correta. O conceito de território permite investigar como diferentes agentes exercem, negociam ou contestam poder sobre determinado espaço. No caso apresentado, poder público, empresas, moradores, trabalhadores e movimentos sociais possuem interesses distintos sobre quem pode utilizar a área, como ela será organizada e quais usos serão permitidos. As demais lentes também poderiam contribuir para compreender essa realidade: poderíamos analisar as transformações da paisagem, as experiências de lugar dos moradores ou a produção do espaço geográfico. Entretanto, quando a questão destaca apropriação, controle, interesses e disputa entre agentes, a lente mais diretamente mobilizada é a de território.",
  },

  missionCheck:
    "Agora você consegue observar uma situação e escolher quais conceitos geográficos ajudam a compreendê-la?",
};
