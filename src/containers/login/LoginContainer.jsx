// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

// Importación de componentes.
import LoginPage from "../../pages/login/LoginPage.jsx";

// Definición del contenedor: <LoginContainer />
const LoginContainer = (props) => {
  // Manejo del estado.
  const {} = props;
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // Ciclo de vida del componente.
  useEffect(() => {}, []);

  // Metodos.

  // Renderizado.
  return <LoginPage loading={loading} />;
};

// PropTypes.
LoginContainer.propTypes = {};

// Exportación del contenedor.
export default LoginContainer;
