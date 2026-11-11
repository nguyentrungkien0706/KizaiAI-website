import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = 300;

/**
 * Nhận yêu cầu đặt lịch demo và chuyển tới webhook trong biến môi trường DEMO_WEBHOOK_URL
 * (ví dụ Google Apps Script ghi vào Google Sheet và gửi email, xem docs/google-sheet-form.md).
 * Chưa đặt biến này thì yêu cầu chỉ được ghi log trên máy chủ.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const field = (key: string) => String(body[key] ?? "").trim().slice(0, MAX);
  const data = {
    name: field("name"),
    email: field("email"),
    company: field("company"),
    size: field("size"),
    cad: field("cad"),
    need: field("need"),
    locale: field("locale"),
  };

  if (!data.name || !data.company || !EMAIL_RE.test(data.email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 422 });
  }

  const webhook = process.env.DEMO_WEBHOOK_URL;
  if (!webhook) {
    console.warn("[demo-request] DEMO_WEBHOOK_URL chưa được đặt, yêu cầu chỉ ghi log:", JSON.stringify(data));
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, secret: process.env.DEMO_WEBHOOK_SECRET ?? "", submittedAt: new Date().toISOString() }),
      redirect: "follow",
      signal: AbortSignal.timeout(10_000),
    });
    // Apps Script luôn trả 200, nên kiểm tra nội dung "ok" để biết đã ghi được.
    const text = (await res.text()).trim();
    if (!res.ok || text !== "ok") throw new Error(`webhook ${res.status}: ${text.slice(0, 80)}`);
  } catch (err) {
    console.error("[demo-request] gửi webhook thất bại", err);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
