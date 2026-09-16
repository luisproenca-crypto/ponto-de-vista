import { metodoPonto } from "@/data/metodo";

/**
 * MÉTODO P.O.N.T.O. apresentado como uma rota:
 * horizontal no desktop, vertical no celular.
 */
export function MetodoPonto() {
  return (
    <ol className="relative grid gap-6 lg:grid-cols-5 lg:gap-4">
      {/* Rota pontilhada — vertical no celular */}
      <span
        aria-hidden="true"
        className="rota-vertical absolute left-[19px] top-4 h-[calc(100%-2rem)] w-0.5 lg:hidden"
      />
      {/* Rota pontilhada — horizontal no desktop */}
      <span
        aria-hidden="true"
        className="rota-horizontal absolute left-[10%] top-[19px] hidden h-0.5 w-[80%] lg:block"
      />

      {metodoPonto.map((etapa, index) => (
        <li key={`${etapa.letter}-${index}`} className="relative flex gap-4 lg:block">
          <span
            aria-hidden="true"
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-roxo bg-white font-display text-lg font-semibold text-roxo lg:mx-auto"
          >
            {etapa.letter}
          </span>
          <div className="pb-2 lg:mt-5 lg:text-center">
            <h3 className="font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-grafite">
              {etapa.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cinza-texto">
              {etapa.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
