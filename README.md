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
