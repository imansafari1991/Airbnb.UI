/** @format */

"use client";

import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import { CalendarFooter } from "./CalendarFooter";
import { CalendarPropsT } from "../types/calendar.types";

export const CalendarUi: React.FC<CalendarPropsT> = ({
  activeTab,
  onDateSelect,
}) => {
  const [value, setValue] = useState<any[]>([]);
  const toDateObject = (date: { day: number; month: number; year: number }) => {
    return new Date(date.year, date.month - 1, date.day);
  };

  const isBefore = (date1: Date, date2: Date) =>
    date1.getTime() < date2.getTime();
  const isAfter = (date1: Date, date2: Date) =>
    date1.getTime() > date2.getTime();

  const handleCalendarChange = (selectedDates: any[]) => {
    const newValue = selectedDates;
    setValue(newValue);

    let firstDate = newValue[0];
    let lastDate = newValue[1];

    const latestValue = newValue[newValue.length - 1];

    const firstDateObj = toDateObject(firstDate);

    const lastDateObj = lastDate ? toDateObject(lastDate) : null;
    const latestDateObj = toDateObject(latestValue);

    if (lastDateObj && isAfter(latestDateObj, lastDateObj)) {
      setValue([latestValue]);
      onDateSelect({
        checkIn: {
          day: latestValue.day,
          month: latestValue.month,
          year: latestValue.year,
        },
        checkOut: null,
      });
      return;
    } else if (
      lastDateObj &&
      isAfter(latestDateObj, firstDateObj) &&
      isBefore(latestDateObj, lastDateObj)
    ) {
      firstDate = latestValue;
      setValue([firstDate, lastDate]);
    } else if (
      lastDateObj &&
      isBefore(latestDateObj, firstDateObj) &&
      isBefore(latestDateObj, lastDateObj)
    ) {
      firstDate = latestValue;
      setValue([firstDate, lastDate]);
    }

    onDateSelect({
      checkIn: {
        day: firstDate.day,
        month: firstDate.month,
        year: firstDate.year,
      },
      checkOut: lastDate
        ? {
            day: lastDate.day,
            month: lastDate.month,
            year: lastDate.year,
          }
        : null,
    });
  };

  return (
    <div className="w-full bg-slate-500 justify-center">
      <Calendar
        value={value}
        onChange={handleCalendarChange}
        numberOfMonths={2}
        monthYearSeparator=" "
        minDate={new Date()}
        multiple={false}
        plugins={[
          // Custom footer
          <CalendarFooter key="customFooter" />,
        ]}
      />
    </div>
  );
};
