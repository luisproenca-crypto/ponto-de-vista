import { NextResponse } from "next/server";
import {
  ACCESS_COOKIE,
  ACCESS_COOKIE_MAX_AGE,
  buildAccessToken,
  getAccessCode,
  safeEqual,
} from "@/lib/acesso";

/**
 * Valida o código de acesso da turma NO SERVIDOR.
 * O código nunca é enviado ao navegador — apenas o cookie httpOnly com o hash.
 */
export async function POST(request: Request) {
  const code = getAccessCode();

  // Sem código configurado, não há barreira: qualquer tentativa é liberada.
  if (!code) {
    return NextResponse.json({ ok: true, semBarreira: true });
  }

  let informado = "";
  try {
    const body = (await request.json()) as { codigo?: unknown };
    informado = typeof body.codigo === "string" ? body.codigo.trim() : "";
  } catch {
    informado = "";
  }

  if (!informado || !safeEqual(informado, code)) {
    return NextResponse.json(
      { ok: false, erro: "Código inválido." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: ACCESS_COOKIE,
    value: await buildAccessToken(code),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ACCESS_COOKIE_MAX_AGE,
  });
  return response;
}
