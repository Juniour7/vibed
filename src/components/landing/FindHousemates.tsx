import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MessageSquareText, UserRound, UserStar, Home, type LucideIcon } from "lucide-react";

// 1. Define the shape of your Step object
interface Step {
  title: string;
  icon: LucideIcon; // This is the specific type for Lucide icons
  description: string;
}

// 2. Define props for the Sub-components
interface TimelineItemProps {
  step: Step;
  index: number;
  isEven: boolean;
}

interface ContentCardProps {
  step: Step;
  align: "left" | "right";
}

interface BigNumberProps {
  number: number;
  align: "left" | "right";
}

const FindHousematesVertical: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const steps: Step[] = [
    {
      title: "Create account",
      icon: UserRound,
      description: "Set up your profile with your interests, lifestyle preferences, budget, and location.",
    },
    {
      title: "Swipe & match",
      icon: UserStar,
      description: "Discover roommates who fit your lifestyle and personality using our smart matching.",
    },
    {
      title: "Chat safely",
      icon: MessageSquareText,
      description: "Get to know your future housemate through our secure, built-in messaging platform.",
    },
    {
      title: "Move in",
      icon: Home,
      description: "Found your match? Start finding the perfect place together and sign the lease.",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4 relative">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find your ideal Housemates
            </h1>
            <p className="text-gray-500 max-w-lg mx-auto text-lg">
              In 4 easy steps, connect with trusted individuals that fit your Vibe.
            </p>
          </motion.div>
        </div>

        {/* --- VERTICAL LINE --- */}
        <div className="absolute left-8 md:left-1/2 top-48 bottom-24 w-1 bg-gray-100 -translate-x-1/2 rounded-full z-0">
          <motion.div
            style={{ 
              scaleY, 
              transformOrigin: "top",
              height: "100%" 
            }}
            className="w-full bg-[#F4A261] rounded-full"
          />
        </div>

        {/* Steps Container */}
        <div className="space-y-24 md:space-y-32 relative z-10">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <TimelineItem 
                key={index} 
                step={step} 
                index={index} 
                isEven={isEven} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

// 3. Apply types to the sub-components
const TimelineItem: React.FC<TimelineItemProps> = ({ step, index, isEven }) => {
  return (
    <motion.div
      className={`relative flex items-center md:justify-between ${
        "flex-row md:flex-row" 
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      
      {/* LEFT SIDE (Desktop) */}
      <div className={`hidden md:block w-5/12 ${isEven ? "text-right" : "text-left"}`}>
        {isEven ? (
          <ContentCard step={step} align="right" />
        ) : (
          <BigNumber number={index + 1} align="left" />
        )}
      </div>

      {/* CENTER ICON */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-white shadow-lg rounded-full flex items-center justify-center relative z-10">
          <div className="w-full h-full rounded-full bg-[#F4A261]/10 flex items-center justify-center">
            {/* We render the icon component here */}
            <step.icon className="w-5 h-5 md:w-7 md:h-7 text-[#F4A261]" />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (Desktop) & MOBILE CONTENT */}
      <div className="pl-20 md:pl-0 w-full md:w-5/12">
        {/* Mobile View */}
        <div className="block md:hidden">
          <ContentCard step={step} align="left" />
        </div>
        
        {/* Desktop View */}
        <div className="hidden md:block">
          {!isEven ? (
            <ContentCard step={step} align="left" />
          ) : (
            <BigNumber number={index + 1} align="right" />
          )}
        </div>
      </div>

    </motion.div>
  );
};

const ContentCard: React.FC<ContentCardProps> = ({ step, align }) => (
  <div className={`flex flex-col ${align === "right" ? "items-end" : "items-start"}`}>
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
    <p className={`text-gray-500 leading-relaxed ${align === "right" ? "text-right" : "text-left"}`}>
      {step.description}
    </p>
  </div>
);

const BigNumber: React.FC<BigNumberProps> = ({ number, align }) => (
  <div 
    className={`text-9xl font-bold text-gray-100 select-none pointer-events-none 
      ${align === "right" ? "text-left ml-12" : "text-right mr-12"}
    `}
  >
    0{number}
  </div>
);

export default FindHousematesVertical;