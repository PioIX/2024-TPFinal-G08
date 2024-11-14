"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HelpIcon from '@/components/helpicon';
import Header from '@/components/Header';
import Hamburguesa from '@/components/Hamburguesa';
import { useEffect, useState } from 'react';
import { getOutfits } from '@/app/utils/api';
import styles from '@/components/page.module.css';

export default function Outfits() {
  const [outfits, setOutfit] = useState([]);
  const [remeras, setRemeras] = useState([]);
  const [pantalon, setPantalones] = useState([]);
  const [calzado, setCalzado] = useState([]);
  const [personaje, setPersonaje] = useState([]);
  const [accesorio, setAccesorio] = useState([]);
  const [mascota, setMascota] = useState([]);
  const [fondo, setFondo] = useState([]);

  async function obtenerRemeras() {
    let res = await getRemeras();
    setRemeras(res);
  }

  async function obtenerPantalones() {
    let res = await getPantalones();
    setPantalones(res);
  }

  async function obtenerCalzado() {
    let res = await getCalzados();
    setCalzado(res);
  }

  async function obtenerPersonajes() {
    let res = await getPersonajes();
    setPersonaje(res);
  }

  async function obtenerAccesorios() {
    let res = await getAccesorios();
    setAccesorio(res);
  }

  async function obtenerMascota() {
    let res = await getMascotas();
    setMascota(res);
  }

  async function obtenerFondos() {
    let res = await getFondos();
    setFondo(res);
  }

  useEffect(() => {
    obtenerRemeras();
  }, []);

  useEffect(() => {
    obtenerPantalones();
  }, []);

  useEffect(() => {
    obtenerCalzado();
  }, []);

  useEffect(() => {
    obtenerPersonajes();
  }, []);

  useEffect(() => {
    obtenerAccesorios();
  }, []);

  useEffect(() => {
    obtenerMascota();
  }, []);

  useEffect(() => {
    obtenerFondos();
  }, []);

  async function obtenerOutfits() {
    let res = await getOutfits();
    setOutfit(res);
    console.log(outfits)
  }

  useEffect(() => {
    obtenerOutfits();
  }, []);
  
  // Traer Personaje de Outfit
  function putPersonaje(idOutfit) {
    let outfit = idOutfit;
    let caracter = "";

    for (let i = 0; i < personaje.length; i++) {
      if (outfit === personaje[i].idPersonajes) {
        caracter = personaje[i].link;
      }
    }

    return caracter;
  }

  // Traer Remera de Outfit
  function putRemera(idOutfit) {
    let outfit = idOutfit;
    let shirt = "";

    for (let i = 0; i < remeras.length; i++) {
      if (outfit === remeras[i].idRemeras) {
        shirt = remeras[i].link;
      }
    }

    return shirt;
  }

  // Traer Pantalon de Outfit
  function putPantalon(idOutfit) {
    let outfit = idOutfit;
    let pant = "";

    for (let i = 0; i < pantalon.length; i++) {
      if (outfit === pantalon[i].idpantalones) {
        pant = pantalon[i].link;
      }
    }

    return pant;
  }

  // Traer Calzado de Outfit
  function putCalzado(idOutfit) {
    let outfit = idOutfit;
    let shoe = "";

    for (let i = 0; i < calzado.length; i++) {
      if (outfit === calzado[i].idClazado) {
        shoe = calzado[i].link;
      }
    }

    return shoe;
  }

  // Traer Accesorio de Outfit
  function putAccesorio(idOutfit) {
    let outfit = idOutfit;
    let acces = "";

    for (let i = 0; i < accesorio.length; i++) {
      if (outfit === accesorio[i].idAccesorio) {
        acces = accesorio[i].link;
      }
    }

    return acces;
  }

  // Traer Mascota de Outfit
  function putMascota(idOutfit) {
    let outfit = idOutfit;
    let mascot = "";

    for (let i = 0; i < mascota.length; i++) {
      if (outfit === mascota[i].idMascota) {
        mascot = mascota[i].link;
      }
    }

    return mascot;
  }

  // Traer Fondo de Outfit
  function putFondo(idOutfit) {
    let outfit = idOutfit;
    let background = "";

    for (let i = 0; i < fondo.length; i++) {
      if (outfit === fondo[i].idFondo) {
        background = fondo[i].link;
      }
    }

    return background;
  }

  return (
    <>
      <Header />
      <Hamburguesa />
      <HelpIcon />

      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <Hamburguesa></Hamburguesa>
      <section className="vh-100" style={{ backgroundColor: '#fbfcf7' }}>
        <div className="card-body p-2 text-center">
          <h2
            className="mb-4"
            style={{
              color: '#c87c8d',
              fontSize: '2rem',
              marginTop: '2%',
              fontFamily: 'Lora, serif',
            }}
          >
            Top 5 más votados
          </h2>
        </div>

        <div className="text-center" style={{ marginTop: '-10px', height: 'auto' }}>
          <div
            style={{
              width: '90%',
              height: '75vh', // Ajusta el tamaño para que no ocupe toda la pantalla
              backgroundColor: '#efe8e5',
              borderRadius: '10px',
              margin: '0 auto',
              padding: '20px',
            }}
          >
            {/**OUTFITS */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 style={{ color: '#c87c8d', fontFamily: 'Lora, serif', fontSize: '1.75rem' }}>
                Outfits
              </h3>
              <div
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '1.5rem',
                  color: '#bf97a0',
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '40px',
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
              >
                {/**DIV JUGADOR */}
                {outfits.slice(0, 5).map((outfit, index) => (
                  <div key={index} style={{ flex: 1, textAlign: 'center' }}>
                    <h3 style={{ color: '#bf97a0' }}>Jugador</h3>
                    <div
                      style={{
                        width: '100%',
                        height: '70%',
                        backgroundColor: '#fff6f2',
                        borderRadius: '10px',
                        margin: '0 auto',
                        padding: '40px',
                      }}
                    >
                      <div className={styles.MuestraOutfit}>
                        <div className={styles.MuestraPersonaje} style={{ padding: '10px' }}>
                          <img
                            src={putPersonaje(outfit[index].personaje)}
                            alt="Avatar"
                            style={{ width: '90%' }}
                          />
                        </div>
                        <div id="remera" className={styles.MuestraRemera} style={{ padding: '10px' }}>
                          <img
                              src={putRemera(outfit[index].remera)}
                              style={{ width: '90%' }}
                              alt="Remera Seleccionada"
                            />
                        </div>
                        <div id="pantalon" className={styles.MuestraPantalon} style={{ padding: '10px' }}>
                            <img
                              src={putPantalon(outfit[index].pantalon)}
                              style={{ width: '90%' }}
                              alt="Pantalon Seleccionada"
                            />
                        </div>
                        <div id="calzado" className={styles.MuestraCalzado} style={{ padding: '10px' }}>
                            <img
                              src={putCalzado(outfit[index].calzado)}
                              style={{ width: '90%' }}
                              alt="Calzado Seleccionada"
                            />
                        </div>
                        <div
                          id="accesorio"
                          className={styles.MuestraAccesorio}
                          style={{ padding: '10px' }}
                        >
                            <img
                              src={putAccesorio(outfit[index].accesorio)}
                              style={{ width: '90%' }}
                              alt="Accesorio Seleccionado"
                            />
                        </div>
                        <div id="mascota" className={styles.MuestraMascota} style={{ padding: '10px' }}>
                            <img
                              src={putMascota(outfit[index].mascota)}
                              style={{ width: '90%' }}
                              alt="Mascota Seleccionada"
                            />
                        </div>
                        <div id="fondo" className={styles.MuestraFondo} style={{ padding: '10px' }}>
                            <img
                              src={putFondo(outfit[index].fondo)}
                              style={{ width: '90%' }}
                              alt="Fondo Seleccionado"
                            />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
