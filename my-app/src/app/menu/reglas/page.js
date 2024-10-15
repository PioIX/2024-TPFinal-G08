"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HelpIcon from '@/components/helpicon';
import Header from '@/components/Header';

export default function Reglas() {
  return (
    <>       
    <Header></Header>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <section className="vh-100" style={{ backgroundColor: '#fbfcf7' }}>
        <div className="card-body p-5 text-center">
        <h2 className="mb-4" style={{ color: '#d8bfc5', fontSize: '2rem', marginTop: '10%', fontFamily: 'Lora, serif' }}>            Reglas del juego
          </h2>
          <>
            <p>Esta es la pagina de reglas</p>
            {/*hacer la cajita de reglas con el estilo de los divs de login o tabla de puntajes y un boton para v olver hacia atras*/ }
        </>
        </div>
        <HelpIcon></HelpIcon>
      </section>
    </>
  );
}