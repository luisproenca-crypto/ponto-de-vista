import type { Metadata } from "next";
import { Download, Eye, Map } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { AssetImage } from "@/components/ui/AssetImage";
import { Badge } from "@/components/ui/Badge";
import { course } from "@/data/course";

export const metadata: Metadata = {
  title: "Mapas da Semana",
  description:
    "A síntese visual de cada semana do Ponto de Vista, para visualizar ou baixar em PDF.",
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function MapasDaSemanaPage() {
  return (
    <>
      <PageHeader
        backHref="/central"
        backLabel="Central de Estudos"
        eyebrow="Síntese visual"
        title="MAPAS DA SEMANA"
        description="Cada semana ganha um mapa: uma página que reúne conceitos, conexões e perguntas-chave. Use para revisar rápido."
      />

      <Container width="largo" className="py-12 sm:py-16">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {course.map((week) => {
            const disponivel = Boolean(week.map.pdfHref);
            return (
              <li key={week.id}>
                <article className="pdv-card flex h-full flex-col overflow-hidden">
                  <AssetImage
                    src={week.map.previewSrc}
                    alt={`Pré-visualização do mapa da semana ${pad(week.number)}`}
                    ratio="4 / 3"
                    rounded={false}
                    placeholderLabel="Mapa da semana"
                  />

                  <div className="flex flex-1 flex-col p-5">
                    <p className="pdv-eyebrow flex items-center gap-2 text-roxo">
                      <Map className="h-3.5 w-3.5" aria-hidden="true" />
                      Mapa da semana {pad(week.number)}
                    </p>
                    <h2 className="mt-2 font-display text-lg leading-snug text-grafite">
                      {week.title ?? "Conteúdo em preparação"}
                    </h2>

                    <div className="mt-3">
                      <Badge tone={disponivel ? "verde" : "contorno"}>
                        {disponivel ? "Disponível" : "Em preparação"}
                      </Badge>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2 pt-1">
                      {disponivel ? (
                        <>
                          <a
                            href={week.map.pdfHref as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-roxo/30 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-roxo-escuro transition-colors hover:bg-roxo-suave motion-reduce:transition-none"
                          >
                            <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                            Visualizar
                          </a>
                          <a
                            href={week.map.pdfHref as string}
                            download
                            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-roxo px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-roxo-escuro motion-reduce:transition-none"
                          >
                            <Download className="h-3.5 w-3.5" aria-hidden="true" />
                            Baixar PDF
                          </a>
                        </>
                      ) : (
                        <>
                          <span className="inline-flex min-h-[44px] cursor-not-allowed items-center gap-2 rounded-full border border-cinza px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-cinza-medio">
                            <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                            Visualizar
                          </span>
                          <span className="inline-flex min-h-[44px] cursor-not-allowed items-center gap-2 rounded-full border border-cinza px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-cinza-medio">
                            <Download className="h-3.5 w-3.5" aria-hidden="true" />
                            Baixar PDF
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-sm text-cinza-texto">
          Para publicar um mapa, envie o PDF para{" "}
          <code className="font-mono text-[13px]">/public/assets/mapas/</code> e
          preencha <code className="font-mono text-[13px]">pdfHref</code> da
          semana em <code className="font-mono text-[13px]">src/data/course.ts</code>.
        </p>
      </Container>
    </>
  );
}
