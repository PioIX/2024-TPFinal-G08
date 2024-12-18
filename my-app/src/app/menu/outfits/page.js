"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HelpIcon from '@/components/helpicon';
import Header from '@/components/Header';
import Hamburguesa from '@/components/Hamburguesa';
import { useEffect, useState } from 'react';
import { getOutfits, getRemeras, getPantalones, getCalzados, getPersonajes, getAccesorios, getMascotas, getFondos } from '@/app/utils/api';
import styles from '@/components/page.module.css';
import Head from 'next/head';

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

  async function obtenerCalzados() {
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
    obtenerPantalones();
    obtenerCalzados();
    obtenerPersonajes();
    obtenerAccesorios();
    obtenerMascota();
    obtenerFondos();
    obtenerOutfits();
  }, []);

  async function obtenerOutfits() {
    let res = await getOutfits();
    setOutfit(res);
  }

  function putPersonaje(idOutfit) {
    let caracter = personaje.find((p) => p.idPersonajes === idOutfit)?.link || "";
    return caracter;
  }

  function putRemera(idOutfit) {
    let shirt = remeras.find((r) => r.idRemeras === idOutfit)?.link || "";
    return shirt;
  }

  function putPantalon(idOutfit) {
    let pant = pantalon.find((p) => p.idpantalones === idOutfit)?.link || "";
    return pant;
  }

  function putCalzado(idOutfit) {
    let shoe = calzado.find((c) => c.idClazado === idOutfit)?.link || "";
    return shoe;
  }

  function putAccesorio(idOutfit) {
    let acces = accesorio.find((a) => a.idAccesorio === idOutfit)?.link || "";
    return acces;
  }

  function putMascota(idOutfit) {
    let mascot = mascota.find((m) => m.idMascota === idOutfit)?.link || "";
    return mascot;
  }

  function putFondo(idOutfit) {
    let background = fondo.find((f) => f.idFondo === idOutfit)?.link || "";
    return background;
  }

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Hamburguesa />
      <HelpIcon />
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
              height: '75vh',
              backgroundColor: '#efe8e5',
              borderRadius: '10px',
              margin: '0 auto',
              padding: '20px',
            }}
          >
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
                {outfits.slice(-5).map((outfit, index) => (
                  <div key={index} style={{ flex: 1, textAlign: 'center' }}>
                    <h3 style={{ color: '#bf97a0' }}>Jugador</h3>
                    <div
                      style={{
                        width: '100%',
                        height: '70%',
                        backgroundColor: '#fff6f2',
                        borderRadius: '10px',
                        margin: '0 auto',
                      }}
                    >
                      <div className={styles.MuestraOutfit}>
                        {outfit.fondo !== 0 && (
                          <div className={styles.MuestraFondo}>
                            <img
                              src={putFondo(outfit.fondo)}
                              alt="Fondo"
                              style={{
                                width: '90%'
                              }}
                            />
                          </div>
                        )}

                        {outfit.personaje !== 0 && (
                          <div className={styles.MuestraPersonaje}>
                            <img
                              src={putPersonaje(outfit.personaje)}
                              alt="Personaje"
                              style={{
                                width: '90%'
                              }}
                            />
                          </div>
                        )}

                        {outfit.remera !== 0 && (
                          <div className={styles.MuestraRemera}>
                            <img
                              src={putRemera(outfit.remera)}
                              alt="Remera Seleccionada"
                              style={{
                                width: '90%'
                              }}
                            />
                          </div>
                        )}

                        {outfit.pantalon !== 0 && (
                          <div className={styles.MuestraPantalon}>
                            <img
                              src={putPantalon(outfit.pantalon)}
                              alt="Pantalón Seleccionado"
                              style={{
                                width: '90%'
                              }}
                            />
                          </div>
                        )}

                        {outfit.calzado !== 0 && (
                          <div className={styles.MuestraCalzado}>
                            <img
                              src={putCalzado(outfit.calzado)}
                              alt="Calzado Seleccionado"
                              style={{
                                width: '90%'
                              }}
                            />
                          </div>
                        )}

                        {outfit.accesorio !== 0 && (
                          <div className={styles.MuestraAccesorio}>
                            <img
                              src={putAccesorio(outfit.accesorio)}
                              alt="Accesorio Seleccionado"
                              style={{
                                width: '90%'
                              }}
                            />
                          </div>
                        )}

                        {outfit.mascota !== 0 && (
                          <div className={styles.MuestraMascota}>
                            <img
                              src={putMascota(outfit.mascota)}
                              alt="Mascota Seleccionada"
                              style={{
                                width: '90%'
                              }}
                            />
                          </div>
                        )}
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
