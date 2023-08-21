import { IProject } from "@/@types/types";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-wrapper bg-gray-100 dark:bg-[#111] p-8 rounded-md my-6">
      <div className="header flex items-center">
        <img
          src={project?.logo?.url}
          alt="Websters"
          className="h-10 object-cover"
        />
        <h1 className="font-primary ml-4 text-[#14cf93] text-xl">
          {project.title}
        </h1>
      </div>
      <div className="description font-primary my-4 text-black dark:text-gray-300 leading-7">
        {project.description}
      </div>
      <div className="links flex items-center">
        <a
          href={project.githubRepoLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center hover:underline cursor-pointer"
        >
          GitHub Repo&nbsp;
          <HiOutlineArrowNarrowRight />
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="ml-6 flex items-center hover:underline cursor-pointer"
        >
          Live Demo&nbsp;
          <HiOutlineArrowNarrowRight />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
