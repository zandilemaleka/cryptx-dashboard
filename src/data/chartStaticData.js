// src/data/chartStaticData.js

// 1. TOP ROW CARDS
export const cryptoCards = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$40,291",
    change: "+2.5%",
    isPositive: true,
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$18,291",
    change: "+0.25%",
    isPositive: true,
  },
  {
    id: 3,
    name: "Litecoin",
    symbol: "LTC",
    price: "$8,291",
    change: "+0.9%",
    isPositive: true,
  },
  {
    id: 4,
    name: "Cardano",
    symbol: "ADA",
    price: "$3,291",
    change: "+3.2%",
    isPositive: true,
  },
];

// 2. BTC CHART DATA
export const btcChartData = {
  title: "BTC Prices",
  currentPrice: "$25,240",
  labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
  prices: [25000, 28000, 32000, 29000, 35000, 40291],
  yAxisLabels: ["$0", "$200", "$400", "$800"],
};

// 3. LIVE MARKET TABLE 
export const liveMarket = [
  {
    id: 1,
    crypto: "Ethereum",
    pair: "ETH/USDT",
    price: "39,786 USD",
    change: "+14.02%",
  },
  {
    id: 2,
    crypto: "Bitcoin",
    pair: "ETC/USDT",
    price: "21,786 USD",
    change: "+4.02%",
  },
  {
    id: 3,
    crypto: "Litecoin",
    pair: "ITC/USDT",
    price: "9,786 USD",
    change: "-4.02%",
  },
  {
    id: 4,
    crypto: "Cardano",
    pair: "ADA/USDT",
    price: "4,786 USD",
    change: "+0.02%",
  },
];
