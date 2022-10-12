// Dependencias.
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import CargaPage from "../../pages/carga/CargaPage.jsx";
import PropTypes from "prop-types";

// API Handler.
// Hooks.
import { useLocalStorage } from "../../hooks/useLocalStorage.jsx";

// Actions.
import { getUserData } from "../../redux/slices/usuariosSlice.js";
// import {} from "../../redux/slices/productosSlice.js";

// Definición del contenedor: <CargaContainer />.
const CargaContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const [] = useState();

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <>Carga Container</>;
};

// PropTypes.
CargaContainer.propTypes = {};

// Exportación.
export default CargaContainer;
