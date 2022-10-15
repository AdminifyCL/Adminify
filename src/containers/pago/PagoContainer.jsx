// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import PagosPage from "../../pages/pagos/PagosPage.jsx";

// Actions
import { setMetodo } from "../../redux/slices/ventasSlice.js";

// Definición del contenedor: <PagoContainer />.
const PagoContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const carroProducts = useSelector((state) => state.producto.carrito);
  const dispatch = useDispatch();

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleMetodoPago = (metodo) => {
    dispatch(setMetodo(metodo));
  };

  // 4. Render.
  return <PagosPage carroProducts={carroProducts} setMetodo={handleMetodoPago} />;
};

// PropTypes.
PagoContainer.propTypes = {};

// Exportación.
export default PagoContainer;
