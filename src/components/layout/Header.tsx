"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ContinuarEstudando } from "@/components/layout/ContinuarEstudando";
import { navigation, site } from "@/data/site";

/** Cabeçalho fixo, discreto, com menu hambúrguer no celular. */
export function Header() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  // Fecha o menu ao trocar de página.
  useEffect(() => {
    setAberto(false);
  }, [pathname]);

  // Fecha o menu com a tecla Esc e trava a rolagem do corpo.
  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [aberto]);

  const isAtivo = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-cinza bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        {/* Marca */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${site.name} — início`}
        >
          <Logo className="h-8 w-8" />
          <span className="leading-none">
            <span className="block font-display text-[15px] font-semibold tracking-tight text-grafite sm:text-base">
              {site.name}
            </span>
            <span className="mt-0.5 hidden font-mono text-[10px] uppercase tracking-[0.16em] text-cinza-medio sm:block">
              {site.edition}
            </span>
          </span>
        </Link>

        {/* Navegação — desktop */}
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const ativo = isAtivo(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={ativo ? "page" : undefined}
                    className={`relative whitespace-nowrap rounded-md px-2.5 py-2 text-[14px] transition-colors duration-200 motion-reduce:transition-none xl:px-3 ${
                      ativo
                        ? "font-semibold text-roxo-escuro"
                        : "text-cinza-texto hover:text-grafite"
                    }`}
                  >
                    {item.label}
                    {ativo ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-2.5 -bottom-[1px] h-0.5 rounded-full bg-verde xl:inset-x-3"
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ContinuarEstudando className="hidden sm:inline-flex" />

          {/* Botão hambúrguer — celular e tablet */}
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cinza text-grafite transition-colors hover:border-roxo/40 hover:text-roxo lg:hidden"
          >
            {aberto ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Painel do menu — celular e tablet */}
      <div
        id="menu-mobile"
        hidden={!aberto}
        className="border-t border-cinza bg-white lg:hidden"
      >
        <nav aria-label="Navegação principal (celular)" className="px-5 py-4 sm:px-6">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const ativo = isAtivo(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={ativo ? "page" : undefined}
                    className={`flex min-h-[48px] items-center gap-3 rounded-lg px-3 text-[15px] ${
                      ativo
                        ? "bg-roxo-suave font-semibold text-roxo-escuro"
                        : "text-grafite hover:bg-cinza/50"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${ativo ? "bg-verde" : "bg-cinza-medio"}`}
                    />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 sm:hidden">
            <ContinuarEstudando className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}
