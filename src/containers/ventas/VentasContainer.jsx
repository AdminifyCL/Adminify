// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import VentasPage from "../../pages/ventas/VentasPage.jsx";

// Definición del contenedor: <VentasContainer />.
const VentasContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const storeVentas = useSelector((state) => state.venta.ventas);
  const dispatch = useDispatch();

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <VentasPage storeVentas={storeVentas} />;
};

// PropTypes.
VentasContainer.propTypes = {};

// Exportación.
export default VentasContainer;
