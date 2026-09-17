import type {
  Activity,
  Checkpoint,
  Lesson,
  LessonResource,
  PillarId,
  Week,
} from "@/lib/types";
import { aula01Content } from "@/data/lessons/semana-01-aula-01";
import { aula02Content } from "@/data/lessons/semana-01-aula-02";

/**
 * ===================================================================
 * ESTRUTURA DO CURSO — PONTO DE VISTA 2026
 * ===================================================================
 *
 * Este é o único arquivo que precisa ser editado para:
 *   • mudar títulos de semanas e aulas
 *   • publicar uma aula que estava "em preparação"
 *   • adicionar a URL do vídeo do YouTube
 *   • adicionar materiais (PDFs, mapas)
 *
 * REGRAS IMPORTANTES
 *   1. Nunca mude o campo `id` de uma aula ou checkpoint já publicado:
 *      ele é a chave usada para guardar o progresso do aluno.
 *   2. `status: "em-preparacao"` faz o site exibir "Conteúdo em preparação"
 *      sem quebrar nenhum layout.
 *   3. Campos `null` significam "ainda não disponível".
 */

/* ------------------------------------------------------------------ */
/* Helpers de construção                                               */
/* ------------------------------------------------------------------ */

const WEEKDAY_BY_PILLAR: Record<PillarId, string> = {
  geografia: "Segunda",
  geopolitica: "Quarta",
  politica: "Sexta",
};

/** Ordem fixa dos pilares dentro de uma semana. */
const PILLAR_ORDER: PillarId[] = ["geografia", "geopolitica", "politica"];

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function weekSlugOf(weekNumber: number): string {
  return `semana-${pad(weekNumber)}`;
}

interface LessonInput {
  weekNumber: number;
  number: number;
  pillar: PillarId;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  videoUrl?: string | null;
  resources?: LessonResource[];
  status?: Lesson["status"];
  content?: Lesson["content"];
}

function makeLesson(input: LessonInput): Lesson {
  const weekSlug = weekSlugOf(input.weekNumber);
  return {
    id: `s${pad(input.weekNumber)}-a${pad(input.number)}`,
    slug: `aula-${pad(input.number)}`,
    weekNumber: input.weekNumber,
    weekSlug,
    number: input.number,
    pillar: input.pillar,
    weekday: WEEKDAY_BY_PILLAR[input.pillar],
    title: input.title ?? null,
    subtitle: input.subtitle ?? null,
    description: input.description ?? null,
    videoUrl: input.videoUrl ?? null,
    resources: input.resources ?? [],
    status: input.status ?? "em-preparacao",
    content: input.content ?? null,
  };
}

/** Cria as três aulas padrão de uma semana (Segunda / Quarta / Sexta). */
function makeDefaultLessons(weekNumber: number): Lesson[] {
  return PILLAR_ORDER.map((pillar, index) =>
    makeLesson({ weekNumber, number: index + 1, pillar }),
  );
}

function makeCheckpoint(weekNumber: number): Checkpoint {
  return {
    id: `s${pad(weekNumber)}-cp`,
    number: weekNumber,
    weekNumber,
    weekSlug: weekSlugOf(weekNumber),
    title: `CHECKPOINT ${pad(weekNumber)}`,
    weekday: "Domingo",
    status: "em-preparacao",
    href: null,
  };
}

interface WeekInput {
  number: number;
  title?: string | null;
  description?: string | null;
  lessons?: Lesson[];
  checkpoint?: Checkpoint | null;
  pdfHref?: string | null;
  previewSrc?: string | null;
}

function makeWeek(input: WeekInput): Week {
  const lessons = input.lessons ?? [];
  const hasPublished =
    lessons.some((l) => l.status === "publicada") ||
    input.checkpoint?.status === "publicada";
  return {
    id: weekSlugOf(input.number),
    number: input.number,
    slug: weekSlugOf(input.number),
    title: input.title ?? null,
    description: input.description ?? null,
    lessons,
    checkpoint: input.checkpoint ?? null,
    map: {
      pdfHref: input.pdfHref ?? null,
      previewSrc: input.previewSrc ?? null,
    },
    status: hasPublished ? "publicada" : "em-preparacao",
  };
}

/* ------------------------------------------------------------------ */
/* SEMANA 01 — A CONSTRUÇÃO DO OLHAR                                   */
/* ------------------------------------------------------------------ */

const semana01: Week = makeWeek({
  number: 1,
  title: "A CONSTRUÇÃO DO OLHAR",
  description:
    "A semana em que aprendemos a observar antes de explicar — e a transformar percepções em conceitos.",
  lessons: [
    makeLesson({
      weekNumber: 1,
      number: 1,
      pillar: "geografia",
      title: "APRENDER A OLHAR",
      subtitle: "Os conceitos que nos ajudam a compreender o espaço.",
      description:
        "Antes de interpretar o mundo, precisamos aprender a observá-lo.",
      // Cole aqui a URL do YouTube quando o vídeo estiver pronto.
      // Ex.: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
      videoUrl: null,
      resources: [
        {
          id: "s01-a01-mapa",
          label: "Mapa da Semana 01",
          kind: "mapa",
          href: null,
          description: "Síntese visual da semana em uma página.",
        },
      ],
      status: "publicada",
      content: aula01Content,
    }),
    makeLesson({
      weekNumber: 1,
      number: 2,
      pillar: "geopolitica",
      title: "O MUNDO EM 2026",
      subtitle: "Um mundo conectado, disputado e em transformação.",
      description:
        "Antes de tentar entender cada notícia, aprenda a enxergar as conexões entre elas.",
      // Cole aqui a URL do YouTube quando o vídeo estiver pronto.
      videoUrl: null,
      status: "publicada",
      content: aula02Content,
    }),
    makeLesson({ weekNumber: 1, number: 3, pillar: "politica" }),
  ],
  checkpoint: makeCheckpoint(1),
});

