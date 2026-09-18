"use client";

import { useEffect, useState } from "react";
import { Check, Target } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { getOverallProgress, isCheckpointCompleted } from "@/lib/progress";
import { PacoImage } from "@/components/ui/PacoImage";
import { ProgressBar } from "@/components/ui/ProgressBar";

/**
 * Conclusão do checkpoint — componente irmão de `LessonCompletion` (que
 * não é alterado). Usa exclusivamente a infraestrutura de progresso já
 * existente para checkpoints (`isCheckpointCompleted`/`completeCheckpoint`,
 * ambos já expostos por `useProgress`/`progress.ts` sem modificação) —
 * nenhuma fonte de verdade nova.
 *
 * Ao marcar:
 *   • grava no localStorage (via `completeCheckpoint`, já existente);
 *   • atualiza o progresso da semana e o progresso geral (reativo);
 *   • mostra uma celebração discreta, com o Paco.
 */
export function CheckpointCompletion({
  checkpointId,
  question,
  celebrationMessage = "Mais um trecho da trilha percorrido.",
}: {
  checkpointId: string;
  question: string;
  /** Texto da celebração ao concluir. Mantém o texto padrão se omitido. */
  celebrationMessage?: string;
}) {
  const { progress, hydrated, completeCheckpoint } = useProgress();
  const concluido = hydrated && isCheckpointCompleted(progress, checkpointId);
  const geral = getOverallProgress(progress);
  const [celebrar, setCelebrar] = useState(false);

  // A celebração aparece por alguns segundos e some.
  useEffect(() => {
    if (!celebrar) return;
    const t = window.setTimeout(() => setCelebrar(false), 4200);
    return () => window.clearTimeout(t);
  }, [celebrar]);

  function alternar() {
    const novo = !concluido;
    completeCheckpoint(checkpointId, novo);
    if (novo) setCelebrar(true);
  }

  return (
    <section
      aria-labelledby="checkpoint-concluido"
      className="rounded-card border border-roxo/20 bg-roxo-suave/50 p-6 sm:p-8"
    >
      <h2
        id="checkpoint-concluido"
        className="pdv-eyebrow flex items-center gap-2 text-roxo"
      >
        <Target className="h-4 w-4" aria-hidden="true" />
        Checkpoint concluído?
      </h2>

      <p className="mt-4 max-w-leitura font-display text-lg leading-snug text-grafite sm:text-xl">
        {question}
      </p>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={alternar}
          aria-pressed={concluido}
          className={`inline-flex min-h-[52px] flex-1 items-center justify-center gap-2.5 rounded-full border px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 motion-reduce:transition-none sm:flex-none ${
            concluido
              ? "border-verde bg-verde text-white hover:bg-verde-escuro"
              : "border-transparent bg-roxo text-white hover:bg-roxo-escuro"
          }`}
        >
          <span
            aria-hidden="true"
            className={`flex h-5 w-5 items-center justify-center rounded border-2 ${
              concluido ? "border-white bg-white/20" : "border-white/60"
            }`}
          >
            {concluido ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : null}
          </span>
          {concluido ? "Checkpoint concluído" : "Marcar checkpoint como concluído"}
        </button>

        {concluido ? (
          <p className="text-sm text-cinza-texto">
            Clique novamente para desmarcar.
          </p>
        ) : null}
      </div>

      {/* Progresso geral atualizado na hora */}
      {hydrated ? (
        <div className="mt-7 max-w-sm">
          <p className="pdv-eyebrow mb-2 text-cinza-texto">Progresso geral</p>
          <ProgressBar percent={geral.percent} label="Progresso geral do curso" />
        </div>
      ) : null}

      {/* Celebração discreta */}
      <div aria-live="polite">
        {celebrar ? (
          <div className="mt-7 flex animate-pop-suave items-center gap-4 rounded-card border border-verde/40 bg-white p-4">
            <div className="w-16 shrink-0 sm:w-20">
              <PacoImage
                variant="checkpoint"
                ratio="1 / 1"
                alt="Professor Paco comemorando de forma discreta"
              />
            </div>
            <div>
              <p className="font-display text-lg leading-snug text-grafite">
                {celebrationMessage}
              </p>
              <p className="mt-1 text-sm text-cinza-texto">
                Seu progresso foi salvo neste dispositivo.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
