import { motion } from "framer-motion";
import { Database, Bot, Zap, ArrowUpRight, Instagram } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const icons = [
    <Bot className="w-8 h-8 text-blue-500" />,
    <Instagram className="w-8 h-8 text-pink-500" />,
    <Database className="w-8 h-8 text-purple-500" />,
    <Zap className="w-8 h-8 text-yellow-500" />
  ];

  const colSpans = [
    "lg:col-span-2",
    "lg:col-span-1",
    "lg:col-span-1",
    "lg:col-span-2"
  ];

  const services = t.services.items.map((item, index) => ({
    ...item,
    icon: icons[index],
    colSpan: colSpans[index]
  }));

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
            {t.services.title} <span className="text-primary">{t.services.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              <Card className="h-full bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,123,255,0.15)] overflow-hidden relative flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="p-8 pb-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-muted rounded-lg group-hover:scale-110 transition-transform duration-300 border border-border group-hover:border-primary/30 text-foreground">
                      {service.icon}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all" />
                  </div>
                  <CardTitle className="text-xl mt-4 group-hover:text-primary transition-colors text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex flex-col flex-1">
                  <CardDescription className="text-base mb-6 text-muted-foreground flex-1">
                    {service.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-muted border border-border text-muted-foreground group-hover:border-primary/30 group-hover:text-primary/80 transition-colors">
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
