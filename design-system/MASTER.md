# Kizai Design System: "Redline"

Phiên bản 0.1 · 11/11/2026 · Trạng thái: chờ duyệt

## 1. Ý tưởng chủ đạo

Website Kizai được trình bày như **một bản vẽ kỹ thuật đang được duyệt**. Giấy vẽ, nét mực graphite, đường kích thước và khung tên là "chất liệu". Màu đỏ của bút duyệt bản vẽ là tiếng nói của AI: mọi thứ AI chỉ ra, và mọi hành động quan trọng (CTA), đều dùng màu đỏ này.

Nguyên tắc:

1. **Một khoảnh khắc nổi bật duy nhất:** hero, nơi AI lần lượt khoanh đỏ các điểm DFM trên bản vẽ giá đỡ BR-2041. Phần còn lại của trang yên tĩnh, kỷ luật.
2. **Cấu trúc là thông tin:** đường kích thước, số thứ tự, khung tên chỉ dùng khi chúng mang nghĩa (bước tuần tự, phân tầng dữ liệu, thông tin công ty). Không trang trí cho có.
3. **Màu đỏ hiếm và có nghĩa:** tối đa một nút đỏ mỗi màn hình, cộng các ghi chú của AI. Không dùng đỏ cho trang trí.
4. **Ba ngôn ngữ ngang hàng:** Việt, Nhật, Anh dùng chung một họ font (IBM Plex) để trang nhìn đồng bộ khi đổi ngôn ngữ.
5. **Không bịa dữ liệu:** số liệu, logo khách hàng, giá luôn là placeholder dạng `[SỐ LIỆU]` cho tới khi có dữ liệu thật.

## 2. Màu sắc

Mọi cặp chữ/nền dưới đây đã kiểm tra contrast theo WCAG 2.1.

### Nền và chữ (neutral)

| Token | Hex | Dùng cho | Contrast |
|---|---|---|---|
| `paper` | `#EEF1EC` | Nền trang (giấy vẽ) | |
| `paper-raised` | `#F7F8F5` | Tờ bản vẽ, ô nhập, form | |
| `paper-sunken` | `#E3E7E1` | Vùng lõm, nền nút disabled, khối code mẫu | |
| `ink` | `#1B2430` | Chữ chính, tiêu đề, nét vẽ chính | 13.7:1 trên `paper` |
| `ink-2` | `#4A5866` | Chữ phụ, mô tả | 6.4:1 trên `paper` |
| `ink-3` | `#5F6B75` | Placeholder, chú thích nhỏ, chữ disabled | 4.8:1 trên `paper` |
| `rule` | `#B9C2BC` | Đường kích thước, viền trang trí, vạch chia | Chỉ trang trí |
| `rule-strong` | `#7D8880` | Viền ô nhập, viền nút phụ | 3.2:1 (đạt chuẩn 3:1 cho UI) |

### Màu thương hiệu

| Vai trò | Token | Hex | Dùng cho | Contrast |
|---|---|---|---|---|
| **Primary** | `redline` | `#B8321A` | CTA chính, ghi chú AI trên bản vẽ, link khi hover | Chữ trắng trên nền: 6.0:1. Chữ đỏ trên `paper`: 5.3:1 |
| | `redline-hover` | `#9C2914` | Hover của nút đỏ | Chữ trắng: 7.7:1 |
| | `redline-active` | `#84220F` | Nhấn giữ nút đỏ | Chữ trắng: 9.5:1 |
| | `redline-tint` | `#F4DCD5` | Nền nhãn AI, highlight vùng được khoanh | Chữ `redline`: 4.6:1 |
| **Secondary** | `ink` | `#1B2430` | Nút phụ dạng đặc (vd. "Gửi câu hỏi"), section nền tối hiếm hoi | Chữ `paper`: 13.7:1 |
| | `redline-on-ink` | `#E2735A` | Ghi chú đỏ khi nằm trên nền `ink` | 5.1:1 |

### Màu trạng thái

Màu báo lỗi (`danger`) cố ý khác màu đỏ thương hiệu cả về sắc độ lẫn độ sáng, và **luôn đi kèm icon + chữ**, không chỉ dựa vào màu.

