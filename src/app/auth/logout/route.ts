import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * Encerra a sessão Supabase do usuário e redireciona para /login.
 *
 * POST de propósito (não GET): logout muda estado, então não deve ser
 * disparável por um simples link/prefetch. Nesta etapa não há botão no
 * Header chamando esta rota ainda (fora de escopo, ver relatório final)
 * — ela existe como infraestrutura pronta para ser conectada depois.
 */
export async function POST(request: NextRequest) {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return NextResponse.redirect(new URL("/login", request.url));
}
