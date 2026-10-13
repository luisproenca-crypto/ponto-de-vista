import type { LessonContent } from "@/lib/types";

/**
 * AULA 14 — BRASIL NAS NOTÍCIAS: DO ACONTECIMENTO AO PROCESSO
 * Semana 05 • Geopolítica & Atualidades (CONECTE)
 *
 * Ideia central: uma notícia é o episódio visível de um processo mais longo.
 * O aluno aprende a percorrer ACONTECIMENTO → PROCESSO → INTERESSES →
 * ESCALAS → CONEXÕES e a ler uma notícia nova, não a memorizar quatro casos.
 * Pergunta-guia (abre e fecha a aula): "Quando uma notícia sobre o Brasil
 * aparece na tela, que processo mais longo ela está mostrando?"
 *
 * Os quatro acontecimentos reais são apenas portas de entrada; cada um
 * ensina um processo que continua válido quando a manchete envelhece:
 *   1. mercados e dependência (concentração → vulnerabilidade →
 *      diversificação → interdependência);
 *   2. minerais críticos (ter o recurso não é dominar a cadeia);
 *   3. energia (matriz elétrica ≠ matriz energética; descoberta ≠ reserva
 *      comercial ≠ produção);
 *   4. Amazônia e clima (território local, nacional e global ao mesmo tempo).
 *
 * Retomadas: Aula 01 (território), Aula 02 (atores, interesses, escalas),
 * Aula 05 (cadeias, interdependência, de-risking), Aula 08 (enquadramento),
 * Aula 11 (disputa por recursos) e Aula 13 (lentes e Carajás).
 *
 * NEUTRALIDADE (período eleitoral de 2026): nenhum candidato, partido,
 * slogan ou avaliação de governo. Decisões governamentais e empresariais
 * aparecem como atos, interesses e efeitos, sem juízo de valor.
 *
 * DADOS FACTUAIS (verificados em fonte primária ou institucional, conferidos
 * em 13/10/2026; REVISAR ANTES DE PUBLICAR porque são fatos de 2025–2026):
 *   • Tarifas dos EUA: duas medidas distintas, ambas da Seção 301. (1) USTR,
 *     aviso de 20/07/2026 (91 FR 45516): 25% sobre importações do Brasil, com
 *     exceções, em vigor desde 22/07/2026; entre os temas investigados está o
 *     desmatamento ilegal. (2) Aviso de 28/07/2026 (91 FR 47318, investigação
 *     sobre proibição de importação de bens de trabalho forçado, 54
 *     economias): 12,5% sobre produtos do Brasil, com exceções, em vigor
 *     desde 24/07/2026. A aula não soma percentuais. Negociação em curso
 *     (grupo de trabalho criado em 30/09/2026); consultas do Brasil na OMC.
 *   • Acordo UE–Mercosul: Conselho da UE autorizou a assinatura em
 *     09/01/2026; o Parlamento Europeu pediu parecer ao TJUE em 21/01/2026
 *     (Parecer 1/26, pendente); o acordo comercial interino é aplicado
 *     provisoriamente desde 01/05/2026 (Decreto 12.953/2026 no Brasil); a
 *     vigência definitiva depende do consentimento do Parlamento Europeu, e
 *     o acordo de parceria mais amplo, de ratificações nacionais. Ação da
 *     Polônia (C-460/26): pedido de suspensão negado em 29/09/2026; o mérito
 *     segue pendente.
 *   • China principal destino das exportações: 28,7% do total em 2025 (MDIC).
 *   • Serra Verde / Pela Ema (Minaçu, GO): USA Rare Earth, 8-K e comunicado
 *     de 04/09/2026 (combinação empresarial concluída em 03/09/2026).
 *   • Minerais críticos: Lei 15.506, sancionada em 16/09/2026, institui a
 *     Política Nacional de Minerais Críticos e Estratégicos e o Cimce
 *     (Decreto 13.118/2026 regulamenta o conselho). Objetivos citados pelo
 *     Senado: cadeia produtiva, agregação de valor em território nacional e
 *     soberania.
 *   • Morpho, bloco FZA-M-59: Petrobras, comunicados de 14/08/2026
 *     (presença de hidrocarbonetos) e 02/10/2026 (mais um intervalo com
 *     petróleo, mais profundo); poço em avaliação, sem volume nem
 *     comercialidade estabelecidos; licença do Ibama (LO 1.684/2025) de
 *     20/10/2025.
 *   • BEN 2026 (EPE, Síntese de 03/06/2026): 86,8% de renováveis na matriz
 *     elétrica e 49,4% na matriz energética, em 2025 (a página da EPE traz
 *     49,5%).
 *   • COP30 em Belém (novembro de 2025); TFFF lançado pelo Brasil em
 *     06/11/2025 (Cúpula de Líderes), ainda em estruturação e captação, com
 *     a regra de pelo menos 20% dos pagamentos para povos indígenas e
 *     comunidades locais. Valores totais do fundo deliberadamente NÃO
 *     citados.
 *   • Prodes 2025 consolidado: INPE, 5.731 km² na Amazônia Legal, queda de
 *     12,07% em relação a 2024, no período de 01/08/2024 a 31/07/2025.
 * Tornados qualitativos de propósito (perecíveis): total mobilizado pelo
 * TFFF, valor da combinação da Serra Verde, valores e prazos da Lei 15.506,
 * percentuais das tarifas dos EUA, números exatos de exportação e distâncias
 * do poço.
 *
 * Título, descrição, vídeo e status ficam em `src/data/course.ts`
 * (metadados da aula). Este arquivo guarda somente o conteúdo pedagógico.
 *
 * Esta aula ainda não está publicada em `src/data/course.ts`
 * (`status: "em-preparacao"`).
 */
