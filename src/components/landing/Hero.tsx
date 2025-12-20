import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Hero = () => {
  const [phone, setPhone] = useState<string | undefined>();

  return (
    <section className="w-full bg-[url('/assets/hero.png')] bg-fixed bg-cover bg-center h-screen">
      <div className="w-full h-full bg-black/70 flex flex-col justify-center items-center">
        <div className="text-center text-white px-4 space-y-6 w-full">

          {/* Headings */}
          <div className="space-y-2 lg:w-[70%] mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">
              Live with People Who Match Your Lifestyle{" "}
              <span className="text-[#F4A261]">and Vibe</span>
            </h1>
            <p className="text-lg md:text-xl">
              Welcome to Vibed – The Most Innovative Housemates matching App in Ireland
            </p>
          </div>

          {/* Phone Input */}
          <div className="flex flex-col justify-center space-y-2 w-full">
            <div className="flex items-center bg-white rounded-full px-3 py-2 justify-center w-full md:max-w-md mx-auto shadow-lg gap-2">

              <PhoneInput
                value={phone}
                onChange={setPhone}
                placeholder="Enter phone number"
                defaultCountry="CI"
                required
                international
                className={`
                  group flex items-center w-full px-2 bg-white text-dark
                  [&_.PhoneInputCountrySelect]:pr-2 [&_.PhoneInputCountrySelect]:pl-3
                  [&_.PhoneInputCountrySelect]:border-r [&_.PhoneInputCountrySelect]:border-black/50
                  [&_.PhoneInputCountryIcon]:w-7 [&_.PhoneInputCountryIcon]:h-5
                  [&_.PhoneInputCountryIcon]:rounded-sm
                  [&_.PhoneInputCountrySelectArrow]:opacity-60 [&_.PhoneInputCountrySelectArrow]:ml-2
                  [&_.PhoneInputInput]:border-none [&_.PhoneInputInput]:bg-transparent
                  [&_.PhoneInputInput]:flex-grow [&_.PhoneInputInput]:py-3
                  [&_.PhoneInputInput]:pl-3 [&_.PhoneInputInput]:text-base
                  [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:placeholder:text-gray-600
                `}
              />

              <button type="submit" className="bg-[#F4A261] text-black px-6 py-2 rounded-full font-medium whitespace-nowrap hidden md:block">
                Get Started
              </button>

            </div>

            <button type="submit" className="bg-[#F4A261] text-black px-6 py-5 rounded-full font-medium whitespace-nowrap md:hidden">
                Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
