import React from 'react';
import { Eye, Clock, MoveUpRight } from 'lucide-react'; // Example icons

const VisionCard = ({ icon: Icon, title, description, className }) => (
  <div className={`bg-[#A39994] p-5 rounded-2xl text-white shadow-xl z-20 ${className}`}>
    <div className="flex items-center gap-3 mb-3">
      <div className="p-1 border border-white/30 rounded-full">
        <Icon size={20} />
      </div>
      <h3 className="font-bold text-lg leading-tight">{title}</h3>
    </div>
    <p className="text-sm text-gray-100 leading-relaxed">
      {description}
    </p>
  </div>
);

const OurVision = () => {
  return (
    <section className="bg-white  max-w-7xl  mx-auto px-4 md:px-8 py-12 px-6">
      {/* Header Section */}
      <div className="mb-16 max-w-3xl">
        <h1 className="font-bold text-3xl mb-4">
          👁️ Our Vision — Redefining the Way People Live Together
        </h1>
        <p className="text-[#787878] text-lg">
          At Vibed, we envision a world where finding a place to live also means finding your kind of people. 
          We aim to build a global community where shared spaces lead to shared experiences.
        </p>
      </div>

      {/* Interactive Visual Section */}
      <div className="relative md:min-h-[700px] w-full mt-20">

        {/* The Dotted Connectors (Hidden on Mobile) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Custom SVG for lines to match Figma exactly */}
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
                <path d="M500 40 V 100" stroke="#A39994" strokeDasharray="4 4" />
                <path d="M540 40 H 800 V 100" stroke="#A39994" strokeDasharray="4 4" />
                <path d="M150 250 V 350 H 300" stroke="#A39994" strokeDasharray="4 4" />
                {/* Add more paths as needed based on your Figma file */}
            </svg>
        </div>

        {/* Main Background Imagery (The People) */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img 
            src="/assets/diversity.jpg" 
            alt="People connecting" 
            className="h-[20rem] object-cover opacity-90 hidden lg:block"
          />
        </div>

        {/* Floating Cards - Positioning using Absolute on desktop, stack on mobile */}
        <div className="relative flex flex-col gap-6 lg:block h-full">
          
          {/* Card 1: Build connections */}
          <VisionCard 
            icon={Eye}
            title="Build genuine connections"
            description="By helping people meet roommates who share their lifestyle, values, and rhythm, turning co-living into meaningful friendships rather than random arrangements."
            className="lg:absolute lg:top-0 lg:left-0 lg:w-[320px]"
          />

          {/* Card 2: Simplify housing */}
          <VisionCard 
            icon={Clock}
            title="Simplify the housing experience"
            description="By removing the stress of searching and matching, and replacing it with a smooth, smart, and enjoyable process designed around how people truly want to live today."
            className="lg:absolute lg:top-20 lg:right-0 lg:w-[320px]"
          />

          {/* Card 3: Promote safe shared living */}
          <VisionCard 
            icon={MoveUpRight}
            title="Promote safe shared living"
            description="Through verified profiles, trusted apartment listings, and in-app tools that ensure transparency, comfort, and confidence for every user."
            className="lg:absolute lg:bottom-0 lg:right-20 lg:w-[320px]"
          />
        </div>

      </div>
    </section>
  );
};

export default OurVision;