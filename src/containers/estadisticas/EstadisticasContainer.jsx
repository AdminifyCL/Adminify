// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import EstadisticasPage from "../../pages/estadisticas/EstadisticasPage";
import Navbar from "../../components/navbar/Navbar.jsx";

// Definición del contenedor: <EstadisticasContainer />.
const EstadisticasContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <Navbar>
      <EstadisticasPage />
    </Navbar>
  );
};

// PropTypes.
EstadisticasContainer.propTypes = {};

// Exportación.
export default EstadisticasContainer;
