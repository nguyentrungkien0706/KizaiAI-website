import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container, Section, displayClass } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { cn } from "@/lib/utils";

/** Về Kizai Solution: số liệu, điểm mạnh và hệ sinh thái lấy từ kizai.vn. */
export function About({ t }: { t: Dictionary }) {
  const a = t.about;
  return (
    <Section id="about" aria-labelledby="about-title" className="pt-0 md:pt-0 xl:pt-0">
      <Container>
        <div className="on-night rounded-xl bg-night p-7 text-on-night-2 md:p-12 xl:p-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
            <div>
              <h2
                id="about-title"
                className={cn(displayClass, "text-[34px] text-white md:text-[44px] xl:text-[52px] [:lang(ja)_&]:text-[28px] md:[:lang(ja)_&]:text-[38px]")}
              >
                {a.title}
              </h2>
              <p className="mt-5 max-w-[36rem] text-lg leading-[1.6]">{a.sub}</p>
              <a
                href={a.moreHref}
                target="_blank"
                rel="noopener"
                className={cn(buttonVariants({ variant: "ghostNight" }), "mt-8")}
              >
                {a.more}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <dl className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-lg bg-night-line">
              {a.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-2 bg-night p-5 md:p-7">
                  <dt className="order-2 text-[15px]">{s.label}</dt>
                  <dd className="order-1 m-0 font-display text-[44px] leading-none tracking-[-0.03em] text-white md:text-[56px]">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-night-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {a.points.map((p) => (
              <li key={p.title}>
                <h3 className="text-[17px] font-semibold text-white">{p.title}</h3>
                <p className="mt-1.5 text-[15px]">{p.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 border-t border-night-line pt-10">
            <h3 className="text-[17px] font-semibold text-white">{a.ecosystemTitle}</h3>
            <p className="mt-1.5 text-[15px]">{a.ecosystemSub}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {a.ecosystem.map((e) => (
                <li key={e} className="rounded-full bg-white/10 px-3 py-1.5 text-[13px] font-medium text-white">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
