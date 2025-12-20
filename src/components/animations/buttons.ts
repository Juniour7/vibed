import type { Variants } from "framer-motion";

export const waterWiggle: Variants = {
  tap: {
    scale: [1, 0.95, 1.03, 1],
    rotate: [0, -1.5, 1.5, -1, 0],
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export const softHover: Variants = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.2 },
  },
};
