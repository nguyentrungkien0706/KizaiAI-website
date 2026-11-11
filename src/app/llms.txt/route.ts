import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { brand, moduleSlugs, seoContent } from "@/i18n/seo-content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/** /llms.txt: bản tóm tắt dạng Markdown cho các hệ thống AI (https://llmstxt.org). */
export function GET() {
  const en = getDictionary("en");
  const s = seoContent.en;
  const lines = [
    `# ${brand.product}`,
    "",
    `> ${s.home.description}`,
    "",
    `${brand.product} is developed by ${brand.company} (Hanoi, Vietnam), a Japanese–Vietnamese engineering team. The website is available in Vietnamese, Japanese and English.`,
    "",
    "## Modules",
    "",
    ...moduleSlugs.map((slug, i) => `- [${en.modules.items[i].name}](${site.url}/en/modules/${slug}): ${s.modules[slug].description}`),
    "",
    "## Languages",
    "",
    ...locales.map((l) => `- [${l.toUpperCase()}](${site.url}/${l}): ${seoContent[l].home.title}`),
    "",
    "## FAQ",
    "",
    ...en.faq.items.flatMap((f) => [`- **${f.q}** ${f.a}`]),
    "",
    "## Contact",
    "",
    `- Book a demo: ${site.url}/en#contact`,
    `- Email: ${en.contact.info.email}`,
    `- Phone: +84 38 631 2345`,
    `- Address: X5, Trang Viet, Me Linh, Hanoi, Vietnam`,
    `- Company website: https://kizai.vn`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
