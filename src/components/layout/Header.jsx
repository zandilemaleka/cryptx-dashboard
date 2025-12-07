import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-black">Overview</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search type of keywords"
            className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            🔍
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <div className="w-10 h-10 rounded-full bg-gray-400"></div>
      </div>
    </div>
  );
};

export default Header;
