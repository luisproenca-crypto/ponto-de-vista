import type { LessonContent } from "@/lib/types";

/**
 * AULA 04 — CARTOGRAFIA SEM TRAUMA
 * Semana 02 • Geografia Essencial
 *
 * Ideia central: todo mapa é uma escolha — uma representação seletiva da
 * realidade.
 *
 * Título, subtítulo, descrição, vídeo e status ficam em `src/data/course.ts`
 * (metadados da aula). Este arquivo guarda somente o conteúdo pedagógico.
 *
 * Rascunho editorial para revisão do Prof. Luis — altere apenas os textos
 * deste arquivo; nenhum componente precisa ser modificado. Os exemplos
 * numéricos são ilustrativos (não representam dados reais).
 *
 * Esta aula ainda não está publicada em `src/data/course.ts`.
 */
export const aula04Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de ler um mapa com critério: reconhecer seus elementos, interpretar a escala, localizar pontos e perceber que todo mapa é uma representação seletiva da realidade — uma escolha.",

  observation: {
    title: "O OLHAR DO PACO",
    lines: [
      "Antes que eu explique qualquer coisa, observe este mapa.",
      "Não procure o erro nem a resposta certa. O objetivo agora é perceber o que ele escolheu mostrar.",
    ],
    // Mapa de Nova Aurora em versão 16:9 (margens em creme, mapa intacto):
    // o `AssetImage` usa moldura 16:9 com corte, e a versão original 4:3
    // perderia título e coordenadas. `LookAgain` reaproveita esta imagem
    // (page.tsx passa `observation.image`), então uma única edição serve
    // às duas seções da aula.
    image: {
      src: "/assets/checkpoints/semana-02-nova-aurora-16x9.png",
      alt: "Mapa da República de Nova Aurora, país fictício, com legenda, altimetria, escala 1:2.000.000 e coordenadas geográficas nas bordas. Mostra Aurora Central, Porto de Solaris, Vale Claro (reserva mineral), Serra de Aruna, o Território Tradicional de Aruá, o Rio Esperança e as rotas ferroviárias A e B.",
    },
    questions: [
      "O que este mapa está mostrando?",
      "Como ele mostra isso — com que cores, símbolos e escala?",
      "O que ficou de fora?",
      "Você consegue identificar título, legenda, escala, orientação, fonte e data — ou algum desses elementos está faltando?",
      "Quem produziu este mapa, e para quê?",
    ],
    closing: "GUARDE SUAS RESPOSTAS. VOLTAREMOS A ESTE MAPA NO FINAL DA AULA.",
  },

  lenses: {
    eyebrow: "As cinco lentes do mapa",
    title: "LEIA O MAPA COM CINCO PERGUNTAS",
    subtitle:
      "Observar é o começo. Agora vamos transformar percepções em critérios de leitura.",
    items: [
      {
        id: "titulo",
        emoji: "🏷️",
        name: "TÍTULO",
        question: "O que está sendo representado?",
      },
      {
        id: "legenda",
        emoji: "🔑",
        name: "LEGENDA",
        question: "Como interpretar cores, símbolos e padrões?",
      },
      {
        id: "escala",
        emoji: "📏",
        name: "ESCALA",
        question: "Quanto a realidade foi reduzida?",
      },
      {
        id: "orientacao-localizacao",
        emoji: "🧭",
        name: "ORIENTAÇÃO E LOCALIZAÇÃO",
        question: "Onde estamos e como o espaço está orientado?",
      },
      {
        id: "fonte-data",
        emoji: "🗓️",
        name: "FONTE E DATA",
        question: "Segundo quem? Quando?",
      },
    ],
    highlight:
      "Todo mapa é uma escolha. Ler um mapa é perguntar: o que foi mostrado, como foi mostrado e o que ficou de fora?",
    image: null,
    hideImage: true,
  },

  lookAgain: {
    title: "AGORA OLHE DE NOVO",
    intro: "O mapa é o mesmo. Suas perguntas não deveriam ser.",
    items: [
      {
        id: "titulo",
        name: "TÍTULO",
        question:
          "O título deixa claro o que está sendo representado e qual é o recorte?",
      },
      {
        id: "legenda",
        name: "LEGENDA",
        question: "Que informação eu perderia se a legenda não existisse?",
      },
      {
        id: "escala",
        name: "ESCALA",
        question: "Quanto detalhe posso esperar de um mapa nessa escala?",
      },
      {
        id: "orientacao-localizacao",
        name: "ORIENTAÇÃO E LOCALIZAÇÃO",
        question:
          "Como o espaço está orientado e como posso localizar um ponto?",
      },
      {
        id: "fonte-data",
        name: "FONTE E DATA",
        question: "Quem produziu os dados e a que momento eles se referem?",
      },
    ],
    closingQuote:
      "A Cartografia começa quando deixamos de perguntar apenas “onde fica?” e começamos a perguntar: “O que foi mostrado? Como foi mostrado? O que ficou de fora?”",
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR A LEITURA",
    paragraphs: [
      "Você já observou o mapa e já conheceu as cinco lentes que ajudam a lê-lo.",
      "Agora chegou o momento de entender com precisão cada uma delas — e também as projeções cartográficas — e de aprender a reconhecer o que uma questão de vestibular pede que você faça com um mapa.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO À LEITURA DO MAPA",
    items: [
      {
        id: "titulo",
        name: "TÍTULO",
        conceito:
          "O título informa o que o mapa representa: o tema, a área e, muitas vezes, o período. Ele indica o recorte escolhido por quem produziu o mapa. Todo mapa é uma representação seletiva da realidade: escolhe um tema, uma área e uma finalidade, e deixa outras informações de fora.",
        penseAssim:
          "Imagine que você precise mostrar sua cidade a um turista e, depois, a um engenheiro que vai planejar uma rede de esgoto. Você não desenharia o mesmo mapa: o turista precisa de pontos de visitação; o engenheiro, de relevo, ruas e redes. O lugar é o mesmo; a finalidade muda o que entra no mapa.",
        exemplo:
          "Um mapa rodoviário, um mapa de vegetação e um mapa de densidade demográfica podem representar o mesmo país, mas respondem a perguntas diferentes.",
        naoConfunda:
          "Um mapa não é “a verdade” do território, nem é falso só porque deixa coisas de fora: todo mapa precisa omitir informações para ser legível. Também não confunda título com legenda: o título diz o que está sendo representado; a legenda ensina a interpretar os símbolos.",
        naProva:
          "Fique atento a enunciados que pedem para reconhecer o tema de um mapa, comparar dois mapas da mesma área ou identificar o que determinada representação destaca ou omite. Expressões como “mapa temático”, “recorte” e “finalidade do mapa” indicam essa leitura.",
      },
      {
        id: "legenda",
        name: "LEGENDA",
        conceito:
          "A legenda é a chave de leitura do mapa: ela explica o significado dos símbolos, das cores, das linhas e dos padrões usados na representação. Ela responde: como interpretar cores, símbolos e padrões?",
        penseAssim:
          "Pense em um mapa com áreas em tons de verde cada vez mais escuros. Sem a legenda, você não sabe se o verde escuro indica mais floresta, maior renda, mais chuva ou mais habitantes. O mesmo desenho pode significar coisas totalmente diferentes.",
        exemplo:
          "Em um mapa de densidade demográfica, cores mais escuras costumam indicar mais habitantes por quilômetro quadrado. Mas os intervalos escolhidos — por exemplo, de 0 a 10, de 10 a 100 e acima de 100 (valores ilustrativos) — podem fazer uma mesma realidade parecer mais ou menos desigual.",
        naoConfunda:
          "Legenda não é enfeite nem detalhe secundário. E lembre-se de que a escolha das cores e dos intervalos também é uma decisão de quem produz o mapa: ela influencia o que o leitor percebe.",
        naProva:
          "Muitas questões só podem ser resolvidas se você ler a legenda com atenção: cores parecidas com significados diferentes, símbolos invertidos e intervalos numéricos são pegadinhas frequentes. Antes de interpretar qualquer mapa, leia título, legenda, fonte e data.",
      },
      {
        id: "escala",
        name: "ESCALA",
        conceito:
          "Escala é a relação entre uma distância no mapa e a distância correspondente na realidade: ela mostra quanto a realidade foi reduzida. Pode ser numérica (como 1:100.000), gráfica (uma barra graduada) ou escrita por extenso. Na escala 1:100.000, 1 cm no mapa corresponde a 100.000 cm no terreno — ou seja, a 1 km.",
        penseAssim:
          "Pense em uma foto de um estádio: de perto, você vê as pessoas nas arquibancadas; de longe, vê o estádio inteiro, mas sem detalhes. Com os mapas acontece o mesmo: quanto mais detalhe você quer, menor é a área que cabe na folha.",
        exemplo:
          "Em um mapa na escala 1:50.000, uma distância de 4 cm corresponde a 200.000 cm, isto é, 2 km. Já em um mapa na escala 1:5.000.000, os mesmos 4 cm representariam 200 km. A escala 1:50.000 é maior e mostra mais detalhes de uma área menor; a 1:5.000.000 é menor e mostra menos detalhes de uma área maior.",
        naoConfunda:
          "Escala grande não significa área grande — é o contrário. Escala grande: menor área representada e maior detalhamento (por exemplo, 1:1.000). Escala pequena: maior área representada e menor detalhamento (por exemplo, 1:10.000.000). Quanto menor o denominador, maior a escala.",
        naProva:
          "Fique atento a questões que pedem para calcular distâncias reais, comparar mapas de escalas diferentes ou identificar qual deles mostra mais detalhes. A pegadinha clássica é trocar “escala grande” por “área grande”. Antes de calcular, converta as unidades: centímetros em quilômetros.",
      },
      {
        id: "orientacao-localizacao",
        name: "ORIENTAÇÃO E LOCALIZAÇÃO",
        conceito:
          "Orientação indica como o espaço representado está posicionado em relação aos pontos cardeais, geralmente por meio de uma rosa dos ventos ou de uma seta que aponta o norte. Localização é a determinação da posição de um ponto: pode ser feita por referências (como ruas e pontos conhecidos) ou por coordenadas geográficas. Paralelos e meridianos são linhas imaginárias de referência. Latitude e longitude são medidas angulares utilizadas para indicar a posição de um ponto na superfície terrestre: a latitude é a medida angular em relação à Linha do Equador (de 0° a 90°, ao norte ou ao sul), e a longitude é a medida angular em relação ao Meridiano de Greenwich (de 0° a 180°, a leste ou a oeste).",
        penseAssim:
          "Pense em um jogo de batalha naval: para indicar uma posição, você precisa de duas informações, linha e coluna. Nas coordenadas geográficas, latitude e longitude cumprem esse papel, tendo como referência as linhas imaginárias do Equador e de Greenwich.",
        exemplo:
          "Em um mapa com uma seta indicando o norte, é possível saber para onde o espaço está orientado. Se o mapa trouxer também linhas de coordenadas, um ponto pode ser localizado informando sua latitude e sua longitude — por exemplo, 10° N e 20° L (valores ilustrativos).",
        naoConfunda:
          "O norte no topo é uma convenção frequente, não uma regra universal: o que importa é identificar a orientação indicada no próprio mapa. Também não confunda linhas e medidas: paralelos e meridianos são linhas imaginárias de referência; latitude e longitude são as medidas angulares usadas para indicar a posição de um ponto. E atenção à palavra “angular”: latitude e longitude são medidas em graus, e não em quilômetros.",
        naProva:
          "Fique atento a questões que trazem coordenadas e pedem a localização de um ponto, ou que mostram um mapa com linhas de referência e pedem para identificar o Equador ou o Meridiano de Greenwich. Por convenção, informa-se primeiro a latitude e depois a longitude, e as letras N, S, L e O indicam a direção. Procure sempre a indicação de orientação no próprio mapa — não a suponha.",
      },
      {
        id: "fonte-data",
        name: "FONTE E DATA",
        conceito:
          "Fonte é a origem dos dados e das informações representados no mapa: quem os produziu ou forneceu. Data indica o momento a que os dados se referem ou em que o mapa foi elaborado. Juntas, respondem a duas perguntas: segundo quem? Quando?",
        penseAssim:
          "Pense em uma notícia sem autor nem data: você saberia se ainda vale? Um mapa sem fonte e sem data pede a mesma cautela, porque a realidade muda e diferentes produtores fazem escolhas diferentes.",
        exemplo:
          "Dois mapas do mesmo tema podem mostrar resultados diferentes porque usam fontes diferentes ou datas diferentes. Um mapa que representa a situação de um ano específico pode não descrever a situação atual.",
        naoConfunda:
          "Citar uma fonte não garante, por si só, que o mapa seja neutro ou confiável: a fonte indica a origem, e ainda é preciso avaliar critérios e finalidade. Também não confunda a data de elaboração do mapa com a data a que os dados se referem: podem ser momentos diferentes.",
        naProva:
          "Fique atento a enunciados que trazem a fonte e a data de um mapa ou gráfico: eles ajudam a entender o contexto e a limitar as conclusões possíveis. Uma conclusão sobre o presente pode não se sustentar com dados antigos.",
      },
      {
        id: "projecoes",
        name: "PROJEÇÕES",
        conceito:
          "Projeção cartográfica é o método usado para representar a superfície curva da Terra em um plano. Toda projeção cartográfica produz algum tipo de distorção: como não é possível achatar uma esfera sem deformá-la, cada projeção preserva certas propriedades — como ângulos e formas locais, proporções entre áreas ou, em certas condições, distâncias — e distorce outras. Por isso, a pergunta central é: o que essa projeção preserva, o que ela distorce e para qual finalidade está sendo utilizada?",
        penseAssim:
          "Tente esticar sobre uma mesa a casca inteira de uma laranja sem rasgá-la nem esticá-la: é impossível. Para fazer um mapa plano, alguém precisa decidir onde a casca será rasgada, esticada ou comprimida — e essa decisão define o que ficará mais fiel e o que ficará distorcido.",
        exemplo:
          "A projeção de Mercator é uma projeção conforme: preserva ângulos e formas locais, mas amplia fortemente as áreas em altas latitudes. A projeção de Gall-Peters é uma projeção equivalente: preserva as proporções relativas das áreas, mas deforma as formas. Nenhuma das duas é “certa” ou “errada”: cada uma preserva e distorce coisas diferentes.",
        naoConfunda:
          "Não existe projeção sem distorção, nem uma projeção “verdadeira”: existem projeções mais ou menos adequadas a determinada finalidade. Distorção não é erro do cartógrafo: é consequência de representar uma superfície curva em um plano. E cuidado com as distâncias: certas projeções podem preservá-las apenas em determinadas direções, linhas ou a partir de determinados pontos — nunca de forma universal.",
        naProva:
          "Fique atento a questões que comparam mapas-múndi ou pedem para reconhecer o que uma projeção preserva e o que ela distorce. “Conforme” indica preservação de ângulos e formas locais; “equivalente” indica preservação das proporções de área.",
      },
    ],
  },

  deepDive: {
    title: "APLIQUE A SITUAÇÕES CONCRETAS",
    items: [
      {
        id: "escala-detalhe",
        title: "Qual mapa mostra melhor um bairro?",
        content:
          "Para localizar uma rua, um mapa de escala grande (como 1:5.000) é o mais indicado: mostra muitos detalhes de uma área pequena. Para ver a organização de um continente, um mapa de escala pequena (como 1:50.000.000) é mais adequado: abrange muita área, com pouco detalhe. Não existe mapa “melhor” em geral: existe o mapa adequado à pergunta.",
        highlight: "Escala grande: mais detalhe, menos área.",
      },
      {
        id: "projecao-finalidade",
        title: "Uma projeção para cada finalidade",
        content:
          "Em uma projeção conforme, como a de Mercator, as áreas em altas latitudes aparecem fortemente ampliadas; isso pode dar a impressão de que territórios distantes do Equador são maiores, em comparação com os próximos a ele. Em uma projeção equivalente, como a Gall-Peters, as proporções relativas das áreas são preservadas, mas as formas ficam deformadas. Não se trata de escolher a projeção “certa”, e sim de perguntar para que o mapa será usado.",
        highlight: "O que ela preserva? O que ela distorce? Para quê?",
      },
      {
        id: "mapa-nao-territorio",
        title: "O mapa é o território?",
        content:
          "Um mapa é uma representação: ele seleciona, simplifica e organiza informações. Ler um mapa criticamente é perguntar quem o fez, com quais dados e para qual finalidade.",
        highlight: "Um mapa é um ponto de vista sobre o território.",
        flow: ["Realidade", "Seleção", "Símbolos", "Mapa", "Interpretação"],
      },
      {
        id: "cores-intervalos",
        title: "As cores e os intervalos também comunicam",
        content:
          "Dois mapas com os mesmos dados podem passar impressões diferentes se usarem cores ou intervalos diferentes. Um intervalo que agrupa valores muito distintos na mesma cor pode esconder desigualdades; muitos intervalos podem exagerá-las. Ler o mapa exige olhar também para como os dados foram organizados.",
        highlight: "Conferir a legenda faz parte da interpretação.",
      },
      {
        id: "leitura-critica",
        title: "Três perguntas para qualquer mapa",
        content:
          "A leitura crítica de um mapa cabe em três perguntas: o que foi mostrado, como foi mostrado e o que ficou de fora. Elas valem para um mapa escolar, para um mapa de jornal e para um mapa de prova.",
        highlight: "O que foi mostrado? Como foi mostrado? O que ficou de fora?",
        flow: ["O que foi mostrado?", "Como foi mostrado?", "O que ficou de fora?"],
      },
    ],
    closing:
      "Perceba que essas escolhas não tornam os mapas inúteis: elas os tornam ferramentas que precisam ser lidas com critério.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: ["Mapa", "Título e legenda", "Escala", "Coordenadas"],
    demandsTitle: "A questão cobra",
    demands: [
      "Leitura crítica",
      "Cálculo simples",
      "Localização",
      "Interpretação do recorte",
    ],
    highlight: "A prova raramente pede para decorar um mapa: pede para você lê-lo.",
    guidingIntro: "Diante de qualquer mapa, pergunte:",
    guidingQuestions: [
      "O que está sendo representado (título) e como interpretar as cores e os símbolos (legenda)?",
      "Qual é a escala — e quanto detalhe ela permite?",
      "Como o espaço está orientado e como posso localizar um ponto?",
      "Segundo quem e quando (fonte e data)?",
      "O que essa projeção preserva, o que ela distorce e para qual finalidade está sendo utilizada?",
    ],
  },

  question: {
    id: "s02-a04-q01",
    statement:
      "Dois mapas de uma mesma região foram impressos em folhas do mesmo tamanho: o mapa A, na escala 1:10.000, e o mapa B, na escala 1:1.000.000. Com base na relação entre escala, detalhe e área representada, é correto afirmar que:",
    options: [
      {
        id: "A",
        text: "o mapa B apresenta mais detalhes, pois sua escala é maior.",
      },
      {
        id: "B",
        text: "o mapa A representa uma área maior, pois sua escala é maior.",
      },
      {
        id: "C",
        text: "o mapa A apresenta mais detalhes de uma área menor, pois sua escala é maior.",
      },
      {
        id: "D",
        text: "os dois mapas apresentam o mesmo nível de detalhe, pois representam a mesma região.",
      },
      {
        id: "E",
        text: "o mapa B é mais preciso, pois o denominador de sua escala é maior.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "A alternativa C está correta. Quanto menor o denominador da escala, maior é a escala. Assim, 1:10.000 é uma escala maior do que 1:1.000.000: em folhas do mesmo tamanho, o mapa A mostra uma área menor, porém com mais detalhes, enquanto o mapa B mostra uma área maior, com menos detalhes. As alternativas A e B invertem a relação entre escala, detalhe e área representada; a alternativa D ignora que a escala determina o nível de detalhe possível; e a alternativa E confunde denominador maior com maior precisão, quando na verdade indica escala menor e menos detalhes.",
  },

  missionCheck:
    "Agora você consegue olhar para um mapa e perguntar: “O que foi mostrado? Como foi mostrado? O que ficou de fora?” — e reconhecer sua escala, sua orientação, sua fonte e sua projeção?",

  completionMessage:
    "Você aprendeu que todo mapa é uma escolha — e que ler um mapa é entender as escolhas de quem o fez.",
};
