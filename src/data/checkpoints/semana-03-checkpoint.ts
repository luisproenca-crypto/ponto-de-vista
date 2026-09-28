import type { CheckpointContent } from "@/lib/types";

/**
 * CHECKPOINT 03 — Semana 03
 * Tema: "SERRA CLARA — Dados, Narrativas e Decisões"
 *
 * Situação-problema fictícia (região de Serra Clara, Vale do Ipê e Ribeira
 * Nova) que atravessa as cinco etapas, revisitando os três eixos da
 * semana: Geografia Essencial (Aula 07 — população absoluta, densidade,
 * migração, urbanização), Geopolítica & Atualidades (Aula 08 — fonte,
 * evidência, contexto, enquadramento) e Política & Cidadania (Aula 09 —
 * representação e participação). Nenhum município real, partido ou
 * candidato é mencionado; o cenário não indica se o corredor de transporte
 * deve ser construído nem quem "deveria" decidir — apenas apresenta
 * dados, narrativas e atores para o aluno analisar.
 *
 * Rascunho editorial para revisão do Prof. Luis. O título do cabeçalho
 * ("CHECKPOINT 03") vem de `course.ts`; o nome do cenário está em
 * `scenario.title`.
 *
 * ATENÇÃO — limitação técnica identificada nesta etapa (não corrigida,
 * por estar fora do escopo autorizado): `CheckpointScenario` (em
 * `types.ts`) e `CheckpointScenarioBlock.tsx` não têm um campo
 * equivalente a `hideImage` — diferente de `lenses` e de
 * `DecisionInsightBlock`, que já suportam ocultar a imagem sem
 * placeholder. Com `image: null`, o componente sempre renderiza o
 * placeholder "Imagem da situação-problema" (o mesmo que apareceu nos
 * Checkpoints 01 e 02 antes de suas imagens reais serem adicionadas).
 * Não há, hoje, como evitar esse placeholder sem alterar `types.ts` ou o
 * componente — ambos fora do escopo desta etapa. Sinalizado no relatório
 * final; nenhuma alteração de tipo/componente foi feita.
 *
 * Este checkpoint ainda não está publicado em `src/data/course.ts`.
 */
