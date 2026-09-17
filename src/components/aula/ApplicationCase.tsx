import { Link2 } from "lucide-react";
import type { ApplicationBlock } from "@/lib/types";
import { ConnectionFlow } from "@/components/aula/ConnectionFlow";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

/**
 * AGORA CONECTE — aplica as cinco chaves a um caso concreto, mostrando o
 * mesmo acontecimento em três escalas (local, regional, global).
 */
export function ApplicationCase({ block }: { block: ApplicationBlock }) {
  return (
    <section aria-labelledby="agora-conecte">
      <h2
        id="agora-conecte"
        className="flex items-center gap-3 font-display text-[1.75rem] leading-tight text-grafite sm:text-4xl"
      >
        <Link2 className="h-6 w-6 shrink-0 text-roxo" aria-hidden="true" strokeWidth={1.8} />
        {block.title}
      </h2>

      {block.context ? (
        <p className="mt-4 max-w-leitura text-[15px] leading-relaxed text-cinza-texto">
          {block.context}
        </p>
      ) : null}

      <div className="mt-6">
        <ConnectionFlow steps={block.flow} />
      </div>

      <p className="mt-8 max-w-leitura font-display text-lg italic leading-snug text-roxo-escuro sm:text-xl">
        “{block.question}”
      </p>

      <Accordion className="mt-6">
        {block.accordions.map((item) => (
          <AccordionItem key={item.id} title={item.title}>
            <p className="max-w-leitura text-[15px] leading-relaxed text-grafite">
              {item.content}
            </p>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
