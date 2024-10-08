import React from "react";

const Header = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Logo Placeholder */}
      <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
        🎀 {/* Replace with an SVG or icon if needed */}
      </div>
      <h1 className="text-4xl text-pink-700 font-serif">Dress To Impress!</h1>
    </div>
  );
};

export default Header;  