/**
 * Constantes gerais do site: nome, frases da marca, navegação e contatos.
 * Altere aqui para mudar títulos e links em todas as páginas.
 */

export const site = {
  name: "PONTO DE VISTA",
  edition: "Intensivo Vestibulares 2026",
  teacher: "Prof. Luis",
  mascot: "Professor Paco",
  tagline:
    "Entender o mundo para conquistar a prova e participar da realidade.",
  motto: "CONSTRUA SEU PONTO DE VISTA.",
  disciplines: "Geografia • Geopolítica • Atualidades • Formação Política",
  accessUntil: "15 de janeiro de 2027",
  copyright: "© 2026 Ponto de Vista. Todos os direitos reservados.",
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Comece Aqui", href: "/comece-aqui" },
  { label: "Trilha de Estudos", href: "/trilha" },
  { label: "Central de Estudos", href: "/central" },
  { label: "Comunidade", href: "/comunidade" },
  { label: "Ajuda", href: "/ajuda" },
];

/**
 * Endereço público do site, usado nos metadados (Open Graph).
 * Defina NEXT_PUBLIC_SITE_URL na Vercel; em desenvolvimento usa localhost.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

/** Link da comunidade (definido em NEXT_PUBLIC_COMMUNITY_URL). */
export const communityUrl = process.env.NEXT_PUBLIC_COMMUNITY_URL || "";

/** E-mail de suporte (definido em NEXT_PUBLIC_SUPPORT_EMAIL). */
export const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "";

/**
 * Imagens institucionais. Os arquivos podem ainda não existir em /public —
 * o componente AssetImage exibe um placeholder elegante nesse caso.
 */
export const brandImages = {
  profLuis: {
    src: "/assets/equipe/prof-luis.jpg",
    alt: "Prof. Luis, professor responsável pelo Ponto de Vista",
  },
  pacoExplorador: {
    src: "/assets/paco/paco-explorador.png",
    alt: "Professor Paco, mascote pedagógico do curso, em traje de explorador",
  },
  pacoLupa: {
    src: "/assets/paco/paco-lupa.png",
    alt: "Professor Paco observando com uma lupa",
  },
  pacoEstudando: {
    src: "/assets/paco/paco-estudando.png",
    alt: "Professor Paco estudando com um livro",
  },
  pacoCheckpoint: {
    src: "/assets/paco/paco-checkpoint.png",
    alt: "Professor Paco em um checkpoint da trilha",
  },
  pacoTrilha: {
    src: "/assets/paco/paco-trilha.png",
    alt: "Professor Paco caminhando pela trilha com um mapa",
  },
} as const;
