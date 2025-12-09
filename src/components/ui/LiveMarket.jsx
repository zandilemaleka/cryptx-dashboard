import React from "react";
import MiniChart from "./MiniChart";
import logoe from "../../assets/logoe.png";
import logob from "../../assets/logob.png";
import logol from "../../assets/logol.png";
import logoc from "../../assets/logoc.png";
import { liveMarket } from "../../data/chartStaticData";

const LiveMarket = () => {
  const marketData = liveMarket.map((item, index) => {
    const icons = [logoe, logob, logol, logoc];
    const chartColors = ["#6154F0", "#FF8D4D", "#3B82F6", "#10B981"];

    return {
      id: item.id,
      name: item.crypto,
      symbol: item.pair,
      price: item.price,
      change: item.change,
      changeColor: item.change.includes("+") ? "#1ECB4F" : "#EF4444",
      chartColor: chartColors[index] || "#6154F0",
      icon: icons[index] || logoe,
    };
  });

  return (
    <div className="absolute w-[692px] h-[358px] left-[40px] top-[510px]">
      <div className="absolute w-[121px] h-[32px] left-0 top-0">
        <h2 className="font-poppins font-semibold text-[21px] leading-[32px] text-[#1A1A1A]">
          Live Market
        </h2>
      </div>

      {marketData.map((item, index) => {
        const topPosition = 58 + index * 83;

        return (
          <div
            key={item.id}
            className="absolute w-[692px] h-[51px] left-0"
            style={{ top: `${topPosition}px` }}
          >
            {/* Icon */}
            <div className="absolute left-0">
              <img
                src={item.icon}
                alt={item.name}
                className="w-[50px] h-[50px]"
              />
            </div>

            {/* Coin Name */}
            <div className="absolute w-[104px] h-[24px] left-[65px]">
              <span className="font-poppins font-semibold text-[16px] leading-[24px] text-[#1A1A1A] opacity-80">
                {item.name}
              </span>
            </div>

            {/* Symbol */}
            <div className="absolute w-[104px] h-[21px] left-[65px] top-[29px]">
              <span className="font-poppins font-normal text-[14px] leading-[21px] text-[#9E9E9E] tracking-[0.02em] opacity-80">
                {item.symbol}
              </span>
            </div>

            {/* "Change" Label */}
            <div className="absolute w-[104px] h-[18px] left-[236px]">
              <span className="font-poppins font-normal text-[12px] leading-[18px] text-[#9E9E9E] tracking-[0.02em] opacity-80">
                Change
              </span>
            </div>

            {/* Change Percentage */}
            <div className="absolute w-[56px] h-[24px] left-[236px] top-[27px]">
              <span
                className="font-poppins font-medium text-[14px] leading-[24px] opacity-80"
                style={{ color: item.changeColor }}
              >
                {item.change}
              </span>
            </div>

            {/* "Price" Label */}
            <div className="absolute w-[104px] h-[18px] left-[387px]">
              <span className="font-poppins font-normal text-[12px] leading-[18px] text-[#9E9E9E] tracking-[0.02em] opacity-80">
                Price
              </span>
            </div>

            {/* Price Value */}
            <div className="absolute w-[81px] h-[21px] left-[387px] top-[29px]">
              <span className="font-poppins font-semibold text-[14px] leading-[21px] text-[#1A1A1A] tracking-[0.02em] opacity-80">
                {item.price}
              </span>
            </div>

            {/* Mini Chart */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <MiniChart color={item.chartColor} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LiveMarket;
