// Dependencias.
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { FaUserPlus, FaUserFriends } from "react-icons/fa";
import PropTypes from "prop-types";

// Estilos.
import "./Header.scss";
import { buttonStyle, iconStats } from "./style.jsx";

// Definición del componente: <Header />
const Header = (props) => {
  // 1. Manejo del estado.
  const { numEmpleados } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <>
      {/* Titulo de la vista */}
      <div className="empleadosPage_headerTitle">
        <h1>Administracion de empleados</h1>
      </div>

      {/* Información */}
      <div className="empleadosPage_headerInfo">
        {/* Estadistica */}
        <div className="empleadosPage_statsContainer">
          <FaUserFriends size={20} style={iconStats} />
          <h4>Cantidad de empleados: {numEmpleados}</h4>
        </div>

        {/* Botón */}
        <div className="empleadosPage_headerButton">
          <Button variant="contained" onClick={() => {}} style={buttonStyle}>
            <FaUserPlus size={20} /> agregar empleado
          </Button>
        </div>
      </div>
    </>
  );
};

// PropTypes
Header.propTypes = {};

// Exportación.
export default Header;
