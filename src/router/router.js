// Dependencias.
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";

// Componentes.

// Contenedores.

// Definición del router.
const Router = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <Routes>
      {/* Rutas publicas. */}
      <Route />

      {/* Rutas privadas. */}
      <Route />
    </Routes>
  );
};

// PropTypes.
Router.propTypes = {};

// Exportación.
export default Router;
