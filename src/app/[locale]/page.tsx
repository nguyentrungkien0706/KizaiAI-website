import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Navbar } from "@/components/site/navbar";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-control focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
      >
        {t.a11y.skipToContent}
      </a>
      <Navbar locale={locale} t={t} />
      <main id="main" tabIndex={-1} className="min-h-[200vh] focus:outline-none">
        {/* Các section tiếp theo (Hero, ...) sẽ được thêm ở đây. */}
      </main>
    </>
  );
}
