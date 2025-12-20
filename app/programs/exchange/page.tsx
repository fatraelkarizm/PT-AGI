import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import ExchangeContent from "@/components/program-pages/ExchangeContent";

export const metadata: Metadata = generateSEOMetadata({
     title: "Culture Exchange - Au Pair & Summer Work USA/Eropa",
     description: "Program pertukaran budaya (Au Pair & Summer Work) ke USA, Belgia, dan China. Tinggal bersama host family, uang saku, dan pengalaman internasional.",
     keywords: [
          "au pair eropa",
          "au pair belgia",
          "summer work travel usa",
          "pertukaran budaya",
          "gap year program",
          "belajar bahasa inggris",
          "kerja paruh waktu luar negeri",
     ],
     canonical: "/programs/exchange",
     ogImage: "/Cultural-Exchange.jpg",
});

export default function CulturalExchangePage() {
     return <ExchangeContent />;
}
