import { twMerge } from "tailwind-merge";
import { IActionBtnProps } from "./ActionBtn.types";

export const ActionBtn: React.FC<IActionBtnProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        "absolute z-10 top-4 right-5 hover:scale-110 transition-all ease-in",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
