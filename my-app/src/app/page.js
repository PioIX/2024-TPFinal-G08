"use client";


/*
import Layout from '@/app/components/layout';
import Header from '@/app/components/Header';
import LoginBox from '@/app/components/cajalogin';
*/
export default function Home() {
  return (
    <Layout>
      <Header />
      <LoginBox />
    </Layout>
  );
}

// pages/index.js
import React from "react";
import Header from "@/app/components/Header";
import LoginBox from "@/app/components/LoginBox";
import HelpIcon from "@app/components/HelpIcon";

export default function Home() {
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
