// Dependencias.
import React, { useState, useEffect } from "react";
import ConfirmacionPage from "../../pages/confirmacion/ConfirmacionPage.jsx";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar.jsx";
import PropTypes from "prop-types";

// Definición del contenedor: <ConfirmacionContainer />.
const ConfirmacionContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const carrito = useSelector((state) => state.producto.carrito);
  const metodo = useSelector((state) => state.venta.metodo);

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <Navbar>
      <ConfirmacionPage carroProducts={carrito} metodo={metodo} />
    </Navbar>
  );
};

// PropTypes.
ConfirmacionContainer.propTypes = {};

// Exportación.
export default ConfirmacionContainer;
