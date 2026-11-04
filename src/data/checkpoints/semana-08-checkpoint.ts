import type { CheckpointContent } from "@/lib/types";

/**
 * CHECKPOINT 08 — Semana 08
 * Tema: "BACIA DO RIO CAMBARÁ — A Natureza em Movimento"
 *
 * Situação-problema inteiramente fictícia que reúne as três operações da
 * semana: Aula 22 (forma → processo → agente → tempo), Aula 23 (onde a
 * água cai → infiltra ou escoa → por onde circula → o que transporta →
 * onde se acumula → quem é afetado a jusante) e Aula 24 (ler o padrão →
 * combinar fatores → explicar a paisagem).
 *
 * Operação integradora: "O que aparece na planície começou onde?" Cadeia:
 * condições naturais (clima, relevo, solo) em interação com cobertura e uso
 * da terra → infiltração, escoamento e mobilização de material → rede de
 * drenagem → transporte e deposição → respostas a jusante. Condições
 * naturais e decisões de uso aparecem no mesmo nó, para não sugerir que o
 * clima "causa" o uso da terra. Três escalas de tempo: longa (serra e
 * escarpa), anos (lavoura, ravinas, impermeabilização) e dias ou horas
 * (chuvas, resposta do rio, deslizamento).
 *
 * O checkpoint não ensina conteúdo novo. Todos os nomes, altitudes,
 * percentuais e observações são fictícios; nenhum dado real é usado. A
 * diferença de chuva entre os postos é sempre atribuída a uma combinação
 * (entrada de umidade, posição diante da serra, interioridade); a altitude
 * entra sobretudo no contraste térmico. Nenhuma atividade é tratada como
 * culpada: a lavoura aumenta o material disponível, a cidade altera o
 * tempo de resposta, e a conexão é demonstrada pela drenagem e pela
 * turbidez medida acima e abaixo da confluência.
 * REPETIÇÃO EVITADA: sem captação nem fazenda do outro lado do divisor
 * (Aula 23); sem várzea ocupada, desastre ou vulnerabilidade social
 * (Aula 16 e Checkpoint 06); sem governança de bacia (Aula 18); sem atores
 * e cadeia produtiva (Checkpoint 07). O "dia isolado de chuva" ficou fora
 * do cenário e aparece só no MUDE O OLHAR.
 *
 * Arte planejada (ainda não existe; o site mostra o placeholder):
 * /public/assets/checkpoints/semana-08-rio-cambara.png, proporção 16:9.
 * Todas as informações necessárias para responder estão no texto.
 */
