"use client";

import React, { useState } from "react";
import SearchButton from "../search-bar/SearchButton";
import SearchContainer from "./SearchContainer";
import SearchInput from "./SearchInput";

export const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full mt-10 bg-red-300 relative ">
        <div className="block md:hidden">
          <SearchButton />
        </div>
      </div>

      <div className="hidden md:block">
        <SearchInput placeholder="Search ..." onClick={handleInputClick} />
      </div>
      <div>
        <SearchContainer isOpen={isOpen} />
      </div>
    </>
  );
};

export default SearchBar;
