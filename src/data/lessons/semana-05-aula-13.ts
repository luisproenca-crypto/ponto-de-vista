import type { LessonContent } from "@/lib/types";

/**
 * AULA 13 — BRASIL EM REVISÃO: COMO LER O TERRITÓRIO BRASILEIRO
 * Semana 05 • Geografia Essencial (ENTENDA)
 *
 * Ideia central: revisão interpretativa do território brasileiro, não um
 * resumo enciclopédico. Sete lentes (formação do território; diversidade
 * regional; distribuição da população; urbanização e redes urbanas;
 * desigualdades socioespaciais; infraestrutura e integração territorial;
 * território, economia e sociedade) ajudam a explicar por que um mesmo
 * acontecimento produz efeitos diferentes em diferentes partes do país.
 * Pergunta-guia (abre e fecha a aula): "Por que um mesmo acontecimento pode
 * produzir efeitos tão diferentes dependendo do lugar do Brasil em que ele
 * ocorre?"
 *
 * Percurso (Método P.O.N.T.O.): problematizar com uma estiagem que atinge
 * três lugares (`hypothesis`) → observar a mesma cena pelas sete lentes
 * (`lenses`) → nomear com precisão (`concepts`) → relacionar em quatro
 * situações brasileiras duradouras (`deepDive`) → operar em uma situação
 * nova (`question`).
 *
 * Escala: a leitura local → regional → nacional é apresentada no bloco
 * `video`, aparece em cada item do `deepDive` (campo `flow`) e volta no
 * `examFormat` e na questão final.
 *
 * Retomadas explícitas: Aula 01 (território, região), Aula 04 (escala
 * cartográfica × escala de análise), Aula 07 (população absoluta ×
 * densidade × distribuição; urbanização × crescimento urbano) e Aula 10
 * (hierarquia × rede urbana; segregação socioespacial).
 *
 * Título, descrição, vídeo e status ficam em `src/data/course.ts`
 * (metadados da aula; esta aula não tem subtítulo separado, por decisão
 * editorial). Este arquivo guarda somente o conteúdo pedagógico.
 *
 * Rascunho editorial para revisão do Prof. Luis. O `ConceptAccordion` exibe
 * sempre os cinco campos de cada conceito (campo vazio vira "em
 * preparação"), por isso todos estão preenchidos e a variação está na forma
 * de cada texto. O `deepDive` usa situações reais e estáveis (estiagem,
 * ocupação do território, acesso a serviços, Carajás); a situação da
 * questão final é fictícia e está rotulada como tal.
 *
 * Esta aula ainda está `"em-preparacao"` em `src/data/course.ts`: a
 * publicação (troca de status) é uma etapa posterior, só depois aprovada.
 */
