import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThreeDAnimation from "./ThreeDAnimation";
import hero1 from "../public/lovable-uploads/heroimage.png"; // Adjust the path based on your structure
import cv from "../public/FullStackDevCv.pdf";

interface DownloadButtonProps {
  fileName: string;
}
  const Hero: React.FC<DownloadButtonProps> = ({ fileName }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    const url = cv;
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // State for typing animation (name)
  const [typedName, setTypedName] = useState("");
  const [isTypingName, setIsTypingName] = useState(true);
  const fullNameText = "Hi, I am Sadiq Izar";
  const typingSpeedName = 80; // High speed for smoothness (50ms per character)

  // State for typing animation (role)
  const [typedRole, setTypedRole] = useState("");
  const [isTypingRole, setIsTypingRole] = useState(true);
  const fullRoleText = "Full Stack Developer";
  const typingSpeedRole = 80; // High speed for smoothness (50ms per character)

  useEffect(() => {
    let nameIndex = 0;
    const nameTimer = setInterval(() => {
      if (nameIndex < fullNameText.length) {
        setTypedName(fullNameText.substring(0, nameIndex + 1));
        nameIndex++;
      } else {
        setIsTypingName(false);
        clearInterval(nameTimer);

        // Start role typing after name typing is complete
        let roleIndex = 0;
        const roleTimer = setInterval(() => {
          if (roleIndex < fullRoleText.length) {
            setTypedRole(fullRoleText.substring(0, roleIndex + 1));
            roleIndex++;
          } else {
            setIsTypingRole(false);
            clearInterval(roleTimer);
          }
        }, typingSpeedRole);
      }
    }, typingSpeedName);

    return () => clearInterval(nameTimer);
  }, []); // Runs once on mount

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <ThreeDAnimation />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="relative mb-8 mx-auto w-64 h-64 sm:w-80 sm:h-80"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl animate-pulse-light" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <img
                src={hero1}
                alt="Sadiq"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block">
              {isTypingName ? typedName : fullNameText}
            </span>
            <span className="inline-block ml-2 animate-pulse">|</span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="inline-block">
              {isTypingRole ? typedRole : fullRoleText}
            </span>
            <span className="inline-block ml-2 animate-pulse">|</span>
          </motion.h2>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="px-6 text-white"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <button
              onClick={handleDownload}
              className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Download CV
            </button>
            <Button
              size="lg"
              variant="outline"
              className="px-6"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
