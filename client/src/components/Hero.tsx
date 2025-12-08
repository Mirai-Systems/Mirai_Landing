import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 50;

    class Particle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.dx = (Math.random() - 0.5) * 0.5;
        this.dy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > canvas!.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.dy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(0, 123, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((a, index) => {
        for (let j = index + 1; j < particles.length; j++) {
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(0, 123, 255, ${0.15 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-1 pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Ingeniería de Automatización
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
              Automatización que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#002060]">
                Rentabiliza
              </span>
              , IA que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00BFFF]">
                Ejecuta
              </span>
            </h1>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3, duration: 0.5 }}
             className="h-8"
          >
             <TypewriterText texts={["Ahorra 20h semanales", "Elimina errores manuales", "Maximiza tu ROI"]} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            Ayudamos a PYMES, Startups y pequeños negocios a implementar Inteligencia Artificial para ahorrar costos, minimizar errores humanos y ganar tiempo y productividad
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-[0_0_20px_rgba(0,123,255,0.4)] hover:shadow-[0_0_30px_rgba(0,123,255,0.6)] transition-all">
              Solicitar Demo
            </Button>
          </motion.div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Acompañamiento Estratégico</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Ahorro de Tiempo Real</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Resultados Auditables</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative hidden lg:block"
        >
          {/* Abstract n8n Flow Representation */}
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" />
            
            <div className="relative z-10 bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-2xl">
               <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
                   <div className="w-3 h-3 rounded-full bg-green-500" />
                 </div>
                 <div className="font-mono text-xs text-muted-foreground">Chatbot_24/7</div>
               </div>
               
               <div className="space-y-4">
                 <WorkflowNode icon="💬" label="Mensaje en WhatsApp o Instagram" status="success" />
                 <div className="h-8 w-0.5 bg-border mx-8 relative">
                    <motion.div 
                      animate={{ y: [0, 32] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#007BFF]"
                    />
                 </div>
                 <WorkflowNode icon="🤖" label="Chatbot con IA" status="processing" />
                 <div className="h-8 w-0.5 bg-border mx-8 relative">
                    <motion.div 
                      animate={{ y: [0, 32] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#007BFF]"
                    />
                 </div>
                 <WorkflowNode icon="📅" label="Cita agendada en tu calendario" status="pending" />
               </div>
            </div>
            
            {/* Removed floating badges as requested */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <h2 className="text-xl md:text-2xl font-medium text-primary font-mono h-8 flex items-center">
      {`> ${texts[index].substring(0, subIndex)}`}
      <span className="w-2 h-5 bg-primary ml-1 animate-pulse" />
    </h2>
  );
};

const WorkflowNode = ({ icon, label, status, small }: { icon: string, label: string, status: "success" | "processing" | "pending", small?: boolean }) => (
  <div className={cn(
    "flex items-center gap-3 p-3 rounded-lg border transition-all",
    status === "success" ? "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-100" :
    status === "processing" ? "bg-primary/10 border-primary/30 text-primary shadow-[0_0_15px_rgba(0,123,255,0.1)]" :
    "bg-muted border-border text-muted-foreground",
    small ? "text-sm" : ""
  )}>
    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-background/50 text-lg shadow-sm">
      {icon}
    </div>
    <span className="font-medium">{label}</span>
    {status === "processing" && (
      <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#007BFF]" />
    )}
  </div>
);

export default Hero;
