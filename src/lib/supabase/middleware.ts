import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Cliente Supabase para uso no Middleware (runtime Edge).
 *
 * Renova a sessão a cada requisição e propaga os cookies atualizados —
 * tanto para `request` (para que Server Components desta mesma
 * requisição já leiam a sessão renovada) quanto para a `response`
 * devolvida ao navegador.
 *
 * A decisão de autenticação usa `getClaims()`, que revalida a
 * assinatura do token a cada chamada. `getSession()` não revalida o
 * token (lê direto do cookie) e não deve ser usado para autorizar
 * acesso; `getUser()` é o padrão anterior, substituído por `getClaims()`
 * na orientação oficial atual do Supabase para Next.js.
 */
export async function updateSession(
  request: NextRequest,
): Promise<{ response: NextResponse; authenticated: boolean }> {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // Não execute nada entre createServerClient e getClaims(): qualquer
  // código no meio pode atrapalhar a renovação do token.
  const { data } = await supabase.auth.getClaims();

  return { response, authenticated: Boolean(data?.claims) };
}
