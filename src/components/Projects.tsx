
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import heroBlainy from "../public/lovable-uploads/heroBlainy.png";
import eventImage from "../public/lovable-uploads/eventimage.png";

const projects = [
  {
    title: "Blainy Ai Research Paper",
    description: "A wails deskstop application made with React and Golang.The app is still in development therefore, no live demo or source code is available.",
    demoLink: "#",
    githubLink: "#",
    tags: ["React", "TypeScript", "Tailwind", "Wails"],
    image: heroBlainy,
    isConfidential: true,
  },
  {
    title: "Event Management with Ai",
    description: "Built a MERN application with AI task suggestions, Stripe Payment integration, Pdfkit, JWT authentication email reminders(EmailJS) and an admin dashboard for event",
    tags: ["React", "Node.js", "MongoDb", "Express"],
    demoLink: "https://eventmernapp.netlify.app/",
    githubLink: "https://github.com/SadiqRahman192/Even-Mern-App",
    image: eventImage
  },
];
// {
//   title: "Food Order App",
//   description: "A full-stack MERN food order app with user authentication, meal management, cart functionality, and Stripe payment integration. Key features include adding meals to a cart, a chatbot for customer support, responsive design, order history tracking, secure sign-in/signup, and meal search functionality.",
//   demoLink: "https://react-foodfull-stack-web-b2yu.vercel.app",
//   githubLink: "https://github.com/SadiqRahman192/sadiq-izar-portfolio-verse",
//   tags: ["React", "MERN", "Stripe", "Chatbot"],
//   image: "/src/public/heroFood.png"
// },

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </CardHeader>
                  <CardContent className="pb-4 flex-grow">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        Code
                      </a>
                    </Button>
                    {project.isConfidential ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size="sm" className="flex-1" disabled>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" x2="21" y1="14" y2="3" />
                              </svg>
                              Demo
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Demo unavailable due to confidentiality</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" x2="21" y1="14" y2="3" />
                          </svg>
                          Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* <Button size="lg" variant="outline" className="mt-4">
              View All Projects
            </Button> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
