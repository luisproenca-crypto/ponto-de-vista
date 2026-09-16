"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { getContinueHref, getNextActivity } from "@/lib/progress";

/**
 * Botão "CONTINUAR ESTUDANDO".
 * Leva automaticamente à próxima aula ainda não concluída, segundo o
 * progresso guardado no localStorage deste dispositivo.
 */
export function ContinuarEstudando({
  className = "",
  label = "Continuar estudando",
  variant = "primario",
}: {
  className?: string;
  label?: string;
  variant?: "primario" | "claro";
}) {
  const { progress, hydrated } = useProgress();
  const href = getContinueHref(progress);
  const proximaAtividade = getNextActivity(progress);

  const estilo =
    variant === "claro"
      ? "bg-white text-roxo-escuro hover:bg-verde-suave border-transparent"
      : "bg-roxo text-white hover:bg-roxo-escuro border-transparent";

  const descricao = !hydrated
    ? "Continuar estudando"
    : proximaAtividade?.type === "lesson" && proximaAtividade.lesson.title
      ? `Continuar estudando: Semana ${String(proximaAtividade.lesson.weekNumber).padStart(2, "0")}, Aula ${String(proximaAtividade.lesson.number).padStart(2, "0")} — ${proximaAtividade.lesson.title}`
      : proximaAtividade?.type === "checkpoint"
        ? `Continuar estudando: Semana ${String(proximaAtividade.checkpoint.weekNumber).padStart(2, "0")}, ${proximaAtividade.checkpoint.title}`
        : proximaAtividade
          ? "Continuar estudando"
          : "Trilha concluída";

  return (
    <Link
      href={href}
      aria-label={descricao}
      className={`inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-full border px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] shadow-suave transition-colors duration-200 motion-reduce:transition-none ${estilo} ${className}`}
    >
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
