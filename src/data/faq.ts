import { site } from "@/data/site";

/**
 * Perguntas frequentes da página /ajuda.
 *
 * As respostas descrevem o funcionamento real do portal. Sinta-se à vontade
 * para reescrevê-las com a sua voz — elas não afetam nenhum componente.
 */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    id: "trilha",
    question: "Como utilizar a Trilha de Estudos?",
    answer:
      "A Trilha organiza o curso em semanas. Cada semana é um cartão que você pode abrir para ver as aulas de segunda, quarta e sexta e o checkpoint de domingo. Você não precisa decidir o que estudar: basta abrir a próxima atividade disponível. O botão CONTINUAR ESTUDANDO, no topo do site, leva direto à próxima aula que você ainda não concluiu.",
  },
  {
    id: "ordem",
    question: "Preciso assistir às aulas em ordem?",
    answer:
      "A trilha foi pensada como um caminho: cada aula prepara a seguinte, e a ordem sugerida é a da própria trilha. Mesmo assim, nada fica bloqueado — você pode abrir qualquer aula já publicada quando quiser, e errar uma questão nunca impede você de avançar.",
  },
  {
    id: "checkpoints",
    question: "Como funcionam os Checkpoints?",
    answer:
      "O checkpoint fecha a semana, aos domingos. Ele serve para você testar o que construiu nas três aulas e perceber o que ainda precisa retomar. Os checkpoints aparecem na Trilha e também na Central de Estudos, com o status Não iniciado, Em andamento ou Concluído.",
  },
  {
    id: "materiais",
    question: "Onde encontro os materiais?",
    answer:
      "Na Central de Estudos. Lá ficam os Mapas da Semana (a síntese visual de cada semana, para visualizar ou baixar em PDF), os Checkpoints, o Raio-X das Provas e os demais materiais de apoio. Cada aula também lista os materiais ligados a ela.",
  },
  {
    id: "progresso-sumiu",
    question: "Meu progresso desapareceu. O que aconteceu?",
    answer:
      "Nesta versão, o seu progresso fica guardado no próprio navegador deste dispositivo (localStorage). Ele desaparece se você limpar os dados de navegação, usar uma janela anônima, trocar de navegador ou trocar de aparelho. Nesses casos o conteúdo continua todo disponível — apenas as marcações de aula concluída precisam ser refeitas.",
  },
  {
    id: "acesso",
    question: "Até quando tenho acesso ao curso?",
    answer: `Até ${site.accessUntil}.`,
  },
];
