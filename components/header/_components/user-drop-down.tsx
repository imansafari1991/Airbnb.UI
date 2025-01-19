"use client";

import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

export const UserDropDown: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // const modalRef = useRef<HTMLDivElement | null>(null);
  // const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* User Account Button */}
      <button
        onClick={handleModalToggle}
        className="flex justify-between items-center gap-4 cursor-pointer rounded-full shadow-sm p-2 border-2 hover:shadow-md relative"
      >
        <IoIosMenu className="text-xl" />
        <FaUserCircle className="text-3xl" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50">
          <ul className="py-1 text-gray-700 ">
            <li>
              <button className="block px-4 py-3 hover:bg-gray-100 w-full text-left">
                Sign up
              </button>
            </li>
            <li>
              <button className="block px-4 py-3 hover:bg-gray-100 w-full text-left">
                Log in
              </button>
            </li>
            <hr className="my-1" />
            <li>
              <button className="block px-4 py-3 hover:bg-gray-100 w-full text-left">
                Gift cards
              </button>
            </li>
            <li>
              <button className="block px-4 py-3 hover:bg-gray-100 w-full text-left">
                Airbnb your home
              </button>
            </li>
            <li>
              <button className="block px-4 py-3 hover:bg-gray-100 w-full text-left">
                Host an experience
              </button>
            </li>
            <li>
              <button className="block px-4 py-3 hover:bg-gray-100 w-full text-left">
                Help
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
