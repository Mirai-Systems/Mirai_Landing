import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import UseCases from "@/components/UseCases";
import Methodology from "@/components/Methodology";
import TechStack from "@/components/TechStack";
import Resources from "@/components/Resources";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import StatsTicker from "@/components/StatsTicker";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <Hero />
      <StatsTicker />
      <Services />
      <UseCases />
      <Methodology />
      <TechStack />
      <Resources />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
