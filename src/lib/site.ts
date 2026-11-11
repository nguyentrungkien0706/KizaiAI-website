// Cấu hình chung của site.
export const site = {
  /** Tên miền chính thức. Đặt biến môi trường NEXT_PUBLIC_SITE_URL khi đưa lên mạng (ví dụ https://ai.kizai.vn). */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  name: "Kizai Solution",
  loginUrl: "", // [LINK ĐĂNG NHẬP] điền khi có cổng đăng nhập cho khách hàng; để "" thì nút Đăng nhập được ẩn.
};
