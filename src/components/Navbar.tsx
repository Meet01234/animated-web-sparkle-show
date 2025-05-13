
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/lib/animations";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Check if scrolled past threshold
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section
      const sections = ["home", "about", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleClick = (section: string) => {
    smoothScrollTo(section);
  };
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-gradient">Animated Site</div>
        <ul className="hidden md:flex space-x-8">
          {["Home", "About", "Projects", "Contact"].map((item) => {
            const sectionId = item.toLowerCase();
            return (
              <li key={item}>
                <button 
                  onClick={() => handleClick(sectionId)}
                  className={cn(
                    "font-medium relative transition-colors duration-300",
                    activeSection === sectionId ? "text-primary" : "text-muted-foreground hover:text-primary",
                    "after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-0 after:left-0",
                    activeSection === sectionId ? "after:scale-x-100" : "after:scale-x-0",
                    "after:transition-transform after:duration-300 hover:after:scale-x-100"
                  )}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="block md:hidden">
          <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-6 h-0.5 bg-foreground"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
