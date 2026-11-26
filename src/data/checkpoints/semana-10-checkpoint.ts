import type { CheckpointContent } from "@/lib/types";

/**
 * CHECKPOINT 10 — Semana 10 (CHECKPOINT FINAL DO CURSO)
 * Tema: "REGIÃO DE NOVA MERIDIANA — O Mundo em Recortes"
 *
 * Situação-problema inteiramente fictícia que integra a Semana 10 e realiza
 * o Método P.O.N.T.O. num único problema territorial: Problematizar (o
 * objetivo), Observar (os documentos), Nomear (processo e recorte),
 * Teorizar e conectar (processo, escala e território), Operacionalizar (a
 * decisão). Pergunta estrutural: qual recorte é mais adequado ao objetivo,
 * e por quê?
 *
 * Operação integradora: OBJETIVO → PROCESSO QUE IMPORTA → CRITÉRIO →
 * EVIDÊNCIA → RECORTE → LIMITES → DECISÃO. Recorte ≠ decisão: o recorte é
 * a unidade espacial candidata; a decisão é a escolha justificada depois de
 * verificar objetivo, processo, evidências e limitações. Trava contra o
 * relativismo: o critério precisa acompanhar o processo envolvido no
 * problema, e o recorte precisa ser sustentado pelas evidências.
 * Dois objetivos: gestão regional das cheias (bacia, no DECIDA) e
 * integração do transporte público regional (região de influência, no MUDE
 * O OLHAR). Só o objetivo muda; mapas e dados permanecem.
 * Quatro recortes: províncias (político-administrativo), bacia do Tauá
 * (drenagem), região de influência de Porto das Garças (fluxos cotidianos e
 * polarização) e faixas de acesso a serviços (semelhança de um único
 * indicador socioespacial; sem "região rica/pobre").
 *
 * O checkpoint não ensina conteúdo novo: bacia (Aula 23), fronteira e
 * soberania (Aula 25), recorte (Aula 28), quem classifica e para quê
 * (Aula 29), evidência, limite e argumento (Aula 30) aparecem como
 * processos e evidências conhecidos. A fronteira limita competências e ação
 * estatal, mas não interrompe o processo hídrico; medidas que envolvam
 * Ametista dependeriam de coordenação entre os territórios competentes
 * (sem intervenção unilateral, sem conteúdo novo sobre cooperação). Os
 * documentos mostram que as cheias ficaram mais frequentes, não a causa.
 * REPETIÇÃO EVITADA: o Checkpoint 09 decidiu sobre fluxos e status numa
 * fronteira; aqui a decisão é sobre recortes, e a fronteira é só uma
 * evidência do processo hídrico.
 * Nomes (Nova Meridiana, Serra do Arvoredo, Rio Tauá, Rio Lajedo, Ribeirão
 * Juazal, Campo Raso, Lumiar, Olaria, Barra Nova, Porto das Garças,
 * Jacarandá, Itaberá, Ventania, Ametista) são fictícios e inéditos nas
 * Aulas 01–30 e nos Checkpoints 01–09.
 *
 * Arte planejada (ainda não existe; o site mostra o placeholder):
 * /public/assets/checkpoints/semana-10-nova-meridiana.png, proporção 16:9:
 * mapa-base à esquerda (cerca de 60%) e três miniaturas à direita (bacia,
 * influência, acesso a serviços). Todas as informações necessárias para
 * responder estão no texto.
 */
