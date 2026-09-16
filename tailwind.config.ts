import type { Config } from "tailwindcss";

/**
 * Identidade visual PONTO DE VISTA
 * ---------------------------------
 * Roxo   = identidade / conhecimento
 * Verde  = progresso / conexão / descoberta
 * Laranja= atenção / ação / pergunta
 * Preto e branco = base visual
 *
 * As variantes "-escuro" existem para uso em TEXTO sobre fundos claros,
 * garantindo contraste AA (as cores puras da marca são usadas em áreas
 * de preenchimento, ícones grandes e indicadores).
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        roxo: {
          DEFAULT: "#5B2A86",
          escuro: "#3F1C5E",
          claro: "#7C4AA8",
          suave: "#F2ECF8",
        },
        verde: {
          DEFAULT: "#2BB673",
          escuro: "#1B7A4D",
          suave: "#E8F7F0",
        },
        laranja: {
          DEFAULT: "#F28C28",
          escuro: "#9A5210",
          suave: "#FDF1E3",
        },
        grafite: "#121212",
        cinza: {
          DEFAULT: "#EAEAEA",
          medio: "#9A9A9A",
          texto: "#5A5A5A",
        },
        creme: "#FBF8F3",
      },
      fontFamily: {
        sans: ["var(--font-corpo)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      maxWidth: {
        leitura: "68ch",
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        suave: "0 1px 2px rgba(18,18,18,0.04), 0 8px 24px -12px rgba(18,18,18,0.12)",
        cartao: "0 1px 2px rgba(18,18,18,0.05), 0 18px 40px -24px rgba(91,42,134,0.28)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "pop-suave": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "60%": { opacity: "1", transform: "scale(1.02)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 520ms cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 400ms ease both",
        "pop-suave": "pop-suave 380ms cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
