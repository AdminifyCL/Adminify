// Dependencias.
import React, { useState, useEffect, useId } from "react";
import PropTypes from "prop-types";

// Estilos.
import Styles from "./Producto.styles.jsx";
import "./Producto.scss";

// Definición del componente: <Producto />
const Producto = (props) => {
  // 1. Manejo del estado.
  const { data } = props;
  const id = useId();

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  console.log("Producto: ", data);
  return (
    <div className="Producto_container" key={id}>
      <div className="Producto_cantidad">
        <p>{data.cantidad}</p>
      </div>
      <div className="Producto_nombre">
        <p>{data.nombre}</p>
      </div>
      <div className="Producto_valor">
        <p>${data.precio}</p>
      </div>
    </div>
  );
};

// PropTypes.
Producto.propTypes = {};

// Exportación.
export default Producto;
