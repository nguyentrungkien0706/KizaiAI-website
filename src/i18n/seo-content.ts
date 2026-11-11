import type { Locale } from "./config";

/**
 * Nội dung SEO: title, description, nội dung trang module.
 * Chỉ mô tả chức năng sản phẩm. Không có số liệu hiệu quả, giá hay đánh giá (chưa có dữ liệu thật).
 */

export const moduleSlugs = [
  "ai-visual-search",
  "ai-design-review",
  "design-reuse",
  "cost-rfq",
  "process-tooling-mro",
] as const;
export type ModuleSlug = (typeof moduleSlugs)[number];

export function isModuleSlug(value: string): value is ModuleSlug {
  return (moduleSlugs as readonly string[]).includes(value);
}

/** Ngày nội dung được sửa lần cuối. Cập nhật tay khi đổi nội dung, dùng cho sitemap. */
export const contentUpdated = "2026-11-12";

/** Tên sản phẩm và công ty, dùng thống nhất trong title, schema, llms.txt. */
export const brand = {
  product: "Kizai AI",
  company: "Kizai Solution",
};

type ModuleSeo = { title: string; description: string; h1: string; intro: string };

type SeoContent = {
  home: { title: string; description: string };
  labels: {
    home: string;
    modules: string;
    who: string;
    features: string;
    other: string;
    detail: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    backToModules: string;
  };
  modules: Record<ModuleSlug, ModuleSeo>;
};

