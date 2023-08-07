import { useRef, useEffect } from "react";
import classNames from "classnames";
import { motion, useAnimationControls, useInView } from "framer-motion";

const AnimatedImage = ({
  src,
  className,
  alt,
}: {
  src: string;
  className?: string;
  alt?: string;
}) => {
  const slideRef = useRef(null);
  const slideInView = useInView(slideRef);
  const slideControls = useAnimationControls();

  const imageControls = useAnimationControls();

  useEffect(() => {
    if (slideInView) {
      slideControls.start({ scaleX: 0 });
      imageControls.start({ scale: 1 });
    }
  }, [slideInView, slideControls, imageControls]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        ref={slideRef}
        className="absolute inset-0 bg-white dark:bg-black origin-left z-10"
        initial={{ scaleX: 1 }}
        animate={slideControls}
        transition={{ duration: 0.8, ease: "easeIn" }}
      ></motion.div>
      <motion.img
        src={src}
        className={classNames("w-full relative z-[5]", className)}
        alt={alt}
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      />
    </div>
  );
};

export default AnimatedImage;
