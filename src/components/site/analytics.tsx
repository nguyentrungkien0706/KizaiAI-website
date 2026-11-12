import Script from "next/script";

/**
 * Google Analytics 4. Chỉ bật khi có NEXT_PUBLIC_GA_ID (build arg trên Dokploy), không có thì không tải gì.
 */
export const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "";

/**
 * Ghi nguồn truy cập của lượt đầu tiên trong phiên (UTM, trang giới thiệu, trang vào) vào sessionStorage,
 * để form demo gửi kèm vào Google Sheet. Không dùng cookie, không gửi đi đâu khác.
 */
const sourceScript = `try{if(!sessionStorage.getItem('kz_src')){var u=new URLSearchParams(location.search),r='';try{var h=document.referrer&&new URL(document.referrer).hostname;if(h&&h!==location.hostname)r=h}catch(e){}var s=u.get('utm_source');sessionStorage.setItem('kz_src',JSON.stringify({src:s?[s,u.get('utm_medium')||'',u.get('utm_campaign')||''].join(' / '):(r?'ref: '+r:'direct'),land:location.pathname}))}}catch(e){}`;

/** Đọc nguồn truy cập đã lưu (xem sourceScript). */
export function readSource(): { src: string; land: string } {
  try {
    const v = JSON.parse(sessionStorage.getItem("kz_src") ?? "null");
    if (v && typeof v.src === "string") return { src: v.src, land: String(v.land ?? "") };
  } catch {}
  return { src: "", land: "" };
}

export function Analytics() {
  const source = (
    <Script id="kz-src" strategy="afterInteractive">
      {sourceScript}
    </Script>
  );
  if (!/^G-[A-Z0-9]+$/.test(gaId)) return source;
  return (
    <>
      {source}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
      </Script>
    </>
  );
}

type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;

/** Gửi sự kiện GA4 nếu GA đã được tải. */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  const gtag = (globalThis as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
