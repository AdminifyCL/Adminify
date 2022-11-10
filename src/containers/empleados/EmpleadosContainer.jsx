// Dependencias.
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar/Navbar.jsx";
import EmpleadosPage from "../../pages/empleados/EmpleadosPage";

// Definición del contenedor: <EmpleadosContainer />.
const EmpleadosContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const listaEmpleados = useSelector((state) => state.empleado.empleados);

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <Navbar>
      <EmpleadosPage empleados={listaEmpleados} />
    </Navbar>
  );
};

// PropTypes.
EmpleadosContainer.propTypes = {};

// Exportación.
export default EmpleadosContainer;
