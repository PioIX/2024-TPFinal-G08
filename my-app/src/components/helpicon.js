import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HelpIcon() {
  function paso(){
    <a href="pagelogin.js"></a>
  }

  return (
    <div className="fixed top-5 right-5 mt-2">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <button className="text-xl text-gray-500" onClick={paso()}>Ayuda</button>
      </div>
    </div>
  );
};

/*import Link from 'next/link';

const HelpIcon = () => {
  return (
    <div className="fixed top-5 right-5 mt-2">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <Link href="/help">
          <button className="btn btn-success btn-lg btn-block" type="button">Ayuda</button>
        </Link>
      </div>
    </div>
  );
};
*/