| Vai trò | Chữ / icon | Nền nhạt | Contrast |
|---|---|---|---|
| `success` | `#2E6B3F` | `#DCEADF` | 5.1:1 |
| `warning` | `#7A5200` | `#F6E7C1` | 5.6:1 |
| `danger` | `#8E1538` | `#F5DCE3` | 7.0:1 |
| `info` | `ink` `#1B2430` | `paper-sunken` `#E3E7E1` | 12:1+ |

### Không dùng

Gradient, glassmorphism/blur nền, bóng đổ mềm dưới mọi card, xanh dương "SaaS" mặc định, nền đen tuyền.

## 3. Typography

### Font

| Vai trò | Việt / Anh | Nhật |
|---|---|---|
| Mọi nội dung | **IBM Plex Sans** (có subset tiếng Việt) | **IBM Plex Sans JP** |

Chỉ một họ font. Cá tính đến từ cách dàn chữ (cỡ lớn, đậm vừa, khoảng trắng rộng), không đến từ font trang trí. Số liệu và kích thước dùng `font-variant-numeric: tabular-nums` để thẳng cột như bảng kê vật tư. **Không** dùng font monospace cho nhãn nhỏ.

Tải qua `next/font/google` (tự host, không gọi Google Fonts lúc chạy), chỉ các weight 400, 500, 600.

```css
--font-sans: "IBM Plex Sans", "IBM Plex Sans JP", system-ui, sans-serif;
:lang(ja) { --font-sans: "IBM Plex Sans JP", "IBM Plex Sans", sans-serif; }
```

### Thang cỡ chữ (base 17px, tỉ lệ ~1.25)

| Token | Cỡ (mobile → desktop) | Weight | Line-height Việt/Anh | Line-height Nhật | Dùng cho |
|---|---|---|---|---|---|
| `display` | 40 → 64px (`clamp`) | 600 | 1.15 | 1.35 | Tiêu đề hero, chỉ 1 lần mỗi trang |
| `h2` | 30 → 44px | 600 | 1.2 | 1.4 | Tiêu đề section |
| `h3` | 22 → 26px | 600 | 1.3 | 1.5 | Tiêu đề module, card |
| `h4` | 18 → 20px | 600 | 1.4 | 1.6 | Tiêu đề nhỏ, tên tính năng |
| `body-lg` | 18 → 20px | 400 | 1.6 | 1.85 | Đoạn mở đầu section |
| `body` | 17px | 400 | 1.65 | 1.9 | Nội dung chính |
| `small` | 15px | 400 | 1.55 | 1.8 | Mô tả phụ, helper text |
| `caption` | 13px | 500 | 1.45 | 1.7 | Chú thích trên bản vẽ, nhãn ô nhập |

Line-height tiếng Việt cao hơn mức thông thường vì dấu thanh chồng (ví dụ "Ệ", "Ỗ") cần chỗ. Tiếng Nhật cao hơn nữa vì chữ Hán dày nét.

### Quy tắc

- Độ dài dòng tối đa **68 ký tự** (`max-width: 68ch`) cho Việt/Anh, **38 chữ** (`38em` ≈ 38 ký tự toàn khổ) cho tiếng Nhật.
- Tiêu đề: sentence case. **Không** viết hoa toàn bộ cho nhãn, **không** tô màu hay in nghiêng riêng một từ trong tiêu đề, **không** gắn nhãn "eyebrow" phía trên mọi tiêu đề.
- Letter-spacing: `-0.01em` cho `display` và `h2` tiếng Việt/Anh; `0` cho tiếng Nhật.
- Tiếng Nhật: `line-break: strict; word-break: auto-phrase;` để không ngắt dòng giữa cụm từ.
- Tiếng Anh thường ngắn hơn tiếng Việt khoảng 20%, tiếng Nhật ngắn hơn khoảng 40%: layout phải chịu được cả ba, không cố định chiều cao khối chữ.

## 4. Khoảng cách, bo góc, bóng, chuyển động

### Spacing (lưới 4px)

