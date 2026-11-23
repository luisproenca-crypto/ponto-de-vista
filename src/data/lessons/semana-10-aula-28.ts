import type { LessonContent } from "@/lib/types";

/**
 * AULA 28 — REGIÕES, CRITÉRIOS E ESCALAS
 * Semana 10 • Geografia Essencial (ENTENDA) — O MUNDO EM RECORTES
 * Linha de apoio da semana: "Regionalizar o mundo". Pergunta integradora da
 * semana: "O que um recorte do espaço permite ver — e o que ele deixa de
 * mostrar?"
 *
 * Pergunta-guia (abre e fecha a aula): "O que muda quando mudamos o
 * critério?" Operação: OBJETIVO → CRITÉRIO → ESCALA → PADRÃO → LIMITES →
 * O QUE FICA DE FORA, idêntica à ferramenta "Leia uma regionalização em seis
 * passos" (`application`). Trava contra o relativismo: um recorte precisa ser
 * coerente com o objetivo, o processo e as evidências.
 * Cinco lentes: critério; escala de análise; duas lógicas (semelhança e
 * relações); limites e transições; recorte oficial × analítico.
 * Três casos, todos em Imperatriz (MA): A) o mesmo ponto em três mapas;
 * B) divisão regional do IBGE × REGIC; C) o mesmo critério em três escalas.
 * Progressão: a Semana 09 leu limites dados; a Aula 28 pergunta quem traça
 * o limite, com que critério e para quê. A Aula 01 definiu região; aqui ela
 * vira ferramenta.
 * REPETIÇÃO EVITADA: definição de região (Aula 01); leitura de mapas e "o
 * que ficou de fora?" (Aula 04, só retomada); rede urbana (Aula 10); bacia,
 * divisor, montante e jusante (Aula 23); domínios e transições (Aula 24).
 * FRONTEIRA COM AS AULAS 29 E 30: sem Norte/Sul Global, grupos de renda,
 * OMC, centro/periferia, BRICS ou anamorfose (Aula 29); sem resposta
 * discursiva (Aula 30).
 * Cuidados: macrorregiões não são entes administrativos nem têm governo;
 * complexos geoeconômicos são proposta acadêmica, não divisão do IBGE; bacia
 * não é tratada como "região funcional" em sentido teórico estrito; duas
 * lógicas, não "dois tipos de região"; nenhum número de municípios.
 * Território da questão (Valmira, Alcova, Brisa, Cedrela, rios Lontra e
 * Taquara, Candeia) é fictício; nomes inéditos nas Aulas 01–27 e nos
 * Checkpoints 01–09.
 *
 * IMAGEM PLANEJADA (ainda não existe; o site mostra o placeholder):
 * /public/assets/aulas/semana-10-aula-28-imperatriz.png, proporção 16:9.
 *
 * FONTES:
 *   • IBGE. Divisão regional do Brasil em regiões geográficas imediatas e
 *     regiões geográficas intermediárias: 2017. Rede urbana e fluxos de
 *     gestão como base; regiões contidas nos limites das Unidades da
 *     Federação; Regiões Geográficas Imediata e Intermediária de Imperatriz.
 *   • IBGE. Regiões de Influência das Cidades — REGIC 2018: Imperatriz como
 *     Capital Regional C.
 *   • ANA / CNRH: Divisão Hidrográfica Nacional com 12 regiões
 *     hidrográficas; Imperatriz na Região Hidrográfica Tocantins-Araguaia.
 *   • Complexos geoeconômicos: GEIGER, Pedro Pinchas, proposta de 1967 (três
 *     complexos: Amazônia, Nordeste e Centro-Sul; o oeste do Maranhão no
 *     complexo amazônico). Referências: ARAÚJO, G. C. C. Regionalizar para
 *     integrar. Boletim Paulista de Geografia, v. 97, 2017 (fig. "Complexos
 *     Regionais de Pedro Geiger de 1967"); GEIGER, P. P. Regionalização.
 *     Revista Brasileira de Geografia, v. 31, n. 1, 1969.
 *
 * Aula em preparação (`course.ts` ainda não cadastra a Semana 10).
 */
