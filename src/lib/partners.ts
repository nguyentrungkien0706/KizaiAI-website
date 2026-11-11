import type { StaticImageData } from "next/image";
import p1 from "@/assets/partners/p1.webp";
import p2 from "@/assets/partners/p2.webp";
import p3 from "@/assets/partners/p3.webp";
import p4 from "@/assets/partners/p4.webp";
import p5 from "@/assets/partners/p5.webp";
import p6 from "@/assets/partners/p6.webp";
import p8 from "@/assets/partners/p8.webp";
import p9 from "@/assets/partners/p9.webp";
import p10 from "@/assets/partners/p10.webp";
import p11 from "@/assets/partners/p11.webp";
import p12 from "@/assets/partners/p12.webp";
import p13 from "@/assets/partners/p13.webp";
import p14 from "@/assets/partners/p14.webp";
import p15 from "@/assets/partners/p15.webp";
import p16 from "@/assets/partners/p16.webp";
import p17 from "@/assets/partners/p17.webp";
import p18 from "@/assets/partners/p18.webp";
import p19 from "@/assets/partners/p19.webp";
import p20 from "@/assets/partners/p20.webp";
import p21 from "@/assets/partners/p21.webp";

/** Logo đối tác và khách hàng lấy từ kizai.vn (mục "Đối tác chiến lược"). Khóa là số thứ tự ảnh trên kizai.vn. */
export const partners: { id: number; name: string; logo: StaticImageData }[] = [
  { id: 1, name: "KDDI Vietnam", logo: p1 },
  { id: 2, name: "Yamaha Motor", logo: p2 },
  { id: 3, name: "Meiko Electronics Vietnam", logo: p3 },
  { id: 4, name: "Diana Unicharm", logo: p4 },
  { id: 5, name: "KYB", logo: p5 },
  { id: 6, name: "Foxconn", logo: p6 },
  { id: 8, name: "TDS Việt Nam", logo: p8 },
  { id: 9, name: "Global Automation", logo: p9 },
  { id: 10, name: "VTECH", logo: p10 },
  { id: 11, name: "Keyence Vietnam", logo: p11 },
  { id: 12, name: "3D Cube", logo: p12 },
  { id: 13, name: "Viqualita", logo: p13 },
  { id: 14, name: "Yokogawa", logo: p14 },
  { id: 15, name: "ESG.edu.vn", logo: p15 },
  { id: 16, name: "Advanex", logo: p16 },
  { id: 17, name: "SMC", logo: p17 },
  { id: 18, name: "HTMP", logo: p18 },
  { id: 19, name: "Yokowo", logo: p19 },
  { id: 20, name: "IKKA", logo: p20 },
  { id: 21, name: "Cowatech Group", logo: p21 },
];

export function partnerById(id: number) {
  return partners.find((p) => p.id === id);
}
