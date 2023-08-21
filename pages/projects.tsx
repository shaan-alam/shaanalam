import { IProject } from "@/@types/types";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { graphcms } from "./about";

const Projects: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ projects }) => {
  console.log(projects);
  return (
    <Layout>
      <section className="w-[90%] mx-auto mt-8">
        <h1
          className="text-black dark:text-white text-center font-primary text-5xl font-bold"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="2"
        >
          My Projects
        </h1>
        <p className='font-primary lg:w-1/2 leading07 my-5 text-center mx-auto' data-scroll data-scroll-speed='3'>
          Check out my projects. These are the projects I created while learning
          technologies. Some of them are even real websites which have been used
          in production!
        </p>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </section>
    </Layout>
  );
};

export default Projects;

export const getServerSideProps: GetServerSideProps<{
  projects: IProject[];
}> = async () => {
  const result = await graphcms.request<{
    projects: IProject[];
  }>(`query MyQuery {
    projects(orderBy:publishedAt_DESC) {
      id
      liveLink
      githubRepoLink
      logo {
        url
      }
      slug
      title
      description
    }
  }
   
  `);

  return {
    props: {
      projects: result.projects,
    },
  };
};
