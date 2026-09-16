import { site } from "@/data/site";

/**
 * Textos da página COMECE AQUI.
 * Edite livremente — nenhum componente precisa ser alterado.
 *
 * NOTA: os parágrafos de abertura foram montados a partir das frases e da
 * descrição do próprio curso. Revise-os com a sua voz antes de publicar.
 */

export const comeceAqui = {
  title: "COMECE AQUI",
  subtitle:
    "Antes de começar sua jornada, entenda como o Ponto de Vista funciona.",

  filosofia: {
    numero: "01",
    titulo: "ENTENDA O SEU PONTO DE VISTA",
    frases: [site.tagline, site.motto],
    paragrafos: [
      "O Ponto de Vista é um curso preparatório para o ENEM, a FUVEST, a UNICAMP e a UNESP — mas a proposta não é apenas preparar para provas.",
      "Aqui, Geografia, Geopolítica, Atualidades e Formação Política se combinam para que você entenda o mundo, conquiste a prova e participe da realidade.",
      "Nenhuma aula começa pela resposta. Começamos sempre por uma pergunta e por aquilo que você é capaz de observar.",
    ],
  },

  pilares: {
    numero: "02",
    titulo: "CONHEÇA OS TRÊS PILARES",
  },

  metodo: {
    numero: "03",
    titulo: "DESCUBRA O MÉTODO P.O.N.T.O.",
  },

  semana: {
    numero: "04",
    titulo: "SUA SEMANA NO PONTO DE VISTA",
  },

  missao: {
    numero: "05",
    titulo: "SUA PRIMEIRA MISSÃO",
    botao: "Começar minha trilha",
  },
} as const;

/** Ritmo semanal exibido na seção 04. */
export interface DiaDaSemana {
  dia: string;
  emoji: string;
  nome: string;
  verbo: string;
}

export const ritmoSemanal: DiaDaSemana[] = [
  {
    dia: "Segunda",
    emoji: "🌍",
    nome: "Geografia Essencial",
    verbo: "ENTENDA",
  },
  {
    dia: "Quarta",
    emoji: "🌐",
    nome: "Geopolítica & Atualidades",
    verbo: "CONECTE",
  },
  {
    dia: "Sexta",
    emoji: "🏛",
    nome: "Política & Cidadania",
    verbo: "COMPREENDA",
  },
  {
    dia: "Domingo",
    emoji: "🧭",
    nome: "Checkpoint",
    verbo: "TESTE-SE",
  },
];
