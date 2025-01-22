import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IFilterProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode | string;
    className?: string;
}
