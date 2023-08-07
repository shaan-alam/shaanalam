import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section
      id="stick"
      className="p-8 md:px-12 h-screen flex items-center justify-start w-[90%] mx-auto bg-zinc-900 px-12"
    >
      <div className="relative text-white md:w-[70%] w-full leading-7 md:leading-[3rem] md:text-3xl">
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ ease: "easeOut", delay: 0.5, duration: 0.5 }}
          className="absolute inset-0 h-full w-full bg-white origin-bottom"
        ></motion.div>
        <p data-scroll data-scroll-sticky data-scroll-target="#stick" className="font-secondary font-bold">
          I am an accomplished front-end developer, well-versed in ReactJS,
          NextJS, TailwindCSS, and Typescript. With an eye for design aesthetics
          and a passion for problem-solving, I excel at creating exceptional
          applications that offer a seamless and visually pleasing user
          experience.
        </p>
      </div>
    </section>
  );
};

export default Intro;
