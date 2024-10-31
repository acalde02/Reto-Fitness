import React from 'react';
import '../Styles/Formulario.css';

const Formulario4 = ({ datos4, setDatos4, setPaso4, setEnviado }) => {

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDatos4((prevDatos) => ({
            ...prevDatos,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPaso4(false);
        setEnviado(true);
    };

    // Verifica si el método de pago seleccionado requiere datos de tarjeta
    const requiereTarjeta = datos4.metodoPago === "credito" || datos4.metodoPago === "debito";

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="metodoPago">Método de Pago:</label>
                    <select 
                        id="metodoPago" 
                        name="metodoPago" 
                        value={datos4.metodoPago} 
                        onChange={handleInputChange} 
                        required
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="credito">Tarjeta de Crédito</option>
                        <option value="debito">Tarjeta de Débito</option>
                        <option value="paypal">PayPal</option>
                        <option value="transferencia">Transferencia Bancaria</option>
                    </select>

                    {requiereTarjeta && (
                        <>
                            <label htmlFor="nombreTitular">Nombre del Titular:</label>
                            <input 
                                type="text" 
                                id="nombreTitular" 
                                name="nombreTitular" 
                                value={datos4.nombreTitular} 
                                onChange={handleInputChange} 
                                required={requiereTarjeta} // Solo obligatorio si requiere tarjeta
                            />

                            <label htmlFor="numeroTarjeta">Número de Tarjeta:</label>
                            <input 
                                type="text" 
                                id="numeroTarjeta" 
                                name="numeroTarjeta" 
                                value={datos4.numeroTarjeta} 
                                onChange={handleInputChange} 
                                required={requiereTarjeta} // Solo obligatorio si requiere tarjeta
                            />

                            <label htmlFor="fechaVencimiento">Fecha de Vencimiento:</label>
                            <input 
                                type="text" 
                                id="fechaVencimiento" 
                                name="fechaVencimiento" 
                                value={datos4.fechaVencimiento} 
                                onChange={handleInputChange} 
                                required={requiereTarjeta} // Solo obligatorio si requiere tarjeta
                            />

                            <label htmlFor="cvv">CVV:</label>
                            <input 
                                type="text" 
                                id="cvv" 
                                name="cvv" 
                                value={datos4.cvv} 
                                onChange={handleInputChange} 
                                required={requiereTarjeta} // Solo obligatorio si requiere tarjeta
                            />
                        </>
                    )}

                    <button type="submit" className="submit-button">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario4;
