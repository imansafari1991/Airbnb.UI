"use client";
import { RxCross1 } from "react-icons/rx";
import { useState, useRef, useEffect, useCallback } from "react";
import { CiSearch } from "react-icons/ci";
import GuestPart from "./GuestPart";
import { CalendarUi } from "../Calendar/CalendarUI/CalendarUi";

interface DateValue {
  day: number;
  month: { name: string; shortName: string; number: number };
  year: number;
}

interface CheckInOutValues {
  checkIn: DateValue | null;
  checkOut: DateValue | null;
}

export const Stays: React.FC = () => {
  const maxTotalGuests = 16;

  // Guest states
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);
  const [pets, setPets] = useState<number>(0);

  // Guest dropdown
  const [isDropGuest, setIsDropGuest] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLDivElement>(null);

  // Reset guests
  const [resetAll, setResetAll] = useState<boolean>(false);

  // Calendar states
  const [showCheckInCalendar, setShowCheckInCalendar] = useState<boolean>(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState<boolean>(false);

  // Selected dates
  const [dates, setDates] = useState<CheckInOutValues>({
    checkIn: null,
    checkOut: null,
  });

  // ------------------ GUEST DROPDOWN ------------------

  const dropGuest = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropGuest((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(target) &&
      toggleButtonRef.current &&
      !toggleButtonRef.current.contains(target)
    ) {
      setIsDropGuest(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const totalGuests = adults + children;
  const hasSelections = adults > 0 || children > 0 || infants > 0 || pets > 0;

  const resetSelections = () => {
    setResetAll(true);
    setAdults(0);
    setChildren(0);
    setInfants(0);
    setPets(0);
    setTimeout(() => setResetAll(false), 0);
  };

  // Text for guests
  const fullDisplayText =
    `${totalGuests} guests` +
    (infants > 0 ? `, ${infants} infants` : "") +
    (pets > 0 ? `, ${pets} pets` : "");

  const displayText = hasSelections
    ? fullDisplayText.length > 15
      ? fullDisplayText.slice(0, 15) + "..."
      : fullDisplayText
    : "Add guests";

  // ------------------ CALENDAR LOGIC ------------------

  // Toggle between showing CheckIn / CheckOut calendar
  const handleToggleCalendar = useCallback(
    (event: React.MouseEvent, calendar: "checkIn" | "checkOut") => {
      event.stopPropagation();
      if (calendar === "checkIn") {
        setShowCheckInCalendar((prev) => !prev);
        // بستن تقویم CheckOut در صورت نیاز
        setShowCheckOutCalendar(false);
      } else {
        setShowCheckOutCalendar((prev) => !prev);
        // بستن تقویم CheckIn در صورت نیاز
        setShowCheckInCalendar(false);
      }
    },
    []
  );

  // دریافت تاریخ‌های انتخابی از فرزند CalendarUi
  const handleDateSelect = (selected: {
    checkIn: { day: number; month: any; year: number };
    checkOut: { day: number; month: any; year: number };
  }) => {
    // مثلاً:
    // { checkIn: { day: 12, month: {...}, year: 2024 }, checkOut: {...} }
    if (!selected) return;
    setDates(selected);

    // بستن تقویم‌ها پس از انتخاب (در صورت نیاز)
    setShowCheckInCalendar(false);
    setShowCheckOutCalendar(false);
  };

  return (
    <div className="relative flex items-center justify-between max-w-5xl bg-white rounded-full px-2 py-2 border border-gray-300 shadow-md">
      {/* GUEST DROPDOWN */}
      {isDropGuest && (
        <div
          className="absolute right-0 top-[67px] bg-white p-4 rounded-[32px] shadow-md max-h-[300px] z-10 overflow-y-auto overscroll-contain"
          ref={dropdownRef}
        >
          <GuestPart
            title="Adults"
            description="Age 13 or Above"
            max={16}
            initialValue={0}
            onCountChange={setAdults}
            isIncrementDisabled={totalGuests >= maxTotalGuests}
            reset={resetAll}
          />
          <GuestPart
            title="Children"
            description="Age 2 - 12"
            max={16}
            initialValue={"0"}
            onCountChange={setChildren}
            isIncrementDisabled={totalGuests >= maxTotalGuests}
            reset={resetAll}
          />
          <GuestPart
            title="Infants"
            description="Under 2"
            max={16}
            initialValue={"0"}
            onCountChange={setInfants}
            reset={resetAll}
          />
          <GuestPart
            title="Pets"
            description=""
            max={6}
            initialValue={"0"}
            onCountChange={setPets}
            reset={resetAll}
          />
        </div>
      )}

      {/* LEFT PART */}
      <div className="flex space-x-4">
        {/* Where */}
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Where</span>
          <input
            type="text"
            placeholder="Search destinations"
            className="bg-transparent focus:outline-none text-sm"
          />
        </div>

        {/* Divider */}
        <div className="border-l border-gray-600 h-full" />

        {/* Check In */}
        <div
          className="flex flex-col"
          onClick={(event) => handleToggleCalendar(event, "checkIn")}
        >
          <span className="text-xs text-gray-500">Check in</span>
          {/* نمایش تقویم CheckIn به صورت inline */}
          {showCheckInCalendar && <CalendarUi onDateSelect={handleDateSelect} />}
          {/* تاریخ انتخاب‌شده (در صورت وجود) */}
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
          {showCheckOutCalendar && <CalendarUi onDateSelect={handleDateSelect} />}
          <div>
            {dates?.checkOut?.day}
            {dates?.checkOut?.month?.shortName}
          </div>
        </div>

        {/* Who */}
        <div className="border-l border-gray-300 h-full" />
        <div
          className="flex justify-between cursor-pointer"
          onClick={dropGuest}
          ref={toggleButtonRef}
        >
          <div className="flex flex-col ms-2">
            <span className="text-xs text-gray-500">Who</span>
            <div>{displayText}</div>
          </div>

          {isDropGuest && hasSelections && (
            <button
              className="flex justify-center items-center rounded-full w-[25px] h-[25px] p-2 text-xs hover:bg-slate-300"
              onClick={resetSelections}
            >
              <RxCross1 />
            </button>
          )}
        </div>
      </div>

      {/* Search Button */}
      <button
        className={
          "flex items-center bg-rose-500 text-white p-3 rounded-full focus:outline-none transition-all duration-300 ease-in-out" +
          (isDropGuest ? " w-[150px]" : " w-[42px]")
        }
      >
        <CiSearch />
        {isDropGuest && <span className="ms-1">Search</span>}
      </button>
    </div>
  );
};
