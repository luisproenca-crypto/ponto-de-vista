import type { CheckpointContent } from "@/lib/types";

/**
 * CHECKPOINT 06 — Semana 06
 * Tema: "REGIÃO DE SERRA DO CEDRO — Clima, Energia e Poder"
 *
 * Situação-problema inteiramente fictícia que reúne os três eixos da
 * semana: Geografia Essencial (Aula 16 — perigo, exposição,
 * vulnerabilidade, risco, mitigação, adaptação e escala), Geopolítica &
 * Atualidades (Aula 17 — fontes, segurança energética, dependência e
 * interdependência, transição e poder) e Política & Cidadania (Aula 18 —
 * governança, governança multinível, compromisso e implementação,
 * financiamento, monitoramento e cumprimento).
 *
 * Pergunta-guia: "Quando clima, energia e poder se encontram no mesmo
 * território, quem é vulnerável, quem pode agir e qual resposta faz
 * sentido?" Cadeia cognitiva: fenômeno → risco → infraestrutura →
 * dependência → atores → decisão → implementação.
 *
 * O checkpoint não ensina conteúdo novo. Todos os nomes, números e
 * instituições do cenário são fictícios (sem partidos, candidatos ou
 * governos reais). O nome "Serra Clara" foi evitado porque já é o cenário
 * do Checkpoint 03.
 *
 * Arte do cenário: /public/assets/checkpoints/semana-06-serra-do-cedro.png
 * (mapa ilustrado 16:9).
 */