export const checkpoint10Content: CheckpointContent = {
  intro:
    "O mundo em recortes: nesta semana, você aprendeu a escolher e avaliar recortes, a ler quem classifica e para quê, e a transformar recorte e evidência em argumento. Este último checkpoint junta tudo num só território: qual recorte é mais adequado ao objetivo, e por quê? O caminho é objetivo → processo que importa → critério → evidência → recorte → limites → decisão.",

  scenario: {
    title: "REGIÃO DE NOVA MERIDIANA",
    description:
      "Nova Meridiana é uma região fictícia. A oeste fica a Serra do Arvoredo, onde nasce o Rio Tauá; parte de suas cabeceiras está no país vizinho Ametista. O Tauá recebe o Rio Lajedo e o Ribeirão Juazal e corre para leste até Porto das Garças, a cidade-polo, onde as cheias ficaram mais frequentes. A região tem quatro províncias, Campo Raso, Lumiar, Olaria e Barra Nova, com limites históricos que não coincidem com a drenagem: a bacia do Tauá atravessa três delas, e Olaria fica quase toda fora dela. Uma ferrovia regional liga Ventania, em Olaria, a Porto das Garças, e os deslocamentos diários atravessam o divisor de águas. Perto de Itaberá há uma área agrícola irrigada; em Porto das Garças, um distrito industrial. O território aparece em quatro mapas. Mapa 1: as províncias (critério político-administrativo). Mapa 2: a bacia do Tauá (critério de drenagem), incluindo a parte em Ametista. Mapa 3: a região de influência de Porto das Garças (fluxos cotidianos e polarização urbana), que inclui Ventania. Mapa 4: faixas de acesso a serviços, de maior, intermediário e menor acesso; o acesso é menor em parte do alto curso e numa franja periférica de Porto das Garças.",
    image: {
      // Arquivo planejado: /public/assets/checkpoints/semana-10-nova-meridiana.png
      src: "/assets/checkpoints/semana-10-nova-meridiana.png",
      alt: "Mapa fictício da Região de Nova Meridiana. À esquerda, o mapa-base: a Serra do Arvoredo a oeste, atravessada pela fronteira com o território vizinho Ametista; o Rio Tauá, que nasce na serra, com parte das cabeceiras em Ametista, e corre para leste, recebendo o Rio Lajedo e o Ribeirão Juazal, até Porto das Garças; os limites das províncias de Campo Raso, Lumiar, Olaria e Barra Nova; as cidades de Jacarandá, Itaberá e Ventania; rodovias, uma ferrovia que liga Ventania a Porto das Garças, uma área irrigada perto de Itaberá e um distrito industrial em Porto das Garças. À direita, três miniaturas do mesmo território: a bacia do Rio Tauá, que atravessa a fronteira; a região de influência de Porto das Garças, com fluxos que incluem Ventania; e faixas de maior, intermediário e menor acesso a serviços.",
      caption:
        "Nova Meridiana é um território fictício criado para o Checkpoint 10. Os limites, cidades, rios, fluxos e indicadores são didáticos e não correspondem a lugares reais.",
    },
  },

  steps: [
    {
      id: "observe",
      title: "OBSERVE",
      kind: "observation",
      questions: [
        "Que processos atravessam os limites administrativos?",
        "Para onde corre a água, e onde estão a montante e a jusante?",
        "Que parte da bacia do Tauá está fora de Nova Meridiana?",
        "De onde vêm os deslocamentos diários para Porto das Garças?",
        "Onde o acesso a serviços é menor?",
      ],
    },
    {
      id: "nomeie",
      title: "NOMEIE",
      kind: "cards",
      eyebrow: "Revisão da semana",
      subtitle:
        "Que recorte cada mapa de Nova Meridiana representa, e o que ele conecta ou agrupa?",
      items: [
        {
          id: "bacia",
          emoji: "💧",
          name: "BACIA",
          question: "O que a água conecta?",
        },
        {
          id: "influencia",
          emoji: "🚆",
          name: "REGIÃO DE INFLUÊNCIA URBANA",
          question: "O que os deslocamentos conectam?",
        },
        {
          id: "administrativo",
          emoji: "🏛️",
          name: "RECORTE ADMINISTRATIVO",
          question: "Onde se governa, administra e contabiliza?",
        },
        {
          id: "semelhanca",
          emoji: "🧩",
          name: "RECORTE POR SEMELHANÇA",
          question: "Onde determinado indicador apresenta condições semelhantes?",
        },
      ],
      highlight: "Os quatro mapas mostram o mesmo território; cada um responde a uma pergunta diferente.",
    },
    {
      id: "conecte",
      title: "CONECTE",
      kind: "flow",
      flow: ["Objetivo", "Processo", "Critério", "Recorte"],
      highlight:
        "A regionalização mais útil depende do problema. Isso não significa que qualquer regionalização serve: o critério precisa acompanhar o processo envolvido no problema, e o recorte precisa ser sustentado pelas evidências.",
      text: "Comece pelo objetivo e pergunte que processo o organiza. Para a gestão das cheias, o processo é hídrico: a água que cai na Serra do Arvoredo, inclusive em Ametista, corre de montante a jusante até Porto das Garças, atravessando províncias e uma fronteira. O critério que acompanha esse processo é a drenagem, e o recorte que ele produz é a bacia do Tauá. A fronteira limita competências e ação estatal, mas não interrompe o processo hídrico: a análise precisa considerar a bacia inteira, e medidas que envolvam Ametista dependeriam de coordenação entre os territórios competentes. Os outros recortes não somem: as províncias organizam a administração, o orçamento e a implementação; as faixas de acesso a serviços ajudam a definir prioridades; a região de influência mostra a mobilidade.",
    },
    {
      id: "decida",
      title: "DECIDA",
      kind: "questions",
      questions: [
        {
          id: "s10-cp-q01",
          statement:
            "Nova Meridiana é uma região fictícia. O Rio Tauá nasce na Serra do Arvoredo, cujas cabeceiras ficam em parte no país vizinho Ametista, e corre para leste até Porto das Garças, onde as cheias ficaram mais frequentes. A região aparece em quatro mapas. No Mapa 1, quatro províncias com limites históricos que não coincidem com a drenagem. No Mapa 2, a bacia do Tauá, delimitada por divisores de águas, que atravessa três províncias e a fronteira com Ametista. No Mapa 3, a região de influência de Porto das Garças, traçada pelos deslocamentos diários, que inclui Ventania, fora da bacia. No Mapa 4, faixas de acesso a serviços, que é menor no alto curso e numa franja periférica de Porto das Garças. Para planejar a gestão regional das cheias, a interpretação mais adequada sobre o recorte que deve orientar prioritariamente a análise é que",
          options: [
            {
              id: "A",
              text: "o Mapa 1 deve orientar prioritariamente a análise, pois as províncias têm governo, orçamento e estatísticas, e as medidas contra as cheias precisarão ser executadas e financiadas pelas autoridades de cada província.",
            },
            {
              id: "B",
              text: "o Mapa 4 deve orientar prioritariamente a análise, pois as cheias tendem a produzir danos maiores onde o acesso a serviços é menor, como na franja periférica de Porto das Garças, situada a jusante do Rio Tauá.",
            },
            {
              id: "C",
              text: "como os quatro mapas representam o mesmo território com critérios coerentes, qualquer um deles pode orientar a análise desse objetivo, desde que o processo escolhido e o critério usado sejam explicitados pelos técnicos.",
            },
            {
              id: "D",
              text: "o Mapa 2 é o ponto de partida, mas o processo hídrico deve ser analisado só na parte da bacia em Nova Meridiana, já que as cabeceiras em Ametista estão sob outra soberania e fora da competência das autoridades regionais.",
            },
            {
              id: "E",
              text: "o Mapa 2 deve orientar prioritariamente a análise, pois acompanha o processo hídrico de montante a jusante, através das províncias e da fronteira com Ametista; os outros recortes servem a outras etapas e objetivos.",
            },
          ],
          correctOptionId: "E",
          explanation:
            "A alternativa E está correta porque escolhe o recorte pelo processo que o objetivo envolve. 1. OBJETIVO: planejar a gestão regional das cheias. 2. PROCESSO: o processo que organiza o problema é hídrico, a drenagem de montante a jusante. 3. CRITÉRIO E RECORTE: o critério que acompanha esse processo é a drenagem, e o recorte que ele produz é a bacia do Tauá (Mapa 2). 4. EVIDÊNCIA: as cabeceiras ficam na serra, em parte em Ametista; as cheias ficaram mais frequentes a jusante, em Porto das Garças; e a bacia atravessa três províncias e a fronteira. A fronteira limita competências, mas não interrompe a água. 5. LIMITE: os documentos mostram que as cheias ficaram mais frequentes, não por que isso aconteceu; e medidas que envolvam Ametista dependeriam de coordenação entre os territórios competentes. Os outros recortes continuam úteis: as províncias, para a administração, o orçamento e a implementação; a região de influência, para o transporte e os serviços; as faixas de acesso, para definir prioridades de proteção. Ser menos adequado para esta pergunta não significa ser inválido. A confunde onde as medidas serão executadas com o recorte que acompanha o processo. B usa a vulnerabilidade, que ajuda a definir prioridades, como substituta da análise da drenagem. C trata todos os recortes como igualmente adequados. D interrompe a análise na fronteira, embora a água não pare nela.",
          optionFeedback: {
            A: "As províncias têm de fato governo, orçamento e estatísticas, e serão importantes para executar as medidas. Mas seus limites históricos não coincidem com a drenagem: elas organizam a ação, não acompanham o processo hídrico.",
            B: "As áreas com menor acesso a serviços podem de fato exigir prioridade de proteção. Mas a vulnerabilidade ajuda a definir prioridades; não substitui a análise da drenagem, que mostra de onde vem e por onde passa a água.",
            C: "Todos os mapas representam o mesmo território, mas não acompanham o mesmo processo. Para a gestão das cheias, o critério precisa acompanhar a drenagem; explicitar outro critério não o torna adequado a este objetivo.",
            D: "Ametista é de fato outro território soberano, e medidas ali dependeriam de coordenação. Mas a fronteira não interrompe o processo hídrico: a água das cabeceiras chega a Porto das Garças, e a análise precisa considerar a bacia inteira.",
            E: "Correta: escolhe a bacia porque ela acompanha o processo hídrico de montante a jusante, através das províncias e da fronteira, e reconhece que os outros recortes continuam úteis para outras etapas e objetivos.",
          },
        }
      ],
    },
    {
      id: "mude-o-olhar",
      title: "MUDE O OLHAR",
      kind: "reflection",
      cards: [
        {
          id: "novo-objetivo",
          before:
            "“Agora o objetivo é planejar a integração do transporte público regional. A bacia continua sendo o melhor recorte.”",
          after:
            "“Mudou o objetivo, mudou o processo que importa: agora são os deslocamentos cotidianos. O recorte adequado passa a ser a região de influência urbana, que inclui Ventania, fora da bacia.”",
        },
        {
          id: "oficial",
          before: "“A melhor divisão é sempre a das províncias, porque é oficial.”",
          after:
            "“O recorte oficial é essencial para administrar, mas não necessariamente acompanha o processo que o problema exige.”",
        },
        {
          id: "bacia-errada",
          before: "“Se agora escolhemos outro recorte, a bacia estava errada.”",
          after:
            "“Não. A bacia era adequada ao problema hídrico; a região de influência é adequada ao problema de transporte.”",
        },
        {
          id: "qualquer",
          before: "“Então qualquer regionalização serve.”",
          after:
            "“Não. O critério precisa acompanhar o processo envolvido no problema, e o recorte precisa ser sustentado pelas evidências.”",
        },
      ],
      closing:
        "Mudou o objetivo → mudou o processo que importa → mudou o recorte mais adequado.",
    },
  ],

  conclusion:
    "Nova Meridiana não tinha uma divisão correta escondida no mapa. Tinha problemas diferentes, que exigiam recortes diferentes e justificáveis. Você acabou de usar o Método P.O.N.T.O. do início ao fim. O mundo não vem dividido. Cada recorte é uma escolha — e ler geograficamente é justificar essa escolha com evidências, articulando a escala, o critério e as relações que o problema exige. É assim que se constrói um ponto de vista.",

  celebrationMessage: "Checkpoint 10 concluído · percurso completo.",
};
