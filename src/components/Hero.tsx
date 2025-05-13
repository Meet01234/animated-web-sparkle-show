
import React, { useEffect, useState } from "react";
import { AnimatedText } from "./AnimatedText";
import { smoothScrollTo } from "@/lib/animations";

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-72 h-72 rounded-full bg-blue-500/20 top-1/4 left-1/4 animate-float animation-delay-300"></div>
        <div className="absolute w-60 h-60 rounded-full bg-purple-500/20 bottom-1/4 right-1/4 animate-float animation-delay-700"></div>
        <div className="absolute w-48 h-48 rounded-full bg-green-500/20 top-1/2 right-1/3 animate-float animation-delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <div 
            className={`text-lg font-medium mb-4 opacity-0 ${mounted ? "animate-fade-in" : ""}`}
            style={{ animationDelay: "100ms" }}
          >
            Welcome to
          </div>
          
          <AnimatedText 
            text="Animated Static Website" 
            element="h1" 
            animation="typewriter"
            className="text-3xl md:text-5xl lg:text-7xl mb-6 max-w-3xl"
          />
          
          <AnimatedText 
            text="HTML, CSS & JavaScript Magic" 
            element="p" 
            animation="fade"
            className="text-xl text-muted-foreground max-w-lg mb-10"
          />
          
          <div 
            className={`opacity-0 ${mounted ? "animate-fade-in" : ""}`}
            style={{ animationDelay: "800ms" }}
          >
            <button 
              onClick={() => smoothScrollTo("about")}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground flex justify-center items-start p-1">
          <div className="w-1.5 h-3 bg-foreground rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
