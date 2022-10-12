// Dependencias.
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import "./Display.scss";

// Definición del componente.
const Display = (props) => {
  // 1. Manejo del estado.
  const { children } = props;
  const navigate = useNavigate();

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleRedirect = (path) => {
    navigate(path);
  };

  // 4. Render.
  return (
    <section className="displayAuthModal">
      <section className="contentAuthModal">
        {/* Titulos */}
        <div className="authTitle">
          <h1>Necesitas iniciar sesión</h1>
          <h2>Es necesario tener una cuenta para acceder.</h2>
        </div>

        {/* Botones. */}
        <div className="authButtons">
          <Button variant="outlined" onClick={() => handleRedirect("/registro")}>
            Registrarse
          </Button>

          <Button variant="contained" onClick={() => handleRedirect("/login")}>
            Iniciar sesión
          </Button>
        </div>
      </section>
    </section>
  );
};

// PropTypes.
Display.propTypes = {};

// Exportación.
export default Display;
