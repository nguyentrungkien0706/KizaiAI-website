# Kizai website

Landing page ba ngôn ngữ (Việt / Nhật / Anh) cho Kizai. Next.js 15 + Tailwind CSS v4 + shadcn/ui.
Design System: `design-system/MASTER.md`.

## Chạy trên máy

Cần Node.js 20 trở lên.

```bash
npm install
npm run dev
```

Mở http://localhost:3000 (tự chuyển sang /vi, /ja hoặc /en theo ngôn ngữ trình duyệt).

## Cấu trúc

- `src/app/[locale]/`: trang theo ngôn ngữ
- `src/i18n/dictionaries/`: nội dung chữ của từng ngôn ngữ
- `src/components/site/`: các section của trang
- `src/components/ui/`: component dùng chung (theo kiểu shadcn/ui)
- `src/lib/site.ts`: tên miền, link đăng nhập
- `src/lib/partners.ts`: logo đối tác (ảnh trong `src/assets/partners`)
- `public/og/`: ảnh chia sẻ mạng xã hội cho từng ngôn ngữ
- `_anh-goc/` (chỉ có trên Google Drive): ảnh gốc từ Gemini và kizai.vn

## Đưa lên mạng

1. Đặt biến môi trường `NEXT_PUBLIC_SITE_URL` là tên miền thật (ví dụ `https://ai.kizai.vn`). Biến này dùng cho link chuẩn (canonical), hreflang, sitemap.xml, robots.txt và ảnh chia sẻ.
2. `npm run build` rồi `npm start`, hoặc triển khai lên Vercel hay máy chủ có Node.js 20 trở lên.

## Việc còn lại

1. **Form đặt demo:** đã nối qua webhook. Làm theo `docs/google-sheet-form.md` để tạo Google Sheet + email, rồi đặt `DEMO_WEBHOOK_URL` và `DEMO_WEBHOOK_SECRET` (xem `.env.example`).
2. Số liệu hiệu quả của Kizai AI (sau POC) và trích dẫn khách hàng: hiện chưa hiển thị, thêm khi có.
3. Link Đăng nhập (`src/lib/site.ts`): để trống thì nút được ẩn.
4. Logo đối tác số 7 trên kizai.vn chưa rõ tên nên chưa dùng.

## Triển khai bằng Docker / Dokploy

- `Dockerfile` build bản Next.js standalone, chạy cổng 3000.
- Build arg: `NEXT_PUBLIC_SITE_URL` (tên miền thật, cần có lúc build).
- Biến môi trường lúc chạy: `DEMO_WEBHOOK_URL`, `DEMO_WEBHOOK_SECRET`.
