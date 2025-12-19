// Company Components
import Hero from "../components/company/Hero"
import OurStory from "../components/company/OurStory"
import OurVision from "../components/company/OurVision"
import CompanyHistory from "../components/company/CompanyHistory"

const AboutUs = () => {
  return (
    <div className="bg-[#fafafa] w-full min-h-screen font-man">
      <Hero />
      <OurStory />
      <OurVision />
      <CompanyHistory />
    </div>
  )
}

export default AboutUs
