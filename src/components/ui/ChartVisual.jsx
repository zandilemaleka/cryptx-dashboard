import React from "react";

const ChartVisual = ({ title, currentPrice, labels, yAxisLabels }) => {
  return (
    <div className="absolute w-[534px] h-[430px] top-[149px] left-[863px] bg-white shadow-[4px_4px_33px_rgba(0,0,0,0.05)] rounded-[20px]">
      <div className="absolute w-[110px] h-[32px] left-[33px] top-[30px]">
        <span className="font-poppins font-medium text-[21px] leading-[32px] text-[#1A1A1A]">
          {title}
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

      {/* Triangle Gradient Area */}
      <div className="absolute w-[36px] h-[169px] left-[243px] top-[190px]">
        <svg width="36" height="169" viewBox="0 0 36 169" fill="none">
          <rect width="36" height="169" fill="url(#triangle-gradient)" />
          <defs>
            <linearGradient
              id="triangle-gradient"
              x1="13.5"
              y1="169"
              x2="13.5"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6154F0" stopOpacity="0.3" />
              <stop offset="1" stopColor="#6154F0" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Chart Line */}
      <div className="absolute w-[430px] h-[108px] left-[83px] top-[123px]">
        <svg width="430" height="108" viewBox="0 0 430 108" fill="none">
          <path
            d="M1 65C36.9708 65 53.6529 11.5 88.0597 11.5C122.467 11.5 148.764 60 179 60C209.236 60 203.359 38.5 243.5 38.5C283.641 38.5 272.605 107 318.481 107C364.357 107 328.386 1 429 1"
            stroke="url(#line-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="line-gradient"
              x1="11.4263"
              y1="64.5"
              x2="428.997"
              y2="60.6953"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B4AEFE" />
              <stop offset="1" stopColor="#2618CA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Current Price Indicator */}
      <div className="absolute w-[81px] h-[32px] left-[220px] top-[193px] bg-[#6154F0] shadow-[4px_4px_33px_rgba(0,0,0,0.05)] rounded-[10px] flex items-center justify-center">
        <span className="font-poppins font-medium text-[14px] leading-[21px] text-white">
          {currentPrice}
        </span>
      </div>

      {/* Dot on Line */}
      <div className="absolute w-[14px] h-[14px] left-[256px] top-[176px]">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle
            cx="7"
            cy="7"
            r="6"
            fill="#6154F0"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* X-axis Line */}
      <div className="absolute w-[424px] h-[0px] left-[83px] top-[359px] border-t border-[#E4E4E4]" />

      {/* X-axis Labels */}
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

export default ChartVisual;
