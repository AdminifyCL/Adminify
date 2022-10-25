// Dependencias.
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import EmpleadosPage from "../../pages/empleados/EmpleadosPage";
import { useDispatch } from "react-redux";

// Definición del contenedor: <EmpleadosContainer />.
const EmpleadosContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const listaEmpleados = useSelector((state) => state.empleado.empleados);

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return <EmpleadosPage empleados={listaEmpleados} />;
};

// PropTypes.
EmpleadosContainer.propTypes = {};

// Exportación.
export default EmpleadosContainer;
