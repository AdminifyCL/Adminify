// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Estilos.
import "./NotFoundPage.scss";

// Definición del componente: <NotFoundPage />
const NotFoundPage = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <section className="">
      <div className="">
        <h1>404 - Page</h1>
      </div>
    </section>
  );
};

// PropTypes.
NotFoundPage.propTypes = {};

// Exportación.
export default NotFoundPage;
