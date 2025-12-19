// Components Fin a Room
import Hero from "../components/findroom/Hero"
import ListingSection from "../components/findroom/ListingSection"
import { mockApartments, sections } from '../components/data/mockData'
import { useState } from "react";

const FindRoom = () => {
  const [filteredData, setFilteredData] = useState(mockApartments);
   const handleSearch = (filters: any) => {
    const results = mockApartments.filter(apt => {
      const matchLoc = filters.location === "Location" || apt.location.includes(filters.location);
      const matchCat = filters.category === "Room type" || apt.propertyType.includes(filters.category);
      // Logic for bedroom strings vs numbers
      const matchBed = filters.bedrooms === "Bedrooms" || apt.details.beds >= parseInt(filters.bedrooms);
      
      return matchLoc && matchCat && matchBed;
    });
    
    setFilteredData(results);
  };
  return (
    <div className="bg-[#fafafa] w-full min-h-screen font-man">
      <Hero onSearch={handleSearch} />
      <div className="py-[4rem]">
        {sections.map((section) => (
          <ListingSection 
            key={section.id}
            title={section.title}
            filterText={section.filter}
            items={filteredData} // In a real app, you'd filter by category/section
          />
        ))}
      </div>
    </div>
  )
}

export default FindRoom
