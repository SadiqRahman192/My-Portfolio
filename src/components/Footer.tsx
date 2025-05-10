
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#home" className="text-xl font-bold text-gradient">
                Sadiq Izar
              </a>
              <p className="text-muted-foreground mt-1">
                MERN Stack Developer
              </p>
            </div>
            
            <nav className="mb-4 md:mb-0">
              <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
                <li>
                  <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            
            <div className="flex gap-4">
              <a href="https://github.com/SadiqRahman192" target="_blank" rel="noopener noreferrer" className="p-1.5 text-muted-foreground hover:text-primary transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/sadiqdeveloper/" target="_blank" rel="noopener noreferrer" className="p-1.5 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© {currentYear} Sadiq Izar. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
