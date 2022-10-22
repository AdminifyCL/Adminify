// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Componentes.
import Router from "../../router/router.jsx";

// Estilos.
import "./App.scss";

// Definición del componente: <App />.
const App = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <Router />;
};

// PropTypes.
App.propTypes = {};

// Exportación.
export default App;
