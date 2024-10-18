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
  const categories = ['tops', 'bottoms', 'accessories', 'shoes'];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        <style>{`
          body {
            background-color: #fbf3f3; /* Rosita pastel */
          }
        `}</style>
      </Head>

      <Header />
      <Hamburguesa />
      <HelpIcon />

      <section style={{ backgroundColor: '#fbf3f3', minHeight: '100vh', padding: '20px' }}>
        {/* Div de fondo que cubre todos los elementos */}
        <div style={{ 
          backgroundColor: '#ffe0e9', /* Rosita pastel más fuerte para el fondo */
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
            <div className="clothing-panel" style={{ width: '55%', textAlign: 'center', padding: '20px' }}>
              {/* Contenedor de ropa */}
              <div className="clothing-items" style={{ backgroundColor: '#fff6f2', padding: '20px', borderRadius: '10px', minHeight: '300px' }}>
                <p style={{ color: '#bf97a0', fontFamily: 'Lora, serif' }}>Selecciona {selectedCategory}</p>

                {/* Botones de categoría dentro del contenedor */}
                <div className="category-selector" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
                  {categories.map((category) => (
                    <button 
                      key={category} 
                      onClick={() => handleCategoryChange(category)}
                      style={{
                        padding: '10px',
                        border: 'none',
                        backgroundColor: selectedCategory === category ? '#c87c8d' : '#efe8e5',
                        color: '#fff',
                        borderRadius: '5px',
                        fontFamily: 'Poppins, sans-serif',
                      }}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Imagen de prenda seleccionada */}
                <img src={`/${selectedCategory}.png`} alt={selectedCategory} style={{ width: '60px', margin: '10px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
