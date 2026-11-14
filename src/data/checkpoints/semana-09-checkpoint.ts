import type { CheckpointContent } from "@/lib/types";

/**
 * CHECKPOINT 09 — Semana 09
 * Tema: "PASSO DO ITAÚBA — Fronteiras, Fluxos e Pertencimento"
 *
 * Situação-problema inteiramente fictícia que reúne as três operações da
 * semana: Aula 25 (ler a fronteira: linha → zona → função → filtro →
 * escala), Aula 26 (ler a trajetória: origem → condições → rota →
 * barreiras/corredores → chegada → efeitos) e Aula 27 (ler o vínculo:
 * lugar → nacionalidade → status → direitos → vínculos vividos →
 * pertencimento).
 *
 * Operação integradora: QUEM CIRCULA → POR ONDE → SOB QUAL REGRA E EM QUAL
 * ESCALA → EM QUE CONDIÇÃO → COM QUAL VÍNCULO → COM QUAIS EFEITOS.
 * Escalas sobrepostas: bloco regional (facilita deslocamentos), Estados
 * (regra de Albor sobre o documento de morador; visto exigido por Tarumã)
 * e lista oficial de localidades fronteiriças.
 *
 * Personagens (inéditos nas Aulas 01–27 e nos Checkpoints 01–08): Otávio
 * (deslocamento diário), Noemi (trajetória, barreira e rede), Elias
 * (solicitante, não refugiado reconhecido) e Celeste (vínculos nas duas
 * margens, sem ausência de soberania).
 * NOVIDADE EM RELAÇÃO ÀS AULAS: a regra nova de Albor recai sobre pessoas
 * (documento de morador por lista de localidades), não sobre cargas
 * (Aula 25); Remanso é uma localidade nova. A ponte não fecha.
 * Cuidados: a comunidade ribeirinha do Itaúba é fictícia e não representa
 * povo indígena; ninguém do fluxo vindo de Oriana é chamado de refugiado
 * sem reconhecimento; o checkpoint não avalia a regra de Albor, que é
 * tratada como instrumento. Ficam como repertório, fora do que é cobrado:
 * Schengen, União Europeia, jus soli, jus sanguinis, dupla nacionalidade,
 * apatridia, Guarani, Mediterrâneo e Operação Acolhida.
 *
 * Todas as regras de Albor e de Tarumã são fictícias e estão escritas no
 * texto; nenhum número real é usado. A arte não traz travessias de barco
 * nem termos interpretativos: mostra evidências.
 * Arte: /public/assets/checkpoints/semana-09-passo-itauba.png (16:9).
 */
