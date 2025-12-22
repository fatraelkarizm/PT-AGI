import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import SekolahContent from "@/components/kemitraan-pages/SekolahContent";

export const metadata: Metadata = generateSEOMetadata({
     title: "Partnership Sekolah (SMK/SMA) - PT AGI",
     description: "Program kemitraan untuk SMK dan SMA. Persiapkan lulusan untuk Ausbildung dan kuliah vokasi di Jerman. Kurikulum bahasa, pelatihan guru, dan jalur khusus.",
     keywords: [
          "kerjasama smk jerman",
          "program ausbildung smk",
          "kelas industri jerman",
          "guru bahasa jerman",
          "bursa kerja khusus luar negeri",
          "bmi jerman"
     ],
     canonical: "/kemitraan/sekolah",
     ogImage: "/Vocational-School.png",
});

export default function SekolahPage() {
     return <SekolahContent />;
}