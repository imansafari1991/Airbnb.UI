"use client";

import { NextIcon, PrevIcon } from "@/components/navigation/icons";
import { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { ScrollBtn } from "../scrool-btn";
import type { ScroollableNavProps } from "./ScroollableNav.types";
import { categories } from "@/components/navigation/constants/categories";

export const ScrollableNav: React.FC<ScroollableNavProps> = ({
  showScrollThreshold = 50,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>("1");

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
    <div
      className={`relative flex items-center overflow-x-auto whitespace-nowrap  ${
        showNextButton ? "" : "pr-0 md:pr-8"
      }`}
    >
      <ScrollBtn
        show={showPrevButton}
        isPrevButton={true}
        onClick={handlePrevClick}
        className="hidden md:flex"
      >
        <PrevIcon />
      </ScrollBtn>
      <ScrollBtn
        show={showNextButton}
        isNextButton={true}
        className="right-0 hidden md:flex"
        onClick={handleNextClick}
      >
        <NextIcon />
      </ScrollBtn>
      <div
        className="overflow-x-auto whitespace-nowrap flex items-center gap-8 no-scrollbar px-6 md:px-0"
        ref={scrollContainerRef}
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            onClick={() => handleCategoryClick(category.id.toString())}
            className={`group opacity-90 flex flex-col items-center gap-2 py-3 mt-3 text-xs font-medium transition-all ${
              selectedCategory === category.id.toString()
                ? "border-b-2 border-black text-black"
                : "border-b-2 border-transparent hover:border-softGray text-gray hover:text-black"
            }`}
          >
            {category.icon && (
              <Image
                src={category.icon}
                alt={category.name}
                width={24}
                height={24}
                className={`transition-opacity ${
                  selectedCategory === category.id.toString()
                    ? "opacity-100"
                    : "opacity-60 group-hover:opacity-90"
                }`}
              />
            )}
            <div className="opacity-100">{category.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
