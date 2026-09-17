import { Layers } from "lucide-react";
import type { DeepDiveBlock } from "@/lib/types";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { ConnectionFlow } from "@/components/aula/ConnectionFlow";
import { QuoteBlock } from "@/components/ui/QuoteBlock";

/**
 * Bloco de aprofundamento: cada accordion traz um texto curto e uma frase
 * de destaque. Um item pode incluir um fluxo visual (ex.: MINERAL → CHIP).
 */
export function DeepDiveAccordion({ block }: { block: DeepDiveBlock }) {
  return (
    <section aria-labelledby="aprofundamento">
      <h2
        id="aprofundamento"
        className="flex items-center gap-3 font-display text-[1.75rem] leading-tight text-grafite sm:text-4xl"
      >
        <Layers className="h-6 w-6 shrink-0 text-roxo" aria-hidden="true" strokeWidth={1.8} />
        {block.title}
      </h2>

      <Accordion className="mt-8">
        {block.items.map((item) => (
          <AccordionItem key={item.id} title={item.title}>
            <p className="max-w-leitura text-[15px] leading-relaxed text-grafite">
              {item.content}
            </p>
            {item.flow ? (
              <div className="mt-5">
                <ConnectionFlow steps={item.flow} />
              </div>
            ) : null}
            {item.highlight ? (
              <p className="mt-4 border-l-2 border-roxo/40 pl-4 font-display text-base italic leading-snug text-roxo-escuro">
                {item.highlight}
              </p>
            ) : null}
          </AccordionItem>
        ))}
      </Accordion>

      {block.closing ? (
        <div className="mt-8">
          <QuoteBlock>{block.closing}</QuoteBlock>
        </div>
      ) : null}
    </section>
  );
}
