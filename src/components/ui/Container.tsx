import type { ReactNode } from "react";

type Width = "normal" | "estreito" | "largo";

const widths: Record<Width, string> = {
  estreito: "max-w-3xl",
  normal: "max-w-5xl",
  largo: "max-w-6xl",
};

/** Contêiner com margens laterais confortáveis em qualquer tela. */
export function Container({
  children,
  width = "normal",
  className = "",
}: {
  children: ReactNode;
  width?: Width;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full px-5 sm:px-6 lg:px-8 ${widths[width]} ${className}`}>
      {children}
    </div>
  );
}
