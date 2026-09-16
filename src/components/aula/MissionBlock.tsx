import { Target } from "lucide-react";

/** 🎯 SUA MISSÃO — objetivo de aprendizagem da aula. */
export function MissionBlock({ text }: { text: string }) {
  return (
    <section
      aria-labelledby="sua-missao"
      className="rounded-card border border-laranja/30 bg-laranja-suave/70 p-6 sm:p-8"
    >
      <h2
        id="sua-missao"
        className="pdv-eyebrow flex items-center gap-2 text-laranja-escuro"
      >
        <Target className="h-4 w-4" aria-hidden="true" />
        Sua missão
      </h2>
      <p className="mt-4 max-w-leitura font-display text-lg leading-snug text-grafite sm:text-xl">
        {text}
      </p>
    </section>
  );
}
