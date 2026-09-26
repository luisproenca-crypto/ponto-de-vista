import type { LessonContent } from "@/lib/types";

/**
 * AULA 05 — EUA × CHINA
 * Semana 02 • Geopolítica & Atualidades
 *
 * Ideia central: competição + interdependência + negociação.
 * Geopolítica não é escolher um time. É compreender interesses, relações e
 * escalas.
 *
 * Título, subtítulo, descrição, vídeo e status ficam em `src/data/course.ts`
 * (metadados da aula). Este arquivo guarda somente o conteúdo pedagógico.
 *
 * Rascunho editorial para revisão do Prof. Luis — altere apenas os textos
 * deste arquivo; nenhum componente precisa ser modificado.
 *
 * DADOS FACTUAIS (informados pelo Prof. Luis; verificar antes de publicar):
 *   • USTR — comércio de bens e serviços EUA–China em 2025 (item
 *     "rivalidade-isolamento");
 *   • BIS/EUA — análise caso a caso de licenças de exportação de chips à
 *     China em janeiro de 2026 (item "semicondutores");
 *   • enquadramento de Taiwan: posição de Pequim e política dos EUA desde
 *     1979 (item "taiwan").
 * Nenhum outro dado quantitativo ou factual foi incluído.
 *
 * Esta aula ainda não está publicada em `src/data/course.ts`.
 */
