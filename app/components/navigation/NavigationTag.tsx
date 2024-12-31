import { FilterBtn } from "./filter-btn";
import { FilterIcon } from "@/app/components/navigation/icons";
import type React from "react";

const NavigationTag: React.FC = () => {
  return (
    <nav className="w-screen flex items-center px-0 md:px-10 2xl:px-20 gap-4">
      <FilterBtn>
        <FilterIcon />
        <span>Filters</span>
      </FilterBtn>
    </nav>
  );
};

export default NavigationTag;
