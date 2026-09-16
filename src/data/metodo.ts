/**
 * O MÉTODO P.O.N.T.O. — sequência didática do curso.
 * Textos definidos pelo Prof. Luis.
 */
export interface MetodoStep {
  letter: string;
  name: string;
  description: string;
}

export const metodoPonto: MetodoStep[] = [
  {
    letter: "P",
    name: "PROBLEMATIZAR",
    description: "Começamos com uma pergunta.",
  },
  {
    letter: "O",
    name: "OBSERVAR",
    description: "Antes de explicar, analisamos a realidade.",
  },
  {
    letter: "N",
    name: "NOMEAR",
    description: "Transformamos percepções em conceitos.",
  },
  {
    letter: "T",
    name: "TEORIZAR E CONECTAR",
    description: "Relacionamos conceitos, contextos e processos.",
  },
  {
    letter: "O",
    name: "OPERACIONALIZAR",
    description: "Aplicamos aquilo que aprendemos em situações e questões.",
  },
];
