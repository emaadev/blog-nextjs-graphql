import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: -200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -200 },
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.5,
      duration: 0.5,
    }}
    className="layout"
  >
    {children}
  </motion.div>
);

export default Layout;
