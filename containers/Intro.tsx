import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="p-8 h-[70vh] flex items-center justify-start w-[90%] mx-auto">
      <div className="md:w-[70%] w-full leading-7 md:leading-[3.5rem] md:text-4xl">
        <p
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="horizontal"
          className="font-secondary font-bold text-black dark:text-white"
        >
          I am an accomplished&nbsp;
          <span className="text-[#14cf93]">Full Stack developer</span>,
          well-versed in
          <span className="text-[#14cf93] ml-2">MERN Stack.&nbsp;</span>
          I&apos;m a dynamic and skilled full stack developer with a passion for
          creating robust and innovative web applications. With a solid
          foundation in both front-end and back-end technologies, I possesses
          the expertise to craft seamless user experiences and efficient
          server-side functionalities
        </p>
      </div>
    </section>
  );
};

export default Intro;
