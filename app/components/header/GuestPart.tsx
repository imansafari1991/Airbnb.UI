
"use client";

import { useState } from 'react';

interface CounterProps {
  initialValue?: string | number;
  min?: number;
  max?: number;
  title: string;
  description: string;
}

const GuestPart: React.FC<CounterProps> = ({
  initialValue = 0,
  min = 0,
  max = 16,
  title,
  description,
}) => {
  const [count, setCount] = useState<number>(typeof initialValue === 'number' ? initialValue : 0);
  const [displayValue, setDisplayValue] = useState<string | number>(initialValue);

  const increment = () => {
    if (count < max) {
      const newCount = count + 1;
      setCount(newCount);
      setDisplayValue(newCount);
    }
  };

  const decrement = () => {
    if (count > min) {
      const newCount = count - 1;
      setCount(newCount);
      setDisplayValue(newCount);
    }
  };

  const formattedDisplayValue = displayValue === 0 ? initialValue : (displayValue === max ? `+${displayValue}` : displayValue);

  return (
    <div className="flex items-center justify-between min-w-[220px] w-[342px] p-1">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <div className="text-neutral-500 text-xs">{description}</div>
      </div>
      <div className="flex items-center justify-between w-[104px]">
        <button
          className={"flex items-center justify-center border border-neutral-500 rounded-full w-[32px] h-[32px]" + (count === 0 ? ' opacity-0 cursor-not-allowed' : '')}
          onClick={decrement}
        >
          <span className="flex items-center justify-center p-[5px] w-[22px] h-[22px]">
            <MinusIcon />
          </span>
        </button>

        <div>{formattedDisplayValue}</div>

        <button
          className={"flex items-center justify-center border border-neutral-500 rounded-full w-[32px] h-[32px]" + (count >= max ? ' opacity-0 cursor-not-allowed' : '')}
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
