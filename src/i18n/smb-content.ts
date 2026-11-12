import type { Locale } from "./config";

/**
 * Trang "Kizai AI cho hộ kinh doanh và doanh nghiệp nhỏ" (/[locale]/ho-kinh-doanh).
 * Nội dung tự viết. Chỉ các việc anh Kiên xác nhận Kizai AI làm được (2026-11-12).
 * Không có giá, số liệu hiệu quả, tên khách hàng hay tên đối tác.
 */

export const smbPath = "/ho-kinh-doanh";

export type SmbGroupId = "sales" | "purchase" | "stock" | "cash" | "tax" | "reports" | "grow";

type Chat = { from: "user" | "ai"; text: string };

export type SmbContent = {
  seo: { title: string; description: string };
  nav: string;
  breadcrumb: string;
  hero: {
    badge: string;
    h1: string;
    sub: string;
    primary: string;
    secondary: string;
    chatTitle: string;
    chatNote: string;
    chat: Chat[];
    inputPlaceholder: string;
  };
  why: { title: string; sub: string; items: { title: string; text: string }[]; note: string };
  compare: {
    title: string;
    before: { label: string; items: string[] };
    after: { label: string; items: string[] };
  };
  ways: { title: string; sub: string; items: { title: string; text: string; example: string }[] };
  skills: {
    title: string;
    sub: string;
    groups: { id: SmbGroupId; label: string; items: { title: string; text: string }[] }[];
  };
  industries: { title: string; sub: string; items: { name: string; points: string[] }[]; other: string };
  steps: { title: string; sub: string; items: { title: string; text: string }[] };
  alerts: { title: string; sub: string; items: { label: string; text: string }[] };
  grow: { title: string; sub: string; items: { name: string; text: string; href: string }[]; link: string };
  faq: { title: string; items: { q: string; a: string }[] };
  homeBand: { title: string; text: string; link: string };
};

