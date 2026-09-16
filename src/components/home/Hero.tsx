import { ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";
import { ContinuarEstudando } from "@/components/layout/ContinuarEstudando";
import { AssetImage } from "@/components/ui/AssetImage";
import { PacoImage } from "@/components/ui/PacoImage";
import { brandImages, site } from "@/data/site";

/**
 * HERO da página inicial.
 * Hierarquia visual: Prof. Luis como autoridade principal, Paco como co-guia.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-roxo-escuro bg-topografia-clara text-white">
      {/* Coordenadas decorativas (puramente estéticas) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-24 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/20 lg:block"
      >
        22°54′S 47°03′W
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 right-8 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/20 lg:block"
      >
        ESCALA 1 : 10 SEMANAS
      </span>

      <Container width="largo" className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="animate-fade-up">
            <p className="pdv-eyebrow inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-white/70">
              <Compass className="h-3.5 w-3.5" aria-hidden="true" />
              {site.edition}
            </p>

            <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {site.name}
            </h1>

            <p className="mt-6 max-w-leitura font-display text-xl leading-snug text-white/85 sm:text-2xl">
              “{site.tagline}”
            </p>

            <p className="pdv-eyebrow mt-6 text-verde">{site.motto}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ContinuarEstudando
                variant="claro"
                label="Continuar minha jornada"
                className="min-h-[48px] px-6 py-3"
              />
              <ActionLink
                href="/trilha"
                variant="claro"
                icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
              >
                Ver trilha de estudos
              </ActionLink>
            </div>

            <p className="pdv-eyebrow mt-8 text-white/50">
              {site.teacher} &amp; {site.mascot} · {site.disciplines}
            </p>
          </div>

          {/* Bloco visual: Prof. Luis (autoridade) + Paco (co-guia) */}
          <div className="relative animate-fade-up delay-2">
            <div className="rounded-card border border-white/15 bg-white/5 p-3 shadow-cartao">
              <AssetImage
                src={brandImages.profLuis.src}
                alt={brandImages.profLuis.alt}
                ratio="4 / 5"
                placeholderLabel="Foto do Prof. Luis"
                priority
              />
              <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-3">
                <div>
                  <p className="font-display text-base font-semibold text-white">
                    {site.teacher}
                  </p>
                  <p className="pdv-eyebrow mt-1 text-white/50">
                    Professor responsável
                  </p>
                </div>
                <span className="pdv-coord text-white/35">01</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 w-28 rounded-card border border-white/15 bg-white p-2 shadow-cartao sm:-left-8 sm:w-36">
              <PacoImage variant="explorador" ratio="1 / 1" priority />
              <p className="pdv-eyebrow mt-1 px-1 pb-1 text-center text-roxo">
                Co-guia
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
