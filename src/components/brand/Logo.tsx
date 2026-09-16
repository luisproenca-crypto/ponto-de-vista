/**
 * Marca gráfica do curso: um ponto de observação sobre linhas de latitude.
 * Desenhada em SVG para funcionar em qualquer tamanho e contraste.
 */
export function Logo({
  className = "h-8 w-8",
  tone = "roxo",
}: {
  className?: string;
  tone?: "roxo" | "branco";
}) {
  const stroke = tone === "branco" ? "#FFFFFF" : "#5B2A86";
  const dot = tone === "branco" ? "#2BB673" : "#2BB673";

  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="Ponto de Vista"
      fill="none"
    >
      <circle cx="20" cy="20" r="17.5" stroke={stroke} strokeWidth="1.6" />
      <ellipse cx="20" cy="20" rx="8" ry="17.5" stroke={stroke} strokeWidth="1.1" opacity="0.5" />
      <path d="M3 14.5h34M3 25.5h34" stroke={stroke} strokeWidth="1.1" opacity="0.5" />
      <path
        d="M20 11.5c-3.1 0-5.6 2.5-5.6 5.6 0 4.2 5.6 10.4 5.6 10.4s5.6-6.2 5.6-10.4c0-3.1-2.5-5.6-5.6-5.6Z"
        fill={dot}
      />
      <circle cx="20" cy="17.1" r="2.1" fill="#FFFFFF" />
    </svg>
  );
}
