/**
 * ===================================================================
 * PROTEÇÃO SIMPLES DE ACESSO AO PORTAL (opcional)
 * ===================================================================
 *
 * Como funciona
 *   • Se a variável de ambiente COURSE_ACCESS_CODE estiver definida, o
 *     middleware exige que o visitante informe o código em /acesso.
 *   • O código é conferido NO SERVIDOR (rota /api/acesso). O navegador
 *     nunca recebe o código: apenas um cookie httpOnly com o hash dele.
 *   • Se COURSE_ACCESS_CODE estiver vazia, o site funciona sem barreira.
 *
 * Importante: isto é uma barreira compartilhada de turma, não uma
 * autenticação individual. Quando houver login por aluno (Supabase), basta
 * apagar `src/middleware.ts`, a pasta `src/app/acesso` e `src/app/api/acesso`.
 */

export const ACCESS_COOKIE = "pdv_acesso";

/** Duração do cookie: 30 dias. */
export const ACCESS_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

/** Código configurado pelo professor (ou `null` se não houver barreira). */
export function getAccessCode(): string | null {
  const code = process.env.COURSE_ACCESS_CODE?.trim();
  return code ? code : null;
}

/**
 * Gera o valor guardado no cookie a partir do código.
 * Usa Web Crypto — disponível tanto no runtime Node quanto no Edge.
 */
export async function buildAccessToken(code: string): Promise<string> {
  const data = new TextEncoder().encode(`ponto-de-vista::${code}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Comparação de strings sem sair mais cedo no primeiro caractere diferente. */
export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

/** Só aceitamos redirecionar para caminhos internos. */
export function sanitizeNext(next: string | null | undefined): string {
  if (!next || typeof next !== "string") return "/";
  if (!next.startsWith("/") || next.startsWith("//")) return "/";
  return next;
}
