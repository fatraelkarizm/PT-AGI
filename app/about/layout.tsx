import { Metadata } from "next";

export const metadata: Metadata = {
     title: "Tentang Akselerasi Global Indonesia | PT AGI",
     description: "PT Akselerasi Global Indonesia (AGI) adalah jembatan impian Anda menuju karier dan pendidikan internasional. Mitra terpercaya untuk masa depan global.",
};

export default function AboutLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return <>{children}</>;
}
