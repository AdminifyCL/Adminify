// Dependencias.
import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import Styles from "./Total.styles.jsx";
import "./Total.scss";

// Definición del componente: <Total />
const Total = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <section className="Total_contenedor">
      <p className="Total_totalText">Total:</p>
      <p className="Total_totalValor">${}</p>
    </section>
  );
};

// PropTypes.
Total.propTypes = {};

// Exportación.
export default Total;
