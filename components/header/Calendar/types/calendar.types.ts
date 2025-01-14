/** @format */

interface DateValueT {
  day: number;
  month: { name: string; shortName: string; number: number };
  year: number;
}

export interface CheckInOutValuesT {
  checkIn: DateValueT | null;
  checkOut: DateValueT | null;
}

export type ChecksT = {
  day: number;
  month: { name: string; shortName: string; number: number };
  year: number;
};

export interface CalendarPropsT {
  onClose: () => void;
  onDateSelect: (dates: {
    checkIn: { day: number; month: object; year: number };
    checkOut: { day: number; month: object; year: number };
  }) => void;
}
