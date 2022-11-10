// Dependencias.
import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import PropTypes from "prop-types";

// Estilos.
import "./EstadisticasPage.scss";

// Definición del componente: <EstadisticasPage />
const EstadisticasPage = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <section className="estadisticasPage_container">
      {/* Vista de la caja. */}
      <section className="estadisticasPage_content">
        <h1>Estadisticas</h1>
      </section>
    </section>
  );
};

// PropTypes.
EstadisticasPage.propTypes = {};

// Exportación.
export default EstadisticasPage;
