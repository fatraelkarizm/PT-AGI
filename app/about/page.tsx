import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = generateSEOMetadata({
     title: "Tentang Kami - PT Akselerasi Global Indonesia",
     description: "Profil PT AGI, konsultan pendidikan dan karier internasional terpercaya. Misi kami menghubungkan talenta Indonesia dengan peluang global yang legal dan aman.",
     keywords: [
          "tentang pt agi",
          "profil perusahaan",
          "visi misi agi",
          "konsultan pendidikan terbaik",
          "legalitas pt agi",
     ],
     canonical: "/about",
     ogImage: "/AGI-LOGO.jpeg",
});

export default function AboutPage() {
     return <AboutContent />;
}
