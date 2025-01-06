import React, {useCallback, useState} from 'react';
import {CalendarUi} from "./CalendarUi";
import {CheckInOutValuesT} from '../types/calendar.types';
import {ChecksT} from '../types/calendar.types';

export const Checks = () => {

    // Calendar states
    const [showCheckInCalendar, setShowCheckInCalendar] =
        useState<boolean>(false);
    const [showCheckOutCalendar, setShowCheckOutCalendar] =
        useState<boolean>(false);

    // Selected dates
    const [dates, setDates] = useState<CheckInOutValuesT>({
        checkIn: null,
        checkOut: null,
    });

    const handleDateSelect = (
        selected: {
            checkIn: ChecksT;
            checkOut: ChecksT;
        } | null
    ) => {
        if (!selected) return;
        setDates(selected);

        setShowCheckInCalendar(false);
        setShowCheckOutCalendar(false);
    };

    // Toggle between showing CheckIn / CheckOut calendar
    const handleToggleCalendar = useCallback(
        (event: React.MouseEvent, calendar: "checkIn" | "checkOut") => {
            event.stopPropagation();
            if (calendar === "checkIn") {
                setShowCheckInCalendar((prev) => !prev);
                setShowCheckOutCalendar(false);
            } else {
                setShowCheckOutCalendar((prev) => !prev);
                setShowCheckInCalendar(false);
            }
        },
        []
    );

    return (
        <>
            {/* Divider */}
            <div className="border-l border-gray-600 h-full" />

            {/* Check In */}
            <div
                className="flex flex-col"
                onClick={(event) => handleToggleCalendar(event, "checkIn")}
            >
                <span className="text-xs text-gray-500">Check in</span>
                {showCheckInCalendar && (
                    <CalendarUi onDateSelect={handleDateSelect} />
                )}
                <div>
                    {dates?.checkIn?.day}
                    {dates?.checkIn?.month?.shortName}
                </div>
            </div>

            {/* Divider */}
            <div className="border-l border-gray-300 h-full" />

            {/* Check Out */}
            <div
                className="flex flex-col"
                onClick={(event) => handleToggleCalendar(event, "checkOut")}
            >
                <span className="text-xs text-gray-500">Check out</span>
                {showCheckOutCalendar && (
                    <CalendarUi onDateSelect={handleDateSelect} />
                )}
                <div>
                    {dates?.checkOut?.day}
                    {dates?.checkOut?.month?.shortName}
                </div>
            </div>
        </>
    );
};
