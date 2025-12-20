import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Moving = () => {
  return (
    <motion.section
      className="bg-[#A79E9C] w-full py-[3rem] px-3 flex justify-center items-center divide-x-2 divide-white gap-3 text-center"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.h5
        className="text-[#3C4A4D] font-medium"
        variants={slideLeft}
      >
        MOVING TO A NEW CITY?
      </motion.h5>

      <motion.p
        className="text-white pl-3"
        variants={slideRight}
      >
        Try Ireland&apos;s Most Innovative Housemate Matching Platform
      </motion.p>
    </motion.section>
  );
};

export default Moving;
