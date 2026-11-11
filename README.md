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
- `src/lib/site.ts`: các đường dẫn còn là placeholder

Các giá trị dạng `[...]` là placeholder, cần thay bằng dữ liệu thật.

## Việc cần làm trước khi đưa lên mạng

1. **Form đặt demo chưa gửi đi đâu.** `src/app/api/demo-request/route.ts` chỉ kiểm tra dữ liệu và ghi log. Cần nối tới email, CRM hoặc Google Sheet.
2. Thay các placeholder `[...]` trong `src/i18n/dictionaries/vi.ts`, `ja.ts`, `en.ts`: số liệu hiệu quả, logo và trích dẫn khách hàng, giá và thời gian từng gói, địa chỉ, email, số điện thoại, chính sách giá, nhà cung cấp và đơn giá trong demo hỏi AI.
3. Thay logo chữ "Kizai" bằng file logo chính thức (`src/components/site/navbar.tsx`, `footer.tsx`).
4. Điền link Đăng nhập (`src/lib/site.ts`), link Đối tác, Chính sách bảo mật, Điều khoản (trong `footer` của từng file ngôn ngữ).
