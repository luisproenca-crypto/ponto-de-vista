import type { LessonContent } from "@/lib/types";

/**
 * AULA 22 — RELEVO, ROCHAS E SOLOS: A PAISAGEM É UMA HISTÓRIA EM MOVIMENTO?
 * Semana 08 • Geografia Essencial (ENTENDA) — A NATUREZA EM MOVIMENTO
 *
 * Pergunta-guia (abre e fecha a aula): "O que nesta paisagem levou milhões
 * de anos para se formar — e o que pode mudar numa única estação chuvosa?"
 * Operação nova: FORMA → PROCESSO → AGENTE → TEMPO, aplicada com a
 * ferramenta "Leia a paisagem em quatro perguntas" (`application`).
 * Cinco lentes: agentes internos e externos; intemperismo; erosão,
 * transporte e sedimentação (com movimentos de massa distinguidos da
 * erosão); formas de relevo pelo processo predominante e pela posição
 * relativa; solo. Tempo geológico × tempo histórico atravessa todas, sem
 * lente própria. Progressão: Aula 16 (o relevo como fator de risco) →
 * Semana 07 (a sociedade produz território) → Aula 22 (a base física como
 * processo). Vale do Rio Seixo e Serra do Cajado são fictícios.
 * LIMITES: sem bacia hidrográfica, divisor, montante/jusante, regime fluvial,
 * assoreamento ou aquíferos (Aula 23); sem massas de ar, tipos climáticos,
 * biomas ou domínios morfoclimáticos (Aula 24). Sem taxonomias de autores.
 *
 * IMAGEM PLANEJADA (ainda não existe; o site mostra o placeholder):
 * /public/assets/aulas/semana-08-aula-22-paisagem.png, proporção 16:9, sem
 * textos explicativos sobre processos. A arte será feita depois que o texto
 * estiver congelado.
 *
 * FONTES (conferidas em 03/11/2026):
 *   • Serra do Mar: Oliveira & Queiroz Neto, GEOUSP n. 22, 2007 (USP):
 *     "típica borda de planalto"; origem "relacionada a processos tectônicos
 *     de movimentação vertical ocorridos no Cenozóico"; a partir da falha de
 *     Santos, na plataforma continental, "de onde recuou por erosão até a
 *     posição atual"; "cicatrizes de escorregamentos" e "testemunhos de
 *     movimentos de massa" nas escarpas.
 *   • Pantanal: Assine, M. L., "Sedimentação na Bacia do Pantanal
 *     Mato-Grossense", tese de livre-docência, Unesp, 2003: "bacia
 *     sedimentar quaternária"; "vasta planície com gradiente topográfico
 *     muito baixo"; leques aluviais que "permaneceram sistemas deposicionais
 *     ativos".
 *   • Voçorocas: Filizola, Boulet & Gomes, Embrapa Meio Ambiente, "Processos
 *     erosivos lineares em áreas de recarga do Aquífero Guarani": sulcos,
 *     ravinas e voçorocas associados "ao uso do solo, ao substrato
 *     geológico, ao tipo de solo, ao relevo e às características climáticas
 *     e hidrológicas"; frequentes em formações sedimentares arenosas; nas
 *     nascentes do rio Araguaia, aumento com o "incremento da agropecuária a
 *     partir dos anos 70"; há voçorocas que seguem "um antigo canal
 *     erosivo".
 *   • Planície como "área plana resultante de acumulação": IBGE, Manual
 *     Técnico de Geomorfologia (1995). A leitura escolar de planaltos,
 *     planícies e depressões pelo processo predominante e pela posição
 *     relativa é apresentada sem taxonomia de autores, por decisão editorial.
 *   • Fatores de formação do solo: Pereira, Anjos et al. (UFRRJ e Embrapa
 *     Solos), "Formação e caracterização de solos", 2019 (repositório Alice,
 *     Embrapa): equação de Jenny (1941), S = f(clima, organismos, relevo,
 *     material de origem, tempo).
 *
 * Aula em preparação (`course.ts` ainda não cadastra a Semana 08).
 */
