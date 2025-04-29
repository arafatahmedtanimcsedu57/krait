import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps extends MotionProps {
  children: ReactNode;
  duration?: number;
  slideFrom?: "left" | "right" | "top" | "bottom";
}

export const SlideIn = ({
  children,
  duration = 0.6,
  slideFrom,
  ...rest
}: FadeInProps) => {
  const getInitialX = () => {
    switch (slideFrom) {
      case "left":
        return -50;
      case "right":
        return 50;
      default:
        return 0;
    }
  };

  const getInitialY = () => {
    switch (slideFrom) {
      case "top":
        return -50;
      case "bottom":
        return 50;
      default:
        return 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: getInitialX(), y: getInitialY() }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
