// Dependencias.
import React, { useState, useEffect, useId } from "react";
import Card from "./Card.jsx";
import PropTypes from "prop-types";

// Estilos
import "./CardsContainer.scss";

// Definición del componente: <CardsContainer />
const CardsContainer = (props) => {
  // 1. Manejo del estado.
  const { ventas, removeVenta, cargando } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const mappingVentasCards = () => {
    return ventas.map((venta) => {
      let id = useId();
      return <Card ventaInfo={venta} key={id} removeVenta={removeVenta} cargando={cargando} />;
    });
  };

  // 4. Render.
  return <div className="CardsContainer-container">{mappingVentasCards()}</div>;
};

// PropTypes.
CardsContainer.propTypes = {};

// Exportación.
export default CardsContainer;