| Token | px | Dùng cho |
|---|---|---|
| `1` | 4 | Khoảng cách icon với chữ |
| `2` | 8 | Trong badge, giữa các chip |
| `3` | 12 | Padding nhỏ |
| `4` | 16 | Lề trang mobile, padding ô nhập |
| `6` | 24 | Padding card, khoảng cách giữa các ô form |
| `8` | 32 | Lề trang tablet |
| `12` | 48 | Khoảng cách tiêu đề với nội dung section |
| `16` | 64 | Lề trang desktop |
| `24` | 96 | Khoảng cách giữa các section (mobile 64) |
| `32` | 128 | Khoảng cách section lớn trên desktop rộng |

Container tối đa **1240px**. Lưới 12 cột desktop, 8 cột tablet, 4 cột mobile, gutter 24px (mobile 16px).

### Bo góc

| Token | px | Dùng cho |
|---|---|---|
| `radius-sheet` | 2 | Tờ bản vẽ, card module (như giấy, gần vuông) |
| `radius-control` | 4 | Nút, ô nhập, badge |
| `radius-panel` | 8 | Form đặt demo, menu mobile |
| `radius-pill` | 999 | Chỉ cho chip câu hỏi gợi ý |

Thứ bậc bo góc phản ánh vai trò: giấy vuông, công cụ hơi bo, chip tròn. Không dùng một radius cho mọi thứ.

### Bóng

Bản vẽ không có bóng. Chỉ hai mức:

| Token | Giá trị | Dùng cho |
|---|---|---|
| `shadow-none` | none | Mặc định cho mọi thứ |
| `shadow-sheet` | `0 1px 0 #B9C2BC, 0 12px 32px -16px rgba(27,36,48,.22)` | Chỉ tờ bản vẽ hero và form đặt demo, để tách khỏi nền |

### Chuyển động

| Token | Giá trị |
|---|---|
| `duration-fast` | 120ms (hover, đổi màu) |
| `duration-base` | 200ms (mở menu, chuyển tab) |
| `duration-slow` | 320ms (accordion FAQ, chuyển module) |
| `ease-standard` | `cubic-bezier(.2,.7,.2,1)` |

- **Khoảnh khắc duy nhất:** khi tải trang, nét khoanh đỏ lần lượt "vẽ" lên bản vẽ hero (`stroke-dashoffset`), mỗi ghi chú cách nhau ~400ms, tổng dưới 2 giây, chạy một lần.
- Không fade/slide cho từng section khi cuộn. Không hover-nhấc card.
- Chuyển động đáp lại hành động người dùng (mở FAQ, đổi module, gửi form) thì được dùng, để cho thấy cái gì vừa thay đổi.
- `prefers-reduced-motion: reduce`: hiện ngay trạng thái cuối, tắt mọi animation, chỉ giữ đổi màu.

## 5. Icon và hình ảnh

- Icon giao diện (menu, mũi tên mở, dấu tích, đóng): **Lucide**, nét 1.5px, cỡ 20px, màu theo chữ.
- Icon nội dung: dùng **ký hiệu kỹ thuật thật** khi có nghĩa, ví dụ ký hiệu GD&T (độ phẳng ⏥, vị trí ⌖, độ trụ ⌭), ký hiệu độ nhám, mũi tên kích thước. Vẽ bằng SVG nội tuyến. Không dùng icon "AI lấp lánh", tên lửa, bóng đèn.
- Hình minh họa: bản vẽ SVG vẽ tay theo đúng quy ước kỹ thuật (nét liền đậm cho cạnh thấy, nét đứt cho cạnh khuất, nét chấm gạch cho đường tâm). Không dùng ảnh stock, không ảnh AI.
- Dấu hiệu nhận diện: **dấu góc** (4 vạch nhỏ ở góc tờ giấy, như dấu căn chỉnh khi in bản vẽ). Chỉ dùng cho tờ hero, card module và form, không cho mọi khối.

## 6. Component

Mọi component tương tác cao tối thiểu **44×44px**, focus luôn nhìn thấy: `outline: 2px solid #1B2430; outline-offset: 2px` (13.7:1 trên giấy). Dùng thẻ HTML thật (`<button>`, `<a href>`, `<input>` + `<label>`).

### Button

