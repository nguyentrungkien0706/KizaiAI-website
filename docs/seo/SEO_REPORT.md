# SEO_REPORT: aki.kizai.vn

**Ngày nghiệm thu:** 2026-11-12 (giờ Việt Nam). **Bản deploy:** commit `88e8cf5` trên `main`, Dokploy báo `done`.
**Điểm rollback:** commit `483bbcb` (bản trước SEO). Cách làm: `git revert 88e8cf5 && git push origin main`, Dokploy tự deploy lại. Hoặc bấm Redeploy bản cũ trong Dokploy.

## 1. Tóm tắt

| Nhóm | Trạng thái |
|---|---|
| Hoàn thành kỹ thuật | ✅ Đã xong và kiểm tra trực tiếp trên aki.kizai.vn |
| Chờ Google lập chỉ mục | ⏳ Chưa bắt đầu, vì Search Console chưa xác minh và sitemap chưa được gửi |
| Kết quả SEO thật (hiển thị, nhấp, lead) | ❓ Chưa đo được. Cần GSC và GA4, sau đó 4–8 tuần mới có số liệu đáng tin |

## 2. Hoàn thành kỹ thuật (đã kiểm tra trên production)

Đã kiểm tra trực tiếp 18 URL: `/vi`, `/ja`, `/en` và 5 trang module × 3 ngôn ngữ.

| Kiểm tra | Kết quả |
|---|---|
| HTTP status | 18/18 trả về 200 |
| H1 | 18/18 có đúng một H1 |
| Canonical | 18/18 trỏ về chính URL đó |
| hreflang | 18/18 có vi, ja, en và x-default, hai chiều |
| Title và description | 18/18 có, title chứa từ khóa chính theo KEYWORD_MAP |
| Open Graph image | 18/18 có |
| JSON-LD | Trang chủ: Organization, WebSite, SoftwareApplication, WebPage, FAQPage. Trang module: Organization, WebSite, SoftwareApplication, WebPage, BreadcrumbList |
| 5 module trong HTML trang chủ | Có đủ 5 panel ở cả 3 ngôn ngữ (trước đây chỉ có 1) |
| sitemap.xml | 18 URL, `lastmod` cố định, có hreflang |
| robots.txt | Cho phép tất cả, chặn `/api/`, khai báo bot AI (GPTBot, ClaudeBot, PerplexityBot…) |
| `/llms.txt` | Trả về 200, `text/plain` |
| Header `x-powered-by` | Đã bỏ |
| Font tiếng Nhật | Bỏ web font khoảng 900 KB. Trang JA giảm từ 1355 KB xuống 378 KB |
| Core Web Vitals (lab, mô phỏng mobile) | LCP: VI 2,2 s, JA 2,47 s (dưới ngưỡng 2,5 s). Desktop dưới 1 s |
| Giao diện và khả năng truy cập | Không tràn ngang và không có lỗi axe ở 375, 768, 1024, 1440 px |
| Form demo | Mã gửi form không đổi. Đã thử gửi trên bản local. Sau khi gửi thành công có thêm sự kiện `generate_lead` (chỉ chạy khi có GA4) |

Lưu ý: số Core Web Vitals ở trên là đo lab, không phải dữ liệu người dùng thật (CrUX). Dữ liệu thật chỉ có khi trang đủ lượt truy cập.

## 3. Chờ Google lập chỉ mục

Chưa thể bắt đầu, vì cần quyền mà Claude không có:

1. Xác minh Search Console cho `kizai.vn` (Domain property qua DNS TXT) hoặc `https://aki.kizai.vn` (thẻ meta).
2. Gửi `https://aki.kizai.vn/sitemap.xml`.
3. Dùng URL Inspection → Request indexing cho `/vi` và 5 trang module tiếng Việt.

Sau khi gửi, Google thường mất từ vài ngày đến 2–4 tuần để lập chỉ mục trang mới.

## 4. Kết quả SEO thật

Chưa có số liệu, vì chưa có GSC và GA4. Không có số nào trong báo cáo này là thứ hạng hay lượt truy cập thật.
Sau 4–8 tuần có GSC, cần xem: số hiển thị và nhấp theo trang, theo ngôn ngữ; CTR; truy vấn thật so với KEYWORD_MAP; số `generate_lead` theo trang nguồn.

## 5. Cần bạn làm hoặc duyệt

Danh sách đầy đủ có trong `SEO_BACKLOG.md`. Các việc quan trọng nhất:

- **P0:** xác minh GSC và gửi sitemap.
- **P0:** tạo GA4 và gửi Measurement ID. Claude sẽ đặt nó vào build arg `NEXT_PUBLIC_GA_ID` trong Dokploy.
- **P1:**
  - Bing Webmaster (Import từ GSC).
  - Xác nhận số liệu 200+ hay 50+ doanh nghiệp.
  - Xác nhận quyền dùng logo.
  - Thêm link từ kizai.vn sang aki.kizai.vn.
- **P3:** HSTS trên Nginx Proxy Manager. Việc này cần bạn duyệt, vì khó rollback.

## 6. Tài liệu đi kèm

- `audit.md`: kiểm toán giai đoạn 1.
- `KEYWORD_MAP.md`: bản đồ từ khóa và URL cho 3 ngôn ngữ.
- `CONTENT_PLAN_90D.md`: kế hoạch 10 bài trong 13 tuần.
- `SEO_BACKLOG.md`: danh sách việc còn lại, chia theo người làm.
