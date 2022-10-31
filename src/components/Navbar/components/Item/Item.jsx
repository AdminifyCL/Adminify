// Dependencias.
import React, { useState, useEffect } from "react";
import { FaCashRegister } from "react-icons/fa";
import PropTypes from "prop-types";

// Estilos.
import "./Item.scss";

// Definición del componente: <Item />
const Item = (props) => {
  // 1. Menejo del estado.
  const { iconId, name } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const mappingIcons = () => {
    switch (iconId) {
      case "caja":
        return <FaCashRegister />;
      default:
        return null;
    }
  };

  // 4. Render.
  return (
    <div className="Item_container">
      {/* Item Icon */}
      <div className="Item_iconContainer">{mappingIcons()}</div>

      {/* Item Text */}
      <div className="Item_textContainer">
        <p>{name}</p>
      </div>
    </div>
  );
};

// Proptypes
Item.propTypes = {};

// Exportación.
export default Item;
