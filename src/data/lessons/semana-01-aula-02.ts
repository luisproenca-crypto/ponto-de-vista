import type { LessonContent } from "@/lib/types";

/**
 * AULA 02 — O MUNDO EM 2026
 * Semana 01 • Geopolítica & Atualidades
 *
 * Todo o texto pedagógico desta aula foi definido pelo Prof. Luis.
 * Para editar a aula, altere apenas os textos deste arquivo — nenhum
 * componente precisa ser modificado.
 *
 * Campos com valor `null`/ausentes aparecem no site como "Conteúdo em
 * preparação" ou simplesmente não renderizam aquela seção.
 */
export const aula02Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de observar um acontecimento internacional e identificar relações de poder, interesse, território, redes e escalas que ajudam a explicá-lo.",
  missionTitle: "Missão da aula",

  hypothesis: {
    title: "O OLHAR DO PACO",
    intro: "Antes de explicar qualquer coisa, observe estas seis ideias.",
    cards: [
      { id: "guerra", label: "Guerra" },
      { id: "energia", label: "Energia" },
      { id: "tecnologia", label: "Tecnologia" },
      { id: "comercio", label: "Comércio" },
      { id: "clima", label: "Clima" },
      { id: "precos", label: "Preços" },
    ],
    question: "Quantas histórias você está vendo?",
    paco: "Escolha duas dessas ideias e tente imaginar uma conexão entre elas antes de continuar.",
    reveal: "Boa hipótese. Agora vamos ampliar essa conexão.",
  },

  connection: {
    title: "E SE FOREM A MESMA HISTÓRIA?",
    flow: ["Conflito", "Rota", "Energia", "Transporte", "Produção", "Preços"],
    highlight: "O mundo funciona por conexões.",
    text: "Um acontecimento pode produzir efeitos muito além do lugar onde começou.",
  },

  lenses: {
    title: "DÊ NOME ÀS CONEXÕES",
    subtitle:
      "Para investigar uma situação geopolítica, vamos utilizar cinco chaves.",
    items: [
      {
        id: "poder",
        emoji: "⚖️",
        name: "PODER",
        question: "Quem consegue influenciar?",
      },
      {
        id: "interesse",
        emoji: "🎯",
        name: "INTERESSE",
        question: "O que cada ator procura obter, preservar ou proteger?",
      },
      {
        id: "territorio",
        emoji: "📍",
        name: "TERRITÓRIO",
        question: "Por que aquele espaço importa?",
      },
      {
        id: "rede",
        emoji: "🌐",
        name: "REDE",
        question: "Com o que aquela situação se conecta?",
      },
      {
        id: "escala",
        emoji: "📏",
        name: "ESCALA",
        question: "Até onde chegam seus efeitos?",
      },
    ],
    highlight: "Uma notícia. Cinco perguntas. Outra compreensão.",
    image: {
      // Envie o arquivo para: /public/assets/aulas/cinco-chaves-geopolitica.jpg
      src: "/assets/aulas/cinco-chaves-geopolitica.jpg",
      alt: "Representação visual das cinco chaves da geopolítica",
    },
  },

  application: {
    title: "AGORA CONECTE",
    context:
      "O Estreito de Ormuz é uma passagem marítima estratégica por onde circula parte relevante do fluxo mundial de petróleo e gás. Uma interrupção nesse ponto pode se propagar por toda a cadeia.",
    flow: [
      "Passagem estratégica",
      "Energia / Fertilizantes",
      "Transporte",
      "Produção",
      "Custos / Abastecimento",
    ],
    question: "Em quais escalas esse acontecimento pode produzir efeitos?",
    accordions: [
      {
        id: "local",
        title: "LOCAL",
        content: "O território concreto e os atores diretamente envolvidos.",
      },
      {
        id: "regional",
        title: "REGIONAL",
        content: "Rotas, países vizinhos e fluxos econômicos da região.",
      },
      {
        id: "global",
        title: "GLOBAL",
        content:
          "Energia, fertilizantes, comércio e cadeias produtivas conectadas internacionalmente.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O RACIOCÍNIO",
    paragraphs: [
      "Você já observou, formulou uma hipótese e identificou algumas conexões. Agora vamos organizar esse raciocínio.",
    ],
  },

  deepDive: {
    title: "AGORA OLHE PARA O MUNDO DE 2026 COM AS CINCO CHAVES",
    items: [
      {
        id: "multipolaridade",
        title: "O poder está mais distribuído, mas não igualmente",
        content:
          "Nas últimas décadas, diferentes economias ampliaram sua participação nos fluxos econômicos mundiais. Isso contribuiu para uma distribuição mais complexa do peso econômico global, mas não eliminou desigualdades de poder, tecnologia, financiamento ou influência.",
        highlight: "Multipolaridade ≠ igualdade de poder.",
      },
      {
        id: "interdependencia",
        title: "Conectados e dependentes",
        content:
          "Cadeias produtivas conectam matérias-primas, componentes, indústrias, transportes e consumidores localizados em diferentes partes do mundo. Essa integração pode ampliar eficiência e oportunidades, mas também cria dependências e vulnerabilidades.",
        highlight: "Interdependência gera oportunidades — e vulnerabilidades.",
      },
      {
        id: "tecnologia-geografia",
        title: "A tecnologia também tem geografia",
        content:
          "Tecnologias digitais dependem de uma base profundamente material: minerais, semicondutores, fábricas, servidores, data centers, energia e infraestrutura. Por isso, tecnologia também envolve território, recursos, empresas e Estados.",
        flow: ["Mineral", "Chip", "Servidor", "Data center", "IA"],
      },
      {
        id: "conflito-redes",
        title: "Um conflito nunca fica só no mapa",
        content:
          "Quando territórios estratégicos, rotas ou fluxos são afetados, consequências podem aparecer em outras regiões por meio das redes de energia, transporte, produção e comércio.",
        highlight: "LOCAL → REGIONAL → GLOBAL",
      },
      {
        id: "globalizacao",
        title: "Globalização: desaparecimento ou reorganização?",
        content:
          "Tensões geopolíticas, políticas industriais e preocupações com segurança econômica podem modificar cadeias e fluxos internacionais sem eliminar a interdependência global.",
        highlight: "Não confunda conflito com desconexão.",
      },
    ],
    closing:
      "A disputa também ocorre sobre como e em quais condições permanecer conectado.",
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Quanto do que acontece “lá fora” realmente fica lá fora?",
    center: "BRASIL",
    items: [
      {
        id: "alimentos",
        label: "ALIMENTOS",
        description: "Forte inserção brasileira no comércio agropecuário mundial.",
      },
      {
        id: "fertilizantes",
        label: "FERTILIZANTES",
        description: "Dependência relevante de importações.",
      },
      {
        id: "energia",
        label: "ENERGIA",
        description:
          "Petróleo, hidreletricidade e expansão de fontes renováveis.",
      },
      {
        id: "minerais",
        label: "MINERAIS",
        description:
          "Recursos importantes para cadeias tecnológicas e energéticas.",
      },
      {
        id: "tecnologia",
        label: "TECNOLOGIA",
        description:
          "Inserção desigual nas cadeias globais de maior intensidade tecnológica.",
      },
      {
        id: "comercio",
        label: "COMÉRCIO",
        description:
          "Relações relevantes com China, Estados Unidos e União Europeia.",
      },
    ],
    study:
      "Uma perturbação distante pode afetar rotas, insumos e cadeias produtivas que chegam ao Brasil. Isso não significa que um acontecimento internacional determine automaticamente preços ou resultados internos: estoques, contratos, fornecedores, câmbio, políticas públicas e outras variáveis também interferem.",
    highlight: "Geografia não é adivinhação. É análise de relações.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: ["Texto", "Mapa", "Gráfico", "Acontecimento"],
    demandsTitle: "A questão cobra",
    demands: ["Relação", "Causa", "Consequência", "Escala"],
    highlight: "Atualidades são contexto. A questão cobra interpretação.",
    guidingIntro: "Quando uma notícia aparecer, pergunte:",
    guidingQuestions: [
      "Quem são os atores?",
      "Quais interesses aparecem?",
      "Por que aquele território importa?",
      "Quais redes estão envolvidas?",
      "Em quais escalas aparecem os efeitos?",
    ],
  },

  question: {
    id: "s01-a02-q01",
    statement:
      "Uma tensão internacional provoca restrições ao fornecimento de semicondutores. Empresas de diferentes países enfrentam dificuldades para obter componentes utilizados em automóveis, equipamentos industriais e centros de processamento de dados. Governos passam a oferecer incentivos para ampliar a produção desses componentes em seus próprios territórios. O episódio demonstra principalmente que:",
    options: [
      {
        id: "A",
        text: "tecnologias digitais eliminaram a importância da localização industrial.",
      },
      {
        id: "B",
        text: "conflitos geopolíticos produzem consequências apenas nos países diretamente envolvidos.",
      },
      {
        id: "C",
        text: "a globalização tornou os Estados irrelevantes para a organização econômica.",
      },
      {
        id: "D",
        text: "redes econômicas globais podem simultaneamente produzir integração e vulnerabilidade.",
      },
      {
        id: "E",
        text: "o avanço tecnológico tornou desnecessárias as disputas territoriais.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "A dependência compartilhada de componentes revela integração. Quando uma interrupção em um ponto da cadeia afeta vários países, aparece também a vulnerabilidade. A reação dos governos, incentivando produção em seus próprios territórios, acrescenta poder, interesse e território à análise.",
  },

  missionCheck:
    "Agora você consegue observar uma notícia internacional e perguntar não apenas “o que aconteceu?”, mas “com o que isso se conecta?”",

  completionMessage: "Você aprendeu a olhar. Agora começou a conectar.",
};
