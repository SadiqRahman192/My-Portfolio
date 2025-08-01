
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="flex flex-col gap-8">
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-muted-foreground mb-4 text-center">
                I'm Sadiq Izar, a passionate MERN Stack developer with extensive experience in building modern web applications. I specialize in creating responsive, user-friendly interfaces with React while handling complex backend operations with Node.js, Express, and MongoDB.
              </p>
              
              <p className="text-muted-foreground mb-6 text-center">
                My goal is to craft clean, efficient code that solves real-world problems. I'm constantly learning new technologies and techniques to improve my skills and deliver better results for clients and users.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <motion.div 
                  className="bg-sky-500 rounded-lg p-6 text-white flex flex-col shadow-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-xl font-bold mb-2">Freelance - Remote</h4>
                  <p className="text-sky-100 font-medium mb-3">Jan 2024 - Present</p>
                  <p className="text-lg">Full Stack Developer</p>
                </motion.div>
                
                <motion.div 
                  className="bg-sky-500 rounded-lg p-6 text-white flex flex-col shadow-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="text-xl font-bold mb-2">Amoxt Pvt Ltd - Lahore</h4>
                  <p className="text-sky-100 font-medium mb-3">Sep 2024 - Present</p>
                  <p className="text-lg">Associate Software Engineer - Frontend Role</p>
                </motion.div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8 justify-center">
                <a href="https://github.com/SadiqRahman192" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/sadiqdeveloper/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    LinkedIn
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    Email Me
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
