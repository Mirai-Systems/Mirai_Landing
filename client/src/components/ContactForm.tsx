import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  tools: z.array(z.string()).min(1, "Selecciona al menos una herramienta"),
  bottleneck: z.string().min(10, "Cuéntanos un poco más sobre tu problema"),
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  company: z.string().optional(),
});

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tools: [],
      bottleneck: "",
      name: "",
      email: "",
      company: "",
    },
  });

  const tools = [
    "HubSpot", "Salesforce", "Airtable", "Notion", 
    "Shopify", "Stripe", "Slack", "Google Workspace",
    "Excel/Sheets", "QuickBooks", "WhatsApp", "Otro"
  ];

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const nextStep = async () => {
    let valid = false;
    if (step === 1) {
      valid = await form.trigger("tools");
    } else if (step === 2) {
      valid = await form.trigger("bottleneck");
    }
    
    if (valid) setStep(step + 1);
  };

  const toggleTool = (tool: string) => {
    const current = form.getValues("tools");
    if (current.includes(tool)) {
      form.setValue("tools", current.filter((t) => t !== tool));
    } else {
      form.setValue("tools", [...current, tool]);
    }
  };

  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="container px-4 md:px-6 mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comienza tu Automatización</h2>
          <p className="text-muted-foreground">
            Completa este formulario para ver si calificas para una auditoría gratuita.
          </p>
        </div>

        <div className="bg-card border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">¡Datos Recibidos!</h3>
              <p className="text-muted-foreground">
                Nuestro sistema está procesando tu solicitud. Te contactaremos en menos de 24h.
              </p>
              <Button 
                className="mt-8" 
                variant="outline" 
                onClick={() => {
                  setIsSuccess(false);
                  setStep(1);
                  form.reset();
                }}
              >
                Nueva solicitud
              </Button>
            </motion.div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex justify-between mb-8 relative">
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10" />
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors border-2",
                        step >= s
                          ? "bg-primary border-primary text-white"
                          : "bg-background border-white/20 text-muted-foreground"
                      )}
                    >
                      {s}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">¿Qué herramientas usas hoy?</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {tools.map((tool) => (
                            <div
                              key={tool}
                              onClick={() => toggleTool(tool)}
                              className={cn(
                                "cursor-pointer p-3 rounded-lg border text-sm text-center transition-all",
                                form.watch("tools").includes(tool)
                                  ? "bg-primary/20 border-primary text-primary font-medium"
                                  : "bg-white/5 border-white/10 hover:border-white/30 text-muted-foreground"
                              )}
                            >
                              {tool}
                            </div>
                          ))}
                        </div>
                        {form.formState.errors.tools && (
                          <p className="text-red-400 text-sm">{form.formState.errors.tools.message}</p>
                        )}
                      </div>
                      <Button type="button" onClick={nextStep} className="w-full">
                        Siguiente <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="bottleneck"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xl font-semibold">¿Cuál es tu mayor cuello de botella?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Ej: Pierdo 5 horas a la semana copiando datos de Excel a HubSpot..." 
                                className="min-h-[150px] bg-white/5 border-white/10 focus:border-primary"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex gap-4">
                        <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-full">
                          Atrás
                        </Button>
                        <Button type="button" onClick={nextStep} className="w-full">
                          Siguiente <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl font-semibold mb-4">Tus datos de contacto</h3>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                              <Input placeholder="Tu nombre" className="bg-white/5 border-white/10" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Corporativo</FormLabel>
                            <FormControl>
                              <Input placeholder="tu@empresa.com" className="bg-white/5 border-white/10" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Empresa (Opcional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Nombre de tu empresa" className="bg-white/5 border-white/10" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex gap-4 mt-6">
                        <Button type="button" variant="outline" onClick={() => setStep(2)} className="w-full">
                          Atrás
                        </Button>
                        <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white">
                          {isSubmitting ? (
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          ) : (
                            <Send className="mr-2 w-4 h-4" />
                          )}
                          Enviar Solicitud
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
