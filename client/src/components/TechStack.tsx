import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <section className="py-16 bg-muted/20 border-y border-border overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <h3 className="text-xl font-semibold text-foreground">
            Se integra perfectamente con las <span className="text-primary">herramientas que ya usas</span>
          </h3>
          <div className="px-3 py-1 rounded-full bg-muted border border-border text-xs font-mono text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            API Universal Compatibility
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          <img src="https://res.cloudinary.com/dllawhmxq/image/upload/v1765205810/n8n_1_r7mps4.png" alt="n8n" className="h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="https://res.cloudinary.com/dllawhmxq/image/upload/v1765206338/openai-old-logo_ukxhni.png" alt="OpenAI" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="https://cdn.brandfetch.io/id6Zq7p0R4/id9Gk0U55F.png" alt="Google Cloud" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="https://res.cloudinary.com/dllawhmxq/image/upload/v1765205917/326419_s69twf.png" alt="HubSpot" className="h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="https://cdn.brandfetch.io/idIq_kFdPH/id2_B0kkGk.png" alt="Airtable" className="h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="https://res.cloudinary.com/dllawhmxq/image/upload/v1765206322/notion_logo_icon_145025_vm5g5r.png" alt="Notion" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="https://cdn.brandfetch.io/idKjL5h7I4/idB1yVq_1E.png" alt="Slack" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="https://cdn.brandfetch.io/idxTmp744h/id5K_X_0_z.png" alt="Stripe" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
