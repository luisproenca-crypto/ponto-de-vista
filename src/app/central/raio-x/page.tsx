import type { Metadata } from "next";
import { ScanSearch } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { EmPreparacao } from "@/components/ui/EmPreparacao";
import { exams, raioXSteps } from "@/data/raio-x";

export const metadata: Metadata = {
  title: "Raio-X das Provas",
  description:
    "Como cada banca cobra: conceito, pista, armadilha e transferência — o método Raio-X Ponto de Vista.",
};

export default function RaioXPage() {
  return (
    <>
      <PageHeader
        backHref="/central"
        backLabel="Central de Estudos"
        eyebrow="Leitura de provas"
        title="RAIO-X PONTO DE VISTA"
        description="Toda questão pode ser lida em quatro camadas. É isso que o Raio-X treina."
      />

      <Container width="largo" className="py-12 sm:py-16">
        {/* Metodologia */}
        <section aria-labelledby="metodologia">
          <h2
            id="metodologia"
            className="flex items-center gap-3 font-display text-2xl leading-tight text-grafite sm:text-3xl"
          >
            <ScanSearch
              className="h-6 w-6 shrink-0 text-roxo"
              aria-hidden="true"
              strokeWidth={1.7}
            />
            As quatro camadas
          </h2>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {raioXSteps.map((etapa, i) => (
              <li key={etapa.id}>
                <article className="pdv-card h-full p-5">
                  <span
                    aria-hidden="true"
                    className="pdv-coord block text-laranja"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-roxo-escuro">
                    {etapa.name}
                  </h3>
                  <div className="mt-4">
                    {etapa.description ? (
                      <p className="text-[15px] leading-relaxed text-cinza-texto">
                        {etapa.description}
                      </p>
                    ) : (
                      <EmPreparacao compacto />
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        {/* Provas */}
        <section aria-labelledby="provas" className="mt-16">
          <h2
            id="provas"
            className="font-display text-2xl leading-tight text-grafite sm:text-3xl"
          >
            Provas mapeadas
          </h2>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {exams.map((prova) => (
              <li key={prova.id}>
                <article className="pdv-card flex h-full flex-col justify-between p-6">
                  <div>
                    <p className="font-display text-2xl leading-none text-grafite">
                      {prova.exam}
                    </p>
                    <p className="pdv-coord mt-2">{prova.year}</p>
                  </div>
                  <div className="mt-6">
                    <Badge tone={prova.status === "disponivel" ? "verde" : "contorno"}>
                      {prova.status === "disponivel" ? "Disponível" : "Em breve"}
                    </Badge>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}
