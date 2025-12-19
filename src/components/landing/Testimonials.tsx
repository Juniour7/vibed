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
        "“I moved to Dublin for work and didn’t know anyone. Vibed matched me with a roommate who shared my lifestyle and schedule — it honestly made settling in so much easier. We’ve become great friends, and the apartment we found together feels like home.”",
      name: "Carl ",
      occupation: "Moved to Dublin",
      date: "November 27th, 2025",
    },
    {
      message:
        "“I moved to Dublin for work and didn’t know anyone. Vibed matched me with a roommate who shared my lifestyle and schedule — it honestly made settling in so much easier. We’ve become great friends, and the apartment we found together feels like home.”",
      name: " Rowan",
      occupation: "Moved to Dublin",
      date: "November 27th, 2025",
    },
  ];

 const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "120px", // 👈 controls how much side cards show
  dots: true,
  arrows: false,
  pauseOnHover: false,
  cssEase: "ease-in-out",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerPadding: "80px",
      },
    },
    {
      breakpoint: 768, // 👈 MOBILE
      settings: {
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
  ],
};



  return (
    <section className="bg-[url('/assets/Map.png')] bg-contain bg-center bg-no-repeat w-full py-16 font-man">
      {/* Header */}
      <div className="space-y-3 text-center mb-14">
        <h5 className="text-[#F4A261] tracking-wider">TESTIMONIALS</h5>
        <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl font-semibold">
          What Our Customers are Saying
        </h1>
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {Testimonies.map((item, index) => (
            <div key={index} className="px-3">
              <div className="bg-[#EDE7FF] rounded-2xl overflow-hidden shadow-md min-h-[260px] flex flex-col justify-between">
                <div className="py-[4rem] p-8">
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {item.message}
                </p>
                </div>

                <div className="mt-6 border-t bg-[#E5DBFB] border-purple-200 p-4  flex justify-center">
                  <div className="tex">
                    <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.occupation}</p>
                  <p className="text-sm text-gray-400">{item.date}</p>
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
