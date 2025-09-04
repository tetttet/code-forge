import CustomerSuccessTabs from "@/components/elements/CustomerSuccessTabs";
import FAQSection from "@/components/elements/Faqs";
import Products from "@/components/elements/Products";
import TestimonialCard from "@/components/elements/TestimonialCard";

export default function Home() {
  return (
    <main>
      <Products />
      <CustomerSuccessTabs />
      <TestimonialCard />
      <FAQSection />
    </main>
  );
}
