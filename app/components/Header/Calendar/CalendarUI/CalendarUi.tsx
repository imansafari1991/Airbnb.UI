'use client';

import React, { useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import { CalendarFooter } from '../Footer/CalendarFooter';

export const CalendarUi = () => {
    const [value, setValue] = useState([]);
    return (
        <div className="w-full justify-center bg-slate-500">
            <DatePicker
                value={value}
                onChange={setValue}
                range
                rangeHover
                numberOfMonths={2}
                monthYearSeparator=" "
                highlightToday={false}
                placeholder="click to open"
                containerStyle={{ width: '100%' }}
                style={{ width: '100% !important' }}
                minDate={new Date()}
                plugins={[
                    <CalendarFooter key="customFooter" position="bottom" />,
                ]}
            />
        </div>
    );
}
