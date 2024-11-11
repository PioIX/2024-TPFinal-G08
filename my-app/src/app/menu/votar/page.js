"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HelpIcon from '@/components/helpicon';
import Header from '@/components/Header';
import Hamburguesa from '@/components/Hamburguesa';
import { useState } from 'react';

export default function Votacion() {
  // State to track total score and vote count for each player
  const [puntajes, setPuntajes] = useState(Array(5).fill(0));
  const [cantidaddevotos, setCantidaddevotos] = useState(Array(5).fill(0));

  // Function to update total score and vote count for calculating average
  const handleVote = (index, score) => {
    const updatedPuntajes = [...puntajes];
    updatedPuntajes[index] += score;

    const updatedVotos = [...cantidaddevotos];
    updatedVotos[index] += 1;

    setPuntajes(updatedPuntajes);
    setCantidaddevotos(updatedVotos);

    // Optionally, save score to the server
    // saveScoreToServer(index, updatedPuntajes[index]);
  };

  return (
    <>       
      <Header />
      <Hamburguesa />
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <section className="vh-100" style={{ backgroundColor: '#fbfcf7' }}>
        <div className="card-body p-5 text-center">
          <h2 className="mb-4" style={{ color: '#c87c8d', fontSize: '2rem', marginTop: '-1%', fontFamily: 'Lora, serif' }}>Votaciones</h2>
        </div>

        <div className="text-center" style={{ marginTop: '-10px', height: 'auto' }}>
          <div style={{ 
                width: '90%',  
                height: '75vh',  
                backgroundColor: '#efe8e5', 
                borderRadius: '10px', 
                margin: '0 auto',
                padding: '20px'
              }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ 
                fontFamily: 'Lora, serif', 
                fontSize: '1.5rem', 
                color: '#bf97a0',  
                textAlign: 'center', 
                display: 'flex', 
                justifyContent: 'center',  
                gap: '40px',  
                marginTop: '20px', 
                marginBottom: '20px' 
              }}>
                {Array.from({ length: 5 }, (_, index) => (
                  <div key={index} style={{ flex: 1, textAlign: 'center' }}>
                    <h3 style={{ color: '#bf97a0' }}>Jugador</h3>
                    <div style={{
                      width: '100%',
                      height: '70%',
                      backgroundColor: '#fff6f2',
                      borderRadius: '10px',
                      margin: '0 auto',
                      padding: '40px'
                    }}>
                      <img src="/personajes/nano.png" style={{ width: '168.75px', height: '300px' }} alt="Jugador" />
                    </div>

                    {/* Display average score instead of total */}
                    <h5 style={{ color: '#bf97a0' }}>
                      Puntaje: {cantidaddevotos[index] > 0 ? (puntajes[index] / cantidaddevotos[index]).toFixed(1) : 0}
                    </h5>
                    <h6 style={{ color: '#bf97a0' }}>Votos: {cantidaddevotos[index]}</h6>

                    <div style={{ marginTop: '10px', backgroundColor: '#fff6f2', borderRadius: '10px', display: 'flex', justifyContent: 'center', gap: '10px', padding: '10px' }}>
                      {[1, 2, 3, 4, 5].map((score) => (
                        <button
                          key={score}
                          className="btn btn-success"
                          onClick={() => handleVote(index, score)}
                          style={{ backgroundColor: '#d8bfc5', color: '#fff', border: 'none', fontFamily: 'Poppins, sans-serif' }}
                        >
                          {score}
                        </button>
                      ))}
                    </div>
                    <HelpIcon />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <HelpIcon />
    </>
  );
}
