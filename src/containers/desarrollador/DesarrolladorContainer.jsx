// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DesarrolladorPage from "../../pages/desarrollador/DesarrolladorPage.jsx";

// Definición del contenedor: <DesarrolladorContainer />.
const DesarrolladorContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <DesarrolladorPage />;
};

// PropTypes.
DesarrolladorContainer.propTypes = {};

// Exportación.
export default DesarrolladorContainer;
