import type { LessonContent } from "@/lib/types";

/**
 * AULA 30 — DO RECORTE AO ARGUMENTO
 * Semana 10 • Política & Cidadania (COMPREENDA) — O MUNDO EM RECORTES
 * Linha de apoio da semana: "Regionalizar o mundo". Última aula do curso
 * antes do Checkpoint 10.
 *
 * Pergunta-guia (abre e fecha a aula): "Como construir um argumento
 * geográfico sem dizer mais do que as evidências permitem?" Operação:
 * PERGUNTA → RECORTE E ESCALA → EVIDÊNCIA → RELAÇÃO → LIMITE → ARGUMENTO,
 * idêntica à ferramenta "Leia um problema novo em seis passos"
 * (`application`). O argumento é o produto: a explicação que sobrevive ao
 * teste das evidências e de seus limites.
 * Cinco lentes = os cinco primeiros passos. Modelo discursivo: AFIRMAÇÃO →
 * CONCEITO → EVIDÊNCIA → RELAÇÃO/ESCALA → LIMITE (ordem de escrever, não de
 * pensar). Causalidade em quatro níveis: coincidência, associação,
 * mecanismo, causalidade.
 * Progressão: Aula 28 (escolher e avaliar o recorte) → Aula 29 (ler quem
 * classifica e para quê) → Aula 30 (transformar recorte + evidência em
 * argumento). Leitor → autor, no sentido de construir uma interpretação
 * sustentada, e não de opinar livremente.
 * Caso real único: Amazônia Legal × Bioma Amazônia, com três documentos
 * (mapa; regra estatística do IBGE para os municípios atravessados pelo
 * meridiano 44°W; texto legal da LC nº 124/2007). Sem números de população.
 * Retrospectiva: um único quadro, o Método P.O.N.T.O.
 * REPETIÇÃO EVITADA: "depois ≠ por causa de" (Aula 15) e fonte → evidência
 * → conclusão (Aula 08), só retomados; recortes (Aula 28) e classificações
 * (Aula 29) como premissas. A Aula 14 usou um dado de desmatamento "da
 * Amazônia Legal"; esta aula não trata de desmatamento.
 * FORA DO CONTEÚDO: população do Censo 2022; número de habitantes;
 * Imperatriz; desmatamento; avaliação da SUDAM, de governos ou da eficiência
 * de políticas; listas de estados ou municípios; Semiárido.
 * Território da questão (Aldara, Região de Planejamento Norte, domínio de
 * Mata Alta) é fictício; nomes inéditos nas Aulas 01–29 e nos Checkpoints
 * 01–09.
 *
 * IMAGEM PLANEJADA (ainda não existe; o site mostra o placeholder):
 * /public/assets/aulas/semana-10-aula-30-amazonia.png, proporção 16:9.
 *
 * FONTES (verificadas em novembro de 2026):
 *   • Lei Complementar nº 124/2007, art. 2º: a Amazônia Legal corresponde à
 *     área de atuação da Superintendência do Desenvolvimento da Amazônia —
 *     SUDAM. Art. 3º: a SUDAM tem por finalidade promover o desenvolvimento
 *     includente e sustentável de sua área de atuação e a integração
 *     competitiva da base produtiva regional na economia nacional e
 *     internacional.
 *   • IBGE, Quadro Geográfico de Referência — Amazônia Legal (edição 2024;
 *     mapa atualizado em 2025): recorte legal e de planejamento, distinto do
 *     bioma e das definições por bacia; estados da Região Norte, Mato Grosso
 *     e parte do Maranhão a oeste do meridiano 44°W; 773 municípios
 *     relacionados (nota factual, fora do conteúdo); no Maranhão, municípios
 *     atravessados pelo meridiano 44°W são considerados integralmente na
 *     divulgação estatística.
 *   • IBGE, Biomas: a Amazônia Legal contém áreas de mais de um bioma, como
 *     Cerrado e Pantanal.
 *
 * Aula em preparação (`course.ts` ainda não cadastra a Semana 10).
 */
