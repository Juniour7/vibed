import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is my information secure?",
      answer:
        "We prioritize user privacy with robust encryption and secure authentication.",
    },
    {
      question: "What if I don't like my matches?",
      answer:
        "Adjust your preferences at any time to refine your search and improve accuracy.",
    },
    {
      question: "Can I change my preferences after creating my profile?",
      answer:
        "Absolutely! You can update your profile and preferences at any time to refine your roommate search and improve match accuracy.",
    },
  ];

  const toggleFaq = (index: number) => {
  setOpenIndex((prev) => (prev === index ? null : index));
};


  return (
    <section className="w-full py-[3rem] font-man">
      <div className="max-w-7xl md:w-[70%] lg:w-[60%] mx-auto px-3 md:px-8">
        {/* Header */}
        <div className="space-y-3 text-center mb-14">
          <h5 className="text-[#F4A261] tracking-wider">FAQs</h5>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Got questions?
          </h1>
          <p className="font-medium lg:w-[60%] mx-auto">
            Get the answers to your questions about Vibed.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-gray-200  overflow-hidden transition"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-5 pb-5  text-[#3A3A3A] leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Footer */}
        <motion.div
          className="text-center mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm font-medium text-[#3C4A4D] uppercase tracking-wide">
            We envision an Ireland where finding a place to live also means finding your kind of people.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
