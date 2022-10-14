// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import EmpleadosPage from "../../pages/empleados/EmpleadosPage";

// Definición del contenedor: <EmpleadosContainer />.
const EmpleadosContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <EmpleadosPage />;
};

// PropTypes.
EmpleadosContainer.propTypes = {};

// Exportación.
export default EmpleadosContainer;
