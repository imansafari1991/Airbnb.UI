import { ReactNode } from "react";

export interface IModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}
