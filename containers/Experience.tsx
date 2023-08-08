import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useAnimationControls,
  useUnmountEffect,
} from "framer-motion";

const experiences = [
  {
    company: "Self Employed",
    job: "Freelance Web Developer",
    time: "Present",
  },
  {
    company: "Websters - The Computer Society of Shivaji College",
    job: "Technical Head",
    time: "Jan 2023 - Present",
  },
  {
    company: "Websters - The Computer Society of Shivaji College",
    job: "Core Member",
    time: "2022 - 2023",
  },
  {
    company: "Astorianz Industries",
    job: "Frontend Developer",
    time: "Apr 2021 - Jul 2021",
  },
];

const Experience = () => {
  return (
    <section className="w-[90%] h-screen flex flex-col justify-center mx-auto">
      <h1
        className="font-primary text-black dark:text-white text-2xl sm:text-4xl md:text-7xl font-bold text-center"
        data-scroll
        data-scroll-speed="2"
      >
        My Experiences
      </h1>
      <div className="experiences mt-12 text-center justify-items-center">
        {experiences.map((exp) => (
          <div
            className="experience sm:grid grid-cols-3 gap-x-8 font-primary my-6"
            data-scroll
            data-scroll-speed="1"
          >
            <div className="text-black dark:text-white">{exp.company}</div>
            <div className="text-gray-500 dark:text-gray-300">{exp.job}</div>
            <div className="text-gray-500 dark:text-gray-300">{exp.time}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
