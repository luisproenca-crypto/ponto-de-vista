import { RefreshCw } from "lucide-react";
import type { CheckpointBeforeAfterItem } from "@/lib/types";
import { QuoteBlock } from "@/components/ui/QuoteBlock";

/**
 * MUDE O OLHAR — comparação visual entre uma leitura inicial (mais
 * imediata) e uma leitura mais sofisticada da mesma situação, depois do
 * checkpoint. Não diz "o que pensar": mostra que perguntas melhores
 * ficaram possíveis. Componente próprio, dedicado — não é uma adaptação
 * de `ConceptLens`.
 */
export function CheckpointBeforeAfter({
  title,
  cards,
  closing,
}: {
  title: string;
  cards: CheckpointBeforeAfterItem[];
  closing?: string;
}) {
  return (
    <section aria-labelledby="mude-o-olhar">
      <h2
        id="mude-o-olhar"
        className="flex items-center gap-3 font-display text-[1.75rem] leading-tight text-grafite sm:text-4xl"
      >
        <RefreshCw className="h-6 w-6 shrink-0 text-roxo" aria-hidden="true" strokeWidth={1.8} />
        {title}
      </h2>

      <ul className="mt-8 space-y-4">
        {cards.map((item) => (
          <li key={item.id}>
            <article className="pdv-card grid gap-0 overflow-hidden sm:grid-cols-2">
              <div className="border-b border-cinza p-5 sm:border-b-0 sm:border-r">
                <p className="pdv-eyebrow text-cinza-texto">Leitura imediata</p>
                <p className="mt-2 font-display text-[15px] italic leading-relaxed text-cinza-texto">
                  {item.before}
                </p>
              </div>
              <div className="bg-roxo-suave/40 p-5">
                <p className="pdv-eyebrow text-roxo">Leitura desta semana</p>
                <p className="mt-2 font-display text-[15px] italic leading-relaxed text-grafite">
                  {item.after}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {closing ? (
        <div className="mt-8">
          <QuoteBlock>{closing}</QuoteBlock>
        </div>
      ) : null}
    </section>
  );
}
