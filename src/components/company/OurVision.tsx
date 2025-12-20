
import { Eye, Clock, MoveUpRight } from 'lucide-react';

const VisionCard = ({ title, description, icon: Icon, className }: { 
  title: string; 
  description: string; 
  icon: any; 
  className: string 
}) => (
  <div className={`bg-[#9E948E] p-6 rounded-2xl text-white shadow-xl z-20 ${className}`}>
    <div className="flex items-center gap-3 mb-3">
      <div className="p-1 border border-white/30 rounded-full">
        <Icon size={20} />
      </div>
      <h3 className="font-bold text-lg leading-tight">{title}</h3>
    </div>
    <p className="text-sm text-gray-100 leading-relaxed font-light">
      {description}
    </p>
  </div>
);

const OurVision = () => {
  return (
    <section className="bg-white max-w-7xl mx-auto py-20 px-4 overflow-hidden">
      {/* Header Info */}
      <div className="max-w-7xl mx-auto mb-16 px-4 md:px-8">
        <h1 className="font-semibold text-2xl ">
          Our Vision — Redefining the Way People <br /> Live Together
        </h1>
        <p className="text-[#787878] text-lg max-w-3xl">
          At Vibed, we envision an Ireland where finding a place to live also means finding your kind of people.
        </p>Welcome to Vibed – The Most Innovative Housemates matching App in Ireland
      </div>

      {/* Main Interactive Design Container */}
      <div className="relative max-w-6xl mx-auto min-h-[500px] lg:h-[650px]">
        
        {/* 1. THE AD LOGO (Top Center) */}
       

        {/* 2. DOTTED CONNECTORS (SVG Layer) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="none">
            {/* From Logo to Right Card (Simplify) */}
            <path d="M560 30 H 830 V 180" stroke="#9E948E" strokeWidth="2" strokeDasharray="6 6" />
            
            {/* From Logo to Center Vertical (Promote) */}
            <path d="M525 60 V 580 H 550" stroke="#9E948E" strokeWidth="2" strokeDasharray="6 6" />
            
            {/* From Left Card (Build) Down and Right */}
            <path d="M150 350 V 520 H 450" stroke="#9E948E" strokeWidth="2" strokeDasharray="6 6" />
            
            {/* Anchor Dots from image */}
            <circle cx="525" cy="180" r="4" fill="#9E948E" />
            <circle cx="830" cy="180" r="4" fill="#9E948E" />
            <circle cx="150" cy="350" r="4" fill="#9E948E" />
          </svg>
        </div>

        {/* 3. CENTRAL IMAGE (The People) */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <img 
            src="/assets/diversity.jpg" 
            alt="Vibed Community" 
            className="h-[80%] lg:h-full w-auto object-contain opacity-90 hidden lg:block"
          />
        </div>

        {/* 4. FLOATING CARDS */}
        {/* On Mobile: Flex column stack | On Desktop: Absolute positioning */}
        <div className="flex flex-col gap-6 lg:block h-full">
          
          {/* Card 1: Top Left */}
          <VisionCard 
            icon={Eye}
            title="Build genuine connections"
            description="By helping people meet roommates who share their lifestyle, values, and rhythm, turning co-living into meaningful friendships rather than random arrangements."
            className="lg:absolute lg:top-[30px] lg:left-0 lg:w-[320px]"
          />

          {/* Card 2: Middle Right */}
          <VisionCard 
            icon={Clock}
            title="Simplify the housing experience"
            description="By removing the stress of searching and matching, and replacing it with a smooth, smart, and enjoyable process designed around how people want to live today."
            className="lg:absolute lg:top-[180px] lg:right-0 lg:w-[320px]"
          />

          {/* Card 3: Bottom Center/Right */}
          <VisionCard 
            icon={MoveUpRight}
            title="Promote safe shared living"
            description="Through verified profiles, trusted apartment listings, and in-app tools that ensure transparency, comfort, and confidence for every user."
            className="lg:absolute lg:bottom-[20px] lg:right-[15%] lg:w-[320px]"
          />

          
        </div>

      </div>
    </section>
  );
};

export default OurVision;