// Dependencias.
import React, { useState, useEffect, useId } from "react";
import { Button } from "@mui/material";
import { FaTrash, FaEdit, FaBreadSlice, FaHotdog } from "react-icons/fa";
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
  function formatNumber(number) {
    return new Intl.NumberFormat("de-DE").format(number);
  }

  const handlerIcon = (iconId) => {
    switch (iconId) {
      // Icono de pan.
      case "icono001":
        return <FaBreadSlice size={30} color="#1b5943" />;
        break;

      // Icono de hotdog.
      case "icono002":
        return <FaHotdog size={30} color="#1b5943" />;
        break;

      default:
        return <FaBreadSlice size={30} color="#1b5943" />;
        break;
    }
  };

  // 4. Render.
  return (
    <div className="cajaPage_Productos_producto">
      {/* Icono */}
      <p>
        {handlerIcon(info.iconoId)}
      </p>

      {/* Nombre */}
      <p className="cajaPage_producto_texto" style={{ width: "40%" }}>
        {info.nombre}
      </p>

      {/* Valor */}
      <p className="cajaPage_producto_texto">${formatNumber(info.valor)}</p>

      {/* Boton de acción */}
      <Button
      disabled={props.block}
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
            cambiarCarrito(info.id, info.nombre, info.valor, 1);
          } else {
            cambiarCantidad(info.id, info.cantidad, info.valor, info.nombre, true);
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
