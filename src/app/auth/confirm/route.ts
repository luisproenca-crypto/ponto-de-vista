import { type EmailOtpType } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * Só aceitamos redirecionar para caminhos internos (evita open redirect
 * via um `?next=` arbitrário no link de e-mail).
 */
function sanitizeNext(next: string | null): string {
  if (!next || !next.startsWith("/") || next.startsWith("//")) return "/trilha";
  return next;
}

/**
 * Confirmação do Magic Link — fluxo oficial `token_hash` (não PKCE/code).
 *
 * O template de e-mail no Supabase Dashboard precisa apontar para esta
 * rota como:
 *   {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email
 * (configuração manual — ver relatório final; não alterado por este código).
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = sanitizeNext(searchParams.get("next"));

  if (token_hash && type) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({ type, token_hash });

    if (!error) {
      redirect(next);
    }
  }

  redirect("/login?erro=link_invalido");
}
