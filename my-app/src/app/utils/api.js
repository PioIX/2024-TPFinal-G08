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
    return result
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
    return result
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
    return result
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
    return result
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
    return result
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
    return result
}

export async function getFondos() {
    //Llamo a un pedido Get del servidor
    const response = await fetch('http://localhost:4000/getFondos',{
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

export async function getUsuarios() {
    //Llamo a un pedido Get del servidor
    const response = await fetch('http://localhost:4000/UsuariosGet',{
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

export async function postOutfits(outfitData) {
    // outfitData es el objeto que contiene los datos que necesitas enviar
    const response = await fetch('http://localhost:4000/outfit', {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Especificamos que estamos enviando JSON
        },
        body: JSON.stringify(outfitData) // Convertimos el objeto outfitData a JSON
    });

    // Esperamos la respuesta del servidor
    const result = await response.json();

    // Mostramos el resultado
    console.log(result);

    return result;
}

export async function postPuntajes(puntajeData) {
    const response = await fetch('http://localhost:4000/votarOutfit', {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Especificamos que estamos enviando JSON
        },
        body: JSON.stringify(puntajeData), // Convertimos el objeto puntajeData a JSON
    });

    // Asegúrate de verificar que la respuesta sea válida antes de procesarla
    if (!response.ok) {
        throw new Error('Error al registrar el voto');
    }

    // Esperamos la respuesta del servidor
    const result = await response.json();

    // Mostramos el resultado
    console.log(result);

    return result;
}
