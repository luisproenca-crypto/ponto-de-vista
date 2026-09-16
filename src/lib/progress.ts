import type {
  Activity,
  OverallProgress,
  ProgressState,
  Week,
  WeekProgress,
} from "@/lib/types";
import {
  activitiesInOrder,
  allActivityIds,
  allLessons,
  course,
  lessonHref,
  TOTAL_ACTIVITIES,
} from "@/data/course";

/**
 * ===================================================================
 * PROGRESSO DO ALUNO (localStorage)
 * ===================================================================
 *
 * Esta é a única camada que conversa com o armazenamento do navegador.
 * Quando houver Supabase/autenticação, basta trocar `readProgress` e
 * `writeProgress` por chamadas ao banco — o restante do site não muda.
 */

export const PROGRESS_STORAGE_KEY = "pdv:progresso:v1";
export const PROGRESS_EVENT = "pdv:progresso-alterado";
const PROGRESS_VERSION = 1;

export const emptyProgress: ProgressState = {
  version: PROGRESS_VERSION,
  completedLessons: [],
  completedCheckpoints: [],
  lastLessonId: null,
  updatedAt: null,
};

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

/** Mantém apenas ids que ainda existem na estrutura do curso. */
function sanitize(ids: unknown): string[] {
  if (!Array.isArray(ids)) return [];
  return ids.filter(
    (id): id is string => typeof id === "string" && allActivityIds.includes(id),
  );
}

/** Lê o progresso salvo. Nunca lança erro: em caso de falha devolve vazio. */
export function readProgress(): ProgressState {
  if (!isBrowser()) return emptyProgress;
  try {
    const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return emptyProgress;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    const lastLessonId =
      typeof parsed.lastLessonId === "string" &&
      allLessons.some((l) => l.id === parsed.lastLessonId)
        ? parsed.lastLessonId
        : null;
    return {
      version: PROGRESS_VERSION,
      completedLessons: sanitize(parsed.completedLessons),
      completedCheckpoints: sanitize(parsed.completedCheckpoints),
      lastLessonId,
      updatedAt:
        typeof parsed.updatedAt === "string" ? parsed.updatedAt : null,
    };
  } catch {
    // Navegador em modo privado, storage cheio ou dado corrompido.
    return emptyProgress;
  }
}

/** Grava o progresso e avisa todos os componentes montados na página. */
export function writeProgress(next: ProgressState): ProgressState {
  if (!isBrowser()) return next;
  const value: ProgressState = { ...next, updatedAt: new Date().toISOString() };
  try {
    window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Silencioso de propósito: o site continua funcionando sem persistência.
  }
  window.dispatchEvent(new CustomEvent(PROGRESS_EVENT, { detail: value }));
  return value;
}

function toggleId(list: string[], id: string, done: boolean): string[] {
  const set = new Set(list);
  if (done) set.add(id);
  else set.delete(id);
  return Array.from(set);
}

export function setLessonCompleted(id: string, done: boolean): ProgressState {
  const current = readProgress();
  return writeProgress({
    ...current,
    completedLessons: toggleId(current.completedLessons, id, done),
  });
}

export function setCheckpointCompleted(
  id: string,
  done: boolean,
): ProgressState {
  const current = readProgress();
  return writeProgress({
    ...current,
    completedCheckpoints: toggleId(current.completedCheckpoints, id, done),
  });
}

/** Registra a última aula acessada (usado pelo botão "Continuar estudando"). */
export function setLastLesson(id: string): ProgressState {
  const current = readProgress();
  if (current.lastLessonId === id) return current;
  return writeProgress({ ...current, lastLessonId: id });
}

/** Apaga o progresso deste dispositivo. */
export function resetProgress(): ProgressState {
  if (isBrowser()) {
    try {
      window.localStorage.removeItem(PROGRESS_STORAGE_KEY);
    } catch {
      /* ignora */
    }
  }
  return writeProgress({ ...emptyProgress });
}

/* ------------------------------------------------------------------ */
/* Cálculos                                                            */
/* ------------------------------------------------------------------ */

function percentOf(done: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((done / total) * 100);
}

export function isLessonCompleted(
  progress: ProgressState,
  id: string,
): boolean {
  return progress.completedLessons.includes(id);
}

export function isCheckpointCompleted(
  progress: ProgressState,
  id: string,
): boolean {
  return progress.completedCheckpoints.includes(id);
}

/** Progresso de uma semana (aulas + checkpoint cadastrados). */
export function getWeekProgress(
  week: Week,
  progress: ProgressState,
): WeekProgress {
  const total = week.lessons.length + (week.checkpoint ? 1 : 0);
  const done =
    week.lessons.filter((l) => isLessonCompleted(progress, l.id)).length +
    (week.checkpoint && isCheckpointCompleted(progress, week.checkpoint.id)
      ? 1
      : 0);
  const percent = percentOf(done, total);
  const status: WeekProgress["status"] =
    total > 0 && done === total
      ? "concluida"
      : done > 0
        ? "em-andamento"
        : "nao-iniciada";
  return { weekNumber: week.number, done, total, percent, status };
}

/**
 * Progresso geral do curso: sempre sobre as `TOTAL_ACTIVITIES` do curso
 * completo (10 semanas × 4 atividades), não apenas sobre o que já está
 * cadastrado com conteúdo — para que o aluno veja seu avanço real na
 * trilha inteira.
 */
export function getOverallProgress(progress: ProgressState): OverallProgress {
  const total = TOTAL_ACTIVITIES;
  const done =
    progress.completedLessons.length + progress.completedCheckpoints.length;
  return { done, total, percent: percentOf(done, total) };
}

function isActivityCompleted(activity: Activity, progress: ProgressState): boolean {
  return activity.type === "lesson"
    ? isLessonCompleted(progress, activity.lesson.id)
    : isCheckpointCompleted(progress, activity.checkpoint.id);
}

/**
 * Próxima atividade a estudar: a primeira, em `activitiesInOrder` (ordem
 * pedagógica da trilha — aulas da semana seguidas do checkpoint, semana
 * após semana), que ainda não foi concluída.
 *
 * Retorna `null` quando todas as atividades cadastradas já foram
 * concluídas — nesse caso a trilha está completa, e não se deve voltar à
 * primeira aula.
 */
export function getNextActivity(progress: ProgressState): Activity | null {
  return activitiesInOrder.find((a) => !isActivityCompleted(a, progress)) ?? null;
}

/** Link para onde o botão "Continuar estudando" deve levar. */
export function getContinueHref(progress: ProgressState): string {
  const activity = getNextActivity(progress);
  if (!activity) return "/trilha";
  return activity.type === "lesson"
    ? lessonHref(activity.lesson)
    : (activity.checkpoint.href ?? "/central/checkpoints");
}

/** Semana atual = primeira semana que ainda não foi concluída. */
export function getCurrentWeek(progress: ProgressState): Week {
  const cadastradas = course.filter(
    (w) => w.lessons.length > 0 || w.checkpoint !== null,
  );
  const emAberto = cadastradas.find(
    (w) => getWeekProgress(w, progress).status !== "concluida",
  );
  return emAberto ?? cadastradas[cadastradas.length - 1] ?? course[0];
}
