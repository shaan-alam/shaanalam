import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function App({ Component, pageProps, router }: AppProps) {
  const pageRouter = useRouter();
  const pageKey = pageRouter.asPath;

  return (
    <AnimatePresence initial={true} mode="wait" key={router.route}>
      <ThemeProvider attribute="class" enableSystem>
        <LocomotiveScrollProvider options={{ smooth: true }}>
          <main data-scroll-container>
            <Component key={pageKey} {...pageProps} />
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </AnimatePresence>
  );
}
