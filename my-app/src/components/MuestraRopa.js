"use client"

import { getRemeras } from '@/app/utils/api.js'
import React, { useEffect, useState } from 'react'
import styles from '@/components/page.module.css'


export default function MuestraRopa() {
    const [remeras, setRemeras] = useState([]);

    async function obtenerRemeras() {
        let res = await getRemeras()
        setRemeras(res);
    }

    useEffect(() => {
        obtenerRemeras();
    }, [])

    useEffect(() => {
        console.log(remeras)
    }, [remeras])

    return (
        <>
            <div className={styles.MuestraRopa}>
                {
                    remeras.map((remera, index) => (
                        <img key={index} src={remera} style={{ width: '112.5px', height: '200px' }} alt={`Remera ${index}`} />
                    ))
                }
            </div>
        </>
    )
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