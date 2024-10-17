"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HelpIcon from '@/components/helpicon';

import Head from 'next/head';
import { useState } from 'react';

export default function DressUpGame() {
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
      </Head>

      <section style={{ backgroundColor: '#fbfcf7', minHeight: '100vh', padding: '20px' }}>
        <div className="game-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Panel del avatar */}
          <div className="avatar-panel" style={{ width: '40%', textAlign: 'center', padding: '20px' }}>
            <h2 style={{ fontFamily: 'Lora, serif', color: '#c87c8d' }}>Vestidor Virtual</h2>
            <div className="avatar" style={{ backgroundColor: '#fff6f2', padding: '20px', borderRadius: '10px' }}>
              <img src="/avatar.png" alt="Avatar" style={{ width: '80%' }} />
            </div>
          </div>

          {/* Panel de selección de ropa */}
          <div className="clothing-panel" style={{ width: '55%', textAlign: 'center', padding: '20px' }}>
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

            {/* Contenedor de ropa */}
            <div className="clothing-items" style={{ backgroundColor: '#fff6f2', padding: '20px', borderRadius: '10px', minHeight: '300px' }}>
              {/* Aquí puedes renderizar items de la categoría seleccionada */}
              <p style={{ color: '#bf97a0', fontFamily: 'Lora, serif' }}>Selecciona {selectedCategory}</p>
              {/* Ejemplo de imagen de prenda */}
              <img src={`/${selectedCategory}.png`} alt={selectedCategory} style={{ width: '60px', margin: '10px' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
