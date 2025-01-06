import type { IScroollBtnProps } from "./ScrollBtn.types";
import type React from "react";
import { twMerge } from "tailwind-merge";

export const ScrollBtn: React.FC<IScroollBtnProps> = ({
  children,
  className,
  show,
  isNextButton,
  isPrevButton,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "absolute bg-white h-full flex items-center transition-opacity duration-4000 ease-in-out ",
        show ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {isNextButton && (
        <div
          className={twMerge(
            "top-0 right-100 h-full w-8 bg-gradient-to-l from-white/100 to-white/0 pointer-events-none z-10"
          )}
        />
      )}

      <div className={twMerge("z-10	bg-white h-full px-1 flex items-center ")}>
        <button
          className={twMerge(
            "flex items-center justify-center w-8 h-8 bg-white border border-secondSoftGray rounded-full transition transform hover:scale-105 hover:shadow-lg"
          )}
          {...props}
        >
          {children}
        </button>
      </div>

      {isPrevButton && (
        <div
          className={twMerge(
            "top-0 left-0 h-full w-8 bg-gradient-to-r from-white/100 to-white/0 pointer-events-none z-10"
          )}
        />
      )}
    </div>
  );
};
