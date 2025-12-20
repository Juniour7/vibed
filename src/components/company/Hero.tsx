import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const Hero = () => {
  return (
    <section className="w-full py-[5rem] bg-[url('/assets/Group.png')] bg-contain bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-5 flex flex-col items-center justify-center text-center">
        {/* Image */}
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <img
            src="/assets/video.jpg"
            alt="Hero video placeholder"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.p
          className="text-[#787878] md:w-[50%] md:text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          Our journey started with a mission to help people find not just roommates, but real connections.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
