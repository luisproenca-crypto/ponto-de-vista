import type { LessonContent } from "@/lib/types";

/**
 * AULA 09 — ELEIÇÕES, REPRESENTAÇÃO E PARTICIPAÇÃO
 * Semana 03 • Política & Cidadania
 *
 * Ideia central: ler como escolhas coletivas se transformam em
 * representação — eleições, representação, sistemas eleitorais e
 * participação, com linguagem neutra e apartidária.
 *
 * Título, subtítulo, descrição, vídeo e status ficam em `src/data/course.ts`
 * (metadados da aula). Este arquivo guarda somente o conteúdo pedagógico.
 *
 * Rascunho editorial para revisão do Prof. Luis — altere apenas os textos
 * deste arquivo; nenhum componente precisa ser modificado. Neutralidade
 * político-partidária absoluta: nenhum candidato, partido, eleição real
 * ou preferência eleitoral é mencionado. A abertura usa `decisionInsight`
 * com `hideImage: true` (mecanismo já existente no projeto, usado na
 * Aula 06) para não criar nenhum placeholder visual, já que nenhuma
 * imagem foi produzida ainda.
 *
 * Esta aula ainda não está publicada em `src/data/course.ts`.
 */
export const aula09Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá compreender eleições como um dos mecanismos da democracia representativa, distinguir representação e participação, e reconhecer formas institucionais de participação cidadã.",

  decisionInsight: {
    title: "O OLHAR DO PACO",
    image: null,
    hideImage: true,
    rounds: [
      {
        id: "decisao-direta",
        question:
          "Uma escola recebeu recursos para reformar um espaço comum — o pátio coberto — e precisa decidir como usá-lo. Todos deveriam decidir diretamente sobre isso?",
        options: [
          { id: "sim-todos", label: "Sim, por votação de todos" },
          { id: "representantes", label: "Não, por representantes eleitos" },
          { id: "combinacao", label: "Uma combinação dos dois" },
          { id: "especialistas", label: "Por uma equipe técnica" },
        ],
        reveal:
          "Há mais de uma forma legítima de decidir coletivamente — a democracia representativa é uma delas, não a única possível.",
      },
      {
        id: "representantes",
        question: "Seria melhor escolher representantes para decidir por todos?",
        options: [
          { id: "sim", label: "Sim, representantes facilitam a decisão" },
          { id: "nao", label: "Não, cada um deveria decidir por si" },
          { id: "depende-prazo", label: "Depende do tempo disponível para decidir" },
          { id: "depende-tema", label: "Depende da complexidade do tema" },
        ],
        reveal:
          "Escolher representantes é uma forma de tornar decisões coletivas possíveis em grupos grandes — sem eliminar o debate sobre o que fazer.",
      },
      {
        id: "quem-nao-foi-eleito",
        question:
          "Mesmo com representantes escolhidos, quem não foi eleito deixa de poder participar?",
        options: [
          { id: "sim-deixa", label: "Sim, quem perdeu não participa mais" },
          { id: "nao-outros-canais", label: "Não, existem outros canais de participação" },
          { id: "so-proxima-eleicao", label: "Só volta a participar na próxima eleição" },
          { id: "depende-regras", label: "Depende das regras da instituição" },
        ],
        reveal:
          "Você acabou de encontrar a diferença entre representação e participação: representação e participação não são opostos — são os dois conceitos que vamos nomear com precisão agora.",
      },
    ],
  },

  lenses: {
    eyebrow: "Nove conceitos da vida democrática",
    title: "NOMEIE OS CONCEITOS",
    subtitle: "Cada um desses termos aparece o tempo todo — mas responde a uma pergunta própria.",
    items: [
      {
        id: "eleicao",
        emoji: "🗳️",
        name: "ELEIÇÃO",
        question: "Como as pessoas escolhem quem vai ocupar um cargo público?",
      },
      {
        id: "representacao",
        emoji: "🎤",
        name: "REPRESENTAÇÃO",
        question: "Quem fala e decide em nome de quem, e sob quais regras?",
      },
      {
        id: "mandato",
        emoji: "📅",
        name: "MANDATO",
        question: "Por quanto tempo e com quais limites alguém exerce um cargo eletivo?",
      },
      {
        id: "participacao",
        emoji: "🙋",
        name: "PARTICIPAÇÃO",
        question: "De que outras formas as pessoas podem influenciar decisões coletivas?",
      },
      {
        id: "maioria",
        emoji: "➕",
        name: "MAIORIA",
        question: "Quando o número de votos ou apoios define o resultado de uma decisão?",
      },
      {
        id: "minoria",
        emoji: "➖",
        name: "MINORIA",
        question: "Que direitos protegem quem fica em menor número em uma decisão?",
      },
      {
        id: "pluralismo",
        emoji: "🌈",
        name: "PLURALISMO",
        question: "Por que a convivência de ideias diferentes é parte da democracia?",
      },
      {
        id: "instituicoes",
        emoji: "🏛️",
        name: "INSTITUIÇÕES",
        question: "Que estruturas organizam e dão continuidade às regras do jogo democrático?",
      },
      {
        id: "direitos-politicos",
        emoji: "📜",
        name: "DIREITOS POLÍTICOS",
        question: "Que garantias permitem votar, ser votado e participar da vida pública?",
      },
    ],
    highlight: "Democracia é feita de vários mecanismos — eleição é só um deles.",
    image: null,
    hideImage: true,
  },

  video: {
    title: "AGORA, VAMOS ORGANIZAR COMO AS ESCOLHAS VIRAM REPRESENTAÇÃO",
    paragraphs: [
      "Você já percebeu que decidir coletivamente pode envolver participação direta, representantes, regras e direitos. Agora vamos entender como eleições, representação e outras formas de participação se relacionam em uma democracia.",
    ],
  },

  deepDive: {
    title: "APROFUNDE OS MECANISMOS DA REPRESENTAÇÃO",
    items: [
      {
        id: "democracia-representativa",
        title: "Eleição não é o mesmo que representação",
        content:
          "Eleição é o mecanismo de escolha: o processo pelo qual pessoas votam para indicar quem ocupará determinado cargo. Representação é a relação política que resulta desse mecanismo — pela qual as pessoas escolhidas exercem funções públicas por um período determinado e dentro de regras institucionais, respondendo, ao final do mandato, pelo exercício desse cargo. Sociedades numerosas recorrem à representação porque seria inviável reunir todos os cidadãos para decidir diretamente cada questão pública.",
        highlight: "A eleição escolhe; a representação é a relação política que resulta dessa escolha.",
      },
      {
        id: "maioria-limites",
        title: "Democracia é só a maioria decidir?",
        content:
          "Democracia não significa apenas “a maioria manda”. Ela também envolve regras estáveis, direitos fundamentais que não podem ser suprimidos por uma votação, proteção às minorias, pluralismo de ideias e instituições capazes de aplicar essas regras de forma previsível. Uma decisão tomada pela maioria, mas que desrespeitasse direitos básicos de um grupo, não seria compatível com os princípios democráticos.",
        highlight: "A maioria decide — dentro de regras que protegem a todos.",
      },
      {
        id: "alem-do-voto",
        title: "Participar é só votar?",
        content:
          "O voto é um mecanismo central de participação, mas não o único. Plebiscitos e referendos consultam a população diretamente sobre questões específicas; a iniciativa popular permite a apresentação de propostas de lei quando cumpridos requisitos legais; audiências públicas, conselhos, associações e o acompanhamento das decisões públicas também são canais de participação. Esses mecanismos não têm o mesmo peso jurídico nem funcionam da mesma forma entre si — cada um tem regras próprias —, mas todos ampliam as formas de intervir na vida pública além do dia da eleição.",
        highlight: "Votar é um mecanismo de participação. Não é o único.",
      },
      {
        id: "sistemas-eleitorais",
        title: "Como os votos se transformam em representantes?",
        content:
          "Diferentes cargos podem usar regras diferentes para converter votos em vagas ocupadas. Em sistemas de tipo majoritário, é eleito quem obtém mais votos para aquele cargo específico. Em sistemas de tipo proporcional, as vagas de um órgão colegiado são distribuídas de acordo com a proporção de votos recebida por cada candidatura ou legenda. Cada sistema produz resultados e formas de representação diferentes, sem que um seja universalmente “melhor” do que o outro — a escolha depende do desenho institucional de cada país e de cada cargo.",
        highlight: "A mesma quantidade de votos pode virar representação de formas diferentes.",
        flow: ["Voto", "Apuração", "Regra de conversão", "Representante eleito"],
      },
    ],
    closing:
      "Perceba que esses mecanismos não competem entre si: eles compõem, juntos, a forma como uma democracia representativa organiza decisões coletivas.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: ["Texto institucional", "Situação fictícia", "Gráfico eleitoral", "Trecho da Constituição"],
    demandsTitle: "A questão cobra",
    demands: [
      "Distinção entre democracia direta e representativa",
      "Relação entre maioria e direitos",
      "Reconhecimento de canais de participação",
      "Diferenciação entre sistemas eleitorais",
    ],
    highlight:
      "A prova raramente pergunta “o que é uma eleição?” isoladamente: ela testa se você reconhece representação e participação em uma situação concreta.",
    guidingIntro: "Diante de uma situação sobre decisão coletiva, pergunte:",
    guidingQuestions: [
      "A decisão foi tomada de forma direta ou por representantes?",
      "A maioria decidiu dentro de quais regras e limites?",
      "Que canais de participação existiam além do voto?",
      "A situação descreve forma de governo, regime político ou sistema eleitoral?",
      "Os votos foram convertidos em representação por regra majoritária ou proporcional?",
    ],
  },

  question: {
    id: "s03-a09-q01",
    statement:
      "Em uma associação de moradores fictícia, os associados elegem uma diretoria para um mandato de dois anos, responsável por decisões do dia a dia. Além disso, o estatuto da associação prevê que decisões de grande impacto financeiro só podem ser aprovadas em assembleia geral, aberta à participação de todos os associados, eleitos ou não. Com base na distinção entre representação e participação, é correto afirmar que essa associação:",
    options: [
      {
        id: "A",
        text: "elimina a participação dos associados que não integram a diretoria eleita.",
      },
      {
        id: "B",
        text: "combina representação, por meio da diretoria eleita, com participação direta, por meio da assembleia geral.",
      },
      {
        id: "C",
        text: "deixa de ser democrática, pois nem todas as decisões são tomadas diretamente por todos.",
      },
      {
        id: "D",
        text: "torna sem efeito o mandato da diretoria, já que a assembleia pode decidir sobre qualquer assunto.",
      },
      {
        id: "E",
        text: "só permite participação institucional durante o período eleitoral.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "A alternativa B está correta. A diretoria eleita exerce representação: decide o dia a dia da associação por mandato definido. A assembleia geral, aberta a todos os associados para decisões de grande impacto, é um mecanismo de participação direta. As duas formas coexistem e se complementam, sem que uma anule a outra. As demais alternativas erram: A ignora a existência da assembleia geral; C trata erroneamente a representação como incompatível com democracia; D generaliza o alcance da assembleia para além do que o estatuto descreve; e E ignora que a assembleia geral é, ela mesma, um canal de participação fora do período eleitoral.",
  },

  missionCheck:
    "Agora você consegue distinguir eleição, representação e participação, e reconhecer, numa situação concreta, os mecanismos que sustentam uma decisão coletiva democrática?",

  completionMessage:
    "Votar é uma forma essencial de participação democrática — mas cidadania não começa nem termina na urna.",
};
