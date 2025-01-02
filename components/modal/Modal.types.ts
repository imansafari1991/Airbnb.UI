import { ReactNode } from "react";

export interface IModalProps {
  open: boolean;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}
