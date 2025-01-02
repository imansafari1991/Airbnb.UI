"use client";

import { useEffect, useState } from "react";

const useModalActions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => setIsModalOpen(true);
  const closeModalHandler = () => setIsModalOpen(false);

  // to prevent the page from scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return {
    isModalOpen,
    openModalHandler,
    closeModalHandler,
  };
};

export default useModalActions;
