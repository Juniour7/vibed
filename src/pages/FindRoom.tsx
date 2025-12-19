// Components Fin a Room
import Hero from "../components/findroom/Hero"
import ListingSection from "../components/findroom/ListingSection"
import { mockApartments, sections } from '../components/data/mockData'

const FindRoom = () => {
  return (
    <div className="bg-[#fafafa] w-full min-h-screen font-man">
      <Hero />
      <div className="py-[4rem]">
        {sections.map((section) => (
          <ListingSection 
            key={section.id}
            title={section.title}
            filterText={section.filter}
            items={mockApartments} // In a real app, you'd filter by category/section
          />
        ))}
      </div>
    </div>
  )
}

export default FindRoom
