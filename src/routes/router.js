// Dependencias.
import React from "react";
import { Route, Routes } from "react-router-dom";
import { PublicUrls, PrivateUrls } from "../models/Navigation.js";
import Cargando from "../components/Cargando/Cargando.jsx";

// Componentes.
import Auth from "../components/Auth/Auth.jsx";
import AlertsContainer from "../components/Alerts/AlertsContainer.jsx";

// Importación de contenedores.
import IndexContainer from "../containers/index/IndexContainer.jsx";
import LoginContainer from "../containers/login/LoginContainer.jsx";
import RegistroContainer from "../containers/registro/RegistroContainer.jsx";
import NotFoundContainer from "../containers/notFound/NotFoundContainer.jsx";
import PasswordContainer from "../containers/password/PasswordContainer.jsx";

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
      <Route path={PublicUrls.index} element={<IndexContainer />} index />
      <Route
        exact
        path={PublicUrls.login}
        element={
          <AlertsContainer>
            <LoginContainer />
          </AlertsContainer>
        }
      />
      <Route exact path={PublicUrls.registro} element={<RegistroContainer />} />
      <Route path={PublicUrls.notFound} element={<NotFoundContainer />} />
      <Route path={PublicUrls.forgotPassword} element={<PasswordContainer />} />

      {/* Rutas protegidas; El usuario debe iniciar sesión para acceder. */}
      {/* Vista de Caja. */}
      <Route
        exact
        path={PrivateUrls.caja}
        element={
          <Auth>
            <AlertsContainer>
              <CajaContainer />
            </AlertsContainer>
          </Auth>
        }
      />

      {/* Vista de Metodo de pago. */}
      <Route
        exact
        path={PrivateUrls.pago}
        element={
          <Auth>
            <AlertsContainer>
              <PagoContainer />
            </AlertsContainer>
          </Auth>
        }
      />

      {/* Vista de Confirmación del pago. */}
      <Route
        exact
        path={PrivateUrls.confirmacion}
        element={
          <Auth>
            <AlertsContainer>
              <ConfirmacionContainer />
            </AlertsContainer>
          </Auth>
        }
      />

      {/* Vista de Empleados. */}
      <Route
        exact
        path={PrivateUrls.empleados}
        element={
          <Auth>
            <AlertsContainer>
              <EmpleadosContainer />
            </AlertsContainer>
          </Auth>
        }
      />

      {/* Vista de Inventario. */}
      <Route
        exact
        path={PrivateUrls.inventario}
        element={
          <Auth>
            <AlertsContainer>
              <InventarioContainer />
            </AlertsContainer>
          </Auth>
        }
      />

      {/* Vista de Ventas. */}
      <Route
        exact
        path={PrivateUrls.ventas}
        element={
          <Auth>
            <AlertsContainer>
              <VentasContainer />
            </AlertsContainer>
          </Auth>
        }
      />

      {/* Vista de Estadisticas. */}
      <Route
        exact
        path={PrivateUrls.estadisticas}
        element={
          <Auth>
            <AlertsContainer>
              <StatsContainer />
            </AlertsContainer>
          </Auth>
        }
      />

      {/* Vista de Mi cuenta. */}
      <Route
        exact
        path={PrivateUrls.cuenta}
        element={
          <Auth>
            <AlertsContainer>
              <AccountContainer />
            </AlertsContainer>
          </Auth>
        }
      />
    </Routes>
  );
};

// Exportación
export default Router;
