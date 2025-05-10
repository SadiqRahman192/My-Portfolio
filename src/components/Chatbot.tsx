
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

const predefinedResponses: Record<string, string> = {
  "hi": "Hello! How can I help you today?",
  "hello": "Hi there! How can I assist you with Sadiq's portfolio?",
  "who are you": "I'm a virtual assistant for Sadiq Izar's portfolio. I can tell you about his skills, projects, or how to contact him.",
  "skills": "Sadiq is a MERN Stack developer skilled in MongoDB, Express.js, React, and Node.js. He also has experience with TypeScript, Redux, and various frontend and backend technologies.",
  "contact": "You can contact Sadiq via email at sadiq.izar@example.com or use the contact form on this website.",
  "projects": "Sadiq has worked on various projects including e-commerce platforms, social media dashboards, and task management applications. Check out the Projects section for more details!",
  "experience": "Sadiq has extensive experience building modern web applications using the MERN stack and related technologies.",
  "location": "Sadiq is based in San Francisco, California.",
  "hire": "Interested in hiring Sadiq? Please reach out using the contact form or via email. He's open to full-time positions and freelance projects.",
  "resume": "You can download Sadiq's resume from the About section of this portfolio.",
  "education": "Sadiq has a Bachelor's degree in Computer Science and has completed various professional certifications in web development.",
  "default": "I don't have specific information about that. Would you like to know about Sadiq's skills, projects, or how to contact him?"
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'm Sadiq's assistant. How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user"
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsBotTyping(true);
    
    // Simulate bot thinking
    setTimeout(() => {
      const response = getBotResponse(input.toLowerCase());
      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: "bot"
      };
      setMessages(prev => [...prev, botMessage]);
      setIsBotTyping(false);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    // Find matching predefined response
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (userInput.includes(key)) {
        return response;
      }
    }
    return predefinedResponses.default;
  };

  return (
    <>
      {/* Chatbot Icon */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 shadow-lg"
          aria-label="Open chat"
        >
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
      
      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chatbot"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 z-40"
          >
            <Card className="shadow-xl border-primary/20">
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
              
              <CardContent className="p-0">
                <div className="overflow-y-auto h-80 p-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === 'user' 
                            ? 'bg-primary text-white rounded-br-none'
                            : 'bg-secondary rounded-bl-none'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                  
                  {isBotTyping && (
                    <div className="flex justify-start mb-4">
                      <div className="bg-secondary rounded-lg rounded-bl-none p-3 max-w-[80%]">
                        <div className="flex gap-1">
                          <span className="animate-bounce">.</span>
                          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              
              <CardFooter className="p-3 border-t">
                <form onSubmit={handleSend} className="flex gap-2 w-full">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow"
                  />
                  <Button type="submit" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4Z"/>
                      <path d="M22 2 11 13"/>
                    </svg>
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
