import type { LessonContent } from "@/lib/types";

/**
 * AULA 11 — CONFLITOS CONTEMPORÂNEOS
 * Semana 04 • Geopolítica & Atualidades
 *
 * Ideia central: tratamento inteiramente tipológico e estrutural de
 * conflitos contemporâneos — categorias e mecanismos (interestatal x
 * intraestatal; atores estatais x não estatais; disputas territoriais,
 * identitárias e por recursos; escalas; deslocamentos; mediação). Nenhum
 * conflito real, país, governo, liderança ou acontecimento atual
 * específico é mencionado — todos os exemplos são hipotéticos/fictícios.
 *
 * Título, subtítulo, descrição, vídeo e status ficam em `src/data/course.ts`
 * (metadados da aula). Este arquivo guarda somente o conteúdo pedagógico.
 *
 * Rascunho editorial para revisão do Prof. Luis — altere apenas os textos
 * deste arquivo; nenhum componente precisa ser modificado.
 *
 * Esta aula ainda não está publicada em `src/data/course.ts`.
 */
export const aula11Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de classificar conflitos contemporâneos por escala e natureza, reconhecer atores estatais e não estatais envolvidos, e compreender mecanismos institucionais de mediação e negociação — sem posicionar-se sobre casos reais específicos.",

  hypothesis: {
    title: "O OLHAR DO PACO",
    intro:
      "Duas regiões fictícias disputam o controle de uma nascente de água que abastece as duas. Antes de qualquer explicação, observe estas possibilidades sobre o que pode estar em jogo.",
    cards: [
      { id: "territorio", label: "Território" },
      { id: "recursos-naturais", label: "Recursos naturais" },
      { id: "identidade-cultural", label: "Identidade cultural" },
      { id: "poder-politico", label: "Poder político" },
      { id: "rotas-comerciais", label: "Rotas comerciais" },
      { id: "fronteiras", label: "Fronteiras" },
    ],
    question: "Qual dessas dimensões parece mais decisiva nesse tipo de disputa?",
    paco: "Escolha duas dessas dimensões e tente imaginar como elas podem aparecer juntas na mesma disputa.",
    reveal:
      "Boas hipóteses. A maioria dos conflitos reais combina mais de uma dessas dimensões ao mesmo tempo — é isso que vamos aprender a reconhecer.",
  },

  lenses: {
    eyebrow: "Sete conceitos para classificar um conflito",
    title: "NOMEIE O CONFLITO",
    subtitle: "Antes de opinar sobre um conflito, é preciso saber nomeá-lo com precisão.",
    items: [
      {
        id: "conflito-interestatal",
        emoji: "🌍",
        name: "CONFLITO INTERESTATAL",
        question: "O conflito envolve diretamente dois ou mais Estados?",
      },
      {
        id: "conflito-intraestatal",
        emoji: "🏳️",
        name: "CONFLITO INTRAESTATAL",
        question: "O conflito ocorre majoritariamente dentro das fronteiras de um único Estado?",
      },
      {
        id: "ator-nao-estatal",
        emoji: "👥",
        name: "ATOR NÃO ESTATAL",
        question: "Algum grupo armado, organização ou milícia participa sem representar formalmente um Estado?",
      },
      {
        id: "disputa-territorial",
        emoji: "🗺️",
        name: "DISPUTA TERRITORIAL",
        question: "O conflito envolve controle sobre uma porção específica de território?",
      },
      {
        id: "disputa-por-recursos",
        emoji: "💧",
        name: "DISPUTA POR RECURSOS",
        question: "O conflito envolve disputa por água, minerais, energia ou outros recursos?",
      },
      {
        id: "deslocamento-populacional",
        emoji: "🎒",
        name: "DESLOCAMENTO POPULACIONAL",
        question: "O conflito provoca a saída forçada de pessoas de suas casas?",
      },
      {
        id: "mediacao-internacional",
        emoji: "🤝",
        name: "MEDIAÇÃO INTERNACIONAL",
        question: "Existe alguma tentativa de organismo multilateral ou terceiro país para facilitar uma solução?",
      },
    ],
    highlight: "Antes de tomar partido, é preciso saber nomear o tipo de conflito.",
    image: null,
    hideImage: true,
  },

  video: {
    title: "AGORA, VAMOS CLASSIFICAR OS CONFLITOS",
    paragraphs: [
      "Você já levantou hipóteses sobre uma disputa fictícia por recursos. Agora vamos organizar essas ideias em categorias precisas — que valem para qualquer conflito, sem depender de um caso específico.",
    ],
  },

  concepts: {
    title: "DIFERENCIE COM PRECISÃO",
    items: [
      {
        id: "conflito-interestatal",
        name: "CONFLITO INTERESTATAL",
        conceito:
          "Conflito interestatal é aquele que ocorre diretamente entre dois ou mais Estados soberanos, geralmente envolvendo disputas de fronteira, controle territorial ou interesses estratégicos entre governos.",
        penseAssim:
          "Pergunte-se: as partes diretamente envolvidas no conflito são Estados reconhecidos internacionalmente, agindo uns contra os outros? Se sim, é interestatal.",
        exemplo:
          "Uma disputa de fronteira entre dois países fictícios vizinhos, conduzida pelos respectivos governos, exemplifica um conflito interestatal.",
        naoConfunda:
          "Conflito interestatal não é sinônimo de conflito intraestatal: no interestatal, os protagonistas são Estados distintos; no intraestatal, o conflito ocorre majoritariamente dentro das fronteiras de um único Estado, ainda que outros países possam se envolver indiretamente.",
        naProva:
          "Fique atento a enunciados que descrevem disputas entre governos de países diferentes: são pistas de conflito interestatal.",
      },
      {
        id: "conflito-intraestatal",
        name: "CONFLITO INTRAESTATAL",
        conceito:
          "Conflito intraestatal é aquele que ocorre majoritariamente dentro das fronteiras de um único Estado, podendo envolver o governo central, grupos regionais, étnicos, religiosos ou políticos internos.",
        penseAssim:
          "Pergunte-se: o conflito se desenrola principalmente dentro do território de um único país, mesmo que envolva grupos internos distintos? Se sim, é intraestatal.",
        exemplo:
          "Uma disputa entre o governo central de um país fictício e um grupo regional por autonomia administrativa, contida majoritariamente dentro das fronteiras desse país, exemplifica um conflito intraestatal.",
        naoConfunda:
          "Conflito intraestatal não significa que outros países não tenham qualquer interesse nele: Estados externos podem se envolver indiretamente (apoio diplomático, econômico), mas o palco principal do conflito permanece dentro de um único país.",
        naProva:
          "Fique atento a termos como “guerra civil”, “conflito regional interno” ou disputas entre grupos dentro do mesmo país: indicam conflito intraestatal.",
      },
      {
        id: "ator-nao-estatal",
        name: "ATOR NÃO ESTATAL",
        conceito:
          "Ator não estatal é qualquer agente que participa de um conflito sem representar formalmente um Estado — organizações armadas, milícias, grupos separatistas, corporações ou organizações internacionais, por exemplo.",
        penseAssim:
          "Pergunte-se: esse agente representa oficialmente um governo reconhecido internacionalmente, ou age de forma independente dele? Se for independente, é um ator não estatal.",
        exemplo:
          "Um grupo armado que controla parte de um território sem ser reconhecido como governo desse território exemplifica um ator não estatal envolvido em um conflito.",
        naoConfunda:
          "Ator não estatal não é sinônimo de ator ilegítimo ou irrelevante: organismos internacionais, organizações humanitárias e empresas também são atores não estatais, e podem ter papel legítimo e até mediador em um conflito.",
        naProva:
          "Fique atento a menções a grupos armados, milícias, organizações internacionais ou corporações atuando em um conflito: são pistas de atores não estatais, mesmo quando a questão não usa esse termo.",
      },
      {
        id: "disputa-territorial",
        name: "DISPUTA TERRITORIAL",
        conceito:
          "Disputa territorial é o conflito centrado no controle, na posse ou nos limites de uma porção específica de território, podendo envolver fronteiras, ilhas, áreas de fronteira ou territórios contestados.",
        penseAssim:
          "Pergunte-se: o núcleo da disputa é sobre quem controla ou tem soberania sobre determinado espaço? Se sim, é uma disputa territorial.",
        exemplo:
          "Uma disputa sobre a linha exata de fronteira entre dois países fictícios, ambos reivindicando a mesma faixa de terra, exemplifica uma disputa territorial.",
        naoConfunda:
          "Disputa territorial não é sinônimo de disputa por recursos: a disputa territorial tem como foco o controle do espaço em si (soberania, limites); a disputa por recursos tem como foco o acesso a um bem específico (água, minerais), que pode ou não estar ligado a uma fronteira contestada.",
        naProva:
          "Fique atento a mapas com linhas de fronteira contestadas ou áreas reivindicadas por mais de um Estado: são o formato clássico de disputa territorial.",
      },
      {
        id: "disputa-por-recursos",
        name: "DISPUTA POR RECURSOS",
        conceito:
          "Disputa por recursos é o conflito centrado no acesso, controle ou uso de um recurso específico — água, minerais, energia, terras férteis — que pode ocorrer entre Estados, entre grupos internos ou entre ambos.",
        penseAssim:
          "Pergunte-se: o núcleo da disputa é o acesso a um recurso específico, mesmo que ele esteja localizado em território contestado? Se o foco é o recurso em si, é uma disputa por recursos.",
        exemplo:
          "Duas regiões fictícias que dependem da mesma nascente de água para abastecimento, e que disputam o controle sobre seu uso, exemplificam uma disputa por recursos.",
        naoConfunda:
          "Disputa por recursos não exclui a dimensão territorial: muitas disputas territoriais também envolvem recursos valiosos no território contestado. A distinção conceitual ajuda a identificar qual dimensão está sendo destacada no enunciado, não que elas nunca se sobreponham.",
        naProva:
          "Fique atento a menções a água, minerais, petróleo, terras agricultáveis ou outros recursos específicos como motivo central do conflito descrito.",
      },
      {
        id: "deslocamento-populacional",
        name: "DESLOCAMENTO POPULACIONAL",
        conceito:
          "Deslocamento populacional em contexto de conflito é a saída forçada de pessoas de suas casas por causa de violência, insegurança ou destruição de infraestrutura. Quando a pessoa permanece dentro do próprio país, é chamada de deslocada interna; quando cruza uma fronteira internacional em busca de proteção, pode ser reconhecida como refugiada, conforme critérios do direito internacional.",
        penseAssim:
          "Pergunte-se: a pessoa deslocada permaneceu dentro do próprio país, ou cruzou uma fronteira internacional? Essa diferença define a categoria (deslocado interno ou refugiado).",
        exemplo:
          "Uma família que sai de sua cidade por causa de um conflito armado, mas permanece em outra região do mesmo país, é um exemplo de deslocamento interno; se essa mesma família cruzar a fronteira para outro país em busca de proteção, pode se enquadrar como refugiada.",
        naoConfunda:
          "Deslocado interno não é sinônimo de refugiado: a diferença central é o cruzamento ou não de uma fronteira internacional, o que tem consequências jurídicas diferentes em termos de proteção internacional.",
        naProva:
          "Fique atento à palavra “fronteira” nos enunciados: se a pessoa permanece no próprio país, é deslocado interno; se cruza para outro país, o enunciado está tratando de refugiados.",
      },
      {
        id: "mediacao-internacional",
        name: "MEDIAÇÃO INTERNACIONAL",
        conceito:
          "Mediação internacional é a atuação de um terceiro — um país, um organismo multilateral ou uma organização internacional — para facilitar o diálogo e a negociação entre as partes de um conflito, sem impor uma solução pela força.",
        penseAssim:
          "Pergunte-se: existe um terceiro tentando aproximar as partes para uma solução negociada, sem usar a força para impor um resultado? Se sim, é mediação.",
        exemplo:
          "Um organismo multilateral que oferece espaço de diálogo e propõe termos de negociação entre duas partes em conflito, sem impor uma decisão pela força, exemplifica mediação internacional.",
        naoConfunda:
          "Mediação não é sinônimo de intervenção militar: a mediação busca aproximar as partes para uma solução negociada; a intervenção militar envolve o uso da força por um terceiro ator. São respostas institucionais muito diferentes a um mesmo conflito.",
        naProva:
          "Fique atento a termos como “negociação”, “diálogo”, “cessar-fogo negociado” ou “organismo multilateral”: indicam mediação. Termos como “força militar”, “ocupação” ou “intervenção armada” indicam outra categoria de resposta.",
      },
    ],
  },

  application: {
    title: "AGORA CONECTE",
    context:
      "Duas regiões fictícias, Vale Seco e Campo Verde, disputam o controle de uma nascente de água que abastece as duas. Grupos locais armados, que não representam formalmente nenhum dos dois governos, passaram a atuar na área. Famílias da região começaram a se deslocar para cidades vizinhas dentro do mesmo país.",
    flow: ["Disputa por recurso", "Atores armados não estatais", "Deslocamento interno", "Tentativa de mediação"],
    question: "Como você classificaria essa situação, usando os conceitos desta aula?",
    accordions: [
      {
        id: "natureza-do-conflito",
        title: "NATUREZA DO CONFLITO",
        content: "É majoritariamente uma disputa por recursos (a nascente de água), embora também envolva controle territorial da área.",
      },
      {
        id: "atores-envolvidos",
        title: "ATORES ENVOLVIDOS",
        content: "Além dos governos, há atores não estatais (os grupos armados locais) participando diretamente.",
      },
      {
        id: "consequencia-humanitaria",
        title: "CONSEQUÊNCIA HUMANITÁRIA",
        content: "As famílias deslocadas dentro do mesmo país são deslocadas internas, não refugiadas — não houve cruzamento de fronteira internacional.",
      },
    ],
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Como a Constituição brasileira orienta a atuação do país diante de conflitos internacionais?",
    center: "BRASIL",
    items: [
      {
        id: "solucao-pacifica",
        label: "SOLUÇÃO PACÍFICA",
        description: "A Constituição de 1988 estabelece a solução pacífica dos conflitos como princípio que rege as relações internacionais do Brasil.",
      },
      {
        id: "nao-intervencao",
        label: "NÃO INTERVENÇÃO",
        description: "O princípio da não intervenção orienta o país a não interferir diretamente nos assuntos internos de outros Estados.",
      },
      {
        id: "autodeterminacao",
        label: "AUTODETERMINAÇÃO DOS POVOS",
        description: "O princípio da autodeterminação dos povos reconhece o direito de cada povo decidir sobre sua própria organização política.",
      },
      {
        id: "cooperacao-multilateral",
        label: "COOPERAÇÃO MULTILATERAL",
        description: "O Brasil historicamente participa de organismos multilaterais e, em diferentes momentos, de missões internacionais de manutenção da paz.",
      },
    ],
    study:
      "Esses são princípios constitucionais que orientam a atuação institucional do país — não uma avaliação sobre qual lado tem razão em qualquer conflito específico, atual ou histórico.",
    highlight: "Ter princípios constitucionais sobre conflitos internacionais não é o mesmo que tomar partido em cada um deles.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: ["Mapa de conflito", "Texto jornalístico", "Gráfico de deslocados", "Trecho de tratado ou princípio internacional"],
    demandsTitle: "A questão cobra",
    demands: [
      "Classificação do conflito",
      "Identificação de atores",
      "Distinção conceitual",
      "Reconhecimento de mecanismos institucionais",
    ],
    highlight: "A prova raramente pede para julgar quem está certo num conflito: ela testa se você sabe classificá-lo e nomear seus elementos.",
    guidingIntro: "Diante de uma notícia sobre um conflito, pergunte:",
    guidingQuestions: [
      "O conflito envolve Estados entre si, ou ocorre majoritariamente dentro de um deles?",
      "Há atores que não representam formalmente nenhum Estado?",
      "O centro da disputa é o território, um recurso, ou os dois?",
      "As pessoas deslocadas cruzaram uma fronteira internacional, ou não?",
      "Existe alguma tentativa de mediação ou negociação?",
    ],
  },

  question: {
    id: "s04-a11-q01",
    statement:
      "Um conflito fictício ocorre inteiramente dentro das fronteiras de um país, entre o governo central e um grupo regional armado que reivindica maior autonomia administrativa. Milhares de famílias deixaram suas casas, mas permaneceram em outras regiões do mesmo país. Um organismo multilateral ofereceu-se para facilitar negociações entre as partes. Com base nos conceitos trabalhados, é correto afirmar que essa situação envolve, respectivamente:",
    options: [
      {
        id: "A",
        text: "conflito interestatal, refugiados e intervenção militar.",
      },
      {
        id: "B",
        text: "conflito intraestatal, deslocados internos e mediação internacional.",
      },
      {
        id: "C",
        text: "conflito interestatal, deslocados internos e intervenção militar.",
      },
      {
        id: "D",
        text: "conflito intraestatal, refugiados e ausência de qualquer tentativa institucional.",
      },
      {
        id: "E",
        text: "disputa territorial exclusivamente, sem qualquer ator não estatal envolvido.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "A alternativa B está correta. O conflito ocorre dentro das fronteiras de um único país (intraestatal); as famílias deslocadas permaneceram no mesmo país, o que as caracteriza como deslocadas internas, não refugiadas; e a oferta do organismo multilateral para facilitar negociações caracteriza mediação internacional. As demais alternativas trocam os conceitos: A e C classificam erroneamente o conflito como interestatal e mencionam refugiados ou intervenção militar, não descritos no enunciado; D nega a existência da tentativa de mediação, que está explícita no texto; E ignora a presença do grupo armado regional, um ator não estatal, e reduz a situação apenas à dimensão territorial.",
  },

  missionCheck:
    "Agora você consegue olhar para um conflito e perguntar não “quem tem razão?”, mas “que tipo de conflito é esse, quem são os atores envolvidos, e que mecanismos institucionais existem para lidar com ele?”",

  completionMessage:
    "Antes de tomar partido, é preciso saber nomear o tipo de conflito — e reconhecer que quase sempre há mais de uma dimensão em jogo ao mesmo tempo.",
};
