import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/components/page.module.css'

export default function Headwer() {
  return (
    <div className={styles.headwer}>
        {/* Imagen del moño */}
        <img src="/MOÑOOO.png" className={styles.mono}></img>
        {/* Texto al lado de la imagen */}
        <h1 className={styles.dress}>
          Dress To Impress!
        </h1>
    </div>
  );
}