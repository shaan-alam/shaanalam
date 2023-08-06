import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      containerRef={containerRef}
    >
      <main ref={containerRef} data-scroll-container>
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
      </main>
    </LocomotiveScrollProvider>
  );
};

export default Layout;
