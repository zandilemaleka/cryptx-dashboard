import React from "react";
import bicon from "../../assets/bicon.png";
import eicon from "../../assets/eicon.png";
import licon from "../../assets/licon.png";
import { transactions } from "../../data/transactionData";

const TransactionTable = () => {
  const getAssetIcon = (asset) => {
    const icons = {
      Bitcoin: bicon,
      Ethereum: eicon,
      Litecoin: licon,
    };
    return icons[asset] || null;
  };

  return (
    <div className="absolute w-[320px] h-[352px] left-[1054px] top-[623px]">
      <div className="absolute w-[140px] h-[32px] left-0 top-0">
        <h2 className="font-poppins font-semibold text-[21px] leading-[32px] text-[#1A1A1A]">
          Transactions
        </h2>
      </div>

      {transactions.map((transaction, index) => {
        const topPosition = 56 + index * 82;

        return (
          <div
            key={transaction.id}
            className="absolute w-[320px] h-[50px] left-0"
            style={{ top: `${topPosition}px` }}
          >
            <div className="absolute w-10 h-10 left-0 rounded-full bg-white border border-[#E4E4E4] flex items-center justify-center">
              <img
                src={getAssetIcon(transaction.asset)}
                alt={transaction.asset}
                className="w-6 h-6"
              />
            </div>

            <div className="absolute w-[79px] h-[24px] left-[50px]">
              <span className="font-poppins font-semibold text-[16px] leading-[24px] text-[#1A1A1A]">
                {transaction.asset}
              </span>
            </div>

            <div className="absolute w-[64px] h-[21px] left-[50px] top-[29px]">
              <span className="font-poppins font-normal text-[14px] leading-[21px] text-[#9E9E9E]">
                {transaction.type}
              </span>
            </div>

            <div className="absolute w-[62px] h-[24px] left-[258px]">
              <span className="font-poppins font-semibold text-[16px] leading-[24px] text-[#1A1A1A] text-right tracking-[0.02em]">
                {transaction.amount}
              </span>
            </div>

            <div className="absolute w-[84px] h-[21px] left-[236px] top-[29px]">
              <span className="font-poppins font-normal text-[14px] leading-[21px] text-[#9E9E9E] text-right">
                {transaction.date}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionTable;
