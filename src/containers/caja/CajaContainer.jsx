// Dependencias.
import * as React from "react";

// Importación de componentes.
import CajaPage from "~pages/caja/CajaPage.jsx";

// Definición del contenedor.
const CajaContainer = (props) => {
  return (
    <div>
      <h1>Caja - Container</h1>
      <CajaPage />
    </div>
  );
};

// Exportación del contenedor.
export default CajaContainer;
