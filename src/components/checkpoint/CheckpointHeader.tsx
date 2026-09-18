import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Checkpoint } from "@/lib/types";
import { Container } from "@/components/ui/Container";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/**
 * Cabeçalho editorial da página de checkpoint — componente irmão de
 * `LessonHeader` (que não é alterado). Nada de "01" ou "Semana 01" fica
 * fixo aqui: tudo vem do `Checkpoint` recebido, para servir aos
 * Checkpoints 01–10 igualmente.
 */
export function CheckpointHeader({
  checkpoint,
  description,
}: {
  checkpoint: Checkpoint;
  /** Frase de apresentação vinda dos dados (ex.: `content.intro`). */
  description?: string | null;
}) {
  return (
    <header className="border-b border-cinza bg-creme bg-topografia">
      <Container width="normal" className="py-10 sm:py-14">
        <Link
          href="/trilha"
          className="pdv-eyebrow inline-flex items-center gap-1.5 text-roxo transition-colors hover:text-roxo-escuro"
        >
          <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Trilha de estudos
        </Link>

        <p className="pdv-eyebrow mt-6 text-cinza-texto">
          Checkpoint · Semana {pad(checkpoint.weekNumber)}
        </p>

        <h1 className="mt-3 font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-grafite sm:text-5xl">
          {checkpoint.title}
        </h1>

        {description ? (
          <p className="mt-5 max-w-leitura font-display text-lg italic leading-snug text-roxo-escuro sm:text-xl">
            “{description}”
          </p>
        ) : null}
      </Container>
    </header>
  );
}
