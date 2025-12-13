import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const Methodology = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const { t } = useLanguage();

  const icons = [
    <Search className="w-6 h-6" />,
    <PenTool className="w-6 h-6" />,
    <Code className="w-6 h-6" />,
    <Rocket className="w-6 h-6" />
  ];

  const steps = t.methodology.steps.map((step, index) => ({
    ...step,
    id: index + 1,
    icon: icons[index]
  }));

  return (
    <section id="methodology" className="py-24 bg-background relative" ref={containerRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.methodology.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.methodology.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="flex flex-col md:flex-row gap-8 items-start group"
              >
                {/* Number & Line */}
                <div className="flex flex-col items-center flex-shrink-0 md:w-24 relative">
                   <span className="text-5xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-300">
                     0{step.id}
                   </span>
                   {index !== steps.length - 1 && (
                     <div className="w-0.5 h-24 bg-primary/20 mt-4 group-hover:bg-primary transition-colors duration-300" />
                   )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                       <div className="p-2 rounded-lg bg-primary/5 text-primary">
                         {step.icon}
                       </div>
                       <h3 className="text-2xl font-bold text-foreground">
                         {step.title}
                       </h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-[0_0_20px_rgba(0,123,255,0.4)] hover:shadow-[0_0_30px_rgba(0,123,255,0.6)] transition-all"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t.nav.requestDemo}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
