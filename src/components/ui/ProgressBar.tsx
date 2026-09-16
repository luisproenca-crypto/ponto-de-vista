/**
 * Barra de progresso acessível.
 * O status nunca é comunicado apenas pela cor: o valor em % aparece em texto
 * e o elemento expõe role="progressbar" com aria-valuenow.
 */
export function ProgressBar({
  percent,
  label,
  tone = "verde",
  size = "md",
  showValue = true,
}: {
  percent: number;
  label: string;
  tone?: "verde" | "roxo" | "laranja";
  size?: "sm" | "md";
  showValue?: boolean;
}) {
  const safe = Math.max(0, Math.min(100, Math.round(percent)));
  const fill =
    tone === "roxo" ? "bg-roxo" : tone === "laranja" ? "bg-laranja" : "bg-verde";
  const height = size === "sm" ? "h-1.5" : "h-2.5";

  return (
    <div>
      <div
        role="progressbar"
        aria-valuenow={safe}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className={`w-full overflow-hidden rounded-full bg-cinza ${height}`}
      >
        <div
          className={`${fill} ${height} rounded-full transition-[width] duration-700 ease-out motion-reduce:transition-none`}
          style={{ width: `${safe}%` }}
        />
      </div>
      {showValue ? (
        <p className="mt-2 font-mono text-xs font-semibold tracking-wider text-cinza-texto">
          {safe}% concluído
        </p>
      ) : null}
    </div>
  );
}
