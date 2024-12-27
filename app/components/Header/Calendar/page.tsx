'use client';

import React, { useState } from 'react';
import DatePicker from 'react-multi-date-picker';

/**
 * Custom footer plugin content
 */
function CalendarFooter() {
  return (
    <div className="flex items-center gap-3 p-2">
      <div className="rounded-md border border-slate-300 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
        Exact dates
      </div>
      <div className="rounded-md border-2 border-black py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
        ±1 days
      </div>
      <div className="rounded-md border border-slate-300 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
        ±2 days
      </div>
      <div className="rounded-md border border-slate-300 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
        ±3 days
      </div>
      <div className="rounded-md border border-slate-300 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
        ±7 days
      </div>
      <div className="rounded-md border border-slate-300 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
        ±14 days
      </div>
    </div>
  );
}


export default function CalendarUi() {
  const [value, setValue] = useState([]);

  return (
    <div className="w-full mx-auto bg-slate-500 my-fullwidth-calendar">
      <DatePicker
        value={value}
        onChange={setValue}
        range
        rangeHover
        numberOfMonths={2}
        containerStyle={{ width: '100%' }}
        style={{ width: '100%' }}
        className="calendar"
        portal={false} 
        plugins={[
          <CalendarFooter key="customFooter" position="bottom" />,
        ]}
      />
    </div>
  );
}
