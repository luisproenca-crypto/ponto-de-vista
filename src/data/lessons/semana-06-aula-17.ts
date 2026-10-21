import type { LessonContent } from "@/lib/types";

/**
 * AULA 17 — ENERGIA, TRANSIÇÃO E GEOPOLÍTICA
 * Semana 06 • Geopolítica & Atualidades (CONECTE)
 *
 * Ideia central: energia é relação de poder; a transição redistribui
 * vantagens e vulnerabilidades. Pergunta-guia (em `connection` e
 * `missionCheck`): "Ter energia é ter poder?" Nova operação: seis lentes
 * (fonte, segurança, dependência, mercado e preço, transição, custo social).
 * Na Aula 16, a transição foi mitigação; aqui, é disputa geopolítica. A trilha
 * "de onde vem, por onde passa e quem controla" fica para a Aula 20; acordos
 * climáticos e governança, para a Aula 18. Países A, B, C e Altamar são
 * fictícios. NEUTRALIDADE (2º turno em 25/10/2026): sem candidatos, partidos
 * ou avaliação de governo; Petrobras, preços e OPEP só como relação
 * institucional e geoeconômica.
 *
 * DADOS FACTUAIS (conferidos em 20/10/2026; REVISAR ANTES DE PUBLICAR os
 * itens de 2026):
 *   • OPEP: Declaration of Cooperation (dez. 2016), OPEP e não membros com
 *     níveis de produção (comunicado de 30/11/2025); Charter of Cooperation
 *     (02/07/2019), "plataforma para facilitar o diálogo" (OPEP, 18/02/2025).
 *     CNPE aprovou a participação do Brasil na CoC em 18/02/2025, sem cortes
 *     de produção (governo e imprensa especializada). Não se diz "Brasil
 *     entrou na OPEP+".
 *   • UE (Comissão, página sobre GNL; Conselho, 26/01/2026): gás russo por
 *     gasoduto de 41% (2021) a ~6% (2025); GNL de 20% a 45% das importações
 *     de gás; EUA com 58% do GNL em 2025; gás russo total (gasoduto + GNL)
 *     ~12% do total das importações de gás da UE em 2025 (infográfico do
 *     Conselho, revisto em 13/04/2026);
 *     Regulamento (UE) 2026/261: GNL russo proibido do início de 2027 e
 *     gasoduto do outono de 2027. Ressalva: a Comissão refere os 41% às
 *     "importações de energia"; a aula diz "importações".
 *   • AIE, Global Critical Minerals Outlook (16/07/2026): principal país no
 *     refino (não na mineração) de terras raras com 85% em 2025 (90%+ em 2023); controles de abril de 2025 levaram
 *     algumas montadoras a reduzir produção.
 *   • AIE (situação em 20/10/2026): conflito iniciado em 28/02/2026 travou os
 *     fluxos por Ormuz; em 11/03/2026, 400 milhões de barris, "largest ever
 *     oil stock release"; Oil Market Report de out. 2026: recuperação
 *     "frágil" e diesel em preço recorde.
 *   • EPE: BEN 2026 (86,8% renovável na matriz elétrica e 49,4% na
 *     energética, 2025; mesma fonte da Aula 14); "Brasil é importador líquido
 *     de óleo diesel desde a década de 1990" (abr. 2025).
 *   • Petróleo como principal produto exportado em 2025 (MDIC, via imprensa):
 *     a aula diz "entre os principais". Nordeste com ~94% "de toda a energia
 *     gerada pela fonte eólica em julho de 2026", dados de geração da CCEE
 *     (informe da SDE/BA, set. 2026; universo não detalhado na fonte).
 *   • Leis 14.948/2024 (hidrogênio de baixa emissão) e 14.993/2024
 *     (Combustível do Futuro): ementas conferidas.
 * FORA: percentuais de mistura de biocombustíveis, número de membros da OPEP,
 * expansão solar regional, casos reais de conflito em parques e usinas.
 *
 * Título, subtítulo, vídeo e status ficam em `src/data/course.ts`. Aula em
 * preparação (`status: "em-preparacao"`), ainda não ligada (`content: null`).
 */
