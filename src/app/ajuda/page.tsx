import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { RedefinirProgresso } from "@/components/progress/RedefinirProgresso";
import { faq } from "@/data/faq";
import { supportEmail } from "@/data/site";

export const metadata: Metadata = {
  title: "Ajuda",
  description:
    "Perguntas frequentes sobre a trilha, os checkpoints, os materiais e o progresso no Ponto de Vista.",
};

export default function AjudaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Suporte"
        title="AJUDA"
        description="As dúvidas mais comuns sobre como usar o portal."
      />

      <Container width="normal" className="space-y-14 py-14 sm:py-16">
        <section aria-labelledby="perguntas-frequentes">
          <h2
            id="perguntas-frequentes"
            className="font-display text-2xl leading-tight text-grafite sm:text-3xl"
          >
            Perguntas frequentes
          </h2>

          <Accordion className="mt-8">
            {faq.map((item, i) => (
              <AccordionItem
                key={item.id}
                title={item.question}
                defaultOpen={i === 0}
              >
                <p className="max-w-leitura text-[15px] leading-relaxed text-grafite">
                  {item.answer}
                </p>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <RedefinirProgresso />

        <section
          aria-labelledby="contato"
          className="rounded-card border border-cinza bg-creme p-6 sm:p-8"
        >
          <h2
            id="contato"
            className="pdv-eyebrow flex items-center gap-2 text-roxo"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contato
          </h2>

          {supportEmail ? (
            <p className="mt-4 text-[17px] text-grafite">
              Não encontrou a resposta? Escreva para{" "}
              <a
                href={`mailto:${supportEmail}`}
                className="font-semibold text-roxo underline underline-offset-2"
              >
                {supportEmail}
              </a>
              .
            </p>
          ) : (
            <p className="mt-4 max-w-leitura text-[15px] text-cinza-texto">
              O e-mail de suporte ainda não foi configurado. Defina a variável{" "}
              <code className="font-mono text-[13px]">
                NEXT_PUBLIC_SUPPORT_EMAIL
              </code>{" "}
              para exibi-lo aqui.
            </p>
          )}
        </section>
      </Container>
    </>
  );
}
