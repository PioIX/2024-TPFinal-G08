"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '@/components/Header';

export default function Reglas() {
  return (
    <>       
      <Header></Header>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <section className="vh-100" style={{ backgroundColor: '#fbfcf7' }}>
        <div className="card-body p-5 text-center">
          {/* Ajustamos el marginTop del título para que esté más arriba */}
          <h2 className="mb-4" style={{ color: '#d8bfc5', fontSize: '2rem', marginTop: '2%', fontFamily: 'Lora, serif' }}>
            Reglas del juego
          </h2>
        </div>

        {/* Reducimos el margen superior del div para que esté más cerca del título */}
        <div className="text-center" style={{ marginTop: '-10px', height: '30vh' }}>
          <div style={{ 
            width: '80%',  
            backgroundColor: '#efe8e5', 
            borderRadius: '10px', 
            margin: '0 auto',
            padding: '20px' // Espaciado interno
          }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 style={{ color: '#c87c8d', fontFamily: 'Lora, serif', fontSize: '1.75rem' }}>
                Reglamento 
              </h3>
              <ul style={{ 
                listStylePosition: 'inside', 
                padding: '0', 
                fontFamily: 'Lora, serif', 
                fontSize: '1.5rem', 
                color: '#bf97a0',  
                textAlign: 'left',
                marginTop: '20px'
              }}>
                <li>En esta propuesta vas a tener un personaje (a elección) y lo vas a poder vestir con las prendas que más te gusten.</li>
                <li>Dentro del juego, el usuario, va a poder combinar los vestuarios a su gusto. </li>
                <li>¡No hay un límite de outfits! Podes armar la cantidad que vos quieras. </li>
                <li>Con el outfit listo, lo podes publicar a un muro dondelos demás van a poder ver y puntuar.</li>
                <li>En el muro vas a poder dejar un comentario en el personaje que quieras, (respeto plis) te guste o no y puntuarlo de 1 a 5 estrellas. </li>
                <li>Las prendas varían entre gorros, remeras, buzos, pantalones, calzas, etc.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
