// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NotFoundPage from "../../pages/notFound/NotFoundPage";

// Definición del contenedor: <NotFoundContainer />.
const NotFoundContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <NotFoundPage />;
};

// PropTypes.
NotFoundContainer.propTypes = {};

// Exportación.
export default NotFoundContainer;
