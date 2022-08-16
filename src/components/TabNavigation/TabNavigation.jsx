// Dependencias.
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import { tabStyle, exitButton } from "./TabStyle.jsx";
import "./TabNavigation.scss";

// Definición del componente.
class TabNavigation extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {
      tabList: [
        { name: "Caja", active: true, url: "/caja" },
        { name: "Inventario", active: false, url: "/inventario" },
        { name: "Empleados", active: false, url: "/empleados" },
        { name: "Ventas", active: false, url: "/ventas" },
        { name: "Estadísticas", active: false, url: "/estadisticas" },
        { name: "Mi cuenta", active: false, url: "" },
      ],
    };
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  redirectTo = (url) => {
    console.log("[] Redirigiendo a:", url);
  };

  // -- Métodos [HANDLER].
  // -- Métodos [MAPPING].
  mappingTabs = () => {
    const { tabList } = this.state;

    return tabList.map((tabInfo, index) => {
      return (
        <Button
          disabled={tabInfo.active}
          key={index}
          className="TabNavigation-tab"
          variant="contained"
          style={tabInfo.active ? tabStyle.active.container : tabStyle.inactive.container}
          onClick={() => {
            this.redirectTo(tabInfo.url);
          }}
        >
          <p style={tabInfo.active ? tabStyle.active.text : tabStyle.inactive.text}>
            {tabInfo.name}
          </p>
        </Button>
      );
    });
  };

  // Renderizado.
  render() {
    return (
      <section className="TabNavigation">
        {/* Icono para la navegación. */}
        <div className="TabNavigation-icon">icono</div>

        {/* Pestañas para la navegación. */}
        <div className="TabNavigation-tabs">{this.mappingTabs()}</div>

        {/* Botón de salida para la navegación. */}
        <div className="TabNavigation-btn">
          <Button variant="contained" style={exitButton.container}>
            <p style={exitButton.text}>Salir</p>
          </Button>
        </div>
      </section>
    );
  }
}

// PropTypes.
TabNavigation.propTypes = {};

// Redux.

// Exportación
export default TabNavigation;
