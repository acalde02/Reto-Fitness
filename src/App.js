import React, { useState, useEffect } from "react";
import Formulario from "./Components/Formulario";
import Formulario2 from "./Components/Formulario2";
import Formulario3 from "./Components/Formulario3";
import Formulario4 from "./Components/Formulario4";

function App() {
  const [paso1, setPaso1] = useState(true);
  const [paso2, setPaso2] = useState(false);
  const [paso3, setPaso3] = useState(false);
  const [paso4, setPaso4] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const [datos, setDatos] = useState({
    nombre: '',
    correo: '',
    telefono: '',
  });

  const [datos2, setDatos2] = useState({
    direccion: '',
    ciudad: '',
    codigoPostal: '',
  });

  const [datos3, setDatos3] = useState({
    tipoEntrenamiento: '',
    objetivo: '',
    disponibilidad: ''
  });

  const [datos4, setDatos4] = useState({
    metodoPago: '',
    nombreTitular: '',
    numeroTarjeta: '',
    fechaVencimiento: '',
    cvv: ''
  });

  const datosCompletos = { ...datos, ...datos2, ...datos3, ...datos4 };

  // Llama a la API para enviar los datos cuando 'enviado' sea true
  useEffect(() => {
    if (enviado) {
      const enviarDatos = async () => {
        try {
          const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(datosCompletos),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
          const data = await res.json();
          console.log("Datos enviados:", data);
        } catch (error) {
          console.error("Error al enviar datos:", error);
        }
      };

      enviarDatos();
    }
  }, [enviado, datosCompletos]);

  return (
    paso1 ? (
      <Formulario datos={datos} setDatos={setDatos} setPaso1={setPaso1} setPaso2={setPaso2} />
    ) : paso2 ? (
      <Formulario2 datos2={datos2} setDatos2={setDatos2} setPaso2={setPaso2} setPaso3={setPaso3} />
    ) : paso3 ? (
      <Formulario3 datos3={datos3} setDatos3={setDatos3} setPaso3={setPaso3} setPaso4={setPaso4} />
    ) : paso4 ? (
      <Formulario4 datos4={datos4} setDatos4={setDatos4} setPaso4={setPaso4} setEnviado={setEnviado} />
    ) : enviado ? (
      <h1>Formulario enviado</h1>
    ) : null
  );
}

export default App;
