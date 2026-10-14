import type { LessonContent } from "@/lib/types";

/**
 * AULA 15 — COMO INTERPRETAR A POLÍTICA BRASILEIRA SEM TRANSFORMÁ-LA EM TORCIDA
 * Semana 05 • Política & Cidadania (COMPREENDA)
 *
 * Ideia central: antes de decidir o que pensar sobre um acontecimento político,
 * o aluno o analisa com cinco perguntas: COMPETÊNCIA, CAMINHO, AFIRMAÇÃO,
 * INTERESSES e EFEITOS. A aula não diz o que pensar; mostra o que olhar antes.
 * Pergunta-guia (em `connection` e `missionCheck`): "Como analisar um
 * acontecimento político antes de decidir o que pensar sobre ele?"
 * Progressão: Aula 13 (onde?) → Aula 14 (de que processo?) → Aula 15 (quem
 * decide, por qual caminho, como avaliar o que se diz?). Pontes: Aula 03
 * (União, estados e municípios), Aula 08 (dado, interpretação, opinião) e
 * Aula 12 (Poderes e sanção).
 * Treino (abertura e questão final) é fictício; o único caso real é a Lei Seca
 * (2008 a 2012), no deepDive, usado só para mostrar o caminho institucional.
 *
 * NEUTRALIDADE (período eleitoral de 2026): nenhum candidato, partido,
 * parlamentar ou autoridade é citado; interesses são categorias de análise,
 * não declarações atribuídas a grupos.
 *
 * DADOS FACTUAIS (planalto.gov.br ficou indisponível; fontes: Congresso
 * Nacional, Senado e Câmara):
 *   • MP 415, de 21/01/2008 (DOU 22/01): ementa "proíbe a comercialização de
 *     bebidas alcoólicas em rodovias federais" e altera o Código de Trânsito;
 *     60 dias, prorrogados por ato da Mesa de 27/03/2008 (06/02 a 04/06/2008).
 *   • Câmara aprova em 23/04/2008 (PLV 13/2008); a ficha não registra o voto do
 *     Senado, por isso a aula diz só que o Congresso "precisava convertê-la".
 *   • Lei 11.705, de 19/06/2008 (DOU 20/06): origem MPV 415; "veta
 *     parcialmente" (Mensagem 404/2008); altera o CTB e a Lei 9.294/1996.
 *   • STJ, março de 2012: REsp 1.111.566/DF, Terceira Seção, 28/03/2012 (ConJur;
 *     página do STJ não obtida). A aula descreve só o efeito prático (bafômetro
 *     ou exame de sangue como prova do crime) e NÃO atribui fundamento jurídico
 *     nem nomeia o órgão: nenhuma fonte lida confirma o fundamento no acórdão.
 *   • Lei 12.760, de 20/12/2012 (DOU 21/12): altera arts. 165, 262, 276, 277 e
 *     306 do CTB; art. 306, §2º, meios de prova e contraprova. Origem: PL
 *     5.607/2009 (PLC 27/2012 no Senado).
 *   • Reportagem de 12/12/2012 (Congresso em Foco) liga a mudança à decisão do
 *     STJ; o parecer do Senado não foi lido. A aula NÃO afirma nem nega a causa:
 *     separa a ordem dos fatos do motivo documentado.
 *   • Estudo de 2010 (Malta et al., Epidemiol. Serv. Saúde 19(4)): SIM;
 *     jul/2007-jun/2008 contra jul/2008-jun/2009; taxa padronizada -7,4%
 *     (país) e -11,8% (capitais); só o resumo foi lido.
 *   • STF: ADIs 4.017 e 4.103 (ficha da Câmara), julgadas em 2022. A aula só
 *     diz que a lei foi contestada no STF, fora do recorte.
 * FORA por falta de confirmação: voto do Senado na MP, fundamento jurídico do
 * STJ, parecer do Senado, limites numéricos de álcool, artigos constitucionais,
 * fatos posteriores a 2012.
 *
 * Título, subtítulo, descrição, vídeo e status ficam em `src/data/course.ts`.
 * Esta aula ainda não está publicada (`status: "em-preparacao"`).
 */
