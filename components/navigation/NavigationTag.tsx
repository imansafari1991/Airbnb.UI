"use client";

import { FilterBtn } from "./filter-btn";
import { FilterIcon } from "@/components/navigation/icons";
import type React from "react";
import { ScrollableNav } from "./scroollable-nav/ScroollableNav";
import { useScroll } from "@/hooks/useScrooll";

const NavigationTag: React.FC = () => {
  const isScrolled = useScroll();

  return (
    <nav
      className={`w-screen flex items-center px-0 md:px-10 2xl:px-20 gap-3 fixed top-40 z-50 bg-white xs:pb-0.5 md:border-none shadow-md  ${
        isScrolled ? "md:shadow-md" : "md:md:shadow-none"
      }`}
    >
      <ScrollableNav />
      <FilterBtn className="hidden md:flex items-center">
        <FilterIcon />
        <span>Filters</span>
      </FilterBtn>
    </nav>
  );
};

export default NavigationTag;
