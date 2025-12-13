import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const TechStack = () => {
  const { t } = useLanguage();
  const techs = [
    { name: "n8n", icon: "https://res.cloudinary.com/dllawhmxq/image/upload/v1765205810/n8n_1_r7mps4.png" }, // Placeholder will need replacement if not valid, using text for now or generic
    { name: "OpenAI", icon: "https://res.cloudinary.com/dllawhmxq/image/upload/v1765206338/openai-old-logo_ukxhni.png" },
    { name: "Google Cloud", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "HubSpot", icon: "https://res.cloudinary.com/dllawhmxq/image/upload/v1765205917/326419_s69twf.png" },
    { name: "Airtable", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg" },
    { name: "Notion", icon: "https://res.cloudinary.com/dllawhmxq/image/upload/v1765206322/notion_logo_icon_145025_vm5g5r.png" },
    { name: "Slack", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
    { name: "Stripe", icon: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  ];

  return (
    <section className="py-16 bg-muted/20 border-y border-border overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <h3 className="text-xl font-semibold text-foreground">
            {t.techStack.title} <span className="text-primary">{t.techStack.highlight}</span>
          </h3>
          <div className="px-3 py-1 rounded-full bg-muted border border-border text-xs font-mono text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            API Universal Compatibility
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {techs.map((tech, index) => {
            const getSizeClass = (name: string) => {
              if (["n8n", "Notion", "Slack", "Stripe"].includes(name)) return "h-8";
              if (name === "OpenAI") return "h-14";
              if (name === "Google Cloud") return "h-16";
              return "h-12";
            };

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, filter: "brightness(0) grayscale(0%)" }}
                className="w-full h-20 flex items-center justify-center transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
              >
                {/* Using text fallback if images fail, but intended to be logos */}
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className={`${getSizeClass(tech.name)} w-auto object-contain mx-auto mix-blend-multiply`} 
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
