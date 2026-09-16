/**
 * Citação em destaque — usada para as frases-guia do curso.
 * `variant="anotacao"` imita uma anotação manuscrita na margem.
 */
export function QuoteBlock({
  children,
  author,
  variant = "destaque",
}: {
  children: string;
  author?: string;
  variant?: "destaque" | "anotacao";
}) {
  if (variant === "anotacao") {
    return (
      <aside className="relative rounded-card border border-dashed border-laranja/50 bg-laranja-suave/60 px-5 py-4">
        <p className="font-display text-base italic leading-relaxed text-grafite sm:text-lg">
          {children}
        </p>
        {author ? (
          <p className="pdv-eyebrow mt-2 text-laranja-escuro">— {author}</p>
        ) : null}
      </aside>
    );
  }

  return (
    <blockquote className="relative overflow-hidden rounded-card bg-roxo bg-topografia-clara px-6 py-8 sm:px-10 sm:py-10">
      <p className="relative font-display text-xl leading-snug text-white sm:text-2xl">
        {children}
      </p>
      {author ? (
        <footer className="pdv-eyebrow relative mt-4 text-verde">
          — {author}
        </footer>
      ) : null}
    </blockquote>
  );
}
