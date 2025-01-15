/** @format */

import { CalendarContext } from "@/context";
import { useContext, useState } from "react";

const days: [string, number][] = [
  ["Exact dates", 0],
  ["±1 days", 1],
  ["±2 days", 2],
  ["±3 days", 3],
  ["±7 days", 7],
  ["±14 days", 14],
];

export const CalendarFooter = () => {
  // const { badgeCalendarDay, setBadgeCalendarDay } = useContext(CalendarContext);
  const { badgeCalendarDay = null, setBadgeCalendarDay = () => {} } =
    useContext(CalendarContext) ?? {};

  return (
    <div className="flex items-center gap-3 p-2">
      {days.map((day: [string, number]) => (
        <div
          key={day[1]}
          onClick={() =>
            setBadgeCalendarDay(day[1] === 0 ? null : `±${day[1]}`)
          }
          className={`${
            badgeCalendarDay === (day[1] === 0 ? null : `±${day[1]}`)
              ? "border-[2px] border-black bg-slate-100"
              : "border border-slate-300"
          } cursor-pointer rounded-3xl py-2 px-4 text-center text-sm transition-all shadow-sm text-slate-600`}
        >
          {day[0]}
        </div>
      ))}
    </div>
  );
};
