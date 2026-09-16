/**
 * Converte qualquer formato de link do YouTube em URL de incorporação.
 * Aceita:
 *   https://www.youtube.com/watch?v=ID
 *   https://youtu.be/ID
 *   https://www.youtube.com/embed/ID
 *   https://www.youtube.com/shorts/ID
 *   ID puro (11 caracteres)
 *
 * Retorna `null` quando não consegue identificar o vídeo — nesse caso o
 * componente VideoLesson exibe o placeholder.
 */
export function toYouTubeEmbed(url: string | null | undefined): string | null {
  if (!url) return null;
  const valor = url.trim();
  if (!valor) return null;

  // ID puro
  if (/^[\w-]{11}$/.test(valor)) {
    return `https://www.youtube-nocookie.com/embed/${valor}`;
  }

  try {
    const parsed = new URL(valor);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.slice(1).split("/")[0];
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }

    if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
      const v = parsed.searchParams.get("v");
      if (v) return `https://www.youtube-nocookie.com/embed/${v}`;

      const partes = parsed.pathname.split("/").filter(Boolean);
      const idx = partes.findIndex((p) => p === "embed" || p === "shorts" || p === "live");
      if (idx >= 0 && partes[idx + 1]) {
        return `https://www.youtube-nocookie.com/embed/${partes[idx + 1]}`;
      }
    }
  } catch {
    return null;
  }

  return null;
}
