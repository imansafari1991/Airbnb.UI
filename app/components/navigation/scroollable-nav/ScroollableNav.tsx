"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { categories } from "@/app/components/navigation/constants/categories";

export const ScrollableNav: React.FC = () => {
  return (
    <div className="flex items-center overflow-x-auto whitespace-nowrap">
      <div className="overflow-x-auto whitespace-nowrap flex items-center gap-8 no-scrollbar">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.href}
            className="flex flex-col items-center gap-2 py-3 my-3 text-gray text-xs font-medium hover:text-black transition-all border-b-2 border-transparent hover:border-softGray"
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
      </div>
    </div>
  );
};
