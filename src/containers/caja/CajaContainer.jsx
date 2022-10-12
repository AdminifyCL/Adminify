// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CajaPage from "../../pages/caja/CajaPage.jsx";

// Definición del contenedor: <CajaContainer />.
const CajaContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <CajaPage />;
};

// PropTypes.
CajaContainer.propTypes = {};

// Exportación.
export default CajaContainer;
