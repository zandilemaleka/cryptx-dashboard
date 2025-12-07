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
    <div
      style={{
        position: "absolute",
        width: "263px",
        height: "1025px",
        left: "0px",
        top: "0px",
        background: "#F3F3F3",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "170px",
          height: "41px",
          left: "40px",
          top: "32px",
        }}
      >
        <img
          src={logoIcon}
          alt=""
          style={{
            position: "absolute",
            width: "36px",
            height: "20px",
            top: "10px",
            left: "3px",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "28.82%",
            right: "27.65%",
            top: "19.51%",
            bottom: "19.51%",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            fontSize: "21px",
            lineHeight: "25px",
            display: "flex",
            alignItems: "center",
            color: "#1A1A1A",
          }}
        >
          CryptX
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          width: "166px",
          height: "416px",
          left: "40px",
          top: "136px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "32px",
        }}
      >
        {menuItems.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 11px 8px 0px",
              gap: "20px",
              width: "166px",
              height: "32px",
            }}
          >
            <img
              src={item.icon}
              alt=""
              style={{ width: "24px", height: "24px", objectFit: "contain" }}
            />

            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
                lineHeight: "21px",
                fontWeight: item.active ? "600" : "400",
                color: item.active ? "#6154F0" : "#9E9E9E",
                display: "flex",
                alignItems: "center",
                height: "21px",
                flex: 1,
              }}
            >
              {item.name}
            </span>

            {item.notification && (
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#6154F0",
                  borderRadius: "50%",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
