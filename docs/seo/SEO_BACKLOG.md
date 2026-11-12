# SEO_BACKLOG: aki.kizai.vn

**Cập nhật:** 2026-11-12. Ưu tiên: P0 (ngay), P1 (trong 2 tuần), P2 (trong tháng), P3 (khi rảnh).
**Người làm:** B = bạn (cần đăng nhập hoặc quyết định), C = Claude (sửa mã).

## Cần bạn làm

| Ưu tiên | Việc | Ghi chú |
|---|---|---|
| ✅ | Xác minh Google Search Console và gửi sitemap | Xong 2026-11-12: thuộc tính `https://aki.kizai.vn/`, xác minh bằng tệp `public/google433fe2ac56c56521.html` (không được xóa tệp này). Đã gửi sitemap.xml |
| ✅ | Tạo GA4 | Xong 2026-11-12: tài khoản "Kizai Solution", tài sản "aki.kizai.vn", ID `G-QLDL2S6HN3`, đặt trong build arg Dokploy `NEXT_PUBLIC_GA_ID`. Cần đánh dấu `generate_lead` là sự kiện chính (key event) trong GA4 sau khi có dữ liệu |
| P1 | Bing Webmaster: Import từ Search Console | Hoặc gửi mã `msvalidate.01` để đặt vào `NEXT_PUBLIC_BING_VERIFICATION` |
| P1 | Xác nhận số liệu: 200+ hay 50+ doanh nghiệp, 100+ dự án, 10+ năm | Đang hiển thị 200+ theo trang chủ kizai.vn |
| P1 | Xác nhận được dùng 20 logo cho sản phẩm Kizai AI | Nếu không, đổi tiêu đề dải logo thành "Khách hàng của Kizai Solution" |
| P1 | Thêm link từ kizai.vn (menu hoặc trang Dịch vụ) sang aki.kizai.vn | Giúp Google hiểu quan hệ giữa 2 domain và truyền uy tín |
| P2 | Cung cấp số liệu POC hoặc trích dẫn khách hàng của Kizai AI (có đồng ý) | Để thêm vào trang module và schema |
| P2 | Thống nhất tên "Kizai AI" và "Kizai Solution" trên kizai.vn, LinkedIn, Facebook, Google Business Profile | |
| P3 | Bật HSTS trên Nginx Proxy Manager cho aki.kizai.vn | Tác động: trình duyệt luôn dùng HTTPS. Rollback khó trong thời hạn max-age, nên bắt đầu với max-age ngắn |

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
| P2 | Giảm TBT: chuyển phần tĩnh của Navbar, Contact sang server component | Chưa làm |
| P2 | Ảnh OG riêng cho từng trang module | Chưa làm (đang dùng ảnh OG chung theo ngôn ngữ) |
| P2 | Thêm UTM hoặc nguồn truy cập vào dữ liệu form gửi Google Sheet | Chưa làm. Cần thêm cột trong Sheet và sửa Apps Script |
| P2 | Môi trường staging (`staging-aki.kizai.vn`, noindex) | Chưa làm. Cần DNS và proxy host |
| P3 | `/xyz` đang redirect 2 bước rồi mới 404 | Chưa làm |
| P3 | Trang `/{locale}/modules` (danh sách module) để breadcrumb có URL riêng | Chưa làm (đang trỏ về `#modules`) |
| P3 | Banner đồng ý cookie khi bật GA4 cho khách châu Âu | Làm khi bật GA4, nếu có khách EU |
