import { motion } from "framer-motion";
import FindHousemates from "./FindHousemates";
import { container, fadeUp, cardVariant  } from "../animations";


const Benefits = () => {
  const OurBenefits = [
    {
      title: "Vibers like You",
      description:
        "We know how important it is to come home to a vibe you love and appreciate. We have hundreds of Vibers looking for something similar to you.",
    },
    {
      title: "Hussle-free",
      description:
        "Swipe through different profiles or enter your ideal location and housemate description and Susan will suggest a few profiles for you to look through.",
    },
  ];

  return (
    <section className="w-full py-[3rem] font-man">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-8 bg-[url('/assets/Map.png')] bg-contain bg-center bg-no-repeat flex flex-col justify-center items-center text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.div className="space-y-3" variants={fadeUp}>
          <h5 className="text-[#F4A261]">OUR BENEFITS</h5>
          <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl font-semibold">
            Why are we the Ireland&apos;s most innovative <br />
            housemate matching platform?
          </h1>
          <p className="font-medium lg:w-[60%] mx-auto">
            <span className="text-[#F4A261]">Susan, our Trusted AI</span> like your
            cool aunt who knows what is important to you, you can tell Susan who
            you are, what you are looking for, etc and she&apos;ll do her
            matching.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
          variants={container}
        >
          {OurBenefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariant}
              whileHover={{ y: -4 }}
              className="bg-white bg-opacity-70 p-6 rounded-lg shadow-md border-b-4 border-b-[#A79E9C]"
            >
              <h3 className="text-xl font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-[#3C4A4D] font-medium">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Next section */}
      <FindHousemates />
    </section>
  );
};

export default Benefits;
