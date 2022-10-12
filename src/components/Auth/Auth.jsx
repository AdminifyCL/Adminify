// Dependencias.
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Display from "./Display.jsx";

// Definición del componente.
const Auth = (props) => {
  // 1. Manejo del estado.
  const { children } = props;
  const userAuth = useSelector((state) => state.user.userAuth);

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  if (!userAuth.isAuthenticated) {
    return <Display />;
  } else {
    return <>{children}</>;
  }
};

// PropTypes.
Auth.propTypes = {};

// Exportación.
export default Auth;
