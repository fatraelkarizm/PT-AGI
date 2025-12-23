import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Partnership from "@/components/Partnership";
import FaQ from "@/components/FaQ";
import Contact from "@/components/Contact";
import StructuredData from "@/components/StructuredData";
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";
import { ModelAGI } from "@/assets";

export const metadata: Metadata = generateSEOMetadata({
  title: "Mitra Karier Internasional | PT AGI",
  description: "PT Akselerasi Global Indonesia - Wujudkan impian karier dan pendidikan global Anda. Program legal ke Jerman, USA, Belgia, dan China dengan bimbingan intensif.",
  keywords: [
    "karier internasional indonesia",
    "kerja di jerman legal",
    "ausbildung jerman",
    "studi vokasi china",
    "culture exchange usa",
    "pt agi indonesia",
    "konsultan pendidikan luar negeri",
  ],
  canonical: "/",
  ogImage: ModelAGI.src,
});

export default function Home() {
  const schemas = [
    generateOrganizationSchema(),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
    ]),
  ];

  return (
    <main>
      <StructuredData data={schemas} />
      <Hero />
      <Programs />
      <Partnership />
      <FaQ />
      <Contact />
    </main>
  );
}
