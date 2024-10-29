import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UserName from '@/components/UserName';

export default function Hamburguesa() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = () => {
        window.location.href = '/menu'; // Redirige a /menu
    };

    const handleLogout = () => {
        // Elimina la cookie de idUser
        document.cookie = 'idUser=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        // Redirige a la página de inicio
        window.location.href = '/'; // Cambia esto a '/' para redirigir a la página de inicio
    };
    
    return (
        <>
            <nav className="navbar" style={{ 
                position: 'absolute', 
                top: 0, 
                right: 0, 
                backgroundColor: '#fbfcf7', 
                width: '4%' 
            }}>
                <button 
                    onClick={toggleNavbar} 
                    className="navbar-toggler" 
                    type="button" 
                    aria-controls="navbarToggleExternalContent3" 
                    aria-expanded={isOpen} 
                    aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
            </nav>
            <div className={`collapse ${isOpen ? 'show' : ''}`} id="navbarToggleExternalContent3" style={{ 
                backgroundColor: 'rgb(239, 232, 229)',
                position: 'absolute', 
                right: 0,
                borderRadius: 10
            }}>
                <div className="shadow-3 p-4"> 
                    <UserName />
                    <button 
                        className="btn btn-link btn-block border-bottom m-0 text-start" 
                        style={{ textDecoration: 'none', color: '#d8bfc5', backgroundColor: '#fbfcf7' }} 
                        onClick={handleMenuClick}
                    >
                    Menu
                    </button>
                    <br />
                    <button 
                        className="btn btn-link btn-block border-bottom m-0 text-start" 
                        style={{ textDecoration: 'none', color: '#d8bfc5', backgroundColor: '#fbfcf7' }} 
                        onClick={handleLogout} // Maneja el clic en el botón de Log Out
                    >
                    Log Out
                    </button>
                    <br />
                </div>
            </div>
        </>
    );
}
