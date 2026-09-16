import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { PillarCards } from "@/components/home/PillarCards";
import { MetodoPonto } from "@/components/home/MetodoPonto";
import { CourseProgress } from "@/components/progress/CourseProgress";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal } from "@/components/ui/Reveal";
import { PacoImage } from "@/components/ui/PacoImage";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Continue sua jornada */}
      <section className="bg-white py-16 sm:py-20">
        <Container width="largo">
          <Reveal>
            <SectionHeading
              eyebrow="Onde você parou"
              title="Continue sua jornada"
              subtitle="Você não precisa lembrar de nada: a trilha guarda o seu caminho."
            />
          </Reveal>
          <Reveal delay={80} className="mt-8">
            <CourseProgress />
          </Reveal>
        </Container>
      </section>

      {/* Os três pilares */}
      <section className="border-y border-cinza bg-creme bg-topografia py-16 sm:py-20">
        <Container width="largo">
          <Reveal>
            <SectionHeading
              eyebrow="Os três pilares"
              title="Três formas de olhar para o mesmo mundo"
              subtitle="Cada semana percorre os três pilares — e eles se conectam."
            />
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <PillarCards />
          </Reveal>
        </Container>
      </section>

      {/* Método P.O.N.T.O. */}
      <section className="bg-white py-16 sm:py-20">
        <Container width="largo">
          <Reveal>
            <SectionHeading
              eyebrow="Método"
              title="O MÉTODO P.O.N.T.O."
              subtitle="A mesma sequência em toda aula: da pergunta à aplicação."
            />
          </Reveal>
          <Reveal delay={80} className="mt-12">
            <MetodoPonto />
          </Reveal>
        </Container>
      </section>

      {/* Chamada final */}
      <section className="bg-grafite bg-topografia-clara py-16 text-white sm:py-20">
        <Container width="largo">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="pdv-eyebrow text-verde">{site.motto}</p>
              <h2 className="mt-4 max-w-2xl font-display text-[1.9rem] leading-tight sm:text-4xl">
                Antes de começar, entenda como o Ponto de Vista funciona.
              </h2>
              <p className="mt-4 max-w-leitura text-white/75">
                A página “Comece Aqui” apresenta a filosofia do curso, os três
                pilares, o método e como será a sua semana.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ActionLink
                  href="/comece-aqui"
                  variant="claro"
                  icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                >
                  Comece aqui
                </ActionLink>
                <ActionLink href="/trilha" variant="claro">
                  Ver a trilha
                </ActionLink>
              </div>
            </div>

            <div className="w-40 justify-self-start md:w-52 md:justify-self-end">
              <PacoImage variant="trilha" ratio="1 / 1" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
