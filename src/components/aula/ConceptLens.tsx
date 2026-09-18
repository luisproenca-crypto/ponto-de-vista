import type { ConceptLensItem, CourseImage } from "@/lib/types";
import { AssetImage } from "@/components/ui/AssetImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteBlock } from "@/components/ui/QuoteBlock";

/**
 * DÊ NOME AO QUE VOCÊ VIU — as cinco lentes conceituais.
 * Cada lente é um cartão com o conceito e a sua pergunta-guia.
 */
export function ConceptLens({
  eyebrow = "As cinco lentes",
  title,
  subtitle,
  items,
  highlight,
  image,
  hideImage = false,
}: {
  /** Etiqueta acima do título. Mantém "As cinco lentes" se omitida. */
  eyebrow?: string;
  title: string;
  subtitle: string;
  items: ConceptLensItem[];
  highlight: string;
  image: CourseImage | null;
  /**
   * `true` omite completamente a área de imagem (nem imagem, nem
   * placeholder) — para quando a ausência de imagem é deliberada, não
   * "ainda não enviada". Padrão `false` preserva o comportamento atual.
   */
  hideImage?: boolean;
}) {
  return (
    <section aria-labelledby="cinco-lentes">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
      />

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((lente, index) => (
          <li key={lente.id}>
            <article className="pdv-card flex h-full flex-col p-5 transition-colors duration-200 hover:border-roxo/40 motion-reduce:transition-none">
              <div className="flex items-center justify-between gap-3">
                <span aria-hidden="true" className="text-2xl leading-none">
                  {lente.emoji}
                </span>
                <span className="pdv-coord">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-roxo-escuro">
                {lente.name}
              </h3>
              <p className="mt-3 font-display text-[17px] italic leading-snug text-grafite">
                “{lente.question}”
              </p>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <QuoteBlock>{highlight}</QuoteBlock>
      </div>

      {!hideImage ? (
        <figure className="mt-8">
          <AssetImage
            src={image?.src ?? null}
            alt={image?.alt ?? "Representação das cinco lentes conceituais"}
            ratio="16 / 9"
            placeholderLabel="Imagem das cinco lentes"
          />
        </figure>
      ) : null}
    </section>
  );
}
