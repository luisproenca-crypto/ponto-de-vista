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
 * Conteúdo versionado e registrado em course.ts. A arte do cenário foi
 * integrada ao checkpoint; o status de publicação permanece controlado em course.ts.
 */
export const checkpoint04Content: CheckpointContent = {
  intro:
    "Cidades, conflitos e poderes: nesta semana, você aprendeu a enxergar as cidades como redes, a classificar conflitos antes de opinar sobre eles e a compreender como os três Poderes se relacionam. Este checkpoint reúne essas três leituras em uma única situação fictícia: a região metropolitana de Porto Novo.",

  scenario: {
    title: "PORTO NOVO",
    description:
      "Porto Novo é uma metrópole fictícia de um país também fictício. Nas últimas décadas, sua área construída cresceu até se encontrar com a de Ribeira, município vizinho. Mesmo mantendo administrações municipais separadas, milhares de moradores de Ribeira se deslocam diariamente para Porto Novo em busca de trabalho, universidades e serviços de saúde especializados. Nos bairros periféricos da região metropolitana, o acesso a transporte coletivo, saneamento e equipamentos públicos é desigual. Ao mesmo tempo, um conflito dentro do país vizinho de Serra Norte, entre o governo central e um grupo regional armado que disputa o controle de uma área com importantes reservas de água, levou famílias a atravessar a fronteira internacional em busca de proteção. Parte delas chegou à região de Porto Novo. Diante do aumento da demanda por moradia temporária, o Poder Executivo estadual anunciou um programa emergencial de acolhimento e encaminhou ao Legislativo um pedido de recursos. Uma associação de moradores questionou na Justiça um dos atos administrativos do programa, alegando incompatibilidade com regras constitucionais. Enquanto isso, um organismo multilateral tenta aproximar as partes do conflito em Serra Norte para abrir negociações. Nenhum desses fatos, isoladamente, diz se o programa é adequado ou quem tem razão no conflito: eles permitem analisar processos, atores, escalas e instituições.",
    image: {
      src: "/assets/checkpoints/semana-04-porto-novo.jpg",
      alt: "Mapa ilustrado da região fictícia de Porto Novo e Ribeira, com integração metropolitana, desigualdades urbanas, deslocamento de famílias desde Serra Norte, fronteira internacional e atuação dos três Poderes.",
      caption: "Cenário fictício criado para fins didáticos. Observe os fluxos, as diferenças territoriais, os deslocamentos e as instituições antes de responder.",
    },
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
          name: "DESLOCAMENTO POPULACIONAL",
          question: "As pessoas deslocadas permanecem dentro do próprio país ou atravessam uma fronteira internacional?",
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
            { id: "D", text: "rede urbana e segregação socioespacial." },
            { id: "E", text: "expansão urbana e hierarquia urbana." },
          ],
          correctOptionId: "B",
          explanation:
            "A alternativa B está correta. A continuidade física das áreas construídas de dois municípios caracteriza conurbação. Já os deslocamentos cotidianos e a dependência de uma cidade em relação aos empregos e serviços especializados da metrópole indicam integração funcional, típica da metropolização. Os processos podem ocorrer juntos, mas não significam a mesma coisa.",
        },
        {
          id: "s04-cp-q02",
          statement:
            "Na região de Porto Novo, bairros periféricos apresentam menor acesso a transporte coletivo, saneamento e equipamentos públicos do que áreas mais valorizadas da metrópole. Considerando apenas as informações apresentadas, qual conceito explica melhor esse padrão?",
          options: [
            {
              id: "A",
              text: "Segregação socioespacial, pois infraestrutura e oportunidades aparecem distribuídas de modo desigual entre diferentes partes da região urbana.",
            },
            {
              id: "B",
              text: "Urbanização informal, pois a desigualdade de serviços permite concluir que os bairros periféricos se formaram fora da regulação oficial.",
            },
            {
              id: "C",
              text: "Hierarquia urbana, pois diferenças de infraestrutura entre bairros indicam posições distintas na rede de cidades da região.",
            },
            {
              id: "D",
              text: "Expansão urbana, pois a menor oferta de serviços nas periferias demonstra que a mancha urbana cresceu mais rapidamente.",
            },
            {
              id: "E",
              text: "Metropolização, pois a concentração desigual de equipamentos públicos é suficiente para demonstrar integração funcional entre municípios.",
            },
          ],
          correctOptionId: "A",
          explanation:
            "A alternativa A está correta. Segregação socioespacial descreve a distribuição desigual de grupos, infraestrutura, serviços e oportunidades no espaço urbano. O enunciado não informa como os bairros foram ocupados ou regularizados, portanto não permite concluir urbanização informal. Também não apresenta dados suficientes para inferir expansão urbana, e hierarquia urbana e metropolização respondem a outras relações espaciais.",
        },
        {
          id: "s04-cp-q03",
          statement:
            "Em Serra Norte, o governo central enfrenta um grupo regional armado dentro das próprias fronteiras do país. Famílias atingidas pelo conflito atravessam uma fronteira internacional em busca de proteção, enquanto um organismo multilateral tenta aproximar as partes para negociar. Segundo as distinções trabalhadas na Aula 11, a situação reúne:",
          options: [
            {
              id: "A",
              text: "conflito intraestatal, deslocados internos e mediação internacional.",
            },
            {
              id: "B",
              text: "conflito interestatal, refugiados e mediação internacional.",
            },
            {
              id: "C",
              text: "conflito intraestatal, refugiados e mediação internacional.",
            },
            {
              id: "D",
              text: "conflito intraestatal, refugiados e intervenção militar internacional.",
            },
            {
              id: "E",
              text: "conflito interestatal, deslocados internos e intervenção militar internacional.",
            },
          ],
          correctOptionId: "C",
          explanation:
            "A alternativa C está correta. O confronto ocorre majoritariamente dentro de um único Estado, por isso é intraestatal. No enquadramento conceitual da Aula 11, as famílias que atravessam uma fronteira internacional em busca de proteção entram na categoria de refugiados, diferentemente dos deslocados internos. O organismo multilateral tenta facilitar a negociação sem impor uma solução pela força, o que caracteriza mediação internacional.",
        },
        {
          id: "s04-cp-q04",
          statement:
            "O Executivo estadual anuncia o programa de acolhimento e solicita recursos; o Legislativo analisa a autorização orçamentária; depois, o Judiciário recebe uma ação que questiona a compatibilidade de um ato do programa com regras constitucionais. Qual sequência interpreta melhor as funções institucionais descritas?",
          options: [
            {
              id: "A",
              text: "Execução administrativa → deliberação legislativa sobre recursos → controle judicial de legalidade ou constitucionalidade.",
            },
            {
              id: "B",
              text: "Execução legislativa → administração executiva dos recursos → fiscalização política exercida pelo Judiciário.",
            },
            {
              id: "C",
              text: "Administração executiva → controle judicial do orçamento → elaboração legislativa do ato administrativo questionado.",
            },
            {
              id: "D",
              text: "Execução administrativa → deliberação legislativa sobre recursos → transferência da gestão do programa ao Judiciário.",
            },
            {
              id: "E",
              text: "Administração executiva → decisão judicial sobre recursos → fiscalização constitucional exercida pelo Legislativo.",
            },
          ],
          correctOptionId: "A",
          explanation:
            "A alternativa A está correta. O Executivo administra e executa políticas; o Legislativo delibera sobre normas e recursos; e o Judiciário pode analisar a legalidade ou a constitucionalidade de um ato quando provocado. Esse controle não transfere ao Judiciário a administração do programa e não elimina a independência entre os Poderes.",
        },
        {
          id: "s04-cp-q05",
          statement:
            "A chegada das famílias deslocadas aumenta a demanda por moradia, transporte e serviços na área integrada de Porto Novo e Ribeira. Qual interpretação articula corretamente os três eixos estudados na Semana 04?",
          options: [
            {
              id: "A",
              text: "A rede metropolitana distribui efeitos entre municípios; um conflito intraestatal pode produzir deslocamento internacional; e a resposta pública mobiliza competências distintas dos três Poderes.",
            },
            {
              id: "B",
              text: "A continuidade física entre Porto Novo e Ribeira forma um único município; o conflito permanece intraestatal; e os três Poderes atuam em etapas diferentes da resposta pública.",
            },
            {
              id: "C",
              text: "A rede metropolitana conecta os municípios; o cruzamento da fronteira transforma o conflito em interestatal; e Executivo, Legislativo e Judiciário mantêm funções institucionais distintas.",
            },
            {
              id: "D",
              text: "A integração urbana distribui efeitos entre municípios; o conflito é intraestatal; e a revisão judicial transfere ao Judiciário a administração do programa de acolhimento.",
            },
            {
              id: "E",
              text: "A chegada das famílias explica a segregação existente na metrópole; o conflito produz efeitos transfronteiriços; e a resposta estatal depende apenas da decisão do Executivo.",
            },
          ],
          correctOptionId: "A",
          explanation:
            "A alternativa A está correta porque articula os três planos sem confundi-los: Porto Novo e Ribeira integram uma rede metropolitana; um conflito pode continuar intraestatal mesmo quando seus efeitos atravessam fronteiras; e a resposta pública envolve funções diferentes do Executivo, do Legislativo e do Judiciário. As demais alternativas introduzem um erro de escala, de organização urbana, de causalidade ou de competência institucional.",
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
