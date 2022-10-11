// Dependencias.
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { publicURL, privateURL } from "../schemas/Navigation.js";
import PropTypes from "prop-types";

// Componentes.

// Contenedores.
import IndexContainer from "../containers/index/IndexContainer.jsx";

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
      <Route path={publicURL.index} element={<IndexContainer />} index />

      {/* Rutas privadas. */}
      {/* <Route /> */}
    </Routes>
  );
};

// PropTypes.
Router.propTypes = {};

// Exportación.
export default Router;
