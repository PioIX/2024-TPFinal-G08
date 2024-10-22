
import { getRemeras } from '@/app/utils/api.js'
import React from 'react'

export default async function Juego(){
    const remeras = await getRemeras();

    return(
        <>
            <ul>
                {remeras.map((remera) => (
                    <img src={remera.link} style={{width: '225px', height: '400px'}}></img>
                ))}
            </ul>
            <img src="/ropa/remeras/remera azul.png" style={{width: '225px', height: '400px'}}></img>
        </>
    )
}