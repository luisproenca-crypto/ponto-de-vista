import { AssetImage } from "@/components/ui/AssetImage";

/**
 * Espaço reservado para as artes já existentes do Professor Paco.
 * Envie os arquivos para /public/assets/paco/ com estes nomes:
 *   paco-explorador.png · paco-lupa.png · paco-estudando.png
 *   paco-checkpoint.png · paco-trilha.png
 *
 * Enquanto os arquivos não existirem, aparece o placeholder
 * "Imagem do Professor Paco" sem quebrar o layout.
 */
export function PacoImage({
  variant = "explorador",
  alt,
  ratio = "1 / 1",
  className = "",
  priority = false,
}: {
  variant?: "explorador" | "lupa" | "estudando" | "checkpoint" | "trilha";
  alt?: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <AssetImage
      src={`/assets/paco/paco-${variant}.png`}
      alt={alt ?? "Professor Paco, mascote pedagógico do Ponto de Vista"}
      ratio={ratio}
      objectFit="contain"
      placeholderLabel="Imagem do Professor Paco"
      className={className}
      priority={priority}
    />
  );
}
