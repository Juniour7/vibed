import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { container, fadeUp } from "../animations"; // Assuming these exist, otherwise I've included standard ones below

const Benefits = () => {
  const coreSections = [
    {
      id: "01",
      title: "Meet Susan: Your Matchmaker",
      description:
        "Susan handles the heavy lifting. Share your lifestyle, and she’ll match you with people who actually fit your daily rhythm.",
      color: "from-orange-400 to-pink-500",
    },
    {
      id: "02",
      title: "The Vibe: Home as a Feeling",
      description:
        'Home is more than an Eircode. We connect you with a community of "Vibers" to ensure your atmosphere is one you’ll love coming home to.',
      color: "from-blue-400 to-teal-400",
    },
    {
      id: "03",
      title: "The Search: Zero Hustle",
      description:
        "Skip the scroll. Set your preferences and let Susan deliver handpicked profiles. It’s the stress-free way to find your next move.",
      color: "from-purple-400 to-indigo-500",
    },
  ];

  // Custom card variant for individual entrance
  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full py-20 font-man relative overflow-hidden">
      {/* Background Decor - Optional subtle gradient blob behind everything */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl -z-10" />

      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header Section */}
        <motion.div className="space-y-4 max-w-3xl mx-auto mb-16" variants={fadeUp}>
          <span className="inline-block py-1 px-3 rounded-full bg-[#F4A261]/10 text-[#F4A261] text-sm font-bold tracking-wider uppercase">
            The Secret Sauce
          </span>
          <h1 className="font-sans text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Meet Susan, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A261] to-[#E76F51]">Your Smart Matchmaker</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium pt-2">
            Tell Susan what matters to you, and she’ll take care of the rest — matching you with the right people and the right vibe, stress-free.
          </p>
        </motion.div>

        {/* Staggered Cards Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative"
          variants={container}
        >
          {coreSections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={cardVariant}
              // This creates the staggered effect: The middle card (index 1) is pushed down
              className={`relative group bg-white p-8 rounded-bl-3xl rounded-br-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 ${
                index === 1 ? "md:mt-12" : ""
              }`}
            >
              {/* Gradient Top Line */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${section.color} rounded-t-3xl`} />
              
              {/* Large Background Number */}
              <div className="absolute top-4 right-6 text-9xl font-bold text-gray-50 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 select-none pointer-events-none -z-0 leading-none">
                {section.id}
              </div>

              <div className="relative z-10 flex flex-col h-full text-left pt-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#F4A261] transition-colors">
                  {section.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed font-medium">
                  {section.description}
                </p>

                {/* Decorative Pill/Icon at bottom */}
                <div className="mt-auto pt-8 flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${section.color}`} />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Feature</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;