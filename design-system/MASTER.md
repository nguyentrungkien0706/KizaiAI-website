# Kizai Design System v0.2: "Studio"

Phiên bản 0.2 · 11/11/2026 · Thay cho v0.1 "Redline" theo góp ý: trình bày và font chữ cần gọn, hiện đại hơn, lấy cảm hứng từ cách trình bày của runway.com (không sao chép thương hiệu, font hay hình ảnh của họ).

## 1. Ý tưởng chủ đạo

- Nền trắng, chữ đen, nhiều khoảng trắng. Nội dung đặt trong các **khối bo góc** màu xám rất nhạt hoặc đen.
- **Chữ tiêu đề lớn, nét mảnh (weight 400), khoảng cách chữ hẹp**: chữ là điểm nhấn chính.
- Hero là một **khối đen bo góc** chứa bản vẽ kỹ thuật nét trắng, nơi AI khoanh đỏ các điểm DFM. Đây là khoảnh khắc chuyển động duy nhất.
- Màu đỏ chỉ dành cho dấu khoanh của AI. Nút bấm là đen/trắng/xám.
- Không bịa dữ liệu: số liệu, logo, giá, lời nhận xét để dạng `[...]`.

## 2. Màu sắc

| Token | Hex | Dùng cho | Contrast |
|---|---|---|---|
| `bg` | `#FFFFFF` | Nền trang | |
| `surface` | `#F4F5F7` | Khối nội dung, thẻ | |
| `surface-2` | `#EEF0F3` | Nút phụ, chọn ngôn ngữ | |
| `surface-3` | `#E4E7EB` | Hover nút phụ | |
| `ink` | `#0C0C0C` | Tiêu đề, nút chính | 19.6:1 trên trắng |
| `ink-2` | `#404040` | Thân bài | 10.4:1 |
| `ink-3` | `#6B6B6B` | Chữ phụ, mô tả | 5.3:1 trên trắng, 4.9:1 trên `surface` |
| `ink-4` / `line-strong` | `#8A8F98` | Chỉ cho chữ ≥ 24px, viền ô nhập | 3.25:1 |
| `line` | `#E4E6EA` | Đường kẻ, viền khối | Trang trí |
| `night` | `#0C0C0C` | Khối hero, khối demo AI | |
| `night-2` | `#161616` | Thẻ trong khối tối | |
| `on-night-2` | `#A3A3A3` | Chữ phụ trên nền tối | 7.8:1 |
| `redline-bright` | `#FF6A4D` | Dấu khoanh AI trên nền tối | 6.9:1 |
| `redline` | `#B8321A` | Dấu AI trên nền sáng | 6.0:1 |
| `success` / tint | `#2E6B3F` / `#E3F1E6` | Gửi form thành công | |
| `danger` / tint | `#8E1538` / `#F8E1E7` | Lỗi form, luôn kèm icon + chữ | |

## 3. Typography

| Vai trò | Việt / Anh | Nhật |
|---|---|---|
| Tiêu đề | **Inter Tight** 400, tracking -0.02em | **Noto Sans JP** 500, tracking 0.01em |
| Thân bài, UI | **Inter** 400 / 500 / 600 | **Noto Sans JP** 400 |

Tải bằng `next/font/google` (tự host). Inter và Inter Tight có subset tiếng Việt.

| Cấp | Cỡ (mobile → desktop) | Line-height |
|---|---|---|
| Hero | 40 → 64px | 1.15 (Nhật 1.45) |
| Tiêu đề section | 34 → 52px | 1.15 |
| Tiêu đề thẻ | 22 → 28px, weight 400–500 | 1.2 |
| Thân bài lớn | 17–18px | 1.55 |
| Thân bài | 15–16px | 1.6 (Nhật 1.85) |
| Nhãn, chú thích | 13–14px, weight 500–600 | 1.4 |

Quy tắc: tiêu đề section căn giữa; không viết hoa toàn bộ; không tô màu riêng một từ; tiếng Nhật dùng `line-break: strict; word-break: auto-phrase`.

## 4. Khoảng cách, bo góc, chuyển động

- Container tối đa 1280px nội dung, lề 16px (mobile) / 24px.
- Khoảng cách section: 80 → 112 → 128px.
- Bo góc: `sm` 6px (ô nhỏ), `md` 8px (nút, ô nhập), `lg` 12px (thẻ trong khối), `xl` 16px (khối lớn, hero). Chip và nhãn: bo tròn hoàn toàn.
- Không dùng bóng đổ, trừ nút ngôn ngữ đang chọn (bóng 1px).
- Chuyển động: chỉ hero (nét khoanh đỏ vẽ dần, dưới 2 giây) và phản hồi thao tác (tab, FAQ, demo hỏi AI). `prefers-reduced-motion` tắt hết.

## 5. Component

- **Button:** cao 44–48px, bo 8px, chữ 14–16px đậm. `primary` đen chữ trắng; `secondary` xám nhạt chữ đen; `light` trắng (trên nền tối); `ghostNight` trắng mờ 10% (trên nền tối). Disabled: nền `surface`, chữ `ink-3`. Loading: vòng xoay + nhãn đang làm, `aria-busy`.
- **Input / Select:** cao 44px, nền trắng, viền 1px `line-strong`, bo 8px, chữ 16px. Focus viền đen + outline 2px. Lỗi: viền 2px `danger`, icon + câu hướng dẫn sửa, `aria-invalid`.
- **Khối (card):** `surface` bo 16px, padding 28–40px, không viền, không bóng. Thẻ con bên trong: trắng bo 12px.
- **Badge / chip:** bo tròn, cao 28px, chữ 13px.
- **Navbar:** trắng, dính đầu trang, cao 64px, logo chữ thường "kizai", link 14px, chọn VI/JA/EN, nút "Đăng nhập" (xám) và "Đặt lịch demo" (đen). Dưới 1024px thu thành menu.
- **CTA cuối trang:** khối `surface` lớn, bên trái tiêu đề, bên phải form trong thẻ trắng.
- **Footer:** logo + 4 cột link 14px xám, dòng cuối bản quyền và chọn ngôn ngữ.

## 6. Responsive và chất lượng

- Kiểm tra 375 / 768 / 1024 / 1440px ở cả ba ngôn ngữ, không cuộn ngang.
- Vùng chạm ≥ 44px, focus luôn nhìn thấy, contrast đạt WCAG AA (kiểm bằng axe).
- Đủ trạng thái hover, focus, active, disabled, loading, rỗng, lỗi.

## Hình ảnh (v0.2.1)

- Ảnh tạo bằng Google Gemini, lưu ở `src/assets/images/*.webp` (đã cắt watermark, nén WebP q80, dùng `next/image` với blur placeholder).
- Hero: `hero-cnc.webp` làm nền panel tối, phủ gradient từ trái (#0C0C0C) để chữ luôn đạt tương phản; bản vẽ AI nằm trên khung `bg-night/80`.
- Module: mỗi tab có một ảnh 16:9 ở đầu panel (`module-search|review|reuse|rfq|mro.webp`). Alt text nằm trong từ điển (`hero.photoAlt`, `modules.items[].imageAlt`).
- Ảnh là minh hoạ AI, không phải ảnh khách hàng hay nhà máy thật. Thay bằng ảnh thật khi có.
