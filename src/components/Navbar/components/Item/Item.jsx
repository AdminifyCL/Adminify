// Dependencias.
import React, { useState, useEffect } from "react";
import { FaCashRegister, FaBox, FaMale, FaReceipt, FaSignal, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { publicURL, privateURL } from "../../../../schemas/Navigation.js";
import PropTypes from "prop-types";

// Estilos.
import "./Item.scss";

// Definición del componente: <Item />
const Item = (props) => {
  // 1. Menejo del estado.
  const { iconId, name, disabled } = props;
  const navigate = useNavigate();

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const mappingIcons = () => {
    switch (iconId) {
      case "caja":
        return <FaCashRegister className="Item_iconStyle" />;

      case "inventario":
        return <FaBox className="Item_iconStyle" />;

      case "empleados":
        return <FaMale className="Item_iconStyle" />;

      case "ventas":
        return <FaReceipt className="Item_iconStyle" />;

      case "estadisticas":
        return <FaSignal className="Item_iconStyle" />;

      case "cuenta":
        return <FaUserCircle className="Item_iconStyle" />;

      default:
        return null;
    }
  };

  const redirectTo = () => {
    switch (name) {
      case "Caja":
        return navigate(privateURL.caja);

      case "Inventario":
        return navigate(privateURL.inventario);

      case "Empleados":
        return navigate(privateURL.empleados);

      case "Ventas":
        return navigate(privateURL.ventas);

      case "Estadísticas":
        return navigate(privateURL.estadisticas);

      case "Mi cuenta":
        return navigate(privateURL.cuenta);

      default:
        navigate(privateURL.caja);
    }
  };

  // 4. Render.
  if (disabled) {
    return null;
  }

  return (
    <button className="Item_container" onClick={() => redirectTo()}>
      {/* Icon */}
      <div className="Item_iconContainer">{mappingIcons()}</div>

      {/* Text */}
      <p className="Item_textContainer">{name}</p>
    </button>
  );
};

// Proptypes
Item.propTypes = {};

// Exportación.
export default Item;
