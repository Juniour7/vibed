export interface Apartment {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

export const sections = [
  { id: 1, title: "Available Near you", filter: "4 Bedrooms" },
  { id: 2, title: "Newly Added apartments", filter: "All" },
  { id: 3, title: "Available Next month", filter: "3 Bedrooms" },
];

export const mockApartments: Apartment[] = [
  {
    id: "1",
    title: "Modern Studio Loft",
    location: "Dublin, Ireland",
    price: "€1,200",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400",
    category: "Available Near you"
  },
  // Duplicate or add more unique objects here...
  {
    id: "2",
    title: "Ensuite Room in City",
    location: "Cork, Ireland",
    price: "€850",
    rating: 4.5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400",
    category: "Available Near you"
  },
];