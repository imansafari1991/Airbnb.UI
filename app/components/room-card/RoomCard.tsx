import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { IRoomCardProps } from "./RoomCard.types";
import Image from "next/image";
import { HeartIcon, RateIcon } from "@/app/icons";
import { Badge } from "../badge";
import { ActionBtn } from "../action-btn";
import { DisplayDate } from "../display-date";

export const RoomCard: React.FC<IRoomCardProps> = ({
  data,
  className,
  slug,
  isFavorite = false,
  onFavoriteClickHandler,
  ...props
}) => {
  const {
    title,
    loc,
    currency,
    date,
    distance,
    duration,
    images,
    price,
    rate,
  } = data;

  return (
    <Link
      href={slug!}
      className={twMerge(
        "relative w-full h-auto flex flex-col gap-y-3 rounded-xl",
        className
      )}
      {...props}
    >
      {/* favourite icon */}
      <ActionBtn onClick={onFavoriteClickHandler}>
        <HeartIcon className="stroke-white stroke-1" />
      </ActionBtn>

      {/* badge */}
      {isFavorite && <Badge>Guest favorite</Badge>}

      {/* slider  */}
      <div className="w-full h-full min-h-[250px] relative">
        <Image
          src={images[0]}
          fill
          alt={`images of ${title}`}
          className="aspect-square object-center object-cover rounded-xl"
        />
      </div>

      {/* content */}
      <div>
        <div className="text-black font-semibold flex items-center justify-between leading-5">
          <h4 className="text-base">
            {title}, {loc}
          </h4>
          <p className="text-base font-normal flex items-center gap-1">
            <RateIcon />
            {rate}
          </p>
        </div>

        <p className="text-[#666565] text-sm tracking-wide">{distance}</p>
        <DisplayDate date={date} duration={duration} />

        <p className="font-semibold leading-7 text-black">
          {currency} {price} <span className="font-normal">night</span>
        </p>
      </div>
    </Link>
  );
};
