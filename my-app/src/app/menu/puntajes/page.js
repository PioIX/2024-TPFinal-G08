"use client";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '@/components/Header';
import Hamburguesa from '@/components/Hamburguesa';
import HelpIcon from '@/components/helpicon';
import Head from 'next/head';

export default function Puntajes() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('http://localhost:4000/UsuariosGet'); // 
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
      <head className="vh-100" style={{ backgroundColor: '#fbfcf7' }}>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      <Header />
      <Hamburguesa></Hamburguesa>
      </head>
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
            width: '70%',  
            height: '220%', 
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
                <p style={{
                  backgroundColor: '#fff6f2',
                  color: '#d8bfc5',
                  fontWeight: 'bold',
                  fontFamily: 'Lora, serif',
                  fontSize: '1rem', // Tamaño compacto de fuente
                  padding: '6px 12px', // Asegura espacio suficiente sin ensanchar demasiado
                  margin: '6px auto', // Centra cada "cuadradito" y lo separa verticalmente
                  borderRadius: '6px',
                  display: 'block', // Mantiene los elementos en una nueva línea cada uno
                  width: '65%', // Reduce el ancho para hacerlos más angostos
                  textAlign: 'center'
                }} key={usuario.ID_Usuario}>
                  {usuario.Nombre}
                </p>
              ))}
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 style={{ color: '#bf97a0', fontFamily: 'Lora, serif', fontSize: '1.5rem' }}>Puntaje</h3>
              {usuarios.map(usuario => (
                <p style={{ 
                  backgroundColor: '#fff6f2',
                  color: '#d8bfc5',
                  fontWeight: 'bold',
                  fontFamily: 'Lora, serif',
                  fontSize: '1rem', // Tamaño compacto de fuente
                  padding: '6px 12px', // Asegura espacio suficiente sin ensanchar demasiado
                  margin: '6px auto', // Centra cada "cuadradito" y lo separa verticalmente
                  borderRadius: '6px',
                  display: 'block', // Mantiene los elementos en una nueva línea cada uno
                  width: '65%', // Reduce el ancho para hacerlos más angostos
                  textAlign: 'center'}} key={usuario.ID_Usuario}>
                  {usuario.Puntaje}
                </p>
              ))}
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 style={{ color: '#bf97a0', fontFamily: 'Lora, serif', fontSize: '1.5rem' }}>Cantidad de outfits</h3>
              {usuarios.map(usuario => (
                <p style={{ 
                  backgroundColor: '#fff6f2',
                  color: '#d8bfc5',
                  fontWeight: 'bold',
                  fontFamily: 'Lora, serif',
                  fontSize: '1rem', // Tamaño compacto de fuente
                  padding: '6px 12px', // Asegura espacio suficiente sin ensanchar demasiado
                  margin: '6px auto', // Centra cada "cuadradito" y lo separa verticalmente
                  borderRadius: '6px',
                  display: 'block', // Mantiene los elementos en una nueva línea cada uno
                  width: '65%', // Reduce el ancho para hacerlos más angostos
                  textAlign: 'center'}} key={usuario.ID_Usuario}>
                  {usuario.CantidadOutfits}
                </p>
              ))}
            </div>
          </div>
          <HelpIcon></HelpIcon>
        </div>
      </section>
      <HelpIcon />
    </>
  );
}
