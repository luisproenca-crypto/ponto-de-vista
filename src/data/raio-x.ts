/**
 * RAIO-X DAS PROVAS
 *
 * Metodologia de leitura de questões usada no curso. As quatro etapas foram
 * definidas pelo Prof. Luis; as descrições ainda serão redigidas e por isso
 * estão como `null` (o site exibe "Conteúdo em preparação").
 */
export interface RaioXStep {
  id: string;
  name: string;
  description: string | null;
}

export const raioXSteps: RaioXStep[] = [
  { id: "conceito", name: "CONCEITO", description: null },
  { id: "pista", name: "PISTA", description: null },
  { id: "armadilha", name: "ARMADILHA", description: null },
  { id: "transferencia", name: "TRANSFERÊNCIA", description: null },
];

export interface ExamCard {
  id: string;
  exam: string;
  year: string;
  /** `null` enquanto o raio-x da prova não estiver publicado. */
  href: string | null;
  status: "em-breve" | "disponivel";
}

export const exams: ExamCard[] = [
  { id: "enem-2026", exam: "ENEM", year: "2026", href: null, status: "em-breve" },
  {
    id: "unicamp-2027",
    exam: "UNICAMP",
    year: "2027",
    href: null,
    status: "em-breve",
  },
  {
    id: "fuvest-2027",
    exam: "FUVEST",
    year: "2027",
    href: null,
    status: "em-breve",
  },
  {
    id: "unesp-2027",
    exam: "UNESP",
    year: "2027",
    href: null,
    status: "em-breve",
  },
];