/* ------------------------------------------------------------------ */
/* SEMANA 02 — MAPAS, PODER E DEMOCRACIA                               */
/* ------------------------------------------------------------------ */

const semana02: Week = makeWeek({
  number: 2,
  title: "MAPAS, PODER E DEMOCRACIA",
  description: null,
  lessons: makeDefaultLessons(2),
  checkpoint: makeCheckpoint(2),
});

/* ------------------------------------------------------------------ */
/* SEMANA 03 — BRASIL, INFORMAÇÃO E ELEIÇÕES                           */
/* ------------------------------------------------------------------ */

const semana03: Week = makeWeek({
  number: 3,
  title: "BRASIL, INFORMAÇÃO E ELEIÇÕES",
  description: null,
  lessons: makeDefaultLessons(3),
  checkpoint: makeCheckpoint(3),
});

/* ------------------------------------------------------------------ */
/* SEMANAS 04 a 10 — estrutura editável                                */
/* ------------------------------------------------------------------ */
/**
 * Para cadastrar uma semana, basta preencher `title` e trocar `lessons: []`
 * por `lessons: makeDefaultLessons(N)` (e depois editar cada aula).
 */

const semanasFuturas: Week[] = [4, 5, 6, 7, 8, 9, 10].map((number) =>
  makeWeek({
    number,
    title: null,
    description: null,
    lessons: [],
    checkpoint: null,
  }),
);

/* ------------------------------------------------------------------ */
/* Curso completo                                                      */
/* ------------------------------------------------------------------ */

export const course: Week[] = [
  semana01,
  semana02,
  semana03,
  ...semanasFuturas,
];

export const TOTAL_WEEKS = course.length;

/** Aulas (3 pilares) + checkpoint, em cada semana do curso completo. */
export const ACTIVITIES_PER_WEEK = 4;

/**
 * Total de atividades do curso completo (10 semanas × 4 atividades),
 * independentemente de quantas já estão cadastradas com conteúdo. É o
 * denominador do progresso geral do aluno.
 */
export const TOTAL_ACTIVITIES = TOTAL_WEEKS * ACTIVITIES_PER_WEEK;

/* ------------------------------------------------------------------ */
/* Seletores auxiliares                                                */
/* ------------------------------------------------------------------ */

/** Todas as aulas cadastradas, em ordem de trilha. */
export const allLessons: Lesson[] = course.flatMap((week) => week.lessons);

/** Todos os checkpoints cadastrados. */
export const allCheckpoints: Checkpoint[] = course
  .map((week) => week.checkpoint)
  .filter((cp): cp is Checkpoint => cp !== null);

/** Ids de todas as atividades cadastradas (aulas + checkpoints). */
export const allActivityIds: string[] = [
  ...allLessons.map((l) => l.id),
  ...allCheckpoints.map((c) => c.id),
];

export function getWeek(slug: string): Week | undefined {
  return course.find((week) => week.slug === slug);
}

export function getWeekByNumber(number: number): Week | undefined {
  return course.find((week) => week.number === number);
}

export function getLesson(
  weekSlug: string,
  lessonSlug: string,
): Lesson | undefined {
  return getWeek(weekSlug)?.lessons.find((l) => l.slug === lessonSlug);
}

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}

export function lessonHref(lesson: Lesson): string {
  return `/aulas/${lesson.weekSlug}/${lesson.slug}`;
}

/** Aula anterior e próxima considerando a trilha inteira. */
export function getAdjacentLessons(lessonId: string): {
  previous: Lesson | null;
  next: Lesson | null;
} {
  const index = allLessons.findIndex((l) => l.id === lessonId);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? allLessons[index - 1] : null,
    next: index < allLessons.length - 1 ? allLessons[index + 1] : null,
  };
}

/** Todas as aulas publicadas, na ordem em que devem ser estudadas. */
export const publishedLessons: Lesson[] = allLessons.filter(
  (l) => l.status === "publicada",
);

/**
 * Todas as atividades da trilha (aulas + checkpoint de cada semana), na
 * ordem pedagógica em que devem ser estudadas: as aulas de uma semana
 * seguidas do seu checkpoint, semana após semana. É a fonte de verdade
 * usada para determinar a "próxima atividade" do aluno.
 */
export const activitiesInOrder: Activity[] = course.flatMap((week) => [
  ...week.lessons.map((lesson): Activity => ({ type: "lesson", lesson })),
  ...(week.checkpoint
    ? [{ type: "checkpoint", checkpoint: week.checkpoint } as Activity]
    : []),
]);
