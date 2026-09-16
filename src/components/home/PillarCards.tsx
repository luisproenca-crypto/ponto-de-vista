import { Globe2, Landmark, Network } from "lucide-react";
import type { Pillar } from "@/lib/types";
import { pillars } from "@/data/pillars";

const icons = { Globe2, Network, Landmark };

const accentStyles: Record<
  Pillar["accent"],
  { border: string; chip: string; rule: string; icon: string }
> = {
  roxo: {
    border: "hover:border-roxo/40",
    chip: "bg-roxo-suave text-roxo-escuro",
    rule: "bg-roxo",
    icon: "text-roxo",
  },
  verde: {
    border: "hover:border-verde/50",
    chip: "bg-verde-suave text-verde-escuro",
    rule: "bg-verde",
    icon: "text-verde-escuro",
  },
  laranja: {
    border: "hover:border-laranja/50",
    chip: "bg-laranja-suave text-laranja-escuro",
    rule: "bg-laranja",
    icon: "text-laranja-escuro",
  },
};

/** Os três pilares em cartões amplos. */
export function PillarCards() {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {pillars.map((pilar) => {
        const Icon = icons[pilar.icon];
        const estilo = accentStyles[pilar.accent];
        return (
          <li key={pilar.id}>
            <article
              className={`pdv-card flex h-full flex-col p-6 transition-colors duration-200 motion-reduce:transition-none sm:p-7 ${estilo.border}`}
            >
              <span
                aria-hidden="true"
                className={`mb-6 block h-1 w-10 rounded-full ${estilo.rule}`}
              />
              <Icon
                className={`h-7 w-7 ${estilo.icon}`}
                aria-hidden="true"
                strokeWidth={1.6}
              />
              <h3 className="mt-5 font-display text-xl leading-tight text-grafite">
                {pilar.name}
              </h3>
              <p
                className={`mt-3 inline-flex w-fit rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] ${estilo.chip}`}
              >
                {pilar.verb}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-cinza-texto">
                {pilar.description}
              </p>
              <p className="pdv-coord mt-6 border-t border-cinza pt-4">
                {pilar.weekday}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