export const aula05Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de analisar a relação entre Estados Unidos e China reconhecendo, ao mesmo tempo, elementos de competição, interdependência e negociação, e de aplicar esse raciocínio a situações e questões de vestibular — sem reduzir a relação a uma escolha de lado.",

  hypothesis: {
    title: "O OLHAR DO PACO",
    intro: "Antes de explicar qualquer coisa, observe estas seis ideias.",
    cards: [
      { id: "semicondutores", label: "Semicondutores" },
      { id: "soja", label: "Soja" },
      { id: "tarifas", label: "Tarifas" },
      { id: "terras-raras", label: "Terras raras" },
      { id: "dolar", label: "Dólar" },
      { id: "rotas", label: "Rotas marítimas" },
    ],
    question: "Parecem assuntos separados. Será que são?",
    paco: "Escolha duas dessas ideias e tente imaginar como a relação entre grandes economias poderia conectá-las antes de continuar.",
    reveal: "Boa hipótese. Agora vamos organizar essas conexões.",
  },

  connection: {
    title: "TRÊS PALAVRAS, UMA RELAÇÃO",
    flow: ["Competição", "Interdependência", "Negociação"],
    highlight: "Competição + interdependência + negociação.",
    text: "Rivalidade não significa isolamento. Ao mesmo tempo em que competem por tecnologia, influência e mercados, Estados Unidos e China comerciam, investem e negociam — e essas dimensões acontecem ao mesmo tempo. Geopolítica não é escolher um time. É compreender interesses, relações e escalas.",
  },

  lenses: {
    eyebrow: "Seis dimensões do poder",
    title: "PODER É MULTIDIMENSIONAL",
    subtitle:
      "Para analisar a relação entre duas potências, vamos observar diferentes dimensões do poder — sem criar um ranking único.",
    items: [
      {
        id: "economica",
        emoji: "💼",
        name: "ECONÔMICA",
        question: "Quem produz, compra, vende e investe — e com que peso?",
      },
      {
        id: "tecnologica",
        emoji: "💡",
        name: "TECNOLÓGICA",
        question: "Quem desenvolve, produz e depende de quais tecnologias?",
      },
      {
        id: "financeira",
        emoji: "💵",
        name: "FINANCEIRA",
        question:
          "Que moedas, instituições e fluxos de capital organizam pagamentos e investimentos?",
      },
      {
        id: "militar",
        emoji: "🛡️",
        name: "MILITAR",
        question: "Que capacidades e tensões de segurança existem, e em quais regiões?",
      },
      {
        id: "diplomatica",
        emoji: "🤝",
        name: "DIPLOMÁTICA",
        question: "Que alianças, acordos e canais de negociação existem?",
      },
      {
        id: "infraestrutura-influencia",
        emoji: "🛤️",
        name: "INFRAESTRUTURA E INFLUÊNCIA",
        question:
          "Que redes de transporte, energia e comunicação conectam países e ampliam laços entre eles?",
      },
    ],
    highlight:
      "Cada dimensão faz uma pergunta diferente. Um país pode estar em posição forte em uma e depender de outros em outra.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "AGORA CONECTE",
    context:
      "Minerais críticos possuem diferentes usos estratégicos na indústria, na energia e na tecnologia. Extração, processamento e fabricação de componentes podem ocorrer em países diferentes — e a distribuição dessas etapas cria, ao mesmo tempo, disputas e dependências.",
    flow: [
      "Mineral crítico",
      "Processamento",
      "Componente",
      "Produto final",
      "Mercado consumidor",
    ],
    question: "Onde há competição? Onde há interdependência?",
    accordions: [
      {
        id: "onde-competicao",
        title: "ONDE HÁ COMPETIÇÃO",
        content:
          "Quando países e empresas disputam acesso a minerais, tecnologias, mercados ou capacidade de produção em etapas consideradas estratégicas da cadeia.",
      },
      {
        id: "onde-interdependencia",
        title: "ONDE HÁ INTERDEPENDÊNCIA",
        content:
          "Quando etapas da cadeia — extração, processamento, fabricação e consumo — estão distribuídas entre diferentes países, de modo que cada um depende, em algum grau, dos demais.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O RACIOCÍNIO",
    paragraphs: [
      "Você já levantou uma hipótese, conheceu as três palavras-chave e observou diferentes dimensões do poder. Agora vamos organizar esse raciocínio e aprender a analisar a relação entre potências sem reduzi-la a uma única palavra — e sem escolher um time.",
    ],
  },

  deepDive: {
    title: "AGORA OLHE PARA A RELAÇÃO COM CUIDADO",
    items: [
      {
        id: "rivalidade-isolamento",
        title: "Rivalidade não significa isolamento",
        content:
          "Estados Unidos e China competem em várias dimensões, mas mantêm relações econômicas intensas. Segundo o USTR, o comércio de bens e serviços entre Estados Unidos e China foi estimado em US$ 494,6 bilhões em 2025. Competir por tecnologia, influência ou mercados não elimina, por si só, as trocas nem as dependências mútuas.",
        highlight: "RIVALIDADE NÃO SIGNIFICA ISOLAMENTO.",
      },
      {
        id: "poder-multidimensional",
        title: "Poder é multidimensional",
        content:
          "Analisar a relação entre duas potências exige olhar para várias dimensões: econômica, tecnológica, financeira, militar, diplomática e de infraestrutura e influência. Uma potência pode estar em posição forte em uma dimensão e depender de outros em outra; por isso, não faz sentido resumir tudo em um único ranking.",
        highlight: "Poder é multidimensional.",
      },
      {
        id: "semicondutores",
        title: "Semicondutores: uma questão econômica e estratégica",
        content:
          "Semicondutores são componentes presentes em equipamentos eletrônicos, veículos, máquinas e sistemas digitais. Na dimensão econômica, envolvem cadeias produtivas, empresas, empregos, investimentos e mercados. Na dimensão estratégica, envolvem segurança econômica, capacidade tecnológica e o interesse dos países em reduzir vulnerabilidades. Um exemplo factual: em janeiro de 2026, o Bureau of Industry and Security dos EUA passou a analisar caso a caso pedidos de licença para exportação à China de chips como Nvidia H200 e AMD MI325X, desde que determinadas condições fossem atendidas. Esse exemplo não representa nem liberação total nem bloqueio total.",
        highlight: "Um mesmo componente pode ser, ao mesmo tempo, mercadoria e ativo estratégico.",
      },
      {
        id: "derisking-decoupling",
        title: "De-risking não é decoupling",
        content:
          "Decoupling é a separação econômica mais ampla entre economias. De-risking é a redução seletiva de vulnerabilidades e dependências consideradas estratégicas, sem necessariamente romper a relação econômica. A diferença importa: um país ou uma empresa pode diversificar fornecedores ou compradores sem encerrar o comércio com nenhum deles.",
        highlight: "Diversificar não significa necessariamente romper.",
      },
      {
        id: "taiwan",
        title: "Taiwan: território, soberania, segurança, tecnologia e cadeias produtivas",
        content:
          "Este item apresenta enquadramentos diplomáticos e não adota nenhuma conclusão sobre a soberania de Taiwan. Pequim sustenta o princípio de Uma Só China e afirma que Taiwan faz parte do território chinês. Desde 1979, os Estados Unidos reconhecem diplomaticamente o governo da República Popular da China e mantêm relações não oficiais com Taiwan. São posições e enquadramentos diplomáticos distintos: não devem ser tratados como idênticos. O tema costuma aparecer em análises que reúnem, ao mesmo tempo, território, soberania, segurança, tecnologia e cadeias produtivas.",
        highlight:
          "Descrever posições diplomáticas não é o mesmo que concluir sobre soberania.",
        flow: [
          "Território",
          "Soberania",
          "Segurança",
          "Tecnologia",
          "Cadeias produtivas",
        ],
      },
      {
        id: "belt-and-road",
        title: "Iniciativa Cinturão e Rota (Belt and Road Initiative)",
        content:
          "A Iniciativa Cinturão e Rota (Belt and Road Initiative) reúne projetos e parcerias ligados a infraestrutura, transporte e investimentos entre a China e outros países. Potenciais oportunidades: conectividade, comércio, transporte e logística, investimentos. Potenciais riscos: sustentabilidade da dívida, transparência, governança, impactos sociais e ambientais. Os resultados dependem de cada projeto, de cada país envolvido e das condições de cada acordo.",
        highlight: "Oportunidades e riscos dependem de cada projeto e de cada acordo.",
      },
      {
        id: "comparacao-guerra-fria",
        title: "A comparação com a Guerra Fria tem limites",
        content:
          "A comparação pode ajudar a perceber rivalidade estratégica, tecnologia, segurança e disputa por influência. Mas pode esconder o comércio bilateral expressivo, as cadeias produtivas integradas e um grau de interdependência econômica muito maior do que o existente na relação entre Estados Unidos e União Soviética durante a Guerra Fria. Em quais aspectos a comparação ajuda? Em quais ela deixa de funcionar?",
        highlight: "Uma comparação ajuda a pensar — mas não substitui a análise.",
      },
      {
        id: "negociacao-regras",
        title: "Negociação e regras",
        content:
          "Mesmo em competição, os países negociam: acordos, regras comerciais e canais diplomáticos são espaços em que interesses conflitantes são discutidos. Negociar não elimina a disputa, mas cria formas de administrá-la.",
        highlight: "Negociar não é deixar de competir.",
      },
      {
        id: "terceiros-paises",
        title: "E os outros países?",
        content:
          "Países que não estão diretamente na relação também podem ser afetados e podem procurar diversificar parceiros comerciais, investimentos e fornecedores.",
        highlight: "O que acontece entre dois pode reorganizar as opções de todos.",
      },
    ],
    closing:
      "Geopolítica não é escolher um time. É compreender interesses, relações e escalas.",
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question:
      "Como o Brasil busca defender seus próprios interesses mantendo relações relevantes com diferentes polos?",
    center: "BRASIL",
    items: [
      {
        id: "comercio",
        label: "COMÉRCIO",
        description:
          "Relações comerciais com diferentes parceiros podem ampliar mercados e oportunidades, mas também criar dependências em determinados setores.",
      },
      {
        id: "investimentos",
        label: "INVESTIMENTOS",
        description:
          "Investimentos de diferentes origens podem trazer capital e tecnologia; cabe avaliar condições, contrapartidas e impactos.",
      },
      {
        id: "tecnologia",
        label: "TECNOLOGIA",
        description:
          "O acesso a tecnologias e a participação em etapas de maior valor das cadeias produtivas influenciam a autonomia do país.",
      },
      {
        id: "diplomacia",
        label: "DIPLOMACIA",
        description:
          "A diplomacia é o espaço em que o país negocia acordos e defende seus interesses em relação a diferentes parceiros.",
      },
      {
        id: "diversificacao",
        label: "DIVERSIFICAÇÃO",
        description:
          "Diversificar parceiros pode reduzir vulnerabilidades sem necessariamente romper relações com nenhum deles.",
      },
      {
        id: "politicas-publicas",
        label: "POLÍTICAS PÚBLICAS",
        description:
          "Decisões internas, contratos e políticas públicas também influenciam como os efeitos externos chegam ao país.",
      },
    ],
    study:
      "Uma relação entre grandes potências não determina automaticamente o que acontece no Brasil. O Brasil não precisa ser apresentado como obrigado a escolher entre Estados Unidos e China: a análise consiste em reconhecer interesses, opções e limites.",
    highlight:
      "Manter relações relevantes com diferentes polos não é escolher lado. É defender interesses próprios.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: ["Texto", "Mapa", "Gráfico de comércio", "Notícia"],
    demandsTitle: "A questão cobra",
    demands: [
      "Identificação de interesses",
      "Reconhecimento de interdependência",
      "Relação entre escalas",
      "Distinção entre conceitos",
    ],
    highlight:
      "A prova raramente pede para escolher um lado: pede para você interpretar relações.",
    guidingIntro: "Diante de uma notícia sobre grandes potências, pergunte:",
    guidingQuestions: [
      "Quais interesses aparecem de cada lado?",
      "Onde há competição, onde há interdependência e onde há negociação?",
      "Que dimensões do poder estão em jogo?",
      "Estamos diante de diversificação seletiva (de-risking) ou de separação mais ampla (decoupling)?",
      "Em quais aspectos uma comparação histórica ajuda — e em quais ela deixa de funcionar?",
    ],
  },

  question: {
    id: "s02-a05-q01",
    statement:
      "Dois países competem por liderança tecnológica e adotam medidas para reduzir dependências em setores considerados estratégicos. Ao mesmo tempo, continuam mantendo comércio bilateral expressivo, e empresas de ambos participam das mesmas cadeias produtivas. Essa situação evidencia principalmente que:",
    options: [
      {
        id: "A",
        text: "os dois países formam blocos econômicos isolados, sem trocas entre si.",
      },
      {
        id: "B",
        text: "competição e interdependência podem coexistir, e reduzir dependências seletivas não implica necessariamente romper as relações econômicas.",
      },
      {
        id: "C",
        text: "a competição entre os países eliminou o comércio entre eles.",
      },
      {
        id: "D",
        text: "a relação entre os dois países se resume à cooperação, sem conflito de interesses.",
      },
      {
        id: "E",
        text: "a tecnologia perdeu importância nas relações internacionais.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "A alternativa B está correta. A competição por liderança tecnológica e as medidas para reduzir dependências estratégicas mostram rivalidade; o comércio expressivo e as cadeias produtivas comuns mostram interdependência. Reduzir dependências seletivas (de-risking) não é o mesmo que romper a relação (decoupling). As demais alternativas simplificam a situação: A e C afirmam um isolamento ou uma ruptura que o enunciado contradiz; D nega o conflito de interesses; e E afirma que a tecnologia perdeu importância, quando a situação mostra o contrário.",
  },

  missionCheck:
    "Agora você consegue olhar para uma notícia sobre Estados Unidos e China e perguntar: onde há competição, onde há interdependência e onde há negociação?",

  completionMessage:
    "Você aprendeu que geopolítica não é escolher um time: é compreender interesses, relações e escalas.",
};
