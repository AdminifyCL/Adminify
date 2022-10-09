// Dependencias.
import React from "react";
import { Route, Routes } from "react-router-dom";
import { PublicUrls, PrivateUrls } from "../models/Navigation.js";
import Cargando from "../components/Cargando/Cargando.jsx";

// Componentes.
import Auth from "../components/Auth/Auth.jsx";
import AlertsContainer from "../components/Alerts/AlertsContainer.jsx";
import LayoutContainer from "../components/Layout/LayoutContainer.jsx";

// Importación de contenedores.
import IndexContainer from "../containers/index/IndexContainer.jsx";
import LoginContainer from "../containers/login/LoginContainer.jsx";
import RegistroContainer from "../containers/registro/RegistroContainer.jsx";
import NotFoundContainer from "../containers/notFound/NotFoundContainer.jsx";
import PasswordContainer from "../containers/password/PasswordContainer.jsx";

import LoadingContainer from "../containers/loading/LoadingContainer.jsx";
import CajaContainer from "../containers/caja/CajaContainer.jsx";
import PagoContainer from "../containers/pago/PagoContainer.jsx";
import ConfirmacionContainer from "../containers/confirmacion/ConfirmacionContainer.jsx";
import EmpleadosContainer from "../containers/empleados/EmpleadosContainer.jsx";
import InventarioContainer from "../containers/inventario/InventarioContainer.jsx";
import VentasContainer from "../containers/ventas/VentasContainer.jsx";
import StatsContainer from "../containers/estadisticas/EstadisticasContainer.jsx";
import AccountContainer from "../containers/cuenta/CuentaContainer.jsx";

// Definición del router.
const Router = () => {
  return (
    <Routes>
      {/* Rutas publicas; No es necesaria una sesión para acceder. */}
      <Route
        path={PublicUrls.index}
        element={
          <LayoutContainer>
            <IndexContainer />
          </LayoutContainer>
        }
        index
      />
      <Route
        exact
        path={PublicUrls.login}
        element={
          <LayoutContainer>
            <LoginContainer />
          </LayoutContainer>
        }
      />
      <Route
        exact
        path={PublicUrls.registro}
        element={
          <LayoutContainer>
            <RegistroContainer />
          </LayoutContainer>
        }
      />
      <Route
        path={PublicUrls.notFound}
        element={
          <LayoutContainer>
            <NotFoundContainer />
          </LayoutContainer>
        }
      />
      <Route
        path={PublicUrls.forgotPassword}
        element={
          <LayoutContainer>
            <PasswordContainer />
          </LayoutContainer>
        }
      />

      {/* Rutas protegidas; El usuario debe iniciar sesión para acceder. */}
      {/* vista de Carga. */}
      <Route
        exact
        path={PrivateUrls.cargando}
        element={
          <Auth>
            <LayoutContainer>
              <LoadingContainer />
            </LayoutContainer>
          </Auth>
        }
      />

      {/* Vista de Caja. */}
      <Route
        exact
        path={PrivateUrls.caja}
        element={
          <Auth>
            <LayoutContainer>
              <CajaContainer />
            </LayoutContainer>
          </Auth>
        }
      />

      {/* Vista de Metodo de pago. */}
      <Route
        exact
        path={PrivateUrls.pago}
        element={
          <Auth>
            <LayoutContainer>
              <PagoContainer />
            </LayoutContainer>
          </Auth>
        }
      />

      {/* Vista de Confirmación del pago. */}
      <Route
        exact
        path={PrivateUrls.confirmacion}
        element={
          <Auth>
            <LayoutContainer>
              <ConfirmacionContainer />
            </LayoutContainer>
          </Auth>
        }
      />

      {/* Vista de Empleados. */}
      <Route
        exact
        path={PrivateUrls.empleados}
        element={
          <Auth>
            <LayoutContainer>
              <EmpleadosContainer />
            </LayoutContainer>
          </Auth>
        }
      />

      {/* Vista de Inventario. */}
      <Route
        exact
        path={PrivateUrls.inventario}
        element={
          <Auth>
            <LayoutContainer>
              <InventarioContainer />
            </LayoutContainer>
          </Auth>
        }
      />

      {/* Vista de Ventas. */}
      <Route
        exact
        path={PrivateUrls.ventas}
        element={
          <Auth>
            <LayoutContainer>
              <VentasContainer />
            </LayoutContainer>
          </Auth>
        }
      />

      {/* Vista de Estadisticas. */}
      <Route
        exact
        path={PrivateUrls.estadisticas}
        element={
          <Auth>
            <LayoutContainer>
              <StatsContainer />
            </LayoutContainer>
          </Auth>
        }
      />

      {/* Vista de Mi cuenta. */}
      <Route
        exact
        path={PrivateUrls.cuenta}
        element={
          <Auth>
            <LayoutContainer>
              <AccountContainer />
            </LayoutContainer>
          </Auth>
        }
      />
    </Routes>
  );
};

// Exportación
export default Router;
