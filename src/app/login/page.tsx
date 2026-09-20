import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { LoginForm } from "@/app/login/LoginForm";
import { site, supportEmail } from "@/data/site";

export const metadata: Metadata = {
  title: "Login",
  description: "Acesso individual dos alunos do Ponto de Vista.",
  robots: { index: false, follow: false },
};

/**
 * Login individual por Magic Link (Supabase Auth) — barreira de acesso
 * do portal (ver `src/middleware.ts`).
 */
export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>;
}) {
  const { erro } = await searchParams;

  return (
    <div className="bg-creme bg-topografia">
      <Container width="estreito" className="py-20 sm:py-28">
        <div className="pdv-card p-7 sm:p-10">
          <Logo className="h-11 w-11" />
          <p className="pdv-eyebrow mt-6 text-roxo">{site.edition}</p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-grafite sm:text-4xl">
            Entrar
          </h1>
          <p className="mt-4 max-w-leitura text-[16px] leading-relaxed text-cinza-texto">
            O acesso individual é exclusivo para alunos previamente
            autorizados pelo professor. Informe seu e-mail para receber um
            link de acesso — sem senha, sem cadastro.
          </p>

          {erro ? (
            <p className="mt-6 rounded-card border border-laranja/50 bg-laranja-suave px-4 py-3 text-sm font-medium text-laranja-escuro">
              O link de acesso não é mais válido ou já foi usado. Solicite um
              novo abaixo.
            </p>
          ) : null}

          <LoginForm />

          {supportEmail ? (
            <p className="mt-8 border-t border-cinza pt-5 text-sm text-cinza-texto">
              Ainda não tem acesso?{" "}
              <a
                href={`mailto:${supportEmail}`}
                className="text-roxo underline underline-offset-2"
              >
                {supportEmail}
              </a>
            </p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
