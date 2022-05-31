// Dependencias.
import * as React from "react";
import { Route, Routes } from "react-router-dom";

// Importación de las vistas.
import IndexPage from "~pages/index/IndexPage.jsx";
import EmpleadosPage from "~pages/empleados/EmpleadosPage.jsx";
import InventarioPage from "~pages/inventario/InventarioPage.jsx";
import LoginPage from "~pages/login/LoginPage.jsx";
import VentasPage from "~pages/ventas/VentasPage.jsx";

// Definición del router.
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route exact path="login" element={<LoginPage />} />
      <Route exact path="empleados" element={<EmpleadosPage />} />
      <Route exact path="inventario" element={<InventarioPage />} />
      <Route exact path="ventas" element={<VentasPage />} />
    </Routes>
  );
};

// Exportación
export default Router;
