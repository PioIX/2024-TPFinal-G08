"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HelpIcon from '@/components/helpicon';
import Header from '@/components/Header';
import Hamburguesa from '@/components/Hamburguesa';
import { getRemeras, getPantalones, getCalzados, getPersonajes, getAccesorios, getMascotas, getFondos, postOutfits } from '@/app/utils/api.js';
import React, { useEffect, useState } from 'react';
import styles from '@/components/page.module.css';
import Head from 'next/head';

export default function Game() {
    const [selectedCategory, setSelectedCategory] = useState('remeras');
    const categories = [
        { name: 'remeras', img: '4.png' },
        { name: 'pantalones', img: '6.png' },
        { name: 'zapatos', img: '7.png' },
        { name: 'accesorios', img: '8.png' },
        { name: 'personajes', img: '5.png' },
        { name: 'mascotas', img: '9.png' },
        { name: 'fondos', img: '10.png' },
    ];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        let cambiar = ""
        if (category == "remeras") {
            setdisplayRemeras(cambiar)
            setdisplayPantalon("none")
            setdisplayCalzado("none")
            setdisplayPersonajes("none")
            setdisplayAccesorios("none")
            setdisplayMascotas("none")
            setdisplayFondos("none")
        }
        else if (category == "pantalones") {
            setdisplayRemeras("none")
            setdisplayPantalon(cambiar)
            setdisplayCalzado("none")
            setdisplayPersonajes("none")
            setdisplayAccesorios("none")
            setdisplayMascotas("none")
            setdisplayFondos("none")
        }
        else if (category == "zapatos") {
            setdisplayRemeras("none")
            setdisplayPantalon("none")
            setdisplayCalzado(cambiar)
            setdisplayPersonajes("none")
            setdisplayAccesorios("none")
            setdisplayMascotas("none")
            setdisplayFondos("none")
        }
        else if (category == "personajes"){
            setdisplayRemeras("none")
            setdisplayPantalon("none")
            setdisplayCalzado("none")
            setdisplayPersonajes(cambiar)
            setdisplayAccesorios("none")
            setdisplayMascotas("none")
            setdisplayFondos("none")
        }
        else if (category == "accesorios"){
            setdisplayRemeras("none")
            setdisplayPantalon("none")
            setdisplayCalzado("none")
            setdisplayPersonajes("none")
            setdisplayAccesorios(cambiar)
            setdisplayMascotas("none")
            setdisplayFondos("none")
        }
        else if (category == "mascotas"){
            setdisplayRemeras("none")
            setdisplayPantalon("none")
            setdisplayCalzado("none")
            setdisplayPersonajes("none")
            setdisplayAccesorios("none")
            setdisplayMascotas(cambiar)
            setdisplayFondos("none")
        }
        else if (category == "fondos"){
            setdisplayRemeras("none")
            setdisplayPantalon("none")
            setdisplayCalzado("none")
            setdisplayPersonajes("none")
            setdisplayAccesorios("none")
            setdisplayMascotas("none")
            setdisplayFondos(cambiar)
        }
    };

    const [displayRemeras, setdisplayRemeras] = useState("none");
    const [displayPantalon, setdisplayPantalon] = useState("none");
    const [displayCalzado, setdisplayCalzado] = useState("none");
    const [displayPersonajes, setdisplayPersonajes] = useState("none");
    const [displayAccesorios, setdisplayAccesorios] = useState("none");
    const [displayMascotas, setdisplayMascotas] = useState("none");
    const [displayFondos, setdisplayFondos] = useState("none");

    const [remeras, setRemeras] = useState([]);
    const [remeraSeleccionada, setRemeraSeleccionada] = useState("");

    const [pantalon, setPantalones] = useState([]);
    const [pantalonSeleccionada, setPantalonSeleccionada] = useState("");

    const [calzado, setCalzado] = useState([]);
    const [calzadoSeleccionado, setCalzadoSeleccionado] = useState("");

    const [personaje, setPersonaje] = useState([]);
    const [personajeSeleccionado, setPersonajeSeleccionado] = useState("");

    const [accesorio, setAccesorio] = useState([]);
    const [accesorioSeleccionado, setAccesorioSeleccionado] = useState("");

    const [mascota, setMascota] = useState([]);
    const [mascotaSeleccionada, setMascotaSeleccionada] = useState("");

    const [fondo, setFondo] = useState([]);
    const [fondoSeleccionado, setFondoSeleccionado] = useState("");



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



    useEffect(() => {
        console.log(remeras);
    }, [remeras]);

    useEffect(() => {
        console.log(pantalon);
    }, [pantalon]);

    useEffect(() => {
        console.log(calzado);
    }, [calzado]);

    let outfit = {
        remeras: 0,
        pantalones: 0,
        calzado: 0,
        accesorio: 0,
        mascota: 0,
        fondo: 0,
        personaje: 0
    }


    function idsPersonajes(id) {
        outfit.personaje = id
        console.log(outfit);
        let newPersonaje = "";
        console.log(outfit.personaje)
        for (let i = 0; i < personaje.length; i++) {
            if (outfit.personaje == personaje[i].idPersonajes) {
                newPersonaje = personaje[i].link
            }
        }
        console.log(newPersonaje)
        setPersonajeSeleccionado(newPersonaje);
        console.log(personajeSeleccionado)
    }

    function idsRemeras(id) {
        outfit.remeras = id
        console.log(outfit);
        let newRemera = "";
        console.log(outfit.remeras)
        for (let i = 0; i < remeras.length; i++) {
            if (outfit.remeras == remeras[i].idRemeras) {
                newRemera = remeras[i].link
            }
        }
        console.log(newRemera)
        setRemeraSeleccionada(newRemera);
        console.log(remeraSeleccionada)
    }

    function idsPantalones(id) {
        outfit.pantalones = id
        console.log(outfit);
        let newPantalon = "";
        console.log(outfit.pantalones)
        for (let i = 0; i < pantalon.length; i++) {
            if (outfit.pantalones == pantalon[i].idpantalones) {
                newPantalon = pantalon[i].link
            }
        }
        console.log(newPantalon)
        setPantalonSeleccionada(newPantalon);
        console.log(pantalonSeleccionada)
    }

    function idsCalzados(id) {
        outfit.calzado = id
        console.log(outfit);
        let newCalzado = "";
        console.log(outfit.calzado)
        for (let i = 0; i < calzado.length; i++) {
            if (outfit.calzado == calzado[i].idClazado) {
                newCalzado = calzado[i].link
            }
        }
        console.log(newCalzado)
        setCalzadoSeleccionado(newCalzado);
        console.log(calzadoSeleccionado)
    }

    function idsAccesorios(id) {
        outfit.accesorio = id
        let newAccesorio = "";
        for (let i = 0; i < accesorio.length; i++) {
            if (outfit.accesorio == accesorio[i].idAccesorio) {
                newAccesorio = accesorio[i].link
            }
        }
        setAccesorioSeleccionado(newAccesorio);
    }

    function idsMascota(id) {
        outfit.mascota = id
        let newMascota = "";
        for (let i = 0; i < mascota.length; i++) {
            if (outfit.mascota == mascota[i].idMascota) {
                newMascota = mascota[i].link
            }
        }
        setMascotaSeleccionada(newMascota);
    }

    function idsFondo(id) {
        outfit.fondo = id
        let newFondo = "";
        for (let i = 0; i < fondo.length; i++) {
            if (outfit.fondo == fondo[i].idFondo) {
                newFondo = fondo[i].link
            }
        }
        setFondoSeleccionado(newFondo);
    }


    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <Header />
            <Hamburguesa />
            <HelpIcon />

            <section style={{ backgroundColor: '#fbfcf7', minHeight: '100vh', padding: '20px' }}>
                <div style={{
                    backgroundColor: '#fbf3f3',
                    padding: '20px',
                    borderRadius: '10px',
                    width: '80%',
                    margin: '0 auto',
                    zIndex: 1
                }}>
                    <div className="game-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>

                        <div className="avatar-panel" style={{ width: '40%', textAlign: 'center', padding: '20px' }}>
                            <div style={{ backgroundColor: '#ffffff', padding: '15px', borderRadius: '10px', minHeight: '350px' }}>
                                <div style={{
                                    backgroundColor: '#bf97a0',
                                    color: 'white',
                                    borderRadius: '10px',
                                    padding: '3px 5px',
                                    marginBottom: '8px'
                                }}>
                                    Usuario
                                </div>
                                <div className={styles.MuestraOutfit}>
                                    <div className={styles.MuestraPersonaje} style={{ padding: '10px' }}>
                                        {personajeSeleccionado && (
                                            <img src={personajeSeleccionado} alt="Avatar" style={{ width: '90%' }} />
                                        )}
                                    </div>
                                    <div id="remera" className={styles.MuestraRemera} style={{ padding: '10px' }}>
                                        {remeraSeleccionada && (
                                            <img src={remeraSeleccionada} style={{ width: '90%' }} alt="Remera Seleccionada" />
                                        )}
                                    </div>
                                    <div id="pantalon" className={styles.MuestraPantalon} style={{ padding: '10px' }}>
                                        {pantalonSeleccionada && (
                                            <img src={pantalonSeleccionada} style={{ width: '90%' }} alt="Pantalon Seleccionada" />
                                        )}
                                    </div>
                                    <div id="calzado" className={styles.MuestraCalzado} style={{ padding: '10px' }}>
                                        {calzadoSeleccionado && (
                                            <img src={calzadoSeleccionado} style={{ width: '90%' }} alt="Calzado Seleccionada" />
                                        )}
                                    </div>
                                    <div id="Accesorio" className={styles.MuestraAccesorio} style={{ padding: '10px' }}>
                                        {accesorioSeleccionado && (
                                            <img src={accesorioSeleccionado} style={{ width: '90%' }} alt="Accesorio Seleccionada" />
                                        )}
                                    </div>
                                    <div id="Mascota" className={styles.MuestraMascota} style={{ padding: '10px' }}>
                                        {mascotaSeleccionada && (
                                            <img src={mascotaSeleccionada} style={{ width: '90%' }} alt="Mascota Seleccionada" />
                                        )}
                                    </div>
                                    <div id="Fondo" className={styles.MuestraFondo} style={{ padding: '10px' }}>
                                        {fondoSeleccionado && (
                                            <img src={fondoSeleccionado} style={{ width: '90%' }} alt="Fondo Seleccionada" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="clothing-panel" style={{ width: '55%', textAlign: 'center', padding: '20px', backgroundColor: "#efe8e5", borderRadius: '10px' }}>
                            <div className="buttons-and-selector-container" style={{ marginBottom: '20px' }}>
                                <div className="category-selector" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
                                    {categories.map(({ name, img }) => (
                                        <button
                                            key={name}
                                            onClick={() => handleCategoryChange(name)}
                                            style={{
                                                padding: '10px',
                                                border: 'none',
                                                backgroundColor: selectedCategory === name ? '#bf97a0' : '#fbf3f3',
                                                borderRadius: '5px',
                                            }}>
                                            <img
                                                src={`/${img}`}
                                                alt={name}
                                                style={{ width: '40px', height: '40px' }}
                                            />
                                        </button>
                                    ))}
                                </div>

                                <div className={styles.ropa}>
                                    <div style={{ display: displayRemeras }}>
                                        {
                                            remeras.map((remera, index) => (
                                                <button key={index} id={remera.idRemeras} onClick={() => idsRemeras(remera.idRemeras)}>
                                                    <img src={remera.link} style={{ width: '84.375px', height: '150px' }} alt={`Remera ${index}`} />
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div style={{ display: displayPantalon }}>
                                        {
                                            pantalon.map((pantalon, index) => (
                                                <button key={index} id={pantalon.idpantalones} onClick={() => idsPantalones(pantalon.idpantalones)}>
                                                    <img src={pantalon.link} style={{ width: '84.375px', height: '150px' }} alt={`Pantalón ${index}`} />
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div style={{ display: displayCalzado }}>
                                        {
                                            calzado.map((calzado, index) => (
                                                <button key={index} id={calzado.idClazado} onClick={() => idsCalzados(calzado.idClazado)}>
                                                    <img src={calzado.link} style={{ width: '84.375px', height: '150px' }} alt={`Clazado ${index}`} />
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div style={{ display: displayPersonajes }}>
                                        {
                                            personaje.map((personaje, index) => (
                                                <button key={index} id={personaje.idPersonajes} onClick={() => idsPersonajes(personaje.idPersonajes)}>
                                                    <img src={personaje.link} style={{ width: '84.375px', height: '150px' }} alt={`Personaje ${index}`} />
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div style={{ display: displayAccesorios }}>
                                        {
                                            accesorio.map((accesorio, index) => (
                                                <button key={index} id={accesorio.idAccesorio} onClick={() => idsAccesorios(accesorio.idAccesorio)}>
                                                    <img src={accesorio.link} style={{ width: '84.375px', height: '150px' }} alt={`Accesorio ${index}`} />
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div style={{ display: displayMascotas }}>
                                        {
                                            mascota.map((mascota, index) => (
                                                <button key={index} id={mascota.idMascota} onClick={() => idsMascota(mascota.idMascota)}>
                                                    <img src={mascota.link} style={{ width: '84.375px', height: '150px' }} alt={`Mascota ${index}`} />
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div style={{ display: displayFondos }}>
                                        {
                                            fondo.map((fondo, index) => (
                                                <button key={index} id={fondo.idFondo} onClick={() => idsFondo(fondo.idFondo)}>
                                                    <img src={fondo.link} style={{ width: '84.375px', height: '150px' }} alt={`Fondo ${index}`} />
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Botones de acción debajo del div del avatar */}
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                        <button onClick={console.log("boton")} style={{
                            padding: '10px 20px',
                            border: 'none',
                            backgroundColor: '#bf97a0',
                            color: 'white',
                            borderRadius: '20px', // Más redondeado
                            cursor: 'pointer',
                        }}>
                            Guardar Outfit
                        </button>
                        <button style={{
                            padding: '10px 20px',
                            border: 'none',
                            backgroundColor: '#bf97a0',
                            color: 'white',
                            borderRadius: '20px', // Más redondeado
                            cursor: 'pointer',
                        }}>
                            Salir sin Guardar
                        </button>
                    </div>

                </div>
            </section>

            <style jsx global>{`
        body {
          background-color: #fbfcf7;
        }
      `}</style>
        </>
    );
}
