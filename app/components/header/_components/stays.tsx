"use client";

import { CiSearch } from "react-icons/ci";

export const Stays: React.FC = () => {
  return (
    <div className="flex items-center justify-between max-w-5xl bg-white rounded-full px-2 py-2 border border-gray-300 shadow-md">
      <div className="flex space-x-4">
        {/* Where */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Where</span>
          <input
            type="text"
            placeholder="Search destinations"
            className="bg-transparent focus:outline-none text-sm"
          />
        </div>
        {/* Divider */}
        <div className="border-l border-gray-600 h-full"></div>

        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Check in</span>
          <input
            type="text"
            placeholder="Add dates"
            className="bg-transparent focus:outline-none text-sm"
          />
        </div>

        {/* Check Out */}
        <div className="border-l border-gray-300 h-full"></div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Check out</span>
          <input
            type="text"
            placeholder="Add dates"
            className="bg-transparent focus:outline-none text-sm"
          />
        </div>

        {/* Who */}
        <div className="border-l border-gray-300 h-full"></div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Who</span>
          <input
            type="text"
            placeholder="Add guests"
            className="bg-transparent focus:outline-none text-sm"
          />
        </div>
      </div>

      {/* Search Button */}
      <button className="bg-rose-500 text-white p-3 rounded-full focus:outline-none">
        <CiSearch />
      </button>
    </div>
  );
};
