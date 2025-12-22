import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Studi Vokasi & Training Industri | PT AGI",
     description: "Program pendidikan dan pelatihan berbasis praktik di Jerman untuk membangun keterampilan kerja, pengalaman industri, dan kesiapan profesional.",
};

export default function VokasiLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return <>{children}</>;
}
