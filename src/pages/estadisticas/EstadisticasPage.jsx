// Dependencias.
import React from "react";
import PropTypes from "prop-types";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";

// Importación de estilos.
import "./EstadisticasPage.scss";

// Definición de la pagina: <EstadisticasPage />
const EstadisticasPage = ({}) => {
  // -- Manejo del estado.
  // -- Ciclo de vida.
  // -- Metodos.
  // -- Renderizado.
  return (
    <section className="estadisticasPage_container">
      {/* Navegación de la aplicación. */}
      <section className="estadisticasPage_navigation">
        <TabNavigation />
      </section>

      {/* Vista de la caja. */}
      <section className="estadisticasPage_content">
        <h1>Estadisticas</h1>
      </section>
    </section>
  );
};

// PropTypes.
EstadisticasPage.propTypes = {};

// Exportación de la pagina: Index.
export default EstadisticasPage;
