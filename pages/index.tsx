import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Intro from "@/containers/Intro";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Writings from "@/containers/Writings";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import { Blog } from "@/@types/types";
import Image from "next/image";

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
      <motion.div
        className="fixed inset-0 md:h-screen w-full bg-white dark:bg-black z-[999] scale-y-1 origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
      ></motion.div>
      <section className="w-[90%] mx-auto pt-28" id="home">
        <h1
          className="relative overflow-hidden text-black dark:text-white font-primary text-3xl sm:text-4xl md:text-7xl font-bold"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="3"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
          >
            Hi, I am
            <span className="text-[#14cf93] ml-2">Shaan Alam</span> 👋
          </motion.div>
        </h1>
        <h1
          className="relative overflow-hidden text-black dark:text-white font-primary text-3xl sm:text-4xl md:text-7xl font-bold"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="3"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
          >
            I Code & Design Things!
          </motion.div>
        </h1>
        <div
          className="links flex items-center my-6"
          data-scroll
          data-scroll-speed="1"
        >
          <div className="relative overflow-hidden">
            <motion.a
              href="#!"
              className="flex items-center hover:underline mr-4 font-secondary text-black dark:text-white"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 2.4, duration: 0.8, ease: "easeInOut" }}
            >
              Download Resume&nbsp;
              <HiOutlineArrowNarrowRight />
            </motion.a>
          </div>
          <div className="relative overflow-hidden">
            <motion.a
              href="#!"
              className="flex items-center hover:underline mr-4 font-secondary text-black dark:text-white"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 3, duration: 0.8, ease: "easeInOut" }}
            >
              View Projects&nbsp;
              <HiOutlineArrowNarrowRight />
            </motion.a>
          </div>
        </div>
        <motion.div
          variants={socialVariants}
          initial="initial"
          animate="animate"
          className="socials mb-12 grid grid-cols-3 w-[200px]"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="1"
        >
          <motion.a href="#!" variants={socialLinkVariants}>
            <Image src="/github.svg" height={40} width={40} alt="Github Logo" />
          </motion.a>
          <motion.a href="#!" variants={socialLinkVariants}>
            <Image
              src="/instagram.svg"
              height={40}
              width={40}
              alt="Instagram Logo"
            />
          </motion.a>
          <motion.a href="#!" variants={socialLinkVariants}>
            <Image
              src="/twitter.svg"
              height={40}
              width={40}
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
