import React from 'react';
import '../Styles/Formulario.css';

const Formulario = ({ datos, setDatos, setPaso1, setPaso2 }) => {

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDatos((prevDatos) => ({
            ...prevDatos,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPaso1(false);
        setPaso2(true);
    };

    return (
        <div>
            <h1>Bienvenido a Fit-Life</h1>
            <h2>Completa el formulario para registrarte</h2>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name="nombre" 
                        value={datos.nombre} 
                        onChange={handleInputChange} 
                        required
                    />
                    
                    <label htmlFor="correo">Correo:</label>
                    <input 
                        type="email" 
                        id="correo" 
                        name="correo" 
                        value={datos.correo} 
                        onChange={handleInputChange} 
                        required
                    />
                    
                    <label htmlFor="telefono">Teléfono:</label>
                    <input 
                        type="tel" 
                        id="telefono" 
                        name="telefono" 
                        value={datos.telefono} 
                        onChange={handleInputChange} 
                        required
                    />
                    
                    <button type="submit" className='submit-button'>Siguiente</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
