import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Culture Exchange Program | PT AGI",
     description: "Program pertukaran budaya internasional di USA, Belgia, atau China. Pengalaman Au Pair dan Summer Work untuk pengembangan diri.",
};

export default function ExchangeLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return <>{children}</>;
}
