import { Eye } from "lucide-react";
import type { CheckpointScenario } from "@/lib/types";
import { AssetImage } from "@/components/ui/AssetImage";

/**
 * OBSERVE — apresenta a situação-problema do checkpoint (imagem +
 * narrativa) junto das perguntas de observação daquela etapa. A mesma
 * situação-problema é mostrada uma única vez aqui; as etapas seguintes
 * só a referenciam em texto, sem repetir a imagem.
 */
export function CheckpointScenarioBlock({
  title,
  scenario,
  questions,
}: {
  title: string;
  scenario: CheckpointScenario;
  questions: string[];
}) {
  return (
    <section aria-labelledby="observe" className="scroll-mt-24">
      <h2
        id="observe"
        className="flex items-center gap-3 font-display text-[1.75rem] leading-tight text-grafite sm:text-4xl"
      >
        <Eye className="h-6 w-6 shrink-0 text-roxo" aria-hidden="true" strokeWidth={1.8} />
        {title}
      </h2>

      <div className="mt-6 rounded-card border border-roxo/20 bg-roxo-suave/50 p-6 sm:p-8">
        <h3 className="font-display text-xl leading-snug text-grafite sm:text-2xl">
          {scenario.title}
        </h3>
        <p className="mt-3 max-w-leitura text-[15px] leading-relaxed text-grafite">
          {scenario.description}
        </p>

        <figure className="mt-6">
          <AssetImage
            src={scenario.image?.src ?? null}
            alt={scenario.image?.alt ?? "Imagem da situação-problema do checkpoint"}
            ratio="16 / 9"
            placeholderLabel="Imagem da situação-problema"
          />
          {scenario.image?.caption ? (
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-cinza-medio">
              {scenario.image.caption}
            </figcaption>
          ) : null}
        </figure>

        <ol className="mt-8 space-y-3">
          {questions.map((pergunta, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-card border border-white bg-white/80 px-4 py-3"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 font-mono text-[11px] font-bold text-roxo-escuro"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] leading-relaxed text-grafite">
                {pergunta}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
