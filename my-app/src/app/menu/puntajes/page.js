"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '@/components/Header';
import Hamburguesa from '@/components/Hamburguesa';
import HelpIcon from '@/components/helpicon';
import Head from 'next/head';

export default function Puntajes() {
  return (
    <>
      <Head>
        <title>Tabla de Puntajes</title>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ backgroundColor: '#fbfcf7', minHeight: '100vh' }}>
        <Header />
        <Hamburguesa />
        <HelpIcon />

        <section className="vh-100" style={{ backgroundColor: '#fbfcf7' }}>
          <div className="text-center">
            <h2 className="mb-0" style={{ color: '#d8bfc5', fontSize: '3rem', fontFamily: 'Lora, serif' }}>
              Tabla de puntajes
            </h2>
          </div>
          <div className="text-center" style={{ marginTop: '20px', height: '30vh' }}>
            <div style={{
              width: '80%',
              height: '240%',
              backgroundColor: '#efe8e5',
              borderRadius: '10px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px'
            }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <h3 style={{ color: '#bfb8b8' }}>Jugador</h3>
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <h3 style={{ color: '#bfb8b8' }}>Puntaje</h3>
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <h3 style={{ color: '#bfb8b8' }}>Cantidad de outfits</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
