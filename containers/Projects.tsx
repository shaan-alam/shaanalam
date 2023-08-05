import { useEffect, useRef } from "react";
import AnimatedImage from "@/components/AnimatedImage";
import AnimatedParagraph from "@/components/AnimatedParagraph";
import { motion, useInView, useAnimationControls } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const paragarphRef = useRef(null);
  const isParaInView = useInView(paragarphRef);
  const paraControls = useAnimationControls();

  useEffect(() => {
    if (isParaInView) {
      paraControls.start("animate");
    }
  }, [isParaInView]);

  return (
    <div className="w-[90%] mx-auto" data-scroll-container>
      <div className="w-[70%] mx-auto" data-scroll-section>
        <h1
          className="text-zinc-800 font-primary text-5xl font-bold"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="2"
        >
          My Projects
        </h1>
        
      </div>
      <div className="projects" data-scroll-section>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
