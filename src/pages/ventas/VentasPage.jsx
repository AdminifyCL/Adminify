// Dependencias.
import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import StatsContainer from "./components/Stats/StatsContainer.jsx";
import CardsContainer from "./components/Cards/CardsContainer.jsx";

// Estilos.
import "./VentasPage.scss";

// Definición del componente: <VentasPage />
const VentasPage = (props) => {
  // 1. Manejo del estado.
  const { ventas, cargando, removeVenta } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleRemove = async (venta) => {
    await removeVenta(venta);
  };

  // 4. Render.
  return (
    <section className="ventasPage_container">
      {/* Vista de la caja. */}
      <section className="ventasPage_content">
        {/* Estadisticas parciales. */}
        <StatsContainer ventas={ventas} />

        {/* Ventas. */}
        <CardsContainer ventas={ventas} removeVenta={handleRemove} cargando={cargando} />
      </section>
    </section>
  );
};

// PropTypes.
VentasPage.propTypes = {};

// Exportación.
export default VentasPage;
