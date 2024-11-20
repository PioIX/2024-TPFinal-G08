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

// Importacion para la funcion que tendra los componentes de Outfits
export default function Outfits() {
  // Declaración de estados para almacenar diferentes categorías de datos
  const [outfits, setOutfit] = useState([]); 
  const [remeras, setRemeras] = useState([]); 
  const [pantalon, setPantalones] = useState([]);
  const [calzado, setCalzado] = useState([]); 
  const [personaje, setPersonaje] = useState([]);
  const [accesorio, setAccesorio] = useState([]);
  const [mascota, setMascota] = useState([]); 
  const [fondo, setFondo] = useState([]); 

  // Función para obtener las remeras desde el servidor y actualizar el estado
  async function obtenerRemeras() {
    let res = await getRemeras(); // Llamada a la API 
    setRemeras(res); // Actualización del estado con los datos recibidos
  }

  // Función para obtener los pantalones desde el servidor y actualizar el estado
  async function obtenerPantalones() {
    let res = await getPantalones(); // Llamada a la API
    setPantalones(res); // Actualización del estado
  }

  // Función para obtener el calzado desde el servidor y actualizar el estado
  async function obtenerCalzado() {
    let res = await getCalzados(); // Llamada a la API 
    setCalzado(res); // Actualización del estado
  }

  // Función para obtener los personajes desde el servidor y actualizar el estado
  async function obtenerPersonajes() {
    let res = await getPersonajes(); // Llamada a la API 
    setPersonaje(res); // Actualización del estado
  }

  // Función para obtener los accesorios desde el servidor y actualizar el estado
  async function obtenerAccesorios() {
    let res = await getAccesorios(); // Llamada a la API 
    setAccesorio(res); // Actualización del estado
  }

  // Función para obtener las mascotas desde el servidor y actualizar el estado
  async function obtenerMascota() {
    let res = await getMascotas(); // Llamada a la API 
    setMascota(res); // Actualización del estado
  }

  // Función para obtener los fondos desde el servidor y actualizar el estado
  async function obtenerFondos() {
    let res = await getFondos(); // Llamada a la API 
    setFondo(res); // Actualización del estado
  }

  // Hook useEffect para cargar los datos cuando el componente se hace
  useEffect(() => {
    obtenerRemeras();
    obtenerPantalones();
    obtenerCalzado();
    obtenerPersonajes();
    obtenerAccesorios();
    obtenerMascota();
    obtenerFondos();
    obtenerOutfits(); // Llamamos a  las funciones para obtener ls datos datos
  }, []); // El array vacío asegura que esto ocurre solo al hacer el componente

  // Función para obtener los outfits desde el servidor y actualizar el estado
  async function obtenerOutfits() {
    let res = await getOutfits(); // Llamada a la API 
    setOutfit(res); // Actualización del estado
  }

  // Función para obtener el enlace del personaje asociado a un outfit
  function putPersonaje(idOutfit) {
    let caracter = personaje.find((p) => p.idPersonajes === idOutfit)?.link || ""; // Buscamos al  personaje por ID y obtenemos su enlace
    return caracter; // Devuelve el enlace del personaje
  }

  // Función para obtener el enlace de la remera asociada a un outfit
  function putRemera(idOutfit) {
    let shirt = remeras.find((r) => r.idRemeras === idOutfit)?.link || ""; // Buscamos la remera por ID
    return shirt; // Devuelve el enlace de la remera
  }

  // Función para obtener el enlace del pantalón asociado a un outfit
  function putPantalon(idOutfit) {
    let pant = pantalon.find((p) => p.idpantalones === idOutfit)?.link || ""; // Se busca ell pantalón por ID
    return pant; // Devuelve el enlace del pantalón
  }

  // Función para obtener el enlace del calzado asociado a un outfit
  function putCalzado(idOutfit) {
    let shoe = calzado.find((c) => c.idClazado === idOutfit)?.link || ""; // buscamos el calzado por ID
    return shoe; //se devuelve  el enlace del calzado
  }

  // Función para obtener el enlace del accesorio asociado a un outfit
  function putAccesorio(idOutfit) {
    let acces = accesorio.find((a) => a.idAccesorio === idOutfit)?.link || ""; //buscamos el accesorio por ID
    return acces; // Devuelve el enlace del accesorio
  }

  // Función para obtener el enlace de la mascota asociada a un outfit
  function putMascota(idOutfit) {
    let mascot = mascota.find((m) => m.idMascota === idOutfit)?.link || ""; //buscamos la mascota por ID
    return mascot; // devuelve el enlace de la mascota
  }

  // Función para obtener el enlace del fondo asociado a un outfit
  function putFondo(idOutfit) {
    let background = fondo.find((f) => f.idFondo === idOutfit)?.link || ""; //buscamos el fondo por ID
    return background; // devuelve el enlace del fondo
  }

  //pagina de outfits
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
        {/* Tarjeta principal */}
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
        {/* Contenedor principal */}
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
                {/* Iteración sobre los últimos 5 outfits */}{/**el slice lo que va a hacer es dividirlo en 5 */}
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
                        {/* Renderizado condicional de cada parte del outfit */}
                        {outfit.fondo !== 0 && (
                          <div className={styles.MuestraFondo}>
                            <img
                              src={putFondo(outfit.fondo)} // Enlace del fondo
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
 // Enlace del personaje
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
                              src={putRemera(outfit.remera)} // Enlace de la remera
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
                              src={putPantalon(outfit.pantalon)} // Enlace del pantalón
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
                              src={putCalzado(outfit.calzado)} // Enlace del calzado
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
                              src={putAccesorio(outfit.accesorio)} // Enlace del accesorio
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
                              src={putMascota(outfit.mascota)} // Enlace de la mascota
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