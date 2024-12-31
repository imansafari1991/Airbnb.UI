"use client";

import { NextIcon, PrevIcon } from "@/app/components/navigation/icons";
import { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { ScrollBtn } from "../scrool-btn";
import { categories } from "@/app/components/navigation/constants/categories";

interface ScrollableNavProps {
  showScrollThreshold?: number;
}

export const ScrollableNav: React.FC<ScrollableNavProps> = ({
  showScrollThreshold = 40,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

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
    <div className="relative flex items-center overflow-x-auto whitespace-nowrap ">
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
            className="flex flex-col items-center gap-2 py-3 mt-3 text-gray text-xs font-medium hover:text-black transition-all border-b-2 border-transparent hover:border-softGray"
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
            className="right-0"
            onClick={handleNextClick}
          >
            <NextIcon />
          </ScrollBtn>
        )}
      </div>
    </div>
  );
};
