// src/components/layout/Header.jsx
const Header = () => {
  return (
    <div className="relative w-full h-[73px]">
      {/* Horizontal Line */}
      <div className="absolute w-full h-0 left-0 top-[73px] border-t border-[#E4E4E4]" />

      {/* Content Container */}
      <div className="flex items-center justify-between h-full px-8">
        {/* Search Bar */}
        <div className="relative w-[355px] h-[40px]">
          <div className="absolute w-full h-full border border-[#E4E4E4] rounded-[10px]" />
          <div className="absolute w-[172px] h-[18px] left-[15px] top-[11px] flex items-center">
            <span className="font-poppins font-normal text-[12px] leading-[18px] text-[#828282]">
              Search type of keywords
            </span>
          </div>
          <div className="absolute w-[18px] h-[18px] left-[321px] top-[11px]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
                stroke="#828282"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Notification Icon */}
          <div className="w-[24px] h-[24px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Help Icon */}
          <div className="w-[24px] h-[24px]">
            <div className="w-[21.5px] h-[21.5px]">
              <svg width="21.5" height="21.5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#1A1A1A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.08997 9.00001C9.32507 8.33167 9.78912 7.76811 10.3999 7.40914C11.0107 7.05016 11.7289 6.91894 12.4271 7.03872C13.1254 7.15849 13.7588 7.52153 14.215 8.06353C14.6713 8.60554 14.9211 9.29153 14.92 10C14.92 12 11.92 13 11.92 13"
                  stroke="#1A1A1A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 17H12.01"
                  stroke="#1A1A1A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-[40px] h-[40px] bg-[#9E9E9E] rounded-full" />

            {/* User Info */}
            <div>
              <p className="font-poppins font-semibold text-[14px] leading-[21px] text-[#1A1A1A]">
                Laurice
              </p>
              <p className="font-poppins font-normal text-[12px] leading-[18px] text-[#828282]">
                @laurice22
              </p>
            </div>

            {/* Dropdown Arrow */}
            <div className="w-[24px] h-[24px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#1A1A1A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
