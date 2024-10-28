"use client";
import { useEffect, useState } from 'react';

export default function UserName() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener el userId de la cookie
    const userIdFromCookie = document.cookie.match(/idUser=([^;]*)/)?.[1];

    if (!userIdFromCookie) {
      setError("No se encontró el ID de usuario en la cookie");
      return;
    }

    console.log("ID de usuario obtenido de la cookie:", userIdFromCookie);

    // Llamada a la API para obtener los datos del usuario
    fetch(`/api/users/${userIdFromCookie}`)
      .then((res) => {
        if (!res.ok) throw new Error("Usuario no encontrado en la base de datos");
        return res.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError(error.message);
      });
  }, []);

  if (error) return <p>{error}</p>;
 

  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
}
