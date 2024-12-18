"use client";

const idUser = -1
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLogin } from '@/hooks/useLogin';
import { useEffect, useState } from 'react';
import { getUserid } from '@/app/utils/api'
import Header from '@/components/Header';

export default function Login() {
  const [idUser, setIdUser] = useLogin()
  const [nombreUser, setNombreUser] = useState([])

  async function login() {
    const username = document.getElementById("mail").value;
    const password = document.getElementById("contrasena").value;

    if (!username || !password) {
      alert("Por favor llena ambos campos.");
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {

        const result = await response.json();
        console.log(result);
        let id = result.user[0].ID_Usuario;
        let nombre = username
        setIdUser(id);
        setNombreUser(nombre)
        document.cookie = `idUser=${idUser}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
        window.location.href = '/menu';

      } else {
        const error = await response.json();
        alert(error.error);
      }
    } catch (error) {
      console.error("Error en login: ", error);
    }
  }

  useEffect(() => {
    if (idUser) {
      console.log('ID del usuario actualizado:', idUser);
      window.location.href = '/menu';
    }
    localStorage.setItem('idUsuario', JSON.stringify(idUser))
    localStorage.setItem('nombreUsuario', JSON.stringify(nombreUser))
  }, [idUser, nombreUser]);


  async function registro() {
    const username = document.getElementById("mail").value;
    const password = document.getElementById("contrasena").value;

    if (!username || !password) {
      alert("Por favor llena ambos campos.");
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/registro', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        const error = await response.json();
        alert(error.error);
      }
    } catch (error) {
      console.error("Error en registro: ", error);
    }
  }

  return (
    <>
      <Header></Header>
      <section className="vh-100" style={{ backgroundColor: '#fbfcf7' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5" style={{ color: '#d8bfc5' }}>Login</h3>
                  <div className="form-outline mb-4">
                    <input type="email" id="mail" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typeEmailX-2" style={{ color: '#d8bfc5' }}>Nombre</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="contrasena" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typePasswordX-2" style={{ color: '#d8bfc5' }}>Contraseña</label>
                  </div>
                  <button className="btn btn-success btn-lg btn-block" type="submit" style={{ backgroundColor: '#d8bfc5', color: '#fff', margin: '10px', border: 'none' }} onClick={login}>Ingresar</button>
                  <button className="btn btn-success btn-lg btn-block" type="submit" style={{ backgroundColor: '#d8bfc5', color: '#fff', border: 'none' }} onClick={registro}>Registrarse</button>
                  <hr className="my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
