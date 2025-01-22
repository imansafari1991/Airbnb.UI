/** @format */

import React, { useCallback, useContext, useState } from "react";
import { CalendarUi } from "./CalendarUi";
import { CheckInOutValuesT, ChecksPropsT } from "../types/calendar.types";
import { ChecksT } from "../types/calendar.types";
import { CalendarContext } from "@/context";

export const ChecksManager: React.FC<ChecksPropsT> = ({ activeTab }) => {
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

  const onClose = () => {
    setShowCheckInCalendar(false);
    setShowCheckOutCalendar(false);
  };

  // const { badgeCalendarDay } = useContext(CalendarContext);
  const { badgeCalendarDay = null } = useContext(CalendarContext) ?? {};

  const handleDateSelect = (
    selected: {
      checkIn: ChecksT;
      checkOut: ChecksT | null;
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
        setShowCheckInCalendar(true);
        setShowCheckOutCalendar(false);
      } else {
        setShowCheckOutCalendar(true);
        setShowCheckInCalendar(false);
      }
    },
    []
  );

  return (
    <>
      {activeTab === "Stays" ? (
        <li className="w-[33%] h-full flex items-start justify-center hover:rounded-full rounded-full hover:border-none">
          <div className="w-1/2 h-full p-2 hover:rounded-full hover:bg-gray-300 hover:border-none">
            <div
              className="p-2 flex flex-col justify-center items-start"
              onClick={(event) => handleToggleCalendar(event, "checkIn")}
            >
              <span className="text-xs text-gray-500">Check in</span>
              {showCheckInCalendar && (
                <CalendarUi
                  activeTab={activeTab}
                  onDateSelect={handleDateSelect}
                  onClose={onClose}
                />
              )}
              <span className="bg-transparent focus:outline-none text-sm text-slate-600">
                {dates.checkIn ? (
                  <>
                    <div className="flex">
                      <div className="flex items-center">
                        <span className="mr-1">
                          {dates?.checkIn.month.shortName}
                        </span>
                        <span> {dates?.checkIn.day}</span>
                        <span className="text-sm ml-3">
                          {" "}
                          {badgeCalendarDay}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  "add dates"
                )}
              </span>
            </div>
          </div>

          <div className="w-1/2 h-full p-2 hover:rounded-full hover:bg-gray-300 hover:border-none">
            <div className="w-full pl-2 border-l border-gray-300">
              <div
                className="p-2 flex flex-col justify-center items-start"
                onClick={(event) => handleToggleCalendar(event, "checkOut")}
              >
                <span className="text-xs text-gray-500">Check out</span>
                {showCheckOutCalendar && (
                  <CalendarUi
                    activeTab={activeTab}
                    onDateSelect={handleDateSelect}
                    onClose={onClose}
                  />
                )}
                {dates?.checkOut ? (
                  <div className="flex items-center">
                    <span className="mr-1">
                      {" "}
                      {dates?.checkOut?.month.shortName}
                    </span>
                    <span> {dates?.checkOut?.day}</span>
                    <span className="flex items-center ml-3">
                      <span className="text-sm"> {badgeCalendarDay}</span>
                    </span>
                  </div>
                ) : (
                  "add dates"
                )}
              </div>
            </div>
          </div>
        </li>
      ) : (
        <li className="w-[33%] h-full flex items-start justify-start hover:bg-gray-300 hover:rounded-full hover:border-none pt-1">
          <div className="p-2">
            <div
              className="p-2 flex flex-col justify-center items-start"
              onClick={(event) => handleToggleCalendar(event, "checkOut")}
            >
              <span className="text-xs text-gray-500">Add dates </span>
              {showCheckOutCalendar && (
                <CalendarUi
                  activeTab={activeTab}
                  onDateSelect={handleDateSelect}
                  onClose={onClose}
                />
              )}

              <span className="bg-transparent focus:outline-none text-sm text-slate-600">
                {dates.checkIn || dates.checkOut
                  ? `${dates?.checkIn?.day} ${
                      dates?.checkIn?.month?.shortName
                    } ${
                      dates?.checkOut
                        ? `  - ${dates?.checkOut?.day} ${dates?.checkOut?.month?.shortName}`
                        : ""
                    }`
                  : "add dates"}
              </span>
            </div>{" "}
          </div>
        </li>
      )}
    </>
  );
};
