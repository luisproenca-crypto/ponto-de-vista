import type { LessonContent } from "@/lib/types";

/**
 * AULA 19 — INDÚSTRIA, AGROPECUÁRIA E MUNDO DO TRABALHO
 * Semana 07 • Geografia Essencial (ENTENDA)
 *
 * Pergunta-guia (abre e fecha a aula): "Quando a forma de produzir muda, o
 * que muda no trabalho e no território?" Ideia central: a produção não muda
 * só aquilo que é produzido; muda onde se produz, como se trabalha e quais
 * lugares ganham novas funções. Cinco lentes: técnica e produtividade;
 * produção e emprego; localização; integração campo–indústria–cidade;
 * reestruturação e formas de trabalho. O meio técnico-científico-
 * informacional aparece só dentro da lente de técnica. Fordismo e toyotismo
 * ficam fora. Progressão: Aula 13 (ler o território) → 17 (energia e poder)
 * → 18 (agir em conjunto) → 19 (como a produção se organiza e muda).
 * Monte Saíra, Campo Sereno e Areia Fina são fictícios.
 * LIMITES: sem cadeias globais, comércio internacional, rotas, minerais
 * estratégicos ou rastreabilidade (Aula 20); sem pobreza, indicadores de
 * desigualdade ou políticas distributivas (Aula 21). NEUTRALIDADE: sem
 * avaliação de plataformas, automação, incentivos fiscais ou relações de
 * trabalho; o texto descreve estruturas e indicadores.
 *
 * DADOS FACTUAIS (conferidos em 26/10/2026):
 *   • IEA/SP, Análises e Indicadores do Agronegócio, v. 15, n. 7, jul. 2020:
 *     colheita mecanizada em 95,3% da área de cana do estado na safra
 *     2018/19; cortadores estimados em 163.098 (2007/08) e 18.477 (2018/19).
 *     O percentual de mecanização de 2007/08 diverge entre publicações do
 *     IEA (40,7% × 41,7%) e, por isso, não é usado.
 *   • Lei estadual SP 11.241/2002: eliminação gradativa da queima da palha
 *     da cana; Protocolo Agroambiental do setor sucroenergético antecipou os
 *     prazos (sem datas no texto, por decisão editorial).
 *   • IBGE, Pesquisa Industrial Anual – Empresa 2019 (Pesq. industr., v. 38,
 *     n. 1, informativo): entre 2010 e 2019, o Sudeste perdeu 3,2 p.p. de
 *     participação no valor da transformação industrial (VTI) do país, e
 *     todas as demais Grandes Regiões avançaram; em 2019, o Sudeste
 *     concentrava 57,7%, com São Paulo na liderança da região.
 *   • IBGE, PIA-Empresa 2022: recuperação da participação do Sudeste e de
 *     São Paulo entre 2020 e 2022 (citada sem números, numa só frase).
 *   • IBGE, PNAD Contínua, "Trabalho por meio de plataformas digitais 2025"
 *     (informativo, ISBN 978-85-240-4725-1; resultados classificados como
 *     estatísticas experimentais; 3º trimestre de 2025): 1,8 milhão de
 *     pessoas no trabalho principal, 2,0% da população ocupada no setor
 *     privado; 86,8% trabalhavam por conta própria.
 *   • Zona Franca de Manaus: apenas como microexemplo de incentivo fiscal,
 *     sem datas nem prazos de vigência.
 *
 * Título, subtítulo, vídeo e status ficam em `src/data/course.ts`. Aula em
 * preparação (`status: "em-preparacao"`), ainda não ligada (`content: null`).
 */
