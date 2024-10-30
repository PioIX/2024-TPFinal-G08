"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HelpIcon from '@/components/helpicon';
import Header from '@/components/Header';
import Hamburguesa from '@/components/Hamburguesa';
import { getRemeras } from '@/app/utils/api.js';
import React, { useEffect, useState } from 'react';
import styles from '@/components/page.module.css';
import Head from 'next/head';

export default function Game() {
    const [selectedCategory, setSelectedCategory] = useState('tops');
    const categories = [
        { name: 'tops', img: '4.png' },
        { name: 'bottoms', img: '6.png' },
        { name: 'shoes', img: '7.png' },
        { name: 'accessories', img: '8.png' },
        { name: 'people', img: '5.png' },
        { name: 'pets', img: '9.png' },
        { name: 'backgrounds', img: '10.png' },
    ];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const [remeras, setRemeras] = useState([]);
    const [remeraSeleccionada, setRemeraSeleccionada] = useState("");


    async function obtenerRemeras() {
        let res = await getRemeras();
        setRemeras(res);
    }

    useEffect(() => {
        obtenerRemeras();
    }, []);

    useEffect(() => {
        console.log(remeras);
    }, [remeras]);

    let outfit = {
        remeras: 0,
        personaje: 1
    }

    function ids(id) {
        outfit.remeras = id
        console.log(outfit);
        let newRemera = "";
        console.log(remeras.idRemeras)
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
                                    <div className={styles.MuestraPersonaje} style={{ padding: '10px'}}>
                                        <img src="/personajes/nano.png" alt="Avatar" style={{ width: '65%' }} />
                                    </div>
                                    <div id="remera" className={styles.MuestraRemera}>
                                        {remeraSeleccionada && (
                                            <img src={remeraSeleccionada} style={{ width: '65%' }} alt="Remera Seleccionada" />
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
                                    <div className={styles.MuestraRopa}>
                                        {
                                            remeras.map((remera, index) => (
                                                <button key={index} id={remera.idRemeras} onClick={() => ids(remera.idRemeras)}>
                                                    <img src={remera.link} style={{ width: '84.375px', height: '150px' }} alt={`Remera ${index}`} />
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
