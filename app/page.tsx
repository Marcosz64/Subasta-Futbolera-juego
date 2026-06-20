import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/Statsbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07110c] text-white">
      <Navbar />

      <div className="container mx-auto px-4">
        <Hero />
        <StatsBar />
      </div>
    </main>
  );
}