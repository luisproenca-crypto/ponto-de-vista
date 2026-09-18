import type { CheckpointContent } from "@/lib/types";

/**
 * CHECKPOINT 01 — Semana 01
 *
 * Situação-problema fictícia (Vitória do Rio Verde) que atravessa as
 * cinco etapas, revisitando os três eixos da semana: Geografia Essencial
 * (Aula 01), Geopolítica & Atualidades (Aula 02) e Política & Cidadania
 * (Aula 03). Nenhum ator, partido ou governo real é mencionado; o
 * cenário não indica se a instalação da fábrica é desejável nem quem
 * "deveria" decidir — apenas apresenta atores, interesses e relações
 * conceituais para o aluno analisar.
 */
export const checkpoint01Content: CheckpointContent = {
  intro:
    "Ao longo desta semana, você aprendeu a observar espaços, conectar acontecimentos e diferenciar conceitos que parecem sinônimos. Este checkpoint reúne tudo isso em uma única situação: a chegada de uma fábrica a uma cidade fictícia chamada Vitória do Rio Verde.",

  scenario: {
    title: "VITÓRIA DO RIO VERDE",
    description:
      "Um anúncio recente informa que Vitória do Rio Verde, um município fictício, foi escolhida para receber uma nova planta industrial ligada a uma cadeia produtiva internacional de componentes para energia renovável. A notícia mobiliza moradores, comerciantes, o poder público local, investidores e grupos ambientais — cada um com interesses, expectativas e preocupações diferentes sobre o que essa decisão pode significar para a cidade.",
    image: {
      // Envie o arquivo para: /public/assets/checkpoints/semana-01-vitoria-do-rio-verde.png
      src: "/assets/checkpoints/semana-01-vitoria-do-rio-verde.png",
      alt: "Ilustração da cidade fictícia de Vitória do Rio Verde, usada na situação-problema do Checkpoint 01",
    },
  },

  steps: [
    {
      id: "observe",
      title: "OBSERVE",
      kind: "observation",
      questions: [
        "Quem são os grupos e atores mencionados na notícia sobre Vitória do Rio Verde?",
        "Que mudanças no espaço da cidade essa instalação pode provocar?",
        "Que interesses diferentes você consegue identificar entre esses grupos?",
        "Essa decisão parece afetar só a cidade, ou também lugares fora dela?",
        "Que perguntas essa notícia levanta, além de “a fábrica vai ser construída ou não”?",
      ],
    },
    {
      id: "nomeie",
      title: "NOMEIE",
      kind: "cards",
      eyebrow: "Revisão da semana",
      subtitle:
        "Entre os conceitos que você estudou nesta semana, quais ajudam a explicar o caso de Vitória do Rio Verde?",
      items: [
        {
          id: "espaco-geografico",
          emoji: "🌍",
          name: "ESPAÇO GEOGRÁFICO",
          question: "Que mudanças no espaço construído essa decisão pode provocar?",
        },
        {
          id: "territorio",
          emoji: "🧭",
          name: "TERRITÓRIO",
          question: "Quem tem poder para autorizar o que acontece nessa área?",
        },
        {
          id: "poder",
          emoji: "⚖️",
          name: "PODER",
          question: "Quem consegue influenciar essa decisão, e quem não consegue?",
        },
        {
          id: "interesse",
          emoji: "🎯",
          name: "INTERESSE",
          question: "O que cada grupo ganha ou perde com a fábrica?",
        },
        {
          id: "rede",
          emoji: "🌐",
          name: "REDE",
          question: "Com que lugares fora da cidade essa fábrica está conectada?",
        },
        {
          id: "escala",
          emoji: "📏",
          name: "ESCALA",
          question: "Até onde chegam os efeitos dessa decisão?",
        },
        {
          id: "estado",
          emoji: "🏛️",
          name: "ESTADO",
          question: "Que regras e instituições continuam valendo, não importa quem governe?",
        },
        {
          id: "governo",
          emoji: "🧑‍💼",
          name: "GOVERNO",
          question: "Quem administra esse processo agora — e isso pode mudar?",
        },
      ],
      highlight:
        "Nomear um conceito não é decorar uma definição: é reconhecer onde ele aparece numa situação real.",
    },
    {
      id: "conecte",
      title: "CONECTE",
      kind: "flow",
      flow: [
        "Decisão local",
        "Território",
        "Interesses diferentes",
        "Rede produtiva internacional",
        "Escala global",
        "Instituições do Estado",
      ],
      highlight: "Uma decisão local raramente fica só no local.",
      text: "A escolha de instalar a fábrica em Vitória do Rio Verde não depende só da prefeitura: ela está conectada a interesses econômicos diferentes, a uma rede produtiva que atravessa fronteiras, e a regras que vêm de instituições do Estado — não apenas do governo atual.",
    },
    {
      id: "diferencie",
      title: "DIFERENCIE",
      kind: "questions",
      questions: [
        {
          id: "s01-cp-q01",
          statement:
            "Perto da área escolhida para a nova planta industrial, moradores reagem de formas diferentes: alguns discutem como a construção vai reorganizar ruas, comércios e serviços ao redor; outros relatam que aquele terreno guarda memórias afetivas de infância; um terceiro grupo questiona quem tem autoridade para autorizar o que será feito naquele pedaço da cidade. Essas três reações mobilizam, respectivamente, os conceitos de:",
          options: [
            { id: "A", text: "espaço geográfico, lugar e território." },
            { id: "B", text: "paisagem, nação e governo." },
            { id: "C", text: "região, lugar e Estado." },
            { id: "D", text: "território, espaço geográfico e lugar." },
            { id: "E", text: "lugar, paisagem e nação." },
          ],
          correctOptionId: "A",
          explanation:
            "A alternativa A está correta. A reorganização de ruas, comércios e serviços ao redor da fábrica envolve a produção e transformação do espaço geográfico. As memórias afetivas de infância mobilizam o conceito de lugar — a dimensão vivida e significativa do espaço. Já a pergunta sobre quem tem autoridade para autorizar o uso daquele pedaço da cidade mobiliza o conceito de território, ligado a poder, controle e disputa. As demais alternativas trocam esses conceitos entre si ou introduzem palavras de outros contextos (nação, governo, Estado, paisagem, região) que não correspondem exatamente às três reações descritas.",
        },
        {
          id: "s01-cp-q02",
          statement:
            "A nova planta industrial de Vitória do Rio Verde só se viabiliza porque está conectada a fornecedores, transportadoras e compradores localizados em diferentes países. Ao mesmo tempo, moradores, comerciantes e investidores locais buscam obter benefícios distintos com a instalação da fábrica, e nem todos esses grupos têm a mesma capacidade de influenciar a decisão final. Essa situação evidencia, respectivamente, os conceitos de:",
          options: [
            { id: "A", text: "escala, rede e poder." },
            { id: "B", text: "rede, interesse e poder." },
            { id: "C", text: "território, poder e escala." },
            { id: "D", text: "poder, rede e interesse." },
            { id: "E", text: "interesse, escala e rede." },
          ],
          correctOptionId: "B",
          explanation:
            "A alternativa B está correta. A conexão da fábrica com fornecedores, transportadoras e compradores em diferentes países mobiliza o conceito de rede. Os benefícios distintos que cada grupo busca obter mobilizam o conceito de interesse. E a capacidade desigual de influenciar a decisão final mobiliza o conceito de poder. As demais alternativas trocam esses conceitos entre si ou os substituem por escala ou território, que não correspondem exatamente às três situações descritas.",
        },
        {
          id: "s01-cp-q03",
          statement:
            "As licenças ambientais, as leis de uso do solo e os órgãos responsáveis por fiscalizar a instalação da fábrica em Vitória do Rio Verde continuarão existindo e em vigor mesmo que a gestão municipal mude na próxima eleição. Essa situação demonstra principalmente que:",
          options: [
            {
              id: "A",
              text: "o Estado e o governo são o mesmo conceito, já que ambos decidem sobre a fábrica.",
            },
            {
              id: "B",
              text: "apenas o governo atual tem poder de decisão sobre a instalação da fábrica.",
            },
            {
              id: "C",
              text: "as instituições e regras permanecem como estrutura do Estado, independentemente de qual governo as administra.",
            },
            {
              id: "D",
              text: "a nação de Vitória do Rio Verde deixará de existir se o governo mudar.",
            },
            {
              id: "E",
              text: "o país perde soberania sobre a área quando uma empresa internacional se instala nele.",
            },
          ],
          correctOptionId: "C",
          explanation:
            "A alternativa C está correta. Licenças, leis e órgãos fiscalizadores fazem parte da estrutura político-institucional do Estado — por isso continuam existindo e em vigor mesmo com a troca de governo. As demais alternativas confundem os conceitos: a alternativa A trata Estado e governo como sinônimos; a B ignora que instituições permanentes também têm papel na decisão; a D atribui à nação algo que depende do governo; e a E confunde a presença de uma empresa internacional com perda de soberania territorial, o que não decorre da situação descrita.",
        },
      ],
    },
    {
      id: "mude-o-olhar",
      title: "MUDE O OLHAR",
      kind: "reflection",
      cards: [
        {
          id: "decisao",
          before: "“A prefeitura decidiu trazer uma fábrica para a cidade.”",
          after:
            "“Uma decisão sobre um espaço compartilhado envolveu diferentes atores, com poder e interesses desiguais — o governo administra o processo, mas não é o único ator, nem decide sozinho.”",
        },
        {
          id: "fabrica",
          before: "“A fábrica vai gerar empregos.”",
          after:
            "“A fábrica só existe porque está conectada a uma rede produtiva internacional — os efeitos dessa decisão local atravessam escalas que vão muito além do município.”",
        },
        {
          id: "moradores",
          before: "“Alguns moradores são contra o progresso.”",
          after:
            "“Diferentes grupos atribuem significados distintos ao mesmo espaço — memória, pertencimento e interesse econômico não são a mesma coisa, e todos são objetos legítimos de análise.”",
        },
        {
          id: "governo-muda",
          before: "“Se o prefeito mudar, tudo pode mudar.”",
          after:
            "“As regras, licenças e instituições que envolvem essa decisão fazem parte do Estado — elas têm mais continuidade do que qualquer governo específico.”",
        },
      ],
      closing:
        "Você não terminou esta semana sabendo o que pensar sobre Vitória do Rio Verde. Terminou sabendo fazer perguntas melhores sobre ela.",
    },
  ],

  conclusion:
    "Você já observou, nomeou os conceitos, conectou as relações, diferenciou os conceitos mais parecidos e mudou o olhar sobre Vitória do Rio Verde. Você consegue, agora, olhar para uma notícia parecida e fazer perguntas melhores sobre território, poder, redes e instituições?",

  celebrationMessage: "Você terminou a semana sabendo fazer perguntas melhores.",
};
