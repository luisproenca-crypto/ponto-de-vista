import type { LessonContent } from "@/lib/types";

/**
 * AULA 21 — DESIGUALDADE, POLÍTICAS PÚBLICAS E CIDADANIA
 * Semana 07 • Política & Cidadania (COMPREENDA)
 *
 * Pergunta-guia (subtítulo em `course.ts`): "Desigualdade é apenas diferença
 * de renda?" Provocação: "Duas pessoas com a mesma renda vivem a mesma
 * desigualdade?" Operação nova: DO INDICADOR AO INSTRUMENTO — decompor a
 * desigualdade em dimensões, perguntar o que o indicador mostra e esconde
 * (escala e distribuição) e verificar se o instrumento corresponde ao
 * diagnóstico. Ferramenta (`application`): a política em seis perguntas.
 * A Aula 13 ensinou a perceber a desigualdade no território; esta ensina a
 * medi-la sem simplificar e a analisar a resposta pública. Retomadas de uma
 * linha: Aulas 06, 13, 15 e 16. Santa Clareira, Marta, Davi, Vale das
 * Acácias, Morro Verde e Pedra Miúda são fictícios.
 * NEUTRALIDADE: políticas lidas como instrumentos (objetivo, público,
 * escala, implementação, resultado, limites), sem avaliar governos ou
 * partidos. Bolsa Família fora, por decisão editorial; BPC só como leitura
 * de um instrumento focalizado.
 *
 * DADOS FACTUAIS (conferidos em 27/10/2026):
 *   • Constituição (Planalto): art. 3º, III ("erradicar a pobreza e a
 *     marginalização e reduzir as desigualdades sociais e regionais");
 *     art. 196 (saúde, "direito de todos e dever do Estado", acesso
 *     "universal e igualitário"); art. 203 (assistência social prestada
 *     "independentemente de contribuição à seguridade social"; inciso V).
 *   • Lei 8.080/1990, art. 7º: I, "universalidade de acesso"; IV, "igualdade
 *     da assistência à saúde". A palavra "equidade" não aparece na lei; a
 *     equidade como princípio do SUS vem do Ministério da Saúde (gov.br/
 *     saude/pt-br/sus): "diminuir desigualdades", "tratar desigualmente os
 *     desiguais, investindo mais onde a carência é maior".
 *   • IBGE, PNAD Contínua – Rendimento de todas as fontes 2025 (publicado em
 *     2026, dados de 2025): rendimento médio mensal real domiciliar per
 *     capita no maior valor da série (R$ 2 264); Gini desse rendimento de
 *     0,504 (2024) para 0,511 (2025); de 2024 para 2025, alta de 8,7% para
 *     os 10% de maior rendimento e de 4,7% para os 40% de menor rendimento.
 *   • Distribuição de médicos: formulação qualitativa, sem número. A versão
 *     oficial da Demografia Médica no Brasil 2025 (BVS-MS) estava
 *     indisponível (erro 503) em 27/10/2026; números de cópia secundária
 *     não foram usados.
 *   • BPC: página oficial do MDS (gov.br/mds, atualizada em 26/10/2026):
 *     benefício assistencial; pessoa idosa com 65 anos ou mais ou pessoa com
 *     deficiência; renda familiar per capita de até 1/4 do salário mínimo;
 *     inscrição atualizada no Cadastro Único; "O BPC não é aposentadoria. Para
 *     ter direito a ele, não é preciso ter contribuído para o INSS"; gestão
 *     do MDS, operacionalização do INSS; revisão periódica. Base legal: Lei
 *     8.742/1993, art. 20 e art. 21 (Planalto).
 *   • Ipea, Texto para Discussão 2535, "Desigualdades socioespaciais de
 *     acesso a oportunidades nas cidades brasileiras, 2019": acesso a
 *     empregos, saúde e educação nas 20 maiores cidades; a população branca
 *     e de alta renda tem, em média, mais acesso que a população negra e
 *     pobre; periferias descritas como "desertos de oportunidades".
 *   • IDHM: só como conceito, sem número, por não haver confirmação de base
 *     municipal posterior ao Censo 2010.
 *
 * Aula em preparação (`status: "em-preparacao"`, `content: null` em
 * `course.ts`).
 */
