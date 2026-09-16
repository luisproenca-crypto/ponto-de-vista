import { Brain } from "lucide-react";
import type { ConceptDetail } from "@/lib/types";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { EmPreparacao } from "@/components/ui/EmPreparacao";

const campos: { key: keyof ConceptDetail; label: string }[] = [
  { key: "conceito", label: "Conceito" },
  { key: "penseAssim", label: "Pense assim" },
  { key: "exemplo", label: "Exemplo" },
  { key: "naoConfunda", label: "Não confunda" },
  { key: "naProva", label: "Como aparece na prova" },
];

/**
 * 🧠 DÊ PRECISÃO AO SEU OLHAR.
 * Cada conceito abre em cinco campos. Campos ainda não redigidos aparecem
 * como "Conteúdo em preparação" — nunca com texto inventado.
 */
export function ConceptAccordion({
  title,
  items,
}: {
  title: string;
  items: ConceptDetail[];
}) {
  return (
    <section aria-labelledby="precisao-olhar">
      <h2
        id="precisao-olhar"
        className="flex items-center gap-3 font-display text-[1.75rem] leading-tight text-grafite sm:text-4xl"
      >
        <Brain className="h-6 w-6 shrink-0 text-roxo" aria-hidden="true" strokeWidth={1.8} />
        {title}
      </h2>

      <Accordion className="mt-8">
        {items.map((conceito) => {
          const pendentes = campos.filter((c) => !conceito[c.key]).length;
          return (
            <AccordionItem
              key={conceito.id}
              title={conceito.name}
              badge={
                pendentes > 0 ? (
                  <Badge tone="contorno">
                    {pendentes} de {campos.length} em preparação
                  </Badge>
                ) : null
              }
            >
              <dl className="space-y-5">
                {campos.map((campo) => {
                  const valor = conceito[campo.key] as string | null;
                  return (
                    <div key={String(campo.key)}>
                      <dt className="pdv-eyebrow text-roxo">{campo.label}</dt>
                      <dd className="mt-2">
                        {valor ? (
                          <p className="max-w-leitura text-[15px] leading-relaxed text-grafite">
                            {valor}
                          </p>
                        ) : (
                          <EmPreparacao compacto />
                        )}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
