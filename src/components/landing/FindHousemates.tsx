import { MessageSquareText, UserRound, UserStar } from "lucide-react";

const FindHousemates = () => {
  const steps = [
    {
      image: "/assets/vibed-1.png",
      title: "Create account",
      icon: UserRound,
      description:
        "Set up your profile with your interests, lifestyle preferences, budget, and location.",
    },
    {
      image: "/assets/vibed-2.jpg",
      title: "Swipe & match",
      icon: UserStar,
      description:
        "Discover roommates who fit your lifestyle and personality.",
    },
    {
      image: "/assets/vibed-3.png",
      title: "Chat",
      icon: MessageSquareText,
      description:
        "Get to know your future housemate on the platform.",
    },
    {
      image: "/assets/vibed-4.jpg",
      title: "Move in",
      icon: MessageSquareText,
      description:
        "Found your match? Start finding the perfect place together.",
    },
  ];

  return (
    <section className="relative max-w-7xl  mx-auto px-4 md:px-8 py-20">
      {/* Header */}
      <div className="text-center space-y-2 mb-20">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Find your ideal Housemates
        </h1>
        <p className="text-gray-600">
          In 4 easy steps, connect with trusted individuals that fit your Vibe.
        </p>
      </div>

      {/* Curved dotted connectors (desktop only) */}
      <svg
        className="absolute top-44 left-1/2 -translate-x-1/2 w-full max-w-5xl hidden md:block pointer-events-none"
        height="900"
        viewBox="0 0 800 900"
        fill="none"
      >
        <path
          d="M100 50 C 400 50, 400 250, 700 250"
          stroke="#F4A261"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        <path
          d="M700 300 C 400 300, 400 500, 100 500"
          stroke="#F4A261"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        <path
          d="M100 550 C 400 550, 400 750, 700 750"
          stroke="#F4A261"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
      </svg>

      {/* Steps */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-28 gap-x-20">
        {steps.map((step, index) => {
          const isRight = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`relative flex flex-col ${isRight ? "md:translate-y-20" : ""}`}
            >
              {/* Step number */}
              <div className="absolute -top-10 left-0 w-9 h-9 rounded-full bg-[#F4A261]/20 text-[#F4A261] flex items-center justify-center font-semibold">
                {index + 1}
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="w-full h-[260px] object-cover"
                />
              </div>

              {/* Text */}
              <div className="mt-4 max-w-sm">
                <div className="flex items-center gap-1">
                    <span className="text-[#F4A261]"><step.icon className="text-[#F4A261] w-5 h-5" /></span>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                </div>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FindHousemates;