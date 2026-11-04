import type { LessonContent } from "@/lib/types";

/**
 * AULA 23 — ÁGUA NO TERRITÓRIO: ONDE COMEÇA E ONDE TERMINA UM PROBLEMA?
 * Semana 08 • Geopolítica & Atualidades (CONECTE) — A NATUREZA EM MOVIMENTO
 *
 * Pergunta-guia (abre e fecha a aula): "Se uma mudança acontece aqui, por
 * quais caminhos seus efeitos podem aparecer longe dali?" Ideia-chave:
 * "Estar perto não significa estar hidrologicamente conectado." Operação
 * nova: ler a bacia, e não o rio, com a ferramenta "Leia a bacia em seis
 * passos" (`application`): onde a água cai → infiltra ou escoa → por onde
 * circula → o que transporta → onde se acumula → quem é afetado a jusante.
 * Cinco lentes: bacia e divisor; montante e jusante; infiltração,
 * escoamento e água subterrânea; vazão, cheia e inundação; sedimentos e
 * assoreamento. O uso do solo atravessa as cinco, sem lente própria.
 * Progressão: Aula 22 (o que acontece num ponto) → Aula 23 (por onde a água
 * e o material viajam). Erosão, transporte e sedimentação não são
 * reensinados. A microbacia do Ribeirão Graúna é fictícia.
 * REPETIÇÃO EVITADA: cheia urbana como desastre (Aula 16), governança de
 * bacia (Aula 18), disputa por nascente (Aula 11). A Aula 16 não foi
 * alterada: a distinção enchente × inundação vem com ressalva de uso.
 * LIMITES: sem fatores climáticos, massas de ar, tipos climáticos, rios
 * voadores, biomas ou domínios (Aula 24).
 *
 * IMAGEM PLANEJADA (ainda não existe; o site mostra o placeholder):
 * /public/assets/aulas/semana-08-aula-23-microbacia.png, proporção 16:9.
 *
 * FONTES (conferidas em 03/11/2026):
 *   • Enchente/cheia e inundação: Serviço Geológico do Brasil (CPRM),
 *     relatório de setorização de riscos: enchente ou cheia é a "elevação
 *     temporária do nível d'água em um canal de drenagem devida ao aumento
 *     da vazão"; inundação é o "extravasamento das águas do canal de
 *     drenagem para as áreas marginais".
 *   • Taquari–Pantanal: Embrapa Pantanal, Documentos 2004, "Mudanças
 *     hidrológicas no Pantanal associadas a processos erosivos": erosão nos
 *     planaltos da alta bacia e aumento do transporte de areia para a
 *     planície; assoreamentos que "forçam o ajuste morfológico da calha",
 *     com os "arrombados" e inundações permanentes; estudos indicam que as
 *     mudanças também "podem estar associadas ao neotectonismo". Embrapa
 *     Pantanal, ADM 102, 2006: expansão agropecuária a partir de meados dos
 *     anos 1970 no planalto intensificou a entrada de sedimentos.
 *   • Sistema Cantareira: ANA, Nota Técnica 019/2006/SOC: reservatórios em
 *     rios da bacia do Piracicaba transpõem água para o reservatório Paiva
 *     Castro, na bacia do Alto Tietê, para o abastecimento da Região
 *     Metropolitana de São Paulo.
 *   • Aquífero Guarani: Rocha, G. A., Estudos Avançados (USP), 1997, e
 *     Gomes, M. A. F., Embrapa, 2008: aquífero regional em grande parte
 *     confinado sob derrames basálticos; recarga direta nas faixas onde as
 *     rochas sedimentares afloram, nas bordas da bacia; água acumulada nos
 *     poros de arenitos; áreas de recarga mais vulneráveis. Sem números.
 *
 * Aula em preparação (`course.ts` ainda não cadastra a Semana 08).
 */
