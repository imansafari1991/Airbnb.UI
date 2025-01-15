/** @format */

export interface DateValueT {
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
export type ActiveTabT = "Stays" | "Experiences";

export interface CalendarPropsT {
  activeTab: ActiveTabT;
  onClose: () => void;
  onDateSelect: (dates: {
    checkIn: {
      day: number;
      month: { name: string; shortName: string; number: number };
      year: number;
    };
    checkOut: {
      day: number;
      month: { name: string; shortName: string; number: number };
      year: number;
    } | null;
  }) => void;
}

export interface ChecksPropsT {
  activeTab: ActiveTabT;
}
