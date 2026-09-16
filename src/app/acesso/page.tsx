import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { FormularioAcesso } from "@/app/acesso/FormularioAcesso";
import { sanitizeNext } from "@/lib/acesso";
import { site, supportEmail } from "@/data/site";

export const metadata: Metadata = {
  title: "Acesso",
  description: "Área restrita aos alunos do Ponto de Vista.",
  robots: { index: false, follow: false },
};

export default async function AcessoPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  const destino = sanitizeNext(next);

  return (
    <div className="bg-creme bg-topografia">
      <Container width="estreito" className="py-20 sm:py-28">
        <div className="pdv-card p-7 sm:p-10">
          <Logo className="h-11 w-11" />
          <p className="pdv-eyebrow mt-6 text-roxo">{site.edition}</p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-grafite sm:text-4xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-leitura text-[16px] leading-relaxed text-cinza-texto">
            Esta área é exclusiva para os alunos do Intensivo 2026. Informe o
            código de acesso que você recebeu para entrar.
          </p>

          <FormularioAcesso next={destino} />

          {supportEmail ? (
            <p className="mt-8 border-t border-cinza pt-5 text-sm text-cinza-texto">
              Não tem o código?{" "}
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
