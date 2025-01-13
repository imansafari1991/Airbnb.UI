import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { IRoomCardProps } from './RoomCard.types';
import { HeartIcon, RateIcon } from '@/app/icons';
import { Badge } from '../badge';
import { ActionBtn } from '../action-btn';
import { DisplayDate } from '../display-date';
import { Slider } from '../slider';

export const RoomCard: React.FC<IRoomCardProps> = ({
  data,
  className,
  slug,
  isFavorite = false,
  onFavoriteClickHandler,
  ...props
}) => {
  const { loc, currency, date, distance, duration, images, price, rate } = data;

  return (
    <article
      className={twMerge(
        'relative w-full h-auto flex flex-col gap-y-3 rounded-xl cursor-pointer group',
        className
      )}
      {...props}
    >
      {/* favorite icon */}
      <ActionBtn onClick={onFavoriteClickHandler}>
        <HeartIcon className='stroke-white stroke-1' />
      </ActionBtn>

      {/* badge */}
      {isFavorite && <Badge>Guest favorite</Badge>}

      {/* slider  */}
      <Slider images={images} altText={loc.city} slug={slug} />

      {/* content */}
      <Link href={slug}>
        <div className='text-black font-semibold flex items-center justify-between leading-5'>
          <h4 className='text-base'>
            {loc.city}, {loc.country}
          </h4>
          <p className='text-base font-normal flex items-center gap-1'>
            <RateIcon />
            {rate}
          </p>
        </div>

        <p className='text-[#666565] text-sm tracking-wide'>{distance}</p>
        <DisplayDate date={date} duration={duration} />

        <p className='font-semibold leading-7 text-black'>
          {currency} {price} <span className='font-normal'>night</span>
        </p>
      </Link>
    </article>
  );
};
