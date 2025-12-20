// Benefits component components
import FindHousemates from "./FindHousemates"

const Benefits = () => {
    const OurBenefits = [
        {
            title: "Vibers like You",
            description: "We know how important it is to come home to a vibe you love and appreciate. We have hundreds of Vibers looking for something similar to you."
        },
        {
            title: "Hussle-free",
            description: "Swiped through different profiles or enter your ideal location and housemate description and Susan will suggest a few profiles for you to look through."
        }
    ]

  return (
    <section className="w-full py-[3rem] font-man ">
        <div className="max-w-7xl  mx-auto px-4 md:px-8 bg-[url('/assets/Map.png')] bg-contain bg-center bg-no-repeat flex flex-col justify-center items-center text-center">
            <div className="space-y-3">
                <h5 className="text-[#F4A261]">OUR BENEFITS</h5>
                <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl font-semibold">Why are we the Ireland's most innovative <br /> housemate matching platform?</h1>
                <p className="font-medium lg:w-[60%] mx-auto"><span className="text-[#F4A261]">Susan, our Trusted AI</span> like your cool aunt who knows what is important to you, you can tell Susan who you are, what you are looking for, etc and she'll do her matching.</p>
            </div>
            <div className="md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {OurBenefits.map((benefit) => (
                    <div key={benefit.title} className="bg-white bg-opacity-70 p-6 rounded-lg shadow-md border-b-4 border-b-[#A79E9C]">
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-[#3C4A4D] font-medium">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
        <FindHousemates />
    </section>
  )
}

export default Benefits
