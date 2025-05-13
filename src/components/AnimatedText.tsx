
import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  animation?: "fade" | "reveal" | "typewriter";
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  element: Element = "h2",
  animation = "reveal"
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [displayText, setDisplayText] = useState("");
  const index = useRef(0);
  
  useEffect(() => {
    if (animation === "typewriter" && isVisible) {
      if (index.current < text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayText((prev) => prev + text.charAt(index.current));
          index.current += 1;
        }, 50);
        
        return () => clearTimeout(timeoutId);
      }
    }
  }, [displayText, isVisible, text, animation]);

  if (animation === "typewriter") {
    return (
      <Element
        ref={elementRef}
        className={cn("font-bold", className)}
      >
        {displayText}
        {index.current < text.length && <span className="animate-pulse">|</span>}
      </Element>
    );
  }

  if (animation === "reveal") {
    return (
      <div ref={elementRef} className="reveal-text">
        <div className={isVisible ? "reveal-mask" : "hidden"}></div>
        <Element className={cn("font-bold", className)}>
          <span className={isVisible ? "block" : "opacity-0"}>
            {text}
          </span>
        </Element>
      </div>
    );
  }

  // Default fade animation
  return (
    <Element
      ref={elementRef}
      className={cn(
        "font-bold transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {text}
    </Element>
  );
};

export default AnimatedText;
