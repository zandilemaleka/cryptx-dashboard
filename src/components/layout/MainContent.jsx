import React from "react";
import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import { cryptoCards, btcChartData } from "../../data/chartStaticData";
import TransactionTable from "../ui/TransactionTable";
import LiveMarket from "../ui/LiveMarket";

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
    <div className="relative z-0">
      <div className="flex p-6 gap-6 pt-[40px]">
        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-6 mt-[15px]">
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

        {/* Chart */}
        <ChartVisual {...btcChartData} />
        {/* Transactions Table */}
        <TransactionTable />
        <LiveMarket />
      </div>
    </div>
  );
};

export default MainContent;