export const aula21Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de decompor uma desigualdade em diferentes dimensões, perguntar o que um indicador mostra e o que esconde, observar escala e distribuição e avaliar se uma política pública corresponde ao problema que pretende enfrentar.",

  hypothesis: {
    title: "O OLHAR DO PACO",
    intro:
      "Marta e Davi moram em Santa Clareira, uma cidade fictícia, e têm exatamente a mesma renda. Marta vive perto do centro: chega ao trabalho em vinte minutos, tem posto de saúde e escola a poucas quadras e esgoto ligado à rede. Davi vive num bairro novo na borda da cidade: passa duas horas por dia no ônibus, espera semanas por uma consulta, o esgoto corre a céu aberto e a casa fica numa encosta que preocupa a cada chuva forte.",
    cards: [
      { id: "tempo", label: "Tempo de deslocamento" },
      { id: "saneamento", label: "Saneamento" },
      { id: "saude", label: "Acesso à saúde" },
      { id: "escola", label: "Escola perto de casa" },
      { id: "risco", label: "Exposição a risco" },
    ],
    question: "Se a renda é igual, por que as condições de vida são tão diferentes?",
    paco: "Escolha as duas diferenças que mais pesam na vida de Davi. Depois pergunte: um aumento de renda resolveria as duas?",
    reveal:
      "A renda não mudou, mas tudo em volta dela mudou: tempo, serviços, risco. Por isso, medir só a renda esconderia a diferença entre Marta e Davi. E repare: cada diferença pede uma resposta própria. O ônibus não se resolve com esgoto, nem a encosta com mais vagas no posto. Se os problemas são diferentes, uma única política resolveria todos eles?",
  },

  connection: {
    title: "DA PRODUÇÃO ÀS CONDIÇÕES DE VIDA",
    flow: ["Como se produz", "Por onde circula o valor", "Como se vive"],
    highlight: "Toda forma de produzir e de circular chega, no fim, à vida de alguém.",
    text: "Na Aula 19, você viu como a produção transforma trabalho e território; na Aula 20, como as cadeias distribuem valor e risco. Agora a pergunta chega às condições de vida: “Desigualdade é apenas diferença de renda?” A Constituição inclui entre os objetivos da República “erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais”. Desigualdade tem lugar, tem medida e é objeto de política pública.",
  },

  lenses: {
    eyebrow: "Cinco conceitos para medir e responder",
    title: "O QUE ESSE NÚMERO MOSTRA, E O QUE ESCONDE?",
    subtitle:
      "Cinco conceitos ajudam a medir uma desigualdade sem simplificá-la. Logo abaixo, seis perguntas ajudam a ler a resposta pública.",
    items: [
      {
        id: "pobreza-desigualdade",
        emoji: "📉",
        name: "POBREZA × DESIGUALDADE",
        question: "Estamos falando de quem tem pouco, ou da distância entre grupos?",
      },
      {
        id: "renda-condicoes",
        emoji: "🏘️",
        name: "RENDA × CONDIÇÕES DE VIDA",
        question: "O que a renda não mostra sobre a vida dessas pessoas?",
      },
      {
        id: "media-distribuicao",
        emoji: "📊",
        name: "INDICADOR MÉDIO × DISTRIBUIÇÃO E ESCALA",
        question: "Quem está acima e quem está abaixo da média, e em que escala?",
      },
      {
        id: "disponibilidade-acesso",
        emoji: "🚏",
        name: "DISPONIBILIDADE × ACESSO",
        question: "O serviço existe; as pessoas conseguem usá-lo?",
      },
      {
        id: "equidade-desenho",
        emoji: "⚖️",
        name: "EQUIDADE E DESENHO DE POLÍTICAS PÚBLICAS",
        question: "A política considera necessidades diferentes, e a quem ela se dirige?",
      },
    ],
    highlight:
      "Medir sem simplificar é o primeiro passo para cobrar uma resposta que corresponda ao problema.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "LEIA UMA POLÍTICA PÚBLICA EM SEIS PERGUNTAS",
    context:
      "Os conceitos medem o problema; as perguntas leem a resposta, numa prova ou numa notícia.",
    flow: ["Objetivo", "Público", "Escala", "Implementação", "Resultado", "Limites"],
    question: "A resposta corresponde ao problema diagnosticado?",
    accordions: [
      {
        id: "para-que",
        title: "PARA QUE E PARA QUEM: OBJETIVO E PÚBLICO",
        content:
          "O que a política pretende mudar, e quem ela pretende alcançar: todos, ou um grupo definido por critérios?",
      },
      {
        id: "onde-como",
        title: "ONDE E COMO: ESCALA E IMPLEMENTAÇÃO",
        content:
          "Ela opera no país, no estado, no município ou no bairro? Quem executa, com que recursos e por qual caminho, como na Aula 15?",
      },
      {
        id: "o-que-mudou",
        title: "O QUE MUDOU E ATÉ ONDE: RESULTADO E LIMITES",
        content:
          "Que indicador deveria mudar, e em quanto tempo? Quem fica de fora, e o que ela não consegue resolver? Política anunciada não é resultado produzido.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "Marta e Davi mostraram que a mesma renda pode esconder vidas muito diferentes. Agora, os cinco conceitos.",
      "Guarde uma regra: antes de concluir sobre uma desigualdade, pergunte o que está sendo medido, em que escala e entre quem.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "pobreza-desigualdade",
        name: "POBREZA × DESIGUALDADE",
        conceito:
          "Pobreza é a falta de recursos para atender necessidades básicas. Para medi-la, institutos de estatística usam linhas de pobreza: valores de renda por pessoa escolhidos como critério, que mudam conforme a referência adotada. Desigualdade é a distância entre pessoas, grupos ou lugares.",
        penseAssim:
          "Pergunte se o problema é quantos estão abaixo de um patamar, ou quão longe uns estão dos outros.",
        exemplo:
          "Se a renda de todos sobe, mas a dos mais ricos sobe mais, a pobreza pode diminuir enquanto a distância entre os grupos aumenta.",
        naoConfunda:
          "Reduzir a pobreza não significa reduzir a desigualdade, e vice-versa. E a linha de pobreza é um critério de medida, não uma fronteira natural.",
        naProva:
          "Gráficos com uma linha de pobreza e outra de desigualdade pedem leitura separada.",
      },
      {
        id: "renda-condicoes",
        name: "RENDA × CONDIÇÕES DE VIDA",
        conceito:
          "Renda importa, mas não descreve sozinha o acesso a saúde, educação, saneamento, transporte, moradia, segurança ambiental e tempo. Do mesmo modo, crescimento econômico, o aumento da produção e da renda, não é o mesmo que desenvolvimento, que inclui as condições de vida.",
        penseAssim:
          "Ao lado da renda, pergunte: quanto tempo, quais serviços, que riscos?",
        exemplo:
          "O IDH e sua versão municipal, o IDHM, tentam combinar renda, educação e longevidade num só índice, justamente porque a renda sozinha não basta.",
        naoConfunda:
          "Dizer que a renda não explica tudo não significa que ela não importe. Ela continua sendo uma dimensão central.",
        naProva:
          "Charges e fotos de contraste urbano pedem o que vai além da renda, sem descartá-la.",
      },
      {
        id: "media-distribuicao",
        name: "INDICADOR MÉDIO × DISTRIBUIÇÃO E ESCALA",
        conceito:
          "A média resume um conjunto num só número, e por isso esconde como ele se distribui. Indicadores de distribuição, como o índice de Gini, que vai de zero (igualdade total) a um (desigualdade máxima), mostram a concentração. E toda medida depende da escala: país, região, município, bairro.",
        penseAssim:
          "Quando aparecer uma média, pergunte quem está acima, quem está abaixo e o que acontece ao mudar a escala.",
        exemplo:
          "Segundo o IBGE, em 2025 o rendimento médio domiciliar por pessoa atingiu o maior valor da série histórica, mas o índice de Gini desse rendimento subiu de 0,504, em 2024, para 0,511.",
        naoConfunda:
          "Uma média pode melhorar enquanto as diferenças internas permanecem ou aumentam.",
        naProva:
          "Tabelas com média e faixas de renda pedem que você leia a distribuição. A armadilha é supor que a média descreve a realidade de todos.",
      },
      {
        id: "disponibilidade-acesso",
        name: "DISPONIBILIDADE × ACESSO",
        conceito:
          "Disponibilidade é a existência do serviço. Acesso é a possibilidade real de usá-lo, que depende de distância, tempo, transporte, capacidade de atendimento, horário, qualidade e barreiras territoriais.",
        penseAssim:
          "Para cada serviço, pergunte: quem consegue chegar, quando, a que custo e com que espera?",
        exemplo:
          "Um posto de saúde que abre dois dias por semana está disponível, mas não garante acesso a quem adoece nos outros cinco.",
        naoConfunda:
          "Na Aula 13, você viu que a desigualdade se organiza no espaço. Aqui o foco é outro: mesmo onde o serviço existe, o uso pode ser desigual.",
        naProva:
          "Mapas de escolas ou hospitais pedem também: quem consegue chegar até eles?",
      },
      {
        id: "equidade-desenho",
        name: "EQUIDADE E DESENHO DE POLÍTICAS PÚBLICAS",
        conceito:
          "Igualdade é tratar todos da mesma forma. Equidade é considerar necessidades e condições diferentes na busca por reduzir desigualdades. Uma política universal define um alcance amplo do direito; uma política focalizada usa critérios para concentrar um instrumento num público específico.",
        penseAssim:
          "Separe as duas perguntas: a política considera necessidades diferentes? E quem ela alcança, todos ou um público definido?",
        exemplo:
          "Um sistema de saúde pode ser universal e, ainda assim, destinar mais recursos às áreas com maior carência.",
        naoConfunda:
          "Universal não é sinônimo de igualdade, nem focalizada é sinônimo de equidade. Os pares respondem a perguntas diferentes, e uma mesma política pode combinar instrumentos universais e focalizados.",
        naProva:
          "Desconfie de alternativas que tratam universal e focalizado como modelos necessariamente opostos, ou que chamam qualquer focalização de privilégio.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "pobreza-cai",
        title: "Se a pobreza cai, a desigualdade cai junto?",
        content:
          "Não necessariamente. Segundo o IBGE, de 2024 para 2025, o rendimento por pessoa cresceu em todas as faixas de renda, mas cresceu 8,7% entre os 10% de maior rendimento e 4,7% entre os 40% de menor rendimento. A renda da base subiu, mas a distância entre os grupos aumentou. Esses dados não medem a pobreza; mostram que melhorar a renda de quem está embaixo e reduzir a distância são movimentos diferentes. Por isso uma boa leitura sempre combina dois tipos de indicador: um de patamar, que mostra quantos estão abaixo de uma linha, e um de distribuição, que mostra quão longe os grupos estão uns dos outros.",
        flow: ["Renda de todos sobe", "Uns sobem mais", "Patamar melhora", "Distância aumenta"],
        highlight: "Melhorar e se aproximar são movimentos diferentes.",
      },
      {
        id: "disponivel-acesso",
        title: "Ter um serviço disponível significa conseguir acessá-lo?",
        content:
          "Não. O acesso depende do território: da distância, do transporte, do tempo de viagem, do horário de funcionamento e da capacidade de atendimento. Morar na periferia pode significar duas horas por dia de deslocamento, e um posto lotado pode significar semanas de espera. O serviço pode estar no mapa e, ainda assim, fora do alcance.",
        flow: ["Serviço existe", "Distância e transporte", "Horário e capacidade", "Uso real"],
        highlight: "Disponibilidade se vê no mapa; acesso se vê na vida das pessoas.",
      },
      {
        id: "tratar-igual",
        title: "Tratar todos da mesma forma produz sempre o mesmo resultado?",
        content:
          "Depende do ponto de partida. Se todos partem de condições parecidas, tratar igual pode bastar. Se partem de condições muito diferentes, o mesmo tratamento tende a manter a distância. Por isso as políticas combinam instrumentos: um direito universal garante o alcance amplo, e critérios focalizados concentram recursos onde a necessidade é maior. Cada desenho tem limites: o universal pode custar mais e não chegar igual a todos; o focalizado pode deixar de fora quem está logo acima do critério. A escolha depende do objetivo e do problema diagnosticado.",
        flow: ["Diagnóstico", "Objetivo", "Universal, focalizado ou ambos", "Limites"],
        highlight: "Nenhum desenho é bom em si: ele é adequado, ou não, a um problema.",
      },
    ],
    closing:
      "Exercer cidadania também é isso: saber o que uma política pretende, como medir seu efeito e onde cobrar quando o resultado não aparece, como você viu nas Aulas 06 e 15.",
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Como medir e responder às desigualdades no Brasil?",
    center: "BRASIL",
    items: [
      {
        id: "sus",
        label: "SUS: DIREITO UNIVERSAL, ACESSO DESIGUAL",
        description:
          "A Constituição define a saúde como direito de todos e dever do Estado, e a Lei 8.080 tem a universalidade de acesso entre seus princípios. O Ministério da Saúde apresenta a equidade como princípio do SUS, para diminuir desigualdades. Mas as condições concretas de acesso não são uniformes: a oferta de profissionais e serviços se distribui de forma desigual entre regiões, capitais e interior.",
      },
      {
        id: "bpc",
        label: "BPC: COMO SE LÊ UM INSTRUMENTO FOCALIZADO",
        description:
          "O Benefício de Prestação Continuada é um benefício assistencial: paga um salário mínimo mensal a idosos com 65 anos ou mais e a pessoas com deficiência cuja renda familiar por pessoa seja de até 1/4 do salário mínimo. O BPC não é aposentadoria e não exige contribuição previdenciária. Exige inscrição atualizada no Cadastro Único; é gerido pelo MDS e operacionalizado pelo INSS, que avalia a deficiência, e passa por revisões periódicas. Como todo critério de corte, deixa de fora quem está logo acima dele.",
      },
      {
        id: "ipea",
        label: "ACESSO A OPORTUNIDADES: O TEMPO TAMBÉM É DESIGUAL",
        description:
          "O projeto Acesso a Oportunidades, do Ipea, mede quantos empregos, serviços de saúde e escolas cada pessoa alcança a pé, de bicicleta ou de transporte público. Com dados de 2019 para as 20 maiores cidades, o estudo mostrou que a população branca e de alta renda tem, em média, mais acesso que a população negra e pobre, e que periferias funcionam como desertos de oportunidades. O indicador descreve o acesso; não explica, sozinho, suas causas.",
      },
    ],
    study:
      "Cada cartão prova um conceito: o SUS, que direito universal não é acesso uniforme; o BPC, como se lê um instrumento focalizado; o Ipea, que o acesso depende de território e tempo.",
    highlight:
      "No Brasil, medir desigualdade exige olhar renda, território e tempo, e ler cada política pelo problema que ela pretende enfrentar.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Gráfico de pobreza e desigualdade",
      "Tabela com média e distribuição",
      "Mapa por município ou bairro",
      "Trecho de lei ou de política pública",
      "Contraste territorial em imagem ou charge",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Separar patamar de distância",
      "Ler além da média",
      "Distinguir disponibilidade de acesso",
      "Avaliar se o instrumento corresponde ao problema",
    ],
    highlight:
      "A prova raramente pergunta “o que é desigualdade?”. Ela mostra um material e quer ver você executar uma operação sobre ele.",
    guidingIntro: "Material → operação → armadilha:",
    guidingQuestions: [
      "Gráfico de pobreza e desigualdade → leia cada linha separadamente. Armadilha: pobreza = desigualdade.",
      "Tabela com média e distribuição → olhe as faixas, não só a média. Armadilha: média = realidade de todos.",
      "Mapa por município ou bairro → mude a escala e procure quem consegue chegar aos serviços. Armadilhas: renda explica tudo; serviço existente = acesso garantido.",
      "Trecho de política pública → identifique objetivo, público, critério e escala. Armadilhas: igualdade = equidade; universal e focalizado como opostos; focalização = privilégio.",
      "Contraste territorial → liste as dimensões e pergunte o que mudou de fato. Armadilha: política anunciada = resultado produzido.",
    ],
  },

  question: {
    id: "s07-a21-q01",
    statement:
      "Dados fictícios do município de Vale das Acácias. Centro: renda média por pessoa de R$ 1.900, 25 minutos até o trabalho, 98% dos domicílios ligados à rede de esgoto, espera de 3 dias por consulta. Bairro Morro Verde: R$ 1.850, 80 minutos, 55%, espera de 20 dias. Distrito rural de Pedra Miúda: R$ 1.800, 70 minutos até a sede, 30%, posto de saúde que abre dois dias por semana. A renda média do município é de R$ 1.850, e cada localidade tem um posto de saúde. A prefeitura propõe aumentar a verba da saúde no mesmo valor por morador nas três localidades. Considerando esses dados, a leitura mais adequada é que",
    options: [
      {
        id: "A",
        text: "como a renda por pessoa é quase a mesma nas três localidades, as diferenças entre elas são pequenas; a proposta de verba idêntica por morador é adequada porque trata todos da mesma forma e segue a média do município, que representa bem a sua população.",
      },
      {
        id: "B",
        text: "rendas próximas e a média única escondem diferenças de esgoto, tempo e espera; aberto dois dias por semana, o posto do distrito não garante atendimento; e a verba igual por morador, critério uniforme, não considera por si só carências territoriais distintas.",
      },
      {
        id: "C",
        text: "as três localidades já têm posto de saúde, o que assegura o acesso dos moradores; destinar recursos adicionais a Morro Verde ou a Pedra Miúda criaria um privilégio territorial, contrário ao caráter universal que deve orientar o sistema de saúde do município.",
      },
      {
        id: "D",
        text: "Morro Verde tem a maior espera e o maior tempo de deslocamento, e por isso a verba adicional deveria ser concentrada ali, pois direcionar recursos ao bairro mais carente é o modo mais eficiente de agir; Pedra Miúda, por já ter posto, pode ficar para depois.",
      },
      {
        id: "E",
        text: "a média municipal retrata bem a renda, mas o tempo de deslocamento revela desigualdade; por isso, aprovar uma lei que garanta consulta em até três dias nas três localidades seria suficiente para que as diferenças de atendimento entre elas deixassem de existir.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "A alternativa B está correta porque lê o caso nas quatro operações da aula. Renda e condições de vida: as rendas são próximas, mas esgoto, tempo e espera variam muito. Média e distribuição: a média de R$ 1.850 descreve o município sem mostrar essas diferenças. Disponibilidade e acesso: Pedra Miúda tem posto, mas o atendimento depende de dias de funcionamento. Desenho da política: a verba igual por morador é um critério uniforme de distribuição e, por si só, não considera carências diferentes. A trata renda parecida como ausência de desigualdade e supõe que a média representa todos. C confunde disponibilidade com acesso e chama de privilégio a atenção a necessidades maiores. D acerta ao ver as carências de Morro Verde, mas faz um diagnóstico incompleto, ignorando o pior esgoto e o posto de dois dias de Pedra Miúda, e trata a focalização como solução automaticamente superior. E confunde política anunciada com resultado produzido e aceita a média como retrato suficiente.",
  },

  missionCheck:
    "Voltemos à pergunta da aula: desigualdade é apenas diferença de renda? Agora você consegue decompor uma desigualdade em dimensões, perguntar o que um indicador esconde, mudar a escala e verificar se o instrumento corresponde ao problema?",

  completionMessage:
    "Na Aula 19, você viu que a forma de produzir transforma trabalho e território. Na Aula 20, que as etapas dessa produção distribuem valor, poder e vulnerabilidade entre lugares. Na Aula 21, que essas diferenças chegam às condições de vida. Ler uma desigualdade exige saber onde ela aparece, como é medida e qual instrumento pretende enfrentá-la.",
};
