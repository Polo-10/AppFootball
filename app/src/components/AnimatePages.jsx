import { motion } from "framer-motion";

const AnimationPages = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: "100vw",
    },
  };

  const pageTransition = {
    type: "spring",
    ease: "anticipate",
    duration: 0.5,
    delay: 0.2,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit={{ opacity: 0 }}
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default AnimationPages;
