import { twMerge } from "tailwind-merge";
import { IBadgeProps } from "./Badge.types";

export const Badge: React.FC<IBadgeProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "absolute bg-white rounded-full z-10 py-[2px] px-2 top-4 left-3 font-medium text-black shadow-md",
        className
      )}
    >
      <span>{children}</span>
    </div>
  );
};
