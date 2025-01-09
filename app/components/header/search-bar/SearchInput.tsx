import React from "react";

interface SearchInputProps {
  placeholder: string;
  value?: string;
  onFocus?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onFocus,
  onChange,
  className,
  value,
}) => {
  return (
    <div className="reletive">
      <input
        type="text"
        className={`border-2 p-2 outline-none ${className}`}
        placeholder={placeholder}
        value={value}
        aria-label="Search input"
        onFocus={onFocus}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
