import { Photo } from "@/components/site/hero-slider";
import { photos } from "@/lib/photos";
import type { Locale } from "@/i18n/config";
import { Container, Section, SectionHeading } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";

const problemPhotos = [photos.planner, photos.print3d, photos.purchasing, photos.paperDrawing];

export function Problem({ t, locale }: { t: Dictionary; locale: Locale }) {
  const p = t.problem;
  return (
    <Section aria-labelledby="problem-title" className="pt-8 md:pt-12 xl:pt-16">
      <Container>
        <SectionHeading id="problem-title" title={p.title} sub={p.sub} />

        <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {p.items.map((item, i) => (
            <li key={item.title} className="grid grid-cols-1 overflow-hidden rounded-xl bg-surface sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
              <Photo src={problemPhotos[i].src} alt={problemPhotos[i].alt[locale]} className="aspect-[16/9] rounded-none sm:aspect-auto sm:min-h-[220px]" sizes="(min-width: 768px) 20vw, 100vw" />
              <div className="p-7 md:p-8">
              <h3 className="text-[22px] leading-[1.25] font-medium tracking-[-0.015em] md:text-[24px]">{item.title}</h3>
              <p className="mt-3 max-w-[34rem] text-[15px] leading-[1.6] text-ink-3">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

      </Container>
    </Section>
  );
}
