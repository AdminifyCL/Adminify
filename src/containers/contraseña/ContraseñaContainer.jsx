// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ContraseñaPage from "../../pages/contraseña/ContraseñaPage.jsx";

// Definición del contenedor: <ContraseñaContainer />.
const ContraseñaContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <ContraseñaPage />;
};

// PropTypes.
ContraseñaContainer.propTypes = {};

// Exportación.
export default ContraseñaContainer;
