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
      { href: "#platform", label: "プラットフォーム" },
      { href: "#modules", label: "製品" },
      { href: "#integrations", label: "連携" },
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
    impactTitle: "導入効果",
    impactNote: "数値はPOC後に更新します。",
    impact: [
      { value: "[ ]", label: "図面の再利用で削減した年間設計時間" },
      { value: "[ ]%", label: "図面・技術資料の検索時間を削減" },
      { value: "[ ]%", label: "加工部品の調達コストを削減" },
      { value: "[ ]%", label: "品質ロスコスト（COPQ）を削減" },
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
          items: ["材料費：[材料単価]", "機械時間：[機械時間 × 単価]", "仕上げ・表面処理：[費用]"],
        },
        {
          q: "BR-2041 に合うサプライヤーは？",
          title: "加工能力と実績で並べた候補",
          items: [
            "[サプライヤーA]：CNCフライス、納期遵守率 [ ]%",
            "[サプライヤーB]：レーザー＋曲げ、品質実績良好",
            "[サプライヤーC]：価格競争力あり、リードタイム要確認",
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

  customers: {
    title: "機械、電子、産業機器の工場とともに",
    logosLabel: "導入企業",
    logos: ["[導入企業1]", "[導入企業2]", "[導入企業3]", "[導入企業4]", "[導入企業5]", "[導入企業6]"],
    testimonials: [
      { quote: "[お客様の声]", name: "[氏名]", role: "[役職、会社名]" },
      { quote: "[お客様の声]", name: "[氏名]", role: "[役職、会社名]" },
    ],
  },

  pricing: {
    title: "サービスと導入の流れ",
    sub: "費用は工場の規模と導入形態によって異なります。具体的なお見積もりはお問い合わせください。",
    stepLabel: "ステップ",
    priceLabel: "価格",
    durationLabel: "期間",
    steps: [
      {
        name: "1対1デモ",
        text: "Kizaiの技術者が貴社のサンプルデータで実演し、チームの質問にお答えします。",
        price: "[価格]",
        duration: "[期間]",
      },
      {
        name: "実データでのPOC",
        text: "特定の図面と業務プロセスで試行し、展開前に効果を測定します。",
        price: "[価格]",
        duration: "[期間]",
      },
      {
        name: "本導入",
        text: "クラウドまたは専用サーバーに導入し、CAD・PLM・ERPと連携、部門ごとに権限を設定します。",
        price: "[価格]",
        duration: "[期間]",
      },
    ],
    cta: "見積もりを依頼",
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
      { q: "費用はいくらですか？", a: "規模と導入形態によって異なります。[料金ポリシーを記入]" },
    ],
  },

  contact: {
    title: "貴社の図面でAIを体験",
    sub: "簡単な情報をお送りいただければ、Kizaiの技術者が貴社のサンプルデータでデモを準備します。",
    points: ["Kizai技術者との1対1デモ", "実際の図面で試せる", "規模に合ったPOCロードマップをご提案"],
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
    needs: ["図面検索と再利用", "設計レビューの自動化", "RFQ・見積管理", "部品の標準化", "製造・保全"],
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
    company: "Kizai Solutions JSC",
    tagline: "製造業のためのAIデータプラットフォーム",
    cells: {
      contact: "お問い合わせ",
      product: "製品",
      resources: "会社情報",
      legal: "法的情報",
      revision: "更新",
      scale: "尺度",
      language: "言語",
    },
    address: "[住所]",
    email: "[メールアドレス]",
    phone: "[電話番号]",
    resources: [
      { label: "データセキュリティ", href: "#integrations" },
      { label: "導入事例", href: "#customers" },
      { label: "料金", href: "#pricing" },
      { label: "パートナー", href: "#" },
    ],
    legal: [
      { label: "プライバシーポリシー", href: "#" },
      { label: "利用規約", href: "#" },
    ],
    copyright: "© 2026 Kizai Solutions JSC",
  },
};

export default ja;
