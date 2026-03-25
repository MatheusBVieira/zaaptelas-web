import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, telefone, tipo, mensagem } = body;

    if (!nome || !telefone || !tipo) {
      return NextResponse.json(
        { error: "Campos obrigatórios: nome, telefone, tipo" },
        { status: 400 }
      );
    }

    // TODO: Integrar com serviço de e-mail (Resend, SendGrid, etc.)
    // Por enquanto, loga no servidor para validação
    console.log("[Orçamento]", { nome, telefone, tipo, mensagem });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    );
  }
}
