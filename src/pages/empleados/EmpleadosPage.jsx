// Dependencias.
import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import PropTypes from "prop-types";

// Estilos.
import "./EmpleadosPage.scss";

// Definición del componente: <EmpleadosPage />
const EmpleadosPage = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <section className="empleadosPage_container">
      {/* Navegación de la aplicación. */}
      <section className="empleadosPage_navigation">
        <Navigation />
      </section>

      {/* Vista del empleado. */}
      <section className="empleadosPage_content">
        <h1>Empleados</h1>
      </section>
    </section>
  );
};

// PropTypes.
EmpleadosPage.propTypes = {};

// Exportación.
export default EmpleadosPage;
