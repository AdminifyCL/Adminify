// Dependencias.
import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import PropTypes from "prop-types";

// Estilos.
import "./DesarrolladorPage.scss";

// Definición del componente: <DesarrolladorPage />
const DesarrolladorPage = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <section className="DesarrolladorPage_container">
      {/* Contenido de la página. */}
      <section className="DesarrolladorPage_content">
        <h1>Desarrollador Page</h1>
      </section>
    </section>
  );
};

// PropTypes.
DesarrolladorPage.propTypes = {};

// Exportación.
export default DesarrolladorPage;
