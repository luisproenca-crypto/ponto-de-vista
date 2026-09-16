import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { EmPreparacao } from "@/components/ui/EmPreparacao";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { allLessons, lessonHref } from "@/data/course";

export const metadata: Metadata = {
  title: "Materiais",
  description:
    "PDFs, listas e materiais complementares ligados às aulas do Ponto de Vista.",
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function MateriaisPage() {
  // Reúne todos os materiais declarados nas aulas.
  const materiais = allLessons.flatMap((lesson) =>
    lesson.resources.map((recurso) => ({ lesson, recurso })),
  );

  return (
    <>
      <PageHeader
        backHref="/central"
        backLabel="Central de Estudos"
        eyebrow="Apoio"
        title="MATERIAIS"
        description="Tudo o que acompanha as aulas: mapas, PDFs e listas. Os materiais aparecem aqui assim que são vinculados a uma aula."
      />

      <Container width="largo" className="py-12 sm:py-16">
        {materiais.length === 0 ? (
          <EmPreparacao descricao="Nenhum material foi cadastrado ainda. Eles serão publicados junto com as aulas." />
        ) : (
          <ul className="space-y-3">
            {materiais.map(({ lesson, recurso }) => {
              const disponivel = Boolean(recurso.href);
              return (
                <li key={recurso.id}>
                  <article className="pdv-card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-roxo-suave text-roxo">
                        <FileText className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h2 className="font-display text-[17px] leading-snug text-grafite">
                          {recurso.label}
                        </h2>
                        {recurso.description ? (
                          <p className="mt-1 text-sm text-cinza-texto">
                            {recurso.description}
                          </p>
                        ) : null}
                        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-cinza-medio">
                          Semana {pad(lesson.weekNumber)} · Aula{" "}
                          {pad(lesson.number)} ·{" "}
                          <Link
                            href={lessonHref(lesson)}
                            className="text-roxo underline underline-offset-2"
                          >
                            ir para a aula
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0">
                      {disponivel ? (
                        <a
                          href={recurso.href as string}
                          download
                          className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-roxo px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-roxo-escuro motion-reduce:transition-none"
                        >
                          <Download className="h-3.5 w-3.5" aria-hidden="true" />
                          Baixar
                        </a>
                      ) : (
                        <Badge tone="contorno">Em preparação</Badge>
                      )}
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        )}

        <p className="mt-10 text-sm text-cinza-texto">
          Para adicionar um material, envie o arquivo para{" "}
          <code className="font-mono text-[13px]">/public/assets/materiais/</code>{" "}
          e inclua o item em{" "}
          <code className="font-mono text-[13px]">resources</code> da aula, em{" "}
          <code className="font-mono text-[13px]">src/data/course.ts</code>.
        </p>
      </Container>
    </>
  );
}
