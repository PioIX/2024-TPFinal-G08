/*import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const HelpIcon = () => {
  return (
    <div className="fixed top-5 right-5 mt-2">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <span className="text-xl text-gray-500">Ayuda</span>
      </div>
    </div>
  );
};

export default HelpIcon;*/

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const HelpIcon = () => {
  const handleClick = () => {
    alert("Se hizo clic en el botón de ayuda!");
  };

  return (
    <div 
      /*className="fixed" 
      style={{
        bottom: '20px',
        right: '20px'
      }}*/
    >
      <div 
        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300"
        onClick={handleClick}
      >
        <span className="text-xl text-gray-500" style={{bottom:'20px', right:'20px'}}>Ayuda</span>
      </div>
    </div>
  );
};

export default HelpIcon;


