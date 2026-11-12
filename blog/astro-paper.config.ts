import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    // Tên miền dự kiến cho blog, đổi lại khi chốt tên miền.
    url: "https://blog.kizai.vn/",
    title: "Blog KIZAI AI",
    description:
      "Kiến thức về dữ liệu kỹ thuật, bản vẽ 2D/3D, BOM, ERP/PLM và AI cho nhà máy và doanh nghiệp, từ KIZAI AI.",
    author: "KIZAI AI",
    profile: "https://aki.kizai.vn/",
    ogImage: "default-og.jpg",
    lang: "vi",
    timezone: "Asia/Ho_Chi_Minh",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "mail", url: "mailto:kiennguyen@kizai.vn" },
  ],
  shareLinks: [
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=Bai%20viet%20KIZAI%20AI&body=" },
  ],
});