export const aula15Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de analisar um acontecimento político brasileiro identificando quem pode decidir, por qual caminho a decisão passa, que posições estão em jogo, que tipo de afirmação está sendo feita e quem será afetado, antes de decidir o que pensar sobre ele.",

  decisionInsight: {
    title: "O OLHAR DO PACO",
    image: null,
    hideImage: true,
    rounds: [
      {
        id: "dois-comentarios",
        question:
          "Em Pedra Alta, cidade fictícia, uma notícia diz: “Prefeitura anuncia reforma do terminal de ônibus.” Um morador comenta: “Finalmente! Vai resolver o trânsito do centro.” Outro responde: “Mais uma obra que não sai do papel.” Antes de concordar com um dos dois, qual pergunta ajuda mais?",
        options: [
          { id: "quem-tem-razao", label: "Qual dos dois comentários parece ter mais razão neste caso?" },
          { id: "curtidas", label: "Qual dos dois comentários recebeu mais curtidas e respostas?" },
          { id: "o-que-confere", label: "O que dá para conferir em documento, nos dois comentários?" },
          { id: "usa-terminal", label: "Qual dos dois moradores usa mais o terminal no dia a dia?" },
        ],
        reveal:
          "Começar por “quem tem razão” é escolher um lado antes de olhar. “Vai resolver” é uma previsão: só se confere depois da obra. “Mais uma obra” fala do passado, e isso dá para conferir: que obras foram anunciadas, e quais saíram? Curtidas medem alcance, e usar o terminal dá experiência, não prova.",
      },
      {
        id: "aprovada-e-agora",
        question:
          "A prefeitura informa que a Câmara de Vereadores aprovou a lei que destina verba à reforma, mas parte do dinheiro depende de um repasse do governo do estado, ainda não liberado. O que dá para dizer sobre a reforma?",
        options: [
          { id: "pode-comecar", label: "Pode começar já: o terminal é de responsabilidade da prefeitura" },
          { id: "etapa", label: "Cumpriu uma etapa: ainda falta o estado decidir sobre o repasse" },
          { id: "formalidade", label: "Está praticamente decidida: o repasse do estado é só formalidade" },
          { id: "cancelada", label: "Deve ser cancelada: o repasse do estado ainda não foi liberado" },
        ],
        reveal:
          "Anunciar, aprovar, liberar a verba e executar a obra são etapas diferentes, e podem ter responsáveis diferentes. Aqui, o município cumpriu a sua parte e o estado decide outra. Ser da responsabilidade da prefeitura não libera o dinheiro, e a etapa pendente também não encerra o assunto.",
      },
      {
        id: "quem-sente",
        question:
          "Durante a obra, o terminal ficará fechado por seis meses, e os ônibus vão parar em uma rua vizinha, com comércio e moradias. Para entender os efeitos da obra, qual pergunta ajuda mais?",
        options: [
          { id: "boa-ou-ruim", label: "Em resumo, a reforma é boa ou ruim para a cidade como um todo?" },
          { id: "competencia", label: "A prefeitura tem competência para fechar o terminal por seis meses?" },
          { id: "grupos", label: "Que grupos mudam de situação com a obra, onde e por quanto tempo?" },
          { id: "custo", label: "Quanto a obra vai custar e qual instituição vai pagar essa conta?" },
        ],
        reveal:
          "Os efeitos mudam com o grupo, o lugar e o tempo. O passageiro sente o fechamento durante a obra; o comerciante da rua vizinha pode ganhar movimento agora e perder depois; quem mora ali convive com o barulho. Essas perguntas têm nome. Vamos conhecê-las.",
      },
    ],
  },

  connection: {
    title: "DO LUGAR À DECISÃO",
    flow: ["Onde", "Que processo", "Quem decide", "Que caminho", "Que interesses", "O que se afirma", "Que efeitos"],
    highlight: "Cada pergunta acrescenta uma camada à leitura.",
    text: "Na Aula 13, você perguntou onde. Na Aula 14, de que processo o fato faz parte. Falta perguntar quem pode decidir, por qual caminho, o que se afirma, com que interesses e com que efeitos. A pergunta desta aula é: “Como analisar um acontecimento político antes de decidir o que pensar sobre ele?” As cinco perguntas não dizem o que pensar. Mostram o que olhar antes.",
  },

  lenses: {
    eyebrow: "Cinco perguntas para ler a decisão",
    title: "NOMEIE O QUE VOCÊ PRECISA OLHAR",
    subtitle:
      "Três perguntas entram agora: competência, caminho e afirmação. Duas retomam a Aula 14: interesses e, nas escalas, os efeitos.",
    items: [
      {
        id: "competencia",
        emoji: "🏛️",
        name: "COMPETÊNCIA",
        question: "Qual instituição pode decidir isso, e em qual nível: município, estado ou União?",
      },
      {
        id: "caminho",
        emoji: "🛣️",
        name: "CAMINHO",
        question: "Por qual caminho a decisão passa, e em que etapa ela está agora?",
      },
      {
        id: "afirmacao",
        emoji: "💬",
        name: "AFIRMAÇÃO",
        question: "O que está sendo dito, e que tipo de afirmação é essa?",
      },
      {
        id: "interesses",
        emoji: "🎯",
        name: "INTERESSES",
        question: "Quem participa e o que cada posição busca obter, preservar ou proteger?",
      },
      {
        id: "efeitos",
        emoji: "📏",
        name: "EFEITOS",
        question: "Quem é afetado, onde e quando?",
      },
    ],
    highlight:
      "Cada pergunta ilumina uma parte da decisão. A leitura vem das cinco juntas.",
    image: null,
    hideImage: true,
  },

  video: {
    title: "AGORA, VAMOS ANALISAR ANTES DE OPINAR",
    paragraphs: [
      "Você já tem as cinco perguntas. Agora vamos usá-las em um caso real e bem documentado: a Lei Seca, entre 2008 e 2012. Como as etapas estão registradas, dá para ver cada decisão e cada afirmação.",
      "Vamos ler cada passo e cada frase do caso, sem julgar a lei.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO ÀS CINCO PERGUNTAS",
    items: [
      {
        id: "competencia",
        name: "COMPETÊNCIA",
        conceito:
          "Competência é o poder que a lei dá a uma instituição para decidir sobre um assunto. Isso vale para os Poderes (Aula 12) e para os níveis da federação: município, estado e União (Aula 03). Quem anuncia pode não ser quem decide, e uma decisão pode depender de mais de uma instituição.",
        penseAssim:
          "Localize a decisão: qual instituição pode tomá-la, em qual nível, e se alguém mais precisa aprovar, liberar verba, regulamentar ou fiscalizar.",
        exemplo:
          "Uma prefeitura planeja a reforma de um terminal, mas parte da verba vem do estado. Liberar esse dinheiro é decisão de outra instituição.",
        naoConfunda:
          "Competência responde “quem pode decidir”, e não “se decidiu bem”. Essa segunda pergunta depende de evidências e de valores.",
        naProva:
          "Quando um enunciado diz que uma instituição anunciou e outra decide, a questão pode testar se você separa as duas.",
      },
      {
        id: "caminho",
        name: "CAMINHO",
        conceito:
          "Caminho é a sequência de etapas pelas quais uma decisão passa até produzir efeito. Anunciar, aprovar, entrar em vigor e produzir o efeito prometido são coisas diferentes, e uma etapa cumprida não garante a seguinte.",
        penseAssim:
          "Em que etapa está? O que já aconteceu, o que ainda falta e quem decide a próxima?",
        exemplo:
          "No terminal fictício, a Câmara de Vereadores aprovou a lei que destina verba à reforma, mas o repasse do estado ainda não saiu: uma etapa cumprida e outra pendente.",
        naoConfunda:
          "A ordem das etapas pode variar. No caso da Lei Seca, a medida provisória já valia antes de o Congresso decidir sobre ela.",
        naProva:
          "As palavras do enunciado marcam a etapa: “anunciou”, “aprovou”, “sancionou”, “entrou em vigor”. Cada uma é um momento diferente.",
      },
      {
        id: "afirmacao",
        name: "AFIRMAÇÃO",
        conceito:
          "Afirmação é o que alguém diz sobre um acontecimento. Na Aula 08, você separou dado, interpretação e opinião; aqui entram argumento e previsão. Fato: dá para conferir em documento ou registro. Interpretação: explica o que o fato significa. Argumento: defende uma conclusão com razões. Previsão: diz o que vai acontecer. Opinião: avalia, como “bom” ou “justo”.",
        penseAssim:
          "Cada tipo pede uma pergunta: dá para conferir? O que explica? Que razões apresenta? Em que se apoia? Que avaliação expressa?",
        exemplo:
          "Fato: o registro da Câmara mostra a lei aprovada. Previsão: um vereador diz que o trânsito vai melhorar. Interpretação: um jornal escreve que a aprovação mostra prioridade ao transporte. Argumento: um morador diz que a reforma deve ser feita, porque o terminal é antigo. Opinião: outro diz que é “a melhor escolha”.",
        naoConfunda:
          "Os cinco tipos não são uma escala de verdade: previsão e opinião não são piores que o fato, pedem outra pergunta. E “alguém disse” não é “aconteceu”: até um fato precisa ser conferido.",
        naProva:
          "Textos que misturam fato, previsão e opinião no mesmo parágrafo costumam pedir que você os separe.",
      },
      {
        id: "interesses",
        name: "INTERESSES",
        conceito:
          "Interesse é o que uma pessoa, um grupo ou uma instituição busca obter, preservar ou proteger em uma decisão. É a ferramenta da Aula 14, agora aplicada a decisões políticas. Na mesma decisão, aparecem interesses diferentes.",
        penseAssim:
          "Liste as posições antes de julgá-las: quem participa dessa decisão e o que cada posição busca?",
        exemplo:
          "Numa obra pública, o comerciante quer movimento, o passageiro quer rapidez, a prefeitura quer cumprir o prazo e o fiscal quer que as regras sejam seguidas.",
        naoConfunda:
          "Ter interesse não é agir de má-fé: fiscalizar e proteger direitos também são interesses. Identificar interesses ajuda a entender posições, e não serve para acusar.",
        naProva:
          "Cuidado com alternativas que atribuem a um grupo uma intenção que o texto não menciona.",
      },
      {
        id: "efeitos",
        name: "EFEITOS",
        conceito:
          "Efeito é o que muda na vida de pessoas e lugares depois de uma decisão. Aparece em escalas diferentes (bairro, cidade, estado, país) e em prazos diferentes. Efeito prometido é expectativa; efeito produzido precisa ser medido.",
        penseAssim:
          "Quem é afetado, onde e quando? E, se alguém fala em resultado: qual efeito foi medido, em qual período, em qual lugar e com qual evidência?",
        exemplo:
          "A reforma de um terminal pode agilizar a viagem de quem usa o ônibus e, durante as obras, reduzir o movimento do comércio do entorno.",
        naoConfunda:
          "Aprovar uma lei não prova que ela produziu efeito. Uma queda depois da lei não prova que a lei a causou: outras mudanças podem ter ocorrido. Um estudo é evidência, não sentença.",
        naProva:
          "Quando o enunciado mostra uma queda ou um aumento depois de uma medida, a questão pode pedir que você reconheça a sequência sem afirmar a causa.",
      },
    ],
  },

  deepDive: {
    title: "A LEI SECA, ENTRE 2008 E 2012",
    items: [
      {
        id: "medida-provisoria",
        title: "Da medida provisória à lei",
        content:
          "A Medida Provisória 415, de 21 de janeiro de 2008, proibia a venda de bebidas alcoólicas em rodovias federais e acrescentava uma regra ao Código de Trânsito. Valia desde a publicação, mas por até 120 dias: nesse prazo, o Congresso precisava convertê-la em lei, ou ela perderia a validade. A conversão veio na Lei 11.705, de 19 de junho de 2008, com mudanças no texto e vetos do Executivo a alguns pontos. Essa lei, conhecida como Lei Seca, trouxe também regras para quem dirige. O Executivo editou a MP e sancionou a lei; ao Congresso coube decidir sobre ela.",
        flow: ["Editada", "Em vigor", "No Congresso", "Convertida em lei"],
        highlight: "A MP vale antes de virar lei, e a lei pode sair diferente da MP.",
      },
      {
        id: "judiciario-e-nova-lei",
        title: "Aconteceu depois, ou aconteceu por causa de?",
        content:
          "Em março de 2012, o STJ decidiu que, para provar o crime de embriaguez ao volante, nos termos da lei da época, só valiam o bafômetro ou o exame de sangue. Em 20 de dezembro de 2012, a Lei 12.760 alterou o Código de Trânsito e passou a prever outros meios de prova, como perícia e prova testemunhal, com direito à contraprova. O projeto dessa lei existia desde 2009. A ordem dos fatos é clara: a decisão veio antes da lei. Dizer que a lei mudou por causa da decisão é uma interpretação, e precisa de registros do próprio projeto, como justificativas e pareceres.",
        flow: ["Projeto apresentado (2009)", "Decisão do STJ (mar. 2012)", "Lei 12.760 (dez. 2012)", "Relação: precisa de registro"],
        highlight: "A sequência mostra a ordem; o motivo exige registro.",
      },
      {
        id: "qual-efeito",
        title: "Qual efeito, em qual período, em qual lugar, com qual evidência?",
        content:
          "“A lei funcionou?” é uma pergunta pequena para o tamanho do assunto. Um estudo de 2010 comparou os 12 meses antes da Lei 11.705 (julho de 2007 a junho de 2008) com os 12 meses depois (julho de 2008 a junho de 2009), com dados do Sistema de Informações sobre Mortalidade. A taxa de mortes por acidentes de trânsito caiu 7,4% no país e 11,8% nas capitais. Sozinho, esse resultado não mostra quanto da queda se deve à lei, e os autores recomendam outros estudos. Como na Aula 08, importam o dado, a fonte e o período comparado.",
        flow: ["Qual efeito", "Qual período", "Qual lugar", "Qual evidência"],
        highlight: "Uma queda depois da lei ainda não é o efeito da lei.",
      },
    ],
    closing:
      "Nesse caso, as posições podem ser lidas por categorias de análise: segurança viária, atividade econômica, fiscalização e direitos individuais. Não são falas de grupos. O caso termina em 2012; a contestação da lei no STF fica fora do recorte.",
  },

  brazilConnections: {
    title: "UMA LEI, TRÊS LEITURAS",
    question: "O que cada aula acrescenta à leitura do mesmo caso?",
    center: "LEI SECA",
    items: [
      {
        id: "aula-13",
        label: "AULA 13: ONDE E POR QUE AQUI?",
        description:
          "A queda observada foi de 7,4% no país e de 11,8% nas capitais: o mesmo período, medido em duas escalas, deu dois números. Ler o resultado exige dizer em que escala ele vale.",
      },
      {
        id: "aula-14",
        label: "AULA 14: DE QUE PROCESSO ISSO FAZ PARTE?",
        description:
          "O Código de Trânsito, de 1997, foi alterado pela Lei Seca, em 2008, e pela Lei 12.760, em 2012, cujo projeto é de 2009. Quem lê uma data vê um episódio; quem lê todas vê o processo.",
      },
      {
        id: "aula-15",
        label: "AULA 15: QUEM DECIDE E COMO AVALIAR O QUE SE DIZ?",
        description:
          "Cada etapa teve uma instituição: o Executivo editou a MP, o Congresso a converteu em lei, o STJ decidiu sobre a prova do crime e, em 2012, uma nova lei mudou o texto. Ler o caso é separar quem decidiu o quê, e em qual etapa.",
      },
      {
        id: "em-aberto",
        label: "O QUE CONTINUA EM ABERTO",
        description:
          "Se a lei valeu a pena depende de evidências e de valores. Essa discussão continua depois da aula, com as cinco perguntas na mão.",
      },
    ],
    study:
      "As três leituras se somam. Grupos com interesses e prioridades diferentes podem avaliar a lei de modos diferentes, e isso é esperado. O que dá para verificar, como datas, textos de lei e o que o estudo mediu, não muda com a opinião.",
    highlight:
      "O território mostra onde. O processo mostra por quê. A instituição mostra quem pode agir.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: ["Texto sobre decisão pública", "Trecho de lei ou documento", "Notícia com declarações", "Gráfico ou pesquisa"],
    demandsTitle: "A questão cobra",
    demands: ["Quem decide e em qual etapa", "Tipo de afirmação", "Interesses em jogo", "Efeitos e escalas"],
    highlight:
      "O enunciado costuma misturar instituição, etapa, fala e efeito. O trabalho é separar cada um.",
    guidingIntro: "Diante de um acontecimento político, pergunte:",
    guidingQuestions: [
      "Quem pode decidir isso, e em qual nível?",
      "Em que etapa está, e o que ainda falta acontecer?",
      "O que é fato, interpretação, argumento, previsão ou opinião?",
      "Que posições e interesses estão em jogo?",
      "Quem é afetado, onde e quando?",
    ],
  },

  question: {
    id: "s05-a15-q01",
    statement:
      "No estado fictício de Vale Seco, o governo estadual enviou à Assembleia Legislativa um projeto de lei que cria um programa de crédito para pequenos produtores da região Alto Rio, a ser operado pelo banco do estado. A Assembleia aprovou o projeto. Um deputado estadual, que participou da votação, declarou: “O texto aprovado destina R$ 80 milhões ao crédito, e esse dinheiro eleva a renda dos produtores do Alto Rio.” O sindicato dos produtores do Alto Rio elogiou a medida; uma associação de moradores da região Costa Sul criticou a prioridade dada à outra região. Antes de formar uma opinião, a leitura mais bem sustentada pelas informações e pelos conceitos da aula é que",
    options: [
      {
        id: "A",
        text: "a Assembleia decidiu o programa, e a etapa que ainda falta é a execução pelo banco do estado; por isso, a quantia citada pelo deputado se verifica na lei aprovada, ao passo que a alta da renda é uma expectativa, e o apoio do sindicato e a crítica da associação traduzem o que cada região deseja, e não o efeito alcançado.",
      },
      {
        id: "B",
        text: "a Assembleia cumpriu uma etapa, e o programa ainda depende de decisões do governo estadual e do banco; por isso, o valor destinado pode ser conferido no texto aprovado, mas o aumento da renda é um efeito esperado, ainda não medido, e o elogio e a crítica mostram o que cada região espera, e não o que o programa produziu.",
      },
      {
        id: "C",
        text: "a aprovação na Assembleia define o programa, e as etapas que restam são de execução; por isso, a fala do deputado é uma previsão sobre o futuro, que pode ser conferida quando o programa estiver em funcionamento, e o elogio do sindicato e a crítica da associação indicam quem ganha e quem perde, o que mostra o efeito em cada região.",
      },
      {
        id: "D",
        text: "falta a sanção do governador, e a partir dela o programa passa a valer e a produzir os efeitos prometidos; por isso, a fala do deputado é um fato, pois cita um valor que consta no texto aprovado, e as posições do sindicato e da associação indicam prioridades de cada região, e não resultados medidos.",
      },
      {
        id: "E",
        text: "a aprovação é uma etapa cumprida, e outras instituições ainda precisam decidir antes de o crédito chegar aos produtores; por isso, a declaração do deputado é uma previsão, que poderá ser avaliada depois que o programa funcionar, e o elogio e a crítica revelam as prioridades de cada região, e não resultados.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "A alternativa B está correta, porque combina quatro leituras. Competência e caminho: a Assembleia cumpriu uma etapa, mas a aprovação legislativa ainda não significa que o programa esteja em execução: há etapas institucionais posteriores, como a sanção, e o crédito depende do banco; por isso, o efeito ainda não foi produzido. Afirmação: a fala do deputado junta o valor destinado, que se confere no texto aprovado, e o aumento da renda, que é um efeito esperado. Interesses e efeitos: elogio e crítica mostram o que cada região espera, não o que o programa produziu. A e C dão a decisão por encerrada. C, além disso, trata a fala toda como previsão e as posições como efeito. D confunde entrar em vigor com produzir efeito e toma a fala por fato. E trata a fala toda como previsão, embora o valor se confira.",
  },

  missionCheck:
    "Voltemos à pergunta desta aula: como analisar um acontecimento político antes de decidir o que pensar sobre ele? Agora você consegue perguntar quem pode decidir, por qual caminho a decisão passa, que posições estão em jogo, que tipo de afirmação está sendo feita e quem será afetado?",

  completionMessage:
    "Antes de decidir o que pensar, pergunte quem decide, por qual caminho, com que interesses, o que se afirma e quem será afetado. As cinco perguntas não escolhem por você. Deixam sua escolha mais bem informada.",
};
