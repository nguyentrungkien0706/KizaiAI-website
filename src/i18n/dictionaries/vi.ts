const vi = {
  meta: {
    title: "Kizai: Nền tảng dữ liệu AI cho nhà máy",
    description:
      "Kizai kết nối bản vẽ 2D/3D, BOM, dữ liệu ERP/PLM và lịch sử sản xuất thành một kho tri thức chung mà kỹ sư, thu mua và sản xuất đều hỏi được.",
  },
  a11y: {
    skipToContent: "Bỏ qua, tới nội dung chính",
    home: "Kizai, về đầu trang",
    mainNav: "Điều hướng chính",
    language: "Ngôn ngữ",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    footerNav: "Liên kết cuối trang",
  },
  nav: {
    links: [
      { href: "#modules", label: "Sản phẩm" },
      { href: "#platform", label: "Nền tảng" },
      { href: "#customers", label: "Khách hàng" },
      { href: "#about", label: "Về Kizai" },
      { href: "#contact", label: "Liên hệ" },
    ],
    login: "Đăng nhập",
    demo: "Đặt lịch demo",
  },

  hero: {
    photoAlt: "Cận cảnh dao phay CNC đang gia công phôi kim loại, phoi bắn ra dưới ánh đèn xưởng",
    badge: "Nền tảng dữ liệu AI cho nhà máy",
    title: "Hỏi bản vẽ của bạn như hỏi một kỹ sư lâu năm",
    sub: "Kizai kết nối bản vẽ 2D/3D, BOM, dữ liệu ERP/PLM và lịch sử sản xuất thành một kho tri thức chung. Thiết kế, thu mua và sản xuất chỉ cần đặt câu hỏi: AI tìm chi tiết tương tự, kiểm tra DFM và ước tính chi phí.",
    cta1: "Đặt lịch demo",
    cta2: "Xem các module",
    formats:
      "Đọc file CAD 2D/3D (SolidWorks, NX, Creo, CATIA, Inventor, STEP, DWG/DXF), PDF và ảnh chụp bản vẽ.",
    drawing: {
      label:
        "Bản vẽ giá đỡ BR-2041. AI đánh dấu 2 điểm cần xem lại trước khi duyệt.",
      partName: "Giá đỡ",
      reviewTitle: "AI phát hiện 2 điểm nên xem lại trước khi duyệt",
      findings: [
        "Bán kính góc trong R0.5 nhỏ hơn dao phay tiêu chuẩn của xưởng.",
        "Dung sai ±0.01 trên mặt không lắp ghép, có thể nới để giảm thời gian gia công.",
      ],
      similar: "Có 3 bản vẽ tương tự trong kho: BR-1877, BR-1902, BR-2010.",
      note: "Dữ liệu minh họa.",
    },
  },

  problem: {
    title: "Tri thức của nhà máy đang nằm rải rác",
    sub: "Mỗi bản vẽ, đơn hàng và phiếu lỗi đều chứa kinh nghiệm quý. Vấn đề là không ai tìm lại được chúng đúng lúc cần.",
    items: [
      {
        title: "Tìm một chi tiết cũ phải nhớ đúng mã",
        text: "Bản vẽ nằm ở PLM, ERP, ổ đĩa chung và email. Không nhớ mã hay tên file thì coi như không có.",
      },
      {
        title: "Chi tiết đã có vẫn bị vẽ lại",
        text: "Không tìm thấy bản cũ, kỹ sư vẽ mới từ đầu, kéo theo đồ gá mới và báo giá mới.",
      },
      {
        title: "Báo giá RFQ phải dò bằng tay",
        text: "Thu mua đối chiếu từng bản vẽ với lịch sử giá và nhà cung cấp, mất nhiều ngày cho mỗi gói.",
      },
      {
        title: "Kinh nghiệm duyệt bản vẽ nằm trong đầu vài người",
        text: "Lỗi DFM lặp lại ở dự án sau vì bài học từ lần duyệt trước không được lưu ở đâu.",
      },
    ],
  },

  modules: {
    title: "Năm module cho toàn bộ vòng đời chi tiết",
    sub: "Dùng riêng từng module hoặc kết hợp. Tất cả chạy trên cùng một kho dữ liệu.",
    listLabel: "Chọn module",
    cta: "Xem demo module này",
    items: [
      {
        tab: "Tìm kiếm bản vẽ",
        imageAlt: "Tay đeo găng cầm chi tiết gia công trước màn hình hiển thị lưới mô hình 3D tương tự",
        name: "AI Visual Search & Explorer",
        who: "Cho thiết kế, kỹ thuật, thu mua",
        desc: "Công cụ tìm kiếm hình học và dữ liệu kỹ thuật cho toàn doanh nghiệp.",
        features: [
          { title: "Tìm bằng hình", text: "Tìm linh kiện bằng mô hình 3D, bản vẽ 2D, ảnh chụp thực tế hoặc bản phác thảo tay." },
          { title: "Không cần nhớ mã", text: "Định vị chi tiết tương đồng trên PLM, ERP, ổ đĩa chung mà không cần nhớ mã hay tên file." },
          { title: "So sánh revision", text: "So sánh trực quan kích thước và dung sai giữa các phiên bản bản vẽ." },
        ],
      },
      {
        tab: "Duyệt thiết kế",
        imageAlt: "Bản vẽ kỹ thuật in trên bàn, một vị trí được khoanh bút đỏ để xem lại",
        name: "AI Design Review",
        who: "Cho thiết kế, QA",
        desc: "Trợ lý đồng kiểm tra, tự động hóa khâu duyệt bản vẽ.",
        features: [
          { title: "AutoReview", text: "Quét bản vẽ 2D và CAD 3D để phát hiện lỗi hình học, vi phạm dung sai và rủi ro DFM trước khi trình duyệt." },
          { title: "Cộng tác trên web", text: "Phóng to, đo đạc, ghi chú trực tiếp trên bản vẽ mà không cần cài phần mềm CAD." },
          { title: "Bài học kinh nghiệm", text: "Lưu phản hồi các lần duyệt trước để cảnh báo sớm cho dự án sau." },
        ],
      },
      {
        tab: "Tái sử dụng",
        imageAlt: "Kệ chứa đồ gá và khuôn đã gia công, mỗi món gắn thẻ mã",
        name: "Design Reuse & Chuẩn hóa linh kiện",
        who: "Cho thiết kế, kỹ thuật",
        desc: "Ngăn vẽ mới linh kiện đã có, rút ngắn thời gian thiết kế.",
        features: [
          { title: "Cảnh báo trùng lặp", text: "Báo cho kỹ sư ngay khi bắt đầu thiết kế một chi tiết đã có trong kho." },
          { title: "Gợi ý linh kiện chuẩn", text: "Đề xuất linh kiện tiêu chuẩn tương đương từ kho nội bộ hoặc danh mục đối tác." },
        ],
      },
      {
        tab: "Chi phí & RFQ",
        imageAlt: "Các chi tiết cơ khí đã gia công và thước cặp điện tử trên bàn đo",
        name: "Cost Review & RFQ Copilot",
        who: "Cho thu mua, kinh doanh",
        desc: "Ước tính chi phí và quản lý yêu cầu báo giá.",
        features: [
          { title: "Đọc gói RFQ", text: "Tự đọc PDF, bản vẽ trong yêu cầu báo giá và đối chiếu với chi tiết tương tự đã sản xuất." },
          { title: "Bóc tách cơ cấu giá", text: "Tách vật liệu, giờ máy, gia công hoàn thiện để hỗ trợ đàm phán và phát hiện giá bất thường." },
          { title: "Gợi ý nhà cung cấp", text: "Xếp hạng theo năng lực gia công, tỷ lệ giao đúng hạn và lịch sử chất lượng." },
        ],
      },
      {
        tab: "Sản xuất & MRO",
        imageAlt: "Kỹ thuật viên chụp ổ bi của máy bằng điện thoại ngay tại xưởng",
        name: "Process, Tooling & MRO",
        who: "Cho kỹ thuật sản xuất, bảo trì",
        desc: "Kiểm soát mức sẵn sàng sản xuất và vòng đời thiết bị.",
        features: [
          { title: "Tái sử dụng đồ gá", text: "Tìm khuôn, đồ gá tương đồng trong xưởng để tiết kiệm giờ làm đồ gá mới." },
          { title: "Nhận diện phụ tùng", text: "Chụp ảnh phụ tùng tại hiện trường để tạo lệnh công việc và tra vị trí kho." },
          { title: "Lịch sử sự cố", text: "Phân tích sự cố thiết bị để gợi ý nguyên nhân và tối ưu tồn kho phụ tùng." },
        ],
      },
    ],
  },

  platform: {
    title: "Một nền tảng, bốn tầng dữ liệu",
    sub: "Từ file rời rạc đến câu trả lời có căn cứ. Mỗi tầng xây trên tầng trước.",
    layerLabel: "Tầng",
    layers: [
      {
        name: "Tầng dữ liệu",
        short: "Thu nạp và bóc tách đa định dạng",
        desc: "Thu nạp file CAD 2D/3D, PDF, ảnh chụp và văn bản. Tự động bóc tách kích thước, dung sai GD&T, vật liệu, độ nhám bề mặt và khung tên thành dữ liệu có cấu trúc.",
        tags: ["CAD 2D/3D", "PDF, ảnh", "Bóc tách PMI"],
      },
      {
        name: "Đồ thị tri thức",
        short: "Liên kết ngữ nghĩa",
        desc: "Liên kết mỗi linh kiện với bản vẽ, đơn hàng trong ERP, phiếu chất lượng và nhà cung cấp, để một câu hỏi trả về toàn bộ bối cảnh.",
        tags: ["BOM", "ERP / PLM", "Phiếu chất lượng"],
      },
      {
        name: "Tìm kiếm & AI Agent",
        short: "Hỏi bằng ảnh, bản vẽ, câu chữ",
        desc: "Tìm bằng ảnh chụp, bản phác thảo 2D hoặc mô hình 3D. AI agent phân tích theo ngữ cảnh riêng của doanh nghiệp: chuẩn hóa linh kiện, khoanh vùng ảnh hưởng khi có lỗi.",
        tags: ["Tìm theo hình học", "Chat với dữ liệu", "AI agent"],
      },
      {
        name: "Ứng dụng quy trình",
        short: "Cho từng phòng ban",
        desc: "Tự động hóa việc lặp lại của thiết kế, thu mua và kỹ thuật sản xuất; biến kinh nghiệm ngầm của kỹ sư lâu năm thành tài sản dùng chung.",
        tags: ["Thiết kế", "Thu mua", "Sản xuất"],
      },
    ],
    ask: {
      title: "Thử hỏi Kizai",
      label: "Câu hỏi cho AI",
      placeholder: "Chọn một câu hỏi gợi ý bên dưới",
      send: "Gửi câu hỏi",
      suggestions: "Câu hỏi gợi ý",
      empty: "Chọn một câu hỏi gợi ý để xem Kizai trả lời thế nào.",
      loading: "Đang tìm trong kho bản vẽ…",
      note: "Dữ liệu minh họa. Bản demo thật chạy trên dữ liệu của chính nhà máy bạn.",
      chips: ["Tìm chi tiết tương tự", "Kiểm tra lỗi DFM", "Ước tính chi phí gia công", "Gợi ý nhà cung cấp"],
      answers: [
        {
          q: "Tìm chi tiết tương tự bản vẽ giá đỡ BR-2041",
          title: "Tìm thấy 3 bản vẽ tương đồng trong kho dữ liệu",
          items: [
            "BR-1877: giá đỡ thép SS400, đã từng sản xuất, có sẵn đồ gá",
            "BR-1902: khác 2 lỗ bắt vít, cùng vật liệu",
            "BR-2010: cùng biên dạng, khác độ dày tấm",
          ],
        },
        {
          q: "Kiểm tra DFM cho bản vẽ BR-2041",
          title: "Phát hiện 2 điểm nên xem lại trước khi duyệt",
          items: [
            "Bán kính góc trong R0.5 nhỏ hơn dao phay tiêu chuẩn của xưởng",
            "Dung sai ±0.01 trên mặt không lắp ghép, có thể nới để giảm thời gian gia công",
          ],
        },
        {
          q: "Ước tính chi phí gia công BR-2041 (100 cái)",
          title: "Cơ cấu chi phí ước tính",
          items: [
            "Vật liệu: khối lượng phôi SS400 nhân đơn giá đang có trong ERP",
            "Thời gian máy: lấy từ giờ máy thực tế của chi tiết tương tự BR-1877",
            "Hoàn thiện, xử lý bề mặt: theo lịch sử báo giá của nhà cung cấp",
          ],
        },
        {
          q: "Gợi ý nhà cung cấp cho BR-2041",
          title: "Nhà cung cấp phù hợp, xếp theo năng lực và lịch sử",
          items: [
            "Nhà cung cấp đã gia công BR-1877: phay CNC, giao đúng hạn ở các đơn gần nhất",
            "Nhà cung cấp cắt laser và chấn: lịch sử chất lượng tốt với thép SS400",
            "Nhà cung cấp mới: giá cạnh tranh, cần kiểm tra thời gian giao hàng",
          ],
        },
      ],
    },
  },

  integrations: {
    title: "Kết nối với hệ thống nhà máy đang dùng",
    sub: "Kizai đọc dữ liệu từ nơi nó đang nằm, không bắt nhà máy đổi công cụ.",
    groups: [
      { group: "CAD", items: ["SolidWorks", "Siemens NX", "PTC Creo", "CATIA", "Inventor", "Fusion 360", "STEP", "DWG/DXF"] },
      { group: "PLM / PDM", items: ["Teamcenter", "Windchill", "3DEXPERIENCE", "SolidWorks PDM"] },
      { group: "ERP / CMMS", items: ["SAP", "Oracle", "SharePoint", "ERP nội bộ"] },
    ],
    securityTitle: "Bảo mật",
    security: [
      { title: "Dữ liệu là của bạn", text: "Bản vẽ và thiết kế không dùng để huấn luyện mô hình công cộng." },
      { title: "Cloud hoặc On-Premise", text: "Triển khai trên cloud hoặc máy chủ riêng của nhà máy (Docker/Kubernetes)." },
      { title: "Phân quyền nhiều cấp", text: "Phân quyền theo phòng ban, dự án và khách hàng." },
    ],
  },

  about: {
    title: "Về Kizai Solution",
    sub: "Kizai Solution tư vấn và triển khai chuyển đổi số cho doanh nghiệp sản xuất, với đội ngũ kỹ sư từng làm việc tại Nhật Bản. Chúng tôi mang tinh thần tỉ mỉ, kỷ luật và nguyên tắc chất lượng của Nhật Bản vào từng dự án.",
    stats: [
      {
        value: "200+",
        label: "Doanh nghiệp"
      },
      {
        value: "100+",
        label: "Dự án đã triển khai"
      },
      {
        value: "10+",
        label: "Năm kinh nghiệm"
      },
      {
        value: "24/7",
        label: "Hỗ trợ kỹ thuật"
      }
    ],
    points: [
      {
        title: "Đội ngũ kỹ sư Nhật – Việt",
        text: "Kinh nghiệm tư vấn cho các tập đoàn lớn tại Nhật Bản và Việt Nam."
      },
      {
        title: "Quy trình tỉ mỉ",
        text: "Làm việc theo nguyên tắc và tiêu chuẩn chất lượng khắt khe của Nhật Bản."
      },
      {
        title: "Giải pháp may đo",
        text: "Cấu hình theo đặc thù từng nhà máy, không áp đặt quy trình có sẵn."
      },
      {
        title: "Đồng hành dài hạn",
        text: "Hỗ trợ kỹ thuật 24/7, bảo trì và cập nhật hệ thống liên tục."
      }
    ],
    ecosystemTitle: "Hệ sinh thái giải pháp Kizai",
    ecosystemSub: "Kizai AI chạy cùng các hệ thống Kizai mà nhà máy có thể đang dùng.",
    ecosystem: [
      "KIZAI ERP",
      "KIZAI MES",
      "KIZAI HRM",
      "KIZAI PMS",
      "KIZAI RPA",
      "KIZAI LIMS",
      "KIZAI IoT FACTORY",
      "EMS Power",
      "EMS Machine",
      "EMS Cooling",
      "EMS Gas",
      "EMS Water"
    ],
    more: "Tìm hiểu thêm về Kizai Solution",
    moreHref: "https://kizai.vn/about"
  },

  customers: {
    title: "Hơn 200 doanh nghiệp sản xuất đã chọn Kizai Solution",
    logosLabel: "Đối tác và khách hàng của Kizai Solution",
    casesTitle: "Dự án tiêu biểu",
    casesSub: "Kết quả Kizai Solution đã mang lại tại nhà máy của khách hàng.",
    readMore: "Đọc case study",
    allCases: "Xem tất cả dự án",
    allCasesHref: "https://kizai.vn/case-studies",
    clientLabel: "Khách hàng",
    scopeLabel: "Giải pháp",
    cases: [
      {
        client: "Yamaha Motor Việt Nam",
        partner: 2,
        scope: "KIZAI IoT FACTORY: EMS Power, EMS Gas, EMS Machine",
        title: "Số hóa giám sát năng lượng và thiết bị tại phân xưởng đúc, lò hơi và khí nén",
        facts: [
          "Khảo sát và tư vấn trong 5 ngày",
          "Lắp đặt, cài đặt trong 14 ngày, đào tạo 2 tuần rồi go-live",
          "Tự động báo cáo năng lượng và phát thải CO₂ cho hồ sơ ESG",
          "Khách hàng đã mở rộng hệ thống sang chu kỳ thứ 3"
        ],
        href: "https://kizai.vn/case-studies/kizai-solution-va-hanh-trinh-so-hoa-nha-may-thong-minh-tai-yamaha-motor-viet-nam"
      },
      {
        client: "Viqualita",
        partner: 13,
        scope: "KIZAI IoT FACTORY: EMS Power, EMS Gas",
        title: "Giám sát điện năng và khí LPG theo thời gian thực cho lộ trình Net Zero",
        facts: [
          "Hiệu năng tăng 20% sau 6 tháng",
          "Cảnh báo vượt ngưỡng qua đèn, còi, SMS và email",
          "Tự động quy đổi năng lượng sang phát thải CO₂",
          "Bỏ hẳn báo cáo năng lượng thủ công"
        ],
        href: "https://kizai.vn/case-studies/kizai-solution-dong-hanh-cung-viqualita-hien-thuc-hoa-muc-tieu-net-zero-thong-qua-giam-sat-nang-luong-thong-minh"
      }
    ]
  },

  pricing: {
    title: "Lộ trình hợp tác 5 bước",
    sub: "Bạn thấy giải pháp chạy trên dữ liệu thật của nhà máy trước khi nhận báo giá.",
    stepLabel: "Bước",
    steps: [
      {
        name: "Khảo sát & phân tích",
        text: "Kỹ sư Kizai nắm rõ hệ thống, dữ liệu và yêu cầu thực tế của nhà máy."
      },
      {
        name: "Chạy thử & báo giá",
        text: "Bạn dùng thử bản demo trên dữ liệu mẫu, hiểu rõ giải pháp rồi mới nhận báo giá."
      },
      {
        name: "Thiết lập hệ thống",
        text: "Chuẩn bị máy chủ (cloud hoặc tại nhà máy), kết nối CAD, PLM, ERP và phân quyền."
      },
      {
        name: "Triển khai & đào tạo",
        text: "Cài đặt tại đơn vị và hướng dẫn chi tiết cho từng phòng ban."
      },
      {
        name: "Bảo trì & nâng cấp",
        text: "Đồng hành bảo trì, hỗ trợ 24/7 và cập nhật tính năng mới liên tục."
      }
    ],
    cta: "Nhận tư vấn miễn phí"
  },

  faq: {
    title: "Câu hỏi thường gặp",
    items: [
      {
        q: "Dữ liệu bản vẽ của chúng tôi được lưu ở đâu?",
        a: "Bạn chọn nơi triển khai: trên cloud hoặc trên máy chủ riêng tại nhà máy (Docker/Kubernetes).",
      },
      {
        q: "Kizai có dùng bản vẽ của chúng tôi để huấn luyện AI không?",
        a: "Không. Bản vẽ và thiết kế của bạn không được dùng để huấn luyện mô hình công cộng.",
      },
      {
        q: "Kizai đọc được những định dạng nào?",
        a: "File CAD 2D/3D (SolidWorks, NX, Creo, CATIA, Inventor, STEP, DWG/DXF), PDF và ảnh chụp bản vẽ.",
      },
      {
        q: "Kizai kết nối với hệ thống nào?",
        a: "PLM/PDM như Teamcenter, Windchill, 3DEXPERIENCE, SolidWorks PDM và ERP như SAP, Oracle, SharePoint hoặc ERP nội bộ.",
      },
      {
        q: "Ai trong công ty được xem dữ liệu nào?",
        a: "Quyền truy cập được phân theo phòng ban, dự án và khách hàng.",
      },
      {
        q: "Buổi demo diễn ra như thế nào?",
        a: "Kỹ sư Kizai làm demo 1-1 trên dữ liệu mẫu của nhà máy bạn, sau đó tư vấn lộ trình POC phù hợp quy mô.",
      },
      {
        q: "Chi phí sử dụng Kizai là bao nhiêu?",
        a: "Chi phí tùy quy mô và hình thức triển khai. Kizai cho bạn chạy thử trên dữ liệu mẫu trước, sau đó mới gửi báo giá cụ thể.",
      },
    ],
  },

  contact: {
    title: "Trải nghiệm AI trên chính bản vẽ của bạn",
    sub: "Gửi vài thông tin, kỹ sư Kizai sẽ chuẩn bị buổi demo trên dữ liệu mẫu của nhà máy bạn.",
    points: ["Demo 1-1 với kỹ sư Kizai", "Chạy thử trên bản vẽ thật của bạn", "Tư vấn lộ trình POC phù hợp quy mô"],
    info: {
      title: "Hoặc liên hệ trực tiếp",
      address: "X5, Tráng Việt, Mê Linh, Hà Nội",
      phone: "038 631 2345",
      email: "kiennguyen@kizai.vn",
      hours: "Thứ 2 – Thứ 6, 08:30 – 17:30",
      addressLabel: "Địa chỉ",
      phoneLabel: "Điện thoại",
      emailLabel: "Email",
      hoursLabel: "Giờ làm việc"
    },
    required: "(bắt buộc)",
    fields: {
      name: "Họ và tên",
      email: "Email công việc",
      company: "Tên công ty",
      size: "Số lượng kỹ sư",
      cad: "Hệ CAD / PLM đang dùng",
      need: "Nhu cầu chính",
    },
    cadHint: "Ví dụ: SolidWorks, Teamcenter",
    choose: "Chọn một mục",
    sizes: ["1–30", "30–100", "100–500", "Trên 500"],
    needs: ["Tìm kiếm & tái sử dụng bản vẽ", "Tự động duyệt thiết kế", "Quản lý RFQ & báo giá", "Chuẩn hóa linh kiện", "Sản xuất & bảo trì"],
    errors: {
      name: "Nhập họ và tên của bạn.",
      email: "Nhập email công việc, ví dụ ten@congty.vn.",
      company: "Nhập tên công ty.",
      summary: "Kiểm tra lại các ô được đánh dấu.",
      network: "Chưa gửi được yêu cầu. Kiểm tra kết nối mạng rồi bấm gửi lại, thông tin bạn nhập vẫn được giữ.",
    },
    submit: "Đặt lịch demo 1-1",
    sending: "Đang gửi…",
    privacy: "Thông tin chỉ dùng để liên hệ tư vấn.",
    successTitle: "Đã nhận yêu cầu",
    successText: "Kizai sẽ liên hệ lại để hẹn lịch demo.",
    again: "Gửi yêu cầu khác",
  },

  footer: {
    company: "Kizai Solution",
    tagline: "Giải pháp chuyển đổi số và dữ liệu AI cho doanh nghiệp sản xuất, theo tiêu chuẩn Nhật Bản.",
    cells: {
      contact: "Liên hệ",
      product: "Kizai AI",
      resources: "Công ty",
      legal: "Pháp lý"
    },
    address: "X5, Tráng Việt, Mê Linh, Hà Nội",
    email: "kiennguyen@kizai.vn",
    phone: "038 631 2345",
    resources: [
      {
        label: "Về chúng tôi",
        href: "https://kizai.vn/about"
      },
      {
        label: "Dịch vụ",
        href: "https://kizai.vn/services"
      },
      {
        label: "Case study",
        href: "https://kizai.vn/case-studies"
      },
      {
        label: "Blog",
        href: "https://kizai.vn/news"
      }
    ],
    legal: [
      {
        label: "Chính sách bảo mật",
        href: "https://kizai.vn/privacy"
      },
      {
        label: "Điều khoản",
        href: "https://kizai.vn/terms"
      }
    ],
    social: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/share/18UWj5SRNY/"
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/106299784/"
      }
    ],
    copyright: "© 2026 Kizai Solution"
  },

};

export default vi;
export type Dictionary = typeof vi;
