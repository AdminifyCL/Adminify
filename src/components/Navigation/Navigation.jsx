// Dependencias.
import React, { useState, useEffect } from "react";
import { IconButton, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FaDraftingCompass, FaBars } from "react-icons/fa";
import PropTypes from "prop-types";

// API Handler

// Estilos.
import Styles from "./styles/Style.jsx";
import "./styles/Navigation.scss";

// Definición del componente.
const TabNavigation = (props) => {
  // 1. Menejo del estado.
  const {} = props;
  const userData = useSelector((state) => state.user.userData);

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <section className="TabNavigation-container">
      {/* Header */}
      <div className="TabNavigation-containerHeader">
        {/* Icono */}
        <div className="TabNavigation-containerIcon">
          <FaDraftingCompass size={30} style={Styles.headerIcon} />
        </div>

        {/* Version */}
        <div className="TabNavigation-containerTitle">
          <h1>Adminify</h1>
          <p>vAlpha</p>
        </div>
      </div>

      {/* Actions */}
      <div className="TabNavigation-containerActions">
        {/* Tabs */}
        <div className="TabNavigation-containerTabs">
          {/* Mapeo de las tabs */}
          <div className="TabNavigation-containerTab">
            <h1>CAJA</h1>
          </div>

          <div className="TabNavigation-containerTab">
            <h1>INVENTARIO</h1>
          </div>

          <div className="TabNavigation-containerTab">
            <h1>EMPLEADOS</h1>
          </div>

          <div className="TabNavigation-containerTab">
            <h1>VENTAS</h1>
          </div>

          <div className="TabNavigation-containerTab">
            <h1>CLIENTES</h1>
          </div>

          <div className="TabNavigation-containerTab">
            <h1>LUGARES</h1>
          </div>

          <div className="TabNavigation-containerTab">
            <h1>ESTADISTICAS</h1>
          </div>
        </div>

        {/* Info & EXIT */}
        <div className="TabNavigation-containerInfoExit">
          {/* Usuario */}
          <div className="TabNavigation-containerUser">
            <h1>Bienvenido</h1>
            <h2>{userData.nombre}!</h2>
          </div>

          {/* Exit */}
          <div className="TabNavigation-containerExit">
            <Button
              variant="contained"
              color="primary"
              style={{ height: "1.5rem", width: "8rem", fontSize: "0.8rem" }}
            >
              Salir
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// PropTypes.
// Exportación.
export default TabNavigation;
