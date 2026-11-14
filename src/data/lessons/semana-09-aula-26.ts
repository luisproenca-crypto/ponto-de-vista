import type { LessonContent } from "@/lib/types";

/**
 * AULA 26 — MOBILIDADES, MIGRAÇÕES E REFÚGIO
 * Semana 09 • Geopolítica & Atualidades (CONECTE) — FRONTEIRAS, FLUXOS E PERTENCIMENTO
 *
 * Pergunta-guia (abre e fecha a aula): "O que molda o caminho de quem se
 * desloca, e o que esse caminho transforma?" Operação: ORIGEM → CONDIÇÕES
 * → ROTA → BARREIRAS E CORREDORES → CHEGADA → EFEITOS. Ideia-chave: a seta
 * do mapa não mostra tudo o que acontece entre a origem e a chegada.
 * Ferramenta: "Leia uma trajetória em seis passos" (`application`).
 * Cinco lentes: entre escolha e coação; rota e trânsito; mobilidade
 * desigual (central); redes migratórias e diásporas; a trajetória
 * transforma mais de um lugar.
 * Progressão: Aula 25 (o que a fronteira faz) → Aula 26 (o que acontece
 * com a trajetória de quem se desloca). A Ponte Itaúba da Aula 25 reaparece
 * como etapa do percurso.
 * REPETIÇÃO EVITADA: tipos de migração, expulsão e atração, saldo
 * migratório e migração × pendular (Aula 07); deslocado interno ×
 * refugiado (Aula 11); limite, faixa, cidades-gêmeas e Schengen (Aula 25).
 * LIMITES: solicitante × refugiado reconhecido, direitos do status,
 * nacionalidade, jus soli e jus sanguinis, dupla nacionalidade, apatridia,
 * cidadania da UE e pertencimento ficam para a Aula 27. A crise econômica
 * de Inês não é tratada como categoria jurídica.
 * Inês, Puerto Vela, Oriana e Vila Lavra são fictícios; Tarumã, Albor,
 * Santa Corvina e a Ponte Itaúba vêm da Aula 25.
 *
 * IMAGEM PLANEJADA (ainda não existe; o site mostra o placeholder):
 * /public/assets/aulas/semana-09-aula-26-trajetoria.png, proporção 16:9.
 *
 * FONTES (conferidas em 14/11/2026):
 *   • OIM: "migrante" é termo guarda-chuva na definição operacional da OIM,
 *     para fins próprios, sem definição única no direito
 *     internacional; diáspora, no glossário da OIM: migrantes ou
 *     descendentes cujo senso de identidade e pertencimento foi moldado pela
 *     experiência migratória e que mantêm vínculos com a origem e entre si.
 *   • ACNUR: "pessoas deslocadas no contexto de desastres e mudança
 *     climática"; o ACNUR não recomenda "refugiado climático", "refugiado
 *     da mudança climática" ou "refugiado ambiental"; esses fatores podem
 *     contribuir para deslocamentos, mas não geram automaticamente o status
 *     de refugiado pela Convenção de 1951.
 *   • Operação Acolhida (Governo Federal; ACNUR): criada em 2018, atua em
 *     Roraima, organizada em três eixos (ordenamento da fronteira,
 *     acolhimento, interiorização); a interiorização é voluntária e leva
 *     pessoas de Roraima a outros municípios. Sem números.
 *   • Mediterrâneo: ACNUR e OIM tratam "movimentos mistos" (refugiados e
 *     migrantes pelas mesmas rotas) e relatam por rotas (Mediterrâneo
 *     central, ocidental, oriental). Sem números.
 *   • Nikkeis: Agência de Serviços de Imigração do Japão: categoria de
 *     residente de longo prazo que pode envolver ascendência japonesa,
 *     sujeita a requisitos. Sem data de início, por falta de fonte oficial
 *     que sustente o marco.
 *
 * Aula em preparação (`course.ts` ainda não cadastra a Semana 09).
 */
