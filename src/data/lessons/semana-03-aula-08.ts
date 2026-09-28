import type { LessonContent } from "@/lib/types";

/**
 * AULA 08 — INFORMAÇÃO EM DISPUTA
 * Semana 03 • Geopolítica & Atualidades
 *
 * Ideia central: ler informações antes de aceitá-las — dado, fonte,
 * evidência, contexto, enquadramento e interpretação.
 *
 * Título, subtítulo, descrição, vídeo e status ficam em `src/data/course.ts`
 * (metadados da aula). Este arquivo guarda somente o conteúdo pedagógico.
 *
 * Rascunho editorial para revisão do Prof. Luis — altere apenas os textos
 * deste arquivo; nenhum componente precisa ser modificado. Rigorosamente
 * apartidária: nenhum caso político real, partido ou candidato é citado —
 * os exemplos são genéricos (indicador econômico fictício). A abertura usa
 * `decisionInsight` com `hideImage: true` (mecanismo já existente no
 * projeto, usado na Aula 06) para não criar nenhum placeholder visual,
 * já que nenhuma imagem foi produzida ainda.
 *
 * Esta aula ainda não está publicada em `src/data/course.ts`.
 */
export const aula08Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de distinguir dado, evidência, interpretação e opinião, analisar fonte, contexto e enquadramento, e reconhecer mecanismos básicos de desinformação sem assumir que toda divergência é falsa.",

  decisionInsight: {
    title: "O OLHAR DO PACO",
    image: null,
    hideImage: true,
    rounds: [
      {
        id: "duas-manchetes",
        question:
          "Uma cidade fictícia registra aumento de 20% em determinado indicador ao longo de um ano. Um perfil publica: “INDICADOR DISPARA EM UM ANO.” Outro perfil publica: “Mesmo após alta, indicador permanece abaixo da média histórica.” As duas frases podem ser verdadeiras ao mesmo tempo?",
        options: [
          { id: "sim", label: "Sim, as duas podem ser verdadeiras" },
          { id: "nao", label: "Não, uma das duas está mentindo" },
          { id: "impossivel-saber", label: "É impossível saber sem mais informação" },
          { id: "depende-fonte", label: "Depende de quem publicou cada uma" },
        ],
        reveal:
          "A mesma informação pode ser apresentada por enquadramentos diferentes. Um aumento de 20% e um valor ainda abaixo da média histórica podem, sim, ser verdadeiros ao mesmo tempo — cada frase apenas destaca um aspecto diferente do mesmo dado.",
      },
    ],
  },

  connection: {
    title: "ANTES DE COMPARTILHAR",
    flow: [
      "Fonte",
      "Data",
      "Contexto",
      "Evidência",
      "Enquadramento",
      "Comparação",
      "Conclusão",
    ],
    highlight: "Antes de compartilhar, conclua menos e pergunte mais.",
    text: "Ler uma informação com critério não significa desconfiar de tudo: significa percorrer uma sequência de perguntas antes de formar uma conclusão — de onde veio, quando, em que contexto, o que sustenta a afirmação, o que foi destacado e o que foi deixado de lado, e como ela se compara a outras informações sobre o mesmo assunto.",
  },

  lenses: {
    eyebrow: "Seis perguntas antes de aceitar uma informação",
    title: "NOMEIE OS ELEMENTOS DA INFORMAÇÃO",
    subtitle:
      "Antes de aceitar ou compartilhar uma informação, vale perguntar por cada um destes elementos.",
    items: [
      {
        id: "dado",
        emoji: "🔢",
        name: "DADO",
        question: "O que foi medido?",
      },
      {
        id: "fonte",
        emoji: "🗞️",
        name: "FONTE",
        question: "Quem produziu ou publicou a informação?",
      },
      {
        id: "evidencia",
        emoji: "🔍",
        name: "EVIDÊNCIA",
        question: "O que sustenta determinada afirmação?",
      },
      {
        id: "contexto",
        emoji: "🧭",
        name: "CONTEXTO",
        question: "O que preciso saber para interpretar esse dado?",
      },
      {
        id: "enquadramento",
        emoji: "🖼️",
        name: "ENQUADRAMENTO",
        question: "O que foi destacado — e o que ficou em segundo plano?",
      },
      {
        id: "interpretacao",
        emoji: "💭",
        name: "INTERPRETAÇÃO",
        question: "Que conclusão foi construída a partir dos dados?",
      },
    ],
    highlight: "Uma informação tem várias camadas — e cada camada merece uma pergunta própria.",
    image: null,
    hideImage: true,
  },

  video: {
    title: "AGORA, VAMOS OLHAR PARA A INFORMAÇÃO COM MAIS CUIDADO",
    paragraphs: [
      "Você já percebeu que duas afirmações diferentes podem partir dos mesmos dados. Agora vamos aprender a separar dado, evidência, contexto, enquadramento e interpretação antes de chegar a uma conclusão.",
    ],
  },

  concepts: {
    title: "DIFERENCIE COM PRECISÃO",
    items: [
      {
        id: "dado",
        name: "DADO",
        conceito:
          "Dado é um registro objetivo, geralmente numérico, resultante de uma medição ou observação — por exemplo, uma contagem, uma taxa ou um valor coletado em determinado momento. Sozinho, um dado não explica nada: ele apenas informa o que foi medido.",
        penseAssim:
          "Pergunte-se: essa frase está apenas relatando um número ou fato medido, ou já está tirando uma conclusão a partir dele? Se for só o registro, é dado.",
        exemplo:
          "“O indicador subiu 20% em um ano” é um dado. “O indicador disparou” já é uma leitura desse dado — uma interpretação, não o dado em si.",
        naoConfunda:
          "Dado não é sinônimo de interpretação: o dado é o registro bruto; a interpretação é a leitura que se faz dele. A mesma variação percentual pode ser descrita como “disparada” ou como “alta moderada”, dependendo de quem interpreta e com que referência compara.",
        naProva:
          "Fique atento a enunciados que misturam número e adjetivo (“disparou”, “despencou”, “explodiu”): o número é o dado; o adjetivo já é uma interpretação sobre ele.",
      },
      {
        id: "fonte",
        name: "FONTE",
        conceito:
          "Fonte é quem produziu, coletou ou publicou determinada informação — uma pessoa, uma instituição, um veículo de comunicação, um órgão público ou uma pesquisa. Conhecer a fonte ajuda a entender como e por que uma informação foi produzida, mas não decide sozinho se ela é verdadeira.",
        penseAssim:
          "Pergunte-se: eu sei quem produziu essa informação, com que método e com qual finalidade declarada? Se não sei, ainda não posso avaliar sua fonte.",
        exemplo:
          "Um mesmo dado pode ser divulgado por um órgão de pesquisa, por uma empresa interessada no resultado ou por um perfil anônimo em uma rede social — em cada caso, vale perguntar como o dado foi produzido, não apenas aceitar ou rejeitar por causa do nome de quem publicou.",
        naoConfunda:
          "Fonte conhecida não é o mesmo que afirmação automaticamente verdadeira: mesmo fontes respeitadas podem errar, desatualizar informações ou interpretar dados de forma discutível. Conhecer a fonte é o começo da avaliação, não o fim dela.",
        naProva:
          "Questões costumam apresentar duas fontes diferentes sobre o mesmo tema e pedir que você compare metodologia, finalidade ou momento da coleta — não apenas “qual fonte é confiável”.",
      },
      {
        id: "evidencia",
        name: "EVIDÊNCIA",
        conceito:
          "Evidência é o conjunto de dados, registros ou observações que sustentam uma afirmação. Uma afirmação bem fundamentada se apoia em evidências verificáveis; uma opinião pode ou não vir acompanhada delas.",
        penseAssim:
          "Pergunte-se: essa afirmação vem acompanhada de dados ou registros que eu poderia verificar, ou é apenas uma avaliação pessoal de quem fala? Se houver dados verificáveis, há evidência.",
        exemplo:
          "“Esse indicador é o mais importante da economia” é uma opinião. “Esse indicador subiu 20% segundo a série histórica X” é uma afirmação apoiada em evidência.",
        naoConfunda:
          "Opinião não é sinônimo de evidência: a opinião expressa um julgamento de valor; a evidência é o material verificável que sustenta (ou não) uma afirmação. Uma opinião pode ser razoável mesmo sem evidência direta, mas isso não a transforma em fato comprovado.",
        naProva:
          "Fique atento a enunciados que pedem para distinguir uma afirmação fundamentada em dados de uma afirmação apenas valorativa — essa é uma das cobranças mais comuns sobre leitura crítica.",
      },
      {
        id: "contexto",
        name: "CONTEXTO",
        conceito:
          "Contexto é o conjunto de circunstâncias — momento, local, condições anteriores, comparação histórica — necessário para interpretar corretamente uma informação. Um mesmo dado pode significar coisas diferentes dependendo do contexto em que é lido.",
        penseAssim:
          "Pergunte-se: eu sei quando, onde e em comparação com o quê esse dado foi produzido? Sem essas informações, é fácil interpretar mal um número correto.",
        exemplo:
          "Uma alta de 20% pode parecer expressiva isoladamente, mas, se o valor de partida era muito baixo, o contexto pode mostrar que o novo patamar ainda está abaixo da média histórica — o dado é o mesmo; o contexto muda a leitura.",
        naoConfunda:
          "Imagem verdadeira não é sinônimo de contexto verdadeiro: uma foto ou um dado pode ser genuíno e, ainda assim, ser apresentado fora do contexto original (outro momento, outro lugar, outra comparação), produzindo uma impressão equivocada mesmo sem qualquer informação falsa em si.",
        naProva:
          "Fique atento a comparações temporais (“em relação a quê?”) e a mudanças de escala ou de período: a prova costuma testar se você percebe que falta contexto para validar uma conclusão.",
      },
      {
        id: "enquadramento",
        name: "ENQUADRAMENTO",
        conceito:
          "Enquadramento é a forma como uma informação é apresentada — o que é destacado em primeiro plano e o que é deixado em segundo plano, incluindo escolha de palavras, imagens e comparações. O mesmo dado pode receber enquadramentos diferentes sem que nenhum deles seja necessariamente falso.",
        penseAssim:
          "Pergunte-se: o que essa manchete ou publicação escolheu destacar, e o que ela deixou de mencionar? Duas escolhas diferentes de destaque podem gerar impressões bem diferentes do mesmo fato.",
        exemplo:
          "“Indicador dispara” destaca a variação recente; “indicador permanece abaixo da média histórica” destaca a comparação de longo prazo. As duas descrevem o mesmo conjunto de dados com enquadramentos diferentes.",
        naoConfunda:
          "Divergência não é sinônimo de mentira: duas publicações com enquadramentos diferentes sobre o mesmo dado real não significam, por si só, que uma delas é falsa. Divergir no que se destaca é diferente de divergir nos fatos.",
        naProva:
          "Fique atento a duas fontes que apresentam o mesmo tema com títulos ou recortes diferentes: a prova pode pedir para identificar o enquadramento de cada uma, não para apontar qual está “certa”.",
      },
      {
        id: "interpretacao",
        name: "INTERPRETAÇÃO",
        conceito:
          "Interpretação é a conclusão construída a partir da leitura de dados, evidências e contexto. Interpretações diferentes podem partir dos mesmos dados e chegar a leituras distintas, sem que isso signifique, por si só, erro ou má-fé — mas também sem que toda interpretação seja igualmente sustentada pelas evidências.",
        penseAssim:
          "Pergunte-se: essa conclusão decorre logicamente dos dados e evidências apresentados, ou vai além do que eles sustentam? Interpretações bem construídas se apoiam explicitamente no que foi mostrado.",
        exemplo:
          "A partir do mesmo dado (alta de 20%, ainda abaixo da média histórica), é possível interpretar tanto “o indicador está em recuperação” quanto “o indicador ainda está em patamar baixo” — ambas podem ser leituras razoáveis do mesmo dado, dependendo do que se decide enfatizar.",
        naoConfunda:
          "Erro não é sinônimo de desinformação: um erro pode ser involuntário — um dado desatualizado, um cálculo equivocado, uma citação incompleta. Desinformação, em geral, envolve a criação ou disseminação deliberada de informação falsa ou enganosa. Nem toda informação incorreta é desinformação.",
        naProva:
          "Fique atento a enunciados que pedem para distinguir uma leitura razoável (mesmo que discutível) de uma conclusão que os dados apresentados simplesmente não sustentam.",
      },
    ],
  },

  application: {
    title: "AGORA CONECTE",
    context:
      "Um gráfico fictício mostra a evolução de um indicador ambiental ao longo de cinco anos. Duas publicações usam o mesmo gráfico: uma destaca a queda no último ano; outra destaca a tendência de melhora ao longo de todo o período.",
    flow: ["Dado", "Fonte", "Contexto", "Evidência", "Conclusão"],
    question: "Antes de aceitar uma conclusão sobre esse gráfico, o que você verificaria primeiro?",
    accordions: [
      {
        id: "verifique-fonte",
        title: "VERIFIQUE A FONTE",
        content:
          "Quem produziu o gráfico, com que metodologia e com qual finalidade declarada?",
      },
      {
        id: "verifique-contexto",
        title: "VERIFIQUE O CONTEXTO",
        content:
          "O recorte de tempo escolhido (o último ano, ou os cinco anos inteiros) muda a impressão gerada pelo mesmo gráfico?",
      },
      {
        id: "verifique-comparacao",
        title: "VERIFIQUE A COMPARAÇÃO",
        content:
          "As duas publicações estão de fato divergindo nos dados, ou apenas destacando períodos diferentes de uma mesma série?",
      },
    ],
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: ["Duas fontes", "Gráficos diferentes", "Notícia", "Charge ou fotografia"],
    demandsTitle: "A questão cobra",
    demands: [
      "Comparação de fontes",
      "Identificação de perspectiva",
      "Relação entre evidência e conclusão",
      "Reconhecimento de contexto",
    ],
    highlight:
      "A prova raramente pede para apontar “a fonte mentirosa”: ela testa se você sabe comparar enquadramentos e evidências.",
    guidingIntro: "Diante de duas informações divergentes sobre o mesmo tema, pergunte:",
    guidingQuestions: [
      "As duas descrevem o mesmo dado, ou dados diferentes?",
      "O que cada uma escolheu destacar, e o que deixou de lado?",
      "Falta contexto para interpretar alguma delas corretamente?",
      "A divergência está nos fatos, ou no enquadramento dado a eles?",
    ],
  },

  question: {
    id: "s03-a08-q01",
    statement:
      "Um mesmo conjunto de dados sobre determinado indicador social deu origem a duas manchetes fictícias. Manchete 1: “Indicador cresce pelo quinto ano seguido.” Manchete 2: “Apesar do crescimento, indicador segue abaixo do patamar registrado há dez anos.” Considerando os conceitos de dado, evidência, contexto e enquadramento, é correto afirmar que:",
    options: [
      {
        id: "A",
        text: "como as manchetes dizem coisas diferentes, pelo menos uma delas contém informação falsa.",
      },
      {
        id: "B",
        text: "as duas manchetes podem ser compatíveis entre si, pois destacam aspectos diferentes do mesmo conjunto de dados.",
      },
      {
        id: "C",
        text: "apenas a manchete que menciona o comparativo de dez anos pode ser considerada confiável.",
      },
      {
        id: "D",
        text: "a divergência entre as manchetes só pode ser resolvida verificando qual fonte é mais popular.",
      },
      {
        id: "E",
        text: "manchetes sobre o mesmo tema nunca podem apresentar enquadramentos diferentes sem que uma delas esteja errada.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "A alternativa B está correta. As duas manchetes podem descrever, de forma verdadeira, o mesmo conjunto de dados: uma destaca a tendência recente (crescimento em cinco anos), e a outra destaca a comparação de longo prazo (ainda abaixo do patamar de dez anos atrás). Ambas podem ser compatíveis, pois enfatizam recortes temporais diferentes do mesmo fenômeno. As demais alternativas erram ao presumir que a divergência de enquadramento implica necessariamente uma informação falsa (A e E), ao decidir a confiabilidade pela comparação temporal escolhida (C), ou ao propor um critério — popularidade da fonte — que nada tem a ver com a análise de dado, evidência e contexto (D).",
  },

  missionCheck:
    "Agora você consegue olhar para duas informações divergentes sobre o mesmo assunto e perguntar não “qual delas está mentindo?”, mas “que enquadramento cada uma escolheu, e que evidências e contexto sustentam cada leitura?”",

  completionMessage:
    "Pensamento crítico não significa desconfiar de tudo. Significa saber o que perguntar antes de acreditar.",
};
