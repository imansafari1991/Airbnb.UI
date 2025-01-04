import React from "react";

const SearchMapResult: React.FC = () => {
  return (
    <div className="flex gap-8 my-4 md:grid grid-cols-3 place-items-center ">
      <div className="w-[110px] text-sm space-y-2 md:hover:bg-gray-300 md:p-2 md:rounded-md">
        <img
          src="./images/map-image/spain.webp"
          alt="Spain"
          className="rounded-lg border-gray-400 border-[1px] sm:hover:border-black sm:hover:border-[1px]"
        />
        <p>Spain</p>
      </div>
    </div>
  );
};

export default SearchMapResult;
