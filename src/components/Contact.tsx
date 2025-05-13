
import React, { useState } from "react";
import { AnimatedText } from "./AnimatedText";
import { cn } from "@/lib/utils";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setSubmitted(true);
    
    // Since this is a static site without a backend, we just simulate a submission
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };
  
  const handleFocus = (field: string) => {
    setFocused(field);
  };
  
  const handleBlur = () => {
    setFocused(null);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedText 
          text="Get In Touch" 
          element="h2" 
          className="text-2xl md:text-4xl mb-4 text-center"
        />
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Have a question or want to learn more about animations? Send a message!
        </p>
        
        <div className="max-w-md mx-auto">
          {submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded animate-fade-in text-center">
              <div className="mb-4 text-3xl">✓</div>
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p>Thank you for your message. This is a demo form on a static site, so no actual message was sent.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label 
                  htmlFor="name" 
                  className={cn(
                    "block text-sm font-medium transition-colors duration-300",
                    focused === "name" ? "text-primary" : "text-foreground"
                  )}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input focus:outline-none transition-all duration-300",
                    "focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  )}
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label 
                  htmlFor="email" 
                  className={cn(
                    "block text-sm font-medium transition-colors duration-300",
                    focused === "email" ? "text-primary" : "text-foreground"
                  )}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input focus:outline-none transition-all duration-300",
                    "focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  )}
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label 
                  htmlFor="message" 
                  className={cn(
                    "block text-sm font-medium transition-colors duration-300",
                    focused === "message" ? "text-primary" : "text-foreground"
                  )}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input focus:outline-none transition-all duration-300",
                    "focus:ring-2 focus:ring-primary/20 focus:border-primary",
                    "min-h-[120px] resize-y"
                  )}
                  placeholder="Enter your message here..."
                />
              </div>
              
              <div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground rounded-md py-3 font-medium hover:bg-primary/90 transition-colors duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  <span 
                    className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-300 group-hover:w-full"
                  ></span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
