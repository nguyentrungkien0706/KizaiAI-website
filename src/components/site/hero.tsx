import Image from "next/image";
import { partners } from "@/lib/partners";
import { photos } from "@/lib/photos";
import { HeroSlider, type HeroSlide } from "@/components/site/hero-slider";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import type { Locale } from "@/i18n/config";

/** Ảnh cho từng module, theo thứ tự trong từ điển: tìm kiếm, duyệt, tái sử dụng, chi phí, sản xuất. */
const modulePhotos = [photos.cadReview, photos.drawingDesk, photos.model3d, photos.supplierDeal, photos.maintenance];

export function Hero({ t, locale }: { t: Dictionary; locale: Locale }) {
  const h = t.hero;
  const c = t.customers;
  const slides: HeroSlide[] = [
    { eyebrow: h.badge, title: h.title, text: h.sub, image: photos.controlRoom.src, alt: photos.controlRoom.alt[locale], flip: true },
    ...t.modules.items.map((m, i) => ({
      eyebrow: m.tab,
      title: m.desc.replace(/[.。]$/, ""),
      text: m.features[0].text,
      image: modulePhotos[i].src,
      alt: modulePhotos[i].alt[locale],
      flip: modulePhotos[i] === photos.maintenance,
    })),
  ];
  return (
    <HeroSlider
      locale={locale}
      headingId="hero-title"
      slides={slides}
      primary={{ href: "#contact", label: h.cta1 }}
      secondary={{ href: "#modules", label: h.cta2 }}
      footer={
        <>
          {/* Dải logo đối tác và khách hàng thật, lấy từ kizai.vn */}
          <div id="customers-strip" className="py-12 md:py-16">
            <p className="text-center text-[15px] text-ink-3">{c.title}</p>
            <ul
              aria-label={c.logosLabel}
              className="mx-auto mt-8 grid max-w-[1120px] grid-cols-3 items-center gap-x-6 gap-y-7 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 lg:gap-x-8"
            >
              {partners.map((p) => (
                <li key={p.id} className="flex h-10 items-center justify-center">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    sizes="120px"
                    className="max-h-10 w-auto max-w-full object-contain opacity-60 mix-blend-multiply grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      }
    />
  );
}
