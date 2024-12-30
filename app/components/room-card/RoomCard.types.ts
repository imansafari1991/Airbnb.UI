import { AnchorHTMLAttributes } from "react";

export interface IRoomCardProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  data: {
    title: string;
    loc: string;
    rate: number;
    distance: string;
    date: string | Date;
    price: number;
    currency: string;
    images: string[];
    duration: number;
  };
  slug: string;
  isFavorite?: boolean;
  onFavoriteClickHandler: () => void;
}
