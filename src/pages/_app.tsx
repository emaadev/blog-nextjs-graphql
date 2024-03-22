import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import "@/styles/globals.css";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}
