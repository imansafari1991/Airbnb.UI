import { FilterBtn } from "./filter-btn";
import { FilterIcon } from "@/components/navigation/icons";
import type React from "react";
import { ScrollableNav } from "./scroollable-nav/ScroollableNav";

const NavigationTag: React.FC = () => {
  return (
    <nav className="w-screen flex items-center px-0 md:px-10 2xl:px-20 gap-4">
      <ScrollableNav />
      <FilterBtn>
        <FilterIcon />
        <span>Filters</span>
      </FilterBtn>
    </nav>
  );
};

export default NavigationTag;
