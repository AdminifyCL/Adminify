// Dependencias.
import * as React from "react";
import { Route, Routes } from "react-router-dom";

// Componentes.
import Auth from "../components/Auth/Auth.jsx";

// Importación de contenedores.
import IndexContainer from "../containers/index/IndexContainer.jsx";
import CajaContainer from "../containers/caja/CajaContainer.jsx";
import EmpleadosContainer from "../containers/empleados/EmpleadosContainer.jsx";
import LoginContainer from "../containers/login/LoginContainer.jsx";
import InventarioContainer from "../containers/inventario/InventarioContainer.jsx";
import VentasContainer from "../containers/ventas/VentasContainer.jsx";
import RegistroContainer from "../containers/registro/RegistroContainer.jsx";
import NotFoundContainer from "../containers/notFound/NotFoundContainer.jsx";
import StatsContainer from "../containers/estadisticas/EstadisticasContainer.jsx";
import AccountContainer from "../containers/cuenta/CuentaContainer.jsx";

// Definición del router.
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexContainer />} index />
      <Route exact path="login" element={<LoginContainer />} />
      <Route exact path="registro" element={<RegistroContainer />} />
      <Route path="*" element={<NotFoundContainer />} />

      {/* Rutas protegidas; El usuario debe iniciar sesión para acceder. */}
      {/* Vista de Caja. */}
      <Route
        exact
        path="caja"
        element={
          <Auth>
            <CajaContainer />
          </Auth>
        }
      />

      {/* Vista de Empleados. */}
      <Route
        exact
        path="empleados"
        element={
          <Auth>
            <EmpleadosContainer />
          </Auth>
        }
      />

      {/* Vista de Inventario. */}
      <Route
        exact
        path="inventario"
        element={
          <Auth>
            <InventarioContainer />
          </Auth>
        }
      />

      {/* Vista de Ventas. */}
      <Route
        exact
        path="ventas"
        element={
          <Auth>
            <VentasContainer />
          </Auth>
        }
      />

      {/* Vista de Estadisticas. */}
      <Route
        exact
        path="estadisticas"
        element={
          <Auth>
            <StatsContainer />
          </Auth>
        }
      />

      {/* Vista de Mi cuenta. */}
      <Route
        exact
        path="cuenta"
        element={
          <Auth>
            <AccountContainer />
          </Auth>
        }
      />
    </Routes>
  );
};

// Exportación
export default Router;
