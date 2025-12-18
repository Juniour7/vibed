

const Pricing = () => {
    const PricingPlans = [
        {
            name: "Our most popular: €24.99 (2 weeks)",
            benefits: [
                "Access hundreds of profiles and make your choice",
                "Unlimited swipes & chats",
                "List your short-term sublet."
            ],
            btn: "Subscribe  €24.99 — 2 Weekly Plan"
        },
        {
            name: "Premium Plan: €59.99 (1 month)",
            benefits: [
                "Browse through verified matches",
                " Access the database of all the rentals in Ireland so you don't have to scroll through many platforms. Just tell us what you're looking for.",
                "Short-listed homes based on your and your housemates' preferences.",
                "List your sublet and choose the kind of profiles it is shown to."
            ],
            btn: "Get 1-Month Access — €59.99"
        },
    ]

  return (
    <section className="w-full bg-[url('/assets/lines.png')] bg-contain bg-no-repeat  py-[3rem] font-man">
        <div className="w-[90%] mx-auto space-y-7">
            <div className="text-center space-y-3">
                <h5 className="text-[#F4A261]">PRICING</h5>
                <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl font-semibold">💸 Simple Plan for Every Need</h1>
                <p className="font-medium lg:w-[60%] mx-auto">Whether you’re just exploring or want to get matched faster, there’s a plan that fits your lifestyle.</p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-center md:w-[70%] mx-auto">
                {PricingPlans.map((plan, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl md:text-2xl font-bold mb-4 font-sans">{plan.name}</h2>
                        <ul className="mb-4 space-y-2 text-[#2B2B2B]">
                            {plan.benefits.map((benefit, i) => (
                                <li key={i} className="flex gap-1 items-start text-sm">
                                    <div className="flex flex-col justify-center p-1 bg-[#EAEAEC] rounded-full"><i className="fa-solid fa-check"></i></div>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full bg-[#B58863] text-white py-2 rounded-md hover:bg-[#e79a5a] transition duration-300">
                            {plan.btn}
                        </button>
                    </div>
                ))}
            </div>

            {/* Free Plan */}
            <div className="text-center pt-[1rem]">
                <h2 className="text-xl md:text-2xl font-bold mb-4 font-sans">Free Plan</h2>
                <p className="text-[#2B2B2B]">3 free swipes — Create a profile, Swift up to 3 profiles, match with roommates.</p>
                <h6 className="text-lg text-[#3C4A4D] font-medium">👉 All plans include safe messaging, verified badges, and 24/7 support.</h6>
                <button
                    className="bg-[#A79E9C] rounded-lg text-white font-medium px-7 py-3 text-lg mt-[1rem]"
                >
                    Start free and Upgrade anytime
                </button>
            </div>
        </div>
    </section>
  )
}

export default Pricing
