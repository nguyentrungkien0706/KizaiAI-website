# Kiểm toán SEO kỹ thuật: aki.kizai.vn (giai đoạn 1, read-only)

**Ngày kiểm tra:** 2026-11-11 (23:15–23:40, giờ Việt Nam)
**Phạm vi:** https://aki.kizai.vn (/vi, /ja, /en), mã nguồn repo `nguyentrungkien0706/KizaiAI-website` (commit `483bbcb`), app Dokploy `kizai-web`.
**Cách kiểm tra:** chỉ đọc. Gồm: tải HTTP trực tiếp từ domain thật (qua trình duyệt), đọc HTML gốc server trả về, đọc cấu hình Dokploy qua API (chỉ đọc), tra DNS công khai, và đo hiệu năng trên bản build giống production chạy trong máy chủ đám mây.
**Không thay đổi:** production, proxy, DNS, database hay biến môi trường. Không cài phần mềm nào lên server.

Mức ưu tiên:
- **P0**: chặn index hoặc mất lead, sửa ngay.
- **P1**: ảnh hưởng rõ đến xếp hạng hoặc AI Search.
- **P2**: nên làm.
- **P3**: tinh chỉnh.

---

## 1. Tóm tắt

Nền tảng kỹ thuật **tốt**:
- Trang được dựng sẵn thành HTML tĩnh (SSG). Toàn bộ nội dung chính có sẵn trong HTML, Googlebot và Bingbot đọc được mà không cần chạy JavaScript.
- Canonical, hreflang hai chiều kèm x-default, sitemap có hreflang, robots.txt, Open Graph và HTTPS đều đã có và đúng cú pháp.

Vấn đề lớn nhất nằm ở **cấu trúc nội dung**, không phải lỗi kỹ thuật:
1. Cả website chỉ có **3 URL** (mỗi ngôn ngữ 1 trang). 5 module sản phẩm không có trang riêng, nên gần như không có cơ hội xếp hạng cho từ khóa từng module.
2. **4/5 module không có trong HTML**: phần tab Module chỉ dựng nội dung của tab đang mở. Google và AI chỉ đọc được module "AI Visual Search".
3. Chưa có **Search Console, Bing Webmaster, GA4**, nên chưa đo được gì.
4. Dữ liệu có cấu trúc mới chỉ có `Organization`. Còn thiếu `WebSite`, `SoftwareApplication`, `FAQPage`, `BreadcrumbList`.
5. Một số **tuyên bố số liệu chưa thống nhất** với kizai.vn (200+ và 50+ doanh nghiệp). Đây là rủi ro cho uy tín (E-E-A-T) và cho việc AI trích dẫn.

---

## 2. Hạ tầng và triển khai

