import React from "react";

const MetricCard = ({ name, symbol, price, change, icon }) => {
  const isPositive = change.startsWith("+");

  return (
    <div className="relative w-[252px] h-[205px] bg-white shadow-[4px_4px_33px_rgba(0,0,0,0.05)] rounded-[20px]">
      <div className="absolute w-[52px] h-[52px] left-[30px] top-[32px]">
        <img src={icon} alt={name} className="w-full h-full" />
      </div>

      <div className="absolute left-[146.75px] top-[54.13px] flex items-center gap-1">
        {isPositive ? (
          <svg
            className="w-[11px] h-[6px]"
            viewBox="0 0 11 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 1L5.5 5M5.5 1L8 3.5M5.5 1L3 3.5"
              stroke="#1ECB4F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="w-[11px] h-[6px]"
            viewBox="0 0 11 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 5L5.5 1M5.5 5L8 2.5M5.5 5L3 2.5"
              stroke="#EF4444"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        <span
          className={`font-poppins font-medium text-[14px] leading-[22px] ${
            isPositive ? "text-[#1ECB4F]" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>

      <div className="absolute w-[106px] h-[42px] left-[30px] top-[108px]">
        <span className="font-poppins font-semibold text-[28px] leading-[42px] text-[#1A1A1A]">
          {price}
        </span>
      </div>

      <div className="absolute w-[90px] h-[21px] left-[30px] top-[155px]">
        <span className="font-poppins font-normal text-[14px] leading-[21px] text-[#9E9E9E] whitespace-nowrap">
          {name} - {symbol}
        </span>
      </div>
    </div>
  );
};

export default MetricCard;
