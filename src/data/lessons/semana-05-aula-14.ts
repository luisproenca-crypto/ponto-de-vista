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
 * DADOS FACTUAIS (verificados em fonte primária; REVISAR ANTES DE PUBLICAR
 * porque são fatos de 2025–2026):
 *   • Tarifa dos EUA: USTR, aviso no Federal Register de 20/07/2026 (Seção
 *     301; tarifa de 25% sobre importações do Brasil, com exceções, em vigor
 *     desde 22/07/2026; temas investigados incluem desmatamento ilegal).
 *   • Acordo UE–Mercosul: Comissão Europeia e Conselho da UE (Decisão de
 *     09/01/2026); Acordo Comercial Interino em aplicação provisória desde
 *     01/05/2026. Parecer do Tribunal de Justiça da UE ainda pendente.
 *   • China principal destino das exportações: MDIC (balança comercial de
 *     2025).
 *   • Serra Verde / Pela Ema (Minaçu, GO): USA Rare Earth, 8-K e comunicado
 *     de 04/09/2026 (fusão fechada em 03/09/2026).
 *   • Morpho, bloco FZA-M-59: Petrobras, 6-K de 02/10/2026 (nova descoberta,
 *     após a de agosto de 2026; análises em andamento, sem viabilidade
 *     comercial estabelecida); licença do Ibama de outubro de 2025.
 *   • BEN 2026 (EPE, 03/06/2026): 86,8% de renováveis na matriz elétrica e
 *     cerca de 49,4% na matriz energética, em 2025.
 *   • COP30 em Belém (novembro de 2025); TFFF: MMA/COP30 (regra de 20% do
 *     valor repassado a cada país para povos indígenas e comunidades
 *     locais). Valores totais do fundo deliberadamente NÃO citados.
 *   • Prodes 2025 consolidado: INPE, 5.731 km² na Amazônia Legal, queda de
 *     12,07% em relação a 2024.
 * Tornados qualitativos de propósito (perecíveis): total mobilizado pelo
 * TFFF, valor da compra da Serra Verde, tramitação do projeto de lei de
 * minerais críticos, fases anteriores das tarifas dos EUA, números exatos
 * de exportação e distâncias do poço.
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
          "Em 2026, uma tarifa dos Estados Unidos sobre parte dos produtos brasileiros e um acordo comercial com a União Europeia, em aplicação provisória desde maio, foram notícia. O processo é mais antigo: quando muitas vendas dependem de poucos compradores (hoje, a China é o principal destino), uma decisão externa pode mudar muita coisa dentro do país. Daí a busca por novos mercados: diversificar não é romper, reduz a vulnerabilidade, e a interdependência continua. O efeito varia com o produto, a região e o porto por onde sai. Lentes da Aula 13: infraestrutura e integração territorial; diversidade regional; território, economia e sociedade.",
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
          "Em setembro de 2026, uma empresa dos Estados Unidos concluiu a compra da operadora da mina de terras raras de Pela Ema, em Minaçu (GO). O processo: do recurso ao produto final há etapas (extração, processamento, ímãs), e quem domina as etapas controla a cadeia, nem sempre quem tem o minério. Empresas buscam fornecimento, países buscam reduzir dependências, e o Brasil debate como combinar investimento externo e processamento no país. Quem sente primeiro é a cidade mineradora. Em Carajás (Aula 13), a pergunta era por onde o recurso sai; aqui, é também quem o transforma. Lentes da Aula 13: território, economia e sociedade; infraestrutura e integração territorial.",
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
          "Na Foz do Amazonas, ao largo do Amapá, a Petrobras, com licença do Ibama, informou duas descobertas de petróleo no mesmo poço, em agosto e outubro de 2026. Descoberta não é reserva comercial, e reserva comercial não é produção: as análises continuam. O processo: a transição energética não é substituição instantânea; fontes, interesses e prazos diferentes coexistem. Em 2025, cerca de 87% da eletricidade foi renovável, mas as renováveis ficaram perto de metade de toda a energia. Quem sente muda com a escala: no Amapá, empregos e riscos ambientais; no país, receitas e segurança energética; no mundo, clima e oferta de petróleo. Lentes da Aula 13: infraestrutura e integração territorial; território, economia e sociedade.",
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
          "Em 2025, a COP30, conferência do clima da ONU, aconteceu em Belém e lançou o TFFF, fundo para pagar a países que mantêm florestas tropicais em pé, com parte do valor para povos indígenas e comunidades locais. No mesmo ano, o desmatamento anual da Amazônia Legal caiu cerca de 12% frente a 2024, segundo o Prodes/INPE. O processo: a floresta é território brasileiro e também interessa ao clima do planeta. O debate junta soberania, interesse global, financiamento e as pessoas que vivem ali, as primeiras a sentir os efeitos. Como na Aula 01, território é espaço de apropriação, controle e disputa. Lentes da Aula 13: formação do território; desigualdades socioespaciais.",
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
