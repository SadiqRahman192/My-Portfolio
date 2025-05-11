import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    title: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Log the data being sent for debugging
    console.log("Sending email with data:", {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: formData.title || "Contact Form Submission",
    });

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID from .env
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: formData.title || "Contact Form Submission",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public Key from .env
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast({
            title: "Message sent!",
            description: "Thank you for contacting me. I'll get back to you soon!",
          });
          setFormData({ name: "", email: "", message: "", title: "" });
        },
        (error) => {
          console.error("Email sending failed:", error);
          toast({
            title: "Error",
            description: `Failed to send message: ${error.text || error.message}`,
            variant: "destructive",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              className="w-full md:w-2/5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-full mt-1">
                        <Mail className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href="mailto:sadirahman192@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          sadirahman192@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-full mt-1">
                        <Phone className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a
                          href="tel:+923318939600"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +92 331 8939600
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-full mt-1">
                        <MapPin className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">
                          Lahore, Pakistan
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-8 mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/SadiqRahman192"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sadiqdeveloper/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              className="w-full md:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Send Me a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-1 font-medium"
                      >
                        Name
                      </label>
                      <Input
                        type="text"
                        name="name"  // Changed from user_name to name
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-1 font-medium"
                      >
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"  // Changed from user_email to email
                        id="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-1 font-medium"
                      >
                        Message
                      </label>
                      <Textarea
                        name="message"
                        id="message"
                        placeholder="Your message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;