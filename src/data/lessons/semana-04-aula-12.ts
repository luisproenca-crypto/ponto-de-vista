import type { LessonContent } from "@/lib/types";

/**
 * AULA 12 — OS TRÊS PODERES
 * Semana 04 • Política & Cidadania
 *
 * Ideia central: abordagem institucional e apartidária dos Três Poderes —
 * Legislativo, Executivo e Judiciário, funções predominantes,
 * independência e harmonia, freios e contrapesos, controle de
 * constitucionalidade e fiscalização. Nenhum governo, partido, autoridade
 * ou caso político real é avaliado.
 *
 * Título, subtítulo, descrição, vídeo e status ficam em `src/data/course.ts`
 * (metadados da aula). Este arquivo guarda somente o conteúdo pedagógico.
 *
 * Rascunho editorial para revisão do Prof. Luis — altere apenas os textos
 * deste arquivo; nenhum componente precisa ser modificado. A abertura usa
 * `decisionInsight` com `hideImage: true` (mecanismo já existente no
 * projeto, usado nas Aulas 06, 08 e 09) para não criar nenhum placeholder
 * visual, já que nenhuma imagem foi produzida ainda.
 *
 * Esta aula ainda não está publicada em `src/data/course.ts`.
 */
export const aula12Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de diferenciar Legislativo, Executivo e Judiciário, reconhecer suas funções predominantes, e explicar os mecanismos de independência, harmonia e controle recíproco entre eles — sem avaliar governos, partidos ou autoridades específicas.",

  decisionInsight: {
    title: "O OLHAR DO PACO",
    image: null,
    hideImage: true,
    rounds: [
      {
        id: "medida-urgente",
        question:
          "A prefeitura de uma cidade fictícia anuncia, por decreto, uma medida de urgência para autorizar moradia temporária em uma área pública, diante de um aumento repentino de famílias sem moradia. Essa medida pode entrar em vigor imediatamente, sem mais nenhuma outra aprovação?",
        options: [
          { id: "sim", label: "Sim, decisões urgentes dispensam qualquer aprovação adicional" },
          { id: "nao-camara", label: "Não, depende também da Câmara de Vereadores" },
          { id: "nao-judiciario", label: "Não, pode ser questionada judicialmente" },
          { id: "depende-lei", label: "Depende do que a legislação local prevê para medidas de urgência" },
        ],
        reveal:
          "Mesmo decisões urgentes do Executivo costumam estar sujeitas a regras — de aprovação, prazo ou revisão — previstas em lei.",
      },
      {
        id: "camara-aprova",
        question:
          "Se a Câmara de Vereadores precisa aprovar ou pelo menos ser informada sobre essa medida, isso significa que o prefeito perdeu o poder de decidir sobre a cidade?",
        options: [
          { id: "sim-perdeu", label: "Sim, o prefeito deixou de poder decidir" },
          { id: "nao-controle", label: "Não, é um mecanismo de controle entre poderes, não perda de poder" },
          { id: "so-formalidade", label: "É só uma formalidade sem efeito real" },
          { id: "depende-composicao", label: "Depende de quem compõe a Câmara" },
        ],
        reveal:
          "Não é perda de poder: é o funcionamento normal dos freios e contrapesos entre Executivo e Legislativo.",
      },
      {
        id: "judiciario-revisa",
        question:
          "Se um morador antigo questionar essa medida na Justiça, e o Judiciário analisar se ela respeita a legislação, isso significa que o Judiciário está fazendo o papel do prefeito?",
        options: [
          { id: "sim-substitui", label: "Sim, o Judiciário está decidindo no lugar do prefeito" },
          { id: "nao-legalidade", label: "Não, o Judiciário está avaliando se a medida respeita as regras, não substituindo a decisão administrativa" },
          { id: "depende-juiz", label: "Depende da opinião pessoal do juiz sobre a medida" },
          { id: "nunca-pode", label: "O Judiciário nunca pode analisar decisões do Executivo" },
        ],
        reveal:
          "Você acabou de encontrar os freios e contrapesos entre os três Poderes: cada um decide, aprova ou revisa, dentro de sua própria função.",
      },
    ],
  },

  connection: {
    title: "TRÊS FUNÇÕES, UM SÓ ESTADO",
    flow: ["Legislativo", "Executivo", "Judiciário", "Controle recíproco"],
    highlight: "Independentes, mas não isolados: os três Poderes se controlam mutuamente.",
    text: "Cada Poder tem uma função predominante — legislar e fiscalizar, administrar e executar, julgar e interpretar a lei —, mas nenhum deles atua isolado dos outros. Autonomia não significa ausência de controle.",
  },

  lenses: {
    eyebrow: "Oito conceitos da separação de poderes",
    title: "NOMEIE OS TRÊS PODERES",
    subtitle: "Cada conceito ajuda a entender como o poder do Estado é dividido, exercido e controlado.",
    items: [
      {
        id: "legislativo",
        emoji: "📜",
        name: "LEGISLATIVO",
        question: "Quem elabora e aprova as leis, e fiscaliza os demais Poderes?",
      },
      {
        id: "executivo",
        emoji: "🏛️",
        name: "EXECUTIVO",
        question: "Quem administra o Estado e executa as políticas públicas no dia a dia?",
      },
      {
        id: "judiciario",
        emoji: "⚖️",
        name: "JUDICIÁRIO",
        question: "Quem julga conflitos e interpreta a aplicação das leis?",
      },
      {
        id: "independencia",
        emoji: "🔓",
        name: "INDEPENDÊNCIA",
        question: "Por que nenhum Poder pode ser subordinado aos outros no exercício de suas funções?",
      },
      {
        id: "harmonia",
        emoji: "🤝",
        name: "HARMONIA",
        question: "Por que, mesmo independentes, os três Poderes precisam cooperar entre si?",
      },
      {
        id: "freios-e-contrapesos",
        emoji: "⚙️",
        name: "FREIOS E CONTRAPESOS",
        question: "Como cada Poder consegue limitar excessos dos outros dois?",
      },
      {
        id: "controle-de-constitucionalidade",
        emoji: "📘",
        name: "CONTROLE DE CONSTITUCIONALIDADE",
        question: "Quem verifica se uma lei ou ato respeita a Constituição?",
      },
      {
        id: "fiscalizacao",
        emoji: "🔍",
        name: "FISCALIZAÇÃO",
        question: "Como um Poder acompanha e cobra explicações do outro sobre suas decisões?",
      },
    ],
    highlight: "Três funções, um só Estado — e nenhuma delas funciona sozinha.",
    image: null,
    hideImage: true,
  },

  video: {
    title: "AGORA, VAMOS ORGANIZAR OS TRÊS PODERES",
    paragraphs: [
      "Você já percebeu que uma decisão de urgência pode passar por aprovação, fiscalização e revisão. Agora vamos dar precisão a cada um desses papéis — e entender por que essa divisão existe.",
    ],
  },

  concepts: {
    title: "DIFERENCIE COM PRECISÃO",
    items: [
      {
        id: "legislativo",
        name: "LEGISLATIVO",
        conceito:
          "O Poder Legislativo exerce predominantemente a função de elaborar, discutir e aprovar leis, além de fiscalizar os atos dos demais Poderes, especialmente do Executivo.",
        penseAssim:
          "Pergunte-se: essa atividade envolve a criação de novas regras gerais, ou a fiscalização de como o Estado está sendo administrado? Se sim, é função do Legislativo.",
        exemplo:
          "A aprovação de uma nova lei que estabelece regras para o uso de determinado espaço público é um exercício típico da função legislativa.",
        naoConfunda:
          "Legislativo não se resume a “fazer leis”: ele também fiscaliza a execução do orçamento e os atos do Executivo — a função fiscalizatória é tão parte do Legislativo quanto a função de legislar.",
        naProva:
          "Fique atento a menções a aprovação de projetos de lei, orçamento público ou fiscalização de contas: são pistas da atuação do Legislativo.",
      },
      {
        id: "executivo",
        name: "EXECUTIVO",
        conceito:
          "O Poder Executivo exerce predominantemente funções administrativas e de governo: implementa políticas públicas, administra os órgãos públicos e executa o orçamento aprovado pelo Legislativo.",
        penseAssim:
          "Pergunte-se: essa atividade envolve administrar, implementar ou executar uma política já definida em lei, no dia a dia do Estado? Se sim, é função do Executivo.",
        exemplo:
          "A construção de uma escola pública, seguindo o orçamento aprovado, é um exercício típico da função executiva.",
        naoConfunda:
          "Executivo não é sinônimo de governo, no sentido de uma pessoa ou grupo específico: o Executivo é o Poder — a estrutura institucional responsável pela administração —, enquanto quem o ocupa muda periodicamente, por eleição, sem que o Poder em si deixe de existir.",
        naProva:
          "Fique atento a menções a implementação de políticas públicas, administração de órgãos ou execução orçamentária: indicam a função executiva.",
      },
      {
        id: "judiciario",
        name: "JUDICIÁRIO",
        conceito:
          "O Poder Judiciário exerce predominantemente a função jurisdicional: julgar conflitos entre partes e interpretar a aplicação das leis e da Constituição aos casos concretos.",
        penseAssim:
          "Pergunte-se: essa atividade envolve julgar um conflito ou avaliar se uma norma ou ato está de acordo com a legislação? Se sim, é função do Judiciário.",
        exemplo:
          "A análise, por um tribunal, de uma ação que questiona se determinado ato administrativo respeitou a legislação vigente é um exercício típico da função jurisdicional.",
        naoConfunda:
          "Judiciário não decide politicamente no lugar do Executivo ou do Legislativo: ele avalia a legalidade ou constitucionalidade de atos e normas, não substitui o mérito das escolhas administrativas ou legislativas por sua própria preferência.",
        naProva:
          "Fique atento a menções a ações judiciais, julgamento de conflitos ou análise de constitucionalidade: indicam a função do Judiciário.",
      },
      {
        id: "independencia",
        name: "INDEPENDÊNCIA",
        conceito:
          "Independência, no contexto da separação de poderes, significa que cada Poder exerce sua função sem subordinação hierárquica aos demais — nenhum dos três pode determinar, por si só, como o outro deve exercer sua função própria.",
        penseAssim:
          "Pergunte-se: um Poder está impondo diretamente como o outro deve decidir dentro de sua própria função, ou cada um está agindo dentro de sua própria esfera? Independência significa a segunda situação.",
        exemplo:
          "O Judiciário não pode determinar previamente que tipo de lei o Legislativo deve aprovar, assim como o Legislativo não administra diretamente os órgãos do Executivo — cada um decide dentro de sua própria função.",
        naoConfunda:
          "Independência não é sinônimo de isolamento: os Poderes são independentes no exercício de suas funções típicas, mas continuam se relacionando e se controlando mutuamente por meio de mecanismos previstos na Constituição.",
        naProva:
          "Fique atento a enunciados que testam se você entende independência como ausência total de relação entre os Poderes — essa é uma armadilha comum: independência não exclui controle recíproco.",
      },
      {
        id: "harmonia",
        name: "HARMONIA",
        conceito:
          "Harmonia, no contexto da separação de poderes, significa que os três Poderes, mesmo independentes entre si, devem cooperar para o funcionamento do Estado, respeitando as competências uns dos outros e buscando solucionar conflitos institucionais dentro das regras constitucionais.",
        penseAssim:
          "Pergunte-se: os Poderes estão cooperando e respeitando as competências uns dos outros, mesmo quando divergem? Se sim, há harmonia, ainda que haja tensão pontual.",
        exemplo:
          "Quando o Executivo envia um projeto de lei ao Legislativo, aguardando sua aprovação dentro do processo previsto, e depois executa a lei aprovada, há harmonia entre os dois Poderes, mesmo que haja divergência pontual durante a tramitação.",
        naoConfunda:
          "Harmonia não significa concordância constante ou ausência de tensão: divergências institucionais entre os Poderes são esperadas e até saudáveis, desde que resolvidas dentro das regras constitucionais — o que seria incompatível com a harmonia é um Poder tentando anular ou substituir a função do outro.",
        naProva:
          "Fique atento a situações que descrevem os Poderes seguindo os trâmites institucionais previstos, mesmo com posições diferentes: isso ilustra harmonia, não ausência de conflito.",
      },
      {
        id: "freios-e-contrapesos",
        name: "FREIOS E CONTRAPESOS",
        conceito:
          "Freios e contrapesos é o conjunto de mecanismos pelos quais cada Poder pode limitar eventuais excessos dos outros dois, garantindo equilíbrio entre eles — por exemplo, a fiscalização do Legislativo sobre o Executivo, ou a análise de constitucionalidade pelo Judiciário sobre leis aprovadas pelo Legislativo.",
        penseAssim:
          "Pergunte-se: existe algum mecanismo pelo qual um Poder pode revisar, aprovar ou limitar uma ação de outro Poder? Se sim, esse mecanismo é parte do sistema de freios e contrapesos.",
        exemplo:
          "A possibilidade de o Judiciário analisar se uma lei aprovada pelo Legislativo respeita a Constituição é um exemplo de freios e contrapesos.",
        naoConfunda:
          "Freios e contrapesos não é o mesmo que subordinação entre os Poderes: o mecanismo existe justamente para que nenhum Poder concentre poder demais, sem que isso signifique que um Poder está hierarquicamente acima do outro.",
        naProva:
          "Fique atento a situações em que um Poder revisa, aprova ou fiscaliza um ato de outro: é o formato clássico para testar o entendimento de freios e contrapesos.",
      },
      {
        id: "controle-de-constitucionalidade",
        name: "CONTROLE DE CONSTITUCIONALIDADE",
        conceito:
          "Controle de constitucionalidade é o mecanismo pelo qual se verifica se uma lei ou ato normativo está de acordo com a Constituição, podendo levar à invalidação da norma que a contrariar.",
        penseAssim:
          "Pergunte-se: a análise está verificando se uma norma respeita as regras da Constituição, ou está avaliando se essa norma é uma boa política pública? Controle de constitucionalidade é sobre a primeira pergunta, não a segunda.",
        exemplo:
          "A análise de uma ação que questiona se determinada lei municipal respeita os limites estabelecidos pela Constituição é um exemplo de controle de constitucionalidade.",
        naoConfunda:
          "Controle de constitucionalidade não é o mesmo que revisão da conveniência política de uma norma: ele verifica compatibilidade com a Constituição, não se a política pública é ideal, eficiente ou popular — essa avaliação cabe aos Poderes Legislativo e Executivo, não ao critério de constitucionalidade.",
        naProva:
          "Fique atento a enunciados que perguntam se uma lei “respeita a Constituição”, em vez de perguntar se ela é “uma boa decisão”: isso indica controle de constitucionalidade.",
      },
      {
        id: "fiscalizacao",
        name: "FISCALIZAÇÃO",
        conceito:
          "Fiscalização é o acompanhamento que um Poder faz sobre os atos de outro, podendo envolver pedidos de informação, análise de contas públicas ou investigação de irregularidades, como parte do sistema de controle recíproco entre os Poderes.",
        penseAssim:
          "Pergunte-se: um Poder está acompanhando, pedindo explicações ou analisando as contas e atos de outro Poder? Se sim, é fiscalização.",
        exemplo:
          "A análise, pelo Legislativo, das contas públicas apresentadas pelo Executivo ao final de um exercício orçamentário é um exemplo de fiscalização entre Poderes.",
        naoConfunda:
          "Fiscalização não é o mesmo que administração: fiscalizar é acompanhar e cobrar explicações sobre atos já praticados; administrar é executar as políticas no dia a dia — são funções de Poderes diferentes.",
        naProva:
          "Fique atento a menções a análise de contas, pedidos de informação ou investigação de atos de outro Poder: indicam a função de fiscalização.",
      },
    ],
  },

  deepDive: {
    title: "APLIQUE A SITUAÇÕES CONCRETAS",
    items: [
      {
        id: "lei-aprovada-nao-vale",
        title: "Uma lei pode ser aprovada e ainda assim não valer?",
        content:
          "Sim: mesmo depois de aprovada pelo Legislativo e sancionada pelo Executivo, uma lei pode ser questionada quanto à sua constitucionalidade perante o Judiciário. Se for considerada incompatível com a Constituição, pode deixar de produzir efeitos.",
        highlight: "Aprovação não é a última palavra sobre uma lei.",
      },
      {
        id: "executivo-sem-prestar-contas",
        title: "O Executivo pode administrar sem nenhuma prestação de contas?",
        content:
          "Não: mesmo no exercício de suas funções administrativas, o Executivo presta contas ao Legislativo (fiscalização orçamentária) e pode ter seus atos revisados pelo Judiciário quando questionados judicialmente.",
        highlight: "Administrar não significa administrar sem controle.",
      },
      {
        id: "divergencia-e-crise",
        title: "Divergência entre Poderes é sinal de crise institucional?",
        content:
          "Não necessariamente: divergências pontuais fazem parte do funcionamento esperado de um sistema de freios e contrapesos, desde que resolvidas dentro das regras constitucionais previstas para cada tipo de conflito institucional.",
        highlight: "Nem toda tensão entre Poderes é uma crise.",
      },
    ],
    closing:
      "Perceba que essas situações não avaliam se determinada decisão foi boa ou ruim: elas mostram como o sistema institucional de controle recíproco funciona, independentemente de quem ocupa cada Poder.",
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Como a Constituição de 1988 organiza os Três Poderes no Brasil?",
    center: "BRASIL",
    items: [
      {
        id: "executivo-federal",
        label: "EXECUTIVO FEDERAL",
        description: "No âmbito federal, o Poder Executivo é exercido pela Presidência da República, auxiliada pelos ministérios.",
      },
      {
        id: "legislativo-federal",
        label: "LEGISLATIVO FEDERAL",
        description: "O Poder Legislativo federal é exercido pelo Congresso Nacional, formado pela Câmara dos Deputados e pelo Senado Federal.",
      },
      {
        id: "judiciario-federal",
        label: "JUDICIÁRIO FEDERAL",
        description: "O Poder Judiciário é organizado em diferentes instâncias e tribunais, com o Supremo Tribunal Federal responsável, entre outras funções, pela guarda da Constituição.",
      },
      {
        id: "poderes-estaduais-municipais",
        label: "ESTADOS E MUNICÍPIOS",
        description: "Estados e municípios também organizam seus próprios Poderes Executivo e Legislativo (governos estaduais e prefeituras, assembleias legislativas e câmaras municipais), dentro da estrutura federativa do país.",
      },
      {
        id: "controle-de-contas",
        label: "CONTROLE DE CONTAS",
        description: "Órgãos como os Tribunais de Contas auxiliam o Legislativo na fiscalização das contas públicas do Executivo, em diferentes níveis federativos.",
      },
    ],
    study:
      "Essas informações descrevem a arquitetura institucional prevista na Constituição — não uma avaliação sobre o desempenho de autoridades, partidos ou governos específicos, que não é o objetivo desta aula.",
    highlight: "Conhecer a arquitetura institucional é diferente de avaliar quem a ocupa.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: ["Texto institucional", "Situação fictícia", "Trecho da Constituição", "Organograma dos Poderes"],
    demandsTitle: "A questão cobra",
    demands: [
      "Diferenciação de funções",
      "Reconhecimento de mecanismos de controle",
      "Distinção entre independência e isolamento",
      "Interpretação de contexto institucional",
    ],
    highlight: "A prova raramente pergunta “quais são os Três Poderes?” isoladamente: ela testa se você reconhece suas funções e seus controles recíprocos numa situação concreta.",
    guidingIntro: "Diante de uma situação institucional, pergunte:",
    guidingQuestions: [
      "A situação descreve elaborar/fiscalizar leis, administrar, ou julgar? (função predominante)",
      "Um Poder está impondo suas regras a outro, ou cada um age em sua própria esfera? (independência)",
      "Existe cooperação entre os Poderes dentro das regras previstas? (harmonia)",
      "Um Poder está revisando, aprovando ou limitando um ato de outro? (freios e contrapesos)",
      "A análise avalia constitucionalidade ou conveniência política? (controle de constitucionalidade)",
    ],
  },

  question: {
    id: "s04-a12-q01",
    statement:
      "Em um município fictício, o prefeito edita um decreto de urgência para reorganizar o uso de uma área pública. O decreto é enviado à Câmara de Vereadores, que pode confirmá-lo, modificá-lo ou rejeitá-lo dentro de um prazo previsto em lei. Paralelamente, um grupo de moradores questiona judicialmente se o decreto respeita a legislação municipal vigente. Com base nos conceitos de independência, harmonia e freios e contrapesos, é correto afirmar que essa situação demonstra que:",
    options: [
      {
        id: "A",
        text: "o prefeito perdeu a autoridade para editar decretos, já que outros Poderes podem revisá-los.",
      },
      {
        id: "B",
        text: "a Câmara e o Judiciário estão, cada um dentro de sua função, exercendo controle sobre um ato do Executivo, sem substituí-lo na administração da cidade.",
      },
      {
        id: "C",
        text: "há uma crise institucional entre os Poderes, pois o decreto está sendo contestado por mais de uma via.",
      },
      {
        id: "D",
        text: "apenas o Judiciário tem competência para revisar decretos do Executivo, o que torna desnecessária a análise da Câmara.",
      },
      {
        id: "E",
        text: "o Executivo deixa de ser independente sempre que um de seus atos pode ser questionado por outro Poder.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "A alternativa B está correta. A Câmara de Vereadores exerce sua função de fiscalização e eventual revisão de atos do Executivo; o Judiciário exerce sua função de avaliar a legalidade do decreto perante a legislação vigente. Nenhum dos dois substitui o prefeito na administração da cidade: cada Poder atua dentro de sua própria competência, exemplificando freios e contrapesos e harmonia institucional. As demais alternativas erram: A confunde controle com perda de autoridade; C trata como crise o funcionamento normal do sistema; D ignora que Legislativo e Judiciário podem atuar de formas diferentes e complementares sobre o mesmo ato; E confunde independência com ausência de qualquer controle possível.",
  },

  missionCheck:
    "Agora você consegue olhar para uma decisão pública e perguntar não apenas “quem decidiu?”, mas “quem mais precisa aprovar, fiscalizar ou revisar essa decisão — e dentro de qual função?”",

  completionMessage: "Três funções, um só Estado — e nenhuma delas funciona sozinha.",
};
