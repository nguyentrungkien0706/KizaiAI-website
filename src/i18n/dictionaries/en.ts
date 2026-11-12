import type { Dictionary } from "./vi";

const en: Dictionary = {
  meta: {
    title: "Kizai: the AI data platform for factories",
    description:
      "Kizai connects 2D/3D drawings, BOMs, ERP/PLM data and production history into one knowledge base that design, purchasing and production can all ask questions of.",
  },
  a11y: {
    skipToContent: "Skip to main content",
    home: "Kizai, back to top",
    mainNav: "Main navigation",
    language: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    footerNav: "Footer links",
  },
  nav: {
    links: [
      { href: "#modules", label: "Product" },
      { href: "/ho-kinh-doanh", label: "Small business" },
      { href: "#platform", label: "Platform" },
      { href: "#customers", label: "Customers" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    login: "Log in",
    demo: "Book a demo",
  },

  hero: {
    photoAlt: "Close-up of a CNC mill cutting a metal workpiece, chips flying under shop lights",
    badge: "The AI data platform for factories",
    title: "Ask your drawings the way you'd ask a veteran engineer",
    sub: "Kizai connects 2D/3D drawings, BOMs, ERP/PLM data and production history into one shared knowledge base. Design, purchasing and production just ask: the AI finds similar parts, checks DFM and estimates cost.",
    cta1: "Book a demo",
    cta2: "See the modules",
    formats:
      "Reads 2D/3D CAD (SolidWorks, NX, Creo, CATIA, Inventor, STEP, DWG/DXF), PDFs and photos of drawings.",
    drawing: {
      label: "Drawing of bracket BR-2041. The AI has marked 2 points to review before approval.",
      partName: "Bracket",
      reviewTitle: "2 points to review before approval",
      findings: [
        "Inner corner radius R0.5 is smaller than the shop's standard end mill.",
        "±0.01 tolerance on a non-mating face. Loosening it would cut machining time.",
      ],
      similar: "3 similar drawings already exist: BR-1877, BR-1902, BR-2010.",
      note: "Sample data.",
    },
  },

  problem: {
    title: "Your factory's know-how is scattered everywhere",
    sub: "Every drawing, order and defect report holds hard-won experience. The problem is that nobody can find it when it matters.",
    items: [
      {
        title: "Finding an old part means remembering its number",
        text: "Drawings live in PLM, ERP, shared drives and email. If you don't know the part number or file name, it might as well not exist.",
      },
      {
        title: "Existing parts get designed again",
        text: "When the old drawing can't be found, engineers start from scratch, which means new fixtures and new quotes too.",
      },
      {
        title: "RFQs are matched by hand",
        text: "Purchasing checks each drawing against past prices and suppliers, spending days on every package.",
      },
      {
        title: "Review experience lives in a few people's heads",
        text: "Lessons from past drawing reviews aren't recorded, so the same DFM issues come back on the next project.",
      },
    ],
  },

  modules: {
    title: "Five modules for a part's whole life cycle",
    sub: "Use one module or combine them. They all run on the same data foundation.",
    listLabel: "Choose a module",
    cta: "See a demo of this module",
    items: [
      {
        tab: "Drawing search",
        imageAlt: "Gloved hand holding a machined part in front of a screen showing a grid of similar 3D models",
        name: "AI Visual Search & Explorer",
        who: "For design, engineering, purchasing",
        desc: "A search engine for geometry and technical data across the whole company.",
        features: [
          { title: "Search by shape", text: "Find parts from a 3D model, a 2D drawing, a photo of the real part or a hand sketch." },
          { title: "No part numbers needed", text: "Locate similar parts across PLM, ERP and shared drives without remembering numbers or file names." },
          { title: "Compare revisions", text: "See dimension and tolerance changes between drawing revisions side by side." },
        ],
      },
      {
        tab: "Design review",
        imageAlt: "Printed engineering drawing on a desk with one area circled in red pen for review",
        name: "AI Design Review",
        who: "For design, QA",
        desc: "A co-checker that automates drawing review.",
        features: [
          { title: "AutoReview", text: "Scans 2D drawings and 3D CAD for geometry errors, tolerance violations and DFM risks before sign-off." },
          { title: "Review on the web", text: "Zoom, measure and mark up drawings without installing CAD software." },
          { title: "Lessons learned", text: "Keeps feedback from past reviews to warn the next project early." },
        ],
      },
      {
        tab: "Reuse",
        imageAlt: "Shelves of machined fixtures and jigs, each with an ID tag",
        name: "Design Reuse & Part Standardization",
        who: "For design, engineering",
        desc: "Stops parts that already exist from being drawn again, shortening design time.",
        features: [
          { title: "Duplicate alerts", text: "Tells engineers as soon as they start designing a part that already exists." },
          { title: "Standard part suggestions", text: "Suggests equivalent standard parts from internal stock or partner catalogs." },
        ],
      },
      {
        tab: "Cost & RFQ",
        imageAlt: "Machined mechanical parts and a digital caliper on an inspection bench",
        name: "Cost Review & RFQ Copilot",
        who: "For purchasing, sales",
        desc: "Cost estimation and quote request management.",
        features: [
          { title: "Read RFQ packages", text: "Reads PDFs and drawings in a quote request and matches them with similar parts already produced." },
          { title: "Cost breakdown", text: "Splits material, machine time and finishing to support negotiation and flag unusual prices." },
          { title: "Supplier suggestions", text: "Ranks suppliers by machining capability, on-time delivery and quality history." },
        ],
      },
      {
        tab: "Production & MRO",
        imageAlt: "Technician photographing a machine bearing with a phone on the shop floor",
        name: "Process, Tooling & MRO",
        who: "For production engineering, maintenance",
        desc: "Production readiness and equipment life cycle under control.",
        features: [
          { title: "Reuse fixtures", text: "Finds similar molds and fixtures in the shop to save hours on new tooling." },
          { title: "Spare part recognition", text: "Photograph a part on the floor to create a work order and look up its stock location." },
          { title: "Failure history", text: "Analyzes equipment failures to suggest causes and optimize spare part stock." },
        ],
      },
    ],
  },

  platform: {
    title: "One platform, four layers of data",
    sub: "From scattered files to answers you can trace. Each layer builds on the one before.",
    layerLabel: "Layer",
    layers: [
      {
        name: "Data layer",
        short: "Ingest and extract any format",
        desc: "Ingests 2D/3D CAD, PDFs, photos and documents. Automatically extracts dimensions, GD&T tolerances, materials, surface finish and title blocks as structured data.",
        tags: ["2D/3D CAD", "PDF, images", "PMI extraction"],
      },
      {
        name: "Knowledge graph",
        short: "Linked by meaning",
        desc: "Links every part to its drawings, ERP orders, quality reports and suppliers, so one question returns the full context.",
        tags: ["BOM", "ERP / PLM", "Quality reports"],
      },
      {
        name: "Search & AI agents",
        short: "Ask with images, drawings or words",
        desc: "Search with a photo, a 2D sketch or a 3D model. AI agents analyze in your company's own context: standardizing parts and scoping the impact of a defect.",
        tags: ["Geometric search", "Chat with your data", "AI agents"],
      },
      {
        name: "Workflow apps",
        short: "For each department",
        desc: "Automates repetitive work in design, purchasing and production engineering, and turns veteran engineers' tacit knowledge into a shared asset.",
        tags: ["Design", "Purchasing", "Production"],
      },
    ],
    ask: {
      title: "Try asking Kizai",
      label: "Question for the AI",
      placeholder: "Pick a suggested question below",
      send: "Send question",
      suggestions: "Suggested questions",
      empty: "Pick a suggested question to see how Kizai answers.",
      loading: "Searching the drawing library…",
      note: "Sample data. A real demo runs on your own factory's data.",
      chips: ["Find similar parts", "Check DFM", "Estimate machining cost", "Suggest suppliers"],
      answers: [
        {
          q: "Find parts similar to bracket drawing BR-2041",
          title: "Found 3 similar drawings in your data",
          items: [
            "BR-1877: SS400 steel bracket, produced before, fixture available",
            "BR-1902: 2 different screw holes, same material",
            "BR-2010: same profile, different sheet thickness",
          ],
        },
        {
          q: "Check DFM for drawing BR-2041",
          title: "2 points to review before approval",
          items: [
            "Inner corner radius R0.5 is smaller than the shop's standard end mill",
            "±0.01 tolerance on a non-mating face. Loosening it would cut machining time",
          ],
        },
        {
          q: "Estimate machining cost for BR-2041 (100 pcs)",
          title: "Estimated cost breakdown",
          items: ["Material: SS400 stock weight × the unit price already in your ERP", "Machine time: from actual machine hours on the similar part BR-1877", "Finishing, surface treatment: from past supplier quotes"],
        },
        {
          q: "Suggest suppliers for BR-2041",
          title: "Suitable suppliers, ranked by capability and history",
          items: [
            "The supplier that machined BR-1877: CNC milling, on time on recent orders",
            "Laser cutting and bending supplier: good quality history on SS400",
            "New supplier: competitive price, lead time to be checked",
          ],
        },
      ],
    },
  },

  integrations: {
    title: "Connects to the systems your factory already uses",
    sub: "Kizai reads data where it already lives. Nobody has to switch tools.",
    groups: [
      { group: "CAD", items: ["SolidWorks", "Siemens NX", "PTC Creo", "CATIA", "Inventor", "Fusion 360", "STEP", "DWG/DXF"] },
      { group: "PLM / PDM", items: ["Teamcenter", "Windchill", "3DEXPERIENCE", "SolidWorks PDM"] },
      { group: "ERP / CMMS", items: ["SAP", "Oracle", "SharePoint", "In-house ERP"] },
    ],
    securityTitle: "Security",
    security: [
      { title: "Your data stays yours", text: "Drawings and designs are never used to train public models." },
      { title: "Cloud or on-premise", text: "Deploy in the cloud or on your factory's own servers (Docker/Kubernetes)." },
      { title: "Multi-level permissions", text: "Set access by department, project and customer." },
    ],
  },

  about: {
    title: "About Kizai Solution",
    sub: "Kizai Solution advises manufacturers on digital transformation and implements it, with a team of engineers who have worked in Japan. We bring Japanese care, discipline and quality standards to every project.",
    stats: [
      {
        value: "200+",
        label: "Companies"
      },
      {
        value: "100+",
        label: "Projects delivered"
      },
      {
        value: "10+",
        label: "Years of experience"
      },
      {
        value: "24/7",
        label: "Technical support"
      }
    ],
    points: [
      {
        title: "Japanese–Vietnamese engineers",
        text: "Experience advising large groups in Japan and Vietnam."
      },
      {
        title: "Meticulous process",
        text: "We work to strict Japanese rules and quality standards."
      },
      {
        title: "Tailored to your plant",
        text: "Configured for how each factory works, not a one-size process."
      },
      {
        title: "Long-term support",
        text: "24/7 technical support, maintenance and ongoing updates."
      }
    ],
    ecosystemTitle: "The Kizai product family",
    ecosystemSub: "Kizai AI works alongside the Kizai systems your plant may already run.",
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
    more: "More about Kizai Solution",
    moreHref: "https://kizai.vn/about"
  },

  customers: {
    title: "More than 200 manufacturers have chosen Kizai Solution",
    logosLabel: "Kizai Solution partners and customers",
    casesTitle: "Customer stories",
    casesSub: "Results Kizai Solution has delivered in customer plants.",
    readMore: "Read the case study",
    allCases: "See all projects",
    allCasesHref: "https://kizai.vn/case-studies",
    clientLabel: "Customer",
    scopeLabel: "Solution",
    cases: [
      {
        client: "Yamaha Motor Vietnam",
        partner: 2,
        scope: "KIZAI IoT FACTORY: EMS Power, EMS Gas, EMS Machine",
        title: "Digital energy and equipment monitoring across casting, boilers and compressed air",
        facts: [
          "Survey and proposal in 5 days",
          "14 days to install, 2 weeks of training, then go-live",
          "Automatic energy and CO₂ reports for ESG filings",
          "Now expanded into a third phase"
        ],
        href: "https://kizai.vn/case-studies/kizai-solution-va-hanh-trinh-so-hoa-nha-may-thong-minh-tai-yamaha-motor-viet-nam"
      },
      {
        client: "Viqualita",
        partner: 13,
        scope: "KIZAI IoT FACTORY: EMS Power, EMS Gas",
        title: "Real-time power and LPG monitoring on the road to Net Zero",
        facts: [
          "20% performance gain in 6 months",
          "Threshold alerts by light, siren, SMS and email",
          "Energy converted to CO₂ emissions automatically",
          "Manual energy reporting retired"
        ],
        href: "https://kizai.vn/case-studies/kizai-solution-dong-hanh-cung-viqualita-hien-thuc-hoa-muc-tieu-net-zero-thong-qua-giam-sat-nang-luong-thong-minh"
      }
    ]
  },

  pricing: {
    title: "How we work together, in 5 steps",
    sub: "You see the solution running on your plant's data before you get a quote.",
    stepLabel: "Step",
    steps: [
      {
        name: "Survey & analysis",
        text: "Kizai engineers learn your systems, data and real requirements."
      },
      {
        name: "Trial & quote",
        text: "You try a demo on sample data and understand the solution before we quote."
      },
      {
        name: "System setup",
        text: "We prepare servers (cloud or on-site), connect CAD, PLM and ERP, and set permissions."
      },
      {
        name: "Rollout & training",
        text: "We install on site and train each department in detail."
      },
      {
        name: "Maintenance & upgrades",
        text: "Ongoing maintenance, 24/7 support and regular new features."
      }
    ],
    cta: "Get a free consultation"
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Where is our drawing data stored?", a: "You choose: in the cloud or on your factory's own servers (Docker/Kubernetes)." },
      { q: "Does Kizai use our drawings to train AI?", a: "No. Your drawings and designs are never used to train public models." },
      { q: "Which file formats does Kizai read?", a: "2D/3D CAD (SolidWorks, NX, Creo, CATIA, Inventor, STEP, DWG/DXF), PDFs and photos of drawings." },
      { q: "Which systems does Kizai connect to?", a: "PLM/PDM such as Teamcenter, Windchill, 3DEXPERIENCE and SolidWorks PDM, and ERP such as SAP, Oracle, SharePoint or an in-house ERP." },
      { q: "Who in the company can see which data?", a: "Access is set by department, project and customer." },
      { q: "How does the demo work?", a: "A Kizai engineer runs a 1-on-1 demo on your factory's sample data, then recommends a POC plan that fits your size." },
      { q: "How much does Kizai cost?", a: "It depends on your size and deployment type. You try Kizai on sample data first, then we send a detailed quote." },
    ],
  },

  contact: {
    title: "See the AI work on your own drawings",
    sub: "Send a few details and a Kizai engineer will prepare a demo on your factory's sample data.",
    points: ["1-on-1 demo with a Kizai engineer", "Try it on your real drawings", "A POC plan that fits your size"],
    info: {
      title: "Or contact us directly",
      address: "X5, Tráng Việt, Mê Linh, Hà Nội, Vietnam",
      phone: "+84 38 631 2345",
      email: "kiennguyen@kizai.vn",
      hours: "Mon – Fri, 08:30 – 17:30 (GMT+7)",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Hours"
    },
    required: "(required)",
    fields: {
      name: "Full name",
      email: "Work email",
      company: "Company name",
      size: "Number of engineers",
      cad: "CAD / PLM in use",
      need: "Main need",
    },
    cadHint: "For example: SolidWorks, Teamcenter",
    choose: "Choose one",
    sizes: ["1–30", "30–100", "100–500", "Over 500"],
    needs: ["Drawing search & reuse", "Automated design review", "RFQ & quote management", "Part standardization", "Production & maintenance", "Sales, stock, books & tax (small business)"],
    errors: {
      name: "Enter your full name.",
      email: "Enter your work email, for example name@company.com.",
      company: "Enter your company name.",
      summary: "Check the highlighted fields.",
      network: "Your request wasn't sent. Check your connection and send it again. What you entered is still here.",
    },
    submit: "Book a 1-on-1 demo",
    sending: "Sending…",
    privacy: "We only use this information to contact you.",
    successTitle: "Request received",
    successText: "Kizai will contact you to schedule the demo.",
    again: "Send another request",
  },

  footer: {
    company: "Kizai Solution",
    tagline: "Digital transformation and AI data solutions for manufacturers, built to Japanese standards.",
    cells: {
      contact: "Contact",
      product: "Kizai AI",
      resources: "Company",
      legal: "Legal"
    },
    address: "X5, Tráng Việt, Mê Linh, Hà Nội, Vietnam",
    email: "kiennguyen@kizai.vn",
    phone: "+84 38 631 2345",
    resources: [
      {
        label: "About us",
        href: "https://kizai.vn/about"
      },
      {
        label: "Services",
        href: "https://kizai.vn/services"
      },
      {
        label: "Case studies",
        href: "https://kizai.vn/case-studies"
      },
      {
        label: "Blog",
        href: "https://kizai.vn/news"
      }
    ],
    legal: [
      {
        label: "Privacy policy",
        href: "https://kizai.vn/privacy"
      },
      {
        label: "Terms",
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

export default en;
