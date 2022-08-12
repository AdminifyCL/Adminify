// Dependencias.
import * as React from "react";
import { Route, Routes } from "react-router-dom";

// Importación de contenedores.
import IndexContainer from "~containers/index/IndexContainer.jsx";
import CajaContainer from "~containers/caja/CajaContainer.jsx";
import EmpleadosContainer from "~containers/empleados/EmpleadosContainer.jsx";
import LoginContainer from "~containers/login/LoginContainer.jsx";
import InventarioContainer from "~containers/inventario/InventarioContainer.jsx";
import VentasContainer from "~containers/ventas/VentasContainer.jsx";
import RegisterContainer from "~containers/registro/RegisterContainer.jsx";
import NotFoundContainer from "~containers/notFound/NotFoundContainer.jsx";

// Definición del router.
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexContainer />} />
      <Route exact path="login" element={<LoginContainer />} />
      <Route exact path="caja" element={<CajaContainer />} />
      <Route exact path="empleados" element={<EmpleadosContainer />} />
      <Route exact path="inventario" element={<InventarioContainer />} />
      <Route exact path="ventas" element={<VentasContainer />} />
      <Route exact path="registro" element={<RegisterContainer />} />
      <Route path="*" element={<NotFoundContainer />} />
    </Routes>
  );
};

// Exportación
export default Router;
