import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import VokasiContent from "@/components/program-pages/VokasiContent";

export const metadata: Metadata = generateSEOMetadata({
     title: "Studi Vokasi & Training Industri",
     description: "Program studi vokasi D3 dengan beasiswa penuh di Jerman. Kombinasi kuliah dan magang industri. Lulusan siap kerja di perusahaan multinasional.",
     keywords: [
          "studi vokasi china",
          "beasiswa china",
          "kuliah di taiwan",
          "magang luar negeri",
          "vokasi d3",
          "teknik manufaktur",
          "bahasa mandarin",
     ],
     canonical: "/programs/vokasi",
     ogImage: "/hotel-pria.jpg",
});

export default function VokasiPage() {
     return <VokasiContent />;
}
