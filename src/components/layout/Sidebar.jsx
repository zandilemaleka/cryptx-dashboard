import React from "react";
import overviewIcon from "../../assets/overview.png";
import transactionsIcon from "../../assets/transactions.png";
import walletIcon from "../../assets/wallet.png";
import mailboxIcon from "../../assets/mailbox.png";
import settingIcon from "../../assets/setting.png";
import logoutIcon from "../../assets/logout.png";
import logoIcon from "../../assets/logo.png";

const Sidebar = () => {
  const menuItems = [
    { name: "Overview", active: true, notification: true, icon: overviewIcon },
    { name: "Transactions", active: false, icon: transactionsIcon },
    { name: "Wallet", active: false, icon: walletIcon },
    { name: "Mail Box", active: false, icon: mailboxIcon },
    { name: "Setting", active: false, icon: settingIcon },
    { name: "Logout", active: false, icon: logoutIcon },
  ];

  return (
    <div className="absolute w-[263px] h-[1025px] left-0 top-0 bg-[#F3F3F3]">
      <div className="absolute w-[170px] h-[41px] left-[40px] top-[32px]">
        <img
          src={logoIcon}
          alt=""
          className="absolute w-[36px] h-[20px] top-[10px] left-[3px]"
        />

        <div className="absolute left-[28.82%] right-[27.65%] top-[19.51%] bottom-[19.51%] font-inter font-bold text-[21px] leading-[25px] flex items-center text-[#1A1A1A]">
          CryptX
        </div>
      </div>

      <div className="absolute w-[166px] h-[416px] left-[40px] top-[136px] flex flex-col items-start gap-8">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="flex flex-row items-center pr-[11px] pb-[8px] gap-5 w-[166px] h-[32px]"
          >
            <img
              src={item.icon}
              alt=""
              className="w-[24px] h-[24px] object-contain"
            />

            <span
              className={`font-poppins text-[14px] leading-[21px] flex items-center h-[21px] flex-1 ${
                item.active
                  ? "font-semibold text-[#6154F0]"
                  : "font-normal text-[#9E9E9E]"
              }`}
            >
              {item.name}
            </span>

            {item.notification && (
              <div className="w-[10px] h-[10px] bg-[#6154F0] rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
