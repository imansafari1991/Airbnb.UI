"use client";

import classNames from "classnames";
import { createPortal } from "react-dom";

import { useEffect, useRef, useState } from "react";
import { IModalProps } from "./Modal.types";
import useClickOutside from "@/hooks/useClickOutSide";

export const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  className,
  onClose,
}) => {
  const [shouldShowModal, setShouldShowModal] = useState(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  // click outside the modal
  useClickOutside(modalRef, {
    onOutsideClick: () => onClose && onClose(),
  });

  useEffect(() => {
    if (isOpen) {
      setShouldShowModal(true);
    } else {
      const timeout = setTimeout(() => setShouldShowModal(false), 300); // تاخیر برای بستن
      return () => clearTimeout(timeout); // پاک کردن تایمر
    }
  }, [isOpen]);

  // if shouldShowModal is false ==> return null to show nothing;
  if (!shouldShowModal) return null;

  return createPortal(
    <div
      className={classNames(
        "modal",
        isOpen ? "animate-fade-in" : "animate-fade-out"
      )}
    >
      {/* background overlay blue effect */}
      <div
        onClick={onClose}
        className={classNames(
          "modal-overlay",
          isOpen ? "animate-fade-in" : "animate-fade-out"
        )}
      />

      {/* modal's content container */}
      <div
        ref={modalRef}
        className={classNames(
          "modal-container",
          isOpen ? "animate-fade-in" : "animate-fade-out",
          className // for custom classes
        )}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
