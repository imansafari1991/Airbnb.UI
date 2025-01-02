import { createPortal } from "react-dom";

import { useRef, useState } from "react";
import { IModalProps } from "./Modal.types";
import { twMerge } from "tailwind-merge";

export const Modal: React.FC<IModalProps> = ({
  children,
  open,
  className,
  onClose,
}) => {
  const [shouldShowModal, setShouldShowModal] = useState(open);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // if shouldShowModal is false ==> return null to show nothing;
  if (shouldShowModal) return null;

  return createPortal(
    <div
      className={twMerge(
        "modal",
        open ? "animate-fade-in" : "animate-fade-out"
      )}
    >
      {/* background overlay blue effect */}
      <div
        onClick={onClose}
        className={twMerge(
          "modal-overlay",
          open ? "animate-fade-in" : "animate-fade-out"
        )}
      />

      {/* modal's content container */}
      <div
        ref={modalRef}
        className={twMerge(
          "modal-container",
          open ? "animate-fade-in" : "animate-fade-out",
          className // for custom classes
        )}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
