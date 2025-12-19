import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Expenses from "@/components/Expenses";
import FaQ from "@/components/FaQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Hero />
      <Programs />
      <Expenses />
      <FaQ />
      <Contact />
    </main>
  );
}
