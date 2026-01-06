import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// 1. Import the Variants type
import { motion, type Variants } from "framer-motion";

const Hero = () => {
  const [phone, setPhone] = useState<string | undefined>();

  
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

  return (
    <section className="w-full bg-[url('/assets/hero.png')] bg-fixed bg-cover bg-center h-screen">
      <div className="w-full h-full bg-black/70 flex flex-col justify-center items-center">
        <motion.div
          className="text-center text-white px-4 space-y-6 w-full"
          variants={container} // This should no longer be red
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Headings */}
          <motion.div
            className="space-y-2 lg:w-[70%] mx-auto"
            variants={fadeUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Live with People Who Match Your Lifestyle{" "}
              <span className="text-[#F4A261]">and Vibe</span>
            </h1>
            <p className="text-lg md:text-xl">
              Welcome to Vibed – The Most Innovative Housemates matching App in Ireland
            </p>
          </motion.div>

          {/* Phone Input */}
          <motion.div
            className="flex flex-col justify-center space-y-2 w-full"
            variants={scaleIn}
          >
            <div className="flex items-center bg-white rounded-full px-3 py-2 justify-center w-full md:max-w-md mx-auto shadow-lg gap-2">
              <input 
                type="email" 
                placeholder="vibed@email.com"
                required
                className="w-full outline-none text-dark p-1 "
              />

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                type="submit"
                className="bg-[#F4A261] text-black px-6 py-2 rounded-full font-medium whitespace-nowrap hidden md:block"
              >
                Get Started
              </motion.button>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#F4A261] text-black px-6 py-5 rounded-full font-medium whitespace-nowrap md:hidden"
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;