const vi: SmbContent = {
  seo: {
    title: "Phần mềm AI bán hàng, kho, sổ sách và thuế cho hộ kinh doanh | Kizai AI",
    description:
      "Kizai AI ghi đơn bán, nhập hàng, kho, thu chi và lập tờ khai thuế hộ kinh doanh từ tin nhắn, giọng nói hoặc ảnh chụp. Sẵn sàng cho việc bỏ thuế khoán từ 2026.",
  },
  nav: "Hộ kinh doanh",
  breadcrumb: "Hộ kinh doanh & doanh nghiệp nhỏ",
  hero: {
    badge: "Kizai AI cho hộ kinh doanh và doanh nghiệp nhỏ",
    h1: "Bán hàng, kho, sổ sách và thuế trong một khung chat",
    sub: "Nhắn một câu, nói một câu hoặc chụp một tấm ảnh. Kizai AI hiểu nghiệp vụ, hỏi lại cho chắc rồi mới ghi sổ. Anh chị lo buôn bán, phần giấy tờ để AI làm.",
    primary: "Đặt lịch demo",
    secondary: "Xem AI làm được gì",
    chatTitle: "Kizai AI",
    chatNote: "Ví dụ minh họa",
    chat: [
      { from: "user", text: "Bán 3 thùng nước suối cho anh Nam, ghi nợ nhé" },
      { from: "ai", text: "Đơn 3 thùng nước suối cho anh Nam, ghi vào công nợ, trừ kho 3 thùng. Em lưu nhé?" },
      { from: "user", text: "Lưu đi" },
      { from: "ai", text: "Đã lưu đơn và cập nhật công nợ. Nước suối còn dưới mức tối thiểu, em soạn sẵn đơn nhập thêm để anh chị xem nhé?" },
    ],
    inputPlaceholder: "Nhắn cho Kizai AI…",
  },
  why: {
    title: "Từ 2026, sổ sách không còn là việc làm cho có",
    sub: "Hộ kinh doanh chuyển từ thuế khoán sang tự kê khai. Số liệu bán hàng hằng ngày trở thành căn cứ tính thuế.",
    items: [
      {
        title: "Bỏ thuế khoán",
        text: "Theo Nghị quyết 68-NQ/TW, thuế khoán với hộ kinh doanh chấm dứt chậm nhất trong năm 2026.",
      },
      {
        title: "Kê khai theo doanh thu thật",
        text: "Hộ kinh doanh tự kê khai, tự nộp. Doanh thu, chi phí và tồn kho cần ghi đầy đủ, khớp nhau.",
      },
      {
        title: "Hóa đơn điện tử",
        text: "Bán hàng cần xuất hóa đơn điện tử đúng chuẩn và gửi dữ liệu về cơ quan thuế.",
      },
    ],
    note: "Quy định có thể được hướng dẫn thêm. Kizai cập nhật cách tính và mẫu biểu theo văn bản mới.",
  },
  compare: {
    title: "Không phải học thêm một phần mềm",
    before: {
      label: "Cách làm quen thuộc",
      items: [
        "Ghi sổ tay, cuối ngày chép lại vào Excel",
        "Nhập từng mã hàng, số lượng, đơn giá",
        "Tự dò sao kê để biết khách nào đã chuyển khoản",
        "Cuối kỳ mới ngồi cộng doanh thu để khai thuế",
        "Hết hàng mới biết, khách nợ lâu mới nhớ",
      ],
    },
    after: {
      label: "Với Kizai AI",
      items: [
        "Nhắn, nói hoặc chụp, AI ghi đúng nghiệp vụ",
        "AI đọc lại nội dung và chờ anh chị đồng ý rồi mới lưu",
        "Tiền về tài khoản được ghép với đơn hàng",
        "Tờ khai thuế hình thành dần từ số liệu hằng ngày",
        "AI nhắc trước: sắp hết hàng, đến hạn thuế, nợ quá hạn",
      ],
    },
  },
  ways: {
    title: "Ba cách giao việc cho AI",
    sub: "Không có màn hình nhập liệu dài. Anh chị dùng cách nào tiện lúc đó.",
    items: [
      { title: "Nhắn tin", text: "Gõ như nhắn cho người làm.", example: "“Chi 1,2 triệu tiền điện tháng này”" },
      { title: "Nói", text: "Tay đang bận vẫn ra lệnh được.", example: "“Đặt thêm 20 thùng mì gói”" },
      { title: "Chụp ảnh", text: "Hóa đơn nhập, kệ hàng, trang sổ tay cũ.", example: "Ảnh hóa đơn nhà cung cấp" },
    ],
  },
  skills: {
    title: "Một ngày ở cửa hàng, AI lo những gì",
    sub: "Xếp theo lúc anh chị cần. Bấm vào từng mốc để xem nhanh.",
    groups: [
      {
        id: "sales",
        label: "Khi khách mua",
        items: [
          { title: "Lên đơn bằng một câu nói hoặc tin nhắn", text: "Kho, doanh thu và công nợ khách cập nhật cùng lúc khi anh chị gật đầu." },
          { title: "Hóa đơn điện tử đi kèm đơn", text: "Không phải mở thêm phần mềm hóa đơn riêng." },
          { title: "Giá combo, khuyến mãi, điểm thưởng", text: "Áp đúng chương trình đang chạy, khách quen được cộng điểm." },
          { title: "Khách trả lại hàng", text: "Tiền hoàn, hàng về kho và doanh thu được chỉnh cho khớp." },
          { title: "Bán ở đâu cũng vào một sổ", text: "Tại quầy, giao hàng, trang bán online hay sàn đều tách được theo kênh." },
        ],
      },
      {
        id: "purchase",
        label: "Khi nhập hàng",
        items: [
          { title: "Ảnh hóa đơn thành phiếu nhập", text: "AI đọc tên hàng, số lượng, giá và ghi luôn khoản phải trả." },
          { title: "Đơn đặt hàng soạn sẵn", text: "Nói tên hàng cần đặt, AI lập đơn để anh chị duyệt rồi mới gửi." },
          { title: "Biết nên nhập bao nhiêu", text: "Đề xuất dựa trên tốc độ bán thực tế, tránh dồn vốn vào hàng chậm." },
          { title: "Nhà cung cấp nào rẻ hơn", text: "Xem lịch sử giá nhập của cùng một mặt hàng ở các nơi." },
        ],
      },
      {
        id: "stock",
        label: "Trong kho",
        items: [
          { title: "Báo trước khi hết hàng", text: "Đặt mức tối thiểu cho từng món, AI nhắc khi sắp chạm." },
          { title: "Hàng có hạn dùng", text: "Theo dõi theo lô, nhắc đẩy bán những lô sắp hết hạn." },
          { title: "Đếm kho không cần ngồi dò", text: "Đọc số thực tế, AI so với sổ và chỉ ra món chênh." },
          { title: "Hàng hỏng, hàng tặng", text: "Ghi xuất hủy hoặc xuất dùng với lý do rõ ràng." },
        ],
      },
      {
        id: "cash",
        label: "Cuối ngày",
        items: [
          { title: "Chốt két", text: "Nhập số tiền đếm được, AI cho biết lệch bao nhiêu so với sổ quỹ." },
          { title: "Tiền chuyển khoản khớp với đơn", text: "Giao dịch ngân hàng và mã QR được ghép vào đúng đơn hàng." },
          { title: "Chi phí trong ngày", text: "Nhắn “trả tiền ship 200 nghìn”, AI ghi đúng khoản mục." },
          { title: "Tin tóm tắt ngày bán", text: "Doanh thu, tiền về, món bán chạy gửi tới anh chị mỗi tối." },
        ],
      },
      {
        id: "tax",
        label: "Cuối tháng và kỳ thuế",
        items: [
          { title: "Sổ kế toán hộ kinh doanh", text: "Các mẫu sổ theo Thông tư 88/2021/TT-BTC được ghi dần mỗi ngày." },
          { title: "Tờ khai điền sẵn", text: "Số thuế tính theo doanh thu thực tế, anh chị kiểm tra và xác nhận." },
          { title: "Lịch thuế không bỏ lỡ", text: "Nhắc trước hạn khai và hạn nộp, kèm số tiền ước tính." },
          { title: "Lãi lỗ và dòng tiền", text: "So với tháng trước, xem lãi gộp từng món và tiền mặt còn lại." },
          { title: "Công nợ hai chiều", text: "Ai đang nợ mình, mình đang nợ ai, khoản nào đến hạn." },
        ],
      },
      {
        id: "reports",
        label: "Hỏi bất cứ lúc nào",
        items: [
          { title: "Hỏi bằng tiếng Việt thường ngày", text: "“Tuần này bán được bao nhiêu?”, “Món nào bán chậm nhất?”" },
          { title: "Xếp hạng mặt hàng", text: "Món kéo doanh thu, món nên giảm nhập." },
          { title: "Tra một khách hoặc một nhà cung cấp", text: "Lịch sử mua bán và số dư công nợ trong một câu trả lời." },
        ],
      },
    ],
  },
  industries: {
    title: "Thiết lập sẵn theo ngành",
    sub: "Chọn ngành khi bắt đầu, các nghiệp vụ riêng của ngành được bật sẵn.",
    items: [
      { name: "Tạp hóa, bán lẻ", points: ["Tính tiền bằng tên hàng, không bắt buộc quét mã", "Một mặt hàng nhiều đơn vị: thùng, lốc, chai", "Khách quen mua trước trả sau"] },
      { name: "Mỹ phẩm", points: ["Hàng theo lô, cảnh báo cận hạn", "Bộ quà tặng tính kho từng món", "Chăm sóc khách mua lại"] },
      { name: "Thương mại điện tử", points: ["Đơn từ nhiều sàn về một chỗ", "Khớp tiền sàn trả với từng đơn", "Lãi thật sau phí, theo từng sàn"] },
      { name: "Phân phối, đại lý", points: ["Giá riêng cho từng cấp khách sỉ", "Thưởng theo sản lượng", "Chặn bán khi vượt hạn mức nợ"] },
      { name: "Chuỗi cửa hàng", points: ["Số liệu các chi nhánh gộp về một sổ", "Điều chuyển hàng giữa chi nhánh", "So sánh hiệu quả từng điểm bán"] },
      { name: "Dịch vụ: spa, salon, sửa chữa", points: ["Lịch hẹn và nhắc khách", "Thẻ liệu trình trừ dần theo buổi", "Tính công cho kỹ thuật viên"] },
      { name: "Xưởng sản xuất nhỏ", points: ["Nhập nguyên liệu, xuất thành phẩm", "Giá vốn theo đơn hàng", "Nối tiếp lên KIZAI ERP, MES"] },
    ],
    other: "Ngành của anh chị chưa có ở đây? Để lại thông tin, Kizai sẽ tư vấn cách thiết lập.",
  },
  steps: {
    title: "Bắt đầu trong ba bước",
    sub: "Phần khó nhất của mọi phần mềm là nhập dữ liệu ban đầu. Ở đây việc đó cũng giao cho AI.",
    items: [
      { title: "Kizai thiết lập theo ngành", text: "Nghiệp vụ, mẫu sổ và cách tính giá phù hợp ngành của anh chị được bật sẵn." },
      { title: "Gửi những gì đang có", text: "Danh sách hàng trong Excel, ảnh sổ ghi nợ, ảnh hóa đơn gần đây. AI dựng danh mục, khách, nhà cung cấp và số tồn ban đầu." },
      { title: "Dùng ngay từ đơn đầu tiên", text: "Không cần đợi nhập xong dữ liệu. Sổ sách đầy dần theo từng đơn hàng." },
    ],
  },
  alerts: {
    title: "AI lên tiếng trước khi anh chị phải hỏi",
    sub: "Ví dụ minh họa các nhắc việc Kizai AI gửi hằng ngày.",
    items: [
      { label: "Tồn kho", text: "Theo tốc độ bán tuần này, gạo bao 5 kg sẽ hết trước cuối tuần. Em soạn sẵn đơn nhập để anh chị xem nhé?" },
      { label: "Hạn thuế", text: "Sắp đến hạn nộp tờ khai quý. Số liệu đã được điền từ sổ bán hàng, anh chị kiểm tra lại là nộp được." },
      { label: "Công nợ", text: "Có hai khách quá hẹn trả tiền. Em đã soạn tin nhắc lịch sự cho từng người, anh chị duyệt thì em gửi." },
    ],
  },
  grow: {
    title: "Lớn lên không phải đổi phần mềm",
    sub: "Khi cửa hàng thành công ty, dữ liệu đang có được nối tiếp sang các giải pháp của Kizai Solution.",
    items: [
      { name: "KIZAI HRM", text: "Nhân sự, chấm công, tính lương.", href: "https://kizai.vn/solutions/kizai-hrm" },
      { name: "KIZAI PMS", text: "Quy trình mua hàng doanh nghiệp.", href: "https://kizai.vn/solutions/kizai-pms" },
      { name: "KIZAI RPA", text: "Tự động hóa việc lặp lại.", href: "https://kizai.vn/solutions/kizai-rpa" },
      { name: "KIZAI ERP", text: "Quản trị toàn diện cho doanh nghiệp sản xuất.", href: "https://kizai.vn/solutions/kizai-erp" },
    ],
    link: "Xem trên kizai.vn",
  },
  faq: {
    title: "Câu hỏi thường gặp",
    items: [
      { q: "Có phải gõ lại toàn bộ danh sách hàng từ đầu không?", a: "Không. Gửi file Excel đang dùng, ảnh sổ ghi nợ hoặc vài hóa đơn gần đây, AI dựng danh mục hàng, khách, nhà cung cấp và số tồn ban đầu. Anh chị chỉ cần xem lại bản tóm tắt." },
      { q: "Tôi nói nhầm số lượng thì sao?", a: "Trước khi lưu, AI luôn đọc lại nội dung để anh chị kiểm tra. Đã lưu rồi vẫn sửa được, các sổ liên quan tự điều chỉnh theo." },
      { q: "Kizai AI giúp gì khi bỏ thuế khoán?", a: "Sổ kế toán hộ kinh doanh theo Thông tư 88/2021/TT-BTC được ghi từ giao dịch thật mỗi ngày, tờ khai được điền sẵn từ chính số liệu đó, hóa đơn điện tử xuất ngay khi bán." },
      { q: "Ai xem được số liệu của cửa hàng tôi?", a: "Dữ liệu thuộc về anh chị và chỉ dùng để phục vụ cửa hàng của anh chị. Kizai không bán dữ liệu cho bên thứ ba." },
      { q: "Khi mở thêm chi nhánh hoặc lên công ty thì sao?", a: "Nhiều điểm bán dùng chung một sổ. Khi cần nhân sự, mua hàng hay ERP đầy đủ, dữ liệu được nối tiếp sang các giải pháp KIZAI HRM, PMS, RPA và ERP." },
      { q: "Chi phí thế nào?", a: "Tùy quy mô và ngành. Để lại thông tin ở cuối trang, Kizai sẽ tư vấn gói phù hợp." },
    ],
  },
  homeBand: {
    title: "Kizai AI cho hộ kinh doanh và doanh nghiệp nhỏ",
    text: "Bán hàng, kho, thu chi, hóa đơn điện tử và tờ khai thuế qua tin nhắn, giọng nói hoặc ảnh chụp.",
    link: "Xem giải pháp",
  },
};

