import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IScroollBtnProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode | string;
    className?: string;
    show: boolean;
}
