import type { LessonContent } from "@/lib/types";

/**
 * AULA 20 — CADEIAS GLOBAIS, COMÉRCIO E RECURSOS ESTRATÉGICOS
 * Semana 07 • Geopolítica & Atualidades (CONECTE)
 *
 * Pergunta-guia (subtítulo em `course.ts`): "De onde vem, por onde passa e
 * quem controla?" Operação nova: ler uma cadeia no espaço com a ferramenta
 * de sete passos (`application`): origem → processamento → transporte →
 * gargalos → mercados → coordenação/controle → vulnerabilidades. As lentes
 * conceituais são cinco (`lenses`/`concepts`). Progressão: Aula 19 (como a
 * produção se reorganiza) → 20 (como os elos se distribuem, por onde
 * circulam, onde se concentram poder e vulnerabilidade) → 21 (como os
 * resultados se distribuem). Tênis Passada, bicicleta e países são fictícios.
 * REPETIÇÃO EVITADA: Ormuz (02, 17), semicondutores (05), minerais críticos
 * (05, 14, 17), soja (14), gás russo (17), Carajás (13). NEUTRALIDADE: sem
 * tarifas, acordos ou avaliação de governos e empresas.
 *
 * DADOS FACTUAIS (conferidos em 27/10/2026):
 *   • Ministério da Agricultura e Pecuária, página "O Plano Nacional de
 *     Fertilizantes" (gov.br/agricultura): "mais de 80% dos fertilizantes
 *     utilizados no País são importados", "em um mercado dominado por poucos
 *     fornecedores". Referência institucional complementar: Decreto
 *     10.991/2022 (objetivo de "diminuir a dependência externa").
 *   • USDA/FAS, "Coffee: World Markets and Trade", jul. 2026, safra 2025/26:
 *     Brasil, maior exportador de café em grão (34,0 mi sacas) e solúvel
 *     (3,8 mi); no torrado e moído lideram UE (3,1 mi) e Suíça (1,9 mi);
 *     Brasil, 70 mil. Números fora do texto, por decisão editorial.
 *   • Embraer, Form 20-F 2025 (SEC): peças "manufactured in one or more
 *     countries and assembled in another"; E2 com motores Pratt & Whitney e
 *     aviônica Honeywell, montado em São José dos Campos; "a limited number
 *     of key suppliers"; 91,7% da receita de 2025 de clientes no exterior.
 *   • Autoridade do Canal do Panamá (15/12/2023): Lago Gatún em níveis
 *     incomumente baixos por seca associada ao El Niño; 22 passagens diárias,
 *     contra 36 no cenário regular; ampliação para 24 a partir de jan. 2024.
 *   • MDIC/Secex, Balança Comercial Mensal – Dados Consolidados, set. 2026
 *     (balanca.mdic.gov.br): setores Agropecuária, Indústria Extrativa e
 *     Indústria de Transformação.
 *
 * Aula em preparação (`status: "em-preparacao"`, `content: null` em
 * `course.ts`).
 */
