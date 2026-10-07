import type { LessonContent } from "@/lib/types";

/**
 * AULA 15 — COMO INTERPRETAR A POLÍTICA BRASILEIRA SEM TRANSFORMÁ-LA EM TORCIDA
 * Semana 05 • Política & Cidadania (COMPREENDA)
 *
 * Ideia central: antes de decidir o que pensar sobre um acontecimento político,
 * o aluno o analisa com cinco perguntas: COMPETÊNCIA, CAMINHO, AFIRMAÇÃO,
 * INTERESSES e EFEITOS. A aula não diz o que pensar; mostra o que olhar antes.
 * Pergunta-guia (abre e fecha a aula): "Como analisar um acontecimento político
 * antes de decidir o que pensar sobre ele?"
 * Progressão: Aula 13 (onde e por que aqui?) → Aula 14 (de que processo isso
 * faz parte?) → Aula 15 (quem decide, por qual caminho, como avaliar o que se diz?).
 * Treino (abertura e questão final) é fictício; o único caso real é a Lei Seca
 * (2008 a 2012), no deepDive, usado só para mostrar o caminho institucional.
 *
 * NEUTRALIDADE (período eleitoral de 2026): nenhum candidato, partido,
 * parlamentar ou autoridade é citado; interesses são categorias de análise,
 * não declarações atribuídas a grupos.
 *
 * DADOS FACTUAIS (verificados em textos oficiais; planalto.gov.br ficou
 * indisponível, então foram lidos no Senado e na Câmara):
 *   • MP 415, de 21/01/2008 (Senado, texto da norma): proíbe a comercialização
 *     de bebidas alcoólicas em rodovias federais e acresce dispositivo ao
 *     Código de Trânsito; art. 7º: vigência na data da publicação.
 *   • Congresso Nacional (ficha): Câmara aprova em 23/04/2008 na forma do PLV
 *     13/2008; não há votação do Senado registrada, por isso a aula diz só
 *     "após apreciação pelo Congresso". Regras da MP (até 120 dias, perda de
 *     validade): Câmara, "Entenda o processo legislativo".
 *   • Lei 11.705, de 19/06/2008 (DOU de 20/06): veto parcial; a ementa altera
 *     o Código de Trânsito e a Lei 9.294/1996 "para inibir o consumo de bebida
 *     alcoólica por condutor de veículo automotor".
 *   • STJ, março de 2012 (notícia do STJ; o órgão julgador não é citado
 *     porque as fontes divergem).
 *   • Lei 12.760, de 20/12/2012 (publicação original, via Câmara): altera os
 *     arts. 165, 262, 276, 277 e 306 do CTB; art. 306, §2º, meios de prova e
 *     contraprova. Projeto de origem: PL 5.607/2009.
 *   • Estudo de 2010 (resumo): SIM; jul/2007 a jun/2008 contra jul/2008 a
 *     jun/2009; taxa padronizada -7,4% (país) e -11,8% (capitais); texto
 *     integral não lido.
 * FORA por falta de confirmação: votação no Senado da MP, desfecho das ADIs no
 * STF, limites numéricos de álcool, artigos constitucionais, fatos posteriores
 * a 2012.
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
          { id: "quem-tem-razao", label: "Qual dos dois comentários parece ter mais razão?" },
          { id: "o-que-confere", label: "O que, nessa notícia, dá para conferir em documento ou registro?" },
          { id: "curtidas", label: "Qual dos dois comentários teve mais curtidas e respostas?" },
          { id: "quem-mora-perto", label: "Qual dos dois moradores vive mais perto do terminal?" },
        ],
        reveal:
          "Começar por “quem tem razão” é escolher um lado antes de olhar. Os dois comentários falam do futuro (“vai resolver”, “não sai do papel”), e isso não dá para conferir hoje. Dá para conferir o que já aconteceu: a reforma foi só anunciada? Foi aprovada? Tem verba? Curtidas medem alcance, não veracidade, e morar perto dá uma posição, não uma prova.",
      },
      {
        id: "aprovada-e-agora",
        question:
          "A prefeitura informa que a Câmara de Vereadores aprovou o projeto da reforma, mas a verba depende de um repasse do governo do estado, ainda não liberado. O que dá para dizer sobre a reforma?",
        options: [
          { id: "garantida", label: "Está garantida, porque a Câmara já aprovou o projeto" },
          { id: "etapa", label: "Cumpriu uma etapa e ainda depende de uma decisão do estado" },
          { id: "sem-futuro", label: "Não vai sair, porque o repasse ainda não foi liberado pelo estado" },
          { id: "em-andamento", label: "Está em andamento, porque a prefeitura já anunciou a reforma" },
        ],
        reveal:
          "Anunciar, aprovar, liberar a verba e executar a obra são etapas diferentes, e podem ter responsáveis diferentes. Aqui, a cidade decidiu uma parte e o estado decide outra. Etapa cumprida não garante a seguinte, e etapa pendente também não encerra o assunto.",
      },
      {
        id: "quem-sente",
        question:
          "Durante a obra, o terminal ficará fechado por seis meses. Quem será afetado, e como?",
        options: [
          { id: "passageiros", label: "Os passageiros, que perdem o ponto de embarque durante a obra" },
          { id: "varios", label: "Passageiros, comerciantes e prefeitura, cada um de um modo, e alguns efeitos só depois" },
          { id: "moradores", label: "Os moradores do bairro, por causa do barulho e da poeira da obra" },
          { id: "depende-opiniao", label: "Depende de achar a reforma boa ou ruim para a cidade" },
        ],
        reveal:
          "Cada grupo ocupa um lugar diferente na mesma decisão: o passageiro quer rapidez, o comerciante quer movimento, a prefeitura quer concluir a obra. Ter interesse não é agir de má-fé. E os efeitos mudam com o lugar e com o tempo. Essas perguntas têm nome. Vamos conhecê-las.",
      },
    ],
  },

  connection: {
    title: "DO LUGAR À DECISÃO",
    flow: ["Onde", "Que processo", "Quem decide", "Que caminho", "Que interesses", "O que se afirma", "Que efeitos"],
    highlight: "Primeiro entender. Depois opinar.",
    text: "Você já sabe perguntar onde isso acontece e por que ali (Aula 13), e de que processo mais longo o fato faz parte (Aula 14). Falta perguntar quem pode decidir, por qual caminho, com que interesses e como avaliar o que está sendo dito. A pergunta desta aula é: “Como analisar um acontecimento político antes de decidir o que pensar sobre ele?” As cinco perguntas não dizem o que pensar. Mostram o que olhar antes.",
  },

  lenses: {
    eyebrow: "Cinco perguntas antes de opinar",
    title: "NOMEIE O QUE VOCÊ PRECISA OLHAR",
    subtitle:
      "Três perguntas são novas: competência, caminho e afirmação. Duas você já usa desde a Aula 14: interesses e efeitos.",
    items: [
      {
        id: "competencia",
        emoji: "🏛️",
        name: "COMPETÊNCIA",
        question: "Quem pode decidir isso, e em qual nível: município, estado ou União?",
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
      "As cinco perguntas não tiram sua liberdade de discordar. Dão mais informação para isso.",
    image: null,
    hideImage: true,
  },

  video: {
    title: "AGORA, VAMOS ANALISAR ANTES DE OPINAR",
    paragraphs: [
      "Você já tem as cinco perguntas. Agora vamos usá-las em um caso real e bem documentado: a Lei Seca, entre 2008 e 2012. Como as etapas estão registradas, dá para ver cada decisão e cada afirmação.",
      "A pergunta não é se a lei foi boa ou ruim. É como ler cada passo e cada frase antes de formar uma opinião.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO ÀS CINCO PERGUNTAS",
    items: [
      {
        id: "competencia",
        name: "COMPETÊNCIA",
        conceito:
          "Competência é o poder que a lei dá a uma instituição para decidir sobre um assunto. Na Aula 12, você viu que cada Poder tem uma função; prefeituras, estados e União também têm competências diferentes. Quem anuncia pode não ser quem decide, e uma decisão pode depender de mais de uma instituição.",
        penseAssim:
          "Pergunte: quem pode decidir isso e em qual nível? Alguém mais precisa aprovar, liberar verba, regulamentar ou fiscalizar?",
        exemplo:
          "Uma prefeitura planeja a reforma de um terminal, mas a verba vem do estado. Liberar o dinheiro é decisão de outra instituição.",
        naoConfunda:
          "Poder decidir não é o mesmo que decidir bem. A competência responde “quem pode”. Se a decisão foi boa ou ruim é outra pergunta, que depende de evidências e de valores.",
        naProva:
          "Fique atento a enunciados em que uma instituição anuncia e outra decide: a questão pode testar se você separa quem anuncia de quem pode decidir.",
      },
      {
        id: "caminho",
        name: "CAMINHO",
        conceito:
          "Caminho é a sequência de etapas pelas quais uma decisão passa até produzir efeito. Anunciar, aprovar, entrar em vigor e produzir o efeito prometido são coisas diferentes, e uma etapa cumprida não garante a seguinte.",
        penseAssim:
          "Pergunte: em que etapa está? O que já aconteceu, o que ainda falta e quem decide a próxima etapa?",
        exemplo:
          "No terminal fictício, a Câmara de Vereadores aprovou o projeto, mas a verba ainda depende do estado: uma etapa cumprida e outra pendente.",
        naoConfunda:
          "A ordem das etapas pode variar. No caso da Lei Seca, a medida provisória já valia antes de o Congresso apreciá-la.",
        naProva:
          "Fique atento às palavras do enunciado: “anunciou”, “aprovou”, “sancionou”, “entrou em vigor”. Cada uma marca uma etapa diferente.",
      },
      {
        id: "afirmacao",
        name: "AFIRMAÇÃO",
        conceito:
          "Afirmação é o que alguém diz sobre um acontecimento. Há cinco tipos. Fato: pode ser conferido em documento, registro ou medição. Interpretação: explica o que o fato significa ou por que ocorreu. Argumento: defende uma conclusão com razões. Previsão: diz o que vai acontecer. Opinião: expressa uma avaliação, como “bom” ou “justo”.",
        penseAssim:
          "Cada tipo pede uma pergunta. Fato: é verificável? Interpretação: como o fato é explicado? Argumento: que conclusão se defende, com quais razões? Previsão: em que evidências e premissas se apoia? Opinião: que avaliação se expressa?",
        exemplo:
          "“A Câmara aprovou o projeto” é um fato. “A cidade quer melhorar o transporte” é uma interpretação. “Como o terminal é antigo, a reforma deve ser feita” é um argumento. “O trânsito vai melhorar” é uma previsão. “É a melhor escolha” é uma opinião.",
        naoConfunda:
          "Os cinco tipos não formam uma escala do mais ao menos verdadeiro: previsão e opinião não são piores que o fato, pedem outra pergunta. Também não confunda: alguém afirmar que algo ocorreu não prova que ocorreu, e uma frase compartilhada por muita gente não fica mais verdadeira por isso.",
        naProva:
          "Fique atento a textos que misturam fato, previsão e opinião no mesmo parágrafo. A questão pode pedir que você os separe.",
      },
      {
        id: "interesses",
        name: "INTERESSES",
        conceito:
          "Interesse é o que uma pessoa, um grupo ou uma instituição busca obter, preservar ou proteger em uma decisão. Na mesma decisão podem aparecer interesses diferentes. Governo e oposição são papéis no processo político.",
        penseAssim:
          "Pergunte: quem participa dessa decisão e o que cada posição busca? Responda isso antes de perguntar se você concorda.",
        exemplo:
          "Em uma obra pública, o comerciante do entorno quer movimento, o passageiro quer rapidez, a prefeitura quer cumprir o prazo e o fiscal quer que as regras sejam seguidas.",
        naoConfunda:
          "Ter interesse não é agir de má-fé: fiscalizar e proteger direitos também são interesses. Identificar interesses é uma ferramenta de leitura, não uma acusação, e ajuda a entender posições, não a decidir quem é bom ou mau.",
        naProva:
          "Fique atento a alternativas que atribuem a um grupo uma intenção que o texto não menciona.",
      },
      {
        id: "efeitos",
        name: "EFEITOS",
        conceito:
          "Efeito é o que muda, depois de uma decisão, na vida de pessoas e lugares. Os efeitos aparecem em escalas diferentes (bairro, cidade, estado, país) e em prazos diferentes. Um efeito prometido é uma expectativa. O efeito produzido precisa ser medido.",
        penseAssim:
          "Pergunte: quem é afetado, onde e quando? E, se alguém fala em resultado: qual efeito está sendo medido, em qual período, em qual lugar e com qual evidência?",
        exemplo:
          "A reforma de um terminal pode agilizar a viagem de quem usa o ônibus e, durante as obras, reduzir o movimento do comércio do entorno.",
        naoConfunda:
          "Aprovar uma lei não prova que ela produziu efeito. Uma queda depois da lei não prova que a lei a causou: outras mudanças podem ter ocorrido no período. Um estudo é evidência, não sentença definitiva.",
        naProva:
          "Fique atento a enunciados que mostram uma queda ou um aumento depois de uma medida. A questão pode pedir que você reconheça a sequência sem afirmar a causa.",
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
          "A Medida Provisória 415, de 21 de janeiro de 2008, proibia a venda de bebidas alcoólicas em rodovias federais e acrescentava um dispositivo ao Código de Trânsito. Entrou em vigor na data da publicação, mas valia por até 120 dias: o Congresso precisava aprová-la nesse prazo, ou ela perderia a validade. Após apreciação pelo Congresso, foi convertida na Lei 11.705, de 19 de junho de 2008, com alterações e veto parcial. Foi essa lei que consolidou o marco mais amplo conhecido como Lei Seca, com regras também para quem dirige. O Executivo editou a MP e sancionou a lei; ao Congresso coube apreciá-la.",
        flow: ["Editada", "Em vigor", "Apreciada pelo Congresso", "Convertida em lei"],
        highlight: "A MP vale antes de virar lei, e a lei pode sair diferente da MP.",
      },
      {
        id: "judiciario-e-nova-lei",
        title: "O Judiciário interpreta, o Congresso muda o texto",
        content:
          "Em março de 2012, o STJ consolidou, naquele contexto normativo, o entendimento de que o crime de embriaguez ao volante exigia bafômetro ou exame de sangue e de que o motorista não poderia ser obrigado a fazê-los, em razão do princípio da não autoincriminação. Em 20 de dezembro de 2012, a Lei 12.760 alterou o Código de Trânsito, e seu art. 306 passou a prever a verificação por teste de alcoolemia, exame clínico, perícia, vídeo, prova testemunhal ou outros meios de prova admitidos, com direito à contraprova. O projeto tramitava desde 2009, e ter ocorrido no mesmo ano não prova que uma coisa causou a outra.",
        highlight: "Cada Poder decide uma parte da história.",
      },
      {
        id: "qual-efeito",
        title: "Qual efeito, em qual período, em qual lugar, com qual evidência?",
        content:
          "“A lei funcionou?” é uma pergunta pequena para o tamanho do assunto. Um estudo de 2010, com dados do Sistema de Informações sobre Mortalidade, comparou os 12 meses antes da Lei 11.705 (julho de 2007 a junho de 2008) com os 12 meses depois (julho de 2008 a junho de 2009) e observou queda de 7,4% na taxa de mortes no trânsito do país e de 11,8% nas capitais. Esse resultado, sozinho, não permite concluir que toda a mudança foi causada pela lei, e os autores recomendam outros estudos para avaliar melhor o impacto. Como na Aula 08, importam o dado, a fonte e o recorte.",
        flow: ["Qual efeito", "Qual período", "Qual lugar", "Qual evidência"],
        highlight: "Depois da lei não é o mesmo que por causa da lei.",
      },
    ],
    closing:
      "Para ler o caso, as posições em jogo podem ser organizadas em categorias de análise: segurança viária, atividade econômica, fiscalização e direitos individuais. São categorias para ler o conflito, não declarações atribuídas a grupos. A aula acompanha o caso até 2012; o que veio depois não faz parte do percurso analisado.",
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
          "A medida provisória tratou de rodovias federais, parte da rede por onde o país circula. O estudo encontrou queda diferente no país e nas capitais. O lugar muda a leitura.",
      },
      {
        id: "aula-14",
        label: "AULA 14: DE QUE PROCESSO ISSO FAZ PARTE?",
        description:
          "A Lei Seca não foi um ponto isolado. O Código de Trânsito, de 1997, foi alterado pelas leis de 2008 e de 2012. Cada mudança é um capítulo de uma história mais longa.",
      },
      {
        id: "aula-15",
        label: "AULA 15: QUEM DECIDE E COMO AVALIAR O QUE SE DIZ?",
        description:
          "O Executivo editou, o Congresso apreciou e converteu em lei, o STJ interpretou e o Congresso alterou o texto em 2012. Em cada etapa, dá para identificar posições diferentes e frases de tipos diferentes sobre o que a lei faria ou fez.",
      },
      {
        id: "em-aberto",
        label: "O QUE CONTINUA EM ABERTO",
        description:
          "Se a lei valeu a pena depende de evidências e de valores. As cinco perguntas organizam a conversa. Elas não decidem por você.",
      },
    ],
    study:
      "As três leituras se somam. Pessoas com opiniões diferentes podem fazer as mesmas perguntas e chegar a conclusões diferentes. O que importa é que todas saibam do que estão falando.",
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
      "A prova não pede sua opinião política. Pede sua capacidade de analisar.",
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
      "No estado fictício de Vale Seco, o governo estadual anunciou um programa de crédito para pequenos produtores da região Alto Rio. A Assembleia Legislativa aprovou o projeto. Um deputado estadual, autor do projeto, declarou que, com o programa, “a renda dos produtores vai dobrar”. O sindicato dos produtores do Alto Rio elogiou a iniciativa. Uma associação de moradores da região Costa Sul criticou a prioridade dada à outra região. Para formar uma opinião sobre o programa, a leitura mais adequada dessa situação é",
    options: [
      {
        id: "A",
        text: "tratar a aprovação como uma etapa do caminho, pois o programa depende de outras decisões para valer; a fala do deputado como um fato, pois quem escreveu o projeto conhece os efeitos que ele terá; e o elogio e a crítica como posições de grupos afetados de modos diferentes, pois revelam interesses sem medir efeitos.",
      },
      {
        id: "B",
        text: "tratar a aprovação como o início do programa, pois o Legislativo é quem decide se ele passa a valer; a fala do deputado como uma previsão, pois trata do futuro e exige conferência com evidências; e o elogio e a crítica como posições de grupos afetados de modos diferentes, pois revelam interesses sem medir efeitos.",
      },
      {
        id: "C",
        text: "tratar a aprovação como uma etapa do caminho, pois o programa depende de outras decisões para valer; a fala do deputado como uma previsão, pois trata do futuro e exige conferência com evidências; e o elogio e a crítica como posições de grupos afetados de modos diferentes, pois revelam interesses sem medir efeitos.",
      },
      {
        id: "D",
        text: "tratar a aprovação como uma etapa do caminho, pois o programa depende de outras decisões para valer; a fala do deputado como uma previsão, pois trata do futuro e exige conferência com evidências; e o elogio e a crítica como medidas do efeito no estado, pois reúnem quem apoia e quem critica o programa em disputa.",
      },
      {
        id: "E",
        text: "tratar a aprovação como o início do programa, pois o Legislativo é quem decide se ele passa a valer; a fala do deputado como um fato, pois quem escreveu o projeto conhece os efeitos que ele terá; e o elogio e a crítica como posições que se anulam, pois cada grupo defende o próprio interesse e o resultado é um empate.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "A alternativa C está correta, porque exige três leituras ao mesmo tempo. Primeiro, a aprovação na Assembleia é uma etapa do caminho: ainda podem faltar passos, como a sanção e a regulamentação, até o programa funcionar e produzir efeito. Segundo, a frase do deputado é uma previsão: fala do futuro e precisa de evidências que possam ser conferidas, e o fato de vir do autor do projeto não a transforma em fato. Terceiro, o elogio do sindicato e a crítica da associação mostram interesses de grupos afetados de modos diferentes, mas não medem o efeito do programa no estado. Cada outra alternativa erra em pelo menos um desses pontos. A trata a fala do autor como fato. B confunde aprovação com início do programa. D toma duas manifestações como medida do efeito no estado. E soma três erros: confunde aprovação com início, trata a fala do autor como fato e supõe que interesses diferentes se anulam, quando identificar interesses é o ponto de partida para entender as posições.",
  },

  missionCheck:
    "Voltemos à pergunta do início: como analisar um acontecimento político antes de decidir o que pensar sobre ele? Agora você consegue perguntar quem pode decidir, por qual caminho a decisão passa, que posições estão em jogo, que tipo de afirmação está sendo feita e quem será afetado, antes de perguntar de que lado está?",

  completionMessage:
    "Antes de decidir o que pensar, pergunte quem decide, por qual caminho, com que interesses, o que se afirma e quem será afetado. As cinco perguntas não escolhem por você. Deixam sua escolha mais bem informada.",
};
