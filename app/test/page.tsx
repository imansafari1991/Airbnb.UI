"use client";

import { Modal } from "@/components/modal";
import { RoomCard } from "@/components/room-card";
import { ROOM_CARD_DATA } from "@/constants";
import useModalActions from "@/hooks/useModalActions";

const Page = () => {
  const { isModalOpen, closeModalHandler, openModalHandler } =
    useModalActions();

  return (
    <div className="h-screen border border-red-500">
      {/* <RoomCard
        data={ROOM_CARD_DATA[0]}
        slug=""
        onFavoriteClickHandler={openModalHandler}
      /> */}
      <button onClick={openModalHandler}>click to open modal</button>
      <Modal open={isModalOpen} onClose={closeModalHandler}>
        <div>the is the content</div>
      </Modal>
    </div>
  );
};

export default Page;
