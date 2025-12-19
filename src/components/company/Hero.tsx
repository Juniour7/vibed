

const Hero = () => {
  return (
    <section className="w-full py-[5rem] bg-[url('/assets/Group.png')] bg-contain bg-center bg-no-repeat">
        <div className="max-w-7xl  mx-auto px-4 md:px-8 space-y-5 flex flex-col items-center justify-center text-center">
            <div className="w-full">
                <img src="/assets/video.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <p className="text-[#787878] md:w-[50%] md:text-lg">Our journey started with a mission to help people find not just roommates, but real connections.</p>
        </div>
    </section>
  )
}

export default Hero
