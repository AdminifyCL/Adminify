// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ContraseñaPage from "../../pages/contraseña/ContraseñaPage.jsx";

// API Actions.
import Recovery from "../../api/usuarios/recoverAccount.js";

// Definición del contenedor: <ContraseñaContainer />.
const ContraseñaContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const [response, setResponse] = useState("");

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleRecoveryAccount = async (email) => {
    await Recovery(email)
      .then(() => {
        console.log("[] Response in recovery!");
        setResponse("Email de recuperción enviado!");
      })
      .catch((err) => {
        console.log("[] Error in recovery!");
        setResponse("Error al enviar el correo de recuperación");
      });
  };

  // 4. Render.
  return (
    <ContraseñaPage
      handleRecoveryAccount={handleRecoveryAccount}
      response={response}
      setResponse={setResponse}
    />
  );
};

// PropTypes.
ContraseñaContainer.propTypes = {};

// Exportación.
export default ContraseñaContainer;
