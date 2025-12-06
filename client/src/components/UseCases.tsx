import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, DollarSign, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const UseCases = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      title: "Agencia de Marketing",
      metric: "Automatización de Reporting",
      before: "15h/semana en Excel manual",
      after: "0h - Dashboard en Tiempo Real",
      savedMoney: 2500,
      savedHours: 60,
      description: "Conectamos Facebook Ads, Google Ads y LinkedIn a BigQuery y Looker Studio. Los reportes ahora se envían solos cada lunes a las 9 AM.",
      chartData: [100, 120, 150, 200, 350, 480]
    },
    {
      title: "E-commerce B2B",
      metric: "Sincronización Stock/ERP",
      before: "Errores de stock diarios",
      after: "Sincronización < 2 seg",
      savedMoney: 4200,
      savedHours: 45,
      description: "Webhook desde Shopify hacia ERP legacy vía n8n. Eliminamos los pedidos cancelados por falta de stock y mejoramos la satisfacción del cliente.",
      chartData: [50, 55, 65, 90, 150, 280]
    },
    {
      title: "SaaS Fintech",
      metric: "Onboarding de Clientes",
      before: "Proceso manual de 3 días",
      after: "Onboarding instantáneo",
      savedMoney: 6800,
      savedHours: 120,
      description: "Orquestación completa: Stripe Payment -> Creación de cuenta AWS -> Envío de credenciales -> Bienvenida en Slack. Todo en 45 segundos.",
      chartData: [200, 220, 250, 300, 450, 700]
    }
  ];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: 'rgba(2, 6, 23, 0.9)',
        titleColor: '#fff',
        bodyColor: '#ccc',
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#64748b',
        }
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false,
        },
        ticks: {
          color: '#64748b',
        }
      }
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false
    }
  };

  const currentData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'ROI Acumulado ($)',
        data: cases[activeCase].chartData,
        borderColor: '#007BFF',
        backgroundColor: 'rgba(0, 123, 255, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#007BFF',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  return (
    <section id="cases" className="py-24 bg-muted/30 border-y border-border/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Resultados Reales</h2>
            <p className="text-muted-foreground text-lg">No vendemos humo. Vendemos tiempo recuperado.</p>
          </div>
          
          <div className="flex gap-2 bg-muted p-1 rounded-lg border border-border">
            {cases.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveCase(i)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCase === i 
                    ? "bg-primary text-white shadow-lg" 
                    : "text-muted-foreground hover:text-foreground hover:bg-background"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium">
                  {cases[activeCase].metric}
                </div>
                <h3 className="text-3xl font-bold text-foreground">{cases[activeCase].title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {cases[activeCase].description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-card rounded-xl border border-red-500/20 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 p-2 opacity-20">
                    <Clock className="w-12 h-12 text-red-500" />
                  </div>
                  <p className="text-sm text-red-500 font-medium mb-1">Antes</p>
                  <p className="text-xl font-bold text-foreground/90">{cases[activeCase].before}</p>
                </div>
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 relative overflow-hidden shadow-sm">
                   <div className="absolute top-0 right-0 p-2 opacity-20">
                    <Zap className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-sm text-primary font-medium mb-1">Después</p>
                  <p className="text-xl font-bold text-foreground">{cases[activeCase].after}</p>
                </div>
              </div>

              <div className="flex gap-8 pt-4">
                <div className="flex items-center gap-3">
                   <div className="p-3 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                     <DollarSign className="w-6 h-6" />
                   </div>
                   <div>
                     <div className="text-2xl font-bold text-foreground">${cases[activeCase].savedMoney}/mo</div>
                     <div className="text-xs text-muted-foreground uppercase tracking-wider">Ahorro estimado</div>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="p-3 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                     <Clock className="w-6 h-6" />
                   </div>
                   <div>
                     <div className="text-2xl font-bold text-foreground">{cases[activeCase].savedHours}h/mo</div>
                     <div className="text-xs text-muted-foreground uppercase tracking-wider">Recuperadas</div>
                   </div>
                </div>
              </div>

              <Button className="mt-6 bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
                Calcula tu ahorro potencial <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </AnimatePresence>

          <div className="h-[400px] w-full bg-card border border-border rounded-2xl p-6 relative shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0 pointer-events-none" />
            <h4 className="text-sm font-medium text-muted-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              Crecimiento de Eficiencia
            </h4>
            <div className="h-[300px] w-full relative z-10">
               <Line options={chartOptions} data={currentData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
