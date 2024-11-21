"use client"

//TRAE REMERAS
export async function getRemeras() {
    //Llamo a un pedido Get del servidor
    const response = await fetch('http://localhost:4000/getRemeras',{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
          },
    })

    console.log(response)
    //Tengo que usar el await porque la respuesta del servidor es lenta
    const result = await response.json()
    console.log(result)
    return result
}

//TRAE PANTALONES

export async function getPantalones() {
    //Llamo a un pedido Get del servidor
    const response = await fetch('http://localhost:4000/getPantalones',{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
          },
    })

    console.log(response)
    //Tengo que usar el await porque la respuesta del servidor es lenta
    const result = await response.json()
    console.log(result)
}

//TRAE PERSONAJES

export async function getPersonajes() {
    //Llamo a un pedido Get del servidor
    const response = await fetch('http://localhost:4000/getPersonajes',{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
          },
    })

    console.log(response)
    //Tengo que usar el await porque la respuesta del servidor es lenta
    const result = await response.json()
    console.log(result)
}

//TRAE CALZADOS

export async function getCalzados() {
    //Llamo a un pedido Get del servidor
    const response = await fetch('http://localhost:4000/getCalzados',{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
          },
    })

    console.log(response)
    //Tengo que usar el await porque la respuesta del servidor es lenta
    const result = await response.json()
    console.log(result)
}

//TRAE ACCESORIOS

export async function getAccesorios() {
    //Llamo a un pedido Get del servidor
    const response = await fetch('http://localhost:4000/getAccesorios',{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
          },
    })

    console.log(response)
    //Tengo que usar el await porque la respuesta del servidor es lenta
    const result = await response.json()
    console.log(result)
}

//TRAE MASCOTAS

export async function getMascotas() {
    //Llamo a un pedido Get del servidor
    const response = await fetch('http://localhost:4000/getMascotas',{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
          },
    })

    console.log(response)
    //Tengo que usar el await porque la respuesta del servidor es lenta
    const result = await response.json()
    console.log(result)
}

//TRAE OUTFITS

export async function getOutfits() {
    //Llamo a un pedido Get del servidor
    const response = await fetch('http://localhost:4000/getOutfits',{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
          },
    })

    console.log(response)
    //Tengo que usar el await porque la respuesta del servidor es lenta
    const result = await response.json()
    console.log(result)
}
