// components/LoginBox.js
import React from "react";
import styles from '@/components/page.module.css'

const LoginBox = () => {
  return (
    <div className={styles.todoLogin}>
      <div className={styles.cajaLogin}>
        <h2 className={styles.login}>LOGIN</h2>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          className={styles.input}
        />
        <br></br>
        <input
          type="text"
          placeholder="Contraseña"
          className={styles.input}
        />
        <br></br>
        <button className={styles.ingresar}>
          Registrarse
        </button>
        <br></br>
        <button className={styles.ingresar}>
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default LoginBox;