export const aula23Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de ler uma bacia hidrográfica como um sistema conectado, seguindo o caminho da água e do material de onde a chuva cai até quem é afetado a jusante, sem confundir proximidade com conexão.",

  observation: {
    title: "O OLHAR DO PACO",
    lines: [
      "Observe a microbacia do Ribeirão Graúna, uma paisagem fictícia. As nascentes ficam numa cabeceira elevada, coberta por mata. O afluente A drena uma lavoura de solo exposto. O afluente B atravessa uma pequena cidade, com ruas asfaltadas e muitos telhados. Abaixo da confluência com o afluente A fica a estação de captação de água; mais adiante, o ribeirão chega a uma planície. Do outro lado do divisor de águas, a poucos quilômetros da captação, há outra fazenda com solo exposto.",
      "Depois de uma chuva forte, a água da captação chega turva. Antes de apontar um responsável, siga o caminho da água.",
    ],
    image: {
      src: "/assets/aulas/semana-08-aula-23-microbacia.png",
      alt: "Microbacia fictícia do Ribeirão Graúna: cabeceira elevada com mata e nascentes; afluente A drenando uma lavoura de solo exposto; afluente B atravessando uma pequena cidade; estação de captação no ribeirão abaixo da confluência com o afluente A; planície fluvial a jusante; e, do outro lado do divisor de águas, uma fazenda próxima da captação.",
      caption: "Paisagem fictícia criada para fins didáticos.",
    },
    questions: [
      "Depois de uma chuva forte, a água da captação chega turva. Quem realmente pode ter contribuído para isso?",
      "A fazenda do outro lado do divisor está perto da captação. A água dela chega até lá?",
      "Para onde vai a chuva que cai sobre o asfalto da cidade, e para onde vai a que cai sobre a mata?",
      "A planície fica longe da lavoura. Ela pode sentir o que acontece lá?",
      "Se uma mudança acontece aqui, por quais caminhos seus efeitos podem aparecer longe dali?",
    ],
    closing: "GUARDE SUAS RESPOSTAS. VAMOS SEGUIR O CAMINHO DA ÁGUA AO LONGO DA AULA.",
  },

  connection: {
    title: "DO PONTO AO SISTEMA",
    flow: ["O que acontece num ponto", "Para onde vai", "Quem alcança"],
    highlight: "Estar perto não significa estar hidrologicamente conectado.",
    text: "Na Aula 22, você leu o que acontece num ponto da paisagem: a rocha que se altera, o solo que é removido, o material que se deposita. Agora a pergunta continua: o material e a água já saíram, para onde vão? “Se uma mudança acontece aqui, por quais caminhos seus efeitos podem aparecer longe dali?”",
  },

  lenses: {
    eyebrow: "Cinco lentes para ler a bacia",
    title: "POR ONDE A ÁGUA PASSA?",
    subtitle:
      "Cinco conceitos dão nome ao caminho da água. Logo abaixo, seis passos mostram como segui-lo em mapas, notícias e questões.",
    items: [
      {
        id: "bacia",
        emoji: "🗺️",
        name: "BACIA HIDROGRÁFICA E DIVISOR DE ÁGUAS",
        question: "Que área drena para este rio, e onde ela termina?",
      },
      {
        id: "montante-jusante",
        emoji: "↕️",
        name: "MONTANTE E JUSANTE",
        question: "Em que sentido a água corre, e quem está antes ou depois?",
      },
      {
        id: "infiltracao",
        emoji: "💧",
        name: "INFILTRAÇÃO, ESCOAMENTO E ÁGUA SUBTERRÂNEA",
        question: "A água entra no solo ou escorre pela superfície?",
      },
      {
        id: "vazao",
        emoji: "📈",
        name: "VAZÃO, CHEIA E INUNDAÇÃO",
        question: "Quanto e quão depressa o rio responde à chuva?",
      },
      {
        id: "sedimentos",
        emoji: "🏜️",
        name: "SEDIMENTOS E ASSOREAMENTO",
        question: "O material já saiu. Para onde ele vai?",
      },
    ],
    highlight:
      "O uso do solo atravessa as cinco lentes: cobertura, lavoura, asfalto e ocupação mudam o caminho e o tempo da água.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "LEIA A BACIA EM SEIS PASSOS",
    context:
      "Os passos servem para mapas, notícias, hidrogramas e questões. Aqui, aplicados à microbacia do Ribeirão Graúna.",
    flow: [
      "Onde a água cai",
      "Infiltra ou escoa",
      "Por onde circula",
      "O que transporta",
      "Onde se acumula",
      "Quem é afetado a jusante",
    ],
    question: "Este lugar está ligado àquele pelo caminho da água?",
    accordions: [
      {
        id: "cai-infiltra",
        title: "ONDE CAI E PARA ONDE VAI: OS DOIS PRIMEIROS PASSOS",
        content:
          "A chuva cai sobre a mata, a lavoura e a cidade. Na mata, boa parte infiltra; no asfalto e no solo exposto, mais água escorre pela superfície.",
      },
      {
        id: "circula-transporta",
        title: "O CAMINHO E A CARGA: CIRCULA E TRANSPORTA",
        content:
          "A água segue as encostas até os afluentes e o ribeirão, levando o material solto. A fazenda do outro lado do divisor drena para outra bacia.",
      },
      {
        id: "acumula-afeta",
        title: "O DESTINO: ACUMULA E AFETA",
        content:
          "O material se deposita onde a correnteza perde força. Quem está a jusante, como a captação e a planície, recebe o que vem de cima.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "Na microbacia do Ribeirão Graúna, você viu que a distância não decide: o caminho da água decide. Agora, os cinco conceitos.",
      "Guarde uma regra: antes de ligar uma causa a um efeito, confira se os dois lugares estão na mesma bacia e quem está a montante de quem.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "bacia",
        name: "BACIA HIDROGRÁFICA E DIVISOR DE ÁGUAS",
        conceito:
          "Bacia hidrográfica é a área drenada por um rio principal e seus afluentes, que formam uma rede de drenagem. Ela é limitada pelos divisores de águas, as partes mais elevadas que separam o escoamento de uma bacia do de outra. As cabeceiras são as áreas mais altas da bacia, onde ficam as nascentes.",
        penseAssim:
          "Pergunte: se uma gota cair aqui, para qual rio ela tende a escorrer?",
        exemplo:
          "A lavoura do afluente A e a cidade do afluente B estão na bacia do Ribeirão Graúna; a fazenda do outro lado do divisor, não.",
        naoConfunda:
          "Rio não é o mesmo que bacia: o rio é o canal; a bacia é toda a área que drena para ele. E a nascente não é a origem de toda a água: chuva, afluentes e água subterrânea alimentam o rio ao longo de toda a bacia.",
        naProva:
          "Mapas de bacia pedem que você trace o divisor e decida quais lugares estão conectados, e não quais estão mais perto.",
      },
      {
        id: "montante-jusante",
        name: "MONTANTE E JUSANTE",
        conceito:
          "Montante é o lado de onde a água vem, rio acima; jusante é o lado para onde ela vai, rio abaixo. As duas posições são definidas pelo sentido do escoamento.",
        penseAssim:
          "Siga a correnteza: o que está antes dela é montante; o que está depois, jusante.",
        exemplo:
          "A lavoura do afluente A está a montante da captação; a planície está a jusante das duas.",
        naoConfunda:
          "Montante não é norte, e jusante não é sul. Há rios que correm para o norte, para o leste ou para o oeste: o mapa pode estar orientado de qualquer jeito, mas a água corre do mais alto para o mais baixo.",
        naProva:
          "Desconfie de alternativas que usam pontos cardeais para decidir quem afeta quem num rio.",
      },
      {
        id: "infiltracao",
        name: "INFILTRAÇÃO, ESCOAMENTO E ÁGUA SUBTERRÂNEA",
        conceito:
          "Infiltração é a entrada da água no solo; escoamento superficial é a água que corre sobre o terreno. Parte da água infiltrada pode seguir em profundidade e recarregar aquíferos, formações rochosas que armazenam e transmitem água em seus poros e fraturas. Em muitos sistemas fluviais, a água subterrânea pode contribuir para a vazão de base, especialmente em períodos sem chuva.",
        penseAssim:
          "Pergunte o que cobre o terreno: mata, solo exposto ou asfalto mudam quanto infiltra e quanto escorre.",
        exemplo:
          "Na cabeceira coberta por mata, mais água infiltra; nas ruas asfaltadas da cidade, quase toda escorre para o afluente B.",
        naoConfunda:
          "Infiltrar não é desaparecer: a água continua no ciclo, no solo ou em profundidade. E aquífero não é um rio ou lago subterrâneo: a água ocupa os espaços dentro das rochas.",
        naProva:
          "Mapas de aquífero pedem que você distinga onde a água pode entrar e onde a formação está coberta por outras rochas.",
      },
      {
        id: "vazao",
        name: "VAZÃO, CHEIA E INUNDAÇÃO",
        conceito:
          "Vazão é o volume de água que passa por um ponto do rio num intervalo de tempo. Ela varia ao longo do ano e responde à chuva. No uso cotidiano, “enchente” muitas vezes é usada como sinônimo de inundação. Para esta leitura hidrológica, adotamos uma distinção operacional: cheia ou enchente é a elevação do nível da água; inundação ocorre quando a água ultrapassa o canal e alcança áreas adjacentes.",
        penseAssim:
          "Olhe o hidrograma: quanto o rio sobe, quão depressa chega ao pico e quanto demora para baixar.",
        exemplo:
          "Com mais escoamento vindo do asfalto, o afluente B leva a água ao ribeirão mais depressa, e o pico a jusante tende a chegar mais cedo.",
        naoConfunda:
          "Nem toda cheia vira inundação: o nível pode subir e continuar dentro do canal.",
        naProva:
          "Hidrogramas de antes e depois de uma mudança no uso do solo pedem que você compare o pico e o tempo de resposta, sem atribuir tudo à quantidade de chuva.",
      },
      {
        id: "sedimentos",
        name: "SEDIMENTOS E ASSOREAMENTO",
        conceito:
          "O material removido das encostas segue com a água e se deposita onde a correnteza perde força. Assoreamento é esse acúmulo de sedimentos no leito dos rios e nos reservatórios. Ele pode reduzir localmente a profundidade, a seção útil do canal ou a capacidade de armazenamento, alterando a dinâmica do fluxo.",
        penseAssim:
          "Pergunte de onde veio o sedimento, por onde passou e onde a água perdeu força para deixá-lo.",
        exemplo:
          "O solo levado da lavoura do afluente A forma bancos de areia no ribeirão e chega turvo à captação.",
        naoConfunda:
          "Assoreamento não é o mesmo que poluição: um rio pode estar assoreado sem estar contaminado, e o contrário também.",
        naProva:
          "Imagens de antes e depois de um rio pedem que você reconheça bancos de sedimento e relacione o acúmulo ao que acontece a montante.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "onde-comeca",
        title: "Onde começa um rio?",
        content:
          "Não num único ponto. A nascente marca onde o canal aparece, mas o rio recebe água de toda a bacia: da chuva que escorre pelas encostas, de cada afluente que se junta a ele e, em muitos casos, da água subterrânea que alimenta o leito. Um rio é o resultado de uma rede. Por isso, a pergunta certa não é só onde ele nasce, mas que área drena para ele.",
        flow: ["Chuva na bacia", "Encostas", "Afluentes", "Água subterrânea", "Rio principal"],
        highlight: "O rio é o canal; a bacia é toda a área que o alimenta.",
      },
      {
        id: "fica-aqui",
        title: "A água que cai aqui fica aqui?",
        content:
          "Depende do que cobre o terreno. Sob a mata, a água encontra folhas, raízes e solo poroso, e uma parte infiltra. No solo exposto e no asfalto, mais água escorre pela superfície e chega mais depressa ao rio. O hidrograma mostra a diferença: com mais escoamento, o pico fica mais alto e chega mais cedo; com mais infiltração, a resposta é mais lenta e espalhada no tempo.",
        flow: ["Cobertura do terreno", "Infiltração ou escoamento", "Tempo até o rio", "Pico no hidrograma"],
        highlight: "O que cobre o chão muda o tempo da água.",
      },
      {
        id: "solo-perdido",
        title: "Como o solo perdido numa encosta chega a afetar outro lugar?",
        content:
          "Pelo caminho da água. O solo removido de uma lavoura vai com o escoamento até o afluente, depois até o rio principal, e se deposita onde a correnteza perde força. Ali, pode formar bancos de areia, reduzir a profundidade do canal ou ocupar espaço num reservatório. Quem está a jusante, como uma captação de água ou uma área de planície, pode sentir efeitos de algo que aconteceu longe dali, desde que esteja na mesma bacia.",
        flow: ["Solo removido", "Escoamento", "Afluente e rio", "Deposição", "Efeito a jusante"],
        highlight: "Um problema de água começa onde a água cai e termina onde ela chega.",
      },
    ],
    closing:
      "Nesta aula, a chuva apareceu como ponto de partida. Na Aula 24, a pergunta será outra: por que chove de modos tão diferentes de um lugar para outro?",
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Onde o caminho da água liga lugares distantes no Brasil?",
    center: "BRASIL",
    items: [
      {
        id: "taquari",
        label: "TAQUARI–PANTANAL: DO PLANALTO À PLANÍCIE",
        description:
          "Segundo a Embrapa Pantanal, a intensificação da erosão nos planaltos da alta bacia do rio Taquari aumentou o transporte de areia para a planície. Os assoreamentos no leito forçaram ajustes no canal, com rompimentos de margem chamados de “arrombados”, e grandes áreas passaram a ficar inundadas de forma permanente. A Embrapa registra também que essas mudanças podem estar associadas a movimentos recentes da crosta.",
      },
      {
        id: "cantareira",
        label: "CANTAREIRA: A ÁGUA ATRAVESSA O DIVISOR",
        description:
          "Segundo a Agência Nacional de Águas, o Sistema Cantareira reúne reservatórios em rios da bacia do Piracicaba e transfere água para a bacia do Alto Tietê, onde abastece parte da Região Metropolitana de São Paulo. A bacia não coincide com o limite de um município ou de uma região: quem usa a água pode estar longe de onde ela é captada.",
      },
      {
        id: "guarani",
        label: "AQUÍFERO GUARANI: ÁGUA DENTRO DAS ROCHAS",
        description:
          "Segundo estudos da USP e da Embrapa, a água do Aquífero Guarani fica nos poros de arenitos, e em grande parte da área a formação está coberta por espessas camadas de basalto. A recarga direta acontece principalmente nas faixas onde essas rochas afloram, nas bordas da bacia sedimentar, que por isso são as áreas mais vulneráveis.",
      },
    ],
    study:
      "Cada cartão prova uma lente: o Taquari, o caminho dos sedimentos de montante a jusante; o Cantareira, que a bacia não segue o limite político; o Guarani, que aquífero não é rio subterrâneo e que nem toda infiltração recarrega a mesma formação.",
    highlight:
      "No Brasil, o caminho da água liga planaltos e planícies, bacias vizinhas e a superfície às rochas.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Mapa de bacia",
      "Perfil longitudinal",
      "Rede de drenagem",
      "Hidrograma",
      "Imagem de antes e depois",
      "Notícia de cheia ou inundação",
      "Mapa de aquífero",
      "Mapa de uso do solo",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Reconstruir a conexão pela bacia",
      "Identificar montante e jusante",
      "Separar infiltração de escoamento",
      "Seguir o sedimento até onde ele se acumula",
    ],
    highlight:
      "A prova raramente pergunta “o que é bacia hidrográfica?”. Ela mostra um lugar e um efeito e quer ver você reconstruir o caminho entre os dois.",
    guidingIntro: "Material → operação → armadilha:",
    guidingQuestions: [
      "Mapa de bacia ou rede de drenagem → trace o divisor e siga os afluentes. Armadilhas: proximidade = conexão; rio como linha isolada.",
      "Perfil longitudinal → relacione a declividade ao que predomina nas cabeceiras e mais abaixo. Armadilha: montante = norte, jusante = sul.",
      "Hidrograma → compare pico e tempo de resposta. Armadilha: atribuir tudo à quantidade de chuva.",
      "Imagem de antes e depois → reconheça bancos de sedimento e ligue o acúmulo ao que ocorre a montante. Armadilha: assoreamento = poluição.",
      "Notícia de cheia ou inundação → separe a subida do nível do transbordamento. Armadilha: tratar sempre os dois como sinônimos.",
      "Mapa de aquífero ou de uso do solo → distinga onde a água pode entrar e o que cobre o terreno. Armadilhas: aquífero = rio subterrâneo; infiltração = água perdida.",
    ],
  },

  question: {
    id: "s08-a23-q01",
    statement:
      "Na microbacia fictícia do Ribeirão Graúna, o rio corre de sul para norte. As nascentes ficam ao sul, numa cabeceira com mata. Seguindo a correnteza, o ribeirão recebe o afluente A, que drena uma lavoura de solo exposto; logo abaixo dessa confluência há bancos de areia e, depois, a estação de captação de água. Mais ao norte, o ribeirão recebe o afluente B, que atravessa uma cidade cujas ruas asfaltadas se ampliaram nos últimos anos, e então chega a uma planície. Uma fazenda com solo exposto fica a 2 km da captação, mas do outro lado do divisor de águas. Depois de chuvas fortes, a água captada chega turva, e na planície o nível do ribeirão passou a subir mais depressa do que antes. A leitura mais adequada é que",
    options: [
      {
        id: "A",
        text: "a fazenda vizinha, por estar a apenas 2 km da captação e também ter solo exposto, é uma fonte provável do material que chega turvo à estação depois das chuvas; a cidade, mais distante, pouco influencia o ribeirão, e os bancos de areia indicam que a água está mais poluída na confluência.",
      },
      {
        id: "B",
        text: "como a cidade fica ao norte da captação, ela está a montante, e o escoamento das ruas asfaltadas, ampliadas nos últimos anos, leva material até a estação; a lavoura do afluente A, situada ao sul, fica a jusante da captação e por isso não contribui para a turbidez registrada na estação.",
      },
      {
        id: "C",
        text: "a lavoura do afluente A, a montante e na mesma bacia, explica a turbidez captada, enquanto o asfalto da cidade, que reduz a infiltração, faz a água da chuva desaparecer mais depressa da bacia, o que tende a diminuir a vazão que chega à planície e a retardar ali a subida depois das chuvas fortes.",
      },
      {
        id: "D",
        text: "a vazão do ribeirão é formada pelas nascentes da cabeceira, protegidas pela mata ao sul; os bancos de areia, ao reduzirem a seção do canal abaixo do afluente A, explicam por si mesmos a subida mais rápida na planície, e a cidade não altera a forma como o ribeirão responde às chuvas fortes.",
      },
      {
        id: "E",
        text: "a lavoura A, a montante e na mesma bacia, pode contribuir para a turbidez e os bancos, que podem reduzir a seção do canal; a cidade, por estar a jusante da captação, não explica a turbidez na estação, mas, com menos infiltração, antecipa a subida na planície; a fazenda drena para outra bacia.",
      },
    ],
    correctOptionId: "E",
    explanation:
      "A alternativa E está correta porque segue o caminho da água em cada parte da microbacia. 1. CONEXÃO PELA BACIA: a fazenda está perto da captação, mas do outro lado do divisor; a água que cai nela escorre para outra bacia. 2. MONTANTE E JUSANTE: o rio corre de sul para norte; a lavoura A está a montante da captação, e a cidade, a jusante dela. 3. SEDIMENTOS: o solo exposto da lavoura A pode fornecer material que a água leva ao ribeirão, e essa conexão é compatível com a turbidez e os depósitos observados; parte se deposita nos bancos de areia, que podem reduzir localmente a seção do canal, e parte chega turva à captação. Isso é acúmulo de sedimentos, não poluição. 4. INFILTRAÇÃO E ESCOAMENTO: com o asfalto, menos água infiltra e mais escorre, por isso o afluente B leva a água mais depressa ao ribeirão e a subida na planície se antecipa. A cidade, por estar a jusante da captação, não explica a turbidez observada na estação. A confunde proximidade com conexão e assoreamento com poluição. B usa os pontos cardeais para definir montante e jusante. C confunde infiltração e escoamento com água que desaparece e inverte o efeito do asfalto sobre a vazão. D trata as nascentes como origem de toda a água, atribui só aos bancos de areia a subida na planície e ignora o efeito da cidade.",
    optionFeedback: {
      A: "Estar perto não é estar conectado: a fazenda fica do outro lado do divisor. E bancos de areia indicam deposição de sedimentos, não poluição.",
      B: "Montante e jusante dependem do sentido do escoamento, não dos pontos cardeais. Como o rio corre para o norte, a cidade está a jusante da captação.",
      C: "A água que escorre do asfalto não desaparece: ela chega mais depressa ao rio e tende a antecipar e elevar o pico a jusante.",
      D: "As nascentes não são a origem de toda a água: afluentes, encostas e água subterrânea também alimentam o rio. E os bancos podem alterar o canal no trecho onde estão, mas não explicam sozinhos a subida na planície: o asfalto da cidade também muda a resposta do ribeirão.",
      E: "Correta: liga cada efeito a uma origem possível pela bacia, respeita montante e jusante e exclui a fazenda que drena para outra bacia.",
    },
  },

  missionCheck:
    "Voltemos à pergunta da aula: se uma mudança acontece aqui, por quais caminhos seus efeitos podem aparecer longe dali? Agora você consegue seguir a água de onde ela cai até quem é afetado a jusante, e distinguir o que está perto do que está conectado?",

  completionMessage:
    "Um problema de água começa onde a água cai e termina onde ela chega, e o caminho entre os dois passa pela bacia, não pela distância. Na próxima aula, a pergunta é por que as paisagens, as chuvas e a vegetação são tão diferentes de um lugar para outro.",
};
