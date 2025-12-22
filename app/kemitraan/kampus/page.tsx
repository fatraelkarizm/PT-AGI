import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import KampusContent from "@/components/kemitraan-pages/KampusContent";

export const metadata: Metadata = generateSEOMetadata({
     title: "Partnership Kampus & Universitas - PT AGI",
     description: "Program kerjasama strategis untuk Universitas dan Politeknik. Penyaluran lulusan ke Jerman, MoU, Guest Lecturer, dan Pengembangan Kurikulum Internasional.",
     keywords: [
          "kerjasama kampus jerman",
          "mou universitas jerman",
          "penyaluran alumni",
          "magang jerman mahasiswa",
          "kampus merdeka jerman",
          "link and match internasional"
     ],
     canonical: "/kemitraan/kampus",
     ogImage: "/Global-University.png",
});

export default function CampusPage() {
     return <KampusContent />;
}