"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Animação de entrada discreta (fade + pequeno deslocamento).
 *
 * Princípio: o conteúdo NUNCA pode ficar invisível por causa da animação.
 *   • No HTML do servidor (e sem JavaScript) o bloco já nasce visível.
 *   • Só depois de montado, e somente se o bloco estiver abaixo da dobra,
 *     ele é escondido para entrar com o fade quando chegar à tela.
 *   • Há ainda uma trava de segurança: passados 2,5 s, tudo fica visível.
 *   • Com `prefers-reduced-motion`, nada é escondido em momento algum.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Atraso em milissegundos */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  // Começa visível: é assim que o bloco é renderizado no servidor.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") return;

    // Já está na tela? Então não há entrada para animar.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return;

    setVisible(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.03 },
    );
    observer.observe(node);

    // Trava de segurança contra qualquer falha do observador.
    const travaDeSeguranca = window.setTimeout(() => {
      setVisible(true);
      observer.disconnect();
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(travaDeSeguranca);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={visible ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
