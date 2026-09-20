import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Cliente Supabase para uso em Server Components e Route Handlers.
 * Lê/escreve cookies via `next/headers` (Next.js 15 — `cookies()` é
 * assíncrono). Usa a chave publicável — nunca a service_role (que teria
 * privilégios administrativos e nunca deve rodar no lado do servidor
 * desta aplicação sem necessidade comprovada).
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Chamado a partir de um Server Component (não pode gravar
            // cookies). Sem consequência aqui: nesta etapa não há
            // middleware renovando a sessão automaticamente — ver
            // relatório final sobre essa decisão.
          }
        },
      },
    },
  );
}
