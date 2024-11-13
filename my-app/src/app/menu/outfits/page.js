"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HelpIcon from '@/components/helpicon';
import Header from '@/components/Header';
import Hamburguesa from '@/components/Hamburguesa';
import { useEffect, useState } from 'react';
import { getOutfits } from '@/app/utils/api';


export default function Outfits() {

  const [outfits, setOutfit] = useState([]);

  async function obtenerOutfits() {
    let res = await getOutfits();
    setOutfit(res);
  }

  useEffect(() => {
    obtenerOutfits();
  }, []);

  function idsOutfit(id) {
    let selectedOutfit = id;
    return selectedOutfit
  }

  return (
    <>
      <Header />
      <Hamburguesa />
      <HelpIcon />

      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <Hamburguesa></Hamburguesa>
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
                {
                  outfits.slice(0, 5).map((outfit, index) => (
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
                        <div className={styles.MuestraOutfit}>
                          <div className={styles.MuestraPersonaje} style={{ padding: '10px' }}>
                            <img src={ } alt="Avatar" style={{ width: '90%' }} />
                          </div>
                          <div id="remera" className={styles.MuestraRemera} style={{ padding: '10px' }}>
                            {remeraSeleccionada && (
                              <img src={ } style={{ width: '90%' }} alt="Remera Seleccionada" />
                            )}
                          </div>
                          <div id="pantalon" className={styles.MuestraPantalon} style={{ padding: '10px' }}>
                            {pantalonSeleccionada && (
                              <img src={ } style={{ width: '90%' }} alt="Pantalon Seleccionada" />
                            )}
                          </div>
                          <div id="calzado" className={styles.MuestraCalzado} style={{ padding: '10px' }}>
                            {calzadoSeleccionado && (
                              <img src={ } style={{ width: '90%' }} alt="Calzado Seleccionada" />
                            )}
                          </div>
                          <div id="Accesorio" className={styles.MuestraAccesorio} style={{ padding: '10px' }}>
                            {accesorioSeleccionado && (
                              <img src={ } style={{ width: '90%' }} alt="Accesorio Seleccionada" />
                            )}
                          </div>
                          <div id="Mascota" className={styles.MuestraMascota} style={{ padding: '10px' }}>
                            {mascotaSeleccionada && (
                              <img src={ } style={{ width: '90%' }} alt="Mascota Seleccionada" />
                            )}
                          </div>
                          <div id="Fondo" className={styles.MuestraFondo} style={{ padding: '10px' }}>
                            {fondoSeleccionado && (
                              <img src={ } style={{ width: '90%' }} alt="Fondo Seleccionada" />
                            )}
                          </div>
                        </div>
                      </div>
                    }

                      <h5 style={{ color: '#bf97a0' }}>Puntaje</h5>
                      <div style={{ marginTop: '10px', backgroundColor: '#fff6f2', borderRadius: '10px', }}>
                        <p>x</p>

                      </div>
                      <HelpIcon></HelpIcon>
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
