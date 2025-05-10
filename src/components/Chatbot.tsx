import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

type ResponseConfig = {
  keywords: string[];
  response: string;
};

// Enhanced responses combining both components' features
const predefinedResponses: ResponseConfig[] = [
  {
    keywords: ["hi", "hello", "hey", "greetings"],
    response: "Hello! How can I help you today?",
  },
  {
    keywords: ["who are you", "what are you", "bot info"],
    response: "I'm a virtual assistant for Sadiq Izar's portfolio. I can tell you about his skills, projects, or how to contact him.",
  },
  {
    keywords: ["skills", "skill", "expertise"],
    response: "Sadiq is a MERN Stack developer skilled in MongoDB, Express.js, React, and Node.js. He also has experience with TypeScript, Redux, and various frontend/backend technologies.",
  },
  {
    keywords: ["contact", "email", "reach out"],
    response: "Contact Sadiq via email at sadiqrahman192@gmail.com or use the website's contact form.",
  },
  {
    keywords: ["projects", "project", "work"],
    response: "Sadiq has built e-commerce platforms, social media dashboards, and task management apps. Check the Projects section!",
  },
  {
    keywords: ["experience", "background"],
    response: "Sadiq has extensive experience building modern web applications using the MERN stack.",
  },
  {
    keywords: ["location", "where"],
    response: "Sadiq is based in San Francisco, California.",
  },
  {
    keywords: ["hire", "job", "freelance"],
    response: "For hiring inquiries, please reach out via email or contact form.",
  },
  {
    keywords: ["resume", "cv"],
    response: "Download Sadiq's resume from the About section.",
  },
  {
    keywords: ["education", "degree"],
    response: "Sadiq holds a Bachelor's degree in Computer Science with professional certifications.",
  },
  {
    keywords: ["github", "code"],
    response: "View Sadiq's GitHub: github.com/sadiqizar",
  },
  {
    keywords: ["default"],
    response: "I don't have specific information about that. Ask about skills, projects, or contact info!",
  },
];

const Chatbot = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => {
  // ... (keep all existing state and hooks from the second component)

  // Modified initial message from first component
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'm Sadiq's assistant. How can I help you today?", sender: "bot" }
  ]);

  // Keep all existing logic from second component
  // ... (useEffect, scrollToBottom, getBotResponse, handleSend, handleQuickReply)

  return (
    <>
      {/* Chatbot Icon - Maintain animation from first component */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 shadow-lg animate-bounce"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {/* Keep SVG icons from first component */}
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          )}
        </Button>
      </div>

      {/* Maintain all UI improvements from second component */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // Keep animation config from first component
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 z-40"
          >
            <Card className="shadow-xl border-primary/20">
              {/* Keep header styling from first component */}
              <CardHeader className="bg-primary text-white py-3 px-4 rounded-t-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16v-4"/>
                      <path d="M12 8h.01"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Portfolio Assistant</p>
                    <p className="text-xs opacity-80">Online</p>
                  </div>
                </div>
              </CardHeader>

              {/* Keep message container and quick replies from second component */}
              {/* ... (rest of the UI remains identical to second component) */}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;