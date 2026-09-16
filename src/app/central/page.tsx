import type { Metadata } from "next";
import { FileText, Flag, Map, ScanSearch } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { StudyResourceCard } from "@/components/central/StudyResourceCard";
import { Reveal } from "@/components/ui/Reveal";
import { course, allCheckpoints } from "@/data/course";
import { exams } from "@/data/raio-x";

export const metadata: Metadata = {
  title: "Central de Estudos",
  description:
    "Mapas da semana, checkpoints, raio-x das provas e materiais de apoio do Ponto de Vista.",
};

export default function CentralPage() {
  const semanasComMapa = course.filter((w) => w.title !== null).length;

  return (
    <>
      <header className="border-b border-cinza bg-creme bg-topografia">
        <Container width="largo" className="py-14 sm:py-20">
          <p className="pdv-eyebrow text-roxo">Apoio ao estudo</p>
          <h1 className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.05] tracking-tight text-grafite sm:text-6xl">
            CENTRAL DE ESTUDOS
          </h1>
          <p className="mt-5 max-w-leitura text-[17px] leading-relaxed text-cinza-texto">
            Tudo o que apoia a trilha em um só lugar: sínteses visuais, testes de
            fim de semana, leitura de provas e materiais.
          </p>
        </Container>
      </header>

      <Container width="largo" className="py-14 sm:py-16">
        <Reveal>
          <ul className="grid gap-5 sm:grid-cols-2">
            <li>
              <StudyResourceCard
                href="/central/mapas-da-semana"
                title="MAPAS DA SEMANA"
                description="A síntese visual de cada semana em uma página — para revisar rápido antes da prova."
                icon={<Map className="h-6 w-6" aria-hidden="true" strokeWidth={1.7} />}
                meta={`${semanasComMapa} semanas cadastradas`}
              />
            </li>
            <li>
              <StudyResourceCard
                href="/central/checkpoints"
                title="CHECKPOINTS"
                description="O teste de domingo que fecha cada semana e mostra o que ainda precisa ser retomado."
                icon={<Flag className="h-6 w-6" aria-hidden="true" strokeWidth={1.7} />}
                meta={`${allCheckpoints.length} checkpoints previstos`}
              />
            </li>
            <li>
              <StudyResourceCard
                href="/central/raio-x"
                title="RAIO-X DAS PROVAS"
                description="Como cada banca cobra: conceito, pista, armadilha e transferência."
                icon={
                  <ScanSearch className="h-6 w-6" aria-hidden="true" strokeWidth={1.7} />
                }
                meta={`${exams.length} provas mapeadas`}
              />
            </li>
            <li>
              <StudyResourceCard
                href="/central/materiais"
                title="MATERIAIS"
                description="PDFs, listas e materiais complementares ligados às aulas da trilha."
                icon={
                  <FileText className="h-6 w-6" aria-hidden="true" strokeWidth={1.7} />
                }
                meta="Atualizado a cada semana"
              />
            </li>
          </ul>
        </Reveal>
      </Container>
    </>
  );
}
