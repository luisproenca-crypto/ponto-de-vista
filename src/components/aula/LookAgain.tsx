import { Search } from "lucide-react";
import type { CourseImage, LookAgainItem } from "@/lib/types";
import { AssetImage } from "@/components/ui/AssetImage";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

/**
 * 🔎 AGORA OLHE DE NOVO — retorno à imagem inicial, agora com as lentes.
 * Cada accordion traz a pergunta que aquela lente faz sobre a mesma imagem.
 */
export function LookAgain({
  title,
  intro,
  items,
  closingQuote,
  image,
}: {
  title: string;
  intro: string;
  items: LookAgainItem[];
  closingQuote: string;
  image: CourseImage | null;
}) {
  return (
    <section aria-labelledby="olhe-de-novo">
      <h2
        id="olhe-de-novo"
        className="flex items-center gap-3 font-display text-[1.75rem] leading-tight text-grafite sm:text-4xl"
      >
        <Search className="h-6 w-6 shrink-0 text-roxo" aria-hidden="true" strokeWidth={1.8} />
        {title}
      </h2>

      <p className="mt-4 max-w-leitura font-display text-lg italic text-roxo-escuro sm:text-xl">
        “{intro}”
      </p>

      <figure className="mt-8">
        <AssetImage
          src={image?.src ?? null}
          alt={image?.alt ?? "A mesma imagem de observação, revista com as cinco lentes"}
          ratio="16 / 9"
          placeholderLabel="Imagem de observação da aula"
        />
        {image?.caption ? (
          <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-cinza-medio">
            {image.caption}
          </figcaption>
        ) : null}
      </figure>

      <Accordion className="mt-8">
        {items.map((item) => (
          <AccordionItem key={item.id} title={item.name}>
            <p className="font-display text-[17px] italic leading-snug text-grafite">
              “{item.question}”
            </p>
            <p className="mt-3 text-sm text-cinza-texto">
              Responda com suas próprias palavras antes de seguir. Compare com o
              que você havia anotado na primeira observação.
            </p>
          </AccordionItem>
        ))}
      </Accordion>

      <p className="mt-8 border-l-2 border-verde bg-verde-suave/50 px-5 py-5 font-display text-lg leading-snug text-grafite sm:text-xl">
        {closingQuote}
      </p>
    </section>
  );
}
