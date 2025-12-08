import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const Methodology = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const steps = [
    {
      id: 1,
      title: "Auditoría Estratégica",
      description: "Analizamos tu negocio para encontrar dónde estás perdiendo dinero o tiempo. Definimos la estrategia antes de tocar nada técnico.",
      icon: <Search className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Diseño de la Solución",
      description: "Diseñamos el flujo de trabajo ideal. Te explicamos qué vamos a hacer y cómo funcionará, en idioma humano, sin tecnicismos.",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Construcción e Implementación",
      description: "Conectamos tus herramientas y creamos las automatizaciones de forma invisible, sin interrumpir tu trabajo diario ni el de tu equipo.",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Entrega y Control",
      description: "Te entregamos el sistema funcionando y monitoreamos las primeras semanas para mejorar constantemente. Tú tienes el control, nosotros te damos el soporte.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-background relative" ref={containerRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestra Metodología</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sin tecnicismos ni cajas negras. Un paso a paso claro para pasar del caos al piloto automático.
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
        </div>
      </div>
    </section>
  );
};

export default Methodology;
