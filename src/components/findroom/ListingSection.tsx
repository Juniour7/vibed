import { ChevronLeft, ChevronRight } from 'lucide-react';
import ApartmentCard from './ApartmentCard';
import type { Apartment } from '../data/mockData';

interface SectionProps {
  title: string;
  filterText?: string;
  items: Apartment[];
}

const ListingSection = ({ title, filterText, items }: SectionProps) => {
  return (
    <div className="py-8 max-w-7xl  mx-auto px-4 md:px-8 bg-white p-3 ">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold">{title}</h2>
          {filterText && (
            <span className="text-xs font-medium text-gray-400 border px-2 py-1 rounded-md cursor-pointer hover:bg-gray-50">
              Sort by: {filterText} ▾
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <button className="p-2 border rounded-full hover:bg-gray-100"><ChevronLeft size={16}/></button>
          <button className="p-2 border rounded-full hover:bg-gray-100"><ChevronRight size={16}/></button>
        </div>
      </div>

      {/* Grid for desktop, horizontal scroll for mobile */}
      <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-7 pb-4 scrollbar-hide">
        {items.map((apt) => (
          <ApartmentCard key={apt.id} item={apt} />
        ))}
      </div>
    </div>
  );
};

export default ListingSection;