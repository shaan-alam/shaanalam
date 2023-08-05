import { useRef } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function App({ Component, pageProps, router }: AppProps) {
  const pageRouter = useRouter();
  const pageKey = pageRouter.asPath;
  const containerRef = useRef(null);

  return (
    <AnimatePresence initial={true} mode="popLayout" key={router.route}>
      <LocomotiveScrollProvider
        options={{ smooth: true }}
        containerRef={containerRef}
      >
        <main ref={containerRef} data-scroll-container>
          <Component key={pageKey} {...pageProps} />
        </main>
      </LocomotiveScrollProvider>
    </AnimatePresence>
  );
}
