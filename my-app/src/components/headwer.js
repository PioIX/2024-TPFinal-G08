import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
 
export default function Headwer() {
  return(
    <div className="relative flex flex-col items-center justify-center h-40">
      {/* Logo Placeholder */}
        <Image
          src="/MOÑOOO.png"
          width={125}
          height={105}
          alt="Picture of the author"
        />
      <h1 className="text-4xl text-pink-700 font-serif text-center">
        Dress To Impress!
      </h1>
    </div>
  )
}
