"use client";

import { course } from "@/data/course";
import { useProgress } from "@/hooks/useProgress";
import { getWeekProgress, isCheckpointCompleted } from "@/lib/progress";
import {
  CheckpointCard,
  type CheckpointStatus,
} from "@/components/trilha/CheckpointCard";
import { EmPreparacao } from "@/components/ui/EmPreparacao";

/** Lista de todos os checkpoints com o status atual do aluno. */
export function CheckpointsList() {
  const { progress, hydrated } = useProgress();
  const semanasComCheckpoint = course.filter((w) => w.checkpoint !== null);

  if (semanasComCheckpoint.length === 0) {
    return (
      <EmPreparacao descricao="Os checkpoints ainda serão cadastrados. Eles aparecerão aqui e na sua trilha." />
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {semanasComCheckpoint.map((week) => {
        const checkpoint = week.checkpoint!;
        const wp = getWeekProgress(week, progress);
        const status: CheckpointStatus =
          hydrated && isCheckpointCompleted(progress, checkpoint.id)
            ? "concluido"
            : hydrated && wp.done > 0
              ? "em-andamento"
              : "nao-iniciado";

        return (
          <li key={checkpoint.id}>
            <CheckpointCard
              checkpoint={checkpoint}
              status={status}
              weekTitle={week.title}
            />
          </li>
        );
      })}
    </ul>
  );
}
