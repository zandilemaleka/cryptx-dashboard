// src/components/layout/MainContent.jsx
import React from "react";
import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import { cryptoCards, btcChartData } from "../../data/chartStaticData";

// Import icons
import bitcoinIcon from "../../assets/bitcoin.png";
import ethereumIcon from "../../assets/ethereum.png";
import litecoinIcon from "../../assets/litecoin.png";
import cardanoIcon from "../../assets/cardano.png";

const MainContent = () => {
  const iconMap = {
    Bitcoin: bitcoinIcon,
    Ethereum: ethereumIcon,
    Litecoin: litecoinIcon,
    Cardano: cardanoIcon,
  };

  return (
      <div className="relative w-full h-screen">
    {/* 2x2 Grid for crypto cards */}
      
        <div className="absolute top-[149px] left-[302px] grid grid-cols-2 gap-6">
        {cryptoCards.map((card) => (
          <MetricCard
            key={card.id}
            name={card.name}
            symbol={card.symbol}
            price={card.price}
            change={card.change}
            icon={iconMap[card.name]}
          />
        ))}
      </div>
      <ChartVisual {...btcChartData} />
    </div>
  );
};

export default MainContent;
