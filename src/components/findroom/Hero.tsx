import { SlidersHorizontal } from "lucide-react"


const Hero = () => {
  return (
    <section className="w-full font-man bg-[url('/assets/Group.png')] bg-contain bg-top bg-no-repeat pt-[8rem]">
        <div className="max-w-7xl  mx-auto px-4 md:px-8 text-center flex flex-col justify-center items-center">
            <div className="lg:w-[60%] mx-auto">
                <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl font-semibold">Find Your Perfect Room and the Right Vibe to Match</h1>
                <p className="text-[#787878] font-medium">Browse verified apartments and roommate listings that fit your lifestyle, budget, and personality. Your next home — and your next great connection starts here.</p>
            </div>

            {/* Search and Filters */}
            <div className="lg:w-[50%] mx-auto text-left mt-[4rem] space-y-2">
                <h4 className="text-[#2C2C2C] font-medium">Filter your search By:</h4>
                <div className="bg-white rounded-full border border-[#CACACA] px- py-3 grid grid-cols-3 divide-x-2 divide-[#CACACA] md:text-lg font-medium">
                    <button>
                        Location
                    </button>

                    <button
                        className="px-2"
                    >
                        Room near you
                    </button>

                    <div className="flex justify-between items- px-2 ">
                        <button
                        >
                            Bedrooms
                        </button>

                        <button>
                            <span>
                                <SlidersHorizontal />
                            </span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