export const checkpoint06Content: CheckpointContent = {
  intro:
    "Clima, energia e poder: nesta semana, você aprendeu a separar o fenômeno do dano, a ler a energia como relação de dependência e poder e a reconhecer como atores diferentes tentam agir em conjunto. Este checkpoint reúne as três leituras numa situação fictícia: quando clima, energia e poder se encontram no mesmo território, quem é vulnerável, quem pode agir e qual resposta faz sentido?",

  scenario: {
    title: "REGIÃO DE SERRA DO CEDRO",
    description:
      "A Região de Serra do Cedro é uma região fictícia brasileira formada por três municípios ligados pelo mesmo rio e pela mesma rede elétrica. Porto das Águas, o maior, com cerca de 180 mil habitantes, concentra hospitais, comércio e serviços; cerca de 12% da população vive na várzea do rio. Alto Cedro, com cerca de 30 mil habitantes, cresceu sobre encostas íngremes: cerca de 28% da população mora em áreas de risco de deslizamento, e o município tem o menor orçamento por habitante da região e nenhuma equipe técnica permanente de defesa civil. Vale Novo, com cerca de 60 mil habitantes, vive da agroindústria, que depende de irrigação e refrigeração elétricas. Uma pequena hidrelétrica no reservatório do rio atende cerca de 30% do consumo regional; o restante chega por uma única linha de transmissão, que cruza as encostas de Alto Cedro até a subestação regional. No último verão, ondas de calor elevaram o consumo de energia enquanto o reservatório baixava. Semanas depois, chuvas intensas, de volume semelhante nos três municípios, provocaram deslizamentos em Alto Cedro, alagamentos na várzea de Porto das Águas e a queda de torres da linha: a região ficou dois dias com fornecimento parcial. Desde então, surgiram propostas. A prefeitura de Porto das Águas anunciou um plano de adaptação ao calor, ainda sem orçamento aprovado. O governo estadual propôs um parque solar em Vale Novo, apresentado como o caminho para a “autossuficiência energética” da região. A empresa de energia propôs uma segunda linha, por outro traçado, que depende de autorização do órgão regulador federal. E o consórcio intermunicipal, que monitora o rio e as encostas, propôs um sistema de alerta e o reassentamento de famílias em áreas de risco de Alto Cedro, que a prefeitura não consegue financiar sozinha. Todos os dados são do cenário fictício.",
    image: {
      src: "/assets/checkpoints/semana-06-serra-do-cedro.png",
      alt: "Mapa ilustrado da região fictícia de Serra do Cedro, com Alto Cedro, Vale Novo e Porto das Águas e seus limites municipais. A linha única de transmissão traz energia do sistema interligado nacional de fora da região, atravessa as encostas ocupadas de Alto Cedro, com risco de deslizamento e torres destruídas pela chuva, e chega à Subestação Porto. Aparecem também a PCH Cedro no Reservatório das Águas, com cerca de 30% do consumo regional, o parque solar proposto em Vale Novo, a área de calor extremo e a várzea de Porto das Águas com risco de inundação.",
      caption: "Cenário fictício criado para fins didáticos. Observe as áreas de risco, a linha de transmissão, a subestação e os limites entre os municípios antes de responder.",
    },
  },

  steps: [
    {
      id: "observe",
      title: "OBSERVE",
      kind: "observation",
      questions: [
        "Se a chuva teve volume semelhante nos três municípios, por que os danos foram tão diferentes?",
        "Quem estava mais exposto, e quem tinha menos meios para se proteger e se recuperar?",
        "Por que a queda de torres em Alto Cedro afetou também Porto das Águas e Vale Novo?",
        "Quem, no cenário, pode agir, financiar, regular, executar e monitorar?",
        "Quais propostas atuam sobre as causas, quais reduzem danos e quais aumentam a segurança do abastecimento?",
        "O que já foi anunciado e o que ainda depende de orçamento, autorização ou execução?",
      ],
    },
    {
      id: "nomeie",
      title: "NOMEIE",
      kind: "cards",
      eyebrow: "Revisão da semana",
      subtitle:
        "Quais ferramentas das Aulas 16, 17 e 18 ajudam a ler Serra do Cedro sem reduzir a situação ao fenômeno físico?",
      items: [
        {
          id: "perigo-risco",
          emoji: "⚠️",
          name: "PERIGO E RISCO",
          question: "A chuva foi o perigo; o que transformou o perigo em risco maior em Alto Cedro?",
        },
        {
          id: "exposicao-vulnerabilidade",
          emoji: "🏘️",
          name: "EXPOSIÇÃO E VULNERABILIDADE",
          question: "Quem estava no caminho da água e das encostas, e quem tinha menos capacidade de resposta?",
        },
        {
          id: "mitigacao-adaptacao",
          emoji: "🛠️",
          name: "MITIGAÇÃO E ADAPTAÇÃO",
          question: "Qual proposta atua sobre as causas da mudança climática, e qual reduz o dano no lugar?",
        },
        {
          id: "seguranca-energetica",
          emoji: "🛡️",
          name: "SEGURANÇA ENERGÉTICA",
          question: "O abastecimento resiste a um choque, ou depende de um único ponto?",
        },
        {
          id: "dependencia",
          emoji: "🔗",
          name: "DEPENDÊNCIA E INTERDEPENDÊNCIA",
          question: "Quem depende da linha, e quem também depende de que ela funcione?",
        },
        {
          id: "transicao",
          emoji: "🔄",
          name: "TRANSIÇÃO",
          question: "Uma nova fonte muda a matriz da região; o que ela não resolve?",
        },
        {
          id: "multinivel",
          emoji: "🏛️",
          name: "GOVERNANÇA MULTINÍVEL",
          question: "Que parte da resposta cabe ao município, ao estado, à União e às empresas?",
        },
        {
          id: "compromisso-implementacao",
          emoji: "📝",
          name: "COMPROMISSO E IMPLEMENTAÇÃO",
          question: "Qual proposta foi anunciada, e qual já tem orçamento, autorização e execução?",
        },
        {
          id: "monitoramento",
          emoji: "🛰️",
          name: "MONITORAMENTO E CUMPRIMENTO",
          question: "Quem mede o risco, e quem tem poder para decidir e executar a partir dessa medida?",
        },
      ],
      highlight:
        "Ler bem Serra do Cedro exige juntar o risco, a energia e a governança, sem confundir uma coisa com a outra.",
    },
    {
      id: "atores",
      title: "QUEM PODE FAZER O QUÊ?",
      kind: "cards",
      eyebrow: "Atores do cenário",
      subtitle:
        "Nenhum ator tem todas as capacidades. Observe o que cada um pode fazer, e o que não pode.",
      items: [
        {
          id: "porto-das-aguas",
          emoji: "🏙️",
          name: "PREFEITURA DE PORTO DAS ÁGUAS",
          question: "Tem mais orçamento e equipe; pode planejar a cidade, mas não controla a linha nem o rio a montante.",
        },
        {
          id: "alto-cedro",
          emoji: "⛰️",
          name: "PREFEITURA DE ALTO CEDRO",
          question: "Concentra o maior risco de deslizamento, mas tem o menor orçamento e nenhuma equipe técnica permanente.",
        },
        {
          id: "vale-novo",
          emoji: "🌾",
          name: "PREFEITURA DE VALE NOVO",
          question: "Abriga a agroindústria e o parque solar proposto, mas depende da mesma linha para o restante da energia.",
        },
        {
          id: "estado",
          emoji: "🏛️",
          name: "GOVERNO ESTADUAL",
          question: "Pode coordenar a defesa civil regional e cofinanciar obras; propôs o parque solar.",
        },
        {
          id: "uniao",
          emoji: "🇧🇷",
          name: "UNIÃO E ÓRGÃO REGULADOR",
          question: "Regula o setor elétrico e decide se autoriza a segunda linha; pode financiar prevenção.",
        },
        {
          id: "empresa",
          emoji: "⚡",
          name: "EMPRESA DE ENERGIA",
          question: "Opera a linha e depende dela para vender energia; propôs a segunda linha, que precisa de autorização.",
        },
        {
          id: "consorcio",
          emoji: "🛰️",
          name: "CONSÓRCIO INTERMUNICIPAL",
          question: "Monitora o rio e as encostas e propõe alertas; não tem poder de punir nem orçamento próprio para obras.",
        },
        {
          id: "moradores",
          emoji: "🏘️",
          name: "MORADORES DAS ÁREAS DE RISCO",
          question: "Sofrem primeiro os danos; podem pressionar e participar, mas não decidem sozinhos onde e como morar com segurança.",
        },
      ],
      highlight:
        "Quem sofre não é quem financia; quem financia não é quem regula; quem regula não é quem executa; quem monitora não pune.",
    },
    {
      id: "conecte",
      title: "CONECTE",
      kind: "flow",
      flow: ["Fenômeno", "Risco", "Infraestrutura", "Dependência", "Atores", "Decisão", "Implementação"],
      highlight:
        "O fenômeno é o ponto de partida; a resposta depende do território, da energia e de quem consegue agir.",
      text:
        "A chuva foi semelhante nos três municípios, mas o risco não: em Alto Cedro, encostas ocupadas e pouca capacidade de resposta transformaram o mesmo perigo em dano maior. A linha de transmissão cruza justamente essas encostas, e por isso um problema local virou falta de energia em toda a região. As propostas atuam em pontos diferentes: algumas reduzem emissões, outras reduzem exposição, outras aumentam a segurança do abastecimento. E cada uma depende de atores diferentes para sair do anúncio e chegar à execução.",
    },
    {
      id: "decida",
      title: "DECIDA",
      kind: "questions",
      questions: [
        {
          id: "s06-cp-q01",
          statement:
            "Em Serra do Cedro, chuvas intensas de volume semelhante nos três municípios causaram mais danos em Alto Cedro, onde muitas famílias vivem em encostas e a prefeitura tem pouco orçamento e nenhuma equipe técnica permanente. A queda de torres da única linha de transmissão, que cruza essas encostas, deixou toda a região com fornecimento parcial. Estão em discussão um parque solar em Vale Novo, apresentado como caminho para a “autossuficiência energética”; uma segunda linha por outro traçado, que depende de autorização federal; e um sistema de alerta com reassentamento em Alto Cedro, proposto pelo consórcio que monitora as encostas. A leitura mais adequada da situação é que",
          options: [
            {
              id: "A",
              text: "como a chuva foi semelhante nos três municípios, o risco também foi semelhante, e os danos maiores em Alto Cedro se explicam pelo acaso; a linha única é um ponto de falha para toda a região; e o alerta, por já ter sido proposto pelo consórcio, garante a proteção das famílias que vivem nas encostas.",
            },
            {
              id: "B",
              text: "os danos maiores em Alto Cedro vêm da combinação entre chuva intensa, ocupação das encostas e pouca capacidade local de resposta; e o parque solar diversifica a geração, mas não elimina por si só a vulnerabilidade da linha única nem substitui o alerta e a adaptação, que Alto Cedro não custeia sozinho.",
            },
            {
              id: "C",
              text: "os danos maiores em Alto Cedro vêm da combinação entre chuva intensa, ocupação das encostas e pouca capacidade local de resposta; o parque solar, ao reduzir emissões, é a principal adaptação às chuvas; e, ao tornar a região autossuficiente, dispensa a segunda linha de transmissão e a dependência da rede.",
            },
            {
              id: "D",
              text: "os danos maiores em Alto Cedro vêm da combinação entre chuva intensa, ocupação das encostas e pouca capacidade local de resposta; a linha única é um ponto de falha para toda a região; e cabe ao consórcio, que monitora as encostas, punir a empresa pelas interrupções e executar sozinho as obras necessárias.",
            },
            {
              id: "E",
              text: "os danos maiores em Alto Cedro vêm da combinação entre chuva intensa, ocupação das encostas e pouca capacidade local de resposta; a linha única prejudica os municípios que recebem a energia, mas não a empresa; e cada prefeitura deve financiar as próprias obras de prevenção, porque o risco é local.",
            },
          ],
          correctOptionId: "B",
          explanation:
            "A alternativa B está correta, porque articula as três aulas. 1. CLIMA: o fenômeno é a sequência de calor e chuva intensa, semelhante em toda a região. 2. RISCO: o dano variou porque a exposição e a vulnerabilidade variaram; em Alto Cedro, encostas ocupadas e pouca capacidade de resposta transformaram o mesmo perigo em risco maior (Aula 16). 3. ENERGIA: a linha única concentra a dependência num ponto de falha que atinge todos, inclusive a empresa; o parque solar diversifica a geração, mas não garante segurança sem redundância na transmissão (Aula 17). 4. PODER E GOVERNANÇA: quem sofre (moradores de Alto Cedro) não é quem pode financiar (estado e União), quem autoriza a nova linha (órgão regulador federal) nem quem monitora (consórcio) (Aula 18). 5. RESPOSTA: o parque solar é diversificação e pode contribuir para a mitigação; a segunda linha aumenta a segurança energética; alerta e reassentamento são adaptação e dependem de financiamento compartilhado para sair do papel. A confunde perigo com risco e proposta com proteção garantida. C trata mitigação como adaptação e autonomia como segurança. D confunde monitorar com punir e ignora os demais níveis. E vê a dependência só do lado de quem recebe a energia e supõe que um nível de governo resolve sozinho.",
          optionFeedback: {
            A: "Perigo não é risco: a mesma chuva produziu danos diferentes porque a exposição e a vulnerabilidade eram diferentes. E propor um alerta não é implementá-lo.",
            B: "Correta: liga risco, dependência energética e capacidades diferentes de cada ator.",
            C: "O parque solar não adapta as encostas às chuvas, e gerar parte da energia na região não garante segurança sem redundância na transmissão.",
            D: "O consórcio monitora e propõe, mas não pune nem executa sozinho: as obras dependem de financiamento e de outros níveis de governo.",
            E: "A empresa também depende da linha para operar, e Alto Cedro, com o menor orçamento, não consegue financiar sozinha a redução do próprio risco.",
          },
        },
      ],
    },
    {
      id: "mude-o-olhar",
      title: "MUDE O OLHAR",
      kind: "reflection",
      cards: [
        {
          id: "mesma-chuva",
          before: "“Se a chuva foi igual, o estrago deveria ter sido igual.”",
          after:
            "“O perigo foi semelhante; o risco não. Onde havia mais exposição e menos capacidade de resposta, o mesmo evento virou dano maior.”",
        },
        {
          id: "autossuficiencia",
          before: "“Com um parque solar, a região fica autossuficiente e segura.”",
          after:
            "“Uma nova fonte diversifica a geração, mas segurança também depende de redundância, transmissão e capacidade de atravessar o choque.”",
        },
        {
          id: "anuncio",
          before: "“Se a proposta foi anunciada, o problema está sendo resolvido.”",
          after:
            "“Anunciar não é implementar: orçamento, autorização e execução são etapas que podem envolver outros atores.”",
        },
        {
          id: "quem-resolve",
          before: "“Alguém precisa resolver tudo isso sozinho.”",
          after:
            "“Quem sofre, quem financia, quem regula, quem executa e quem monitora são atores diferentes. A resposta depende de coordená-los.”",
        },
      ],
      closing:
        "Aula 16: entender por que o mesmo fenômeno não produz o mesmo dano. Aula 17: entender como a energia cria dependências e relações de poder. Aula 18: entender como diferentes atores coordenam respostas. Checkpoint 06: usar as três lentes ao mesmo tempo para interpretar e decidir.",
    },
  ],

  conclusion:
    "Diante de um problema socioambiental, você já consegue fazer uma leitura em camadas: qual é o fenômeno; por que o risco varia entre lugares e pessoas; que dependências a infraestrutura cria; quem pode agir, financiar, regular, executar e monitorar; e o que é mitigação, o que é adaptação e o que ainda depende de implementação.",

  celebrationMessage:
    "Semana 06 concluída: agora você lê clima, energia e poder juntos, do fenômeno à decisão.",
};
