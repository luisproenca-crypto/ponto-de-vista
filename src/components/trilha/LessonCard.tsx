"use client";

import Link from "next/link";
import { ArrowUpRight, Check, Circle, Hourglass } from "lucide-react";
import type { Lesson } from "@/lib/types";
import { getPillar } from "@/data/pillars";
import { lessonHref } from "@/data/course";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/**
 * Cartão de uma aula dentro da trilha.
 * O estado é comunicado por ícone + texto (nunca apenas por cor).
 */
export function LessonCard({
  lesson,
  completed,
  hydrated,
}: {
  lesson: Lesson;
  completed: boolean;
  hydrated: boolean;
}) {
  const pilar = getPillar(lesson.pillar);
  const disponivel = lesson.status === "publicada";
  const concluida = hydrated && completed;

  const conteudo = (
    <>
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
            concluida
              ? "border-verde bg-verde text-white"
              : disponivel
                ? "border-roxo/40 bg-white text-roxo"
                : "border-cinza bg-cinza/40 text-cinza-medio"
          }`}
        >
          {concluida ? (
            <Check className="h-4 w-4" strokeWidth={3} />
          ) : disponivel ? (
            <Circle className="h-2.5 w-2.5 fill-current" />
          ) : (
            <Hourglass className="h-3.5 w-3.5" />
          )}
        </span>

        <div className="min-w-0 flex-1">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-cinza-texto">
            {lesson.weekday} · Aula {pad(lesson.number)} · {pilar.name}
          </p>
          <p
            className={`mt-1 font-display text-[17px] leading-snug ${
              disponivel ? "text-grafite" : "text-cinza-texto"
            }`}
          >
            {lesson.title ?? "Conteúdo em preparação"}
          </p>
          {lesson.subtitle ? (
            <p className="mt-1 text-sm text-cinza-texto">{lesson.subtitle}</p>
          ) : null}

          <p className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em]">
            {concluida ? (
              <span className="text-verde-escuro">Concluída</span>
            ) : disponivel ? (
              <span className="text-roxo">Disponível</span>
            ) : (
              <span className="text-cinza-texto">Conteúdo em preparação</span>
            )}
          </p>
        </div>

        {disponivel ? (
          <ArrowUpRight
            className="mt-1 h-4 w-4 shrink-0 text-roxo"
            aria-hidden="true"
          />
        ) : null}
      </div>
    </>
  );

  if (!disponivel) {
    return (
      <div className="rounded-card border border-dashed border-cinza bg-creme/60 p-4">
        {conteudo}
      </div>
    );
  }

  return (
    <Link
      href={lessonHref(lesson)}
      className="block rounded-card border border-cinza bg-white p-4 transition-colors duration-200 hover:border-roxo/40 hover:bg-roxo-suave/40 motion-reduce:transition-none"
    >
      {conteudo}
    </Link>
  );
}
