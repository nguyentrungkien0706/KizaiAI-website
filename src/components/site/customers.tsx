import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { partnerById } from "@/lib/partners";
import { cn } from "@/lib/utils";

/** Dự án tiêu biểu: nội dung tóm tắt từ case study trên kizai.vn. */
export function Customers({ t }: { t: Dictionary }) {
  const c = t.customers;
  return (
    <Section id="customers" aria-labelledby="customers-title">
      <Container>
        <SectionHeading id="customers-title" title={c.casesTitle} sub={c.casesSub} />

        <ul className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {c.cases.map((cs) => {
            const logo = partnerById(cs.partner)?.logo;
            return (
              <li key={cs.client} className="flex flex-col rounded-xl bg-surface p-7 md:p-10">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-36 items-center rounded-lg bg-white px-3">
                    {logo ? <Image src={logo} alt={cs.client} sizes="120px" className="max-h-9 w-auto object-contain" /> : null}
                  </div>
                  <p className="text-right text-[13px] leading-[1.4] text-ink-3">{cs.scope}</p>
                </div>
                <h3 className="mt-8 text-[24px] leading-[1.25] font-bold tracking-[-0.02em] md:text-[28px]">{cs.title}</h3>
                <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6">
                  {cs.facts.map((f) => (
                    <li key={f} className="flex gap-3 text-[15px] text-ink-2">
                      <span aria-hidden="true" className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand-hover" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={cs.href}
                  target="_blank"
                  rel="noopener"
                  className={cn(buttonVariants({ variant: "link" }), "mt-8 self-start")}
                >
                  {c.readMore}
                  <span className="sr-only">: {cs.client}</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 text-center">
          <a href={c.allCasesHref} target="_blank" rel="noopener" className={buttonVariants({ variant: "secondary" })}>
            {c.allCases}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </Container>
    </Section>
  );
}
