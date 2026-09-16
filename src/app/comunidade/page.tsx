import type { Metadata } from "next";
import { ArrowUpRight, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { PacoImage } from "@/components/ui/PacoImage";
import { communityUrl, supportEmail } from "@/data/site";

export const metadata: Metadata = {
  title: "Comunidade",
  description:
    "O espaço de apoio e troca entre os estudantes do Ponto de Vista.",
};

export default function ComunidadePage() {
  return (
    <>
      <PageHeader
        eyebrow="Juntos"
        title="COMUNIDADE PONTO DE VISTA"
        description="Estudar sozinho funciona por um tempo. Estudar acompanhado sustenta o percurso inteiro."
      />

      <Container width="normal" className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="max-w-leitura text-[17px] leading-relaxed text-grafite">
              A comunidade é o lugar para tirar dúvidas, comentar as atualidades
              da semana, compartilhar leituras e acompanhar o ritmo da trilha com
              outros vestibulandos. Ninguém precisa entender o mundo sozinho.
            </p>
            <p className="mt-4 max-w-leitura text-[17px] leading-relaxed text-grafite">
              As conversas seguem o mesmo princípio das aulas: perguntar antes de
              concluir, e discutir ideias sem orientação político-partidária.
            </p>

            <div className="mt-9">
              {communityUrl ? (
                <a
                  href={communityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-roxo px-7 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-suave transition-colors hover:bg-roxo-escuro motion-reduce:transition-none"
                >
                  <Users className="h-4 w-4" aria-hidden="true" />
                  Entrar na comunidade
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : (
                <div className="rounded-card border border-dashed border-cinza-medio/60 bg-creme px-6 py-5">
                  <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-cinza-texto">
                    Link disponível em breve
                  </p>
                  <p className="mt-2 max-w-leitura text-sm text-cinza-texto">
                    O endereço da comunidade ainda não foi configurado. Ele
                    aparecerá aqui assim que estiver pronto.
                  </p>
                </div>
              )}
            </div>

            {supportEmail ? (
              <p className="mt-8 text-sm text-cinza-texto">
                Precisa falar direto com a organização do curso?{" "}
                <a
                  href={`mailto:${supportEmail}`}
                  className="text-roxo underline underline-offset-2"
                >
                  {supportEmail}
                </a>
              </p>
            ) : null}
          </div>

          <div className="w-32 justify-self-start md:w-44">
            <PacoImage variant="estudando" ratio="1 / 1" />
          </div>
        </div>
      </Container>
    </>
  );
}
