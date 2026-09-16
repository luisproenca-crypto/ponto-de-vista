import type { ReactNode } from "react";

/**
 * Título de seção no padrão editorial do curso:
 * etiqueta (eyebrow) + título display + subtítulo opcional.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "escuro",
  as = "h2",
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string | null;
  align?: "left" | "center";
  tone?: "escuro" | "claro";
  as?: "h1" | "h2" | "h3";
  children?: ReactNode;
}) {
  const Tag = as;
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "claro" ? "text-white" : "text-grafite";
  const subColor = tone === "claro" ? "text-white/75" : "text-cinza-texto";
  const eyebrowColor = tone === "claro" ? "text-verde" : "text-roxo";

  return (
    <div className={`${alignment} ${align === "center" ? "max-w-2xl" : ""}`}>
      {eyebrow ? (
        <p className={`pdv-eyebrow mb-3 ${eyebrowColor}`}>{eyebrow}</p>
      ) : null}
      <Tag
        className={`font-display text-[1.75rem] leading-[1.15] tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </Tag>
      {subtitle ? (
        <p className={`mt-4 max-w-leitura text-base sm:text-lg ${subColor} ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      ) : null}
      {children}
    </div>
  );
}
