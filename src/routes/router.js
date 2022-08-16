// Dependencias.
import * as React from "react";
import { Route, Routes } from "react-router-dom";

// Componentes.
import Auth from "../components/Auth/Auth.jsx";

// Importación de contenedores.
import IndexContainer from "~containers/index/IndexContainer.jsx";
import CajaContainer from "~containers/caja/CajaContainer.jsx";
import EmpleadosContainer from "~containers/empleados/EmpleadosContainer.jsx";
import LoginContainer from "~containers/login/LoginContainer.jsx";
import InventarioContainer from "~containers/inventario/InventarioContainer.jsx";
import VentasContainer from "~containers/ventas/VentasContainer.jsx";
import RegistroContainer from "~containers/registro/RegistroContainer.jsx";
import NotFoundContainer from "~containers/notFound/NotFoundContainer.jsx";

// Definición del router.
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexContainer />} index />
      <Route exact path="login" element={<LoginContainer />} />
      <Route exact path="registro" element={<RegistroContainer />} />
      <Route path="*" element={<NotFoundContainer />} />

      {/* Rutas protegidas; El usuario debe iniciar sesión para acceder. */}
      <Route
        exact
        path="caja"
        element={
          <Auth>
            <CajaContainer />
          </Auth>
        }
      />
      <Route
        exact
        path="empleados"
        element={
          <Auth>
            <EmpleadosContainer />
          </Auth>
        }
      />
      <Route
        exact
        path="inventario"
        element={
          <Auth>
            <InventarioContainer />
          </Auth>
        }
      />
      <Route
        exact
        path="ventas"
        element={
          <Auth>
            <VentasContainer />
          </Auth>
        }
      />
    </Routes>
  );
};

// Exportación
export default Router;
