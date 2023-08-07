import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const navLinks = [
  { text: "Home", path: "/ " },
  { text: "Projects", path: "/projects " },
  { text: "Blogs", path: "/blogs " },
  { text: "about", path: "/about" },
];

const Navbar = () => {
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
      <div className="container flex justify-end w-[90%] mx-auto">
        <span className="cursor-pointer" onClick={() => setNavOpen(true)}>
          <HiMenuAlt4 size={30} />
        </span>
      </div>
      <AnimatePresence mode="wait">
        {navOpen && (
          <motion.section
            className="p-12 fixed inset-0 z-[999] h-screen w-full origin-bottom bg-black flex flex-col items-end"
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
                <HiX color="#fff" size={30} />
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
                  <h1 className="relative hover:underline overflow-hidden text-white font-primary text-4xl sm:text-8xl font-bold uppercase text-right my-4">
                    {/* <div className="absolute top-[-1rem] left-[-1rem] z-[9] scale-110 font-outlined">
                      <h1>{text}</h1>
                    </div> */}
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

{
  /* <div className="container w-[80%] mx-auto flex items-center justify-end">
<ul className="list-none font-primary font-bold flex items-center">
  <Link href="/">
    <li className="mr-4 hover:underline transition-all">Home</li>
  </Link>
  <Link href="/projects">
    <li className="mr-4 hover:underline transition-all">Projects</li>
  </Link>
  <Link href="/blogs">
    <li className="mr-4 hover:underline transition-all">Blogs</li>
  </Link>
  <Link href="/about">
    <li className="mr-4 hover:underline transition-all">About</li>
  </Link>
</ul>
</div> */
}
