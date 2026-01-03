import { generateMetadata } from "@/lib/seo";
import FTTCContent from "./content";

export const metadata = generateMetadata({
     title: "Program FTTC (Fast Track to Career) Jerman",
     description: "Program percepatan karier perawat ke Jerman (FTTC) untuk D3/S1 Keperawatan & Kebidanan. Pelatihan bahasa, Au Pair, hingga kontrak kerja legal.",
     keywords: ["FTTC Jerman", "program perawat jerman", "kerja perawat di jerman", "ausbildung perawat", "loker perawat jerman"],
     canonical: "/programs/fttc",
});

export default function Page() {
     return <FTTCContent />;
}
