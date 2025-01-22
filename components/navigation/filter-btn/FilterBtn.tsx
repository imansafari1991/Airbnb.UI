import type { IFilterProps } from "./FilterBtn.types";
import type React from "react";
import { twMerge } from "tailwind-merge";

export const FilterBtn: React.FC<IFilterProps> = ({
  children,
  className,
  ...props
}) => (
  <button
    className={twMerge(
      "border rounded-xl py-3.5 border-softGray hover:border-black hover:bg-hoverGray transition",
      className
    )}
    aria-label="Filters"
    {...props}
  >
    <span
      className={twMerge(
        "flex items-center px-4 pt-0.5 gap-2 text-xs text-softBlack font-semibold"
      )}
    >
      {children}
    </span>
  </button>
);
