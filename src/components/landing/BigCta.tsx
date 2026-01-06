import { useState } from "react";
import SignupModal from "../SignupModal";
import { motion } from "framer-motion";

const BigCta = () => {
  const [isSignupOpen, setIsSignupOpen] = useState<boolean>(false);

  return (
    <section className="w-full py-[3rem] font-man px-4 md:px-8">
      <div className="max-w-6xl px-4 md:px-8 mx-auto bg-gradient-to-r from-[#B58863] to-[#4F3B2B] rounded-2xl flex relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between bg-[url('/assets/lines.png')] bg-no-repeat bg-center [background-size:150%]">

          <div className="p-4 md:p-11 basis-[50%] h-full flex flex-col justify-between">
            <div className="space-y-3">
              <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                Vibe on Vibed, it is simple - Sign up in 3 seconds, Swipe, Match and Move in.
              </h1>

              {/* Buttons */}
              <div className="flex gap-3 items-center mt-4">
                {/* Sign Up Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black rounded-full px-5 md:px-7 py-3 font-medium"
                  onClick={() => setIsSignupOpen(true)}
                >
                  Sign Up
                </motion.button>

                {/* Download App Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#F4A261] text-black rounded-full px-5 md:px-7 py-3 font-medium"
                >
                  Download App
                </motion.button>
              </div>
            </div>

            <div className="space-y-2 pt-[2rem]">
              <p className="font-medium text-white">Download App</p>
              <div className="flex items-center gap-3">
                <motion.button whileTap={{ scale: 0.95 }}>
                  <img src="/assets/googleplay.png" alt="" className="w-[9rem]" />
                </motion.button>
                <motion.button whileTap={{ scale: 0.95 }}>
                  <img src="/assets/app.svg" alt="" className="w-[9rem]" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="px-8 pt-4 flex items-center">
            <div>
              <img src="/assets/6.png" alt="" />
            </div>
            <img src="/assets/iphone.png" alt="" />
          </div>

        </div>
      </div>

      {/* Modal */}
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
    </section>
  );
};

export default BigCta;
