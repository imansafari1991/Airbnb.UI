'use client';

import React, { useState } from 'react';
import { Calendar } from 'react-multi-date-picker';
import { CalendarFooter } from '../footer/CalendarFooter';

export const CalendarUi: React.FC<CalendarProps> = ({ onDateSelect }) => {
  const [value, setValue] = useState<any[]>([]);

  const handleCalendarChange = (selectedDates: any[]) => {
    setValue(selectedDates);

    if (!selectedDates || selectedDates.length === 0) {
      return;
    }

    const [firstDate] = selectedDates;
    const lastDate = selectedDates[selectedDates.length - 1];

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
        rangeHover
        range
        numberOfMonths={2}
        monthYearSeparator=" "
        containerStyle={{ width: '100%', position: 'relative' }}
        style={{ width: '100%' }}
        onlyShowInRangeDates
        minDate={new Date()}
        plugins={[
          // Custom footer
          <CalendarFooter key="customFooter" position="bottom" />,
        ]}
      />
    </div>
  );
};
