// Dependencias.
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import CuentaPage from "../../pages/cuenta/CuentaPage.jsx";

// Definición del contenedor: <CuentaContainer />.
const CuentaContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const userData = useSelector((state) => state.user.userData);

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <CuentaPage userInfo={userData} />;
};

// PropTypes.
CuentaContainer.propTypes = {};

// Exportación.
export default CuentaContainer;
