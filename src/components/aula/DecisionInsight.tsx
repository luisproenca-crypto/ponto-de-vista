"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { DecisionInsightBlock } from "@/lib/types";
import { AssetImage } from "@/components/ui/AssetImage";
import { PacoImage } from "@/components/ui/PacoImage";

/**
 * O OLHAR DO PACO — variante de decisão.
 *
 * O aluno passa por rounds sucessivos de escolha única (ex.: "o que
 * priorizar?" → "quem deveria decidir?"). Nenhuma opção é certa ou
 * errada: a seleção é só uma provocação pedagógica, guardada apenas no
 * estado local do componente — nunca no progresso do aluno, nunca em
 * localStorage. O aluno pode trocar a escolha do round atual livremente
 * antes de avançar.
 */
export function DecisionInsight({ block }: { block: DecisionInsightBlock }) {
  const [roundIndex, setRoundIndex] = useState(0);
  const [selecionado, setSelecionado] = useState<string | null>(null);

  const round = block.rounds[roundIndex];
  const ultimoRound = roundIndex === block.rounds.length - 1;

  function avancar() {
    setSelecionado(null);
    setRoundIndex((i) => i + 1);
  }

  return (
    <section aria-labelledby="olhar-do-paco" className="scroll-mt-24">
      <div className="rounded-card border border-roxo/20 bg-roxo-suave/50 p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="w-24 shrink-0 sm:w-28">
            <PacoImage variant="lupa" ratio="1 / 1" />
          </div>
          <div className="flex-1">
            <h2 id="olhar-do-paco" className="pdv-eyebrow text-roxo">
              {block.title}
            </h2>
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

        {/* Round atual */}
        <fieldset className="mt-8">
          <legend className="max-w-leitura font-display text-xl leading-snug text-grafite sm:text-2xl">
            “{round.question}”
          </legend>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {round.options.map((opcao) => {
              const escolhido = selecionado === opcao.id;
              return (
                <button
                  key={opcao.id}
                  type="button"
                  aria-pressed={escolhido}
                  onClick={() => setSelecionado(opcao.id)}
                  className={`flex min-h-[64px] items-center justify-center gap-2 rounded-card border px-3 py-4 text-center font-mono text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 motion-reduce:transition-none ${
                    escolhido
                      ? "border-roxo bg-roxo text-white"
                      : "border-cinza bg-white text-grafite hover:border-roxo/40"
                  }`}
                >
                  {escolhido ? (
                    <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" strokeWidth={3} />
                  ) : null}
                  {opcao.label}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div aria-live="polite">
          {selecionado ? (
            <div className="mt-6">
              <p className="animate-fade-in rounded-card border border-verde/40 bg-verde-suave px-5 py-4 text-center font-display text-lg leading-snug text-verde-escuro">
                {round.reveal}
              </p>
              {!ultimoRound ? (
                <div className="mt-5 flex justify-center">
                  <button
                    type="button"
                    onClick={avancar}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-roxo px-6 py-2.5 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-roxo-escuro motion-reduce:transition-none"
                  >
                    Continuar
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
