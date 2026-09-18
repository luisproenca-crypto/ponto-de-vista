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

/** Cartão selecionável do bloco de hipótese (provocação inicial). */
export interface HypothesisCard {
  id: string;
  label: string;
}

/**
 * Bloco de provocação/hipótese ("O OLHAR DO PACO" com seleção de cartões).
 * A seleção é puramente pedagógica: não há resposta certa, não é persistida
 * e não afeta o progresso do aluno.
 */
export interface HypothesisBlock {
  title: string;
  intro: string;
  cards: HypothesisCard[];
  question: string;
  paco: string;
  reveal: string;
}

/** Opção selecionável de um round do bloco de decisão. */
export interface DecisionOption {
  id: string;
  label: string;
}

/**
 * Um round de escolha única dentro do bloco de decisão: uma pergunta,
 * as opções e o texto mostrado depois que o aluno escolhe uma delas.
 */
export interface DecisionRound {
  id: string;
  question: string;
  options: DecisionOption[];
  /** Texto mostrado após a escolha neste round (nunca certo/errado). */
  reveal: string;
}

/**
 * Bloco "O OLHAR DO PACO" — variante de decisão em rounds sucessivos de
 * escolha única (ex.: "o que priorizar?" → "quem deveria decidir?").
 * Nenhuma opção é certa ou errada; a seleção não afeta o progresso e não
 * é persistida.
 */
export interface DecisionInsightBlock {
  title: string;
  image: CourseImage | null;
  rounds: DecisionRound[];
}

/** Bloco visual de conexão simples: uma sequência de etapas + destaque. */
export interface ConnectionBlock {
  title: string;
  flow: string[];
  highlight: string;
  text: string;
}

/** Item de accordion do bloco de aplicação (ex.: LOCAL / REGIONAL / GLOBAL). */
export interface ApplicationAccordionItem {
  id: string;
  title: string;
  content: string;
}

/** Bloco de aplicação de conceitos a um caso concreto. */
export interface ApplicationBlock {
  title: string;
  /** Frase curta que nomeia o exemplo concreto usado (opcional). */
  context?: string;
  flow: string[];
  question: string;
  accordions: ApplicationAccordionItem[];
}

/** Item de aprofundamento (accordion com título, conteúdo e destaque). */
export interface DeepDiveItem {
  id: string;
  title: string;
  content: string;
  /** Frase de destaque (opcional — nem todo item precisa de uma). */
  highlight?: string;
  /** Fluxo visual opcional dentro do item (ex.: MINERAL → CHIP → ...). */
  flow?: string[];
}

/** Bloco de aprofundamento em accordions temáticos. */
export interface DeepDiveBlock {
  title: string;
  items: DeepDiveItem[];
  closing?: string;
}

/** Uma dimensão conectada ao Brasil (ex.: ALIMENTOS, ENERGIA...). */
export interface ConnectionDimension {
  id: string;
  label: string;
  description: string;
}

/** Bloco "E O BRASIL?" — o país no centro de uma rede de conexões. */
export interface BrazilConnectionsBlock {
  title: string;
  question: string;
  center: string;
  items: ConnectionDimension[];
  study: string;
  highlight: string;
}

/** Bloco "Como isso aparece na prova?" — o que a questão entrega vs. cobra. */
export interface ExamFormatBlock {
  title: string;
  deliversTitle: string;
  delivers: string[];
  demandsTitle: string;
  demands: string[];
  highlight: string;
  guidingIntro: string;
  guidingQuestions: string[];
  /** Arte de apoio opcional (ex.: pôster de revisão com as perguntas-guia). */
  image?: CourseImage | null;
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
  /** Título da caixa de missão. Mantém "Sua missão" se omitido. */
  missionTitle?: string;
  /** O OLHAR DO PACO */
  observation?: PacoObservationBlock;
  /**
   * O OLHAR DO PACO — variante com provocação/hipótese (seleção de
   * cartões). Opcional e independente de `observation`: uma aula usa um
   * ou outro, conforme a dinâmica pedagógica.
   */
  hypothesis?: HypothesisBlock;
  /**
   * O OLHAR DO PACO — variante de decisão em rounds sucessivos de escolha
   * única (ex.: "o que priorizar?" → "quem deveria decidir?"). Opcional e
   * independente de `observation`/`hypothesis`.
   */
  decisionInsight?: DecisionInsightBlock;
  /** DÊ NOME AO QUE VOCÊ VIU — as cinco lentes */
  lenses?: {
    /** Etiqueta acima do título. Mantém "As cinco lentes" se omitida. */
    eyebrow?: string;
    title: string;
    subtitle: string;
    items: ConceptLensItem[];
    highlight: string;
    image: CourseImage | null;
    /**
     * `true` omite completamente a área de imagem (nem imagem, nem
     * placeholder) — use quando a ausência de imagem for deliberada.
     */
    hideImage?: boolean;
  };
  /** 🔎 AGORA OLHE DE NOVO */
  lookAgain?: {
    title: string;
    intro: string;
    items: LookAgainItem[];
    closingQuote: string;
  };
  /** Bloco visual de conexão simples (ex.: "E se fossem a mesma história?"). */
  connection?: ConnectionBlock;
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
  /** Bloco de aplicação a um caso concreto (ex.: "AGORA CONECTE"). */
  application?: ApplicationBlock;
  /** Bloco de aprofundamento em accordions temáticos. */
  deepDive?: DeepDiveBlock;
  /** Bloco "E O BRASIL?" */
  brazilConnections?: BrazilConnectionsBlock;
  /** Bloco "Como isso aparece na prova?" */
  examFormat?: ExamFormatBlock;
  /** PROVE QUE SEU OLHAR MUDOU */
  question?: VestibularQuestionData;
  /** 🎯 MISSÃO CUMPRIDA? */
  missionCheck: string;
  /**
   * Mensagem da celebração ao concluir a aula (opcional). Quando ausente,
   * `LessonCompletion` usa o texto padrão já validado na Aula 01.
   */
  completionMessage?: string;
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
