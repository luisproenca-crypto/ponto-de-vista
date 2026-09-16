import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Accordion construído com <details>/<summary>.
 * Vantagens: funciona sem JavaScript, é navegável por teclado por padrão e
 * o estado aberto/fechado é anunciado por leitores de tela nativamente.
 */
export function Accordion({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`space-y-3 ${className}`}>{children}</div>;
}

export function AccordionItem({
  title,
  subtitle,
  badge,
  defaultOpen = false,
  children,
}: {
  title: string;
  subtitle?: string | null;
  badge?: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  return (
    <details
      open={defaultOpen}
      className="group pdv-card overflow-hidden transition-colors duration-200 open:border-roxo/30 hover:border-roxo/30"
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
        <span className="flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-display text-base font-medium text-grafite sm:text-lg">
              {title}
            </span>
            {badge}
          </span>
          {subtitle ? (
            <span className="mt-1 block text-sm text-cinza-texto">
              {subtitle}
            </span>
          ) : null}
        </span>
        <ChevronDown
          className="mt-1 h-5 w-5 shrink-0 text-roxo transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
          aria-hidden="true"
        />
      </summary>
      <div className="border-t border-cinza px-5 py-5 text-[15px] leading-relaxed text-cinza-texto">
        {children}
      </div>
    </details>
  );
}
