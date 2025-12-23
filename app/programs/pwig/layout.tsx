import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
     title: "Professional Worker in Germany (PWIG) | PT AGI",
     description: "Peluang karier profesional di Jerman untuk perawat, insinyur, dan spesialis IT. Fasilitas penyetaraan ijazah, kursus bahasa, dan penempatan kerja resmi.",
     keywords: [
          "lowongan kerja jerman",
          "tenaga ahli jerman",
          "perawat jerman",
          "pwig program",
          "anerkennung jerman",
          "karier internasional",
          "gaji profesional jerman"
     ],
     canonical: "/programs/pwig",
     ogImage: "/team-doctor.jpg",
});

export default function PWIGLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return <>{children}</>;
}
