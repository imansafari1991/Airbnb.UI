import { LatLngExpression } from 'leaflet';

export interface IRoomCardProps {
  data: {
    loc: {
      city: string;
      country: string;
      position: LatLngExpression;
    };
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
  className?: string;
}
