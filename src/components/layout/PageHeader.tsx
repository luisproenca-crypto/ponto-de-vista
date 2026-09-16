import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

/** Cabeçalho padrão das páginas internas. */
export function PageHeader({
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <header className="border-b border-cinza bg-creme bg-topografia">
      <Container width="largo" className="py-12 sm:py-16">
        {backHref ? (
          <Link
            href={backHref}
            className="pdv-eyebrow inline-flex items-center gap-1.5 text-roxo transition-colors hover:text-roxo-escuro"
          >
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            {backLabel ?? "Voltar"}
          </Link>
        ) : null}

        {eyebrow ? (
          <p className={`pdv-eyebrow text-roxo ${backHref ? "mt-6" : ""}`}>
            {eyebrow}
          </p>
        ) : null}

        <h1 className="mt-3 font-display text-[2.1rem] font-semibold leading-[1.08] tracking-tight text-grafite sm:text-5xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-4 max-w-leitura text-[17px] leading-relaxed text-cinza-texto">
            {description}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
