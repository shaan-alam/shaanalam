import { useRef } from "react";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps, router }: AppProps) {
  const pageRouter = useRouter();
  const pageKey = pageRouter.asPath;

  return (
    <AnimatePresence initial={true} mode="wait" key={router.route}>
      <Component key={pageKey} {...pageProps} />
    </AnimatePresence>
  );
}
