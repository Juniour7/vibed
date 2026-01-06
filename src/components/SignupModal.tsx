import { useState } from "react";
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
    if (!isOpen) return null;
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-[90%] max-w-md bg-white rounded-2xl p-6">
        {/* Close */}
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

        <div className="py-3">
            <form className="space-y-3">
                <div className="space-y-1">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="Your full name" required className="w-full border outline-none focus:outline-[#f4a261] rounded-md p-2" />
                </div>

                <div className="space-y-1">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="support@vibedapp.com" required className="w-full border outline-none focus:outline-[#f4a261] rounded-md p-2" />
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
            </form>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-[#f4a261] text-black font-semibold py-3 rounded-full">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignupModal
