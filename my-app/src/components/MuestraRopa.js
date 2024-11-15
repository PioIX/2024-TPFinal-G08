"use client";

import { getRemeras } from '@/app/utils/api.js';
import React, { useEffect, useState } from 'react';
import styles from '@/components/page.module.css';

export default function MuestraRopa() {
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
            <div className={styles.ropa}>
                <div className={styles.MuestraOutfit}>
                    <div className={styles.MuestraPersonaje}>
                        <img src="/personajes/nano.png" style={{ width: '270px', height: '480px' }} />
                    </div>
                    <div id="remera" className={styles.MuestraRemera}>
                        {remeraSeleccionada && (
                            <img src={remeraSeleccionada} style={{ width: '270px', height: '480px' }} alt="Remera Seleccionada" />
                        )}
                    </div>
                </div>
                <div className={styles.MuestraRopa}>
                    {
                        remeras.map((remera, index) => (
                            <button key={index} id={remera.idRemeras} onClick={() => ids(remera.idRemeras)}>
                                <img src={remera.link} style={{ width: '112.5px', height: '200px' }} alt={`Remera ${index}`} />
                            </button>
                        ))
                    }
                </div>
            </div>
        </>
    );
}