import type { LessonContent } from "@/lib/types";

/**
 * AULA 24 — CLIMA, BIOMAS E DOMÍNIOS: POR QUE AS PAISAGENS SÃO TÃO DIFERENTES?
 * Semana 08 • Política & Cidadania (COMPREENDA) — A NATUREZA EM MOVIMENTO
 *
 * Pergunta-guia (abre e fecha a aula): "Por que dois lugares em latitudes
 * semelhantes podem ter climas — e paisagens — tão diferentes?"
 * Operação: ler o padrão antes de nomeá-lo → reconstruir a combinação de
 * fatores. Ferramenta: "Leia o clima na paisagem em cinco perguntas"
 * (`application`), aplicada aos lugares fictícios A e B.
 * Cinco lentes: tempo, clima e climograma; latitude e altitude (controles
 * térmicos); oceano, interioridade e massas de ar; relevo e distribuição
 * da umidade; bioma × domínio morfoclimático. A vegetação atravessa as
 * cinco, sem lente própria. Vocabulário da aula: condiciona, favorece,
 * contribui, limita, interage (nunca "determina").
 * Progressão: Aula 22 (a paisagem registra processos) → Aula 23 (água e
 * materiais conectam lugares) → Aula 24 (atmosfera, relevo, água, solo e
 * vegetação interagem). Fecha a semana e prepara o Checkpoint 08.
 * REPETIÇÃO EVITADA: latitude como coordenada (Aula 04); estiagem e soja no
 * Cerrado (Aula 13); queimadas e fogo no Cerrado como risco (Aula 16);
 * biomas como escala de governança (Aula 18); Serra do Mar (Aula 22);
 * Pantanal (Aulas 22 e 23). Sem Köppen, sem catálogo de domínios, sem
 * lista de massas de ar.
 *
 * IMAGEM PLANEJADA (ainda não existe; o site mostra o placeholder):
 * /public/assets/aulas/semana-08-aula-24-paisagens.png, proporção 16:9.
 *
 * FONTES (conferidas em 04/11/2026):
 *   • Bioma: IBGE, "Biomas e Sistema Costeiro-Marinho do Brasil: compatível
 *     com a escala 1:250 000" (Relatórios Metodológicos, v. 45, 2019).
 *     Conceito mantido do mapa de 2004: "um conjunto de vida (vegetal e
 *     animal) constituído pelo agrupamento de tipos de vegetação contíguos
 *     e identificáveis em escala regional, com condições geoclimáticas
 *     similares e história compartilhada de mudanças, resultando em uma
 *     diversidade biológica própria". Seis biomas continentais (Amazônia,
 *     Cerrado, Caatinga, Mata Atlântica, Pantanal, Pampa); o Sistema
 *     Costeiro-Marinho "constitui caso à parte". No mapa, "cada área de
 *     contato será anexada a um dos biomas confrontantes, tendo como
 *     critério a tipologia dominante" (não há áreas de transição entre
 *     biomas na representação). A Floresta Ombrófila Mista (com Araucaria)
 *     é "característica da Mata Atlântica", inserida nesse bioma.
 *   • Domínio morfoclimático: síntese baseada em material da UNESP (Rede
 *     São Paulo de Formação Docente, 2011), apoiado em Ab'Sáber, "Os
 *     domínios de natureza no Brasil" (2003), que não foi consultado
 *     diretamente. Nenhuma formulação da aula é citação literal de
 *     Ab'Sáber. Síntese: conjunto relativamente homogêneo de relevo,
 *     solos, vegetação, clima e hidrografia que se influenciam; faixas de
 *     transição entre os domínios; Domínio das Araucárias nos planaltos da
 *     porção oriental da Bacia do Paraná.
 *   • Semiárido e Zona da Mata × Sertão: Correia et al., "A região
 *     semiárida brasileira", Embrapa Semiárido, 2011: variabilidade
 *     espaço-temporal da chuva, veranicos, chuvas concentradas em poucos
 *     meses; no litoral leste mais chuva, diminuindo pelo Agreste até o
 *     Sertão; sistemas que avançam para o interior perdem umidade; serras do
 *     interior com mais chuva; evapotranspiração potencial elevada e balanço
 *     hídrico climático negativo. Sem números na aula.
 *   • Fogo no Cerrado: Pivello, Fire Ecology 7(1), 2011 (USP): fogos
 *     naturais por raios ocorrem em savanas; espécies do Cerrado com
 *     adaptações ao fogo; a ação humana alterou os regimes de fogo.
 *   • Transporte de umidade: Rocha, Revista de Ciências Humanas (UFV),
 *     2015: alísios levam umidade do Atlântico à Amazônia; a floresta
 *     recicla umidade por evapotranspiração; parte é transportada ao
 *     centro-sul pelos jatos de baixos níveis a leste dos Andes. Revista
 *     Pesquisa FAPESP, "O mapa dos ventos" (Marengo, CPTEC/INPE): "rios
 *     voadores" como expressão para esses jatos.
 *
 * Aula em preparação (`course.ts` ainda não cadastra a Semana 08).
 */
