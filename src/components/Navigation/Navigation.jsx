// Dependencias.
import React, { useState, useEffect } from "react";
import { IconButton, AppBar } from "@mui/material";
import { FaDraftingCompass, FaBars } from "react-icons/fa";
import PropTypes from "prop-types";

// API Handler

// Estilos.
import Styles from "./styles/Style.jsx";
import "./styles/Navigation.scss";

// Definición del componente.
const TabNavigation = (props) => {
  // 1. Menejo del estado.

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
            <h1>TAB 1</h1>
          </div>

          <div className="TabNavigation-containerTab">
            <h1>TAB 2</h1>
          </div>
        </div>

        {/* Usuario */}
        <div className="TabNavigation-containerUser">
          <h1>Usuario</h1>
        </div>

        {/* Exit */}
        <div className="TabNavigation-containerExit">
          <h1>Exit</h1>
        </div>
      </div>
    </section>
  );
};

// PropTypes.
// Exportación.
export default TabNavigation;
