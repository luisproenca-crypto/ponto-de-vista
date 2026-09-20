"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

/**
 * Formulário de login por Magic Link — sem senha, sem criação de conta.
 *
 * `shouldCreateUser: false` garante que só e-mails já autorizados
 * recebem o link. Para não revelar se um e-mail existe ou não na base,
 * a mensagem de sucesso é sempre a mesma genérica, independentemente do
 * e-mail informado ser ou não um aluno cadastrado.
 */
export function LoginForm() {
  const [email, setEmail] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function enviar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErro(null);
    setEnviando(true);

    try {
      let supabase;
      try {
        supabase = createClient();
      } catch (e) {
        console.error("[login] falha ao criar client", (e as Error)?.message);
        throw e;
      }

      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: {
          shouldCreateUser: false,
          // Só a origem (sem caminho) — o template do Supabase Dashboard
          // é quem acrescenta "/auth/confirm?...", usando {{ .RedirectTo }}.
          // `window.location.origin` nunca termina em "/", então não há
          // risco de gerar "//auth/confirm" no link do e-mail.
          emailRedirectTo: window.location.origin,
        },
      });

      if (error) {
        console.error("[login] erro retornado pelo Supabase", error.message);
        setErro("Não foi possível enviar o link agora. Tente novamente em instantes.");
        setEnviando(false);
        return;
      }

      setEnviado(true);
    } catch (e) {
      console.error(
        "[login] falha inesperada",
        e instanceof Error ? e.message : String(e),
      );
      setErro("Não foi possível enviar o link agora. Tente novamente em instantes.");
    } finally {
      setEnviando(false);
    }
  }

  if (enviado) {
    return (
      <div
        aria-live="polite"
        className="mt-8 rounded-card border border-verde/30 bg-verde-suave/60 px-5 py-4 text-sm leading-relaxed text-verde-escuro"
      >
        Se <strong>{email.trim()}</strong> estiver autorizado, você vai
        receber um link de acesso por e-mail em instantes. Confira também a
        caixa de spam.
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="mt-8" noValidate>
      <label htmlFor="email-login" className="pdv-eyebrow block text-roxo">
        E-mail
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          id="email-login"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby={erro ? "erro-login" : undefined}
          aria-invalid={erro ? true : undefined}
          className="min-h-[52px] flex-1 rounded-full border border-cinza bg-white px-5 text-[16px] text-grafite placeholder:text-cinza-medio focus:border-roxo"
          placeholder="seu.email@exemplo.com"
        />
        <button
          type="submit"
          disabled={enviando || email.trim().length === 0}
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-roxo px-7 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-roxo-escuro disabled:cursor-not-allowed disabled:bg-cinza disabled:text-cinza-texto motion-reduce:transition-none"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {enviando ? "Enviando…" : "Enviar link de acesso"}
        </button>
      </div>

      <div aria-live="polite">
        {erro ? (
          <p
            id="erro-login"
            className="mt-4 rounded-card border border-laranja/50 bg-laranja-suave px-4 py-3 text-sm font-medium text-laranja-escuro"
          >
            {erro}
          </p>
        ) : null}
      </div>
    </form>
  );
}
