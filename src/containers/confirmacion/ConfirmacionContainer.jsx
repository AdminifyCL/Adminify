// Dependencias.
import React, { useState, useEffect } from "react";
import ConfirmacionPage from "../../pages/confirmacion/ConfirmacionPage.jsx";
import PropTypes from "prop-types";

// Definición del contenedor: <ConfirmacionContainer />.
const ConfirmacionContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <ConfirmacionPage carroProducts={[]} />;
};

// PropTypes.
ConfirmacionContainer.propTypes = {};

// Exportación.
export default ConfirmacionContainer;
