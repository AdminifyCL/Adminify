// Dependencias.
import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import PropTypes from "prop-types";

// Estilos.
import "./VentasPage.scss";

// Definición del componente: <VentasPage />
const VentasPage = (props) => {
  // 1. Manejo del estado.
  const {} = props;

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
        <h1>Ventas</h1>
      </section>
    </section>
  );
};

// PropTypes.
VentasPage.propTypes = {};

// Exportación.
export default VentasPage;
