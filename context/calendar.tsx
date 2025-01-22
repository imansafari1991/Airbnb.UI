/** @format */

"use client";

import React, { useState, createContext, ReactNode } from "react";

interface CalendarContextType {
  badgeCalendarDay: number | string | null;
  setBadgeCalendarDay: React.Dispatch<
    React.SetStateAction<number | string | null>
  >;
}

const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined
);

export function CalendarProvider({ children }: { children: ReactNode }) {
  const [badgeCalendarDay, setBadgeCalendarDay] = useState<
    number | string | null
  >("±1");

  return (
    <CalendarContext.Provider value={{ badgeCalendarDay, setBadgeCalendarDay }}>
      {children}
    </CalendarContext.Provider>
  );
}

export default CalendarContext;
// /** @format */

// "use client";

// import React, { useState, createContext, ReactNode } from "react";

// const CalendarContext = createContext();

// export function CalendarProvider({ children }: { children: ReactNode }) {
//   const [badgeCalendarDay, setBadgeCalendarDay] = useState<number>(1);

//   return (
//     <CalendarContext.Provider value={{ badgeCalendarDay, setBadgeCalendarDay }}>
//       {children}
//     </CalendarContext.Provider>
//   );
// }

// export default CalendarContext;
