import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NavLg = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  const NavLinks = [
    { name: "Home", path: "/" },
    { name: "Find Room", path: "/find-room" },
    { name: "Company", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar background
  const navbarBg =
    isHome && !scrolled ? "bg-transparent" : "bg-white shadow-sm";

  // Text color
  const linkColor =
    isHome && !scrolled ? "text-white" : "text-[#3C4A4D]";

  // Logo
  const logoSrc =
    isHome && !scrolled ? "/vibed.png" : "/vibed-dark.png";

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${navbarBg}`}
    >
      <div className="w-[90%] mx-auto py-4 flex justify-between items-center">
        
        {/* Logo */}
        <img src={logoSrc} alt="Vibed" className="h-8" />

        <div className="flex gap-6 items-center">
          
          {/* Navigation Links */}
          <div className="flex space-x-6 font-man">
            {NavLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `
                  transition-all duration-200 font-medium
                  ${linkColor}
                  ${
                    isActive && !isHome
                      ? "border-b-2 border-[#3C4A4D]"
                      : ""
                  }
                  `
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Download Button */}
          <button className="bg-[#F4A261] px-4 py-2 text-black rounded-full flex items-center gap-2">
            <i className="fa-solid fa-mobile-screen"></i>
            Download
          </button>

        </div>
      </div>
    </div>
  );
};

export default NavLg;
