"use client";
import React from "react";

import Header from '@/components/headwer';
import LoginBox from '@/components/cajalogin';
import HelpIcon from "@/components/helpicon";

export default function MainPage() { // Cambia de Home a MainPage o cualquier otro nombre
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F7]">
      {/* Header at the top */}
      <div className="absolute top-10 left-10">
        <Header />
      </div>

      {/* Login Box in the center */}
      <LoginBox />

      {/* Help Icon in the bottom right */}
      <HelpIcon />
    </div>
  );
}


/**import Header from '@/app/components/Header'

export default function Login() {
  return (
    <>
      <Header></Header>
    </>
  )
}
 */
