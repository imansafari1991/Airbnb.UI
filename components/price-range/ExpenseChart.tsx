import React from "react";

interface BarProps {
  totalBars: number;
  disabledBefor: number;
  disabledAfter: number;
}
type Datas = number[];
let datas: Datas;

const BarChart: React.FC<BarProps> = ({
  totalBars,
  disabledBefor,
  disabledAfter,
}) => {
  datas = [
    2, 5, 4, 7, 12, 16, 17, 3, 32, 22, 22, 55, 26, 28, 35, 40, 44, 48, 52, 70,
    72, 74, 76, 78, 80, 40, 38, 36, 34, 34, 22, 50, 20, 30, 40, 40, 4, 28, 26,
    24, 22, 18, 16, 14, 12, 10, 8, 6, 4, 2,
  ];

  return (
    <div className="w-full h-36 flex justify-around items-end">
      {datas.length == totalBars ? (
        datas.map((data, index) => {
          const isDisabled = index < disabledBefor || index >= disabledAfter;
          // console.log(isDisabled);
          return (
            <div
              key={index}
              className={`w-2 rounded-t-sm h-full ${
                isDisabled ? "bg-[#8a8a8a]" : "bg-[#E31C5F]"
              }`}
              style={{ height: `${data}%` }}
            ></div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default BarChart;
