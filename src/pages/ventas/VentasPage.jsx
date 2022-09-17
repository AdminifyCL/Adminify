// Dependencias.
import React, { Component } from "react";
import PropTypes from "prop-types";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";

// Importación de estilos.
import "./VentasPage.scss";

// Definición de la pagina: Index.
const VentasPage = ({}) => {
  // -- Manejo del estado.
  // -- Ciclo de vida.
  // -- Metodos.
  // -- Renderizado.
  return (
    <section className="ventasPage_container">
      {/* Navegación de la aplicación. */}
      <section className="ventasPage_navigation">
        <TabNavigation />
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

// Exportación de la pagina: Index.
export default VentasPage;
