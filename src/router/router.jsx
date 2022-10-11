// Dependencias.
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { publicURL, privateURL } from "../schemas/Navigation.js";
import PropTypes from "prop-types";

// Componentes.
import Layout from "../components/Layout/Layout.jsx";

// Contenedores.
import IndexContainer from "../containers/index/IndexContainer.jsx";
import LoginContainer from "../containers/login/LoginContainer.jsx";

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
          <Layout>
            <IndexContainer />
          </Layout>
        }
      />

      <Route
        exact
        path={publicURL.login}
        element={
          <Layout>
            <LoginContainer />
          </Layout>
        }
      />

      {/* Rutas privadas. */}
    </Routes>
  );
};

// PropTypes.
Router.propTypes = {};

// Exportación.
export default Router;
