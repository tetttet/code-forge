import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <Hero />
      <Services />
      <CTA />
    </main>
  );
}