export const aula30Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de enfrentar um problema geográfico novo partindo da pergunta, do recorte e das evidências, e de construir um argumento que diga exatamente o que essas evidências sustentam, nem mais, nem menos.",

  observation: {
    title: "O OLHAR DO PACO",
    lines: [
      "Dois mapas do Brasil falam em Amazônia. No primeiro, a Amazônia Legal: os estados da Região Norte, Mato Grosso e a parte do Maranhão a oeste do meridiano 44°W. No segundo, o Bioma Amazônia. Os limites não são iguais: a Amazônia Legal também contém áreas de outros biomas, como o Cerrado e o Pantanal.",
      "Pela Aula 28, você já sabe por quê: os dois recortes foram construídos com critérios e finalidades diferentes. A pergunta agora é outra.",
    ],
    image: {
      src: "/assets/aulas/semana-10-aula-30-amazonia.png",
      alt: "Composição conceitual, sobre fundo escuro, com um território abstrato delimitado por dois recortes diferentes que se sobrepõem parcialmente — um contorno orgânico verde e um contorno poligonal roxo — e três tipos de evidência — mapa, dado e texto — cujas linhas convergem para uma única linha de argumento, em laranja.",
      caption: "Composição conceitual criada para fins didáticos; os recortes e evidências representados não correspondem a dados ou limites reais.",
    },
    questions: [
      "Se os dois falam em Amazônia, por que os limites não são iguais?",
      "E o que acontece quando um desses limites passa a definir para qual território uma política ou uma estatística se refere?",
      "Um dado divulgado para a Amazônia Legal descreve o Bioma Amazônia?",
      "O que você precisa saber antes de usar esse dado num argumento?",
      "Como construir um argumento geográfico sem dizer mais do que as evidências permitem?",
    ],
    closing: "GUARDE SUAS RESPOSTAS. VAMOS VOLTAR A ESSES DOIS MAPAS NO FINAL DA AULA.",
  },

  connection: {
    title: "DO LEITOR AO AUTOR",
    flow: [
      "Escolher e avaliar o recorte (Aula 28)",
      "Ler quem classifica e para quê (Aula 29)",
      "Transformar recorte + evidência em argumento (Aula 30)",
    ],
    highlight:
      "Ser autor não é opinar livremente: é construir uma interpretação sustentada pelas evidências disponíveis.",
    text: "Na Aula 28, você aprendeu a escolher e avaliar recortes. Na Aula 29, a perguntar quem classifica e para quê. Agora você deixa de ser só leitor: vai usar recorte e evidência para afirmar algo, e para saber o que não pode afirmar. “Como construir um argumento geográfico sem dizer mais do que as evidências permitem?”",
  },

  lenses: {
    eyebrow: "Cinco lentes antes de argumentar",
    title: "ATÉ ONDE ESTA EVIDÊNCIA ME LEVA?",
    subtitle:
      "As cinco lentes são os cinco primeiros passos da operação. O sexto, o argumento, é o que elas produzem.",
    items: [
      {
        id: "pergunta",
        emoji: "❓",
        name: "QUAL É A PERGUNTA?",
        question: "O que efetivamente precisa ser explicado? Não comece pelo dado.",
      },
      {
        id: "recorte",
        emoji: "🗺️",
        name: "EM QUE RECORTE E ESCALA?",
        question: "Que território, em qual escala, definido por quem?",
      },
      {
        id: "evidencia",
        emoji: "🔎",
        name: "QUAL É A EVIDÊNCIA?",
        question: "O que o documento mostra de fato?",
      },
      {
        id: "relacao",
        emoji: "🔗",
        name: "QUE RELAÇÃO ELA SUSTENTA?",
        question: "Comparação, associação, mecanismo ou causalidade?",
      },
      {
        id: "limite",
        emoji: "🧭",
        name: "ATÉ ONDE POSSO IR?",
        question: "O que essa evidência permite afirmar, e o que ela não permite?",
      },
    ],
    highlight:
      "O argumento é a explicação que sobrevive ao teste das evidências e de seus limites.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "LEIA UM PROBLEMA NOVO EM SEIS PASSOS",
    context:
      "Os passos servem para mapas, gráficos, tabelas, fotografias, textos e notícias. Aqui, aplicados aos três documentos sobre a Amazônia Legal.",
    flow: [
      "Que pergunta preciso responder?",
      "Que recorte e escala estão em jogo, e quem os produziu?",
      "Que evidência os documentos fornecem de fato?",
      "Que relação essa evidência sustenta: comparação, associação, mecanismo ou causa? Quem age? Que processo atua?",
      "O que essa evidência não permite afirmar?",
      "Que argumento os documentos sustentam juntos?",
    ],
    question:
      "Um indicador divulgado para a Amazônia Legal pode ser interpretado automaticamente como um indicador do Bioma Amazônia?",
    accordions: [
      {
        id: "pergunta-recorte",
        title: "PASSOS 1 E 2: PERGUNTA, RECORTE E ESCALA",
        content:
          "A pergunta é sobre o território a que o indicador se refere. O recorte do dado é a Amazônia Legal, um recorte jurídico-político e de planejamento regional definido em lei; o Bioma Amazônia é um recorte ambiental, construído por critérios ecológicos. Os dois estão na escala nacional, mas foram produzidos por critérios e finalidades diferentes.",
      },
      {
        id: "evidencia-relacao",
        title: "PASSOS 3 E 4: EVIDÊNCIA E RELAÇÃO",
        content:
          "O mapa mostra que os limites não coincidem; a regra do IBGE mostra que, no Maranhão, os municípios atravessados pelo meridiano 44°W entram inteiros nas estatísticas da Amazônia Legal; o texto legal mostra que o recorte tem uma finalidade institucional. Juntos, eles sustentam uma relação: o dado é agregado segundo o território definido para a região de planejamento.",
      },
      {
        id: "limite-argumento",
        title: "PASSOS 5 E 6: LIMITE E ARGUMENTO",
        content:
          "A resposta à pergunta é não. Isso não torna o indicador inválido: ele descreve bem a Amazônia Legal. Mas ele não permite descrever diretamente o Bioma Amazônia. O argumento que os três documentos sustentam juntos: precisamos saber a que território um indicador se refere antes de usá-lo.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "Você viu que um mesmo nome, Amazônia, pode designar recortes diferentes, e que o recorte decide a que território um dado se refere. Agora, as cinco lentes que transformam essa leitura em argumento.",
      "Guarde uma regra: um bom argumento não é o que afirma mais. É o que afirma exatamente o que a evidência sustenta.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "pergunta",
        name: "QUAL É A PERGUNTA?",
        conceito:
          "Todo argumento responde a uma pergunta. Antes de olhar o dado, identifique o que efetivamente precisa ser explicado: começar pelo dado leva a descrever o material, e não a responder.",
        penseAssim: "Pergunte: o que esta questão quer que eu explique?",
        exemplo:
          "Diante dos mapas da Amazônia, a pergunta não é “o que os mapas mostram?”, mas “um indicador da Amazônia Legal descreve o bioma?”.",
        naoConfunda: "Descrever o material não é o mesmo que responder à pergunta.",
        naProva: "Questões discursivas pedem que você responda ao comando, e não que resuma os documentos.",
      },
      {
        id: "recorte",
        name: "EM QUE RECORTE E ESCALA?",
        conceito:
          "Todo dado e todo argumento se referem a um território, numa escala, definido por alguém com uma finalidade. A Amazônia Legal, área de atuação da SUDAM segundo a Lei Complementar nº 124/2007, é um recorte jurídico-político e de planejamento regional; o Bioma Amazônia é um recorte ambiental.",
        penseAssim: "Pergunte: que território, em qual escala, definido por quem e para quê?",
        exemplo:
          "A Amazônia Legal reúne os estados da Região Norte, Mato Grosso e parte do Maranhão; o bioma segue critérios ecológicos e tem outros limites.",
        naoConfunda:
          "Amazônia Legal não é sinônimo de Bioma Amazônia, de Bacia Amazônica, de Amazônia Internacional nem de Região Norte.",
        naProva: "Mapas e indicadores pedem que você identifique o recorte a que o dado se refere.",
      },
      {
        id: "evidencia",
        name: "QUAL É A EVIDÊNCIA?",
        conceito:
          "Evidência é o que o material mostra de fato: um mapa, um gráfico, uma tabela, uma fotografia, um texto ou uma notícia. Evidência não é argumento: o dado sozinho não explica.",
        penseAssim: "Pergunte: o que este documento mostra, e o que eu estou acrescentando a ele?",
        exemplo:
          "A regra do IBGE mostra que municípios atravessados pelo meridiano 44°W entram inteiros nas estatísticas da Amazônia Legal: a regra do recorte também interfere em como o dado é agregado.",
        naoConfunda: "Repetir números ou copiar um trecho não é usar a evidência.",
        naProva: "Gráficos e tabelas pedem que você extraia o padrão e o relacione a um processo.",
      },
      {
        id: "relacao",
        name: "QUE RELAÇÃO ELA SUSTENTA?",
        conceito:
          "Relacionar é conectar processos, comparar, identificar atores, trabalhar escalas e explicar mecanismos. Há graus diferentes de relação: coincidência, quando dois fatos aparecem juntos; associação, quando há uma relação observável; mecanismo, quando existe um processo capaz de conectá-los; causalidade, quando há evidência suficiente para afirmar que um fenômeno contribui para produzir outro.",
        penseAssim: "Pergunte: que relação a evidência sustenta, e até que grau?",
        exemplo:
          "A delimitação da Amazônia Legal define a que recorte um indicador se refere. Isso é diferente de causa: estar no recorte não causou o indicador.",
        naoConfunda: "Depois não é por causa de (Aula 15), e associação não é causalidade.",
        naProva: "Notícias pedem que você separe o evento do processo e não tome a sequência como causa.",
      },
      {
        id: "limite",
        name: "ATÉ ONDE POSSO IR?",
        conceito:
          "Toda evidência tem limites. Antes de concluir, pergunte o que ela permite afirmar e o que ela não permite. O argumento é o que sobra depois desse teste.",
        penseAssim: "Pergunte: o que essa evidência permite afirmar, e o que ela não permite?",
        exemplo:
          "Um indicador da Amazônia Legal descreve bem a região de planejamento, mas não permite, por si, conclusões diretas sobre o bioma ou a floresta.",
        naoConfunda:
          "Reconhecer um limite não torna a evidência inválida: torna o argumento preciso.",
        naProva: "Alternativas que afirmam mais do que o material mostra costumam ser as armadilhas.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "pensar-escrever",
        title: "Pensar e escrever: os cinco movimentos",
        content:
          "A ordem de pensar não precisa ser a mesma ordem de escrever. Para pensar, siga a operação: pergunta, recorte e escala, evidência, relação, limite, argumento. Para escrever, comece pela afirmação e sustente-a em cinco movimentos: afirmação (responda diretamente), conceito (nomeie a ferramenta geográfica), evidência (use o material fornecido), relação e escala (explique por que a evidência sustenta a afirmação) e limite (não diga mais do que o material permite).",
        flow: ["Afirmação", "Conceito", "Evidência", "Relação/escala", "Limite"],
        highlight: "Os cinco movimentos organizam o raciocínio; não são uma receita de redação.",
      },
      {
        id: "fraca-forte",
        title: "Resposta fraca × resposta forte",
        content:
          "Pergunta: “Explique por que um indicador divulgado para a Amazônia Legal não deve ser interpretado automaticamente como indicador do Bioma Amazônia.” Resposta fraca: “Os mapas mostram que a Amazônia Legal e o Bioma Amazônia têm limites diferentes.” Ela é verdadeira, mas apenas descreve. Falta o conceito (que tipo de recorte é a Amazônia Legal), a finalidade (para que ela foi criada), a relação (como o dado é agregado) e a consequência para a interpretação do indicador. A resposta forte está no exemplo discursivo a seguir.",
        highlight: "Uma resposta pode ser verdadeira e ainda assim não responder à pergunta.",
      },
      {
        id: "discursiva",
        title: "Exemplo discursivo: quatro linhas bem construídas",
        content:
          "Enunciado: “Observe o mapa e o trecho institucional. Explique por que um indicador calculado para a Amazônia Legal não deve ser utilizado, sem cautela, para descrever o Bioma Amazônia.” Resposta-modelo: “O indicador se refere à Amazônia Legal, e não automaticamente ao Bioma Amazônia. A Amazônia Legal é um recorte jurídico-político de planejamento, definido em lei como área de atuação da SUDAM. Seus limites não coincidem com os do bioma, e o IBGE inclui por inteiro municípios atravessados pelo meridiano 44°W: o dado é agregado segundo o território da região de planejamento. Por isso, ele não permite atribuir o resultado diretamente ao bioma ou à floresta.” Decomposição: a primeira frase é a afirmação; a segunda, o conceito; a terceira traz a evidência e a relação; a última, o limite.",
        flow: ["Afirmação", "Conceito", "Evidência e relação", "Limite"],
        highlight: "Quatro a seis linhas bem estruturadas podem ser uma resposta muito forte.",
      },
      {
        id: "ponto",
        title: "O método inteiro vira uma ação",
        content:
          "O curso começou com o Método P.O.N.T.O. Agora ele é uma ação de leitura. Problematizar é fazer a pergunta. Observar é reunir a evidência. Nomear é escolher o recorte e o conceito. Teorizar e conectar é estabelecer a relação. Operacionalizar é reconhecer o limite e construir o argumento.",
        flow: [
          "P: Problematizar → pergunta",
          "O: Observar → evidência",
          "N: Nomear → recorte e conceito",
          "T: Teorizar e conectar → relação",
          "O: Operacionalizar → limite e argumento",
        ],
        highlight: "O método inteiro vira uma ação de leitura.",
      },
    ],
    closing:
      "Um ponto de vista geográfico não é uma opinião: é uma interpretação construída com recorte, relações e evidências — e que sabe até onde pode ir.",
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Um indicador da Amazônia Legal descreve o Bioma Amazônia?",
    center: "AMAZÔNIA LEGAL",
    items: [
      {
        id: "mapa",
        label: "DOCUMENTO 1: O MAPA",
        description:
          "A Amazônia Legal e o Bioma Amazônia têm limites diferentes: a Amazônia Legal também contém áreas de outros biomas, como o Cerrado e o Pantanal. Os limites não coincidem porque os critérios não coincidem.",
      },
      {
        id: "regra",
        label: "DOCUMENTO 2: A REGRA ESTATÍSTICA DO IBGE",
        description:
          "No Maranhão, há municípios atravessados pelo meridiano 44°W, que marca parte do limite da Amazônia Legal. Para a divulgação das estatísticas da Amazônia Legal, o IBGE considera esses municípios integralmente. A regra do recorte também interfere em como o dado é agregado.",
      },
      {
        id: "lei",
        label: "DOCUMENTO 3: O TEXTO LEGAL",
        description:
          "Segundo o art. 2º da Lei Complementar nº 124/2007, a Amazônia Legal corresponde à área de atuação da Superintendência do Desenvolvimento da Amazônia (SUDAM), que tem por finalidade promover o desenvolvimento includente e sustentável de sua área de atuação e a integração da base produtiva regional na economia nacional e internacional. O recorte possui uma finalidade institucional.",
      },
    ],
    study:
      "Juntos, os três documentos respondem à pergunta: um indicador da Amazônia Legal não descreve automaticamente o bioma. Isso não o torna inválido; significa que precisamos saber a que território ele se refere.",
    highlight: "Precisamos saber a que território um indicador se refere.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Mapa",
      "Gráfico ou tabela",
      "Texto",
      "Duas fontes",
      "Notícia",
      "Indicador agregado",
      "Questão discursiva",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Responder à pergunta",
      "Identificar o recorte do dado",
      "Graduar a relação",
      "Reconhecer o limite",
    ],
    highlight:
      "Na primeira fase, escolha a conclusão que afirma exatamente o que as evidências sustentam. Na segunda, escreva essa conclusão.",
    guidingIntro: "Material → operação → armadilha:",
    guidingQuestions: [
      "Mapa → identifique o recorte e o critério. Armadilha: descrever sem explicar.",
      "Gráfico ou tabela → extraia o padrão e relacione-o ao processo. Armadilha: repetir números.",
      "Texto → identifique o ator, a tese e a finalidade. Armadilha: copiar o trecho.",
      "Duas fontes → compare as evidências. Armadilha: tratar diferença como contradição automática.",
      "Notícia → separe evento e processo. Armadilha: depois = por causa de.",
      "Indicador agregado → identifique o território a que o dado se refere. Armadilha: atribuir ao bioma um dado da região de planejamento.",
      "Questão discursiva → construa o argumento. Armadilha: opinião sem evidência.",
    ],
  },

  question: {
    id: "s10-a30-q01",
    statement:
      "No país fictício de Aldara, uma lei criou a Região de Planejamento Norte, área de atuação de uma agência de desenvolvimento regional; seus limites seguem divisas de distritos e, num trecho, uma linha reta traçada no mapa. O domínio florestal de Mata Alta, delimitado por critérios ecológicos, tem outros limites: ocupa a maior parte da região de planejamento, mas parte da região fica fora dele, e ele também se estende além da região. O instituto de estatística divulgou que, na Região de Planejamento Norte, a proporção de domicílios com acesso à internet é menor que a média nacional; pela regra do instituto, os distritos cortados pela linha reta entram integralmente no cálculo. Sobre o que esse indicador permite concluir, a conclusão mais bem sustentada pelas evidências é que",
    options: [
      {
        id: "A",
        text: "o indicador se refere à região de planejamento, com os distritos cortados incluídos por inteiro, e mostra acesso menor que a média nacional; não permite, por si, descrever o domínio de Mata Alta nem apontar a causa dessa diferença.",
      },
      {
        id: "B",
        text: "como o domínio de Mata Alta ocupa a maior parte da Região de Planejamento Norte, o indicador pode ser lido como medida do acesso à internet no domínio florestal, ainda que os distritos cortados entrem por inteiro no cálculo.",
      },
      {
        id: "C",
        text: "a Região de Planejamento Norte e o domínio de Mata Alta foram delimitados por critérios diferentes, um legal e outro ecológico, e por isso seus limites não coincidem: há áreas da região fora do domínio e áreas do domínio fora da região.",
      },
      {
        id: "D",
        text: "o indicador, calculado com os distritos cortados incluídos por inteiro, mostra que a proporção de domicílios com acesso à internet é menor que a média nacional em cada um dos distritos que formam a Região de Planejamento Norte.",
      },
      {
        id: "E",
        text: "o indicador mostra um acesso à internet menor que a média nacional, e essa diferença decorre da inclusão dos distritos na Região de Planejamento Norte, pois a delimitação feita pela lei produziu a desvantagem medida pelo instituto.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "A alternativa A está correta porque afirma exatamente o que as evidências sustentam. 1. RECORTE DO DADO: o indicador foi calculado para a Região de Planejamento Norte, um recorte definido por lei, e não para o domínio florestal. 2. EVIDÊNCIA: o dado mostra acesso à internet menor que a média nacional, e a regra do instituto inclui por inteiro os distritos cortados pela linha reta; o dado é agregado segundo o território da região de planejamento. 3. RELAÇÃO DEFENSÁVEL: o que se sustenta é uma comparação entre a região e a média nacional, não uma explicação da diferença. 4. LIMITE: como os limites da região e do domínio não coincidem, o indicador não descreve automaticamente o domínio de Mata Alta. 5. SEM CAUSALIDADE EXCESSIVA: nada no material indica que a delimitação causou a diferença; a lei define a que recorte o dado se refere, o que é diferente de causa. B atribui ao domínio florestal um dado da região de planejamento. C descreve corretamente os recortes, mas não responde ao que o indicador permite concluir. D usa um dado agregado para afirmar algo sobre cada distrito. E transforma a delimitação em causa da diferença, sem evidência.",
    optionFeedback: {
      A: "Correta: identifica o recorte do dado, usa a evidência e a regra de agregação, estabelece uma comparação defensável, reconhece que o dado não descreve automaticamente o domínio de Mata Alta e não aponta causa sem evidência.",
      B: "Ocupar a maior parte da região não torna o domínio o território do dado: parte da região fica fora dele, ele se estende além dela, e os distritos cortados entram inteiros. O indicador se refere à região de planejamento.",
      C: "A descrição dos recortes está correta, mas não responde à pergunta: o enunciado quer saber o que o indicador permite concluir, e esta alternativa não diz nada sobre ele.",
      D: "Um dado agregado para a região mostra o conjunto, não cada parte: alguns distritos podem ter acesso igual ou maior que a média nacional. Generalizar o agregado para todos os distritos ultrapassa a escala da evidência.",
      E: "O material mostra uma diferença, não a sua causa: a delimitação define a que território o indicador se refere, e nada no enunciado mostra que ela produziu a desvantagem medida.",
    },
  },

  missionCheck:
    "Voltemos à pergunta da aula: como construir um argumento geográfico sem dizer mais do que as evidências permitem? Agora você consegue partir da pergunta, do recorte e das evidências, graduar a relação que elas sustentam, reconhecer o limite e só então argumentar?",

  completionMessage:
    "Um ponto de vista geográfico não é uma opinião: é uma interpretação construída com recorte, relações e evidências — e que sabe até onde pode ir. No Checkpoint 10, você vai fazer o caminho inteiro: escolher o recorte que o problema exige e defendê-lo com evidências.",
};
