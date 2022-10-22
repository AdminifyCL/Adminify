// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import RegistroPage from "../../pages/registro/RegistroPage.jsx";

// Definición del contenedor: <RegistroContainer />.
const RegistroContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <RegistroPage />;
};

// PropTypes.
RegistroContainer.propTypes = {};

// Exportación.
export default RegistroContainer;
