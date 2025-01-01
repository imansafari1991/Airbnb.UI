"use client";

import { useState, useEffect } from "react";

interface CounterProps {
  initialValue?: string | number;
  min?: number;
  max?: number;
  title: string;
  description: string;
  onCountChange: (count: number) => void;
  isIncrementDisabled?: boolean;
  reset: boolean;
}

const GuestPart: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 16,
  title,
  description,
  onCountChange,
  isIncrementDisabled = false,
  reset,
}) => {
  const [count, setCount] = useState<number>(typeof initialValue === "number" ? initialValue : 0);
  useEffect(() => {
    if (reset) {
      setCount(0);
      onCountChange(0);
    }
  }, [reset]);
  const increment = () => {
    if (count < max && !isIncrementDisabled) {
      const newCount = count + 1;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  const decrement = () => {
    if (count > min) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  return (
    <div className="flex items-center justify-between min-w-[220px] w-[342px] p-3">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <div className="text-neutral-500 text-xs">{description}</div>
      </div>
      <div className="flex items-center justify-between w-[104px]">
        <button
          className={
            "flex items-center justify-center border border-neutral-500 rounded-full w-[32px] h-[32px] hover:bg-gray-200" +
            (count === 0 ? " opacity-0 cursor-not-allowed" : "")
          }
          onClick={decrement}
        >
          <span className="flex items-center justify-center p-[5px] w-[22px] h-[22px]">
            <MinusIcon />
          </span>
        </button>

        <div>{count}</div>

        <button
          className={
            "flex items-center justify-center border border-neutral-500 rounded-full w-[32px] h-[32px] hover:bg-gray-200" +
            (isIncrementDisabled ? " opacity-0 cursor-not-allowed" : "")
          }
          onClick={increment}
        >
          <span className="flex items-center justify-center p-[5px] w-[22px] h-[22px]">
            <PlusIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

const MinusIcon: React.FC = () => <div>-</div>;
const PlusIcon: React.FC = () => <div>+</div>;
export default GuestPart;
