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
  const { info, carro, cambiaTotal, cambiaCarro, cambiaCantidad } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  console.log({ info });
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
          let vista_producto = carro.map((pcar) => {
            if (pcar.id == info.id) {
              return true;
            } else {
              return false;
            }
          });
          if (!vista_producto.includes(true)) {
            cambiaTotal(info.valor);
            cambiaCarro(carro.length, info.nombre, info.valor, 1);
          } else {
            cambiaCantidad(info.cantidad, info.valor, info.nombre, true);
            cambiaTotal(info.valor);
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