export const aula28Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de ler uma regionalização perguntando para que ela serve, que critério e que escala a organizam, que padrão e que limites ela produz, e o que ela deixa de mostrar.",

  observation: {
    title: "O OLHAR DO PACO",
    lines: [
      "Imperatriz, no Maranhão, aparece em três mapas do Brasil. No mapa das macrorregiões do IBGE, ela está no Nordeste. No mapa dos complexos geoeconômicos propostos por Pedro Pinchas Geiger em 1967, está na Amazônia. No mapa das regiões hidrográficas, está na Região Hidrográfica Tocantins-Araguaia.",
      "Nenhum dos três mapas está errado. Cada um responde a uma pergunta diferente.",
    ],
    image: {
      src: "/assets/aulas/semana-10-aula-28-imperatriz.png",
      alt: "Composição cartográfica conceitual, sobre fundo escuro, com um marcador laranja em Imperatriz, no Maranhão, e três camadas territoriais sobrepostas, representando critérios distintos de regionalização: um mosaico de divisões de lados retos, manchas roxas que agrupam áreas semelhantes e uma rede de drenagem verde que converge para o mesmo ponto.",
      caption: "Composição conceitual criada para fins didáticos; não representa limites reais.",
    },
    questions: [
      "Imperatriz não se mexeu. Em qual região ela está?",
      "Que critério organizou cada um dos três mapas?",
      "Por que os limites do segundo e do terceiro mapa não seguem as divisas dos estados?",
      "Para que pergunta cada mapa serve melhor?",
      "O que muda quando mudamos o critério?",
    ],
    closing:
      "IMPERATRIZ CONTINUA NO MESMO LUGAR. O QUE MUDOU FOI O CRITÉRIO USADO PARA ORGANIZAR O ESPAÇO.",
  },

  connection: {
    title: "DO LIMITE DADO AO RECORTE ESCOLHIDO",
    flow: ["Região como definição (Aula 01)", "Limites dados (Semana 09)", "Recortes escolhidos (Aula 28)"],
    highlight:
      "Antes de analisar um problema, é preciso escolher uma unidade de análise coerente com ele.",
    text: "Até aqui, você leu linhas que já estavam dadas: fronteiras, divisas, limites de bacias. Agora vai perguntar quem traçou a linha, com que critério e para quê. Você já sabe o que é região (Aula 01). Agora vai usá-la como ferramenta. “O que muda quando mudamos o critério?”",
  },

  lenses: {
    eyebrow: "Cinco lentes para ler um recorte",
    title: "QUEM TRAÇOU ESTA LINHA, E PARA QUÊ?",
    subtitle:
      "Cinco perguntas ajudam a ler qualquer regionalização. Logo abaixo, seis passos mostram como aplicá-las.",
    items: [
      {
        id: "criterio",
        emoji: "🧮",
        name: "CRITÉRIO",
        question: "Que variável organizou o recorte?",
      },
      {
        id: "escala",
        emoji: "🔭",
        name: "ESCALA DE ANÁLISE",
        question: "O recorte serve ao país, à região ou à cidade?",
      },
      {
        id: "logicas",
        emoji: "🧩",
        name: "SEMELHANÇA E RELAÇÕES",
        question: "As áreas foram agrupadas por serem parecidas ou por estarem conectadas?",
      },
      {
        id: "limites",
        emoji: "〰️",
        name: "LIMITES E TRANSIÇÕES",
        question: "Que tipo de limite o processo representado produz?",
      },
      {
        id: "oficial-analitico",
        emoji: "🏛️",
        name: "RECORTE OFICIAL × ANALÍTICO",
        question: "Quem produziu o recorte, e para que ele serve?",
      },
    ],
    highlight:
      "Um recorte não é adequado porque “parece bom”: ele precisa ser coerente com o objetivo, o processo e as evidências.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "LEIA UMA REGIONALIZAÇÃO EM SEIS PASSOS",
    context:
      "Os passos servem para mapas, textos institucionais e questões de prova. Aqui, aplicados aos três mapas de Imperatriz.",
    flow: [
      "Para que serve este recorte? (Se o objetivo não estiver explícito, infira-o pelo critério.)",
      "Que critério organizou o recorte?",
      "Em que escala de análise?",
      "Que padrão o recorte destaca?",
      "Como os limites foram traçados: linha administrativa, divisor, faixa ou área de influência?",
      "O que ele deixa de mostrar? (A mesma pergunta que fizemos aos mapas na Aula 04: o que ficou de fora?)",
    ],
    question: "O que este recorte permite ver, e o que ele deixa de mostrar?",
    accordions: [
      {
        id: "macrorregioes",
        title: "MAPA 1: MACRORREGIÕES DO IBGE",
        content:
          "Serve à organização e à divulgação de estatísticas e à leitura do território nacional. O critério segue as divisas dos estados, em escala nacional. Mostra um quadro estável para comparar grandes conjuntos; deixa de mostrar diferenças internas e relações que atravessam as divisas. As macrorregiões não são entes administrativos e não têm governo próprio.",
      },
      {
        id: "geiger",
        title: "MAPA 2: COMPLEXOS GEOECONÔMICOS",
        content:
          "Proposta acadêmica de Pedro Pinchas Geiger (1967), não uma divisão oficial do IBGE. O critério é socioeconômico, e por isso os limites cortam estados: o oeste do Maranhão fica no complexo da Amazônia. Mostra grandes conjuntos de formação econômica; deixa de mostrar, por exemplo, a organização da drenagem.",
      },
      {
        id: "hidrografica",
        title: "MAPA 3: REGIÕES HIDROGRÁFICAS",
        content:
          "Serve ao planejamento e à gestão dos recursos hídricos. O critério é o funcionamento da drenagem, e os limites seguem divisores de águas, não divisas estaduais. Mostra como a água conecta áreas; deixa de mostrar identidades, economia e divisões políticas.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "Você viu Imperatriz em três regiões diferentes sem que a cidade saísse do lugar. Agora, as cinco lentes que explicam por quê.",
      "Guarde uma regra: antes de perguntar “em que região fica?”, pergunte “região segundo qual critério, em que escala e para quê?”.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "criterio",
        name: "CRITÉRIO",
        conceito:
          "Critério é a variável escolhida para organizar o recorte: política, economia, água, clima, rede urbana, cultura. Mudou o critério, o mapa pode mudar.",
        penseAssim: "Pergunte: que variável decidiu onde passa cada limite?",
        exemplo:
          "Imperatriz fica no Nordeste pelo critério das divisas estaduais, na Amazônia pelo critério socioeconômico de Geiger e na Tocantins-Araguaia pelo critério da drenagem.",
        naoConfunda:
          "Recortes diferentes não significam que um deles esteja errado: eles respondem a perguntas diferentes.",
        naProva:
          "Dois mapas do mesmo território pedem que você identifique o critério de cada um antes de compará-los.",
      },
      {
        id: "escala",
        name: "ESCALA DE ANÁLISE",
        conceito:
          "Escala de análise é a dimensão do problema que o recorte precisa servir: nacional, regional ou local. O mesmo critério pode produzir recortes diferentes quando muda a escala do problema.",
        penseAssim: "Pergunte: este recorte foi feito para o país, para uma região ou para uma cidade?",
        exemplo:
          "Pelo critério da água, a gestão nacional usa regiões hidrográficas; a gestão de uma bacia usa a bacia; a drenagem de um bairro usa uma sub-bacia urbana.",
        naoConfunda:
          "Escala de análise não é escala cartográfica (Aula 04): aqui, o que muda é o tamanho do problema, não a proporção do desenho.",
        naProva:
          "Questões sobre planejamento pedem que você relacione o recorte à escala em que a decisão será tomada.",
      },
      {
        id: "logicas",
        name: "SEMELHANÇA E RELAÇÕES",
        conceito:
          "Há duas lógicas úteis para construir recortes regionais. Pela semelhança, agrupam-se áreas com características consideradas parecidas segundo um critério, como clima, renda ou vegetação. Pelas relações, agrupam-se espaços conectados por fluxos, polarização, redes ou pelo funcionamento de um sistema, como a rede urbana. Essas duas lógicas não esgotam a teoria regional.",
        penseAssim: "Pergunte: as áreas estão juntas porque se parecem ou porque se conectam?",
        exemplo:
          "Um mapa de faixas de renda agrupa por semelhança; a área de influência de uma cidade agrupa por relações. A bacia é uma unidade espacial delimitada segundo o funcionamento da drenagem.",
        naoConfunda:
          "Não são “dois tipos de região” que esgotam todas as possibilidades: são duas lógicas que ajudam a ler muitos recortes.",
        naProva:
          "Mapas de rede urbana pedem que você leia polarização e fluxos, e não apenas áreas parecidas.",
      },
      {
        id: "limites",
        name: "LIMITES E TRANSIÇÕES",
        conceito:
          "O tipo de limite depende do processo representado. Um limite administrativo é uma linha definida institucionalmente; um divisor de águas é produzido pelo relevo e pela drenagem; uma faixa de transição ambiental é gradual; uma área de influência urbana tem limite relacional, não necessariamente rígido.",
        penseAssim: "Pergunte: esta linha foi decidida, medida ou é uma zona de passagem?",
        exemplo:
          "O limite convencional entre Europa e Ásia é outro exemplo de que nem todo limite regional corresponde a uma separação natural inequívoca.",
        naoConfunda:
          "Nem todo limite regional é uma linha precisa, e divisa estadual não é necessariamente divisor de águas.",
        naProva:
          "Mapas de domínios e biomas pedem que você reconheça faixas de transição, e não apenas linhas.",
      },
      {
        id: "oficial-analitico",
        name: "RECORTE OFICIAL × ANALÍTICO",
        conceito:
          "Um recorte oficial é produzido por uma instituição para finalidades como estatística, planejamento e organização territorial. Um recorte analítico é construído para interpretar determinado processo. Ambos precisam de critério, mas não servem necessariamente para a mesma pergunta.",
        penseAssim: "Pergunte para que o recorte serve, e não simplesmente se ele está “mentindo”.",
        exemplo:
          "As macrorregiões e as regiões geográficas do IBGE são recortes oficiais; os complexos geoeconômicos de Geiger são uma proposta acadêmica.",
        naoConfunda:
          "Oficial não é sinônimo de verdadeiro, e analítico ou acadêmico não é sinônimo de opinião.",
        naProva:
          "Textos institucionais pedem que você identifique a finalidade do recorte, sem tratá-lo como neutro e único possível.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "nao-qualquer",
        title: "Por que nem todo recorte serve",
        content:
          "Reconhecer que existem várias regionalizações não significa aceitar qualquer uma para qualquer problema. Um recorte é mais ou menos adequado conforme o objetivo, o processo envolvido e as evidências. Para gerir a água, um recorte que corta a bacia ao meio separa o que a drenagem conecta; para comparar estatísticas entre estados, um recorte que ignora as divisas não permite a comparação.",
        flow: ["Objetivo", "Processo", "Critério", "Evidências", "Recorte adequado"],
        highlight: "Vários recortes podem ser válidos; nem todos servem à mesma pergunta.",
      },
      {
        id: "fica-de-fora",
        title: "O que fica de fora",
        content:
          "Todo recorte simplifica para tornar o espaço compreensível. Um indicador calculado para uma grande região pode esconder diferenças entre suas partes; um recorte por divisas pode esconder relações que as atravessam. Isso não é manipulação: é o preço de qualquer simplificação. A tarefa de quem lê é perguntar o que ficou de fora, como na Aula 04.",
        highlight: "Simplificar não é falsificar, mas exige reconhecer limites.",
      },
      {
        id: "proposito",
        title: "Para que o recorte serve",
        content:
          "Desconfiar de todos os mapas não ajuda a ler nenhum. A pergunta mais útil é outra: para que este recorte foi feito? Um recorte estatístico precisa de estabilidade e de limites claros; um recorte para estudar fluxos precisa acompanhar as relações; um recorte para gerir a água precisa seguir a drenagem.",
        flow: ["Quem produziu", "Para quê", "Com que critério", "Para qual pergunta serve"],
        highlight: "Pergunte para que o recorte serve.",
      },
    ],
    closing:
      "Nesta aula, você leu recortes do Brasil. Na Aula 29, a pergunta muda de escala: quem classifica os países do mundo, com que critério e para quê?",
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "O que muda em Imperatriz quando mudam o critério, as relações e a escala?",
    center: "IMPERATRIZ",
    items: [
      {
        id: "tres-mapas",
        label: "CASO A: O MESMO PONTO EM TRÊS MAPAS",
        description:
          "Nordeste nas macrorregiões do IBGE, Amazônia nos complexos geoeconômicos de Geiger, Tocantins-Araguaia nas regiões hidrográficas. O ponto não mudou; mudou o critério, e com ele o recorte.",
      },
      {
        id: "relacoes",
        label: "CASO B: RELAÇÕES URBANAS E LIMITES ESTADUAIS",
        description:
          "Na divisão regional do IBGE de 2017, baseada principalmente na rede urbana e nos fluxos de gestão, Imperatriz é polo da Região Geográfica Imediata e da Região Geográfica Intermediária de Imperatriz, que respeitam os limites do Maranhão. Na pesquisa Regiões de Influência das Cidades (REGIC 2018), Imperatriz é Capital Regional C, e sua área de influência não precisa reproduzir esses limites. O recorte estatístico precisa caber na Unidade da Federação; as relações urbanas podem ultrapassá-la.",
      },
      {
        id: "escalas",
        label: "CASO C: O MESMO CRITÉRIO EM TRÊS ESCALAS",
        description:
          "Pelo critério da água, a escala nacional usa a Região Hidrográfica Tocantins-Araguaia, uma das 12 regiões hidrográficas do país; a escala regional usa uma bacia de afluente desse sistema; a escala local, num exemplo esquemático de planejamento urbano, usa uma sub-bacia para interpretar drenagem e alagamentos. Mesmo critério, outra escala, outro recorte.",
      },
    ],
    study:
      "Cada caso prova uma parte da operação: o caso A, o critério; o caso B, as relações e os limites de um recorte oficial; o caso C, a escala de análise.",
    highlight: "Mudou o critério, a relação ou a escala: o recorte pode mudar.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Dois mapas do Brasil",
      "Mapa de rede urbana",
      "Mapa hidrográfico",
      "Mapa de domínios ou biomas",
      "Texto institucional",
      "REGIC × divisão regional",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Identificar o critério",
      "Relacionar limite e processo",
      "Reconhecer a finalidade do recorte",
      "Avaliar o recorte para um objetivo",
    ],
    highlight:
      "A prova raramente pede que você diga em que região fica um lugar. Ela mostra recortes diferentes e quer ver você explicar por que eles diferem.",
    guidingIntro: "Material → operação → armadilha:",
    guidingQuestions: [
      "Dois mapas do Brasil → identifique os critérios. Armadilha: uma divisão é verdadeira e a outra é falsa.",
      "Mapa de rede urbana → interprete polarização e relações. Armadilha: região é apenas área semelhante.",
      "Mapa hidrográfico → relacione o limite ao processo de drenagem. Armadilha: divisa estadual = divisor de águas.",
      "Mapa de domínios ou biomas → reconheça transições. Armadilha: todo limite regional é uma linha precisa.",
      "Texto institucional → identifique a finalidade. Armadilha: oficial = neutro e único possível.",
      "REGIC × divisão regional → compare relações e restrições institucionais do recorte. Armadilha: uma região baseada em relações sempre precisa respeitar os limites estaduais.",
    ],
  },

  question: {
    id: "s10-a28-q01",
    statement:
      "No país fictício de Valmira, o mesmo território aparece em três mapas. No Mapa 1, ele está dividido nas províncias de Alcova, Brisa e Cedrela, segundo limites político-administrativos. No Mapa 2, está dividido nas bacias dos rios Lontra e Taquara, separadas por um divisor de águas cujo traçado corta as três províncias. No Mapa 3, aparece a área de influência de Candeia, cidade-polo de Brisa, traçada a partir dos deslocamentos diários para trabalho, compras e serviços; essa área inclui localidades de Alcova e de Cedrela. O instituto de estatística de Valmira precisa comparar e divulgar indicadores oficiais de cada província. Considerando os critérios dos três mapas e o objetivo do instituto, a leitura mais adequada é que",
    options: [
      {
        id: "A",
        text: "o Mapa 2 seria mais adequado, pois as bacias formam unidades integradas por processos físicos e permitiriam comparar o território com mais coerência do que limites político-administrativos, mesmo para divulgar indicadores de cada província.",
      },
      {
        id: "B",
        text: "os três mapas podem ser válidos para perguntas diferentes, e mudar o critério alterou os limites; para comparar indicadores entre as províncias, o Mapa 1 é adequado, o que não significa que qualquer divisão sirva para qualquer objetivo.",
      },
      {
        id: "C",
        text: "como toda regionalização depende de critérios, os três mapas servem igualmente para comparar os indicadores das províncias, e o instituto pode escolher qualquer um deles, já que nenhum recorte é mais adequado que outro para esse objetivo.",
      },
      {
        id: "D",
        text: "o Mapa 1 é adequado e, por ser o recorte oficial usado pelo instituto, deveria orientar também as análises de drenagem e de influência urbana, evitando que diferentes regionalizações produzam resultados incompatíveis entre si.",
      },
      {
        id: "E",
        text: "o Mapa 1 é adequado para comparar as províncias, mas o Mapa 3 está mal traçado, pois uma área de influência urbana precisa terminar no limite da província de Brisa, e os deslocamentos para Alcova e Cedrela deveriam ser descartados.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "A alternativa B está correta porque lê os três recortes pelo objetivo do instituto. 1. CRITÉRIO: cada mapa usa um critério diferente (limites político-administrativos, drenagem e deslocamentos diários), e por isso os limites mudam; o divisor e a área de influência de Candeia cortam as províncias. 2. OBJETIVO: para comparar e divulgar indicadores oficiais de cada província, o recorte precisa coincidir com as províncias; por isso o Mapa 1 é o adequado. 3. VALIDADE: os Mapas 2 e 3 continuam válidos para outras perguntas, como gerir a água das bacias do Lontra e do Taquara ou organizar transporte e serviços em torno de Candeia. 4. SEM RELATIVISMO: nem todo recorte serve para todo objetivo; um recorte por bacias misturaria partes de províncias diferentes e impediria a comparação pedida. E o que o Mapa 1 deixa de mostrar? Uma média provincial pode esconder diferenças internas, que só aparecem numa escala mais detalhada; e as províncias não mostram nem a drenagem nem as conexões urbanas que as atravessam. A trata um recorte físico como superior para qualquer objetivo. C conclui que qualquer recorte serve. D estende o recorte oficial, adequado a uma finalidade, a todas as outras. E exige que uma região de relações termine na divisa administrativa.",
    optionFeedback: {
      A: "As bacias são unidades integradas pela drenagem, e por isso o Mapa 2 serve a problemas de água. Mas o processo físico não torna o recorte superior para qualquer objetivo: um recorte por bacias misturaria partes de províncias diferentes e impediria a comparação pedida.",
      B: "Correta: reconhece que os três recortes podem valer para perguntas diferentes, que o critério mudou os limites, que o Mapa 1 serve ao objetivo do instituto e que nem todo recorte serve a qualquer objetivo.",
      C: "Depender de critérios não torna todos os recortes igualmente adequados. Só o Mapa 1 coincide com as províncias que o instituto precisa comparar.",
      D: "O Mapa 1 é adequado para comparar províncias, mas isso não o torna adequado a todos os objetivos: a drenagem segue divisores de águas e a influência de Candeia segue os deslocamentos, que atravessam os limites provinciais. Recortes diferentes servem a perguntas diferentes.",
      E: "Uma área de influência acompanha os deslocamentos, que podem atravessar limites administrativos. Descartar os fluxos para Alcova e Cedrela apagaria justamente o que o Mapa 3 quer mostrar.",
    },
  },

  missionCheck:
    "Voltemos à pergunta da aula: o que muda quando mudamos o critério? Agora você consegue ler uma regionalização perguntando para que ela serve, que critério e que escala a organizam, como os limites foram traçados e o que ela deixa de mostrar?",

  completionMessage:
    "Imperatriz não se mexeu, mas mudou de região três vezes: mudou o critério, mudou o recorte. Na Aula 29, a mesma pergunta vai para o mundo: quem classifica os países, com que critério e para quê?",
};
