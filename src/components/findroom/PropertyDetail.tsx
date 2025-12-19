import { useParams, useNavigate } from 'react-router-dom';
import { Share, Heart, ChevronLeft, Star } from 'lucide-react';
import { mockApartments } from '../data/mockData';
import { slugify } from '../utils/slugify';
import * as LucideIcons from 'lucide-react';

// Helper to render dynamic icons from the mock data strings
const DynamicIcon = ({ name, size = 20 }: { name: string; size?: number }) => {
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.HelpCircle;
  return <IconComponent size={size} />;
};

const PropertyDetail = () => {
  const { id: titleSlug } = useParams();
  const navigate = useNavigate();
  
  const property = mockApartments.find(
    (apt) => slugify(apt.title) === titleSlug
  );

  if (!property) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Property not found</h1>
        <button onClick={() => navigate('/')} className="mt-4 text-blue-500 underline">
          Go back home
        </button>
      </div>
    );
  }

  return (
    <div className='w-full bg-[#fafafa]'>
        {/* 1. Header & Navigation */}
        <nav className="flex justify-between items-center mb-6 max-w-7xl mx-auto px-4 md:px-8 pt-[9rem]">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-medium hover:underline border py-2 px-5 rounded-md text-[#787878] bg-white">
            <ChevronLeft size={18} /> Back
          </button>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-sm border px-3 py-1.5 rounded-lg hover:bg-gray-50 bg-white">
              <Share size={16} /> Share
            </button>
            <button className="flex items-center gap-2 text-sm border px-3 py-1.5 rounded-lg hover:bg-gray-50 bg-white">
              <Heart size={16} /> Favorite
            </button>
          </div>
        </nav>

        <div className='w-full bg-white'>
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">{property.title}</h1>

                {/* 2. Image Gallery Grid */}
                <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[450px] rounded-3xl overflow-hidden mb-10 group">
                    <div className="col-span-2 row-span-2 overflow-hidden">
                        <img src={property.image} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="Main" />
                    </div>
                    {property.gallery?.map((img, idx) => (
                        <div key={idx} className="overflow-hidden relative">
                            <img src={img} className="w-full h-full object-cover" alt={`Gallery ${idx}`} />
                            {idx === 3 && (
                                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold border border-gray-200">
                                    View more
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* 3. Main Content Layout (2 Columns) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-xl font-bold mb-4">About this place</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                {property.description?.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </section>

                        <hr />

                        <section>
                            <h2 className="text-xl font-bold mb-6">What this place offers</h2>
                            <div className="grid grid-cols-2 gap-y-6">
                                {property.amenities?.map((amenity, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-700">
                                        <DynamicIcon name={amenity.iconName} />
                                        <span className="text-sm">{amenity.name}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-8 border-2 border-black px-6 py-2 rounded-xl font-bold hover:bg-black hover:text-white transition">
                                Show all amenities
                            </button>
                        </section>
          
                        <hr />

                        {/* Map Section */}
                        <section>
                            <h2 className="text-xl font-bold mb-4">Maps for Direction</h2>
                            <div className="w-full h-80 bg-gray-200 rounded-3xl overflow-hidden relative">
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
                                        <img src={property.host.image} alt={property.host.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">{property.host.name}</h4>
                                        <p className="text-xs text-gray-500">Joined {property.host.joinedDate}</p>
                                    </div>
                                </div>
                                <button className="bg-[#A1958F] text-white px-8 py-3 rounded-xl font-bold shadow-md hover:opacity-90 transition">
                                    Reserve
                                </button>
                            </div>

                            <hr className="mb-6" />

                            {/* Ratings Summary */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-5xl font-bold">{property.rating}</span>
                                    <div className="flex flex-col">
                                        <div className="flex text-yellow-500">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={16} fill={i < Math.floor(property.rating) ? "currentColor" : "none"} />
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-500">{property.reviewsCount} Ratings</span>
                                    </div>
                                </div>
                                
                                {/* Rating Bars */}
                                <div className="space-y-2">
                                    <RatingBar label="5" width="80%" />
                                    <RatingBar label="4" width="60%" />
                                    <RatingBar label="3" width="30%" />
                                    <RatingBar label="2" width="10%" />
                                    <RatingBar label="1" width="5%" />
                                </div>
                            </div>

                            {/* Dynamic Reviews List */}
                            <div className="mt-8 space-y-6">
                                {property.reviews?.map((review, i) => (
                                    <ReviewSmall 
                                        key={i}
                                        name={review.name} 
                                        date={review.date} 
                                        text={review.text} 
                                    />
                                ))}
                                <button className="w-full py-3 border rounded-xl font-bold mt-4 hover:bg-gray-50">View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

// Helper Components
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