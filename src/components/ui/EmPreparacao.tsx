import { Hourglass } from "lucide-react";

/**
 * Estado padrão para tudo que ainda não foi cadastrado pelo professor.
 * Aparece sempre com texto explícito — nunca apenas com uma cor.
 */
export function EmPreparacao({
  titulo = "Conteúdo em preparação",
  descricao,
  compacto = false,
}: {
  titulo?: string;
  descricao?: string;
  compacto?: boolean;
}) {
  if (compacto) {
    return (
      <p className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-cinza-texto">
        <Hourglass className="h-3.5 w-3.5" aria-hidden="true" />
        {titulo}
      </p>
    );
  }

  return (
    <div className="flex flex-col items-start gap-2 rounded-card border border-dashed border-cinza-medio/60 bg-creme px-5 py-6">
      <p className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cinza-texto">
        <Hourglass className="h-3.5 w-3.5" aria-hidden="true" />
        {titulo}
      </p>
      {descricao ? (
        <p className="max-w-leitura text-sm text-cinza-texto">{descricao}</p>
      ) : null}
    </div>
  );
}
