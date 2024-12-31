"use client";

import React from "react";
import { RoomCard } from "../room-card";
import { ROOM_CARD_DATA } from "@/constants";

const ListCard: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 px-6 py-6 w-full gap-y-10">
        {ROOM_CARD_DATA?.map((roomData) => (
          <RoomCard
            key={roomData?.id}
            data={roomData}
            isFavorite={roomData?.isFavorite}
            slug={roomData?.slug}
            onFavoriteClickHandler={() => {
              console.log("action received for favourite");
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ListCard;
