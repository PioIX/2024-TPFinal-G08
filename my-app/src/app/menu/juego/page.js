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
        <div style={{ 
          backgroundColor: '#fbf3f3', 
          padding: '20px', 
          borderRadius: '10px', 
          width: '80%', 
          margin: '0 auto', 
          zIndex: 1 
        }}>
          <div className="game-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            
            <div className="avatar-panel" style={{ width: '40%', textAlign: 'center', padding: '20px' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '15px', borderRadius: '10px', minHeight: '350px' }}>
                <div style={{ 
                  backgroundColor: '#bf97a0', 
                  color: 'white', 
                  borderRadius: '10px', 
                  padding: '3px 5px', 
                  marginBottom: '8px' 
                }}>
                  Usuario
                </div>
                <div className="avatar" style={{ padding: '20px', borderRadius: '10px' }}>
                  <img src="/avatar.png" alt="Avatar" style={{ width: '80%' }} />
                </div>
              </div>
            </div>

            <div className="clothing-panel" style={{ width: '55%', textAlign: 'center', padding: '20px', backgroundColor: "#efe8e5", borderRadius: '10px' }}>
              <div className="buttons-and-selector-container" style={{ marginBottom: '20px' }}>
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
                      <img 
                        src={`/${img}`} 
                        alt={name} 
                        style={{ width: '40px', height: '40px' }} 
                      />
                    </button>
                  ))}
                </div>

                <div className="clothing-items" style={{ backgroundColor: '#fff6f2', padding: '20px', borderRadius: '10px', minHeight: '300px' }}>
                  <img src={`/${selectedCategory}.png`} alt={selectedCategory} style={{ width: '60px', margin: '10px' }} />
                </div>

              </div>
            </div>
          </div>

          {/* Botones de acción debajo del div del avatar */}
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            <button style={{
              padding: '10px 20px',
              border: 'none',
              backgroundColor: '#bf97a0',
              color: 'white',
              borderRadius: '20px', // Más redondeado
              cursor: 'pointer',
            }}>
              Guardar Outfit
            </button>
            <button style={{
              padding: '10px 20px',
              border: 'none',
              backgroundColor: '#bf97a0',
              color: 'white',
              borderRadius: '20px', // Más redondeado
              cursor: 'pointer',
            }}>
              Salir sin Guardar
            </button>
          </div>

        </div>
      </section>

      <style jsx global>{`
        body {
          background-color: #fbfcf7;
        }
      `}</style>
    </>
  );
}
