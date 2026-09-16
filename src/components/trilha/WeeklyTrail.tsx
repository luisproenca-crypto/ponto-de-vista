"use client";

import { course } from "@/data/course";
import { useProgress } from "@/hooks/useProgress";
import { getCurrentWeek } from "@/lib/progress";
import { WeekCard } from "@/components/trilha/WeekCard";

/**
 * Rota visual de 10 semanas.
 * No desktop a rota pontilhada aparece à esquerda dos cartões;
 * no celular ela some e os cartões ocupam a largura toda.
 */
export function WeeklyTrail() {
  const { progress, hydrated } = useProgress();
  const semanaAtual = getCurrentWeek(progress);

  return (
    <div className="relative">
      {/* Rota pontilhada vertical (decorativa) */}
      <span
        aria-hidden="true"
        className="rota-vertical absolute left-[38px] top-8 hidden h-[calc(100%-4rem)] w-0.5 sm:block"
      />

      <ol className="relative space-y-4">
        {course.map((week) => (
          <li key={week.id}>
            <WeekCard
              week={week}
              progress={progress}
              hydrated={hydrated}
              defaultOpen={hydrated && week.number === semanaAtual.number}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
