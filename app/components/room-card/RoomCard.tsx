import Link from "next/link";
import { IRoomCardProps } from "./RoomCard.types";
import Image from "next/image";
import { RateIcon } from "@/app/icons";

export const RoomCard: React.FC<IRoomCardProps> = ({ href }) => {
  return (
    <Link href={"/"} className="w-full h-auto flex flex-col gap-y-3 rounded-xl">
      {/* slider  */}
      <div className="w-full h-full min-h-[250px] relative">
        <Image
          src={"/images/room-images/room-5.jpg"}
          fill
          alt="image of ..."
          className="aspect-square object-center object-cover rounded-xl"
        />
      </div>

      {/* content */}
      <div>
        <div className="text-black font-semibold flex items-center justify-between leading-5">
          <h4 className="text-base">Liezen, Austria</h4>
          <p className="text-base font-normal flex items-center gap-1">
            <RateIcon />
            4.98
          </p>
        </div>

        <p className="text-[#929292] text-sm font-light">309 kilometers away</p>
        <p className="text-[#929292] text-sm leading-5 font-light">
          Feb 10 – 15
        </p>

        <p className="font-semibold leading-7 text-black">
          € 104 <span className="font-normal">night</span>
        </p>
      </div>
    </Link>
  );
};
