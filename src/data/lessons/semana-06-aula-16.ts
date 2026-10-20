import type { LessonContent } from "@/lib/types";

/**
 * AULA 16 — CLIMA E MUDANÇAS CLIMÁTICAS
 * Semana 06 • Geografia Essencial (ENTENDA)
 *
 * Ideia central: evento climático não é impacto social automático; o tamanho
 * do dano depende também de ocupação, infraestrutura, renda, desigualdade,
 * prevenção, políticas públicas e capacidade de adaptação. Pergunta-guia (em
 * `connection` e `missionCheck`): "O clima é natural; seus impactos também
 * são?" Nova operação cognitiva: decompor o risco em perigo, exposição e
 * vulnerabilidade. Bairros, territórios do deepDive e Várzea Alta são
 * fictícios e rotulados como tal.
 *
 * DADOS FACTUAIS (conferidos em outubro de 2026):
 *   • IPCC AR6, Síntese (2023), SPM: aquecimento causado "inequivocamente"
 *     por atividades humanas (A.1); 1,09 °C acima de 1850–1900 em 2011–2020
 *     (A.1.1); ~79% das emissões globais de 2019 vieram de energia,
 *     indústria, transporte e edificações (A.1.4); vulneráveis que menos
 *     contribuíram são os mais afetados (A.2).
 *   • IPCC AR6 WGII, SPM (2022): risco como interação entre perigo, exposição
 *     e vulnerabilidade (por isso "combinação", não soma); vulnerabilidade
 *     difere entre regiões e dentro delas (B.2); má adaptação (C.4).
 *   • OMM: normais climatológicas de 30 anos (referência atual: 1991–2020).
 *   • INPE/CPTEC (jun. 2023): definição de El Niño e impactos típicos no Brasil.
 *   • World Weather Attribution, análise de atribuição rápida (24/01/2024),
 *     seca amazônica de 2023: mudança climática como fator principal, com
 *     contribuição do El Niño. Fator de probabilidade não usado.
 *   • INPE, Programa Queimadas, Perguntas Frequentes (itens 32 e 33): "Na
 *     América do Sul, a quase totalidade das queimadas é causada pelo Homem";
 *     queimadas naturais vêm de raios, mais comuns no Cerrado; a estiagem é
 *     quando mais se queima. terrabrasilis.dpi.inpe.br/queimadas/portal/
 *   • EPE, BEN 2025: hidráulica como principal fonte da matriz elétrica.
 * EMISSÕES BRASILEIRAS: o inventário do MCTI não pôde ser consultado; a aula
 * não hierarquiza setores nem cita percentuais.
 *
 * Título, subtítulo, vídeo e status ficam em `src/data/course.ts`. Aula em
 * preparação (`status: "em-preparacao"`), ainda não ligada (`content: null`).
 */
