import type { LessonContent } from "@/lib/types";

/**
 * AULA 25 — FRONTEIRAS, LIMITES E TERRITÓRIOS
 * Semana 09 • Geografia Essencial (ENTENDA) — FRONTEIRAS, FLUXOS E PERTENCIMENTO
 *
 * Pergunta-guia (abre e fecha a aula): "O que uma mesma fronteira faz com
 * fluxos diferentes?" Operação: LINHA → ZONA → FUNÇÃO → FILTRO → ESCALA.
 * Ferramenta: "Leia uma fronteira em cinco passos" (`application`).
 * Cinco lentes: linha e zona; soberania em funcionamento; zona de
 * interação; filtro seletivo; escala do controle. Pergunta integradora da
 * semana: "O que decide quem atravessa, quem permanece e quem pertence a um
 * território?"
 * Progressão: Aula 23 (o divisor de águas, linha produzida pelo relevo) →
 * Aula 25 (o limite político, linha produzida por normas). Retomada da
 * Aula 03 sem redefinir Estado, país, nação ou soberania: "fronteira" lá
 * foi usada também no sentido da linha; aqui se distingue a linha jurídica
 * da zona fronteiriça.
 * LIMITES: a aula analisa a fronteira, não a trajetória de quem a atravessa
 * (migração, refúgio, diáspora e rotas: Aula 26) nem o status e o
 * pertencimento (nacionalidade, apatridia, cidadania da UE: Aula 27). O
 * documento de morador fronteiriço aparece só como regra de filtro.
 * Tarumã, Albor, Salgueiro, Santa Corvina, Rio Itaúba e Ponte Itaúba são
 * fictícios.
 *
 * IMAGEM PLANEJADA (ainda não existe; o site mostra o placeholder):
 * /public/assets/aulas/semana-09-aula-25-ponte.png, proporção 16:9.
 *
 * FONTES (conferidas em 14/11/2026):
 *   • Faixa de fronteira: Constituição Federal, art. 20, §2º: faixa de até
 *     150 km de largura ao longo das fronteiras terrestres; o IBGE a
 *     representa no interior do território nacional, paralela à linha
 *     divisória terrestre (Municípios da Faixa de Fronteira).
 *   • Cidades-gêmeas: Portaria MDR nº 2.507, de 5/10/2021 (revogou a
 *     Portaria MI nº 213/2016 e a Portaria MDR nº 1.080/2019): municípios
 *     cortados pela linha de fronteira, seca ou fluvial, com grande
 *     potencial de integração econômica e cultural com localidade do país
 *     vizinho. Texto da aula em síntese, sem reprodução literal.
 *   • Foz do Iguaçu: Ponte da Amizade liga Brasil e Paraguai; a Alfândega
 *     de Foz do Iguaçu atua nesse ponto; Foz é cidade-gêmea de Ciudad del
 *     Este e de Puerto Iguazú (fontes oficiais brasileiras).
 *   • San Diego × Tijuana: U.S. General Services Administration, fato
 *     sobre Otay Mesa (2024): San Ysidro é porto de entrada não comercial;
 *     Otay Mesa, a leste, processa caminhões comerciais,
 *     veículos particulares e pedestres. CBP: San Ysidro com instalação para
 *     pedestres e faixas para veículos. Sem números de travessias.
 *   • Schengen: Conselho da UE e Comissão Europeia (situação em 2026):
 *     29 países, 25 da UE e 4 da EFTA; Bulgária e Romênia membros plenos
 *     desde 1/1/2025; controles internos ainda não abolidos em Chipre;
 *     Irlanda fora; controles sistemáticos de pessoas nas fronteiras
 *     internas abolidos em regra, com regras comuns para as externas;
 *     reintrodução temporária possível. A aula não lista países.
 *
 * Aula em preparação (`course.ts` ainda não cadastra a Semana 09).
 */
