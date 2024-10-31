import React from 'react';
import '../Styles/Formulario.css';

const Formulario2 = ({ datos2, setDatos2, setPaso2, setPaso3 }) => {

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDatos2((prevDatos) => ({
            ...prevDatos,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPaso2(false);
        setPaso3(true);
    };

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="direccion">Dirección:</label>
                    <input 
                        type="text" 
                        id="direccion" 
                        name="direccion" 
                        value={datos2.direccion} 
                        onChange={handleInputChange} 
                        required
                    />

                    <label htmlFor="ciudad">Ciudad:</label>
                    <input 
                        type="text" 
                        id="ciudad" 
                        name="ciudad" 
                        value={datos2.ciudad} 
                        onChange={handleInputChange} 
                        required
                    />

                    <label htmlFor="codigoPostal">Código Postal:</label>
                    <input 
                        type="text" 
                        id="codigoPostal" 
                        name="codigoPostal" 
                        value={datos2.codigoPostal} 
                        onChange={handleInputChange} 
                        required
                    />

                    <button type="submit" className="submit-button">Siguiente</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario2;
