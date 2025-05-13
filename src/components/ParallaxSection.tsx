
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Negative values scroll slower, positive values scroll faster
  direction?: "up" | "down";
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className,
  speed = 0.2,
  direction = "up"
}) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top } = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.innerHeight - top;
      
      if (scrollPosition > 0 && top < window.innerHeight) {
        setOffset(scrollPosition * (direction === "up" ? -1 : 1) * speed);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, direction]);
  
  return (
    <div ref={sectionRef} className={cn("relative overflow-hidden", className)}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.05s linear",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
