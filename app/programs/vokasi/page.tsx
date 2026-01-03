import { generateMetadata } from "@/lib/seo";
import VokasiContent from "./content";

export const metadata = generateMetadata({
     title: "Program Ausbildung (Vokasi Kuliah Gratis) Jerman",
     description: "Program sekolah vokasi gratis (Ausbildung) di Jerman. Kuliah sambil kerja, dapat gaji bulanan, dan jaminan kerja setelah lulus. Jurusan: Restoran, Hotel, Koki.",
     keywords: ["Ausbildung Jerman", "sekolah vokasi jerman", "kuliah gratis jerman", "ausbildung gastronomy", "beasiswa jerman"],
     canonical: "/programs/vokasi",
});

export default function Page() {
     return <VokasiContent />;
}
