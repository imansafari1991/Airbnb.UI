import React from "react";
import SearchMapResult from "./SearchMapResult";
import SearchListResult from "./SearchListResult";
import SearchInput from "./SearchInput";

interface SearchContainerProps {
  isOpen: boolean;
}

const SearchContainer: React.FC<SearchContainerProps> = ({ isOpen }) => {
  return (
    <>
      {/* Search container Desktop */}

      <div className={`relative ${isOpen ? "block" : "hidden"}`}>
        <div className="hidden absolute top-full z-50 bg-white w-max mt-4 p-4 border border-slate-300 rounded-md md:block ">
          <div>
            <h2 className="text-lg font-semibold">Search By Region</h2>
          </div>
          <SearchMapResult />
        </div>
      </div>

      {/* Search container Mobile */}

      <div className="fixed z-20 w-full bg-white rounded-lg p-5 mt-4 border-gray-300 border space-y-6  overflow-hidden md:hidden ">
        <div className="font-bold text-2xl">
          <h2>Where to?</h2>
        </div>
        <SearchInput placeholder="Search Destinatin" />

        <SearchMapResult />
        <SearchListResult />
      </div>
    </>
  );
};

export default SearchContainer;