export const aula25Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de olhar para uma fronteira e analisar o que ela faz: separar a linha da zona, reconhecer como cada fluxo é filtrado e identificar em que escala as regras são decididas.",

  observation: {
    title: "O OLHAR DO PACO",
    lines: [
      "Tarumã e Albor são países fictícios separados pelo Rio Itaúba. Na margem de Tarumã fica a cidade de Salgueiro; na de Albor, Santa Corvina. A Ponte Itaúba liga as duas. Numa mesma manhã, uma enfermeira que mora em Salgueiro atravessa para trabalhar em Santa Corvina, mostrando seu documento de morador fronteiriço. Um caminhão de grãos para na aduana. Um turista apresenta seu documento de identidade. Estudantes seguem para a escola do outro lado, e uma família vai almoçar com parentes na outra margem. As lojas de Santa Corvina recebem clientes de Salgueiro, mas as compras levadas de volta podem estar sujeitas a regras tributárias.",
      "Antes de julgar se essa fronteira é boa ou ruim, observe o que ela faz com cada um.",
    ],
    image: {
      src: "/assets/aulas/semana-09-aula-25-ponte.png",
      alt: "Cenário fictício: o Rio Itaúba separa Salgueiro, em Tarumã, de Santa Corvina, em Albor, e a Ponte Itaúba liga as duas cidades. Na ponte, uma enfermeira a pé, estudantes, uma família, um turista e um caminhão de grãos; numa das cabeceiras, um posto de controle e uma área de aduana para cargas.",
      caption: "Cenário fictício criado para fins didáticos.",
    },
    questions: [
      "A ponte é a mesma para todos. Por que cada um a atravessa de um jeito?",
      "Onde exatamente termina Tarumã e começa Albor?",
      "O que acontece nas duas cidades por causa da ponte?",
      "O que é conferido na enfermeira, no turista e no caminhão?",
      "O que uma mesma fronteira faz com fluxos diferentes?",
    ],
    closing: "GUARDE SUAS RESPOSTAS. VAMOS VOLTAR À PONTE ITAÚBA EM CADA ETAPA DA AULA.",
  },

  connection: {
    title: "DA LINHA NATURAL À LINHA POLÍTICA",
    flow: ["Divisor de águas", "Limite político", "Regras", "Funções"],
    highlight:
      "O limite político é produzido por normas; o que ele separa, permite ou controla depende de regras.",
    text: "Na Aula 23, o divisor de águas era uma linha produzida pelo relevo, que separava sistemas de drenagem. Agora a linha é outra. Na Aula 03, você aprendeu quem controla o território; agora vamos observar como esse controle funciona na borda. Até aqui usamos “fronteira” também no sentido da linha de separação. Nesta aula, vamos distinguir a linha jurídica da zona fronteiriça. “O que uma mesma fronteira faz com fluxos diferentes?”",
  },

  lenses: {
    eyebrow: "Cinco lentes para ler uma fronteira",
    title: "O QUE ESTA FRONTEIRA FAZ?",
    subtitle:
      "Cinco conceitos mostram o funcionamento da fronteira. Logo abaixo, cinco passos ajudam a aplicá-los a mapas, fotos e notícias.",
    items: [
      {
        id: "linha-zona",
        emoji: "📏",
        name: "LINHA E ZONA",
        question: "Onde está a linha, e até onde vai o espaço em que ela pesa?",
      },
      {
        id: "soberania",
        emoji: "🛂",
        name: "SOBERANIA EM FUNCIONAMENTO",
        question: "Como o controle do Estado aparece na prática, na borda?",
      },
      {
        id: "interacao",
        emoji: "🤝",
        name: "ZONA DE INTERAÇÃO",
        question: "O que a vida cotidiana faz atravessar a fronteira?",
      },
      {
        id: "filtro",
        emoji: "🔀",
        name: "FILTRO SELETIVO",
        question: "Que regra se aplica a cada coisa que atravessa?",
      },
      {
        id: "escala",
        emoji: "🌐",
        name: "ESCALA DO CONTROLE",
        question: "Quem decide a regra: a cidade, o Estado ou um bloco?",
      },
    ],
    highlight:
      "Uma fronteira não é simplesmente muro ou ausência de muro: ela funciona como filtro, com regras diferentes para fluxos diferentes.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "LEIA UMA FRONTEIRA EM CINCO PASSOS",
    context:
      "Os passos servem para mapas, fotografias, notícias, postos fronteiriços, muros, pontes e mapas de blocos. Aqui, aplicados à Ponte Itaúba.",
    flow: [
      "Onde está a linha?",
      "Até onde vai a zona?",
      "Quais fluxos atravessam?",
      "Que regra filtra cada fluxo?",
      "Em que escala a regra é decidida?",
    ],
    question: "O que esta fronteira faz, e com quem?",
    accordions: [
      {
        id: "linha-zona",
        title: "A LINHA E A ZONA: OS DOIS PRIMEIROS PASSOS",
        content:
          "A linha passa pelo Rio Itaúba e foi estabelecida pelos dois Estados. A zona vai além dela: Salgueiro e Santa Corvina vivem da ponte, com trabalho, escola, comércio e família dos dois lados.",
      },
      {
        id: "fluxos-regras",
        title: "OS FLUXOS E AS REGRAS: O TERCEIRO E O QUARTO",
        content:
          "Atravessam pessoas e mercadorias. A enfermeira usa o documento de morador fronteiriço; o turista, um documento de identidade; o caminhão passa pela aduana; as compras podem pagar tributo.",
      },
      {
        id: "escala",
        title: "A ESCALA: O QUINTO PASSO",
        content:
          "Algumas regras são de cada país, como a aduana; outras podem vir de acordos entre os dois ou de um bloco regional. Saber quem decide ajuda a entender o que pode mudar.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "Na Ponte Itaúba, você viu que a mesma linha não trata todos da mesma forma. Agora, os cinco conceitos.",
      "Guarde uma regra: antes de dizer se uma fronteira está aberta ou fechada, pergunte o que ela faz com cada fluxo.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "linha-zona",
        name: "LINHA E ZONA",
        conceito:
          "Nesta leitura político-geográfica, vamos distinguir o limite como a linha jurídico-cartográfica que demarca a soberania e a fronteira como o espaço mais amplo de interação, circulação e controle relacionado a essa linha, onde também há contato e conflito. No Brasil, a Constituição define ainda uma faixa de fronteira de até 150 km de largura ao longo das fronteiras terrestres, que o IBGE representa no interior do território nacional, paralela à linha divisória.",
        penseAssim:
          "Pergunte: estou falando da linha que aparece no mapa ou do espaço vivido em torno dela?",
        exemplo:
          "O limite entre Tarumã e Albor passa pelo Rio Itaúba; a fronteira inclui Salgueiro, Santa Corvina e a ponte que as une.",
        naoConfunda:
          "Nesta aula, limite não é o mesmo que fronteira, e nenhum dos dois é o mesmo que faixa de fronteira: a linha política não é uma faixa territorial. É uma distinção analítica, útil para interpretar o funcionamento do território.",
        naProva:
          "Mapas de limites pedem que você separe a linha da zona em que ela produz efeitos.",
      },
      {
        id: "soberania",
        name: "SOBERANIA EM FUNCIONAMENTO",
        conceito:
          "Na borda, a soberania aparece em ações concretas: exigência de documentos, fiscalização, aduana, tributação e regras de entrada e saída. Controles de entrada também podem ocorrer em aeroportos, e algumas exigências documentais podem operar antes mesmo da chegada ao limite territorial.",
        penseAssim:
          "Pergunte: que órgão, documento ou regra mostra que um Estado está exercendo controle aqui?",
        exemplo:
          "Na Ponte Itaúba, a aduana de Albor inspeciona o caminhão, e o turista mostra o documento ao entrar.",
        naoConfunda:
          "O controle não acontece só sobre a linha: ele pode ocorrer num aeroporto no meio do território ou numa exigência feita antes da viagem.",
        naProva:
          "Fotografias de postos e notícias sobre novas exigências pedem que você identifique qual controle está sendo exercido e por quem.",
      },
      {
        id: "interacao",
        name: "ZONA DE INTERAÇÃO",
        conceito:
          "A fronteira também é espaço de vida cotidiana: trabalho, estudo, comércio, serviços e vínculos familiares atravessam o limite. No Brasil, cidades-gêmeas são municípios cortados pela linha de fronteira, seca ou fluvial, com grande potencial de integração econômica e cultural com uma localidade do país vizinho, segundo portaria do Ministério da Integração e do Desenvolvimento Regional.",
        penseAssim:
          "Pergunte: o que as pessoas das duas margens fazem do outro lado, e o que as faz atravessar?",
        exemplo:
          "Salgueiro e Santa Corvina se comportam como cidades-gêmeas: a enfermeira trabalha de um lado e mora do outro, e as lojas atendem clientes das duas margens.",
        naoConfunda:
          "Interação não é ausência de assimetrias ou controles: diferenças de preço, salário e regra entre os dois lados alimentam a interação, e os controles continuam existindo.",
        naProva:
          "Mapas de cidades-gêmeas pedem que você reconheça a integração transfronteiriça sem tratar os dois países como espaços isolados.",
      },
      {
        id: "filtro",
        name: "FILTRO SELETIVO",
        conceito:
          "Pessoas, mercadorias, serviços e capitais atravessam fronteiras sob regras diferentes: documentos, impostos, inspeções, horários, limites e autorizações. Por isso, fronteiras têm graus e modalidades de permeabilidade, em vez de estarem simplesmente abertas ou fechadas.",
        penseAssim:
          "Pergunte, para cada fluxo: o que é exigido, o que é cobrado e o que é inspecionado?",
        exemplo:
          "A enfermeira passa com o documento de morador fronteiriço; o caminhão passa pela aduana; as compras podem pagar tributo.",
        naoConfunda:
          "Controle não é bloqueio total: uma fronteira pode controlar intensamente um fluxo e facilitar outro ao mesmo tempo.",
        naProva:
          "Notícias sobre uma nova regra pedem que você identifique qual fluxo foi afetado e qual continua como antes.",
      },
      {
        id: "escala",
        name: "ESCALA DO CONTROLE",
        conceito:
          "As regras de uma fronteira podem ser decididas em escalas diferentes: por cada Estado, por acordos entre países vizinhos ou por um bloco regional. A integração pode deslocar a escala de parte do controle sem eliminar a soberania dos Estados.",
        penseAssim:
          "Pergunte: esta regra é de um país, de um acordo entre dois países ou de um bloco?",
        exemplo:
          "Um bloco pode facilitar a circulação de pessoas entre os seus membros enquanto cada país mantém suas regras aduaneiras.",
        naoConfunda:
          "Integração regional não é o desaparecimento das fronteiras. E o Espaço Schengen não é o mesmo que a União Europeia.",
        naProva:
          "Mapas de blocos pedem que você distinga as fronteiras internas das externas e quem decide em cada uma.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "mesma-linha",
        title: "A mesma linha, regras diferentes",
        content:
          "Uma fronteira raramente trata tudo da mesma forma. Pessoas apresentam documentos; mercadorias passam por aduana e podem pagar tributos; alguns produtos exigem inspeções específicas; certas passagens só funcionam em determinados horários. Por isso, perguntar se uma fronteira está aberta ou fechada costuma ser pouco preciso. A pergunta mais útil é: o que ela facilita, o que ela controla e o que ela restringe?",
        flow: ["Pessoas", "Mercadorias", "Serviços", "Capitais", "Regras diferentes"],
        highlight: "Fronteira é filtro: a permeabilidade varia conforme o fluxo.",
      },
      {
        id: "cotidiano",
        title: "Quando a fronteira faz parte do cotidiano",
        content:
          "Em muitas cidades fronteiriças, atravessar faz parte da rotina: trabalhar, estudar, comprar, usar um serviço ou visitar a família do outro lado. Essa interação não apaga as diferenças. Moedas, preços, salários, leis e serviços continuam diferentes de cada lado, e são justamente essas diferenças que movimentam boa parte da circulação. A zona fronteiriça é, ao mesmo tempo, espaço de contato e de controle.",
        flow: ["Trabalho", "Estudo", "Compras", "Serviços", "Família"],
        highlight: "Interagir não é deixar de ter fronteira.",
      },
      {
        id: "escala",
        title: "Quando o controle muda de escala",
        content:
          "A integração regional pode mudar onde e por quem o controle é feito. No Espaço Schengen, os controles sistemáticos de pessoas nas fronteiras internas foram abolidos em regra, enquanto há regras comuns e coordenação dos controles nas fronteiras externas. Os países podem reintroduzir temporariamente controles internos em determinadas circunstâncias. E Schengen não coincide com a União Europeia: há membros da União fora dele e países de fora da União dentro dele.",
        flow: ["Fronteira interna", "Fronteira externa", "Regras comuns", "Soberania mantida"],
        highlight: "A integração desloca a escala do controle; não elimina a soberania.",
      },
    ],
    closing:
      "Nesta aula, as pessoas apareceram atravessando a ponte. Na Aula 26, a pergunta muda de lugar: em vez da fronteira, a trajetória de quem se desloca.",
  },

  brazilConnections: {
    title: "E O BRASIL? E O MUNDO?",
    question: "Onde uma mesma fronteira trata fluxos de modos diferentes?",
    center: "FRONTEIRAS",
    items: [
      {
        id: "foz",
        label: "FOZ DO IGUAÇU × CIUDAD DEL ESTE: ZONA DE INTERAÇÃO",
        description:
          "A Ponte da Amizade liga o Brasil e o Paraguai, e a Alfândega de Foz do Iguaçu atua nesse ponto. Foz do Iguaçu é cidade-gêmea de Ciudad del Este e de Puerto Iguazú, na tríplice fronteira com a Argentina. Pela ponte circulam moradores, turistas, compradores e mercadorias, cada fluxo com suas regras. A fronteira é, ao mesmo tempo, espaço de encontro cotidiano e de controle aduaneiro.",
      },
      {
        id: "san-diego",
        label: "SAN DIEGO × TIJUANA: BARREIRA E FLUXOS DIFERENCIADOS",
        description:
          "Entre San Diego, nos Estados Unidos, e Tijuana, no México, há cercas e controles, e também travessias autorizadas intensas. Os próprios portos de entrada se especializam: segundo o governo dos Estados Unidos, San Ysidro é um porto de entrada não comercial, para pedestres e veículos particulares, enquanto Otay Mesa, a leste, também processa caminhões de carga. Barreira e controle coexistem com fluxos intensos e diferenciados.",
      },
      {
        id: "schengen",
        label: "ESPAÇO SCHENGEN: O CONTROLE MUDA DE ESCALA",
        description:
          "Segundo o Conselho da União Europeia, em 2026 o Espaço Schengen reúne 29 países: 25 da União Europeia e 4 que não fazem parte dela. Entre eles, os controles sistemáticos de pessoas nas fronteiras internas foram abolidos em regra, e há regras comuns para as fronteiras externas. Controles internos podem ser reintroduzidos temporariamente.",
      },
    ],
    study:
      "Cada cartão prova uma lente: Foz do Iguaçu, a fronteira como zona de interação; San Diego e Tijuana, a fronteira como filtro seletivo; Schengen, a mudança de escala do controle.",
    highlight:
      "Em nenhum dos três casos a fronteira está simplesmente aberta ou fechada: ela filtra.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Mapa de limites",
      "Foto de posto, ponte ou muro",
      "Mapa de cidades-gêmeas",
      "Mapa de bloco ou de Schengen",
      "Mapa histórico",
      "Notícia de nova regra",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Separar linha e zona",
      "Identificar o que é filtrado",
      "Ler a integração transfronteiriça",
      "Reconhecer a escala do controle",
    ],
    highlight:
      "A prova raramente pede a definição de fronteira. Ela mostra uma fronteira funcionando e quer ver você explicar o que ela faz com cada fluxo.",
    guidingIntro: "Material → operação → armadilha:",
    guidingQuestions: [
      "Mapa de limites → distinga a linha da zona. Armadilha: limite = fronteira.",
      "Foto de posto, ponte ou muro → identifique o que é filtrado e o que continua circulando. Armadilha: controle = bloqueio total.",
      "Mapa de cidades-gêmeas → interprete a interação transfronteiriça. Armadilha: dois Estados = dois espaços isolados.",
      "Mapa de bloco ou de Schengen → interprete a escala do controle. Armadilhas: integração = fim da fronteira; Schengen = União Europeia.",
      "Mapa histórico → reconstrua quando e por quem o limite foi estabelecido. Armadilha: linha política = elemento natural.",
      "Notícia de nova regra → identifique qual fluxo foi afetado. Armadilha: a mesma regra vale igualmente para tudo.",
    ],
  },

  question: {
    id: "s09-a25-q01",
    statement:
      "Tarumã e Albor são países fictícios separados pelo Rio Itaúba. Salgueiro, em Tarumã, e Santa Corvina, em Albor, ficam em margens opostas e estão ligadas pela Ponte Itaúba. Os dois países integram um bloco regional fictício que facilita a circulação de pessoas entre seus membros, mas cada país mantém as próprias regras aduaneiras. Todas as manhãs, uma enfermeira que mora em Salgueiro atravessa a ponte para trabalhar em Santa Corvina usando o documento de morador fronteiriço; turistas apresentam documento de identidade; caminhões de grãos passam pela aduana. No mês passado, Albor passou a exigir, num novo posto aduaneiro, a inspeção obrigatória de todas as cargas que entram pela ponte. A circulação dos moradores fronteiriços continuou como antes. A leitura mais adequada é que",
    options: [
      {
        id: "A",
        text: "o rio funciona ao mesmo tempo como limite e como fronteira, já que a zona fronteiriça se resume à linha em que o controle é exercido; a nova inspeção mostra que Albor reforçou sua soberania sobre a ponte, enquanto o bloco segue facilitando a circulação de pessoas entre os dois países.",
      },
      {
        id: "B",
        text: "a facilitação da circulação de pessoas pelo bloco indica que as regras de passagem na ponte são comuns aos dois países; por isso, a inspeção criada por Albor contraria a integração, pois, dentro de um bloco regional, a aduana sobre as cargas deixa de ser decisão soberana de cada Estado membro.",
      },
      {
        id: "C",
        text: "a travessia diária da enfermeira mostra que Salgueiro e Santa Corvina já formam um espaço sem controle estatal na ponte; a nova inspeção, aplicada às cargas, tende a ter efeito só formal, pois uma fronteira de intensa interação perde a função de filtro entre as duas margens do rio.",
      },
      {
        id: "D",
        text: "o rio marca o limite entre os dois países, mas Salgueiro e Santa Corvina formam uma zona de interação; a nova inspeção é um controle que filtra as cargas sem impedir a passagem dos moradores, e o bloco facilita a circulação de pessoas sem que a aduana deixe de ser decidida por cada país.",
      },
      {
        id: "E",
        text: "a inspeção de todas as cargas faz a ponte deixar de ser zona de interação e passar a separar Salgueiro de Santa Corvina; como o controle se concentra na linha do rio, o bloco regional deixa de influir na passagem, e o cotidiano dos moradores tende a se reorganizar separadamente de cada lado.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "A alternativa D está correta porque lê o funcionamento da fronteira em todas as suas dimensões. 1. LINHA E ZONA: o rio marca o limite entre Tarumã e Albor, mas a fronteira é a zona em torno dele, onde Salgueiro e Santa Corvina interagem todos os dias. 2. FILTRO: a nova inspeção atinge as cargas, enquanto a enfermeira e os demais moradores fronteiriços continuam atravessando como antes; fluxos diferentes enfrentam regras diferentes. 3. CONTROLE ≠ BLOQUEIO: inspecionar todas as cargas é um controle mais intenso sobre um fluxo, não o fechamento da ponte. 4. ESCALA: o bloco facilita a circulação de pessoas, mas cada país mantém suas regras aduaneiras; a integração muda a escala de parte do controle sem eliminar a soberania. A confunde limite e fronteira e reduz a zona fronteiriça à linha de controle. B supõe que a integração elimina a decisão de cada país sobre a aduana. C trata a interação cotidiana como ausência de controle estatal. E trata o controle sobre as cargas como bloqueio da ponte e desconsidera o papel do bloco na circulação de pessoas.",
    optionFeedback: {
      A: "Limite e fronteira não são a mesma coisa: o limite é a linha do rio; a fronteira é a zona em que Salgueiro e Santa Corvina interagem, e não se resume ao ponto de controle.",
      B: "O bloco facilita a circulação de pessoas, mas o cenário diz que cada país mantém suas regras aduaneiras: a integração não elimina a soberania sobre as cargas.",
      C: "Interação não é ausência de controle: a aduana e a nova inspeção mostram que a fronteira continua filtrando, mesmo com intensa circulação cotidiana.",
      D: "Correta: separa linha e zona, reconhece que cada fluxo tem sua regra, que controle não é bloqueio e que a aduana segue nacional dentro do bloco.",
      E: "Inspecionar as cargas não bloqueia a ponte: os moradores fronteiriços continuam atravessando como antes, e o bloco segue facilitando a circulação de pessoas.",
    },
  },

  missionCheck:
    "Voltemos à pergunta da aula: o que uma mesma fronteira faz com fluxos diferentes? Agora você consegue separar a linha da zona, reconhecer como cada fluxo é filtrado e dizer em que escala a regra é decidida?",

  completionMessage:
    "Uma fronteira não é só uma linha nem só um muro: é uma zona que filtra fluxos de modos diferentes, sob regras decididas em escalas diferentes. Na próxima aula, a atenção sai da fronteira e vai para quem a atravessa: de onde vem, por onde passa e o que encontra no caminho.",
};
