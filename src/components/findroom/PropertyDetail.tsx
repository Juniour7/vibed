import { useParams, useNavigate } from 'react-router-dom';
import { Share, Heart, ChevronLeft, Star, MapPin, Wifi, Car, Coffee, Wind, ShieldCheck } from 'lucide-react';
import { mockApartments } from '../data/mockData';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the specific apartment from your mock data
  const property = mockApartments.find(p => p.id === id) || mockApartments[0];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
      {/* 1. Header & Navigation */}
      <nav className="flex justify-between items-center mb-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-medium hover:underline">
          <ChevronLeft size={18} /> Back
        </button>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 text-sm border px-3 py-1.5 rounded-lg hover:bg-gray-50">
            <Share size={16} /> Share
          </button>
          <button className="flex items-center gap-2 text-sm border px-3 py-1.5 rounded-lg hover:bg-gray-50">
            <Heart size={16} /> Favorite
          </button>
        </div>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">{property.title}</h1>

      {/* 2. Image Gallery Grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-8">
        <div className="col-span-2 row-span-2 relative">
          <img src={property.image} className="w-full h-full object-cover" alt="Main" />
        </div>
        <div className="col-span-1 row-span-1"><img src="https://images.unsplash.com/photo-1522771739844-649f6d1712af" className="w-full h-full object-cover" /></div>
        <div className="col-span-1 row-span-1"><img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb" className="w-full h-full object-cover" /></div>
        <div className="col-span-1 row-span-1"><img src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0" className="w-full h-full object-cover" /></div>
        <div className="col-span-1 row-span-1 relative">
          <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f" className="w-full h-full object-cover" />
          <button className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold shadow-lg">View more</button>
        </div>
      </div>

      {/* 3. Main Content Layout (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Info */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">About this place</h2>
            <p className="text-gray-600 leading-relaxed">
              Enjoy a unique taste of luxury at this centrally located place. 
              This loft is at the heart of Portobello Road...
            </p>
          </section>

          <hr />

          <section>
            <h2 className="text-xl font-bold mb-6">What this place offers</h2>
            <div className="grid grid-cols-2 gap-y-4">
               <AmenityItem icon={<MapPin size={20}/>} label="City skyline view" />
               <AmenityItem icon={<Wifi size={20}/>} label="Wifi" />
               <AmenityItem icon={<Wind size={20}/>} label="Air conditioning" />
               <AmenityItem icon={<Car size={20}/>} label="Free parking" />
            </div>
            <button className="mt-6 border-2 border-black px-6 py-2 rounded-xl font-bold hover:bg-black hover:text-white transition">Show all amenities</button>
          </section>
          
          <hr />

          {/* Map Section */}
          <section>
             <h2 className="text-xl font-bold mb-4">Maps for Direction</h2>
             <div className="w-full h-80 bg-gray-200 rounded-3xl overflow-hidden relative">
                {/* Replace with actual Map component later */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 italic">
                  Interactive Map Placeholder
                </div>
             </div>
          </section>
        </div>

        {/* Right Column: Reservation & Reviews */}
        <div className="space-y-6">
          {/* Reservation Card */}
          <div className="border rounded-3xl p-6 shadow-sm sticky top-6 bg-white">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=host" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Adam Henry</h4>
                  <p className="text-xs text-gray-500">Joined June 2023</p>
                </div>
              </div>
              <button className="bg-[#A1958F] text-white px-8 py-3 rounded-xl font-bold shadow-md hover:opacity-90 transition">Reserve</button>
            </div>

            <hr className="mb-6" />

            {/* Ratings Summary */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-bold">4.5</span>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} /></div>
                  <span className="text-xs text-gray-500">1,289 Ratings</span>
                </div>
              </div>
              
              {/* Rating Bars */}
              <div className="space-y-2">
                <RatingBar label="5" width="80%" />
                <RatingBar label="4" width="60%" />
                <RatingBar label="3" width="30%" />
              </div>
            </div>

            {/* Mini Reviews List */}
            <div className="mt-8 space-y-6">
              <ReviewSmall name="Lundey Philip" date="Jan 23, 2023" text="Notting Hill looks and feels so cool..." />
              <ReviewSmall name="Gul Hash" date="Feb 12, 2023" text="The best jacket I got this year!" />
              <button className="w-full py-3 border rounded-xl font-bold mt-4 hover:bg-gray-50">View more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const AmenityItem = ({ icon, label }: { icon: any, label: string }) => (
  <div className="flex items-center gap-3 text-gray-700">
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

const RatingBar = ({ label, width }: { label: string, width: string }) => (
  <div className="flex items-center gap-3">
    <span className="text-xs font-bold w-2">{label}</span>
    <div className="flex-1 h-2 bg-gray-100 rounded-full">
      <div className="h-full bg-yellow-400 rounded-full" style={{ width }} />
    </div>
  </div>
);

const ReviewSmall = ({ name, date, text }: { name: string, date: string, text: string }) => (
  <div className="space-y-1">
    <div className="flex justify-between items-center">
      <h5 className="text-sm font-bold">{name}</h5>
      <span className="text-[10px] text-gray-400">{date}</span>
    </div>
    <p className="text-xs text-gray-500 line-clamp-2">{text}</p>
  </div>
);

export default PropertyDetail;