import { Link } from "wouter";
import { Terminal, Twitter, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-6">
             <Link href="/">
              <a className="flex items-center gap-2 group cursor-pointer">
                <img 
                  src="https://res.cloudinary.com/dllawhmxq/image/upload/v1765200761/Logo_Mirai_Grande_sin_fondo_biufhk.png" 
                  alt="MIRAI SYSTEMS Logo" 
                  className="h-8 w-auto" 
                />
              </a>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">{t.footer.solutions}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t.footer.links.chatbots}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t.footer.links.marketing}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t.footer.links.automation}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t.footer.links.consulting}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">{t.footer.company}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t.footer.links.about}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t.footer.links.methodology}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t.footer.links.contact}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MIRAI SYSTEMS. {t.footer.rights}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors cursor-not-allowed opacity-50" onClick={(e) => e.preventDefault()}>{t.footer.links.privacy}</a>
            <a href="#" className="hover:text-foreground transition-colors cursor-not-allowed opacity-50" onClick={(e) => e.preventDefault()}>{t.footer.links.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
