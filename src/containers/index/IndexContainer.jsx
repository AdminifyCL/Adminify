// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Componentes.
import IndexPage from "../../pages/index/IndexPage.jsx";

// Definición del contenedor.
const IndexContainer = (props) => {
  // 1. Manejo de estados.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <IndexPage />;
};

// PropTypes.
IndexContainer.propTypes = {};

// Exportación.
export default IndexContainer;
