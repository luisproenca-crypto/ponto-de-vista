import type { LessonContent } from "@/lib/types";

/**
 * AULA 07 — BRASIL EM MOVIMENTO
 * Semana 03 • Geografia Essencial
 *
 * Ideia central: ler o território por meio da população — distribuição,
 * estrutura, mobilidade, urbanização.
 *
 * Título, subtítulo, descrição, vídeo e status ficam em `src/data/course.ts`
 * (metadados da aula). Este arquivo guarda somente o conteúdo pedagógico.
 *
 * Rascunho editorial para revisão do Prof. Luis — altere apenas os textos
 * deste arquivo; nenhum componente precisa ser modificado. A abertura usa
 * o bloco `hypothesis` (sem campo de imagem no tipo) para não criar
 * nenhum placeholder visual nesta etapa, já que nenhuma imagem foi
 * produzida ainda.
 *
 * Esta aula ainda não está publicada em `src/data/course.ts`.
 */
export const aula07Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de interpretar a distribuição da população brasileira, diferenciar conceitos demográficos básicos e relacionar população, mobilidade, urbanização e território.",

  hypothesis: {
    title: "O OLHAR DO PACO",
    intro:
      "Se o Brasil tem mais de oito milhões de quilômetros quadrados, por que sua população não está distribuída de maneira uniforme pelo território? Antes de explicar qualquer coisa, observe estas possibilidades.",
    cards: [
      { id: "litoral", label: "Concentração histórica próxima ao litoral" },
      { id: "urbanizacao", label: "Urbanização" },
      { id: "infraestrutura", label: "Infraestrutura" },
      { id: "emprego", label: "Emprego" },
      { id: "condicoes-naturais", label: "Condições naturais" },
      { id: "redes-transporte", label: "Redes de transporte" },
      { id: "formacao-economica", label: "Formação econômica do território" },
    ],
    question: "Qual dessas explicações parece mais forte para você — e por quê?",
    paco: "Escolha duas dessas possibilidades e tente imaginar como elas se conectam antes de continuar.",
    reveal:
      "Boas hipóteses. Nenhuma delas, sozinha, explica tudo — e é exatamente isso que vamos investigar nesta aula.",
  },

  lenses: {
    eyebrow: "Sete perguntas sobre onde vivemos",
    title: "LEIA O TERRITÓRIO PELA POPULAÇÃO",
    subtitle:
      "Cada conceito demográfico responde a uma pergunta diferente sobre como a população ocupa o espaço.",
    items: [
      {
        id: "populacao-absoluta",
        emoji: "🔢",
        name: "POPULAÇÃO ABSOLUTA",
        question: "Quantas pessoas vivem em determinado território?",
      },
      {
        id: "densidade-demografica",
        emoji: "📐",
        name: "DENSIDADE DEMOGRÁFICA",
        question: "Como essa população se distribui pela área?",
      },
      {
        id: "distribuicao-populacional",
        emoji: "🗺️",
        name: "DISTRIBUIÇÃO POPULACIONAL",
        question:
          "Em que partes do território a população está concentrada, e em quais está rarefeita?",
      },
      {
        id: "crescimento-vegetativo",
        emoji: "👶",
        name: "CRESCIMENTO VEGETATIVO",
        question: "Quanto a população cresce só pela diferença entre nascimentos e óbitos?",
      },
      {
        id: "estrutura-etaria",
        emoji: "🎂",
        name: "ESTRUTURA ETÁRIA",
        question: "Que idades predominam, e o que isso revela sobre a sociedade?",
      },
      {
        id: "migracao",
        emoji: "🧳",
        name: "MIGRAÇÃO",
        question: "Por que pessoas mudam de lugar de residência?",
      },
      {
        id: "urbanizacao",
        emoji: "🏙️",
        name: "URBANIZAÇÃO",
        question: "Por que grande parte da população se concentra nas cidades?",
      },
    ],
    highlight:
      "População não é apenas quantidade: é também distribuição, estrutura e movimento.",
    image: null,
    hideImage: true,
  },

  video: {
    title: "AGORA, VAMOS LER O BRASIL EM MOVIMENTO",
    paragraphs: [
      "Você já formulou hipóteses sobre onde a população brasileira se concentra e por quê. Agora vamos organizar essas observações com conceitos demográficos e aprender a transformar números, mapas e movimentos populacionais em leitura do território.",
    ],
  },

  concepts: {
    title: "DIFERENCIE COM PRECISÃO",
    items: [
      {
        id: "populacao-absoluta",
        name: "POPULAÇÃO ABSOLUTA",
        conceito:
          "População absoluta é o número total de habitantes de um território, sem considerar sua área. É a resposta à pergunta “quantas pessoas vivem aqui?” — um dado de quantidade, não de distribuição.",
        penseAssim:
          "Pergunte-se: essa informação está me dizendo quantas pessoas existem, ou como elas se espalham pelo espaço? Se for só a contagem total, você está diante de população absoluta.",
        exemplo:
          "Duas cidades podem ter o mesmo número total de habitantes, mas uma pode ocupar uma área pequena e compacta, e a outra, uma área muito maior e mais dispersa. A população absoluta das duas é igual; a forma como ela ocupa o espaço, não.",
        naoConfunda:
          "Populoso não é sinônimo de povoado: um território populoso tem grande número absoluto de habitantes; um território povoado apenas tem população presente, independentemente de quantas pessoas sejam. Um lugar pode ser povoado e pouco populoso ao mesmo tempo.",
        naProva:
          "Fique atento a enunciados que informam apenas o número total de habitantes: eles descrevem população absoluta, não densidade. A prova costuma testar se você confunde as duas.",
      },
      {
        id: "densidade-demografica",
        name: "DENSIDADE DEMOGRÁFICA",
        conceito:
          "Densidade demográfica é a relação entre o número de habitantes e a área do território, geralmente expressa em habitantes por quilômetro quadrado. Ela mostra como a população se distribui pelo espaço, não apenas quantas pessoas existem.",
        penseAssim:
          "Pergunte-se: a informação relaciona pessoas com área, ou só informa uma quantidade isolada? Se relaciona as duas coisas, você está diante de densidade.",
        exemplo:
          "Um território pequeno com muitos habitantes pode ter densidade alta mesmo com população absoluta menor do que a de um território enorme e pouco habitado, cuja densidade seria baixa.",
        naoConfunda:
          "Densidade alta não significa população absoluta alta, e o contrário também é verdadeiro: um território pode ter muitos habitantes (população absoluta alta) e, ainda assim, densidade baixa, se sua área for muito extensa.",
        naProva:
          "Questões costumam apresentar mapas de densidade e pedir para identificar áreas de concentração ou rarefação populacional — ou comparar dois territórios com dados de população e área para calcular ou interpretar a densidade.",
      },
      {
        id: "distribuicao-populacional",
        name: "DISTRIBUIÇÃO POPULACIONAL",
        conceito:
          "Distribuição populacional é o modo como a população se espalha (ou se concentra) por um território, considerando fatores históricos, econômicos, naturais e de infraestrutura. Diferentemente da densidade — que é um número médio —, a distribuição descreve o padrão espacial: onde há concentração e onde há vazios demográficos.",
        penseAssim:
          "Pergunte-se: o texto ou o mapa está descrevendo um padrão — onde a população se concentra e onde ela é rarefeita —, ou está dando um número único de densidade média? Padrões espaciais indicam distribuição.",
        exemplo:
          "Um país pode ter densidade demográfica média moderada e, ainda assim, apresentar grandes vazios demográficos em algumas regiões e forte concentração em outras — é a distribuição, não a densidade média, que revela esse contraste.",
        naoConfunda:
          "Distribuição não é o mesmo que densidade: a densidade é um número (média por área); a distribuição é um padrão espacial, que pode ser bastante desigual mesmo quando a densidade média do território inteiro parece moderada.",
        naProva:
          "Fique atento a mapas que mostram manchas de concentração populacional e áreas vazias: eles pedem leitura de distribuição, não apenas cálculo de densidade.",
      },
      {
        id: "crescimento-vegetativo",
        name: "CRESCIMENTO VEGETATIVO",
        conceito:
          "Crescimento vegetativo é o aumento (ou a redução) da população resultante apenas da diferença entre nascimentos e óbitos, sem considerar migrações. É um dos componentes do crescimento populacional total, mas não o único.",
        penseAssim:
          "Pergunte-se: essa mudança na população decorre só de quem nasceu e quem morreu, ou também de quem chegou e quem saiu do território? Se for só nascimentos e óbitos, é crescimento vegetativo.",
        exemplo:
          "Uma cidade pode ter crescimento vegetativo baixo (poucos nascimentos em relação aos óbitos) e, ainda assim, crescer rapidamente em população total, se receber um grande número de migrantes.",
        naoConfunda:
          "Crescimento populacional não é sinônimo de crescimento vegetativo: o crescimento populacional total soma o crescimento vegetativo ao saldo migratório (quem chega menos quem sai). Um território pode ter os dois em direções diferentes.",
        naProva:
          "Questões costumam comparar crescimento vegetativo e crescimento migratório para explicar por que a população de um lugar cresce ou diminui mais rápido do que o esperado apenas pelos nascimentos e óbitos.",
      },
      {
        id: "estrutura-etaria",
        name: "ESTRUTURA ETÁRIA",
        conceito:
          "Estrutura etária é a composição da população por faixas de idade, geralmente representada em pirâmides etárias. Ela revela tendências como envelhecimento populacional, natalidade e a proporção entre população em idade ativa e dependente.",
        penseAssim:
          "Pergunte-se: essa informação descreve quantas pessoas há em cada faixa de idade, ou compara essas faixas entre si? Se sim, você está lendo estrutura etária.",
        exemplo:
          "Uma pirâmide etária de base larga e topo estreito indica alta proporção de crianças e jovens; uma pirâmide de base estreita e meio mais largo indica uma população mais envelhecida.",
        naoConfunda:
          "Estrutura etária não é o mesmo que população absoluta: dois territórios podem ter a mesma população total e estruturas etárias completamente diferentes, com implicações sociais e econômicas distintas.",
        naProva:
          "Fique atento a pirâmides etárias na prova: a forma da pirâmide (base, corpo, topo) é a principal pista para reconhecer padrões de natalidade, mortalidade e envelhecimento.",
      },
      {
        id: "migracao",
        name: "MIGRAÇÃO",
        conceito:
          "Migração é o deslocamento de pessoas entre territórios com mudança de residência, geralmente por período prolongado ou permanente. Pode ocorrer dentro de um mesmo país (migração interna) ou entre países (migração internacional), e envolve fatores de expulsão e de atração.",
        penseAssim:
          "Pergunte-se: a pessoa está mudando de residência de forma mais duradoura, ou apenas se deslocando todos os dias para trabalhar ou estudar e depois voltando para casa? Só o primeiro caso é migração.",
        exemplo:
          "Uma pessoa que se muda de uma região para outra em busca de emprego, levando sua residência junto, está migrando. Uma pessoa que atravessa uma fronteira municipal todos os dias para trabalhar, mas continua morando no mesmo lugar, não está migrando: está se deslocando cotidianamente.",
        naoConfunda:
          "Migração não é sinônimo de deslocamento cotidiano (também chamado de movimento pendular): a migração envolve mudança de residência; o deslocamento cotidiano é o vaivém diário entre moradia e trabalho ou estudo, sem mudança de domicílio.",
        naProva:
          "Fique atento a enunciados que descrevem fluxos de pessoas entre regiões: verifique se há mudança de residência (migração) ou apenas deslocamento diário (movimento pendular) — a prova costuma explorar exatamente essa diferença.",
      },
      {
        id: "urbanizacao",
        name: "URBANIZAÇÃO",
        conceito:
          "Urbanização é o processo pelo qual aumenta a proporção da população que vive em áreas urbanas em relação à população total. É um processo, medido em proporção, e não apenas um número absoluto de moradores nas cidades.",
        penseAssim:
          "Pergunte-se: a informação fala da proporção da população que vive em cidades, ou apenas do número absoluto de moradores urbanos? Se é proporção, é urbanização.",
        exemplo:
          "Um território pode ter sua população urbana absoluta crescendo e, ainda assim, sua taxa de urbanização estar estável ou até caindo, se a população rural também estiver crescendo na mesma proporção.",
        naoConfunda:
          "Urbanização não é sinônimo de crescimento urbano: a urbanização é o aumento da proporção de moradores em cidades em relação ao total; o crescimento urbano é apenas o aumento do número absoluto de pessoas vivendo em áreas urbanas, o que pode acontecer mesmo sem aumento da proporção urbana.",
        naProva:
          "Fique atento a gráficos e textos que comparam população urbana e rural ao longo do tempo: a pergunta pode pedir a taxa de urbanização (proporção) ou apenas o crescimento da população urbana (número absoluto) — são respostas diferentes.",
      },
    ],
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Como a população brasileira se distribui pelo território?",
    center: "BRASIL",
    items: [
      {
        id: "concentracao-litoral",
        label: "CONCENTRAÇÃO NO LITORAL",
        description:
          "A ocupação do território brasileiro tem raízes históricas fortemente ligadas à faixa litorânea, onde se concentram, até hoje, algumas das maiores densidades demográficas do país.",
      },
      {
        id: "interior-menos-denso",
        label: "INTERIOR MENOS DENSO",
        description:
          "Grandes extensões do interior do país apresentam densidade demográfica bem mais baixa, embora concentrem recursos naturais e atividades econômicas importantes.",
      },
      {
        id: "metropolizacao",
        label: "METROPOLIZAÇÃO",
        description:
          "Parte expressiva da população brasileira vive em regiões metropolitanas, onde se concentram empregos, serviços e infraestrutura.",
      },
      {
        id: "interiorizacao",
        label: "INTERIORIZAÇÃO",
        description:
          "Ao mesmo tempo, fronteiras agrícolas e polos econômicos no interior atraem população, criando novos eixos de concentração fora do litoral.",
      },
      {
        id: "fluxos-migratorios",
        label: "FLUXOS MIGRATÓRIOS",
        description:
          "Fluxos migratórios internos recompõem constantemente a distribuição da população, em busca de emprego, estudo ou melhores condições de vida.",
      },
      {
        id: "redes-urbanas",
        label: "REDES URBANAS",
        description:
          "Cidades de diferentes tamanhos se conectam em redes urbanas, organizando fluxos de pessoas, mercadorias e serviços entre si.",
      },
    ],
    study:
      "Essas relações são estruturais: descrevem padrões duradouros de ocupação do território brasileiro, não um retrato fixo de um único momento. A distribuição da população continua se transformando, e cada nova leitura de dados precisa ser interpretada à luz desses padrões, não substituí-los.",
    highlight: "O território brasileiro nunca foi ocupado de forma uniforme — e não é por acaso.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: ["Mapa", "Pirâmide etária", "Tabela", "Gráfico de fluxo migratório"],
    demandsTitle: "A questão cobra",
    demands: [
      "Diferenciação conceitual",
      "Leitura espacial",
      "Interpretação de escala",
      "Distinção entre estoque e movimento",
    ],
    highlight:
      "A prova raramente pergunta “quantas pessoas vivem ali?” isoladamente: ela testa se você sabe qual conceito demográfico a situação está pedindo.",
    guidingIntro: "Diante de qualquer dado populacional, pergunte:",
    guidingQuestions: [
      "O dado fala de quantidade absoluta ou de proporção?",
      "O mapa mostra concentração ou distribuição?",
      "O fenômeno representa estoque populacional ou movimento?",
      "Qual escala está sendo analisada?",
    ],
  },

  question: {
    id: "s03-a07-q01",
    statement:
      "Um levantamento apresenta dois municípios fictícios. O município Alfa possui 40.000 habitantes distribuídos em 800 km². O município Beta possui 25.000 habitantes distribuídos em 100 km². Com base na relação entre população absoluta e densidade demográfica, é correto afirmar que:",
    options: [
      {
        id: "A",
        text: "Alfa tem densidade demográfica maior do que Beta, pois sua população absoluta é maior.",
      },
      {
        id: "B",
        text: "Beta tem densidade demográfica maior do que Alfa, embora sua população absoluta seja menor.",
      },
      {
        id: "C",
        text: "Alfa e Beta têm a mesma densidade demográfica, pois a diferença de área compensa a diferença de população.",
      },
      {
        id: "D",
        text: "Como Alfa tem mais habitantes, ele necessariamente concentra mais pessoas por quilômetro quadrado.",
      },
      {
        id: "E",
        text: "A densidade demográfica não pode ser calculada sem dados sobre estrutura etária.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "A alternativa B está correta. A densidade demográfica de Alfa é de 40.000 ÷ 800 = 50 habitantes por km²; a de Beta é de 25.000 ÷ 100 = 250 habitantes por km². Embora Alfa tenha população absoluta maior, sua densidade é bem menor do que a de Beta, porque sua área é proporcionalmente muito mais extensa. As demais alternativas confundem população absoluta com densidade demográfica: A e D tratam erroneamente população maior como sinônimo de densidade maior; C ignora que as áreas são muito diferentes; e E introduz um dado (estrutura etária) que não é necessário para calcular densidade.",
  },

  missionCheck:
    "Agora você consegue olhar para um dado populacional e perguntar não apenas “quantas pessoas são?”, mas “como essa população se distribui, se move e transforma o território?”",

  completionMessage:
    "População não é apenas quantas pessoas existem. É também onde vivem, como se deslocam e como transformam o território.",
};
