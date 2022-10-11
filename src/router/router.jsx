// Dependencias.
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { publicURL, privateURL } from "../schemas/Navigation.js";
import PropTypes from "prop-types";

// Componentes.
import Layout from "../components/Layout/Layout.jsx";

// Contenedores.
import IndexContainer from "../containers/index/IndexContainer.jsx";
import NotFoundContainer from "../containers/notFound/NotFoundContainer.jsx";

import LoginContainer from "../containers/login/LoginContainer.jsx";
import ContraseñaContainer from "../containers/contraseña/ContraseñaContainer.jsx";
import RegistroContainer from "../containers/registro/RegistroContainer.jsx";

import CargaContainer from "../containers/carga/CargaContainer.jsx";
import CajaContainer from "../containers/caja/CajaContainer.jsx";
import InventarioContainer from "../containers/inventario/InventarioContainer.jsx";
import EmpleadosContainer from "../containers/empleados/EmpleadosContainer.jsx";
import EstadisticasContainer from "../containers/estadisticas/EstadisticasContainer.jsx";
import PagoContainer from "../containers/pago/PagoContainer.jsx";
import VentasContainer from "../containers/ventas/VentasContainer.jsx";
import CuentaContainer from "../containers/cuenta/CuentaContainer.jsx";
import ConfirmacionContainer from "../containers/confirmacion/ConfirmacionContainer.jsx";

// Definición del router.
const Router = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <Routes>
      {/* Rutas publicas. */}
      <Route
        index
        path={publicURL.index}
        element={
          <Layout isPrivate={false}>
            <IndexContainer />
          </Layout>
        }
      />

      <Route
        path={publicURL.notFound}
        element={
          <Layout isPrivate={false}>
            <NotFoundContainer />
          </Layout>
        }
      />

      <Route
        exact
        path={publicURL.login}
        element={
          <Layout isPrivate={false}>
            <LoginContainer />
          </Layout>
        }
      />

      <Route
        exact
        path={publicURL.recuperar}
        element={
          <Layout isPrivate={false}>
            <ContraseñaContainer />
          </Layout>
        }
      />

      <Route
        exact
        path={publicURL.registro}
        element={
          <Layout isPrivate={false}>
            <RegistroContainer />
          </Layout>
        }
      />

      {/* Rutas privadas. */}
      <Route
        exact
        path={privateURL.caja}
        element={
          <Layout isPrivate={true}>
            <CajaContainer />
          </Layout>
        }
      />

      <Route
        exact
        path={privateURL.cargando}
        element={
          <Layout isPrivate={true}>
            <CargaContainer />
          </Layout>
        }
      />
    </Routes>
  );
};

// PropTypes.
Router.propTypes = {};

// Exportación.
export default Router;
