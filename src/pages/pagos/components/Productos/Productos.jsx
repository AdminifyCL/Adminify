// Dependencias.
import React, { useState, useEffect } from "react";
import Producto from "./Producto.jsx";
import PropTypes from "prop-types";

// Estilos.
import Styles from "./Productos.styles.jsx";
import "./Productos.scss";

// Definición del componente: <Productos />
const Productos = (props) => {
  // 1. Manejo del estado.
  const { productos } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <div className="Productos_container">
      {/* Banner */}
      <div className="Productos_bannerContainer">
        <h1>Lista de productos</h1>
      </div>

      {/* Productos */}
      <div className="Productos_productosContainer">
        {productos.map((data) => {
          return <Producto data={data} />;
        })}
      </div>
    </div>
  );
};

// PropTypes.
Productos.propTypes = {};

// Exportación.
export default Productos;
