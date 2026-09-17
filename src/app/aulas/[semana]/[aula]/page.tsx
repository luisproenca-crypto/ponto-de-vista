import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Play } from "lucide-react";
import {
  allLessons,
  getAdjacentLessons,
  getLesson,
  getWeek,
} from "@/data/course";
import { getPillar } from "@/data/pillars";
import { Container } from "@/components/ui/Container";
import { EmPreparacao } from "@/components/ui/EmPreparacao";
import { ActionLink } from "@/components/ui/ActionLink";
import { LessonHeader } from "@/components/aula/LessonHeader";
import { MissionBlock } from "@/components/aula/MissionBlock";
import { PacoInsight } from "@/components/aula/PacoInsight";
import { HypothesisCards } from "@/components/aula/HypothesisCards";
import { ConceptLens } from "@/components/aula/ConceptLens";
import { LookAgain } from "@/components/aula/LookAgain";
import { ConnectionInsight } from "@/components/aula/ConnectionInsight";
import { VideoLesson } from "@/components/aula/VideoLesson";
import { ConceptAccordion } from "@/components/aula/ConceptAccordion";
import { ApplicationCase } from "@/components/aula/ApplicationCase";
import { DeepDiveAccordion } from "@/components/aula/DeepDiveAccordion";
import { BrazilConnections } from "@/components/aula/BrazilConnections";
import { ExamFormat } from "@/components/aula/ExamFormat";
import { VestibularQuestion } from "@/components/aula/VestibularQuestion";
import { LessonCompletion } from "@/components/aula/LessonCompletion";
import { PreviousNextLesson } from "@/components/aula/PreviousNextLesson";

type Params = Promise<{ semana: string; aula: string }>;

/** Gera todas as rotas de aula em tempo de build. */
export function generateStaticParams() {
  return allLessons.map((lesson) => ({
    semana: lesson.weekSlug,
    aula: lesson.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { semana, aula } = await params;
  const lesson = getLesson(semana, aula);
  if (!lesson) return { title: "Aula não encontrada" };

  const numero = String(lesson.number).padStart(2, "0");
  const titulo = lesson.title
    ? `Aula ${numero} — ${lesson.title}`
    : `Aula ${numero} — conteúdo em preparação`;

  return {
    title: titulo,
    description:
      lesson.subtitle ?? lesson.description ?? getPillar(lesson.pillar).description,
  };
}

export default async function AulaPage({ params }: { params: Params }) {
  const { semana, aula } = await params;
  const week = getWeek(semana);
  const lesson = getLesson(semana, aula);

  if (!week || !lesson) notFound();

  const { previous, next } = getAdjacentLessons(lesson.id);
  const conteudo = lesson.content;

  /* ---------- Aula ainda não publicada ---------- */
  if (lesson.status !== "publicada" || !conteudo) {
    return (
      <>
        <LessonHeader lesson={lesson} />
        <Container width="normal" className="space-y-10 py-14">
          <EmPreparacao
            titulo="Conteúdo em preparação"
            descricao="Esta aula ainda está sendo produzida. Assim que for publicada, ela aparecerá aqui e na sua trilha — o seu progresso nas demais aulas continua salvo."
          />
          <ActionLink href="/trilha" variant="secundario">
            Voltar para a trilha
          </ActionLink>
          <PreviousNextLesson previous={previous} next={next} />
        </Container>
      </>
    );
  }

  /* ---------- Aula publicada ---------- */
  return (
    <>
      <LessonHeader lesson={lesson} />

      <Container width="normal" className="space-y-16 py-14 sm:space-y-20 sm:py-16">
        {/* 🎯 Sua missão */}
        <MissionBlock text={conteudo.mission} title={conteudo.missionTitle} />

        {/* O olhar do Paco */}
        {conteudo.observation ? (
          <PacoInsight block={conteudo.observation} imageId="imagem-observacao" />
        ) : null}

        {/* O olhar do Paco — variante de provocação/hipótese */}
        {conteudo.hypothesis ? (
          <HypothesisCards block={conteudo.hypothesis} />
        ) : null}

        {/* Bloco de conexão simples (ex.: "E se fossem a mesma história?") */}
        {conteudo.connection ? (
          <ConnectionInsight block={conteudo.connection} />
        ) : null}

        {/* Dê nome ao que você viu — as cinco lentes */}
        {conteudo.lenses ? (
          <ConceptLens
            title={conteudo.lenses.title}
            subtitle={conteudo.lenses.subtitle}
            items={conteudo.lenses.items}
            highlight={conteudo.lenses.highlight}
            image={conteudo.lenses.image}
          />
        ) : null}

        {/* Agora olhe de novo */}
        {conteudo.lookAgain ? (
          <LookAgain
            title={conteudo.lookAgain.title}
            intro={conteudo.lookAgain.intro}
            items={conteudo.lookAgain.items}
            closingQuote={conteudo.lookAgain.closingQuote}
            image={conteudo.observation?.image ?? null}
          />
        ) : null}

        {/* Aplicação a um caso concreto (ex.: "AGORA CONECTE") */}
        {conteudo.application ? (
          <ApplicationCase block={conteudo.application} />
        ) : null}

        {/* Videoaula */}
        {conteudo.video ? (
          <section aria-labelledby="videoaula">
            <h2
              id="videoaula"
              className="flex items-center gap-3 font-display text-[1.75rem] leading-tight text-grafite sm:text-4xl"
            >
              <Play
                className="h-6 w-6 shrink-0 text-roxo"
                aria-hidden="true"
                strokeWidth={1.8}
              />
              {conteudo.video.title}
            </h2>
            {conteudo.video.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mt-4 max-w-leitura text-[17px] leading-relaxed text-grafite"
              >
                “{p}”
              </p>
            ))}
            <div className="mt-8">
              <VideoLesson
                url={lesson.videoUrl}
                title={`Videoaula — ${lesson.title ?? "Ponto de Vista"}`}
              />
            </div>
          </section>
        ) : null}

        {/* Dê precisão ao seu olhar */}
        {conteudo.concepts ? (
          <ConceptAccordion
            title={conteudo.concepts.title}
            items={conteudo.concepts.items}
          />
        ) : null}

        {/* Aprofundamento em accordions temáticos */}
        {conteudo.deepDive ? <DeepDiveAccordion block={conteudo.deepDive} /> : null}

        {/* E o Brasil? */}
        {conteudo.brazilConnections ? (
          <BrazilConnections block={conteudo.brazilConnections} />
        ) : null}

        {/* Como isso aparece na prova? */}
        {conteudo.examFormat ? <ExamFormat block={conteudo.examFormat} /> : null}

        {/* Questão de aplicação */}
        {conteudo.question ? (
          <VestibularQuestion question={conteudo.question} />
        ) : null}

        {/* Missão cumprida? */}
        <LessonCompletion
          lessonId={lesson.id}
          question={conteudo.missionCheck}
          celebrationMessage={conteudo.completionMessage}
        />

        {/* Navegação entre aulas */}
        <PreviousNextLesson previous={previous} next={next} />
      </Container>
    </>
  );
}
