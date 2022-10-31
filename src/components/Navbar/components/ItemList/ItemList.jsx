// Dependencias.
import React, { useState, useEffect } from "react";
import Item from "../Item/Item.jsx";
import FooterList from "../FooterList/FooterList.jsx";
import PropTypes from "prop-types";

// Estilos.
import "./ItemList.scss";

// Definición del componente: <ItemList />
const ItemList = (props) => {
  // 1. Menejo del estado.
  const { visible } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const mappingItems = () => {
    return <Item iconId="caja" name="CAJA" />;
  };

  // 4. Render.
  if (visible) {
    return (
      <div className="ItemList_container">
        {/* Item List Item */}
        {mappingItems()}

        {/* Item List Footers */}
        <FooterList />
      </div>
    );
  }

  return null;
};

// Proptypes
ItemList.propTypes = {};

// Exportación.
export default ItemList;
