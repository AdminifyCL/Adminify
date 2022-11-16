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
  const { productos } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const mappingTotal = () => {
    let total = 0;

    productos.map((product) => {
      total = total + product.precio * product.cantidad;
    });

    return Intl.NumberFormat("de-DE").format(total);
  };

  // 4. Render.
  return (
    <section className="Total_contenedor">
      <p className="Total_totalText">Total:</p>
      <p className="Total_totalValor">${mappingTotal()}</p>
    </section>
  );
};

// PropTypes.
Total.propTypes = {};

// Exportación.
export default Total;
