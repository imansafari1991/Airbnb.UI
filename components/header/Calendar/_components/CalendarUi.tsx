/** @format */

"use client";

import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import { CalendarFooter } from "./CalendarFooter";
import {CalendarPropsT} from '../types/calendar.types'

export const CalendarUi: React.FC<CalendarPropsT> = ({
  activeTab,
  onDateSelect
}) => {
  const [value, setValue] = useState<any[]>([]);

  const handleCalendarChange = (selectedDates: any[]) => {
    const newValue = selectedDates.slice(-2);

    setValue(newValue);

    if (!newValue || newValue.length === 0) {
      return;
    }

    const [firstDate] = newValue;
    const lastDate = newValue[newValue.length - 1];

    if (activeTab === "Experiences") {
    }

    onDateSelect({
      checkIn: {
        day: firstDate.day,
        month: firstDate.month,
        year: firstDate.year,
      },
      checkOut: {
        day: lastDate.day,
        month: lastDate.month,
        year: lastDate.year,
      },
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
