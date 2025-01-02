"use client";

import { Modal } from "@/components/modal";
import ModalHeader from "@/components/modal/_components/ModalHeader";
import useModalActions from "@/hooks/useModalActions";

const Page = () => {
  const { isModalOpen, closeModalHandler, openModalHandler } =
    useModalActions();

  return (
    <div className="h-screen">
      <button onClick={openModalHandler}>click to open modal</button>

      <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
        {/* you can use the ModalHeader whenever you need it */}
        <ModalHeader title="Login or Sign up" onClose={closeModalHandler} />

        {/* the styles of the content is really up to you according to your desired height or width */}
        <div className="p-6 w-72 h-[7200px]">
          <div>the is the content</div>
        </div>
      </Modal>
    </div>
  );
};

export default Page;
