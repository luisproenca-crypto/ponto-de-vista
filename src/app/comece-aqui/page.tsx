import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal } from "@/components/ui/Reveal";
import { PillarCards } from "@/components/home/PillarCards";
import { MetodoPonto } from "@/components/home/MetodoPonto";
import { PacoImage } from "@/components/ui/PacoImage";
import { comeceAqui, ritmoSemanal } from "@/data/comece-aqui";

export const metadata: Metadata = {
  title: "Comece Aqui",
  description:
    "Entenda a filosofia, os três pilares e o método P.O.N.T.O. do Ponto de Vista antes de iniciar a trilha.",
};

/** Cabeçalho numerado das seções desta página. */
function SecaoNumerada({ numero, titulo }: { numero: string; titulo: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span
        aria-hidden="true"
        className="font-mono text-sm font-bold tracking-[0.1em] text-laranja"
      >
        {numero}
      </span>
      <h2 className="font-display text-[1.6rem] leading-tight tracking-tight text-grafite sm:text-3xl">
        {titulo}
      </h2>
    </div>
  );
}

export default function ComeceAquiPage() {
  return (
    <>
      <header className="border-b border-cinza bg-creme bg-topografia">
        <Container width="largo" className="py-14 sm:py-20">
          <p className="pdv-eyebrow text-roxo">Ponto de partida</p>
          <h1 className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.05] tracking-tight text-grafite sm:text-6xl">
            {comeceAqui.title}
          </h1>
          <p className="mt-5 max-w-leitura font-display text-lg text-cinza-texto sm:text-xl">
            “{comeceAqui.subtitle}”
          </p>
        </Container>
      </header>

      <Container width="largo" className="space-y-20 py-16 sm:space-y-24 sm:py-20">
        {/* 01 — Filosofia */}
        <Reveal>
          <section aria-labelledby="secao-01">
            <div id="secao-01">
              <SecaoNumerada
                numero={comeceAqui.filosofia.numero}
                titulo={comeceAqui.filosofia.titulo}
              />
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div>
                {comeceAqui.filosofia.paragrafos.map((p, i) => (
                  <p
                    key={i}
                    className="mt-4 max-w-leitura text-[17px] leading-relaxed text-grafite first:mt-0"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <aside className="rounded-card bg-roxo bg-topografia-clara p-7 text-white">
                {comeceAqui.filosofia.frases.map((frase, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "font-display text-xl leading-snug sm:text-2xl"
                        : "pdv-eyebrow mt-6 text-verde"
                    }
                  >
                    {i === 0 ? `“${frase}”` : frase}
                  </p>
                ))}
              </aside>
            </div>
          </section>
        </Reveal>

        {/* 02 — Pilares */}
        <Reveal>
          <section aria-labelledby="secao-02">
            <div id="secao-02">
              <SecaoNumerada
                numero={comeceAqui.pilares.numero}
                titulo={comeceAqui.pilares.titulo}
              />
            </div>
            <div className="mt-8">
              <PillarCards />
            </div>
          </section>
        </Reveal>

        {/* 03 — Método */}
        <Reveal>
          <section aria-labelledby="secao-03">
            <div id="secao-03">
              <SecaoNumerada
                numero={comeceAqui.metodo.numero}
                titulo={comeceAqui.metodo.titulo}
              />
            </div>
            <div className="mt-12">
              <MetodoPonto />
            </div>
          </section>
        </Reveal>

        {/* 04 — Sua semana */}
        <Reveal>
          <section aria-labelledby="secao-04">
            <div id="secao-04">
              <SecaoNumerada
                numero={comeceAqui.semana.numero}
                titulo={comeceAqui.semana.titulo}
              />
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ritmoSemanal.map((dia) => (
                <li key={dia.dia}>
                  <article className="pdv-card h-full p-5">
                    <p className="pdv-eyebrow text-cinza-texto">{dia.dia}</p>
                    <p aria-hidden="true" className="mt-4 text-2xl leading-none">
                      {dia.emoji}
                    </p>
                    <h3 className="mt-3 font-display text-lg leading-snug text-grafite">
                      {dia.nome}
                    </h3>
                    <p className="mt-3 inline-flex rounded-full bg-roxo-suave px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-roxo-escuro">
                      {dia.verbo}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* 05 — Primeira missão */}
        <Reveal>
          <section aria-labelledby="secao-05">
            <div id="secao-05">
              <SecaoNumerada
                numero={comeceAqui.missao.numero}
                titulo={comeceAqui.missao.titulo}
              />
            </div>

            <div className="mt-8 grid items-center gap-8 rounded-card border border-verde/30 bg-verde-suave/50 p-7 sm:p-10 md:grid-cols-[1fr_auto]">
              <div>
                <p className="max-w-leitura font-display text-xl leading-snug text-grafite sm:text-2xl">
                  Sua trilha já está organizada, uma semana de cada vez. Você só
                  precisa dar o primeiro passo.
                </p>
                <div className="mt-7">
                  <ActionLink
                    href="/trilha"
                    icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                  >
                    {comeceAqui.missao.botao}
                  </ActionLink>
                </div>
              </div>
              <div className="w-32 justify-self-start md:w-40 md:justify-self-end">
                <PacoImage variant="explorador" ratio="1 / 1" />
              </div>
            </div>
          </section>
        </Reveal>
      </Container>
    </>
  );
}
