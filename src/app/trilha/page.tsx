import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { WeeklyTrail } from "@/components/trilha/WeeklyTrail";
import { CourseProgress } from "@/components/progress/CourseProgress";
import { PacoImage } from "@/components/ui/PacoImage";
import { TOTAL_WEEKS } from "@/data/course";

export const metadata: Metadata = {
  title: "Trilha de Estudos",
  description:
    "Seu caminho pelo Ponto de Vista, uma semana de cada vez: aulas, checkpoints e progresso.",
};

export default function TrilhaPage() {
  return (
    <>
      <header className="border-b border-cinza bg-creme bg-topografia">
        <Container width="largo" className="py-14 sm:py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="pdv-eyebrow text-roxo">
                {TOTAL_WEEKS} semanas · Intensivo 2026
              </p>
              <h1 className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.05] tracking-tight text-grafite sm:text-6xl">
                TRILHA DE ESTUDOS
              </h1>
              <p className="mt-5 max-w-leitura font-display text-lg text-cinza-texto sm:text-xl">
                “Seu caminho pelo Ponto de Vista, uma semana de cada vez.”
              </p>
              <p className="mt-5 max-w-leitura text-[17px] leading-relaxed text-grafite">
                “Você não precisa decidir o que estudar. Eu organizei o caminho.
                Você só precisa continuar.”
              </p>
            </div>

            <div className="w-28 md:w-40">
              <PacoImage variant="trilha" ratio="1 / 1" />
            </div>
          </div>
        </Container>
      </header>

      <Container width="largo" className="py-12 sm:py-16">
        <CourseProgress compacto />

        <div className="mt-12">
          <h2 className="sr-only">Semanas da trilha</h2>
          <WeeklyTrail />
        </div>

        <p className="mt-10 text-center text-sm text-cinza-texto">
          As semanas ainda não cadastradas aparecem como{" "}
          <span className="font-semibold">“Conteúdo em preparação”</span> e serão
          liberadas ao longo do curso.
        </p>
      </Container>
    </>
  );
}
