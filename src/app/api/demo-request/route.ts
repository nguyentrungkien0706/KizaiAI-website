import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = 300;

/**
 * Nhận yêu cầu đặt lịch demo.
 *
 * [CHƯA KẾT NỐI] Hiện chỉ kiểm tra dữ liệu và ghi log trên máy chủ.
 * Cần nối tới nơi nhận thật (email, CRM, Google Sheet...) trước khi đưa lên production,
 * nếu không yêu cầu của khách sẽ không đến được ai.
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

  // TODO: gửi `data` tới hệ thống nhận yêu cầu thật.
  console.info("[demo-request]", JSON.stringify(data));

  return NextResponse.json({ ok: true });
}
