// Dependencias.
import React, { useState, useEffect } from "react";
import { FaCashRegister, FaCalculator, FaBullhorn } from "react-icons/fa";

// Estilos
import "./Stats.scss";

// Definición del componente: <Stats />
const Stats = (props) => {
  // 1. Manejo del estado.
  const { titulo, valor, iconId } = props;

  // 2. Ciclo de vida.
  // 3. Metodos.
  const handlerIcon = () => {
    if (iconId === "CashRegister") {
      return <FaCashRegister />;
    }
    if (iconId === "Calculator") {
      return <FaCalculator />;
    }
  };

  // 4. Render.
  return (
    <div className="Stats-container">
      <FaBullhorn size={20} color={"#226f54"} />
      <h1>{titulo}:</h1>
      <p>{valor}</p>
    </div>
  );
};

// PropTypes.
Stats.propTypes = {};

// Exportación.
export default Stats;