| Variant | Mặc định | Hover | Active | Disabled |
|---|---|---|---|---|
| **Primary** (CTA) | Nền `redline`, chữ trắng 600 | Nền `redline-hover` | Nền `redline-active`, dịch xuống 1px | Nền `paper-sunken`, chữ `ink-3`, viền **nét đứt** `rule-strong` (như cạnh khuất trên bản vẽ) |
| **Secondary** | Nền `ink`, chữ `paper` | Nền `#2A3644` | Nền `#111820` | Như trên |
| **Outline** | Viền 1px `rule-strong`, chữ `ink` | Viền `ink`, nền `paper-raised` | Nền `paper-sunken` | Như trên |
| **Link** | Chữ `ink`, gạch chân 1px `rule-strong` | Chữ và gạch chân `redline` | | Chữ `ink-3`, không gạch chân |

- Cỡ: `md` cao 44px, padding ngang 20px, chữ 16px; `lg` cao 52px, padding ngang 28px, chữ 17px.
- **Loading:** giữ nguyên chiều rộng, thay icon bằng vòng xoay 16px, đổi nhãn sang dạng đang làm ("Đang gửi…"), `aria-busy="true"`, không bấm được.
- Nhãn nút nói rõ việc sẽ xảy ra ("Đặt lịch demo", "Gửi câu hỏi"), không thêm "→" vào cuối.

### Input / Select / Textarea

- Nhãn luôn hiện phía trên (`caption`, `ink-2`), không chỉ dùng placeholder.
- Ô cao 44px, nền `paper-raised`, viền 1px `rule-strong`, radius 4px, padding 12px 14px, chữ 17px (tránh iOS tự zoom).
- **Hover:** viền `ink-2`. **Focus:** viền `ink` + outline focus chuẩn. **Disabled:** nền `paper-sunken`, viền nét đứt, chữ `ink-3`.
- **Lỗi:** viền 2px `danger`, dưới ô là icon + câu nói rõ cách sửa, `aria-invalid="true"` và `aria-describedby`. Ví dụ: "Nhập email công việc, ví dụ ten@congty.vn".
- **Helper text:** `small`, `ink-3`, dưới ô.
- Trường bắt buộc đánh dấu bằng chữ "(bắt buộc)" thay vì chỉ dấu `*`.

### Card: "Tờ bản vẽ" (Sheet)

- Nền `paper-raised`, viền 1px `rule`, radius 2px, padding 24px (desktop 32px), có dấu góc.
- Chỉ dùng cho module sản phẩm và các khối thật sự là "một tờ" nội dung. Danh sách tính năng thường dùng **dòng có đường kẻ**, không bọc card.
- Hover (khi cả card là link): viền chuyển `ink`, không nhấc, không bóng.
- Bố cục các card **không** chia 3 cột đều nhau: module dùng bố cục chọn-bên-trái / tờ-chi-tiết-bên-phải.

### Badge: "Nhãn revision"

- Cao 24px, padding ngang 8px, radius 4px, chữ `caption`.
- Variant: `neutral` (`paper-sunken` / `ink-2`), `ai` (`redline-tint` / `redline`, dùng cho "AI phát hiện"), `success`, `warning`, `danger` (nền nhạt + chữ đậm của bảng màu trạng thái).
- Không viết hoa toàn bộ.

### Navbar

- Dính đầu trang, nền `paper` đặc (không blur), vạch 1px `rule` ở cạnh dưới, cao 64px (mobile 56px).
- Trái: logo Kizai. Giữa: link Nền tảng, Sản phẩm, Tích hợp, Liên hệ. Phải: chọn ngôn ngữ **VI / JA / EN** (segmented control, `aria-label="Ngôn ngữ"`), link "Đăng nhập", nút Primary "Đặt lịch demo".
- Link đang xem: gạch chân 2px `ink`. Hover: chữ `redline`.
- Dưới 1024px: thu vào nút menu 44×44 (`aria-expanded`), mở thành panel phủ toàn chiều rộng, nền `paper-raised`; nút "Đặt lịch demo" vẫn hiện ngoài navbar.

### CTA

- **CTA hero:** Primary `lg` "Đặt lịch demo" + Outline "Xem các module".
- **CTA cuối trang:** một tờ bản vẽ lớn (`shadow-sheet`) chứa form đặt demo; bên cạnh là một ghi chú đỏ của AI chỉ vào nút gửi. Đây là chỗ thứ hai duy nhất được dùng đỏ nhiều.
- **Trạng thái form:** mặc định, đang gửi (loading), thành công (khung `success` + "Đã nhận yêu cầu" + nút "Gửi yêu cầu khác"), lỗi mạng (khung `danger` + cách thử lại, giữ nguyên dữ liệu đã nhập).

