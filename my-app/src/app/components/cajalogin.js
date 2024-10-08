// components/LoginBox.js
import React from "react";

const LoginBox = () => {
  return (
    <div className="bg-pink-50 p-8 rounded-lg shadow-lg w-80 text-center">
      <h2 className="text-2xl text-pink-700 mb-6">LOGIN</h2>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
      <button className="bg-pink-600 text-white py-2 px-6 rounded-lg hover:bg-pink-700 transition duration-300">
        Reset Password
      </button>
    </div>
  );
};

export default LoginBox;