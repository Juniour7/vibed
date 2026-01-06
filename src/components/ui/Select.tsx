import { useState, useRef, useEffect } from "react";

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  options: Option[];
  value: Option;
  onChange: (value: Option) => void;
  placeholder?: string;
};

const Select = ({ options, value, onChange, placeholder }: CustomSelectProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Selected / Placeholder */}
      <button
        type="button"
        className="w-full border rounded-md p-2 pr-10 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#f4a261]"
        onClick={() => setOpen(!open)}
      >
        <span>{value?.label || placeholder || "Select an option"}</span>
        <span className="ml-2 text-gray-400">▾</span>
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-md border bg-white shadow-lg text-sm">
          {options.map((option) => (
            <li
              key={option.value}
              className={`cursor-pointer p-2 pl-4 hover:bg-[#f4a261]/20 ${
                value.value === option.value ? "font-medium" : "font-normal"
              }`}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
