"use client";

import { Modal } from "@/components/modal";
import useModalActions from "@/hooks/useModalActions";

const Page = () => {
  const { isModalOpen, closeModalHandler, openModalHandler } =
    useModalActions();

  return (
    <div className="h-screen border border-red-500">
      <button onClick={openModalHandler}>click to open modal</button>

      <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
        <div>the is the content</div>
      </Modal>
    </div>
  );
};

export default Page;
