"use client";

import { useId, useState } from "react";
import { AlertTriangle, Check, X } from "lucide-react";
import type { VestibularQuestionData } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

/**
 * Questão de aplicação.
 *
 * Regras de uso:
 *   • errar NUNCA bloqueia o progresso da aula;
 *   • a correção sempre mostra a RESPOSTA COMENTADA (nunca só a letra);
 *   • o aluno pode responder de novo quantas vezes quiser.
 */
export function VestibularQuestion({
  question,
  title = "PROVE QUE SEU OLHAR MUDOU",
}: {
  question: VestibularQuestionData;
  title?: string;
}) {
  const grupo = useId();
  const [selecionada, setSelecionada] = useState<string | null>(null);
  const [confirmada, setConfirmada] = useState(false);

  const acertou = confirmada && selecionada === question.correctOptionId;

  return (
    <section aria-labelledby={`${grupo}-titulo`} className="pdv-card p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2
          id={`${grupo}-titulo`}
          className="font-display text-[1.6rem] leading-tight text-grafite sm:text-3xl"
        >
          {title}
        </h2>
        {question.source ? <Badge tone="contorno">{question.source}</Badge> : null}
      </div>

      {question.isPlaceholder ? (
        <p className="mt-4 flex items-start gap-2 rounded-card border border-dashed border-laranja/50 bg-laranja-suave/60 px-4 py-3 text-sm text-laranja-escuro">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            <strong className="font-semibold">Questão de demonstração.</strong>{" "}
            Substitua o enunciado e o comentário no arquivo de dados da aula
            antes de publicar para os alunos.
          </span>
        </p>
      ) : null}

      <p className="mt-6 max-w-leitura text-[16px] leading-relaxed text-grafite">
        {question.statement}
      </p>

      <fieldset className="mt-6" disabled={false}>
        <legend className="sr-only">Escolha uma alternativa</legend>
        <div className="space-y-2.5">
          {question.options.map((opcao) => {
            const escolhida = selecionada === opcao.id;
            const correta = opcao.id === question.correctOptionId;
            const mostrarCorreta = confirmada && correta;
            const mostrarErro = confirmada && escolhida && !correta;

            return (
              <label
                key={opcao.id}
                className={`flex cursor-pointer items-start gap-3 rounded-card border p-4 transition-colors duration-200 motion-reduce:transition-none ${
                  mostrarCorreta
                    ? "border-verde bg-verde-suave"
                    : mostrarErro
                      ? "border-laranja bg-laranja-suave"
                      : escolhida
                        ? "border-roxo bg-roxo-suave"
                        : "border-cinza bg-white hover:border-roxo/40"
                }`}
              >
                <input
                  type="radio"
                  name={grupo}
                  value={opcao.id}
                  checked={escolhida}
                  onChange={() => {
                    setSelecionada(opcao.id);
                    setConfirmada(false);
                  }}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#5B2A86]"
                />
                <span className="flex-1">
                  <span className="font-mono text-[12px] font-bold text-roxo-escuro">
                    {opcao.id})
                  </span>{" "}
                  <span className="text-[15px] leading-relaxed text-grafite">
                    {opcao.text}
                  </span>

                  {confirmada && question.optionFeedback?.[opcao.id] ? (
                    <span className="mt-2 block text-sm text-cinza-texto">
                      {question.optionFeedback[opcao.id]}
                    </span>
                  ) : null}
                </span>

                {mostrarCorreta ? (
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-verde-escuro"
                    aria-label="Alternativa correta"
                  />
                ) : mostrarErro ? (
                  <X
                    className="mt-0.5 h-5 w-5 shrink-0 text-laranja-escuro"
                    aria-label="Alternativa incorreta"
                  />
                ) : null}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setConfirmada(true)}
          disabled={!selecionada}
          className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-roxo px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-roxo-escuro disabled:cursor-not-allowed disabled:bg-cinza disabled:text-cinza-texto motion-reduce:transition-none"
        >
          Confirmar resposta
        </button>

        {confirmada ? (
          <button
            type="button"
            onClick={() => {
              setConfirmada(false);
              setSelecionada(null);
            }}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-cinza px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-cinza-texto transition-colors hover:border-grafite/40 hover:text-grafite motion-reduce:transition-none"
          >
            Responder de novo
          </button>
        ) : null}
      </div>

      {/* Correção — sempre com explicação do raciocínio */}
      <div aria-live="polite">
        {confirmada ? (
          <div className="mt-6 animate-fade-in">
            <p
              className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] ${
                acertou
                  ? "bg-verde-suave text-verde-escuro"
                  : "bg-laranja-suave text-laranja-escuro"
              }`}
            >
              {acertou ? (
                <>
                  <Check className="h-4 w-4" aria-hidden="true" /> Você acertou
                </>
              ) : (
                <>
                  <X className="h-4 w-4" aria-hidden="true" /> Não foi dessa vez
                </>
              )}
            </p>

            <div className="mt-4 rounded-card border border-cinza bg-creme p-5">
              <h3 className="pdv-eyebrow text-roxo">Resposta comentada</h3>
              <p className="mt-3 max-w-leitura text-[15px] leading-relaxed text-grafite">
                {question.explanation}
              </p>
              <p className="mt-4 border-t border-cinza pt-3 text-sm text-cinza-texto">
                Errar aqui não trava nada: você pode marcar a aula como
                concluída de qualquer forma e voltar a esta questão quando
                quiser.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
