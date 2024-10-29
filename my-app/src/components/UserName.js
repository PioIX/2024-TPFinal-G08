// UserName.js (Next.js)
"use client";
import { useEffect, useState } from 'react';

export default function UserName() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/get-user`, {
      credentials: 'include', 
    })
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
      <p>{user?.name || "Nombre no disponible"}</p>
    </div>
  );
}
