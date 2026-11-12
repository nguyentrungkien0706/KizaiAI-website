import type { Dictionary } from "./vi";

const ja: Dictionary = {
  meta: {
    title: "Kizai：製造業のためのAIデータプラットフォーム",
    description:
      "Kizaiは2D/3D図面、BOM、ERP/PLMデータ、製造履歴をひとつのナレッジベースにまとめ、設計・調達・製造の誰もが質問できるようにします。",
  },
  a11y: {
    skipToContent: "メインコンテンツへスキップ",
    home: "Kizai、ページの先頭へ",
    mainNav: "メインナビゲーション",
    language: "言語",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    footerNav: "フッターリンク",
  },
  nav: {
    links: [
      { href: "#modules", label: "製品" },
      { href: "/doanh-nghiep-sme", label: "中小企業" },
      { href: "#platform", label: "プラットフォーム" },
      { href: "#customers", label: "導入事例" },
      { href: "#about", label: "会社情報" },
      { href: "#contact", label: "お問い合わせ" },
    ],
    login: "ログイン",
    demo: "デモを予約",
  },

  hero: {
    photoAlt: "金属ワークを切削するCNCフライスのクローズアップ。工場の照明の下で切りくずが飛ぶ",
    badge: "製造業のためのAIデータプラットフォーム",
    title: "図面に聞くだけ。ベテラン技術者のように答えます",
    sub: "Kizaiは2D/3D図面、BOM、ERP/PLMデータ、製造履歴をひとつのナレッジにつなぎます。設計・調達・製造の担当者は質問するだけ。AIが類似部品を探し、DFMを確認し、コストを見積もります。",
    cta1: "デモを予約",
    cta2: "モジュールを見る",
    formats:
      "2D/3D CAD（SolidWorks, NX, Creo, CATIA, Inventor, STEP, DWG/DXF）、PDF、図面の写真に対応。",
    drawing: {
      label: "ブラケット図面 BR-2041。AIが承認前に確認すべき2か所に印を付けています。",
      partName: "ブラケット",
      reviewTitle: "承認前に確認すべき点が2つあります",
      findings: [
        "内角R0.5が工場標準エンドミルより小さい。",
        "非嵌合面の公差±0.01。緩和すると加工時間を短縮できます。",
      ],
      similar: "類似図面が3件あります：BR-1877、BR-1902、BR-2010。",
      note: "サンプルデータです。",
    },
  },

  problem: {
    title: "工場の知見は、あちこちに散らばっています",
    sub: "図面、受注、不良記録のひとつひとつに貴重な経験が詰まっています。問題は、必要なときに誰も見つけられないことです。",
    items: [
      {
        title: "過去の部品を探すには品番を覚えていないといけない",
        text: "図面はPLM、ERP、共有ドライブ、メールに分散。品番やファイル名を覚えていなければ、ないのと同じです。",
      },
      {
        title: "既にある部品がまた設計される",
        text: "過去の図面が見つからず一から設計し直し、新しい治具と新しい見積もりが発生します。",
      },
      {
        title: "RFQの見積もりは手作業で照合",
        text: "調達担当が図面ごとに過去の価格やサプライヤーを照合し、1件に何日もかかります。",
      },
      {
        title: "図面レビューのノウハウは一部の人の頭の中に",
        text: "前回のレビューの教訓が記録されず、同じDFMの問題が次のプロジェクトでも繰り返されます。",
      },
    ],
  },

  modules: {
    title: "部品のライフサイクル全体を支える5つのモジュール",
    sub: "モジュール単体でも、組み合わせても使えます。すべて同じデータ基盤の上で動きます。",
    listLabel: "モジュールを選択",
    cta: "このモジュールのデモを見る",
    items: [
      {
        tab: "図面検索",
        imageAlt: "手袋をした手が加工部品を持ち、類似3Dモデルの一覧画面の前にかざしている",
        name: "AI Visual Search & Explorer",
        who: "対象：設計、技術、調達",
        desc: "全社の形状データと技術データを横断する検索エンジン。",
        features: [
          { title: "形状で検索", text: "3Dモデル、2D図面、現物写真、手書きスケッチで部品を検索。" },
          { title: "品番を覚えなくてよい", text: "PLM・ERP・共有ドライブ上の類似部品を、品番やファイル名なしで特定。" },
          { title: "改訂の比較", text: "図面の版ごとの寸法・公差の違いを視覚的に比較。" },
        ],
      },
      {
        tab: "設計レビュー",
        imageAlt: "机の上の印刷図面。確認が必要な箇所が赤ペンで囲まれている",
        name: "AI Design Review",
        who: "対象：設計、品質保証",
        desc: "図面レビューを自動化するAIチェッカー。",
        features: [
          { title: "AutoReview", text: "2D図面と3D CADをスキャンし、形状エラー・公差違反・DFMリスクを承認前に検出。" },
          { title: "Web上で共同作業", text: "CADソフトなしで、図面の拡大・計測・マークアップが可能。" },
          { title: "教訓の蓄積", text: "過去のレビュー指摘を蓄積し、次のプロジェクトで早期に警告。" },
        ],
      },
      {
        tab: "再利用",
        imageAlt: "治具や型が並ぶ棚。それぞれに管理タグが付いている",
        name: "Design Reuse & 部品標準化",
        who: "対象：設計、技術",
        desc: "既存部品の重複設計を防ぎ、設計時間を短縮。",
        features: [
          { title: "重複の警告", text: "既にある部品を設計し始めた時点で技術者に通知。" },
          { title: "標準部品の提案", text: "社内在庫やパートナーカタログから同等の標準部品を提案。" },
        ],
      },
      {
        tab: "コスト・RFQ",
        imageAlt: "加工済みの機械部品とデジタルノギスが置かれた測定台",
        name: "Cost Review & RFQ Copilot",
        who: "対象：調達、営業",
        desc: "コスト見積もりと見積依頼の管理。",
        features: [
          { title: "RFQの読み取り", text: "見積依頼のPDFや図面を読み取り、過去の類似製造品と照合。" },
          { title: "コスト構成の分解", text: "材料・機械時間・仕上げに分解し、交渉や異常価格の発見を支援。" },
          { title: "サプライヤー提案", text: "加工能力、納期遵守率、品質実績で順位付け。" },
        ],
      },
      {
        tab: "製造・MRO",
        imageAlt: "技術者が現場で設備のベアリングをスマートフォンで撮影している",
        name: "Process, Tooling & MRO",
        who: "対象：生産技術、保全",
        desc: "量産準備度と設備ライフサイクルの管理。",
        features: [
          { title: "治具の再利用", text: "工場内の類似金型・治具を探し、新規治具の工数を削減。" },
          { title: "部品の画像認識", text: "現場で部品を撮影して作業指示を作成し、在庫場所を検索。" },
          { title: "故障履歴の分析", text: "設備の故障履歴から原因を提案し、予備品在庫を最適化。" },
        ],
      },
    ],
  },

  platform: {
    title: "ひとつの基盤、4つのレイヤー",
    sub: "バラバラのファイルから根拠ある答えへ。各レイヤーが前のレイヤーの上に成り立ちます。",
    layerLabel: "レイヤー",
    layers: [
      {
        name: "データレイヤー",
        short: "多様な形式の取り込みと抽出",
        desc: "2D/3D CAD、PDF、写真、文書を取り込み、寸法・GD&T公差・材質・表面粗さ・表題欄を構造化データとして自動抽出します。",
        tags: ["2D/3D CAD", "PDF・画像", "PMI抽出"],
      },
      {
        name: "ナレッジグラフ",
        short: "意味でつなぐ",
        desc: "部品を図面、ERPの受注履歴、品質記録、サプライヤーと結びつけ、ひとつの質問で全体の文脈を返します。",
        tags: ["BOM", "ERP / PLM", "品質記録"],
      },
      {
        name: "検索とAIエージェント",
        short: "画像・図面・言葉で質問",
        desc: "写真、2Dスケッチ、3Dモデルで検索。AIエージェントが自社固有の文脈で分析し、部品の標準化や不具合の影響範囲を特定します。",
        tags: ["形状検索", "データと対話", "AIエージェント"],
      },
      {
        name: "業務アプリ",
        short: "部門ごとに",
        desc: "設計・調達・生産技術の繰り返し作業を自動化し、ベテランの暗黙知を共有資産に変えます。",
        tags: ["設計", "調達", "製造"],
      },
    ],
    ask: {
      title: "Kizaiに質問してみる",
      label: "AIへの質問",
      placeholder: "下の質問候補を選んでください",
      send: "質問を送信",
      suggestions: "質問候補",
      empty: "質問候補を選ぶと、Kizaiの回答例が表示されます。",
      loading: "図面データを検索しています…",
      note: "サンプルデータです。実際のデモは貴社の図面データで行います。",
      chips: ["類似部品を探す", "DFMチェック", "加工コストを見積もる", "サプライヤーを提案"],
      answers: [
        {
          q: "ブラケット図面 BR-2041 の類似部品を探して",
          title: "データ内に類似図面が3件見つかりました",
          items: [
            "BR-1877：SS400ブラケット、製造実績あり、治具あり",
            "BR-1902：ネジ穴2か所が異なる、同材質",
            "BR-2010：同形状、板厚違い",
          ],
        },
        {
          q: "BR-2041 のDFMをチェックして",
          title: "承認前に確認すべき点が2つあります",
          items: [
            "内角R0.5が工場標準エンドミルより小さい",
            "非嵌合面の公差±0.01。緩和すると加工時間を短縮できます",
          ],
        },
        {
          q: "BR-2041 の加工コストを見積もって（100個）",
          title: "推定コスト構成",
          items: ["材料費：SS400素材の重量 × ERPに登録済みの単価", "機械時間：類似品BR-1877の実績加工時間から算出", "仕上げ・表面処理：サプライヤーの過去見積もりから算出"],
        },
        {
          q: "BR-2041 に合うサプライヤーは？",
          title: "加工能力と実績で並べた候補",
          items: [
            "BR-1877の加工実績があるサプライヤー：CNCフライス、直近の納期遵守良好",
            "レーザー＋曲げのサプライヤー：SS400での品質実績良好",
            "新規サプライヤー：価格競争力あり、リードタイム要確認",
          ],
        },
      ],
    },
  },

  integrations: {
    title: "工場で使っているシステムとつながる",
    sub: "データは今ある場所から読み込みます。ツールを入れ替える必要はありません。",
    groups: [
      { group: "CAD", items: ["SolidWorks", "Siemens NX", "PTC Creo", "CATIA", "Inventor", "Fusion 360", "STEP", "DWG/DXF"] },
      { group: "PLM / PDM", items: ["Teamcenter", "Windchill", "3DEXPERIENCE", "SolidWorks PDM"] },
      { group: "ERP / CMMS", items: ["SAP", "Oracle", "SharePoint", "自社ERP"] },
    ],
    securityTitle: "セキュリティ",
    security: [
      { title: "データはお客様のもの", text: "図面や設計データを公開モデルの学習に使用しません。" },
      { title: "クラウドまたはオンプレミス", text: "クラウド、または工場の専用サーバー（Docker/Kubernetes）に導入可能。" },
      { title: "多段階の権限管理", text: "部門・プロジェクト・顧客単位で権限を設定。" },
    ],
  },

  about: {
    title: "Kizai Solutionについて",
    sub: "Kizai Solutionは、日本での勤務経験を持つエンジニアチームが、製造業のDXをコンサルティングから導入まで支援するテクノロジー企業です。日本の几帳面さと規律、品質基準をすべてのプロジェクトに持ち込みます。",
    stats: [
      {
        value: "200+",
        label: "導入企業"
      },
      {
        value: "100+",
        label: "導入プロジェクト"
      },
      {
        value: "10+",
        label: "年の実績"
      },
      {
        value: "24/7",
        label: "技術サポート"
      }
    ],
    points: [
      {
        title: "日越エンジニアチーム",
        text: "日本とベトナムの大手企業へのコンサルティング経験。"
      },
      {
        title: "きめ細かなプロセス",
        text: "日本の厳格な品質基準とルールに沿って進めます。"
      },
      {
        title: "オーダーメイド",
        text: "工場ごとの特性に合わせて構成し、既成の手順を押し付けません。"
      },
      {
        title: "長期の伴走",
        text: "24時間365日の技術サポート、保守、継続的な機能更新。"
      }
    ],
    ecosystemTitle: "Kizaiソリューション群",
    ecosystemSub: "Kizai AIは、工場ですでに使われているKizaiシステムと連携して動きます。",
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
    more: "Kizai Solutionについて詳しく見る",
    moreHref: "https://kizai.vn/about"
  },

  customers: {
    title: "200社以上の製造業がKizai Solutionを選んでいます",
    logosLabel: "Kizai Solutionのパートナーと顧客",
    casesTitle: "導入事例",
    casesSub: "Kizai Solutionがお客様の工場で実現した成果です。",
    readMore: "事例を読む",
    allCases: "すべての事例を見る",
    allCasesHref: "https://kizai.vn/case-studies",
    clientLabel: "お客様",
    scopeLabel: "ソリューション",
    cases: [
      {
        client: "ヤマハ発動機ベトナム",
        partner: 2,
        scope: "KIZAI IoT FACTORY：EMS Power、EMS Gas、EMS Machine",
        title: "鋳造・ボイラー・圧縮空気設備のエネルギーと設備監視をデジタル化",
        facts: [
          "調査・提案は5日間",
          "機器設置とソフト導入14日、研修2週間を経て本稼働",
          "エネルギーとCO₂排出量のレポートを自動作成しESGに活用",
          "第3期への拡張が決定"
        ],
        href: "https://kizai.vn/case-studies/kizai-solution-va-hanh-trinh-so-hoa-nha-may-thong-minh-tai-yamaha-motor-viet-nam"
      },
      {
        client: "Viqualita",
        partner: 13,
        scope: "KIZAI IoT FACTORY：EMS Power、EMS Gas",
        title: "ネットゼロに向けた電力とLPGのリアルタイム監視",
        facts: [
          "6か月でパフォーマンス20%向上",
          "しきい値超過をランプ・ブザー・SMS・メールで通知",
          "エネルギーをCO₂排出量へ自動換算",
          "手作業のエネルギー報告を廃止"
        ],
        href: "https://kizai.vn/case-studies/kizai-solution-dong-hanh-cung-viqualita-hien-thuc-hoa-muc-tieu-net-zero-thong-qua-giam-sat-nang-luong-thong-minh"
      }
    ]
  },

  pricing: {
    title: "5ステップの導入プロセス",
    sub: "お見積もりの前に、工場の実データで動く様子をご確認いただけます。",
    stepLabel: "ステップ",
    steps: [
      {
        name: "調査・分析",
        text: "Kizaiのエンジニアがシステム、データ、現場の要件を把握します。"
      },
      {
        name: "試用・お見積もり",
        text: "サンプルデータでデモを試していただき、内容をご理解いただいてからお見積もりします。"
      },
      {
        name: "システム構築",
        text: "サーバー（クラウドまたは工場内）を準備し、CAD・PLM・ERP連携と権限を設定します。"
      },
      {
        name: "導入・研修",
        text: "現地に導入し、部門ごとに詳しく操作をご案内します。"
      },
      {
        name: "保守・アップグレード",
        text: "保守と24時間365日のサポート、新機能の継続的な提供。"
      }
    ],
    cta: "無料で相談する"
  },

  faq: {
    title: "よくある質問",
    items: [
      { q: "図面データはどこに保存されますか？", a: "導入先をお選びいただけます。クラウド、または工場の専用サーバー（Docker/Kubernetes）です。" },
      { q: "図面がAIの学習に使われることはありますか？", a: "いいえ。お客様の図面や設計データを公開モデルの学習に使用することはありません。" },
      { q: "どのファイル形式に対応していますか？", a: "2D/3D CAD（SolidWorks, NX, Creo, CATIA, Inventor, STEP, DWG/DXF）、PDF、図面の写真に対応しています。" },
      { q: "どのシステムと連携できますか？", a: "Teamcenter、Windchill、3DEXPERIENCE、SolidWorks PDMなどのPLM/PDM、SAP、Oracle、SharePoint、自社ERPなどと連携できます。" },
      { q: "社内の誰がどのデータを見られますか？", a: "部門・プロジェクト・顧客単位でアクセス権限を設定できます。" },
      { q: "デモはどのように行われますか？", a: "Kizaiの技術者が貴社のサンプルデータで1対1のデモを行い、規模に合ったPOCの進め方をご提案します。" },
      { q: "費用はいくらですか？", a: "規模と導入形態によって異なります。まずサンプルデータで試していただき、その後に具体的なお見積もりをお送りします。" },
    ],
  },

  contact: {
    title: "貴社の図面でAIを体験",
    sub: "簡単な情報をお送りいただければ、Kizaiの技術者が貴社のサンプルデータでデモを準備します。",
    points: ["Kizai技術者との1対1デモ", "実際の図面で試せる", "規模に合ったPOCロードマップをご提案"],
    info: {
      title: "直接のお問い合わせ",
      address: "X5, Tráng Việt, Mê Linh, Hà Nội（ベトナム・ハノイ）",
      phone: "+84 38 631 2345",
      email: "kiennguyen@kizai.vn",
      hours: "月〜金 8:30〜17:30（ベトナム時間）",
      addressLabel: "所在地",
      phoneLabel: "電話",
      emailLabel: "メール",
      hoursLabel: "営業時間"
    },
    required: "（必須）",
    fields: {
      name: "氏名",
      email: "会社メールアドレス",
      company: "会社名",
      size: "技術者の人数",
      cad: "使用中のCAD / PLM",
      need: "主な課題",
    },
    cadHint: "例：SolidWorks、Teamcenter",
    choose: "選択してください",
    sizes: ["1–30名", "30–100名", "100–500名", "500名以上"],
    needs: ["図面検索と再利用", "設計レビューの自動化", "RFQ・見積管理", "部品の標準化", "製造・保全", "販売・在庫・会計・税務（中小企業）"],
    errors: {
      name: "氏名を入力してください。",
      email: "会社のメールアドレスを入力してください（例：name@company.co.jp）。",
      company: "会社名を入力してください。",
      summary: "印の付いた項目をご確認ください。",
      network: "送信できませんでした。ネットワーク接続を確認して、もう一度送信してください。入力内容は保持されています。",
    },
    submit: "1対1デモを予約",
    sending: "送信中…",
    privacy: "ご入力情報はご連絡のためにのみ使用します。",
    successTitle: "お申し込みを受け付けました",
    successText: "デモ日程のご相談のため、担当者よりご連絡いたします。",
    again: "別の申し込みをする",
  },

  footer: {
    company: "Kizai Solution",
    tagline: "日本基準の、製造業のためのDXとAIデータソリューション。",
    cells: {
      contact: "お問い合わせ",
      product: "Kizai AI",
      resources: "会社情報",
      legal: "規約"
    },
    address: "X5, Tráng Việt, Mê Linh, Hà Nội（ベトナム・ハノイ）",
    email: "kiennguyen@kizai.vn",
    phone: "+84 38 631 2345",
    resources: [
      {
        label: "会社概要",
        href: "https://kizai.vn/about"
      },
      {
        label: "サービス",
        href: "https://kizai.vn/services"
      },
      {
        label: "導入事例",
        href: "https://kizai.vn/case-studies"
      },
      {
        label: "ブログ",
        href: "https://kizai.vn/news"
      }
    ],
    legal: [
      {
        label: "プライバシーポリシー",
        href: "https://kizai.vn/privacy"
      },
      {
        label: "利用規約",
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

export default ja;
