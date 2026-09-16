"use client";

import Link from "next/link";
import { Check, Flag } from "lucide-react";
import type { Checkpoint } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export type CheckpointStatus = "nao-iniciado" | "em-andamento" | "concluido";

const rotulos: Record<CheckpointStatus, string> = {
  "nao-iniciado": "Não iniciado",
  "em-andamento": "Em andamento",
  concluido: "Concluído",
};

/**
 * Cartão de checkpoint (fim de semana de estudos).
 * Já preparado para receber a rota do questionário em `checkpoint.href`.
 */
export function CheckpointCard({
  checkpoint,
  status,
  weekTitle,
  compacto = false,
}: {
  checkpoint: Checkpoint;
  status: CheckpointStatus;
  weekTitle?: string | null;
  compacto?: boolean;
}) {
  const disponivel = checkpoint.status === "publicada" && checkpoint.href;

  return (
    <article
      className={`rounded-card border p-4 sm:p-5 ${
        status === "concluido"
          ? "border-verde/40 bg-verde-suave/50"
          : "border-cinza bg-white"
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
            status === "concluido"
              ? "border-verde bg-verde text-white"
              : "border-laranja/50 bg-laranja-suave text-laranja-escuro"
          }`}
        >
          {status === "concluido" ? (
            <Check className="h-4 w-4" strokeWidth={3} />
          ) : (
            <Flag className="h-3.5 w-3.5" />
          )}
        </span>

        <div className="min-w-0 flex-1">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-cinza-texto">
            {checkpoint.weekday} · Semana {pad(checkpoint.weekNumber)}
          </p>
          <h3 className="mt-1 font-display text-[17px] leading-snug text-grafite">
            {checkpoint.title}
          </h3>
          {weekTitle && !compacto ? (
            <p className="mt-1 text-sm text-cinza-texto">{weekTitle}</p>
          ) : null}

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Badge tone={status === "concluido" ? "verde" : "contorno"}>
              {rotulos[status]}
            </Badge>
            {checkpoint.status === "em-preparacao" ? (
              <Badge tone="neutro">Conteúdo em preparação</Badge>
            ) : null}
          </div>

          {disponivel ? (
            <Link
              href={checkpoint.href as string}
              className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-full bg-roxo px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-roxo-escuro motion-reduce:transition-none"
            >
              Iniciar checkpoint
            </Link>
          ) : (
            <p className="mt-4 inline-flex min-h-[44px] cursor-not-allowed items-center justify-center rounded-full border border-cinza px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cinza-medio">
              Iniciar checkpoint
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
