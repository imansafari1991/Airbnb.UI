import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IActionBtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  className?: string;
}
