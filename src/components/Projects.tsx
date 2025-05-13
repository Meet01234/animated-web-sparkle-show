
import React from "react";
import { AnimatedText } from "./AnimatedText";
import { useIntersectionObserver } from "@/lib/animations";
import { cn } from "@/lib/utils";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Parallax Scrolling",
      description: "Elements move at different speeds while scrolling, creating depth",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    },
    {
      title: "Text Animations",
      description: "Dynamic text reveals, typewriter effects and fade transitions",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Interactive Cards",
      description: "Engaging hover effects and smooth transitions on user interaction",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <AnimatedText 
          text="Interactive Features" 
          element="h2" 
          className="text-2xl md:text-4xl mb-4 text-center"
        />
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Explore these interactive components that demonstrate various animation techniques
          and effects possible with modern web technologies.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  
  return (
    <div 
      ref={elementRef}
      className={cn(
        "group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl",
        "bg-card border border-border",
        isVisible ? "animate-fade-in" : "opacity-0"
      )}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="relative h-60 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img 
          src={`${project.image}?w=600&h=400&fit=crop&auto=format`} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 group-hover:text-gradient transition-colors duration-300">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium">Animation Example</span>
          <button className="text-primary relative overflow-hidden group-hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
