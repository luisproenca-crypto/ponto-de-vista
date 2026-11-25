import type { LessonContent } from "@/lib/types";

/**
 * AULA 29 — CLASSIFICAR O MUNDO
 * Semana 10 • Geopolítica & Atualidades (CONECTE) — O MUNDO EM RECORTES
 * Linha de apoio da semana: "Regionalizar o mundo".
 *
 * Pergunta-guia (abre e fecha a aula): "Quem agrupa os países, com que
 * critério e para quê?" Operação: QUEM CLASSIFICA → PARA QUÊ → COM QUE
 * CRITÉRIO → QUE GRUPOS → O QUE APROXIMA E ESCONDE → O QUE PODE MUDAR,
 * idêntica à ferramenta "Leia uma classificação em seis passos"
 * (`application`). "O que pode mudar" não é igual para todos os sistemas:
 * o grupo produzido por um indicador; o uso de um rótulo; as regras ou
 * efeitos associados a ele; a interpretação histórica da classificação.
 * Três classificações (Sul Global, grupos de renda do Banco Mundial,
 * autodeclaração na OMC) e uma forma de representação (anamorfose).
 * Centro/semiperiferia/periferia entra só como aprofundamento curto; BRICS
 * só como armadilha de prova, sem lista de membros.
 * Progressão: a Aula 28 leu recortes do espaço brasileiro; a Aula 29 lê
 * classificações de países inteiros.
 * REPETIÇÃO EVITADA: multipolaridade (Aula 02); EUA × China e poder
 * multidimensional (Aula 05); valor agregado e coordenação (Aula 20, só como
 * premissa); IDH (Aula 21); seleção e representação nos mapas (Aula 04, só
 * retomada na anamorfose).
 * FORA DO CONTEÚDO: caso brasileiro de 2019 e anúncio chinês de 2025 sobre
 * tratamento especial na OMC; listas do G77 e do BRICS; limiares monetários
 * do Banco Mundial; IDH; "Terceiro Mundo"; "emergentes".
 * FRONTEIRA COM A AULA 30: sem modelo de resposta discursiva.
 * Cuidados: "Sul Global" não é classificação oficial nem tem lista
 * universal; Norte/Sul não coincide com hemisférios; a Linha Brandt é
 * documento histórico, não fronteira atual; grupo de renda não é
 * desenvolvimento em todas as dimensões; autodeclaração na OMC não garante
 * acesso automático a todo benefício.
 * País da questão (Corália) é fictício; o banco multilateral e a
 * organização de comércio da questão são genéricos e seguem regras
 * fictícias escritas no enunciado.
 *
 * IMAGEM PLANEJADA (ainda não existe; o site mostra o placeholder):
 * /public/assets/aulas/semana-10-aula-29-classificacoes.png, proporção 16:9.
 *
 * FONTES (verificadas em novembro de 2026):
 *   • Banco Mundial, World Bank Country and Lending Groups: quatro grupos
 *     (renda baixa, média-baixa, média-alta e alta), pela renda nacional
 *     bruta (RNB) per capita, método Atlas, com limiares atualizados
 *     anualmente. Brasil = upper-middle-income economy no ano fiscal de 2027
 *     (1º/7/2026 a 30/6/2027), com base na RNB per capita de 2025. A
 *     classificação por renda é estatística/analítica e é mantida separada das
 *     categorias operacionais de empréstimo (lending); a aula não associa
 *     grupo de renda a financiamento.
 *   • OMC, "Who are the developing countries in the WTO?": não há definições
 *     da OMC de países "desenvolvidos" e "em desenvolvimento"; os membros
 *     anunciam a própria condição; outros membros podem contestar o uso de
 *     provisões; nos esquemas de preferências, quem concede decide quem se
 *     beneficia. (Nota interna, fora do conteúdo: compromisso brasileiro de
 *     2019 sobre tratamento especial e diferenciado em negociações.)
 *   • Norte/Sul: Comissão Independente sobre Questões de Desenvolvimento
 *     Internacional (presidida por Willy Brandt), North-South: A Programme
 *     for Survival, 1980 (Linha Brandt, como documento histórico); LEES, N.
 *     The Brandt Line after forty years. Review of International Studies,
 *     v. 47, n. 1, 2021 (permanência e limites da divisão Norte–Sul).
 *   • Centro/periferia: PREBISCH, R., CEPAL, 1949 (concepção
 *     centro–periferia); WALLERSTEIN, I., The Modern World-System I, 1974
 *     (semiperiferia).
 *   • Anamorfose: Worldmapper (mapas de área proporcional a variáveis como
 *     população e PIB).
 *
 * Aula em preparação (`course.ts` ainda não cadastra a Semana 10).
 */
