import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const HelpIcon = () => {
  return (
    <div className="fixed top-5 right-5 mt-2">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <button className="btn btn-success btn-lg btn-block" type="submit" onClick={ayuda}>Ayuda</button>
      </div>
    </div>
    
  );
};

export default HelpIcon;

/***span className="text-xl text-gray-500" */

