import { ClipboardList } from "lucide-react";
import type { ExamFormatBlock } from "@/lib/types";
import { AssetImage } from "@/components/ui/AssetImage";
import { QuoteBlock } from "@/components/ui/QuoteBlock";

/** Como isso aparece na prova? — o que a questão entrega vs. o que cobra. */
export function ExamFormat({ block }: { block: ExamFormatBlock }) {
  return (
    <section aria-labelledby="como-aparece-na-prova">
      <h2
        id="como-aparece-na-prova"
        className="flex items-center gap-3 font-display text-[1.75rem] leading-tight text-grafite sm:text-4xl"
      >
        <ClipboardList className="h-6 w-6 shrink-0 text-roxo" aria-hidden="true" strokeWidth={1.8} />
        {block.title}
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-card border border-cinza bg-white p-5 sm:p-6">
          <p className="pdv-eyebrow text-cinza-texto">{block.deliversTitle}</p>
          <ul className="mt-4 space-y-2.5">
            {block.delivers.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[15px] leading-relaxed text-grafite"
              >
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cinza-medio" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-card border border-roxo/30 bg-roxo-suave/40 p-5 sm:p-6">
          <p className="pdv-eyebrow text-roxo">{block.demandsTitle}</p>
          <ul className="mt-4 space-y-2.5">
            {block.demands.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[15px] leading-relaxed text-grafite"
              >
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-roxo" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <QuoteBlock>{block.highlight}</QuoteBlock>
      </div>

      {block.image ? (
        <figure className="mt-8">
          <AssetImage
            src={block.image.src}
            alt={block.image.alt}
            ratio="16 / 9"
            placeholderLabel="Imagem de apoio para a prova"
          />
          {block.image.caption ? (
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-cinza-medio">
              {block.image.caption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      <div className="mt-8 rounded-card border border-dashed border-roxo/30 bg-creme px-5 py-5 sm:px-6">
        <p className="font-display text-base leading-snug text-grafite sm:text-lg">
          {block.guidingIntro}
        </p>
        <ul className="mt-3 space-y-2">
          {block.guidingQuestions.map((pergunta) => (
            <li
              key={pergunta}
              className="font-display text-[15px] italic leading-relaxed text-roxo-escuro"
            >
              “{pergunta}”
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
