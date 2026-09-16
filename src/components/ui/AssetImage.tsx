"use client";

import { useEffect, useRef, useState } from "react";
import { Compass, ImageIcon } from "lucide-react";

/**
 * Imagem do acervo do curso que NUNCA quebra o layout.
 *
 * Como funciona
 *   • O espaço é sempre reservado pela proporção (`ratio`), então nada
 *     "pula" na tela quando a imagem carrega.
 *   • Enquanto o arquivo não carrega — ou se ele simplesmente não existe
 *     em /public — é o placeholder que aparece, já com o caminho
 *     esperado do arquivo.
 *   • Quando a imagem carrega com sucesso, o placeholder é removido da
 *     renderização (não apenas coberto): PNGs com transparência não podem
 *     deixar o texto do placeholder "vazar" por trás.
 *
 * Usamos <img> (e não next/image) para poder detectar a falha de
 * carregamento. Quando todas as imagens estiverem no lugar, é possível
 * migrar para next/image sem alterar nenhuma página.
 */
export function AssetImage({
  src,
  alt,
  ratio = "16 / 9",
  className = "",
  placeholderLabel = "Imagem do curso",
  rounded = true,
  objectFit = "cover",
  priority = false,
}: {
  src: string | null;
  alt: string;
  /** Proporção CSS, ex.: "16 / 9", "4 / 3", "1 / 1" */
  ratio?: string;
  className?: string;
  placeholderLabel?: string;
  rounded?: boolean;
  objectFit?: "cover" | "contain";
  /** `true` carrega a imagem imediatamente (use no topo da página). */
  priority?: boolean;
}) {
  const [carregada, setCarregada] = useState(false);
  const [falhou, setFalhou] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  /**
   * O navegador pode terminar de baixar a imagem (ex.: já em cache) antes
   * de o React religar o `onLoad` na hidratação — nesse caso o evento
   * nunca dispara. Este efeito cobre essa corrida checando `complete`
   * assim que o elemento existe.
   */
  useEffect(() => {
    if (!carregada && imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setCarregada(true);
    }
  }, [carregada]);

  const radius = rounded ? "rounded-card" : "";
  const temImagem = Boolean(src) && !falhou;
  const mostrarPlaceholder = !(temImagem && carregada);
  const ehPaco = placeholderLabel.toLowerCase().includes("paco");

  return (
    <div
      style={{ aspectRatio: ratio }}
      className={`relative w-full overflow-hidden ${radius} ${className}`}
    >
      {/* Placeholder — só existe no DOM enquanto a imagem não carregou */}
      {mostrarPlaceholder ? (
        <div
          role="img"
          aria-label={`${placeholderLabel} (imagem ainda não disponível)`}
          className={`absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-roxo/30 bg-creme bg-topografia p-4 text-center ${radius}`}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-roxo shadow-suave">
            {ehPaco ? (
              <Compass className="h-5 w-5" aria-hidden="true" />
            ) : (
              <ImageIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </span>
          <span className="font-display text-[15px] leading-tight text-roxo-escuro">
            {placeholderLabel}
          </span>
          {src ? (
            <code className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap px-2 font-mono text-[10px] text-cinza-texto">
              {src}
            </code>
          ) : null}
        </div>
      ) : null}

      {/* Imagem real */}
      {temImagem ? (
        <img
          ref={imgRef}
          src={src as string}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setCarregada(true)}
          onError={() => setFalhou(true)}
          className={`absolute inset-0 h-full w-full transition-opacity duration-300 motion-reduce:transition-none ${
            objectFit === "contain" ? "object-contain" : "object-cover"
          } ${radius} ${carregada ? "opacity-100" : "opacity-0"}`}
        />
      ) : null}
    </div>
  );
}
