// components/HelpIcon.js
import React from "react";

const HelpIcon = () => {
  return (
    <div className="fixed bottom-5 right-5">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <span className="text-xl text-gray-500">?</span>
      </div>
    </div>
  );
};

export default HelpIcon;