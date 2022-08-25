// Dependencias.
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/user/signOutUser.js";
import { Navigate, Link } from "react-router-dom";
import { FaSignOutAlt, FaConciergeBell } from "react-icons/fa";

// Estilos.
import { tabStyle, exitButton } from "./TabStyle.jsx";
import "./TabNavigation.scss";

// Definición del componente.
class TabNavigation extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {
      isLogged: true,

      tabList: [
        { id: "caja", name: "Caja", active: true, url: "/caja" },
        { id: "inventario", name: "Inventario", active: false, url: "/inventario" },
        { id: "empleados", name: "Empleados", active: false, url: "/empleados" },
        { id: "ventas", name: "Ventas", active: false, url: "/ventas" },
        { id: "estadisticas", name: "Estadísticas", active: false, url: "/estadisticas" },
        { id: "cuenta", name: "Mi cuenta", active: false, url: "/cuenta" },
      ],
    };
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {
    const hashUrl = window.location.hash; // "#/inventario"
    const url = hashUrl.split("/")[1];
    this.handleTabActive(url);
  }
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  handleTabActive = (url) => {
    const { tabList } = this.state;

    tabList.forEach((tab) => {
      if (tab.id === url) {
        tab.active = true;
      } else {
        tab.active = false;
      }
    }),
      this.setState({ tabList });
  };

  signOut = async () => {
    const { cerrarSesion } = this.props;
    await cerrarSesion();

    this.setState({ exit: true });
  };

  // -- Métodos [MAPPING].
  mappingTabs = () => {
    const { tabList } = this.state;

    return tabList.map((tabInfo, index) => {
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

  // Renderizado.
  render() {
    return (
      <section className="TabNavigation">
        {/* Icono para la navegación. */}
        <div className="TabNavigation-icon">
          <FaConciergeBell />
        </div>

        {/* Pestañas para la navegación. */}
        <div className="TabNavigation-tabs">{this.mappingTabs()}</div>

        {/* Botón de salida para la navegación. */}
        <div className="TabNavigation-btn">
          <Link to="/">
            <Button variant="contained" style={exitButton.container} onClick={() => this.signOut()}>
              <p style={exitButton.text}>
                <FaSignOutAlt />
                Salir
              </p>
            </Button>
          </Link>
        </div>
      </section>
    );
  }
}

// PropTypes.
TabNavigation.propTypes = {
  cerrarSesion: PropTypes.func.isRequired,
};

// Redux.
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  cerrarSesion: logoutUser,
};
// Exportación
export default connect(mapStateToProps, mapDispatchToProps)(TabNavigation);
