import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  const plans = [
    {
      name: "Proyecto Puntual",
      description: "Ideal para automatizaciones específicas o auditorías.",
      price: "Desde $1,500",
      features: [
        "Auditoría de procesos",
        "Diseño de arquitectura",
        "Desarrollo de workflows (hasta 5)",
        "Documentación técnica",
        "30 días de soporte post-launch"
      ],
      highlight: false
    },
    {
      name: "Growth Partner",
      description: "Mejora continua y mantenimiento de sistemas críticos.",
      price: "$2,500",
      period: "/mes",
      features: [
        "Mantenimiento proactivo",
        "Optimización continua",
        "Nuevos workflows ilimitados*",
        "Soporte prioritario 24/7",
        "Consultoría estratégica semanal",
        "Acceso a dashboard de métricas"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      description: "Infraestructura dedicada para grandes volúmenes.",
      price: "Custom",
      features: [
        "Servidor n8n dedicado",
        "SLA garantizado 99.9%",
        "Auditoría de seguridad",
        "Integraciones on-premise",
        "Training para equipo in-house"
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#010409] relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Inversión con ROI Claro</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            No cobramos por horas. Cobramos por valor y sistemas que funcionan 24/7.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium", !isMonthly ? "text-white" : "text-muted-foreground")}>
              Proyecto Único
            </span>
            <Switch
              checked={isMonthly}
              onCheckedChange={setIsMonthly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={cn("text-sm font-medium", isMonthly ? "text-white" : "text-muted-foreground")}>
              Mantenimiento Mensual
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative p-8 rounded-2xl border flex flex-col transition-all duration-300 hover:-translate-y-2",
                plan.highlight
                  ? "bg-primary/5 border-primary shadow-[0_0_40px_rgba(0,123,255,0.15)] z-10"
                  : "bg-card border-white/10 hover:border-white/20"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-current" /> MÁS RENTABLE
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="mt-0.5 p-0.5 rounded-full bg-primary/20 text-primary">
                      <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "w-full py-6 rounded-xl font-semibold",
                  plan.highlight
                    ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                )}
              >
                Comenzar Ahora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
