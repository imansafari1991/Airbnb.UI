'use client';

import React, { useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import {CalendarFooter} from '../Footer/CalendarFooter'

export const CalendarUi =()=> {
  const [value, setValue] = useState([]);

  return (
    <div className="w-full mx-auto bg-slate-500 my-fullwidth-calendar text-center">
      <DatePicker
        value={value}
        onChange={setValue}
        range
        rangeHover
        numberOfMonths={2}
        monthYearSeparator=" "
        highlightToday={false}
        placeholder="click to open"
        containerStyle={{ width: '30%' }}
        style={{ width: '100%'}}
        portal={false}
        plugins={[
          <CalendarFooter key="customFooter" position="bottom" />,
        ]}
      />
    </div>
  );
}
