// Dependencias.
import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import PropTypes from "prop-types";
import { publicURL, privateURL } from "../../schemas/Navigation.js";
import {BsPersonFill} from "react-icons/bs";

// Estilos.
import "./EmpleadosPage.scss";
import { Button } from "@mui/material";

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
    </section>
  );
};

// PropTypes.
EmpleadosPage.propTypes = {};

// Exportación.
export default EmpleadosPage;
