import type { CheckpointContent } from "@/lib/types";

/**
 * CHECKPOINT 04 — Semana 04
 * Tema: "PORTO NOVO — Cidades, Conflitos e Decisões"
 *
 * Situação-problema inteiramente fictícia que reúne os três eixos da
 * semana: Geografia Essencial (Aula 10 — rede urbana, hierarquia,
 * metropolização, conurbação e segregação socioespacial), Geopolítica &
 * Atualidades (Aula 11 — natureza dos conflitos, atores, deslocamentos e
 * mediação) e Política & Cidadania (Aula 12 — Legislativo, Executivo,
 * Judiciário e freios e contrapesos).
 *
 * O objetivo não é avaliar se uma política de acolhimento é "boa" ou
 * "ruim", nem tomar posição sobre um conflito. O aluno deve reconhecer
 * processos espaciais, classificar atores e escalas e identificar a função
 * institucional exercida em cada etapa.
 *
 * Rascunho editorial versionado, ainda não publicado em course.ts.
 * A imagem permanece nula até a arte do cenário ser aprovada.
 */
export const checkpoint04Content: CheckpointContent = {
  intro:
    "Cidades, conflitos e poderes: nesta semana, você aprendeu a enxergar as cidades como redes, a classificar conflitos antes de opinar sobre eles e a compreender como os três Poderes se relacionam. Este checkpoint reúne essas três leituras em uma única situação fictícia: a região metropolitana de Porto Novo.",

  scenario: {
    title: "PORTO NOVO",
    description:
      "Porto Novo é uma metrópole fictícia de um país também fictício. Nas últimas décadas, sua área construída cresceu até se encontrar com a de Ribeira, município vizinho. Mesmo mantendo administrações municipais separadas, milhares de moradores de Ribeira se deslocam diariamente para Porto Novo em busca de trabalho, universidades e serviços de saúde especializados. Nos bairros periféricos da região metropolitana, o acesso a transporte coletivo, saneamento e equipamentos públicos é desigual. Ao mesmo tempo, um conflito dentro do país vizinho de Serra Norte, entre o governo central e um grupo regional armado que disputa o controle de uma área com importantes reservas de água, levou famílias a atravessar a fronteira internacional em busca de proteção. Parte delas chegou à região de Porto Novo. Diante do aumento da demanda por moradia temporária, o Poder Executivo estadual anunciou um programa emergencial de acolhimento e encaminhou ao Legislativo um pedido de recursos. Uma associação de moradores questionou na Justiça um dos atos administrativos do programa, alegando incompatibilidade com regras constitucionais. Enquanto isso, um organismo multilateral tenta aproximar as partes do conflito em Serra Norte para abrir negociações. Nenhum desses fatos, isoladamente, diz se o programa é adequado ou quem tem razão no conflito: eles permitem analisar processos, atores, escalas e instituições.",
    image: null,
  },

  steps: [
    {
      id: "observe",
      title: "OBSERVE",
      kind: "observation",
      questions: [
        "O que mostra que Porto Novo e Ribeira estão fisicamente próximas e funcionalmente conectadas?",
        "Que diferenças de acesso a serviços aparecem dentro da região metropolitana?",
        "O conflito em Serra Norte ocorre entre quais atores e em que escala?",
        "As famílias deslocadas permaneceram no próprio país ou cruzaram uma fronteira internacional?",
        "Que papel é exercido pelo Executivo, pelo Legislativo e pelo Judiciário no programa de acolhimento?",
        "Onde aparece uma tentativa de mediação, e quem a realiza?",
      ],
    },
    {
      id: "nomeie",
      title: "NOMEIE",
      kind: "cards",
      eyebrow: "Revisão da semana",
      subtitle:
        "Quais conceitos das Aulas 10, 11 e 12 ajudam a explicar o que está acontecendo em Porto Novo e Serra Norte?",
      items: [
        {
          id: "rede-urbana",
          emoji: "🕸️",
          name: "REDE URBANA",
          question: "Que fluxos conectam Porto Novo e Ribeira diariamente?",
        },
        {
          id: "hierarquia-urbana",
          emoji: "🏙️",
          name: "HIERARQUIA URBANA",
          question: "Por que Porto Novo atrai moradores de outras cidades para serviços especializados?",
        },
        {
          id: "metropolizacao",
          emoji: "🌆",
          name: "METROPOLIZAÇÃO",
          question: "Como Porto Novo organiza parte da vida cotidiana dos municípios ao redor?",
        },
        {
          id: "conurbacao",
          emoji: "🧩",
          name: "CONURBAÇÃO",
          question: "O que significa as áreas construídas de Porto Novo e Ribeira terem se encontrado?",
        },
        {
          id: "segregacao-socioespacial",
          emoji: "🗺️",
          name: "SEGREGAÇÃO SOCIOESPACIAL",
          question: "Como o acesso desigual a serviços se distribui dentro da metrópole?",
        },
        {
          id: "conflito-intraestatal",
          emoji: "⚠️",
          name: "CONFLITO INTRAESTATAL",
          question: "O conflito de Serra Norte ocorre dentro de um único Estado ou entre Estados diferentes?",
        },
        {
          id: "atores-nao-estatais",
          emoji: "👥",
          name: "ATORES NÃO ESTATAIS",
          question: "Que ator do conflito não representa formalmente o Estado?",
        },
        {
          id: "deslocamento",
          emoji: "🧳",
          name: "DESLOCAMENTO FORÇADO",
          question: "O que muda quando pessoas deixam suas casas e atravessam uma fronteira internacional?",
        },
        {
          id: "mediacao",
          emoji: "🤝",
          name: "MEDIAÇÃO",
          question: "O organismo multilateral impõe uma solução ou tenta aproximar as partes?",
        },
        {
          id: "tres-poderes",
          emoji: "🏛️",
          name: "TRÊS PODERES",
          question: "Quem executa, quem delibera sobre recursos e quem julga a controvérsia?",
        },
        {
          id: "freios-contrapesos",
          emoji: "⚙️",
          name: "FREIOS E CONTRAPESOS",
          question: "Como a atuação de um Poder pode ser controlada pelos demais sem que haja subordinação?",
        },
      ],
      highlight:
        "Uma mesma situação pode exigir leitura urbana, geopolítica e institucional ao mesmo tempo.",
    },
    {
      id: "conecte",
      title: "CONECTE",
      kind: "flow",
      flow: [
        "Rede urbana",
        "Desigualdades metropolitanas",
        "Conflito em outra escala",
        "Deslocamento de pessoas",
        "Resposta do Executivo",
        "Deliberação do Legislativo",
        "Controle do Judiciário",
      ],
      highlight:
        "O acontecimento muda de escala, mas as perguntas continuam: onde ocorre, quem participa, quem é afetado e quem pode decidir?",
      text: "Os fluxos cotidianos entre Porto Novo e Ribeira revelam uma região metropolitana integrada, mas desigual. O conflito em Serra Norte produz efeitos que atravessam a fronteira e chegam a essa rede urbana. A resposta pública, por sua vez, passa por instituições diferentes: o Executivo administra, o Legislativo delibera sobre regras e recursos, e o Judiciário pode analisar a legalidade ou a constitucionalidade dos atos questionados.",
    },
    {
      id: "diferencie",
      title: "DIFERENCIE",
      kind: "questions",
      questions: [
        {
          id: "s04-cp-q01",
          statement:
            "Porto Novo e Ribeira mantêm governos municipais distintos, mas suas áreas construídas tornaram-se contínuas. Além disso, muitos moradores de Ribeira se deslocam diariamente até Porto Novo para trabalhar e utilizar serviços especializados. Essas duas características correspondem, respectivamente, a:",
          options: [
            { id: "A", text: "metropolização e conurbação." },
            { id: "B", text: "conurbação e metropolização." },
            { id: "C", text: "hierarquia urbana e expansão urbana." },
            { id: "D", text: "urbanização informal e rede urbana." },
            { id: "E", text: "segregação socioespacial e hierarquia urbana." },
          ],
          correctOptionId: "B",
          explanation:
            "A alternativa B está correta. A continuidade física das áreas construídas de dois municípios caracteriza conurbação. Já os deslocamentos cotidianos e a dependência de uma cidade em relação aos empregos e serviços especializados da metrópole indicam integração funcional, típica da metropolização. Os processos podem ocorrer juntos, mas não significam a mesma coisa.",
        },
        {
          id: "s04-cp-q02",
          statement:
            "Na região de Porto Novo, bairros periféricos apresentam menor acesso a transporte coletivo, saneamento e equipamentos públicos do que áreas mais valorizadas da metrópole. Esse padrão espacial é mais bem interpretado como:",
          options: [
            {
              id: "A",
              text: "segregação socioespacial, porque diferenças sociais e de acesso a serviços aparecem distribuídas de modo desigual no território urbano.",
            },
            {
              id: "B",
              text: "conurbação, porque toda desigualdade urbana resulta da união física entre municípios vizinhos.",
            },
            {
              id: "C",
              text: "metropolização, porque o conceito se refere exclusivamente à desigualdade entre bairros de uma mesma cidade.",
            },
            {
              id: "D",
              text: "hierarquia urbana, porque bairros com mais infraestrutura ocupam posição superior na rede de cidades.",
            },
            {
              id: "E",
              text: "urbanização informal, porque a falta de um serviço público comprova que a ocupação ocorreu sem qualquer regulação oficial.",
            },
          ],
          correctOptionId: "A",
          explanation:
            "A alternativa A está correta. Segregação socioespacial descreve a distribuição desigual de grupos, infraestrutura, serviços e oportunidades no espaço urbano. O enunciado não informa que os bairros surgiram sem regulação, portanto não permite classificá-los automaticamente como urbanização informal. Conurbação, metropolização e hierarquia urbana respondem a outras perguntas.",
        },
        {
          id: "s04-cp-q03",
          statement:
            "Em Serra Norte, o governo central enfrenta um grupo regional armado dentro das próprias fronteiras do país. Famílias atingidas pelo conflito atravessam uma fronteira internacional em busca de proteção, enquanto um organismo multilateral tenta aproximar as partes para negociar. A leitura mais adequada da situação é:",
          options: [
            {
              id: "A",
              text: "conflito interestatal, deslocamento interno e intervenção militar do organismo multilateral.",
            },
            {
              id: "B",
              text: "conflito intraestatal, deslocamento através de fronteira internacional e tentativa de mediação.",
            },
            {
              id: "C",
              text: "conflito interestatal, migração pendular e ausência de atores não estatais.",
            },
            {
              id: "D",
              text: "conflito intraestatal, conurbação regional e intervenção armada estrangeira.",
            },
            {
              id: "E",
              text: "conflito exclusivamente territorial, sem dimensão política ou humanitária.",
            },
          ],
          correctOptionId: "B",
          explanation:
            "A alternativa B está correta. O confronto ocorre dentro de um único Estado, portanto é intraestatal. As famílias atravessam uma fronteira internacional, o que diferencia sua situação do deslocamento interno. E o organismo multilateral tenta aproximar as partes para negociação, característica de mediação, não de intervenção militar.",
        },
        {
          id: "s04-cp-q04",
          statement:
            "O Executivo estadual anuncia o programa de acolhimento e solicita recursos; o Legislativo analisa a autorização orçamentária; depois, o Judiciário recebe uma ação que questiona a compatibilidade de um ato do programa com regras constitucionais. Essa sequência exemplifica principalmente:",
          options: [
            {
              id: "A",
              text: "subordinação do Executivo ao Judiciário, porque toda política pública depende de autorização judicial prévia.",
            },
            {
              id: "B",
              text: "substituição do Legislativo pelo Executivo, porque administrar recursos significa produzir leis.",
            },
            {
              id: "C",
              text: "independência com controle recíproco, pois cada Poder exerce função própria e pode participar de mecanismos de freios e contrapesos.",
            },
            {
              id: "D",
              text: "concentração institucional, pois os três Poderes realizam exatamente a mesma função.",
            },
            {
              id: "E",
              text: "ausência de harmonia, porque qualquer revisão judicial indica conflito entre os Poderes.",
            },
          ],
          correctOptionId: "C",
          explanation:
            "A alternativa C está correta. O Executivo administra e executa; o Legislativo delibera sobre normas e recursos; e o Judiciário pode analisar a legalidade ou a constitucionalidade de um ato quando provocado. Essa relação não elimina a independência dos Poderes: ela integra o sistema de controle recíproco e de freios e contrapesos.",
        },
        {
          id: "s04-cp-q05",
          statement:
            "Um estudante resume o caso dizendo: “Porto Novo cresceu, chegou gente de fora e o governo criou um programa; basta decidir se isso foi bom ou ruim.” Qual reformulação demonstra uma leitura mais consistente com o percurso da Semana 04?",
          options: [
            {
              id: "A",
              text: "Primeiro é preciso identificar os processos urbanos, a natureza e a escala do conflito, os atores envolvidos e a função institucional exercida por cada Poder antes de avaliar os resultados.",
            },
            {
              id: "B",
              text: "A questão urbana é suficiente para explicar todo o caso, porque conflitos e instituições são consequências automáticas do crescimento das cidades.",
            },
            {
              id: "C",
              text: "Como há diferentes opiniões sobre o programa, nenhuma análise objetiva das instituições ou dos processos espaciais é possível.",
            },
            {
              id: "D",
              text: "O ponto central é descobrir qual dos três Poderes tem mais autoridade, pois os demais atuam apenas quando o Poder principal permite.",
            },
            {
              id: "E",
              text: "A presença de um conflito em outro país torna irrelevante analisar a organização interna da região metropolitana.",
            },
          ],
          correctOptionId: "A",
          explanation:
            "A alternativa A está correta. A Semana 04 não propõe escolher um lado antes de compreender o caso: ela ensina a separar processos urbanos, escalas e atores de um conflito e funções institucionais dos três Poderes. Só depois dessa organização conceitual é possível avaliar argumentos e consequências com mais precisão.",
        },
      ],
    },
    {
      id: "mude-o-olhar",
      title: "MUDE O OLHAR",
      kind: "reflection",
      cards: [
        {
          id: "duas-cidades",
          before: "“Se duas cidades se encostaram, viraram uma cidade só.”",
          after:
            "“Conurbação descreve a continuidade física das manchas urbanas; os municípios podem continuar politicamente separados e, ao mesmo tempo, integrar uma região metropolitana.”",
        },
        {
          id: "periferia",
          before: "“Um bairro com menos infraestrutura é necessariamente informal.”",
          after:
            "“Desigualdade de acesso a serviços pode indicar segregação socioespacial; para falar em urbanização informal, é preciso conhecer como ocorreu o processo de ocupação e regularização.”",
        },
        {
          id: "conflito",
          before: "“Se há pessoas cruzando fronteiras, então a guerra é entre países.”",
          after:
            "“A escala do conflito depende de quem combate e onde o confronto ocorre; seus efeitos humanitários podem atravessar fronteiras mesmo quando o conflito é intraestatal.”",
        },
        {
          id: "judiciario",
          before: "“Se o Judiciário revisa um ato do Executivo, está governando no lugar dele.”",
          after:
            "“Revisar a legalidade ou a constitucionalidade de um ato é uma função de controle; não significa administrar a política pública no lugar do Executivo.”",
        },
      ],
      closing:
        "Você não terminou esta semana com uma resposta pronta sobre Porto Novo. Terminou sabendo separar processos que costumam aparecer misturados: cidade e rede, conflito e escala, decisão e controle institucional.",
    },
  ],

  conclusion:
    "Você já observou a região metropolitana, nomeou os conceitos, conectou escalas e instituições, diferenciou processos parecidos e testou seu raciocínio. Agora, diante de uma situação complexa, você consegue perguntar: que processo urbano está acontecendo, que tipo de conflito está em jogo, quem participa e qual Poder está exercendo qual função?",

  celebrationMessage:
    "Você terminou a semana sabendo separar cidade, conflito e poder antes de formar uma conclusão.",
};
