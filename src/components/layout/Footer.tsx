import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { navigation, site, supportEmail } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-grafite bg-topografia-clara text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-9 w-9" tone="branco" />
              <div>
                <p className="font-display text-lg font-semibold tracking-tight">
                  {site.name}
                </p>
                <p className="pdv-eyebrow mt-1 text-verde">
                  {site.teacher} &amp; {site.mascot}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-leitura font-display text-lg leading-snug text-white/85">
              “{site.tagline}”
            </p>

            <p className="pdv-eyebrow mt-6 text-white/55">{site.disciplines}</p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="pdv-eyebrow text-white/55">Navegar</p>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {supportEmail ? (
              <p className="mt-6 text-sm text-white/70">
                Suporte:{" "}
                <a
                  href={`mailto:${supportEmail}`}
                  className="underline underline-offset-4 hover:text-white"
                >
                  {supportEmail}
                </a>
              </p>
            ) : null}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
            {site.copyright}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
            {site.edition}
          </p>
        </div>
      </div>
    </footer>
  );
}