const ja: SmbContent = {
  seo: {
    title: "個人事業主・小規模事業者向けAI：販売・在庫・帳簿・税務｜Kizai AI",
    description:
      "Kizai AIはメッセージ、音声、写真から販売、仕入、在庫、入出金を記帳し、ベトナムの個人事業世帯向け税務申告書を作成します。2026年の定額課税廃止に対応。",
  },
  nav: "個人事業主",
  breadcrumb: "個人事業主・小規模事業者",
  hero: {
    badge: "個人事業主・小規模事業者向けKizai AI",
    h1: "販売、在庫、帳簿、税務をひとつのチャットで",
    sub: "メッセージを送る、話しかける、写真を撮る。Kizai AIが業務を理解し、内容を確認してから記帳します。お客様は商売に集中できます。",
    primary: "デモを予約",
    secondary: "AIにできること",
    chatTitle: "Kizai AI",
    chatNote: "説明用の例",
    chat: [
      { from: "user", text: "ミネラルウォーター3箱をナムさんに掛け売りで" },
      { from: "ai", text: "ナムさんへミネラルウォーター3箱、売掛金に計上し在庫から3箱減らします。保存しますか？" },
      { from: "user", text: "保存して" },
      { from: "ai", text: "注文と売掛金を更新しました。ミネラルウォーターが最低在庫を下回りました。追加発注の案を作成しましょうか？" },
    ],
    inputPlaceholder: "Kizai AIにメッセージ…",
  },
  why: {
    title: "2026年、帳簿は「形だけ」では済まなくなる",
    sub: "ベトナムの個人事業世帯は定額課税から自己申告へ移行します。日々の販売データが課税の根拠になります。",
    items: [
      { title: "定額課税の廃止", text: "決議68-NQ/TWにより、個人事業世帯への定額課税は遅くとも2026年中に廃止されます。" },
      { title: "実際の売上で申告", text: "事業者が自ら申告・納付します。売上、費用、在庫を正しく記録し、整合させる必要があります。" },
      { title: "電子インボイス", text: "販売時に規格に沿った電子インボイスを発行し、税務当局へデータを送信します。" },
    ],
    note: "規定は今後さらに細則が出る可能性があります。Kizaiは新しい通達に合わせて計算方法と様式を更新します。",
  },
  compare: {
    title: "新しいソフトを覚える必要はありません",
    before: {
      label: "これまでのやり方",
      items: [
        "ノートに書き、夜にExcelへ転記",
        "品番、数量、単価を一行ずつ入力",
        "通帳を見て誰が振り込んだかを照合",
        "期末にまとめて売上を集計して申告",
        "在庫切れや長期の売掛金に後から気づく",
      ],
    },
    after: {
      label: "Kizai AIなら",
      items: [
        "メッセージ・音声・写真でAIが正しく記帳",
        "AIが内容を読み上げ、承認後に保存",
        "入金を注文と自動で突き合わせ",
        "日々のデータから申告書が自然にできあがる",
        "在庫切れ、納税期限、延滞をAIが先に知らせる",
      ],
    },
  },
  ways: {
    title: "AIへの頼み方は3つ",
    sub: "長い入力画面はありません。その時に便利な方法で。",
    items: [
      { title: "メッセージ", text: "スタッフに頼むように入力。", example: "「今月の電気代120万ドン支払い」" },
      { title: "音声", text: "手がふさがっていても指示できます。", example: "「インスタント麺を20箱追加発注」" },
      { title: "写真", text: "仕入請求書、棚、昔の帳簿。", example: "仕入先の請求書の写真" },
    ],
  },
  skills: {
    title: "店の一日、AIが受け持つこと",
    sub: "必要になるタイミング順に並べています。見たい場面を選んでください。",
    groups: [
      {
        id: "sales",
        label: "お客様が買うとき",
        items: [
          { title: "ひと言で受注", text: "承認と同時に在庫、売上、売掛金がまとめて更新されます。" },
          { title: "電子インボイスも同時に", text: "別のインボイスソフトを開く必要はありません。" },
          { title: "セット価格・キャンペーン・ポイント", text: "実施中の施策を正しく適用し、常連客にポイントを付与。" },
          { title: "返品", text: "返金、在庫戻し、売上調整が整合します。" },
          { title: "どこで売ってもひとつの帳簿に", text: "店頭、配達、自社サイト、モールをチャネル別に分けて把握。" },
        ],
      },
      {
        id: "purchase",
        label: "仕入れるとき",
        items: [
          { title: "請求書の写真が入庫伝票に", text: "AIが品名・数量・価格を読み取り、買掛金も計上。" },
          { title: "発注書を下書き", text: "必要な品を話すと、承認待ちの発注書をAIが作成。" },
          { title: "仕入数量の目安", text: "実際の販売ペースから提案し、売れない在庫に資金を寝かせません。" },
          { title: "どの仕入先が安いか", text: "同じ商品の仕入価格履歴を仕入先ごとに比較。" },
        ],
      },
      {
        id: "stock",
        label: "在庫",
        items: [
          { title: "欠品前に通知", text: "商品ごとに最低在庫を設定し、近づくとAIが知らせます。" },
          { title: "期限のある商品", text: "ロット単位で追跡し、期限が近いロットの販売を促します。" },
          { title: "棚卸の照合", text: "実数を伝えるだけで帳簿と比較し、差異を表示。" },
          { title: "破損・贈答品", text: "理由付きで廃棄・払出を記録。" },
        ],
      },
      {
        id: "cash",
        label: "一日の終わり",
        items: [
          { title: "レジ締め", text: "数えた現金を入力すると、帳簿との差額をAIが表示。" },
          { title: "振込を注文に紐付け", text: "銀行振込とQR決済を該当する注文に自動で照合。" },
          { title: "その日の経費", text: "「送料20万ドン支払い」と送るだけで正しい費目に記帳。" },
          { title: "販売の日報", text: "売上、入金、売れ筋を毎晩お知らせ。" },
        ],
      },
      {
        id: "tax",
        label: "月末・申告時期",
        items: [
          { title: "個人事業世帯の会計帳簿", text: "通達88/2021/TT-BTCの様式で毎日少しずつ記帳。" },
          { title: "記入済みの申告書", text: "実際の売上から税額を計算。確認して承認するだけ。" },
          { title: "税務カレンダー", text: "申告・納付期限の前に、見込み税額とともに通知。" },
          { title: "損益と資金繰り", text: "前月比、商品別粗利、手元資金を確認。" },
          { title: "売掛・買掛の両方", text: "誰に貸していて誰に借りているか、期日が来るのはどれか。" },
        ],
      },
      {
        id: "reports",
        label: "いつでも質問",
        items: [
          { title: "ふだんの言葉で質問", text: "「今週の売上は？」「一番売れていない商品は？」" },
          { title: "商品ランキング", text: "売上を引っ張る商品と、仕入を減らすべき商品。" },
          { title: "顧客・仕入先を検索", text: "取引履歴と残高をひとつの回答で。" },
        ],
      },
    ],
  },
  industries: {
    title: "業種別にあらかじめ設定",
    sub: "開始時に業種を選ぶと、その業種特有の業務が有効になります。",
    items: [
      { name: "食料品・小売", points: ["商品名で会計、スキャンは必須ではない", "ケース・パック・本など複数単位", "常連客の後払い"] },
      { name: "化粧品", points: ["ロット管理と期限間近の警告", "ギフトセットも単品ごとに在庫計上", "リピーターへのフォロー"] },
      { name: "EC", points: ["複数モールの注文を一か所に", "モールからの入金を注文ごとに照合", "手数料差引後の実利益をモール別に"] },
      { name: "卸・代理店", points: ["卸先のランク別価格", "数量に応じたリベート", "与信超過時の販売ストップ"] },
      { name: "チェーン店", points: ["各店舗の数字をひとつの帳簿に", "店舗間の商品移動", "店舗別の実績比較"] },
      { name: "サービス：スパ・サロン・修理", points: ["予約とお客様へのリマインド", "回数制コースの消化管理", "技術者の作業報酬計算"] },
      { name: "小規模工場", points: ["原材料の受入と製品の出荷", "受注別原価", "KIZAI ERP・MESへ拡張"] },
    ],
    other: "業種が見つかりませんか？情報をお寄せいただければ、設定方法をご案内します。",
  },
  steps: {
    title: "3ステップで開始",
    sub: "ソフト導入で一番大変な初期データ入力も、AIに任せられます。",
    items: [
      { title: "業種に合わせてKizaiが設定", text: "業種に合った業務、帳簿様式、価格の計算方法を最初から有効にします。" },
      { title: "今あるものを送るだけ", text: "Excelの商品リスト、掛け帳の写真、最近の請求書。AIが商品・顧客・仕入先・初期在庫を作成。" },
      { title: "最初の注文から使える", text: "データ入力の完了を待つ必要はありません。注文のたびに帳簿が埋まっていきます。" },
    ],
  },
  alerts: {
    title: "聞かれる前にAIが知らせます",
    sub: "Kizai AIが毎日送る通知の例です。",
    items: [
      { label: "在庫", text: "今週の販売ペースだと、5kg入りの米は週末前に切れます。発注案を用意しましょうか？" },
      { label: "納税期限", text: "四半期申告の期限が近づいています。販売帳簿から数字を反映済みなので、確認すれば提出できます。" },
      { label: "売掛金", text: "支払期日を過ぎたお客様が2名います。それぞれに丁寧な連絡文を用意しました。承認すれば送信します。" },
    ],
  },
  grow: {
    title: "成長してもソフトを変える必要はありません",
    sub: "店舗が会社へ成長しても、データはKizai Solutionの各ソリューションへ引き継げます。",
    items: [
      { name: "KIZAI HRM", text: "人事、勤怠、給与。", href: "https://kizai.vn/solutions/kizai-hrm" },
      { name: "KIZAI PMS", text: "企業の購買プロセス。", href: "https://kizai.vn/solutions/kizai-pms" },
      { name: "KIZAI RPA", text: "繰り返し業務の自動化。", href: "https://kizai.vn/solutions/kizai-rpa" },
      { name: "KIZAI ERP", text: "製造業向けの統合管理。", href: "https://kizai.vn/solutions/kizai-erp" },
    ],
    link: "kizai.vnで見る",
  },
  faq: {
    title: "よくある質問",
    items: [
      { q: "商品リストを最初から入力し直す必要がありますか？", a: "いいえ。使用中のExcel、掛け帳の写真、最近の請求書を送ると、AIが商品、顧客、仕入先、初期在庫を作成します。要約を確認するだけです。" },
      { q: "数量を言い間違えたら？", a: "保存前にAIが必ず内容を読み上げます。保存後も修正でき、関連する帳簿は自動で調整されます。" },
      { q: "定額課税の廃止にどう役立ちますか？", a: "通達88/2021/TT-BTCに沿った帳簿を実際の取引から毎日記帳し、そのデータで申告書を作成。販売時には電子インボイスを発行します。" },
      { q: "店の数字は誰が見られますか？", a: "データはお客様のものであり、お客様の事業のためだけに使われます。Kizaiが第三者にデータを販売することはありません。" },
      { q: "支店を増やしたり法人化したら？", a: "複数店舗でひとつの帳簿を共有できます。人事、購買、ERPが必要になれば、KIZAI HRM、PMS、RPA、ERPへデータを引き継げます。" },
      { q: "費用は？", a: "規模と業種によって異なります。ページ下部からお問い合わせいただければ、最適なプランをご案内します。" },
    ],
  },
  homeBand: {
    title: "個人事業主・小規模事業者向けKizai AI",
    text: "販売、在庫、入出金、電子インボイス、税務申告をメッセージ・音声・写真で。",
    link: "詳しく見る",
  },
};

