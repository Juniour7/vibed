import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Select from "./ui/Select";

type SignupModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const countries = [
  { label: "Ireland", value: "ireland" },
  { label: "Moving Soon", value: "moving-soon" },
];

const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative z-10 w-[90%] max-w-md bg-white rounded-2xl p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Content */}
            <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>
            <p className="text-gray-600 mb-3">
              Join Vibed and start matching in seconds.
            </p>

            <form className="space-y-3">
              <div className="space-y-1">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  className="w-full border outline-none focus:outline-[#f4a261] rounded-md p-2"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="support@vibedapp.com"
                  required
                  className="w-full border outline-none focus:outline-[#f4a261] rounded-md p-2"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="">Current Location</label>
                <Select
                  options={countries}
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                  placeholder="Choose a country"
                />
              </div>

              {/* Animated Sign Up Button */}
              <motion.button
                type="submit"
                className="w-full bg-[#f4a261] text-black font-semibold py-3 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Sign Up Now
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignupModal;
