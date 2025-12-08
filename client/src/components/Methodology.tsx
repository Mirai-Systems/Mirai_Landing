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
      title: "Discovery & Auditoría",
      description: "Analizamos tus procesos actuales, identificamos cuellos de botella y calculamos el ROI potencial antes de escribir una línea de código.",
      icon: <Search className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Arquitectura de Flujos",
      description: "Diseñamos la solución completa en diagramas técnicos. Definimos herramientas, triggers y manejo de errores.",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Desarrollo & Integración",
      description: "Construimos los workflows en n8n, conectamos APIs y configuramos la lógica de negocio con scripts personalizados si es necesario.",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Despliegue & Training",
      description: "Lanzamos a producción, monitoreamos los primeros días y capacitamos a tu equipo para que tomen el control.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-background relative" ref={containerRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestra Metodología</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un proceso de ingeniería estructurado para garantizar resultados predecibles.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2">
            <motion.div 
              style={{ scaleY: scrollYProgress }}
              className="absolute top-0 left-0 w-full bg-primary origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node on the line */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-card z-10 flex items-center justify-center shadow-lg">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ margin: "-100px" }}
                    className="w-4 h-4 bg-primary rounded-full"
                  />
                </div>

                <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-24 md:text-right" : "md:pl-24"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md"
                    style={{ marginLeft: index % 2 === 0 ? "auto" : "0" }}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted border border-border text-primary mb-4 shadow-sm ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}>
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      <span className="text-primary/50 mr-2">0{step.id}.</span>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