export const aula16Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de separar, em uma situação climática, o que é fenômeno atmosférico e o que é impacto social, identificando perigo, exposição e vulnerabilidade, distinguindo mitigação de adaptação e lendo o problema na escala adequada.",

  hypothesis: {
    title: "O OLHAR DO PACO",
    intro:
      "Numa madrugada de verão, uma chuva forte cai durante quatro horas sobre uma cidade fictícia. A estação meteorológica registra praticamente o mesmo volume nos dois lados do rio. No Bairro Encosta, construído em morro e na beira de um córrego, há deslizamentos e famílias desalojadas. No Bairro Planalto, em terreno mais alto e com galerias pluviais, a água empoça nas ruas por uma hora e escoa.",
    cards: [
      { id: "chuva", label: "A quantidade de chuva" },
      { id: "relevo", label: "O relevo e o solo de cada bairro" },
      { id: "ocupacao", label: "Onde e como as casas foram construídas" },
      { id: "obras", label: "A drenagem e as obras de cada bairro" },
      { id: "renda", label: "As condições de vida de quem mora ali" },
    ],
    question: "A chuva foi a mesma. Por que o estrago não foi?",
    paco: "Escolha as duas explicações que, para você, mais pesam. Depois, pergunte-se: alguma delas explica a diferença sozinha?",
    reveal:
      "A quantidade de chuva não explica a diferença, porque foi praticamente a mesma. O relevo pesa, mas não sozinho: o que transformou a chuva em desastre foi o encontro entre o fenômeno, o lugar ocupado e as condições de quem estava ali. Vamos dar nome a cada parte desse encontro.",
  },

  connection: {
    title: "DO FENÔMENO AO IMPACTO",
    flow: ["Onde", "Que processo", "Quem decide", "O que é fenômeno", "O que é dano"],
    highlight: "A atmosfera produz o evento. O território ajuda a definir o tamanho do dano.",
    text: "Na Aula 13, você perguntou onde o acontecimento ocorre. Na Aula 14, de que processo ele faz parte. Na Aula 15, quem pode decidir. Agora entra uma operação nova: separar o que a atmosfera faz daquilo que a ocupação, as obras e a desigualdade transformam em perda. A pergunta desta aula é: “O clima é natural; seus impactos também são?”",
  },

  lenses: {
    eyebrow: "Seis distinções para ler o clima",
    title: "SEPARE O QUE PARECE IGUAL",
    subtitle:
      "Muitos erros sobre clima nascem de misturar duas ideias parecidas. Cada distinção é uma pergunta a fazer antes de concluir.",
    items: [
      {
        id: "tempo-ou-clima",
        emoji: "⛅",
        name: "TEMPO OU CLIMA?",
        question: "Estou olhando o estado da atmosfera agora ou o comportamento dela ao longo de décadas?",
      },
      {
        id: "variacao-ou-mudanca",
        emoji: "🔁",
        name: "VARIAÇÃO OU MUDANÇA?",
        question: "Isso é uma oscilação que vai e volta ou uma tendência que se mantém no longo prazo?",
      },
      {
        id: "natural-ou-intensificado",
        emoji: "🌡️",
        name: "NATURAL OU INTENSIFICADO?",
        question: "Estou falando do efeito estufa que sempre existiu ou da intensificação provocada por emissões humanas?",
      },
      {
        id: "perigo-exposicao-vulnerabilidade",
        emoji: "⚠️",
        name: "PERIGO, EXPOSIÇÃO OU VULNERABILIDADE?",
        question: "O problema está no evento, em quem está no caminho dele ou na capacidade de enfrentá-lo?",
      },
      {
        id: "mitigar-ou-adaptar",
        emoji: "🛠️",
        name: "MITIGAR OU ADAPTAR?",
        question: "A ação atua sobre as causas da mudança ou diminui os danos que ela provoca?",
      },
      {
        id: "que-escala",
        emoji: "📏",
        name: "QUE ESCALA?",
        question: "Estou lendo o processo no planeta, no país, na região ou no bairro?",
      },
    ],
    highlight:
      "Antes de responder “é culpa do clima”, pergunte de que clima, em que escala e sobre que território.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "UM PROCESSO, QUATRO ESCALAS",
    context: "O aquecimento do sistema climático lido do planeta ao bairro.",
    flow: ["Global", "Nacional", "Regional", "Local"],
    question: "O que você passa a enxergar quando muda a escala de análise?",
    accordions: [
      {
        id: "global",
        title: "GLOBAL",
        content:
          "Nesta escala, o assunto é o sistema climático: emissões acumuladas desde a industrialização, concentração de gases na atmosfera e temperatura média do planeta. Uma tonelada de CO₂ emitida em qualquer país se mistura à mesma atmosfera. Por isso, a causa do aquecimento só se explica somando todas as fontes.",
      },
      {
        id: "nacional",
        title: "NACIONAL",
        content:
          "Aqui aparecem as escolhas de cada país: que matriz energética usar, como controlar o desmatamento, que metas de redução assumir e como financiar a prevenção de desastres.",
      },
      {
        id: "regional",
        title: "REGIONAL",
        content:
          "Nesta escala, o aquecimento se traduz em mudanças de chuva e temperatura que afetam bacias hidrográficas, lavouras, rios navegáveis e reservatórios. Uma seca regional pode reduzir a safra, encarecer o frete fluvial e baixar o nível das hidrelétricas ao mesmo tempo.",
      },
      {
        id: "local",
        title: "LOCAL",
        content:
          "No bairro, o que pesa é concreto: asfalto e telhados que acumulam calor, falta de árvores, várzeas ocupadas, encostas sem contenção. A ilha de calor urbana é um fenômeno local: áreas da cidade ficam mais quentes que seus arredores por causa da forma como foram construídas.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "Você viu a mesma chuva produzir dois resultados e separou seis distinções. Agora vamos dar precisão a cada conceito, da atmosfera às respostas da sociedade.",
      "Fique atento a uma regra que atravessa a aula inteira: um fato científico, como o aumento da temperatura média, não se confunde com uma interpretação sobre um evento específico nem com uma decisão política sobre o que fazer.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "tempo-e-clima",
        name: "TEMPO E CLIMA",
        conceito:
          "Tempo atmosférico é o estado da atmosfera num momento e num lugar: a chuva de hoje, o calor desta tarde. Clima é o comportamento da atmosfera analisado em séries longas, com médias, variações e frequência de extremos. A referência usada pela Organização Meteorológica Mundial são períodos de 30 anos, as normais climatológicas.",
        penseAssim:
          "O tempo é uma fotografia; o clima é o álbum de várias décadas. Uma foto fora do padrão não refaz o álbum, mas muitas fotos parecidas mudam o retrato.",
        exemplo:
          "Uma semana fria no inverno não desmente o aquecimento global, e um dia muito quente não o prova. O que importa é se, em décadas, os dias quentes ficaram mais frequentes.",
        naoConfunda:
          "Um evento isolado não confirma nem refuta uma tendência climática: para isso, é preciso uma série longa de dados.",
        naProva:
          "Se a questão traz um único episódio, pergunte se ela fala de tempo. Se traz médias de décadas, fala de clima.",
      },
      {
        id: "variabilidade-e-mudanca",
        name: "VARIABILIDADE E MUDANÇA CLIMÁTICA",
        conceito:
          "Variabilidade climática são as oscilações do clima em torno de um padrão: anos mais chuvosos ou mais secos, mais quentes ou mais frios. Mudança climática é a alteração persistente do próprio padrão, observada em décadas. A mudança climática contemporânea é a que vem sendo provocada principalmente pelas atividades humanas desde a industrialização.",
        penseAssim:
          "A variabilidade é a onda; a mudança é a maré subindo. As ondas continuam, mas chegam cada vez mais alto na areia.",
        exemplo:
          "El Niño é o aquecimento anômalo das águas superficiais do Pacífico equatorial. No Brasil, costuma favorecer secas no norte da Amazônia e do Nordeste e chuvas abundantes no Sul, embora nem todo episódio produza esses efeitos. É variabilidade natural: vai e volta em poucos anos. Para saber se a mudança climática pesou num evento específico, é preciso um estudo próprio de atribuição. Na seca amazônica de 2023, uma análise de atribuição rápida do World Weather Attribution indicou que o El Niño contribuiu, mas que a mudança climática teve o papel principal.",
        naoConfunda:
          "El Niño e La Niña não são causas do aquecimento global. São oscilações naturais que podem somar-se à tendência de aquecimento ou disfarçá-la por um ou dois anos.",
        naProva:
          "Desconfie de alternativas que expliquem uma tendência de décadas por um fenômeno que se repete em ciclos de poucos anos.",
      },
      {
        id: "efeito-estufa-e-aquecimento",
        name: "EFEITO ESTUFA E AQUECIMENTO GLOBAL",
        conceito:
          "O efeito estufa é natural e indispensável: gases como vapor d’água, gás carbônico e metano retêm parte do calor emitido pela superfície e mantêm a Terra habitável. A intensificação do efeito estufa é o aumento da concentração desses gases causado principalmente por atividades humanas. O aquecimento global é a elevação da temperatura média do sistema climático associada a essa intensificação.",
        penseAssim:
          "Um cobertor numa noite fria protege. Vários cobertores a mais, na mesma noite, fazem você suar. O problema não é o cobertor: é o excesso.",
        exemplo:
          "Segundo o IPCC, a temperatura média da superfície do planeta na década de 2011–2020 ficou cerca de 1,1 °C acima da média de 1850–1900, e a influência humana é a causa desse aquecimento.",
        naoConfunda:
          "“Efeito estufa” não é sinônimo de “aquecimento global”, e não é ruim em si. Sem ele, a Terra seria fria demais para a vida como a conhecemos.",
        naProva:
          "A armadilha costuma tratar o efeito estufa como poluição ou problema recente. A questão quer saber se você distingue o fenômeno natural da sua intensificação.",
      },
      {
        id: "causas-da-mudanca",
        name: "CAUSAS DA MUDANÇA CLIMÁTICA CONTEMPORÂNEA",
        conceito:
          "A mudança climática atual segue uma cadeia causal: atividades humanas emitem gases de efeito estufa, suas concentrações aumentam, o balanço de energia do planeta se altera, o sistema climático aquece e mudam temperaturas, chuvas, gelo e nível do mar. As fontes incluem combustíveis fósseis, mudanças no uso da terra, como o desmatamento, agropecuária, indústria e transporte, ligados a padrões de produção e consumo.",
        penseAssim:
          "Siga a cadeia de trás para a frente: quem emite, o que se acumula, o que esquenta, o que muda. Se faltar um elo, a explicação está incompleta.",
        exemplo:
          "No mundo, segundo o IPCC, a maior parte das emissões de 2019 veio de energia, indústria, transporte e edificações. No Brasil, mudanças no uso da terra e atividades agropecuárias têm peso importante no perfil de emissões, ao lado do setor energético e de outras atividades econômicas.",
        naoConfunda:
          "Poluição do ar e emissão de gases de efeito estufa não são a mesma coisa. A fumaça faz mal à saúde no lugar; o gás carbônico é invisível e atua no clima de todo o planeta.",
        naProva:
          "Questões sobre o Brasil costumam cobrar a relação entre desmatamento, agropecuária e emissões, e não só fábricas e carros.",
      },
      {
        id: "perigo-exposicao-vulnerabilidade",
        name: "PERIGO, EXPOSIÇÃO E VULNERABILIDADE",
        conceito:
          "Perigo é o evento físico capaz de causar dano: chuva intensa, seca, onda de calor. Exposição é a presença de pessoas, casas, infraestrutura e atividades no lugar atingido. Vulnerabilidade é a capacidade maior ou menor de resistir, enfrentar e se recuperar. O risco nasce da combinação dos três, e o desastre acontece quando o perigo encontra exposição e vulnerabilidade.",
        penseAssim:
          "Uma tempestade sobre o oceano vazio é só tempestade. A mesma tempestade sobre uma encosta ocupada pode virar desastre.",
        exemplo:
          "Uma onda de calor é a mesma em toda a cidade, mas o risco é maior para quem trabalha ao ar livre, mora em casa sem ventilação ou tem pouco acesso a atendimento de saúde.",
        naoConfunda:
          "“RISCO = perigo + exposição + vulnerabilidade” é um resumo, não uma conta. Se um dos três for muito baixo, o risco cai, mesmo que os outros sejam altos.",
        naProva:
          "Ao ler uma notícia de desastre, separe três frases: o que a atmosfera fez, quem estava no caminho e por que alguns foram mais atingidos.",
      },
      {
        id: "desigualdade-climatica",
        name: "DESIGUALDADE CLIMÁTICA",
        conceito:
          "Os impactos climáticos não se distribuem igualmente. Renda, tipo de moradia, saneamento, infraestrutura, localização e acesso a serviços fazem a vulnerabilidade variar entre países, entre regiões e entre bairros da mesma cidade. O IPCC registra que comunidades vulneráveis que menos contribuíram para a mudança climática estão entre as mais afetadas.",
        penseAssim:
          "Pergunte quem tem mais meios de se proteger antes do evento e de se recuperar depois. A resposta costuma desenhar um mapa.",
        exemplo:
          "Duas famílias atingidas pela mesma enchente: uma tem seguro, carro e parentes em outro bairro; a outra perdeu a casa, o trabalho informal e não tem para onde ir. O evento foi o mesmo; a recuperação, não.",
        naoConfunda:
          "Desigualdade climática não significa que a pobreza cause o evento, nem que todo bairro pobre seja atingido. Significa que as condições sociais mudam o tamanho do dano e o tempo de recuperação.",
        naProva:
          "Mapas que sobrepõem áreas de risco e indicadores sociais pedem essa leitura: ligar as duas camadas sem transformar a relação em destino.",
      },
      {
        id: "mitigacao-e-adaptacao",
        name: "MITIGAÇÃO E ADAPTAÇÃO",
        conceito:
          "Mitigação atua sobre as causas ou sobre a magnitude futura da mudança climática: reduzir emissões, fazer a transição energética, conservar florestas, aumentar a eficiência energética. Adaptação reduz a exposição ou a vulnerabilidade aos impactos: drenagem urbana, sistemas de alerta, arborização, infraestrutura resiliente, planejamento territorial.",
        penseAssim:
          "Mitigar é fechar a torneira; adaptar é proteger a casa da água que já está no chão.",
        exemplo:
          "Conter o desmatamento é mitigação, porque reduz emissões. Retirar moradias de áreas de deslizamento e instalar sirenes de alerta é adaptação, porque reduz exposição e vulnerabilidade.",
        naoConfunda:
          "Não são alternativas excludentes: arborizar a cidade guarda carbono e reduz o calor local. E nem toda obra adapta: uma intervenção mal planejada pode deslocar o problema para outro bairro.",
        naProva:
          "Pergunte o que a ação muda: se mexe nas emissões, é mitigação; se mexe na exposição ou na vulnerabilidade, é adaptação.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "desastre-natural",
        title: "Um desastre é realmente natural?",
        content:
          "Imagine dois territórios fictícios atingidos pela mesma seca de três meses. No primeiro, as famílias dependem da chuva para plantar e beber, não há reservatório nem assistência técnica, e a estrada até a cidade fica intransitável. No segundo, há cisternas, irrigação planejada, seguro agrícola e acesso a mercados. No primeiro, a seca vira fome, migração e perda de renda; no segundo, uma safra menor.",
        flow: ["Seca igual", "Exposição diferente", "Vulnerabilidade diferente", "Desastre diferente"],
        highlight: "O evento pode ser natural. O desastre é construído pela combinação com o território.",
      },
      {
        id: "enchente-comeca",
        title: "Uma enchente começa quando começa a chover?",
        content:
          "Ela começa antes: quando a várzea, a área que o rio ocupa naturalmente nas cheias, é loteada; quando o solo é coberto de asfalto e concreto e a água deixa de infiltrar; quando o córrego é canalizado sem capacidade para os picos de vazão, a vegetação das margens é retirada e a drenagem não acompanha o crescimento da cidade. A chuva é o gatilho; as condições foram montadas antes.",
        flow: ["Ocupação da várzea", "Impermeabilização", "Drenagem insuficiente", "Chuva intensa", "Enchente"],
        highlight: "A chuva dispara a enchente. O planejamento, ou a falta dele, decide quanto ela custa.",
      },
      {
        id: "mitigacao-adaptacao-problema",
        title: "Mitigação e adaptação resolvem o mesmo problema?",
        content:
          "Não exatamente. A mitigação atua sobre o problema futuro, com efeito global e de longo prazo: o corte de emissões de uma cidade só pesa somado ao esforço de todos. A adaptação atua sobre o dano no lugar, com efeito local e mais rápido: um sistema de alerta pode salvar vidas na próxima chuva. Só mitigar deixa as pessoas desprotegidas agora; só adaptar enfrenta impactos cada vez maiores.",
        flow: ["Mitigação: causas, escala global", "Adaptação: impactos, escala local"],
        highlight: "Mitigação reduz o tamanho do problema. Adaptação reduz o tamanho do dano.",
      },
      {
        id: "quem-sente-primeiro",
        title: "Quem sente primeiro?",
        content:
          "Costuma sentir primeiro quem mora em áreas mais expostas, tem menos renda para se proteger e depende de serviços que falham na emergência: o trabalhador que perde o dia quando o transporte para, a família sem água encanada na estiagem, o agricultor que depende da chuva. Mas não há determinismo: políticas de habitação, saneamento, alerta e assistência mudam esse quadro, porque a vulnerabilidade é produzida socialmente.",
        flow: ["Exposição", "Renda e moradia", "Serviços públicos", "Capacidade de recuperação"],
        highlight: "A vulnerabilidade não é destino: é uma condição que pode mudar.",
      },
    ],
    closing:
      "Em cada caso, o fenômeno físico foi o ponto de partida, não a explicação completa.",
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Onde clima, território e decisão se encontram no país?",
    center: "BRASIL",
    items: [
      {
        id: "amazonia",
        label: "AMAZÔNIA",
        description:
          "O desmatamento libera carbono e tem peso importante nas emissões do país. A floresta participa da formação de chuvas na região, e secas severas baixam os rios que servem de estrada para comunidades inteiras.",
      },
      {
        id: "cerrado-pantanal",
        label: "CERRADO E PANTANAL",
        description:
          "Segundo o Programa Queimadas do INPE, na América do Sul a quase totalidade das queimadas é causada pela ação humana, como na limpeza de pastos e no preparo de plantios. Há também fogo natural, provocado por raios, mais comum no Cerrado. A estiagem, quando mais se queima, deixa a vegetação mais inflamável.",
      },
      {
        id: "cidades",
        label: "CIDADES",
        description:
          "Enchentes, deslizamentos e ilhas de calor se concentram onde a ocupação avançou sobre várzeas e encostas e onde faltam drenagem, áreas verdes e contenção. O perigo vem da atmosfera; o mapa do dano é urbano.",
      },
      {
        id: "agropecuaria",
        label: "AGROPECUÁRIA",
        description:
          "Depende do regime de chuvas e de temperaturas favoráveis, por isso é sensível a secas e extremos, e também é fonte de emissões: está dos dois lados, causa e impacto.",
      },
      {
        id: "matriz-energetica",
        label: "MATRIZ ENERGÉTICA",
        description:
          "A eletricidade brasileira vem principalmente de hidrelétricas, e a participação da energia eólica e solar cresce. Uma estiagem prolongada baixa os reservatórios e pode exigir outras fontes, inclusive térmicas.",
      },
    ],
    study:
      "No Brasil, o mesmo tema aparece como causa, como impacto e como decisão. Ler o país exige perguntar, em cada caso, qual dos três está em jogo.",
    highlight:
      "No Brasil, o clima passa pelo uso da terra, pelo território ocupado e pelas políticas escolhidas.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Mapas, climogramas e mapas de anomalia",
      "Gráficos de temperatura e séries históricas",
      "Charges, notícias e textos científicos",
      "Mapas de vulnerabilidade",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Tendência ou evento isolado",
      "Perigo, exposição ou vulnerabilidade",
      "Mitigação ou adaptação",
      "Escala adequada",
    ],
    highlight:
      "A prova raramente pergunta “o que é efeito estufa?”. Ela mostra um dado ou uma notícia e quer saber se você separa o fenômeno físico da consequência social.",
    guidingIntro: "Diante de uma questão sobre clima, pergunte:",
    guidingQuestions: [
      "Qual é a escala?",
      "O dado mostra tendência ou apenas um evento?",
      "Estamos falando de perigo, exposição ou vulnerabilidade?",
      "O texto trata de mitigação ou de adaptação?",
      "O que é fenômeno físico e o que é consequência social?",
    ],
  },

  question: {
    id: "s06-a16-q01",
    statement:
      "O município fictício de Várzea Alta registra, desde 1961, quantos dias por ano têm chuva acima de 50 mm. Na média de 1991 a 2020, esses dias foram mais frequentes do que na média de 1961 a 1990, e a diferença se mantém quando se excluem da conta os anos de El Niño e de La Niña. Em 2025, uma chuva de intensidade semelhante em toda a área urbana alagou a cidade, mas quase todos os desalojamentos ocorreram em bairros construídos sobre a várzea do rio, com drenagem precária e moradores de baixa renda. Em seguida, a prefeitura anunciou duas medidas: substituir gradualmente os ônibus a diesel por ônibus elétricos e implantar, nos bairros da várzea, um sistema de alerta com rotas de retirada. Considerando essas informações, a leitura mais adequada é que",
    options: [
      {
        id: "A",
        text: "a chuva de 2025, por ter alagado a cidade inteira, permite concluir que o clima local mudou; os desalojamentos na várzea mostram que a exposição e a vulnerabilidade dos moradores ampliaram o efeito da chuva; e tanto o sistema de alerta quanto os ônibus elétricos reduzem diretamente o risco de novos desalojamentos nos bairros da várzea.",
      },
      {
        id: "B",
        text: "a comparação entre as médias de 1961–1990 e 1991–2020 indica mudança no comportamento das chuvas locais; os desalojamentos na várzea decorrem sobretudo de a chuva ter sido mais forte nesses bairros do que no restante da cidade; o sistema de alerta atua sobre as causas do problema, e os ônibus elétricos adaptam a cidade às chuvas mais frequentes.",
      },
      {
        id: "C",
        text: "a comparação entre as médias de 1961–1990 e 1991–2020 indica mudança no comportamento das chuvas locais; os desalojamentos na várzea mostram que a exposição e a vulnerabilidade dos moradores ampliaram o efeito da mesma chuva; o sistema de alerta reduz o risco no município, e a troca dos ônibus atua sobre emissões cujo efeito no clima não se limita a ele.",
      },
      {
        id: "D",
        text: "a diferença entre as médias de 1961–1990 e 1991–2020 pode ser atribuída à alternância entre El Niño e La Niña, e não a uma mudança no clima local; os desalojamentos na várzea mostram que a exposição e a vulnerabilidade dos moradores ampliaram o efeito da mesma chuva; o sistema de alerta reduz o risco no município, e os ônibus elétricos cortam emissões.",
      },
      {
        id: "E",
        text: "a comparação entre as médias de 1961–1990 e 1991–2020 indica mudança no comportamento das chuvas locais; os desalojamentos na várzea mostram que a exposição e a vulnerabilidade dos moradores ampliaram o efeito da mesma chuva; o sistema de alerta reduz o risco no município, e os ônibus elétricos devem diminuir a frequência de chuvas fortes sobre Várzea Alta.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "A alternativa C está correta, porque combina três leituras. Dado climático: a comparação entre duas médias de 30 anos descreve o comportamento do clima local, e não um evento isolado; como a diferença se mantém sem os anos de El Niño e La Niña, ela não se explica por essa oscilação. Risco: a chuva teve intensidade semelhante em toda a cidade, mas o dano se concentrou onde havia mais exposição, na várzea, e mais vulnerabilidade, com drenagem precária e baixa renda. Respostas e escala: o sistema de alerta é adaptação e reduz o risco no próprio município; os ônibus elétricos são mitigação, e seu efeito sobre o clima só existe somado às emissões de todo o planeta. A trata um único evento como prova de mudança e atribui aos ônibus um efeito direto sobre o risco local. B atribui o dano a uma chuva mais forte, o que contradiz o enunciado, e troca mitigação por adaptação. D ignora que a diferença persiste sem os anos de El Niño e La Niña. E acerta o dado e o risco, mas erra a escala: cortar as emissões de uma cidade não altera a frequência das chuvas sobre ela.",
  },

  missionCheck:
    "Voltemos à pergunta da aula: o clima é natural; seus impactos também são? Agora você consegue separar o que é fenômeno atmosférico do que é impacto social, identificar perigo, exposição e vulnerabilidade, distinguir mitigação de adaptação e escolher a escala certa para ler o problema?",

  completionMessage:
    "O fenômeno pode ser natural; o tamanho do dano depende de onde e como vivemos, e das decisões que tomamos. Agora você tem seis distinções e quatro escalas para ler o clima sem confundir causa, evento e consequência.",
};
