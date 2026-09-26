import type { CheckpointContent } from "@/lib/types";

/**
 * CHECKPOINT 02 — Semana 02
 * Subtítulo: "Entre mapas, minerais e decisões"
 *
 * Situação-problema: REPÚBLICA DE NOVA AURORA — PAÍS FICTÍCIO criado
 * exclusivamente para este exercício. Integra os três
 * eixos da semana: Cartografia (Aula 04), Geopolítica (Aula 05) e
 * Cidadania (Aula 06).
 *
 * O aluno NÃO é orientado a escolher uma decisão política ou econômica.
 * O objetivo é ler representações, identificar interesses, comparar
 * evidências e formular perguntas melhores antes de concluir. Nenhum ator,
 * partido, governo ou país real é mencionado.
 *
 * Elementos do cenário, documentos A–D e as cinco questões foram
 * fornecidos pelo Prof. Luis. O título do cabeçalho ("CHECKPOINT 02") vem
 * de `course.ts`; o nome do cenário está em `scenario.title`.
 *
 * Este checkpoint ainda não está publicado em `src/data/course.ts`.
 */
export const checkpoint02Content: CheckpointContent = {
  intro:
    "Entre mapas, minerais e decisões: ao longo desta semana, você aprendeu a ler mapas com critério, a analisar a relação entre grandes economias e a reconhecer como uma sociedade democrática lida com decisões coletivas. Este checkpoint reúne tudo isso em uma situação fictícia: a República de Nova Aurora, um país criado exclusivamente para este exercício.",

  scenario: {
    title: "REPÚBLICA DE NOVA AURORA",
    description:
      "Nova Aurora é um país fictício criado exclusivamente para este exercício. A República de Nova Aurora é um pequeno país localizado próximo a uma importante rota comercial. Pesquisadores identificaram uma grande reserva de lítio e terras raras no interior do país. A descoberta atraiu empresas estrangeiras e propostas de infraestrutura ferroviária. O país precisa analisar possíveis benefícios econômicos, impactos territoriais e ambientais, dependências externas e mecanismos de participação da população. No mapa, na escala 1:2.000.000, aparecem: Aurora Central (a capital); o Porto de Solaris; Vale Claro (a área da reserva mineral); a Serra de Aruna; o Território Tradicional de Aruá; o Rio Esperança; e duas possíveis rotas ferroviárias, a Rota A e a Rota B. Quatro documentos circulam no debate. Documento A — Economia: “A exploração dos minerais pode ampliar exportações, gerar receitas públicas e estimular investimentos em infraestrutura.” Documento B — Comunidade de Aruá: “Moradores reivindicam participação nas decisões porque o projeto pode afetar áreas utilizadas tradicionalmente pela comunidade.” Documento C — Investimento: “Um consórcio estrangeiro propõe financiar parte da ferrovia em troca de contratos de fornecimento mineral de longo prazo.” Documento D — Análise estratégica: “A dependência excessiva de apenas um comprador pode aumentar a vulnerabilidade externa do país. A diversificação pode reduzir esse risco.” Nenhum desses documentos é “a verdade”: são perspectivas e evidências a comparar.",
    // Mapa de Nova Aurora em versão 16:9 (margens em creme, mapa intacto):
    // a moldura do `AssetImage` é 16:9 com corte, e o original 4:3
    // perderia título e coordenadas.
    image: {
      src: "/assets/checkpoints/semana-02-nova-aurora-16x9.png",
      alt: "Mapa da República de Nova Aurora mostrando Aurora Central, Porto de Solaris, Vale Claro, Serra de Aruna, Território Tradicional de Aruá, Rio Esperança e as rotas ferroviárias A e B.",
    },
  },

  steps: [
    {
      id: "observe",
      title: "OBSERVE",
      kind: "observation",
      questions: [
        "Quais grupos e atores aparecem na situação de Nova Aurora?",
        "O que o mapa escolheu mostrar — e o que ficou de fora?",
        "O que cada documento afirma, e de onde essa afirmação parece partir?",
        "Essa situação afeta só Nova Aurora, ou também lugares fora dela?",
        "Que mudanças no território a reserva e a ferrovia poderiam provocar?",
      ],
    },
    {
      id: "nomeie",
      title: "NOMEIE",
      kind: "cards",
      eyebrow: "Revisão da semana",
      subtitle:
        "Entre os conceitos que você estudou nesta semana, quais ajudam a analisar o caso de Nova Aurora?",
      items: [
        {
          id: "escala",
          emoji: "📏",
          name: "ESCALA",
          question: "Quanto a realidade foi reduzida neste mapa?",
        },
        {
          id: "orientacao-localizacao",
          emoji: "🧭",
          name: "ORIENTAÇÃO E LOCALIZAÇÃO",
          question:
            "Onde estão a reserva, o porto e a capital, e como o mapa está orientado?",
        },
        {
          id: "fonte-data",
          emoji: "🗓️",
          name: "FONTE E DATA",
          question: "Segundo quem? Quando? Cada documento informa isso?",
        },
        {
          id: "competicao",
          emoji: "🎯",
          name: "COMPETIÇÃO",
          question: "Quem poderia disputar o acesso aos minerais, e em que dimensões?",
        },
        {
          id: "interdependencia",
          emoji: "🔗",
          name: "INTERDEPENDÊNCIA",
          question: "Quem depende de quem nessa cadeia — dentro e fora do país?",
        },
        {
          id: "de-risking",
          emoji: "🧩",
          name: "DE-RISKING",
          question:
            "Como reduzir uma dependência considerada estratégica sem necessariamente romper relações?",
        },
        {
          id: "democracia",
          emoji: "🗳️",
          name: "DEMOCRACIA",
          question:
            "Que mecanismos de informação, participação e representação poderiam existir?",
        },
        {
          id: "cidadania",
          emoji: "🙋",
          name: "CIDADANIA",
          question: "Que direitos e formas de participação vão além do voto?",
        },
        {
          id: "constituicao",
          emoji: "📜",
          name: "REGRAS E LIMITES",
          question: "Que regras e limites valem para todos, inclusive para quem decide?",
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
        "Mapa",
        "Território",
        "Evidências",
        "Interesses",
        "Dependências",
        "Participação",
        "Perguntas melhores",
      ],
      highlight: "Antes de concluir, compare evidências e formule perguntas melhores.",
      text: "Conecte o que o mapa mostra às perguntas que a situação exige. Que evidências sustentam cada interpretação? Que informações ainda estão faltando? Quais interesses aparecem em cada documento? Nenhum documento é “a verdade”: cada um é uma perspectiva a comparar.",
    },
    {
      id: "diferencie",
      title: "DIFERENCIE",
      kind: "questions",
      questions: [
        {
          id: "s02-cp-q01",
          statement:
            "No mapa de Nova Aurora, a distância em linha reta entre Vale Claro e Aurora Central mede aproximadamente 6 cm. Sabendo que a escala utilizada é 1:2.000.000, a distância real aproximada entre os dois locais é:",
          options: [
            { id: "A", text: "12 km" },
            { id: "B", text: "20 km" },
            { id: "C", text: "60 km" },
            { id: "D", text: "120 km" },
            { id: "E", text: "1.200 km" },
          ],
          correctOptionId: "D",
          explanation:
            "1 cm no mapa corresponde a 20 km na realidade (na escala 1:2.000.000, 1 cm equivale a 2.000.000 cm, ou seja, 20 km). Assim, 6 × 20 km = 120 km.",
        },
        {
          id: "s02-cp-q02",
          statement:
            "Um estudante observa que a Rota A é mais curta e conclui: “Então ela necessariamente é a melhor opção para Nova Aurora.” Qual avaliação é mais adequada?",
          options: [
            {
              id: "A",
              text: "A conclusão é correta, pois distância é o único critério relevante para projetos de infraestrutura.",
            },
            {
              id: "B",
              text: "A conclusão é incorreta, porque mapas nunca podem ser usados para planejamento territorial.",
            },
            {
              id: "C",
              text: "A conclusão é insuficiente, porque o mapa apresenta informações espaciais importantes, mas a decisão também pode envolver aspectos ambientais, sociais, econômicos e políticos.",
            },
            {
              id: "D",
              text: "A conclusão é correta porque uma escala maior garante que a rota seja economicamente mais eficiente.",
            },
            {
              id: "E",
              text: "A conclusão é incorreta porque ferrovias não podem atravessar regiões próximas a recursos minerais.",
            },
          ],
          correctOptionId: "C",
          explanation:
            "O mapa oferece evidências, mas não contém sozinho todas as respostas. Uma representação cartográfica seleciona determinadas informações da realidade.",
        },
        {
          id: "s02-cp-q03",
          statement:
            "Após a descoberta dos minerais, dois grandes mercados internacionais demonstram interesse em comprar a produção de Nova Aurora. O governo percebe que depender quase integralmente de apenas um deles poderia criar vulnerabilidade caso ocorram sanções, conflitos comerciais ou interrupções logísticas. Uma política de buscar diversos compradores estaria mais próxima da lógica de:",
          options: [
            {
              id: "A",
              text: "autarquia, porque encerraria o comércio internacional.",
            },
            {
              id: "B",
              text: "de-risking, porque buscaria reduzir uma dependência considerada excessiva sem eliminar as relações comerciais.",
            },
            {
              id: "C",
              text: "isolamento econômico, porque impediria investimentos estrangeiros.",
            },
            {
              id: "D",
              text: "colonialismo, porque transferiria automaticamente a soberania do território.",
            },
            {
              id: "E",
              text: "cartografia temática, porque alteraria a escala utilizada no planejamento.",
            },
          ],
          correctOptionId: "B",
          explanation:
            "Diversificar não significa romper. O objetivo é diminuir determinada vulnerabilidade sem necessariamente encerrar as relações econômicas.",
        },
        {
          id: "s02-cp-q04",
          statement:
            "O governo de Nova Aurora anuncia que pretende discutir a construção da ferrovia. Moradores das áreas potencialmente afetadas reivindicam participação no processo. Qual situação é mais compatível com princípios democráticos?",
          options: [
            {
              id: "A",
              text: "A inexistência de divergências entre cidadãos antes que uma decisão seja tomada.",
            },
            {
              id: "B",
              text: "A obrigação de aceitar qualquer posição defendida pela maioria, independentemente das normas existentes.",
            },
            {
              id: "C",
              text: "A existência de mecanismos institucionais de informação, participação, representação e decisão, mesmo que diferentes grupos continuem discordando.",
            },
            {
              id: "D",
              text: "A transferência de toda decisão para empresas privadas porque elas financiarão parte do projeto.",
            },
            {
              id: "E",
              text: "A eliminação da participação popular para evitar conflitos entre interesses diferentes.",
            },
          ],
          correctOptionId: "C",
          explanation:
            "Democracia não elimina conflitos de interesse. Ela cria mecanismos para lidar com divergências por meio de regras, participação, representação e instituições.",
        },
        {
          id: "s02-cp-q05",
          statement:
            "Três estudantes analisam o caso de Nova Aurora. ESTUDANTE 1: “Os minerais vão gerar dinheiro. Portanto, Nova Aurora deve aceitar imediatamente a proposta estrangeira.” ESTUDANTE 2: “Existe risco ambiental. Portanto, qualquer exploração mineral deve ser automaticamente rejeitada.” ESTUDANTE 3: “Antes de concluir, precisamos comparar benefícios econômicos, riscos ambientais, dependências externas, impactos territoriais e mecanismos de participação da população.” Qual estudante demonstra a análise mais consistente com o percurso da Semana 02?",
          options: [
            { id: "A", text: "Apenas o Estudante 1." },
            { id: "B", text: "Apenas o Estudante 2." },
            { id: "C", text: "Apenas o Estudante 3." },
            { id: "D", text: "Estudantes 1 e 2." },
            { id: "E", text: "Todos utilizam o mesmo tipo de raciocínio." },
          ],
          correctOptionId: "C",
          explanation:
            "O Estudante 3 não disse qual decisão Nova Aurora deve tomar. Ele identificou as perguntas e evidências que precisam ser consideradas antes de formar uma conclusão.",
        },
      ],
    },
    {
      id: "mude-o-olhar",
      title: "MUDE O OLHAR",
      kind: "reflection",
      cards: [
        {
          id: "mapa",
          before: "“O mapa mostra tudo o que preciso saber.”",
          after:
            "“Todo mapa é uma escolha: mostra algumas informações e deixa outras de fora. Antes de concluir, pergunto o que foi mostrado, como foi mostrado e o que ficou de fora.”",
        },
        {
          id: "rota",
          before: "“A rota mais curta é necessariamente a melhor.”",
          after:
            "“A distância é uma informação importante, mas a decisão também pode envolver aspectos ambientais, sociais, econômicos e políticos.”",
        },
        {
          id: "diversificacao",
          before: "“Diversificar compradores é romper relações.”",
          after:
            "“Diversificar pode reduzir uma vulnerabilidade sem necessariamente encerrar as relações econômicas.”",
        },
        {
          id: "divergencia",
          before: "“Se há divergência, a democracia falhou.”",
          after:
            "“Democracia não elimina conflitos de interesse: ela cria mecanismos para lidar com divergências por meio de regras, participação, representação e instituições.”",
        },
      ],
      closing:
        "Você não terminou esta semana sabendo qual mapa é perfeito, qual potência está “certa” ou qual decisão Nova Aurora deveria tomar. Terminou sabendo fazer algo mais importante: ler representações, identificar interesses, comparar evidências e formular perguntas melhores antes de concluir.",
    },
  ],

  conclusion:
    "Você já leu o mapa, nomeou os conceitos, conectou território, evidências e interesses, testou seu raciocínio e mudou o olhar sobre Nova Aurora. Você consegue, agora, olhar para uma situação parecida e perguntar: o que foi mostrado, como foi mostrado, o que ficou de fora — e que evidências ainda estão faltando?",

  celebrationMessage: "A prova termina. Seu Ponto de Vista continua.",
};
