// Dependencias.
import * as React from "react";

// Importación de componentes.
import VentasPage from "~pages/ventas/VentasPage.jsx";

// Definición del contenedor.
const VentasContainer = (props) => {
  return (
    <div>
      <h1>Ventas - container</h1>
      <VentasPage />
    </div>
  );
};

// Exportación del contenedor.
export default VentasContainer;
