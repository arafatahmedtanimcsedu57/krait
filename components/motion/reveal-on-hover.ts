export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
