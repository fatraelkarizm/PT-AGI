import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { HotelPria } from "@/assets";

export const metadata: Metadata = generateSEOMetadata({
     title: "Studi Vokasi & Training Industri | PT AGI",
     description: "Program Ausbildung (Vokasi) Gastronomi di Jerman. Kuliah sambil kerja dengan gaji bulanan, fasilitas tempat tinggal, dan sertifikasi internasional.",
     keywords: [
          "ausbildung jerman",
          "sekolah vokasi jerman",
          "gastronomi jerman",
          "beasiswa ausbildung",
          "kuliah di jerman",
          "lowongan hotel jerman",
          "gaji ausbildung"
     ],
     canonical: "/programs/vokasi",
     ogImage: HotelPria,
});

export default function VokasiLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return <>{children}</>;
}