export const aula24Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de comparar duas paisagens, ler o padrão de temperatura e chuva antes de dar um nome a ele e explicar a diferença pela combinação de fatores, e não por um fator só.",

  observation: {
    title: "O OLHAR DO PACO",
    lines: [
      "Observe dois lugares fictícios em latitudes semelhantes. O lugar A fica perto do oceano, na vertente de uma serra voltada para os ventos que chegam do mar. Chove em quase todos os meses, a floresta é densa e os rios correm o ano inteiro.",
      "O lugar B fica no interior, num planalto do outro lado da serra. Ali a estação seca é longa, a vegetação é mais aberta, muitas plantas perdem as folhas na seca e vários riachos secam por meses. Entre os dois, a paisagem muda aos poucos, numa faixa onde a floresta vai se abrindo.",
    ],
    image: {
      src: "/assets/aulas/semana-08-aula-24-paisagens.png",
      alt: "Perfil fictício do mar ao interior, em latitudes semelhantes: à esquerda, o lugar A, no litoral, com floresta densa na vertente voltada aos ventos úmidos do oceano; ao centro, uma serra e uma faixa de transição em que a floresta se abre aos poucos; à direita, o lugar B, num planalto interior, com vegetação aberta e riachos secos. Abaixo de cada lugar, um climograma fictício.",
      caption: "Paisagens fictícias criadas para fins didáticos.",
    },
    questions: [
      "Se a latitude é parecida, por que as paisagens não são?",
      "O que muda quando o ar úmido do mar encontra a serra?",
      "O que os climogramas mostram antes de você dar um nome ao clima?",
      "A vegetação só responde ao clima, ou também participa dele?",
      "Por que dois lugares em latitudes semelhantes podem ter climas — e paisagens — tão diferentes?",
    ],
    closing: "GUARDE SUAS RESPOSTAS. VAMOS RECONSTRUIR A DIFERENÇA ENTRE A E B AO LONGO DA AULA.",
  },

  connection: {
    title: "DO SISTEMA À COMPARAÇÃO",
    flow: ["Atmosfera", "Água", "Solo", "Vegetação", "Paisagem"],
    highlight: "Nenhum fator explica sozinho uma paisagem.",
    text: "Na Aula 22, você leu os processos que uma paisagem registra. Na Aula 23, seguiu a água depois que a chuva caiu. Agora a pergunta é anterior: por que a chuva e o calor chegam de modos tão diferentes a cada lugar, e como relevo, água, solo e vegetação interagem com isso? “Por que dois lugares em latitudes semelhantes podem ter climas — e paisagens — tão diferentes?”",
  },

  lenses: {
    eyebrow: "Cinco lentes para comparar paisagens",
    title: "O QUE FAZ UMA PAISAGEM SER DIFERENTE?",
    subtitle:
      "Cinco conceitos ajudam a ler a diferença entre A e B. Logo abaixo, cinco perguntas mostram como combiná-los.",
    items: [
      {
        id: "clima",
        emoji: "📊",
        name: "TEMPO, CLIMA E CLIMOGRAMA",
        question: "Que padrão de temperatura e chuva se repete ao longo dos anos?",
      },
      {
        id: "latitude-altitude",
        emoji: "🌡️",
        name: "LATITUDE E ALTITUDE: CONTROLES TÉRMICOS",
        question: "O que a posição e a altitude contribuem para a temperatura?",
      },
      {
        id: "oceano-massas",
        emoji: "🌊",
        name: "OCEANO, INTERIORIDADE E MASSAS DE AR",
        question: "De onde vem o ar que chega aqui, e como ele chega?",
      },
      {
        id: "relevo",
        emoji: "⛰️",
        name: "RELEVO E DISTRIBUIÇÃO DA UMIDADE",
        question: "O que acontece com o ar úmido quando encontra uma serra?",
      },
      {
        id: "bioma-dominio",
        emoji: "🗺️",
        name: "BIOMA E DOMÍNIO MORFOCLIMÁTICO",
        question: "Que critério foi usado para dividir este espaço?",
      },
    ],
    highlight:
      "A vegetação atravessa as cinco lentes: responde ao clima, mas também participa da evapotranspiração, pode proteger o solo e influencia o balanço da água.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "LEIA O CLIMA NA PAISAGEM EM CINCO PERGUNTAS",
    context:
      "As perguntas servem para climogramas, mapas climáticos e de vegetação, perfis de relevo, mapas de massas de ar e fotografias. Aqui, aplicadas aos lugares A e B.",
    flow: [
      "Onde está?",
      "De onde vêm o ar e a umidade?",
      "Como o relevo interfere?",
      "Como temperatura e chuva variam no ano?",
      "Como água, solo e vegetação interagem com esse padrão?",
    ],
    question: "Que combinação de fatores ajuda a explicar esta paisagem?",
    accordions: [
      {
        id: "onde-de-onde",
        title: "POSIÇÃO E CIRCULAÇÃO: AS DUAS PRIMEIRAS PERGUNTAS",
        content:
          "A e B têm latitude semelhante, mas A está perto do mar e em altitude baixa; B está no interior, num planalto mais alto. O ar úmido que vem do oceano alcança primeiro o lugar A.",
      },
      {
        id: "relevo-climograma",
        title: "RELEVO E PADRÃO ANUAL: A TERCEIRA E A QUARTA",
        content:
          "Ao subir a serra, o ar pode condensar e favorecer chuva na vertente de A. B, do outro lado, tende a ficar mais seco. Os climogramas confirmam: chuva distribuída em A; estação seca longa em B.",
      },
      {
        id: "agua-solo-vegetacao",
        title: "A RESPOSTA E A PARTICIPAÇÃO: A QUINTA PERGUNTA",
        content:
          "A floresta densa de A devolve umidade ao ar e protege o solo; em B, plantas que perdem folhas e riachos intermitentes acompanham a seca. Entre os dois, a faixa de transição mostra a mudança gradual.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "Em A e B, você viu que a latitude não basta: posição, circulação do ar, relevo e vegetação se combinam. Agora, os cinco conceitos.",
      "Guarde uma regra: leia o padrão antes de dar um nome a ele, e explique a diferença pela combinação de fatores.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "clima",
        name: "TEMPO, CLIMA E CLIMOGRAMA",
        conceito:
          "Tempo é o estado da atmosfera num momento: chove hoje, faz frio agora. Clima é o padrão que se repete ao longo de muitos anos, calculado com médias de longos períodos. O climograma mostra esse padrão num só gráfico: a temperatura média de cada mês e a chuva de cada mês.",
        penseAssim:
          "Antes de nomear, leia: a temperatura varia muito ou pouco ao longo do ano? A chuva se espalha pelos meses ou se concentra em alguns? Há uma estação seca?",
        exemplo:
          "O climograma de A mostra chuva em quase todos os meses e pouca variação de temperatura; o de B, chuva concentrada em poucos meses e uma estação seca longa.",
        naoConfunda:
          "Tempo não é clima: um dia de chuva forte em B não muda o padrão de seca. E temperatura não é precipitação: um lugar quente pode ser úmido ou seco.",
        naProva:
          "Climogramas pedem que você leia amplitude térmica, distribuição das chuvas e estação seca, e não apenas que reconheça o nome de um clima.",
      },
      {
        id: "latitude-altitude",
        name: "LATITUDE E ALTITUDE: CONTROLES TÉRMICOS",
        conceito:
          "A latitude se relaciona ao ângulo com que os raios do Sol chegam à superfície e ao modo como a energia se distribui ao longo do ano. A altitude também influencia a temperatura do ar: em geral, lugares mais altos tendem a ser mais frescos que lugares baixos na mesma região.",
        penseAssim:
          "Pergunte: os dois lugares estão em latitudes parecidas? Se sim, o que mais pode explicar a diferença de temperatura?",
        exemplo:
          "A e B estão em latitudes semelhantes, mas B, no planalto, tem temperaturas médias um pouco mais baixas que A, no litoral.",
        naoConfunda:
          "A latitude não define o clima sozinha: ela ajuda a entender a temperatura, mas não explica a chuva. E altitude maior não significa mais chuva.",
        naProva:
          "Mapas de temperatura e perfis de relevo pedem que você combine latitude e altitude antes de concluir.",
      },
      {
        id: "oceano-massas",
        name: "OCEANO, INTERIORIDADE E MASSAS DE AR",
        conceito:
          "A proximidade do oceano tende a suavizar as variações de temperatura e pode favorecer a umidade; no interior, a amplitude térmica tende a ser maior. Massa de ar é uma grande porção de ar com temperatura e umidade parecidas, que ganha essas propriedades onde se forma e se modifica no caminho.",
        penseAssim:
          "Leia a massa de ar em quatro passos: origem, propriedade, trajetória e efeito. Onde se formou? É quente ou fria, úmida ou seca? Por onde passou? O que provoca onde chega?",
        exemplo:
          "Uma massa de ar formada sobre o oceano tropical tende a ser quente e úmida. Ao avançar para o interior, pode perder parte da umidade no caminho, e B recebe menos chuva que A.",
        naoConfunda:
          "Massa de ar não é uma sigla para decorar: o que importa é de onde ela vem, que propriedades tem e o que muda na trajetória.",
        naProva:
          "Mapas de massas de ar pedem que você siga a trajetória e explique o efeito num lugar, e não que repita uma lista de nomes.",
      },
      {
        id: "relevo",
        name: "RELEVO E DISTRIBUIÇÃO DA UMIDADE",
        conceito:
          "Quando o ar úmido é forçado a subir uma serra, ele se resfria, e isso pode favorecer a condensação e a chuva na vertente voltada para os ventos, chamada barlavento. Do outro lado, no sotavento, o ar pode chegar com menos umidade, e as condições tendem a ser relativamente mais secas.",
        penseAssim:
          "Pergunte de que lado da serra o lugar está em relação aos ventos úmidos.",
        exemplo:
          "A, na vertente voltada para o mar, recebe chuvas frequentes; B, protegido pela serra, tende a ser mais seco.",
        naoConfunda:
          "Barlavento não é garantia de chuva, e sotavento não é sinônimo de deserto: o relevo é um fator entre outros, ao lado da circulação do ar e da distância do mar.",
        naProva:
          "Perfis de relevo com climogramas pedem que você relacione a posição de cada lugar à distribuição da chuva.",
      },
      {
        id: "bioma-dominio",
        name: "BIOMA E DOMÍNIO MORFOCLIMÁTICO",
        conceito:
          "Para o IBGE, bioma é um conjunto de vida vegetal e animal formado por tipos de vegetação contíguos, identificáveis em escala regional, com condições geoclimáticas similares e uma história compartilhada de mudanças. Domínio morfoclimático, na tradição de Aziz Ab’Sáber, é uma leitura integrada de relevo, clima, solos, hidrografia e vegetação, com faixas de transição entre os domínios.",
        penseAssim:
          "Pergunte qual critério organizou o mapa: o conjunto de vida e de vegetação, ou a combinação de todos os elementos da paisagem?",
        exemplo:
          "No Brasil, o IBGE reconhece seis biomas continentais: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa. O Sistema Costeiro-Marinho é tratado à parte.",
        naoConfunda:
          "Bioma não é sinônimo de domínio: os critérios são diferentes, e os limites nem sempre coincidem. E fronteira ambiental não é necessariamente uma linha abrupta: na paisagem, a mudança costuma ser gradual.",
        naProva:
          "Mapas de biomas e de domínios lado a lado pedem que você explique por que as divisões diferem.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "latitude-nao-basta",
        title: "Por que a latitude não basta?",
        content:
          "A latitude é importante: ela ajuda a explicar por que as regiões perto do Equador tendem a ser mais quentes que as próximas dos polos. Mas dois lugares em latitudes semelhantes podem ter temperaturas diferentes por estarem em altitudes diferentes, amplitudes diferentes por estarem mais perto ou mais longe do mar, e chuvas muito diferentes conforme a circulação do ar e o relevo. A vegetação, por sua vez, interage com tudo isso. A latitude é o começo da explicação, não o fim.",
        flow: ["Latitude", "Altitude", "Distância do mar", "Circulação do ar", "Relevo"],
        highlight: "A latitude ajuda a explicar a temperatura; a paisagem pede mais fatores.",
      },
      {
        id: "de-onde-vem-a-chuva",
        title: "De onde vem a chuva de um lugar?",
        content:
          "A chuva depende de umidade disponível e de ar que sobe e se resfria. A umidade pode vir do oceano, trazida por massas de ar, e pode ser devolvida ao ar pela própria vegetação, por evapotranspiração. Na América do Sul, ventos levam umidade do Atlântico para a Amazônia; a floresta devolve parte dela à atmosfera, e a circulação transporta parte dessa umidade para o centro-sul do continente. Esses fluxos ficaram conhecidos pela expressão popular “rios voadores”. Eles contribuem para as chuvas de outras regiões, ao lado de outras fontes de umidade.",
        flow: ["Umidade do oceano", "Massas de ar", "Relevo", "Evapotranspiração", "Chuva"],
        highlight: "A chuva de um lugar é a soma de caminhos: oceano, ar, relevo e vegetação.",
      },
      {
        id: "bioma-ou-dominio",
        title: "Bioma ou domínio: o que muda é o critério?",
        content:
          "Sim. Nos planaltos do Sul do Brasil, as florestas com araucárias integram, no mapa do IBGE, o bioma Mata Atlântica, porque o critério reúne tipos de vegetação aparentados. Na leitura de Ab’Sáber, essas áreas formam o Domínio das Araucárias, porque relevo, clima, solos, água e vegetação compõem ali uma combinação própria. Nenhum dos dois mapas está errado: cada um responde a uma pergunta. E os limites também dependem do critério: no mapa de biomas, cada área de contato é anexada ao bioma de vegetação dominante; Ab’Sáber destaca faixas de transição entre os domínios.",
        flow: ["Mesmo espaço", "Critério diferente", "Mapa diferente", "Transições"],
        highlight: "Mudar o critério muda o mapa, sem mudar a paisagem.",
      },
    ],
    closing:
      "Nesta aula, a sociedade apareceu pouco, mas ela também transforma clima, água, solo e vegetação. No Checkpoint 08, as três operações da semana se encontram numa microbacia fictícia.",
  },

  brazilConnections: {
    title: "E O BRASIL? E O MUNDO?",
    question: "Onde a combinação de fatores explica paisagens diferentes?",
    center: "BRASIL E MUNDO",
    items: [
      {
        id: "mata-sertao",
        label: "ZONA DA MATA × SERTÃO: LATITUDES SEMELHANTES, PAISAGENS OPOSTAS",
        description:
          "Em Pernambuco, a Zona da Mata e o Sertão estão em latitudes parecidas. Segundo a Embrapa Semiárido, a chuva é maior no litoral leste e diminui para o interior, pelo Agreste até o Sertão: os sistemas que trazem umidade a perdem ao avançar para dentro do continente. O relevo participa: em serras do interior, a chuva pode ser maior. No Semiárido, não se trata só de chover menos: as chuvas são irregulares no tempo e no espaço, concentram-se em poucos meses, e a alta demanda atmosférica por água deixa o balanço hídrico negativo. A Caatinga, com plantas que perdem as folhas na seca, responde a essa sazonalidade.",
      },
      {
        id: "cerrado",
        label: "CERRADO: LER O PADRÃO ANTES DE NOMEÁ-LO",
        description:
          "O climograma de grande parte do Cerrado mostra uma estação chuvosa e outra seca bem marcadas. Esse padrão interage com solos, água e vegetação; o Cerrado não se explica só por “solo pobre”. O fogo faz parte da dinâmica ecológica de diferentes formações do Cerrado, e diversas espécies apresentam características relacionadas a regimes recorrentes de fogo; segundo estudo da USP, mudanças humanas na frequência e na intensidade do fogo alteraram essa dinâmica.",
      },
      {
        id: "araucarias",
        label: "ARAUCÁRIAS: UM ESPAÇO, DOIS CRITÉRIOS",
        description:
          "Nos planaltos do Sul, a altitude contribui para temperaturas mais amenas, e a chuva se distribui ao longo do ano. Para o IBGE, as florestas com araucárias são características da Mata Atlântica e integram esse bioma. Na leitura de Ab’Sáber, a mesma área forma o Domínio das Araucárias. O espaço é o mesmo; o critério muda.",
      },
      {
        id: "savanas",
        label: "E NO MUNDO? CERRADO × SAVANAS AFRICANAS",
        description:
          "Savanas africanas e o Cerrado têm em comum padrões de sazonalidade climática, com estação seca marcada, e a presença do fogo. Mas a composição de espécies, a história ecológica, os solos e a dinâmica do fogo não são idênticos. Reconhecer um padrão semelhante não transforma paisagens diferentes em equivalentes.",
      },
    ],
    study:
      "Cada cartão prova uma operação: Zona da Mata × Sertão, a combinação de fatores em latitudes semelhantes; o Cerrado, ler o padrão antes de nomeá-lo; as Araucárias, que bioma e domínio usam critérios diferentes; as savanas, que padrões parecidos não fazem paisagens iguais.",
    highlight:
      "Paisagens diferentes nascem de combinações diferentes, e não de um fator só.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Climograma",
      "Mapas de temperatura e precipitação",
      "Mapa de massas de ar",
      "Perfil de relevo",
      "Fotografia de vegetação",
      "Mapa de biomas",
      "Mapa de domínios",
      "Série temporal",
      "Boletim do tempo e normal climatológica",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Ler o padrão antes de nomeá-lo",
      "Combinar fatores em vez de escolher um só",
      "Explicar a paisagem pela interação",
      "Distinguir os critérios de cada regionalização",
    ],
    highlight:
      "A prova raramente pergunta só “qual é o clima?”. Ela mostra duas paisagens e quer ver você ler o padrão, combinar fatores e explicar a diferença.",
    guidingIntro: "Material → operação → armadilha:",
    guidingQuestions: [
      "Climograma → leia amplitude, distribuição das chuvas e estação seca. Armadilhas: nomear sem ler; temperatura = precipitação.",
      "Mapas de temperatura e precipitação → compare os dois padrões. Armadilha: a latitude explica tudo.",
      "Mapa de massas de ar → origem, propriedade, trajetória e efeito. Armadilha: decorar siglas.",
      "Perfil de relevo → relacione a posição de cada vertente à chuva. Armadilha: barlavento chove, sotavento não.",
      "Fotografia de vegetação → ligue a forma das plantas ao processo. Armadilha: reconhecer a foto basta.",
      "Mapas de biomas e de domínios → compare critérios e transições. Armadilhas: bioma = domínio; limite como linha rígida.",
      "Série temporal ou boletim × normal climatológica → separe o episódio do padrão. Armadilha: clima = tempo.",
    ],
  },

  question: {
    id: "s08-a24-q01",
    statement:
      "Dois lugares fictícios estão em latitudes semelhantes. A fica no litoral, a poucos metros de altitude, na vertente de uma serra voltada para ventos úmidos que chegam do oceano. B fica num planalto do interior, mais alto, do outro lado da serra. O climograma de A mostra temperaturas médias mensais altas e quase sem variação, com chuva em todos os meses. O de B mostra temperaturas médias um pouco mais baixas, com maior variação ao longo do ano, e chuvas concentradas em quatro meses, seguidas de uma longa estação seca. A tem floresta densa; B, vegetação aberta, com muitas plantas que perdem as folhas na seca; entre os dois, a floresta se abre aos poucos. Um mapa de biomas traça uma linha entre A e B; um mapa de domínios mostra ali uma faixa de transição. Um visitante encontrou chuva forte em B num dia de março. A leitura mais adequada é que",
    options: [
      {
        id: "A",
        text: "como A e B estão em latitudes semelhantes, recebem a mesma energia e deveriam ter o mesmo clima, pois a serra pouco interfere; a vegetação aberta de B se explica principalmente pelo solo do planalto, e os mapas de biomas e de domínios diferem só na escala, já que usam o mesmo critério: a vegetação.",
      },
      {
        id: "B",
        text: "B, por ser mais alto, deveria receber mais chuva que A, mesmo no interior; a seca prolongada de B se deve sobretudo à vegetação aberta, que favorece um ar mais seco ao longo do ano, e a faixa entre A e B indica um erro do mapa de domínios, já que o de biomas traça corretamente o limite natural.",
      },
      {
        id: "C",
        text: "com latitudes semelhantes, a altitude contribui para B ser mais fresco; a umidade oceânica e a subida do ar na vertente litorânea favorecem chuva em A, e a posição interior e a sotavento contribui para a sazonalidade de B; a vegetação interage com esse conjunto, e bioma e domínio têm critérios diferentes.",
      },
      {
        id: "D",
        text: "a chuva forte que o visitante encontrou em B mostra que seu clima pode ser tão úmido quanto o de A, sem sazonalidade marcada; a diferença entre os dois lugares está na temperatura, para a qual a altitude contribui, e os mapas de biomas e de domínios, por usarem a vegetação, deveriam coincidir.",
      },
      {
        id: "E",
        text: "a menor temperatura de B, ligada à altitude, é o fator que produz a vegetação aberta; a umidade oceânica chega com a mesma intensidade aos dois lados da serra, sem diferença entre barlavento e sotavento, e a faixa de transição mostra que o domínio considera como relevo, clima, solos e água interagem com a vegetação.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "A alternativa C está correta porque combina os fatores em vez de escolher um só. 1. LATITUDE: A e B estão em latitudes semelhantes, o que não basta para explicar a diferença. 2. ALTITUDE: B, no planalto, é um pouco mais fresco. 3. OCEANO E INTERIORIDADE: A, perto do mar, tem pouca variação de temperatura; B, no interior, varia mais. 4. UMIDADE E RELEVO: a entrada de umidade oceânica e a subida do ar na vertente litorânea favorecem chuva em A; a posição mais interior e a sotavento contribui para que B tenha chuvas concentradas em poucos meses. O relevo participa, mas não explica sozinho o contraste. 5. VEGETAÇÃO: a floresta densa de A e a vegetação aberta de B respondem a esse padrão e interagem com a água e o solo. 6. BIOMA E DOMÍNIO: os mapas diferem porque usam critérios diferentes; a faixa de transição lembra que a mudança na paisagem é gradual. A ignora altitude, relevo e circulação, atribui tudo ao solo e confunde bioma com domínio. B supõe que altitude maior traz mais chuva e trata a faixa de transição como erro. D usa um dia de chuva para definir o clima. E atribui a vegetação a um único fator e ignora a diferença entre as vertentes; a parte sobre o domínio está certa, mas o restante não.",
    optionFeedback: {
      A: "Latitude semelhante não garante o mesmo clima: altitude, distância do mar, relevo e circulação também contam. E bioma e domínio usam critérios diferentes, não só escalas diferentes.",
      B: "Altitude maior não significa mais chuva. E a faixa de transição não é um erro: ela mostra que a mudança na paisagem é gradual.",
      C: "Correta: combina latitude, altitude, oceano, relevo, distribuição da chuva e vegetação, e reconhece que bioma e domínio usam critérios diferentes.",
      D: "Um dia de chuva é tempo, não clima: o climograma de B mostra uma longa estação seca. E bioma e domínio não precisam coincidir.",
      E: "A vegetação não é produzida por um único fator. E a serra não deixa a umidade chegar igual aos dois lados: B fica numa posição mais seca.",
    },
  },

  missionCheck:
    "Voltemos à pergunta da aula: por que dois lugares em latitudes semelhantes podem ter climas — e paisagens — tão diferentes? Agora você consegue ler o padrão antes de nomeá-lo e explicar a diferença pela combinação de fatores?",

  completionMessage:
    "Na Aula 22, a paisagem registrou processos em tempos diferentes. Na Aula 23, água e materiais conectaram lugares. Nesta aula, atmosfera, relevo, água, solo e vegetação interagiram na construção das paisagens. A natureza não é o cenário da sociedade: é um sistema de processos conectados, do qual a sociedade também faz parte. No Checkpoint 08, as três operações se encontram.",
};
