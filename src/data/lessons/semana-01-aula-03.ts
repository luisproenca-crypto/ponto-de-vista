import type { LessonContent } from "@/lib/types";

/**
 * AULA 03 — Política & Cidadania
 * Semana 01
 *
 * Eixo conceitual: Estado, país, nação e governo.
 * Todo o texto pedagógico desta aula foi definido pelo Prof. Luis.
 * Para editar a aula, altere apenas os textos deste arquivo — nenhum
 * componente precisa ser modificado.
 *
 * Esta aula ainda não está publicada em `src/data/course.ts`.
 */
export const aula03Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de diferenciar Estado, país, nação e governo, reconhecendo essas distinções em situações concretas e em questões de vestibular e do ENEM.",

  decisionInsight: {
    title: "O OLHAR DO PACO",
    image: {
      src: "/assets/aulas/aula03-olhar-paco.jpg",
      alt: "Praça pública ilustrativa usada para o exercício de decisão da Aula 03",
    },
    rounds: [
      {
        id: "prioridade",
        question:
          "A prefeitura possui recursos para realizar uma grande intervenção nesta praça. O que deveria ser prioridade?",
        options: [
          { id: "arvores", label: "Mais árvores" },
          { id: "estacionamento", label: "Estacionamento" },
          { id: "quadra", label: "Quadra esportiva" },
          { id: "iluminacao", label: "Iluminação" },
          { id: "lazer-infantil", label: "Lazer infantil" },
          { id: "acessibilidade", label: "Acessibilidade" },
        ],
        reveal:
          "Você fez uma escolha. Mas outras pessoas poderiam escolher diferente.",
      },
      {
        id: "quem-decide",
        question: "Agora vem a pergunta mais interessante: quem deveria decidir?",
        options: [
          { id: "moradores", label: "Moradores" },
          { id: "prefeitura", label: "Prefeitura" },
          { id: "comerciantes", label: "Comerciantes" },
          { id: "especialistas", label: "Especialistas" },
          { id: "vereadores", label: "Vereadores" },
          { id: "usuarios-praca", label: "Usuários da praça" },
        ],
        reveal:
          "Você acabou de encontrar a política antes mesmo de falarmos de eleição.",
      },
    ],
  },

  connection: {
    title: "ISSO JÁ ERA POLÍTICA",
    flow: ["Decisão", "Prioridade", "Poder", "Participação", "Atores sociais"],
    highlight:
      "Política é a forma como uma sociedade decide o que é prioridade, quem decide e como lidar com os conflitos que essas escolhas produzem.",
    text: "Antes de qualquer eleição, qualquer partido ou qualquer discurso, política é isso: decisões coletivas sobre recursos e espaços que todos compartilham. Foi exatamente isso que aconteceu na praça — e é isso que vamos aprender a nomear com precisão.",
  },

  lenses: {
    eyebrow: "Quatro conceitos, quatro perguntas",
    title: "NOMEIE OS CONCEITOS",
    subtitle: "Quatro palavras que parecem sinônimos, mas não são.",
    items: [
      {
        id: "estado",
        emoji: "🏛️",
        name: "ESTADO",
        question:
          "Qual é a estrutura político-institucional relativamente permanente que organiza o poder sobre um território?",
      },
      {
        id: "pais",
        emoji: "🗺️",
        name: "PAÍS",
        question:
          "Qual é a unidade territorial reconhecida internacionalmente?",
      },
      {
        id: "nacao",
        emoji: "🤝",
        name: "NAÇÃO",
        question:
          "Qual é o grupo humano unido por identidade, história ou cultura compartilhada?",
      },
      {
        id: "governo",
        emoji: "🧑‍💼",
        name: "GOVERNO",
        question: "Quem exerce o poder do Estado neste momento?",
      },
    ],
    highlight:
      "Quatro conceitos, quatro perguntas diferentes. Confundi-los é um dos erros mais comuns em Geografia e Política.",
    image: null,
    hideImage: true,
  },

  video: {
    title: "AGORA, VAMOS ORGANIZAR ESSAS IDEIAS",
    paragraphs: [
      "Você já percebeu que uma decisão sobre uma praça envolve poder, prioridade e participação. Já conheceu quatro conceitos que parecem sinônimos. Agora é hora de entender com precisão o que diferencia cada um deles — e por que essa diferença importa tanto nas provas quanto na vida real.",
    ],
  },

  concepts: {
    title: "DIFERENCIE COM PRECISÃO",
    items: [
      {
        id: "estado",
        name: "ESTADO",
        conceito:
          "Estado é a estrutura político-institucional relativamente permanente que organiza o poder sobre um território e uma população, por meio de leis, instituições, forças de segurança e um sistema de governo. O Estado existe independentemente de quem ocupa o poder em determinado momento.",
        penseAssim:
          "Pergunte-se: se o presidente, o prefeito ou o governador mudar amanhã, as leis, os tribunais, as forças armadas e os órgãos públicos deixam de existir? Não — porque eles pertencem ao Estado, não a quem governa.",
        exemplo:
          "A Constituição de 1988 alterou profundamente o ordenamento institucional brasileiro, substituindo o regime militar por uma ordem democrática e redefinindo direitos, poderes e instituições. Ainda assim, isso não significou, por si só, o surgimento de um novo Estado brasileiro: o território, a soberania e a continuidade do Estado foram preservados.",
        naoConfunda:
          "Estado não é sinônimo de governo: o governo muda periodicamente, por eleição ou sucessão; o Estado é a estrutura político-institucional relativamente permanente que segue existindo independentemente de quem está no poder. Também não confunda Estado com país: Estado é a dimensão política e institucional; país é a dimensão territorial reconhecida internacionalmente.",
        naProva:
          "Questões costumam testar exatamente essa troca: apresentam uma mudança de governo e perguntam se isso significa mudança de Estado. Fique atento a expressões como “estruturas institucionais”, “continuidade” e “estrutura de poder” — elas indicam que a questão fala de Estado, não de governo.",
      },
      {
        id: "governo",
        name: "GOVERNO",
        conceito:
          "Governo é o conjunto de pessoas e instituições que exercem o poder do Estado em determinado momento. Governos podem ser descritos por categorias distintas: a forma de governo (como república ou monarquia), o regime político (como democracia ou autoritarismo) e o sistema de governo (como presidencialismo ou parlamentarismo) — cada uma dessas categorias descreve um aspecto diferente de como o poder é organizado e exercido.",
        penseAssim:
          "Pergunte-se: essa característica muda a cada eleição ou sucessão, ou permanece mesmo quando o mandato termina? Se muda com frequência e depende de quem foi eleito ou nomeado, você está falando de governo.",
        exemplo:
          "Diferentes governos já administraram o Estado brasileiro ao longo da história, com prioridades e composições distintas — mas o Estado brasileiro, com seu território e suas instituições estatais, seguiu sendo o mesmo.",
        naoConfunda:
          "Governo não é sinônimo de Estado: o governo é transitório e muda; o Estado possui continuidade institucional. Também não confunda uma avaliação sobre um governo específico com um questionamento sobre a existência do Estado — são análises de naturezas diferentes.",
        naProva:
          "Bancas costumam usar mudanças de governo (eleições, sucessões, transições) para testar se o aluno sabe que isso não implica, por si só, mudança de Estado, de território ou de soberania.",
      },
      {
        id: "pais",
        name: "PAÍS",
        conceito:
          "País é a unidade territorial delimitada por fronteiras reconhecidas internacionalmente, dotada de soberania e integrante da comunidade de Estados reconhecidos mundialmente.",
        penseAssim:
          "Pergunte-se: essa palavra está se referindo a um território com fronteiras reconhecidas internacionalmente, ou a um grupo humano com identidade e cultura compartilhada? Se for a primeira opção, você está falando de país.",
        exemplo:
          "O Brasil é um país reconhecido internacionalmente, com fronteiras definidas — dentro dele vivem diferentes grupos com identidades culturais próprias, o que remete ao conceito de nação.",
        naoConfunda:
          "País não é sinônimo de nação: um país pode abrigar mais de uma nação — vários grupos com identidades culturais próprias dentro do mesmo território — e uma nação pode não corresponder a um único país.",
        naProva:
          "Questões costumam apresentar povos que reivindicam autonomia ou reconhecimento dentro de um país — é aí que aparece a diferença entre território reconhecido internacionalmente (país) e identidade cultural compartilhada (nação).",
      },
      {
        id: "nacao",
        name: "NAÇÃO",
        conceito:
          "Nação é o grupo humano unido por elementos como língua, história, cultura, tradições ou identidade compartilhada — um sentimento de pertencimento que pode existir dentro de um país, atravessar fronteiras ou não corresponder a nenhum território próprio.",
        penseAssim:
          "Pergunte-se: essa palavra está se referindo a fronteiras e soberania, ou a uma identidade cultural e um sentimento de pertencimento compartilhado por um grupo de pessoas? Se for a segunda opção, você está falando de nação.",
        exemplo:
          "O povo curdo é frequentemente citado como uma nação sem Estado próprio: compartilha língua, cultura e identidade, mas vive dividido entre diferentes países, sem um território soberano exclusivo.",
        naoConfunda:
          "Nação não é sinônimo de país: existem países multinacionais, formados por várias nações dentro do mesmo território, e nações que não correspondem a nenhum país específico. Também não confunda nação com Estado: nação é identidade cultural; Estado é estrutura política e institucional.",
        naProva:
          "Fique atento a enunciados que descrevem grupos étnicos, linguísticos ou culturais reivindicando reconhecimento ou autonomia — esse é o cenário clássico para testar a diferença entre nação (identidade) e país/Estado (território e instituições).",
      },
    ],
  },

  deepDive: {
    title: "APLIQUE A CASOS CONCRETOS",
    items: [
      {
        id: "mudanca-de-governo",
        title: "Uma eleição muda o governo. Muda o Estado?",
        content:
          "Quando um país realiza eleições e uma nova pessoa assume a presidência, o governo muda: novas prioridades, nova equipe, novas políticas. Mas o Estado permanece — as mesmas leis fundamentais, o mesmo território e as mesmas instituições estatais continuam existindo, agora administradas por outras pessoas.",
        highlight: "Mudar quem governa não é o mesmo que mudar o Estado.",
      },
      {
        id: "povo-sem-territorio",
        title: "Um povo sem país é uma nação?",
        content:
          "Um grupo pode compartilhar língua, história e identidade cultural sem possuir um território soberano reconhecido internacionalmente. Isso mostra que nação e país são conceitos independentes: é possível existir uma nação sem que ela corresponda a um único país.",
        highlight: "Identidade cultural não depende de fronteiras reconhecidas.",
      },
      {
        id: "pais-multinacional",
        title: "Um país pode conter mais de uma nação?",
        content:
          "Diversos países reúnem, dentro do mesmo território e sob o mesmo Estado, grupos com identidades culturais, línguas ou histórias distintas. Isso não enfraquece o Estado nem o país — apenas revela que a diversidade de nações dentro de um mesmo território é comum.",
        highlight: "Um só território pode abrigar mais de uma identidade nacional.",
      },
    ],
    closing:
      "Perceba que essas distinções não são apenas teóricas: elas aparecem constantemente em notícias, discussões públicas e questões de prova.",
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Como esses conceitos institucionais se aplicam ao Brasil?",
    center: "BRASIL",
    items: [
      {
        id: "territorio",
        label: "TERRITÓRIO",
        description:
          "Extenso território reconhecido internacionalmente, com fronteiras definidas e soberania sobre seu espaço terrestre, marítimo e aéreo.",
      },
      {
        id: "populacao",
        label: "POPULAÇÃO",
        description:
          "População numerosa e culturalmente diversa, formada por diferentes grupos étnicos, regionais e culturais, com múltiplas identidades e formas de pertencimento.",
      },
      {
        id: "estado",
        label: "ESTADO",
        description:
          "Estrutura político-institucional relativamente permanente, com poderes Executivo, Legislativo e Judiciário organizados por uma Constituição.",
      },
      {
        id: "organizacao-federativa",
        label: "ORGANIZAÇÃO FEDERATIVA",
        description:
          "República Federativa formada pela União, estados, Distrito Federal e municípios, cada um com autonomia definida pela Constituição.",
      },
      {
        id: "republica-constituicao",
        label: "REPÚBLICA E CONSTITUIÇÃO",
        description:
          "Forma de governo republicana, com Constituição promulgada em 1988 como norma máxima que organiza o Estado e garante direitos.",
      },
      {
        id: "governo",
        label: "GOVERNO",
        description:
          "Conjunto de autoridades eleitas ou nomeadas que administra o Estado por mandatos definidos, renovados periodicamente por eleições.",
      },
    ],
    study:
      "Essas características são institucionais e permanecem estáveis independentemente de qual governo esteja em exercício em determinado momento. Avaliar um governo específico, um partido ou uma proposta política é uma discussão diferente, que não é o objetivo desta aula. Aqui, o que importa é reconhecer a estrutura: o Brasil é um país, organizado como um Estado republicano e federativo, habitado por uma nação plural, administrado por governos que se sucedem periodicamente.",
    highlight: "Entender as instituições não é o mesmo que julgar quem as ocupa.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: ["Texto", "Mapa", "Notícia", "Situação histórica"],
    demandsTitle: "A questão cobra",
    demands: [
      "Diferenciação conceitual",
      "Reconhecimento de instituições",
      "Interpretação de contexto",
      "Identificação de continuidade ou mudança",
    ],
    highlight:
      "A prova raramente pergunta “o que é Estado?” isoladamente — ela testa se você consegue aplicar a diferença a uma situação concreta.",
    image: {
      src: "/assets/aulas/cinco-perguntas-politica.jpg",
      alt: "Cartaz de revisão com cinco perguntas para diferenciar Estado, país, nação e governo",
    },
    guidingIntro: "Use estas cinco perguntas para não confundir os conceitos:",
    guidingQuestions: [
      "Isso mudou com uma eleição, ou permanece independentemente de quem governa?",
      "Isso se refere a um território com fronteiras reconhecidas, ou a uma identidade cultural?",
      "A questão fala de quem exerce o poder, ou da estrutura institucional que organiza esse poder?",
      "Existe mais de um grupo cultural dentro do mesmo território mencionado?",
      "A mudança descrita afeta as estruturas institucionais do Estado, ou só quem as administra?",
    ],
  },

  question: {
    id: "s01-a03-q01",
    statement:
      "Após um processo eleitoral, um país passa por mudança de presidente, de composição do governo e de prioridades administrativas. O território, as fronteiras reconhecidas internacionalmente e as principais instituições estatais continuam existindo. Com base na distinção entre Estado, país, nação e governo, é correto afirmar que, nessa situação:",
    options: [
      {
        id: "A",
        text: "o Estado deixou de existir, pois houve mudança na condução política do país.",
      },
      {
        id: "B",
        text: "o país transformou-se em uma nova nação, pois a eleição produziu uma nova identidade cultural.",
      },
      {
        id: "C",
        text: "o governo mudou, mas o Estado permaneceu, pois a substituição dos governantes não implica, por si só, o desaparecimento das estruturas e instituições estatais.",
      },
      {
        id: "D",
        text: "a nação e o país deixaram de coincidir, pois um novo governo passou a representar outro povo.",
      },
      {
        id: "E",
        text: "não ocorreu mudança relevante, pois governo e Estado correspondem ao mesmo conceito.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "A alternativa C está correta. A eleição alterou o governo — o grupo de pessoas que passou a exercer o poder e a definir as prioridades administrativas do momento. O Estado, por outro lado, é a estrutura político-institucional relativamente permanente: seu território, suas fronteiras reconhecidas internacionalmente e suas principais instituições continuaram existindo, pois a substituição dos governantes não implica, por si só, o desaparecimento das estruturas e instituições estatais. As demais alternativas confundem os conceitos: a alternativa A trata a mudança de governo como o fim do Estado; as alternativas B e D atribuem à nação — identidade cultural compartilhada — uma transformação que não decorre do resultado de uma eleição; e a alternativa E nega, sem justificativa, que governo e Estado sejam conceitos distintos.",
  },

  missionCheck:
    "Lembre-se da praça: quando você escolheu uma prioridade e depois pensou em quem deveria decidir, você já estava lidando com poder, decisão coletiva e participação — os mesmos elementos que sustentam o Estado, o governo e a organização política de um país. Agora você consegue diferenciar Estado, país, nação e governo, e reconhecer essas distinções em situações concretas e em questões de prova?",

  completionMessage:
    "Aquela escolha na praça não era só sobre árvores ou estacionamento. Era sobre poder, instituições e participação — os mesmos elementos que sustentam a política.",
};
