import { NextResponse, type NextRequest } from "next/server";
import { ACCESS_COOKIE, buildAccessToken, getAccessCode, safeEqual } from "@/lib/acesso";

/**
 * Middleware da barreira de acesso.
 * Se COURSE_ACCESS_CODE não estiver definida, não faz absolutamente nada.
 */
export async function middleware(request: NextRequest) {
  const code = getAccessCode();
  if (!code) return NextResponse.next();

  const cookie = request.cookies.get(ACCESS_COOKIE)?.value;
  const esperado = await buildAccessToken(code);

  if (cookie && safeEqual(cookie, esperado)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/acesso";
  url.search = `?next=${encodeURIComponent(
    request.nextUrl.pathname + request.nextUrl.search,
  )}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Tudo, exceto:
     *   - a própria página /acesso e sua API
     *   - /login e /auth/* (infraestrutura Supabase em construção —
     *     precisam ficar fora da barreira de turma para não entrar em
     *     loop de redirecionamento; ainda NÃO são a autorização do site)
     *   - arquivos internos do Next.js
     *   - ícones e a pasta /assets em /public
     */
    "/((?!acesso|api/acesso|login|auth|_next/static|_next/image|assets|favicon.ico|icon.svg|robots.txt|sitemap.xml).*)",
  ],
};
