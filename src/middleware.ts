import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

/**
 * Barreira de acesso às rotas exclusivas do curso.
 *
 * Autorização por sessão individual do Supabase (Magic Link).
 */
const PROTECTED_PREFIXES = [
  "/comece-aqui",
  "/trilha",
  "/central",
  "/aulas",
  "/checkpoints",
  "/comunidade",
];

function isProtectedPath(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

/** Só aceitamos redirecionar de volta para um caminho interno da aplicação. */
function sanitizeNext(next: string): string {
  if (!next.startsWith("/") || next.startsWith("//")) return "/";
  return next;
}

export async function middleware(request: NextRequest) {
  const { response, authenticated } = await updateSession(request);

  if (isProtectedPath(request.nextUrl.pathname) && !authenticated) {
    const next = sanitizeNext(
      request.nextUrl.pathname + request.nextUrl.search,
    );
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    loginUrl.search = `?next=${encodeURIComponent(next)}`;

    // Preserva os cookies (possivelmente renovados por updateSession)
    // mesmo numa resposta de redirect diferente da resposta original.
    const redirectResponse = NextResponse.redirect(loginUrl);
    response.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie);
    });
    return redirectResponse;
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Tudo, exceto arquivos internos do Next.js, ícones e a pasta
     * /assets em /public. Rodar em quase todas as rotas (inclusive as
     * públicas) permite renovar a sessão Supabase a cada requisição; a
     * decisão de bloquear só se aplica às rotas protegidas acima.
     */
    "/((?!_next/static|_next/image|assets|favicon.ico|icon.svg|robots.txt|sitemap.xml).*)",
  ],
};
