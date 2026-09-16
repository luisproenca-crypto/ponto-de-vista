"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import type { ProgressState, Week } from "@/lib/types";
import {
  getWeekProgress,
  isCheckpointCompleted,
  isLessonCompleted,
} from "@/lib/progress";
import { LessonCard } from "@/components/trilha/LessonCard";
import {
  CheckpointCard,
  type CheckpointStatus,
} from "@/components/trilha/CheckpointCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { EmPreparacao } from "@/components/ui/EmPreparacao";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const rotuloStatus = {
  concluida: "Concluída",
  "em-andamento": "Em andamento",
  "nao-iniciada": "Ainda não iniciada",
} as const;

/** Cartão expansível de uma semana da trilha. */
export function WeekCard({
  week,
  progress,
  hydrated,
  defaultOpen = false,
}: {
  week: Week;
  progress: ProgressState;
  hydrated: boolean;
  defaultOpen?: boolean;
}) {
  const wp = getWeekProgress(week, progress);
  const temConteudo = week.lessons.length > 0 || week.checkpoint !== null;
  const status = hydrated ? wp.status : "nao-iniciada";

  /**
   * Abrimos a semana atual UMA única vez, após a leitura do progresso.
   * Depois disso o <details> volta a ser controlado apenas pelo aluno.
   */
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const jaAbriu = useRef(false);

  useEffect(() => {
    if (!defaultOpen || jaAbriu.current) return;
    jaAbriu.current = true;
    if (detailsRef.current) detailsRef.current.open = true;
  }, [defaultOpen]);

  const checkpointStatus: CheckpointStatus =
    week.checkpoint && hydrated && isCheckpointCompleted(progress, week.checkpoint.id)
      ? "concluido"
      : hydrated && wp.done > 0
        ? "em-andamento"
        : "nao-iniciado";

  return (
    <details
      ref={detailsRef}
      className="group pdv-card overflow-hidden transition-colors duration-200 open:border-roxo/30 motion-reduce:transition-none"
    >
      <summary className="flex cursor-pointer list-none items-start gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
        {/* Marcador da rota */}
        <span
          aria-hidden="true"
          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 font-mono text-[12px] font-bold ${
            status === "concluida"
              ? "border-verde bg-verde text-white"
              : status === "em-andamento"
                ? "border-roxo bg-roxo text-white"
                : "border-cinza bg-white text-cinza-medio"
          }`}
        >
          {pad(week.number)}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="pdv-eyebrow text-roxo">Semana {pad(week.number)}</p>
            <Badge
              tone={
                status === "concluida"
                  ? "verde"
                  : status === "em-andamento"
                    ? "roxo"
                    : "contorno"
              }
            >
              {rotuloStatus[status]}
            </Badge>
          </div>

          <h3 className="mt-2 font-display text-xl leading-tight text-grafite sm:text-2xl">
            {week.title ?? "Conteúdo em preparação"}
          </h3>

          {week.description ? (
            <p className="mt-2 max-w-leitura text-sm text-cinza-texto">
              {week.description}
            </p>
          ) : null}

          {temConteudo ? (
            <div className="mt-4 max-w-sm">
              <ProgressBar
                percent={hydrated ? wp.percent : 0}
                label={`Progresso da semana ${pad(week.number)}`}
                showValue={false}
                size="sm"
              />
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-cinza-medio">
                {hydrated ? wp.done : 0} de {wp.total} atividades
              </p>
            </div>
          ) : null}
        </div>

        <ChevronDown
          className="mt-2 h-5 w-5 shrink-0 text-roxo transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
          aria-hidden="true"
        />
      </summary>

      <div className="border-t border-cinza bg-creme/50 p-5 sm:p-6">
        {temConteudo ? (
          <div className="space-y-3">
            {week.lessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                completed={isLessonCompleted(progress, lesson.id)}
                hydrated={hydrated}
              />
            ))}

            {week.checkpoint ? (
              <CheckpointCard
                checkpoint={week.checkpoint}
                status={checkpointStatus}
                compacto
              />
            ) : null}
          </div>
        ) : (
          <EmPreparacao descricao="As aulas desta semana ainda serão cadastradas. A estrutura já está pronta e aparecerá aqui assim que o conteúdo for publicado." />
        )}
      </div>
    </details>
  );
}
