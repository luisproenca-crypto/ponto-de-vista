import type { LessonContent } from "@/lib/types";

/**
 * AULA 06 — DEMOCRACIA, REPÚBLICA E CIDADANIA
 * Semana 02 • Política & Cidadania
 *
 * Eixo conceitual: poder, participação, regras e cidadania.
 *
 * Título, subtítulo, descrição, vídeo e status ficam em `src/data/course.ts`
 * (metadados da aula). Este arquivo guarda somente o conteúdo pedagógico.
 *
 * Rascunho editorial para revisão do Prof. Luis — altere apenas os textos
 * deste arquivo; nenhum componente precisa ser modificado. Linguagem
 * institucional e apartidária: nenhum partido, candidato, ideologia,
 * governo ou posição eleitoral é mencionado, recomendado ou avaliado.
 *
 * DADOS JURÍDICOS (verificar antes de publicar): definições de plebiscito,
 * referendo e iniciativa popular; formulação constitucional sobre a origem
 * do poder; regras de voto no Brasil (item "eleicoes").
 *
 * Esta aula ainda não está publicada em `src/data/course.ts`.
 */
export const aula06Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de diferenciar democracia, república e cidadania, reconhecendo como poder, participação, regras e limites se combinam na organização política de uma sociedade — e de aplicar essas distinções a situações concretas e a questões de vestibular e do ENEM.",

  decisionInsight: {
    title: "O OLHAR DO PACO",
    // A atividade do grêmio é autossuficiente: sem imagem e sem placeholder.
    image: null,
    hideImage: true,
    rounds: [
      {
        id: "como-decidir",
        question:
          "O grêmio de uma escola precisa decidir se o intervalo será ampliado em quinze minutos. Como essa decisão deveria ser tomada?",
        options: [
          { id: "votacao-geral", label: "Votação entre todos os estudantes" },
          { id: "direcao", label: "Decisão da direção" },
          { id: "representantes", label: "Representantes eleitos pelos estudantes" },
          {
            id: "consulta",
            label: "Consulta a estudantes, professores e famílias",
          },
          { id: "sorteio", label: "Sorteio" },
        ],
        reveal:
          "Você fez uma escolha sobre como decidir. Outras pessoas poderiam escolher diferente.",
      },
      {
        id: "limites",
        question:
          "Agora vem a pergunta mais interessante: e se a maioria decidir algo que prejudique um pequeno grupo de estudantes? O que deveria limitar essa decisão?",
        options: [
          { id: "regras-previas", label: "Regras aprovadas previamente por todos" },
          {
            id: "direitos-minorias",
            label: "Direitos garantidos a todos, inclusive às minorias",
          },
          {
            id: "instancia-independente",
            label: "Uma instância independente para resolver conflitos",
          },
          { id: "direcao-limite", label: "A decisão da direção" },
          { id: "nova-votacao", label: "Uma nova votação" },
        ],
        reveal:
          "Você acabou de encontrar a democracia antes mesmo de falarmos de eleição: não só quem decide, mas o que nenhuma decisão pode ultrapassar.",
      },
    ],
  },

  connection: {
    title: "O PODER TEM REGRAS",
    flow: ["Povo", "Participação", "Representação", "Regras", "Limites", "Direitos"],
    highlight: "POLÍTICA NÃO SE RESUME A ELEIÇÕES.",
    text: "Política também é a organização de decisões coletivas, prioridades, regras, recursos e relações de poder. Antes de qualquer eleição, partido ou campanha, a pergunta é: quem decide, como decide e o que ninguém pode decidir sozinho. Foi isso que apareceu no grêmio — e é isso que vamos aprender a nomear com precisão.",
  },

  lenses: {
    eyebrow: "Quatro conceitos, quatro perguntas",
    title: "NOMEIE OS CONCEITOS",
    subtitle:
      "Quatro palavras que costumam aparecer juntas, mas respondem a perguntas diferentes.",
    items: [
      {
        id: "democracia",
        emoji: "🗳️",
        name: "DEMOCRACIA",
        question: "Quem participa das decisões e como o poder é exercido?",
      },
      {
        id: "republica",
        emoji: "🏛️",
        name: "REPÚBLICA",
        question:
          "Como os cargos públicos são ocupados e a quem os governantes devem prestar contas?",
      },
      {
        id: "cidadania",
        emoji: "🙋",
        name: "CIDADANIA",
        question:
          "Quais direitos e deveres tem quem integra a sociedade, e como pode participar?",
      },
      {
        id: "constituicao",
        emoji: "📜",
        name: "CONSTITUIÇÃO",
        question: "Quais regras valem para todos, inclusive para quem governa?",
      },
    ],
    highlight:
      "Democracia, república e cidadania se complementam, mas não são sinônimos.",
    image: null,
    hideImage: true,
  },

  video: {
    title: "AGORA, VAMOS ORGANIZAR ESSAS IDEIAS",
    paragraphs: [
      "Você já percebeu que decidir em conjunto envolve participação, regras e limites. Agora é hora de entender com precisão o que diferencia cada um desses conceitos — e por que essa diferença importa tanto nas provas quanto na vida em sociedade.",
    ],
  },

  concepts: {
    title: "DIFERENCIE COM PRECISÃO",
    items: [
      {
        id: "democracia",
        name: "DEMOCRACIA",
        conceito:
          "Democracia é um regime político em que o poder pertence ao povo (soberania popular). Uma formulação constitucional resume a ideia: todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos da Constituição. Uma democracia envolve representação, participação, direitos, regras e limites ao poder: ela não se resume ao voto.",
        penseAssim:
          "Pergunte-se: quem participa das decisões, e o que impede que quem decide ultrapasse certos limites? Se a resposta envolve participação do povo, eleições livres e direitos que a maioria não pode simplesmente suprimir, você está falando de democracia.",
        exemplo:
          "No grêmio da abertura da aula, decidir por votação é um modo de participação; mas as regras do grêmio e os direitos de todos os estudantes — inclusive de quem ficou em minoria — definem o que a votação pode e não pode decidir.",
        naoConfunda:
          "Democracia não é sinônimo de república: democracia é um regime político; república é uma forma de governo. E democracia constitucional não significa que uma maioria tenha poder ilimitado: a maioria decide dentro de direitos, da Constituição, de regras, de procedimentos e de instituições que a controlam. Eleições sem liberdade e sem pluralismo também não bastam para caracterizar uma democracia.",
        naProva:
          "Questões costumam contrastar democracia com regimes autoritários ou exigir que você diferencie democracia direta de democracia representativa. Fique atento a expressões como “soberania popular”, “pluralismo”, “representação”, “liberdades” e “direitos das minorias”.",
      },
      {
        id: "republica",
        name: "REPÚBLICA",
        conceito:
          "República é uma forma de governo em que o chefe de Estado é escolhido por meios previstos em lei — geralmente por eleição — para um mandato de duração definida, e não ocupa o cargo por herança nem de forma vitalícia. A palavra vem de res publica, “coisa pública”: os cargos e os recursos públicos existem para o interesse coletivo, e seus ocupantes devem prestar contas.",
        penseAssim:
          "Pergunte-se: o cargo mais alto do Estado é hereditário ou vitalício, ou é ocupado por mandato e pode mudar? Se o cargo é temporário, ocupado conforme regras e sujeito à prestação de contas, você está falando de república.",
        exemplo:
          "Imagine duas descrições: em uma, o chefe de Estado ocupa o cargo por mandato definido e conforme regras previstas; na outra, ocupa o cargo por herança. A primeira descreve uma república; a segunda, uma monarquia. Isso ainda não diz nada sobre democracia: para isso é preciso saber se há liberdades, pluralismo, direitos e limites ao poder.",
        naoConfunda:
          "República não é sinônimo de democracia: república é forma de governo; democracia é regime político. Também não confunda república com sistema de governo (presidencialismo ou parlamentarismo): são categorias diferentes.",
        naProva:
          "A prova costuma testar a distinção entre forma de governo (república ou monarquia), regime político (democracia ou autoritarismo) e sistema de governo (presidencialismo ou parlamentarismo). Fique atento a palavras como “mandato”, “eleição do chefe de Estado”, “hereditariedade” e “vitaliciedade”.",
      },
      {
        id: "cidadania",
        name: "CIDADANIA",
        conceito:
          "Cidadania é a condição de quem participa da vida política e social de uma comunidade, com direitos e deveres. Costuma-se distinguir direitos civis (como a liberdade de expressão e a igualdade perante a lei), políticos (como votar e ser votado) e sociais (como educação, saúde e trabalho). Cidadania vai além do voto: envolve participar, acompanhar e cobrar as decisões públicas.",
        penseAssim:
          "Pergunte-se: além de votar de tempos em tempos, o que uma pessoa pode fazer para participar das decisões que afetam sua vida? Acompanhar informações públicas, participar de conselhos e audiências, cobrar serviços e conhecer seus direitos são formas de exercer cidadania.",
        exemplo:
          "Uma pessoa que se informa sobre uma decisão do seu bairro, participa de uma audiência pública, acompanha o que foi decidido e cobra respostas das autoridades está exercendo cidadania, mesmo fora do período eleitoral.",
        naoConfunda:
          "Cidadania não se resume a votar. Também não é o mesmo que nacionalidade: nacionalidade é o vínculo jurídico com um Estado; cidadania envolve o exercício de direitos e deveres na vida pública. Direitos e deveres andam juntos: cidadania não é apenas receber, mas também participar e respeitar as regras comuns.",
        naProva:
          "Fique atento a questões sobre direitos civis, políticos e sociais, participação além do voto, acesso à informação, audiências públicas e controle social. A questão pode não usar a palavra “cidadania”: ela pode descrever uma situação de participação — ou de exclusão dela.",
      },
      {
        id: "constituicao",
        name: "CONSTITUIÇÃO E SEPARAÇÃO DE PODERES",
        conceito:
          "Constituição é a norma máxima de um Estado: organiza as instituições, distribui o poder e garante direitos fundamentais. Ela estabelece regras que valem para todos, inclusive para quem governa. Legislativo, Executivo e Judiciário são independentes e harmônicos entre si. O Legislativo exerce predominantemente a função legislativa e fiscalizatória; o Executivo, predominantemente funções administrativas e de governo; o Judiciário, predominantemente a função jurisdicional. Existem mecanismos constitucionais de controle recíproco entre os Poderes.",
        penseAssim:
          "Pense em um jogo: para que seja justo, as regras precisam valer para todos os jogadores, e o árbitro não pode ser também quem joga. A Constituição estabelece as regras do jogo político; a separação de poderes evita que uma só instituição concentre todo o poder.",
        exemplo:
          "Quando o Legislativo fiscaliza atos do Executivo, ou quando o Judiciário julga se um ato respeita a Constituição, os Poderes exercem, uns sobre os outros, controles previstos na própria Constituição.",
        naoConfunda:
          "“Predominantemente” não significa “exclusivamente”: cada Poder exerce principalmente uma função, mas há colaboração e controle entre eles (o chamado sistema de freios e contrapesos). Também não confunda Constituição com lei comum: ela é hierarquicamente superior, e as demais normas precisam respeitá-la.",
        naProva:
          "Fique atento a questões sobre limites ao poder, controle entre instituições, direitos fundamentais e Estado de Direito. Expressões como “norma máxima”, “freios e contrapesos”, “independência entre os poderes” e “supremacia da Constituição” costumam indicar esse tema.",
      },
    ],
  },

  deepDive: {
    title: "APLIQUE A CASOS CONCRETOS",
    items: [
      {
        id: "estado-governo",
        title: "Retomando a Aula 03: Estado e governo",
        content:
          "Estado e governo não são sinônimos. O Estado reúne instituições e estruturas relativamente permanentes. O governo corresponde à gestão política temporária dessas estruturas.",
        highlight:
          "Quem governa pode mudar; a estrutura do Estado é relativamente permanente.",
      },
      {
        id: "politica-eleicoes",
        title: "Política é só eleição?",
        content:
          "Política também é a organização de decisões coletivas, prioridades, regras, recursos e relações de poder — em uma escola, em um bairro ou em um país. Eleições são um mecanismo importante, mas não o único.",
        highlight: "POLÍTICA NÃO SE RESUME A ELEIÇÕES.",
      },
      {
        id: "maioria-limites",
        title: "A maioria pode decidir tudo?",
        content:
          "Democracia constitucional não significa que uma maioria tenha poder ilimitado. Direitos, Constituição, regras, procedimentos, instituições e controles delimitam o que pode ser decidido e como. Esses limites protegem todos, inclusive quem está em minoria em determinado momento.",
        highlight: "Decisão da maioria, dentro de regras e limites.",
      },
      {
        id: "consultas-populares",
        title: "Plebiscito, referendo e iniciativa popular",
        content:
          "Plebiscito é uma consulta popular convocada antes do ato legislativo ou administrativo. Referendo é uma consulta popular convocada depois, para ratificação ou rejeição. Nos dois casos, os cidadãos são consultados diretamente. Iniciativa popular é diferente: é a possibilidade de apresentação de projeto de lei à Câmara dos Deputados, quando cumpridos os requisitos legais.",
        highlight:
          "Iniciativa popular não é uma votação direta: é a possibilidade de propor um projeto de lei.",
      },
      {
        id: "participar-alem-voto",
        title: "Participar é só votar?",
        content:
          "Cidadania vai além do voto. Audiências públicas, conselhos, consultas, acompanhamento das decisões e acesso a informações públicas ampliam a participação entre uma eleição e outra.",
        highlight: "Cidadania vai além do voto.",
      },
      {
        id: "cargo-publico",
        title: "De quem é o cargo público?",
        content:
          "Em uma república, cargos e recursos públicos não pertencem a quem os ocupa: pertencem à coletividade e são exercidos por mandato, com regras e prestação de contas. Por isso, transparência, fiscalização e alternância no exercício do poder são características associadas à ideia republicana.",
        highlight: "Cargo público é função, não propriedade.",
      },
    ],
    closing:
      "Perceba que essas distinções não são apenas teóricas: elas aparecem em notícias, em debates públicos e em questões de prova.",
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Como esses conceitos se aplicam ao Brasil?",
    center: "BRASIL",
    items: [
      {
        id: "constituicao",
        label: "CONSTITUIÇÃO",
        description:
          "Norma máxima do país, que organiza o Estado, distribui o poder e assegura direitos e garantias fundamentais.",
      },
      {
        id: "republica",
        label: "REPÚBLICA",
        description:
          "Forma de governo em que os cargos de chefia são exercidos por mandato, com regras e prestação de contas.",
      },
      {
        id: "democracia",
        label: "DEMOCRACIA",
        description:
          "Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos da Constituição.",
      },
      {
        id: "separacao-poderes",
        label: "SEPARAÇÃO DE PODERES",
        description:
          "Legislativo, Executivo e Judiciário são independentes e harmônicos entre si, com mecanismos constitucionais de controle recíproco.",
      },
      {
        id: "voto",
        label: "REGRAS DE VOTO",
        description:
          "Voto facultativo para 16 e 17 anos; obrigatório para pessoas alfabetizadas de 18 a 70 anos; facultativo para pessoas analfabetas e maiores de 70 anos.",
      },
      {
        id: "participacao",
        label: "PARTICIPAÇÃO",
        description:
          "Além do voto, existem canais de participação e de controle social, como audiências públicas e conselhos.",
      },
    ],
    study:
      "Essas características são institucionais: descrevem como o poder está organizado e quais instrumentos de participação existem. Elas não são recomendação de voto, de partido ou de posição política. Avaliar governos, partidos, candidatos ou propostas específicas é outra discussão, que não é o objetivo desta aula.",
    highlight: "Conhecer as regras do jogo é o primeiro passo para participar dele.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: ["Texto", "Charge", "Notícia", "Trecho da Constituição"],
    demandsTitle: "A questão cobra",
    demands: [
      "Diferenciação conceitual",
      "Reconhecimento de instituições",
      "Identificação de direitos e limites",
      "Interpretação de contexto",
    ],
    highlight:
      "A prova raramente pergunta “o que é democracia?” isoladamente: ela testa se você reconhece o conceito em uma situação concreta.",
    guidingIntro: "Use estas cinco perguntas para não confundir os conceitos:",
    guidingQuestions: [
      "A situação descreve como o cargo de chefe de Estado é ocupado? (forma de governo)",
      "Ela descreve participação, eleições livres, liberdades e direitos? (regime político)",
      "Ela descreve a relação entre o chefe de governo e o parlamento? (sistema de governo)",
      "Existem regras que valem para todos, inclusive para quem governa?",
      "Que direitos ou formas de participação estão em jogo, além do voto?",
    ],
  },

  question: {
    id: "s02-a06-q01",
    statement:
      "Em determinado país, o chefe de Estado é escolhido por eleição para um mandato de duração definida. A Constituição assegura liberdade de expressão, pluralismo político e independência entre os poderes, e estabelece que as decisões da maioria devem respeitar os direitos fundamentais de todos. Com base na distinção entre forma de governo e regime político, a combinação de características descrita corresponde a:",
    options: [
      {
        id: "A",
        text: "uma monarquia hereditária com regime autoritário.",
      },
      {
        id: "B",
        text: "uma monarquia parlamentar, pois o chefe de Estado não governa.",
      },
      {
        id: "C",
        text: "uma democracia direta, pois o povo decide todas as questões sem representantes.",
      },
      {
        id: "D",
        text: "uma ditadura, pois a Constituição limita a vontade da maioria.",
      },
      {
        id: "E",
        text: "uma república com regime democrático.",
      },
    ],
    correctOptionId: "E",
    explanation:
      "A alternativa E está correta. A escolha do chefe de Estado por eleição, para um mandato de duração definida, caracteriza a república (forma de governo); a garantia de liberdades, de pluralismo, de independência entre os poderes e de respeito aos direitos fundamentais caracteriza o regime democrático (regime político). As demais alternativas confundem os conceitos: A e B descrevem monarquias, o que é incompatível com um chefe de Estado eleito para mandato definido; C atribui ao país uma democracia direta sem qualquer base no texto, que não afirma que o povo decida tudo sem representantes; e D interpreta como ditadura os limites constitucionais à maioria, quando eles são característica de uma democracia constitucional e protegem os direitos de todos.",
  },

  missionCheck:
    "Lembre-se do grêmio: quando você escolheu como decidir e o que deveria limitar a maioria, já estava lidando com participação, regras e limites ao poder — os elementos que sustentam a democracia, a república e a cidadania. Agora você consegue diferenciar esses conceitos e reconhecê-los em situações concretas e em questões de prova?",

  completionMessage:
    "Aquela escolha no grêmio não era só sobre um intervalo. Era sobre quem decide, como decide e o que nenhuma decisão pode ultrapassar.",
};
