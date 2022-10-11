// Dependencias.
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

const Auth = (props) => {
  // 1. Manejo del estado.
  const { children } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <>
      <div>AUTH</div>
      {children}
    </>
  );
};

// PropTypes.
Auth.propTypes = {};

// Exportación.
export default Auth;
