"use client";

import React, { useRef, useState } from "react";

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown if clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 border px-3 py-2 rounded-full shadow-sm hover:shadow-md transition"
      >
        <span className="hidden sm:block">Airbnb your home</span>
        <div className="flex items-center">
          <span className="material-icons text-gray-500">menu</span>
          <span className="material-icons text-gray-500 ml-2">
            account_circle
          </span>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
          <ul className="py-1 text-gray-700">
            <li>
              <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                Log in
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                Sign up
              </button>
            </li>
            <hr className="my-1" />
            <li>
              <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                Airbnb your home
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                Host an experience
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                Help
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
