import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Lesson } from "@/lib/types";
import { getPillar } from "@/data/pillars";
import { Container } from "@/components/ui/Container";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Cabeçalho editorial da página de aula. */
export function LessonHeader({ lesson }: { lesson: Lesson }) {
  const pilar = getPillar(lesson.pillar);

  return (
    <header className="border-b border-cinza bg-creme bg-topografia">
      <Container width="normal" className="py-10 sm:py-14">
        <Link
          href="/trilha"
          className="pdv-eyebrow inline-flex items-center gap-1.5 text-roxo transition-colors hover:text-roxo-escuro"
        >
          <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Trilha de estudos
        </Link>

        <p className="pdv-eyebrow mt-6 text-cinza-texto">
          {pilar.name} • Semana {pad(lesson.weekNumber)}
        </p>

        <h1 className="mt-3 font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-grafite sm:text-5xl">
          Aula {pad(lesson.number)} — {lesson.title ?? "Conteúdo em preparação"}
        </h1>

        {lesson.subtitle ? (
          <p className="mt-5 max-w-leitura font-display text-lg italic leading-snug text-roxo-escuro sm:text-xl">
            “{lesson.subtitle}”
          </p>
        ) : null}

        {lesson.description ? (
          <p className="mt-4 max-w-leitura text-base text-cinza-texto sm:text-lg">
            “{lesson.description}”
          </p>
        ) : null}
      </Container>
    </header>
  );
}
