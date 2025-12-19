import { useState, useRef, useEffect } from "react";
import { SlidersHorizontal, MapPin, Bed, Home as HomeIcon } from "lucide-react";

interface FilterState {
  location: string;
  category: string;
  bedrooms: string;
}

interface HeroProps {
  onSearch: (filters: FilterState) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const [filters, setFilters] = useState<FilterState>({
    location: "Location",
    category: "Room type",
    bedrooms: "Bedrooms",
  });

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    setActiveDropdown(null);
    onSearch(newFilters); // Send data back to Home.tsx to filter results
  };

  const options = {
    location: ["Dublin", "London", "Cork", "Galway", "Belfast"],
    category: ["Studio", "Shared Room", "Penthouse", "Townhouse", "Loft"],
    bedrooms: ["1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4+ Bedrooms"],
  };

  return (
    <section className="w-full font-man bg-[url('/assets/Group.png')] bg-contain bg-top bg-no-repeat pt-[8rem] pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center flex flex-col justify-center items-center">
        <div className="lg:w-[65%] mx-auto">
          <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Find Your Perfect Room and the Right Vibe to Match
          </h1>
          <p className="text-[#787878] font-medium text-lg">
            Browse verified apartments and roommate listings that fit your lifestyle, budget, and personality.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="w-full max-w-3xl mx-auto text-left mt-16 space-y-3" ref={dropdownRef}>
          <h4 className="text-[#2C2C2C] font-semibold ml-2">Filter your search By:</h4>
          
          <div className="relative bg-white rounded-full border border-[#CACACA] shadow-xl grid grid-cols-3 items-center min-h-[70px]">
            
            {/* 1. Location Segment */}
            <div className="relative h-full flex items-center">
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'loc' ? null : 'loc')}
                className={`w-full h-full flex flex-col justify-center px-6 text-left hover:bg-gray-50 rounded-l-full transition-colors ${activeDropdown === 'loc' ? 'bg-gray-50' : ''}`}
              >
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Where</span>
                <span className="truncate text-sm md:text-base font-semibold text-gray-800">{filters.location}</span>
              </button>
              {activeDropdown === 'loc' && (
                <DropdownMenu items={options.location} onSelect={(val) => handleSelect('location', val)} icon={<MapPin size={16}/>} />
              )}
            </div>

            {/* 2. Category Segment */}
            <div className="relative h-full flex items-center border-x border-gray-200">
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'cat' ? null : 'cat')}
                className={`w-full h-full flex flex-col justify-center px-6 text-left hover:bg-gray-50 transition-colors ${activeDropdown === 'cat' ? 'bg-gray-50' : ''}`}
              >
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Type</span>
                <span className="truncate text-sm md:text-base font-semibold text-gray-800">{filters.category}</span>
              </button>
              {activeDropdown === 'cat' && (
                <DropdownMenu items={options.category} onSelect={(val) => handleSelect('category', val)} icon={<HomeIcon size={16}/>} />
              )}
            </div>

            {/* 3. Bedrooms Segment */}
            <div className="relative h-full flex items-center">
              <div className="flex-1 flex items-center justify-between px-6 h-full hover:bg-gray-50 rounded-r-full group transition-colors">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'bed' ? null : 'bed')}
                  className="flex flex-col justify-center text-left flex-1 h-full"
                >
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Size</span>
                  <span className="truncate text-sm md:text-base font-semibold text-gray-800">{filters.bedrooms}</span>
                </button>
                
                <button className="bg-primary p-2.5 rounded-full text-white hover:scale-110 transition-transform shadow-lg">
                  <SlidersHorizontal size={20} />
                </button>
              </div>
              {activeDropdown === 'bed' && (
                <DropdownMenu items={options.bedrooms} onSelect={(val) => handleSelect('bedrooms', val)} icon={<Bed size={16}/>} />
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Internal Dropdown Component
const DropdownMenu = ({ items, onSelect, icon }: { items: string[], onSelect: (v: string) => void, icon: React.ReactNode }) => (
  <div className="absolute top-[110%] left-0 w-full bg-white border border-gray-100 shadow-2xl rounded-2xl p-2 z-[60] animate-in slide-in-from-top-2 duration-200">
    {items.map((item) => (
      <button
        key={item}
        onClick={() => onSelect(item)}
        className="flex items-center gap-3 w-full p-3 text-sm text-left hover:bg-purple-50 rounded-xl transition-colors font-medium text-gray-700 hover:text-primary"
      >
        <span className="text-gray-400">{icon}</span>
        {item}
      </button>
    ))}
  </div>
);

export default Hero;