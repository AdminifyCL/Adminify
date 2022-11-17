// Dependencias.
import React, { useState, useEffect } from "react";
import { FaUserAlt, FaUserCog, FaUserTimes } from "react-icons/fa";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import "./Empleado.scss";

// Definición del componente: <Empleado />
const Empleado = (props) => {
  // 1. Manejo del estado.
  const { info } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <div className="EmpleadoCard_container">
      <div className="EmpleadoCard_content">
        {/* Icono */}
        <div className="EmpleadoCard_iconContainer">
          <FaUserAlt size={50} color="white" />
        </div>

        {/* Datos */}
        <div className="EmpleadoCard_datosContainer">
          <p className="EmpleadoCard_datosName">{info.displayName}</p>
          <p className="EmpleadoCard_datosEmail">{info.email}</p>
          <p className="EmpleadoCard_datosCargo">{info.cargo}</p>
          <p className="EmpleadoCard_datosUid">{info.uid}</p>
        </div>

        {/* Botones */}
        {/* <div className="EmpleadoCard_botonesContainer">
          <IconButton aria-label="config" size="small">
            <FaUserCog size={25} />
          </IconButton>

          <IconButton aria-label="delete" size="small">
            <FaUserTimes size={25} />
          </IconButton>
        </div> */}
      </div>
    </div>
  );
};

// PropTypes
Empleado.propTypes = {};

// Exportación.
export default Empleado;
