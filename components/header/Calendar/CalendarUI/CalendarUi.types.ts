interface CalendarProps {
  onDateSelect: (dates: {
    checkIn: { day: number; month: object; year: number };
    checkOut: { day: number; month: object; year: number };
  } | null) => void;
}