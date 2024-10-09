// components/LoginBox.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginBox = () => {
  return (
    <div className="bg-pink-50 p-8 rounded-lg shadow-lg w-80 text-center">
      <h2 className="text-2xl text-pink-700 mb-6">Login</h2>
      <input
        type="text"
        placeholder="Nombre de Usuario"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
      <br></br>
      <input
        type="text"
        placeholder="Contraseña"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
      <button className="bg-pink-600 text-white py-2 px-6 rounded-lg hover:bg-pink-700 transition duration-300">
        Ingresar
      </button>
    </div>
  );
};

export default LoginBox;