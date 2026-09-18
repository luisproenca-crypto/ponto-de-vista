import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HelpCircle } from "lucide-react";
import { allCheckpoints, getCheckpoint, getWeek } from "@/data/course";
import { Container } from "@/components/ui/Container";
import { EmPreparacao } from "@/components/ui/EmPreparacao";
import { ActionLink } from "@/components/ui/ActionLink";
import { CheckpointHeader } from "@/components/checkpoint/CheckpointHeader";
import { CheckpointCompletion } from "@/components/checkpoint/CheckpointCompletion";
import { CheckpointScenarioBlock } from "@/components/checkpoint/CheckpointScenarioBlock";
import { CheckpointBeforeAfter } from "@/components/checkpoint/CheckpointBeforeAfter";
import { ConceptLens } from "@/components/aula/ConceptLens";
import { ConnectionInsight } from "@/components/aula/ConnectionInsight";
import { VestibularQuestion } from "@/components/aula/VestibularQuestion";

type Params = Promise<{ semana: string }>;

/**
 * Rota dinâmica do checkpoint — irmã de `/aulas/[semana]/[aula]`, mas
 * própria para `Checkpoint` (não modifica a rota das aulas).
 *
 * A renderização do conteúdo depende de `checkpoint.content` existir —
 * não de `checkpoint.status`. Isso permite testar esta rota diretamente
 * (com conteúdo provisório) sem alterar `status`/`href` em `course.ts`,
 * que continuam controlando a publicação real (botão da Trilha).
 */
export function generateStaticParams() {
  return allCheckpoints.map((checkpoint) => ({
    semana: checkpoint.weekSlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { semana } = await params;
  const checkpoint = getCheckpoint(semana);
  if (!checkpoint) return { title: "Checkpoint não encontrado" };

  return { title: checkpoint.title };
}

export default async function CheckpointPage({ params }: { params: Params }) {
  const { semana } = await params;
  const week = getWeek(semana);
  const checkpoint = getCheckpoint(semana);

  if (!week || !checkpoint) notFound();

  const conteudo = checkpoint.content;

  /* ---------- Checkpoint ainda sem conteúdo ---------- */
  if (!conteudo) {
    return (
      <>
        <CheckpointHeader checkpoint={checkpoint} />
        <Container width="normal" className="space-y-10 py-14">
          <EmPreparacao
            titulo="Conteúdo em preparação"
            descricao="Este checkpoint ainda está sendo produzido. Assim que for publicado, ele aparecerá aqui e na sua trilha."
          />
          <ActionLink href="/trilha" variant="secundario">
            Voltar para a trilha
          </ActionLink>
        </Container>
      </>
    );
  }

  /* ---------- Checkpoint com conteúdo ---------- */
  return (
    <>
      <CheckpointHeader checkpoint={checkpoint} description={conteudo.intro} />

      <Container width="normal" className="space-y-16 py-14 sm:space-y-20 sm:py-16">
        {conteudo.steps.map((step) => {
          switch (step.kind) {
            case "observation":
              return (
                <CheckpointScenarioBlock
                  key={step.id}
                  title={step.title}
                  scenario={conteudo.scenario}
                  questions={step.questions}
                />
              );

            case "cards":
              return (
                <ConceptLens
                  key={step.id}
                  eyebrow={step.eyebrow}
                  title={step.title}
                  subtitle={step.subtitle}
                  items={step.items}
                  highlight={step.highlight}
                  image={null}
                  hideImage
                />
              );

            case "flow":
              return (
                <ConnectionInsight
                  key={step.id}
                  block={{
                    title: step.title,
                    flow: step.flow,
                    highlight: step.highlight,
                    text: step.text,
                  }}
                />
              );

            case "questions":
              return (
                <section key={step.id} aria-labelledby={step.id}>
                  <h2
                    id={step.id}
                    className="flex items-center gap-3 font-display text-[1.75rem] leading-tight text-grafite sm:text-4xl"
                  >
                    <HelpCircle
                      className="h-6 w-6 shrink-0 text-roxo"
                      aria-hidden="true"
                      strokeWidth={1.8}
                    />
                    {step.title}
                  </h2>
                  <div className="mt-8 space-y-8">
                    {step.questions.map((questao, i) => (
                      <VestibularQuestion
                        key={questao.id}
                        question={questao}
                        title={`Questão ${i + 1} de ${step.questions.length}`}
                      />
                    ))}
                  </div>
                </section>
              );

            case "reflection":
              return (
                <CheckpointBeforeAfter
                  key={step.id}
                  title={step.title}
                  cards={step.cards}
                  closing={step.closing}
                />
              );

            default:
              return null;
          }
        })}

        <CheckpointCompletion
          checkpointId={checkpoint.id}
          question={conteudo.conclusion}
          celebrationMessage={conteudo.celebrationMessage}
        />
      </Container>
    </>
  );
}
