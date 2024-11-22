"use client";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '@/components/Header';
import Hamburguesa from '@/components/Hamburguesa';
import HelpIcon from '@/components/helpicon';
import Head from 'next/head';
import { getUsuarios } from '@/app/utils/api';

export default function Puntajes() {
  const [usuarios, setUsuarios] = useState([]);

  async function obtenerUsarios() {
    let res = await getUsuarios();
    setUsuarios(res);
    console.log(res);
  }

  useEffect(() => {
    obtenerUsarios();
  }, []);

  return (
    <>
      <head className="vh-100" style={{ backgroundColor: '#fbfcf7' }}>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <Header />
      <Hamburguesa />

      <section className="vh-100" style={{ backgroundColor: '#fbfcf7' }}>
        <div className="text-center">
          <h2 className="mb-0" style={{ color: '#d8bfc5', fontSize: '3rem', fontFamily: 'Lora, serif' }}>
            Tabla de puntajes
          </h2>
        </div>

        <div className="text-center" style={{ marginTop: '20px', height: 'auto' }}>
          <div
            style={{
              width: '70%',
              backgroundColor: '#efe8e5',
              borderRadius: '10px',
              margin: '0 auto',
              padding: '20px',
              overflow: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Cabecera de la tabla */}
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
              <h3 style={{ color: '#bf97a0', fontFamily: 'Lora, serif', fontSize: '1.5rem', flex: 1, textAlign: 'center' }}>Jugador</h3>
              <h3 style={{ color: '#bf97a0', fontFamily: 'Lora, serif', fontSize: '1.5rem', flex: 1, textAlign: 'center' }}>Puntaje</h3>
              <h3 style={{ color: '#bf97a0', fontFamily: 'Lora, serif', fontSize: '1.5rem', flex: 1, textAlign: 'center' }}>Cantidad de outfits</h3>
            </div>

            {/* Datos de los jugadores */}
            {usuarios.map(usuario => (
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-around',
                  backgroundColor: '#fff6f2',
                  margin: '6px 0',
                  borderRadius: '6px',
                  padding: '10px',
                  boxSizing: 'border-box',
                }}
                key={usuario.ID_Usuario}
              >
                <p
                  style={{
                    color: '#d8bfc5',
                    fontWeight: 'bold',
                    fontFamily: 'Lora, serif',
                    fontSize: '1rem',
                    textAlign: 'center',
                    flex: 1,
                    margin: 0,
                  }}
                >
                  {usuario.Nombre}
                </p>
                <p
                  style={{
                    color: '#d8bfc5',
                    fontWeight: 'bold',
                    fontFamily: 'Lora, serif',
                    fontSize: '1rem',
                    textAlign: 'center',
                    flex: 1,
                    margin: 0,
                  }}
                >
                  {usuario.Promedio}
                </p>
                <p
                  style={{
                    color: '#d8bfc5',
                    fontWeight: 'bold',
                    fontFamily: 'Lora, serif',
                    fontSize: '1rem',
                    textAlign: 'center',
                    flex: 1,
                    margin: 0,
                  }}
                >
                  {usuario.CantidadOutfits}
                </p>
              </div>
            ))}
          </div>
          <HelpIcon />
        </div>
      </section>
    </>
  );
}
