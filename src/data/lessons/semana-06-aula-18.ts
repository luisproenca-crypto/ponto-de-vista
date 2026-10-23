import type { LessonContent } from "@/lib/types";

/**
 * AULA 18 — GOVERNANÇA AMBIENTAL E POLÍTICAS PÚBLICAS
 * Semana 06 • Política & Cidadania (COMPREENDA)
 *
 * Ideia central: quando o problema ultrapassa fronteiras, nenhuma autoridade
 * decide sozinha; agir em conjunto depende de atores com capacidades
 * diferentes (agir, negociar, financiar, monitorar, cobrar, implementar) e de
 * regras que coordenam essas capacidades. Pergunta-guia (subtítulo):
 * "Quem decide quando o problema ultrapassa fronteiras?" Progressão: Aula 15
 * (quem decide?) → 16 (fenômeno ou dano?) → 17 (quem tem poder?) → 18 (como
 * se age coletivamente quando ninguém decide sozinho?). Mitigação e adaptação
 * só como retomada da Aula 16; perdas e danos é a novidade. Instrumentos
 * nomeados: só o Acordo de Paris (aplicação) e o Protocolo de Montreal
 * (contraste). Rio Lume, Serra Alta e Planície Baixa são fictícios.
 * NEUTRALIDADE (2º turno em 25/10/2026): sem governos avaliados, partidos ou
 * candidatos; sem números de desmatamento; situação dos EUA e Lei Geral do
 * Licenciamento deliberadamente fora.
 *
 * DADOS FACTUAIS (conferidos em 23/10/2026):
 *   • Acordo de Paris, texto promulgado pelo Decreto 9.073/2017 (Planalto):
 *     art. 2.2 (responsabilidades comuns porém diferenciadas e respectivas
 *     capacidades); art. 4.2 (cada Parte deve preparar, comunicar e manter
 *     contribuições nacionalmente determinadas e adotar medidas domésticas);
 *     art. 4.3 (progressão); art. 4.9 (a cada cinco anos); art. 8.1 (evitar,
 *     minimizar e enfrentar perdas e danos); art. 13 (transparência, com
 *     flexibilidade); art. 14 (avaliação global, a primeira em 2023 e depois
 *     a cada cinco anos); art. 15 (comitê "facilitador", "não contencioso e
 *     não punitivo"). Caminho: celebrado em 12/12/2015, firmado em 22/04/2016,
 *     aprovado pelo Decreto Legislativo 140/2016, promulgado em 05/06/2017.
 *   • NDC do Brasil, fonte primária: documento oficial no Registro de NDCs da
 *     UNFCCC (unfccc.int/NDCREG), apresentado em 13/11/2024: reduzir as
 *     emissões líquidas de 59% a 67% em relação a 2005 até 2035, em toda a
 *     economia.
 *   • LC 140/2011 (Planalto): cooperação entre União, estados, DF e
 *     municípios na competência ambiental comum (art. 23 da Constituição).
 *   • OTCA (site oficial): oito países; tratado de 1978; organização de 1998.
 *   • Fundo Amazônia, fonte oficial do Fundo/BNDES (fundoamazonia.gov.br):
 *     doações não reembolsáveis, gestão do BNDES (Decreto 6.527/2008).
 *   • Prodes e Deter, fonte INPE (gov.br/inpe, notícia de 19/10/2026): Prodes
 *     produz as taxas de perda de vegetação nativa; Deter gera alertas em tempo
 *     quase real para a fiscalização.
 *   • Fundo para Perdas e Danos: mandato de apoiar países em desenvolvimento
 *     particularmente vulneráveis (FRLD, fev. 2026). Sem valores, por decisão
 *     editorial.
 *   • Protocolo de Montreal: eliminação de quase 99% das substâncias
 *     proibidas (avaliação do Painel Científico, OMM e PNUMA, jan. 2023;
 *     nova avaliação prevista para o fim de 2026). Sem datas de recuperação.
 *
 * Título, subtítulo, vídeo e status ficam em `src/data/course.ts`. Aula em
 * preparação (`status: "em-preparacao"`), ainda não ligada (`content: null`).
 */
