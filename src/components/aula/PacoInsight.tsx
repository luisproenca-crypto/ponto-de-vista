import type { PacoObservationBlock } from "@/lib/types";
import { AssetImage } from "@/components/ui/AssetImage";
import { PacoImage } from "@/components/ui/PacoImage";

/**
 * O OLHAR DO PACO — bloco de observação que antecede qualquer explicação.
 * A imagem é opcional: se o arquivo não existir, o placeholder ocupa o espaço.
 */
export function PacoInsight({
  block,
  imageId,
}: {
  block: PacoObservationBlock;
  /** id usado para o link "voltar a esta imagem" no fim da aula */
  imageId?: string;
}) {
  return (
    <section aria-labelledby="olhar-do-paco" className="scroll-mt-24" id={imageId}>
      <div className="rounded-card border border-roxo/20 bg-roxo-suave/50 p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="w-24 shrink-0 sm:w-28">
            <PacoImage variant="lupa" ratio="1 / 1" />
          </div>
          <div className="flex-1">
            <h2 id="olhar-do-paco" className="pdv-eyebrow text-roxo">
              {block.title}
            </h2>
            {block.lines.map((linha, i) => (
              <p
                key={i}
                className={`max-w-leitura font-display leading-snug text-grafite ${
                  i === 0 ? "mt-4 text-xl sm:text-2xl" : "mt-3 text-base sm:text-lg"
                }`}
              >
                “{linha}”
              </p>
            ))}
          </div>
        </div>

        {/* Imagem de observação */}
        <figure className="mt-8">
          <AssetImage
            src={block.image?.src ?? null}
            alt={block.image?.alt ?? "Imagem de observação da aula"}
            ratio="16 / 9"
            placeholderLabel="Imagem de observação da aula"
          />
          {block.image?.caption ? (
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-cinza-medio">
              {block.image.caption}
            </figcaption>
          ) : null}
        </figure>

        {/* Perguntas de observação */}
        <ol className="mt-8 space-y-3">
          {block.questions.map((pergunta, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-card border border-white bg-white/80 px-4 py-3"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 font-mono text-[11px] font-bold text-laranja-escuro"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] leading-relaxed text-grafite">
                {pergunta}
              </span>
            </li>
          ))}
        </ol>

        {block.closing ? (
          <p className="mt-7 rounded-card border border-dashed border-laranja/50 bg-white px-5 py-4 text-center font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-laranja-escuro">
            {block.closing}
          </p>
        ) : null}
      </div>
    </section>
  );
}
