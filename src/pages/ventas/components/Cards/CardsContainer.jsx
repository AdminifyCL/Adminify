// Dependencias.
import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import PropTypes from "prop-types";

// Estilos
import "./CardsContainer.scss";

// Definición del componente: <CardsContainer />
const CardsContainer = (props) => {
  // 1. Manejo del estado.
  const { storeVentas } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const mappingVentasCards = () => {
    return storeVentas.map((venta) => {
      return <Card ventaInfo={venta} />;
    });
  };

  // 4. Render.
  return <div className="CardsContainer-container">{mappingVentasCards()}</div>;
};

// PropTypes.
CardsContainer.propTypes = {};

// Exportación.
export default CardsContainer;
