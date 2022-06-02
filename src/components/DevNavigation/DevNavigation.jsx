// Dependencias.
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { setActualPage } from "~actions/actionPages.js";

// Importación de estilos.
import "./DevNavigation.scss";

// Importación de componentes.

// Definición del componente: <Header />.
const DevNavigation = (props) => {
  // Estado y props.
  const [pageActive, setPageActive] = useState("index");
  const { appInfo, setActualPage, siteInfo } = props;
  const { actualPage } = siteInfo;

  // Efectos.
  useEffect(() => {
    let pageName = document.location.hash.replace("#", "").replace("/", "");

    // Definición de la ruta activa.
    if (pageName === "") {
      // Cambiar el estado y la store.
      setPageActive("index");
      setActualPage({ pageName: "index" });
    } else {
      // Cambiar el estado y la store.
      setPageActive(pageName);
      setActualPage({ pageName });
    }
  }, [pageActive]);

  // Metodo.
  function handleActivePage(pageName) {
    setPageActive(pageName);
  }

  // Renderizado.
  return (
    <header className="header_container">
      <h1 className="header_title">PayAdmin - DEV</h1>

      {/* Items */}
      <div className="container_items">
        {/* <domain>/#/ */}
        <Link
          className={actualPage === "index" ? "item item_active" : "item"}
          to="/"
          onClick={() => handleActivePage("index")}
        >
          INDEX
        </Link>

        {/* <domain>/#/login */}
        <Link
          className={actualPage === "login" ? "item item_active" : "item"}
          to="login"
          onClick={() => handleActivePage("login")}
        >
          LOGIN
        </Link>

        {/* <domain>/#/caja */}
        <Link
          className={actualPage === "caja" ? "item item_active" : "item"}
          to="caja"
          onClick={() => handleActivePage("caja")}
        >
          CAJA
        </Link>

        {/* <domain>/#/inventario */}
        <Link
          className={actualPage === "inventario" ? "item item_active" : "item"}
          to="inventario"
          onClick={() => handleActivePage("inventario")}
        >
          INVENTARIO
        </Link>

        {/* <domain>/#/ventas */}
        <Link
          className={actualPage === "ventas" ? "item item_active" : "item"}
          to="ventas"
          onClick={() => handleActivePage("ventas")}
        >
          VENTAS
        </Link>

        {/* <domain>/#/empleados */}
        <Link
          className={actualPage === "empleados" ? "item item_active" : "item"}
          to="empleados"
          onClick={() => handleActivePage("empleados")}
        >
          EMPLEADOS
        </Link>
      </div>

      <h2 className="version_badge">v{appInfo?.appVersion || "😵"}</h2>
    </header>
  );
};

// PropTypes.
DevNavigation.propTypes = {
  appInfo: PropTypes.object.isRequired,
  setActualPage: PropTypes.func.isRequired,
  siteInfo: PropTypes.object.isRequired,
};

// Consultas a la store de redux.
const mapStateToProps = (state) => {
  return {
    siteInfo: state.page || "",
    appInfo: state.app || {},
  };
};

const mapDispatchToProps = {
  // Actions.
  setActualPage,
};

// Exportación del componente: <Header />.
export default connect(mapStateToProps, mapDispatchToProps)(DevNavigation);
