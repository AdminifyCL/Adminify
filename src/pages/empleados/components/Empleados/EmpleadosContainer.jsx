// Dependencias.
import React, { useState, useEffect } from "react";
import Empleado from "./Empleado.jsx";
import PropTypes from "prop-types";

// Estilos.
import "./EmpleadosContainer.scss";

// Definición del componente: <EmpleadosContainer />
const EmpleadosContainer = (props) => {
  // 1. Manejo del estado.
  const { listaEmpleados } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const mappingEmpleados = () => {
    return listaEmpleados.map((empleado) => {
      console.log({ empleado });
      return <Empleado info={empleado} />;
    });
  };

  // 4. Render.
  return <div className="EmpleadosContainer-container">{mappingEmpleados()}</div>;
};

// PropTypes
EmpleadosContainer.propTypes = {};

// Exportación.
export default EmpleadosContainer;
