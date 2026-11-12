import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/drafting";
import type { Locale } from "@/i18n/config";
import { smbContent, smbPath } from "@/i18n/smb-content";

/** Dải giới thiệu trang hộ kinh doanh, đặt trên trang chủ ngay sau phần module. */
export function SmbBand({ locale }: { locale: Locale }) {
  const b = smbContent[locale].homeBand;
  return (
    <section aria-labelledby="smb-band-title">
      <Container>
        <a
          href={`/${locale}${smbPath}`}
          className="group flex flex-col gap-5 rounded-xl bg-surface p-7 transition-colors duration-[120ms] hover:bg-surface-2 md:flex-row md:items-center md:justify-between md:p-10"
        >
          <div className="max-w-[44rem]">
            <h2 id="smb-band-title" className="text-[24px] font-semibold tracking-[-0.01em] text-ink md:text-[28px]">
              {b.title}
            </h2>
            <p className="mt-2 text-[16px] text-ink-3">{b.text}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 text-[15px] font-semibold text-ink">
            {b.link}
            <ChevronRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </a>
      </Container>
    </section>
  );
}
