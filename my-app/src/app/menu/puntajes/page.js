"use client";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '@/components/Header';
import HelpIcon from '@/components/helpicon';
import Hamburguesa from '@/components/Hamburguesa';
import Head from 'next/head'; // Importa el componente Head

export default function Puntajes() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const response = await fetch('/UsuariosGet'); // Cambia aquí a tu nuevo endpoint
      const data = await response.json();
      setUsuarios(data);
    };

    fetchUsuarios();
  }, []);

  return (
    <>
      <Head className="vh-100" style={{ backgroundColor: '#fbfcf7' }}>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Header/>
      <Hamburguesa />

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
              {usuarios.map(usuario => (
                <p key={usuario.ID_Usuario}>{usuario.Nombre}</p>
              ))}
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 style={{ color: '#bfb8b8' }}>Puntaje</h3>
              {usuarios.map(usuario => (
                <p key={usuario.ID_Usuario}>{usuario.Puntaje}</p>))}
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 style={{ color: '#bfb8b8' }}>Cantidad de outfits</h3>
            </div>
          </div>
        </div>
      </section>
      <HelpIcon />
    </>
  );
}
