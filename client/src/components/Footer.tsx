import { Link } from "wouter";
import { Terminal, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-6">
             <Link href="/">
              <a className="flex items-center gap-2 group cursor-pointer">
                <div className="bg-primary/20 p-2 rounded-lg border border-primary/50">
                  <Terminal className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  MIRAI <span className="text-primary">SYSTEMS</span>
                </span>
              </a>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Ingeniería de automatización para empresas que valoran la eficiencia, la escalabilidad y el ROI.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Soluciones</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Auditoría de Procesos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Desarrollo n8n</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Integración IA</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sincronización CRM</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MIRAI SYSTEMS. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
