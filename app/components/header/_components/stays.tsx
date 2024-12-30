"use client";
import { RxCross1 } from "react-icons/rx";

import { useState, useRef, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import GuestPart from './GuestPart';

export const Stays: React.FC = () => {
    const maxTotalGuests = 16;
    const [adults, setAdults] = useState<number>(0);
    const [children, setChildren] = useState<number>(0);
    const [infants, setInfants] = useState<number>(0);
    const [pets, setPets] = useState<number>(0);
    const [resetAll, setResetAll] = useState<boolean>(false);
    const [isDropGuest, setIsDropGuest] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null); 
    const toggleButtonRef = useRef<HTMLDivElement>(null);
    const dropGuest = (event: React.MouseEvent) => {
      event.stopPropagation(); 
      setIsDropGuest((prevState) => !prevState); 
  
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
      document.addEventListener('mousedown', handleClickOutside); 
      return () => {
        document.removeEventListener('mousedown', handleClickOutside); 
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
  
    const fullDisplayText =
      `${totalGuests} guests` +
      (infants > 0 ? `, ${infants} infants` : "") +
      (pets > 0 ? `, ${pets} pets` : "");
  
    const displayText = hasSelections
      ? fullDisplayText.length > 15
        ? fullDisplayText.slice(0, 15) + "..."
        : fullDisplayText
      : "Add guests";
  return (
    <div className="flex relative items-center justify-between max-w-5xl bg-white rounded-full px-2 py-2 border border-gray-300 shadow-md">
                {/* guest part  */}
                {isDropGuest && 
<div className=' absolute top-2.5 bg-white p-4 rounded-[32px] shadow-md max-h-[300px] z-10 overflow-y-auto overscroll-contain right-0 top-[67px]'
  ref={dropdownRef}>

<GuestPart   title="Adults" description="Age 13 or Above" max={16} initialValue={0}  onCountChange={setAdults}    isIncrementDisabled={totalGuests >= maxTotalGuests}    reset={resetAll}></GuestPart>
<GuestPart   title="Children" description="Age 2 - 12" max={16} initialValue={'0'}  onCountChange={setChildren}    isIncrementDisabled={totalGuests >= maxTotalGuests}    reset={resetAll}></GuestPart>
<GuestPart   title="Infants" description="Under 2" max={16} initialValue={'0'} onCountChange={setInfants}    reset={resetAll}></GuestPart>
<GuestPart   title="Pets" description="" max={6} initialValue={'0'} onCountChange={setPets}    reset={resetAll}></GuestPart>
 </div>
 }
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
        <div className="border-l border-gray-600 h-full"></div>

        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Check in</span>
          <input
            type="text"
            placeholder="Add dates"
            className="bg-transparent focus:outline-none text-sm"
          />
        </div>

        {/* Check Out */}
        <div className="border-l border-gray-300 h-full"></div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Check out</span>
          <input
            type="text"
            placeholder="Add dates"
            className="bg-transparent focus:outline-none text-sm"
          />
        </div>

        {/* Who */}
        <div className="border-l border-gray-300 h-full"></div>
        <div className="flex justify-between cursor-pointer	" 
        onClick={dropGuest}  
        ref={toggleButtonRef}>
  <div className='flex flex-col ms-2'>
        <span className="text-xs text-gray-500">Who</span>
          <div >{displayText}</div>
  </div>
      
          {isDropGuest && hasSelections && (
          <button
             className=" flex justify-center items-center rounded-full w-[25px] h-[25px] p-2 text-xs hover:bg-slate-300"
            onClick={resetSelections}
          >
            
          <RxCross1 />
          </button>
        )}
        </div>
      </div>
      {/* Search Button */}
      <button className={"flex items-center bg-rose-500 text-white p-3 rounded-full focus:outline-none transition-all duration-300 ease-in-out" +   (isDropGuest ? " w-[150px]" : " w-[42px]")}>
      <CiSearch />
        {isDropGuest && <span className='ms-1'>Search</span>}
     
      </button>
    </div>
  );
};