export const aula13Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de mobilizar características da formação, da população, da urbanização, das redes e das desigualdades do território brasileiro para interpretar por que processos semelhantes produzem efeitos diferentes em diferentes partes do país.",

  hypothesis: {
    title: "O OLHAR DO PACO",
    intro:
      "Imagine uma estiagem prolongada atingindo, ao mesmo tempo, uma comunidade ribeirinha na Amazônia, uma metrópole do Sudeste e uma cidade do sertão nordestino. Na primeira, o rio baixa e o barco deixa de passar. Na segunda, os reservatórios baixam. Na terceira, a lavoura e o rebanho sofrem.",
    cards: [
      { id: "natureza", label: "O clima e a natureza de cada região" },
      { id: "populacao", label: "A quantidade de gente que vive ali" },
      { id: "obras", label: "As obras e redes que cada lugar tem" },
      { id: "renda", label: "A renda de quem mora em cada lugar" },
    ],
    question:
      "Por que um mesmo acontecimento pode produzir efeitos tão diferentes dependendo do lugar do Brasil em que ele ocorre?",
    paco: "Escolha as duas explicações que, para você, mais ajudam a responder à pergunta. Depois, tente imaginar como elas podem atuar juntas.",
    reveal:
      "Boas hipóteses. Provavelmente várias atuam ao mesmo tempo, e em escalas diferentes: no lugar, na região, no país. Vamos transformar essas hipóteses em lentes de leitura.",
  },

  lenses: {
    eyebrow: "Sete lentes para ler o Brasil",
    title: "LEIA O ACONTECIMENTO PELO TERRITÓRIO",
    subtitle:
      "Volte às três cenas da estiagem. Cada lente faz uma pergunta diferente sobre elas e serve para qualquer outro acontecimento no Brasil.",
    items: [
      {
        id: "formacao-do-territorio",
        emoji: "🧭",
        name: "FORMAÇÃO DO TERRITÓRIO",
        question: "Quem ocupou esse lugar, quando e por quê?",
      },
      {
        id: "diversidade-regional",
        emoji: "🗺️",
        name: "DIVERSIDADE REGIONAL",
        question: "Esse acontecimento teria o mesmo efeito em outra região?",
      },
      {
        id: "distribuicao-da-populacao",
        emoji: "🔢",
        name: "DISTRIBUIÇÃO DA POPULAÇÃO",
        question: "Quantas pessoas estão envolvidas e como elas se espalham pelo território?",
      },
      {
        id: "urbanizacao-e-redes-urbanas",
        emoji: "🕸️",
        name: "URBANIZAÇÃO E REDES URBANAS",
        question: "De que cidades esse lugar depende, e quem depende dele?",
      },
      {
        id: "desigualdades-socioespaciais",
        emoji: "⚖️",
        name: "DESIGUALDADES SOCIOESPACIAIS",
        question: "Quem tem mais meios de se proteger ali, e quem tem menos?",
      },
      {
        id: "infraestrutura-e-integracao-territorial",
        emoji: "🛤️",
        name: "INFRAESTRUTURA E INTEGRAÇÃO TERRITORIAL",
        question: "O que liga esse lugar ao resto do país: estradas, rios, energia, internet?",
      },
      {
        id: "territorio-economia-e-sociedade",
        emoji: "🔗",
        name: "TERRITÓRIO, ECONOMIA E SOCIEDADE",
        question: "Que atividade sustenta esse lugar, e o que ela muda na vida de quem mora ali?",
      },
    ],
    highlight:
      "Uma lente ilumina parte da explicação. A escala mostra até onde ela alcança: no lugar, na região ou no país.",
    image: null,
    hideImage: true,
  },

  video: {
    title: "AGORA, VAMOS REVISAR COM PRECISÃO",
    paragraphs: [
      "Você levantou hipóteses e viu que nenhuma explica tudo sozinha. Agora vamos dar precisão a cada lente, retomando o que já estudamos nas Aulas 01, 07 e 10.",
      "Antes, uma regra de leitura: mude a escala. No plano local, você olha o lugar e as pessoas diretamente afetadas. No regional, a região em volta, com suas cidades e ligações. No nacional, o país inteiro. Aqui, escala não é a do mapa (Aula 04): é o nível em que você analisa o acontecimento.",
    ],
  },

  concepts: {
    title: "DIFERENCIE COM PRECISÃO",
    items: [
      {
        id: "formacao-do-territorio",
        name: "FORMAÇÃO DO TERRITÓRIO",
        conceito:
          "O território brasileiro não surgiu pronto: foi formado em camadas. Antes da chegada dos portugueses, povos indígenas já viviam e organizavam esse espaço. Depois vieram a colonização, os ciclos da cana, da mineração e do café, as migrações, as rodovias e as fronteiras agrícolas. Cada camada deixou marcas no mapa.",
        penseAssim:
          "Pense numa parede repintada várias vezes: sob a cor atual, ainda aparecem as camadas antigas. Que camadas do passado ajudam a explicar este lugar hoje?",
        exemplo:
          "Salvador, primeira capital colonial, e o Rio de Janeiro, capital do país até 1960, se consolidaram historicamente como importantes centros portuários e políticos. Brasília, inaugurada em 1960, é outra camada: o centro político levado para o interior.",
        naoConfunda:
          "Formação do território não é sinônimo de colonização. Ela é um capítulo dessa história. Os povos indígenas já estavam aqui antes, seguem presentes em todas as regiões e continuam participando da organização do território.",
        naProva:
          "Textos sobre litoral e interior, ciclos econômicos ou fronteira agrícola pedem leitura histórica: por que o território se organizou assim e não de outro jeito?",
      },
      {
        id: "diversidade-regional",
        name: "DIVERSIDADE REGIONAL",
        conceito:
          "O Brasil tem dimensões continentais e muita variação dentro delas: clima, relevo, vegetação, economia, cultura. Por isso, o mesmo acontecimento não encontra o mesmo território em todo lugar. Regiões são recortes para comparar áreas parecidas, e o recorte muda conforme o critério escolhido (Aula 01).",
        penseAssim:
          "Faça um teste mental: troque o lugar e repita a cena. Se a resposta muda, a diversidade regional está em jogo.",
        exemplo:
          "A mesma chuva forte pode causar deslizamentos numa encosta urbanizada, fazer parte do ciclo de cheias numa várzea amazônica e ser muito esperada no sertão, onde chove pouco e de forma irregular.",
        naoConfunda:
          "Diversidade não é desigualdade. Diversidade é diferença de características: o clima do Sul não é o do Nordeste. Desigualdade é diferença de acesso a recursos e oportunidades.",
        naProva:
          "Ao comparar regiões, veja qual critério a questão usa: natural, econômico ou cultural. Trocar um critério pelo outro é uma armadilha comum.",
      },
      {
        id: "distribuicao-da-populacao",
        name: "DISTRIBUIÇÃO DA POPULAÇÃO",
        conceito:
          "A população brasileira não está espalhada por igual. Ela se concentra no litoral e nas regiões metropolitanas e rareia em grandes áreas do interior, como boa parte da Amazônia. Esse padrão vem mudando, mas ainda organiza a leitura do território.",
        penseAssim:
          "Quando algo acontece num lugar, pergunte quantas pessoas estão envolvidas. O mesmo problema atinge muita gente numa metrópole e poucas numa área rarefeita, mas poucas pessoas também significam menos serviços por perto.",
        exemplo:
          "O Amazonas é o maior estado em área e tem densidade demográfica muito baixa. Mas Manaus concentra mais da metade da população estadual; fora da capital, os rios continuam fundamentais para organizar muitos fluxos e assentamentos. A média baixa esconde concentrações.",
        naoConfunda:
          "Na Aula 07, você separou população absoluta (quantas pessoas), densidade demográfica (pessoas por km², uma média) e distribuição (onde há concentração e onde há vazios). Aqui, use as três juntas.",
        naProva:
          "Mapas de densidade mostram médias por área. Para ler a distribuição, olhe onde estão as manchas e os vazios, e não só os números.",
      },
      {
        id: "urbanizacao-e-redes-urbanas",
        name: "URBANIZAÇÃO E REDES URBANAS",
        conceito:
          "Urbanização é o processo de aumento da proporção de pessoas que vivem em cidades. No Brasil, foi muito rápido: em poucas décadas do século XX, o país deixou de ser predominantemente rural. Já rede e hierarquia urbana descrevem como as cidades se organizam: a rede mostra os fluxos entre elas, e a hierarquia as ordena pelas funções que oferecem e pela influência que exercem.",
        penseAssim:
          "Separe “quanto” de “como”. Quanto do país vive em cidades? É urbanização. Como as cidades se ligam e quem depende de quem? É rede e hierarquia.",
        exemplo:
          "Mais de 80% dos brasileiros vivem em áreas urbanas: isso é urbanização. Quem sai de uma cidade pequena para estudar na capital regional mostra rede e hierarquia.",
        naoConfunda:
          "Urbanização é proporção (Aula 07). Crescimento urbano é o aumento do número de moradores urbanos, mesmo que a proporção não mude. Rede e hierarquia (Aula 10) não medem quanto o país é urbano. E a hierarquia depende das funções e da influência da cidade, e não só do tamanho da população.",
        naProva:
          "Gráfico de população urbana e rural: urbanização. Linhas ligando cidades: rede. Cidades classificadas por função, como metrópole, capital regional e centro local: hierarquia.",
      },
      {
        id: "desigualdades-socioespaciais",
        name: "DESIGUALDADES SOCIOESPACIAIS",
        conceito:
          "Desigualdade socioespacial é a diferença de acesso a serviços, infraestrutura e oportunidades que se organiza no espaço. Ela aparece em mais de uma escala: entre bairros da mesma cidade, entre cidades e entre regiões do país.",
        penseAssim:
          "Quando um problema atinge dois lugares, pergunte quem tem mais meios de se proteger e de se recuperar.",
        exemplo:
          "A cobertura por rede de esgoto varia muito pelo território brasileiro e é, em média, significativamente menor no Norte do que no Sudeste.",
        naoConfunda:
          "Não é só pobreza. Renda mede quanto cada pessoa ganha; a desigualdade socioespacial mostra onde as pessoas vivem e a que serviços chegam. A segregação socioespacial (Aula 10) é uma das formas espaciais pelas quais certas desigualdades podem se manifestar, mas as duas ideias não são sinônimas.",
        naProva:
          "Mapas que cruzam um indicador social com a localização, como renda ou saneamento por estado ou por bairro, pedem essa leitura. A boa resposta liga o indicador ao acesso a infraestrutura e à história do lugar.",
      },
      {
        id: "infraestrutura-e-integracao-territorial",
        name: "INFRAESTRUTURA E INTEGRAÇÃO TERRITORIAL",
        conceito:
          "Infraestrutura é o conjunto de redes e instalações que sustentam a vida e a economia: transporte, energia, comunicação, saneamento. Integração territorial é o quanto essas redes ligam os lugares entre si e ao resto do país. Onde faltam ligações, o lugar fica mais isolado ou dependente de poucos caminhos.",
        penseAssim:
          "Imagine o trajeto de um produto da fábrica até o consumidor, ou de uma pessoa até o hospital. Se o caminho é longo, caro ou depende de poucos trechos, a integração é frágil.",
        exemplo:
          "No transporte de cargas, o Brasil tem predomínio das rodovias; ferrovias e hidrovias pesam menos. Se as estradas são precárias, o frete encarece e o produto chega mais caro ao destino.",
        naoConfunda:
          "Ter infraestrutura não é o mesmo que estar integrado. Infraestrutura é o que existe: estradas, portos, redes. Integração é o quanto isso realmente liga os lugares. Uma estrada pode existir no mapa e integrar pouco.",
        naProva:
          "Mapas de rodovias, ferrovias, portos e linhas de energia mostram por onde o país circula e quem fica de fora. Procure o ponto em que o fluxo afunila ou se interrompe.",
      },
      {
        id: "territorio-economia-e-sociedade",
        name: "TERRITÓRIO, ECONOMIA E SOCIEDADE",
        conceito:
          "Território, economia e sociedade se influenciam o tempo todo. A economia usa e transforma o território: abre estradas, cria cidades, muda o uso da terra. O território favorece certas atividades e dificulta outras. E quem vive ali sente os dois movimentos. Como na Aula 01, território não é só uma área no mapa: é o espaço apropriado, organizado, controlado ou disputado por diferentes agentes e relações de poder.",
        penseAssim:
          "Pense em um ciclo, não em uma linha: uma atividade chega, atrai gente, pressiona os serviços e muda o uso da terra. Um lugar muito ligado a uma só atividade sente mais quando ela cresce ou some.",
        exemplo:
          "Terras planas, solos corrigíveis e chuvas de verão favoreceram a soja no Cerrado. A atividade atraiu máquinas, empresas e trabalhadores, fez crescer cidades e transformou o uso da terra na região.",
        naoConfunda:
          "Crescimento econômico e desenvolvimento social não são sinônimos. Uma região pode ampliar a produção sem que todos os grupos locais sejam beneficiados da mesma forma.",
        naProva:
          "Questões de síntese pedem que você relacione economia, sociedade e território na mesma situação. Desconfie de explicações que usam um fator só.",
      },
    ],
  },

  deepDive: {
    title: "APLIQUE A SITUAÇÕES CONCRETAS DO BRASIL",
    items: [
      {
        id: "mesma-estiagem-tres-lugares",
        title: "A mesma estiagem, três lugares",
        content:
          "Volte às três cenas do início. Na Amazônia, o rio é a estrada: quando ele baixa, o transporte, a comida e o atendimento de saúde ficam distantes. Na metrópole, milhões de pessoas dependem dos mesmos reservatórios. No sertão, a ocupação pela pecuária e a agricultura de sequeiro deixam a vida mais exposta aos anos secos, e a cisterna faz diferença para muitas famílias. No plano nacional, a estiagem pode reduzir a geração das hidrelétricas e exigir o uso de outras fontes de energia. Lentes em jogo: formação do território; diversidade regional; distribuição da população; desigualdades socioespaciais; infraestrutura e integração territorial.",
        flow: ["Local: o rio baixa", "Regional: bacia e cidades afetadas", "Nacional: energia elétrica"],
        highlight: "O acontecimento é um só. O território que ele encontra é que muda.",
      },
      {
        id: "do-litoral-ao-interior",
        title: "Do litoral ao interior: por que o mapa mudou?",
        content:
          "A ocupação colonial começou pelo litoral, onde ficavam os portos. A mineração levou gente para Minas Gerais, Goiás e Mato Grosso. O café e as ferrovias fortaleceram São Paulo. No século XX, rodovias e a nova capital abriram caminhos para o Centro-Oeste e a Amazônia. Hoje, a expansão agrícola faz crescer cidades médias no interior, que formam suas próprias redes urbanas. O litoral continua concentrando muita gente, mas já não está sozinho. Lentes em jogo: formação do território; distribuição da população; urbanização e redes urbanas; território, economia e sociedade.",
        flow: ["Local: uma cidade do interior cresce", "Regional: nova rede urbana", "Nacional: o mapa de ocupação muda"],
        highlight: "O mapa do Brasil não foi trocado: ganhou camadas.",
      },
      {
        id: "viajar-para-ser-atendido",
        title: "Por que tanta gente viaja para ser atendida?",
        content:
          "Hospitais de alta complexidade, universidades e outros serviços raros se concentram em metrópoles e capitais regionais. Quem mora numa cidade pequena ou numa área isolada muitas vezes viaja para ser atendido, e a viagem custa tempo e dinheiro. As distâncias a percorrer variam muito entre as regiões do país. Lentes em jogo: desigualdades socioespaciais; urbanização e redes urbanas; infraestrutura e integração territorial; distribuição da população.",
        flow: ["Local: cidade sem especialistas", "Regional: capital regional atende a região", "Nacional: serviços raros nas metrópoles"],
        highlight: "A desigualdade também se mede em quilômetros.",
      },
      {
        id: "mina-ferrovia-porto",
        title: "Mina, ferrovia e porto: como um recurso liga lugares?",
        content:
          "A Serra dos Carajás, no Pará, é uma das maiores áreas de produção de minério de ferro do país. Para levar o minério ao mercado, foi construída uma ferrovia até o porto de Ponta da Madeira, em São Luís, no Maranhão. Na área da mina, formou-se uma cidade: Parauapebas. O recurso está em um lugar e o consumo, longe dele. Sem essa infraestrutura, o escoamento em grande escala seria muito mais difícil e custoso. Lentes em jogo: território, economia e sociedade; infraestrutura e integração territorial; urbanização e redes urbanas; diversidade regional.",
        flow: ["Local: a mina e a cidade", "Regional: a ferrovia até o porto", "Nacional: minério nas exportações"],
        highlight: "Entre o lugar do recurso e o lugar do consumo, existe uma infraestrutura.",
      },
    ],
    closing:
      "Repare no padrão: em cada situação, mais de uma lente trabalhou ao mesmo tempo, e a leitura mudou conforme a escala. É assim que se responde à pergunta do início: um acontecimento, vários lugares, várias explicações.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Mapa do Brasil",
      "Mapa de fluxos, rodovias ou ferrovias",
      "Gráfico ou tabela por região",
      "Texto sobre uma situação local",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Relação entre escalas",
      "Leitura territorial integrada",
      "Diferenciação conceitual",
      "Interpretação de fluxos e redes",
    ],
    highlight:
      "A prova raramente pergunta só “o que é?”. Ela mostra uma situação e quer saber se você combina duas ou três lentes e muda de escala.",
    guidingIntro: "Diante de uma questão sobre o Brasil, pergunte:",
    guidingQuestions: [
      "Em que escala o acontecimento ocorre, e em quais escalas ele produz efeitos?",
      "O que a ocupação e a formação desse lugar ajudam a explicar?",
      "Esse efeito seria igual em outra região do país?",
      "Quantas pessoas vivem ali, onde se concentram e a que cidades o lugar se liga?",
      "Que infraestrutura existe, quem tem acesso a ela e que atividade econômica ela sustenta?",
    ],
  },

  question: {
    id: "s05-a13-q01",
    statement:
      "Uma empresa fechou, no mesmo mês, uma fábrica de 3 mil empregados em cada uma de duas cidades fictícias do mesmo estado, ambas com cerca de 40 mil habitantes. Em P, a fábrica era o maior empregador, a maioria dos moradores trabalha na cidade e a capital regional mais próxima fica a 150 km, por rodovia de pista simples. Q integra uma região metropolitana, a 30 km da capital, ligada a ela por rodovia duplicada e trem, e tem comércio, serviços e pequenas indústrias. Um ano depois, P perdeu população e viu o comércio encolher, enquanto em Q a ocupação dos trabalhadores se recuperou mais rapidamente e os efeitos sobre o comércio foram menores. Essa diferença se explica principalmente",
    options: [
      {
        id: "A",
        text: "pelas melhores ligações de transporte de Q, que reduziram os custos das empresas e as mantiveram em funcionamento, ao contrário de P, onde a rodovia de pista simples encareceu as atividades.",
      },
      {
        id: "B",
        text: "pela diversidade das atividades de Q, cujos comércios, serviços e pequenas indústrias criaram vagas para os demitidos na própria cidade, ao contrário de P, com economia menos variada.",
      },
      {
        id: "C",
        text: "pela proximidade de Q em relação à capital do estado, onde se concentram os serviços de maior porte, ao contrário de P, que está a 150 km da capital regional.",
      },
      {
        id: "D",
        text: "pela integração de Q à rede urbana regional, com mercado de trabalho mais amplo e economia mais diversificada, ao contrário de P, pouco integrada e dependente de uma grande empresa.",
      },
      {
        id: "E",
        text: "pela dependência de P em relação a uma fábrica, cuja saída desorganizou a economia local, ao contrário de Q, onde o fechamento atingiu uma parcela menor da economia.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "A alternativa D está correta. O choque foi o mesmo e as cidades têm tamanho parecido; o que muda é o lugar de cada uma no território. Q integra uma região metropolitana, bem ligada à capital: está numa rede de cidades que amplia o mercado de trabalho de seus moradores, e sua economia mais variada reduz o impacto local. P está a 150 km da capital regional, por rodovia de pista simples, e dependia de uma fábrica: sem alternativas ao alcance, a renda cai e o comércio encolhe. A diferença nasce dessa combinação, lida em duas escalas: a da cidade e a da região. Cada alternativa isolada explica só uma parte: A vê o transporte pelo custo das empresas, não pelo acesso a vagas; B supõe que a economia de Q recolocaria sozinha os demitidos na cidade; C reduz tudo à distância da capital; E explica a fragilidade de P, mas não a recuperação mais rápida de Q.",
  },

  missionCheck:
    "Voltemos à pergunta do início: por que um mesmo acontecimento pode produzir efeitos tão diferentes dependendo do lugar do Brasil em que ele ocorre? Agora você consegue olhar para um acontecimento e identificar quais características do território ajudam a explicá-lo, em cada escala?",

  completionMessage:
    "Um mesmo acontecimento tem efeitos diferentes porque cada lugar do Brasil tem sua história, sua gente, suas redes e suas desigualdades. Agora você tem sete lentes e três escalas para ler essa diferença.",
};
