import React from "react";

interface barProps {
  disabledBefor: number;
  disabledAfter: number;
}

const BarChart: React.FC<barProps> = ({ disabledBefor, disabledAfter }) => {
  let datas = [
    "22%",
    "50%",
    "20%",
    "30%",
    "40%",
    "40%",
    "4%",
    "3%",
    "4%",
    "5%",
    "22%",
    "50%",
    "20%",
    "30%",
    "40%",
    "40%",
    "4%",
    "3%",
    "4%",
    "5%",
    "22%",
    "50%",
    "20%",
    "30%",
    "40%",
    "40%",
    "4%",
    "3%",
    "4%",
    "5%",
    "22%",
    "50%",
    "20%",
    "30%",
    "40%",
    "40%",
    "4%",
    "3%",
    "4%",
    "5%",
    "22%",
    "50%",
    "20%",
    "30%",
    "40%",
    "40%",
    "4%",
    "3%",
    "4%",
    "5%",
    "22%",
    "50%",
    "20%",
    "30%",
    "40%",
    "40%",
    "4%",
    "3%",
    "4%",
    "5%",
    "22%",
    "50%",
    "20%",
    "30%",
    "40%",
    "40%",
    "4%",
    "3%",
    "4%",
    "5%",
    "22%",
    "50%",
    "20%",
    "30%",
    "40%",
    "40%",
    "4%",
    "3%",
    "4%",
    "5%",
    "22%",
    "50%",
    "20%",
    "30%",
    "40%",
    "40%",
    "4%",
    "3%",
    "4%",
    "5%",
    "22%",
    "50%",
    "20%",
    "30%",
    "40%",
    "40%",
    "4%",
    "3%",
    "4%",
    "5%",
  ];
  return (
    <div className="w-full h-36 flex justify-around items-end">
      {datas.map((data, index) =>
        index < disabledBefor || index >= disabledAfter ? (
          <span
            key={index}
            className={`w-2 bg-gray-200 rounded-t-sm`}
            style={{ height: data }}
          ></span>
        ) : (
          <span
            key={index}
            className={`w-2 bg-[#E31C5F] rounded-t-sm`}
            style={{ height: data }}
          ></span>
        )
      )}
    </div>
  );
};
export default BarChart;
