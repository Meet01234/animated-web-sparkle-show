
import React from "react";
import { AnimatedText } from "./AnimatedText";
import ParallaxSection from "./ParallaxSection";
import { useIntersectionObserver } from "@/lib/animations";

const About: React.FC = () => {
  const { elementRef: featuresRef, isVisible: featuresVisible } = useIntersectionObserver();
  
  const features = [
    {
      title: "Smooth Animations",
      description: "Elegant transition effects and animations that enhance user experience",
      icon: "✨"
    },
    {
      title: "Responsive Design",
      description: "Fully responsive layout that works perfectly on all devices",
      icon: "📱"
    },
    {
      title: "Interactive Elements",
      description: "Interactive components that engage users and create memorable experiences",
      icon: "🖱️"
    },
    {
      title: "No Database Required",
      description: "Pure frontend implementation without server dependencies",
      icon: "🚀"
    }
  ];
  
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedText 
          text="About This Project" 
          element="h2" 
          className="text-2xl md:text-4xl mb-12 text-center"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ParallaxSection speed={0.2}>
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-xl transform rotate-3"></div>
              <div className="absolute inset-0 w-full h-80 md:h-96 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-lg shadow-xl transform -rotate-3 opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-6xl font-bold">{"</>"}</div>
              </div>
            </div>
          </ParallaxSection>
          
          <div>
            <AnimatedText 
              text="Modern Web Animation" 
              element="h3" 
              animation="fade"
              className="text-xl md:text-2xl mb-4"
            />
            
            <p className="text-muted-foreground mb-6">
              This project demonstrates the power of modern web animation techniques using pure HTML, CSS, and JavaScript. 
              No database or server-side processing is required, making it fast, lightweight, and easy to deploy.
            </p>
            
            <p className="text-muted-foreground mb-6">
              By leveraging the latest browser capabilities and animation libraries, we can create engaging, 
              interactive user experiences that were once only possible with heavy frameworks or plugins.
            </p>
            
            <div 
              ref={featuresRef}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border border-border hover-effect ${featuresVisible ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h4 className="font-medium mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
