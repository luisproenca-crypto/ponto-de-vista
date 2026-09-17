"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { HypothesisBlock } from "@/lib/types";
import { PacoImage } from "@/components/ui/PacoImage";

/**
 * O OLHAR DO PACO — variante de provocação/hipótese.
 *
 * O aluno escolhe exatamente dois cartões antes de seguir. Não existe
 * resposta certa: a seleção é só uma provocação pedagógica, guardada
 * apenas no estado local do componente — nunca no progresso do aluno,
 * nunca em localStorage.
 */
export function HypothesisCards({ block }: { block: HypothesisBlock }) {
  const [selecionados, setSelecionados] = useState<string[]>([]);
  const completo = selecionados.length === 2;

  function alternar(id: string) {
    setSelecionados((atual) => {
      if (atual.includes(id)) return atual.filter((item) => item !== id);
      if (atual.length >= 2) return atual;
      return [...atual, id];
    });
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
            <p className="mt-4 max-w-leitura font-display text-xl leading-snug text-grafite sm:text-2xl">
              “{block.intro}”
            </p>
          </div>
        </div>

        {/* Cartões selecionáveis */}
        <fieldset className="mt-8">
          <legend className="font-display text-lg italic leading-snug text-roxo-escuro sm:text-xl">
            “{block.question}”
          </legend>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {block.cards.map((card) => {
              const escolhido = selecionados.includes(card.id);
              const desabilitado = !escolhido && selecionados.length >= 2;
              return (
                <button
                  key={card.id}
                  type="button"
                  aria-pressed={escolhido}
                  disabled={desabilitado}
                  onClick={() => alternar(card.id)}
                  className={`flex min-h-[64px] items-center justify-center gap-2 rounded-card border px-3 py-4 text-center font-mono text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 motion-reduce:transition-none ${
                    escolhido
                      ? "border-roxo bg-roxo text-white"
                      : desabilitado
                        ? "cursor-not-allowed border-cinza bg-white/60 text-cinza-medio"
                        : "border-cinza bg-white text-grafite hover:border-roxo/40"
                  }`}
                >
                  {escolhido ? (
                    <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" strokeWidth={3} />
                  ) : null}
                  {card.label}
                </button>
              );
            })}
          </div>
        </fieldset>

        <p className="mt-6 text-sm text-cinza-texto">{block.paco}</p>

        <div aria-live="polite">
          {completo ? (
            <p className="mt-5 animate-fade-in rounded-card border border-verde/40 bg-verde-suave px-5 py-4 text-center font-display text-lg leading-snug text-verde-escuro">
              {block.reveal}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
