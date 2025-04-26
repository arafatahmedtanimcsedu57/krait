"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps extends MotionProps {
  children: ReactNode;
  duration?: number;
}

export const FadeIn = ({ children, duration = 3 }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};