export const checkpoint03Content: CheckpointContent = {
  intro:
    "Dados, narrativas e decisões: ao longo desta semana, você aprendeu a ler a distribuição da população, a avaliar informações antes de aceitá-las e a reconhecer como escolhas coletivas se transformam em representação. Este checkpoint reúne tudo isso em uma situação fictícia: a região de Serra Clara, criada exclusivamente para este exercício.",

  scenario: {
    title: "SERRA CLARA",
    description:
      "Serra Clara é uma região fictícia brasileira formada por três localidades: Serra Clara, que concentra serviços, comércio e instituições regionais; Vale do Ipê, que passou por crescimento urbano recente e recebeu novos moradores; e Ribeira Nova, que perdeu parte de sua população jovem para centros maiores. Um novo corredor de transporte é proposto para conectar as três localidades. Durante o debate público sobre o corredor, diferentes informações começam a circular. Documento A — Dados demográficos: apresenta a distribuição populacional da região, o crescimento recente e os movimentos migratórios entre as três localidades. Documento B — Manchete: enfatiza que Vale do Ipê estaria passando por uma “explosão populacional”. Documento C — Série histórica: mostra que o crescimento recente de Vale do Ipê é relevante, mas parte de uma base populacional menor do que a das outras duas localidades. Documento D — Participação: moradores das três localidades reivindicam participação na decisão sobre o corredor de transporte. Nenhum desses documentos deve ser lido como “a verdade”: são evidências e perspectivas que precisam ser comparadas.",
    image: {
      src: "/assets/checkpoints/semana-03-serra-clara.png",
      alt: "Mapa esquemático da região fictícia de Serra Clara, com as localidades Serra Clara, Vale do Ipê e Ribeira Nova e o corredor de transporte proposto.",
    },
  },

  steps: [
    {
      id: "observe",
      title: "OBSERVE",
      kind: "observation",
      questions: [
        "Onde a população da região está crescendo, e onde está diminuindo?",
        "Que movimentos estão acontecendo entre Serra Clara, Vale do Ipê e Ribeira Nova?",
        "Quem produziu cada um dos quatro documentos que circulam no debate?",
        "O que cada documento escolheu destacar?",
        "Quem está pedindo para participar da decisão sobre o corredor de transporte?",
        "Essa decisão afeta só as três localidades, ou também lugares fora delas?",
      ],
    },
    {
      id: "nomeie",
      title: "NOMEIE",
      kind: "cards",
      eyebrow: "Revisão da semana",
      subtitle:
        "Entre os conceitos que você estudou nesta semana, quais ajudam a analisar o caso de Serra Clara?",
      items: [
        {
          id: "populacao-absoluta",
          emoji: "🔢",
          name: "POPULAÇÃO ABSOLUTA",
          question: "Quantos moradores cada localidade tem, em números totais?",
        },
        {
          id: "densidade-demografica",
          emoji: "📐",
          name: "DENSIDADE DEMOGRÁFICA",
          question: "Como essa população se distribui pela área de cada localidade?",
        },
        {
          id: "migracao",
          emoji: "🧳",
          name: "MIGRAÇÃO",
          question: "Por que pessoas estão saindo de Ribeira Nova e chegando a Vale do Ipê?",
        },
        {
          id: "urbanizacao",
          emoji: "🏙️",
          name: "URBANIZAÇÃO",
          question: "O crescimento de Vale do Ipê é urbano, populacional, ou os dois?",
        },
        {
          id: "fonte",
          emoji: "🗞️",
          name: "FONTE",
          question: "Quem produziu a manchete, e quem produziu a série histórica?",
        },
        {
          id: "evidencia",
          emoji: "🔍",
          name: "EVIDÊNCIA",
          question: "Que dados apoiariam — ou não — a ideia de “explosão populacional”?",
        },
        {
          id: "contexto",
          emoji: "🧭",
          name: "CONTEXTO",
          question: "A base populacional de partida muda a leitura do crescimento?",
        },
        {
          id: "enquadramento",
          emoji: "🖼️",
          name: "ENQUADRAMENTO",
          question: "O que a manchete destacou, e o que a série histórica acrescenta?",
        },
        {
          id: "representacao",
          emoji: "🎤",
          name: "REPRESENTAÇÃO",
          question: "Quem decide oficialmente sobre o corredor de transporte, e sob quais regras?",
        },
        {
          id: "participacao",
          emoji: "🙋",
          name: "PARTICIPAÇÃO",
          question: "Que canais permitiriam aos moradores participar dessa decisão?",
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
        "População",
        "Território",
        "Dados",
        "Narrativas",
        "Interesses",
        "Representação",
        "Participação",
        "Decisões",
      ],
      highlight:
        "Uma decisão pública pode envolver números, interpretações, interesses, regras e participação ao mesmo tempo.",
      text: "O que será decidido sobre o corredor de transporte depende de como a população da região se distribui e se desloca, de como os dados sobre esse movimento são narrados por diferentes fontes, de quem tem interesse no resultado, e de como a representação institucional e os canais de participação dos moradores se articulam nessa decisão.",
    },
    {
      id: "diferencie",
      title: "DIFERENCIE",
      kind: "questions",
      questions: [
        {
          id: "s03-cp-q01",
          statement:
            "O Documento A informa que Vale do Ipê registrou aumento expressivo no número de moradores nos últimos anos, mas ainda ocupa uma área extensa em relação à sua população. Com base na distinção entre população absoluta e densidade demográfica, é correto afirmar que:",
          options: [
            {
              id: "A",
              text: "o aumento no número de moradores garante, por si só, que Vale do Ipê passou a ter a maior densidade demográfica da região.",
            },
            {
              id: "B",
              text: "população absoluta e densidade demográfica são a mesma medida, apenas com nomes diferentes.",
            },
            {
              id: "C",
              text: "Vale do Ipê pode ter aumentado sua população absoluta sem que isso signifique, necessariamente, alta densidade demográfica.",
            },
            {
              id: "D",
              text: "sem dados sobre estrutura etária, não é possível saber se a população de Vale do Ipê cresceu.",
            },
            {
              id: "E",
              text: "a densidade demográfica de Vale do Ipê só pode ser calculada a partir do saldo migratório.",
            },
          ],
          correctOptionId: "C",
          explanation:
            "A alternativa C está correta. Um aumento no número absoluto de moradores não define, por si só, a densidade demográfica: essa depende também da área ocupada. Como o texto indica que Vale do Ipê ocupa uma área extensa em relação à sua população, o crescimento absoluto não implica automaticamente alta densidade. As demais alternativas confundem os dois conceitos (A e B) ou introduzem exigências que não são necessárias para essa distinção (D e E).",
        },
        {
          id: "s03-cp-q02",
          statement:
            "Ribeira Nova perdeu parte de sua população jovem, que passou a residir em Vale do Ipê e em Serra Clara, em busca de emprego e de acesso a serviços. Esse movimento, que envolve mudança de residência entre as localidades da região, é mais bem descrito pelo conceito de:",
          options: [
            { id: "A", text: "deslocamento cotidiano, pois ocorre dentro da mesma região." },
            { id: "B", text: "migração interna, pois envolve mudança de residência entre localidades." },
            { id: "C", text: "crescimento vegetativo, pois altera o número de habitantes de Ribeira Nova." },
            { id: "D", text: "urbanização, pois os jovens passaram a viver em áreas urbanas." },
            { id: "E", text: "densidade demográfica, pois redistribui a população pelo território." },
          ],
          correctOptionId: "B",
          explanation:
            "A alternativa B está correta. O texto descreve pessoas mudando de residência entre localidades da mesma região — exatamente o que caracteriza a migração (nesse caso, interna, por ocorrer dentro do mesmo país). Não é deslocamento cotidiano, pois há mudança de moradia, não apenas um vaivém diário. Não é crescimento vegetativo, que se refere apenas a nascimentos e óbitos. Urbanização e densidade demográfica descrevem outros aspectos, não o movimento de saída e chegada de moradores descrito no enunciado.",
        },
        {
          id: "s03-cp-q03",
          statement:
            "O Documento B afirma que Vale do Ipê passa por uma “explosão populacional”. O Documento C mostra que esse crescimento, embora relevante, parte de uma base populacional menor do que a das outras duas localidades. Com base nos conceitos de enquadramento e contexto, é correto afirmar que:",
          options: [
            {
              id: "A",
              text: "como os dois documentos dizem coisas diferentes, pelo menos um deles contém informação falsa.",
            },
            {
              id: "B",
              text: "os dois documentos podem estar corretos ao mesmo tempo, pois destacam aspectos diferentes do mesmo crescimento populacional.",
            },
            {
              id: "C",
              text: "apenas o Documento C pode ser considerado confiável, por apresentar uma série histórica.",
            },
            {
              id: "D",
              text: "a manchete do Documento B deve ser ignorada, pois manchetes nunca apresentam dados verdadeiros.",
            },
            {
              id: "E",
              text: "a diferença entre os dois documentos só pode ser resolvida perguntando qual foi publicado primeiro.",
            },
          ],
          correctOptionId: "B",
          explanation:
            "A alternativa B está correta. O Documento B enfatiza a variação recente (enquadramento); o Documento C acrescenta o contexto da base populacional de partida. Os dois podem ser compatíveis: um crescimento pode ser proporcionalmente expressivo e, ainda assim, partir de uma base pequena — o que não torna nenhum dos dois documentos falso. As demais alternativas presumem incompatibilidade ou desqualificam um dos documentos sem base nos conceitos de enquadramento e contexto trabalhados na semana.",
        },
        {
          id: "s03-cp-q04",
          statement:
            "O Documento D mostra que moradores das três localidades reivindicam participação na decisão sobre o corredor de transporte, mesmo sabendo que a decisão final caberá formalmente às autoridades regionais eleitas. Com base na distinção entre representação e participação, é correto afirmar que:",
          options: [
            {
              id: "A",
              text: "a existência de autoridades eleitas torna desnecessária qualquer outra forma de participação dos moradores.",
            },
            {
              id: "B",
              text: "a reivindicação dos moradores é incompatível com a democracia representativa, pois contraria os representantes eleitos.",
            },
            {
              id: "C",
              text: "representação institucional e participação dos moradores podem coexistir, sem que uma elimine a outra.",
            },
            {
              id: "D",
              text: "só é possível participar dessa decisão votando novamente em novas eleições regionais.",
            },
            {
              id: "E",
              text: "a reivindicação dos moradores substitui automaticamente a autoridade das instituições eleitas.",
            },
          ],
          correctOptionId: "C",
          explanation:
            "A alternativa C está correta. A existência de autoridades eleitas (representação) não elimina a possibilidade de os moradores buscarem participar da decisão por outros canais — como audiências públicas ou consultas. As duas coisas coexistem: a decisão formal pode caber às autoridades, e ainda assim a participação dos moradores pode influenciar como e com quais informações essa decisão é tomada. As demais alternativas tratam representação e participação como excludentes, o que contraria o que foi estudado na Aula 09.",
        },
        {
          id: "s03-cp-q05",
          statement:
            "Três estudantes analisam o caso de Serra Clara. ESTUDANTE 1: “A manchete diz que há uma explosão populacional em Vale do Ipê. Portanto, isso é um problema urgente que precisa de solução imediata.” ESTUDANTE 2: “Toda manchete é enganosa. Portanto, nenhum dado sobre Vale do Ipê deve ser levado a sério.” ESTUDANTE 3: “Antes de concluir, preciso comparar os dados demográficos, a fonte e o contexto de cada documento, identificar os interesses envolvidos e considerar os canais de participação disponíveis aos moradores.” Qual estudante demonstra a análise mais consistente com o percurso da Semana 03?",
          options: [
            { id: "A", text: "Apenas o Estudante 1." },
            { id: "B", text: "Apenas o Estudante 2." },
            { id: "C", text: "Apenas o Estudante 3." },
            { id: "D", text: "Estudantes 1 e 2." },
            { id: "E", text: "Todos utilizam o mesmo tipo de raciocínio." },
          ],
          correctOptionId: "C",
          explanation:
            "A alternativa C está correta. O Estudante 1 aceita a manchete sem verificar fonte, contexto ou evidência. O Estudante 2 rejeita toda informação por princípio, o que também é uma forma de não analisar os dados disponíveis. O Estudante 3 não afirma qual decisão Serra Clara deveria tomar: ele reconhece as perguntas e evidências que precisam ser consideradas — dados, fonte, contexto, interesses e participação — antes de formar uma conclusão, exatamente o percurso construído ao longo da semana.",
        },
      ],
    },
    {
      id: "mude-o-olhar",
      title: "MUDE O OLHAR",
      kind: "reflection",
      cards: [
        {
          id: "populoso",
          before: "“Mais gente significa automaticamente maior densidade.”",
          after:
            "“População absoluta e densidade demográfica respondem a perguntas diferentes: quantas pessoas existem, e como elas se distribuem pela área.”",
        },
        {
          id: "manchete",
          before: "“Se duas manchetes são diferentes, uma delas necessariamente está mentindo.”",
          after:
            "“Informações verdadeiras podem receber enquadramentos diferentes; é preciso comparar fonte, contexto e evidências antes de concluir.”",
        },
        {
          id: "participar",
          before: "“Participação política acontece apenas nas eleições.”",
          after:
            "“Eleições são fundamentais, mas existem outros mecanismos de participação cidadã, como audiências públicas e o acompanhamento das decisões.”",
        },
      ],
      closing:
        "Você não terminou esta semana sabendo qual mapa é perfeito, qual manchete é mais honesta ou qual decisão Serra Clara deveria tomar sobre o corredor de transporte. Terminou sabendo fazer algo mais importante: ler quem está se movendo, perguntar de onde vêm as informações e compreender como decisões coletivas podem ser construídas.",
    },
  ],

  conclusion:
    "Você já observou os movimentos populacionais, nomeou os conceitos, conectou população, narrativas e decisões, testou seu raciocínio e mudou o olhar sobre Serra Clara. Você consegue, agora, olhar para uma situação parecida e perguntar: quem está se movendo, de onde vêm as informações, e quem participa da decisão?",

  celebrationMessage:
    "Você terminou a semana sabendo ler quem se move, de onde vêm as informações e como decisões coletivas se constroem.",
};
