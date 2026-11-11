# CONTENT_PLAN_90D: aki.kizai.vn

**Giai đoạn:** 2026-11-17 → 2027-02-14 (13 tuần)
**Mục tiêu:** xây cụm nội dung kiến thức dẫn về 5 trang module, giúp Google và AI Search trích dẫn Kizai như một nguồn đáng tin.

**Nguyên tắc:**
- Mỗi bài cần một kỹ sư Kizai duyệt chuyên môn trước khi đăng, ghi tên người duyệt và ngày duyệt.
- Không đưa số liệu hay tên khách hàng khi chưa được phép.
- Mỗi bài có: đoạn trả lời ngắn 40–60 chữ ngay dưới H1 (giúp AI trích dẫn), bảng hoặc danh sách so sánh, 3–5 câu FAQ, link về trang module liên quan và nút đặt demo.
- Đăng bản VI trước, JA và EN dịch lại sau 1–2 tuần, có hreflang nối 3 bản.

**Việc kỹ thuật cần làm trước khi đăng bài đầu (nằm trong SEO_BACKLOG):** mục `/{locale}/blog`, schema Article với tác giả và người duyệt, đưa bài vào sitemap.

## 10 bài kiến thức

| # | Tuần | Tiêu đề VI (gợi ý) | Tiêu đề JA | Tiêu đề EN | Trang module | Cần dữ liệu / chuyên gia |
|---|---|---|---|---|---|---|
| 1 | 1–2 | DFM là gì? 12 lỗi thiết kế làm tăng chi phí gia công cơ khí | DFMとは？加工コストを上げる12の設計ミス | What is DFM? 12 design mistakes that raise machining cost | ai-design-review | Kỹ sư thiết kế liệt kê lỗi thường gặp tại xưởng |
| 2 | 2–3 | Vì sao nhà máy vẽ lại chi tiết đã có, và cách ngăn việc đó | 既存部品の再設計が起きる理由と防ぎ方 | Why factories redraw parts they already have, and how to stop it | design-reuse | Ví dụ ẩn danh từ khách hàng |
| 3 | 3–4 | Tìm bản vẽ cũ khi không nhớ mã: 5 cách từ thủ công đến AI | 品番がわからない過去図面を探す5つの方法 | Finding old drawings without the part number: 5 approaches | ai-visual-search | |
| 4 | 4–5 | Cách ước tính giá gia công CNC: vật liệu, giờ máy, hoàn thiện | CNC加工費の見積方法：材料・機械時間・仕上げ | How to estimate CNC machining cost: material, machine time, finishing | cost-rfq | Bảng cơ cấu giá mẫu do thu mua cung cấp (không dùng giá thật của khách) |
| 5 | 5–6 | Quy trình RFQ trong nhà máy cơ khí: từ nhận bản vẽ đến báo giá | 機械加工工場のRFQ業務フロー | The RFQ process in a machining plant, from drawing to quote | cost-rfq | |
| 6 | 6–7 | PLM, PDM và ERP: dữ liệu bản vẽ nên nằm ở đâu? | PLM・PDM・ERP：図面データはどこに置くべきか | PLM vs PDM vs ERP: where should drawing data live? | ai-visual-search | |
| 7 | 7–8 | GD&T cơ bản cho kỹ sư mới: 14 ký hiệu dung sai hình học | 新人向け幾何公差の基本：14の記号 | GD&T basics for new engineers: the 14 symbols | ai-design-review | |
| 8 | 8–9 | Chuẩn hóa linh kiện: lộ trình 4 bước cho nhà máy vừa và nhỏ | 中小工場のための部品標準化4ステップ | Part standardization: a 4-step roadmap for mid-size plants | design-reuse | |
| 9 | 10–11 | MRO là gì? Quản lý phụ tùng và đồ gá bằng dữ liệu | MROとは？データで治具とスペアパーツを管理 | What is MRO? Managing spare parts and tooling with data | process-tooling-mro | |
| 10 | 12–13 | Bảo mật dữ liệu bản vẽ khi dùng AI: cloud hay on-premise? | AI活用時の図面データセキュリティ：クラウドかオンプレか | Drawing data security with AI: cloud or on-premise? | trang chủ (FAQ) | Chính sách bảo mật thực tế của Kizai |

## Lịch làm việc mỗi bài

1. Kỹ sư Kizai gửi dàn ý và kiến thức thực tế (khoảng 30 phút phỏng vấn).
2. Viết bản nháp VI theo KEYWORD_MAP.
3. Kỹ sư duyệt chuyên môn. Người quản lý duyệt thông điệp.
4. Đăng, gửi URL vào Search Console (URL Inspection → Request indexing).
5. Dịch JA và EN, kỹ sư Nhật đọc lại bản JA.
6. Sau 4 tuần: xem số hiển thị và nhấp trong Search Console, chỉnh title nếu CTR thấp.

## Đo lường (khi có GA4 và Search Console)

- Số hiển thị và nhấp theo trang, theo ngôn ngữ.
- Sự kiện `generate_lead` (form demo gửi thành công) theo trang nguồn.
- Lượt truy cập đến từ AI Search (referrer chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com).
