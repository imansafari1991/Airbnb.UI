"use client";

import React, { useRef, useState } from "react";
import SearchContainer from "./SearchContainer";
import SearchInput from "./SearchInput";
// import SearchButton from "../search-bar/SearchButton";

export const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState(""); // State to store the input value
  const [isVisible, setIsVisible] = useState(false); // State to control visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    setIsVisible(value.length > 0); // Show elements only when there's input
  };
  return (
    <>
      {/* Search Button */}
      <div className="w-full mt-10 relative">
        <div className="block md:hidden">{/* <SearchButton /> */}</div>
      </div>

      {/* inputContainer  */}
      <div className="hidden md:block">
        <SearchInput
          placeholder="Search ..."
          value={query}
          onChange={handleInputChange}
          onFocus={toggleMenu}
        />
      </div>

      {/* Results Container : map / list */}
      <div>
        <SearchContainer
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          isvisible={isVisible}
          inputChange={handleInputChange}
          query={query}
          setquery={setQuery}
        />
      </div>
    </>
  );
};

export default SearchBar;
