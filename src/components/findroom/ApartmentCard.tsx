import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Apartment } from '../data/mockData';

const ApartmentCard = ({ item }: { item: Apartment }) => {
  return (
    <Link to={`/details/${item.id}`} className="group block min-w-[200px] lg:min-w-[240px] flex-1">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition">
          <Heart size={18} className="text-white fill-transparent" />
        </button>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-sm line-clamp-1">{item.title}</h3>
          <span className="font-bold text-sm">{item.price}</span>
        </div>
        <p className="text-xs text-gray-500">{item.location}</p>
        <div className="flex items-center gap-1 text-xs">
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{item.rating}</span>
          <span className="text-gray-400">({item.reviews})</span>
        </div>
      </div>
    </Link>
  );
};

export default ApartmentCard;