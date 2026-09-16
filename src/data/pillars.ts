import type { Pillar, PillarId } from "@/lib/types";

/**
 * Os três pilares do curso.
 * Textos definidos pelo Prof. Luis — não alterar sem orientação pedagógica.
 */
export const pillars: Pillar[] = [
  {
    id: "geografia",
    name: "Geografia Essencial",
    verb: "ENTENDA",
    description:
      "Os conceitos e ferramentas necessários para interpretar o espaço geográfico.",
    weekday: "Segunda",
    icon: "Globe2",
    accent: "roxo",
  },
  {
    id: "geopolitica",
    name: "Geopolítica & Atualidades",
    verb: "CONECTE",
    description:
      "Conecte acontecimentos contemporâneos aos processos geográficos, econômicos e políticos que ajudam a explicá-los.",
    weekday: "Quarta",
    icon: "Network",
    accent: "verde",
  },
  {
    id: "politica",
    name: "Política & Cidadania",
    verb: "COMPREENDA",
    description:
      "Entenda instituições, conceitos políticos e formas de participação na sociedade sem orientação político-partidária.",
    weekday: "Sexta",
    icon: "Landmark",
    accent: "laranja",
  },
];

export const pillarsById: Record<PillarId, Pillar> = pillars.reduce(
  (acc, pillar) => {
    acc[pillar.id] = pillar;
    return acc;
  },
  {} as Record<PillarId, Pillar>,
);

export function getPillar(id: PillarId): Pillar {
  return pillarsById[id];
}
