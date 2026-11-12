# SEO_BACKLOG: aki.kizai.vn

**Cập nhật:** 2026-11-12. Ưu tiên: P0 (ngay), P1 (trong 2 tuần), P2 (trong tháng), P3 (khi rảnh).
**Người làm:** B = bạn (cần đăng nhập hoặc quyết định), C = Claude (sửa mã).

## Cần bạn làm

| Ưu tiên | Việc | Ghi chú |
|---|---|---|
| ✅ | Xác minh Google Search Console và gửi sitemap | Xong 2026-11-12: thuộc tính `https://aki.kizai.vn/`, xác minh bằng tệp `public/google433fe2ac56c56521.html` (không được xóa tệp này). Đã gửi sitemap.xml |
| ✅ | Tạo GA4 | Xong 2026-11-12: tài khoản "Kizai Solution", tài sản "aki.kizai.vn", ID `G-QLDL2S6HN3`, đặt trong build arg Dokploy `NEXT_PUBLIC_GA_ID`. Cần đánh dấu `generate_lead` là sự kiện chính (key event) trong GA4 sau khi có dữ liệu |
| ✅ | Bing Webmaster: Import từ Search Console | Xong 2026-11-12: đã import aki.kizai.vn, sitemap trạng thái Success, 21 URL |
| ✅ | Xác nhận số liệu | 2026-11-12: dùng theo kizai.vn (anh Kiên xác nhận) |
| ✅ | Xác nhận được dùng logo | 2026-11-12: được dùng như trên kizai.vn |
| ✅ | Thêm link từ kizai.vn sang aki.kizai.vn | Xong 2026-11-12: link "Kizai AI" ở footer kizai.vn, cột KIZAI ERP (dưới KIZAI LIMS) (sửa tại kizai.vn/cms/settings). Footer kizai.vn render bằng JavaScript nên link không có trong HTML gốc; Google vẫn đọc được. Nên render footer phía server khi sửa code kizai.vn |
| P2 | Cung cấp số liệu POC hoặc trích dẫn khách hàng của Kizai AI (có đồng ý) | Để thêm vào trang module và schema |
| P2 | Thống nhất tên "Kizai AI" và "Kizai Solution" trên kizai.vn, LinkedIn, Facebook, Google Business Profile | |
| ✅ | Bật HSTS trên Nginx Proxy Manager cho aki.kizai.vn | Xong 2026-11-12 (anh Kiên bật): Force SSL + HSTS, không bật Sub-domains. Header `max-age=63072000; preload` (2 năm). Muốn tắt: tắt HSTS trong NPM, nhưng trình duyệt đã ghé vẫn nhớ tới hết max-age |

## Claude làm

| Ưu tiên | Việc | Trạng thái |
|---|---|---|
| P0 | Đưa cả 5 module vào HTML trang chủ | ✅ Xong 2026-11-12 |
| P1 | 15 trang module (5 × 3 ngôn ngữ), breadcrumb, link nội bộ | ✅ Xong |
| P1 | Title và description có từ khóa cho trang chủ và module | ✅ Xong |
| P1 | Schema WebSite, SoftwareApplication, FAQPage, BreadcrumbList, WebPage | ✅ Xong |
| P1 | Giảm font: bỏ web font tiếng Nhật (khoảng 900 KB), bỏ Montserrat 800 | ✅ Xong |
| P1 | Chỗ gắn GA4, GSC, Bing qua biến môi trường. Sự kiện `generate_lead` | ✅ Xong (chờ mã) |
| P2 | `/llms.txt`, robots.txt khai báo bot AI, sitemap `lastmod` cố định | ✅ Xong |
| P2 | Bỏ `x-powered-by`, cache ảnh OG, header bảo mật cơ bản | ✅ Xong |
| P2 | Mục blog `/{locale}/blog` + schema Article (tác giả, người duyệt, ngày) | Chờ bài đầu tiên (CONTENT_PLAN_90D) |
| P2 | Giảm TBT: chuyển phần tĩnh của Navbar, Contact sang server component | Bỏ qua 2026-11-12: JS riêng của trang chỉ khoảng 23 KB, phần lớn là framework Next.js dùng chung (103 KB), tách menu chỉ giảm vài KB |
| P2 | Ảnh OG riêng cho từng trang module | ✅ Xong 2026-11-12: `public/og/modules/{locale}-{slug}.jpg` |
| P2 | Thêm UTM hoặc nguồn truy cập vào dữ liệu form gửi Google Sheet | ✅ Xong 2026-11-12: Sheet có thêm cột Nguồn truy cập, Trang vào đầu tiên, Trang gửi form (Apps Script phiên bản 2) |
| P2 | Môi trường staging (`staging-aki.kizai.vn`, noindex) | Chưa làm. Cần DNS và proxy host |
| P3 | `/xyz` đang redirect 2 bước rồi mới 404 | ✅ Xong 2026-11-12: đường dẫn lạ trả 404 ngay |
| P3 | Trang `/{locale}/modules` (danh sách module) để breadcrumb có URL riêng | ✅ Xong 2026-11-12, có trong sitemap (21 URL) |
| P3 | Banner đồng ý cookie khi bật GA4 cho khách châu Âu | Làm khi bật GA4, nếu có khách EU |
