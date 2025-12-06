import { motion } from "framer-motion";

const TechStack = () => {
  const techs = [
    { name: "n8n", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/N8n-logo-black.svg/2560px-N8n-logo-black.svg.png" }, // Placeholder will need replacement if not valid, using text for now or generic
    { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
    { name: "Google Cloud", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "HubSpot", icon: "https://upload.wikimedia.org/wikipedia/commons/1/15/HubSpot_Logo.svg" },
    { name: "Airtable", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg" },
    { name: "Notion", icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    { name: "Slack", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
    { name: "Stripe", icon: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  ];

  return (
    <section className="py-16 bg-card border-y border-white/5 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <h3 className="text-xl font-semibold text-white">
            Powering your stack with <span className="text-primary">best-in-class</span> integrations
          </h3>
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            API Universal Compatibility
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-70">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0%)" }}
              className="w-full h-12 flex items-center justify-center filter grayscale transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
            >
              {/* Using text fallback if images fail, but intended to be logos */}
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="max-h-8 max-w-[100px] object-contain invert brightness-0 dark:invert" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
