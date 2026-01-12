import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Shield, Sparkles, User } from "lucide-react";
import { fadeUp, cardVariant, container, waterWiggle } from "../animations";
import SignupModal from "../SignupModal";

const Pricing = () => {
  const [isSignupOpen, setIsSignupOpen] = useState<boolean>(false);

  return (
    <section className="relative w-full py-24 bg-[url('/assets/lines.png')] bg-contain bg-no-repeat overflow-hidden font-man">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none bg-[url('/assets/lines.png')] bg-contain bg-no-repeat" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <h5 className="text-[#F4A261] font-bold tracking-widest uppercase text-sm mb-3">
            Peace of Mind
          </h5>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 ">
            Investment in your Peace of Mind
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Think of this as your housing insurance. For less than the cost of a takeout dinner, 
            secure a safe, verified, and curated housing experience.
          </p>
        </motion.div>

        {/* Plans Container */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 lg:items-stretch"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* 1. FREE PLAN (Side Anchor) */}
          <motion.div 
            className="w-full max-w-md lg:w-1/3 order-2 lg:order-1"
            variants={cardVariant}
          >
            <div className="h-full bg-white border border-gray-100 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-6 h-6 text-gray-400" />
                  <h3 className="text-xl font-bold text-gray-600">Starter</h3>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Free</span>
                  <span className="text-gray-500 ml-2">/ forever</span>
                </div>
                <p className="text-gray-500 mb-8 border-b border-gray-100 pb-8">
                  Just exploring? Perfect for browsing matches and creating your profile.
                </p>
                <ul className="space-y-4">
                  {[
                    "Create your profile",
                    "Browse roommate matches",
                    "Access 24/7 Support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                      <Check className="w-5 h-5 text-gray-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.button
                className="w-full mt-8 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors"
                variants={waterWiggle}
                whileTap="tap"
                whileHover="hover"
                onClick={() => setIsSignupOpen(true)}
              >
                Start for Free
              </motion.button>
            </div>
          </motion.div>

          {/* 2. VIP PLAN (Hero Card) */}
          <motion.div 
            className="w-full max-w-md lg:w-5/12 order-1 lg:order-2 relative"
            variants={cardVariant}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Best Value Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B58863] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg z-20">
              Recommended Choice
            </div>

            <div className="h-full bg-white rounded-2xl p-1 relative z-10 shadow-2xl">
              {/* Inner Border Gradient */}
              <div className="h-full bg-gradient-to-b from-[#FDF8F4] to-white rounded-xl p-8 border border-[#F4A261]/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-[#F4A261]/20 rounded-lg">
                        <Shield className="w-6 h-6 text-[#F4A261]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#B58863]">Peace-of-Mind VIP</h3>
                    </div>
                  </div>

                  <div className="mb-6 flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">€19.99</span>
                    <span className="text-gray-500 font-medium ml-2">/ month</span>
                  </div>

                  <p className="text-gray-600 mb-8 font-medium">
                    Complete concierge support. Don't scroll endlessly—let us handle the search for you.
                  </p>

                  <ul className="space-y-5 mb-8">
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="mt-0.5 p-0.5 bg-[#F4A261] rounded-full text-white">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm font-semibold">Complete Concierge Support</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="mt-0.5 p-0.5 bg-[#F4A261] rounded-full text-white">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm">Access to a <span className="font-semibold text-[#B58863]">curated database</span> of rentals (no more platform hopping).</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <div className="mt-0.5 p-0.5 bg-[#F4A261] rounded-full text-white">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <span className="text-sm">
                         Susan <span className="font-semibold text-[#B58863]">personally shortlists homes</span> based on your exact vibe & preferences.
                      </span>
                    </li>
                  </ul>
                </div>

                <motion.button
                  className="w-full py-4 rounded-xl bg-[#B58863] text-white text-lg font-bold shadow-[0_4px_14px_0_rgba(181,136,99,0.39)] hover:shadow-[0_6px_20px_rgba(181,136,99,0.23)] hover:bg-[#a67c5a] transition duration-300"
                  variants={waterWiggle}
                  whileTap="tap"
                  whileHover="hover"
                  onClick={() => setIsSignupOpen(true)}
                >
                  Get VIP Access
                </motion.button>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Trust Footer */}
        <motion.div
          className="text-center mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-2 text-[#3C4A4D] font-medium">
            <Shield className="w-4 h-4" />
            <span>100% Secure & Verified Process</span>
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">
            All plans include safe messaging & verified badges
          </p>
        </motion.div>

      </div>

      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
    </section>
  );
};

export default Pricing;