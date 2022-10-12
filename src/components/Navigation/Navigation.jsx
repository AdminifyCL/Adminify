// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaConciergeBell } from "react-icons/fa";
import tabsInfo from "../../schemas/Tabs.js";

// API Handler
// import userSignOut from "../../api/usuarios/userLogout.js";

// Estilos.
import { tabStyle, exitButton } from "./TabStyle.jsx";
import "./Navigation.scss";

// Definición del componente.
const TabNavigation = (props) => {
  // 1. Menejo del estado.
  const [tabActive, setTabActive] = useState("");

  // 2. Ciclo de vida.
  useEffect(() => {
    const hashURL = window.location.hash;
    const url = hashURL.split("/")[1];
    handleActiveTab(url);
  }, []);

  // 3. Metodos.
  const handleActiveTab = (newUrl) => {
    tabsInfo.forEach((tab) => {
      if (tab.id === newUrl) {
        tab.active = true;
        setTabActive(tab.id);
      } else {
        tab.active = false;
      }
    });
  };

  const handleSignOut = async () => {
    // await userSignOut()
    //   .then(() => {
    //     console.log("[] Sesión del usuario cerrada");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const mappingTabs = () => {
    return tabsInfo.map((tabInfo, index) => {
      return (
        <Link to={tabInfo.url} key={index}>
          <Button
            disabled={tabInfo.active}
            className="TabNavigation-tab"
            variant="contained"
            style={tabInfo.active ? tabStyle.active.container : tabStyle.inactive.container}
          >
            <p style={tabInfo.active ? tabStyle.active.text : tabStyle.inactive.text}>
              {tabInfo.name}
            </p>
          </Button>
        </Link>
      );
    });
  };

  // 4. Render.
  return (
    <section className="TabNavigation">
      {/* Icono para la navegación. */}
      <div className="TabNavigation-icon">
        <FaConciergeBell />
      </div>

      {/* Pestañas para la navegación. */}
      <div className="TabNavigation-tabs">{mappingTabs()}</div>

      {/* Botón de salida para la navegación. */}
      <div className="TabNavigation-btn">
        <Link to="/">
          <Button variant="contained" style={exitButton.container} onClick={() => handleSignOut()}>
            <p style={exitButton.text}>
              <FaSignOutAlt />
              Salir
            </p>
          </Button>
        </Link>
      </div>
    </section>
  );
};

// PropTypes.
// Exportación.
export default TabNavigation;
