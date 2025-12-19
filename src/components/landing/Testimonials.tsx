import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const Testimonies = [
    {
      message:
        "“I moved to Dublin for work and didn’t know anyone. Vibed matched me with a roommate who shared my lifestyle and schedule — it honestly made settling in so much easier. We’ve become great friends, and the apartment we found together feels like home.”",
      name: "Carl Rowan",
      occupation: "Moved to Dublin",
      date: "November 27th, 2025",
    },
    {
      message:
        "“Finding a place in Dublin is stressful, but finding the right person to live with is harder. Vibed handled the compatibility part perfectly. My roommate and I have similar morning rhythms which makes sharing a kitchen so much better!”",
      name: "Sarah Jenkins",
      occupation: "Moved to Dublin",
      date: "December 1st, 2025",
    },
    {
      message:
        "“The verified profiles gave me peace of mind. I matched with a professional who also works from home. We respect each other's space and occasionally grab dinner together. It's the best co-living experience I've had.”",
      name: "Liam O'Connor",
      occupation: "Moved to Dublin",
      date: "October 14th, 2025",
    },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15%", // Use percentages for better scaling on different screens
    dots: true,
    arrows: false,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false, // Turn off center mode on mobile to give card full width
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[url('/assets/Map.png')] bg-contain bg-center bg-no-repeat w-full py-16 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
        <h5 className="text-[#F4A261] tracking-[0.2em] font-bold text-sm mb-3">TESTIMONIALS</h5>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          What Our Customers <br className="hidden md:block" /> are Saying
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="max-w-5xl mx-auto testimonial-slider relative">
        {/* Fog overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-20" />
        
        <Slider {...settings}>
          {Testimonies.map((item, index) => (
            <div key={index} className="px-2 md:px-4 outline-none">
              <div className="bg-[#EDE7FF] rounded-[2rem] overflow-hidden shadow-sm flex flex-col h-full min-h-[400px] md:min-h-[450px]">
                
                {/* Message Area */}
                <div className="flex-1 flex items-center justify-center p-8 md:p-14">
                  <p className="text-gray-700 text-center leading-relaxed text-base md:text-xl italic font-medium">
                    {item.message}
                  </p>
                </div>

                {/* Author Footer */}
                <div className="bg-[#E5DBFB]/50 border-t border-purple-100 p-6 md:p-8 text-center">
                  <p className="font-bold text-lg text-gray-900">{item.name}</p>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 mt-1">
                    <p className="text-sm text-primary font-medium">{item.occupation}</p>
                    <span className="hidden md:inline text-gray-300">|</span>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      
    </section>
  );
};

export default Testimonials;