export const seoContent: Record<Locale, SeoContent> = {
  vi: {
    home: {
      title: "Kizai AI: Tìm bản vẽ CAD, kiểm tra DFM, báo giá RFQ bằng AI",
      description:
        "Nền tảng dữ liệu AI cho nhà máy: tìm bản vẽ 2D/3D tương tự, duyệt DFM, tái sử dụng chi tiết, phân tích chi phí RFQ và quản lý MRO. Đặt lịch demo 1-1.",
    },
    labels: {
      home: "Trang chủ",
      modules: "Module",
      who: "Dành cho",
      features: "Tính năng chính",
      other: "Các module khác",
      detail: "Xem chi tiết module",
      ctaTitle: "Xem module này chạy trên bản vẽ của bạn",
      ctaText: "Kỹ sư Kizai làm demo 1-1 trên dữ liệu mẫu của nhà máy bạn, sau đó tư vấn lộ trình POC phù hợp quy mô.",
      ctaButton: "Đặt lịch demo",
      backToModules: "Tất cả module",
    },
    modules: {
      "ai-visual-search": {
        title: "Tìm kiếm bản vẽ CAD 2D/3D bằng AI | Kizai AI",
        description:
          "Tìm chi tiết tương tự bằng mô hình 3D, bản vẽ 2D, ảnh chụp hoặc phác thảo tay trên PLM, ERP và ổ đĩa chung, không cần nhớ mã hay tên file.",
        h1: "Tìm kiếm bản vẽ CAD 2D/3D bằng AI",
        intro:
          "AI Visual Search & Explorer giúp kỹ sư thiết kế, kỹ thuật và thu mua tìm lại chi tiết đã có trong toàn doanh nghiệp bằng hình dạng thay vì mã số. Kizai đọc bản vẽ 2D, mô hình 3D, PDF và ảnh chụp, rồi trả về các chi tiết tương đồng kèm dữ liệu kỹ thuật liên quan.",
      },
      "ai-design-review": {
        title: "Kiểm tra DFM và duyệt bản vẽ tự động bằng AI | Kizai AI",
        description:
          "AI quét bản vẽ 2D và CAD 3D để phát hiện lỗi hình học, vi phạm dung sai và rủi ro DFM trước khi trình duyệt, đồng thời lưu bài học từ các lần duyệt trước.",
        h1: "Kiểm tra DFM và duyệt bản vẽ bằng AI",
        intro:
          "AI Design Review là trợ lý đồng kiểm tra cho bộ phận thiết kế và QA. Trước khi bản vẽ được trình duyệt, Kizai rà soát hình học, dung sai và những điểm khó gia công, đồng thời nhắc lại các lỗi đã từng được phát hiện ở dự án trước.",
      },
      "design-reuse": {
        title: "Tái sử dụng thiết kế và chuẩn hóa linh kiện | Kizai AI",
        description:
          "Cảnh báo khi kỹ sư bắt đầu vẽ một chi tiết đã có trong kho và gợi ý linh kiện tiêu chuẩn tương đương, giúp hạn chế mã linh kiện trùng lặp.",
        h1: "Tái sử dụng thiết kế và chuẩn hóa linh kiện",
        intro:
          "Design Reuse giúp tránh vẽ lại những chi tiết nhà máy đã có. Khi kỹ sư bắt đầu một thiết kế mới, Kizai so sánh với kho bản vẽ hiện có và đề xuất chi tiết hoặc linh kiện tiêu chuẩn có thể dùng lại.",
      },
      "cost-rfq": {
        title: "Phân tích chi phí và báo giá RFQ bằng AI | Kizai AI",
        description:
          "Tự đọc gói RFQ gồm PDF và bản vẽ, đối chiếu chi tiết tương tự đã sản xuất, bóc tách cơ cấu giá và gợi ý nhà cung cấp phù hợp.",
        h1: "Phân tích chi phí và báo giá RFQ bằng AI",
        intro:
          "Cost Review & RFQ Copilot hỗ trợ thu mua và kinh doanh xử lý yêu cầu báo giá. Kizai đọc tài liệu RFQ, tìm các chi tiết tương tự đã từng sản xuất hoặc mua, rồi tách cơ cấu chi phí để làm cơ sở đàm phán.",
      },
      "process-tooling-mro": {
        title: "Quản lý đồ gá, phụ tùng và bảo trì MRO bằng AI | Kizai AI",
        description:
          "Tìm khuôn và đồ gá tương đồng, nhận diện phụ tùng bằng ảnh chụp tại xưởng và phân tích lịch sử sự cố thiết bị để tối ưu tồn kho phụ tùng.",
        h1: "Đồ gá, phụ tùng và bảo trì MRO với AI",
        intro:
          "Process, Tooling & MRO đưa dữ liệu bản vẽ xuống tận xưởng sản xuất. Kỹ thuật viên tìm được đồ gá đã có, chụp ảnh phụ tùng để tra mã và vị trí kho, và xem lịch sử sự cố của từng thiết bị.",
      },
    },
  },

  ja: {
    home: {
      title: "Kizai AI｜AI図面検索・DFMチェック・RFQ見積支援",
      description:
        "製造業向けAIデータプラットフォーム。2D/3D類似図面検索、DFMレビュー、部品の再利用、RFQコスト分析、設備保全（MRO）をひとつの基盤で。1対1のデモを予約できます。",
    },
    labels: {
      home: "ホーム",
      modules: "モジュール",
      who: "対象",
      features: "主な機能",
      other: "その他のモジュール",
      detail: "モジュールの詳細",
      ctaTitle: "貴社の図面でこのモジュールを体験",
      ctaText: "Kizaiのエンジニアが貴社のサンプルデータで1対1のデモを行い、規模に合ったPOCの進め方をご提案します。",
      ctaButton: "デモを予約",
      backToModules: "すべてのモジュール",
    },
    modules: {
      "ai-visual-search": {
        title: "AI図面検索（2D/3D CAD類似形状検索）｜Kizai AI",
        description:
          "3Dモデル、2D図面、写真、手描きスケッチから類似部品を検索。PLM、ERP、共有ドライブを横断し、品番やファイル名を覚えていなくても見つかります。",
        h1: "AIによる2D/3D CAD図面検索",
        intro:
          "AI Visual Search & Explorerは、設計・技術・調達の担当者が社内にある既存部品を品番ではなく形状で探せるようにします。Kizaiは2D図面、3Dモデル、PDF、写真を読み取り、類似部品と関連する技術データを提示します。",
      },
      "ai-design-review": {
        title: "AIによるDFMチェック・図面レビュー自動化｜Kizai AI",
        description:
          "2D図面と3D CADをAIがスキャンし、形状の不具合、公差違反、DFM上のリスクを承認前に検出。過去のレビュー指摘も蓄積して再発を防ぎます。",
        h1: "AIによるDFMチェックと図面レビュー",
        intro:
          "AI Design Reviewは、設計部門と品質保証部門のためのダブルチェック支援ツールです。図面を承認に回す前に、形状、公差、加工しにくい箇所を確認し、過去のプロジェクトで指摘された不具合も知らせます。",
      },
      "design-reuse": {
        title: "設計の再利用と部品標準化｜Kizai AI",
        description:
          "既に存在する部品を新たに設計し始めたときに警告し、同等の標準部品を提案。重複する部品番号の発生を抑えます。",
        h1: "設計の再利用と部品標準化",
        intro:
          "Design Reuseは、工場に既にある部品の再設計を防ぎます。新しい設計を始めると、Kizaiが既存の図面と比較し、流用できる部品や標準部品を提案します。",
      },
      "cost-rfq": {
        title: "AIによるコスト分析・RFQ見積支援｜Kizai AI",
        description:
          "PDFや図面を含むRFQ資料を自動で読み取り、過去に製造した類似部品と照合。コスト構造を分解し、適したサプライヤーを提案します。",
        h1: "AIによるコスト分析とRFQ見積支援",
        intro:
          "Cost Review & RFQ Copilotは、調達・営業部門の見積業務を支援します。KizaiがRFQ資料を読み取り、過去に製造・購入した類似部品を探し出し、交渉の根拠となるコスト構造を分解します。",
      },
      "process-tooling-mro": {
        title: "治具・スペアパーツ・設備保全（MRO）のAI活用｜Kizai AI",
        description:
          "類似する金型や治具を検索し、現場で撮影した写真からスペアパーツを特定。設備の故障履歴を分析して部品在庫の最適化を支援します。",
        h1: "治具・スペアパーツ・設備保全（MRO）にAIを",
        intro:
          "Process, Tooling & MROは、図面データを製造現場まで届けます。技術者は既存の治具を探し、スペアパーツを撮影して品番と保管場所を調べ、設備ごとの故障履歴を確認できます。",
      },
    },
  },

  en: {
    home: {
      title: "Kizai AI: AI CAD Drawing Search, DFM Review & RFQ Costing",
      description:
        "AI data platform for factories: find similar 2D/3D drawings, automate DFM review, reuse existing parts, analyze RFQ costs and manage MRO. Book a 1-on-1 demo.",
    },
    labels: {
      home: "Home",
      modules: "Modules",
      who: "Built for",
      features: "Key features",
      other: "Other modules",
      detail: "View module details",
      ctaTitle: "See this module work on your own drawings",
      ctaText: "A Kizai engineer runs a 1-on-1 demo on sample data from your plant, then recommends a POC plan that fits your scale.",
      ctaButton: "Book a demo",
      backToModules: "All modules",
    },
    modules: {
      "ai-visual-search": {
        title: "AI CAD Drawing Search for 2D/3D Parts | Kizai AI",
        description:
          "Find similar parts from a 3D model, 2D drawing, photo or hand sketch across PLM, ERP and shared drives, without remembering part numbers or file names.",
        h1: "AI search for 2D/3D CAD drawings",
        intro:
          "AI Visual Search & Explorer lets design, engineering and purchasing teams find existing parts across the company by shape instead of part number. Kizai reads 2D drawings, 3D models, PDFs and photos, then returns similar parts with their related engineering data.",
      },
      "ai-design-review": {
        title: "AI DFM Check & Automated Drawing Review | Kizai AI",
        description:
          "AI scans 2D drawings and 3D CAD to flag geometry errors, tolerance violations and DFM risks before sign-off, and keeps lessons from past reviews.",
        h1: "AI DFM checks and drawing review",
        intro:
          "AI Design Review is a second pair of eyes for design and QA teams. Before a drawing goes to approval, Kizai checks geometry, tolerances and hard-to-machine features, and reminds engineers of issues found on earlier projects.",
      },
      "design-reuse": {
        title: "Design Reuse & Part Standardization | Kizai AI",
        description:
          "Warns engineers when they start drawing a part that already exists and suggests equivalent standard parts, keeping duplicate part numbers down.",
        h1: "Design reuse and part standardization",
        intro:
          "Design Reuse stops your team from redrawing parts the factory already has. When an engineer starts a new design, Kizai compares it with your existing drawings and suggests parts or standard components that can be reused.",
      },
      "cost-rfq": {
        title: "AI Cost Analysis & RFQ Quoting Copilot | Kizai AI",
        description:
          "Reads RFQ packages with PDFs and drawings, matches them to similar parts you have produced, breaks down cost structure and suggests suitable suppliers.",
        h1: "AI cost analysis and RFQ quoting",
        intro:
          "Cost Review & RFQ Copilot helps purchasing and sales teams handle quote requests. Kizai reads the RFQ documents, finds similar parts you have made or bought before, and breaks down the cost structure to support negotiation.",
      },
      "process-tooling-mro": {
        title: "AI for Tooling, Spare Parts & MRO | Kizai AI",
        description:
          "Find similar molds and fixtures, identify spare parts from a photo taken on the shop floor, and analyze equipment failure history to optimize spare-part stock.",
        h1: "AI for tooling, spare parts and MRO",
        intro:
          "Process, Tooling & MRO brings drawing data down to the shop floor. Technicians can find existing fixtures, photograph a spare part to look up its number and storage location, and review each machine's failure history.",
      },
    },
  },
};
