"use client"

import { getRemeras } from '@/app/utils/api.js'
import React, { useEffect, useState } from 'react'
import Button from './Button';

export default function MuestraRopa(){
    const [remeras, setRemeras] = useState([]);

    const [test, setTest] = useState([
        {id: 1, link: "asdas"},
        {id: 2, link: "asdasa"},
        {id: 3, link: "asdasaa"},
    ])

    async function obtenerRemeras() {
        let res = await getRemeras()
        setRemeras(res);
        
    }
    useEffect(() => {
        obtenerRemeras();
    },[])
    useEffect(() => {
        console.log(remeras)
    },[remeras])
    
    return(
        <>
            <div>
                {
                    remeras.map(x => {
                        {console.log(x)}
                        <>
                        <h1>HOLAAA</h1>
                        <p>{x}</p>
                        </>
                    })
                }
            </div>
           
            <img src="/ropa/remeras/remera azul.png" style={{width: '225px', height: '400px'}}></img>
            {remeras.map(remera => {
                <>
                <h1>HOLAAA</h1>
                <img src={remera} style={{width: '225px', height: '400px'}}></img>
                </>
            })
            }
            <Button onClick={obtenerRemeras} text="HOLAAAA"></Button>
        </>
    )
}