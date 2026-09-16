import { PlayCircle } from "lucide-react";
import { toYouTubeEmbed } from "@/lib/youtube";

/**
 * Player de videoaula.
 * - Proporção 16:9 em qualquer tela.
 * - Sem autoplay.
 * - Se ainda não houver URL, mostra um placeholder elegante no mesmo espaço,
 *   de modo que o layout da aula não muda quando o vídeo for publicado.
 *
 * Basta preencher `videoUrl` da aula em src/data/course.ts.
 */
export function VideoLesson({
  url,
  title,
}: {
  url: string | null;
  title: string;
}) {
  const embed = toYouTubeEmbed(url);

  if (!embed) {
    return (
      <div
        className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-card border border-dashed border-roxo/30 bg-creme bg-topografia p-6 text-center"
        role="img"
        aria-label="Videoaula ainda não disponível"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-roxo shadow-suave">
          <PlayCircle className="h-6 w-6" aria-hidden="true" strokeWidth={1.6} />
        </span>
        <p className="font-display text-lg text-roxo-escuro">
          Videoaula em preparação
        </p>
        <p className="max-w-sm text-sm text-cinza-texto">
          O vídeo desta aula será publicado aqui. Enquanto isso, você já pode
          seguir com as demais etapas.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-card border border-cinza bg-grafite shadow-suave">
      <div className="relative aspect-video w-full">
        <iframe
          src={embed}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
