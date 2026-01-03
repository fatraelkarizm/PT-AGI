import { generateMetadata } from "@/lib/seo";
import PWIGContent from "./content";

export const metadata = generateMetadata({
     title: "Program PWIG (G to G) Jerman",
     description: "Program Private to Private / G to G untuk perawat profesional ke Jerman. Jalur resmi pemerintah dan swasta dengan gaji standar Jerman.",
     keywords: ["PWIG Jerman", "G to G Jerman", "program pemerintah jerman", "karir perawat jerman", "loker ners jerman"],
     canonical: "/programs/pwig",
});

export default function Page() {
     return <PWIGContent />;
}
