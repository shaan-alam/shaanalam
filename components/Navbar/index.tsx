import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, useAnimationControls } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const navLinks = [
  { text: "Home", path: "/ " },
  { text: "Projects", path: "/projects " },
  { text: "Blogs", path: "/blogs " },
  { text: "about", path: "/about" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);

  const navAnimations = useAnimationControls();
  const navLinkAnimations = useAnimationControls();

  const navOpenSequence = async () => {
    await navAnimations.start({ scaleY: 1 });
    return await navLinkAnimations.start({ y: "0" });
  };
  const navCloseSequence = async () => {
    await navLinkAnimations.start({ y: "100%" });
    return await navAnimations.start({ scaleY: 0 });
  };

  useEffect(() => {
    if (navOpen) {
      navOpenSequence();
    } else {
      navCloseSequence();
    }
  }, [navOpen]);

  const navigateToRoute = async (route: string) => {
    await navCloseSequence();
    router.push(route);
  };

  return (
    <nav className="w-full py-8">
      <div className="container flex items-center justify-end w-[90%] mx-auto">
        <span className="text-black dark:text-white font-primary mr-4 text-sm hover:underline cursor-pointer">
          <DarkModeSwitch
            className="h-[25px]"
            checked={theme === "light"}
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            size={120}
            moonColor="#000"
            sunColor="#fff"
          />
        </span>
        <span
          className="cursor-pointer text-black dark:text-white"
          onClick={() => setNavOpen(true)}
        >
          <HiMenuAlt4 size={30} color={theme == "dark" ? "#000" : "#000"} />
        </span>
      </div>
      <AnimatePresence mode="wait">
        {navOpen && (
          <motion.section
            className="p-12 fixed inset-0 z-[999] h-screen w-full origin-bottom bg-black dark:bg-white flex flex-col items-end"
            initial={{ scaleY: 0 }}
            animate={navAnimations}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="close-nav flex justify-end">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="cursor-pointer"
                onClick={() => setNavOpen(false)}
              >
                <HiX color={theme === "dark" ? "#000" : "#fff"} size={30} />
              </motion.span>
            </div>
            <div className="menu mt-8">
              {navLinks.map(({ text, path }, index) => (
                <Link
                  href={path}
                  key={path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToRoute(path);
                  }}
                >
                  <h1 className="relative hover:underline overflow-hidden text-white dark:text-black font-primary text-4xl sm:text-8xl font-bold uppercase text-right my-4">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={navLinkAnimations}
                      exit={{ y: "100%" }}
                      transition={{
                        delay: 0.2 * index,
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                    >
                      {text}
                    </motion.div>
                  </h1>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