export const aula22Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de observar uma forma de relevo, uma fotografia ou um perfil e reconstruir qual processo atua ou deixou evidências, qual agente participa e em que escala de tempo isso ocorre, sem confundir intemperismo, erosão, transporte, sedimentação e movimentos de massa.",

  observation: {
    title: "O OLHAR DO PACO",
    lines: [
      "Observe o vale do Rio Seixo, uma paisagem fictícia. No alto, uma superfície ampla termina numa escarpa íngreme. No topo, a rocha aflora com cores diferentes da rocha sã, coberta em parte por solo. Numa encosta da escarpa, uma cicatriz recente mostra onde solo e blocos de rocha desceram. No fundo do vale, o rio deixou depósitos de areia e cascalho numa curva. Na baixa encosta, uma lavoura de solo exposto foi cortada por ravinas.",
      "Não procure ainda os nomes certos. Pergunte primeiro o que cada parte da paisagem está contando.",
    ],
    image: {
      src: "/assets/aulas/semana-08-aula-22-paisagem.png",
      alt: "Paisagem fictícia do vale do Rio Seixo: uma superfície ampla no alto que termina numa escarpa íngreme; no topo, rocha alterada aflorando; na escarpa, uma cicatriz recente de movimento de massa; no fundo do vale, o rio com depósitos de areia e cascalho numa curva; na baixa encosta, uma lavoura de solo exposto cortada por ravinas.",
      caption: "Paisagem fictícia criada para fins didáticos.",
    },
    questions: [
      "O que nesta paisagem levou milhões de anos para se formar — e o que pode mudar numa única estação chuvosa?",
      "Onde a rocha mudou sem sair do lugar?",
      "Onde material foi retirado, e onde ele foi parar?",
      "O que aconteceu na encosta da cicatriz?",
      "O que a lavoura tem a ver com as ravinas?",
    ],
    closing: "GUARDE SUAS RESPOSTAS. VAMOS VOLTAR A ESTA PAISAGEM EM CADA ETAPA DA AULA.",
  },

  connection: {
    title: "DO RISCO AO PROCESSO",
    flow: ["O relevo como risco", "A sociedade produz", "A natureza em movimento"],
    highlight: "A paisagem não é um cenário pronto: é um processo em curso.",
    text: "Na Aula 16, a encosta apareceu como lugar de risco. Na Semana 07, você leu como a sociedade produz e transforma o território. Agora a pergunta muda de lado: sobre que natureza essa produção acontece, e o que essa natureza está fazendo enquanto a ocupamos? “O que nesta paisagem levou milhões de anos para se formar — e o que pode mudar numa única estação chuvosa?”",
  },

  lenses: {
    eyebrow: "Cinco lentes para ler a paisagem",
    title: "O QUE ESTÁ ACONTECENDO NESTA PAISAGEM?",
    subtitle:
      "Cinco conceitos dão nome aos processos. Logo abaixo, quatro perguntas mostram como usá-los diante de qualquer paisagem.",
    items: [
      {
        id: "agentes",
        emoji: "🌋",
        name: "AGENTES INTERNOS E EXTERNOS",
        question: "A força vem de dentro da Terra ou atua na superfície?",
      },
      {
        id: "intemperismo",
        emoji: "🪨",
        name: "INTEMPERISMO",
        question: "A rocha está mudando sem sair do lugar?",
      },
      {
        id: "erosao",
        emoji: "🌊",
        name: "EROSÃO, TRANSPORTE E SEDIMENTAÇÃO",
        question: "De onde o material saiu, como viajou e onde parou?",
      },
      {
        id: "formas",
        emoji: "⛰️",
        name: "FORMAS DE RELEVO",
        question: "Aqui predomina a retirada ou a acumulação de material?",
      },
      {
        id: "solo",
        emoji: "🌱",
        name: "SOLO",
        question: "Como este solo se formou, e o que pode levá-lo embora?",
      },
    ],
    highlight:
      "Uma forma de relevo é o retrato de um momento de processos que continuam agindo, em tempos muito diferentes.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "LEIA A PAISAGEM EM QUATRO PERGUNTAS",
    context:
      "As perguntas dão o caminho em qualquer foto, perfil ou bloco-diagrama. Aqui, aplicadas ao vale do Rio Seixo.",
    flow: ["Forma", "Processo", "Agente", "Tempo"],
    question: "O que esta forma revela sobre o que aconteceu, e ainda acontece, aqui?",
    accordions: [
      {
        id: "forma",
        title: "1. QUE FORMA VEJO?",
        content:
          "Descreva sem explicar: uma superfície ampla, uma escarpa, um vale, um depósito, uma cicatriz, uma ravina.",
      },
      {
        id: "processo",
        title: "2. QUE PROCESSO ESTÁ ATUANDO OU DEIXOU EVIDÊNCIAS?",
        content:
          "Rocha alterada no lugar indica intemperismo; material retirado, erosão; areia acumulada na curva do rio, transporte e sedimentação; a cicatriz, um movimento de massa.",
      },
      {
        id: "agente",
        title: "3. QUAL AGENTE PARTICIPA?",
        content:
          "A água da chuva e dos rios, a gravidade, os organismos e, na lavoura, o uso do solo. A escarpa também guarda a marca de movimentos antigos da crosta.",
      },
      {
        id: "tempo",
        title: "4. EM QUE ESCALA DE TEMPO ISSO OCORRE?",
        content:
          "A escarpa se formou ao longo de milhões de anos; a cicatriz e as ravinas surgiram em dias ou numa estação. Lento e rápido convivem na mesma paisagem.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "No vale do Rio Seixo, você separou o antigo do recente. Agora, os cinco conceitos.",
      "Guarde uma regra: diante de qualquer forma, pergunte que processo, que agente e que tempo ajudam a explicá-la.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "agentes",
        name: "AGENTES INTERNOS E EXTERNOS",
        conceito:
          "Agentes internos vêm de dentro da Terra: o tectonismo, que soergue, rebaixa, fratura e dobra a crosta, o vulcanismo e os terremotos. Agentes externos atuam na superfície: a água, o vento, o gelo, a gravidade, os organismos e também a sociedade.",
        penseAssim:
          "Pergunte de onde vem a energia que muda a forma: do interior da Terra ou da superfície.",
        exemplo:
          "No vale do Rio Seixo, a escarpa guarda a marca de movimentos da crosta; a ravina e o depósito do rio são obra da água.",
        naoConfunda:
          "Os agentes internos não só “criam” relevo, e os externos não só “destroem”. O tectonismo também abate blocos, e a deposição de sedimentos também constrói formas, como planícies e deltas.",
        naProva:
          "Desconfie de alternativas que dividem o trabalho em “internos constroem, externos destroem”.",
      },
      {
        id: "intemperismo",
        name: "INTEMPERISMO",
        conceito:
          "Intemperismo é a alteração da rocha no próprio lugar. Pode ser físico, quando a rocha se fragmenta, ou químico, quando reações com a água transformam seus minerais. Em climas quentes e úmidos, o intemperismo químico tende a ser mais intenso.",
        penseAssim:
          "Pergunte se o material mudou e continua onde estava. Se continua, é intemperismo.",
        exemplo:
          "No topo do vale, a rocha aflora com cores diferentes da rocha sã: ela se alterou, mas não foi levada.",
        naoConfunda:
          "Intemperismo não é erosão. A rocha pode se alterar profundamente sem sair do lugar; a erosão começa quando o material é removido.",
        naProva:
          "Fotos de rochas alteradas pedem que você reconheça a alteração no lugar, sem supor transporte.",
      },
      {
        id: "erosao",
        name: "EROSÃO, TRANSPORTE E SEDIMENTAÇÃO",
        conceito:
          "Erosão é a remoção de material da superfície. Transporte é o deslocamento desse material pela água, pelo vento ou pelo gelo. Sedimentação é a deposição, onde o agente perde força. Nas vertentes ocorrem também movimentos de massa: deslocamentos de solo e rocha encosta abaixo sob ação predominante da gravidade.",
        penseAssim:
          "Siga o material: de onde saiu, o que o levou e onde parou. Se desceu de uma vez pela encosta, puxado pela gravidade, pense em movimento de massa.",
        exemplo:
          "A ravina retirou solo da lavoura; a areia na curva do rio foi transportada e depositada; a cicatriz na escarpa marca um movimento de massa.",
        naoConfunda:
          "Erosão não é qualquer desgaste: sem remoção, há intemperismo. E movimento de massa não é o mesmo que erosão pela água corrente: nele, a gravidade desloca de uma vez um volume de material da vertente.",
        naProva:
          "Imagens de deslizamento, ravina e banco de areia pedem que você separe os processos.",
      },
      {
        id: "formas",
        name: "FORMAS DE RELEVO",
        conceito:
          "Numa leitura geomorfológica escolar, baseada em processos e posição relativa, planaltos são áreas em que predominam processos erosivos sobre os de acumulação; planícies são áreas em que predomina a acumulação de sedimentos; depressões são áreas rebaixadas em relação às formas vizinhas.",
        penseAssim:
          "Pergunte o que predomina ali, retirada ou acumulação de material, e compare a área com o que está em volta.",
        exemplo:
          "No vale do Rio Seixo, a superfície do alto é desgastada pela água; no fundo do vale, o rio acumula areia: são lógicas diferentes de relevo.",
        naoConfunda:
          "Planalto não é sinônimo de lugar alto, nem planície de lugar baixo. Há planícies em áreas elevadas e planaltos de altitude modesta: o que pesa é o processo predominante e a posição em relação ao entorno.",
        naProva:
          "A armadilha dos perfis e mapas hipsométricos é classificar o relevo só pela cor ou pelo número.",
      },
      {
        id: "solo",
        name: "SOLO",
        conceito:
          "Solo é o resultado da interação entre material de origem, clima, relevo, organismos e tempo. Ele se organiza em camadas, os horizontes, e reúne minerais, matéria orgânica, água, ar e vida.",
        penseAssim:
          "Pergunte de que rocha veio, sob que clima, em que posição do relevo, com que vida e há quanto tempo.",
        exemplo:
          "No topo do vale, a rocha alterada dá origem a solo; na lavoura de solo exposto, a chuva já começou a levá-lo.",
        naoConfunda:
          "Solo não é apenas rocha triturada: tem organização, matéria orgânica e vida. E sua formação costuma ser lenta, enquanto sua perda pode ser rápida.",
        naProva:
          "Cortes de solo pedem horizontes; imagens de erosão pedem a relação entre cobertura, manejo e perda de solo.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "forma-processo",
        title: "O relevo é uma forma ou um processo?",
        content:
          "As duas coisas. A forma é o que vemos hoje; o processo é o que continua agindo sobre ela. Uma escarpa pode levar milhões de anos para se formar e recuar, mas uma chuva intensa pode abrir uma cicatriz nela em poucas horas. Isso não quer dizer que a natureza seja sempre lenta: terremotos, erupções e movimentos de massa são processos naturais abruptos. A diferença está na escala de tempo de cada processo. E classificar o relevo só pela altitude é pouco: pergunte se ali predomina retirada ou acumulação, e como a área se posiciona em relação ao entorno.",
        flow: ["Forma visível", "Processo em curso", "Tempo longo", "Evento abrupto"],
        highlight: "Toda forma é um momento de um processo que continua.",
      },
      {
        id: "alterar-remover",
        title: "Alterar, remover, transportar e depositar são a mesma coisa?",
        content:
          "Não. São processos que frequentemente se conectam no modelado da paisagem, mas não formam uma sequência obrigatória em todo lugar. O intemperismo altera a rocha no lugar e prepara material. A erosão remove material, alterado ou não. O transporte o desloca, pela água, pelo vento ou pelo gelo. A sedimentação o deposita onde o agente perde força. O que sai de um lugar pode construir outro. Em paralelo, nas encostas, os movimentos de massa deslocam de uma vez solo e rocha sob ação da gravidade: não são a mesma coisa que a erosão grão a grão pela água, embora a água costume participar, encharcando a vertente.",
        flow: ["Intemperismo", "Erosão", "Transporte", "Sedimentação"],
        highlight: "O material retirado num lugar pode construir formas em outro.",
      },
      {
        id: "solo-perdido",
        title: "O que faz um solo permanecer — ou ser perdido?",
        content:
          "O solo se forma, em geral, de modo relativamente lento. A cobertura vegetal o protege: as folhas amortecem o impacto da chuva, as raízes o seguram e a matéria orgânica ajuda a água a infiltrar. Quando a cobertura é retirada e o manejo não controla o escoamento, a água se concentra e abre caminhos. Primeiro surgem sulcos rasos, depois ravinas mais profundas e, nos casos de maior porte, voçorocas. A perda de solo pode ser um processo natural, mas o uso pode acelerá-la muito.",
        flow: ["Cobertura retirada", "Escoamento concentrado", "Sulcos e ravinas", "Perda acelerada"],
        highlight: "O solo que leva séculos para se formar pode ser perdido em poucas estações.",
      },
    ],
    closing:
      "O solo que sai da lavoura e a areia que o rio deposita não desaparecem: vão para algum lugar. Na Aula 23, a pergunta será onde esse caminho começa e onde termina.",
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Onde as lentes da aula aparecem no relevo brasileiro?",
    center: "BRASIL",
    items: [
      {
        id: "serra-do-mar",
        label: "SERRA DO MAR: TEMPO LONGO E EVENTO RÁPIDO",
        description:
          "Segundo estudos de geomorfologia da USP, a Serra do Mar é uma típica borda de planalto. Sua origem está ligada a movimentos tectônicos verticais da crosta ocorridos há dezenas de milhões de anos, e desde então a escarpa recuou por erosão até a posição atual. Em suas vertentes, cicatrizes de escorregamentos registram movimentos de massa, que podem mudar uma encosta em poucas horas.",
      },
      {
        id: "pantanal",
        label: "PANTANAL: UMA PLANÍCIE DE ACUMULAÇÃO",
        description:
          "Segundo pesquisa da Unesp, o Pantanal é uma bacia sedimentar formada no período geológico mais recente e uma vasta planície de gradiente topográfico muito baixo, onde leques de sedimentos trazidos pelos rios continuam ativos. O que faz dele uma planície é o predomínio da acumulação, e não apenas a altitude.",
      },
      {
        id: "vocorocas",
        label: "VOÇOROCAS: UM PROCESSO NATURAL ACELERADO",
        description:
          "Segundo a Embrapa Meio Ambiente, sulcos, ravinas e voçorocas aparecem em grande parte do Sul, do Sudeste e do Centro-Oeste, associados ao uso do solo, às rochas, ao tipo de solo, ao relevo e ao clima, sobretudo em terrenos arenosos. Há voçorocas que seguem antigos canais erosivos, mas, nas áreas estudadas pela Embrapa, esses processos aumentaram com a expansão da agropecuária a partir dos anos 1970.",
      },
    ],
    study:
      "Cada cartão prova uma lente: a Serra do Mar, agentes e tempos diferentes; o Pantanal, a planície pela acumulação; as voçorocas, a perda de solo acelerada pelo uso.",
    highlight:
      "No Brasil, a mesma pergunta vale da serra à planície: que processo, que agente e que tempo explicam esta forma?",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Fotografia de paisagem",
      "Perfil topográfico",
      "Bloco-diagrama",
      "Mapa hipsométrico",
      "Imagem de erosão",
      "Corte de solo",
      "Sequência temporal",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Inferir o processo a partir da forma",
      "Separar intemperismo, erosão e movimento de massa",
      "Classificar sem depender da altitude",
      "Distinguir tempo longo de evento abrupto",
    ],
    highlight:
      "A prova raramente pergunta “o que é intemperismo?”. Ela mostra uma forma e quer ver você inferir o processo a partir da evidência.",
    guidingIntro: "Material → operação → armadilha:",
    guidingQuestions: [
      "Fotografia de paisagem → aplique as quatro perguntas. Armadilha: descrever a forma sem chegar ao processo.",
      "Perfil topográfico ou mapa hipsométrico → leia a altitude como dado e procure onde predomina retirada ou acumulação. Armadilha: planalto = lugar alto, planície = lugar baixo.",
      "Bloco-diagrama → relacione rocha, estrutura e forma. Armadilha: agentes internos só constroem e externos só destroem.",
      "Imagem de erosão ou corte de solo → relacione cobertura, manejo e perda de solo, e reconheça os horizontes. Armadilha: solo = rocha triturada, ou intemperismo = erosão.",
      "Sequência temporal → separe o processo lento do evento abrupto. Armadilha: toda mudança rápida é causada pela sociedade.",
    ],
  },

  question: {
    id: "s08-a22-q01",
    statement:
      "Um perfil fictício da Serra do Cajado mostra, de oeste para leste: uma superfície ampla e suavemente ondulada, a cerca de 600 m de altitude, onde a rocha aflora com cor alterada e fragmentos ainda no lugar, recoberta em parte por solo; uma escarpa íngreme, coberta por mata nativa, com uma cicatriz recente onde solo e blocos de rocha desceram após três dias de chuva intensa; e um vale com um rio cujos bancos de areia e cascalho crescem depois das cheias. Na baixa encosta, uma lavoura de solo exposto foi cortada por ravinas na última estação chuvosa. Na mesma região, uma área plana a cerca de 750 m recebe continuamente sedimentos trazidos pelos rios. Considerando essas informações, a leitura mais adequada é que",
    options: [
      {
        id: "A",
        text: "a área plana a 750 m é um planalto e a superfície a 600 m é uma planície, já que a classificação depende da altitude de cada uma delas; a rocha alterada no topo e as ravinas da lavoura são exemplos do mesmo processo de erosão, que remove material da vertente.",
      },
      {
        id: "B",
        text: "a cor alterada das rochas no topo indica erosão, pois houve desgaste do material; os bancos de areia do rio são resíduos desse desgaste promovido pelos agentes externos, enquanto a escarpa e a área plana mais elevada resultam da ação dos agentes internos da crosta.",
      },
      {
        id: "C",
        text: "a cicatriz na escarpa e as ravinas da lavoura revelam a ação humana, porque mudanças em poucos dias indicam interferência da ocupação regional; a escarpa formou-se ao longo de muito tempo, e os bancos de areia mostram o transporte e a deposição feitos pelo rio.",
      },
      {
        id: "D",
        text: "os processos do perfil ocorrem em escalas de tempo semelhantes, perceptíveis ao longo de milhões de anos; a cicatriz da escarpa resulta da água corrente que arrancou o solo da vertente, e a área plana mais elevada, por receber sedimentos, é um planalto em formação.",
      },
      {
        id: "E",
        text: "a rocha do topo alterou-se no lugar; a água tirou solo da lavoura e a gravidade moveu material na escarpa sob mata; bancos de areia mostram transporte e deposição; a área a 750 m é planície por receber sedimentos; e a escarpa antiga convive com mudanças de dias.",
      },
    ],
    correctOptionId: "E",
    explanation:
      "A alternativa E está correta porque aplica as quatro perguntas a cada parte do perfil. 1. INTEMPERISMO: a rocha do topo tem cor alterada e fragmentos no lugar: ela se transformou sem ser transportada. 2. EROSÃO E MOVIMENTO DE MASSA: na lavoura, a água concentrada removeu solo exposto e abriu ravinas; na escarpa, o material desceu de uma vez pela ação da gravidade, mesmo sob mata nativa, o que mostra que um evento rápido pode ser natural. 3. TRANSPORTE E SEDIMENTAÇÃO: os bancos de areia crescem porque o rio leva material e o deposita onde perde força. 4. FORMAS: a área plana a 750 m é planície porque recebe sedimentos continuamente, mesmo sendo mais alta que a superfície do topo; a altitude, sozinha, não define a forma. 5. TEMPO: a escarpa resulta de processos longos; a cicatriz e as ravinas surgiram em dias ou numa estação. A classifica o relevo pela altitude e confunde intemperismo com erosão. B também confunde intemperismo com erosão e supõe que os agentes externos apenas desgastam, ignorando que a deposição constrói a área plana. C atribui à ocupação toda mudança rápida, embora a cicatriz esteja numa encosta sob mata nativa. D supõe que todos os processos são lentos, confunde movimento de massa com erosão pela água e chama de planalto uma área de acumulação.",
    optionFeedback: {
      A: "Altitude não define a forma: a área a 750 m recebe sedimentos, logo é planície. E a rocha alterada no topo não foi removida, o que é intemperismo, não erosão.",
      B: "Rocha alterada no lugar é intemperismo. E os agentes externos também constroem: a área plana mais elevada é formada pela deposição de sedimentos.",
      C: "A cicatriz está numa escarpa sob mata nativa: movimentos de massa podem ser naturais e rápidos. Uma mudança rápida não indica, por si só, ação humana.",
      D: "Processos lentos e eventos abruptos convivem; a cicatriz é movimento de massa pela gravidade; e uma área que acumula sedimentos é planície.",
      E: "Correta: separa intemperismo, erosão, movimento de massa, transporte e sedimentação, classifica a planície pela acumulação e reconhece tempos diferentes.",
    },
  },

  missionCheck:
    "Voltemos à pergunta da aula: o que nesta paisagem levou milhões de anos para se formar — e o que pode mudar numa única estação chuvosa? Agora você consegue partir de uma forma e chegar ao processo, ao agente e à escala de tempo, sem confundir intemperismo, erosão, transporte, sedimentação e movimentos de massa?",

  completionMessage:
    "A paisagem não é um cenário pronto: é um processo em curso, com tempos diferentes. Na próxima aula, você vai seguir o caminho do material que a água leva: onde começa e onde termina um problema?",
};
