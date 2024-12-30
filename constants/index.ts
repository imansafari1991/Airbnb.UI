interface IRoomCardDataProps {
  title: string;
  loc: string;
  rate: number;
  distance: string;
  date: string | Date;
  duration: number;
  price: number;
  currency: string;
  id: number;
  images: string[];
  slug: string;
  isFavorite?: boolean;
}

export const ROOM_CARD_DATA: IRoomCardDataProps[] = [
  {
    id: 1,
    title: "Boden",
    loc: "Austria",
    distance: "243 kilometers away",
    date: "2025-01-06",
    duration: 5,
    price: 477,
    currency: "€",
    slug: "/boden",
    images: [
      "/images/room-images/room-5.jpg",
      "/images/room-images/room-6.jpg",
      "/images/room-images/room-2.jpeg",
    ],
    rate: 4.8,
    isFavorite: true,
  },
  {
    id: 2,
    title: "Liezen",
    loc: "Austria",
    distance: "309 kilometers away",
    date: "2025-02-10",
    duration: 4,
    price: 104,
    currency: "€",
    slug: "/liezen",
    images: [
      "/images/room-images/room-1.jpeg",
      "/images/room-images/room-3.jpg",
      "/images/room-images/room-2.jpeg",
      "/images/room-images/room-10.jpg",
      "/images/room-images/room-11.jpg",
      "/images/room-images/room-12.jpg",
    ],
    rate: 3.8,
  },
  {
    id: 3,
    title: "Hasselfelde",
    loc: "Germany",
    distance: "250 kilometers away",
    date: "2025-06-05",
    duration: 5,
    price: 130,
    slug: "/hasselfelde",
    currency: "€",
    images: ["/images/room-images/room-10.jpg"],
    rate: 4.2,
  },
  {
    id: 4,
    title: "Bublava",
    loc: "Czechia",
    distance: "146 kilometers away",
    date: "2025-01-15",
    duration: 7,
    price: 250,
    slug: "/bublava",
    currency: "€",
    images: [
      "/images/room-images/room-9.jpg",
      "/images/room-images/room-10.jpg",
      "/images/room-images/room-11.jpg",
      "/images/room-images/room-12.jpg",
      "/images/room-images/room-13.jpg",
      "/images/room-images/room-14.jpg",
      "/images/room-images/room-15.jpg",
      "/images/room-images/room-16.jpg",
    ],
    rate: 4.9,
    isFavorite: true,
  },
  {
    id: 5,
    title: "Bizau",
    loc: "Austria",
    distance: "423 kilometers away",
    date: "2025-01-26",
    duration: 5,
    price: 432,
    currency: "€",
    slug: "/bizau",
    images: [
      "/images/room-images/room-4.jpg",
      "/images/room-images/room-5.jpg",
      "/images/room-images/room-7.jpg",
      "/images/room-images/room-8.jpg",
      "/images/room-images/room-1.jpeg",
      "/images/room-images/room-6.jpg",
    ],
    rate: 4.97,
    isFavorite: true,
  },
  {
    id: 6,
    title: "Tirpersdorf, Vogtland",
    loc: "Germany",
    distance: "138 kilometers away",
    date: "2025-01-13",
    duration: 5,
    price: 292,
    currency: "$",
    slug: "/tirpersdorf-vogrland",
    images: [
      "/images/room-images/room-3.jpg",
      "/images/room-images/room-9.jpg",
      "/images/room-images/room-10.jpg",
      "/images/room-images/room-11.jpg",
      "/images/room-images/room-1.jpeg",
      "/images/room-images/room-14.jpg",
    ],
    rate: 4.1,
    isFavorite: true,
  },
];
