// Dependencias.
import React, { useState, useEffect, useMemo } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import PropTypes from "prop-types";
import StatsContainer from "./components/Stats/StatsContainer.jsx";
import CardsContainer from "./components/Cards/CardsContainer.jsx";

// Estilos.
import "./VentasPage.scss";

// Definición del componente: <VentasPage />
const VentasPage = (props) => {
  // 1. Manejo del estado.
  const { storeVentas } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <section className="ventasPage_container">
      {/* Navegación de la aplicación. */}
      <section className="ventasPage_navigation">
        <Navigation />
      </section>

      {/* Vista de la caja. */}
      <section className="ventasPage_content">
        {/* Estadisticas parciales. */}
        <StatsContainer storeVentas={storeVentas} />

        {/* Ventas. */}
        <CardsContainer storeVentas={storeVentas} />
      </section>
    </section>
  );
};

// PropTypes.
VentasPage.propTypes = {};

// Exportación.
export default VentasPage;
