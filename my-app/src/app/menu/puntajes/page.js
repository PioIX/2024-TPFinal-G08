"use client";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '@/components/Header';
import HelpIcon from '@/components/helpicon';
import Hamburguesa from '@/components/Hamburguesa';
import Head from 'next/head';

export default function Puntajes() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('http://localhost:4000/UsuariosGet'); // Asegúrate de que la ruta sea correcta
        if (!response.ok) {
          throw new Error(`Error en la respuesta: ${response.statusText}`);
        }
        const data = await response.json();
        
        console.log("Data obtenida de UsuariosGet:", data); // Verifica qué estructura tiene `data`
        
        setUsuarios(data); // Aquí asumimos que `data` es un array de objetos [{ ID_Usuario, Nombre, Puntaje }]
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
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
              <h3 style={{ color: '#bf97a0', fontFamily: 'Lora, serif', fontSize: '1.5rem' }}>Jugador</h3>
              {usuarios.map(usuario => (
                <p style={{ color: '#d8bfc5', fontWeight: 'bold', fontFamily: 'Lora, serif' }} key={usuario.ID_Usuario}>
                  {usuario.Nombre}
                </p>
              ))}
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 style={{ color: '#bf97a0', fontFamily: 'Lora, serif', fontSize: '1.5rem' }}>Puntaje</h3>
              {usuarios.map(usuario => (
                <p style={{ color: '#d8bfc5', fontWeight: 'bold', fontFamily: 'Lora, serif' }} key={usuario.ID_Usuario}>
                  {usuario.Puntaje}
                </p>
              ))}
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 style={{ color: '#bf97a0', fontFamily: 'Lora, serif', fontSize: '1.5rem' }}>Cantidad de outfits</h3>
              {/* Puedes agregar aquí cualquier otra información que necesites */}
            </div>
          </div>
        </div>
      </section>
      <HelpIcon />
    </>
  );
}
