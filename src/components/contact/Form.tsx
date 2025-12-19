import { useState } from "react";

const Form = () => {
  const [subject, setSubject] = useState("General Inquiry");

  return (
    <section className="p-6 font-man w-full">
      <form className="space-y-6 text-[#787878] font-medium w-full">
        {/* Names */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="basis-[50%]">
            <label className="block">First Name</label>
            <input
              type="text"
              placeholder="Your first name"
              required
              className="w-full p-2 focus:outline-none border-b border-[#CACACA]"
            />
          </div>

          <div className="basis-[50%]">
            <label className="block">Last Name</label>
            <input
              type="text"
              placeholder="Your last name"
              className="w-full p-2 focus:outline-none border-b border-[#CACACA]"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="basis-[50%]">
            <label className="block">Email</label>
            <input
              type="email"
              required
              placeholder="email@example.com"
              className="w-full p-2 focus:outline-none border-b border-[#CACACA]"
            />
          </div>

          <div className="basis-[50%]">
            <label className="block">Phone Number</label>
            <input
              type="text"
              placeholder="+1 (012) 345-6789"
              className="w-full p-2 focus:outline-none border-b border-[#CACACA]"
            />
          </div>
        </div>

        {/* 🔹 SUBJECT SELECTOR (Inserted here) */}
        <div className="space-y-3">
          <p className="text-sm text-gray-700">Select Subject?</p>

          <div className="flex flex-wrap gap-6">
            {["General Inquiry", "Complaint", "Join our Team", "Reviews"].map(
              (item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  {/* Hidden radio */}
                  <input
                    type="radio"
                    name="subject"
                    value={item}
                    required
                    checked={subject === item}
                    onChange={() => setSubject(item)}
                    className="hidden"
                  />

                  {/* Custom radio */}
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      subject === item
                        ? "border-gray-700"
                        : "border-gray-300"
                    }`}
                  >
                    {subject === item && (
                      <span className="w-2 h-2 rounded-full bg-gray-700"></span>
                    )}
                  </span>

                  <span className="text-sm">{item}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block">Message</label>
          <textarea
            rows={5}
            required
            placeholder="Write your message here..."
            className="w-full p-2 focus:outline-none border-b border-[#CACACA]"
          ></textarea>
        </div>

        <div className="w-full flex justify-end">
            <button
                type="submit"
                className="bg-[#B58863] text-white px-6 py-3 rounded-md font-medium shadow-md"
            >
                Send Message
            </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
