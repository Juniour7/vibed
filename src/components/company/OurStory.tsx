

const OurStory = () => {
    const successStats = [
        { label: "Countries", value: "45" },
        { label: "Patners", value: "345" },
        { label: "Average start review", value: "+1,000" },
    ];
  return (
    <section className="w-full ">
        <div className="max-w-7xl  mx-auto px-4 md:px-8">
            <div className="space-y-3">
                <h1 className="font-semibold text-2xl ">🌍 Our Story — Where the Right <br /> Vibe Becomes Home</h1>
                <p className=" text-[#787878]">Finding the right roommate shouldn’t feel like a gamble. Vibed was born from real experiences of mismatched living situations and the need for genuine connection. We set out to build a platform that makes shared living simple, safe, and human — helping you find not just a roommate, but someone who truly fits your vibe.</p>
            </div>

            <div className="mt-[4rem] w-full relative">
                <div className="bg-gradient-to-r from-[#4F3B2B] to-[#B58863] p-4 md:p-11 -skew-y-1 relative">
                    {/* Shape Mockups */}
                    <div className="bg-[#A79E9C] w-14 h-14 rounded-md bg-opacity-50 absolute -left-6 bottom-4 hidden md:block" />

                    <div className="skew-y-1">
                        <div className="space-y-2">
                            <h4 className="text-white text-xl"><span className="font-semibold">Our Success</span> Numbers</h4>
                            <div className="bg-[#4F3B2B] bg-opacity-50 p-2 md:p-6 rounded-md  relative">
                                <div className="absolute -bottom-4 -right-4 bg-[#F8F4AA] bg-opacity-50 w-14 h-14 rounded-md hidden md:block" />

                                <div className="grid grid-cols-3 divide-x-2 divide-white">
                                    {successStats.map((stat,index) => (
                                    <div
                                        key={index}
                                        className="px-4 flex flex-col justify-center items-center space-y-2 md:space-y-4"
                                    >
                                        <h2 className="text-white text-2xl md:text-5xl font-bold font-riot">{stat.value}</h2>
                                        <p className="text-white">{stat.label}</p>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurStory
