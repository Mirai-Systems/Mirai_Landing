import { motion } from "framer-motion";

const StatsTicker = () => {
  const stats = [
    { label: "Procesos automatizados hoy", value: "1,240+" },
    { label: "Horas ahorradas a clientes", value: "8,500h" },
    { label: "APIs conectadas", value: "45+" },
    { label: "Eficiencia promedio", value: "+350%" },
    { label: "Errores eliminados", value: "99.9%" },
  ];

  return (
    <div className="bg-[#002060] py-4 overflow-hidden border-t border-white/10">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 px-6"
        >
          {[...stats, ...stats, ...stats].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-primary font-bold text-xl">{stat.value}</span>
              <span className="text-white/70 text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </span>
              <span className="w-1 h-1 bg-white/20 rounded-full ml-8" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatsTicker;
