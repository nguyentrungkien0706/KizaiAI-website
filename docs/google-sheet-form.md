# Nhận form đặt demo vào Google Sheet và email

Cách này miễn phí và không cần API key. Mất khoảng 5 phút.

## 1. Tạo Google Sheet

1. Tạo một Google Sheet mới, ví dụ "Kizai – Yêu cầu demo".
2. Dòng 1 đặt các cột: `Thời gian | Họ tên | Email | Công ty | Số kỹ sư | CAD/PLM | Nhu cầu | Ngôn ngữ`

## 2. Thêm Apps Script

1. Trong Sheet: **Tiện ích mở rộng → Apps Script**.
2. Xóa code mẫu, dán đoạn dưới đây. Đổi `SECRET` thành một chuỗi ngẫu nhiên của riêng bạn, và `NOTIFY` thành email nhận thông báo.

```js
const SECRET = "doi-thanh-chuoi-bi-mat-cua-ban";
const NOTIFY = "kiennguyen@kizai.vn";

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  if (d.secret !== SECRET) return ContentService.createTextOutput("forbidden");
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  sheet.appendRow([new Date(d.submittedAt), d.name, d.email, d.company, d.size, d.cad, d.need, d.locale]);
  MailApp.sendEmail({
    to: NOTIFY,
    replyTo: d.email,
    subject: "Yêu cầu demo mới: " + d.company,
    body: [
      "Họ tên: " + d.name,
      "Email: " + d.email,
      "Công ty: " + d.company,
      "Số kỹ sư: " + d.size,
      "CAD/PLM: " + d.cad,
      "Nhu cầu: " + d.need,
      "Ngôn ngữ trang: " + d.locale,
    ].join("\n"),
  });
  return ContentService.createTextOutput("ok");
}
```

3. **Triển khai → Tùy chọn triển khai mới → Ứng dụng web**. Thực thi với tư cách: *Tôi*. Người có quyền truy cập: *Bất kỳ ai*. Bấm Triển khai và cấp quyền.
4. Sao chép **URL ứng dụng web** (dạng `https://script.google.com/macros/s/.../exec`).

## 3. Đặt biến môi trường cho website

Trên máy chủ (hoặc Vercel → Settings → Environment Variables):

```
DEMO_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
DEMO_WEBHOOK_SECRET=doi-thanh-chuoi-bi-mat-cua-ban
```

`DEMO_WEBHOOK_SECRET` phải giống hệt `SECRET` trong Apps Script. Không ghi hai giá trị này vào code.

Cách này cũng dùng được với CRM có webhook (HubSpot, Bitrix24…): chỉ cần đổi `DEMO_WEBHOOK_URL`.

## Trạng thái hiện tại (11/11/2026)

Đã cài xong:
- Google Sheet **Kizai – Yêu cầu demo** trong thư mục Drive *Website Claude* (múi giờ Việt Nam, dòng tiêu đề cố định).
- Apps Script **Kizai – Nhận form demo** (cùng thư mục), triển khai dạng ứng dụng web, đã được cấp quyền.
- URL và mã bí mật nằm trong file `.env.local` ở thư mục dự án (không đưa lên git). Đã thử: sai mã bị từ chối, đúng mã ghi được vào Sheet và gửi email.

Nếu sửa code Apps Script, phải vào **Triển khai → Quản lý tùy chọn triển khai → Chỉnh sửa → Phiên bản mới** thì thay đổi mới có hiệu lực, URL giữ nguyên.
