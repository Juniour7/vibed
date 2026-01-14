// Landing Components
import Hero from "../components/landing/Hero"
import Moving from "../components/landing/Moving"
import FindHousemates from "../components/landing/FindHousemates"
import Benefits from "../components/landing/Benefits"
import Pricing from "../components/landing/Pricing"
import Testimonials from "../components/landing/Testimonials"
import Faq from "../components/landing/Faq"
import BigCta from "../components/landing/BigCta"

const Landing = () => {
  return (
    <div>
      <Hero />
      <Moving />
      <FindHousemates />
      <Benefits />
      <Pricing />
      <Testimonials />
      <Faq />
      <BigCta />
    </div>
  )
}

export default Landing
