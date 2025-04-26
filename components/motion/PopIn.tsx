"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface PopInProps extends MotionProps {
  children: ReactNode;
}

export const PopIn = ({ children }: PopInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        scale: { type: "spring", duration: 0.8, bounce: 0.4 },
      }}
    >
      {children}
    </motion.div>
  );
};
