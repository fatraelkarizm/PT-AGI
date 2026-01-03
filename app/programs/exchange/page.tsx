import { generateMetadata } from "@/lib/seo";
import ExchangeContent from "./content";

export const metadata = generateMetadata({
     title: "Program Cultural Exchange USA & Global",
     description: "Program pertukaran budaya (Cultural Exchange) ke USA, China, dan negara lainnya. Pengalaman internasional, belajar budaya, dan tingkatkan kemampuan bahasa.",
     keywords: ["Cultural Exchange", "pertukaran pelajar", "summer work travel usa", "beasiswa", "au pair"],
     canonical: "/programs/exchange",
});

export default function Page() {
     return <ExchangeContent />;
}
