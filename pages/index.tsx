import Layout from "@/components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import Intro from "@/containers/Intro";
import { MoveRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Writings from "@/containers/Writings";
import Footer from "@/components/Footer";
import useScrollPosition from "@/hooks/useScrollPosition";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import { Blog } from "@/@types/types";

const socialVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      ease: "easeOut",
    },
  },
};

const socialLinkVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
};

export default function Home({
  blogs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <section className="w-[90%] mx-auto pt-28" id="home">
        <h1
          className="text-zinc-800 font-primary text-xl sm:text-4xl md:text-8xl font-bold uppercase"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="3"
        >
          Hi, I am Shaan Alam
        </h1>
        <h1
          className="text-zinc-800 font-primary text-xl sm:text-4xl md:text-8xl font-bold uppercase"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="2"
        >
          I code & deisgn things!
        </h1>
        <div
          className="links flex items-center my-6"
          data-scroll
          data-scroll-speed="1"
        >
          <a href="#!" className="flex items-center hover:underline mr-4">
            Download Resume&nbsp;
            <MoveRight />
          </a>
          <a href="#!" className="flex items-center hover:underline">
            View Projects&nbsp;
            <MoveRight />
          </a>
        </div>
        <motion.div
          variants={socialVariants}
          initial="initial"
          animate="animate"
          className="socials mb-12 grid grid-cols-3 w-[200px]"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="2"
        >
          <motion.a href="#!" variants={socialLinkVariants}>
            <Image
              src="/github.svg"
              height={40}
              width={40}
              className="hover:shadow-sm hover:shadow-pink-100 rounded-md"
              alt="Github Logo"
            />
          </motion.a>
          <motion.a href="#!" variants={socialLinkVariants}>
            <Image
              src="/instagram.svg"
              height={40}
              width={40}
              className="hover:shadow-sm hover:shadow-pink-100 rounded-md"
              alt="Instagram Logo"
            />
          </motion.a>
          <motion.a href="#!" variants={socialLinkVariants}>
            <Image
              src="/twitter.svg"
              height={40}
              width={40}
              className="hover:shadow-sm hover:shadow-pink-100 rounded-md"
              alt="Twitter Logo"
            />
          </motion.a>
        </motion.div>
      </section>
      <Intro />
      <Writings blogs={blogs} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<{
  blogs: Blog[];
}> = async () => {
  const res = await axios.get<Blog[]>(
    "https://dev.to/api/articles/me/published",
    {
      headers: {
        "api-key": "9d4XM7raYQDcUkZKSeKvVXii",
      },
    }
  );

  const popularBlogs = res.data
    .sort((a, b) => b.page_views_count - a.page_views_count)
    .slice(0, 3);

  return {
    props: {
      blogs: popularBlogs,
    },
  };
};
