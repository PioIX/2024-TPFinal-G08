"use client";

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';

const socket = io('http://localhost:4000');

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [showChat, setShowChat] = useState(false);
    const [userName, setUserName] = useState('');
    const userIdFromCookie = document.cookie.match(/idUser=([^;]*)/)?.[1];

    useEffect(() => {
        const fetchUserName = async () => {
            if (userIdFromCookie) {
                try {
                    const response = await fetch(`/NombreGet2?userId=${userIdFromCookie}`);
                    if (response.ok) {
                        const data = await response.json();
                        setUserName(data.Nombre); 
                    } else {
                        console.error("Error al obtener el nombre de usuario");
                    }
                } catch (error) {
                    console.error("Error al realizar la solicitud: ", error);
                }
            }
        };

        fetchUserName();
    }, [userIdFromCookie]);

    useEffect(() => {
        if (!userIdFromCookie) {
            console.error("El ID del usuario no está definido.");
            return;
        }

        socket.on('receive_message', (data) => {
            setMessages((prevMessages) => [...prevMessages, { ...data, sent: false }]);
        });

        return () => {
            socket.off('receive_message');
        };
    }, [userIdFromCookie]);

    const sendMessage = () => {
        if (inputMessage && userIdFromCookie) {
            const messageData = {
                message: inputMessage,
                userID: userIdFromCookie,
                userName: userName, // Usa el nombre del usuario
                time: new Date().toLocaleTimeString(),
                sent: true,
                receiverId: 'OTHER_USER_ID' // Cambia esto según tu lógica
            };

            socket.emit('send_message', messageData);
            setMessages((prevMessages) => [...prevMessages, messageData]);
            setInputMessage('');
        } else {
            console.error("El ID del usuario o el mensaje de entrada son inválidos.");
        }
    };

    return (
        <>
            <button
                onClick={() => setShowChat(!showChat)}
                style={{
                    position: 'fixed',
                    top: 20,
                    right: 20,
                    zIndex: 1001,
                    background: 'none',
                    border: 'none',
                    padding: 0
                }}>
                <img
                    src="/ChatBox.png"
                    alt="Chat"
                    style={{ width: '50px', height: '50px' }}
                />
            </button>

            {showChat && (
                <div className="chat-box">
                    <div className="card" style={{ position: 'fixed', top: 80, right: 20, width: '300px', zIndex: 1000 }}>
                        <div className="card-body">
                            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                {messages.map((msg, index) => (
                                    <div className={`d-flex flex-row justify-content-${msg.sent ? 'end' : 'start'}`} key={index}>
                                        <div>
                                            <p className={`small mb-1 ${msg.sent ? 'me-3' : 'ms-3'} text-muted`}>
                                                {msg.userName} {/* Aquí se muestra el nombre del usuario */}
                                            </p>
                                            <p className={`small p-2 ${msg.sent ? 'me-3' : 'ms-3'} mb-1 rounded-3`}
                                                style={{ backgroundColor: msg.sent ? '#c87c8d' : '#636160', color: 'white' }}>
                                                {msg.message}
                                            </p>
                                            <p className={`small ${msg.sent ? 'me-3' : 'ms-3'} mb-3 rounded-3 text-muted`}>
                                                {msg.time}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="input-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Escribe un mensaje..."
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                />
                                <button className="btn" style={{ backgroundColor: '#c87c8d', color: 'white' }} onClick={sendMessage}>
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBox;
