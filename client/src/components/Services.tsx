import { motion } from "framer-motion";
import { Database, Bot, Zap, Brain, Layers, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Desarrollo n8n Avanzado",
      description: "Orquestación de flujos complejos, manejo de errores y lógica condicional avanzada.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      tags: ["Webhook", "API", "Cron"],
      colSpan: "lg:col-span-2",
    },
    {
      title: "Integración de LLMs (IA)",
      description: "Implementación de GPT-4, Claude y modelos open source en tus procesos.",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      tags: ["OpenAI", "LangChain", "Vector DB"],
      colSpan: "lg:col-span-1",
    },
    {
      title: "Sincronización CRM & Cloud",
      description: "Mantén tus datos alineados entre HubSpot, Salesforce, Airtable y Google Cloud.",
      icon: <Database className="w-8 h-8 text-blue-400" />,
      tags: ["SQL", "NoSQL", "Data Sync"],
      colSpan: "lg:col-span-1",
    },
    {
      title: "Bots Inteligentes",
      description: "Asistentes virtuales que no solo responden, sino que ejecutan acciones en tus sistemas.",
      icon: <Bot className="w-8 h-8 text-green-400" />,
      tags: ["Slack", "Discord", "WhatsApp"],
      colSpan: "lg:col-span-2",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/20 rounded-full blur-[100px]" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Ingeniería de <span className="text-primary">Sistemas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Construimos la infraestructura digital invisible que escala tu negocio sin aumentar tu plantilla.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${service.colSpan} group`}
            >
              <Card className="h-full bg-card border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,123,255,0.15)] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/5 rounded-lg group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-primary/30">
                      {service.icon}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all" />
                  </div>
                  <CardTitle className="text-xl mt-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    {service.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary/80 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
