/** @format */

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Calendar, DateObject, Value } from "react-multi-date-picker";
import { CalendarFooter } from "./CalendarFooter";
import { CalendarPropsT } from "../types/calendar.types";

export const CalendarUi: React.FC<CalendarPropsT> = ({
  activeTab,
  onDateSelect,
  onClose,
}) => {
  const [value, setValue] = useState<Value[]>([]);

  // const toDateObject = (date: { day: number; month: number; year: number }) => {
  //   return new Date(date.year, date.month - 1, date.day);
  // };
  const toDateObject = (date: DateObject) => {
    return new Date(date.year, date.month.index - 1, date.day);
  };

  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClose = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClose);

    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, [onClose]);

  const isBefore = (date1: Date, date2: Date) =>
    date1.getTime() < date2.getTime();
  const isAfter = (date1: Date, date2: Date) =>
    date1.getTime() > date2.getTime();

  const handleCalendarChange = (selectedDates: DateObject[]) => {
    if (Array.isArray(selectedDates)) {
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
    }
  };

  return (
    <div className="w-full bg-slate-500 justify-center">
      <Calendar
        ref={calendarRef}
        value={value}
        onChange={handleCalendarChange}
        numberOfMonths={2}
        monthYearSeparator=" "
        minDate={new Date()}
        multiple={true}
        plugins={[
          // Custom footer
          <CalendarFooter key="customFooter" />,
        ]}
      />
    </div>
  );
};