export const aula18Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de analisar um problema socioambiental que ultrapassa fronteiras, comparando a escala do problema com a de quem pode decidir, identificando os papéis de cada ator, distinguindo instrumento internacional, meta nacional e política pública e avaliando como o cumprimento é acompanhado e cobrado.",

  hypothesis: {
    title: "O OLHAR DO PACO",
    intro:
      "O Rio Lume, fictício, nasce no País A, atravessa o País B e deságua no litoral do País C. Uma fábrica no País A lança resíduos na água. No País B, os peixes morrem e os pescadores perdem renda; no País C, uma cidade costeira suspende o abastecimento. O governo do País A pode fiscalizar a fábrica, mas a fiscalização depende de órgãos locais com poucos técnicos. Os três governos podem negociar. Um banco regional de desenvolvimento pode financiar uma estação de tratamento. Uma comissão técnica mede a água ao longo do rio. Pescadores, imprensa e compradores do produto da fábrica podem pressionar.",
    cards: [
      { id: "agir", label: "Agir diretamente na fonte" },
      { id: "negociar", label: "Negociar entre os países" },
      { id: "financiar", label: "Financiar a solução" },
      { id: "monitorar", label: "Monitorar a água" },
      { id: "cobrar", label: "Pressionar e cobrar" },
      { id: "implementar", label: "Implementar no dia a dia" },
    ],
    question: "Quem, nessa história, consegue resolver o problema sozinho?",
    paco: "Escolha duas capacidades e descubra quem tem cada uma. Depois pergunte: alguém tem todas?",
    reveal:
      "Ninguém tem todas. Quem sofre o dano, em B e C, não é quem pode agir na fonte. Quem age não é quem financia. A comissão que monitora não pode punir. Os governos que negociam não são os técnicos que implementam. Nenhuma capacidade, sozinha, resolve o problema inteiro. Isso é um problema de governança.",
  },

  connection: {
    title: "QUANDO NINGUÉM DECIDE SOZINHO",
    flow: ["Quem decide?", "Fenômeno ou dano?", "Quem tem poder?", "Como agir em conjunto?"],
    highlight: "Quando o problema é maior que qualquer fronteira, a decisão vira coordenação.",
    text: "Na Aula 15, sempre havia uma instituição com competência para decidir. Na Aula 16, você separou o fenômeno do dano. Na Aula 17, viu que energia é relação de poder. Agora o problema ultrapassa fronteiras, e nenhum governo tem competência sobre o todo. A pergunta desta aula é: “Quem decide quando o problema ultrapassa fronteiras?” E a resposta obriga a uma nova: como se age coletivamente quando ninguém decide sozinho?",
  },

  lenses: {
    eyebrow: "Seis capacidades para ler a governança",
    title: "QUEM PODE FAZER O QUÊ?",
    subtitle:
      "Diante de um problema coletivo, pergunte quem tem cada capacidade. As respostas raramente apontam para o mesmo ator.",
    items: [
      { id: "agir", emoji: "🔧", name: "AGIR", question: "Quem pode mudar diretamente a fonte do problema?" },
      { id: "negociar", emoji: "🤝", name: "NEGOCIAR", question: "Quem pode criar regras comuns com os outros?" },
      { id: "financiar", emoji: "💰", name: "FINANCIAR", question: "Quem pode pagar pela solução, e com que critério?" },
      { id: "monitorar", emoji: "🛰️", name: "MONITORAR", question: "Quem mede, registra e torna os dados públicos?" },
      { id: "cobrar", emoji: "📣", name: "COBRAR", question: "Quem pode pressionar, e com que meios?" },
      { id: "implementar", emoji: "🏗️", name: "IMPLEMENTAR", question: "Quem transforma a regra em ação no território?" },
    ],
    highlight:
      "Governança é o arranjo que faz essas capacidades trabalharem juntas, quando não estão nas mesmas mãos.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "O ACORDO DE PARIS EM QUATRO CAMADAS",
    context:
      "O Acordo de Paris, de 2015, é um dos principais instrumentos internacionais sobre mudança do clima. Ele não funciona como uma lei mundial: combina camadas de natureza diferente.",
    flow: ["Ser Parte", "Procedimentos", "Meta nacional", "Políticas domésticas"],
    question: "O que é comum a todos e o que cada país define?",
    accordions: [
      {
        id: "parte",
        title: "SER PARTE DO ACORDO",
        content:
          "Um país se torna Parte por decisão própria, seguindo seu caminho interno. No Brasil, o acordo foi assinado em 2016, aprovado pelo Congresso Nacional no mesmo ano e promulgado por decreto em 2017. Aderir é um ato soberano.",
      },
      {
        id: "procedimentos",
        title: "PROCEDIMENTOS COMUNS",
        content:
          "Todas as Partes devem preparar, comunicar e manter suas metas, apresentar uma nova a cada cinco anos, com progressão em relação à anterior, e relatar o que fizeram. Essas obrigações são de procedimento: dizem o que fazer e comunicar, e não qual número alcançar.",
      },
      {
        id: "meta",
        title: "META NACIONALMENTE DETERMINADA",
        content:
          "O conteúdo da meta é definido por cada país, à luz de suas circunstâncias. Não é a ONU que fixa o número. Por isso as metas variam em tipo, ano de referência e ambição.",
      },
      {
        id: "politicas",
        title: "POLÍTICAS DOMÉSTICAS",
        content:
          "A meta só sai do papel por meio de leis, planos, orçamento, fiscalização e decisões de estados e municípios. O próprio acordo diz que as Partes devem adotar medidas domésticas. É aqui que a governança encontra a política pública da Aula 15.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "Você viu, no rio fictício, que nenhuma capacidade está inteira nas mãos de um só ator, e, no Acordo de Paris, que regra comum e meta nacional são coisas diferentes. Agora vamos dar precisão aos conceitos.",
      "Separe sempre três planos: o que foi acordado entre países, o que cada país prometeu e o que cada país efetivamente faz.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "governanca-e-governo",
        name: "GOVERNANÇA E GOVERNO",
        conceito:
          "Governo é quem ocupa e dirige o Estado em determinado momento (Aula 03). Governança é o conjunto de regras, atores e mecanismos que coordenam ações quando nenhuma autoridade, sozinha, controla o problema inteiro.",
        penseAssim:
          "Pergunte se há alguém capaz de mandar em todos os envolvidos. Se não houver, a solução depende de coordenação, e isso é governança.",
        exemplo:
          "Na bacia do Rio Lume, há três governos, uma fábrica, um banco, uma comissão técnica e comunidades afetadas. Nenhum deles governa os outros, mas todos fazem parte da governança do rio.",
        naoConfunda:
          "Governança não é ausência de Estado. Os Estados continuam centrais, mas não são os únicos atores.",
        naProva:
          "Quando o enunciado lista vários atores com papéis diferentes e nenhum com poder sobre todos, a questão está pedindo governança.",
      },
      {
        id: "transfronteirico-e-multinivel",
        name: "PROBLEMA TRANSFRONTEIRIÇO E GOVERNANÇA MULTINÍVEL",
        conceito:
          "Um problema é transfronteiriço quando suas causas e seus efeitos atravessam limites políticos. Governança multinível é a distribuição das respostas entre escalas: internacional, nacional, estadual e municipal.",
        penseAssim:
          "Desenhe dois mapas: o da área do problema e o de quem tem poder para agir. Quase nunca coincidem.",
        exemplo:
          "Um compromisso climático assumido por um país depende de quem licencia, fiscaliza e planeja o uso do solo, tarefas muitas vezes de estados e municípios.",
        naoConfunda:
          "Multinível não é uma hierarquia em que o nível de cima manda no de baixo. Cada nível tem competências próprias e precisa cooperar com os outros.",
        naProva:
          "Mapas de bacias, biomas ou poluição atmosférica pedem que você compare a área do problema com as fronteiras de quem decide.",
      },
      {
        id: "cooperacao-e-soberania",
        name: "COOPERAÇÃO E SOBERANIA",
        conceito:
          "Cooperação internacional é a coordenação voluntária entre Estados para enfrentar um problema comum. Aderir a um acordo é um ato soberano: o país decide participar e assume compromissos, mas continua decidindo como agir no próprio território.",
        penseAssim:
          "Um acordo é como entrar num condomínio: cada morador segue dono da casa, mas aceita regras sobre o que afeta todos.",
        exemplo:
          "No Acordo de Paris, todos os países seguem regras comuns de procedimento, mas cada um define a própria meta e as próprias políticas.",
        naoConfunda:
          "Cooperar não é perder soberania. E soberania não significa que um país possa ignorar compromissos sem custo político e diplomático.",
        naProva:
          "Desconfie de alternativas em que um organismo internacional “manda” nos países ou em que a soberania impede qualquer forma de cobrança.",
      },
      {
        id: "instrumento-meta-politica",
        name: "INSTRUMENTO INTERNACIONAL, META NACIONAL E POLÍTICA PÚBLICA",
        conceito:
          "Um instrumento internacional pode conter obrigações de natureza diferente: algumas definem procedimentos, outras definem objetivos. A meta nacional é o que cada país se propõe a alcançar. A política pública é a ação concreta, com lei, orçamento, órgão responsável e fiscalização.",
        penseAssim:
          "Leia em três tempos: o que foi acordado, o que foi prometido e o que está sendo feito.",
        exemplo:
          "No Acordo de Paris, apresentar a meta e relatar o progresso são obrigações de procedimento; o número da meta é definido por cada país; alcançá-lo depende das políticas domésticas.",
        naoConfunda:
          "Meta não é resultado, e ser Parte de um acordo não garante o cumprimento. Assim como na Aula 15, aprovar não é executar.",
        naProva:
          "Em trechos de acordos, preste atenção aos verbos: “deve apresentar”, “envidará esforços” e “reconhece” não criam o mesmo tipo de compromisso.",
      },
      {
        id: "responsabilidades-financiamento-perdas",
        name: "RESPONSABILIDADES DIFERENCIADAS, FINANCIAMENTO E PERDAS E DANOS",
        conceito:
          "O Acordo de Paris adota o princípio das responsabilidades comuns porém diferenciadas e respectivas capacidades. Todos têm responsabilidade, mas não a mesma: pesam a contribuição histórica para o problema e os meios para agir. Daí vem a pergunta sobre quem financia as respostas. Além da mitigação e da adaptação (Aula 16), o acordo reconhece perdas e danos: impactos que não foram evitados ou aos quais não foi possível adaptar-se plenamente.",
        penseAssim:
          "Para cada resposta, pergunte quem causa, quem sofre, quem pode pagar e quem decide como o dinheiro é usado.",
        exemplo:
          "O Fundo para Perdas e Danos, criado no regime do clima da ONU, foi pensado para apoiar países em desenvolvimento particularmente vulneráveis aos efeitos da mudança do clima.",
        naoConfunda:
          "Responsabilidade diferenciada não é ausência de responsabilidade. E mitigação, adaptação e perdas e danos não são etapas em sequência obrigatória: podem acontecer ao mesmo tempo.",
        naProva:
          "Gráficos de emissões acumuladas e de emissões atuais costumam aparecer juntos. A questão quer saber se você distingue responsabilidade histórica de responsabilidade presente.",
      },
      {
        id: "implementacao-e-cumprimento",
        name: "IMPLEMENTAÇÃO, TRANSPARÊNCIA E CUMPRIMENTO",
        conceito:
          "Implementar é transformar o compromisso em ação. Transparência e monitoramento tornam visível o que foi feito. No Acordo de Paris, há relatórios periódicos, uma avaliação global a cada cinco anos e um comitê de cumprimento de caráter facilitador, não contencioso e não punitivo.",
        penseAssim:
          "Quando não há punição, pergunte o que move o cumprimento: reputação, reciprocidade, pressão interna, interesse próprio, comparação com os outros.",
        exemplo:
          "Um relatório público que mostra metas não alcançadas não aplica multa, mas oferece a governos, imprensa e sociedade uma base para cobrar.",
        naoConfunda:
          "Monitoramento não é punição, e um acordo sem sanção não é um acordo inútil. O que muda é o mecanismo de cobrança.",
        naProva:
          "Alternativas que dizem que um comitê ou organismo internacional pode multar ou punir países costumam ser a armadilha.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "por-que-cumprem",
        title: "Se ninguém pode obrigar, por que os países cumprem?",
        content:
          "Nem sempre cumprem, e é importante dizer isso. Mas há razões para cumprir mesmo sem punição. Reputação: quem descumpre perde credibilidade em outras negociações. Reciprocidade: cada país age mais se vê os outros agindo. Transparência: relatórios públicos permitem comparar e cobrar. Pressão interna: eleitores, empresas, tribunais e movimentos sociais usam os compromissos internacionais como argumento. Interesse próprio: muitas ações também trazem benefícios locais. Nenhum desses mecanismos é infalível, e eles funcionam melhor juntos.",
        flow: ["Compromisso", "Relatório público", "Comparação", "Pressão e reputação", "Ação"],
        highlight: "Sem punição, o cumprimento depende de ser visto.",
      },
      {
        id: "quem-paga",
        title: "Quem deve pagar a conta?",
        content:
          "Os países negociam com critérios diferentes, e cada um favorece posições diferentes. Pela responsabilidade histórica, pesa quem emitiu mais ao longo do tempo. Pela capacidade, pesa quem tem mais recursos hoje. Pelas emissões atuais, pesa quem emite mais agora. Países industrializados há mais tempo, economias emergentes e países muito vulneráveis tendem a defender combinações diferentes desses critérios. O acordo incorpora responsabilidade e capacidade ao mesmo tempo, e a aplicação concreta continua em negociação.",
        flow: ["Responsabilidade histórica", "Capacidade atual", "Emissões atuais", "Negociação"],
        highlight: "A pergunta “quem paga?” não tem resposta técnica única: é decidida em negociação.",
      },
      {
        id: "global-depende-local",
        title: "Por que um problema global depende de decisões locais?",
        content:
          "Um compromisso assumido em uma negociação internacional percorre um caminho até chegar ao território. No Brasil, o Acordo de Paris foi aprovado pelo Congresso e promulgado por decreto; a meta nacional precisa virar planos, orçamento e normas; e a execução passa por órgãos federais, estaduais e municipais, que dividem a competência ambiental e devem cooperar entre si. Se um elo falha, a meta continua no papel.",
        flow: ["Acordo internacional", "Aprovação e promulgação", "Meta nacional", "Planos e orçamento", "Fiscalização no território"],
        highlight: "O problema é global; a ação acontece num município de cada vez.",
      },
      {
        id: "mais-facil-coordenar",
        title: "Por que alguns problemas internacionais são mais fáceis de coordenar coletivamente do que outros?",
        content:
          "O Protocolo de Montreal, de 1987, tratou das substâncias que destroem a camada de ozônio. Segundo a avaliação científica divulgada pela OMM e pelo PNUMA em 2023, quase 99% das substâncias proibidas foram eliminadas. A coordenação tinha condições estruturais particulares: um número limitado de produtos e de fabricantes, substitutos disponíveis, custos concentrados em poucos setores e benefícios claros para todos. A mudança do clima envolve outra estrutura: emissões vindas de energia, transporte, indústria, agropecuária e uso da terra, bilhões de fontes, custos espalhados pela economia e benefícios que aparecem a longo prazo. A comparação não diz que um regime é melhor que o outro: mostra por que a dificuldade de coordenar muda com a estrutura do problema.",
        flow: ["Poucos produtos", "Substitutos", "Poucos atores", "Custos concentrados", "Coordenação mais simples"],
        highlight: "A dificuldade da cooperação depende do problema, não só da vontade dos países.",
      },
    ],
    closing:
      "A Semana 06 forma uma unidade. Na Aula 16, você compreendeu o problema e o risco. Na Aula 17, os interesses, as dependências e o poder. Na Aula 18, como atores com capacidades e interesses diferentes tentam agir em conjunto.",
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Como a governança ambiental aparece nas instituições brasileiras?",
    center: "BRASIL",
    items: [
      {
        id: "multinivel",
        label: "GOVERNANÇA MULTINÍVEL: A LC 140",
        description:
          "A proteção do meio ambiente é competência comum de União, estados, Distrito Federal e municípios. A Lei Complementar 140, de 2011, fixa normas para a cooperação entre eles nas ações administrativas, como licenciamento e fiscalização.",
      },
      {
        id: "meta",
        label: "META NACIONAL: A NDC",
        description:
          "A meta apresentada pelo Brasil em 2024 prevê reduzir as emissões líquidas de 59% a 67% até 2035, em relação a 2005. O número foi definido pelo próprio país; alcançá-lo depende das políticas domésticas.",
      },
      {
        id: "caminho",
        label: "CAMINHO INSTITUCIONAL: A INCORPORAÇÃO",
        description:
          "O Acordo de Paris foi assinado em 2016, aprovado pelo Congresso Nacional por decreto legislativo no mesmo ano e promulgado por decreto presidencial em 2017. É o caminho da Aula 15 aplicado a um compromisso internacional.",
      },
      {
        id: "regional",
        label: "COOPERAÇÃO REGIONAL: A OTCA",
        description:
          "A Organização do Tratado de Cooperação Amazônica reúne os oito países amazônicos. A floresta e as bacias atravessam fronteiras, e cada país mantém a soberania sobre sua parte.",
      },
      {
        id: "financiamento",
        label: "FINANCIAMENTO: O FUNDO AMAZÔNIA",
        description:
          "O Fundo Amazônia recebe doações para investimentos não reembolsáveis em prevenção, monitoramento e combate ao desmatamento, com gestão do BNDES. Quem doa não executa: a governança separa as funções.",
      },
      {
        id: "monitoramento",
        label: "MONITORAMENTO: PRODES E DETER",
        description:
          "Segundo o INPE, o Prodes produz as taxas anuais de perda de vegetação nativa, e o Deter gera alertas em tempo quase real para apoiar a fiscalização. Dados públicos permitem acompanhar e cobrar.",
      },
    ],
    study:
      "Cada exemplo responde a uma capacidade da aula. Sediar a COP30, em Belém, em 2025, colocou o Brasil no centro da negociação, mas a conferência decide em conjunto, não pelo país anfitrião.",
    highlight:
      "No Brasil, a governança ambiental passa por tratados, metas, leis, fundos e satélites, e por quem transforma tudo isso em ação no território.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Trecho de acordo e mapa de bacia ou bioma",
      "Charge sobre promessas climáticas",
      "Gráfico de emissões ou de financiamento",
      "Situação transfronteiriça e notícia",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Escala do problema e de quem decide",
      "Compromisso ou implementação",
      "Papel de cada ator",
      "Monitoramento e cumprimento",
    ],
    highlight:
      "A prova raramente pergunta “o que é o Acordo de Paris?”. Ela mostra um material e quer ver você executar uma operação sobre ele.",
    guidingIntro: "Material apresentado → operação que você precisa fazer:",
    guidingQuestions: [
      "Trecho de acordo → separe procedimento, meta e intenção pelos verbos usados.",
      "Mapa → compare a área do problema com as fronteiras de quem decide.",
      "Charge → distinga o compromisso anunciado da implementação.",
      "Gráfico → separe emissão histórica de emissão atual, e quem financia de quem recebe.",
      "Situação transfronteiriça e notícia → identifique quem age, negocia, financia, monitora e cobra, e separe fato institucional de avaliação de resultado.",
    ],
  },

  question: {
    id: "s06-a18-q01",
    statement:
      "Os países fictícios de Serra Alta e Planície Baixa compartilham a bacia do Rio Lume, que nasce em Serra Alta e atravessa Planície Baixa até o mar. Ambos são Partes de um acordo regional sobre águas compartilhadas, que obriga cada país a apresentar metas de redução da poluição, publicar relatórios anuais e submetê-los a uma comissão técnica conjunta; o acordo não prevê sanções. Serra Alta, uma federação, apresentou meta de reduzir à metade, até 2030, o esgoto lançado no rio, mas a fiscalização cabe aos seus estados, que têm capacidades muito diferentes. O relatório da comissão mostrou queda da poluição em um estado e aumento em outro, e cidades de Planície Baixa continuam com a água comprometida. Considerando essas informações, a leitura mais adequada é que",
    options: [
      {
        id: "A",
        text: "Planície Baixa pode aplicar sanções a Serra Alta com base no relatório, porque ambos são Partes do acordo; e a meta apresentada pelo governo central passa a valer como obrigação de resultado para cada estado de Serra Alta, que responde diretamente à comissão técnica conjunta.",
      },
      {
        id: "B",
        text: "a meta apresentada por Serra Alta assegura a redução da poluição até 2030, e a piora em um dos estados tende a se corrigir com o tempo; como o acordo não prevê sanções, o relatório da comissão tem valor técnico, mas pouco papel nas negociações entre os dois países.",
      },
      {
        id: "C",
        text: "por serem soberanos, os dois países não podem cobrar um do outro pelo que ocorre em seus territórios; a poluição que chega a Planície Baixa depende da vontade do governo central de Serra Alta, e o relatório da comissão não altera essa relação entre eles.",
      },
      {
        id: "D",
        text: "o problema atravessa a fronteira, mas sua solução depende do que se faz em cada estado de Serra Alta; a meta nacional não assegura o resultado, e o relatório, embora não puna, mostra onde a meta não avança e dá a Planície Baixa argumentos para exigir providências.",
      },
      {
        id: "E",
        text: "como a fiscalização cabe aos estados, o problema é de escala estadual e deve ser tratado por eles, sem envolver o governo central nem Planície Baixa; a comissão técnica, por acompanhar a bacia, passa a responder pela execução da meta nos estados.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "A alternativa D está correta, porque combina quatro leituras. Escala: a poluição nasce em Serra Alta e chega a Planície Baixa, mas a ação depende da fiscalização de cada estado, o que é governança multinível. Compromisso e implementação: a meta nacional não garante o resultado, como mostra o relatório. Atores: o governo central assume a meta, os estados fiscalizam, a comissão monitora e o país vizinho cobra. Cumprimento: sem sanções, o relatório não pune, mas torna o problema visível e sustenta a cobrança. A confunde monitoramento com punição e trata a meta como obrigação de resultado de cada estado. B confunde meta com resultado e subestima o papel do relatório. C supõe que a soberania impede qualquer cobrança e ignora os estados. E reduz o problema à escala estadual e confunde quem monitora com quem executa.",
  },

  missionCheck:
    "Voltemos à pergunta da aula: quem decide quando o problema ultrapassa fronteiras? Agora você consegue comparar a escala do problema com a de quem pode decidir, identificar quem age, negocia, financia, monitora, cobra e implementa, e distinguir o que foi acordado, o que foi prometido e o que está sendo feito?",

  completionMessage:
    "Quando o problema ultrapassa fronteiras, ninguém decide sozinho: a solução depende de coordenar capacidades que estão em mãos diferentes. Com isso, você fecha a Semana 06 lendo o clima como risco, como poder e como ação coletiva.",
};
