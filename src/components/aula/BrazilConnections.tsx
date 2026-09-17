import { MapPin } from "lucide-react";
import type { BrazilConnectionsBlock } from "@/lib/types";
import { QuoteBlock } from "@/components/ui/QuoteBlock";

/**
 * E O BRASIL? — o país no centro conceitual, conectado a seis dimensões.
 * Composição visual e leve: o centro é um cartão em destaque; as dimensões
 * são cartões menores ao redor, cada um com um rótulo e uma frase curta.
 */
export function BrazilConnections({ block }: { block: BrazilConnectionsBlock }) {
  return (
    <section aria-labelledby="e-o-brasil" className="scroll-mt-24">
      <div className="rounded-card border border-verde/25 bg-verde-suave/40 p-6 sm:p-8">
        <h2
          id="e-o-brasil"
          className="flex items-center gap-3 font-display text-[1.75rem] leading-tight text-grafite sm:text-4xl"
        >
          <MapPin className="h-6 w-6 shrink-0 text-verde-escuro" aria-hidden="true" strokeWidth={1.8} />
          {block.title}
        </h2>

        <p className="mt-4 max-w-leitura font-display text-lg italic leading-snug text-verde-escuro sm:text-xl">
          “{block.question}”
        </p>

        {/* Brasil no centro */}
        <div className="mt-8 flex justify-center">
          <span className="rounded-full border-2 border-verde bg-white px-7 py-3 font-mono text-sm font-bold uppercase tracking-[0.14em] text-verde-escuro shadow-suave">
            {block.center}
          </span>
        </div>

        {/* Dimensões conectadas */}
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((item) => (
            <li key={item.id}>
              <article className="h-full rounded-card border border-cinza bg-white p-4">
                <h3 className="font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-verde-escuro">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cinza-texto">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-leitura text-[15px] leading-relaxed text-grafite">
          {block.study}
        </p>

        <div className="mt-6">
          <QuoteBlock>{block.highlight}</QuoteBlock>
        </div>
      </div>
    </section>
  );
}
