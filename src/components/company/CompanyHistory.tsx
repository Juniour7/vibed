import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const CompanyHistory = () => {
  return (
    <section className="w-full py-[4rem] font-man">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-8 bg-gradient-to-r from-[#423224] to-[#1F1C1A] text-white p-3 md:p-11"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        {/* Heading and paragraph */}
        <div className="space-y-3 pb-5">
          <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl font-semibold">
            Company history
          </h1>
          <p>
            Vibed began as a simple idea among friends who struggled to find compatible roommates while moving to new cities. What started as casual conversations about mismatched living situations turned into a mission to make shared housing more human and stress-free.
            In 2023, the Vibed team started building a platform that blends technology with trust — combining smart roommate matching, verified listings, and in-app communication. By 2025, Vibed evolved into a growing community that connects people through shared spaces and genuine compatibility, redefining how modern co-living should feel.
          </p>
        </div>

        {/* Co-founder info */}
        <motion.div
          className="md:w-[80%] mx-auto border-t border-white pt-5 flex flex-col justify-center items-center text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-xl md:text-2xl font-semibold">Loe Markdo</h3>
          <p>Co-Founder of Company</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CompanyHistory;
