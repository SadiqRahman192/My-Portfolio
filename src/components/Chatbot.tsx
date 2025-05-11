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

// Expanded and structured FAQs from the first component
const predefinedResponses: ResponseConfig[] = [
  {
    keywords: ["hi", "hello", "hey", "greetings"],
    response: "Hi there! I'm Sadiq's portfolio assistant. Ask me about his skills, projects, or how to get in touch! Try: 'skills', 'projects', or 'contact'.",
  },
  {
    keywords: ["who are you", "what are you", "bot info"],
    response: "I'm a virtual assistant built to showcase Sadiq Izar's portfolio. I can answer questions about his MERN stack expertise, projects, or contact details.",
  },
  {
    keywords: ["skills", "skill", "expertise", "abilities"],
    response: "Sadiq is a MERN Stack developer proficient in MongoDB, Express.js, React, and Node.js. He's also skilled in TypeScript, Redux, Tailwind CSS, and building scalable web apps.",
  },
  {
    keywords: ["contact", "email", "reach out", "get in touch"],
    response: "You can contact Sadiq via email at sadiqrahman192@gmail.com or use the contact form on this website.",
  },
  {
    keywords: ["projects", "project", "work", "portfolio"],
    response: "Sadiq has built e-commerce platforms, social media dashboards, and task management apps using the MERN stack. Check out the Projects section for details, or ask about a specific project like 'e-commerce'!",
  },
  {
    keywords: ["experience", "background", "work history"],
    response: "Sadiq has extensive experience developing modern web applications with the MERN stack, focusing on performance and user experience. He's worked on both frontend and backend solutions.",
  },
  {
    keywords: ["location", "where", "based"],
    response: "Sadiq is based in San Francisco, California, but he's open to remote work worldwide.",
  },
  {
    keywords: ["hire", "job", "freelance", "availability"],
    response: "Sadiq is open to full-time roles and freelance projects. Reach out via email (sadiqrahman192@gmail.com) or the contact form to discuss opportunities!",
  },
  {
    keywords: ["resume", "cv", "download resume"],
    response: "You can download Sadiq's resume from the About section of this portfolio. It details his skills, projects, and experience.",
  },
  {
    keywords: ["education", "degree", "certifications"],
    response: "Sadiq holds a Bachelor's degree in Computer Science and has completed certifications in web development, including React and Node.js courses.",
  },
  {
    keywords: ["github", "code", "repository"],
    response: "Check out Sadiq's GitHub for his open-source projects: github.com/SadiqRahman192",
  },
  {
    keywords: ["linkedin", "profile", "social"],
    response: "Connect with Sadiq on LinkedIn: linkedin.com/in/sadiqdeveloper",
  },
  {
    keywords: ["e-commerce", "ecommerce", "online store"],
    response: "Sadiq built a full-stack e-commerce platform with React, Node.js, and MongoDB, featuring secure payments and user authentication. See the Projects section for more!",
  },
  {
    keywords: ["dashboard", "social media dashboard"],
    response: "Sadiq developed a social media dashboard with real-time analytics using the MERN stack and Chart.js. Check the Projects section for details.",
  },
  {
    keywords: ["task management", "task app"],
    response: "Sadiq created a task management app with React, Redux, and Express, featuring drag-and-drop functionality. Explore it in the Projects section!",
  },
  {
    keywords: ["favorite tech", "tech stack", "tools"],
    response: "Sadiq loves working with React for its flexibility and Node.js for its speed. He also enjoys experimenting with AI tools like Grok! What's your favorite tech?",
  },
  {
    keywords: ["hobbies", "interests", "free time"],
    response: "When not coding, Sadiq enjoys hiking in San Francisco, reading sci-fi, and contributing to open-source projects. Ask about his latest adventure!",
  },
  {
    keywords: [],
    response: "Hmm, I'm not sure about that one. Try asking about Sadiq's skills, projects, contact info, or even his favorite tech! Suggested: 'skills', 'projects', 'contact'.",
  },
];

const Chatbot = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'm Sadiq's assistant. Ask me about his skills, projects, or contact info! Try: 'skills', 'projects', or 'contact'.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const quickReplies = ["skills", "projects", "contact", "resume"];

  // Log props for debugging
  console.log("Chatbot props:", { isOpen, setIsOpen });

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const getBotResponse = useCallback((userInput: string): string => {
    const inputLower = userInput.toLowerCase().trim();
    const matchedResponse = predefinedResponses.find(({ keywords }) =>
      keywords.some((keyword) => inputLower.includes(keyword))
    );
    return matchedResponse ? matchedResponse.response : predefinedResponses[predefinedResponses.length - 1].response;
  }, []);

  const handleSend = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim() || input.length > 200) {
        setInput("");
        return;
      }

      const userMessage: Message = {
        id: messages.length + 1,
        text: input,
        sender: "user",
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsBotTyping(true);

      setTimeout(() => {
        const response = getBotResponse(input);
        const botMessage: Message = {
          id: messages.length + 2,
          text: response,
          sender: "bot",
        };
        setMessages((prev) => [...prev.slice(-50), botMessage]);
        setIsBotTyping(false);
      }, 800 + Math.random() * 400);
    },
    [input, messages.length, getBotResponse]
  );

  const handleQuickReply = useCallback(
    (reply: string) => {
      const userMessage: Message = {
        id: messages.length + 1,
        text: reply,
        sender: "user",
      };
      setMessages((prev) => [...prev, userMessage]);
      setIsBotTyping(true);

      setTimeout(() => {
        const response = getBotResponse(reply);
        const botMessage: Message = {
          id: messages.length + 2,
          text: response,
          sender: "bot",
        };
        setMessages((prev) => [...prev.slice(-50), botMessage]);
        setIsBotTyping(false);
      }, 800 + Math.random() * 400);
    },
    [messages.length, getBotResponse]
  );

  return (
    <>
      {/* Chatbot Icon */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => {
            console.log("Chatbot icon clicked, toggling isOpen:", !isOpen);
            setIsOpen(!isOpen);
          }}
          className="rounded-full w-10 h-10 shadow-lg"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? (
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
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
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
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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
            className="fixed bottom-16 right-6 w-50 sm:w-72 z-40"
          >
            <Card className="shadow-xl border-primary/20">
              <CardHeader className="bg-primary text-white py-3 px-4 rounded-t-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Portfolio Assistant</p>
                    <p className="text-xs opacity-80">Online</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <div className="overflow-y-auto h-48 p-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[60%] rounded-lg p-3 ${
                          message.sender === "user"
                            ? "bg-primary text-white rounded-br-none"
                            : "bg-secondary rounded-bl-none"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}

                  {isBotTyping && (
                    <div className="flex justify-start mb-4">
                      <div className="bg-secondary rounded-lg rounded-bl-none p-3 max-w-[60%]">
                        <div className="flex gap-1">
                          <span className="animate-bounce">.</span>
                          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                            .
                          </span>
                          <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                            .
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              <CardFooter className="p-3 border-t flex flex-col gap-2">
                <form onSubmit={handleSend} className="flex gap-2 w-full">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow"
                    maxLength={200}
                  />
                  <Button type="submit" size="icon" disabled={isBotTyping}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </Button>
                </form>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <Button
                      key={reply}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      disabled={isBotTyping}
                    >
                      {reply.charAt(0).toUpperCase() + reply.slice(1)}
                    </Button>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;