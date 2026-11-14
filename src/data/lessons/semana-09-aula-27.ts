import type { LessonContent } from "@/lib/types";

/**
 * AULA 27 — CIDADANIA, IDENTIDADE E PERTENCIMENTO
 * Semana 09 • Política & Cidadania (COMPREENDA) — FRONTEIRAS, FLUXOS E PERTENCIMENTO
 *
 * Pergunta-guia (abre e fecha a aula): "O que faz pessoas que vivem no
 * mesmo lugar terem condições e vínculos diferentes com ele?" Operação:
 * LUGAR → NACIONALIDADE → STATUS → DIREITOS → VÍNCULOS VIVIDOS →
 * PERTENCIMENTO. Ideias centrais: mesmo endereço ≠ mesma condição jurídica;
 * mesmo status ≠ mesmo pertencimento.
 * Ferramenta: "Leia um vínculo territorial em seis passos" (`application`).
 * Cinco lentes: condição jurídica e direitos; nacionalidade; pedir proteção
 * × condição reconhecida; apatridia; territorialidade, identidade e
 * pertencimento.
 * Progressão da semana: Aula 25 (a fronteira) → Aula 26 (a trajetória) →
 * Aula 27 (a permanência e o vínculo). Inês, que chegou a Vila Lavra na
 * Aula 26, é uma das quatro moradoras.
 * REPETIÇÃO EVITADA: Estado, país, nação e soberania (Aula 03); cidadania e
 * nacionalidade ≠ cidadania (Aula 06), usadas como premissas; refugiado ×
 * deslocado interno (Aula 11); trajetória e redes (Aula 26); Schengen
 * (Aula 25) só como contraste com a cidadania da União.
 * Cuidados: a aula é de Geografia Política, não de Direito: cada lente
 * jurídica fica ancorada num morador, com no máximo uma referência legal.
 * A comunidade ribeirinha de Tomás é fictícia e não representa povo
 * indígena. O nome Tomás substitui "Davi" para não repetir o personagem da
 * Aula 21. Tomás, Samir, Lúcia e a comunidade do Itaúba são fictícios.
 *
 * IMAGEM PLANEJADA (ainda não existe; o site mostra o placeholder):
 * /public/assets/aulas/semana-09-aula-27-vila-lavra.png, proporção 16:9.
 *
 * FONTES (conferidas em 14/11/2026):
 *   • Nacionalidade: Constituição Federal, art. 12 (natos: nascidos no
 *     Brasil, salvo filhos de estrangeiros a serviço de seu país; e, em
 *     hipóteses previstas, nascidos no exterior de pai ou mãe brasileiros).
 *   • Refúgio: Ministério da Justiça e Segurança Pública; Conare; Lei nº
 *     9.474/1997 (inclui hipótese ligada a grave e generalizada violação de
 *     direitos humanos). Solicitante: autorização provisória de residência,
 *     situação migratória regular, acesso a documentos e serviços previstos
 *     em lei. Reconhecido pelo Conare: residência por prazo indeterminado,
 *     possibilidade de obter a CRNM.
 *   • Apatridia: Convenção de 1954; Lei nº 13.445/2017 e Decreto nº
 *     9.199/2017; Ministério da Justiça; ACNUR. No Brasil, há procedimento
 *     de reconhecimento, que possibilita regularização migratória, e
 *     condições facilitadas de naturalização, sujeitas a requisitos.
 *   • Cidadania da União: art. 20 do Tratado sobre o Funcionamento da UE
 *     (EUR-Lex; Comissão Europeia): cidadania adicional à nacional.
 *   • Guarani: Mapa Guarani Continental; Instituto Socioambiental:
 *     presença em Brasil, Paraguai, Argentina e Bolívia. Sem números.
 *
 * Aula em preparação (`course.ts` ainda não cadastra a Semana 09).
 */
