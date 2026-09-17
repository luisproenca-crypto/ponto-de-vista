import { Network } from "lucide-react";
import type { ConnectionBlock } from "@/lib/types";
import { ConnectionFlow } from "@/components/aula/ConnectionFlow";
import { QuoteBlock } from "@/components/ui/QuoteBlock";

/**
 * Bloco visual e leve de conexão (ex.: "E se fossem a mesma história?").
 * Um fluxo de etapas + uma frase em destaque — sem grandes blocos de texto.
 */
export function ConnectionInsight({ block }: { block: ConnectionBlock }) {
  return (
    <section aria-labelledby="mesma-historia">
      <h2
        id="mesma-historia"
        className="flex items-center gap-3 font-display text-[1.75rem] leading-tight text-grafite sm:text-4xl"
      >
        <Network className="h-6 w-6 shrink-0 text-roxo" aria-hidden="true" strokeWidth={1.8} />
        {block.title}
      </h2>

      <div className="mt-6">
        <ConnectionFlow steps={block.flow} />
      </div>

      <div className="mt-8">
        <QuoteBlock>{block.highlight}</QuoteBlock>
      </div>

      <p className="mt-5 max-w-leitura text-[15px] leading-relaxed text-cinza-texto">
        {block.text}
      </p>
    </section>
  );
}
