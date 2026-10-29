import type { CheckpointContent } from "@/lib/types";

/**
 * CHECKPOINT 07 — Semana 07
 * Tema: "REGIÃO DE CAMPO ÂMBAR — Produção, Cadeia e Desigualdade"
 *
 * Situação-problema inteiramente fictícia que reúne os três eixos da
 * semana: Geografia Essencial (Aula 19 — técnica, produção × emprego,
 * localização, integração campo–indústria–cidade), Geopolítica &
 * Atualidades (Aula 20 — elos da cadeia, gargalo de infraestrutura,
 * gargalo de concentração, padrões de mercado, coordenação e poder,
 * vulnerabilidade) e Política & Cidadania (Aula 21 — média × distribuição,
 * renda × condições de vida, disponibilidade × acesso, correspondência
 * entre diagnóstico e instrumento).
 *
 * Operação integradora: "Quando uma produção muda e se conecta ao mundo,
 * quem ganha oportunidades, quem fica mais exposto — e a resposta pública
 * chega ao problema certo?" Cadeia cognitiva: transformação produtiva →
 * organização dos elos → vulnerabilidades → efeitos territoriais
 * diferentes → indicador → resposta pública.
 *
 * O checkpoint não ensina conteúdo novo. Todos os nomes, números,
 * empresas e instituições são fictícios; nenhum dado real é usado. A
 * duplicação da rodovia é tratada como intervenção de infraestrutura de
 * alcance territorial amplo, que responde a um problema real, porém
 * parcial; não é classificada como política universal. A certificação é
 * apenas um padrão de mercado do cenário, sem juízo de valor. Nenhum
 * vínculo de trabalho é qualificado moralmente.
 *
 * Arte: /public/assets/checkpoints/semana-07-campo-ambar.png (ilustração
 * da região, sem números nem classificações conceituais). Todas as
 * informações necessárias para responder estão no texto.
 */
