import Script from "next/script";

/**
 * Google Analytics 4. Chỉ bật khi có NEXT_PUBLIC_GA_ID (build arg trên Dokploy), không có thì không tải gì.
 */
export const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "";

export function Analytics() {
  if (!/^G-[A-Z0-9]+$/.test(gaId)) return null;
  return (
    <>
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
