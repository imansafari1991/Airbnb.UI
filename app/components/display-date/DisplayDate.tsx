"use client";

import React from "react";
import { IDisplayDateProps } from "./DisplayDate.types";

export const DisplayDate: React.FC<IDisplayDateProps> = ({
  date,
  duration = 0,
  locale = "en-US",
  options = { month: "short", day: "numeric" },
}) => {
  const startDate = new Date(date);
  const endDate = new Date(startDate);

  if (duration > 0) {
    endDate.setDate(startDate.getDate() + duration);
  }

  const startFormatted = startDate.toLocaleDateString(locale, options);
  const endFormatted = endDate.toLocaleDateString(locale, { day: "numeric" });

  return (
    <p className="text-[#666565] text-sm tracking-wide leading-5">{`${startFormatted} - ${endFormatted}`}</p>
  );
};
