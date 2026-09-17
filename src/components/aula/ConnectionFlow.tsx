import { ChevronRight } from "lucide-react";

/**
 * Sequência visual de etapas conectadas por setas (ex.: CONFLITO → ROTA →
 * ENERGIA). Não é texto corrido: cada etapa é um cartão curto, para leitura
 * rápida. Quebra em várias linhas em telas estreitas automaticamente.
 */
export function ConnectionFlow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((etapa, i) => (
        <li key={etapa} className="flex items-center gap-2">
          <span className="rounded-full border border-verde/30 bg-verde-suave/60 px-4 py-2 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-verde-escuro">
            {etapa}
          </span>
          {i < steps.length - 1 ? (
            <ChevronRight
              className="h-4 w-4 shrink-0 text-cinza-medio"
              aria-hidden="true"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
