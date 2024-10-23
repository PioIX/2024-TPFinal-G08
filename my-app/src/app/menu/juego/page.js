//"use client"

import { getRemeras } from '@/app/utils/api.js'
import React from 'react'
import MuestraRopa from '@/components/MuestraRopa'

export default async function Juego(){
    const array = [1, 2, 3, 4, 5, 6]

    return(
        <>
            <MuestraRopa></MuestraRopa>
        </>
    )
}