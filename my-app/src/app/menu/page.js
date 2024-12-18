"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import HelpIcon from '@/components/helpicon';
import { getRemeras, getPantalones, getPersonajes, getCalzados, getAccesorios, getMascotas, getOutfits } from '@/app/utils/api.js'
import Hamburguesa from '@/components/Hamburguesa';
import ChatBox from '@/components/ChatBox';



export default function pagina() {
  const handleJugarClick = () => {
    window.location.href = '/menu/juego'; // Redirige a /juego
  };

  const handleOutfitsClick = () => {
    window.location.href = '/menu/outfits'; // Redirige a /outfits
  };

  const handlePuntajesClick = () => {
    window.location.href = '/menu/puntajes'; // Redirige a /puntajes
  };

  const handleVotarClick = () => {
    window.location.href = '/menu/votar'; // Redirige a /votar
  };

  

  return (
    <>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <section className="vh-100" style={{ backgroundColor: '#fbfcf7' }}>
        <div className="card-body p-5 text-center">
          <h2 className="mb-4" style={{ color: '#d8bfc5', fontSize: '3rem', marginTop: '10%', fontFamily: 'Lora, serif' }}>
            Dress To Impress!
          </h2>
          <div style={{ marginBottom: '20px' }}>
            <img src="/ribbon.png" alt="Descripción de la imagen" className="img-fluid" style={{ height: '120px' }} />
          </div>
          <ChatBox></ChatBox>
          <button 
            className="btn btn-success btn-lg btn-block" 
            type="button" 
            style={{ backgroundColor: '#d8bfc5', color: '#fff', margin: '10px', border: 'none', fontFamily: 'Poppins, sans-serif' }} 
            onClick={handleJugarClick} 
          >
            JUGAR
          </button>
          <button 
            className="btn btn-success btn-lg btn-block" 
            type="button" 
            style={{ backgroundColor: '#d8bfc5', color: '#fff', margin: '10px', border: 'none', fontFamily: 'Poppins, sans-serif' }} 
            onClick={handleOutfitsClick} 
          >
            VER OUTFITS
          </button>
          <button 
            className="btn btn-success btn-lg btn-block" 
            type="button" 
            style={{ backgroundColor: '#d8bfc5', color: '#fff', margin: '10px', border: 'none', fontFamily: 'Poppins, sans-serif' }} 
            onClick={handlePuntajesClick} // Maneja el clic para TABLA DE PUNTAJES
          >
            TABLA DE PUNTAJES
          </button>
          <button 
            className="btn btn-success btn-lg btn-block" 
            type="button" 
            style={{ backgroundColor: '#d8bfc5', color: '#fff', border: 'none', fontFamily: 'Poppins, sans-serif' }} 
            onClick={handleVotarClick} // Maneja el clic para VOTAR
          >
            VOTAR
          </button>
        </div>
        <HelpIcon />
      </section>
    </>
  );
}
