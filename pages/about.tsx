import { ITools } from "@/@types/types";
import Layout from "@/components/Layout";
import Experience from "@/containers/Experience";
import Tools from "@/containers/Tools";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const graphcms = new GraphQLClient(
  "https://ap-south-1.cdn.hygraph.com/content/clkcgvl8t4gdg01t59y6h3aui/master"
);

const About: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  tools,
}) => {
  return (
    <Layout>
      <section className="w-[90%] mx-auto">
        <h1
          className="tracking-widest text-gray-500 dark:text-gray-300 uppercase font-primary text-center"
          data-scroll
          data-scroll-speed="1"
        >
          Let me introduce myself!
        </h1>
        <p
          className="text-black dark:text-white font-primary text-center text-lg sm:text-xl md:text-3xl mt-8 md:leading-[3rem] font-bold"
          data-scroll
          data-scroll-speed="3"
        >
          I am Shaan Alam, a proficient Front End Developer specializing in
          ReactJS, with a robust background in the MERN stack. My primary focus
          revolves around crafting exceptional products through adept software
          development. I possess a natural inclination for assimilating novel
          technologies swiftly and excel in their application. My aptitude for
          learning is complemented by a commitment to upholding contemporary
          software development paradigms. I take pride in my ability to
          consistently deliver high-quality development solutions.
        </p>
      </section>
      <Experience />
      <Tools tools={tools} />
    </Layout>
  );
};

export default About;

export const getStaticProps: GetStaticProps<{ tools: ITools[] }> = async () => {
  const result = await graphcms.request<{ tools: ITools[] }>(`query MyQuery {
    tools {
      id
      logo {
        url
      }
    }
  }
  `);

  return {
    props: {
      tools: result.tools,
    },
  };
};
