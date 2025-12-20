import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import PWIGContent from "@/components/program-pages/PWIGContent";

export const metadata: Metadata = generateSEOMetadata({
     title: "Professional Worker in Germany (PWIG) - Karier Profesional Jerman",
     description: "Peluang karier bagi tenaga profesional (Perawat, IT, Engineer) di Jerman. Gaji €35,000 - €55,000 per tahun. Fasilitas penyetaraan ijazah dan penempatan kerja.",
     keywords: [
          "pwig program",
          "kerja profesional jerman",
          "gaji perawat jerman",
          "lowongan it jerman",
          "insinyur jerman",
          "anerkennung",
          "visa kerja jerman",
     ],
     canonical: "/programs/pwig",
     ogImage: "/team-doctor.jpg",
});

export default function PWIGPage() {
     return <PWIGContent />;
}
