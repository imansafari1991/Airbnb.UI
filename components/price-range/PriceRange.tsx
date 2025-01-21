import React from "react";

interface BarProps {
  totalBars: number;
  disabledBefor: number;
  disabledAfter: number;
}

const Bars: React.FC<BarProps> = ({
  totalBars,
  disabledBefor,
  disabledAfter,
}) => {
  return (
    <div className="flex">
      {Array.from({ length: totalBars }, (_, index) => {
        const isDisabled =
          index < disabledBefor || index >= totalBars - disabledAfter;

        return (
          <div
            key={index}
            className={`w-2 h-5 ${isDisabled ? "bg-gray-200" : "bg-red-400"}`}
          ></div>
        );
      })}
    </div>
  );
};

export default Bars;
