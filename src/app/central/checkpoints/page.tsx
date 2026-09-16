import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { CheckpointsList } from "@/components/central/CheckpointsList";
import { PacoImage } from "@/components/ui/PacoImage";

export const metadata: Metadata = {
  title: "Checkpoints",
  description:
    "Os testes de fim de semana do Ponto de Vista: veja o que já foi concluído e o que ainda falta.",
};

export default function CheckpointsPage() {
  return (
    <>
      <PageHeader
        backHref="/central"
        backLabel="Central de Estudos"
        eyebrow="Fim de semana"
        title="CHECKPOINTS"
        description="Aos domingos, o checkpoint fecha a semana: um teste curto para você perceber o que já construiu e o que ainda precisa retomar."
      />

      <Container width="largo" className="py-12 sm:py-16">
        <CheckpointsList />

        <div className="mt-12 flex flex-col items-start gap-6 rounded-card border border-cinza bg-creme p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="w-24 shrink-0 sm:w-28">
            <PacoImage variant="checkpoint" ratio="1 / 1" />
          </div>
          <p className="max-w-leitura text-[15px] leading-relaxed text-cinza-texto">
            Os questionários dos checkpoints estão em preparação. A estrutura já
            está pronta: assim que um checkpoint for publicado, o botão{" "}
            <span className="font-semibold text-grafite">
              “Iniciar checkpoint”
            </span>{" "}
            é liberado e o resultado passa a contar no seu progresso.
          </p>
        </div>
      </Container>
    </>
  );
}
