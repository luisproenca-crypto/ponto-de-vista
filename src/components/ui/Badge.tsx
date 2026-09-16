import type { ReactNode } from "react";

type Tone = "roxo" | "verde" | "laranja" | "neutro" | "contorno";

const tones: Record<Tone, string> = {
  roxo: "bg-roxo-suave text-roxo-escuro border-roxo/20",
  verde: "bg-verde-suave text-verde-escuro border-verde/25",
  laranja: "bg-laranja-suave text-laranja-escuro border-laranja/25",
  neutro: "bg-cinza text-grafite border-transparent",
  contorno: "bg-white text-cinza-texto border-cinza",
};

/** Etiqueta curta. O texto sempre carrega o significado (nunca só a cor). */
export function Badge({
  children,
  tone = "neutro",
  icon,
}: {
  children: ReactNode;
  tone?: Tone;
  icon?: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] ${tones[tone]}`}
    >
      {icon}
      {children}
    </span>
  );
}
