# Blog KIZAI AI (AstroPaper)

Blog dựng từ theme mã nguồn mở [AstroPaper](https://github.com/satnaing/astro-paper) (giấy phép MIT, giữ nguyên tệp LICENSE), đã đổi sang nhận diện Kizai: logo, màu #153039 / #03577B, font Montserrat (đặt sẵn trong `src/assets/fonts`), giao diện tiếng Việt.

Thư mục này độc lập với trang chính Next.js (đã loại khỏi tsconfig, eslint và Docker của trang chính), nên không ảnh hưởng aki.kizai.vn.

## Viết bài mới

Tạo tệp `.md` trong `src/content/posts/`, phần đầu bài:

```yaml
---
title: "Tiêu đề bài"
pubDatetime: 2026-11-12T09:00:00+07:00
featured: false
tags: [ban-ve, bom]
description: "Mô tả ngắn, dùng cho Google và mạng xã hội."
---
```

## Chạy và build

```bash
pnpm install
pnpm dev      # xem thử ở http://localhost:4321
pnpm build    # xuất trang tĩnh ra dist/
```

## Cấu hình chính

- `astro-paper.config.ts`: tên blog, tên miền (đang để tạm `https://blog.kizai.vn/`), mạng xã hội, số bài mỗi trang.
- `src/styles/theme.css`: màu sáng/tối.
- `src/i18n/lang/vi.ts`: chữ trên giao diện.

## Triển khai

`Dockerfile` có sẵn: build tĩnh rồi phục vụ bằng nginx cổng 80. Có thể tạo app riêng trên Dokploy, trỏ build context vào thư mục `blog/`.
