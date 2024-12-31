"use client";

import { NextIcon, PrevIcon } from "@/app/components/navigation/icons";
import { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { ScrollBtn } from "../scrool-btn";
import type { ScroollableNavProps } from "./ScroollableNav.types";
import { categories } from "@/app/components/navigation/constants/categories";

export const ScrollableNav: React.FC<ScroollableNavProps> = ({
  showScrollThreshold = 40,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowPrevButton(container.scrollLeft > showScrollThreshold);
      setShowNextButton(
        container.scrollLeft + container.offsetWidth < container.scrollWidth
      );
    }
  }, [showScrollThreshold]);

  const handlePrevClick = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft - container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleCategoryClick = (id: string) => {
    setSelectedCategory(id);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <div className="relative flex items-center overflow-x-auto whitespace-nowrap">
      {showPrevButton && (
        <ScrollBtn show={showPrevButton} onClick={handlePrevClick}>
          <PrevIcon />
        </ScrollBtn>
      )}

      <div
        className="overflow-x-auto whitespace-nowrap flex items-center gap-8 no-scrollbar"
        ref={scrollContainerRef}
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            onClick={() => handleCategoryClick(category.id.toString())}
            className={`flex flex-col items-center gap-2 py-3 mt-3 text-gray text-xs font-medium hover:text-black transition-all  ${
              selectedCategory === category.id.toString()
                ? "border-b-2 border-black"
                : "border-b-2 border-transparent hover:border-softGray"
            }`}
          >
            {category.icon && (
              <Image
                src={category.icon}
                alt={category.name}
                width={24}
                height={24}
              />
            )}
            <div>{category.name}</div>
          </Link>
        ))}

        {showNextButton && (
          <ScrollBtn
            show={showNextButton}
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
            onClick={handleNextClick}
          >
            <NextIcon />
          </ScrollBtn>
        )}
      </div>
    </div>
  );
};
