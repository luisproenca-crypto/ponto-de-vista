"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { KeyRound } from "lucide-react";

/** Formulário do código de acesso da turma. */
export function FormularioAcesso({ next }: { next: string }) {
  const router = useRouter();
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function enviar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErro(null);
    setEnviando(true);

    try {
      const resposta = await fetch("/api/acesso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codigo }),
      });

      if (!resposta.ok) {
        setErro("Código inválido. Confira com o professor e tente de novo.");
        setEnviando(false);
        return;
      }

      router.replace(next);
      router.refresh();
    } catch {
      setErro("Não foi possível validar agora. Tente novamente em instantes.");
      setEnviando(false);
    }
  }

  return (
    <form onSubmit={enviar} className="mt-8">
      <label
        htmlFor="codigo-acesso"
        className="pdv-eyebrow block text-roxo"
      >
        Código da turma
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          id="codigo-acesso"
          name="codigo"
          type="password"
          autoComplete="off"
          required
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          aria-describedby={erro ? "erro-acesso" : undefined}
          aria-invalid={erro ? true : undefined}
          className="min-h-[52px] flex-1 rounded-full border border-cinza bg-white px-5 text-[16px] text-grafite placeholder:text-cinza-medio focus:border-roxo"
          placeholder="Digite o código recebido"
        />
        <button
          type="submit"
          disabled={enviando || codigo.trim().length === 0}
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-roxo px-7 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-roxo-escuro disabled:cursor-not-allowed disabled:bg-cinza disabled:text-cinza-texto motion-reduce:transition-none"
        >
          <KeyRound className="h-4 w-4" aria-hidden="true" />
          {enviando ? "Verificando…" : "Entrar"}
        </button>
      </div>

      <div aria-live="polite">
        {erro ? (
          <p
            id="erro-acesso"
            className="mt-4 rounded-card border border-laranja/50 bg-laranja-suave px-4 py-3 text-sm font-medium text-laranja-escuro"
          >
            {erro}
          </p>
        ) : null}
      </div>
    </form>
  );
}
