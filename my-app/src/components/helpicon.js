import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'


export default function HelpIcon(){

  return (
    <div className="fixed top-5 right-5 mt-2">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <Link href={'/menu/reglas'}>
        <button className="btn btn-success btn-lg btn-block" type="submit" style={{ backgroundColor: '#d8bfc5', color: '#fff',   padding: '5px 10px',  border: 'none', fontFamily: 'Poppins, sans-serif', fontSize: "14px", position: 'absolute', bottom: '10px', right: '10px'  }}>AYUDA</button>          
        </Link>
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

