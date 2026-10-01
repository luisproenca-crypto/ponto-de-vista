import type { LessonContent } from "@/lib/types";

/**
 * AULA 10 — URBANIZAÇÃO
 * Semana 04 • Geografia Essencial
 *
 * Ideia central: aprofundamento da urbanização já introduzida na Aula 07
 * (que tratou de "urbanização" apenas como um dos sete conceitos
 * demográficos). Esta aula não repete aquela definição introdutória:
 * concentra-se em hierarquia urbana, rede urbana, metropolização,
 * conurbação, urbanização formal e informal, segregação socioespacial e
 * expansão urbana.
 *
 * Título, subtítulo, descrição, vídeo e status ficam em `src/data/course.ts`
 * (metadados da aula). Este arquivo guarda somente o conteúdo pedagógico.
 *
 * Rascunho editorial para revisão do Prof. Luis — altere apenas os textos
 * deste arquivo; nenhum componente precisa ser modificado.
 *
 * Esta aula ainda não está publicada em `src/data/course.ts`.
 */
export const aula10Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de explicar a hierarquia e a rede urbana, diferenciar metropolização de conurbação e reconhecer padrões de urbanização formal, informal e de segregação socioespacial nas cidades.",

  hypothesis: {
    title: "O OLHAR DO PACO",
    intro:
      "Por que nem todas as cidades são iguais? Duas cidades podem ter o mesmo número de habitantes e, ainda assim, uma concentrar muito mais serviços, empregos e influência do que a outra. Antes de explicar, observe estas possibilidades.",
    cards: [
      { id: "aeroporto", label: "Ter um aeroporto internacional" },
      { id: "sede-empresas", label: "Sediar grandes empresas" },
      { id: "hospitais", label: "Ter hospitais de alta complexidade" },
      { id: "universidades", label: "Ter universidades e centros de pesquisa" },
      { id: "cultura-lazer", label: "Oferecer vida cultural e de lazer" },
      { id: "centro-decisoes", label: "Ser capital ou centro de decisões políticas" },
    ],
    question: "Qual dessas funções parece pesar mais na hora de uma cidade se tornar uma referência regional?",
    paco: "Escolha duas dessas funções e tente imaginar como elas atraem outras atividades para a mesma cidade.",
    reveal: "Boas hipóteses. Isso que você percebeu tem nome: hierarquia urbana.",
  },

  lenses: {
    eyebrow: "Oito conceitos da vida urbana",
    title: "LEIA A CIDADE NA REDE URBANA",
    subtitle:
      "Cada conceito ajuda a entender por que as cidades crescem, se conectam e se organizam de formas diferentes.",
    items: [
      {
        id: "hierarquia-urbana",
        emoji: "🏙️",
        name: "HIERARQUIA URBANA",
        question: "Por que algumas cidades concentram mais funções e influência do que outras?",
      },
      {
        id: "rede-urbana",
        emoji: "🕸️",
        name: "REDE URBANA",
        question: "Como as cidades se conectam entre si por fluxos de pessoas, mercadorias e informações?",
      },
      {
        id: "metropolizacao",
        emoji: "🌆",
        name: "METROPOLIZAÇÃO",
        question: "O que acontece quando uma metrópole passa a organizar a vida dos municípios ao seu redor?",
      },
      {
        id: "conurbacao",
        emoji: "🧩",
        name: "CONURBAÇÃO",
        question: "O que acontece quando o crescimento de cidades vizinhas faz suas áreas urbanas se encontrarem?",
      },
      {
        id: "urbanizacao-formal",
        emoji: "📐",
        name: "URBANIZAÇÃO FORMAL",
        question: "Como o poder público planeja e regula a ocupação do espaço urbano?",
      },
      {
        id: "urbanizacao-informal",
        emoji: "🏚️",
        name: "URBANIZAÇÃO INFORMAL",
        question: "O que acontece quando a ocupação urbana se dá à margem do planejamento oficial?",
      },
      {
        id: "segregacao-socioespacial",
        emoji: "🗺️",
        name: "SEGREGAÇÃO SOCIOESPACIAL",
        question: "Por que grupos sociais diferentes costumam ocupar partes distintas da cidade?",
      },
      {
        id: "expansao-urbana",
        emoji: "📈",
        name: "EXPANSÃO URBANA",
        question: "Como e para onde uma cidade cresce fisicamente ao longo do tempo?",
      },
    ],
    highlight: "A cidade não cresce sozinha: ela cresce em rede, com hierarquia, e nem sempre de forma planejada.",
    image: null,
    hideImage: true,
  },

  video: {
    title: "AGORA, VAMOS ORGANIZAR A REDE URBANA",
    paragraphs: [
      "Você já formulou hipóteses sobre por que algumas cidades concentram mais funções do que outras. Agora vamos dar precisão a esses oito conceitos e aprender a reconhecer cada um deles numa situação concreta.",
    ],
  },

  concepts: {
    title: "DIFERENCIE COM PRECISÃO",
    items: [
      {
        id: "hierarquia-urbana",
        name: "HIERARQUIA URBANA",
        conceito:
          "Hierarquia urbana é a organização das cidades segundo o grau de complexidade das funções que concentram — quanto mais funções especializadas (serviços de saúde de alta complexidade, ensino superior, sedes de empresas, decisões políticas), maior a posição da cidade na hierarquia, independentemente apenas do número de habitantes.",
        penseAssim:
          "Pergunte-se: essa cidade é procurada por pessoas de outras cidades para obter serviços que só ela oferece? Quanto mais isso acontece, mais alta é sua posição na hierarquia urbana.",
        exemplo:
          "Uma cidade média pode não ter a maior população de uma região, mas concentrar o único hospital de alta complexidade e a única universidade — por isso, atrai pessoas de várias cidades vizinhas, ocupando posição elevada na hierarquia urbana local.",
        naoConfunda:
          "Hierarquia urbana não é sinônimo de tamanho populacional: uma cidade pode ser populosa e, ainda assim, depender de outra cidade (às vezes menor) para serviços mais especializados. O que define a posição na hierarquia é a complexidade das funções oferecidas, não apenas o número de habitantes.",
        naProva:
          "Fique atento a mapas ou textos que comparam cidades por funções oferecidas (metrópole, capital regional, centro local) em vez de apenas por população. A prova costuma testar se você reconhece que tamanho populacional e posição na hierarquia urbana são coisas diferentes.",
      },
      {
        id: "rede-urbana",
        name: "REDE URBANA",
        conceito:
          "Rede urbana é o conjunto de cidades conectadas entre si por fluxos de pessoas, mercadorias, capitais, serviços e informações. Diferentemente da hierarquia urbana, que ordena as cidades por importância, a rede urbana descreve as conexões entre elas.",
        penseAssim:
          "Pergunte-se: a informação está descrevendo a posição de uma cidade em relação às outras (hierarquia), ou está descrevendo como essas cidades trocam fluxos entre si (rede)?",
        exemplo:
          "Um caminhão que leva mercadorias de uma cidade produtora até um centro de distribuição maior, e depois até várias cidades menores da região, exemplifica os fluxos que compõem uma rede urbana.",
        naoConfunda:
          "Rede urbana não é sinônimo de hierarquia urbana: a hierarquia organiza as cidades por nível de importância; a rede descreve as conexões e fluxos entre elas. As duas ideias se complementam, mas respondem a perguntas diferentes.",
        naProva:
          "Fique atento a mapas com linhas ou setas conectando cidades (fluxos de mercadorias, pessoas, transporte): eles indicam rede urbana. Mapas com símbolos de tamanhos diferentes por cidade, sem conexões, indicam hierarquia urbana.",
      },
      {
        id: "metropolizacao",
        name: "METROPOLIZAÇÃO",
        conceito:
          "Metropolização é o processo pelo qual uma metrópole passa a organizar e influenciar diretamente a dinâmica econômica e social dos municípios ao seu redor, formando uma região metropolitana integrada por fluxos intensos de pessoas (como o deslocamento diário para trabalho) e atividades econômicas.",
        penseAssim:
          "Pergunte-se: os municípios vizinhos a essa metrópole dependem dela para emprego, serviços ou consumo, formando um só espaço de vida cotidiana? Se sim, há metropolização.",
        exemplo:
          "Uma pessoa que mora em um município vizinho a uma metrópole e se desloca diariamente até ela para trabalhar exemplifica a integração funcional típica da metropolização.",
        naoConfunda:
          "Metropolização não é sinônimo de conurbação: a metropolização é uma integração funcional (fluxos econômicos e sociais), que pode ocorrer mesmo sem que as áreas construídas das cidades se encontrem fisicamente. A conurbação, por sua vez, é a fusão física das manchas urbanas.",
        naProva:
          "Fique atento a enunciados que descrevem deslocamento diário de trabalhadores entre municípios (mobilidade pendular) ou dependência econômica entre cidades: isso indica metropolização, mesmo sem menção a fusão física de áreas urbanas.",
      },
      {
        id: "conurbacao",
        name: "CONURBAÇÃO",
        conceito:
          "Conurbação é a fusão física das áreas urbanas de duas ou mais cidades vizinhas, que crescem até que suas manchas urbanas se tornem contínuas, sem uma separação nítida entre elas no espaço construído.",
        penseAssim:
          "Pergunte-se: as áreas construídas de duas cidades vizinhas se uniram fisicamente, a ponto de não ser mais possível identificar visualmente onde uma termina e a outra começa? Se sim, há conurbação.",
        exemplo:
          "Duas cidades que, décadas atrás, eram separadas por uma faixa de área rural e hoje têm suas ruas e bairros se encontrando sem interrupção visível exemplificam uma conurbação.",
        naoConfunda:
          "Conurbação não é sinônimo de metropolização: a conurbação descreve a continuidade física do espaço construído; a metropolização descreve a integração funcional (fluxos econômicos e de pessoas), que pode existir entre cidades fisicamente separadas.",
        naProva:
          "Fique atento a imagens de satélite ou mapas que mostram manchas urbanas contínuas entre municípios vizinhos: isso indica conurbação. O enunciado pode não usar a palavra — procure a ideia de continuidade física do espaço construído.",
      },
      {
        id: "urbanizacao-formal",
        name: "URBANIZAÇÃO FORMAL",
        conceito:
          "Urbanização formal é a ocupação do espaço urbano conforme o planejamento e a regulação do poder público — loteamentos aprovados, infraestrutura planejada (água, esgoto, energia, vias) e respeito à legislação urbanística.",
        penseAssim:
          "Pergunte-se: essa ocupação seguiu regras de planejamento urbano estabelecidas pelo poder público, com infraestrutura prevista antes da ocupação? Se sim, é urbanização formal.",
        exemplo:
          "Um bairro planejado, com ruas alinhadas, rede de esgoto instalada antes das construções e lotes regularizados, exemplifica urbanização formal.",
        naoConfunda:
          "Urbanização formal não significa que toda a cidade seja bem planejada ou que não existam problemas urbanos: significa apenas que aquela ocupação específica seguiu os trâmites e a regulação oficial.",
        naProva:
          "Fique atento a menções a loteamentos regulares, planos diretores, legislação urbanística e infraestrutura prévia: são pistas de urbanização formal.",
      },
      {
        id: "urbanizacao-informal",
        name: "URBANIZAÇÃO INFORMAL",
        conceito:
          "Urbanização informal é a ocupação do espaço urbano que ocorre à margem do planejamento e da regulação oficiais, muitas vezes sem infraestrutura prévia, resultando em assentamentos que se consolidam antes ou independentemente da regularização fundiária e urbanística.",
        penseAssim:
          "Pergunte-se: essa ocupação aconteceu antes de qualquer planejamento oficial, sem seguir os trâmites regulares de aprovação e infraestrutura? Se sim, é urbanização informal.",
        exemplo:
          "Um assentamento que surge em uma área sem infraestrutura prévia, organizado por seus próprios moradores ao longo do tempo, exemplifica urbanização informal.",
        naoConfunda:
          "Urbanização informal não é sinônimo de ilegalidade moral, nem descreve as pessoas que ali vivem: é uma categoria que descreve o processo de ocupação do espaço, não um julgamento sobre quem mora nesses locais. Também não é a única forma de expansão urbana desordenada — a expansão urbana formal também pode gerar problemas de planejamento.",
        naProva:
          "Fique atento a descrições de ocupações sem infraestrutura prévia, consolidadas ao longo do tempo pelos próprios moradores, ou a termos como “assentamento espontâneo”: indicam urbanização informal.",
      },
      {
        id: "segregacao-socioespacial",
        name: "SEGREGAÇÃO SOCIOESPACIAL",
        conceito:
          "Segregação socioespacial é o padrão de organização do espaço urbano em que diferentes grupos sociais ocupam áreas distintas da cidade, frequentemente associado a diferenças no acesso a infraestrutura, serviços e oportunidades entre essas áreas.",
        penseAssim:
          "Pergunte-se: o espaço da cidade está organizado de forma que diferentes grupos sociais ocupam áreas separadas, com acesso desigual a serviços e infraestrutura? Se sim, há segregação socioespacial.",
        exemplo:
          "Uma cidade em que áreas com melhor infraestrutura de saneamento, transporte e serviços concentram um perfil socioeconômico, enquanto áreas com menos infraestrutura concentram outro, exemplifica segregação socioespacial.",
        naoConfunda:
          "Segregação socioespacial não é sinônimo de simples desigualdade de renda: a desigualdade de renda é uma condição econômica; a segregação socioespacial é o padrão espacial de como essa e outras diferenças sociais se distribuem no território da cidade.",
        naProva:
          "Fique atento a mapas urbanos que cruzam indicadores sociais (renda, acesso a serviços) com a localização dos bairros: eles pedem leitura de segregação socioespacial, não apenas de desigualdade em geral.",
      },
      {
        id: "expansao-urbana",
        name: "EXPANSÃO URBANA",
        conceito:
          "Expansão urbana é o crescimento físico da área ocupada por uma cidade ao longo do tempo, podendo ocorrer de forma concentrada (adensamento) ou dispersa (espraiamento), e tanto por urbanização formal quanto informal.",
        penseAssim:
          "Pergunte-se: a área ocupada pela cidade está aumentando ao longo do tempo, e essa mancha urbana está crescendo de forma concentrada ou espalhada? Isso descreve a expansão urbana.",
        exemplo:
          "Comparar imagens de satélite da mesma cidade em dois momentos diferentes, observando o quanto a área urbanizada aumentou, exemplifica a análise de expansão urbana.",
        naoConfunda:
          "Expansão urbana não é sinônimo de urbanização: a urbanização mede a proporção da população que vive em áreas urbanas; a expansão urbana mede o crescimento físico da área ocupada pela cidade, que pode até acontecer com população relativamente estável, se o espraiamento for grande.",
        naProva:
          "Fique atento a comparações de imagens de satélite ou mapas da mesma cidade em períodos diferentes: são o formato clássico para testar expansão urbana.",
      },
    ],
  },

  application: {
    title: "AGORA CONECTE",
    context:
      "Uma cidade pequena fictícia fica a 40 minutos de uma grande metrópole. Nos últimos anos, muitos moradores da cidade pequena passaram a trabalhar na metrópole, viajando todos os dias, e novos comércios especializados só chegaram à cidade pequena depois que a metrópole cresceu.",
    flow: ["Metrópole", "Fluxos diários", "Cidade pequena", "Novos serviços", "Rede urbana"],
    question: "Essa cidade pequena está isolada, ou faz parte de uma rede urbana organizada por uma metrópole?",
    accordions: [
      {
        id: "dependencia-funcional",
        title: "DEPENDÊNCIA FUNCIONAL",
        content: "A cidade pequena depende da metrópole para empregos e serviços mais especializados — sinal de metropolização.",
      },
      {
        id: "posicao-hierarquia",
        title: "POSIÇÃO NA HIERARQUIA",
        content: "Mesmo pequena em população, a cidade pode subir de posição na hierarquia urbana se passar a oferecer novos serviços.",
      },
      {
        id: "conexao-rede",
        title: "CONEXÃO NA REDE",
        content: "Os fluxos diários de trabalhadores e mercadorias entre as duas cidades são o que caracteriza a rede urbana entre elas.",
      },
    ],
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Como esses conceitos aparecem nas cidades brasileiras?",
    center: "BRASIL",
    items: [
      {
        id: "regioes-metropolitanas",
        label: "REGIÕES METROPOLITANAS",
        description:
          "O Brasil tem regiões metropolitanas oficialmente instituídas, que reúnem um município-polo e municípios vizinhos integrados por fluxos econômicos e sociais.",
      },
      {
        id: "redes-regionais",
        label: "REDES REGIONAIS",
        description:
          "Cidades médias funcionam como polos regionais, oferecendo serviços especializados a municípios menores ao seu redor.",
      },
      {
        id: "urbanizacao-acelerada",
        label: "URBANIZAÇÃO ACELERADA",
        description:
          "Grande parte da urbanização brasileira ocorreu de forma acelerada ao longo do século XX, o que ajuda a explicar a coexistência de áreas com urbanização formal e informal em muitas cidades.",
      },
      {
        id: "segregacao-nas-cidades",
        label: "SEGREGAÇÃO NAS CIDADES",
        description:
          "Padrões de segregação socioespacial aparecem em diferentes cidades brasileiras, com áreas de infraestrutura desigual dentro do mesmo município.",
      },
    ],
    study:
      "Essas características ajudam a interpretar mapas e notícias sobre cidades brasileiras, mas cada cidade tem uma história própria de ocupação — os conceitos são ferramentas de leitura, não uma descrição única aplicável a toda cidade brasileira da mesma forma.",
    highlight: "Entender a rede urbana ajuda a entender por que nenhuma cidade cresce isolada.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: ["Mapa", "Imagem de satélite", "Gráfico de população urbana/rural", "Texto sobre uma cidade"],
    demandsTitle: "A questão cobra",
    demands: [
      "Diferenciação conceitual",
      "Leitura espacial",
      "Reconhecimento de escala",
      "Interpretação de rede/hierarquia",
    ],
    highlight: "A prova raramente pergunta “o que é uma cidade grande?”: ela testa se você reconhece função, rede e hierarquia.",
    guidingIntro: "Diante de um texto ou mapa sobre uma cidade, pergunte:",
    guidingQuestions: [
      "A cidade se destaca pelo tamanho populacional ou pelas funções que oferece?",
      "Existem fluxos conectando essa cidade a outras?",
      "A ocupação descrita seguiu planejamento oficial ou não?",
      "O texto descreve crescimento populacional ou crescimento da área urbanizada?",
    ],
  },

  question: {
    id: "s04-a10-q01",
    statement:
      "Uma cidade média fictícia não é a mais populosa de sua região, mas concentra o único hospital de alta complexidade e a única universidade pública da área. Por isso, recebe diariamente pacientes e estudantes vindos de diversos municípios vizinhos, alguns com população semelhante à sua. Essa situação é mais bem explicada pelo conceito de:",
    options: [
      {
        id: "A",
        text: "conurbação, pois as áreas urbanas dessas cidades se uniram fisicamente.",
      },
      {
        id: "B",
        text: "hierarquia urbana, pois a posição de uma cidade depende da complexidade das funções que oferece, não apenas de sua população.",
      },
      {
        id: "C",
        text: "segregação socioespacial, pois há desigualdade de acesso a serviços dentro da própria cidade média.",
      },
      {
        id: "D",
        text: "urbanização informal, pois os deslocamentos ocorrem fora do planejamento oficial.",
      },
      {
        id: "E",
        text: "expansão urbana, pois a cidade aumentou sua área construída.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "A alternativa B está correta. A cidade média se destaca na hierarquia urbana por concentrar funções especializadas (hospital de alta complexidade, universidade), atraindo pessoas de outros municípios independentemente de ter ou não a maior população da região — exatamente a distinção entre hierarquia urbana e tamanho populacional. As demais alternativas introduzem conceitos que não correspondem à situação: A trata de fusão física das áreas urbanas, não descrita no enunciado; C desloca o foco para desigualdade dentro da própria cidade, não mencionada; D confunde deslocamento regular de pacientes e estudantes com urbanização informal; E não é sustentada, pois o enunciado não descreve crescimento da área urbanizada.",
  },

  missionCheck:
    "Agora você consegue olhar para uma cidade e perguntar não apenas “quantos habitantes ela tem?”, mas “que funções ela concentra, com que outras cidades ela se conecta, e como seu espaço foi ocupado?”",

  completionMessage:
    "Nenhuma cidade cresce isolada: ela cresce em rede, com hierarquia, e nem sempre de forma planejada.",
};
