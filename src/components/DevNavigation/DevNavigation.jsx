// Dependencias.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Importación de estilos.
import "./DevNavigation.scss";

// Importación de componentes.

// Definición del componente: <Header />.
const DevNavigation = (props) => {
  // Estado.
  const [pageActive, setPageActive] = useState("index");

  // Efectos.
  useEffect(() => {
    let pageName = document.location.hash.replace("#", "").replace("/", "");

    // Definición de la ruta activa.
    if (pageName === "") {
      setPageActive("index");
    } else {
      setPageActive(pageName);
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
          className={pageActive === "index" ? "item item_active" : "item"}
          to="/"
          onClick={() => handleActivePage("index")}
        >
          INDEX
        </Link>

        {/* <domain>/#/login */}
        <Link
          className={pageActive === "login" ? "item item_active" : "item"}
          to="login"
          onClick={() => handleActivePage("login")}
        >
          LOGIN
        </Link>

        {/* <domain>/#/caja */}
        <Link
          className={pageActive === "caja" ? "item item_active" : "item"}
          to="caja"
          onClick={() => handleActivePage("caja")}
        >
          CAJA
        </Link>

        {/* <domain>/#/inventario */}
        <Link
          className={pageActive === "inventario" ? "item item_active" : "item"}
          to="inventario"
          onClick={() => handleActivePage("inventario")}
        >
          INVENTARIO
        </Link>

        {/* <domain>/#/ventas */}
        <Link
          className={pageActive === "ventas" ? "item item_active" : "item"}
          to="ventas"
          onClick={() => handleActivePage("ventas")}
        >
          VENTAS
        </Link>

        {/* <domain>/#/empleados */}
        <Link
          className={pageActive === "empleados" ? "item item_active" : "item"}
          to="empleados"
          onClick={() => handleActivePage("empleados")}
        >
          EMPLEADOS
        </Link>
      </div>

      <h2 className="version_badge">vPre-Alpha</h2>
    </header>
  );
};

// Exportación del componente: <Header />.
export default DevNavigation;