export const aula19Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de analisar uma mudança na forma de produzir, separando o que acontece com a produção do que acontece com o emprego, explicando a localização de uma atividade pela combinação de fatores e reconhecendo como campo, indústria e cidade se articulam.",

  hypothesis: {
    title: "O OLHAR DO PACO",
    intro:
      "Há quinze anos, a usina de Monte Saíra, município fictício do interior, colhia a cana à mão. Na safra, milhares de cortadores, muitos vindos de outros estados, enchiam pensões e alojamentos. Hoje, máquinas fazem a colheita, a usina produz mais açúcar e etanol e o corte emprega muito menos gente. Ao mesmo tempo, surgiram vagas para operadores de colhedoras, mecânicos, técnicos de laboratório e motoristas, e a cidade ganhou oficinas, uma escola técnica e empresas de transporte. A usina fica junto a uma rodovia duplicada e a uma subestação de energia.",
    cards: [
      { id: "maquinas", label: "As máquinas chegaram" },
      { id: "regras", label: "As regras ambientais mudaram" },
      { id: "rodovia", label: "A rodovia e a energia estavam ali" },
      { id: "mercado", label: "Aumentou a procura por etanol" },
      { id: "funcoes", label: "Surgiram outras funções" },
      { id: "cidade", label: "A cidade mudou junto" },
    ],
    question:
      "A produção cresceu. Por que o trabalho mudou tanto — e por que isso aconteceu justamente aqui?",
    paco: "Escolha duas explicações. Depois pergunte: alguma delas, sozinha, dá conta da história inteira?",
    reveal:
      "Nenhuma dá conta sozinha. A máquina explica a queda no corte, mas não por que a usina está em Monte Saíra. A rodovia explica a localização, mas não as novas funções. E a escola técnica e as oficinas mostram que a mudança não ficou no canavial: chegou à cidade. Produzir mais não significou empregar mais nas mesmas tarefas. Significou trabalhar de outro jeito, em outros lugares.",
  },

  connection: {
    title: "DO TERRITÓRIO À PRODUÇÃO",
    flow: ["Ler o território", "Energia e poder", "Agir em conjunto", "Como se produz"],
    highlight: "Toda forma de produzir deixa marcas no trabalho e no território.",
    text: "Na Aula 13, você aprendeu a ler o território brasileiro. Na Aula 17, viu a energia como relação de poder. Na Aula 18, como atores diferentes tentam agir em conjunto. Agora a pergunta se volta para a produção: “Quando a forma de produzir muda, o que muda no trabalho e no território?”",
  },

  lenses: {
    eyebrow: "Cinco lentes para ler a produção",
    title: "O QUE MUDOU QUANDO A PRODUÇÃO MUDOU?",
    subtitle:
      "Diante de uma atividade produtiva, faça cinco perguntas. Cada uma ilumina uma parte diferente da mesma transformação.",
    items: [
      {
        id: "tecnica",
        emoji: "⚙️",
        name: "TÉCNICA E PRODUTIVIDADE",
        question: "Que técnica mudou, e quanto se produz agora com o mesmo trabalho?",
      },
      {
        id: "producao-emprego",
        emoji: "📊",
        name: "PRODUÇÃO E EMPREGO",
        question: "A produção e o número de trabalhadores andaram juntos?",
      },
      {
        id: "localizacao",
        emoji: "📍",
        name: "LOCALIZAÇÃO",
        question: "Por que aqui, e não ali?",
      },
      {
        id: "integracao",
        emoji: "🔗",
        name: "INTEGRAÇÃO CAMPO–INDÚSTRIA–CIDADE",
        question: "Quem fornece, quem transforma e quem presta serviço a quem?",
      },
      {
        id: "reestruturacao",
        emoji: "🔄",
        name: "REESTRUTURAÇÃO E FORMAS DE TRABALHO",
        question: "Que funções sumiram, quais surgiram, e com que tipo de vínculo?",
      },
    ],
    highlight:
      "Uma mudança técnica nunca é só técnica: ela reorganiza o trabalho e redistribui funções entre lugares.",
    image: null,
    hideImage: true,
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "Em Monte Saíra, você viu a produção crescer enquanto o trabalho mudava de lugar e de forma. Agora vamos dar precisão às cinco lentes.",
      "Guarde uma regra: antes de concluir qualquer coisa sobre o trabalho, separe o que aconteceu com a produção do que aconteceu com o emprego.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "tecnica",
        name: "TÉCNICA E PRODUTIVIDADE",
        conceito:
          "Técnica é o conjunto de meios com que a sociedade produz e transforma o espaço. Produtividade é quanto se produz por trabalhador, por hora ou por hectare. Milton Santos chamou de meio técnico-científico-informacional o espaço em que ciência, técnica e informação passam a fazer parte do próprio território: máquinas guiadas por satélite, laboratórios, redes de dados.",
        penseAssim:
          "Pergunte o que a nova técnica permite fazer que a antiga não permitia, e o que ela exige do lugar para funcionar.",
        exemplo:
          "Uma colhedora mecânica corta, em um dia, a cana que exigiria muitos trabalhadores no corte manual, mas depende de terreno adequado, de manutenção e de operadores qualificados.",
        naoConfunda:
          "Produtividade não é o mesmo que produção total. Uma fazenda pode produzir mais por hectare e, ainda assim, produzir menos no total se reduzir a área.",
        naProva:
          "Quando o enunciado fala em máquinas, sensores ou informação, a questão quer saber o que a técnica mudou no trabalho e no território, não só na quantidade produzida.",
      },
      {
        id: "producao-emprego",
        name: "PRODUÇÃO E EMPREGO",
        conceito:
          "Produção e emprego são grandezas diferentes. Com ganho de produtividade, a produção pode crescer enquanto o emprego em uma etapa cai, e o emprego em outras etapas pode crescer.",
        penseAssim:
          "Leia sempre duas linhas: a da produção e a do número de trabalhadores, etapa por etapa.",
        exemplo:
          "Em Monte Saíra, a usina passou a produzir mais com muito menos gente no corte, mas abriu vagas na manutenção, no laboratório e no transporte.",
        naoConfunda:
          "Queda do emprego em uma etapa não significa queda do emprego total. E mais produção não significa mais emprego nas mesmas tarefas.",
        naProva:
          "Gráficos com duas linhas, produção e pessoal ocupado, são clássicos. A armadilha é ler uma linha e concluir sobre a outra.",
      },
      {
        id: "localizacao",
        name: "LOCALIZAÇÃO",
        conceito:
          "Uma atividade produtiva se instala onde encontra uma combinação favorável de condições: matéria-prima, mercado, mão de obra, energia, transporte, terra, incentivos e serviços disponíveis. São os chamados fatores locacionais.",
        penseAssim:
          "Nenhum fator decide sozinho. Pergunte qual combinação o lugar oferece e qual peso cada fator tem para aquela atividade.",
        exemplo:
          "O Polo Industrial de Manaus, na Zona Franca, mostra que incentivos fiscais podem atrair indústrias para longe dos maiores mercados consumidores do país. Mas, lá também, o incentivo funciona combinado com outras condições.",
        naoConfunda:
          "Incentivo fiscal não é garantia de instalação. Dois lugares com o mesmo incentivo podem ter resultados diferentes se não oferecerem as outras condições.",
        naProva:
          "Alternativas que explicam uma localização por um único fator, seja a natureza, seja o imposto, costumam ser a armadilha.",
      },
      {
        id: "integracao",
        name: "INTEGRAÇÃO CAMPO–INDÚSTRIA–CIDADE",
        conceito:
          "Campo, indústria e cidade não são mundos separados. A agroindústria liga a produção agropecuária à transformação industrial, e ambas dependem de serviços urbanos: transporte, manutenção, crédito, pesquisa, ensino técnico.",
        penseAssim:
          "Siga o produto e o trabalho: de onde vêm os insumos, onde ocorre a transformação, quem presta os serviços e onde essas pessoas moram.",
        exemplo:
          "A cana sai do campo, vira açúcar, etanol e eletricidade na usina, e movimenta oficinas, transportadoras e escolas técnicas da cidade.",
        naoConfunda:
          "Atividade rural não é sinônimo de atividade agrícola. Muita gente que trabalha para o campo mora e trabalha na cidade.",
        naProva:
          "Quando a questão mostra uma paisagem rural com máquinas, armazéns e rodovias, ela pede que você reconheça a ligação entre campo, indústria e cidade.",
      },
      {
        id: "reestruturacao",
        name: "REESTRUTURAÇÃO E FORMAS DE TRABALHO",
        conceito:
          "Reestruturação produtiva é a reorganização de como, onde e com quem se produz. Ela muda as funções e também as formas de inserção no trabalho: emprego com carteira, terceirização, trabalho por conta própria, trabalho intermediado por plataformas digitais.",
        penseAssim:
          "Pergunte quais tarefas desapareceram, quais surgiram, que qualificação elas exigem e qual é o vínculo de quem as executa.",
        exemplo:
          "O cortador de cana e o operador de colhedora trabalham na mesma usina, mas com tarefas, qualificações e rotinas muito diferentes.",
        naoConfunda:
          "Reestruturação não é sinônimo de desemprego nem de modernização sem custos. Descreva o que mudou antes de qualificar a mudança.",
        naProva:
          "Textos sobre automação ou plataformas pedem que você identifique a mudança na forma de trabalhar, sem reduzir tudo à máquina.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "producao-emprego",
        title: "Se a produção cresce, o emprego cresce junto?",
        content:
          "Nem sempre. Quando uma nova técnica aumenta a produtividade, é possível produzir mais com menos trabalho em determinada etapa. O que acontece com o emprego total depende de outras coisas: se a produção cresce o bastante, se surgem funções novas, onde elas surgem e quem consegue ocupá-las. O cortador dispensado e o técnico contratado raramente são a mesma pessoa, e nem sempre estão no mesmo lugar. Por isso a pergunta “a técnica destrói ou cria empregos?” é mal formulada: ela redistribui o trabalho entre etapas, qualificações e lugares.",
        flow: ["Nova técnica", "Mais produtividade", "Menos trabalho numa etapa", "Novas funções em outras"],
        highlight: "Produção e emprego precisam ser lidos em linhas separadas.",
      },
      {
        id: "localizacao",
        title: "Por que uma atividade produtiva se instala aqui e não ali?",
        content:
          "Cada atividade pesa os fatores de um jeito. Uma usina de cana precisa estar perto do canavial, porque a cana perde qualidade rapidamente depois de colhida e é cara de transportar. Uma indústria de alta tecnologia pesa mais a mão de obra qualificada, a pesquisa e as redes de informação. Uma fábrica que atende um grande mercado pesa a proximidade dos consumidores. Incentivos fiscais podem alterar a conta, mas não substituem estrada, energia e trabalhadores. E a localização muda com o tempo: novas rodovias, custos e técnicas podem tornar atraente um lugar que antes não era.",
        flow: ["Matéria-prima", "Mercado", "Trabalho", "Infraestrutura", "Incentivos", "Combinação"],
        highlight: "Localização é uma combinação de fatores, não um fator decisivo.",
      },
      {
        id: "campo-fabrica-cidade",
        title: "Campo, fábrica e cidade são partes separadas da produção?",
        content:
          "Não. A modernização do campo aumentou a procura por máquinas, insumos, crédito, pesquisa e assistência técnica, quase sempre oferecidos a partir das cidades. Muitas cidades do interior passaram a viver dessas funções. A integração também alcança o trabalho urbano: aplicativos de transporte e entrega organizam o serviço de muitas pessoas por meio de plataformas digitais, outra forma de inserção no trabalho que a reestruturação produziu.",
        flow: ["Campo", "Agroindústria", "Serviços urbanos", "Plataformas digitais"],
        highlight: "O lugar onde se produz não é o único lugar transformado pela produção.",
      },
    ],
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Onde as cinco lentes aparecem no Brasil?",
    center: "BRASIL",
    items: [
      {
        id: "cana",
        label: "A CANA EM SÃO PAULO: TÉCNICA, PRODUTIVIDADE E EMPREGO",
        description:
          "Segundo o Instituto de Economia Agrícola (IEA), da Secretaria de Agricultura paulista, a colheita mecanizada alcançou 95,3% da área de cana do estado na safra 2018/19. O número estimado de cortadores caiu de cerca de 163 mil, na safra 2007/08, para cerca de 18 mil, em 2018/19. A mudança acompanhou a eliminação gradual da queima da palha, prevista em lei estadual de 2002 e antecipada por um protocolo entre governo e setor.",
      },
      {
        id: "industria",
        label: "A INDÚSTRIA: DESCONCENTRAÇÃO SEM LINHA RETA",
        description:
          "Ao longo de décadas, a reestruturação das empresas e novas combinações de fatores de localização levaram parte da indústria para o interior e para outras regiões. Segundo a Pesquisa Industrial Anual do IBGE, entre 2010 e 2019 o Sudeste perdeu 3,2 pontos percentuais de participação no valor da transformação industrial do país, e todas as demais regiões ganharam; ainda assim, concentrava 57,7% em 2019, com São Paulo à frente. Entre 2020 e 2022, Sudeste e São Paulo recuperaram parte da participação. Desconcentrar não é espalhar por igual nem seguir sempre na mesma direção.",
      },
      {
        id: "plataformas",
        label: "AS PLATAFORMAS: NOVAS FORMAS DE INSERÇÃO",
        description:
          "Segundo o IBGE (PNAD Contínua, Estatísticas Experimentais), no terceiro trimestre de 2025, cerca de 1,8 milhão de pessoas tinham como trabalho principal o trabalho por meio de plataformas digitais de serviços, 2,0% dos ocupados no setor privado. A grande maioria, 86,8%, trabalhava por conta própria.",
      },
    ],
    study:
      "Cada cartão prova uma lente. A cana mostra que produção e emprego seguem caminhos diferentes. A indústria mostra que a localização muda, mas não em linha reta. As plataformas mostram que a reestruturação também muda a forma de inserção no trabalho.",
    highlight:
      "No Brasil, a mudança na forma de produzir aparece no canavial, no mapa da indústria e no celular de quem trabalha por aplicativo.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Dois mapas em datas diferentes",
      "Gráfico de produção e de emprego",
      "Mapa de infraestrutura",
      "Texto sobre automação",
      "Imagem de paisagem produtiva",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Produção separada de emprego",
      "Combinação de fatores de localização",
      "Ligação entre campo, indústria e cidade",
      "Mudança técnica sem determinismo",
    ],
    highlight:
      "A prova raramente pergunta “o que é reestruturação produtiva?”. Ela mostra um material e quer ver você executar uma operação sobre ele.",
    guidingIntro: "Material → operação → armadilha:",
    guidingQuestions: [
      "Dois mapas em datas diferentes → compare o que se espalhou e o que continuou concentrado. Armadilha: ver qualquer expansão como fim da concentração.",
      "Gráfico de produção e de emprego → leia as duas linhas separadamente. Armadilha: concluir sobre o emprego olhando só a produção.",
      "Mapa de infraestrutura → relacione rodovias, ferrovias, portos e energia à localização das atividades. Armadilha: explicar a localização por um único fator.",
      "Texto sobre automação → identifique que tarefas mudaram e que funções surgiram. Armadilha: tratar a máquina como causa única de tudo.",
      "Imagem de paisagem produtiva → reconheça as técnicas e as ligações com a indústria e a cidade. Armadilha: ler o campo como espaço isolado.",
    ],
  },

  question: {
    id: "s07-a19-q01",
    statement:
      "No município fictício de Campo Sereno, entre 2012 e 2024, uma cooperativa de leite passou a usar ordenha mecanizada nas propriedades associadas e linhas automatizadas no seu laticínio. A produção de derivados mais que dobrou, enquanto os postos na linha de envase caíram pela metade. No mesmo período, cresceram as vagas em transporte refrigerado, controle de qualidade e assistência técnica às propriedades. A cooperativa ampliou o laticínio em Campo Sereno, e não no município vizinho de Areia Fina, que oferecia o mesmo desconto de imposto municipal, mas não tinha estrada asfaltada até as propriedades nem energia elétrica suficiente para a ampliação. Considerando essas informações, a leitura mais adequada é que",
    options: [
      {
        id: "A",
        text: "a produção cresceu com menos trabalho no envase e mais em outras atividades; o desconto de imposto não distinguiu os municípios, e pesaram o acesso às propriedades e a energia; e a nova técnica estreitou os laços entre propriedades, laticínio e cidade.",
      },
      {
        id: "B",
        text: "como a produção de derivados mais que dobrou, o emprego no laticínio cresceu na mesma proporção, etapa por etapa; a escolha de Campo Sereno se explica pela presença de produtores, e os serviços de transporte surgiram de forma independente da cooperativa.",
      },
      {
        id: "C",
        text: "a automação explica, sozinha, as transformações observadas: reduziu o trabalho em cada etapa da produção e levaria ao mesmo resultado em qualquer município da região; o desconto de imposto, por sua vez, só ganhou importância depois da ampliação do laticínio.",
      },
      {
        id: "D",
        text: "o desconto de imposto foi a condição que levou a cooperativa a escolher Campo Sereno; a queda dos postos no envase indica que o número total de empregos no município diminuiu, e as propriedades rurais continuaram como atividade à parte do laticínio.",
      },
      {
        id: "E",
        text: "a ampliação ocorreu em Campo Sereno porque a atividade leiteira já era tradicional ali, o que tornou secundárias a estrada e a energia; as novas vagas compensaram as perdas no envase, e a mudança técnica ficou restrita ao interior da indústria.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "A alternativa A está correta porque faz três leituras apoiadas no enunciado. Produção e emprego: a produção mais que dobrou, os postos no envase caíram e outras vagas cresceram; o trabalho foi redistribuído. Localização: o desconto existia nos dois municípios, e o que diferenciou Campo Sereno foram a estrada e a energia, ou seja, uma combinação de fatores. Integração: o transporte refrigerado e a assistência técnica ligam as propriedades, o laticínio e a cidade. B confunde produção com emprego e contradiz a queda no envase. C trata a técnica como causa única e ignora que estrada e energia diferenciaram os municípios. D atribui a escolha só ao imposto, que os dois ofereciam, e conclui sobre o emprego total sem dados. E ignora a infraestrutura, supõe uma compensação que o enunciado não mede e esquece a ordenha mecanizada nas propriedades.",
  },

  missionCheck:
    "Voltemos à pergunta da aula: quando a forma de produzir muda, o que muda no trabalho e no território? Agora você consegue separar produção de emprego, explicar uma localização pela combinação de fatores e reconhecer como campo, indústria e cidade se articulam?",

  completionMessage:
    "A produção não muda apenas aquilo que é produzido. Ela muda onde se produz, como se trabalha e quais lugares ganham novas funções. Na próxima aula, a pergunta atravessa fronteiras: de onde vem, por onde passa e quem controla aquilo que se produz?",
};
