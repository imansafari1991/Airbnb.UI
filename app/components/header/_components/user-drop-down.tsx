"use client";

import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

export const UserDropDown: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target as Node)
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
    <div className="relative inline-block">
      {/* User Account Button */}
      <button
        ref={buttonRef} // Correct reference type for <button>
        onClick={handleModalToggle}
        className="flex justify-between items-center gap-4 cursor-pointer rounded-full shadow-sm p-2 border-2 hover:shadow-md relative"
      >
        <IoIosMenu className="text-xl" />
        <FaUserCircle className="text-3xl" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          ref={modalRef} // Correct reference type for <div>
          className="absolute top-full mt-2 right-0 bg-white rounded-lg p-6 w-80 shadow-lg border border-gray-200 z-50"
        >
          {/* Account Information */}

          <p>user account info</p>
        </div>
      )}
    </div>
  );
};
