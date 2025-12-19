export interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar?: string;
}

export interface Amenity {
  name: string;
  iconName: string;
}

export interface Apartment {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  description: string[];
  propertyType: string;
  details: {
    beds: number;
    baths: number;
    guests: number;
  };
  amenities: Amenity[];
  host: {
    name: string;
    image: string;
    joinedDate: string;
    bio: string;
  };
  reviews: Review[];
}

// Common Amenities for reuse
const standardAmenities: Amenity[] = [
  { name: "High-speed Wifi", iconName: "Wifi" },
  { name: "Dedicated workspace", iconName: "Monitor" },
  { name: "City skyline view", iconName: "MapPin" },
  { name: "Air conditioning", iconName: "Wind" },
  { name: "Coffee maker", iconName: "Coffee" },
  { name: "Self check-in", iconName: "ShieldCheck" }
];

const sharedReviews: Review[] = [
  { name: "Sarah J.", date: "Oct 12, 2024", rating: 5, text: "Absolutely stunning place! The host was super helpful." },
  { name: "Mark T.", date: "Nov 05, 2024", rating: 4, text: "Great location, slightly noisy on weekends but worth it." }
];

export const mockApartments: Apartment[] = [
  {
    id: "1",
    title: "Light room on Portobello Road, Notting Hill",
    location: "Notting Hill, London",
    price: "€1,200",
    rating: 4.8,
    reviewsCount: 1289,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=500",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500"
    ],
    propertyType: "1-Bedroom Apartment",
    details: { beds: 1, baths: 1, guests: 2 },
    description: ["This loft is at the heart of Portobello Road. Perfect for artists and travelers."],
    amenities: standardAmenities,
    host: { name: "Adam Henry", image: "https://i.pravatar.cc/150?u=adam", joinedDate: "June 2023", bio: "London lover." },
    reviews: sharedReviews
  },
  {
    id: "2",
    title: "Modern Penthouse in Dublin 2",
    location: "Grand Canal, Dublin",
    price: "€2,500",
    rating: 4.9,
    reviewsCount: 450,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=500",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500",
      "https://images.unsplash.com/photo-1522771739844-649f6d1712af?q=80&w=500",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500"
    ],
    propertyType: "Luxury Penthouse",
    details: { beds: 2, baths: 2, guests: 4 },
    description: ["A sleek penthouse with floor-to-ceiling windows overlooking the Liffey."],
    amenities: [...standardAmenities, { name: "Private Gym", iconName: "Dumbbell" }],
    host: { name: "Claire Roche", image: "https://i.pravatar.cc/150?u=claire", joinedDate: "Jan 2022", bio: "Property manager." },
    reviews: sharedReviews
  },
  {
    id: "3",
    title: "Cozy Studio in Temple Bar",
    location: "Temple Bar, Dublin",
    price: "€950",
    rating: 4.2,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500"],
    propertyType: "Studio",
    details: { beds: 1, baths: 1, guests: 1 },
    description: ["Small but perfectly formed. Right in the middle of the action."],
    amenities: standardAmenities,
    host: { name: "Liam O'Connor", image: "https://i.pravatar.cc/150?u=liam", joinedDate: "March 2024", bio: "Musician." },
    reviews: sharedReviews
  },
  {
    id: "4",
    title: "Chic Loft in Shoreditch",
    location: "East London, UK",
    price: "€1,800",
    rating: 4.7,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500"],
    propertyType: "Loft",
    details: { beds: 1, baths: 1, guests: 2 },
    description: ["Exposed brick and high ceilings in London's coolest neighborhood."],
    amenities: standardAmenities,
    host: { name: "Sophie Wright", image: "https://i.pravatar.cc/150?u=sophie", joinedDate: "July 2021", bio: "Designer." },
    reviews: sharedReviews
  },
  {
    id: "5",
    title: "Garden Apartment in Cork",
    location: "Montenotte, Cork",
    price: "€1,100",
    rating: 4.6,
    reviewsCount: 156,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500"],
    propertyType: "Garden Flat",
    details: { beds: 2, baths: 1, guests: 3 },
    description: ["Quiet, leafy surroundings with a private patio area."],
    amenities: [...standardAmenities, { name: "Private Garden", iconName: "Flower" }],
    host: { name: "David Murphy", image: "https://i.pravatar.cc/150?u=david", joinedDate: "Feb 2023", bio: "Retired teacher." },
    reviews: sharedReviews
  },
  {
    id: "6",
    title: "Riverside View in Galway City",
    location: "The Claddagh, Galway",
    price: "€1,350",
    rating: 4.9,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500"],
    propertyType: "Apartment",
    details: { beds: 1, baths: 1, guests: 2 },
    description: ["Watch the swans from your balcony in the heart of Galway."],
    amenities: standardAmenities,
    host: { name: "Siobhan Burke", image: "https://i.pravatar.cc/150?u=siobhan", joinedDate: "May 2022", bio: "Galway native." },
    reviews: sharedReviews
  },
  {
    id: "7",
    title: "Bachelor Pad in Belfast",
    location: "Cathedral Quarter, Belfast",
    price: "€800",
    rating: 4.3,
    reviewsCount: 42,
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500"],
    propertyType: "Studio",
    details: { beds: 1, baths: 1, guests: 1 },
    description: ["Minimalist living for the busy professional."],
    amenities: standardAmenities,
    host: { name: "James Miller", image: "https://i.pravatar.cc/150?u=james", joinedDate: "Nov 2023", bio: "Tech entrepreneur." },
    reviews: sharedReviews
  },
  {
    id: "8",
    title: "Townhouse in Rathmines",
    location: "Rathmines, Dublin 6",
    price: "€1,950",
    rating: 4.8,
    reviewsCount: 120,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500"],
    propertyType: "Townhouse",
    details: { beds: 3, baths: 2, guests: 5 },
    description: ["Spacious Victorian townhouse with modern interior."],
    amenities: standardAmenities,
    host: { name: "Emma Walsh", image: "https://i.pravatar.cc/150?u=emma", joinedDate: "Aug 2021", bio: "Chef." },
    reviews: sharedReviews
  },
  {
    id: "9",
    title: "Luxury Suite at The Shard",
    location: "Southwark, London",
    price: "€4,500",
    rating: 5.0,
    reviewsCount: 15,
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500"],
    propertyType: "Hotel Suite",
    details: { beds: 1, baths: 1, guests: 2 },
    description: ["Highest living in Western Europe. Unmatched views."],
    amenities: [...standardAmenities, { name: "Concierge", iconName: "User" }],
    host: { name: "Marcus Von", image: "https://i.pravatar.cc/150?u=marcus", joinedDate: "Dec 2020", bio: "Hospitality expert." },
    reviews: sharedReviews
  },
  {
    id: "10",
    title: "Artsy Flat in Camden Town",
    location: "Camden, London",
    price: "€1,650",
    rating: 4.5,
    reviewsCount: 340,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500"],
    propertyType: "Flat",
    details: { beds: 1, baths: 1, guests: 2 },
    description: ["Eclectic decor in the heart of London's music scene."],
    amenities: standardAmenities,
    host: { name: "Chloe Banks", image: "https://i.pravatar.cc/150?u=chloe", joinedDate: "May 2023", bio: "Painter." },
    reviews: sharedReviews
  },
  // Adding more unique IDs up to 22
  {
    id: "11",
    title: "Quiet Room in Dublin 8",
    location: "The Liberties, Dublin",
    price: "€750",
    rating: 4.1,
    reviewsCount: 29,
    image: "https://images.unsplash.com/photo-1522771739844-649f6d1712af?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=500", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500"],
    propertyType: "Shared Apartment",
    details: { beds: 1, baths: 1, guests: 1 },
    description: ["Budget-friendly room in a friendly shared house."],
    amenities: standardAmenities,
    host: { name: "Paul Kelly", image: "https://i.pravatar.cc/150?u=paul", joinedDate: "Jan 2024", bio: "Student." },
    reviews: sharedReviews
  },
  {
    id: "12",
    title: "Converted Chapel in Chelsea",
    location: "Chelsea, London",
    price: "€3,200",
    rating: 4.9,
    reviewsCount: 67,
    image: "https://images.unsplash.com/photo-1512918766775-d24dbb6b0267?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500"],
    propertyType: "Unique Home",
    details: { beds: 2, baths: 2, guests: 4 },
    description: ["Stunning conversion with original features and luxury finish."],
    amenities: standardAmenities,
    host: { name: "Lord Julian", image: "https://i.pravatar.cc/150?u=julian", joinedDate: "Sept 2019", bio: "History buff." },
    reviews: sharedReviews
  },
  {
    id: "13",
    title: "Seafront House in Salthill",
    location: "Galway Bay",
    price: "€1,850",
    rating: 4.8,
    reviewsCount: 195,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500"],
    propertyType: "Detached House",
    details: { beds: 4, baths: 3, guests: 8 },
    description: ["Family home with incredible views of the Atlantic."],
    amenities: standardAmenities,
    host: { name: "Mary Flaherty", image: "https://i.pravatar.cc/150?u=mary", joinedDate: "June 2021", bio: "Surf instructor." },
    reviews: sharedReviews
  },
  {
    id: "14",
    title: "Modern Apartment in Canary Wharf",
    location: "Canary Wharf, London",
    price: "€2,100",
    rating: 4.6,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1493246318656-5bbd4cfbde94?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500"],
    propertyType: "Apartment",
    details: { beds: 2, baths: 2, guests: 3 },
    description: ["High-rise living for the corporate professional."],
    amenities: standardAmenities,
    host: { name: "Alan Smith", image: "https://i.pravatar.cc/150?u=alan", joinedDate: "Feb 2022", bio: "Banker." },
    reviews: sharedReviews
  },
  {
    id: "15",
    title: "Cottage in the Wicklow Mountains",
    location: "Glendalough, Ireland",
    price: "€1,200",
    rating: 4.9,
    reviewsCount: 520,
    image: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500"],
    propertyType: "Cottage",
    details: { beds: 2, baths: 1, guests: 4 },
    description: ["Escape to the mountains. Wood-burning stove and peace."],
    amenities: [...standardAmenities, { name: "Fireplace", iconName: "Flame" }],
    host: { name: "Finn Brennan", image: "https://i.pravatar.cc/150?u=finn", joinedDate: "July 2020", bio: "Outdoor enthusiast." },
    reviews: sharedReviews
  },
  {
    id: "16",
    title: "Bright Flat in Ballsbridge",
    location: "Dublin 4",
    price: "€2,200",
    rating: 4.7,
    reviewsCount: 74,
    image: "https://images.unsplash.com/photo-1494203484021-3c454daf695d?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500"],
    propertyType: "Apartment",
    details: { beds: 2, baths: 2, guests: 4 },
    description: ["Prime location near the embassy belt and RDS."],
    amenities: standardAmenities,
    host: { name: "Julia Hayes", image: "https://i.pravatar.cc/150?u=julia", joinedDate: "Oct 2022", bio: "Corporate lawyer." },
    reviews: sharedReviews
  },
  {
    id: "17",
    title: "Student Studio in Kensington",
    location: "South Kensington, London",
    price: "€1,400",
    rating: 4.0,
    reviewsCount: 18,
    image: "https://images.unsplash.com/photo-1512918583167-2739d79a06df?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500"],
    propertyType: "Studio",
    details: { beds: 1, baths: 1, guests: 1 },
    description: ["Small studio in a beautiful area, perfect for Imperial College students."],
    amenities: standardAmenities,
    host: { name: "Dr. Peter", image: "https://i.pravatar.cc/150?u=peter", joinedDate: "Jan 2023", bio: "Professor." },
    reviews: sharedReviews
  },
  {
    id: "18",
    title: "Penthouse in Cork City",
    location: "City Centre, Cork",
    price: "€1,900",
    rating: 4.8,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500"],
    propertyType: "Penthouse",
    details: { beds: 3, baths: 3, guests: 6 },
    description: ["Top floor luxury with wrap-around terrace."],
    amenities: standardAmenities,
    host: { name: "Ryan Crowley", image: "https://i.pravatar.cc/150?u=ryan", joinedDate: "May 2021", bio: "Entrepreneur." },
    reviews: sharedReviews
  },
  {
    id: "19",
    title: "Shared House in Limerick",
    location: "Castletroy, Limerick",
    price: "€650",
    rating: 4.2,
    reviewsCount: 35,
    image: "https://images.unsplash.com/photo-1560185893-a55caf0a5289?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500"],
    propertyType: "Room",
    details: { beds: 1, baths: 1, guests: 1 },
    description: ["Clean room near the University of Limerick."],
    amenities: standardAmenities,
    host: { name: "Tom Hogan", image: "https://i.pravatar.cc/150?u=tom", joinedDate: "Aug 2023", bio: "Landlord." },
    reviews: sharedReviews
  },
  {
    id: "20",
    title: "Loft near Trinity College",
    location: "Dublin 2",
    price: "€1,450",
    rating: 4.6,
    reviewsCount: 205,
    image: "https://images.unsplash.com/photo-1536376074432-bf121770998a?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500"],
    propertyType: "Loft Apartment",
    details: { beds: 1, baths: 1, guests: 2 },
    description: ["Historic building with modern industrial design."],
    amenities: standardAmenities,
    host: { name: "Sarah Lynch", image: "https://i.pravatar.cc/150?u=sarah", joinedDate: "Nov 2022", bio: "Artist." },
    reviews: sharedReviews
  },
  {
    id: "21",
    title: "Family Home in Blackrock",
    location: "South Dublin",
    price: "€3,000",
    rating: 4.9,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1512915922686-57c11ff9b6b9?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500"],
    propertyType: "Suburban Home",
    details: { beds: 4, baths: 3, guests: 8 },
    description: ["Safe and leafy suburban home near top schools."],
    amenities: standardAmenities,
    host: { name: "Peter Graham", image: "https://i.pravatar.cc/150?u=graham", joinedDate: "Jan 2021", bio: "Tech lead." },
    reviews: sharedReviews
  },
  {
    id: "22",
    title: "Modern Studio in Westminster",
    location: "Westminster, London",
    price: "€1,950",
    rating: 4.5,
    reviewsCount: 180,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800",
    gallery: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=500", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500"],
    propertyType: "Studio Flat",
    details: { beds: 1, baths: 1, guests: 2 },
    description: ["Steps away from Parliament and the Big Ben."],
    amenities: standardAmenities,
    host: { name: "Catherine D.", image: "https://i.pravatar.cc/150?u=cath", joinedDate: "Dec 2023", bio: "London expert." },
    reviews: sharedReviews
  }
];

export const sections = [
  { id: 1, title: "Available Near you", filter: "All" },
  { id: 2, title: "Newly Added apartments", filter: "Recent" },
  { id: 3, title: "Available Next month", filter: "3 Bedrooms" },
  { id: 4, title: "Most searched cities in Ireland", filter: "Popular" },
  { id: 5, title: "Available within Dublin", filter: "Location" },
  { id: 6, title: "Only students Area", filter: "Category" }
];