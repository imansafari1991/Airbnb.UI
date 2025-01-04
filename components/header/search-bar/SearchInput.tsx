import React from "react";

interface SearchInputProps {
  placeholder: string;
  onClick?: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onClick }) => {
  return (
    <div className="reletive">
      <input
        type="text"
        className="border-2 p-2 outline-none "
        placeholder={placeholder}
        aria-label="Search input"
        onClick={onClick}
      />
    </div>
  );
};

export default SearchInput;
