import { useState } from "react";

import { Menu, X } from "lucide-react"


const NavSm = () => {
  const [open, setOpen] = useState(false);
  const NavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find Room', path: '/find-room' },
    { name: 'Company', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <div className="w-full bg-white fixed top-0 border-b border-[#E8EAED] z-50">
      <div className="max-w-7xl  mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="/vibed-dark.png" alt="Vibed Logo" className="h-[2rem]" />
        </div>

        <div className="flex items-center gap-2">
          <button
            className="bg-[#F4A261] px-4 py-2 text-black rounded-full flex items-center gap-2"
          >
            <i className="fa-solid fa-mobile-screen"></i>
            Download
          </button>

          <div>
            <button onClick={() => setOpen(!open)}>
              {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      {open && (
        <div className="bg-white border-t border-[#E8EAED]">
          <ul className="flex flex-col max-w-7xl  mx-auto px-4 md:px-8 py-4 gap-4">
            {NavLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className=" text-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>  
  )
}

export default NavSm
