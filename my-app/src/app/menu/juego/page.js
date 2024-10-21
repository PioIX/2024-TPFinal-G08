"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HelpIcon from '@/components/helpicon';
import Header from '@/components/Header';
import Hamburguesa from '@/components/Hamburguesa';

import Head from 'next/head';
import { useState } from 'react';

export default function Game() {
  const [selectedCategory, setSelectedCategory] = useState('tops');
  const categories = [
    { name: 'tops', img: '4.png' },
    { name: 'bottoms', img: '6.png' },
    { name: 'shoes', img: '7.png' },
    { name: 'accessories', img: '8.png' },
    { name: 'people', img: '5.png' },
    { name: 'pets', img: '9.png' },
    { name: 'backgrounds', img: '10.png' },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <Hamburguesa />
      <HelpIcon />

      <section style={{ backgroundColor: '#fbfcf7', minHeight: '100vh', padding: '20px' }}>
        {/* Div de fondo que cubre todos los elementos */}
        <div style={{ 
          backgroundColor: '#fbf3f3', /* Rosita pastel más fuerte para el fondo */
          padding: '20px', 
          borderRadius: '10px', 
          width: '80%',  /* Achicado el fondo */
          margin: '0 auto', 
          zIndex: 1 
        }}>
          <div className="game-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
            {/* Panel del avatar */}
            <div className="avatar-panel" style={{ width: '40%', textAlign: 'center', padding: '20px' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '15px', borderRadius: '10px', minHeight: '300px' }}>
                <div className="avatar" style={{ padding: '20px', borderRadius: '10px' }}>
                  <img src="/avatar.png" alt="Avatar" style={{ width: '80%' }} />
                </div>
              </div>
            </div>

            {/* Panel de selección de ropa */}
            <div className="clothing-panel" style={{ width: '55%', textAlign: 'center', padding: '20px', backgroundColor: "#efe8e5", borderRadius: '10px'  }}>

              {/* Nuevo contenedor para los botones y el selector de prendas */}
              <div className="buttons-and-selector-container" style={{ marginBottom: '20px' }}>
                {/* Contenedor solo para los botones */}
                <div className="category-selector" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
                  {categories.map(({ name, img }) => (
                    <button 
                      key={name} 
                      onClick={() => handleCategoryChange(name)}
                      style={{
                        padding: '10px',
                        border: 'none',
                        backgroundColor: selectedCategory === name ?  '#bf97a0' : '#fbf3f3',
                        borderRadius: '5px',
                      }}>
                      {/* Imagen en lugar de texto dentro del botón */}
                      <img 
                        src={`/${img}`} // Ruta de la imagen que usarás para los botones
                        alt={name} 
                        style={{ width: '40px', height: '40px' }} 
                      />
                    </button>
                  ))}
                </div>

                {/* Selector de prenda */}
                <div className="clothing-items" style={{ backgroundColor: '#fff6f2', padding: '20px', borderRadius: '10px', minHeight: '300px' }}>
                  <img src={`/${selectedCategory}.png`} alt={selectedCategory} style={{ width: '60px', margin: '10px' }} />
                </div>

              </div> {/* Cierre del nuevo div buttons-and-selector-container */}
            </div>
          </div>
        </div>
      </section>

      {/* Estilos globales para el body */}
      <style jsx global>{`
        body {
          background-color: #fff; /* Cambia el color según lo que necesites */
        }
      `}</style>
    </>
  );
}
