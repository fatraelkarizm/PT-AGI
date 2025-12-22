import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Professional Worker in Germany | PT AGI",
     description: "Program penempatan kerja internasional bagi tenaga profesional dan lulusan siap kerja untuk bekerja secara legal di Jerman sesuai bidang dan kompetensinya.",
};

export default function PWIGLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return <>{children}</>;
}
