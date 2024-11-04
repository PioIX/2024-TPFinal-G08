"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HelpIcon from '@/components/helpicon';
import Header from '@/components/Header';
import Hamburguesa from '@/components/Hamburguesa';
import { getRemeras, getPantalones, getCalzados} from '@/app/utils/api.js';
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
        }
        else if (category == "pantalones") {
            setdisplayPantalon(cambiar)
            setdisplayRemeras("none")
            setdisplayCalzado("none")
        }
        else if (category == "zapatos") {
            setdisplayPantalon("none")
            setdisplayRemeras("none")
            setdisplayCalzado(cambiar)
        }
    };

    const [displayRemeras, setdisplayRemeras] = useState("none");
    const [displayPantalon, setdisplayPantalon] = useState("none");
    const [displayCalzado, setdisplayCalzado] = useState("none");

    const [remeras, setRemeras] = useState([]);
    const [remeraSeleccionada, setRemeraSeleccionada] = useState("");

    const [pantalon, setPantalones] = useState([]);
    const [pantalonSeleccionada, setPantalonSeleccionada] = useState("");

    const [calzado, setCalzado] = useState([]);
    const [calzadoSeleccionado, setCalzadoSeleccionado] = useState("");



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
        personaje: 1
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
                                        <img src="/personajes/nano.png" alt="Avatar" style={{ width: '90%' }} />
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
                                    <div style={{ display: displayRemeras}}>
                                        {
                                            remeras.map((remera, index) => (
                                                <button key={index} id={remera.idRemeras} onClick={() => idsRemeras(remera.idRemeras)}>
                                                    <img src={remera.link} style={{ width: '84.375px', height: '150px' }} alt={`Remera ${index}`} />
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div style={{ display: displayPantalon}}>
                                        {
                                            pantalon.map((pantalon, index) => (
                                                <button key={index} id={pantalon.idpantalones} onClick={() => idsPantalones(pantalon.idpantalones)}>
                                                    <img src={pantalon.link} style={{ width: '84.375px', height: '150px' }} alt={`Pantalón ${index}`} />
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div style={{ display: displayCalzado}}>
                                        {
                                            calzado.map((calzado, index) => (
                                                <button key={index} id={calzado.idClazado} onClick={() => idsCalzados(calzado.idClazado)}>
                                                    <img src={calzado.link} style={{ width: '84.375px', height: '150px' }} alt={`Clazado ${index}`} />
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
                        <button style={{
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
