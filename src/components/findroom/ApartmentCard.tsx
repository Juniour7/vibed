import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Apartment } from '../data/mockData';
import { slugify } from '../utils/slugify';

const ApartmentCard = ({ item }: { item: Apartment }) => {
  const titleSlug = slugify(item.title);

  return (
    /* 1. Changed Parent to div and REMOVED flex-1 / min-w */
    <div className="group bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-100 h-full transition-all duration-300 hover:shadow-md">
      
      {/* 2. Link wrapped around the image for UX */}
      <Link to={`/details/${titleSlug}`} className="block relative aspect-[4/3] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Heart button remains absolute but outside the Link to prevent accidental navigation */}
        <button 
          onClick={(e) => {
            e.preventDefault(); // Prevents navigating to details if heart is clicked
            e.stopPropagation();
          }}
          className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/60 transition-all z-10"
        >
          <Heart size={18} className="text-white fill-transparent hover:fill-red-500 hover:text-red-500 transition-colors" />
        </button>
      </Link>

      <div className="space-y-1 p-3">
        <div className="flex justify-between items-start gap-2">
          {/* 3. Link wrapped around the title only */}
          <Link 
            to={`/details/${titleSlug}`} 
            className="font-semibold text-sm line-clamp-1 hover:text-[#f4a261] transition-colors"
          >
            {item.title}
          </Link>
          <span className="font-bold text-sm shrink-0">{item.price}</span>
        </div>

        <p className="text-xs text-gray-500">{item.location}</p>
        
        <div className="flex items-center gap-1 text-xs pt-1">
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{item.rating}</span>
          <span className="text-gray-400">({item.reviewsCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;