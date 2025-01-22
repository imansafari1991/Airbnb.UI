"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Stays } from "./stays";

export const MobileHeader: React.FC = () => {
  const [showResult, setShowResult] = useState(false);

  const handleShowResult = () => {
    setShowResult((prev) => !prev);
  };
  return (
    <div className="flex justify-center items-center flex-col h-32 py-6 ">
      <div
        onClick={handleShowResult}
        className="bg-white flex justify-center items-center gap-2 mt-4 w-[90%] rounded-full py-4 cursor-pointer shadow-lg border-sofblack border border-gray"
      >
        <IoSearch />
        <button className="text-neutral-800 font-semibold text-sm">
          Start your search
        </button>
      </div>

      {/* Conditionally render the component */}
      {showResult && <div className="bg-sky-400">this is somponents</div>}
    </div>
  );
};