const en: SmbContent = {
  seo: {
    title: "AI Sales, Inventory, Bookkeeping and Tax for Small Businesses | Kizai AI",
    description:
      "Kizai AI records sales, purchases, stock and cash from a message, a voice note or a photo, and prepares Vietnamese household-business tax returns. Ready for the end of presumptive tax in 2026.",
  },
  nav: "Small business",
  breadcrumb: "Household & small businesses",
  hero: {
    badge: "Kizai AI for household and small businesses",
    h1: "Sales, stock, books and tax in one chat",
    sub: "Send a message, say it out loud or snap a photo. Kizai AI understands the transaction, checks with you, then records it. You run the shop; the AI keeps the books.",
    primary: "Book a demo",
    secondary: "See what the AI does",
    chatTitle: "Kizai AI",
    chatNote: "Illustrative example",
    chat: [
      { from: "user", text: "Sold 3 cases of bottled water to Mr Nam, on credit" },
      { from: "ai", text: "3 cases of bottled water to Mr Nam, added to his balance, 3 cases out of stock. Save it?" },
      { from: "user", text: "Save" },
      { from: "ai", text: "Saved, balance updated. Bottled water is now below its minimum. Shall I draft a restock order for you to review?" },
    ],
    inputPlaceholder: "Message Kizai AI…",
  },
  why: {
    title: "From 2026, the books have to be real",
    sub: "Vietnamese household businesses move from presumptive tax to self-declaration. Daily sales records become the basis for tax.",
    items: [
      { title: "Presumptive tax ends", text: "Under Resolution 68-NQ/TW, presumptive (lump-sum) tax for household businesses ends no later than 2026." },
      { title: "Declare actual revenue", text: "Businesses declare and pay on their own. Revenue, costs and stock must be complete and consistent." },
      { title: "E-invoices", text: "Sales need compliant e-invoices, with data sent to the tax authority." },
    ],
    note: "Further guidance may follow. Kizai updates its calculations and forms as new rules are issued.",
  },
  compare: {
    title: "No new software to learn",
    before: {
      label: "The usual way",
      items: [
        "Write in a notebook, retype into Excel at night",
        "Key in every item code, quantity and price",
        "Scan bank statements to see who paid",
        "Add up revenue at period end to file tax",
        "Notice stock-outs and overdue debts too late",
      ],
    },
    after: {
      label: "With Kizai AI",
      items: [
        "Message, speak or snap; the AI records it correctly",
        "The AI reads it back and saves only after you agree",
        "Incoming payments are matched to orders",
        "Tax returns build up from daily records",
        "The AI warns you first: low stock, tax deadlines, overdue debts",
      ],
    },
  },
  ways: {
    title: "Three ways to hand work to the AI",
    sub: "No long data-entry screens. Use whichever is easiest at the moment.",
    items: [
      { title: "Message", text: "Type as you would to an assistant.", example: "“Paid 1.2 million for electricity this month”" },
      { title: "Voice", text: "Give orders with your hands full.", example: "“Order 20 more cases of instant noodles”" },
      { title: "Photo", text: "Supplier invoices, shelves, old notebooks.", example: "A photo of a supplier invoice" },
    ],
  },
  skills: {
    title: "A day in the shop, and what the AI takes on",
    sub: "Arranged by when you need it. Jump to a moment of the day.",
    groups: [
      {
        id: "sales",
        label: "When a customer buys",
        items: [
          { title: "One sentence becomes an order", text: "Stock, revenue and the customer balance update together once you agree." },
          { title: "E-invoice with the order", text: "No separate invoicing software to open." },
          { title: "Bundles, promotions, points", text: "Running offers applied correctly; regulars earn points." },
          { title: "Returns", text: "Refund, restock and revenue adjustment kept consistent." },
          { title: "Every channel, one book", text: "Counter, delivery, your web shop and marketplaces, split by channel." },
        ],
      },
      {
        id: "purchase",
        label: "When you restock",
        items: [
          { title: "Invoice photo to goods receipt", text: "The AI reads items, quantities and prices and records the payable." },
          { title: "Draft purchase orders", text: "Say what you need; the AI drafts the order for your approval." },
          { title: "How much to buy", text: "Based on real sales speed, so cash is not tied up in slow stock." },
          { title: "Which supplier is cheaper", text: "Purchase price history for the same item across suppliers." },
        ],
      },
      {
        id: "stock",
        label: "In the stockroom",
        items: [
          { title: "Warned before you run out", text: "Set a minimum per item; the AI alerts you as it gets close." },
          { title: "Items with expiry dates", text: "Tracked by batch, with prompts to sell batches nearing expiry." },
          { title: "Counts without the checking", text: "Read out actual counts; the AI compares them with the books." },
          { title: "Damaged or gifted goods", text: "Write-offs and internal use recorded with a reason." },
        ],
      },
      {
        id: "cash",
        label: "End of the day",
        items: [
          { title: "Close the till", text: "Enter the cash you counted; the AI shows any difference from the cash book." },
          { title: "Transfers matched to orders", text: "Bank transfers and QR payments linked to the right order." },
          { title: "Today's expenses", text: "Send “paid 200k shipping” and it is filed under the right category." },
          { title: "Evening sales digest", text: "Revenue, money received and top sellers, every night." },
        ],
      },
      {
        id: "tax",
        label: "Month end and tax time",
        items: [
          { title: "Household-business ledgers", text: "The Circular 88/2021/TT-BTC ledgers, filled in a little every day." },
          { title: "Pre-filled return", text: "Tax calculated on actual revenue; you check and confirm." },
          { title: "Tax calendar", text: "Reminders before filing and payment deadlines, with an estimate." },
          { title: "Profit and cash flow", text: "Month-on-month, margin per item and cash on hand." },
          { title: "Both sides of credit", text: "Who owes you, whom you owe, and what falls due next." },
        ],
      },
      {
        id: "reports",
        label: "Ask any time",
        items: [
          { title: "Ask in everyday words", text: "“How much did we sell this week?” “What is selling slowest?”" },
          { title: "Product rankings", text: "What drives revenue and what to buy less of." },
          { title: "Look up a customer or supplier", text: "History and balance in a single answer." },
        ],
      },
    ],
  },
  industries: {
    title: "Pre-configured by industry",
    sub: "Choose your industry at the start and its specific workflows are switched on.",
    items: [
      { name: "Grocery and retail", points: ["Ring up by product name, scanning optional", "One item, many units: case, pack, bottle", "Buy-now-pay-later for regulars"] },
      { name: "Cosmetics", points: ["Batches with near-expiry warnings", "Gift sets that deduct each item", "Follow-ups for repeat buyers"] },
      { name: "E-commerce", points: ["Orders from several marketplaces in one place", "Marketplace payouts matched to each order", "True profit after fees, per marketplace"] },
      { name: "Distribution", points: ["Prices per wholesale tier", "Volume-based rebates", "Sales blocked above the credit limit"] },
      { name: "Store chains", points: ["All branches in one set of books", "Stock moves between branches", "Compare each outlet's results"] },
      { name: "Services: spa, salon, repair", points: ["Bookings and customer reminders", "Prepaid session cards used down per visit", "Technician pay per job"] },
      { name: "Small workshops", points: ["Materials in, finished goods out", "Cost per order", "Grow into KIZAI ERP and MES"] },
    ],
    other: "Your industry not listed? Leave your details and Kizai will advise on the setup.",
  },
  steps: {
    title: "Get started in three steps",
    sub: "The hardest part of any software is the initial data entry. Here, the AI does that too.",
    items: [
      { title: "Kizai sets it up for your trade", text: "Workflows, ledger templates and pricing rules for your industry, switched on from the start." },
      { title: "Send what you already have", text: "A product list in Excel, photos of your credit book, recent invoices. The AI builds products, customers, suppliers and opening stock." },
      { title: "Use it from the first order", text: "No need to finish data entry first. The books fill in with every sale." },
    ],
  },
  alerts: {
    title: "The AI speaks up before you ask",
    sub: "Examples of the reminders Kizai AI sends each day.",
    items: [
      { label: "Stock", text: "At this week's pace, 5 kg bags of rice will run out before the weekend. Shall I prepare a purchase order?" },
      { label: "Tax deadline", text: "The quarterly return is due soon. Figures are already filled in from your sales book; check them and it is ready to file." },
      { label: "Receivables", text: "Two customers are past their payment date. I have drafted a polite note for each; approve and I will send them." },
    ],
  },
  grow: {
    title: "Grow without switching software",
    sub: "When the shop becomes a company, your data carries over into Kizai Solution's other products.",
    items: [
      { name: "KIZAI HRM", text: "HR, attendance and payroll.", href: "https://kizai.vn/solutions/kizai-hrm" },
      { name: "KIZAI PMS", text: "Company purchasing workflows.", href: "https://kizai.vn/solutions/kizai-pms" },
      { name: "KIZAI RPA", text: "Automation of repetitive work.", href: "https://kizai.vn/solutions/kizai-rpa" },
      { name: "KIZAI ERP", text: "Full ERP for manufacturers.", href: "https://kizai.vn/solutions/kizai-erp" },
    ],
    link: "View on kizai.vn",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Do I have to re-enter my whole product list?", a: "No. Send the Excel file you use, photos of your credit book or a few recent invoices; the AI builds products, customers, suppliers and opening stock. You just review the summary." },
      { q: "What if I say the wrong quantity?", a: "Before saving, the AI always reads the transaction back for you to check. Saved entries can still be corrected, and related ledgers adjust automatically." },
      { q: "How does Kizai AI help as presumptive tax ends?", a: "Circular 88/2021/TT-BTC household-business ledgers are kept daily from real transactions, the return is pre-filled from that data, and e-invoices are issued at the point of sale." },
      { q: "Who can see my shop's figures?", a: "Your data belongs to you and is used only to serve your business. Kizai does not sell data to third parties." },
      { q: "What happens when I open more branches or incorporate?", a: "Several outlets can share one set of books. When you need HR, purchasing or a full ERP, your data carries over to KIZAI HRM, PMS, RPA and ERP." },
      { q: "How much does it cost?", a: "It depends on size and industry. Leave your details at the bottom of the page and Kizai will recommend a suitable plan." },
    ],
  },
  homeBand: {
    title: "Kizai AI for household and small businesses",
    text: "Sales, stock, cash, e-invoices and tax returns from a message, a voice note or a photo.",
    link: "See the solution",
  },
};

export const smbContent: Record<Locale, SmbContent> = { vi, ja, en };