export const aula17Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de analisar uma situação energética identificando as fontes predominantes e a composição da matriz energética, o grau de dependência e de segurança energética, os atores que influenciam oferta, preço e tecnologia, e o que a transição muda nessas relações em diferentes escalas.",

  hypothesis: {
    title: "O OLHAR DO PACO",
    intro:
      "Três países fictícios. O País A exporta petróleo, e boa parte do orçamento do governo vem dessa venda. O País B importa a maior parte do gás que consome, quase todo por um único gasoduto. O País C tem sol e vento em abundância e já gera muita eletricidade com eles, mas compra de fora os painéis, as turbinas e as baterias.",
    cards: [
      { id: "reservas", label: "Ter reservas de petróleo e gás" },
      { id: "natureza", label: "Ter sol e vento em abundância" },
      { id: "equipamentos", label: "Fabricar os equipamentos" },
      { id: "rotas", label: "Ter vários fornecedores e rotas" },
      { id: "compradores", label: "Ter compradores garantidos" },
    ],
    question: "Quem tem mais poder energético?",
    paco: "Escolha os dois critérios que, para você, mais definem poder energético. Depois teste: qual dos três países vence com cada um deles?",
    reveal:
      "Cada critério dá a vitória a um país diferente. A tem o recurso, mas depende do preço e de quem compra. B depende de uma rota, mas é um grande comprador, e quem vende também precisa dele. C produz a própria eletricidade, mas depende de quem fabrica os equipamentos. Poder energético não é uma coisa que se tem: é uma relação.",
  },

  connection: {
    title: "DA RESPOSTA AO CLIMA À DISPUTA PELA ENERGIA",
    flow: ["Onde", "Que processo", "Quem decide", "Que dano", "Que poder"],
    highlight: "Mudar de fonte é também mudar de dependência.",
    text: "Na Aula 16, a transição energética apareceu como mitigação: uma resposta às causas da mudança climática. Aqui, olhamos a mesma transição por outro ângulo. Trocar petróleo por sol e vento muda quem vende, quem compra, quem fabrica e quem fica vulnerável. As Aulas 13, 14 e 15 continuam valendo: território, processo e decisão. A pergunta desta aula é: “Ter energia é ter poder?”",
  },

  lenses: {
    eyebrow: "Seis lentes para ler a energia",
    title: "LEIA A ENERGIA COMO RELAÇÃO",
    subtitle:
      "Cada lente faz uma pergunta diferente sobre a mesma situação. Nenhuma, sozinha, diz quem tem poder.",
    items: [
      {
        id: "fonte",
        emoji: "⚡",
        name: "FONTE",
        question: "Que fontes predominam e como se compõe a matriz energética?",
      },
      {
        id: "seguranca",
        emoji: "🛡️",
        name: "SEGURANÇA",
        question: "A energia continua disponível e acessível quando ocorre um choque?",
      },
      {
        id: "dependencia",
        emoji: "🔗",
        name: "DEPENDÊNCIA",
        question: "Quem depende de quem, e que alternativas cada um tem?",
      },
      {
        id: "mercado-e-preco",
        emoji: "📈",
        name: "MERCADO E PREÇO",
        question: "Quem consegue influenciar a oferta e o preço, e quem só sente o efeito?",
      },
      {
        id: "transicao",
        emoji: "🔄",
        name: "TRANSIÇÃO",
        question: "O que muda, o que permanece e em que ritmo?",
      },
      {
        id: "custo-social",
        emoji: "⚖️",
        name: "CUSTO SOCIAL",
        question: "Quem ganha, quem paga e onde?",
      },
    ],
    highlight:
      "Ter o recurso é uma vantagem. Transformá-lo em poder depende de mercado, infraestrutura, tecnologia e alternativas.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "UM CHOQUE, VÁRIAS POSIÇÕES",
    context:
      "Em 28 de fevereiro de 2026, começou um conflito no Oriente Médio envolvendo o Irã que travou os fluxos de petróleo pelo Estreito de Ormuz, o gargalo que você conheceu na Aula 02. Em 11 de março, a Agência Internacional de Energia anunciou a maior liberação de estoques de emergência de sua história. Em outubro, a agência ainda descrevia a recuperação dos fluxos como frágil.",
    flow: ["Choque na rota", "Oferta menor", "Preço maior", "Efeitos diferentes"],
    question: "O mesmo choque atinge todos da mesma forma?",
    accordions: [
      {
        id: "exportador-fora",
        title: "QUEM EXPORTA POR OUTRAS ROTAS",
        content:
          "Um exportador que não depende de Ormuz pode vender mais caro. Mas também sente o choque: se a economia mundial desacelera, a demanda cai, e a receita alta de hoje pode não durar.",
      },
      {
        id: "importador",
        title: "QUEM IMPORTA PETRÓLEO OU DERIVADOS",
        content:
          "O importador paga mais pelo combustível, e o aumento chega ao frete, aos alimentos e à inflação. A Agência Internacional de Energia registrou preços recordes do diesel em 2026, o que pesa sobre quem depende de caminhões e máquinas. Estoques de emergência não evitam o choque, mas compram tempo.",
      },
      {
        id: "eletricidade-renovavel",
        title: "QUEM TEM ELETRICIDADE RENOVÁVEL",
        content:
          "Uma matriz elétrica renovável protege a geração de eletricidade, mas não o transporte movido a diesel e gasolina. A proteção depende da composição da matriz energética inteira, e não só da tomada.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "Você viu que cada país tem uma forma diferente de poder e de vulnerabilidade, e que um choque distante atinge cada posição de um jeito. Agora vamos dar precisão aos conceitos que sustentam essa leitura.",
      "Separe sempre três coisas: o dado físico (quanto se produz e consome), a relação econômica (quem compra, quem vende, a que preço) e a decisão política (o que cada Estado escolhe fazer).",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "fontes-e-matriz",
        name: "FONTES E MATRIZ ENERGÉTICA",
        conceito:
          "Matriz energética é a composição de todas as fontes de energia usadas por um país: no transporte, na indústria, nas casas e na geração de eletricidade. As fontes podem ser renováveis (água, sol, vento, biomassa) ou não renováveis (petróleo, gás, carvão, urânio). Baixo carbono descreve outra coisa: quanto gás de efeito estufa a fonte emite.",
        penseAssim:
          "Pergunte duas coisas separadas: a fonte se renova? Ela emite muito ou pouco carbono? As respostas nem sempre coincidem.",
        exemplo:
          "A energia nuclear tem baixa emissão, mas não é renovável. A lenha é renovável, mas, se vier de desmatamento, não é de baixo carbono. Uma grande hidrelétrica é renovável, mas pode alagar terras e deslocar populações.",
        naoConfunda:
          "Renovável não é sinônimo de sem impacto nem, necessariamente, de baixo carbono, e baixo carbono não é sinônimo de renovável. E, como na Aula 14, a matriz elétrica é só uma parte da matriz energética.",
        naProva:
          "Gráficos de pizza da matriz pedem atenção ao título: energia total ou só eletricidade? A resposta muda a conclusão.",
      },
      {
        id: "seguranca-energetica",
        name: "SEGURANÇA ENERGÉTICA",
        conceito:
          "Segurança energética é a capacidade de manter a disponibilidade e o acesso à energia diante de choques. Ela depende de preço, infraestrutura, diversificação de fontes e fornecedores, estoques e resiliência para atravessar crises.",
        penseAssim:
          "Imagine um corte repentino: quanto tempo o país aguenta, quantas alternativas tem e quanto vai pagar a mais?",
        exemplo:
          "Um país pode produzir todo o petróleo que consome e, ainda assim, sofrer com a alta internacional de preços, se vende e compra no mercado mundial ou se não refina o próprio petróleo.",
        naoConfunda:
          "Segurança energética não é autossuficiência. Um país que importa de muitos fornecedores, por várias rotas, pode estar mais seguro do que outro que produz tudo, mas por uma única refinaria.",
        naProva:
          "Desconfie de alternativas que tratam produção nacional como garantia de proteção. A questão quer saber se você considera preço, rotas e alternativas.",
      },
      {
        id: "dependencia-e-interdependencia",
        name: "DEPENDÊNCIA E INTERDEPENDÊNCIA",
        conceito:
          "Dependência energética é a necessidade de recorrer a fontes, fornecedores ou rotas externas. Ela costuma ser mútua: o importador precisa do combustível, e o exportador precisa do comprador e da receita. Isso é interdependência, que você já viu nas cadeias da Aula 05.",
        penseAssim:
          "Pergunte quem sofreria mais se a relação fosse cortada amanhã, e quem teria alternativas mais rápido.",
        exemplo:
          "Um exportador de petróleo cujo orçamento depende dessa venda é vulnerável a uma queda de preço tanto quanto o importador é vulnerável a uma alta.",
        naoConfunda:
          "Dependência não é, necessariamente, fragilidade absoluta. Ela se torna vulnerabilidade quando se concentra em um só fornecedor ou rota e faltam alternativas.",
        naProva:
          "Questões sobre sanções e embargos cobram essa leitura: quem impõe a medida também paga um custo.",
      },
      {
        id: "petroleo-gas-e-poder",
        name: "PETRÓLEO, GÁS E PODER",
        conceito:
          "Petróleo e gás concentram poder porque as reservas estão desigualmente distribuídas e porque são, ainda hoje, fontes centrais da economia mundial. A OPEP, criada em 1960, reúne países exportadores. A Declaração de Cooperação, de 2016, junta a OPEP a outros produtores que ajustam níveis de produção, a chamada OPEP+.",
        penseAssim:
          "Quem consegue mudar a oferta de um produto que o mundo inteiro usa consegue mexer no preço, e o preço mexe com economias distantes.",
        exemplo:
          "Gás por gasoduto e gás natural liquefeito (GNL) criam relações diferentes. O gasoduto liga produtor e comprador por anos, numa rota fixa. O GNL viaja de navio, pode vir de vários países, mas exige terminais e costuma custar mais.",
        naoConfunda:
          "Ter influência sobre o preço não é controlar o mercado sozinho. Demanda, estoques, outros produtores e crises também mexem no preço.",
        naProva:
          "Mapas de gasodutos e rotas marítimas pedem que você veja a rigidez ou a flexibilidade de cada ligação.",
      },
      {
        id: "transicao-energetica",
        name: "TRANSIÇÃO ENERGÉTICA",
        conceito:
          "Transição energética é a mudança gradual da composição da matriz, de fontes fósseis para fontes de baixa emissão. Envolve eletrificar usos, como transporte e indústria, ampliar redes de transmissão e criar formas de armazenamento, porque sol e vento variam ao longo do dia e das estações.",
        penseAssim:
          "Pense numa reforma com a casa ocupada: as fontes antigas continuam funcionando enquanto as novas são instaladas, e a obra leva décadas.",
        exemplo:
          "Um país pode ampliar rapidamente a energia solar e, ao mesmo tempo, continuar dependente de diesel no transporte de cargas, porque caminhões, portos e refinarias não mudam no mesmo ritmo.",
        naoConfunda:
          "Transição energética não é substituição instantânea. Fontes antigas e novas coexistem, e o ritmo varia entre países, setores e regiões.",
        naProva:
          "Alternativas que falam em “abandono imediato” de fósseis ou em “fim da dependência” costumam ser armadilha. A prova quer o processo, não a troca.",
      },
      {
        id: "novas-dependencias",
        name: "NOVAS DEPENDÊNCIAS DA TRANSIÇÃO",
        conceito:
          "Uma matriz menos dependente de combustíveis fósseis pode criar outras dependências: minerais, refino desses minerais, componentes, baterias, painéis, tecnologia e capacidade industrial. A dependência não desaparece; muda de lugar e de natureza.",
        penseAssim:
          "O petróleo é comprado todo dia; o painel solar é comprado uma vez e funciona por anos. A dependência continua, mas pesa sobretudo na compra, na expansão e na reposição.",
        exemplo:
          "Segundo a Agência Internacional de Energia, no refino de terras raras, etapa entre a mineração e a fabricação de componentes, o principal país refinador concentrava cerca de 85% da oferta mundial em 2025, e restrições de exportação naquele ano levaram algumas montadoras a reduzir a produção.",
        naoConfunda:
          "Ter sol e vento não é ter autonomia energética. Sem fabricar ou diversificar a compra dos equipamentos, o país troca uma vulnerabilidade por outra.",
        naProva:
          "Textos sobre minerais críticos e transição pedem que você reconheça a nova dependência sem tratá-la como idêntica à do petróleo.",
      },
      {
        id: "custo-social",
        name: "CUSTO SOCIAL DA ENERGIA",
        conceito:
          "Toda escolha energética distribui ganhos e custos de forma desigual: no preço pago por famílias e empresas, nos empregos de regiões que dependem de uma fonte, no território ocupado por usinas, linhas e minas, e nas comunidades que vivem perto delas.",
        penseAssim:
          "Para cada projeto, pergunte quem recebe a energia, quem recebe a renda e quem fica com o impacto. Nem sempre são as mesmas pessoas.",
        exemplo:
          "Uma alta do diesel encarece o frete e os alimentos e pesa mais no orçamento de quem ganha menos. Uma usina distante pode levar energia à cidade e deixar o impacto no lugar onde foi construída.",
        naoConfunda:
          "Custo social não é argumento contra uma fonte específica. É uma pergunta que vale para todas: petróleo, hidrelétrica, eólica ou solar.",
        naProva:
          "Charges e notícias sobre preço de combustível ou conflitos em grandes obras pedem que você identifique quem paga e onde.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "petroleo-e-poder",
        title: "Ter petróleo é ter poder?",
        content:
          "Ter reservas é uma condição, não uma garantia. Para virar poder, o petróleo precisa ser extraído, transportado, refinado e vendido, o que exige tecnologia, infraestrutura, compradores e instituições capazes de administrar a renda. Um país com grandes reservas pode depender de outros para refinar o próprio petróleo e importar gasolina e diesel. E o exportador muito dependente dessa receita fica exposto às oscilações de preço que não controla.",
        flow: ["Reserva", "Produção", "Refino e transporte", "Compradores", "Poder"],
        highlight: "O recurso é ponto de partida. O poder depende do que se consegue fazer com ele.",
      },
      {
        id: "dependencia-vulnerabilidade",
        title: "Quando a dependência vira vulnerabilidade?",
        content:
          "Em 2021, segundo a Comissão Europeia, o gás russo por gasoduto respondia por cerca de 41% das importações da União Europeia. Com a invasão da Ucrânia pela Rússia, essa dependência virou vulnerabilidade: o fornecimento caiu e os preços dispararam. A União Europeia diversificou fornecedores, ampliou terminais de GNL e reduziu o consumo. Em 2025, o gás russo por gasoduto caiu para cerca de 6%; somando gasoduto e GNL, o gás russo ainda era cerca de 12% do total das importações de gás da UE, segundo o Conselho da UE. O GNL passou de 20% para 45% das importações de gás, com 58% dele vindo dos Estados Unidos. Um regulamento de 2026 prevê proibir o GNL russo a partir do início de 2027 e o gás russo por gasoduto a partir do outono europeu desse mesmo ano. A redução veio de várias medidas e circunstâncias combinadas, e não de uma causa única. E criou outras exposições: ao preço do mercado mundial de GNL e a um novo fornecedor predominante.",
        flow: ["Dependência", "Choque", "Diversificação", "Redução", "Novas vulnerabilidades"],
        highlight: "Diversificar reduz um risco e cria outros. A segurança se constrói, não se conquista de uma vez.",
      },
      {
        id: "troca-de-dependencia",
        title: "A transição troca uma dependência por outra?",
        content:
          "Em parte, sim. Um país que gera eletricidade com sol e vento importa menos combustível, mas pode passar a depender de quem fornece painéis, turbinas, baterias e os minerais refinados que entram neles. A diferença está na natureza da dependência: o combustível é um fluxo contínuo; o equipamento é um estoque que dura anos. Um corte no petróleo para a economia em semanas; um corte nos painéis atrasa a expansão. As duas vulnerabilidades existem, mas não são iguais.",
        flow: ["Dependência de combustível", "Transição", "Dependência de equipamentos e minerais"],
        highlight: "A transição não acaba com a dependência. Muda o que se compra e quando se compra.",
      },
      {
        id: "renovavel-sem-conflito",
        title: "Energia renovável é sinônimo de energia sem conflito?",
        content:
          "Não. Grandes hidrelétricas alagam áreas e podem deslocar populações ribeirinhas e indígenas. Parques eólicos e solares ocupam muito território e envolvem contratos de arrendamento, acesso à terra, ruído e mudanças na vida de comunidades tradicionais. A mineração de insumos para equipamentos também tem impacto onde acontece. Isso não torna essas fontes equivalentes às fósseis em emissões; mostra que toda energia ocupa um território e distribui custos e benefícios.",
        flow: ["Fonte renovável", "Território ocupado", "Comunidades afetadas", "Disputa"],
        highlight: "Limpa no clima não significa neutra no território.",
      },
    ],
    closing:
      "Em cada caso, o poder apareceu como relação entre recurso, mercado, infraestrutura e território.",
  },

  brazilConnections: {
    title: "E O BRASIL?",
    question: "Que tipo de poder e de vulnerabilidade energética o Brasil tem?",
    center: "BRASIL",
    items: [
      {
        id: "fonte",
        label: "FONTE: MATRIZ ELÉTRICA × ENERGÉTICA",
        description:
          "Em 2025, segundo a EPE, 86,8% da eletricidade brasileira veio de fontes renováveis, mas na matriz energética total esse índice ficou em 49,4%. A tomada é muito renovável; o tanque do caminhão, bem menos.",
      },
      {
        id: "dependencia",
        label: "DEPENDÊNCIA: PRÉ-SAL E DERIVADOS",
        description:
          "Com a produção do pré-sal, o petróleo bruto está entre os principais produtos exportados pelo país. Ainda assim, segundo a EPE, o Brasil é importador líquido de óleo diesel desde a década de 1990. Exportar petróleo não protege, sozinho, da alta dos derivados.",
      },
      {
        id: "seguranca",
        label: "SEGURANÇA: BIOCOMBUSTÍVEIS",
        description:
          "Etanol e biodiesel reduzem a necessidade de importar combustíveis fósseis. A Lei do Combustível do Futuro, de 2024, criou programas para ampliar combustíveis de baixo carbono, como o diesel verde e o combustível sustentável de aviação.",
      },
      {
        id: "transicao",
        label: "TRANSIÇÃO: VENTO, SOL E HIDROGÊNIO",
        description:
          "Em julho de 2026, o Nordeste respondeu por cerca de 94% da energia eólica gerada, segundo dados da Câmara de Comercialização de Energia Elétrica (CCEE). O marco legal do hidrogênio de baixa emissão de carbono, de 2024, abre outra possibilidade, que ainda depende de mercado e investimento.",
      },
      {
        id: "custo-social",
        label: "CUSTO SOCIAL: O TERRITÓRIO DOS PARQUES",
        description:
          "A expansão eólica e solar leva renda e investimento a municípios do interior, mas também envolve disputas sobre uso da terra e convivência com comunidades locais. A pergunta “quem ganha e quem paga?” vale também aqui.",
      },
      {
        id: "mercado-e-preco",
        label: "MERCADO E PREÇO: A CARTA DA OPEP",
        description:
          "Em 2025, o Conselho Nacional de Política Energética aprovou a participação do Brasil na Carta de Cooperação, plataforma de diálogo assinada em 2019 por países da OPEP e outros produtores. Ela é distinta da Declaração de Cooperação, que reúne os países que ajustam níveis de produção, e não implica cotas.",
      },
    ],
    study:
      "Cada exemplo responde a uma lente. Juntos, mostram um país com eletricidade muito renovável, grande produtor de petróleo, dependente de derivados importados e com novas fontes em expansão.",
    highlight:
      "O Brasil tem muita energia. Transformá-la em segurança depende de refino, diversificação e de quem paga o custo de cada escolha.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Gráficos de matriz energética e elétrica",
      "Mapas de gasodutos e rotas de petróleo",
      "Séries de preço com eventos marcados",
      "Charges e notícias sobre transição",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Renovável, limpa ou de baixo carbono",
      "Segurança ou autossuficiência",
      "Dependência e interdependência",
      "Transição como processo",
    ],
    highlight:
      "A prova raramente pergunta “o que é a OPEP?”. Ela mostra um choque, um gráfico ou um mapa e quer saber se você enxerga quem ganha poder e quem fica vulnerável.",
    guidingIntro: "Diante de uma questão sobre energia, pergunte:",
    guidingQuestions: [
      "Que fontes predominam, e o gráfico mostra a matriz energética ou só a elétrica?",
      "O país está seguro ou apenas produz muito?",
      "Quem depende de quem, e com que alternativas?",
      "Quem consegue influenciar o preço, e quem só sente o efeito?",
      "O que a transição muda, o que permanece e quem paga?",
    ],
  },

  question: {
    id: "s06-a17-q01",
    statement:
      "O país fictício de Altamar produz petróleo bruto suficiente para exportar, mas importa grande parte do diesel que consome, porque sua capacidade de refino é limitada. Sua eletricidade vem principalmente de hidrelétricas, e o governo planeja ampliar a geração solar com painéis e baterias comprados de um único país fornecedor. Em 2026, um conflito em uma rota marítima distante elevou os preços internacionais do petróleo e do diesel. Considerando essas informações, a leitura mais adequada é que",
    options: [
      {
        id: "A",
        text: "por produzir mais petróleo do que consome, Altamar é autossuficiente em energia e fica protegida da alta internacional do petróleo e do diesel; a expansão solar diversifica a geração de eletricidade, e a compra de painéis e baterias de um único país cria uma dependência de fornecedor de equipamentos.",
      },
      {
        id: "B",
        text: "como a eletricidade vem principalmente de hidrelétricas, a matriz energética de Altamar é renovável, e o choque internacional no petróleo e no diesel afeta pouco o país; a expansão solar diversifica a geração, e a compra de painéis e baterias de um único país cria uma dependência de fornecedor.",
      },
      {
        id: "C",
        text: "Altamar segue exposta ao choque, porque importa derivados e seu transporte depende de diesel, o que a eletricidade renovável não resolve; a expansão solar diversifica a geração, mas comprar de um único país cria uma dependência ligada à aquisição e à troca dos equipamentos, não ao uso diário.",
      },
      {
        id: "D",
        text: "Altamar segue exposta ao choque, porque importa derivados e seu transporte depende de diesel, o que a eletricidade renovável não resolve; ao comprar painéis de um único país, troca a dependência do petróleo por outra de mesma natureza, sujeita a choques de preço a cada uso, como o diesel.",
      },
      {
        id: "E",
        text: "Altamar segue exposta ao choque, porque importa derivados e seu transporte depende de diesel, o que a eletricidade renovável não resolve; a expansão solar torna a geração independente do exterior, porque o sol é um recurso nacional e renovável, disponível no próprio território.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "A alternativa C está correta, porque combina três leituras. Segurança: produzir petróleo não protege Altamar, que importa diesel e paga o preço internacional; segurança energética não é autossuficiência. Matriz: a eletricidade renovável não alcança o transporte movido a diesel, porque a matriz elétrica é só parte da matriz energética. Transição: a energia solar diversifica a geração, mas comprar painéis e baterias de um único país cria uma dependência de equipamentos, que pesa na compra, na expansão e na reposição, e não a cada uso. A confunde produzir petróleo com estar protegido. B trata a matriz elétrica como se fosse a energética. D acerta o choque, mas iguala a dependência de equipamentos à de combustível. E acerta o choque, mas supõe que ter sol elimina a dependência externa, ignorando quem fornece os equipamentos.",
  },

  missionCheck:
    "Voltemos à pergunta da aula: ter energia é ter poder? Agora você consegue identificar as fontes predominantes e a composição da matriz, avaliar dependência e segurança, perceber quem influencia preço e tecnologia e reconhecer o que a transição muda nessas relações?",

  completionMessage:
    "Ter energia é uma vantagem; transformá-la em poder depende de mercado, infraestrutura, tecnologia e alternativas. Agora você tem seis lentes para ler a energia como relação, e não só como fonte.",
};
