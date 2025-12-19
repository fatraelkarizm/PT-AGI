import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Programs />
      <div className="h-[50vh] bg-gray-50 flex items-center justify-center text-gray-400">
        <p>Scroll down to see sticky navbar effect...</p>
      </div>
    </main>
  );
}
