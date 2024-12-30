import React from "react";
import { RoomCard } from "../room-card";

const ListCard: React.FC = () => {
  const cards = Array.from({ length: 12 }, (_, index) => (
    <RoomCard key={index} href="/" />
  ));

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-6 py-6 w-full gap-y-10">
        {cards}
      </div>
    </div>
  );
};

export default ListCard;
