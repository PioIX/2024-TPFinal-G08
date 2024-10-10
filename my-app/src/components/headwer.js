import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import styles from '@/components/page.module.css'
 
/*export default function Headwer() {
  return(
    <div className="relative flex flex-col items-center justify-center h-40">
      {/* Logo Placeholder *//*}
        <Image
          src="/MOÑOOO.png"
          width={50}
          height={45}
          alt="Picture of the author"
        />
      <h1 className="text-4xl text-pink-700 font-serif text-left">
        Dress To Impress!
      </h1>
    </div>
  )
} HAY QUE CAMBIAR DE LUGAR  EL TITULITO*/ 

//SE SUPONE QUE ES CON ESTO NDEA
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