export const checkpoint08Content: CheckpointContent = {
  intro:
    "A natureza em movimento: nesta semana, você aprendeu a ler os processos que uma paisagem registra, a seguir o caminho da água e dos materiais numa bacia e a explicar por que paisagens diferem pela combinação de fatores. Este checkpoint junta as três leituras num mesmo território: o que aparece na planície começou onde?",

  scenario: {
    title: "BACIA DO RIO CAMBARÁ",
    description:
      "A Bacia do Rio Cambará é uma bacia fictícia. O rio nasce na Serra do Jatobá, que forma o limite sul e leste da bacia e tem uma escarpa muito antiga, e corre de sudeste para noroeste até uma planície no interior. Dois postos registram o clima: o Posto Serra, a cerca de 900 m, na vertente voltada para os ventos úmidos que chegam do oceano, mostra temperaturas amenas e chuva distribuída na maior parte do ano; o Posto Planície, a cerca de 300 m e mais distante do oceano, mostra temperaturas mais altas e uma estação seca marcada. Seguindo a correnteza, o Cambará recebe primeiro o afluente Sucupira, que drena uma vertente sob mata nativa contínua, onde uma chuva intensa deixou a cicatriz de um pequeno deslizamento; depois, recebe o afluente Taboca, cuja vertente foi coberta por mata até três anos atrás e hoje tem uma lavoura, com solo exposto entre as safras e ravinas ativas. Depois das chuvas, a turbidez do Cambará é baixa acima da confluência com o Taboca e alta abaixo dela. Mais adiante fica a cidade de Mutum, onde a área impermeabilizada passou de cerca de 15% para cerca de 40% em dez anos; nesse período, o pico de vazão na planície passou a chegar mais cedo depois das chuvas. Na planície, a vegetação se abre aos poucos, um pequeno reservatório usado para irrigação vem perdendo profundidade e há bancos de areia no canal; perto do reservatório, uma ravina antiga está estabilizada e coberta por vegetação.",
    image: {
      // Envie o arquivo para: /public/assets/checkpoints/semana-08-rio-cambara.png
      src: "/assets/checkpoints/semana-08-rio-cambara.png",
      alt: "Mapa-diagrama da bacia fictícia do Rio Cambará, com o norte indicado no alto e o divisor de águas em linha tracejada. Ao sul e a leste, a Serra do Jatobá, com curvas de nível, uma escarpa e as cabeceiras; de fora do limite leste, onde fica o oceano, setas indicam ventos úmidos vindos do oceano. O Rio Cambará corre de sudeste para noroeste. Seguindo a correnteza, recebe primeiro o Afluente Sucupira, numa vertente com mata contínua e uma pequena cicatriz de deslizamento, e depois o Afluente Taboca, numa vertente com lavoura, faixas de solo exposto e ravinas. No rio, o ponto de observação 1, acima da confluência com o Taboca, indica turbidez baixa, e o ponto 2, abaixo dela, turbidez alta. Mais adiante fica a Cidade de Mutum, com área impermeabilizada de cerca de 15% para cerca de 40% em 10 anos. A noroeste, na planície, a vegetação se abre aos poucos; há um reservatório com bancos de areia e a indicação de perda de profundidade observada e, perto dele, uma ravina antiga, atualmente vegetada. Dois climogramas fictícios: Posto Serra, a 900 m, com temperaturas mais amenas e chuva na maior parte do ano; Posto Planície, a 300 m, com temperaturas mais altas e chuva concentrada em parte do ano, seguida de meses quase sem chuva.",
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
        "O que os dois climogramas mostram de diferente, e que condições de cada posto podem ajudar a explicar essa diferença?",
        "O que mudou na vertente do Taboca nos últimos anos, e o que aparece hoje no solo?",
        "Em que trecho do rio a água fica turva depois das chuvas, e em que trecho não fica?",
        "Por onde o material teria de passar para chegar da vertente ao reservatório?",
        "Que mudanças da bacia levaram muito tempo, quais levaram anos e quais aconteceram em horas? A velocidade de cada uma revela sua causa?",
      ],
    },
    {
      id: "nomeie",
      title: "NOMEIE",
      kind: "cards",
      eyebrow: "Revisão da semana",
      subtitle:
        "Quais ferramentas das Aulas 22, 23 e 24 ajudam a ler a Bacia do Cambará sem apontar um culpado isolado?",
      items: [
        {
          id: "forma-processo",
          emoji: "⛰️",
          name: "FORMA → PROCESSO → AGENTE → TEMPO",
          question: "O que a escarpa, as ravinas e o deslizamento registram, e em que escala de tempo?",
        },
        {
          id: "bacia",
          emoji: "🗺️",
          name: "BACIA, MONTANTE E JUSANTE",
          question: "Em que sentido o rio corre, e o que está ligado a quê pela água?",
        },
        {
          id: "infiltracao",
          emoji: "💧",
          name: "INFILTRAÇÃO × ESCOAMENTO",
          question: "O que a mata, a lavoura e as ruas de Mutum mudam no caminho e no tempo da chuva?",
        },
        {
          id: "sedimentos",
          emoji: "🏜️",
          name: "TRANSPORTE, DEPOSIÇÃO E ASSOREAMENTO",
          question: "O material sai de onde, passa por onde e se acumula onde?",
        },
        {
          id: "clima",
          emoji: "📊",
          name: "PADRÃO CLIMÁTICO + COMBINAÇÃO DE FATORES",
          question: "Que fatores, juntos, ajudam a explicar a diferença entre os dois postos?",
        },
      ],
      highlight: "Nenhum desses conceitos explica a Bacia do Cambará sozinho.",
    },
    {
      id: "conecte",
      title: "CONECTE",
      kind: "flow",
      flow: [
        "Condições naturais (clima, relevo, solo) + cobertura e uso da terra",
        "Infiltração, escoamento e mobilização de material",
        "Rede de drenagem",
        "Transporte e deposição",
        "Respostas a jusante",
      ],
      highlight:
        "Condições naturais e decisões de uso interagem; nenhuma delas, sozinha, explica o que chega a jusante.",
      text:
        "Na serra, a entrada de umidade, a posição diante do relevo e a distância do oceano favorecem chuvas mais distribuídas que na planície. Essas condições interagem com a cobertura de cada vertente: a mata do Sucupira tende a proteger o solo, mas não impede todo movimento de massa; o solo exposto do Taboca pode aumentar o material disponível para o escoamento. A rede de drenagem leva esse material para jusante, e a turbidez medida acima e abaixo da confluência ajuda a localizar a principal contribuição. Bancos de areia e a perda de profundidade do reservatório são compatíveis com deposição. Em Mutum, a impermeabilização está associada a um pico de vazão mais precoce: ela muda sobretudo o tempo da água. E cada processo tem sua escala: a escarpa levou muito tempo; a lavoura, as ravinas e a expansão urbana, anos; as chuvas, a resposta do rio e o deslizamento, horas ou dias. Processos rápidos podem ser naturais ou socialmente influenciados: a velocidade não revela sozinha a causa.",
    },
    {
      id: "decida",
      title: "DECIDA",
      kind: "questions",
      questions: [
        {
          id: "s08-cp-q01",
          statement:
            "Na Bacia do Rio Cambará, fictícia, o rio corre de sudeste para noroeste, da Serra do Jatobá até uma planície. O posto da serra, a 900 m, fica na vertente voltada para ventos úmidos vindos do oceano e registra chuva distribuída na maior parte do ano e temperaturas amenas; o da planície, a 300 m e mais no interior, registra temperaturas mais altas e uma estação seca marcada. Seguindo a correnteza, o Cambará recebe primeiro o afluente Sucupira, sob mata contínua, onde uma chuva intensa deixou a cicatriz de um pequeno deslizamento, e depois o afluente Taboca, onde a mata deu lugar a uma lavoura há três anos; entre as safras, o solo fica exposto e há ravinas ativas. Após chuvas, a turbidez do rio é baixa acima da confluência com o Taboca e alta abaixo dela. Mais adiante, a cidade de Mutum ampliou sua área impermeabilizada em dez anos, e o pico de vazão na planície passou a chegar mais cedo. Na planície, o reservatório perde profundidade e há bancos de areia; perto dele, uma ravina antiga está estabilizada e coberta por vegetação. A leitura mais adequada é que",
          options: [
            {
              id: "A",
              text: "os postos estão em latitudes muito parecidas, então a diferença entre eles se deve à posição da serra, que barra a umidade do oceano; Mutum, com mais área impermeável e ruas novas nos últimos anos, é a origem provável da turbidez, dos bancos e do pico antecipado, o que é compatível com sua expansão; a ravina antiga tende a contribuir pouco, e o deslizamento sob mata pode ser natural, sem relação com a lavoura do Taboca.",
            },
            {
              id: "B",
              text: "os postos diferem pela combinação de umidade oceânica, posição diante da serra, interioridade e altitude; o solo exposto do Taboca favorece a perda de material, e a mudança de turbidez na confluência reforça essa ligação, compatível com o assoreamento a jusante; Mutum tende a antecipar o pico sem ser a fonte provável da areia; o deslizamento sob mata pode ser natural, e a ravina antiga tende a pesar pouco hoje.",
            },
            {
              id: "C",
              text: "os postos diferem pela combinação de umidade oceânica, relevo e altitude; a ravina antiga, a montante e a mais próxima do reservatório, é a fonte provável da areia acumulada, e o assoreamento indica que a água vinda de Mutum está mais poluída a jusante; o deslizamento sob mata pode ser natural, e a lavoura do Taboca contribui pouco para o que chega à planície e ao reservatório, apesar das ravinas.",
            },
            {
              id: "D",
              text: "a lavoura do Taboca, aberta há três anos e que favorece a perda de solo, é a origem comum da turbidez, dos bancos, do pico antecipado na planície e até da diferença entre os postos; Mutum, a jusante, recebe essa água sem alterar seu comportamento; a escarpa da serra e as ravinas do Taboca resultam do mesmo processo recente, e o deslizamento no Sucupira mostra que a mata da encosta deixou de proteger o solo da encosta.",
            },
            {
              id: "E",
              text: "a serra recebe mais chuva por ser mais alta, e a planície, no interior e mais baixa, aquece mais ao longo do ano; Mutum, mais ao norte do Taboca, fica a montante dele e envia parte da areia ao rio e ao reservatório; o deslizamento no Sucupira, por ter sido tão rápido, revela intervenção humana na mata; e a turbidez alta logo abaixo da confluência com o Taboca reforça a perda de material na lavoura recém-aberta.",
            },
          ],
          correctOptionId: "B",
          explanation:
            "A alternativa B está correta porque reconstrói a cadeia inteira, sem apontar um culpado isolado. 1. CLIMA: os postos diferem pela combinação de entrada de umidade oceânica, posição diante da serra e interioridade; a altitude contribui sobretudo para as temperaturas mais amenas da serra. 2. COBERTURA: a troca da mata pela lavoura, com solo exposto entre as safras, favorece a perda de material, e as ravinas ativas registram isso. 3. CONEXÃO: a turbidez baixa acima e alta abaixo da confluência com o Taboca reforça a ligação entre essa vertente e o material que o rio carrega. 4. TRANSPORTE E DEPOSIÇÃO: o rio leva o material para jusante, e os bancos de areia e a perda de profundidade do reservatório são compatíveis com assoreamento. 5. CIDADE: em Mutum, a impermeabilização está associada ao pico de vazão mais precoce; a cidade muda sobretudo o tempo da água e, por estar abaixo do ponto em que a turbidez aparece, não é a provável fonte da areia. 6. TEMPO: o deslizamento sob mata, rápido, pode ser natural; a escarpa é muito antiga, e as ravinas, de anos. 7. PROXIMIDADE: a ravina antiga está perto do reservatório, mas estabilizada e coberta por vegetação, por isso tende a contribuir pouco hoje. A reduz o clima ao relevo e transforma a cidade na fonte da turbidez. C confunde proximidade com contribuição e assoreamento com poluição, e ignora o que a turbidez mostra. D atribui todos os efeitos à lavoura, ignora a cidade, junta escalas de tempo diferentes e supõe que a mata impede todo movimento de massa. E atribui a chuva só à altitude, usa o norte para definir montante e trata toda mudança rápida como humana.",
          optionFeedback: {
            A: "A serra participa, mas a diferença entre os postos combina umidade, posição e interioridade. E Mutum fica abaixo do trecho em que a turbidez aparece: ela muda o tempo da água, não é a fonte provável da areia.",
            B: "Correta: combina os fatores do clima, usa a mudança de turbidez para reforçar a ligação com o Taboca, reconhece o assoreamento a jusante, separa o papel da cidade e lê corretamente o deslizamento e a ravina antiga.",
            C: "A ravina mais próxima está estabilizada, e a turbidez aparece abaixo do Taboca. Além disso, bancos de areia e perda de profundidade indicam deposição de sedimentos, não poluição.",
            D: "A lavoura não explica tudo: o pico antecipado está associado a Mutum, e o clima não depende dela. A escarpa é muito mais antiga que as ravinas, e a mata protege o solo sem impedir todo deslizamento.",
            E: "Altitude maior não significa, por si, mais chuva. O rio corre para noroeste, então Mutum está a jusante do Taboca. E uma mudança rápida pode ser natural.",
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
          id: "represa",
          before: "“A represa perdeu capacidade; o problema está na represa.”",
          after: "“Pergunte o que a bacia a montante está entregando a ela.”",
        },
        {
          id: "evento-clima",
          before: "“Choveu muito num dia no Semiárido; o clima ficou úmido.”",
          after: "“Um evento descreve o tempo; o clima é o padrão de muitos anos.”",
        },
        {
          id: "mudanca-rapida",
          before: "“A encosta deslizou de repente; foi ação humana.”",
          after: "“Mudanças rápidas também podem ser naturais. Investigue o processo e as condições.”",
        },
        {
          id: "atras-da-serra",
          before: "“Essa região é seca porque fica atrás de uma serra.”",
          after: "“O relevo participa, junto com a circulação do ar, a posição, a altitude e a distância do oceano.”",
        },
        {
          id: "cenario",
          before: "“A paisagem é o cenário onde a sociedade vive.”",
          after: "“A sociedade participa do sistema: muda a cobertura, a infiltração, o escoamento e o caminho dos materiais.”",
        },
      ],
      closing:
        "Aula 22: a paisagem registra processos em tempos diferentes. Aula 23: água e materiais conectam lugares. Aula 24: atmosfera, relevo, água, solo e vegetação interagem na construção das paisagens.",
    },
  ],

  conclusion:
    "Diante de um efeito na planície, você já consegue reconstruir a cadeia: ler o padrão do clima e combinar seus fatores, reconhecer o que a cobertura muda na infiltração e no escoamento, seguir o material pela rede de drenagem até onde ele se deposita e separar as escalas de tempo de cada processo. A natureza não é o cenário da sociedade: é um sistema de processos conectados, do qual a sociedade também faz parte.",

  celebrationMessage:
    "Semana 08 concluída: agora você lê a natureza como um sistema, da atmosfera ao que chega a jusante.",
};