| Hạng mục | Kết quả | Trạng thái |
|---|---|---|
| Công nghệ | Next.js 15.5.29 (App Router), React 19, Tailwind v4. i18n tự viết (middleware và thư mục `src/i18n`). Không có CMS hay database. | Đã xác minh |
| Kiểu render | SSG: `/vi`, `/ja`, `/en` dựng sẵn (`x-nextjs-prerender: 1`, `x-nextjs-cache: HIT`). Route động duy nhất là `/api/demo-request`. | Đạt |
| Repository | GitHub `nguyentrungkien0706/KizaiAI-website` (private), nhánh `main`. Working tree sạch. | Đã xác minh |
| Build | Dockerfile multi-stage, `output: "standalone"`, Node 20 alpine, cổng container 3000. Build arg `NEXT_PUBLIC_SITE_URL=https://aki.kizai.vn`. | Đã xác minh |
| Dokploy | Project "Kizai Website", app `kizai-web`, 1 replica, chưa đặt giới hạn CPU/RAM, chưa có healthcheck. 1 lần deploy: `done`. | Đã xác minh |
| Tự động deploy | `autoDeploy: true`, kích hoạt khi **push lên `main`**. Mọi commit vào main sẽ lên production ngay. | **Rủi ro (P1)**: xem mục 9 |
| Cổng | Host 8989 → container 3000 (ingress). Domain `aki.kizai.vn` cũng được khai báo trong Traefik (Let's Encrypt). | Đã xác minh |
| Reverse proxy | Header `server: openresty`, tức là Nginx Proxy Manager trên VPS trả lời trực tiếp, TLS kết thúc ở VPS. Đường đi: DNS → VPS 103.97.134.235 (NPM) → WireGuard → server 192.168.1.90:8989. | Một phần đã xác minh (header). Cấu hình NPM chưa xem được. |
| DNS | `aki.kizai.vn` A → 103.97.134.235. Không có AAAA, không có CAA. | Đã xác minh |
| SSL | HTTPS hoạt động, trình duyệt không cảnh báo. `http://` chuyển hướng sang `https://`. | Đạt |
| HSTS | Không có header `Strict-Transport-Security`. | P3 |
| Header lộ công nghệ | `x-powered-by: Next.js` | P3 |
| Biến môi trường | `DEMO_WEBHOOK_URL`, `DEMO_WEBHOOK_SECRET` (đã đặt, đúng định dạng; không in giá trị), `NEXT_PUBLIC_SITE_URL` (build arg). | Đã xác minh |
| Form demo | Gửi thử ngày 2026-11-11: dữ liệu ghi vào Google Sheet, rồi đã xóa dòng thử. API trả 422 khi thiếu trường, 405 khi dùng GET. | Đạt |

---

## 3. Khả năng crawl và index

| Kiểm tra | Kết quả | Trạng thái | Giải pháp |
|---|---|---|---|
| `/vi`, `/ja`, `/en` | 200, `text/html; charset=utf-8`, gzip | Đạt | |
| `/` | 307 sang `/vi`, `/ja` hoặc `/en` theo `Accept-Language` | Chấp nhận được | Cân nhắc trang chọn ngôn ngữ, hoặc giữ 307 nhưng để x-default trỏ `/`. P3 |
| Dấu `/` cuối (`/vi/`) | 308 sang `/vi` | Đạt | |
| URL không tồn tại | `/vi/xyz` trả 404 đúng. Nhưng `/xyz` → 307 → `/vi/xyz` → 404 (hai bước). | P3 | Bỏ qua redirect cho đường dẫn lạ, để trả 404 ngay |
| robots.txt | `Allow: /`, `Disallow: /api/`, có dòng Sitemap | Đạt | Thêm nhóm rõ ràng cho bot AI (mục 7). P2 |
| sitemap.xml | 3 URL, có `xhtml:link` hreflang, đúng domain | Đạt | |
| sitemap `lastmod` | Lấy thời điểm build, nên mỗi lần deploy đều đổi dù nội dung không đổi | P2 | Dùng ngày sửa nội dung thật |
| llms.txt | 404 | P2 | Tạo `/llms.txt` (mục 7) |
| meta robots / X-Robots-Tag | Không có, nghĩa là index được | Đạt | |
| Canonical | Tự trỏ đúng từng ngôn ngữ, URL tuyệt đối | Đạt | |
| hreflang | vi, ja, en, x-default (→ /vi) có trên cả 3 trang, hai chiều | Đạt | |
| `lang` của `<html>` | vi / ja / en đúng | Đạt | |
| Bot đọc nội dung | HTML gốc chứa khoảng 7.600 ký tự nội dung (VI và EN), khoảng 3.900 (JA). Không phụ thuộc JavaScript. | Đạt | |
| **Nội dung ẩn trong tab** | Mục Module chỉ dựng tab đầu tiên vào HTML. 4 module còn lại (Duyệt thiết kế DFM, Tái sử dụng, Cost/RFQ, Sản xuất & MRO) **không có trong HTML**. | **P0** | Dựng sẵn cả 5 panel vào HTML (ẩn bằng CSS hoặc thuộc tính `hidden`), hoặc tốt hơn là làm 5 trang module riêng |
| Phản hồi khi User-Agent là Googlebot, Bingbot, GPTBot | Chưa kiểm tra được: trình duyệt không cho đổi User-Agent, còn máy đám mây không ra được domain này | Chưa kiểm tra | Kiểm tra trong NPM xem có rule chặn bot, hoặc dùng URL Inspection của Search Console |

---

## 4. On-page

| Hạng mục | VI | JA | EN | Đánh giá |
|---|---|---|---|---|
| Title | "Kizai: Nền tảng dữ liệu AI cho nhà máy" (38 ký tự) | "Kizai：製造業のためのAIデータプラットフォーム" (26) | "Kizai: the AI data platform for factories" (41) | Đúng thông điệp nhưng **thiếu từ khóa tìm kiếm** như "tìm kiếm bản vẽ CAD", "図面検索", "CAD drawing search". P1 |
| Meta description | 141 ký tự | 74 | 161 (hơi dài) | Ổn. Nên thêm lời kêu gọi đặt demo. P2 |
| H1 | 1 thẻ, dạng thông điệp ("Hỏi bản vẽ…") | 1 | 1 | Hợp lệ, nhưng không chứa tên sản phẩm hay từ khóa chính. P2 |
| H2/H3 | Phân cấp hợp lý, 10 H2 | | | Đạt |
| Open Graph / Twitter | Đủ title, description, ảnh 1200×630 riêng từng ngôn ngữ, locale | | | Đạt |
| Ảnh | 26 ảnh, tất cả có alt mô tả. 24 ảnh lazy-load. Hai ảnh `fill` không có width/height nhưng có khung cố định (CLS = 0). | | | Đạt |
| Link nội bộ | Chỉ có link neo (#modules, #contact…) và link đổi ngôn ngữ. Không có trang con để liên kết. | | | P1 (sẽ giải quyết khi có trang module) |
| Link ra ngoài | kizai.vn (giới thiệu, dịch vụ, case study, blog, chính sách), Facebook, LinkedIn | | | Đạt. Nên để kizai.vn link ngược về aki.kizai.vn. P2 |
| Link đổi ngôn ngữ | Đã có `hrefLang` và `lang` trên thẻ `<a>` (đính chính 2026-11-12: lần kiểm tra đầu ghi nhầm) | Đạt | | |
| Tên thương hiệu | "Kizai" (title), "Kizai Solution" (Organization, og:site_name). Bạn gọi sản phẩm là "Kizai AI". | | | **P1**: thống nhất tên sản phẩm trên mọi nơi để AI và Google nhận diện một thực thể |

---

## 5. Dữ liệu có cấu trúc (JSON-LD)

| Schema | Hiện trạng | Đề xuất |
|---|---|---|
| Organization | Có tên, url, logo (icon 512px), email, điện thoại, địa chỉ, sameAs (Facebook, LinkedIn) | Thêm `@id`, `legalName` (Kizai Solutions JSC, cần xác nhận), `foundingDate`, `contactPoint`. Logo nên dùng ảnh logo đầy đủ. P2 |
| WebSite | Chưa có | Thêm, kèm `inLanguage`. P2 |
| SoftwareApplication | Chưa có | Thêm cho "Kizai AI" (`applicationCategory: BusinessApplication`). **Không** đưa giá hay đánh giá vì chưa có dữ liệu thật. P1 |
| FAQPage | FAQ có trong HTML (`<details>`) nhưng chưa có schema | Thêm. Google hiện hạn chế hiển thị rich result FAQ, nhưng schema vẫn giúp AI Search đọc đúng cặp hỏi–đáp. P2 |
| BreadcrumbList | Không cần khi chỉ có 1 trang | Thêm khi có trang module và blog |
| Article | Chưa có blog | Dùng cho bài kiến thức ở giai đoạn sau |

---

## 6. Hiệu năng (Core Web Vitals, đo trong phòng lab)

Đo trên bản build production giống hệt (cùng mã, cùng `next start`) bằng Chromium. Đây là **số lab, không phải số thật của người dùng (field data)**. Chưa có dữ liệu CrUX vì domain vừa lên.

| Thiết bị / trang | LCP | CLS | TBT | Dung lượng | Requests |
|---|---|---|---|---|---|
| Mobile (CPU ×4, mạng 1,6 Mbps) /vi | 2,7 s | 0 | 740 ms | 523 KB | 33 |
| Mobile /ja | 3,0 s | 0,007 | 1.420 ms | 1.379 KB | 75 |
| Desktop /vi | 0,5 s | 0 | 570 ms | 512 KB | 35 |
| Desktop /ja | 0,6 s | 0,003 | 1.390 ms | 1.361 KB | 75 |

Nhận xét:
- **LCP mobile 2,7–3,0 s**, sát hoặc vượt ngưỡng "Tốt" (2,5 s). Nguyên nhân chính: preload 206 KB font Montserrat (5 độ đậm × 2 bộ ký tự). P1: giảm còn 3 độ đậm (400/600/700).
- **Trang JA tải thêm khoảng 900 KB font Noto Sans JP** (40+ file). P1: chỉ dùng 2 độ đậm, hoặc dùng font hệ thống của Nhật cho phần chữ thường.
- **TBT cao (0,6–1,4 s)**: toàn trang được hydrate, JS 125 KB. Nguồn chính là các section có tương tác (tab module, form, menu). P2: đưa phần tĩnh về server component, tách tương tác thành component nhỏ.
- CLS gần 0. Đạt.
- Ảnh Open Graph đang trả `cache-control: max-age=0`. P3.

---

## 7. AI Search (GEO/AEO)

| Hạng mục | Hiện trạng | Đề xuất |
|---|---|---|
| Quyền crawl | robots.txt cho tất cả bot. Không chặn GPTBot, ClaudeBot, PerplexityBot, Google-Extended. | Giữ mở. Khai báo rõ từng bot để dễ quản lý. P2 |
| llms.txt | Chưa có | Tạo `/llms.txt`: tóm tắt Kizai AI, 5 module, link trang từng ngôn ngữ, FAQ, thông tin liên hệ. P2 |
| Nội dung trả lời được | FAQ 7 câu có trong HTML. Nhưng nội dung 4 module không có trong HTML (xem P0). | Dựng đủ nội dung module, viết FAQ cụ thể hơn: định dạng CAD, triển khai on-premise, bảo mật, thời gian POC. |
| Nguồn chứng thực | 2 case study (Yamaha Motor, Viqualita) là dự án **IoT/năng lượng**, không phải sản phẩm AI. Logo đối tác lấy từ kizai.vn. | Cần case study hoặc POC thật của Kizai AI. Ghi rõ phạm vi mỗi logo. |
| Thông tin doanh nghiệp | Tên, địa chỉ, điện thoại, email khớp kizai.vn | Thống nhất NAP (tên, địa chỉ, số điện thoại) và tên sản phẩm trên kizai.vn, LinkedIn, Facebook và Google Business Profile |
| Thực thể thương hiệu | "Kizai", "Kizai Solution", "Kizai Solutions JSC", "Kizai AI" đang dùng lẫn nhau | Chốt 1 tên công ty và 1 tên sản phẩm |

---

## 8. Đo lường và công cụ quản trị

| Công cụ | Hiện trạng | Bằng chứng | Việc cần làm |
|---|---|---|---|
| Google Search Console | **Chưa kết nối** (xác suất cao) | Không có TXT `google-site-verification` trên kizai.vn, không có meta xác minh trong HTML | Bạn đăng nhập GSC, thêm Domain property `kizai.vn` (xác minh bằng DNS TXT) hoặc URL prefix `https://aki.kizai.vn/`, rồi gửi sitemap. Mình không được thao tác đăng nhập. |
| Bing Webmaster | Chưa kết nối | Không có `msvalidate.01` | Import trực tiếp từ GSC sau khi xong bước trên |
| GA4 | **Chưa cài** | Không có `gtag` hay `googletagmanager` trong HTML | Bạn tạo property GA4 và gửi Measurement ID (G-…, không phải bí mật). Mình sẽ gắn tag và sự kiện `generate_lead` khi form gửi thành công. Cần banner đồng ý cookie nếu nhắm khách quốc tế. |
| Nhận lead | Google Sheet và email hoạt động | Đã gửi thử | Thêm UTM hoặc nguồn truy cập vào dữ liệu form. P2 |

---

## 9. Kiểm chứng tuyên bố (không tự tạo dữ liệu)

| Tuyên bố trên trang | Nguồn | Trạng thái |
|---|---|---|
| "Hơn 200 doanh nghiệp sản xuất" và "200+" | Trang chủ kizai.vn | **Mâu thuẫn**: kizai.vn/services ghi "50+ doanh nghiệp". Cần bạn xác nhận số đúng. |
| "100+ dự án", "10+ năm", "24/7" | Trang chủ kizai.vn | Chưa có tài liệu đối chứng. Cần bạn xác nhận. |
| 20 logo đối tác | Mục đối tác trên kizai.vn | Cần xác nhận được phép dùng logo **cho sản phẩm Kizai AI** (họ là khách của Kizai Solution, chưa chắc dùng Kizai AI) |
| Case study Yamaha Motor, Viqualita | kizai.vn/case-studies | Có thật, nhưng là dự án IoT. Thẻ case study trên trang đã ghi rõ phạm vi giải pháp. |
| Hiệu quả của AI (rút ngắn thời gian, % tái sử dụng…) | Không có | **Không hiển thị**. Bổ sung khi có số liệu POC. |

---

## 10. Sao lưu và rollback (đã chuẩn bị, chưa thực hiện thay đổi nào)

- **Mã nguồn:** bản đang chạy là commit `483bbcb` trên `main` (GitHub). Ngoài ra có bản sao trên Google Drive `G:\My Drive\Website Claude\kizai-website` và trong máy chủ đám mây.
- **Cấu hình Dokploy đang chạy** (ghi lại để khôi phục): build type Dockerfile; build arg `NEXT_PUBLIC_SITE_URL=https://aki.kizai.vn`; env `DEMO_WEBHOOK_URL`, `DEMO_WEBHOOK_SECRET`; cổng 8989→3000; domain aki.kizai.vn:3000; nhánh main; autoDeploy bật.
- **Rollback:** `git revert <commit>` rồi push lên `main` (tự deploy lại), hoặc bấm Redeploy trên commit cũ trong Dokploy. Không có database nên không cần backup dữ liệu. Lead nằm trong Google Sheet, không bị ảnh hưởng.
- **Đề xuất an toàn cho giai đoạn 3:**
  1. Làm việc trên nhánh `seo` (push nhánh này **không** kích hoạt deploy).
  2. Tạo app staging riêng trong project "Kizai Website", ví dụ `staging-aki.kizai.vn`, deploy từ nhánh `seo`, gắn `noindex`. Cần bạn duyệt vì phải thêm DNS và proxy host.
  3. Chỉ merge vào `main` sau khi bạn duyệt bản staging.

---

## 11. Danh sách lỗi theo ưu tiên

| # | Ưu tiên | Vấn đề | Giải pháp |
|---|---|---|---|
| 1 | P0 | 4/5 module không có trong HTML | Dựng sẵn cả 5 panel, hoặc làm 5 trang module riêng |
| 2 | P0 | Chưa có Search Console và sitemap chưa được gửi | Bạn xác minh GSC và gửi sitemap |
| 3 | P1 | Chỉ có 3 URL, không có trang theo từ khóa | Kiến trúc /vi/…, /ja/…, /en/… với 5 trang module và blog (giai đoạn 2) |
| 4 | P1 | Title và H1 thiếu từ khóa tìm kiếm | Viết lại theo keyword map (giai đoạn 2) |
| 5 | P1 | Thiếu schema SoftwareApplication và WebSite | Thêm JSON-LD, không có giá hay đánh giá |
| 6 | P1 | Font nặng: Montserrat 206 KB, JA thêm 900 KB | Giảm độ đậm, tối ưu font JA |
| 7 | P1 | Tên thương hiệu và sản phẩm chưa thống nhất | Chốt "Kizai AI" và "Kizai Solution(s) JSC" |
| 8 | P1 | Số liệu 200+ và 50+ mâu thuẫn | Bạn xác nhận |
| 9 | P1 | Push lên main là lên production ngay | Quy trình nhánh và staging (mục 10) |
| 10 | P1 | Chưa có GA4 và sự kiện lead | Cần Measurement ID |
| 11 | P2 | Thiếu llms.txt, FAQPage schema, khai báo bot AI | Thêm |
| 12 | P2 | sitemap lastmod đổi mỗi lần build | Dùng ngày sửa nội dung |
| 13 | P2 | TBT 0,6–1,4 s | Giảm phần hydrate |
| 14 | P2 | kizai.vn chưa link về aki.kizai.vn | Thêm link từ menu hoặc trang dịch vụ trên kizai.vn |
| 15 | P3 | Không có HSTS, lộ `x-powered-by`, redirect 2 bước cho URL lạ, ảnh OG không cache | Sửa trong mã nguồn (HSTS nên đặt ở NPM, cần bạn duyệt) |

## 12. Chưa kiểm tra được

- Phản hồi khi User-Agent là Googlebot, Bingbot hay GPTBot qua Nginx Proxy Manager (có thể có rule chặn bot hoặc WAF).
- Cấu hình chi tiết của NPM: chứng chỉ, HTTP/2, gzip/brotli, cache.
- Tài khoản GSC, Bing, GA4 sẵn có dưới email khác (cần bạn kiểm tra).
- Dữ liệu CWV thật (field data, CrUX). Cần 28 ngày có traffic.
- Trạng thái index trên Google (`site:aki.kizai.vn`). Domain mới lên khoảng 1 giờ, chưa có ý nghĩa.
