import { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import Slider from "react-slick";
import ApartmentCard from './ApartmentCard';
import type { Apartment } from '../data/mockData';

// Ensure these are in your App.tsx or main.tsx globally to be safe
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SectionProps {
  title: string;
  filterText?: string;
  items: Apartment[];
}

const ListingSection = ({ title, filterText, items }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("All");
  const [slidesToShow, setSlidesToShow] = useState(5); // Start with desktop default
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<Slider | null>(null);

  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesToShow(1); 
      } else if (width < 1024) {
        setSlidesToShow(2); 
      } else if (width < 1280) {
        setSlidesToShow(4); 
      } else {
        setSlidesToShow(5); 
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedSort === "All") return items;
    return items.filter((apt) => {
      if (selectedSort === "1-Bedroom") return apt.details.beds === 1;
      if (selectedSort === "2-Bedroom") return apt.details.beds === 2;
      if (selectedSort === "4-Bedroom") return apt.details.beds === 4;
      if (selectedSort === "5-Bedroom") return apt.details.beds === 5;
      if (selectedSort === "A room-self") {
        return apt.propertyType.toLowerCase().includes("studio") || apt.propertyType.toLowerCase().includes("room");
      }
      return true;
    });
  }, [selectedSort, items]);

  // 2. SIMPLIFIED SLIDER SETTINGS
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow, 
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    centerMode: slidesToShow === 1,
    centerPadding: slidesToShow === 1 ? "40px" : "0px",
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 md:px-8 bg-white overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .listing-slider .slick-list {
          margin: 0 -12px !important;
          overflow: visible !important;
        }
        .listing-slider .slick-slide > div {
          padding: 0 12px !important;
        }
      `}} />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {filterText && (
            <div className="relative flex-1 sm:flex-none" ref={dropdownRef}>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-xs font-medium text-gray-500 border px-4 py-2 rounded-xl flex items-center justify-between gap-2 bg-white hover:bg-gray-50 transition-colors"
              >
                Sort by: {selectedSort} <ChevronDown size={14} className={isOpen ? 'rotate-180' : ''} />
              </button>
              {isOpen && (
                <div className="absolute top-full left-0 z-[100] mt-2 w-full min-w-[160px] bg-white border border-gray-100 shadow-2xl rounded-2xl py-2 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  {["All", "1-Bedroom", "2-Bedroom", "4-Bedroom", "5-Bedroom", "A room-self"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setSelectedSort(opt); setIsOpen(false); }}
                      className={`w-full text-left px-5 py-3 text-sm transition-colors ${selectedSort === opt ? 'text-[#f4a261] bg-orange-50 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          
          <div className="flex gap-2">
            <button onClick={() => sliderRef.current?.slickPrev()} className="p-2.5 border rounded-full hover:bg-gray-100 shadow-sm transition-all active:scale-90">
              <ChevronLeft size={18}/>
            </button>
            <button onClick={() => sliderRef.current?.slickNext()} className="p-2.5 border rounded-full hover:bg-gray-100 shadow-sm transition-all active:scale-90">
              <ChevronRight size={18}/>
            </button>
          </div>
        </div>
      </div>

      {filteredItems.length > 0 ? (
        <div className="listing-slider">
          <Slider 
            key={`${slidesToShow}-${selectedSort}-${filteredItems.length}`} 
            ref={sliderRef} 
            {...settings}
          >
            {filteredItems.map((apt) => (
              <div key={apt.id} className="outline-none">
                <ApartmentCard item={apt} />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-[2rem]">
          <p className="text-gray-400 font-medium">No results found for "{selectedSort}".</p>
          <button onClick={() => setSelectedSort("All")} className="mt-3 text-[#f4a261] font-bold text-sm">Clear Filter</button>
        </div>
      )}
    </div>
  );
};

export default ListingSection;