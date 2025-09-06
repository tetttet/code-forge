import CustomerSuccessTabs from "@/components/elements/CustomerSuccessTabs";
import FAQSection from "@/components/elements/Faqs";
import Hero from "@/components/elements/Hero";
import Products from "@/components/elements/Products";
import TestimonialCard from "@/components/elements/TestimonialCard";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="-my-10">
        <Products />
      </div>
      <CustomerSuccessTabs />
      <TestimonialCard />
      <FAQSection />
    </main>
  );
}
