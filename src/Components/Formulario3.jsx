import React from 'react';
import '../Styles/Formulario.css';

const Formulario3 = ({ datos3, setDatos3, setPaso3, setPaso4 }) => {

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDatos3((prevDatos) => ({
            ...prevDatos,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPaso3(false);
        setPaso4(true);
    };

    return (
        <div>
            <h1>Formulario Paso 3</h1>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="tipoEntrenamiento">Tipo de Entrenamiento:</label>
                    <input 
                        type="text" 
                        id="tipoEntrenamiento" 
                        name="tipoEntrenamiento" 
                        value={datos3.tipoEntrenamiento} 
                        onChange={handleInputChange} 
                        required
                    />

                    <label htmlFor="objetivo">Objetivo:</label>
                    <input 
                        type="text" 
                        id="objetivo" 
                        name="objetivo" 
                        value={datos3.objetivo} 
                        onChange={handleInputChange} 
                        required
                    />

                    <label htmlFor="disponibilidad">Disponibilidad:</label>
                    <input 
                        type="text" 
                        id="disponibilidad" 
                        name="disponibilidad" 
                        value={datos3.disponibilidad} 
                        onChange={handleInputChange} 
                        required
                    />

                    <button type="submit" className="submit-button">Siguiente</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario3;
