"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import {
  getCurrentWeek,
  getNextActivity,
  getOverallProgress,
  getWeekProgress,
} from "@/lib/progress";
import { lessonHref } from "@/data/course";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { getPillar } from "@/data/pillars";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/**
 * Bloco "Continue sua jornada".
 * Mostra semana atual, progresso geral e a próxima atividade.
 * Enquanto o progresso não é lido do navegador (`hydrated === false`),
 * mostramos o estado inicial — evita diferença entre servidor e cliente.
 */
export function CourseProgress({ compacto = false }: { compacto?: boolean }) {
  const { progress, hydrated } = useProgress();

  const semana = getCurrentWeek(progress);
  const semanaProgresso = getWeekProgress(semana, progress);
  const geral = getOverallProgress(progress);
  const proximaAtividade = getNextActivity(progress);

  return (
    <div className="pdv-card overflow-hidden">
      <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
        {/* Semana atual */}
        <div className="border-b border-cinza p-6 sm:p-8 md:border-b-0 md:border-r">
          <p className="pdv-eyebrow text-roxo">
            Semana {pad(semana.number)}
          </p>
          <h3 className="mt-2 font-display text-2xl leading-tight text-grafite sm:text-[1.75rem]">
            {semana.title ?? "Conteúdo em preparação"}
          </h3>

          {semana.description ? (
            <p className="mt-3 max-w-leitura text-sm text-cinza-texto">
              {semana.description}
            </p>
          ) : null}

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="pdv-eyebrow text-cinza-texto">
                Progresso da semana
              </span>
              <span className="font-mono text-xs font-semibold text-grafite">
                {hydrated ? semanaProgresso.done : 0}/{semanaProgresso.total}
              </span>
            </div>
            <ProgressBar
              percent={hydrated ? semanaProgresso.percent : 0}
              label={`Progresso da semana ${pad(semana.number)}`}
              showValue={false}
            />
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="pdv-eyebrow text-cinza-texto">
                Progresso geral
              </span>
              <span className="font-mono text-xs font-semibold text-grafite">
                {hydrated ? geral.percent : 0}%
              </span>
            </div>
            <ProgressBar
              percent={hydrated ? geral.percent : 0}
              label="Progresso geral do curso"
              tone="roxo"
              size="sm"
              showValue={false}
            />
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-cinza-medio">
              {hydrated ? geral.done : 0} de {geral.total} atividades concluídas
            </p>
          </div>
        </div>

        {/* Próxima atividade */}
        <div className="bg-creme bg-topografia p-6 sm:p-8">
          <p className="pdv-eyebrow flex items-center gap-2 text-roxo">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Próxima atividade
          </p>

          {proximaAtividade?.type === "lesson" ? (
            <>
              <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-cinza-texto">
                Aula {pad(proximaAtividade.lesson.number)} —{" "}
                {getPillar(proximaAtividade.lesson.pillar).name}
              </p>
              <h4 className="mt-2 font-display text-xl leading-snug text-grafite sm:text-2xl">
                {proximaAtividade.lesson.title ?? "Conteúdo em preparação"}
              </h4>
              {proximaAtividade.lesson.subtitle ? (
                <p className="mt-2 text-sm text-cinza-texto">
                  {proximaAtividade.lesson.subtitle}
                </p>
              ) : null}

              <div className="mt-4">
                <Badge tone="roxo">
                  Semana {pad(proximaAtividade.lesson.weekNumber)}
                </Badge>
              </div>

              <Link
                href={lessonHref(proximaAtividade.lesson)}
                className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-roxo px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-suave transition-colors hover:bg-roxo-escuro motion-reduce:transition-none"
              >
                Continuar
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </>
          ) : proximaAtividade?.type === "checkpoint" ? (
            <>
              <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-cinza-texto">
                Checkpoint {pad(proximaAtividade.checkpoint.weekNumber)}
              </p>
              <h4 className="mt-2 font-display text-xl leading-snug text-grafite sm:text-2xl">
                {proximaAtividade.checkpoint.title}
              </h4>

              <div className="mt-4">
                <Badge tone="roxo">
                  Semana {pad(proximaAtividade.checkpoint.weekNumber)}
                </Badge>
              </div>

              <Link
                href={proximaAtividade.checkpoint.href ?? "/central/checkpoints"}
                className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-roxo px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-suave transition-colors hover:bg-roxo-escuro motion-reduce:transition-none"
              >
                Continuar
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </>
          ) : (
            <p className="mt-4 text-sm text-cinza-texto">
              Você concluiu todas as atividades disponíveis da trilha. Novo
              conteúdo aparecerá aqui assim que for publicado.
            </p>
          )}

          {!compacto ? (
            <p className="mt-6 border-t border-cinza pt-4 text-xs text-cinza-texto">
              Seu progresso fica guardado neste navegador.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
