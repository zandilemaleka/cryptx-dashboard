import React from "react";
import rectangleImg from "../../assets/rectangle.png";
import vectorImg from "../../assets/vector.png";
import dotImg from "../../assets/dot.png";

const ChartVisuals = ({ title, currentPrice, labels, yAxisLabels }) => {
  return (
    <div className="absolute w-[534px] h-[442px] top-[149px] left-[863px] bg-white shadow-[4px_4px_33px_rgba(0,0,0,0.05)] rounded-[20px]">
      <div className="absolute w-[110px] h-[32px] left-[33px] top-[30px]">
        <span className="font-poppins font-medium text-[21px] leading-[32px] text-[#1A1A1A]">
          {title}
        </span>
      </div>

      <div className="absolute w-[56px] h-[21px] left-[233px] top-[199px]">
        <span className="font-poppins font-medium text-[14px] leading-[21px] text-white">
          {currentPrice}
        </span>
      </div>

      <div className="absolute w-[34px] h-[274px] left-[33px] top-[94px] flex flex-col justify-between">
        {yAxisLabels.map((label, index) => (
          <span
            key={index}
            className="font-poppins font-normal text-[10px] leading-[15px] text-[#9E9E9E]"
          >
            {label}
          </span>
        ))}
      </div>

      <div className="absolute w-[428px] h-[106px] left-[83px] top-[123px]">
        <img
          src={vectorImg}
          alt="Chart"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute w-[81px] h-[32px] left-[220px] top-[193px]">
        <img src={rectangleImg} alt="Tooltip" className="w-full h-full" />
      </div>

      <div className="absolute w-[10px] h-[10px] left-[256px] top-[176px]">
        <img src={dotImg} alt="Dot" className="w-full h-full" />
      </div>

      <div className="absolute w-[424px] h-[0px] left-[83px] top-[359px] border-t border-[#E4E4E4]" />

      <div className="absolute w-[424px] h-[16px] left-[83px] top-[394px] flex justify-between">
        {labels.map((label, index) => (
          <span
            key={index}
            className="font-poppins font-normal text-[10px] leading-[15px] text-[#9E9E9E]"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ChartVisuals;
