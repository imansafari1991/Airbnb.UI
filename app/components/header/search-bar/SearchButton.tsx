import React from "react";

const SearchButton: React.FC = () => {

  return (
    <button
      className="block p-4 rounded-full bg-gray-400 text-white hover:bg-gray-500 "
      aria-label="Start your search"
    >
      Start your search
    </button>
  );
};

export default SearchButton;
