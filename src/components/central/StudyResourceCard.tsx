import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

/** Cartão grande da Central de Estudos. */
export function StudyResourceCard({
  href,
  title,
  description,
  icon,
  meta,
}: {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="group pdv-card flex h-full flex-col p-6 transition-colors duration-200 hover:border-roxo/40 hover:bg-roxo-suave/30 motion-reduce:transition-none sm:p-8"
    >
      <span className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-roxo-suave text-roxo">
          {icon}
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-cinza-medio transition-colors group-hover:text-roxo motion-reduce:transition-none"
          aria-hidden="true"
        />
      </span>

      <h2 className="mt-6 font-display text-xl leading-tight text-grafite sm:text-2xl">
        {title}
      </h2>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-cinza-texto">
        {description}
      </p>
      {meta ? (
        <p className="pdv-coord mt-6 border-t border-cinza pt-4">{meta}</p>
      ) : null}
    </Link>
  );
}