export const aula14Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de interpretar uma notícia sobre o Brasil no cenário internacional: separar o acontecimento do processo que o explica, reconhecer interesses, escalas e conexões e mobilizar as lentes da Aula 13, sem depender de memorizar atualidades.",

  hypothesis: {
    title: "O OLHAR DO PACO",
    intro: "Imagine abrir o noticiário e encontrar, no mesmo dia, seis manchetes sobre o Brasil.",
    cards: [
      { id: "tarifas", label: "Tarifas dos EUA" },
      { id: "terras-raras", label: "Terras raras" },
      { id: "petroleo-amapa", label: "Petróleo no Amapá" },
      { id: "floresta", label: "Floresta em pé" },
      { id: "soja-china", label: "Soja para a China" },
      { id: "acordo-europa", label: "Acordo com a Europa" },
    ],
    question:
      "Quando uma notícia sobre o Brasil aparece na tela, que processo mais longo ela está mostrando?",
    paco: "Parecem notícias sem relação. Escolha duas e tente imaginar o que elas poderiam ter em comum antes de continuar.",
    reveal:
      "Boa hipótese. Os assuntos são diferentes, mas as ferramentas de leitura são as mesmas: atores, interesses, território, fluxos, redes e escalas. É isso que vamos treinar.",
  },

  connection: {
    title: "DA NOTÍCIA AO PROCESSO",
    flow: ["Acontecimento", "Processo", "Interesses", "Escalas", "Conexões"],
    highlight: "A manchete é o episódio. O processo é a história.",
    text: "Toda notícia tem três camadas. O acontecimento é o que apareceu na tela. O processo é a dinâmica mais longa que ajuda a explicá-lo. A conexão é o que ele toca: outros lugares, outras escalas, outros assuntos. Na Aula 13, você aprendeu a ler o território. Agora vamos usar esse olhar para ler o Brasil nas notícias.",
  },

  lenses: {
    eyebrow: "Seis ferramentas que você já tem",
    title: "LEIA A NOTÍCIA COM O QUE VOCÊ JÁ SABE",
    subtitle:
      "Cada pergunta vem de uma aula anterior (02, 05, 08, 11 e 13) e serve para qualquer notícia sobre o Brasil.",
    items: [
      {
        id: "atores-interesses",
        emoji: "🎯",
        name: "ATORES E INTERESSES",
        question: "Quem está envolvido e o que cada um quer obter, preservar ou proteger?",
      },
      {
        id: "territorio-infraestrutura",
        emoji: "🛤️",
        name: "TERRITÓRIO E INFRAESTRUTURA",
        question: "Onde isso acontece e por onde as coisas circulam: estradas, portos, rios, redes de energia?",
      },
      {
        id: "escala",
        emoji: "📏",
        name: "ESCALA",
        question: "Até onde chegam os efeitos: no lugar, na região, no país, no mundo?",
      },
      {
        id: "competicao-interdependencia",
        emoji: "⚖️",
        name: "COMPETIÇÃO E INTERDEPENDÊNCIA",
        question: "Onde há disputa e onde há dependência mútua?",
      },
      {
        id: "recursos",
        emoji: "⛏️",
        name: "RECURSOS",
        question: "Que recurso está em jogo e quem tem acesso a ele?",
      },
      {
        id: "enquadramento",
        emoji: "🖼️",
        name: "ENQUADRAMENTO",
        question: "O que a manchete destacou e o que deixou em segundo plano?",
      },
    ],
    highlight:
      "Uma notícia nova não exige ferramentas novas. Exige as mesmas perguntas, feitas com cuidado.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "AGORA CONECTE",
    context:
      "Uma manchete de um país fictício: “Fornecedor estrangeiro suspende entregas de fertilizante, e produtores de Vale do Cedro adiam o plantio.” Antes de reagir, percorra o caminho da leitura.",
    flow: ["Entregas suspensas", "Insumo importado em falta", "Produtores adiam o plantio", "Safra em jogo"],
    question: "Que processo mais longo essa manchete está mostrando, e em quais escalas ele aparece?",
    accordions: [
      {
        id: "o-processo",
        title: "O PROCESSO",
        content:
          "O país depende de um insumo que não produz em quantidade suficiente. Quem depende de poucos fornecedores fica exposto a decisões tomadas fora do seu território.",
      },
      {
        id: "local",
        title: "LOCAL",
        content:
          "Os produtores de Vale do Cedro adiam o plantio e fazem contas: esperar, trocar de insumo ou reduzir a área.",
      },
      {
        id: "regional",
        title: "REGIONAL",
        content:
          "Cooperativas, comércio e transporte da região sentem a queda do movimento, e o porto recebe menos carga.",
      },
      {
        id: "nacional",
        title: "NACIONAL",
        content:
          "O governo avalia estoques, compras alternativas e o possível impacto sobre a safra.",
      },
      {
        id: "internacional",
        title: "INTERNACIONAL",
        content:
          "Outros fornecedores e outros países compradores do mesmo insumo reorganizam pedidos, preços e rotas.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS LER O BRASIL NAS NOTÍCIAS",
    paragraphs: [
      "Você já tem as ferramentas e o caminho: acontecimento, processo, interesses, escalas e conexões. Agora vamos aplicá-los a quatro processos que aparecem nas manchetes sobre o Brasil: o que o país vende, o que tem debaixo da terra, a energia que produz e a floresta que protege.",
      "As manchetes de hoje vão envelhecer. Por isso, em cada caso, o acontecimento é só a porta de entrada. O que fica é o processo.",
    ],
  },

  deepDive: {
    title: "QUATRO PROCESSOS NAS MANCHETES",
    items: [
      {
        id: "mercados-dependencia",
        title: "O que o Brasil vende, e para quem?",
        content:
          "Em 2026, os Estados Unidos adotaram medidas tarifárias distintas sobre parte dos produtos brasileiros, e a parte comercial do acordo entre o Mercosul e a União Europeia (o acordo interino) passou a ser aplicada provisoriamente em 1º de maio, sem vigência definitiva do acordo mais amplo. O processo é mais antigo: quando muitas vendas dependem de poucos compradores (em 2025, a China foi o principal destino), uma decisão externa pode mudar muita coisa dentro do país. Daí a busca por novos mercados: diversificar não é romper, reduz a vulnerabilidade, e a interdependência continua. O efeito varia com o produto, a região e o porto.",
        flow: [
          "Local: o produtor e o município",
          "Regional: o corredor até o porto",
          "Nacional: a pauta de exportações",
          "Internacional: compradores e acordos",
        ],
        highlight: "A manchete muda. A pergunta sobre quem compra continua.",
      },
      {
        id: "minerais-cadeia",
        title: "Ter o recurso é controlar a cadeia?",
        content:
          "Em setembro de 2026, uma empresa dos Estados Unidos concluiu a combinação empresarial com a Serra Verde, operadora da mina de terras raras de Pela Ema (GO). O processo: do recurso ao produto final há etapas (extração, processamento, ímãs), e controla a cadeia quem domina as etapas, nem sempre quem tem o minério. No Brasil, o debate virou política pública: a Lei nº 15.506, sancionada em 16 de setembro de 2026, institui a Política Nacional de Minerais Críticos e Estratégicos, voltada ao beneficiamento, à transformação e à agregação de valor no país. Em Carajás (Aula 13), a pergunta era por onde o recurso sai; aqui, é também quem investe e onde se transforma.",
        flow: [
          "Local: a mina e a cidade",
          "Regional: o estado e seus acessos",
          "Nacional: regras e investimento",
          "Internacional: a cadeia dos ímãs",
        ],
        highlight: "Ter o recurso não é dominar a cadeia.",
      },
      {
        id: "energia-transicao",
        title: "Matriz renovável e petróleo podem coexistir?",
        content:
          "Na Foz do Amazonas, ao largo do Amapá, a Petrobras, com licença do Ibama, identificou hidrocarbonetos em um poço em agosto de 2026 e, em outubro, comunicou nova descoberta de petróleo em intervalo mais profundo do mesmo poço. A avaliação exploratória continua: descoberta não é reserva comercial, e reserva comercial não é produção. O processo: a transição energética não é substituição instantânea; fontes, interesses e prazos diferentes coexistem. Em 2025, cerca de 87% da eletricidade foi renovável, mas as renováveis ficaram perto de metade de toda a energia. Os efeitos possíveis mudam com a escala: no Amapá, empregos e riscos ambientais; no país, receitas e segurança energética; no mundo, clima e oferta de petróleo.",
        flow: [
          "Local: o litoral do Amapá",
          "Regional: a Margem Equatorial",
          "Nacional: a matriz e as receitas",
          "Internacional: clima e mercado de petróleo",
        ],
        highlight: "Matriz elétrica limpa não significa matriz energética sem fósseis.",
      },
      {
        id: "amazonia-clima",
        title: "O mesmo território pode ser local, nacional e global?",
        content:
          "Em 2025, durante a COP30, conferência do clima da ONU em Belém, o Brasil lançou o TFFF, fundo pensado para pagar a países que mantêm florestas tropicais em pé, com pelo menos 20% dos pagamentos reservados a povos indígenas e comunidades locais; o fundo ainda está em estruturação e captação. De 1º de agosto de 2024 a 31 de julho de 2025, período do Prodes/INPE, o desmatamento da Amazônia Legal caiu cerca de 12% frente ao período anterior. O processo: a floresta é território brasileiro e também interessa ao clima do planeta; o debate junta soberania, interesse global, financiamento e quem vive ali, o primeiro a sentir os efeitos. Como na Aula 01, território é espaço de apropriação, controle e disputa.",
        flow: [
          "Local: terras indígenas e comunidades",
          "Regional: a Amazônia Legal",
          "Nacional: políticas e fiscalização",
          "Internacional: clima, fundos e comércio",
        ],
        highlight: "O mesmo território é local, nacional e global ao mesmo tempo.",
      },
    ],
    closing:
      "Repare que os quatro processos se cruzam: o desmatamento ilegal, por exemplo, apareceu entre os temas da investigação comercial dos Estados Unidos sobre o Brasil. Cada notícia é um episódio. O processo é o que fica.",
  },

  brazilConnections: {
    title: "A PONTE COM A AULA 13",
    question: "As lentes da Aula 13 também servem para ler notícias?",
    center: "BRASIL",
    items: [
      {
        id: "infraestrutura-integracao",
        label: "INFRAESTRUTURA E INTEGRAÇÃO TERRITORIAL",
        description:
          "Porto, ferrovia, rio ou rede de energia: por trás de toda notícia sobre vendas, minérios ou energia existe um caminho físico por onde as coisas passam.",
      },
      {
        id: "territorio-economia-sociedade",
        label: "TERRITÓRIO, ECONOMIA E SOCIEDADE",
        description:
          "Uma atividade econômica chega, muda o uso do lugar e a vida de quem mora ali, seja uma mina em Goiás ou um poço ao largo do Amapá.",
      },
      {
        id: "diversidade-regional",
        label: "DIVERSIDADE REGIONAL",
        description:
          "A mesma notícia atinge regiões de modos diferentes, conforme o que cada uma produz e por onde escoa a produção.",
      },
      {
        id: "desigualdades-socioespaciais",
        label: "DESIGUALDADES SOCIOESPACIAIS",
        description:
          "Dentro do país, nem todos têm os mesmos meios para absorver um choque ou aproveitar uma oportunidade.",
      },
      {
        id: "formacao-territorio",
        label: "FORMAÇÃO DO TERRITÓRIO",
        description:
          "A história da ocupação, com povos indígenas, ciclos econômicos e fronteiras que avançaram, ajuda a explicar o papel que cada lugar tem hoje.",
      },
    ],
    study:
      "As lentes não dizem o que pensar sobre uma notícia. Mostram o que observar antes de opinar. Pessoas com opiniões diferentes podem usar as mesmas lentes e chegar a conclusões diferentes. O que importa é que todas saibam do que estão falando.",
    highlight: "A Aula 13 lê o território. A Aula 14 lê o território nas notícias.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Notícia ou trecho jornalístico",
      "Gráfico de comércio exterior",
      "Mapa de rotas e infraestrutura",
      "Tabela por país ou região",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Separação entre acontecimento e processo",
      "Identificação de interesses",
      "Relação entre escalas",
      "Leitura de relações territoriais",
    ],
    highlight:
      "Atualidades são contexto; a prova cobra interpretação. O acontecimento abre a questão, mas a resposta está no processo.",
    guidingIntro: "Diante de uma notícia sobre o Brasil, pergunte:",
    guidingQuestions: [
      "O que aconteceu, e que processo mais longo isso mostra?",
      "Quem tem interesse nisso, e o que cada um busca?",
      "Em quais escalas isso acontece: local, regional, nacional, internacional?",
      "Que lente da Aula 13 explica por que o efeito muda de uma região para outra?",
      "O que a manchete destacou, e o que deixou em segundo plano?",
    ],
  },

  question: {
    id: "s05-a14-q01",
    statement:
      "Um país fictício exporta grãos, e o maior comprador responde por mais da metade das vendas externas. Esse comprador passou a exigir comprovação ambiental da origem dos lotes. Na região Chapada, predominam grandes propriedades, já registradas digitalmente, e uma ferrovia leva a produção a um porto de águas profundas. Na região Várzea, predominam pequenos produtores, muitos sem esse registro, e a produção sai de barcaça por um rio que baixa nas estiagens. Um ano depois, a Chapada manteve seus contratos e a Várzea perdeu parte deles. O governo abriu negociações com outros mercados. Esse episódio é mais bem interpretado ao se reconhecer que",
    options: [
      {
        id: "A",
        text: "o efeito da exigência sobre cada região depende sobretudo da infraestrutura de escoamento da produção, e ampliá-la tende a resolver a situação das regiões mais frágeis.",
      },
      {
        id: "B",
        text: "o efeito da exigência sobre cada região depende sobretudo do peso do comprador no país, e diversificar mercados tende a recompor as vendas das regiões mais atingidas.",
      },
      {
        id: "C",
        text: "o efeito da exigência sobre cada região depende sobretudo do esforço de adaptação dos produtores locais, e as regiões que se adaptam tendem a manter seus contratos.",
      },
      {
        id: "D",
        text: "o efeito da exigência sobre cada região depende sobretudo da capacidade prévia de cada território de cumpri-la, e diversificar mercados tende a depender da mesma condição.",
      },
      {
        id: "E",
        text: "o efeito da exigência sobre cada região depende sobretudo da negociação do governo, e o resultado obtido nos novos mercados tende a definir quem continua vendendo.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "A alternativa D está correta. O episódio é um caso do processo da aula: um país que vende muito a um comprador fica exposto a uma regra definida fora dele, que atende ao interesse do comprador. O peso do comprador explica a vulnerabilidade do país, mas não a diferença entre as regiões, que vem do território: a Chapada tem grandes propriedades já registradas, e a Várzea, pequenos produtores sem registro e uma saída frágil. Por isso, buscar outros mercados também depende dessa capacidade, pois novos compradores podem fazer exigências próprias. Cada outra alternativa erra no mecanismo: A trata a infraestrutura como causa suficiente, embora a exigência fosse de comprovação; B atribui à escala internacional o que muda de região para região; C atribui ao esforço local uma diferença estrutural; E atribui à escala nacional o que depende da capacidade de cada território.",
  },

  missionCheck:
    "Voltemos à pergunta do início: quando uma notícia sobre o Brasil aparece na tela, que processo mais longo ela está mostrando? Agora você consegue ler uma manchete sabendo quem a produziu, em que contexto e com que enquadramento, e separando o acontecimento, o processo, os interesses e as escalas?",

  completionMessage:
    "Uma notícia mostra um processo mais longo, com interesses, escalas e conexões que existiam antes da manchete e continuam depois dela. As notícias mudam. As ferramentas de leitura permanecem.",
};
