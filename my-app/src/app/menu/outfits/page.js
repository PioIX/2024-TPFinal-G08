"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HelpIcon from '@/components/helpicon';
import Header from '@/components/Header';
import Hamburguesa from '@/components/Hamburguesa';


export default function Outfits() {
  return (
    <>
      <Header></Header>
      <Hamburguesa></Hamburguesa>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <section className="vh-100" style={{ backgroundColor: '#fbfcf7' }}>
        <div className="card-body p-2 text-center" >
          <h2 className="mb-4" style={{ color: '#c87c8d', fontSize: '2rem', marginTop: '2%', fontFamily: 'Lora, serif' }}>Top 5 más votados</h2>
        </div>

        <div className="text-center" style={{ marginTop: '-10px', height: 'auto' }}>
          <div style={{
            width: '90%',
            height: '75vh',  // Ajusta el tamaño para que no ocupe toda la pantalla
            backgroundColor: '#efe8e5',
            borderRadius: '10px',
            margin: '0 auto',
            padding: '20px'
          }}>

            {/**OUTFITS */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 style={{ color: '#c87c8d', fontFamily: 'Lora, serif', fontSize: '1.75rem' }}>Outfits</h3>
              <div style={{
                fontFamily: 'Lora, serif',
                fontSize: '1.5rem',
                color: '#bf97a0',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                gap: '40px',
                marginTop: '20px',
                marginBottom: '20px'
              }}>

                {/**DIV JUGADOR */}
                {Array.from({ length: 5 }, (_, index) => (
                  <div key={index} style={{ flex: 1, textAlign: 'center' }}>
                    <h3 style={{ color: '#bf97a0' }}>Jugador</h3>
                    <div style={{
                      width: '100%',
                      height: '70%',
                      backgroundColor: '#fff6f2',
                      borderRadius: '10px',
                      margin: '0 auto',
                      padding: '40px'
                    }}>

                      <img src="/personajes/nano.png" style={{ width: '168.75px', height: '300px' }}></img>
                    </div>

                    <h5 style={{ color: '#bf97a0' }}>Puntaje</h5>
                    <div style={{ marginTop: '10px', backgroundColor: '#fff6f2', borderRadius: '10px', }}>
                      <p>x</p>

                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
      <HelpIcon></HelpIcon>
    </>
  );
}
