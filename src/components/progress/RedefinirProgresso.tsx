"use client";

import { useState } from "react";
import { RotateCcw, TriangleAlert } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { getOverallProgress } from "@/lib/progress";

/**
 * "Redefinir meu progresso neste dispositivo".
 *
 * Usa confirmação em dois passos dentro da própria página — sem window.confirm,
 * que é bloqueado em alguns navegadores e não é acessível por leitores de tela.
 */
export function RedefinirProgresso() {
  const { progress, hydrated, reset } = useProgress();
  const geral = getOverallProgress(progress);
  const [confirmando, setConfirmando] = useState(false);
  const [feito, setFeito] = useState(false);

  function apagar() {
    reset();
    setConfirmando(false);
    setFeito(true);
    window.setTimeout(() => setFeito(false), 5000);
  }

  return (
    <section
      aria-labelledby="redefinir-progresso"
      className="rounded-card border border-laranja/30 bg-laranja-suave/50 p-6 sm:p-8"
    >
      <h2
        id="redefinir-progresso"
        className="pdv-eyebrow flex items-center gap-2 text-laranja-escuro"
      >
        <RotateCcw className="h-4 w-4" aria-hidden="true" />
        Redefinir progresso
      </h2>

      <p className="mt-4 max-w-leitura text-[15px] leading-relaxed text-grafite">
        Isto apaga as marcações de aulas e checkpoints concluídos guardadas
        <strong className="font-semibold"> neste navegador</strong>. O conteúdo
        do curso continua disponível — apenas o seu histórico de progresso é
        zerado. A ação não pode ser desfeita.
      </p>

      {hydrated ? (
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-cinza-texto">
          Hoje você tem {geral.done} de {geral.total} atividades concluídas.
        </p>
      ) : null}

      {!confirmando ? (
        <button
          type="button"
          onClick={() => setConfirmando(true)}
          className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-laranja bg-white px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-laranja-escuro transition-colors hover:bg-laranja hover:text-white motion-reduce:transition-none"
        >
          Redefinir meu progresso neste dispositivo
        </button>
      ) : (
        <div className="mt-6 rounded-card border border-laranja bg-white p-5">
          <p className="flex items-start gap-2 font-display text-lg leading-snug text-grafite">
            <TriangleAlert
              className="mt-1 h-5 w-5 shrink-0 text-laranja-escuro"
              aria-hidden="true"
            />
            Tem certeza? Todo o seu progresso salvo neste navegador será apagado.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={apagar}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-laranja px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-laranja-escuro motion-reduce:transition-none"
            >
              Sim, apagar meu progresso
            </button>
            <button
              type="button"
              onClick={() => setConfirmando(false)}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-cinza px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-cinza-texto transition-colors hover:border-grafite/40 hover:text-grafite motion-reduce:transition-none"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div aria-live="polite">
        {feito ? (
          <p className="mt-5 rounded-card border border-verde/40 bg-verde-suave px-4 py-3 text-sm font-medium text-verde-escuro">
            Progresso redefinido. Você pode recomeçar a trilha quando quiser.
          </p>
        ) : null}
      </div>
    </section>
  );
}