export const aula26Content: LessonContent = {
  mission:
    "Ao final desta aula, você deverá ser capaz de reconstruir a trajetória de quem se desloca, das condições de saída aos efeitos na origem e na chegada, reconhecendo barreiras, corredores e redes que a seta do mapa não mostra.",

  observation: {
    title: "O OLHAR DO PACO",
    lines: [
      "Inês é técnica de laboratório em Puerto Vela, no país fictício Oriana. Uma crise econômica encareceu tudo, e o laboratório onde trabalhava fechou. Ela parte de ônibus, atravessa Albor e chega a Santa Corvina, perto da Ponte Itaúba. Seu plano era seguir para Tarumã, mas quem tem nacionalidade de Oriana precisa de visto para entrar ali, e ela não tem. No mesmo dia, um turista de Albor atravessa a ponte e entra em Tarumã em minutos, beneficiado pelas regras de circulação do bloco regional de que Albor e Tarumã fazem parte. Inês permanece meses em Santa Corvina, até que uma prima em Vila Lavra, outra cidade de Albor, oferece moradia, informações e o contato de um emprego. Hoje Inês vive em Vila Lavra e envia parte do salário à mãe, em Puerto Vela, num bairro que vem perdendo jovens adultos.",
      "No mapa, a viagem de Inês caberia numa seta. Repare em tudo o que a seta deixaria de fora.",
    ],
    image: {
      src: "/assets/aulas/semana-09-aula-26-trajetoria.png",
      alt: "Mapa fictício com a trajetória de Inês: de Puerto Vela, em Oriana, por estrada através de Albor até Santa Corvina, junto à Ponte Itaúba, onde fica Tarumã do outro lado do rio; uma marcação de espera em Santa Corvina; um desvio até Vila Lavra, outra cidade de Albor; e uma linha de retorno simbolizando o envio de dinheiro para Puerto Vela.",
      caption: "Cenário fictício criado para fins didáticos.",
    },
    questions: [
      "Puerto Vela e Vila Lavra estão a poucas horas de viagem. Por que o caminho de Inês demorou meses?",
      "Que condições pesaram na saída de Inês?",
      "Por que a mesma ponte foi um obstáculo para Inês e não para o turista?",
      "O que a prima mudou no caminho dela?",
      "O que molda o caminho de quem se desloca, e o que esse caminho transforma?",
    ],
    closing: "GUARDE SUAS RESPOSTAS. VAMOS REFAZER A TRAJETÓRIA DE INÊS AO LONGO DA AULA.",
  },

  connection: {
    title: "DA FRONTEIRA À TRAJETÓRIA",
    flow: ["O que a fronteira faz", "Quem a atravessa", "Por onde passa", "Onde chega"],
    highlight:
      "A seta do mapa não mostra tudo o que acontece entre a origem e a chegada.",
    text: "Nós já sabemos reconhecer uma migração (Aula 07) e ler uma fronteira (Aula 25). Agora precisamos acompanhar o caminho. A Ponte Itaúba volta, mas o ponto de vista muda: em vez de perguntar o que a fronteira faz, vamos perguntar o que acontece com quem a atravessa. “O que molda o caminho de quem se desloca, e o que esse caminho transforma?”",
  },

  lenses: {
    eyebrow: "Cinco lentes para ler uma trajetória",
    title: "O QUE ACONTECE NO CAMINHO?",
    subtitle:
      "Cinco conceitos ajudam a ver o que a seta esconde. Logo abaixo, seis passos mostram como reconstruir uma trajetória.",
    items: [
      {
        id: "condicoes",
        emoji: "⚖️",
        name: "ENTRE ESCOLHA E COAÇÃO",
        question: "Que condições pesaram na saída, e quanta escolha havia?",
      },
      {
        id: "rota",
        emoji: "🧭",
        name: "ROTA E TRÂNSITO",
        question: "Por onde a pessoa passou, onde esperou e onde mudou de plano?",
      },
      {
        id: "desigual",
        emoji: "🛂",
        name: "MOBILIDADE DESIGUAL",
        question: "Quanto custa a mesma travessia para pessoas diferentes?",
      },
      {
        id: "redes",
        emoji: "🕸️",
        name: "REDES MIGRATÓRIAS E DIÁSPORAS",
        question: "Quem ajudou, informou ou recebeu no caminho?",
      },
      {
        id: "efeitos",
        emoji: "🔄",
        name: "A TRAJETÓRIA TRANSFORMA MAIS DE UM LUGAR",
        question: "Que efeito, onde, para quem e em que escala?",
      },
    ],
    highlight:
      "Uma migração não é um ponto de partida e um ponto de chegada: é um caminho com condições, barreiras, apoios e efeitos.",
    image: null,
    hideImage: true,
  },

  application: {
    title: "LEIA UMA TRAJETÓRIA EM SEIS PASSOS",
    context:
      "Os passos servem para mapas, notícias, relatos, gráficos, rotas e mapas de remessas. Aqui, aplicados à trajetória de Inês.",
    flow: [
      "De onde parte e o que deixa para trás?",
      "Que condições pesam na saída?",
      "Por onde passa e quanto tempo leva?",
      "Que barreiras, corredores e redes encontra?",
      "Onde chega, e era onde pretendia?",
      "O que muda na origem, no trânsito e na chegada?",
    ],
    question: "O que esta seta não mostra?",
    accordions: [
      {
        id: "partida",
        title: "A PARTIDA: OS DOIS PRIMEIROS PASSOS",
        content:
          "Inês deixa Puerto Vela, a mãe e o bairro. Pesam a crise econômica e o fechamento do laboratório, condições que se combinam e reduzem as opções de ficar.",
      },
      {
        id: "caminho",
        title: "O CAMINHO: O TERCEIRO E O QUARTO",
        content:
          "Ela atravessa Albor e para em Santa Corvina. Na ponte, a exigência de visto é uma barreira que o turista de Albor, rumo ao mesmo país, não enfrenta. A prima abre um corredor: moradia, informação e trabalho.",
      },
      {
        id: "chegada",
        title: "A CHEGADA E OS EFEITOS: O QUINTO E O SEXTO",
        content:
          "Inês chega a Vila Lavra, não a Tarumã. As remessas mantêm Puerto Vela ligada à sua trajetória, e o bairro de origem vem perdendo jovens adultos.",
      },
    ],
  },

  video: {
    title: "AGORA, VAMOS CONSTRUIR O CONCEITO",
    paragraphs: [
      "Na trajetória de Inês, você viu que a seta entre a origem e a chegada esconde meses de caminho. Agora, os cinco conceitos.",
      "Guarde uma regra: antes de explicar uma migração pela origem e pelo destino, reconstrua o caminho entre os dois.",
    ],
  },

  concepts: {
    title: "DÊ PRECISÃO AO SEU OLHAR",
    items: [
      {
        id: "condicoes",
        name: "ENTRE ESCOLHA E COAÇÃO",
        conceito:
          "As condições de saída formam um contínuo, e não duas caixas separadas entre voluntário e forçado. Trabalho, renda, segurança, perseguição, família, desastres, oportunidades e restrições podem pesar ao mesmo tempo. “Migrante” é um termo guarda-chuva na definição operacional que a OIM usa para seus próprios fins, e não uma categoria jurídica internacional universal.",
        penseAssim:
          "Pergunte: que condições pesaram, e quantas alternativas a pessoa tinha de fato?",
        exemplo:
          "Inês saiu pela combinação de crise econômica e perda do emprego: houve decisão, mas dentro de opções reduzidas.",
        naoConfunda:
          "Motivações múltiplas não são o mesmo que status jurídico de refugiado: essa categoria tem critérios próprios, que serão vistos na Aula 27.",
        naProva:
          "Relatos e notícias pedem que você identifique as condições da saída sem transformar dificuldade econômica em categoria jurídica.",
      },
      {
        id: "rota",
        name: "ROTA E TRÂNSITO",
        conceito:
          "A rota é o caminho efetivamente percorrido: países de passagem, fronteiras sucessivas, corredores, desvios, esperas e mudanças de plano. O trânsito pode durar dias, meses ou anos, e o lugar de chegada pode ser diferente do pretendido.",
        penseAssim:
          "Pergunte: por onde passou, onde esperou, onde desviou e por quê?",
        exemplo:
          "Inês pretendia chegar a Tarumã, esperou meses em Santa Corvina e terminou em Vila Lavra.",
        naoConfunda:
          "Rota não é linha reta, e a chegada não é necessariamente o destino pretendido.",
        naProva:
          "Mapas de rotas pedem que você reconstrua barreiras, corredores e desvios que a seta simplifica.",
      },
      {
        id: "desigual",
        name: "MOBILIDADE DESIGUAL",
        conceito:
          "A capacidade de circular depende de combinações de passaporte, visto, nacionalidade, renda, transporte, redes, acordos entre Estados e regras de fronteira. Por isso, pessoas diferentes podem enfrentar custos e barreiras diferentes para percorrer distâncias semelhantes.",
        penseAssim:
          "Pergunte: o que esta pessoa precisa ter, pagar ou provar para fazer a mesma travessia que outra?",
        exemplo:
          "Na Ponte Itaúba, rumo a Tarumã, o turista de Albor entra em minutos pelas regras do bloco; Inês, sem visto, não consegue seguir.",
        naoConfunda:
          "Nenhum fator explica tudo sozinho: documento, renda e rede se combinam, e a mesma pessoa pode ter mobilidade fácil numa direção e difícil em outra.",
        naProva:
          "Mapas de exigência de vistos e notícias sobre regras de entrada pedem que você compare custos de travessia para pessoas diferentes.",
      },
      {
        id: "redes",
        name: "REDES MIGRATÓRIAS E DIÁSPORAS",
        conceito:
          "Redes migratórias são vínculos de parentes, amigos e conhecidos que circulam informação, moradia, trabalho, apoio e até o financiamento da viagem, influenciando rotas e lugares de chegada. Diáspora, numa definição compatível com a da OIM, é um grupo de migrantes ou descendentes cujo senso de identidade e pertencimento foi marcado pela experiência migratória e que mantém vínculos com a origem e com outros membros dispersos.",
        penseAssim:
          "Pergunte: quem já estava no caminho ou no destino, e o que ofereceu?",
        exemplo:
          "A prima de Inês em Vila Lavra ofereceu moradia, informação e um contato de trabalho, e mudou o lugar de chegada.",
        naoConfunda:
          "Rede não é o mesmo que fluxo: o fluxo é o movimento; a rede é o conjunto de vínculos que o orienta. E nem toda comunidade no exterior é uma diáspora.",
        naProva:
          "Textos sobre comunidades migrantes pedem que você reconheça como os vínculos orientam novas chegadas.",
      },
      {
        id: "efeitos",
        name: "A TRAJETÓRIA TRANSFORMA MAIS DE UM LUGAR",
        conceito:
          "A migração pode produzir efeitos na origem (famílias, composição etária, trabalho, remessas), no trânsito (serviços, infraestrutura, cidades, políticas de passagem) e na chegada (trabalho, bairros, população, redes, serviços). Remessas são recursos enviados por quem migrou a pessoas no lugar de origem.",
        penseAssim:
          "Pergunte: que efeito, onde, para quem e em que escala?",
        exemplo:
          "As remessas de Inês sustentam parte da renda da mãe, e a saída de jovens muda a composição etária do bairro em Puerto Vela.",
        naoConfunda:
          "Quem parte não deixa de transformar o lugar de origem. E avaliar efeitos não é dizer se a migração é boa ou ruim.",
        naProva:
          "Pirâmides etárias e mapas de remessas pedem que você reconheça efeitos seletivos da migração na origem e na chegada.",
      },
    ],
  },

  deepDive: {
    title: "APROFUNDE O SEU OLHAR",
    items: [
      {
        id: "seta",
        title: "A seta não mostra o caminho",
        content:
          "Mapas de fluxo resumem milhares de trajetórias em setas. A seta mostra de onde as pessoas partem e aonde chegam, mas não mostra as fronteiras sucessivas, as esperas em cidades de trânsito, os desvios causados por uma regra nova ou a mudança de plano provocada por um contato. Para ler uma migração, é preciso devolver à seta o que ela simplifica.",
        flow: ["Partida", "Trânsito", "Espera", "Desvio", "Chegada"],
        highlight: "A seta é um resumo; a trajetória é o processo.",
      },
      {
        id: "custos",
        title: "Mesma distância, custos diferentes",
        content:
          "Inês e um turista de Albor estavam diante da mesma ponte, no mesmo sentido, rumo a Tarumã. Para ele, beneficiado pelas regras de circulação do bloco, a travessia levou minutos; para ela, a exigência de visto ligada à nacionalidade fechou aquele caminho. Documento, nacionalidade, renda e rede se combinam e fazem a mesma distância ter custos muito diferentes. A mobilidade no mundo é desigual, e isso se lê nos mapas de vistos, nas rotas e nos tempos de espera.",
        flow: ["Documento", "Visto", "Nacionalidade", "Renda", "Rede"],
        highlight: "A distância é a mesma; o custo de percorrê-la, não.",
      },
      {
        id: "clima",
        title: "Quando o clima entra na trajetória",
        content:
          "Desastres, degradação ambiental e efeitos adversos da mudança climática podem contribuir para deslocamentos dentro de um país ou através de fronteiras. O ACNUR fala em pessoas deslocadas no contexto de desastres e mudança climática, e não recomenda expressões como “refugiado climático” ou “refugiado ambiental” como categorias gerais. Esses fatores não produzem automaticamente o reconhecimento como refugiado pela Convenção de 1951.",
        flow: ["Desastre ou degradação", "Outras condições", "Deslocamento", "Status não automático"],
        highlight: "O clima pode pesar na saída sem criar, por si, uma categoria jurídica.",
      },
    ],
    closing:
      "Nesta aula, o foco foi o movimento. Na Aula 27, a pergunta é o que acontece depois da chegada: em que condição se permanece, com quais direitos e com que vínculo.",
  },

  brazilConnections: {
    title: "E O BRASIL? E O MUNDO?",
    question: "Onde a seta esconde um caminho cheio de etapas?",
    center: "TRAJETÓRIAS",
    items: [
      {
        id: "venezuela",
        label: "VENEZUELA → BRASIL: ROTA, FRONTEIRA E INTERIORIZAÇÃO",
        description:
          "Muitas pessoas vindas da Venezuela entram no Brasil por terra, por Pacaraima, em Roraima, e passam por Boa Vista. Criada em 2018, a Operação Acolhida se organiza em três eixos: ordenamento da fronteira, acolhimento e interiorização. A interiorização é voluntária e leva pessoas de Roraima para outros municípios brasileiros. A trajetória, portanto, não termina na fronteira: ela continua pelo território.",
      },
      {
        id: "mediterraneo",
        label: "MEDITERRÂNEO: ROTAS, TRÂNSITO E FRONTEIRA EXTERNA",
        description:
          "O ACNUR e a OIM acompanham várias rotas no Mediterrâneo, como a central, a ocidental e a oriental, com origens e motivações diferentes. Por elas passam movimentos mistos: pessoas com necessidades de proteção e outras migrantes percorrem os mesmos caminhos. Países de trânsito e a fronteira externa europeia funcionam como etapas, barreiras e esperas da trajetória.",
      },
      {
        id: "nikkeis",
        label: "BRASIL ↔ JAPÃO: REDE, ASCENDÊNCIA E GERAÇÕES",
        description:
          "Descendentes de imigrantes japoneses no Brasil, os nikkeis, também fazem o caminho inverso e trabalham no Japão, muitas vezes por meio de redes de parentes e conhecidos, e alguns retornam. Segundo a agência de imigração do Japão, a ascendência pode integrar os critérios de determinadas categorias migratórias japonesas, sujeitas a requisitos. Uma regra de entrada vira corredor para alguns, e a rede liga gerações nos dois países.",
      },
    ],
    study:
      "Cada cartão prova uma lente: Venezuela → Brasil, a rota que continua depois da fronteira; o Mediterrâneo, trânsito e barreiras num mesmo caminho; os nikkeis, redes e corredores que ligam gerações.",
    highlight:
      "Em todos os casos, a seta entre dois países resume um caminho com etapas, regras e vínculos.",
  },

  examFormat: {
    title: "COMO ISSO APARECE NA PROVA?",
    deliversTitle: "A questão entrega",
    delivers: [
      "Mapa de fluxos",
      "Mapa de rotas",
      "Série temporal",
      "Pirâmide etária",
      "Notícia ou relato",
      "Mapa de remessas",
    ],
    demandsTitle: "A questão cobra",
    demands: [
      "Reconstruir a trajetória",
      "Reconhecer barreiras e corredores",
      "Comparar custos de mobilidade",
      "Localizar efeitos na origem e na chegada",
    ],
    highlight:
      "A prova raramente pergunta só por que as pessoas migram. Ela mostra uma seta, um relato ou um gráfico e quer ver você reconstruir o caminho e seus efeitos.",
    guidingIntro: "Material → operação → armadilha:",
    guidingQuestions: [
      "Mapa de fluxos → leia origem, direção, intensidade e trânsito. Armadilha: a seta = toda a trajetória.",
      "Mapa de rotas → reconstrua barreiras, corredores e desvios. Armadilha: rota = linha reta.",
      "Série temporal → relacione a mudança do fluxo ao contexto. Armadilha: explicar tudo só por expulsão e atração.",
      "Pirâmide etária → reconheça efeitos seletivos da migração. Armadilha: confundir com crescimento vegetativo.",
      "Notícia ou relato → identifique condições, rota e regra. Armadilha: qualquer migrante = refugiado.",
      "Mapa de remessas → conecte origem e chegada. Armadilha: quem saiu deixou de transformar a origem.",
    ],
  },

  question: {
    id: "s09-a26-q01",
    statement:
      "Inês, técnica de laboratório, vivia em Puerto Vela, no país fictício Oriana. Uma crise econômica encareceu o custo de vida, e o laboratório onde ela trabalhava fechou. Inês partiu de ônibus com a intenção de chegar a Tarumã, atravessou Albor e chegou a Santa Corvina. Na Ponte Itaúba, quem tem nacionalidade de Oriana precisa de visto para entrar em Tarumã, e Inês não o tinha; no mesmo dia, um turista de Albor, país que integra com Tarumã um bloco de livre circulação, entrou em Tarumã pela ponte em minutos. Inês permaneceu alguns meses em Santa Corvina, até que uma prima que vive em Vila Lavra, outra cidade de Albor, lhe ofereceu moradia e a indicação de um emprego. Hoje Inês mora em Vila Lavra e envia parte do salário à mãe, em Puerto Vela, cujo bairro vem perdendo jovens adultos. A leitura mais adequada é que",
    options: [
      {
        id: "A",
        text: "a trajetória explica o percurso: Inês saiu por condições combinadas, a ponte lhe impôs uma barreira que o turista não enfrentou, e a rede da prima a levou a Vila Lavra, fora do plano inicial; as remessas ligam Puerto Vela a ela, e a crise, sozinha, não define seu status jurídico.",
      },
      {
        id: "B",
        text: "a trajetória se resume ao ponto de partida e ao de chegada, e a ponte impôs a Inês e ao turista a mesma barreira, que só se diferenciou pelo tempo de cada travessia; já as remessas e a saída de jovens adultos mostram efeitos que a migração pode produzir no lugar de origem de Inês.",
      },
      {
        id: "C",
        text: "a crise econômica e o fechamento do laboratório dão a Inês o status de refugiada, o que explica a espera em Santa Corvina; a rede da prima pesou na chegada a Vila Lavra, e as remessas mostram que Puerto Vela continua ligada à trajetória dela, com efeitos sobre a família que ficou.",
      },
      {
        id: "D",
        text: "a espera em Santa Corvina e a mudança para Vila Lavra revelam uma mobilidade desigual, mas, fora de Oriana, Inês deixa de transformar o lugar de origem, já que a perda de jovens adultos no bairro decorre do crescimento vegetativo, e não da saída de pessoas que partiram como ela.",
      },
      {
        id: "E",
        text: "Inês escolheu livremente cada etapa, pois a decisão de sair dependeu de uma única condição, o fechamento do laboratório; ao chegar a Vila Lavra, ela realizou o destino que tinha em mente desde a partida, e a rede da prima apenas confirmou uma escolha individual já tomada.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "A alternativa A está correta porque reconstrói a trajetória inteira. 1. TRAJETÓRIA: entre Puerto Vela e Vila Lavra houve trânsito por Albor, espera em Santa Corvina e mudança de plano; origem e chegada não bastam. 2. CONDIÇÕES: a crise econômica e o fechamento do laboratório se combinaram na saída. 3. MOBILIDADE DESIGUAL: na mesma ponte, a exigência de visto ligada à nacionalidade barrou Inês, enquanto o turista de Albor, pelas regras do bloco, entrou em Tarumã em minutos. 4. REDE: a prima ofereceu moradia, informação e trabalho, e isso mudou o lugar de chegada. 5. CHEGADA ≠ DESTINO PRETENDIDO: Inês queria ir a Tarumã e chegou a Vila Lavra. 6. EFEITOS NA ORIGEM: as remessas e a saída de jovens adultos mostram que Puerto Vela continua ligada à trajetória. 7. STATUS: a crise econômica, por si, não define a categoria jurídica de Inês. B reduz a trajetória à partida e à chegada e ignora que a regra da ponte foi diferente para os dois. C transforma a crise econômica em status de refugiada. D trata a origem como desligada de quem partiu e atribui a perda de jovens ao crescimento vegetativo. E apaga as condições combinadas, a mudança de plano e o papel da rede.",
    optionFeedback: {
      A: "Correta: reconstrói a trajetória, reconhece condições combinadas, mobilidade desigual, o papel da rede, a chegada diferente da planejada e os efeitos na origem, sem inferir status jurídico.",
      B: "A trajetória não se resume à partida e à chegada, e a ponte não impôs a mesma barreira aos dois: a exigência de visto valia para Inês, não para o turista.",
      C: "Dificuldade econômica não define, por si, o status de refugiado: essa categoria jurídica tem critérios próprios, que serão vistos na Aula 27.",
      D: "Quem parte continua transformando a origem: as remessas sustentam a família, e a saída de jovens adultos muda o bairro. Isso não é efeito do crescimento vegetativo.",
      E: "A saída combinou crise econômica e perda do emprego, e Vila Lavra não era o destino planejado: a rede da prima mudou o caminho de Inês.",
    },
  },

  missionCheck:
    "Voltemos à pergunta da aula: o que molda o caminho de quem se desloca, e o que esse caminho transforma? Agora você consegue reconstruir uma trajetória, das condições de saída aos efeitos na origem e na chegada?",

  completionMessage:
    "Uma migração não cabe numa seta: é um caminho com condições, barreiras, corredores, redes e efeitos em mais de um lugar. Na próxima aula, a pergunta é o que acontece depois da chegada: em que condição se permanece, com quais direitos e com que vínculo.",
};
