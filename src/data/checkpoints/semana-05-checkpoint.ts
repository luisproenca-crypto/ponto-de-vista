import type { CheckpointContent } from "@/lib/types";

/**
 * CHECKPOINT 05 — Semana 05
 * Tema: "REGIÃO DE AROEIRA — Território, Manchete e Decisão"
 *
 * Situação-problema inteiramente fictícia que reúne os três eixos da
 * semana: Geografia Essencial (Aula 13 — formação do território,
 * diversidade regional, distribuição da população, redes urbanas,
 * desigualdades, infraestrutura e relações entre território, economia e
 * sociedade), Geopolítica & Atualidades (Aula 14 — acontecimento,
 * processo, interesses, escalas, conexões e enquadramento) e Política &
 * Cidadania (Aula 15 — competência, caminho, afirmação, interesses e
 * efeitos).
 *
 * O objetivo não é decidir se o projeto apresentado é "bom" ou "ruim".
 * O aluno deve separar o que é verificável do que é expectativa, mudar de
 * escala, reconhecer por que os efeitos variam entre lugares e identificar
 * quais instituições participam de cada etapa da decisão.
 *
 * Conteúdo preparado para revisão editorial. A publicação permanece
 * controlada em course.ts.
 */
export const checkpoint05Content: CheckpointContent = {
  intro:
    "Brasil em revisão: nesta semana, você aprendeu a ler um acontecimento pelo território, a transformar uma manchete em processo e a analisar decisões políticas antes de opinar. Este checkpoint reúne as três leituras em uma situação fictícia: a Região de Aroeira.",

  scenario: {
    title: "REGIÃO DE AROEIRA",
    description:
      "A Região de Aroeira é uma região fictícia brasileira formada por três municípios. Aroeira Central concentra hospitais, universidades, serviços públicos e comércio regional. Vale das Pedras depende fortemente da extração mineral e se liga ao restante da região por uma única rodovia. Porto Sereno abriga um terminal ferroviário e um porto fluvial que escoam parte da produção regional. O governo estadual anunciou o Projeto Corredor Aroeira, que prevê ampliar a ferrovia e criar uma linha de crédito, operada pelo banco estadual, para modernizar empresas ligadas ao corredor. A Assembleia Legislativa aprovou o projeto de lei que cria o programa, mas ainda existem etapas posteriores antes de o crédito chegar às empresas. No mesmo dia, um portal publicou a manchete: “Novo corredor vai transformar Aroeira e gerar 25 mil empregos”. O texto informa corretamente que a Assembleia aprovou o projeto e que há recursos previstos, mas o número de empregos é uma estimativa apresentada pelo governo. Empresários exportadores apoiam a proposta; comerciantes de Vale das Pedras esperam mais movimento; moradores próximos à ferrovia pedem informações sobre ruído e desapropriações; e uma associação regional questiona se os benefícios chegarão aos três municípios. Ao mesmo tempo, um grande comprador estrangeiro passou a exigir comprovação de origem dos produtos, e empresas locais avaliam adaptar seus sistemas e buscar novos mercados. Nenhum desses elementos, isoladamente, permite dizer se o projeto dará certo: eles permitem analisar território, processo, instituições, afirmações, interesses e efeitos.",
    image: {
      src: "/assets/checkpoints/semana-05-aroeira.png",
      alt: "Infográfico ilustrado da Região de Aroeira com os municípios de Aroeira Central, Vale das Pedras e Porto Sereno, o traçado do Projeto Corredor Aroeira, os fluxos de minério, pessoas, insumos e exportação, a manchete sobre 25 mil empregos, os atores envolvidos, as etapas pendentes e a exigência de rastreabilidade do mercado externo.",
      caption: "Cenário fictício criado para fins didáticos. Observe os municípios, os fluxos, a manchete, os atores e as etapas pendentes antes de responder.",
    },
  },

  steps: [
    {
      id: "observe",
      title: "OBSERVE",
      kind: "observation",
      questions: [
        "Que diferenças entre Aroeira Central, Vale das Pedras e Porto Sereno podem fazer o mesmo projeto produzir efeitos diferentes?",
        "O que já aconteceu no caminho institucional do Projeto Corredor Aroeira e o que ainda não aconteceu?",
        "Na manchete, o que pode ser conferido agora e o que depende do futuro?",
        "Quais atores aparecem no cenário e que interesses diferentes eles expressam?",
        "Que conexões ligam uma decisão regional a mercados e regras definidas fora do país?",
        "Em quais escalas o projeto pode ser analisado: local, regional, nacional e internacional?",
      ],
    },
    {
      id: "nomeie",
      title: "NOMEIE",
      kind: "cards",
      eyebrow: "Revisão da semana",
      subtitle:
        "Quais ferramentas das Aulas 13, 14 e 15 ajudam a ler a Região de Aroeira sem reduzir a situação a uma única explicação?",
      items: [
        {
          id: "diversidade-regional",
          emoji: "🗺️",
          name: "DIVERSIDADE REGIONAL",
          question: "Por que o mesmo corredor pode afetar de modos diferentes os três municípios?",
        },
        {
          id: "redes-infraestrutura",
          emoji: "🛤️",
          name: "REDES E INFRAESTRUTURA",
          question: "Por onde circulam pessoas, mercadorias e serviços — e onde a integração é mais frágil?",
        },
        {
          id: "desigualdades",
          emoji: "⚖️",
          name: "DESIGUALDADES SOCIOESPACIAIS",
          question: "Quem tem mais meios para aproveitar oportunidades ou se proteger de custos e riscos?",
        },
        {
          id: "territorio-economia",
          emoji: "🔗",
          name: "TERRITÓRIO, ECONOMIA E SOCIEDADE",
          question: "Como a atividade econômica organiza o uso do território e a vida de quem mora ali?",
        },
        {
          id: "acontecimento-processo",
          emoji: "📰",
          name: "ACONTECIMENTO E PROCESSO",
          question: "A aprovação do projeto é apenas um episódio de que processo mais longo?",
        },
        {
          id: "atores-interesses",
          emoji: "🎯",
          name: "ATORES E INTERESSES",
          question: "Quem participa e o que cada posição busca obter, preservar ou proteger?",
        },
        {
          id: "escalas-conexoes",
          emoji: "📏",
          name: "ESCALAS E CONEXÕES",
          question: "Como uma decisão local ou regional se conecta ao país e ao mercado internacional?",
        },
        {
          id: "enquadramento",
          emoji: "🖼️",
          name: "ENQUADRAMENTO",
          question: "O que a manchete destaca e o que deixa em segundo plano?",
        },
        {
          id: "competencia-caminho",
          emoji: "🏛️",
          name: "COMPETÊNCIA E CAMINHO",
          question: "Quem pode decidir cada etapa e o que ainda precisa acontecer?",
        },
        {
          id: "afirmacao-efeitos",
          emoji: "💬",
          name: "AFIRMAÇÃO E EFEITOS",
          question: "O que já pode ser conferido e o que ainda é previsão, expectativa ou efeito a medir?",
        },
      ],
      highlight:
        "Ler bem o Brasil exige juntar território, processo e instituição sem confundir uma coisa com a outra.",
    },
    {
      id: "conecte",
      title: "CONECTE",
      kind: "flow",
      flow: [
        "Diferenças territoriais",
        "Projeto anunciado",
        "Aprovação legislativa",
        "Etapas ainda pendentes",
        "Manchete e previsões",
        "Interesses em disputa",
        "Efeitos que ainda precisam ser medidos",
      ],
      highlight:
        "A manchete mostra um momento; o território explica por que os efeitos variam; as instituições mostram por qual caminho a decisão passa.",
      text:
        "Aroeira Central, Vale das Pedras e Porto Sereno ocupam posições diferentes na rede regional e dependem de atividades e infraestruturas distintas. Por isso, um mesmo projeto não encontra o mesmo território em cada lugar. A aprovação pela Assembleia é um acontecimento dentro de um processo mais longo: ainda existem etapas institucionais e operacionais antes de o programa funcionar. Nesse intervalo, atores diferentes defendem interesses, jornais produzem enquadramentos e previsões circulam como se fossem resultados. A leitura cuidadosa separa cada camada.",
    },
    {
      id: "diferencie",
      title: "DIFERENCIE",
      kind: "questions",
      questions: [
        {
          id: "s05-cp-q01",
          statement:
            "O Projeto Corredor Aroeira prevê a mesma ampliação ferroviária para a região, mas Aroeira Central tem economia diversificada e serviços regionais, Vale das Pedras depende fortemente da mineração e de uma única rodovia, e Porto Sereno já possui terminal ferroviário e porto fluvial. Se o projeto produzir efeitos diferentes nos três municípios, a explicação mais consistente é que",
          options: [
            {
              id: "A",
              text: "a diferença decorre principalmente do tamanho populacional de cada município, porque lugares mais populosos absorvem melhor qualquer investimento.",
            },
            {
              id: "B",
              text: "a diferença decorre principalmente da distância entre os municípios, porque lugares mais próximos sempre compartilham os mesmos efeitos econômicos.",
            },
            {
              id: "C",
              text: "a diferença mostra que um projeto regional deixa de ter efeitos locais quando conecta municípios por uma mesma infraestrutura.",
            },
            {
              id: "D",
              text: "a diferença pode ser explicada pela posição de cada lugar na rede regional, pela infraestrutura disponível e pelo grau de dependência de determinadas atividades econômicas.",
            },
            {
              id: "E",
              text: "a diferença demonstra que diversidade regional e desigualdade socioespacial são conceitos equivalentes sempre que os efeitos variam entre lugares.",
            },
          ],
          correctOptionId: "D",
          explanation:
            "A alternativa D está correta. A Aula 13 ensina que um mesmo acontecimento pode produzir efeitos distintos porque encontra territórios diferentes. Rede urbana, infraestrutura, integração territorial, diversidade econômica e dependência de uma atividade ajudam a explicar essa variação. Tamanho populacional ou distância, isoladamente, não bastam, e diversidade regional não é sinônimo de desigualdade socioespacial.",
        },
        {
          id: "s05-cp-q02",
          statement:
            "A manchete afirma: “Novo corredor vai transformar Aroeira e gerar 25 mil empregos”. O texto informa que a Assembleia aprovou o projeto e que o número de empregos é uma estimativa apresentada pelo governo. Segundo as ferramentas das Aulas 14 e 15, a leitura mais adequada é que",
          options: [
            {
              id: "A",
              text: "a aprovação e os 25 mil empregos são fatos equivalentes, porque ambos aparecem na mesma notícia e podem ser atribuídos ao governo.",
            },
            {
              id: "B",
              text: "o número de empregos é uma interpretação do portal, enquanto a aprovação legislativa é uma opinião institucional da Assembleia.",
            },
            {
              id: "C",
              text: "a aprovação legislativa é um acontecimento verificável, enquanto os 25 mil empregos constituem uma previsão ou estimativa cujo resultado ainda precisa ser observado.",
            },
            {
              id: "D",
              text: "a manchete deve ser descartada, porque toda previsão torna o restante da notícia pouco confiável.",
            },
            {
              id: "E",
              text: "a estimativa de empregos passa a ser fato assim que o projeto é aprovado pelo Legislativo, mesmo antes de sua execução.",
            },
          ],
          correctOptionId: "C",
          explanation:
            "A alternativa C está correta. A aprovação pode ser conferida como acontecimento. Já a geração de 25 mil empregos descreve um efeito futuro estimado, portanto não é um resultado produzido. A Aula 14 pede separar manchete e processo; a Aula 15 pede distinguir o tipo de afirmação e não confundir efeito prometido com efeito medido.",
        },
        {
          id: "s05-cp-q03",
          statement:
            "A Assembleia Legislativa aprovou o projeto que cria a linha de crédito do Corredor Aroeira, a ser operada pelo banco estadual. Ainda existem etapas posteriores antes de o crédito chegar às empresas. Qual leitura interpreta melhor o caminho da decisão?",
          options: [
            {
              id: "A",
              text: "A Assembleia concluiu todo o processo, e as etapas seguintes são apenas administrativas, sem possibilidade de alterar a implementação.",
            },
            {
              id: "B",
              text: "A aprovação legislativa cumpriu uma etapa do processo, mas a existência do programa no texto aprovado não significa que o crédito já esteja sendo executado ou que seus efeitos já possam ser medidos.",
            },
            {
              id: "C",
              text: "Como o banco estadual operará o crédito, a Assembleia não possui função relevante no processo e sua aprovação tem caráter apenas consultivo.",
            },
            {
              id: "D",
              text: "A aprovação transforma automaticamente as previsões econômicas do projeto em resultados, porque a competência legislativa substitui as demais etapas.",
            },
            {
              id: "E",
              text: "A única pergunta institucional relevante passa a ser se o banco concorda com a política, porque a competência do Legislativo termina antes da aprovação.",
            },
          ],
          correctOptionId: "B",
          explanation:
            "A alternativa B está correta. A Aula 15 diferencia competência e caminho: aprovar um projeto é uma etapa, não o mesmo que executar a política nem produzir seus efeitos. Instituições podem participar em momentos diferentes, e a análise precisa localizar o que já aconteceu, o que ainda falta e quem atua em cada etapa.",
        },
        {
          id: "s05-cp-q04",
          statement:
            "Empresários exportadores apoiam o corredor; comerciantes de Vale das Pedras esperam mais movimento; moradores próximos à ferrovia pedem informações sobre ruído e desapropriações; e uma associação regional questiona a distribuição dos benefícios. Considerando apenas essas posições, é correto afirmar que",
          options: [
            {
              id: "A",
              text: "o apoio dos empresários prova que o corredor aumentará as exportações, enquanto a preocupação dos moradores prova que haverá prejuízo residencial.",
            },
            {
              id: "B",
              text: "as posições permitem medir antecipadamente quem ganhará e quem perderá, pois grupos diretamente envolvidos conhecem os efeitos futuros.",
            },
            {
              id: "C",
              text: "as posições mostram apenas opiniões pessoais e, por isso, não ajudam a compreender o processo político ou territorial.",
            },
            {
              id: "D",
              text: "os grupos descrevem resultados já produzidos pelo projeto, mesmo que a execução ainda não tenha começado.",
            },
            {
              id: "E",
              text: "as posições revelam interesses, expectativas e preocupações diferentes, mas não substituem evidências sobre os efeitos efetivamente produzidos.",
            },
          ],
          correctOptionId: "E",
          explanation:
            "A alternativa E está correta. Interesses ajudam a explicar por que atores defendem posições diferentes, mas não provam resultados. A Aula 15 separa interesses de efeitos e lembra que efeito produzido precisa ser observado e medido. A Aula 14 acrescenta que a notícia pode destacar algumas posições e deixar outras em segundo plano.",
        },
        {
          id: "s05-cp-q05",
          statement:
            "Um comprador estrangeiro passa a exigir comprovação de origem dos produtos vendidos pelas empresas da Região de Aroeira. Parte das empresas já possui sistemas de rastreabilidade; outras ainda precisam se adaptar. O governo e os produtores também avaliam buscar novos mercados. Qual interpretação articula melhor as três aulas da Semana 05?",
          options: [
            {
              id: "A",
              text: "Uma regra externa pode atingir de modo desigual os lugares porque cada território tem capacidades diferentes; o episódio faz parte de relações mais longas de dependência e diversificação de mercados; e as respostas dependem de decisões de atores e instituições em etapas distintas.",
            },
            {
              id: "B",
              text: "Uma regra externa produz o mesmo efeito em toda a região porque vale para os mesmos produtos; buscar novos mercados elimina a dependência; e a adaptação depende apenas das empresas.",
            },
            {
              id: "C",
              text: "A exigência internacional transforma automaticamente um problema comercial em problema político nacional, e por isso as diferenças territoriais deixam de ser relevantes.",
            },
            {
              id: "D",
              text: "As empresas com rastreabilidade demonstram que infraestrutura física é a única condição territorial relevante para competir em mercados internacionais.",
            },
            {
              id: "E",
              text: "Como a regra veio de fora, seus efeitos pertencem apenas à escala internacional e não precisam ser analisados nas escalas local e regional.",
            },
          ],
          correctOptionId: "A",
          explanation:
            "A alternativa A está correta porque combina as três operações centrais da semana. A Aula 13 mostra que capacidades territoriais diferentes produzem efeitos diferentes; a Aula 14 liga o acontecimento a processos de interdependência, dependência e diversificação; e a Aula 15 pergunta quem decide, por qual caminho e com quais interesses. As demais alternativas reduzem um processo multiescalar a uma única causa ou escala.",
        },
      ],
    },
    {
      id: "mude-o-olhar",
      title: "MUDE O OLHAR",
      kind: "reflection",
      cards: [
        {
          id: "mesmo-projeto",
          before: "“Se o projeto é o mesmo, o efeito será igual em toda a região.”",
          after:
            "“O mesmo projeto encontra territórios diferentes: redes, infraestrutura, atividades econômicas e desigualdades mudam a forma como cada lugar sente seus efeitos.”",
        },
        {
          id: "manchete",
          before: "“Se a manchete diz que vai gerar empregos, então esse resultado já está garantido.”",
          after:
            "“A aprovação do projeto pode ser um fato verificável; a quantidade de empregos é uma previsão que só poderá ser avaliada depois, com evidências.”",
        },
        {
          id: "aprovado",
          before: "“Se o Legislativo aprovou, a política já está funcionando.”",
          after:
            "“A aprovação é uma etapa do caminho institucional. Execução, operação e efeitos pertencem a etapas posteriores e podem envolver outras instituições.”",
        },
        {
          id: "interesse",
          before: "“Quem apoia o projeto prova que ele funciona; quem critica prova que ele não funciona.”",
          after:
            "“Apoio e crítica revelam interesses, expectativas e prioridades. Para falar em efeitos, é preciso observar o que realmente aconteceu, onde, quando e para quem.”",
        },
      ],
      closing:
        "Você não terminou a Semana 05 com uma opinião pronta sobre o Corredor Aroeira. Terminou com um método: mudar de escala, separar acontecimento de processo, localizar instituições, classificar afirmações e distinguir interesses de efeitos.",
    },
  ],

  conclusion:
    "Diante de uma notícia sobre o Brasil, você já consegue fazer uma leitura em camadas: onde isso acontece e que território encontra; de que processo mais longo o episódio faz parte; quem participa e com quais interesses; em que escala os efeitos aparecem; quem pode decidir cada etapa; e o que é fato, previsão, interpretação ou resultado medido. Essa combinação é o que transforma informação em análise.",

  celebrationMessage:
    "Semana 05 concluída: agora você lê o Brasil pelo território, pelo processo e pelas instituições antes de formar uma conclusão.",
};
