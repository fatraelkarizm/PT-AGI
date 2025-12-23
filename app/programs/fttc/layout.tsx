import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
     title: "Fast Track to Career (FTTC) | PT AGI",
     description: "Program intensif 6-9 bulan untuk persiapan karier di Jerman. Pelatihan bahasa, budaya, dan kompetensi teknis dengan penempatan kerja terjamin. Gaji €2000-€3500/bulan.",
     keywords: [
          "fast track to career",
          "fttc program",
          "kerja di jerman",
          "ausbildung jerman",
          "program karier jerman",
          "pelatihan bahasa jerman",
          "visa kerja jerman",
          "gaji jerman",
     ],
     canonical: "/programs/fttc",
     ogImage: "/Nurse.jpg",
});

export default function FTTCLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return <>{children}</>;
}
