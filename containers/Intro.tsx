import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="p-8 h-[70vh] flex items-center justify-start w-[90%] mx-auto">
      <div className="md:w-[70%] w-full leading-7 md:leading-[3rem] md:text-3xl">
        <p
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="horizontal"
          className="font-secondary font-bold text-black dark:text-white"
        >
          I am an accomplished&nbsp;
          <span className="text-[#14cf93]">front-end developer</span>,
          well-versed in
          <span className="text-[#14cf93] ml-2">
            ReactJS, NextJS, TailwindCSS, and Typescript.
          </span>
          With an eye for design aesthetics and a passion for problem-solving, I
          excel at creating exceptional applications that offer a seamless and
          visually pleasing user experience.
        </p>
      </div>
    </section>
  );
};

export default Intro;
