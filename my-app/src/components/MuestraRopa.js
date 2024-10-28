"use client";

import { getRemeras } from '@/app/utils/api.js';
import React, { useEffect, useState } from 'react';
import styles from '@/components/page.module.css';

export default function MuestraRopa() {
    const [remeras, setRemeras] = useState([]);

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
        console.log(outfit); // Aquí imprimimos el id
    }

    return (
        <>
            <div className={styles.ropa}>
                <div className={styles.MuestraOutfit}>
                    <div className={styles.MuestraPersonaje}>
                        <img src="/personajes/nano.png" style={{ width: '270px', height: '480px' }}/>
                    </div>
                    <div id="remera" className={styles.MuestraRemera}>
                        <img src='/ropa/remeras/remera azul.png' style={{ width: '270px', height: '480px' }}/>
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



/*<img src="/ropa/remeras/remera azul.png" style={{width: '225px', height: '400px'}}></img>
            {remeras.map(remera => {
                <>
                <h1>HOLAAA</h1>
                <img src={remera} style={{width: '225px', height: '400px'}}></img>
                </>
            })
            }
            <Button onClick={obtenerRemeras} text="HOLAAAA"></Button>
            */