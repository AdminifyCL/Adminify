// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import PagosPage from "../../pages/pagos/PagosPage.jsx";

// Definición del contenedor: <PagoContainer />.
const PagoContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const carroProducts = useSelector((state) => state.producto.carrito);

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <PagosPage carroProducts={carroProducts} />;
};

// PropTypes.
PagoContainer.propTypes = {};

// Exportación.
export default PagoContainer;
