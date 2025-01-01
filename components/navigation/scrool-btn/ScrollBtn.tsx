import type { IScroollBtnProps } from "./ScrollBtn.types";
import type React from "react";
import { twMerge } from "tailwind-merge";

export const ScrollBtn: React.FC<IScroollBtnProps> = ({
  children,
  className,
  show,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "flex items-center transition-opacity duration-1000",
        show ? "opacity-100" : "opacity-0"
      )}
    >
      <button
        className={twMerge(
          "flex absolute items-center justify-center w-8 h-8 bg-white border border-secondSoftGray rounded-full transition transform hover:scale-105 hover:shadow-lg",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