export const aula29Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de ler uma classificação de países perguntando quem a produziu, para quê, com que critério, que grupos ela cria, que diferenças esconde e o que nela pode mudar.",

  observation: {
    title: "O OLHAR DO PACO",
    lines: [
      "O Brasil aparece em três leituras diferentes. Em leituras político-históricas contemporâneas, é frequentemente situado no chamado Sul Global. Para o Banco Mundial, no ano fiscal de 2027 (de 1º de julho de 2026 a 30 de junho de 2027), é uma economia de renda média-alta, com base na renda nacional bruta per capita de 2025. Na Organização Mundial do Comércio (OMC), não há uma definição estatística de país “em desenvolvimento”: os próprios membros anunciam a sua condição.",
      "Três rótulos, um mesmo país. Antes de perguntar qual deles está certo, pergunte quem produziu cada um.",
    ],
    image: {
      src: "/assets/aulas/semana-10-aula-29-classificacoes.png",
      alt: "Composição conceitual, sobre fundo escuro, de um globo sem fronteiras com um mesmo território em destaque, sobre o qual incidem três mecanismos distintos de classificação: à esquerda, barras, faixas graduadas e um histograma de indicadores; à direita, um documento e etiquetas ligados por conexões institucionais; sobre o globo, grandes agrupamentos verdes e arcos de relações.",
      caption: "Composição conceitual criada para fins didáticos; os agrupamentos não representam uma classificação oficial do mundo.",
    },
    questions: [
      "O país mudou, ou mudou quem o classificou e para quê?",
      "Quem produziu cada uma das três leituras?",
      "Que critério cada uma usa: um indicador, uma declaração ou uma trajetória histórica?",
      "Se a renda do Brasil mudar, as três leituras mudam juntas?",
      "Quem agrupa os países, com que critério e para quê?",
    ],
    closing:
      "GUARDE SUAS RESPOSTAS. VAMOS VOLTAR A ESSAS TRÊS LEITURAS EM CADA ETAPA DA AULA.",
  },

  connection: {
    title: "DO RECORTE DO ESPAÇO À CLASSIFICAÇÃO DOS PAÍSES",
    flow: ["Recortes do espaço (Aula 28)", "Classificações de países (Aula 29)", "Recorte + evidência → argumento (Aula 30)"],
    highlight: "Antes do rótulo, identifique quem o produziu e para quê.",
    text: "Na Aula 28, Imperatriz mudou de região sem sair do lugar. Agora é um país inteiro que aparece em grupos diferentes, e precisamos descobrir quem o classificou e para quê. A pergunta da Aula 28 continua valendo, mas muda de escala: “Quem agrupa os países, com que critério e para quê?”",
  },

  lenses: {
    eyebrow: "Cinco lentes para ler uma classificação",
    title: "QUEM COLOCOU ESTE PAÍS NESTE GRUPO?",
    subtitle:
      "Cinco perguntas ajudam a ler qualquer classificação de países. Logo abaixo, seis passos mostram como aplicá-las.",
    items: [
      {
        id: "quem",
        emoji: "🏛️",
        name: "QUEM CLASSIFICA?",
        question: "Uma instituição, um organismo, uma tradição acadêmica ou um debate político-histórico?",
      },
      {
        id: "para-que",
        emoji: "🎯",
        name: "PARA QUÊ?",
        question: "Comparar estatísticas, negociar regras ou interpretar desigualdades históricas?",
      },
      {
        id: "criterio",
        emoji: "🧮",
        name: "COM QUE CRITÉRIO?",
        question: "Um indicador, uma autodeclaração ou uma leitura político-histórica?",
      },
      {
        id: "quem-fica-junto",
        emoji: "🧩",
        name: "QUEM FICA JUNTO?",
        question: "Que diferenças o grupo esconde?",
      },
      {
        id: "o-que-muda",
        emoji: "⏳",
        name: "O QUE PODE MUDAR?",
        question: "O indicador, o grupo, o uso do rótulo, suas consequências ou sua interpretação?",
      },
    ],
    highlight: "O mesmo rótulo não é necessariamente produzido pelo mesmo mecanismo.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "LEIA UMA CLASSIFICAÇÃO EM SEIS PASSOS",
    context:
      "Os passos servem para mapas, tabelas, textos institucionais, notícias, gráficos e anamorfoses. Aqui, aplicados às três leituras do Brasil.",
    flow: [
      "Quem classificou?",
      "Para qual finalidade?",
      "Que critério utilizou: indicador, autodeclaração ou trajetória político-histórica?",
      "Que grupos foram produzidos?",
      "O que o grupo aproxima, e que diferenças esconde?",
      "O que pode mudar: o indicador, o grupo, o uso do rótulo, suas consequências ou sua interpretação ao longo do tempo?",
    ],
    question: "Quem produziu este rótulo, e para quê?",
    accordions: [
      {
        id: "sul-global",
        title: "LEITURA 1: SUL GLOBAL",
        content:
          "Não há um órgão que classifique oficialmente o Sul Global nem uma lista universal. É uma categoria político-histórica, associada a desigualdades e a relações históricas de poder, usada para interpretar o mundo. O grupo aproxima países muito diferentes, e a categoria não coincide com o hemisfério.",
      },
      {
        id: "banco-mundial",
        title: "LEITURA 2: BANCO MUNDIAL",
        content:
          "O Banco Mundial agrupa as economias em quatro grupos de renda, pela renda nacional bruta per capita, para apresentar dados, comparar estatísticas e analisar diferenças de renda. É uma classificação estatística por indicador: os limiares são atualizados a cada ano, e o grupo de um país pode mudar. Por isso, ela precisa ser sempre datada.",
      },
      {
        id: "omc",
        title: "LEITURA 3: OMC",
        content:
          "Na OMC, não há definições de país “desenvolvido” e “em desenvolvimento”: os membros anunciam a própria condição, e outros membros podem contestar o uso de determinadas provisões. A finalidade é a negociação no sistema comercial. É uma autodeclaração institucional, não uma classificação estatística.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "Você viu o Brasil em três leituras diferentes, sem que o país tivesse mudado. Agora, as cinco lentes que explicam por quê.",
      "Guarde uma regra: antes de perguntar “em que grupo está este país?”, pergunte “segundo quem, com que critério e para quê?”.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "quem",
        name: "QUEM CLASSIFICA?",
        conceito:
          "Toda classificação de países foi produzida por alguém: uma instituição, um organismo internacional, uma tradição acadêmica ou um debate político-histórico. Antes do rótulo, identifique quem o produziu.",
        penseAssim: "Pergunte: este rótulo vem de uma instituição, de uma regra ou de uma tradição de análise?",
        exemplo:
          "O grupo de renda do Brasil vem do Banco Mundial; a condição na OMC vem de uma autodeclaração; o Sul Global vem de leituras político-históricas, sem órgão que o defina oficialmente.",
        naoConfunda:
          "Rótulos parecidos não têm necessariamente a mesma origem, nem o mesmo peso institucional.",
        naProva:
          "Textos e tabelas pedem que você identifique a instituição ou a tradição por trás da classificação.",
      },
      {
        id: "para-que",
        name: "PARA QUÊ?",
        conceito:
          "Toda classificação serve a uma finalidade, e a finalidade ajuda a explicar o critério. O Banco Mundial classifica por renda para agrupar economias, apresentar dados e comparar estatísticas; a OMC organiza a negociação e o tratamento no sistema comercial; a leitura Norte/Sul interpreta desigualdades mundiais.",
        penseAssim: "Pergunte: para que esta classificação foi feita, e quem a usa?",
        exemplo:
          "Uma instituição que compara economias precisa de um indicador comum; uma organização de negociação pode aceitar que cada membro declare a própria condição.",
        naoConfunda:
          "Classificações internacionais não têm todas a mesma finalidade.",
        naProva:
          "Questões institucionais pedem que você relacione o critério à finalidade da instituição.",
      },
      {
        id: "criterio",
        name: "COM QUE CRITÉRIO?",
        conceito:
          "Há pelo menos três mecanismos diferentes de classificação: o indicador quantitativo, como a renda nacional bruta per capita do Banco Mundial; a autodeclaração e o arranjo institucional, como na OMC; e a leitura político-histórica, como na divisão entre Norte e Sul Global. O mesmo rótulo não é necessariamente produzido pelo mesmo mecanismo.",
        penseAssim: "Pergunte: este rótulo foi medido, declarado ou interpretado?",
        exemplo:
          "O Brasil é de renda média-alta por um indicador; “em desenvolvimento” na OMC é uma condição anunciada pelo membro; “Sul Global” é uma leitura histórica.",
        naoConfunda:
          "Grupo de renda não é desenvolvimento em todas as dimensões, e a OMC não define estatisticamente quem é “em desenvolvimento”.",
        naProva:
          "Tabelas de grupos de renda pedem que você relacione indicador, data e instituição.",
      },
      {
        id: "quem-fica-junto",
        name: "QUEM FICA JUNTO?",
        conceito:
          "Toda classificação aproxima países diferentes e, ao fazer isso, esconde diferenças. No chamado Sul Global, países de renda muito diferente aparecem sob a mesma categoria político-histórica, e a China é um exemplo dessa heterogeneidade. No chamado Norte Global, Austrália e Nova Zelândia mostram que a divisão não segue os hemisférios.",
        penseAssim: "Pergunte: o que estes países têm em comum, e em que são muito diferentes?",
        exemplo:
          "Austrália e Nova Zelândia ficam no Hemisfério Sul e são frequentemente situadas no Norte Global.",
        naoConfunda:
          "Norte não é hemisfério Norte, Sul não é hemisfério Sul, e não existe uma lista universal e definitiva de países do Sul Global.",
        naProva:
          "Mapas Norte/Sul pedem que você reconheça a natureza político-histórica da divisão.",
      },
      {
        id: "o-que-muda",
        name: "O QUE PODE MUDAR?",
        conceito:
          "Classificações têm história, mas não mudam todas da mesma maneira. No Banco Mundial, um país pode mudar de grupo porque mudou seu indicador, porque mudaram os limiares ou na nova classificação anual. Na OMC, a condição é autodeclarada, o uso de provisões pode ser questionado e benefícios específicos seguem regras próprias. Na leitura Norte/Sul, a interpretação e a utilidade da categoria mudam historicamente.",
        penseAssim: "Pergunte: o que mudou aqui, o indicador, o grupo, o uso do rótulo, suas consequências ou sua interpretação?",
        exemplo:
          "Se o grupo de renda de um país muda, isso não altera, por si, a condição que ele declara numa organização de comércio.",
        naoConfunda:
          "Mudar numa classificação não muda automaticamente as outras.",
        naProva:
          "Notícias sobre mudança de grupo de renda pedem que você separe as classificações.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "centro-periferia",
        title: "Centro, semiperiferia e periferia",
        content:
          "Outra forma de ler o mundo olha para a posição relativa dos países em redes e relações: quem concentra comando, tecnologia, finanças e as etapas de maior valor agregado, e quem depende delas. A concepção de centro e periferia foi articulada por Raúl Prebisch, em trabalho de 1949 associado à CEPAL; Immanuel Wallerstein acrescentou a semiperiferia. Valor agregado e coordenação você já conhece da Aula 20. Aqui, o ponto é outro: a posição é relacional e pode variar conforme a rede analisada.",
        flow: ["Comando", "Tecnologia", "Finanças", "Valor agregado", "Dependência"],
        highlight: "Centro não é sinônimo de país rico, nem periferia de país pobre.",
      },
      {
        id: "anamorfose",
        title: "Anamorfose: o tamanho como escolha",
        content:
          "Numa anamorfose, o tamanho de cada país é desenhado proporcionalmente a uma variável, e não à área territorial. Um planisfério convencional, um mapa pela população e um mapa pelo PIB mostram imagens muito diferentes do mesmo mundo, como nos mapas do projeto Worldmapper. É a mesma lógica da Aula 04: realidade, seleção, representação. Aqui, a seleção decide quem ganha peso e visibilidade.",
        flow: ["Realidade", "Variável escolhida", "Tamanho desenhado", "Imagem do mundo"],
        highlight: "Mudar a variável que define o tamanho muda a imagem do mundo. Anamorfose não é mapa errado.",
      },
      {
        id: "historia",
        title: "Classificações têm história",
        content:
          "Em 1980, o Relatório Brandt, de uma comissão internacional presidida por Willy Brandt, popularizou uma linha que separava um Norte mais rico de um Sul mais pobre. Hoje, a chamada Linha Brandt é um documento histórico: uma tentativa de representar desigualdades Norte–Sul, e não a fronteira atual. A categoria Sul Global ainda é utilizada, mas sua composição e seus limites são heterogêneos e debatidos.",
        highlight: "Uma classificação é datada: ela pertence ao momento e à pergunta que a produziram.",
      },
    ],
    closing:
      "Você já sabe perguntar quem classificou e para quê. Agora falta transformar recortes e evidências em argumento.",
  },

  brazilConnections: {
    title: "E O BRASIL? E O MUNDO?",
    question: "Que mecanismo produziu cada rótulo?",
    center: "CLASSIFICAÇÕES",
    items: [
      {
        id: "norte-sul",
        label: "NORTE E SUL GLOBAL: LEITURA POLÍTICO-HISTÓRICA",
        description:
          "Em leituras político-históricas contemporâneas, o Brasil é frequentemente situado no chamado Sul Global. A categoria não é oficial, não coincide com os hemisférios e não tem fronteira universal e institucionalmente fixa: Austrália e Nova Zelândia são frequentemente situadas no Norte, e a China mostra como o Sul reúne realidades muito diferentes.",
      },
      {
        id: "banco-mundial",
        label: "BANCO MUNDIAL: INDICADOR QUANTITATIVO",
        description:
          "O Banco Mundial classifica as economias em renda baixa, média-baixa, média-alta e alta, pela renda nacional bruta per capita (método Atlas), com limiares atualizados todos os anos. No ano fiscal de 2027, o Brasil é uma economia de renda média-alta. Renda não é desenvolvimento em todas as dimensões, e o grupo de um país pode mudar.",
      },
      {
        id: "omc",
        label: "OMC: AUTODECLARAÇÃO INSTITUCIONAL",
        description:
          "Segundo a OMC, não há definições da organização de países “desenvolvidos” e “em desenvolvimento”: os membros anunciam a própria condição, e outros membros podem contestar o uso de determinadas provisões. A autodeclaração não garante acesso automático a todo benefício: nos esquemas de preferências, por exemplo, é o país que concede a preferência que decide quem se beneficia.",
      },
    ],
    study:
      "Cada cartão mostra um mecanismo: a leitura político-histórica, o indicador quantitativo e a autodeclaração institucional. Os três podem descrever o mesmo país ao mesmo tempo.",
    highlight: "Autodeclaração institucional não é classificação estatística, e renda não é desenvolvimento em todas as dimensões.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Mapa Norte/Sul",
      "Tabela de grupos de renda",
      "Texto da OMC",
      "Anamorfose",
      "Texto sobre centro e periferia",
      "Notícia sobre o BRICS",
      "Notícia “país mudou de grupo de renda”",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Identificar quem classificou",
      "Relacionar critério e finalidade",
      "Reconhecer o que o grupo esconde",
      "Separar classificações diferentes",
    ],
    highlight:
      "A prova raramente pede que você diga em que grupo está um país. Ela mostra rótulos diferentes e quer ver você explicar de onde vêm.",
    guidingIntro: "Material → operação → armadilha:",
    guidingQuestions: [
      "Mapa Norte/Sul → reconheça a natureza político-histórica. Armadilha: Norte = hemisfério Norte.",
      "Tabela de grupos de renda → relacione indicador, data e instituição. Armadilha: grupo de renda = desenvolvimento em todas as dimensões.",
      "Texto da OMC → identifique o mecanismo institucional. Armadilha: todo organismo classifica países por indicador quantitativo.",
      "Anamorfose → identifique a variável que define o tamanho. Armadilha: tamanho desenhado = área territorial real.",
      "Texto sobre centro e periferia → interprete a posição relativa nas redes. Armadilha: rico = centro e pobre = periferia, automaticamente.",
      "Notícia sobre o BRICS → distinga agrupamento político de bloco de integração. Armadilha: BRICS = União Europeia.",
      "Notícia “país mudou de grupo de renda” → separe as classificações. Armadilha: mudou no Banco Mundial, mudou automaticamente na OMC.",
    ],
  },

  question: {
    id: "s10-a29-q01",
    statement:
      "Corália, um país fictício, fica no Hemisfério Norte. Em análises político-históricas, é frequentemente situada num agrupamento de países marcados por desigualdades históricas nas relações internacionais, análogo ao chamado Sul Global. Um banco multilateral classifica os países em grupos de renda per capita, com limiares atualizados todos os anos; neste ano, Corália passou do grupo de renda média-baixa para o de renda média-alta. Numa organização de comércio, as regras estabelecem que cada membro declara a própria condição, e Corália declarou-se “em desenvolvimento”; pelas mesmas regras, essa condição não depende do grupo de renda, e o acesso a cada benefício segue regras próprias. A leitura mais adequada é que",
    options: [
      {
        id: "A",
        text: "a autodeclaração e o grupo de renda seguem critérios diferentes, mas a leitura político-histórica perde adequação para Corália, já que a denominação “Sul” ainda exige alguma correspondência com a posição latitudinal do país.",
      },
      {
        id: "B",
        text: "por usar um indicador quantitativo, comparável e atualizado todos os anos, a classificação do banco deveria prevalecer sobre as outras ao posicionar Corália no mundo, deixando os demais enquadramentos como referências secundárias.",
      },
      {
        id: "C",
        text: "as classificações têm finalidades diferentes, mas, ao passar para a renda média-alta, Corália deveria deixar de se declarar “em desenvolvimento” na organização de comércio, já que a nova faixa de renda redefine a sua condição.",
      },
      {
        id: "D",
        text: "as três classificações coexistem sem ser sinônimas, pois têm critérios e finalidades diferentes; mudar de grupo de renda não altera por si a condição declarada na organização de comércio nem resume a realidade de Corália.",
      },
      {
        id: "E",
        text: "as classificações usam critérios diferentes, e a passagem para a renda média-alta indica que Corália superou as desigualdades estruturais que justificavam seu enquadramento político-histórico, agora menos adequado.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "A alternativa D está correta porque separa os três mecanismos que classificam Corália. 1. COEXISTÊNCIA: as três classificações descrevem o mesmo país ao mesmo tempo, sem contradição. 2. NÃO SÃO SINÔNIMAS: “agrupamento análogo ao Sul Global”, “renda média-alta” e “em desenvolvimento” são rótulos diferentes, produzidos por quem e para quê diferentes. 3. CRITÉRIOS E FINALIDADES: a leitura político-histórica interpreta desigualdades históricas; o banco mede renda per capita para comparar economias; a organização de comércio aceita a condição declarada pelo membro. 4. MUDANÇA SEM EFEITO AUTOMÁTICO: pelas regras do enunciado, a condição declarada não depende do grupo de renda; e um indicador de renda não resume toda a realidade do país. Os limites de cada classificação também contam: o agrupamento político-histórico reúne países muito diferentes; o grupo de renda é datado e muda com o indicador e os limiares; e declarar-se “em desenvolvimento” não dá acesso automático a todo benefício, que segue regras próprias. A transforma uma categoria político-histórica em localização latitudinal. B trata a quantificação como superioridade universal da classificação. C faz a mudança no banco valer automaticamente na organização de comércio. E supõe que a mudança de um indicador econômico elimina automaticamente uma leitura histórico-estrutural.",
    optionFeedback: {
      A: "Os critérios são de fato diferentes, mas o agrupamento análogo ao Sul Global é político-histórico, e não latitudinal: “Sul” não exige correspondência com a posição do país, e o próprio enunciado situa Corália nele, embora ela fique no Hemisfério Norte.",
      B: "A classificação do banco é de fato quantitativa, comparável e anual, mas isso não a torna superior para qualquer finalidade: ela responde a uma pergunta sobre renda, enquanto as outras respondem a perguntas institucionais e histórico-políticas.",
      C: "As finalidades são diferentes, e por isso a mudança no banco não vale automaticamente na organização de comércio: pelas regras do enunciado, a condição declarada não depende do grupo de renda.",
      D: "Correta: reconhece que as classificações coexistem sem ser sinônimas, que têm critérios e finalidades diferentes e que a mudança de grupo de renda não altera por si os outros rótulos nem resume o país.",
      E: "Os critérios são diferentes, mas a mudança de um indicador econômico não elimina, por si, uma leitura histórico-estrutural: a renda per capita não mede as desigualdades históricas nas relações internacionais que justificam o enquadramento.",
    },
  },

  missionCheck:
    "Voltemos à pergunta da aula: quem agrupa os países, com que critério e para quê? Agora você consegue ler uma classificação perguntando quem a produziu, para quê, com que critério, que grupos cria, que diferenças esconde e o que nela pode mudar?",

  completionMessage:
    "O Brasil não mudou entre uma leitura e outra: mudou quem classificou e para quê. Você já sabe perguntar quem classificou e para quê. Agora falta transformar recortes e evidências em argumento.",
};
