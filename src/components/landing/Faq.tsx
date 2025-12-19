import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Vibed work?",
      answer:
        "Vibed connects you with verified roommates and apartments that match your lifestyle. Simply create a profile, explore listings, get matched, and chat directly in the app to plan your move.",
    },
    {
      question: "Is my personal information secure on Vibed?",
      answer:
        "Yes, we prioritize user privacy and employ robust security measures to protect your data, including encryption and secure authentication protocols.",
    },
    {
      question: "Can I change my preferences after creating my profile?",
      answer:
        "Absolutely! You can update your profile and preferences at any time to refine your roommate search and improve match accuracy.",
    },
    {
      question: "What if I don't like my matched roommates?",
      answer:
        "If you're not satisfied with your matches, you can adjust your preferences or reach out to our support team for assistance in finding better-suited roommates.",
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
      </div>
    </section>
  );
};

export default Faq;