export const aula20Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de reconstruir uma cadeia produtiva no espaço, da origem aos mercados, identificando gargalos, quem coordena ou exerce poder sobre cada elo, como o valor se distribui e onde a cadeia é mais vulnerável.",

  hypothesis: {
    title: "O OLHAR DO PACO",
    intro:
      "O tênis Passada, de uma marca fictícia, percorre meio mundo antes de chegar à loja. A borracha vem do País A. O tecido sintético vem do País B. Os solados saem de uma única fábrica, no País C, a única que domina a técnica exigida pela marca. A montagem acontece no País D. Os contêineres atravessam um canal e desembarcam no porto do País E. A marca, sediada no País F, cria o modelo, define os padrões dos fornecedores e escolhe onde vender. Ela não é dona de nenhuma fábrica.",
    cards: [
      { id: "borracha", label: "A origem da borracha" },
      { id: "solados", label: "A única fábrica de solados" },
      { id: "canal", label: "O canal" },
      { id: "porto", label: "O porto de chegada" },
      { id: "marca", label: "A marca" },
      { id: "mercado", label: "O mercado consumidor" },
    ],
    question: "Onde essa cadeia é mais frágil?",
    paco: "Escolha dois elos. Para cada um, pergunte: se ele parar amanhã, existe outro caminho?",
    reveal:
      "A distância não é o problema principal. A borracha pode vir de outros lugares, e o canal tem rotas alternativas, mais longas e caras. Mas, se a fábrica de solados parar, não há substituta pronta. A fragilidade está onde faltam alternativas. E repare: quem fabrica não é quem coordena, e quem coordena não precisa ser dono de nada.",
  },

  connection: {
    title: "DA FÁBRICA À CADEIA",
    flow: ["Como se produz", "Por onde circula", "Quem ganha e quem perde"],
    highlight: "Nenhum produto nasce num só lugar.",
    text: "Na Aula 19, você viu como a produção se reorganiza e transforma trabalho e território. Agora a escala muda: as etapas de um mesmo produto se espalham pelo mundo. A pergunta desta aula é: “De onde vem, por onde passa e quem controla?” A resposta raramente aponta para um único ator.",
  },

  application: {
    title: "LEIA A CADEIA EM SETE PASSOS",
    context:
      "Os conceitos dão nome; os passos dão o caminho. Siga sempre a mesma sequência, aqui aplicada ao tênis Passada.",
    flow: [
      "Origem",
      "Processamento",
      "Transporte",
      "Gargalos",
      "Mercados",
      "Coordenação",
      "Vulnerabilidades",
    ],
    question: "Onde cada etapa acontece, e quem decide sobre ela?",
    accordions: [
      {
        id: "onde-se-produz",
        title: "ONDE SE PRODUZ: ORIGEM E PROCESSAMENTO",
        content:
          "Comece pelo mapa das etapas: borracha, tecido, solados e montagem vêm de lugares diferentes. Pergunte em quantos lugares cada etapa pode acontecer.",
      },
      {
        id: "por-onde-circula",
        title: "POR ONDE CIRCULA: TRANSPORTE, GARGALOS E MERCADOS",
        content:
          "Depois, siga o caminho: navios, canal, porto, lojas. Marque os pontos por onde tudo precisa passar e veja se há desvios possíveis.",
      },
      {
        id: "quem-decide",
        title: "QUEM DECIDE E ONDE ESTÁ O RISCO: COORDENAÇÃO E VULNERABILIDADES",
        content:
          "Por fim, pergunte quem define modelo, padrões e mercados, e qual elo, se falhar, para tudo.",
      },
    ],
  },

  lenses: {
    eyebrow: "Cinco conceitos para ler uma cadeia",
    title: "QUEM FAZ, QUEM PASSA, QUEM DECIDE?",
    subtitle:
      "Cinco conceitos dão nome ao que acontece numa cadeia. Logo abaixo, sete passos mostram como percorrê-la.",
    items: [
      {
        id: "cadeia",
        emoji: "🌐",
        name: "CADEIA GLOBAL DE VALOR",
        question: "Em quantos lugares este produto é feito?",
      },
      {
        id: "valor",
        emoji: "💲",
        name: "VALOR AGREGADO E POSIÇÃO NA CADEIA",
        question: "Em que etapa fica a maior parte do valor, e por quê?",
      },
      {
        id: "gargalo",
        emoji: "⏳",
        name: "GARGALO",
        question: "Por onde tudo precisa passar, sem alternativa?",
      },
      {
        id: "coordenacao",
        emoji: "🧩",
        name: "COORDENAÇÃO E PODER NA CADEIA",
        question: "Quem condiciona cada elo, e com que meios?",
      },
      {
        id: "vulnerabilidade",
        emoji: "🛡️",
        name: "RECURSO ESTRATÉGICO, VULNERABILIDADE E RESILIÊNCIA",
        question: "O que é essencial, concentrado e difícil de substituir?",
      },
    ],
    highlight:
      "Ler uma cadeia é desenhar um mapa: das etapas, dos caminhos, do valor e do poder.",
    image: null,
    hideImage: true,
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "No tênis Passada, você viu que a fragilidade depende das alternativas e que fabricar, coordenar e ganhar com a venda são coisas diferentes. Agora, os cinco conceitos.",
      "Guarde uma regra: antes de dizer quem controla uma cadeia, mapeie as etapas e pergunte quem decide sobre cada uma.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "cadeia",
        name: "CADEIA GLOBAL DE VALOR",
        conceito:
          "Cadeia global de valor é o conjunto de etapas que levam um produto da concepção ao consumidor, quando distribuídas entre vários países e empresas.",
        penseAssim:
          "Pergunte o que acontece em cada etapa, onde e por quem.",
        exemplo:
          "No tênis Passada, criação, matérias-primas, solados, montagem, transporte e venda acontecem em lugares diferentes.",
        naoConfunda:
          "Cadeia global de valor não é o mesmo que cadeia logística. A logística trata do deslocamento e da circulação. A cadeia de valor inclui também produção, transformação, tecnologia, coordenação, distribuição do valor e relações de poder entre os elos.",
        naProva:
          "Mapas com setas entre países pedem a sequência das etapas, não só a origem.",
      },
      {
        id: "valor",
        name: "VALOR AGREGADO E POSIÇÃO NA CADEIA",
        conceito:
          "Valor agregado é o que cada etapa acrescenta ao produto. A parcela do valor que cada ator consegue reter depende da posição na cadeia, da diferenciação, do conhecimento, da marca, da tecnologia, da escala e do poder de mercado.",
        penseAssim:
          "Pergunte quem seria difícil de substituir. Quem é difícil de substituir costuma negociar melhor.",
        exemplo:
          "A marca do tênis, que cria o modelo e chega ao consumidor, pode reter mais valor do que a fábrica que o monta.",
        naoConfunda:
          "Não existe regra automática de que matéria-prima vale pouco e tecnologia vale muito. Um produto primário diferenciado pode reter muito valor, e uma etapa industrial pode render pouco se muitas fábricas puderem fazê-la.",
        naProva:
          "Tabelas de exportação pedem que você separe volume exportado de valor retido.",
      },
      {
        id: "gargalo",
        name: "GARGALO",
        conceito:
          "Gargalo é um ponto da cadeia por onde a circulação ou a produção precisa passar e para o qual há poucas ou nenhuma alternativa. Pode ser natural, como um canal ou estreito; construído, como um porto ou uma ferrovia; de concentração, quando uma etapa é feita em poucos lugares; ou de regra, quando depende de licenças ou normas.",
        penseAssim:
          "Se este ponto fechar, por onde mais é possível passar, e a que custo?",
        exemplo:
          "A única fábrica de solados do tênis Passada é um gargalo de concentração, mesmo sem ser um ponto de passagem no mapa.",
        naoConfunda:
          "Gargalo não é sinônimo de distância nem só de passagem marítima. Uma rota longa com alternativas pode ser menos arriscada do que uma etapa próxima e única.",
        naProva:
          "Mapas de rotas costumam vir com uma interrupção: identifique o ponto sem alternativa.",
      },
      {
        id: "coordenacao",
        name: "COORDENAÇÃO E PODER NA CADEIA",
        conceito:
          "Diferentes atores podem coordenar, condicionar ou exercer poder sobre determinados elos por meio de tecnologia, marcas, padrões, logística, acesso ao mercado, financiamento e regras estatais. O poder costuma estar distribuído entre vários atores, em graus diferentes.",
        penseAssim:
          "Para cada elo, pergunte quem define o que, com que padrão e para qual mercado.",
        exemplo:
          "A marca do tênis define modelo, padrões e mercados; a fábrica de solados, por dominar uma técnica que ninguém mais oferece, também tem força para negociar.",
        naoConfunda:
          "Coordenar ou exercer poder sobre um elo não significa possuir toda a cadeia.",
        naProva:
          "Desconfie de alternativas com um único ator controlando tudo.",
      },
      {
        id: "vulnerabilidade",
        name: "RECURSO ESTRATÉGICO, VULNERABILIDADE E RESILIÊNCIA",
        conceito:
          "Um recurso é estratégico quando é essencial, concentrado em poucos lugares ou fornecedores e difícil de substituir: ele não nasce estratégico, torna-se estratégico pelo uso. Vulnerabilidade é a exposição de uma cadeia a falhas em elos desse tipo. Resiliência é a capacidade de continuar funcionando ou de se recuperar: estoques, fornecedores alternativos, rotas de reserva.",
        penseAssim:
          "Procure o elo essencial com menos alternativas. É ali que uma falha pesa mais.",
        exemplo:
          "Estoque de solados ou uma segunda fábrica reduziriam a vulnerabilidade do tênis Passada, com custo.",
        naoConfunda:
          "Resiliência não é produzir tudo no próprio país. É ter alternativas, e alternativas também custam.",
        naProva:
          "Questões de interrupção pedem o elo crítico e uma resposta proporcional, sem soluções absolutas.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "fragmentacao",
        title: "Por que uma etapa fica tão longe da outra?",
        content:
          "Porque cada etapa busca a combinação de fatores que a favorece, como na Aula 19, agora em escala mundial. Algumas etapas pedem mão de obra abundante; outras, conhecimento, máquinas caras ou proximidade dos consumidores. O transporte padronizado em contêineres e as redes de informação tornaram mais barato coordenar etapas distantes. Mas a fragmentação tem limite: etapas que exigem grande escala ou conhecimento raro tendem a se concentrar em poucos lugares, e é aí que nascem muitos gargalos.",
        flow: ["Cada etapa", "Melhor combinação de fatores", "Etapas espalhadas", "Algumas concentradas"],
        highlight: "A cadeia se espalha, mas não se espalha por igual.",
      },
      {
        id: "panama",
        title: "Onde uma cadeia pode quebrar?",
        content:
          "Em qualquer elo sem alternativa. O Canal do Panamá mostra que um gargalo pode nascer da combinação entre infraestrutura e ambiente. As eclusas do canal funcionam com a água do Lago Gatún. Em 2023, segundo a Autoridade do Canal do Panamá, uma seca associada ao El Niño deixou o lago em níveis incomumente baixos, e as passagens diárias, que são cerca de 36 no cenário regular, foram reduzidas a 22 no fim do ano; a ampliação começou em janeiro de 2024. O canal não deixou de existir: sua capacidade diminuiu.",
        flow: ["Infraestrutura", "Condição ambiental", "Capacidade reduzida", "Custos e atrasos"],
        highlight: "Um gargalo não é só um lugar no mapa: é a falta de alternativa naquele momento.",
      },
      {
        id: "coordenacao",
        title: "Quem controla uma cadeia que ninguém possui inteira?",
        content:
          "Ninguém, sozinho. Uma marca define o modelo e escolhe fornecedores. Quem detém uma tecnologia pode impor condições sobre um elo. Empresas de transporte decidem rotas e prazos. Mercados compradores podem exigir padrões, como a rastreabilidade, e quem não os cumpre perde acesso. Estados fazem regras sobre o que entra, o que sai e o que pode ser vendido, como você viu na Aula 05. O poder na cadeia é distribuído, desigual e negociado.",
        flow: ["Marca", "Tecnologia", "Logística", "Padrões do mercado", "Regras estatais"],
        highlight: "Quem coordena não precisa possuir; quem possui não necessariamente coordena.",
      },
    ],
    closing:
      "Se cada elo retém uma parte diferente do valor e enfrenta riscos diferentes, os efeitos da cadeia também se distribuem de forma desigual entre pessoas e lugares. Essa é a pergunta da Aula 21.",
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Em que posições o Brasil aparece nas cadeias globais?",
    center: "BRASIL",
    items: [
      {
        id: "fertilizantes",
        label: "FERTILIZANTES: VULNERABILIDADE ANTES DA PRODUÇÃO",
        description:
          "Segundo o Plano Nacional de Fertilizantes, de 2021, mais de 80% dos fertilizantes usados no país são importados, num mercado dominado por poucos fornecedores. Um dos maiores exportadores agrícolas do mundo depende de fora para um insumo essencial da própria produção. A vulnerabilidade, aqui, está no início da cadeia.",
      },
      {
        id: "cafe",
        label: "CAFÉ: VALOR E POSIÇÃO NA CADEIA",
        description:
          "Segundo o Departamento de Agricultura dos Estados Unidos (USDA), na safra 2025/26 o Brasil foi o maior exportador mundial de café em grão e também de café solúvel. No café torrado e moído, porém, as maiores exportações vêm da União Europeia e da Suíça, que importam o grão. Na torra, na marca e na venda ao consumidor, pesam diferenciação e acesso ao mercado.",
      },
      {
        id: "embraer",
        label: "EMBRAER: O BRASIL NUMA CADEIA INDUSTRIAL COMPLEXA",
        description:
          "Segundo o relatório anual da Embraer à SEC, dos EUA, sua produção combina peças fabricadas em vários países, como motores e aviônica de fornecedores estrangeiros nos jatos E2, montados no Brasil. Em 2025, 91,7% da receita veio de clientes no exterior. Ao integrar componentes de muitos lugares, também depende de um número limitado de fornecedores-chave.",
      },
    ],
    study:
      "Cada cartão prova um conceito: os fertilizantes, uma vulnerabilidade a montante; o café, que liderar a produção não garante todas as etapas nem impede a industrialização, como no solúvel; a Embraer, poder e dependência ao mesmo tempo numa cadeia complexa.",
    highlight:
      "O Brasil não ocupa uma só posição nas cadeias globais: é fornecedor, comprador e integrador, conforme a cadeia.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Mapa de fluxos com setas",
      "Mapa de rotas com canais e estreitos",
      "Gráfico de produção ou processamento por país",
      "Tabela de exportações por setor",
      "Charge ou notícia de interrupção",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Reconstruir a cadeia",
      "Identificar o elo sem alternativa",
      "Separar quem fabrica de quem coordena",
      "Propor uma resposta proporcional",
    ],
    highlight:
      "A prova raramente pergunta “o que é uma cadeia global de valor?”. Ela mostra um material e quer ver você executar uma operação sobre ele.",
    guidingIntro: "Material → operação → armadilha:",
    guidingQuestions: [
      "Mapa de fluxos → reconstrua a sequência das etapas. Armadilha: ler só a origem.",
      "Mapa de rotas → localize o ponto sem alternativa. Armadilha: igualar distância a risco.",
      "Gráfico por país → separe quem extrai, quem processa e quem vende. Armadilha: supor que quem tem o recurso controla a cadeia.",
      "Tabela de exportações por agropecuária, indústria extrativa e indústria de transformação → separe volume de valor. Armadilha: tratar matéria-prima como sinônimo automático de pouco valor.",
      "Charge ou notícia de interrupção → identifique o elo que falhou e quem sente o efeito. Armadilha: propor uma solução absoluta.",
    ],
  },

  question: {
    id: "s07-a20-q01",
    statement:
      "Uma bicicleta fictícia é produzida assim: o alumínio vem de três países diferentes; os quadros são fabricados no País Q; o sistema de marchas é produzido por uma única empresa, no País R, que detém as patentes e abastece a maior parte das marcas do mundo; a montagem ocorre no País S; e a marca, sediada no País T, define o desenho, os padrões que os fornecedores devem seguir e os mercados onde a bicicleta é vendida, sem ser dona de nenhuma fábrica. As peças seguem de navio até o País S por um estreito; há uma rota alternativa, três dias mais longa. Uma enchente fecha por seis semanas a fábrica do País R. Considerando a cadeia descrita, a leitura mais adequada é que",
    options: [
      {
        id: "A",
        text: "o elo mais vulnerável é o transporte pelo estreito, a etapa mais longa e exposta; a enchente tende a ter efeito limitado, pois a marca do País T, que comanda a cadeia, pode levar a produção das marchas a outro país em pouco tempo; diversificar as rotas marítimas seria a principal resposta.",
      },
      {
        id: "B",
        text: "por fabricar o sistema de marchas e deter as patentes, a empresa do País R controla toda a cadeia, inclusive o desenho e os mercados; a enchente expõe essa dependência, que só seria superada se a marca do País T passasse a produzir todas as peças em seu próprio território.",
      },
      {
        id: "C",
        text: "o elo mais frágil é a origem do alumínio, pois sem matéria-prima não há bicicleta; a montagem no País S retém a maior parte do valor, por reunir todas as peças em um só lugar; e um estoque maior de alumínio no País S seria a resposta mais eficaz para enfrentar a enchente.",
      },
      {
        id: "D",
        text: "a enchente revela um ponto de estrangulamento, mas a existência da rota alternativa pelo mar garante que a cadeia continue funcionando; a marca, por definir os padrões, é na prática dona das fábricas que os cumprem, e concentrar a montagem no País R reduziria os custos de transporte.",
      },
      {
        id: "E",
        text: "a paralisação pesa mais nas marchas que no alumínio ou no estreito, pois ali não há substituto pronto; a marca organiza desenho e padrões sem ser dona das fábricas, e a empresa do País R tem força pelas patentes; estoques ou um fornecedor alternativo já homologado reduziriam o risco.",
      },
    ],
    correctOptionId: "E",
    explanation:
      "A alternativa E está correta porque reconstrói a cadeia. Concentração e gargalo: o alumínio tem três origens e o estreito tem rota alternativa, mas o sistema de marchas depende de uma única fábrica, sem substituta pronta. Coordenação e poder: a marca do País T coordena desenho, padrões e mercados sem possuir fábricas, e a empresa do País R exerce poder sobre um elo graças às patentes; o poder está distribuído. Resiliência: como há patentes, não se troca de fornecedor de uma hora para outra; estoques ou uma alternativa desenvolvida e homologada com antecedência, por licença ou projeto próprio, reduzem o risco sem soluções absolutas. A confunde distância com vulnerabilidade e supõe que coordenar permite substituir rapidamente um fornecedor que detém patentes. B confunde poder sobre um elo com controle de toda a cadeia e trata a produção de tudo no próprio território como única saída. C ignora que o alumínio tem três origens e supõe que a montagem retém automaticamente o maior valor. D confunde a rota alternativa do transporte com uma alternativa para a fábrica parada e confunde definir padrões com possuir fábricas.",
  },

  missionCheck:
    "Voltemos à pergunta da aula: de onde vem, por onde passa e quem controla? Agora você consegue reconstruir uma cadeia no espaço, localizar o elo sem alternativa, distinguir quem fabrica, quem coordena e quem retém valor, e propor uma resposta proporcional?",

  completionMessage:
    "Uma cadeia global não tem um só dono: tem etapas espalhadas, poder distribuído e riscos concentrados onde faltam alternativas. Na próxima aula, a pergunta é sobre os resultados: quem ganha, quem perde e o que as políticas públicas podem fazer?",
};