export const aula27Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de comparar pessoas que vivem no mesmo lugar, distinguindo condição jurídica, direitos e procedimentos, e reconhecendo que o vínculo vivido com um território não se resume a um documento.",

  observation: {
    title: "O OLHAR DO PACO",
    lines: [
      "Numa mesma rua de Vila Lavra, em Albor, vivem quatro pessoas. Tomás nasceu ali e é nacional de Albor; sua família pertence a uma comunidade ribeirinha do Rio Itaúba, com parentes e costumes nas duas margens. Inês, que conhecemos na Aula 26, é nacional de Oriana, tem autorização de residência em Albor e, depois de alguns anos, diz sentir-se parte de Vila Lavra. Samir pediu o reconhecimento da condição de refugiado e aguarda a decisão, com um documento provisório. Lúcia não é considerada nacional por nenhum Estado, e Albor reconheceu sua condição de apátrida.",
      "Todos têm o mesmo endereço. Observe o que muda entre eles, e o que liga cada um a este lugar.",
    ],
    image: {
      src: "/assets/aulas/semana-09-aula-27-vila-lavra.png",
      alt: "Ilustração fictícia de uma rua de Vila Lavra, em Albor, com quatro moradores diante de suas casas, cada um segurando um documento diferente; ao fundo, o Rio Itaúba e casas na margem oposta.",
      caption: "Cenário fictício criado para fins didáticos.",
    },
    questions: [
      "Os quatro dividem a mesma rua. O que os separa, e o que os une a este lugar?",
      "De que Estado cada um é nacional, se for de algum?",
      "O pedido de Samir já o torna refugiado?",
      "O que liga Tomás à outra margem do rio, e Inês a Vila Lavra?",
      "O que faz pessoas que vivem no mesmo lugar terem condições e vínculos diferentes com ele?",
    ],
    closing: "GUARDE SUAS RESPOSTAS. VAMOS VOLTAR A ESTA RUA EM CADA ETAPA DA AULA.",
  },

  connection: {
    title: "DA TRAJETÓRIA À PERMANÊNCIA",
    flow: ["A fronteira (Aula 25)", "A trajetória (Aula 26)", "A permanência e o vínculo (Aula 27)"],
    highlight:
      "Estar no mesmo lugar não significa estar na mesma condição jurídica, e estar ligado a um lugar não depende só de um documento.",
    text: "Na Aula 25, olhamos a fronteira: que fluxo atravessa e sob qual regra. Na Aula 26, acompanhamos a trajetória de Inês até Vila Lavra. Agora ela chegou, e a pergunta muda: em que condição se vive num lugar, com quais direitos e procedimentos, e com que vínculo? Cidadania, nacionalidade e soberania você já conhece das Aulas 03 e 06; aqui elas são ponto de partida. “O que faz pessoas que vivem no mesmo lugar terem condições e vínculos diferentes com ele?”",
  },

  lenses: {
    eyebrow: "Cinco lentes para ler um vínculo territorial",
    title: "QUEM ESTÁ AQUI, E EM QUE CONDIÇÃO?",
    subtitle:
      "Cinco conceitos ajudam a comparar os moradores de Vila Lavra. Logo abaixo, seis passos mostram como aplicá-los a documentos, mapas e relatos.",
    items: [
      {
        id: "condicao",
        emoji: "📄",
        name: "CONDIÇÃO JURÍDICA E DIREITOS",
        question: "Qual condição, qual direito ou procedimento, em qual território?",
      },
      {
        id: "nacionalidade",
        emoji: "🪪",
        name: "NACIONALIDADE",
        question: "Por que critério alguém se torna nacional de um Estado?",
      },
      {
        id: "protecao",
        emoji: "🛡️",
        name: "PEDIR PROTEÇÃO × CONDIÇÃO RECONHECIDA",
        question: "O pedido já foi decidido, ou ainda está em análise?",
      },
      {
        id: "apatridia",
        emoji: "❔",
        name: "APATRIDIA",
        question: "E se nenhum Estado considera a pessoa sua nacional?",
      },
      {
        id: "pertencimento",
        emoji: "🧭",
        name: "TERRITORIALIDADE, IDENTIDADE E PERTENCIMENTO",
        question: "Que vínculos vividos ligam a pessoa a este e a outros lugares?",
      },
    ],
    highlight:
      "Mesmo endereço não é mesma condição jurídica; mesmo status não é mesmo pertencimento.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "LEIA UM VÍNCULO TERRITORIAL EM SEIS PASSOS",
    context:
      "Os passos servem para documentos, leis, relatos, notícias, mapas culturais e casos de fronteira. Aqui, aplicados aos moradores de Vila Lavra.",
    flow: [
      "Onde a pessoa vive?",
      "De que Estado é nacional, se for de algum?",
      "Em que condição jurídica está ali?",
      "Que direitos, documentos ou procedimentos se relacionam a essa condição?",
      "Que vínculos sociais, culturais e familiares a conectam a este e a outros lugares?",
      "Condição jurídica e pertencimento coincidem?",
    ],
    question: "O que liga esta pessoa a este lugar, e em que condição?",
    accordions: [
      {
        id: "lugar-nacionalidade",
        title: "LUGAR E NACIONALIDADE: OS DOIS PRIMEIROS PASSOS",
        content:
          "Os quatro vivem em Vila Lavra. Tomás é nacional de Albor; Inês, de Oriana; o pedido de proteção de Samir não muda a sua nacionalidade; Lúcia não é considerada nacional por nenhum Estado.",
      },
      {
        id: "condicao-direitos",
        title: "CONDIÇÃO E DIREITOS: O TERCEIRO E O QUARTO",
        content:
          "Inês é residente; Samir é solicitante, com documento provisório; Lúcia é apátrida reconhecida. Pelas regras de Albor, só nacionais votam nas eleições nacionais, mas todos têm documentos e serviços previstos em lei.",
      },
      {
        id: "vinculos",
        title: "VÍNCULOS E PERTENCIMENTO: O QUINTO E O SEXTO",
        content:
          "Tomás tem parentes e costumes nas duas margens do rio; Inês sente-se parte de Vila Lavra sem ser nacional de Albor. A condição jurídica e o pertencimento vivido nem sempre coincidem.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "Na rua de Vila Lavra, você viu que o mesmo endereço reúne condições jurídicas e vínculos diferentes. Agora, os cinco conceitos.",
      "Guarde uma regra: pergunte primeiro em que condição a pessoa está ali, e depois o que a liga ao lugar. São perguntas diferentes.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "condicao",
        name: "CONDIÇÃO JURÍDICA E DIREITOS",
        conceito:
          "A condição jurídica de uma pessoa num território pode influenciar documentos, permanência, circulação, participação política e determinados direitos ou procedimentos, conforme o ordenamento analisado. Alguns direitos, documentos e procedimentos variam conforme a condição jurídica, sem que isso signifique que pessoas em outras condições estejam destituídas de direitos.",
        penseAssim:
          "Pergunte: qual é a condição da pessoa, qual direito ou procedimento está em jogo, e em qual território?",
        exemplo:
          "Em Albor, votar nas eleições nacionais é reservado a nacionais: Tomás vota; Inês, Samir e Lúcia não, embora todos tenham documentos e acesso a serviços.",
        naoConfunda:
          "Não nacional não é o mesmo que pessoa sem direitos: a diferença está em direitos e procedimentos específicos, que dependem de cada ordenamento.",
        naProva:
          "Documentos e trechos de lei pedem que você relacione uma condição jurídica a um direito ou procedimento concreto.",
      },
      {
        id: "nacionalidade",
        name: "NACIONALIDADE",
        conceito:
          "Nacionalidade é o vínculo jurídico-político entre uma pessoa e um Estado. Ela pode ser atribuída por critérios como o jus soli, ligado ao local de nascimento, e o jus sanguinis, ligado à filiação. Esses critérios não são necessariamente exclusivos: os Estados podem combiná-los, com condições. A Constituição brasileira, no art. 12, combina hipóteses ligadas ao nascimento no território e à filiação.",
        penseAssim:
          "Pergunte: onde a pessoa nasceu, quem são seus pais, e o que a lei de cada Estado envolvido prevê?",
        exemplo:
          "No Brasil, nascidos no território são brasileiros natos, salvo filhos de estrangeiros a serviço de seu país; e pessoas nascidas no exterior de pai ou mãe brasileiros também podem ser natas nas hipóteses do art. 12. Dupla ou múltipla nacionalidade pode surgir quando leis de Estados diferentes atribuem nacionalidade à mesma pessoa.",
        naoConfunda:
          "Jus soli e jus sanguinis não são sistemas obrigatoriamente exclusivos, e dupla nacionalidade não é um tipo de um deles. Também não confunda nacionalidade com cidadania (Aula 06).",
        naProva:
          "Regras de nacionalidade pedem que você combine critérios para decidir se alguém é ou não nacional de um Estado.",
      },
      {
        id: "protecao",
        name: "PEDIR PROTEÇÃO × CONDIÇÃO RECONHECIDA",
        conceito:
          "Quem pede o reconhecimento da condição de refugiado é solicitante até que o pedido seja decidido. No Brasil, segundo o Ministério da Justiça, o solicitante tem autorização provisória de residência, está em situação migratória regular e tem acesso a documentos e serviços previstos em lei; após o reconhecimento pelo Conare, a pessoa refugiada tem residência por prazo indeterminado e pode obter a Carteira de Registro Nacional Migratório. A lei brasileira inclui também uma hipótese ligada a grave e generalizada violação de direitos humanos: os critérios dependem do ordenamento aplicado.",
        penseAssim:
          "Pergunte: o pedido já foi decidido, ou ainda está em análise?",
        exemplo:
          "Samir pediu proteção e aguarda a decisão: é solicitante, com documento provisório, e ainda não é refugiado reconhecido.",
        naoConfunda:
          "Pedir proteção não é o mesmo que já ter a condição de refugiado reconhecida. E solicitante não é pessoa sem documentos.",
        naProva:
          "Notícias sobre pedidos de refúgio pedem que você distinga quem aguarda decisão de quem já foi reconhecido.",
      },
      {
        id: "apatridia",
        name: "APATRIDIA",
        conceito:
          "Pessoa apátrida é aquela que não é considerada nacional por nenhum Estado, segundo a sua legislação, conforme a Convenção de 1954. No Brasil, a Lei de Migração prevê o reconhecimento da condição de apátrida, que possibilita a regularização migratória e condições facilitadas de naturalização, sujeitas aos requisitos legais.",
        penseAssim:
          "Pergunte: existe algum Estado que considere esta pessoa sua nacional?",
        exemplo:
          "Inês tem a nacionalidade de Oriana. Lúcia não é considerada nacional por nenhum Estado, e Albor reconheceu sua condição de apátrida.",
        naoConfunda:
          "Pessoa apátrida não é o mesmo que pessoa que possui nacionalidade estrangeira: Inês tem um vínculo jurídico com Oriana; Lúcia não tem vínculo de nacionalidade com nenhum Estado.",
        naProva:
          "Notícias sobre apatridia pedem que você reconheça a ausência de nacionalidade, e não apenas a condição de estrangeiro.",
      },
      {
        id: "pertencimento",
        name: "TERRITORIALIDADE, IDENTIDADE E PERTENCIMENTO",
        conceito:
          "Além do território do Estado, há territorialidades vividas: língua, família, memória, práticas culturais, redes e circulação ligam pessoas e grupos a lugares, às vezes dos dois lados de um limite. O documento não esgota o pertencimento, e pertencer não suspende as regras jurídicas do território.",
        penseAssim:
          "Pergunte: que vínculos a pessoa tem com este lugar e com outros, independentemente do documento?",
        exemplo:
          "Tomás é nacional de Albor e mantém parentes e costumes na outra margem do Itaúba; Inês, nacional de Oriana, sente-se parte de Vila Lavra.",
        naoConfunda:
          "Identidade não é cidadania; pertencimento não é nacionalidade; territorialidade não é propriedade da terra.",
        naProva:
          "Mapas culturais sobrepostos a limites estatais pedem que você compare o território do Estado com as territorialidades vividas.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "mesmo-endereco",
        title: "Mesmo endereço, condições diferentes",
        content:
          "Tomás, Inês, Samir e Lúcia dividem a rua, mas não a condição jurídica. Pelas regras de Albor, só Tomás vota nas eleições nacionais; Inês tem residência; Samir, um documento provisório enquanto aguarda decisão; Lúcia, situação regular como apátrida reconhecida. Isso não significa que os não nacionais estejam sem direitos: as diferenças aparecem em direitos e procedimentos específicos, definidos por cada ordenamento.",
        flow: ["Mesma rua", "Condições diferentes", "Direitos e procedimentos", "Ordenamento"],
        highlight: "Não nacional não é pessoa sem direitos.",
      },
      {
        id: "tornar-nacional",
        title: "Como alguém se torna nacional, ou pode ficar sem nacionalidade",
        content:
          "Cada Estado define quem são seus nacionais, combinando critérios como o local de nascimento e a filiação. Quando as leis de dois Estados atribuem nacionalidade à mesma pessoa, surge a dupla nacionalidade. Quando nenhuma lei a atribui, a pessoa pode ficar apátrida. A apatridia, portanto, não é escolha nem pertencimento: é a ausência de vínculo de nacionalidade com qualquer Estado.",
        flow: ["Nascimento", "Filiação", "Leis de cada Estado", "Dupla nacionalidade ou apatridia"],
        highlight: "A nacionalidade nasce da lei de cada Estado, e as leis podem se sobrepor ou deixar lacunas.",
      },
      {
        id: "escalas",
        title: "Direitos em mais de uma escala",
        content:
          "Segundo o art. 20 do Tratado sobre o Funcionamento da União Europeia, toda pessoa com nacionalidade de um Estado-membro é cidadã da União. Essa cidadania é adicional e não substitui a nacional. Entre os direitos previstos, sob as condições legais, estão circular e residir nos Estados-membros, votar e candidatar-se nas eleições municipais e do Parlamento Europeu no país de residência, e obter proteção diplomática e consular de outro Estado-membro quando o próprio não estiver representado. Não confunda com Schengen: Schengen trata do controle de fronteiras; a cidadania da União, da condição e dos direitos das pessoas.",
        flow: ["Nacionalidade de um Estado-membro", "Cidadania da União", "Direitos adicionais"],
        highlight: "Direitos podem operar em mais de uma escala política.",
      },
    ],
    closing:
      "Nesta semana, você leu a fronteira, a trajetória e a permanência. No Checkpoint 09, as três leituras se encontram numa mesma região de fronteira.",
  },

  brazilConnections: {
    title: "E O BRASIL? E O MUNDO?",
    question: "Onde condição jurídica e vínculo com o lugar não coincidem?",
    center: "VÍNCULOS",
    items: [
      {
        id: "refugio-brasil",
        label: "BRASIL: SOLICITANTE × REFUGIADO RECONHECIDO",
        description:
          "No Brasil, quem pede refúgio tem autorização provisória de residência e situação migratória regular enquanto o pedido é analisado, com acesso a documentos e serviços previstos em lei. Depois do reconhecimento pelo Conare, a pessoa refugiada passa a ter residência por prazo indeterminado. Os dois vivem no mesmo território, com condições e procedimentos diferentes, segundo o Ministério da Justiça.",
      },
      {
        id: "guarani",
        label: "GUARANI: TERRITORIALIDADE E LIMITE ESTATAL",
        description:
          "O povo Guarani está presente no Brasil, no Paraguai, na Argentina e na Bolívia, segundo o Mapa Guarani Continental e o Instituto Socioambiental. Territorialidades, vínculos culturais e relações sociais Guarani atravessam limites estabelecidos posteriormente pelos Estados nacionais. Isso não significa ausência de soberania estatal: mostra que o território do Estado e as territorialidades vividas não coincidem perfeitamente.",
      },
      {
        id: "ue",
        label: "UNIÃO EUROPEIA: DIREITOS EM ESCALA SUPRANACIONAL",
        description:
          "Toda pessoa com nacionalidade de um Estado-membro é cidadã da União Europeia, segundo o art. 20 do Tratado sobre o Funcionamento da União. Essa cidadania é adicional à nacional e traz direitos como circular e residir nos Estados-membros e votar nas eleições municipais do país de residência. Não é uma “nacionalidade europeia”, e não é o mesmo que o Espaço Schengen.",
      },
    ],
    study:
      "Cada cartão prova uma lente: o refúgio no Brasil, a diferença entre pedir proteção e ter a condição reconhecida; os Guarani, a territorialidade que atravessa limites; a União Europeia, os direitos em mais de uma escala.",
    highlight:
      "Condição jurídica, direitos e pertencimento podem operar em escalas e lugares diferentes.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Documento ou lei",
      "Mapa cultural × limite estatal",
      "Relato de morador",
      "Notícia sobre apatridia",
      "Infográfico da União Europeia",
      "Regra de nacionalidade",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Relacionar condição e direito",
      "Separar vínculo vivido e condição jurídica",
      "Reconhecer a ausência de nacionalidade",
      "Combinar critérios de nacionalidade",
    ],
    highlight:
      "A prova raramente pede a definição de cidadania. Ela mostra pessoas num mesmo lugar e quer ver você explicar o que muda entre elas.",
    guidingIntro: "Material → operação → armadilha:",
    guidingQuestions: [
      "Documento ou lei → identifique a condição e o direito. Armadilha: documento = pertencimento.",
      "Mapa cultural × limite estatal → compare territorialidades. Armadilhas: território cultural = Estado; territorialidade = ausência de soberania.",
      "Relato de morador → separe vínculo vivido e condição jurídica. Armadilha: morar muito tempo = nacionalidade automática.",
      "Notícia sobre apatridia → reconheça a ausência de nacionalidade. Armadilha: apátrida = pessoa que tem outra nacionalidade.",
      "Infográfico da União Europeia → identifique direitos em escala supranacional. Armadilhas: União Europeia = Schengen; cidadania da União = “nacionalidade europeia”.",
      "Regra de nacionalidade → combine critérios. Armadilha: jus soli e jus sanguinis são obrigatoriamente exclusivos.",
    ],
  },

  question: {
    id: "s09-a27-q01",
    statement:
      "Numa mesma rua de Vila Lavra, cidade do país fictício Albor, vivem quatro pessoas. Tomás é nacional de Albor, nasceu ali, e sua família ribeirinha mantém parentes e costumes nas duas margens do Rio Itaúba. Inês é nacional de Oriana, tem autorização de residência em Albor há alguns anos e diz sentir-se parte de Vila Lavra. Samir pediu o reconhecimento da condição de refugiado e aguarda a decisão. Lúcia não é considerada nacional por nenhum Estado e teve sua condição de apátrida reconhecida por Albor. Pelas regras de Albor, votar em eleições nacionais é reservado a nacionais; residentes recebem documento de residência e acesso aos serviços públicos; solicitantes recebem documento provisório enquanto o pedido é analisado; e apátridas reconhecidos têm situação migratória regular. A leitura mais adequada é que",
    options: [
      {
        id: "A",
        text: "Samir, por ter pedido proteção, já tem a condição de refugiado, com os mesmos procedimentos de quem foi reconhecido; Lúcia e Inês estão em situação regular, e o voto nas eleições nacionais segue reservado a Tomás, o único nacional de Albor entre os quatro vizinhos daquela rua.",
      },
      {
        id: "B",
        text: "Lúcia e Inês estão na mesma condição jurídica, pois ambas são nacionais de outros Estados com residência em Albor; Samir ainda aguarda a decisão sobre o seu pedido, e Tomás, nacional de Albor, é o único dos quatro que pode votar nas eleições nacionais do país, conforme as regras de Albor.",
      },
      {
        id: "C",
        text: "Inês, por viver há anos em Vila Lavra e sentir-se parte do lugar, já se tornou nacional de Albor e pode votar nas eleições nacionais; Samir aguarda decisão como solicitante, e Lúcia, apátrida reconhecida, tem situação migratória regular, sem a nacionalidade de nenhum outro Estado.",
      },
      {
        id: "D",
        text: "os quatro vivem no mesmo lugar em condições jurídicas diferentes, mas só o documento de nacional produz pertencimento: Inês, apesar do tempo de residência, não pertence a Vila Lavra, e os parentes de Tomás na outra margem não alteram o seu vínculo, restrito a Albor pelo documento.",
      },
      {
        id: "E",
        text: "os quatro dividem o lugar, mas não a condição jurídica, que pesa sobre voto e documentos; Samir aguarda decisão e ainda não é refugiado reconhecido, Lúcia não tem nacionalidade de outro Estado, e Inês segue nacional de Oriana, com um pertencimento que o documento, por si, não define.",
      },
    ],
    correctOptionId: "E",
    explanation:
      "A alternativa E está correta porque separa, morador por morador, a condição jurídica e o vínculo com o lugar. 1. MESMO LUGAR ≠ MESMA CONDIÇÃO: os quatro vivem na mesma rua, mas em condições jurídicas diferentes. 2. CONDIÇÃO → DIREITOS E PROCEDIMENTOS: pelas regras de Albor, a condição pesa sobre o voto nas eleições nacionais e sobre o documento que cada um recebe. 3. PEDIR ≠ TER RECONHECIDO: Samir pediu proteção e aguarda a decisão; é solicitante, não refugiado reconhecido. 4. APATRIDIA: Lúcia não é considerada nacional por nenhum Estado; não é alguém com outra nacionalidade. 5. PERTENCIMENTO ≠ NACIONALIDADE: Inês sente-se parte de Vila Lavra e continua nacional de Oriana; o tempo de residência não a tornou nacional de Albor. 6. O DOCUMENTO NÃO ESGOTA O PERTENCIMENTO: o vínculo vivido não é produzido nem apagado, por si, por um documento.",
    optionFeedback: {
      A: "Pedir proteção não é o mesmo que ter a condição reconhecida: Samir aguarda a decisão e, pelas regras de Albor, tem documento provisório de solicitante, não a condição de refugiado.",
      B: "Inês e Lúcia não estão na mesma condição: Inês é nacional de Oriana; Lúcia não é considerada nacional por nenhum Estado. Pessoa apátrida não é pessoa que possui nacionalidade estrangeira.",
      C: "Morar muitos anos num lugar e sentir-se parte dele não produz, automaticamente, nacionalidade: Inês continua nacional de Oriana e, pelas regras de Albor, não vota nas eleições nacionais.",
      D: "O documento não esgota o pertencimento: Inês pode sentir-se parte de Vila Lavra sem ser nacional de Albor, e os parentes de Tomás na outra margem fazem parte de seus vínculos vividos.",
      E: "Correta: distingue lugar, condição jurídica, direitos e pertencimento, reconhece Samir como solicitante, Lúcia como apátrida e Inês como nacional de Oriana que se sente parte de Vila Lavra.",
    },
  },

  missionCheck:
    "Voltemos à pergunta da aula: o que faz pessoas que vivem no mesmo lugar terem condições e vínculos diferentes com ele? Agora você consegue distinguir condição jurídica, direitos e pertencimento ao comparar quem vive num mesmo território?",

  completionMessage:
    "Fronteira, trajetória e permanência: nesta semana, você leu o que a linha faz, o caminho de quem se desloca e a condição de quem fica. Mesmo endereço não é mesma condição jurídica, e o documento não esgota o pertencimento. No Checkpoint 09, as três leituras se encontram num só território.",
};
