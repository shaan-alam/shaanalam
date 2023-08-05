import { motion } from "framer-motion";
import classnames from "classnames";
import React from "react";

interface AnimatedParagraphProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={classnames(
        "relative px-8 font-primary text-[#B3B3B3] leading-7",
        className
      )}
    >
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ ease: "easeOut", delay: 0.5, duration: 0.5 }}
        className="absolute inset-0 h-full w-full bg-zinc-900 origin-bottom"
      ></motion.div>
      {children}
    </div>
  );
};

export default AnimatedParagraph;
