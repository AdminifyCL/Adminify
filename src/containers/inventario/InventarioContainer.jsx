// Dependencias.
import * as React from "react";

// Importación de componentes.
import InventarioPage from "~pages/inventario/InventarioPage.jsx";

// Definición del contenedor.
const InventarioContainer = (props) => {
  return (
    <div>
      <h1>Inventario - Container</h1>
      <InventarioPage />
    </div>
  );
};

// Exportación del contenedor.
export default InventarioContainer;
