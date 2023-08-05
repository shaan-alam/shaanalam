import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "../Navbar";
import Footer from "../Footer";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      data-scroll-section
    >
      <Navbar />
      {children}
      <Footer />
    </motion.section>
  );
};

export default Layout;