### Footer: "Khung tên"

- Bố cục như khung tên góc dưới bản vẽ: lưới ô có viền 1px `ink`, mỗi ô một nhóm thông tin (công ty, sản phẩm, tài nguyên, pháp lý, ngôn ngữ).
- Ô "Revision" ghi ngày cập nhật trang, ô "Tỉ lệ" có thể ghi "1:1". Đây là chi tiết vui duy nhất ở footer.
- Mobile: các ô xếp dọc, giữ viền.
- Chữ `small`, `ink-2`; tiêu đề ô `caption` 500, `ink`.

### Trạng thái rỗng và lỗi (cho khối hỏi AI demo)

- **Rỗng:** "Chọn một câu hỏi gợi ý bên dưới hoặc tự gõ câu hỏi về bản vẽ." kèm các chip gợi ý.
- **Đang trả lời:** dòng chữ "Đang tìm trong kho bản vẽ…" + 3 dòng skeleton màu `paper-sunken`.
- **Lỗi:** "Không tải được câu trả lời mẫu. Kiểm tra kết nối rồi bấm Thử lại." + nút Outline "Thử lại".
- Ghi rõ dưới khối: "Dữ liệu minh họa."

## 7. Responsive

Thiết kế mobile-first, kiểm tra ở **375, 768, 1024, 1440px**.

- 375: một cột, bản vẽ hero nằm dưới tiêu đề và thu gọn còn 2 ghi chú đỏ.
- 768: hero vẫn một cột, bản vẽ rộng hơn; module dạng tab cuộn ngang.
- 1024: hero hai cột (chữ trái, bản vẽ phải); navbar đầy đủ.
- 1440: container 1240px, lề hai bên rộng.

## 8. Token cho Tailwind CSS v4

```css
@import "tailwindcss";

@theme {
  --color-paper: #EEF1EC;
  --color-paper-raised: #F7F8F5;
  --color-paper-sunken: #E3E7E1;
  --color-ink: #1B2430;
  --color-ink-2: #4A5866;
  --color-ink-3: #5F6B75;
  --color-rule: #B9C2BC;
  --color-rule-strong: #7D8880;

  --color-redline: #B8321A;
  --color-redline-hover: #9C2914;
  --color-redline-active: #84220F;
  --color-redline-tint: #F4DCD5;
  --color-redline-on-ink: #E2735A;

  --color-success: #2E6B3F;
  --color-success-tint: #DCEADF;
  --color-warning: #7A5200;
  --color-warning-tint: #F6E7C1;
  --color-danger: #8E1538;
  --color-danger-tint: #F5DCE3;

  --font-sans: "IBM Plex Sans", "IBM Plex Sans JP", system-ui, sans-serif;

  --radius-sheet: 2px;
  --radius-control: 4px;
  --radius-panel: 8px;

  --shadow-sheet: 0 1px 0 #B9C2BC, 0 12px 32px -16px rgb(27 36 48 / 0.22);

  --ease-standard: cubic-bezier(.2, .7, .2, 1);
}
```

Biến của shadcn/ui (`--primary`, `--background`, `--ring`…) sẽ được ánh xạ sang các token trên khi khởi tạo dự án, để component shadcn dùng đúng màu Redline.

## 9. Checklist chất lượng

- [ ] Mọi chữ đạt contrast ≥ 4.5:1 (chữ lớn ≥ 3:1), viền điều khiển ≥ 3:1
- [ ] Focus nhìn thấy trên mọi phần tử tương tác, thứ tự Tab hợp lý
- [ ] Vùng chạm ≥ 44×44px
- [ ] Đủ trạng thái hover, focus, active, disabled, loading, rỗng, lỗi
- [ ] `prefers-reduced-motion` tắt animation hero
- [ ] Hiển thị đúng dấu tiếng Việt và ngắt dòng tiếng Nhật
- [ ] Kiểm tra 375 / 768 / 1024 / 1440px ở cả ba ngôn ngữ
- [ ] Không có số liệu, logo, giá, review tự bịa
