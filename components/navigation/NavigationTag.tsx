import { FilterBtn } from "./filter-btn";
import { FilterIcon } from "@/components/navigation/icons";
import type React from "react";
import { ScrollableNav } from "./scroollable-nav/ScroollableNav";

const NavigationTag: React.FC = () => {
  return (
    <nav className="w-screen flex items-center px-0 md:px-10 2xl:px-20 gap-3 border-gray-300 shadow-md md:border-none pb-0.5">
      <ScrollableNav />
      <FilterBtn className="hidden md:flex items-center">
        <FilterIcon />
        <span>Filters</span>
      </FilterBtn>
    </nav>
  );
};

export default NavigationTag;
