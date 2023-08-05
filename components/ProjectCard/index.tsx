import AnimatedImage from "../AnimatedImage";
import AnimatedParagraph from "../AnimatedParagraph";

const ProjectCard = () => {
  return (
    <div
      className="project h-screen flex items-center justify-center mt-8"
      data-scroll
      data-scroll-direction="horizontal"
      data-scroll-speed="4"
    >
      <div className="project-wrapper w-full flex">
        <AnimatedImage src="https://media.graphassets.com/F2BYUSAcQFOrQkyaGpMs" />
        <AnimatedParagraph className="project-content relative px-8 font-primary text-gray-500 leading-7">
          <p>
            I am an accomplished front-end developer, well-versed in ReactJS,
            NextJS, TailwindCSS, and Typescript. With an eye for design
            aesthetics and a passion for problem-solving, I excel at creating
            exceptional applications that offer a seamless and visually pleasing
            user experience.
          </p>
        </AnimatedParagraph>
      </div>
    </div>
  );
};

export default ProjectCard;