export const checkpoint09Content: CheckpointContent = {
  intro:
    "Fronteiras, fluxos e pertencimento: nesta semana, você aprendeu a ler o que uma fronteira faz, o caminho de quem se desloca e o vínculo de quem vive num lugar. Este checkpoint junta as três leituras num mesmo território: quem circula, por onde, sob qual regra e em qual escala, em que condição, com qual vínculo e com quais efeitos?",

  scenario: {
    title: "PASSO DO ITAÚBA",
    description:
      "O Passo do Itaúba é um trecho fictício do Rio Itaúba, limite entre Tarumã, ao norte, e Albor, ao sul. Os dois países integram um bloco regional fictício que facilita certos deslocamentos de pessoas, e cada Estado mantém as próprias regras nos campos descritos aqui. A Ponte Itaúba liga Salgueiro, em Tarumã, a Santa Corvina, em Albor. Rio acima, uma comunidade ribeirinha vive há gerações nas duas margens, em Remanso, vila de Tarumã, e no bairro ribeirinho de Santa Corvina, e compartilha parentes, língua, festas, práticas ligadas ao rio e memória. Albor adotou uma regra nova: o documento de morador fronteiriço só é aceito para moradores de localidades de uma lista oficial. Salgueiro está na lista; Remanso não, e seus moradores passaram a apresentar o documento de viagem comum para entrar em Albor. A ponte continua aberta, e cargas e turistas seguem as regras de antes. Pessoas de Oriana, um terceiro país, também chegam à região, com trajetórias diferentes: algumas seguem viagem, outras permanecem em Albor, algumas contam com redes familiares e algumas pedem proteção. Pelas regras deste cenário, nacionais de Oriana podem permanecer regularmente em Albor nas condições apresentadas, mas Tarumã exige visto para sua entrada. Em Albor, quem pede o reconhecimento da condição de refugiado recebe documento provisório enquanto o pedido é analisado; só após o reconhecimento a pessoa passa à condição de refugiada reconhecida e recebe residência por prazo indeterminado. Otávio, nacional de Tarumã, mora em Salgueiro, tem o documento de morador e trabalha numa oficina em Santa Corvina: atravessa a ponte de manhã e volta para casa no fim do dia. Noemi, nacional de Oriana, queria chegar a Tarumã; em Santa Corvina, sem o visto, aceitou a moradia oferecida pelo irmão em Vila Lavra, no interior de Albor, e seguiu para lá. Elias, também nacional de Oriana, pediu a Albor o reconhecimento da condição de refugiado e aguarda a decisão com documento provisório. Celeste, nacional de Albor, vive no bairro ribeirinho de Santa Corvina; sua avó e seus primos vivem em Remanso.",
    image: {
      // Arquivo: /public/assets/checkpoints/semana-09-passo-itauba.png
      src: "/assets/checkpoints/semana-09-passo-itauba.png",
      alt: "Mapa-diagrama fictício do Passo do Itaúba, com o norte no alto. O Rio Itaúba corre de oeste para leste, e o limite internacional acompanha o rio: Tarumã fica ao norte e Albor ao sul; no canto sudoeste, outra linha de limite separa Albor de Oriana. No centro, a Ponte Itaúba liga Salgueiro, ao norte, a Santa Corvina, ao sul, com um posto de controle em cada extremidade. Salgueiro tem o símbolo de localidade da lista de Albor para o documento de morador fronteiriço; Remanso não tem. Uma seta roxa de duas pontas, de deslocamento diário de ida e volta, liga Salgueiro e Santa Corvina. Uma seta laranja tracejada parte de Oriana e chega a Santa Corvina; dali, uma seta laranja pontilhada, de continuação do deslocamento, segue para Vila Lavra, a sudeste, no interior de Albor. Rio acima, a oeste, casas sobre esteios com o mesmo símbolo aparecem nas duas margens: em Remanso, em Tarumã, e no bairro ribeirinho de Santa Corvina, em Albor, cada margem com um local de festa comunitária marcado por bandeirolas iguais. Estradas ligam Remanso a Salgueiro e o bairro ribeirinho ao centro de Santa Corvina.",
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
        "Qual deslocamento acontece todos os dias, e entre quais localidades?",
        "De onde parte o deslocamento mais longo, e onde ele continua?",
        "Onde estão os postos de controle, e quais localidades ficam dos dois lados do limite?",
        "Que localidade tem o símbolo da lista de Albor, e qual não tem?",
        "Que elementos se repetem nas duas margens perto de Remanso e do bairro ribeirinho de Santa Corvina?",
      ],
    },
    {
      id: "nomeie",
      title: "NOMEIE",
      kind: "cards",
      eyebrow: "Revisão da semana",
      subtitle:
        "Quais ferramentas das Aulas 25, 26 e 27 ajudam a ler o Passo do Itaúba sem reduzir a região a uma linha no mapa?",
      items: [
        {
          id: "limite-zona",
          emoji: "🌉",
          name: "LIMITE × ZONA DE FRONTEIRA",
          question: "Onde está a linha, e que área de relações se forma em torno dela?",
        },
        {
          id: "diario",
          emoji: "🔁",
          name: "DESLOCAMENTO DIÁRIO DE OTÁVIO",
          question: "Quem vai e volta todos os dias muda de residência?",
        },
        {
          id: "rota",
          emoji: "🧭",
          name: "ROTA DE NOEMI",
          question: "Que regra e que rede mudaram o ponto de chegada?",
        },
        {
          id: "condicao",
          emoji: "📄",
          name: "CONDIÇÃO PROVISÓRIA DE ELIAS",
          question: "O pedido já foi decidido, ou ainda está em análise?",
        },
        {
          id: "vinculo",
          emoji: "🏡",
          name: "VÍNCULO DE CELESTE",
          question: "Que relações ligam as duas margens, e sob quais regras?",
        },
      ],
      highlight: "Nenhuma dessas ferramentas explica o Passo do Itaúba sozinha.",
    },
    {
      id: "conecte",
      title: "CONECTE",
      kind: "flow",
      flow: [
        "Fronteira: linha e zona",
        "Regra, em mais de uma escala",
        "Trajetória",
        "Condição jurídica",
        "Efeitos e vínculos",
      ],
      highlight:
        "Uma regra nova pode mudar quem passa, e como passa, sem fechar a fronteira nem apagar os vínculos entre as margens.",
      text:
        "No Passo do Itaúba, regras de escalas diferentes se sobrepõem: o bloco regional facilita deslocamentos, cada Estado mantém as próprias exigências, e uma lista oficial de localidades decide quem pode usar o documento de morador. A lista de Albor muda quem usa essa modalidade: para Otávio, de Salgueiro, nada mudou; para os moradores de Remanso, a entrada passou a exigir o documento de viagem comum. O visto exigido por Tarumã modifica o percurso de Noemi, e a rede do irmão influencia sua chegada a Vila Lavra, diferente da planejada. O pedido de Elias define sua condição enquanto ele aguarda: é solicitante, com documento provisório. E a regra nova aumenta a exigência documental enfrentada pelos parentes de Celeste, sem eliminar os vínculos que unem as duas margens, nem a soberania de cada Estado sobre o próprio território.",
    },
    {
      id: "decida",
      title: "DECIDA",
      kind: "questions",
      questions: [
        {
          id: "s09-cp-q01",
          statement:
            "No Passo do Itaúba, cenário fictício, a Ponte Itaúba liga Salgueiro, em Tarumã, a Santa Corvina, em Albor. Albor passou a aceitar o documento de morador fronteiriço só de quem vive em localidades de uma lista oficial: Salgueiro está na lista; Remanso, vila ribeirinha de Tarumã, não, e seus moradores passaram a usar o documento de viagem comum. A ponte segue aberta. Otávio mora em Salgueiro, tem o documento de morador e trabalha em Santa Corvina, voltando para casa todo dia. Noemi, nacional de Oriana, queria chegar a Tarumã, que exige visto de nacionais de Oriana; sem o visto e podendo permanecer regularmente em Albor, seguiu para Vila Lavra, onde o irmão lhe ofereceu moradia. Elias, também de Oriana, pediu a Albor o reconhecimento da condição de refugiado e aguarda a decisão com documento provisório. Celeste, de Albor, vive no bairro ribeirinho de Santa Corvina e tem avó e primos em Remanso, com quem compartilha língua, festas e práticas ligadas ao rio. A leitura mais adequada é que",
          options: [
            {
              id: "A",
              text: "Otávio, por trabalhar todos os dias em Santa Corvina, migrou para Albor, e a regra não o atinge porque Salgueiro está na lista; Noemi, sem o visto de Tarumã, seguiu a rede do irmão até Vila Lavra; Elias tem documento provisório enquanto espera; e Celeste mantém vínculos com Remanso.",
            },
            {
              id: "B",
              text: "para quem vive em Remanso, a nova regra fecha a fronteira com Albor, já que o documento de morador deixou de valer ali; Otávio segue indo e voltando de Salgueiro; Noemi chegou a Vila Lavra pelo visto exigido por Tarumã e pela rede do irmão; e Elias, ainda solicitante, aguarda a decisão.",
            },
            {
              id: "C",
              text: "a regra filtra sem fechar a ponte: pesa sobre Remanso, não sobre Otávio; o visto exigido por Tarumã e a rede do irmão mudaram a chegada de Noemi; Elias aguarda decisão e ainda não é refugiado reconhecido; e os vínculos de Celeste atravessam o limite sem anular as regras de Albor.",
            },
            {
              id: "D",
              text: "a regra pesa sobre Remanso e não sobre Otávio, que volta todo dia a Salgueiro; Noemi chegou a Vila Lavra, e não a Tarumã, pelo visto e pela rede; Elias aguarda decisão; e os vínculos de Celeste fazem das duas margens um território comunitário em que as regras de Albor deixam de valer.",
            },
            {
              id: "E",
              text: "a regra seleciona quem pode usar o documento de morador, sem interromper a ponte; Noemi mudou o destino por causa do visto e do irmão; Elias, ao pedir proteção a Albor, já obteve a condição de refugiado reconhecido; e a avó e os primos de Celeste enfrentam uma exigência documental nova.",
            },
          ],
          correctOptionId: "C",
          explanation:
            "A alternativa C está correta porque aplica a operação da semana às quatro situações. 1. FRONTEIRA (Aula 25): a regra nova funciona como filtro seletivo; a ponte continua aberta, Otávio segue usando o documento de morador, e os moradores de Remanso passam a apresentar o documento de viagem comum. 2. TRAJETÓRIA (Aula 26): Noemi pretendia chegar a Tarumã; o visto que ela não tem condicionou o percurso, a rede do irmão orientou a chegada, e Vila Lavra não era o destino planejado. 3. CONDIÇÃO (Aula 27): Elias pediu proteção e aguarda a decisão; é solicitante, com documento provisório, e ainda não é refugiado reconhecido. 4. VÍNCULO (Aulas 25 e 27): parentes, língua, festas e práticas ligam as duas margens; esses vínculos atravessam o limite, mas as regras de Albor continuam valendo, como mostra a exigência nova enfrentada pelos parentes de Celeste. A confunde deslocamento diário com migração. B confunde exigência documental nova com fechamento da fronteira. D trata a territorialidade como ausência de soberania. E trata o pedido de proteção como reconhecimento.",
          optionFeedback: {
            A: "Otávio vai e volta todos os dias e continua morando em Salgueiro: é um deslocamento diário, não uma migração. Trabalhar do outro lado do limite não muda a residência.",
            B: "A regra nova não fecha a fronteira: os moradores de Remanso continuam podendo entrar em Albor, agora com o documento de viagem comum. Ela muda a condição da passagem, não a impede.",
            C: "Correta: lê a regra como filtro seletivo, reconstrói a trajetória de Noemi pela regra e pela rede, separa pedido de reconhecimento e mostra vínculos que atravessam o limite sob as regras dos Estados.",
            D: "Os vínculos de Celeste atravessam o limite, mas não suspendem a soberania de Albor: tanto que os parentes de Remanso passaram a cumprir a exigência documental nova para entrar.",
            E: "Pedir proteção não é o mesmo que ter a condição reconhecida: pelas regras do cenário, Elias tem documento provisório e aguarda a decisão de Albor.",
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
          id: "condicao",
          before:
            "“Albor reconheceu o pedido de Elias. É só um papel novo; nada mudou na situação dele.”",
          after:
            "“Mudou a condição: Elias passa de solicitante a refugiado reconhecido e, pela regra do cenário, deixa o documento provisório e recebe residência por prazo indeterminado.”",
        },
        {
          id: "trajetoria",
          before: "“Com o reconhecimento, o caminho que Elias fez até Albor deixa de importar.”",
          after: "“A decisão muda a condição daqui para a frente; a trajetória que ele percorreu continua a mesma.”",
        },
        {
          id: "nacionalidade",
          before: "“Reconhecido como refugiado em Albor, Elias deixa de ser nacional de Oriana.”",
          after: "“O reconhecimento não muda automaticamente a nacionalidade: Elias continua nacional de Oriana.”",
        },
        {
          id: "pertencimento",
          before: "“Com a residência por prazo indeterminado, Elias passa a pertencer a Santa Corvina.”",
          after: "“O pertencimento se constrói em vínculos vividos; a decisão jurídica não o produz automaticamente.”",
        },
      ],
      closing:
        "Uma decisão jurídica altera a condição, mas não reescreve automaticamente toda a trajetória ou a identidade da pessoa. Aula 25: a fronteira filtra. Aula 26: a trajetória tem etapas, barreiras e redes. Aula 27: condição jurídica e pertencimento não são a mesma coisa.",
    },
  ],

  conclusion:
    "Diante de uma região de fronteira, você já consegue reconstruir a operação inteira: quem circula, por onde, sob qual regra e em qual escala, em que condição, com qual vínculo e com quais efeitos. Uma fronteira filtra, uma trajetória pode se desviar, uma condição jurídica pode mudar, e um vínculo pode atravessar a linha sem apagá-la.",

  celebrationMessage:
    "Semana 09 concluída: agora você lê fronteiras, trajetórias e vínculos como partes de um mesmo território.",
};
