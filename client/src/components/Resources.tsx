import { ArrowRight, Download, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Resources = () => {
  const resources = [
    {
      category: "Tutorial",
      title: "Cómo automatizar tu facturación con n8n y Stripe",
      description: "Guía paso a paso para eliminar el trabajo manual de finanzas.",
      tags: ["n8n", "Stripe", "Finanzas"],
      locked: false
    },
    {
      category: "Case Study",
      title: "Escalando de 0 a 10k leads sin aumentar equipo",
      description: "La arquitectura exacta que usamos para un cliente SaaS.",
      tags: ["Growth", "CRM", "Automatización"],
      locked: false
    },
    {
      category: "Template",
      title: "Checklist de Auditoría de Procesos Empresariales",
      description: "Documento interno que usamos para auditar empresas.",
      tags: ["Operations", "PDF"],
      locked: true
    }
  ];

  return (
    <section id="resources" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Centro de Recursos</h2>
            <p className="text-muted-foreground text-lg">Blueprints, guías y estrategias de ingeniería.</p>
          </div>
          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="> Search protocols..." 
              className="w-full bg-card border border-border rounded-md px-4 py-2 text-sm font-mono focus:outline-none focus:border-primary/50 transition-colors text-foreground"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-3 bg-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden group mb-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-2xl">
              <div className="text-primary font-mono text-sm mb-4">Featured Blueprint</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Sistema Operativo de Agencia IA</h3>
              <p className="text-muted-foreground text-lg mb-8">
                La arquitectura completa para gestionar clientes, proyectos y facturación de forma 100% automatizada. Incluye templates de Notion y workflows de n8n.
              </p>
              <Button className="bg-primary text-white rounded-full px-8">
                Leer Blueprint <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {resources.map((item, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  {item.locked ? (
                    <Lock className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2 text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6 line-clamp-3 text-muted-foreground">
                  {item.description}
                </CardDescription>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-muted-foreground border border-border px-1.5 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {item.locked && (
                    <Button variant="ghost" size="sm" className="h-8 text-xs hover:bg-muted">
                      <Download className="w-3 h-3 mr-2" /> Acceder
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
