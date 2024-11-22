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
    const [idUsuario, setidUsuario] = useState([]);
    const [nombreUser, setNombreUser] = useState([])

    useEffect(() => {
        let id = JSON.parse(localStorage.getItem('idUsuario'))
        let nombre = JSON.parse(localStorage.getItem('nombreUsuario'))

        //let idUsuario = id.user[0].ID_Usuario;
        setidUsuario(id)
        setNombreUser(nombre)
    }, []);

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
        else if (category == "personajes") {
            setdisplayRemeras("none")
            setdisplayPantalon("none")
            setdisplayCalzado("none")
            setdisplayPersonajes(cambiar)
            setdisplayAccesorios("none")
            setdisplayMascotas("none")
            setdisplayFondos("none")
        }
        else if (category == "accesorios") {
            setdisplayRemeras("none")
            setdisplayPantalon("none")
            setdisplayCalzado("none")
            setdisplayPersonajes("none")
            setdisplayAccesorios(cambiar)
            setdisplayMascotas("none")
            setdisplayFondos("none")
        }
        else if (category == "mascotas") {
            setdisplayRemeras("none")
            setdisplayPantalon("none")
            setdisplayCalzado("none")
            setdisplayPersonajes("none")
            setdisplayAccesorios("none")
            setdisplayMascotas(cambiar)
            setdisplayFondos("none")
        }
        else if (category == "fondos") {
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

    const [outfit, setOutfit] = useState({
        remeras: 0,
        pantalones: 0,
        calzado: 0,
        accesorio: 0,
        mascota: 0,
        fondo: 0,
        personaje: 0
    });


    function idsPersonajes(id) {
        setOutfit((prevOutfit) => ({
            ...prevOutfit,
            personaje: id
        }));

        let newPersonaje = "";
        for (let i = 0; i < personaje.length; i++) {
            if (id === personaje[i].idPersonajes) {
                newPersonaje = personaje[i].link;
            }
        }
        console.log(newPersonaje);
        setPersonajeSeleccionado(newPersonaje);
    }

    function idsRemeras(id) {
        setOutfit((prevOutfit) => ({
            ...prevOutfit,
            remeras: id
        }));

        let newRemera = "";
        for (let i = 0; i < remeras.length; i++) {
            if (id === remeras[i].idRemeras) {
                newRemera = remeras[i].link;
            }
        }
        setRemeraSeleccionada(newRemera);
    }


    function idsPantalones(id) {
        setOutfit((prevOutfit) => ({
            ...prevOutfit,
            pantalones: id
        }));

        let newPantalon = "";
        for (let i = 0; i < pantalon.length; i++) {
            if (id === pantalon[i].idpantalones) {
                newPantalon = pantalon[i].link;
            }
        }
        console.log(newPantalon);
        setPantalonSeleccionada(newPantalon);
    }

    function idsCalzados(id) {
        setOutfit((prevOutfit) => ({
            ...prevOutfit,
            calzado: id
        }));

        let newCalzado = "";
        for (let i = 0; i < calzado.length; i++) {
            if (id === calzado[i].idClazado) {
                newCalzado = calzado[i].link;
            }
        }
        setCalzadoSeleccionado(newCalzado)
    }

    function idsAccesorios(id) {
        setOutfit((prevOutfit) => ({
            ...prevOutfit,
            accesorio: id
        }));

        let newAccesorio = "";
        for (let i = 0; i < accesorio.length; i++) {
            if (id === accesorio[i].idAccesorio) {
                newAccesorio = accesorio[i].link;
            }
        }
        console.log(newAccesorio);
        setAccesorioSeleccionado(newAccesorio)
    }

    function idsMascota(id) {
        setOutfit((prevOutfit) => ({
            ...prevOutfit,
            mascota: id
        }));

        let newMascota = "";
        for (let i = 0; i < mascota.length; i++) {
            if (id === mascota[i].idMascota) {
                newMascota = mascota[i].link;
            }
        }
        console.log(newMascota);
        setMascotaSeleccionada(newMascota)
    }

    function idsFondo(id) {
        setOutfit((prevOutfit) => ({
            ...prevOutfit,
            fondo: id
        }));

        let newFondo = "";
        for (let i = 0; i < fondo.length; i++) {
            if (id === fondo[i].idFondo) {
                newFondo = fondo[i].link;
            }
        }
        console.log(newFondo);
        setFondoSeleccionado(newFondo)
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
                                    {nombreUser}
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
                                            remeras.filter(f => f.idRemeras !== 0).map((remera, index) => (
                                                <button key={index} id={remera.idRemeras} onClick={() => idsRemeras(remera.idRemeras)}>
                                                    <img src={remera.link} style={{ width: '84.375px', height: '150px' }} alt={`Remera ${index}`} />
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div style={{ display: displayPantalon }}>
                                        {
                                            pantalon.filter(f => f.idpantalones !== 0).map((pantalon, index) => (
                                                <button key={index} id={pantalon.idpantalones} onClick={() => idsPantalones(pantalon.idpantalones)}>
                                                    <img src={pantalon.link} style={{ width: '84.375px', height: '150px' }} alt={`Pantalón ${index}`} />
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div style={{ display: displayCalzado }}>
                                        {
                                            calzado.filter(f => f.idClazado !== 0).map((calzado, index) => (
                                                <button key={index} id={calzado.idClazado} onClick={() => idsCalzados(calzado.idClazado)}>
                                                    <img src={calzado.link} style={{ width: '84.375px', height: '150px' }} alt={`Clazado ${index}`} />
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div style={{ display: displayPersonajes }}>
                                        {
                                            personaje.filter(f => f.idPersonajes !== 0).map((personaje, index) => (
                                                <button key={index} id={personaje.idPersonajes} onClick={() => idsPersonajes(personaje.idPersonajes)}>
                                                    <img src={personaje.link} style={{ width: '84.375px', height: '150px' }} alt={`Personaje ${index}`} />
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div style={{ display: displayAccesorios }}>
                                        {accesorio.map((accesorio, index) => (
                                            <React.Fragment key={index}>
                                                {accesorio.idAccesorio === 0 ? (
                                                    <button
                                                        onClick={() => setAccesorioSeleccionado("")}
                                                        style={{
                                                            padding: '10px',
                                                            border: 'none',
                                                            backgroundColor: '#f2f2f2',
                                                            color: '#bf97a0',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                        }}
                                                    >
                                                        Quitar
                                                    </button>
                                                ) : (
                                                    <button
                                                        id={accesorio.idAccesorio}
                                                        onClick={() => idsAccesorios(accesorio.idAccesorio)}
                                                    >
                                                        <img
                                                            src={accesorio.link}
                                                            style={{ width: '84.375px', height: '150px' }}
                                                            alt={`Accesorio ${index}`}
                                                        />
                                                    </button>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    {/* Mascotas */}
                                    <div style={{ display: displayMascotas }}>
                                        {mascota.map((mascota, index) => (
                                            <React.Fragment key={index}>
                                                {mascota.idMascota === 0 ? (
                                                    <button
                                                        onClick={() => setMascotaSeleccionada("")}
                                                        style={{
                                                            padding: '10px',
                                                            border: 'none',
                                                            backgroundColor: '#f2f2f2',
                                                            color: '#bf97a0',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                        }}
                                                    >
                                                        Quitar
                                                    </button>
                                                ) : (
                                                    <button
                                                        id={mascota.idMascota}
                                                        onClick={() => idsMascota(mascota.idMascota)}
                                                    >
                                                        <img
                                                            src={mascota.link}
                                                            style={{ width: '84.375px', height: '150px' }}
                                                            alt={`Mascota ${index}`}
                                                        />
                                                    </button>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>

                                    {/* Fondos */}
                                    <div style={{ display: displayFondos }}>
                                        {fondo.map((fondo, index) => (
                                            <React.Fragment key={index}>
                                                {fondo.idFondo === 0 ? (
                                                    <button
                                                        onClick={() => setFondoSeleccionado("")}
                                                        style={{
                                                            padding: '10px',
                                                            border: 'none',
                                                            backgroundColor: '#f2f2f2',
                                                            color: '#bf97a0',
                                                            borderRadius: '5px',
                                                            cursor: 'pointer',
                                                        }}
                                                    >
                                                        Quitar
                                                    </button>
                                                ) : (
                                                    <button
                                                        id={fondo.idFondo}
                                                        onClick={() => idsFondo(fondo.idFondo)}
                                                    >
                                                        <img
                                                            src={fondo.link}
                                                            style={{ width: '84.375px', height: '150px' }}
                                                            alt={`Fondo ${index}`}
                                                        />
                                                    </button>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Botones de acción debajo del div del avatar */}
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                        <button onClick={() => postOutfits(outfit)} style={{
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
