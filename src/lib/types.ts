/**
 * Tipos do domínio PONTO DE VISTA.
 *
 * Toda a estrutura de conteúdo (semanas, aulas, checkpoints, materiais) é
 * descrita aqui e preenchida em `src/data/`. Os componentes nunca contêm
 * texto pedagógico: eles apenas renderizam estes dados.
 */

/* ------------------------------------------------------------------ */
/* Pilares                                                             */
/* ------------------------------------------------------------------ */

export type PillarId = "geografia" | "geopolitica" | "politica";

export interface Pillar {
  id: PillarId;
  /** Nome completo, ex.: "Geografia Essencial" */
  name: string;
  /** Verbo-chave do pilar, ex.: "ENTENDA" */
  verb: string;
  description: string;
  /** Dia da semana em que o pilar acontece na trilha */
  weekday: string;
  /** Ícone lucide usado nos cartões (nome do componente) */
  icon: "Globe2" | "Network" | "Landmark";
  /** Cor de acento da marca usada para este pilar */
  accent: "roxo" | "verde" | "laranja";
}

/* ------------------------------------------------------------------ */
/* Materiais e recursos                                                */
/* ------------------------------------------------------------------ */

export type ResourceKind = "pdf" | "mapa" | "link" | "slide";

export interface LessonResource {
  id: string;
  label: string;
  kind: ResourceKind;
  /** Caminho em /public ou URL externa. `null` = ainda não disponível. */
  href: string | null;
  description?: string;
}

/* ------------------------------------------------------------------ */
/* Blocos de conteúdo de uma aula                                      */
/* ------------------------------------------------------------------ */

/** Imagem do acervo do curso (pode ainda não existir em /public). */
export interface CourseImage {
  src: string;
  alt: string;
  caption?: string;
}

/** Bloco "O OLHAR DO PACO" — observação antes da explicação. */
export interface PacoObservationBlock {
  title: string;
  lines: string[];
  image: CourseImage | null;
  questions: string[];
  closing?: string;
}

/** Uma das cinco lentes conceituais. */
export interface ConceptLensItem {
  id: string;
  emoji: string;
  name: string;
  question: string;
}

/** Item do bloco "AGORA OLHE DE NOVO" (accordion). */
export interface LookAgainItem {
  id: string;
  name: string;
  question: string;
}

/** Cartão/accordion do bloco "DÊ PRECISÃO AO SEU OLHAR". */
export interface ConceptDetail {
  id: string;
  name: string;
  /** Cada campo aceita `null` enquanto o texto não foi escrito pelo professor. */
  conceito: string | null;
  penseAssim: string | null;
  exemplo: string | null;
  naoConfunda: string | null;
  naProva: string | null;
}

/** Alternativa de uma questão de vestibular. */
export interface QuestionOption {
  id: string; // "A" | "B" | ...
  text: string;
}

/** Questão de aplicação. */
export interface VestibularQuestionData {
  id: string;
  /** Fonte da questão, ex.: "ENEM 2023 — adaptada". */
  source?: string;
  statement: string;
  options: QuestionOption[];
  correctOptionId: string;
  /** Resposta comentada — explica o raciocínio, nunca só a letra. */
  explanation: string;
  /** Comentário específico por alternativa (opcional). */
  optionFeedback?: Record<string, string>;
  /**
   * `true` quando a questão ainda é um exemplo de demonstração e precisa ser
   * substituída pelo professor. A interface exibe um aviso discreto.
   */
  isPlaceholder?: boolean;
}

/** Conteúdo completo de uma aula publicada. */
export interface LessonContent {
  /** 🎯 SUA MISSÃO */
  mission: string;
  /** O OLHAR DO PACO */
  observation?: PacoObservationBlock;
  /** DÊ NOME AO QUE VOCÊ VIU — as cinco lentes */
  lenses?: {
    title: string;
    subtitle: string;
    items: ConceptLensItem[];
    highlight: string;
    image: CourseImage | null;
  };
  /** 🔎 AGORA OLHE DE NOVO */
  lookAgain?: {
    title: string;
    intro: string;
    items: LookAgainItem[];
    closingQuote: string;
  };
  /** 🎥 AGORA, VAMOS CONSTRUIR O CONCEITO */
  video?: {
    title: string;
    paragraphs: string[];
  };
  /** 🧠 DÊ PRECISÃO AO SEU OLHAR */
  concepts?: {
    title: string;
    items: ConceptDetail[];
  };
  /** PROVE QUE SEU OLHAR MUDOU */
  question?: VestibularQuestionData;
  /** 🎯 MISSÃO CUMPRIDA? */
  missionCheck: string;
}

/* ------------------------------------------------------------------ */
/* Aulas, checkpoints e semanas                                        */
/* ------------------------------------------------------------------ */

export type ContentStatus = "publicada" | "em-preparacao";

export interface Lesson {
  /** Identificador estável usado no localStorage. Nunca mude depois de publicado. */
  id: string;
  /** Slug usado na URL: /aulas/{weekSlug}/{slug} */
  slug: string;
  weekNumber: number;
  weekSlug: string;
  /** Número exibido ("AULA 01") */
  number: number;
  pillar: PillarId;
  /** Dia da semana em que a aula entra na trilha */
  weekday: string;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  /** URL do YouTube (watch, youtu.be ou embed). `null` = player em placeholder. */
  videoUrl: string | null;
  resources: LessonResource[];
  status: ContentStatus;
  content: LessonContent | null;
}

export interface Checkpoint {
  id: string;
  number: number;
  weekNumber: number;
  weekSlug: string;
  title: string;
  weekday: string;
  status: ContentStatus;
  /** Rota do questionário quando existir. */
  href: string | null;
}

export interface WeekMap {
  /** Caminho do PDF em /public. `null` = ainda não enviado. */
  pdfHref: string | null;
  /** Imagem de pré-visualização. `null` = placeholder. */
  previewSrc: string | null;
}

export interface Week {
  id: string;
  number: number;
  slug: string;
  title: string | null;
  description: string | null;
  lessons: Lesson[];
  checkpoint: Checkpoint | null;
  map: WeekMap;
  status: ContentStatus;
}

/**
 * Uma atividade da trilha (aula ou checkpoint), usada para determinar a
 * "próxima atividade" respeitando a ordem pedagógica do curso.
 */
export type Activity =
  | { type: "lesson"; lesson: Lesson }
  | { type: "checkpoint"; checkpoint: Checkpoint };

/* ------------------------------------------------------------------ */
/* Progresso                                                           */
/* ------------------------------------------------------------------ */

export interface ProgressState {
  version: number;
  completedLessons: string[];
  completedCheckpoints: string[];
  lastLessonId: string | null;
  updatedAt: string | null;
}

export interface WeekProgress {
  weekNumber: number;
  done: number;
  total: number;
  percent: number;
  status: "concluida" | "em-andamento" | "nao-iniciada";
}

export interface OverallProgress {
  done: number;
  total: number;
  percent: number;
}
