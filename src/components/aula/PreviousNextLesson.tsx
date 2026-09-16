import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Lesson } from "@/lib/types";
import { lessonHref } from "@/data/course";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function rotulo(lesson: Lesson) {
  return `Semana ${pad(lesson.weekNumber)} · Aula ${pad(lesson.number)}`;
}

/** Navegação entre aulas, no fim da página. */
export function PreviousNextLesson({
  previous,
  next,
}: {
  previous: Lesson | null;
  next: Lesson | null;
}) {
  return (
    <nav
      aria-label="Navegação entre aulas"
      className="grid gap-3 border-t border-cinza pt-8 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={lessonHref(previous)}
          className="group flex items-start gap-3 rounded-card border border-cinza bg-white p-5 transition-colors hover:border-roxo/40 motion-reduce:transition-none"
        >
          <ArrowLeft
            className="mt-1 h-4 w-4 shrink-0 text-roxo"
            aria-hidden="true"
          />
          <span>
            <span className="pdv-eyebrow block text-cinza-texto">
              Aula anterior
            </span>
            <span className="mt-1 block font-display text-[17px] leading-snug text-grafite">
              {previous.title ?? "Conteúdo em preparação"}
            </span>
            <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.12em] text-cinza-medio">
              {rotulo(previous)}
            </span>
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" className="hidden sm:block" />
      )}

      {next ? (
        <Link
          href={lessonHref(next)}
          className="group flex items-start justify-end gap-3 rounded-card border border-cinza bg-white p-5 text-right transition-colors hover:border-roxo/40 motion-reduce:transition-none"
        >
          <span>
            <span className="pdv-eyebrow block text-cinza-texto">
              Próxima aula
            </span>
            <span className="mt-1 block font-display text-[17px] leading-snug text-grafite">
              {next.title ?? "Conteúdo em preparação"}
            </span>
            <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.12em] text-cinza-medio">
              {rotulo(next)}
            </span>
          </span>
          <ArrowRight
            className="mt-1 h-4 w-4 shrink-0 text-roxo"
            aria-hidden="true"
          />
        </Link>
      ) : null}
    </nav>
  );
}
