import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primario" | "secundario" | "claro" | "discreto";

const variants: Record<Variant, string> = {
  primario:
    "bg-roxo text-white hover:bg-roxo-escuro border-transparent shadow-suave",
  secundario:
    "bg-white text-roxo-escuro border-roxo/30 hover:border-roxo hover:bg-roxo-suave",
  claro:
    "bg-white/10 text-white border-white/35 hover:bg-white/20 backdrop-blur-[1px]",
  discreto:
    "bg-transparent text-grafite border-cinza hover:border-grafite/40 hover:bg-cinza/40",
};

const base =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border px-6 py-3 text-center font-mono text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 motion-reduce:transition-none";

/** Botão em forma de link interno (next/link). */
export function ActionLink({
  href,
  children,
  variant = "primario",
  className = "",
  icon,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {icon}
    </Link>
  );
}

/** Mesmo visual, para links externos. */
export function ExternalActionLink({
  href,
  children,
  variant = "primario",
  className = "",
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {icon}
    </a>
  );
}

export const actionClasses = { base, variants };
