// Dependencias.
import React, { useState, useEffect, useId } from "react";
import { Button } from "@mui/material";
import { FaHamburger } from "react-icons/fa";
import PropTypes from "prop-types";

// Estilos.
import "./ProductoCarro.scss";

// Definición del componente: <ProductoCarro />
const ProductoCarro = (props) => {
  // 1. Manejo del estado.
  const { info, carrito, cambiarTotal, cambiarCarrito, cambiarCantidad } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <div className="cajaPage_Productos_producto">
      {/* Icono */}
      <p>
        <FaHamburger />
      </p>

      {/* Nombre */}
      <p className="cajaPage_producto_texto" style={{ width: "40%" }}>
        {info.nombre}
      </p>

      {/* Categoria */}
      <p>{info.categoria}</p>

      {/* Valor */}
      <p className="cajaPage_producto_texto">${info.valor}</p>

      {/* Boton de acción */}
      <Button
        variant="contained"
        onClick={() => {
          let vista_producto = carrito.map((pcar) => {
            if (pcar.id == info.id) {
              return true;
            } else {
              return false;
            }
          });
          if (!vista_producto.includes(true)) {
            cambiarTotal(info.valor);
            cambiarCarrito(carrito.length, info.nombre, info.valor, 1);
          } else {
            cambiarCantidad(info.cantidad, info.valor, info.nombre, true);
            cambiarTotal(info.valor);
          }
        }}
      >
        Añadir
      </Button>
    </div>
  );
};

// PropTypes
ProductoCarro.propTypes = {};

// Exportación.
export default ProductoCarro;
