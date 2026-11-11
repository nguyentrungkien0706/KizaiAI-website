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
      { href: "#platform", label: "Platform" },
      { href: "#modules", label: "Products" },
      { href: "#integrations", label: "Integrations" },
      { href: "#contact", label: "Contact" },
    ],
    login: "Log in",
    demo: "Book a demo",
  },

  hero: {
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
    impactTitle: "Results at customer sites",
    impactNote: "Figures will be added after the POC.",
    impact: [
      { value: "[ ]", label: "Design hours saved per year by reusing drawings" },
      { value: "[ ]%", label: "Less time spent finding drawings and technical documents" },
      { value: "[ ]%", label: "Lower purchasing cost for machined parts" },
      { value: "[ ]%", label: "Lower cost of poor quality (COPQ)" },
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
          items: ["Material: [MATERIAL UNIT PRICE]", "Machine time: [MACHINE HOURS × RATE]", "Finishing, surface treatment: [COST]"],
        },
        {
          q: "Suggest suppliers for BR-2041",
          title: "Suitable suppliers, ranked by capability and history",
          items: [
            "[SUPPLIER A]: CNC milling, on-time delivery [ ]%",
            "[SUPPLIER B]: laser cutting and bending, good quality history",
            "[SUPPLIER C]: competitive price, check lead time",
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

  customers: {
    title: "Working with mechanical, electronics and industrial equipment factories",
    logosLabel: "Customers",
    logos: ["[CUSTOMER 1]", "[CUSTOMER 2]", "[CUSTOMER 3]", "[CUSTOMER 4]", "[CUSTOMER 5]", "[CUSTOMER 6]"],
    testimonials: [
      { quote: "[CUSTOMER QUOTE]", name: "[FULL NAME]", role: "[TITLE, COMPANY]" },
      { quote: "[CUSTOMER QUOTE]", name: "[FULL NAME]", role: "[TITLE, COMPANY]" },
    ],
  },

  pricing: {
    title: "Services and how we work together",
    sub: "Cost depends on factory size and deployment type. Contact us for a specific quote.",
    stepLabel: "Step",
    priceLabel: "Price",
    durationLabel: "Duration",
    steps: [
      {
        name: "1-on-1 demo",
        text: "A Kizai engineer runs Kizai on your factory's sample data and answers your team's questions.",
        price: "[PRICE]",
        duration: "[DURATION]",
      },
      {
        name: "POC on real data",
        text: "A trial on a specific set of drawings and workflows, measuring results before rolling out.",
        price: "[PRICE]",
        duration: "[DURATION]",
      },
      {
        name: "Rollout",
        text: "Deploy in the cloud or on your own servers, connect CAD, PLM and ERP, and set permissions per department.",
        price: "[PRICE]",
        duration: "[DURATION]",
      },
    ],
    cta: "Get a quote",
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
      { q: "How much does Kizai cost?", a: "It depends on your size and deployment type. [ADD PRICING POLICY]" },
    ],
  },

  contact: {
    title: "See the AI work on your own drawings",
    sub: "Send a few details and a Kizai engineer will prepare a demo on your factory's sample data.",
    points: ["1-on-1 demo with a Kizai engineer", "Try it on your real drawings", "A POC plan that fits your size"],
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
    needs: ["Drawing search & reuse", "Automated design review", "RFQ & quote management", "Part standardization", "Production & maintenance"],
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
    company: "Kizai Solutions JSC",
    tagline: "The AI data platform for factories",
    cells: {
      contact: "Contact",
      product: "Products",
      resources: "Company",
      legal: "Legal",
      revision: "Revised",
      scale: "Scale",
      language: "Language",
    },
    address: "[ADDRESS]",
    email: "[EMAIL]",
    phone: "[PHONE NUMBER]",
    resources: [
      { label: "Data security", href: "#integrations" },
      { label: "Customer stories", href: "#customers" },
      { label: "Pricing", href: "#pricing" },
      { label: "Partners", href: "#" },
    ],
    legal: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
    copyright: "© 2026 Kizai Solutions JSC",
  },
};

export default en;