export const checkpoint07Content: CheckpointContent = {
  intro:
    "Produção, cadeia e desigualdade: nesta semana, você aprendeu a ler como a produção se reorganiza, como os elos de uma cadeia distribuem valor, poder e vulnerabilidade e como medir desigualdades e analisar respostas públicas. Este checkpoint reúne as três leituras numa situação fictícia: quando uma produção muda e se conecta ao mundo, quem ganha oportunidades, quem fica mais exposto — e a resposta pública chega ao problema certo?",

  scenario: {
    title: "REGIÃO DE CAMPO ÂMBAR",
    description:
      "A Região de Campo Âmbar é uma região fictícia de fruticultura irrigada voltada à exportação. Em cinco anos, a produção exportada mais que dobrou. Na sede, Campo Âmbar, junto à rodovia e à subestação de energia, uma central de embalagem passou a usar seleção automatizada: as funções de seleção manual diminuíram, enquanto surgiram ocupações técnicas em irrigação, controle de qualidade e refrigeração. Depois de embalada, a fruta segue para câmaras frias operadas por uma única empresa, sem outra estrutura capaz de recebê-la se elas pararem, e daí por uma rodovia de pista simples até o porto, fora da região, onde embarca para compradores no exterior. Os principais compradores exigem certificação de origem e de boas práticas. Em Várzea das Pitangas, comunidade de pequenos produtores, a fruta também é cultivada, mas muitos produtores têm dificuldade de atender individualmente aos custos e requisitos da certificação e vendem a intermediários locais. No Bairro Horizonte, área periférica da própria sede onde vivem muitos trabalhadores temporários das fazendas, há escola e unidade de saúde, mas o atendimento não acompanha a demanda. A renda média por pessoa da região subiu de R$ 1.700 para R$ 2.000 no período. Dados fictícios por localidade, nesta ordem: renda média por pessoa, tempo médio de deslocamento até o trabalho e espera por consulta na unidade básica de saúde. Campo Âmbar, exceto o Bairro Horizonte: R$ 2.400, 25 minutos, 5 dias. Várzea das Pitangas: R$ 1.400, 35 minutos, 10 dias. Bairro Horizonte: R$ 1.600, 80 minutos, 25 dias. O governo estadual propõe duplicar a rodovia até o acesso ao porto. Todos os dados são do cenário fictício.",
    image: {
      // Envie o arquivo para: /public/assets/checkpoints/semana-07-campo-ambar.png
      src: "/assets/checkpoints/semana-07-campo-ambar.png",
      alt: "Mapa ilustrado da região fictícia de Campo Âmbar. Ao fundo, a sede Campo Âmbar, centro urbano da região, com a subestação de energia e o Bairro Horizonte, onde aparecem escola e unidade de saúde. À esquerda, as fazendas irrigadas, com aspersores, identificadas como produção destinada à exportação; setas levam a fruta delas para a central de embalagem com seleção automatizada, daí para as câmaras frias, únicas da região, e então pela rodovia de pista simples em direção ao porto, fora da região. Em primeiro plano, separada das fazendas, a comunidade de pequenos produtores de Várzea das Pitangas, com a indicação “Dificuldade com certificação” e o ícone de um documento.",
      caption:
        "Cenário fictício criado para fins didáticos. As informações necessárias para responder estão no texto.",
    },
  },

  steps: [
    {
      id: "observe",
      title: "OBSERVE",
      kind: "observation",
      questions: [
        "Se a produção mais que dobrou, por que as três localidades não perceberam a mesma melhora?",
        "Que funções diminuíram e quais surgiram com a seleção automatizada?",
        "Por onde a fruta precisa passar até chegar aos compradores, e em que pontos não há alternativa?",
        "Quem define as condições para vender aos compradores externos, e quem tem mais dificuldade de cumpri-las?",
        "A duplicação da rodovia responde a qual problema, e a quais ela não chega?",
      ],
    },
    {
      id: "nomeie",
      title: "NOMEIE",
      kind: "cards",
      eyebrow: "Revisão da semana",
      subtitle:
        "Quais ferramentas das Aulas 19, 20 e 21 ajudam a ler Campo Âmbar sem reduzir a situação ao crescimento da produção?",
      items: [
        {
          id: "producao-emprego",
          emoji: "📊",
          name: "PRODUÇÃO × EMPREGO",
          question: "A produção mais que dobrou; o que aconteceu com as funções de cada etapa?",
        },
        {
          id: "localizacao",
          emoji: "📍",
          name: "LOCALIZAÇÃO",
          question: "Que combinação de fatores explica a central de embalagem estar em Campo Âmbar?",
        },
        {
          id: "gargalo",
          emoji: "⏳",
          name: "GARGALO",
          question: "A pista simples e as câmaras frias únicas são o mesmo tipo de problema?",
        },
        {
          id: "coordenacao",
          emoji: "🧩",
          name: "COORDENAÇÃO E PODER",
          question: "Quem define os padrões para vender ao exterior, e isso significa controlar toda a cadeia?",
        },
        {
          id: "media-distribuicao",
          emoji: "⚖️",
          name: "MÉDIA × DISTRIBUIÇÃO",
          question: "A renda média da região subiu; o que ela não mostra sobre cada localidade?",
        },
        {
          id: "disponibilidade-acesso",
          emoji: "🚏",
          name: "DISPONIBILIDADE × ACESSO",
          question: "O Bairro Horizonte tem unidade de saúde; seus moradores conseguem ser atendidos?",
        },
      ],
      highlight:
        "Ler bem Campo Âmbar exige juntar a produção, a cadeia e a distribuição dos efeitos, sem confundir uma coisa com a outra.",
    },
    {
      id: "conecte",
      title: "CONECTE",
      kind: "flow",
      flow: [
        "Transformação produtiva",
        "Organização dos elos",
        "Vulnerabilidades",
        "Efeitos territoriais diferentes",
        "Indicador",
        "Resposta pública",
      ],
      highlight:
        "Uma produção que cresce e se conecta ao mundo redistribui oportunidades e riscos; a resposta pública precisa alcançar o ponto certo.",
      text:
        "A seleção automatizada aumentou a produção, reduziu funções manuais e criou ocupações técnicas na sede. A fruta passa por elos com problemas diferentes: a rodovia de pista simples limita a circulação; as câmaras frias únicas concentram o risco num só ponto; e a certificação exigida pelos compradores condiciona quem consegue vender ao exterior. Os efeitos chegam de forma diferente a cada lugar, e a renda média da região não mostra isso: é preciso olhar cada localidade. Por isso a resposta pública deve ser lida pelo problema que alcança.",
    },
    {
      id: "decida",
      title: "DECIDA",
      kind: "questions",
      questions: [
        {
          id: "s07-cp-q01",
          statement:
            "Na região fictícia de Campo Âmbar, a produção de frutas para exportação mais que dobrou em cinco anos. A central de embalagem da sede adotou seleção automatizada, que reduziu as funções de seleção manual e criou ocupações técnicas. A fruta segue para câmaras frias de uma única empresa, sem outra estrutura disponível, e depois por uma rodovia de pista simples até o porto. Os compradores exigem certificação, que muitos pequenos produtores de Várzea das Pitangas têm dificuldade de atender individualmente. A renda média da região subiu de R$ 1.700 para R$ 2.000. Dados fictícios (renda média por pessoa, deslocamento até o trabalho e espera por consulta): Campo Âmbar (exceto o Bairro Horizonte), R$ 2.400, 25 minutos e 5 dias; Várzea das Pitangas, R$ 1.400, 35 minutos e 10 dias; Bairro Horizonte, R$ 1.600, 80 minutos e 25 dias. O governo estadual propõe duplicar a rodovia até o acesso ao porto. A leitura mais adequada da situação é que",
          options: [
            {
              id: "A",
              text: "como a produção mais que dobrou e a renda média regional subiu, as diferenças entre as localidades se tornaram secundárias; a automação ampliou as oportunidades de trabalho em geral, e a duplicação da rodovia basta para completar esse ciclo de crescimento da região.",
            },
            {
              id: "B",
              text: "o principal problema da região é a distância até o porto, agravada pela pista simples; por isso, a duplicação da rodovia responde ao diagnóstico, já que, com o frete mais rápido, Várzea das Pitangas e o Bairro Horizonte passarão a se beneficiar da produção como a sede.",
            },
            {
              id: "C",
              text: "a automação da central explica as mudanças da região, e os compradores, por definirem a certificação, controlam toda a cadeia, da fazenda ao porto; assim, a rodovia e as câmaras frias têm pouco peso, porque as decisões que importam são tomadas fora do território.",
            },
            {
              id: "D",
              text: "algumas funções diminuíram e outras surgiram, e a média regional oculta diferenças locais; a câmara fria única concentra o risco, e a certificação condiciona quem exporta; a obra melhora a circulação, mas não alcança esses pontos nem a espera no Bairro Horizonte.",
            },
            {
              id: "E",
              text: "os pequenos produtores de Várzea das Pitangas têm dificuldade de arcar sozinhos com a certificação, mas apoiar só esse grupo criaria um privilégio diante dos grandes produtores, já certificados; o adequado é manter regras iguais para todos e investir na rodovia.",
            },
          ],
          correctOptionId: "D",
          explanation:
            "A alternativa D está correta, porque atravessa as três aulas. 1. PRODUÇÃO: a produção cresceu, mas a seleção automatizada reduziu funções manuais enquanto surgiram ocupações técnicas; a composição do trabalho mudou, e produção e emprego não variam necessariamente juntos (Aula 19). 2. CADEIA: a fruta passa por três pontos de natureza diferente: a rodovia de pista simples é um gargalo de infraestrutura; as câmaras frias de uma só empresa são um gargalo de concentração; e a certificação é um padrão de mercado que condiciona quem entra na cadeia (Aula 20). 3. EFEITOS E INDICADORES: a renda média subiu, mas Várzea das Pitangas e o Bairro Horizonte têm renda menor, e o bairro tem unidade de saúde com espera de 25 dias e deslocamento de 80 minutos (Aula 21). 4. RESPOSTA: a duplicação responde a um problema real de circulação, mas, por si só, não alcança a concentração das câmaras frias, a barreira da certificação nem o acesso no bairro. A usa o crescimento da produção e da média para tratar como secundárias diferenças que os dados mostram ser grandes, e supõe ampliação geral do trabalho e uma obra suficiente. B trata a distância como único problema e a obra como solução completa. C atribui tudo à técnica e confunde definir padrões com controlar toda a cadeia. E reconhece a dificuldade dos pequenos produtores, mas trata a focalização como privilégio.",
          optionFeedback: {
            A: "As diferenças continuam grandes: a média regional não descreve a renda menor nem a espera maior de Várzea das Pitangas e do Bairro Horizonte. E a automação reduziu algumas funções enquanto criou outras.",
            B: "A distância é só um dos problemas: as câmaras frias únicas e a certificação são outros pontos, e a obra não alcança a espera no Bairro Horizonte.",
            C: "A técnica não explica tudo, e definir padrões não é controlar toda a cadeia: a rodovia e as câmaras frias continuam pesando no território.",
            D: "Correta: separa produção de emprego, distingue os três pontos da cadeia, lê além da média e mostra que a obra responde a uma parte do diagnóstico.",
            E: "Considerar uma barreira específica de um grupo não é privilégio: regras iguais para quem parte de condições diferentes tendem a manter a diferença.",
          },
        },
      ],
    },
    {
      id: "mude-o-olhar",
      title: "MUDE O OLHAR",
      kind: "reflection",
      cards: [
        {
          id: "produzir-mais",
          before: "“Produzir mais beneficia a região.”",
          after:
            "“Depende de como produção, valor, oportunidades, vulnerabilidades e condições de acesso se distribuem pelo território.”",
        },
        {
          id: "distancia",
          before: "“O problema é a distância até o porto.”",
          after:
            "“A pista simples, as câmaras frias únicas e a certificação são problemas diferentes, e cada um pede uma leitura própria.”",
        },
        {
          id: "quem-controla",
          before: "“Quem define as regras controla tudo.”",
          after:
            "“Definir padrões dá poder sobre um elo, mas não significa possuir ou controlar toda a cadeia.”",
        },
        {
          id: "media",
          before: "“A renda média subiu, então todos melhoraram.”",
          after:
            "“A média resume a região; para saber quem melhorou, é preciso olhar cada localidade e o acesso real aos serviços.”",
        },
      ],
      closing:
        "Aula 19: entender como a produção se reorganiza e transforma trabalho e território. Aula 20: entender como os elos de uma cadeia distribuem valor, poder e vulnerabilidade. Aula 21: entender como medir desigualdades e analisar respostas públicas. Checkpoint 07: usar as três lentes ao mesmo tempo para interpretar e decidir.",
    },
  ],

  conclusion:
    "Diante de uma transformação produtiva, você já consegue fazer uma leitura em camadas: o que mudou na produção e no trabalho; por quais elos a produção passa e onde estão os pontos sem alternativa; quem define as condições de entrada; como os efeitos chegam a cada lugar; o que uma média mostra e o que esconde; e a que parte do problema uma resposta pública corresponde.",

  celebrationMessage:
    "Semana 07 concluída: agora você lê produção, cadeia e desigualdade juntas, da transformação à resposta pública.",
};
