/** @format */

"use client";

import React, { useState, createContext } from "react";

const CalendarContext = createContext();

export function CalendarProvider({ children }) {
  const [badgeCalendarDay, setBadgeCalendarDay] = useState<number>(null);

  return (
    <CalendarContext.Provider value={{ badgeCalendarDay, setBadgeCalendarDay }}>
      {children}
    </CalendarContext.Provider>
  );
}

export default CalendarContext;
